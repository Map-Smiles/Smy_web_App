const base = process.env.REACT_APP_API_URL

// Health Check
export async function getHealthCheck() {
	try {
		const res = await fetch(`${base}/health-check`)
		const data = res.json()

		console.log(data.message)
	} catch (error) {
		console.log(error)
	}
}

export async function getSpots() {
	try {
		const res = await fetch(`${base}/spots`)
		return res.json()
	} catch (error) {
		console.log(error)
	}
}

export async function getUser() {
	try {
		const res = await fetch(`${base}/users/6060e7e07baca7ea59defe4d`)
		return res.json()
	} catch (error) {
		console.log(error)
	}
}

export async function getUserAccount() {
	try {
		const res = await fetch(`${base}/accounts/6060f6d97baca7ea59defe54`)
		return res.json()
	} catch (error) {
		console.log(error)
	}
}

export async function getAllGoals() {
	try {
		const res = await fetch(`${base}/goals`)
		return res.json()
	} catch (error) {
		console.log(error)
	}
}

export async function getuserPockets() {
	try {
		const res = await fetch(`${base}/pockets`)
		return res.json()
	} catch (error) {
		console.log(error)
	}
}

export async function createPocket(pocket) {
	try {
		const res = await fetch(`${base}/pockets`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(pocket),
		})

		return res.json()
	} catch (error) {
		console.log(error)
	}
}

export async function updatePocket(pocket) {
	try {
		const res = await fetch(`${base}/pockets`, {
			method: 'PUT',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(pocket),
		})

		return res.json()
	} catch (error) {
		console.log(error)
	}
}

export async function updatePocketBalance(update_amount) {
	try {
		const res = await fetch(`${base}/pockets`, {
			method: 'PUT',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ update_amount }),
		})

		return res.json()
	} catch (error) {
		console.log(error)
	}
}

export async function createInteraction(interaction) {
	try {
		const res = await fetch(`${base}/interactions`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(interaction),
		})

		return res.json()
	} catch (error) {
		console.log(error)
	}
}
