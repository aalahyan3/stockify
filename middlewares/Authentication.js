import jwt from 'jsonwebtoken'
import DbClinet from '../database/db.js'
const Authentication = async (req, res, next) =>{
	const token = req.get('Authorization')?.split(' ')[1]
	if (!token)
		return res.status(401).send({
		"success": false,
		"message": "Access denied!"
	})
	try{
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
		const username = decoded.username
		const query = "SELECT * FROM users WHERE username = $1"
		const result = await DbClinet.query(query, [username])
		if (result.rows.length != 1){
			throw new Error("Token is not valid")
		}
		else{
			req.user = {username}
			next()
		}
	}catch(err)
	{
		res.status(400).send(
			{"success": false,
			"message": err.message
			})
	}
}

export default Authentication