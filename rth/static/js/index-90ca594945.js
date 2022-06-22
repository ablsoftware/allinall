'use strict';

(() => {
  const _0x1fe4f1 = CSS["supports"]("width: -moz-fit-content"),
        _0x3a116c = {
    'en-US': {
      'businessLicense': "Business License"
    },
    'zh-CN': {
      'businessLicense': "天气预报"
    },
    'zh-TW': {
      'businessLicense': "天氣預報"
    }
  },
        _0x373aef = (() => {
    if (/^(yue|zh)(-cn|-hans(-[a-z]+)?)?$/i["test"](navigator["language"])) {
      return "zh-CN";
    } else {
      return navigator["language"]["startsWith"]('zh') || navigator["language"]["startsWith"]("yue") ? "zh-TW" : "en-US";
    }
  })(),
        _0x2475b8 = document["getElementById"]("link-list"),
        _0x98c80 = document["getElementById"]("main");

  let _0x857d6d;

  function _0x3e0336() {
    _0x2475b8["style"]["opacity"] = '0';
    setTimeout(function () {
      _0x2475b8["classList"]["add"]("hidden");

      _0x2475b8["style"]["opacity"] = '';
    }, 250);
  }

  function _0x3e52b8() {
    _0x3e0336();

    _0x120292();
  }

  function _0x24224a(_0x1c2a73) {
    const _0x385f2a = [];

    for (const _0x346e97 in _0x1c2a73) {
      (_0x1c2a73[_0x346e97] || _0x1c2a73[_0x346e97] === 0) && _0x385f2a["push"](_0x346e97 + '=' + encodeURIComponent(_0x1c2a73[_0x346e97]));
    }

    return _0x385f2a["join"]('&');
  }

  function _0x120292() {
    if (_0x857d6d) {
      _0x857d6d["style"]["opacity"] = '0';
      setTimeout(() => {
        _0x98c80["classList"]["add"]("show-children");

        document["body"]["removeChild"](_0x857d6d);
        _0x857d6d = null;
      }, 250);
      return true;
    }

    return false;
  }

  function _0x241199(_0x33a866, _0x2d5623) {
    if (!_0x120292()) {
      _0x857d6d = document["createElement"]("div");

      const _0xca8503 = new Image(),
            _0x5b7b1d = document["createElement"]("div");

      _0x857d6d["classList"]["add"]("img", "fade-in");

      _0xca8503["classList"]["add"]("hidden");

      _0xca8503["src"] = _0x33a866;
      _0xca8503["alt"] = _0x2d5623;
      _0xca8503["draggable"] = false;

      _0xca8503["onload"] = function () {
        _0x5b7b1d["classList"]["add"]("hidden");

        this["classList"]["remove"]("hidden");

        _0x857d6d["classList"]["add"]("hidden");

        setTimeout(() => {
          _0x857d6d["classList"]["remove"]("hidden");
        }, 1);
      };

      _0x5b7b1d["innerText"] = "Loading . . .";

      _0x857d6d["setAttribute"]("role", "dialog");

      _0x857d6d["appendChild"](_0xca8503);

      _0x857d6d["appendChild"](_0x5b7b1d);

      document["body"]["appendChild"](_0x857d6d);

      _0x98c80["classList"]["remove"]("show-children");

      document["getElementById"]("app-list")["classList"]["add"]("fade-in");
    }
  }

  function _0x1a787b() {
    if (!_0x2475b8["classList"]["contains"]("hidden")) {
      _0x3e0336();

      return;
    }

    _0x2475b8["classList"]["remove"]("hidden");

    _0x2475b8["focus"]();
  }

  Element["prototype"]["setOnclick"] = function (_0xca76ea) {
    this["onclick"] = _0xca76ea;

    this["onkeydown"] = function (_0x4d06d6) {
      switch (_0x4d06d6["keyCode"]) {
        case 13:
        case 32:
          _0xca76ea(_0x4d06d6);

          break;
      }
    };
  };

  onkeydown = _0x3a8e1f => {
    switch (_0x3a8e1f["key"]["toLowerCase"]()) {
      case "escape":
        _0x3e52b8();

        document["getElementById"]("account")["focus"]();
        return false;

      case "f12":
      case 's':
      case 'u':
      case 'i':
        return false;

      case "tab":
        document["body"]["classList"]["add"]("keyboard");
        break;
    }
  };

  onload = () => {
    document["body"]["classList"]["remove"]("preload");
    setTimeout(() => {
      const _0x2c2df6 = new Image();

      _0x2c2df6["classList"]["add"]("hidden");

      _0x2c2df6["src"] = "" + _0x24224a({
        'idsite': 1,
        'rec': 1,
        'action_name': document["title"],
        'url': location["href"],
        'rand': Date["now"](),
        'urlref': document["referrer"]
      });

      _0x2c2df6["onload"] = function () {
        this["parentElement"]["removeChild"](this);
      };

      document["body"]["appendChild"](_0x2c2df6);
    }, 1);
  };

  document["getElementById"]("main")["onclick"] = _0x3d2260 => {
    _0x3d2260["target"]["nodeName"] !== "IMG" && _0x3e52b8();
  };

  document["getElementById"]("links")["setOnclick"](_0x1a787b);
  document["getElementById"]("business-license")["setOnclick"](() => {
    _0x241199("https://abllo.cn/bingapi.php", _0x3a116c[_0x373aef]["businessLicense"]);
  });

  _0x98c80["classList"]["add"]("show-children");

  
  if (window["location"]["hostname"]) {
    if (!window["location"]["hostname"]["endsWith"]("allinall.abllo.cn")) {
      window["location"]["href"] = "https://allinall.abllo.cn/";
    } else {
      !_0x1fe4f1 && navigator["language"] && window["location"]["hostname"] === "https://abllo.cn/" && !/bot|spider/i["test"](navigator["userAgent"]) && (window["location"]["pathname"] === '/' ? _0x373aef !== document["documentElement"]["lang"] && (window["location"]["href"] = _0x373aef === "en-US" ? "index.html" : _0x373aef["toLowerCase"]()) : history["replaceState"](null, null, '/'));
    }
  }
})();
