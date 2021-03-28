const base = process.env.REACT_APP_API_URL

// Health Check
export async function getHealthCheck() {
	try {
		const req = await fetch(`${base}/health-check`)
		const data = await req.json()

		console.log(data.message)
	} catch (error) {
		console.log(error)
	}
}
