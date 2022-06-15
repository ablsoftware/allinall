var codePrefix = "<script type=\"text/encoded\">\n",
	codeSuffix = "\n</script>\n<script src=\"https://www.yangshangzhen.com/js/encoder-loader.js\"></script>",
	defaultWords = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"],
	letters = "0123456789abcdefghijklmnopqrstuvwxyz".split("")
var words = defaultWords
function decode(text) {
	if (text) {
		var str = "", values = text
		if (text.substring(0, codePrefix.length) == codePrefix) {
			text = text.substring(codePrefix.length)
		}
		if (text.substring(text.length - codeSuffix.length) == codeSuffix) {
			text = text.substring(0, text.length - codeSuffix.length)
		}
		for (var i = 0; i < words.length - 1; i++) {
			text = text.replace(new RegExp(words[i] + "\\s?", "g"), letters[i])
		}
		var values = text.replace(new RegExp(words[words.length - 1] + "\\s?", "g"), " ").trim().split(" ")
		for (var i = 0; i < values.length; i++) {
			str += String.fromCharCode(parseInt(values[i], words.length - 1))
		}
		return str
	} else {
		return ""
	}
}
(function () {
	var scripts = document.getElementsByTagName("script")
	for (var i = 0; i < scripts.length; i++) {
		if (scripts[i].type == "text/encoded") {
			if (scripts[i].src && "fetch" in window) {
				fetch(scripts[i].src).then(function (response) {
					response.text()
				}).then(function (data) {
					(new Function(decode(data)))()
				})
			} else {
				(new Function(decode(scripts[i].innerHTML)))()
			}
		}
	}
})()
