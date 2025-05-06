import { Client } from "pg";

const DbClinet = new Client(
	{
		connectionString: "postgresql://aalahyan:bHQrpUNQUQ6FLkJNMTYT8h100cnrIW2A@dpg-d0cvbfre5dus73aq9040-a.oregon-postgres.render.com/stockify_0fy8",
		ssl: {
			rejectUnauthorized: false
		}
	}
)
await DbClinet.connect()
console.log("[log from db] : Connected to database")
export default DbClinet