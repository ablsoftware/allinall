var correctAnswer = 0,
	correctNum = 0,
	options = document.getElementsByClassName("option"),
	quizProgress = 0,
	scoreInt = 0,
	timeout
function loadQuestion() {
	if (clearTimeout(timeout), quizProgress += 1, 15 >= quizProgress) {
		if (document.getElementById("progress").innerText = 9 >= quizProgress ? "0" + quizProgress : quizProgress, document.getElementById("time").innerText = "9", document.getElementsByClassName("option")[0].innerText = "", document.getElementsByClassName("option")[1].innerText = "", document.getElementsByClassName("option")[2].innerText = "", document.getElementsByClassName("option")[3].innerText = "", quizProgress >= 0 && 5 >= quizProgress) {
			var e = Math.random(),
				t = Math.round(100 * e),
				n = Math.random(),
				o = Math.round(100 * n)
			correctAnswer = t + o,
				document.getElementById("question").innerText = t + "+" + o + "=?"
			var r = Math.random()
			switch (correctNum = 1 + Math.round(4 * r)) {
				case 1:
					document.getElementsByClassName("option")[0].innerText = correctAnswer
					break
				case 2:
					document.getElementsByClassName("option")[1].innerText = correctAnswer
					break
				case 3:
					document.getElementsByClassName("option")[2].innerText = correctAnswer
					break
				case 4:
					document.getElementsByClassName("option")[3].innerText = correctAnswer
			}
			for (i = 1; 5 >= i; i++)if (i != correctNum) {
				var d = Math.random(),
					m = Math.round(200 * d)
				"" == document.getElementsByClassName("option")[0].innerText ? document.getElementsByClassName("option")[0].innerText = m : "" == document.getElementsByClassName("option")[1].innerText ? document.getElementsByClassName("option")[1].innerText = m : "" == document.getElementsByClassName("option")[2].innerText ? document.getElementsByClassName("option")[2].innerText = m : "" == document.getElementsByClassName("option")[3].innerText && (document.getElementsByClassName("option")[3].innerText = m)
			}
		} else if (quizProgress >= 6 && 10 >= quizProgress) {
			var e = Math.random(),
				t = Math.round(100 * e),
				n = Math.random(),
				o = Math.round(10 * n)
			correctAnswer = t * o,
				document.getElementById("question").innerText = t + "*" + o + "=?"
			var r = Math.random()
			switch (correctNum = 1 + Math.round(4 * r)) {
				case 1:
					document.getElementsByClassName("option")[0].innerText = correctAnswer
					break
				case 2:
					document.getElementsByClassName("option")[1].innerText = correctAnswer
					break
				case 3:
					document.getElementsByClassName("option")[2].innerText = correctAnswer
					break
				case 4:
					document.getElementsByClassName("option")[3].innerText = correctAnswer
			}
			for (i = 1; 5 >= i; i++)if (i != correctNum) {
				var d = Math.random(),
					m = Math.round(200 * d)
				"" == document.getElementsByClassName("option")[0].innerText ? document.getElementsByClassName("option")[0].innerText = m : "" == document.getElementsByClassName("option")[1].innerText ? document.getElementsByClassName("option")[1].innerText = m : "" == document.getElementsByClassName("option")[2].innerText ? document.getElementsByClassName("option")[2].innerText = m : "" == document.getElementsByClassName("option")[3].innerText && (document.getElementsByClassName("option")[3].innerText = m)
			}
		} else {
			var e = Math.random(),
				t = Math.round(100 * e),
				n = Math.random(),
				o = Math.round(10 * n),
				u = Math.random(),
				c = Math.round(10 * u)
			correctAnswer = t * o + c,
				document.getElementById("question").innerText = t + "*" + o + "+" + c + "=?"
			var r = Math.random()
			switch (correctNum = 1 + Math.round(4 * r)) {
				case 1:
					document.getElementsByClassName("option")[0].innerText = correctAnswer
					break
				case 2:
					document.getElementsByClassName("option")[1].innerText = correctAnswer
					break
				case 3:
					document.getElementsByClassName("option")[2].innerText = correctAnswer
					break
				case 4:
					document.getElementsByClassName("option")[3].innerText = correctAnswer
			}
			for (i = 1; 5 >= i; i++)if (i != correctNum) {
				var d = Math.random(),
					m = Math.round(200 * d)
				"" == document.getElementsByClassName("option")[0].innerText ? document.getElementsByClassName("option")[0].innerText = m : "" == document.getElementsByClassName("option")[1].innerText ? document.getElementsByClassName("option")[1].innerText = m : "" == document.getElementsByClassName("option")[2].innerText ? document.getElementsByClassName("option")[2].innerText = m : "" == document.getElementsByClassName("option")[3].innerText && (document.getElementsByClassName("option")[3].innerText = m)
			}
		}
		timeout = setTimeout(time, 1e3)
	} else {
		document.getElementsByClassName("final")[0].style.transition = "all 0.5s"
		document.getElementsByClassName("final")[0].style.transform = "scale(1)"
		document.getElementById("score").innerText = parseInt(scoreInt)
		if (scoreInt > document.getElementById("record").innerText * 1) {
			document.getElementById("record").innerText = parseInt(scoreInt)
			localStorage.setItem("record", parseInt(scoreInt))
		}
	}
}
function time() {
	var e = document.getElementById("time").innerText
	e -= 1,
		0 >= e ? loadQuestion() : document.getElementById("time").innerText = e,
		clearTimeout(timeout),
		timeout = setTimeout(time, 1e3)
}
document.getElementById("start").onclick = function () {
	for (var i = 0; i < options.length; i++) {
		options[i].style.display = "block"
	}
	document.getElementById("start").style.display = "none"
	loadQuestion()
}
document.getElementById("restart").onclick = function () {
	location.reload()
}
for (var i = 0; i < options.length; i++) {
	options[i].dataset.index = i + 1
	options[i].onclick = function () {
		this.dataset.index == correctNum && 15 >= quizProgress && (scoreInt += 1 / 15 * 100),
			loadQuestion()
	}
}
if (navigator.language.indexOf("zh") == -1) {
	document.title = "Math Quiz"
	document.getElementById("question").innerText = "Math Quiz"
	document.getElementById("start").innerText = "Start"
	document.getElementById("allWrong").innerText = "All the answers above are wrong"
	document.getElementById("yourScore").innerText = "Your final score is"
	document.getElementById("recordLabel").innerText = "Record: "
	document.getElementById("restart").innerText = "Restart"
}
document.getElementById("record").innerText = localStorage.getItem("record") || 0
