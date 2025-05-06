import DbClinet from "../database/db.js"

const  getStock = async (req, res) => {
	const page = req.query.page || 1
	if (page <= 0){
		return res.status(400).send({"success": false, "message": "page must be greater than 0"})
	}
	const limit = 10
	const offset = (page - 1) * limit

	try{
		const result = await DbClinet.query("SELECT * FROM stock LIMIT $1 OFFSET $2", [limit, offset])
		res.status(200).send(
			{
				"success": true,
				"page": page,
				"data": result.rows
			}
		)
	}catch (err){
		res.status(500).send({"success": false, "message": err.message})
	}
}

export default getStock