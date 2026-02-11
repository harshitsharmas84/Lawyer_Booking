-- AlterTable
ALTER TABLE "lawyers" ADD COLUMN     "languages" TEXT[] DEFAULT ARRAY[]::TEXT[];
