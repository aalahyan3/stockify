import { Result } from "pg";
import DbClinet from "../database/db.js";

const getAllUsers = async (req, res) =>
{
	try{
		if (!req.user ||  req.user.role !== 'admin') throw new Error("Action is not permetted")
		const page = parseInt(req.body.page) || 1
		if (isNaN(page)) throw new Error("page must be number")
		if (page <= 0) throw new Error("page must be strcit positive")
		const offset = (page - 1) * 10
		const result = await DbClinet.query("SELECT username, email, role FROM users WHERE username != $3  LIMIT $1 OFFSET $2 ", [10, offset, req.user.username])
		return res.status(200).send({
			"success": true,
			"totalusers": result.rowCount,
			"page": page,
			"users": result.rows
	})
	}catch(err)
	{
		console.error("error from getAllUsers:", err);
		return res.status(400).send({"success": false, "message": err.message || "error while fetching users"})
	}
}
export default getAllUsers;