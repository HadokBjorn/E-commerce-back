import express from 'express';
import cors from 'cors';
import router from './routes/index.routes.js'



const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(Router)

// eslint-disable-next-line no-undef


//Blocos de código do projeto

app.listen(PORT, () => console.log(`Server online in port: ${PORT}`));
