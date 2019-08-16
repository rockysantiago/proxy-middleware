import cors from 'cors';
import express from 'express';
import apiProxy from './apiProxy';

const app = express();

app.use(cors());

app.use('/api', apiProxy);

export default app;
