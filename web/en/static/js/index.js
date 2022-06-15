(function () {
	var
		isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent),
		menu = document.getElementById("follow-menu");
	document.getElementsByTagName("select")[0].onchange = function () {
		location.search = "?lang=" + this.value;
	};
	document.getElementById("follow").onclick = function () {
		menu.style.display = document.getElementsByClassName("mask")[0].style.display = "block";
		menu.style.left = (document.getElementsByTagName("header")[0].offsetLeft + document.getElementsByTagName("header")[0].offsetWidth / 2 - menu.offsetWidth / 2) + "px";
		menu.style.top = (document.getElementById("follow").offsetTop + document.getElementById("follow").offsetHeight / 2 - menu.offsetHeight / 2) + "px";
		setTimeout(function () {
			menu.style.opacity = "1";
		}, 25);
	};
	document.getElementsByClassName("mask")[0].onclick = function () {
		menu.style.opacity = "0";
		setTimeout(function () {
			document.getElementsByClassName("mask")[0].style.display = menu.style.opacity = menu.style.display = "";
		}, 250);
	};
	// if (isMobile) {
	// 	document.getElementById("alipay").href = "https://qr.alipay.com/FKX04965KXP0C8G3MUVK28";
	// }
	history.replaceState(null, null, location.pathname);
	if (window.queueMicrotask) {
		queueMicrotask(console.log.bind(console, "%c\u6b22\u8fce\u5149\u4e34\u8d75\u6ecf\u57ce\u7684\u4e2a\u4eba\u7f51\u7ad9", [
			"background-color: #4c73be",
			"border-radius: 10px",
			"color: white",
			"font-family: sans-serif",
			"font-size: 16px",
			"line-height: 1.5",
			"padding: 5px 10px",
			"white-space: nowrap"
		].join("; ") + ";"));
	}
})();
