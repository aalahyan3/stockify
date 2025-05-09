import DbClinet from "../database/db.js";



const createStock = async (req, res) =>{
	console.log(req.user);
	if (! req.user.role === "admin"){
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