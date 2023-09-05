const generateRandomNum = () => {
	let min = 0
	let max = 200
	let randomNum = Math.floor(Math.random() * (max - min)) + min
	return randomNum
}

const fetchAdvice = async () => {
	// Generates a random number between 1 & 200.  The API doesn't allow IDs much over 200 so I chose 200
	const idNum = generateRandomNum()

	const response = await fetch(`https://api.adviceslip.com/advice/${idNum}`)
	if (response.ok) {
		const adviceObject = await response.json()
		const { id, advice } = adviceObject.slip
		return { id, advice }
	} else {
		throw new Error("An error occured while fetching data")
	}
}

let renderAdvice = () => {
	fetchAdvice()
		.then((data) => {
			const adviceTitle = document.querySelector("#advice-title")
			const adviceStatement = document.querySelector("#advice-statement")

			adviceTitle.textContent = `Advice #${data.id}`
			adviceStatement.textContent = `"${data.advice}"`
		})
		.catch((err) => {
			console.log(err)
		})
}

renderAdvice()

//Immediately Invoked Function Exprfession - Render on icon click
;(function renderAdviceListener() {
	const generateIcon = document.querySelector("#generate-advice-icon")
	generateIcon.addEventListener("click", (e) => {
		e.preventDefault()

		renderAdvice()
	})
})()
