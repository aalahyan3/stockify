import DbClinet from "../database/db.js"

const  getStock = async (req, res) => {
	const { rows } = await DbClinet.query("SELECT * FROM stock")
	if (rows.length === 0) {
		return res.status(404).send("stock is empty")
	}
	res.send(rows)
}

export default getStock