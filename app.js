!function(t) {
    function e(o) {
        if (n[o])
            return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, e),
        r.l = !0,
        r.exports
    }
    var n = {};
    e.m = t,
    e.c = n,
    e.d = function(t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }
    ,
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 0)
}([function(t, e, n) {
    t.exports = n(1)
}
, function(t, e, n) {
    "use strict";
    function o(t) {
        if (!a && !c) {
            var e = (0,
            i.default)(t.target.closest(".project"));
            e.hasClass("project--next") && (a = !0,
            e.removeClass("project--next").addClass("project--on"),
            (0,
            i.default)(e[0].nextElementSibling).addClass("project--next"),
            e.one("transitionend", function() {
                a = !1
            }, !0))
        }
    }
    function r(t) {
        if (!c && !a) {
            var e = (0,
            i.default)(t.target.closest(".project"));
            e.hasClass("project--on") && (t.stopPropagation(),
            c = !0,
            e.removeClass("project--on").addClass("project--next"),
            (0,
            i.default)(e[0].nextElementSibling).removeClass("project--next"),
            e.one("transitionend", function() {
                c = !1
            }, !0))
        }
    }
    var s = n(2)
      , i = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(s);
    "undefined" == typeof console && (console = {
        log: function() {},
        error: function() {}
    }),
    window.log = Function.prototype.bind.call(console.log, console);
    var a = !1
      , c = !1;
    (0,
    i.default)(".project").on("touchstart", o).on("mouseenter", o),
    (0,
    i.default)(".project__title").on("touchstart", r).on("mouseenter", r)
}
, function(t, e, n) {
    "use strict";
    var o, r, s, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    /*!
 * dusk v1.0.1
 * A feathery, alacritous DOM abstraction, partly based on PlainJS
 * https://github.com/mjsarfatti/dusk#readme
 * MIT License
 * by Manuele J Sarfatti <mjsarfatti@gmail.com>
 * @preserve
 */
    !function(n, i) {
        r = [t, e],
        o = i,
        void 0 !== (s = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = s)
    }(0, function(t, e) {
        function n(t, e) {
            var n = e.length;
            for (n; n--; t.unshift(e[n]))
                ;
        }
        function o(t, e) {
            t.classList ? t.classList.add(e) : new RegExp("\\b" + e + "\\b").test(t.className) || (t.className += " " + e)
        }
        function r(t, e) {
            t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("\\b" + e + "\\b","g"), "")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : i(t)
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : void 0 === t ? "undefined" : i(t)
        }
        ;
        !function(t) {
            t.matches = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.msMatchesSelector || function(t) {
                for (var e = this, n = (e.parentNode || e.document).querySelectorAll(t), o = -1; n[++o] && n[o] !== e; )
                    ;
                return !!n[o]
            }
        }(window.Element.prototype),
        function(t) {
            t.closest = t.closest || function(t) {
                for (var e = this; e.matches && !e.matches(t); )
                    e = e.parentNode;
                return e.matches ? e : null
            }
        }(window.Element.prototype);
        var a = function(t, e) {
            return t && t.dusked ? t : new c(t,e)
        };
        a.fn = [],
        a.fn.dusked = 1;
        var c = function(t, e) {
            var o = void 0
              , r = void 0
              , i = void 0;
            if ("string" == typeof t) {
                if (i = e && e !== document ? a(e)[0] : document,
                void 0 === i)
                    return this;
                if (/^(#?[\w-]+|\.[\w-.]+)$/.test(t))
                    switch (t.charAt(0)) {
                    case "#":
                        return r = document.getElementById(t.substr(1)),
                        null !== r && (this[0] = r,
                        this.length = 1),
                        this;
                    case ".":
                        return o = t.substr(1).replace(/\./g, " "),
                        r = i.getElementsByClassName(o),
                        n(this, r),
                        this;
                    default:
                        return r = i.getElementsByTagName(t),
                        n(this, r),
                        this
                    }
                else if ("" !== t)
                    return r = i.querySelectorAll(t),
                    n(this, r),
                    this;
                return this
            }
            return "object" === (void 0 === t ? "undefined" : s(t)) ? (t && t.addEventListener ? this.push(t) : (NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t)) && n(this, t),
            this) : this
        };
        c.prototype = a.fn,
        a.DOMReady = function(t) {
            function e() {
                document.removeEventListener("DOMContentLoaded", e),
                window.removeEventListener("load", e),
                t()
            }
            "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(t) : (document.addEventListener("DOMContentLoaded", e),
            window.addEventListener("load", e))
        }
        ,
        a.fn.hasClass = function(t) {
            return !!this.length && (this[0].classList ? this[0].classList.contains(t) : new RegExp("\\b" + t + "\\b").test(this[0].className))
        }
        ,
        a.fn.addClass = function(t) {
            for (var e = this.length, n = 0; n < e; n++)
                o(this[n], t);
            return this
        }
        ,
        a.fn.removeClass = function(t) {
            for (var e = this.length, n = 0; n < e; n++)
                r(this[n], t);
            return this
        }
        ,
        a.fn.toggleClass = function(t, e) {
            for (var n = this.length, s = 0; s < n; s++)
                e ? o(this[s], t) : r(this[s], t);
            return this
        }
        ;
        var l = ["webkit", "moz", "MS", "o", ""];
        a.fn.on = function(t, e) {
            for (var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2], o = this.length, r = 0; r < o; r++)
                if (n)
                    for (var s = 0; s < l.length; s++)
                        l[s] || (t = t.toLowerCase()),
                        this[r].addEventListener(l[s] + t, e);
                else
                    this[r].addEventListener(t, e);
            return this
        }
        ,
        a.fn.off = function(t, e) {
            for (var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2], o = this.length, r = 0; r < o; r++)
                if (n)
                    for (var s = 0; s < l.length; s++)
                        l[s] || (t = t.toLowerCase()),
                        this[r].removeEventListener(l[s] + t, e);
                else
                    this[r].removeEventListener(t, e);
            return this
        }
        ,
        a.fn.one = function(t, e) {
            for (var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2], o = function t(n) {
                return n.target.removeEventListener(n.type, t),
                e(n)
            }, r = this.length, s = 0; s < r; s++)
                if (n)
                    for (var i = 0; i < l.length; i++)
                        l[i] || (t = t.toLowerCase()),
                        this[s].addEventListener(l[i] + t, o);
                else
                    this[s].addEventListener(t, o);
            return this
        }
        ,
        e.default = a,
        t.exports = e.default
    })
}
]);
