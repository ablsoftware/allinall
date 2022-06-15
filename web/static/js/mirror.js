var $_GET = (function () {
	var json = {};
	if (location.search) {
		var parameters = location.search.replace("?", "").split("&");
		for (var i = 0; i < parameters.length; i++) {
			var split = parameters[i].split("=");
			json[split[0]] = decodeURIComponent(split[1]);
		}
	}
	return json;
})();
document.getElementById("url").onkeydown = function (evt) {
	if (this.value && evt.keyCode == 13) {
		document.getElementById("visit").click();
	}
}
document.getElementById("visit").onclick = function () {
	var url = document.getElementById("url").value;
	if (url.substring(0, 4) != "http") {
		url = "https://" + url;
	} else if (url.substring(0, 5) != "https") {
		url = "https" + url.substring(4);
	}
	document.getElementById("url").value = url;
	document.getElementsByTagName("iframe")[0].src = url;
	history.replaceState(null, "", location.pathname + "?url=" + encodeURIComponent(url));
};
document.getElementById("shortsight").onclick = function () {
	document.getElementsByTagName("iframe")[0].classList.add("shortsight");
	this.style.opacity = "0";
	setTimeout(function () {
		this.classList.add("hidden");
	}, 250);
};
(function () {
	var bookmarks = document.getElementById("bookmarks").getElementsByTagName("a");
	for (var i = 0; i < bookmarks.length; i++) {
		bookmarks[i].onclick = function () {
			document.getElementById("url").value = this.href;
			document.getElementById("visit").click();
			return false;
		};
	}
})();
if ($_GET["url"]) {
	document.getElementById("url").value = $_GET["url"];
	document.getElementById("visit").click();
} else if (self != top) {
	document.getElementById("url").value = "https://baike.baidu.com/item/%E4%BF%84%E7%BD%97%E6%96%AF%E5%A5%97%E5%A8%83/17215";
	document.getElementById("visit").click();
}
