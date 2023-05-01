import { db } from "../database/database.connections.js"

export async function productAdd(req, res) {
    const { name, value } = req.body;
    const { userId } = res.locals.session;

    try {
        const product = {
            name,
            value,
            status: "inCart",
            userId
        };

        await db.collection("shopping").insertOne(product);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message)
    }
}