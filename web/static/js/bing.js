function ajaxGet(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200 && xhr.responseText) {
			callback && callback(xhr.responseText);
		}
	};
	xhr.open("GET", url);
	xhr.send();
}
onkeydown = function (evt) {
	if (evt.keyCode == 83) {
		document.getElementById("footer").click();
		return false;
	}
};
ajaxGet("https://retiehe.com/cache/bing.json", function (data) {
	if (data) {
		document.getElementById("footer").innerText = JSON.parse(data).images[0].copyright;
	}
});
