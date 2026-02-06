import { createApp } from '../src/app.js';

// Initialize the app using the factory function
const app = createApp();

// Vercel turns this into a Serverless Function automatically
export default app;
