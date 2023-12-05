
fetch("/data.json")
.then(res => res.json())
.then(data => populateSummary(data))


function populateSummary(data) {
	for (let i = 0; i < data.length; i++) {
		const title = document.getElementById(`item-title-${i+1}`);
		title.textContent = data[i].category;

		const score = document.getElementById(`item-score-${i+1}`);
		score.textContent = data[i].score;

		/**
		 * the icon won't be loaded dynamically for customization resons
		 * you are less likely to change an icon than its appearence
		 */ 
	}
}

