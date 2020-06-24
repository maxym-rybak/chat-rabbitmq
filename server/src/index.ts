import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()

const prisma = new PrismaClient()

async function getUsers() {
	const users = await prisma.user.findMany({
		include: {
			chat: true,
		},
	})
	return users
}

app.use("/", async (req, res) => {
	const users = await getUsers()
})

app.listen(5000, (err, res) => {
	console.log(err)
	console.log(res)
})
