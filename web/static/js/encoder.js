function encode(text) {
	try {
		var encoded = ""
		for (var i = 0; i < text.length; i++) {
			var charCode = text.charCodeAt(i).toString(words.length - 1)
			for (var j = 0; j < words.length - 1; j++) {
				charCode = charCode.replace(new RegExp(letters[j], "g"), words[j] + " ")
			}
			encoded += charCode
			if (text.length <= 1 || i < text.length - 1) {
				encoded += words[words.length - 1] + " "
			}
		}
		encoded = encoded.trim()
		if (words == defaultWords && new RegExp("(const|let|var)\s|(\"|\\\))(\n|;|$)").test(text)) {
			encoded = codePrefix + encoded + codeSuffix
		}
		return encoded
	} catch (err) {
		console.error(err)
	}
}
onhashchange = onload = function () {
	var hash = decodeURIComponent(location.hash.substring(1)).split(",")
	if (hash.toString() == defaultWords.toString()) {
		location.hash = ""
	} else if (hash.length > 1) {
		words = hash
	} else {
		words = defaultWords
	}
}
document.getElementById("encode").onclick = function () {
	document.getElementsByTagName("textarea")[0].value = encode(document.getElementsByTagName("textarea")[0].value)
}
document.getElementById("decode").onclick = function () {
	document.getElementsByTagName("textarea")[0].value = decode(document.getElementsByTagName("textarea")[0].value)
}
document.getElementById("settings").onclick = function () {
	var newWords = prompt("请输入用于编码和解码的汉字词语，不超过37个，不少于3个，不能重复，用空格分隔。", words.join(" "))
	if (newWords) {
		newWords = newWords.replace(/\s+/g, " ")
		if (newWords.indexOf(" ") != -1) {
			words = newWords.split(" ")
		} else {
			words = newWords.split("")
		}
		if (decode(encode("test")) == "test") {
			location.hash = words
		} else {
			alert("词语不符合规范。")
			words = defaultWords
			location.hash = ""
		}
	} else if (newWords === "") {
		location.hash = ""
	}
}
document.getElementById("clear").onclick = function () {
	document.getElementsByTagName("textarea")[0].value = ""
}
