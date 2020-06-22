import express from "express"
import { Sequelize } from "sequelize"

const app = express()

app.use("/", (req, res) => {
	return res.status(200).json({ greeting: "hello" })
})

app.listen(5000, (err, res) => {
	console.log(err)
	console.log(res)
})

const sequelize = new Sequelize("db", "user", "pass", {
	host: "postgres",
	dialect: "postgres",
})

async function testDb() {
	try {
		await sequelize.authenticate()
		console.log("Connection has been established successfully.")
	} catch (error) {
		console.error("Unable to connect to the database:", error)
	}
}

testDb()
