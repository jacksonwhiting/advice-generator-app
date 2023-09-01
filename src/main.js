const fetchAdvice = async () => {
	const response = await fetch("https://api.adviceslip.com/advice")
	if (response.ok) {
		const adviceObject = await response.json()
		return adviceObject
	} else {
		throw new Error("An error occured while fetching data")
	}
}

let renderAdvice = () => {
	fetchAdvice()
		.then((data) => {
			const adviceTitle = document.querySelector("#advice-title")
			const adviceStatement = document.querySelector("#advice-statement")

			adviceTitle.textContent = `Advice #${data.slip.id}`
			adviceStatement.textContent = `"${data.slip.advice}"`
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

		fetchAdvice()
			.then((data) => {
				const adviceTitle = document.querySelector("#advice-title")
				const adviceStatement = document.querySelector("#advice-statement")

				adviceTitle.textContent = `Advice #${data.slip.id}`
				adviceStatement.textContent = `"${data.slip.advice}"`
			})
			.catch((err) => {
				console.log(err)
			})
	})
})()
