import ampq from "amqplib"

async function connect() {
	try {
		const connection = await ampq.connect("amqp://rabbitmq:5672")
		const channel = await connection.createChannel()
		await channel.assertQueue("jobs")
		channel.consume("jobs", (message) => {
			if (message) {
				const input = JSON.parse(message.content.toString())
			}
		})
	} catch (ex) {}
}
connect()
