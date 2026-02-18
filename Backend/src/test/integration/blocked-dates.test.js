
import request from 'supertest';
import { createApp } from '../../app.js';
import { PrismaClient } from '@prisma/client';
import { generateAccessToken } from '../../utils/crypto.js';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const prisma = new PrismaClient();
const app = createApp();

describe('Blocked Dates Integration', () => {
    let user;
    let lawyer;
    let token;
    let createdPeriodId;

    beforeAll(async () => {
        // cleanup
        await prisma.blockedPeriod.deleteMany();

        // Create unique email
        const email = `test.lawyer.${Date.now()}@example.com`;

        user = await prisma.user.create({
            data: {
                firstName: 'Test',
                lastName: 'Lawyer',
                email,
                password: 'password123',
                role: 'LAWYER',
                isEmailVerified: true,
                isActive: true,
            }
        });

        lawyer = await prisma.lawyer.create({
            data: {
                userId: user.id,
                slug: `test-lawyer-${Date.now()}`,
                isAvailable: true,
                availability: {}, // Empty availability
                experience: 5,
                hourlyRate: 100,
                consultationFee: 50,
                city: 'Test City',
                barCouncilId: `MAH/${Date.now()}/${Math.floor(Math.random() * 1000)}`, // Unique ID
                barCouncilState: 'Maharashtra',
                enrollmentYear: 2015,
                verificationStatus: 'VERIFIED', // Ensure verified
            }
        });

        // Generate Token using utility
        token = generateAccessToken({
            userId: user.id,
            email: user.email,
            role: user.role
        });
    });

    afterAll(async () => {
        // Cleanup
        if (createdPeriodId) {
            await prisma.blockedPeriod.deleteMany({ where: { id: createdPeriodId } });
        }
        if (lawyer) await prisma.lawyer.delete({ where: { id: lawyer.id } });
        if (user) await prisma.user.delete({ where: { id: user.id } });
        await prisma.$disconnect();
    });

    it('should add a blocked date period', async () => {
        const start = new Date();
        start.setDate(start.getDate() + 1); // Tomorrow
        const end = new Date(start);
        end.setDate(end.getDate() + 2); // 2 days later

        const res = await request(app)
            .post('/api/v1/lawyers/blocked-dates')
            .set('Authorization', `Bearer ${token}`)
            .send({
                startDate: start.toISOString(),
                endDate: end.toISOString(),
                reason: 'Vacation'
            });

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty('id');
        expect(res.body.data.reason).toBe('Vacation');

        createdPeriodId = res.body.data.id;
    });

    it('should list blocked periods in profile (GET /lawyers/profile)', async () => {
        const res = await request(app)
            .get('/api/v1/lawyers/profile') // Use Lawyer Profile endpoint clearly
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);

        // Check flattened structure from blockedPeriods included in lawyers/routes.js
        const lawyerProfile = res.body.data;
        expect(lawyerProfile).toBeDefined();

        // Verify blockedPeriods exist
        expect(lawyerProfile.blockedPeriods).toBeInstanceOf(Array);
        expect(lawyerProfile.blockedPeriods.length).toBeGreaterThan(0);

        const period = lawyerProfile.blockedPeriods.find(p => p.id === createdPeriodId);
        expect(period).toBeDefined();
        expect(period.reason).toBe('Vacation');
    });

    it('should remove a blocked date period', async () => {
        const res = await request(app)
            .delete(`/api/v1/lawyers/blocked-dates/${createdPeriodId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);

        // Verify it is gone
        const check = await prisma.blockedPeriod.findUnique({ where: { id: createdPeriodId } });
        expect(check).toBeNull();
    });
});
