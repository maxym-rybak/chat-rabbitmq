import ampq from "amqplib"

async function consumer() {
	try {
		const connection = await ampq.connect("amqp://rabbitmq:5672")
		const channel = await connection.createChannel()
		await channel.assertQueue("jobs")
		channel.consume("jobs", (message) => {
			if (message) {
				console.log(message.content)
			}
		})
	} catch (ex) {}
}

async function publisher(msg: Object) {
	try {
		const connection = await ampq.connect("amqp://localhost:5672")
		const channel = await connection.createChannel()
		await channel.assertQueue("jobs")
		channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
		console.log(`Job sent successfully ${msg}`)
	} catch (ex) {
		console.error(ex)
	}
}
