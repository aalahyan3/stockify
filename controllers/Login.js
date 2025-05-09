import jwt from 'jsonwebtoken'
import DbClinet from '../database/db.js'
import bcrypt from 'bcrypt'
import { generateToken } from './SignUp.js'
const Login = async (req, res) =>{
	if (!req || !req.body){
		return res.status(400).send(
			{
				"success": false,
				"message": "please fill in all fields"
			}
		)
	}
	const {username, password} = req.body

	if (!username || !password){
		return res.status(400).send(
			{
				"success": false,
				"message": "please fill in all fields"
			}
		)
	}
	const query = "SELECT * FROM users WHERE username = $1"
	try{
		const DbRes = await DbClinet.query(query, [username])
		if (DbRes.rows.length != 1) { throw new Error("Invalid username or password") }
		const passwordComp = await bcrypt.compare(password, DbRes.rows[0].password)
		if (!passwordComp) {throw new Error("Password is incorrect")}
		const token = generateToken(DbRes.rows[0].id, DbRes.rows[0].username)
		res.setHeader('Authorization', `Bearer ${token}`)
		return res.status(200).send({
			"success": true,
			"message": `welcome ${username}`,
			"token": token
		})


	}catch(err){
		return res.status(400).send(
				{
					"success": false,
					"message": err.message
				}
			)
	}
}

export default Login