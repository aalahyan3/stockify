import DbClinet from "../database/db.js";



const DeleteStock = async (req, res) =>{
	try{
		if (!req.body || Object.keys(req.body).length!= 1) throw new Error("please fill in all fields")
		if (!req.user ||  req.user.role !== 'admin') throw new Error("Action is not permetted")
		const id = Number(req.body.id)
		if (!id || isNaN(id)) throw new Error("only stock `id` is accepted")
		const query = "DELETE FROM stock WHERE id = $1"
		const result = await DbClinet.query(query, [id])
		if (result.rowCount === 0) throw new Error(`No Stock with id: ${id}`)
		return res.status(200).send(
	{
		"success": true,
		"message": `stock ${id} deleted seccefully`
	})
		
		
	}catch(err){
		return res.status(200).send({"success": false, "message": err.message})
	}
}

export default DeleteStock