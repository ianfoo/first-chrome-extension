let page = document.getElementById("buttonDiv");

const kButtonColors = ["#3AA757", "#E8453C", "#F9BB2D", "#4588F1"];
function constructOptions(kButtonColors) {
	for (let color of kButtonColors) {
		let button = document.createElement("button");
		button.style.backgroundColor = color;
		button.addEventListener("click", function() {
			chrome.storage.sync.set({color: color}, function() {
				console.log(`color is ${color}`);
			});
		});
		page.appendChild(button);
	}
}
constructOptions(kButtonColors);
