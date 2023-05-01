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

export async function getProducts(req, res) {
    const { userId } = res.locals.session;

    try {
        let products = await db
            .collection("shopping")
            .find({ userId, status: "inCart" })
            .toArray()
        const resProducts = products.map(product => {
            const { userId, status, ...resProduct } = product;
            return resProduct;
        })
        res.send(resProducts);
    } catch (err) {
        res.status(500).send(err.message)
    }
}