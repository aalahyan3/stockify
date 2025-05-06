import DbClinet from "./db.js"

const STOCK_QUERY = 
	`CREATE TABLE IF NOT EXISTS stock
	(
		id SERIAL PRIMARY KEY,
		product VARCHAR(255) NOT NULL,
		quantity INT NOT NULL,
		price INT NOT NULL,
		category VARCHAR(255),
		stock_date DATE,
		stock_place VARCHAR(255),
		reference VARCHAR(255)
	)
`

DbClinet.query(STOCK_QUERY)
console.log("Stock table created")
process.exit()