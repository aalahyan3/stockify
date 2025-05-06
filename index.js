import express from "express"
import apiRouter from "./routes/api.js";

const app = express()
const PORT = 3030

app.use(express.json())

app.get("/", (req, res) => {
	res.send({
		"options": ["get", "add", "delete"],
		"endpoints": {
			"/api/get": "Get all stocks",
			"/api/create": "Add a stock",
			"/api/delete": "Delete a stock"
		}
	})
})

app.use("/api", apiRouter)
app.listen(PORT, ()=>{
	console.log(`Server is running on port ${PORT}`)})