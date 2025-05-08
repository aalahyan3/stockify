
import DbClinet from "../database/db.js";
import { HashPassword } from "../utils/Hashpassword.js";
import { randomUUID } from "crypto";



const SignUp = async  (req, res) =>{
	if (!req || !req.body){
		return res.status(400).send(
			{"success": false,
			"message": "all data are required (username, password, email)",
			"note": "role will be granted by an admin (by default costumer)"})
	}
	const {username, password, email} = req.body;
	if (!username || !password || !email){
		return res.status(400).send(
			{"success": false,
			"message": "all data are required (username, password, email)",
			"note": "role will be granted by an admin (by default costumer)"})
	}
	const HashedPassword = await HashPassword(password)
	const Id = randomUUID()
	const query = `INSERT INTO users VALUES ($1, $2, $3, $4, $5)`
	try{
		const checker = await DbClinet.query("SELECT * FROM users WHERE username = $1 OR email = $2", [username, email])
		if (checker.rows.length != 0){
			throw new Error("Username or Email Alread Exist")
		}
		await DbClinet.query(query, [Id, username, email, HashedPassword, 'costumer'])
	}catch(err)
	{
		return res.status(400).send(
			{
				"success": false,
				"message": err.message

			})
	}finally{
		return res.send("logged in i will put here the grant acces token later ");
	}
}
export default SignUp
