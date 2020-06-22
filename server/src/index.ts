import express from "express"

const app = express()

app.use("/", (req, res) => {
	return res.status(200).json({ greeting: "hello" })
})

app.listen(5000, (err, res) => {
	console.log(err)
	console.log(res)
})
