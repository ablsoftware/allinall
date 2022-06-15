addEventListener("load", function () {
	setTimeout(function () {
		(function (i, s, o, g, r, a) {
			i["GoogleAnalyticsObject"] = r;
			i[r] = i[r] || function () {
				(i[r].q = i[r].q || []).push(arguments);
			};
			i[r].l = 1 * new Date();
			a = s.createElement(o);
			a.async = 1;
			a.src = g;
			s.body.appendChild(a);
		})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
		ga("create", "UA-109975281-7", "auto");
		ga("send", "pageview");
	}, 1);
	document.body.className = document.body.className.replace("preload", "");
});
