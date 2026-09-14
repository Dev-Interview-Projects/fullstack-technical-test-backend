import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/index.js';
import { config } from './config/config.js';

const app = express();

app.use(
    cors({
        origin: config.frontendUrl,
    })
);
app.use(express.json());
app.use('/api', apiRoutes);

export default app;
