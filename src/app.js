import express from 'express';
import cors from 'cors';
import router from './routes/index.routes.js';
import { PORT } from './database/database.connections.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server online in port: ${PORT}`));
