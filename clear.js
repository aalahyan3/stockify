import DbClinet from "./database/db.js";

await DbClinet.query("INSERT INTO users VALUES(0100, 'admin', 'admin', 'admin', ' ')")