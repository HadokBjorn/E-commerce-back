import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 5000;

app.use(json());
app.use(cors());

// eslint-disable-next-line no-undef


//Blocos de código do projeto

app.listen(PORT, () => print(`Server online in port: ${PORT}`));
