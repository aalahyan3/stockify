import query from "pg/lib/native/query.js";
import DbClinet from "./database/db.js";

try {
	const r = await DbClinet.query("DELETE FROM USERS WHERE username != 'ayoub'")

	console.log("done")
	process.exit()
}
catch(er)
{
	console.log(er)
}