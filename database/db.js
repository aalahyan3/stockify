import { Client } from "pg";

/*
	WARNING:
		here i put my database credentials in the code instead of a .env file
		it's not a good idea to use it in production. but since it's not important
		to me I will leave it here.
*/
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