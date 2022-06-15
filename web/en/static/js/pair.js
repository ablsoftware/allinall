var red = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "rgb(0,255,255)" : "red"
var remaining, selected
function createTable(c, r) {
	var hanziArray = new Array()
	var changeScore = function (score) {
		var currentScore = document.getElementById("Score").innerText * 1
		currentScore += score
		document.getElementById("Score").innerText = currentScore
	}
	var loadHanzi = function (i) {
		var row = Math.round(Math.random() * (r - 1)),
			column = Math.round(Math.random() * (c - 1))
		var box = document.getElementById("hanzi-" + row + "-" + column)
		if (box.innerText == "") {
			if (i >= r * c / 2) i = i - r * c / 2
			if (hanziArray[i] != undefined) box.innerText = hanziArray[i]
			box.style.color = "inherit"
			setTimeout(function () {
				box.style.color = ""
				box.style.transform = "rotateY(180deg)"
			}, 1000)
		} else loadHanzi(i)
	}
	remaining = r * c / 2
	document.getElementById("Score").innerText = "0"
	document.getElementsByTagName("tbody")[0].innerHTML = ""
	for (var row = 0; row < r; row++) {
		var newTr = document.createElement("tr")
		for (var column = 0; column < c; column++) {
			var newDiv = document.createElement("div"),
				newTd = document.createElement("td")
			newDiv.setAttribute("class", "hanzi")
			newDiv.id = "hanzi-" + row + "-" + column
			newDiv.onclick = function () {
				if (this.style.opacity != "0") {
					if (this.style.color == red) this.style.transform = "rotateY(360deg)"
					else this.style.transform = ""
					if (selected == null) {
						selected = this
						this.style.color = "inherit"
					} else if (selected.innerText == this.innerText && selected != this) {
						changeScore(10)
						this.style.opacity = selected.style.opacity = "0"
						this.style.transform = selected.style.transform = "scale(1.5)"
						var thisId = this.id,
							selectedId = selected.id
						setTimeout(function () {
							document.getElementById(thisId).style.display = document.getElementById(selectedId).style.display = "none"
						}, 500)
						selected = null
						remaining -= 1
						if (remaining <= 0) gameOver()
					} else {
						changeScore(-1)
						selected.style.color = red
						var selectedId = selected.id
						setTimeout(function () {
							if (document.getElementById(selectedId) != selected) {
								document.getElementById(selectedId).style.color = ""
								document.getElementById(selectedId).style.transform = "rotateY(180deg)"
							}
						}, 5000)
						selected = this
						this.style.color = "inherit"
					}
				}
			}
			newTd.height = (100 / r) + "%"
			newTd.width = (100 / c) + "%"
			newTd.appendChild(newDiv)
			newTr.appendChild(newTd)
		}
		document.getElementsByTagName("tbody")[0].appendChild(newTr)
	}
	for (var i = 0; i < r * c / 2; i++)hanziArray.push(unescape("%u" + (Math.round(Math.random() * 20901) + 19968).toString(16)))
	for (var i = 0; i < r * c; i++)loadHanzi(i)
}
function gameOver() {
	if (navigator.language.indexOf("zh") == -1) {
		document.getElementsByTagName("h1")[0].innerText = "Game Over"
		document.getElementsByTagName("button")[0].innerText = "Restart"
	} else {
		document.getElementsByTagName("h1")[0].innerText = "游戏结束"
		document.getElementsByTagName("button")[0].innerText = "重新开始"
	}
	document.getElementsByClassName("welcome")[0].style.top = ""
	if (document.getElementById("Score").innerText * 1 > document.getElementById("Record").innerText * 1) {
		document.getElementById("Record").innerText = document.getElementById("Score").innerText
		localStorage.setItem("record", document.getElementById("Score").innerText)
	}
}
document.addEventListener("visibilitychange", function () {
	if (document.hidden && document.getElementsByClassName("welcome")[0].style.top != "") gameOver()
})
document.getElementsByTagName("button")[0].onclick = function () {
	var x = document.getElementById("x").value,
		y = document.getElementById("y").value
	if (x * y % 2 != 0) {
		if (navigator.language.indexOf("zh") == -1) alert("The product of " + x + " multiplied by " + y + " is not even")
		else alert(x + " 乘 " + y + " 的值不是偶数")
	} else {
		document.getElementsByClassName("welcome")[0].style.top = "calc(60px - 100%)"
		createTable(x, y)
	}
}
if (navigator.language.indexOf("zh") == -1) {
	document.title = document.getElementsByTagName("h1")[0].innerText = "Chinese Character Pairing"
	document.getElementById("ScoreLabel").innerText = "Score: "
	document.getElementById("RecordLabel").innerText = "Record: "
	document.getElementsByTagName("p")[0].innerText = "You can get 10 points by clicking on two identical Chinese characters"
	document.getElementsByTagName("button")[0].innerText = "Start"
}
document.getElementById("Record").innerText = localStorage.getItem("record") || 0
