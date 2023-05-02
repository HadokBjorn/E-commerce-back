import { db } from '../database/database.connections.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function signUp(req, res) {
    const { userName, email, password, address } = req.body;

    try {
        const user = await db.collection('users').findOne({ email });
        if (user) return res.status(409).send('E-mail já foi cadastrado!');

        const hash = bcrypt.hashSync(password, 10);

        await db.collection('users').insertOne({ userName, email, address, password: hash });
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection('users').findOne({ email });
        if (!user) return res.status(404).send('E-mail não cadastrado');

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) return res.status(401).send('Senha incorreta');

        const token = uuid();

        await db.collection('sessions').deleteOne({ userId: user._id });
        await db.collection('sessions').insertOne({ token, userId: user._id });
        res.send({ token, userName: user.userName });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
