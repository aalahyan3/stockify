import DbClinet from "../database/db.js";

const valid_role = async (user) =>{
	const query = 'SELECT role FROM users WHERE username = $1'

	const result = await DbClinet.query(query, [user])

	if (result.rows.length >= 1){
		console.log(result.rows[0].role)
		return result.rows[0].role === "admin"
	}
	return (false)
}

const createStock = async (req, res) =>{
	if (! await valid_role(req.user)){
		return res.status(401).send(
			{
				"success": false,
				"message": "Forbidden"
			}
		)
	}
	if (!req.body || Object.keys(req.body).length === 0) {
		return res.status(400).send({
			"success": false,
			"message": "No data provided"
		})
	}
	const { name, quantity, price, category, stock_place, reference} = req.body
	if (Object.keys(req.body).length > 6 || !name || !quantity || !price || !category || !stock_place || !reference) {
		return res.status(400).send({"sucess": false, "message": "please fill all fields(name, quantity, price, category, stock_date, stock_place, reference)"})
	}
	const stock_date = new Date().toISOString().split("T")[0]
	await DbClinet.query(
		"INSERT INTO stock (product, quantity, price, category, stock_date, stock_place) VALUES ($1, $2, $3, $4, $5, $6)",
		[name, quantity, price, category, stock_date, stock_place]
	)
	res.send({"success": true, "message": "stock created"})
}

export default createStock