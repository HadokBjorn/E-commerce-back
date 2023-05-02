import { ObjectId } from 'mongodb';
import { db } from '../database/database.connections.js';

export async function productCartAdd(req, res) {
	const { name, value } = req.body;
	const { userId } = res.locals.session;

	try {
		const product = {
			name,
			value,
			status: 'inCart',
			userId,
		};

		await db.collection('shopping').insertOne(product);
		res.sendStatus(201);
	} catch (err) {
		res.status(500).send(err.message);
	}
}

export async function getCartProducts(req, res) {
	const { userId } = res.locals.session;

	try {
		let products = await db.collection('shopping').find({ userId, status: 'inCart' }).toArray();
		const resProducts = products.map((product) => {
			const { userId, status, ...resProduct } = product;
			return resProduct;
		});
		res.send(resProducts);
	} catch (err) {
		res.status(500).send(err.message);
	}
}

export async function deleteProduct(req, res) {
	const { id } = req.params;

	try {
		const deleted = await db.collection('shopping').deleteOne({ _id: new ObjectId(id) });

		if (deleted.deletedCount === 0) return res.status(404).send('Esse item não existe!');
		res.send('Item deletado com sucesso!');
	} catch (err) {
		res.status(500).send('tá falhando aqui');
	}
}

export async function buyProduct(req, res) {
	const { userId } = res.locals.session;

	try {
		const boughtProduct = await db
			.collection('shopping')
			.updateMany({ userId, status: 'inCart' }, { $set: { status: 'bought' } });

		if (boughtProduct.matchedCount === 0)
			return res.status(404).send('Não há produtos na sua lista!');
		res.send('Compra realizada com sucesso! Obrigado pela preferência!');
	} catch (err) {
		res.status(500).send(err.message);
	}
}
