/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 2.2.0 Built on 2020-12-07T14:12:49.843Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2020 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2020 yWorks GmbH, http://www.yworks.com
 *               2015-2020 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, willow-systems.com
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */

! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).jspdf = {}) }(this, (function(t) {
    "use strict";
    var e = function() { return "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this }();

    function r() { e.console && "function" == typeof e.console.log && e.console.log.apply(e.console, arguments) }
    var n = { log: r, warn: function(t) { e.console && ("function" == typeof e.console.warn ? e.console.warn.apply(e.console, arguments) : r.call(null, arguments)) }, error: function(t) { e.console && ("function" == typeof e.console.error ? e.console.error.apply(e.console, arguments) : r(t)) } };
    /**
     * @license
     * FileSaver.js
     * A saveAs() FileSaver implementation.
     *
     * By Eli Grey, http://eligrey.com
     *
     * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
     * source  : http://purl.eligrey.com/github/FileSaver.js
     */
    function i(t, e, r) {
        var i = new XMLHttpRequest;
        i.open("GET", t), i.responseType = "blob", i.onload = function() { h(i.response, e, r) }, i.onerror = function() { n.error("could not download file") }, i.send()
    }

    function a(t) {
        var e = new XMLHttpRequest;
        e.open("HEAD", t, !1);
        try { e.send() } catch (t) {}
        return e.status >= 200 && e.status <= 299
    }

    function o(t) {
        try { t.dispatchEvent(new MouseEvent("click")) } catch (r) {
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e)
        }
    }
    var s, u, h = e.saveAs || ("object" != typeof window || window !== e ? function() {} : "download" in HTMLAnchorElement.prototype ? function(t, r, n) {
        var s = e.URL || e.webkitURL,
            u = document.createElement("a");
        r = r || t.name || "download", u.download = r, u.rel = "noopener", "string" == typeof t ? (u.href = t, u.origin !== location.origin ? a(u.href) ? i(t, r, n) : o(u, u.target = "_blank") : o(u)) : (u.href = s.createObjectURL(t), setTimeout((function() { s.revokeObjectURL(u.href) }), 4e4), setTimeout((function() { o(u) }), 0))
    } : "msSaveOrOpenBlob" in navigator ? function(t, e, r) {
        if (e = e || t.name || "download", "string" == typeof t)
            if (a(t)) i(t, e, r);
            else {
                var s = document.createElement("a");
                s.href = t, s.target = "_blank", setTimeout((function() { o(s) }))
            }
        else navigator.msSaveOrOpenBlob(function(t, e) { return void 0 === e ? e = { autoBom: !1 } : "object" != typeof e && (n.warn("Deprecated: Expected third argument to be a object"), e = { autoBom: !e }), e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t }(t, r), e)
    } : function(t, r, n, a) {
        if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), "string" == typeof t) return i(t, r, n);
        var o = "application/octet-stream" === t.type,
            s = /constructor/i.test(e.HTMLElement) || e.safari,
            u = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((u || o && s) && "object" == typeof FileReader) {
            var h = new FileReader;
            h.onloadend = function() {
                var t = h.result;
                t = u ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = t : location = t, a = null
            }, h.readAsDataURL(t)
        } else {
            var c = e.URL || e.webkitURL,
                l = c.createObjectURL(t);
            a ? a.location = l : location.href = l, a = null, setTimeout((function() { c.revokeObjectURL(l) }), 4e4)
        }
    });
    /**
     * A class to parse color values
     * @author Stoyan Stefanov <sstoo@gmail.com>
     * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
     * @license Use it if you like it
     */
    function c(t) {
        var e;
        t = t || "", this.ok = !1, "#" == t.charAt(0) && (t = t.substr(1, 6));
        t = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[t = (t = t.replace(/ /g, "")).toLowerCase()] || t;
        for (var r = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(t) { return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])] } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }], n = 0; n < r.length; n++) {
            var i = r[n].re,
                a = r[n].process,
                o = i.exec(t);
            o && (e = a(o), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0)
        }
        this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() { return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")" }, this.toHex = function() {
            var t = this.r.toString(16),
                e = this.g.toString(16),
                r = this.b.toString(16);
            return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == r.length && (r = "0" + r), "#" + t + e + r
        }
    }
    /**
     * @license
     * Joseph Myers does not specify a particular license for his work.
     *
     * Author: Joseph Myers
     * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
     *
     * Modified by: Owen Leong
     */
    function l(t, e) {
        var r = t[0],
            n = t[1],
            i = t[2],
            a = t[3];
        r = d(r, n, i, a, e[0], 7, -680876936), a = d(a, r, n, i, e[1], 12, -389564586), i = d(i, a, r, n, e[2], 17, 606105819), n = d(n, i, a, r, e[3], 22, -1044525330), r = d(r, n, i, a, e[4], 7, -176418897), a = d(a, r, n, i, e[5], 12, 1200080426), i = d(i, a, r, n, e[6], 17, -1473231341), n = d(n, i, a, r, e[7], 22, -45705983), r = d(r, n, i, a, e[8], 7, 1770035416), a = d(a, r, n, i, e[9], 12, -1958414417), i = d(i, a, r, n, e[10], 17, -42063), n = d(n, i, a, r, e[11], 22, -1990404162), r = d(r, n, i, a, e[12], 7, 1804603682), a = d(a, r, n, i, e[13], 12, -40341101), i = d(i, a, r, n, e[14], 17, -1502002290), r = p(r, n = d(n, i, a, r, e[15], 22, 1236535329), i, a, e[1], 5, -165796510), a = p(a, r, n, i, e[6], 9, -1069501632), i = p(i, a, r, n, e[11], 14, 643717713), n = p(n, i, a, r, e[0], 20, -373897302), r = p(r, n, i, a, e[5], 5, -701558691), a = p(a, r, n, i, e[10], 9, 38016083), i = p(i, a, r, n, e[15], 14, -660478335), n = p(n, i, a, r, e[4], 20, -405537848), r = p(r, n, i, a, e[9], 5, 568446438), a = p(a, r, n, i, e[14], 9, -1019803690), i = p(i, a, r, n, e[3], 14, -187363961), n = p(n, i, a, r, e[8], 20, 1163531501), r = p(r, n, i, a, e[13], 5, -1444681467), a = p(a, r, n, i, e[2], 9, -51403784), i = p(i, a, r, n, e[7], 14, 1735328473), r = g(r, n = p(n, i, a, r, e[12], 20, -1926607734), i, a, e[5], 4, -378558), a = g(a, r, n, i, e[8], 11, -2022574463), i = g(i, a, r, n, e[11], 16, 1839030562), n = g(n, i, a, r, e[14], 23, -35309556), r = g(r, n, i, a, e[1], 4, -1530992060), a = g(a, r, n, i, e[4], 11, 1272893353), i = g(i, a, r, n, e[7], 16, -155497632), n = g(n, i, a, r, e[10], 23, -1094730640), r = g(r, n, i, a, e[13], 4, 681279174), a = g(a, r, n, i, e[0], 11, -358537222), i = g(i, a, r, n, e[3], 16, -722521979), n = g(n, i, a, r, e[6], 23, 76029189), r = g(r, n, i, a, e[9], 4, -640364487), a = g(a, r, n, i, e[12], 11, -421815835), i = g(i, a, r, n, e[15], 16, 530742520), r = m(r, n = g(n, i, a, r, e[2], 23, -995338651), i, a, e[0], 6, -198630844), a = m(a, r, n, i, e[7], 10, 1126891415), i = m(i, a, r, n, e[14], 15, -1416354905), n = m(n, i, a, r, e[5], 21, -57434055), r = m(r, n, i, a, e[12], 6, 1700485571), a = m(a, r, n, i, e[3], 10, -1894986606), i = m(i, a, r, n, e[10], 15, -1051523), n = m(n, i, a, r, e[1], 21, -2054922799), r = m(r, n, i, a, e[8], 6, 1873313359), a = m(a, r, n, i, e[15], 10, -30611744), i = m(i, a, r, n, e[6], 15, -1560198380), n = m(n, i, a, r, e[13], 21, 1309151649), r = m(r, n, i, a, e[4], 6, -145523070), a = m(a, r, n, i, e[11], 10, -1120210379), i = m(i, a, r, n, e[2], 15, 718787259), n = m(n, i, a, r, e[9], 21, -343485551), t[0] = A(r, t[0]), t[1] = A(n, t[1]), t[2] = A(i, t[2]), t[3] = A(a, t[3])
    }

    function f(t, e, r, n, i, a) { return e = A(A(e, t), A(n, a)), A(e << i | e >>> 32 - i, r) }

    function d(t, e, r, n, i, a, o) { return f(e & r | ~e & n, t, e, i, a, o) }

    function p(t, e, r, n, i, a, o) { return f(e & n | r & ~n, t, e, i, a, o) }

    function g(t, e, r, n, i, a, o) { return f(e ^ r ^ n, t, e, i, a, o) }

    function m(t, e, r, n, i, a, o) { return f(r ^ (e | ~n), t, e, i, a, o) }

    function b(t) {
        var e, r = t.length,
            n = [1732584193, -271733879, -1732584194, 271733878];
        for (e = 64; e <= t.length; e += 64) l(n, v(t.substring(e - 64, e)));
        t = t.substring(e - 64);
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (e = 0; e < t.length; e++) i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
        if (i[e >> 2] |= 128 << (e % 4 << 3), e > 55)
            for (l(n, i), e = 0; e < 16; e++) i[e] = 0;
        return i[14] = 8 * r, l(n, i), n
    }

    function v(t) { var e, r = []; for (e = 0; e < 64; e += 4) r[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24); return r }
    s = e.atob.bind(e), u = e.btoa.bind(e);
    var w = "0123456789abcdef".split("");

    function y(t) { for (var e = "", r = 0; r < 4; r++) e += w[t >> 8 * r + 4 & 15] + w[t >> 8 * r & 15]; return e }

    function _(t) { return String.fromCharCode((255 & t) >> 0, (65280 & t) >> 8, (16711680 & t) >> 16, (4278190080 & t) >> 24) }

    function x(t) { return b(t).map(_).join("") }

    function A(t, e) { return t + e & 4294967295 }
    if ("5d41402abc4b2a76b9719d911017c592" != function(t) { for (var e = 0; e < t.length; e++) t[e] = y(t[e]); return t.join("") }(b("hello"))) {
        function A(t, e) { var r = (65535 & t) + (65535 & e); return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r }
    }
    /**
     * @license
     * FPDF is released under a permissive license: there is no usage restriction.
     * You may embed it freely in your application (commercial or not), with or
     * without modifications.
     *
     * Reference: http://www.fpdf.org/en/script/script37.php
     */
    function N(t, e) {
        var r, n, i, a;
        if (t !== r) {
            for (var o = (i = t, a = 1 + (256 / t.length >> 0), new Array(a + 1).join(i)), s = [], u = 0; u < 256; u++) s[u] = u;
            var h = 0;
            for (u = 0; u < 256; u++) {
                var c = s[u];
                h = (h + c + o.charCodeAt(u)) % 256, s[u] = s[h], s[h] = c
            }
            r = t, n = s
        } else s = n;
        var l = e.length,
            f = 0,
            d = 0,
            p = "";
        for (u = 0; u < l; u++) d = (d + (c = s[f = (f + 1) % 256])) % 256, s[f] = s[d], s[d] = c, o = s[(s[f] + s[d]) % 256], p += String.fromCharCode(e.charCodeAt(u) ^ o);
        return p
    }
    /**
     * @license
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     * Author: Owen Leong (@owenl131)
     * Date: 15 Oct 2020
     * References:
     * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
     * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
     * http://www.fpdf.org/en/script/script37.php
     */
    var L = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };

    function S(t, e, r, n) {
        this.v = 1, this.r = 2;
        let i = 192;
        t.forEach((function(t) {
            if (void 0 !== L.perm) throw new Error("Invalid permission: " + t);
            i += L[t]
        })), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
        let a = (e + this.padding).substr(0, 32),
            o = (r + this.padding).substr(0, 32);
        this.O = this.processOwnerPassword(a, o), this.P = -(1 + (255 ^ i)), this.encryptionKey = x(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(n)).substr(0, 5), this.U = N(this.encryptionKey, this.padding)
    }

    function k(t) {
        if ("object" != typeof t) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
        var r = {};
        this.subscribe = function(t, e, n) {
            if (n = n || !1, "string" != typeof t || "function" != typeof e || "boolean" != typeof n) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
            r.hasOwnProperty(t) || (r[t] = {});
            var i = Math.random().toString(35);
            return r[t][i] = [e, !!n], i
        }, this.unsubscribe = function(t) {
            for (var e in r)
                if (r[e][t]) return delete r[e][t], 0 === Object.keys(r[e]).length && delete r[e], !0;
            return !1
        }, this.publish = function(i) {
            if (r.hasOwnProperty(i)) {
                var a = Array.prototype.slice.call(arguments, 1),
                    o = [];
                for (var s in r[i]) {
                    var u = r[i][s];
                    try { u[0].apply(t, a) } catch (t) { e.console && n.error("jsPDF PubSub Error", t.message, t) }
                    u[1] && o.push(s)
                }
                o.length && o.forEach(this.unsubscribe)
            }
        }, this.getTopics = function() { return r }
    }

    function P(t) {
        if (!(this instanceof P)) return new P(t);
        var e = "opacity,stroke-opacity".split(",");
        for (var r in t) t.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = t[r]);
        this.id = "", this.objectNumber = -1
    }

    function I(t, e) { this.gState = t, this.matrix = e, this.id = "", this.objectNumber = -1 }

    function F(t, e, r, n, i) {
        if (!(this instanceof F)) return new F(t, e, r, n, i);
        this.type = "axial" === t ? 2 : 3, this.coords = e, this.colors = r, I.call(this, n, i)
    }

    function C(t, e, r, n, i) {
        if (!(this instanceof C)) return new C(t, e, r, n, i);
        this.boundingBox = t, this.xStep = e, this.yStep = r, this.stream = "", this.cloneIndex = 0, I.call(this, n, i)
    }

    function j(t) {
        var r, i = "string" == typeof arguments[0] ? arguments[0] : "p",
            a = arguments[1],
            o = arguments[2],
            s = arguments[3],
            l = [],
            f = 1,
            d = 16,
            p = "S",
            g = null;
        "object" == typeof(t = t || {}) && (i = t.orientation, a = t.unit || a, o = t.format || o, s = t.compress || t.compressPdf || s, null !== (g = t.encryption || null) && (g.userPassword = g.userPassword || "", g.ownerPassword = g.ownerPassword || "", g.userPermissions = g.userPermissions || []), f = "number" == typeof t.userUnit ? Math.abs(t.userUnit) : 1, void 0 !== t.precision && (r = t.precision), void 0 !== t.floatPrecision && (d = t.floatPrecision), p = t.defaultPathOperation || "S"), l = t.filters || (!0 === s ? ["FlateEncode"] : l), a = a || "mm", i = ("" + (i || "P")).toLowerCase();
        var m = t.putOnlyUsedFonts || !1,
            b = {},
            v = { internal: {}, __private__: {} };
        v.__private__.PubSub = k;
        var w = "1.3",
            y = v.__private__.getPdfVersion = function() { return w };
        v.__private__.setPdfVersion = function(t) { w = t };
        var _ = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
        v.__private__.getPageFormats = function() { return _ };
        var x = v.__private__.getPageFormat = function(t) { return _[t] };
        o = o || "a4";
        var A = { COMPAT: "compat", ADVANCED: "advanced" },
            N = A.COMPAT;

        function L() { this.saveGraphicsState(), ut(new Ut(At, 0, 0, -At, 0, Or() * At).toString() + " cm"), this.setFontSize(this.getFontSize() / At), p = "n", N = A.ADVANCED }

        function I() { this.restoreGraphicsState(), p = "S", N = A.COMPAT }
        v.advancedAPI = function(t) { var e = N === A.COMPAT; return e && L.call(this), "function" != typeof t || (t(this), e && I.call(this)), this }, v.compatAPI = function(t) { var e = N === A.ADVANCED; return e && I.call(this), "function" != typeof t || (t(this), e && L.call(this)), this }, v.isAdvancedAPI = function() { return N === A.ADVANCED };
        var B, E = function(t) { if (N !== A.ADVANCED) throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.") },
            O = v.roundToPrecision = v.__private__.roundToPrecision = function(t, e) { var n = r || e; if (isNaN(t) || isNaN(n)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision"); return t.toFixed(n).replace(/0+$/, "") };
        B = v.hpf = v.__private__.hpf = "number" == typeof d ? function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf"); return O(t, d) } : "smart" === d ? function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf"); return O(t, t > -1 && t < 1 ? 16 : 5) } : function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf"); return O(t, 16) };
        var M = v.f2 = v.__private__.f2 = function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2"); return O(t, 2) },
            q = v.__private__.f3 = function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3"); return O(t, 3) },
            R = v.scale = v.__private__.scale = function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.scale"); return N === A.COMPAT ? t * At : N === A.ADVANCED ? t : void 0 },
            T = function(t) { return N === A.COMPAT ? Or() - t : N === A.ADVANCED ? t : void 0 },
            D = function(t) { return R(T(t)) };
        v.__private__.setPrecision = v.setPrecision = function(t) { "number" == typeof parseInt(t, 10) && (r = parseInt(t, 10)) };
        var z, U = "00000000000000000000000000000000",
            H = v.__private__.getFileId = function() { return U },
            V = v.__private__.setFileId = function(t) { return U = void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t) ? t.toUpperCase() : U.split("").map((function() { return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random())) })).join(""), null !== g && (Ve = new S(g.userPermissions, g.userPassword, g.ownerPassword, U)), U };
        v.setFileId = function(t) { return V(t), this }, v.getFileId = function() { return H() };
        var W = v.__private__.convertDateToPDFDate = function(t) {
                var e = t.getTimezoneOffset(),
                    r = e < 0 ? "+" : "-",
                    n = Math.floor(Math.abs(e / 60)),
                    i = Math.abs(e % 60),
                    a = [r, K(n), "'", K(i), "'"].join("");
                return ["D:", t.getFullYear(), K(t.getMonth() + 1), K(t.getDate()), K(t.getHours()), K(t.getMinutes()), K(t.getSeconds()), a].join("")
            },
            G = v.__private__.convertPDFDateToDate = function(t) {
                var e = parseInt(t.substr(2, 4), 10),
                    r = parseInt(t.substr(6, 2), 10) - 1,
                    n = parseInt(t.substr(8, 2), 10),
                    i = parseInt(t.substr(10, 2), 10),
                    a = parseInt(t.substr(12, 2), 10),
                    o = parseInt(t.substr(14, 2), 10);
                return new Date(e, r, n, i, a, o, 0)
            },
            Y = v.__private__.setCreationDate = function(t) {
                var e;
                if (void 0 === t && (t = new Date), t instanceof Date) e = W(t);
                else {
                    if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
                    e = t
                }
                return z = e
            },
            J = v.__private__.getCreationDate = function(t) { var e = z; return "jsDate" === t && (e = G(z)), e };
        v.setCreationDate = function(t) { return Y(t), this }, v.getCreationDate = function(t) { return J(t) };
        var X, K = v.__private__.padd2 = function(t) { return ("0" + parseInt(t)).slice(-2) },
            Z = v.__private__.padd2Hex = function(t) { return ("00" + (t = t.toString())).substr(t.length) },
            $ = 0,
            Q = [],
            tt = [],
            et = 0,
            rt = [],
            nt = [],
            it = !1,
            at = tt,
            ot = function() { $ = 0, et = 0, tt = [], Q = [], rt = [], Kt = Yt(), Zt = Yt() };
        v.__private__.setCustomOutputDestination = function(t) { it = !0, at = t };
        var st = function(t) { it || (at = t) };
        v.__private__.resetCustomOutputDestination = function() { it = !1, at = tt };
        var ut = v.__private__.out = function(t) { return t = t.toString(), et += t.length + 1, at.push(t), at },
            ht = v.__private__.write = function(t) { return ut(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " ")) },
            ct = v.__private__.getArrayBuffer = function(t) { for (var e = t.length, r = new ArrayBuffer(e), n = new Uint8Array(r); e--;) n[e] = t.charCodeAt(e); return r },
            lt = [
                ["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
                ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
                ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
                ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
                ["Courier", "courier", "normal", "WinAnsiEncoding"],
                ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
                ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
                ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
                ["Times-Roman", "times", "normal", "WinAnsiEncoding"],
                ["Times-Bold", "times", "bold", "WinAnsiEncoding"],
                ["Times-Italic", "times", "italic", "WinAnsiEncoding"],
                ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
                ["ZapfDingbats", "zapfdingbats", "normal", null],
                ["Symbol", "symbol", "normal", null]
            ];
        v.__private__.getStandardFonts = function() { return lt };
        var ft = t.fontSize || 16;
        v.__private__.setFontSize = v.setFontSize = function(t) { return ft = N === A.ADVANCED ? t / At : t, this };
        var dt, pt = v.__private__.getFontSize = v.getFontSize = function() { return N === A.COMPAT ? ft : ft * At },
            gt = t.R2L || !1;
        v.__private__.setR2L = v.setR2L = function(t) { return gt = t, this }, v.__private__.getR2L = v.getR2L = function() { return gt };
        var mt, bt = v.__private__.setZoomMode = function(t) {
            var e = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
            if (/^\d*\.?\d*%$/.test(t)) dt = t;
            else if (isNaN(t)) {
                if (-1 === e.indexOf(t)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t + '" is not recognized.');
                dt = t
            } else dt = parseInt(t, 10)
        };
        v.__private__.getZoomMode = function() { return dt };
        var vt, wt = v.__private__.setPageMode = function(t) {
            if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
            mt = t
        };
        v.__private__.getPageMode = function() { return mt };
        var yt = v.__private__.setLayoutMode = function(t) {
            if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
            vt = t
        };
        v.__private__.getLayoutMode = function() { return vt }, v.__private__.setDisplayMode = v.setDisplayMode = function(t, e, r) { return bt(t), yt(e), wt(r), this };
        var _t = { title: "", subject: "", author: "", keywords: "", creator: "" };
        v.__private__.getDocumentProperty = function(t) { if (-1 === Object.keys(_t).indexOf(t)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty"); return _t[t] }, v.__private__.getDocumentProperties = function() { return _t }, v.__private__.setDocumentProperties = v.setProperties = v.setDocumentProperties = function(t) { for (var e in _t) _t.hasOwnProperty(e) && t[e] && (_t[e] = t[e]); return this }, v.__private__.setDocumentProperty = function(t, e) { if (-1 === Object.keys(_t).indexOf(t)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty"); return _t[t] = e };
        var xt, At, Nt, Lt, St, kt = {},
            Pt = {},
            It = [],
            Ft = {},
            Ct = {},
            jt = {},
            Bt = {},
            Et = null,
            Ot = 0,
            Mt = [],
            qt = new k(v),
            Rt = t.hotfixes || [],
            Tt = {},
            Dt = {},
            zt = [],
            Ut = function(t, e, r, n, i, a) {
                if (!(this instanceof Ut)) return new Ut(t, e, r, n, i, a);
                isNaN(t) && (t = 1), isNaN(e) && (e = 0), isNaN(r) && (r = 0), isNaN(n) && (n = 1), isNaN(i) && (i = 0), isNaN(a) && (a = 0), this._matrix = [t, e, r, n, i, a]
            };
        Object.defineProperty(Ut.prototype, "sx", { get: function() { return this._matrix[0] }, set: function(t) { this._matrix[0] = t } }), Object.defineProperty(Ut.prototype, "shy", { get: function() { return this._matrix[1] }, set: function(t) { this._matrix[1] = t } }), Object.defineProperty(Ut.prototype, "shx", { get: function() { return this._matrix[2] }, set: function(t) { this._matrix[2] = t } }), Object.defineProperty(Ut.prototype, "sy", { get: function() { return this._matrix[3] }, set: function(t) { this._matrix[3] = t } }), Object.defineProperty(Ut.prototype, "tx", { get: function() { return this._matrix[4] }, set: function(t) { this._matrix[4] = t } }), Object.defineProperty(Ut.prototype, "ty", { get: function() { return this._matrix[5] }, set: function(t) { this._matrix[5] = t } }), Object.defineProperty(Ut.prototype, "a", { get: function() { return this._matrix[0] }, set: function(t) { this._matrix[0] = t } }), Object.defineProperty(Ut.prototype, "b", { get: function() { return this._matrix[1] }, set: function(t) { this._matrix[1] = t } }), Object.defineProperty(Ut.prototype, "c", { get: function() { return this._matrix[2] }, set: function(t) { this._matrix[2] = t } }), Object.defineProperty(Ut.prototype, "d", { get: function() { return this._matrix[3] }, set: function(t) { this._matrix[3] = t } }), Object.defineProperty(Ut.prototype, "e", { get: function() { return this._matrix[4] }, set: function(t) { this._matrix[4] = t } }), Object.defineProperty(Ut.prototype, "f", { get: function() { return this._matrix[5] }, set: function(t) { this._matrix[5] = t } }), Object.defineProperty(Ut.prototype, "rotation", { get: function() { return Math.atan2(this.shx, this.sx) } }), Object.defineProperty(Ut.prototype, "scaleX", { get: function() { return this.decompose().scale.sx } }), Object.defineProperty(Ut.prototype, "scaleY", { get: function() { return this.decompose().scale.sy } }), Object.defineProperty(Ut.prototype, "isIdentity", { get: function() { return 1 === this.sx && (0 === this.shy && (0 === this.shx && (1 === this.sy && (0 === this.tx && 0 === this.ty)))) } }), Ut.prototype.join = function(t) { return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(B).join(t) }, Ut.prototype.multiply = function(t) {
            var e = t.sx * this.sx + t.shy * this.shx,
                r = t.sx * this.shy + t.shy * this.sy,
                n = t.shx * this.sx + t.sy * this.shx,
                i = t.shx * this.shy + t.sy * this.sy,
                a = t.tx * this.sx + t.ty * this.shx + this.tx,
                o = t.tx * this.shy + t.ty * this.sy + this.ty;
            return new Ut(e, r, n, i, a, o)
        }, Ut.prototype.decompose = function() {
            var t = this.sx,
                e = this.shy,
                r = this.shx,
                n = this.sy,
                i = this.tx,
                a = this.ty,
                o = Math.sqrt(t * t + e * e),
                s = (t /= o) * r + (e /= o) * n;
            r -= t * s, n -= e * s;
            var u = Math.sqrt(r * r + n * n);
            return s /= u, t * (n /= u) < e * (r /= u) && (t = -t, e = -e, s = -s, o = -o), { scale: new Ut(o, 0, 0, u, 0, 0), translate: new Ut(1, 0, 0, 1, i, a), rotate: new Ut(t, e, -e, t, 0, 0), skew: new Ut(1, 0, s, 1, 0, 0) }
        }, Ut.prototype.toString = function(t) { return this.join(" ") }, Ut.prototype.inversed = function() {
            var t = this.sx,
                e = this.shy,
                r = this.shx,
                n = this.sy,
                i = this.tx,
                a = this.ty,
                o = 1 / (t * n - e * r),
                s = n * o,
                u = -e * o,
                h = -r * o,
                c = t * o;
            return new Ut(s, u, h, c, -s * i - h * a, -u * i - c * a)
        }, Ut.prototype.applyToPoint = function(t) {
            var e = t.x * this.sx + t.y * this.shx + this.tx,
                r = t.x * this.shy + t.y * this.sy + this.ty;
            return new kr(e, r)
        }, Ut.prototype.applyToRectangle = function(t) {
            var e = this.applyToPoint(t),
                r = this.applyToPoint(new kr(t.x + t.w, t.y + t.h));
            return new Pr(e.x, e.y, r.x - e.x, r.y - e.y)
        }, Ut.prototype.clone = function() {
            var t = this.sx,
                e = this.shy,
                r = this.shx,
                n = this.sy,
                i = this.tx,
                a = this.ty;
            return new Ut(t, e, r, n, i, a)
        }, v.Matrix = Ut;
        var Ht = v.matrixMult = function(t, e) { return e.multiply(t) },
            Vt = new Ut(1, 0, 0, 1, 0, 0);
        v.unitMatrix = v.identityMatrix = Vt;
        var Wt = function(t, e) {
            if (!Ct[t]) {
                var r = (e instanceof F ? "Sh" : "P") + (Object.keys(Ft).length + 1).toString(10);
                e.id = r, Ct[t] = r, Ft[r] = e, qt.publish("addPattern", e)
            }
        };
        v.ShadingPattern = F, v.TilingPattern = C, v.addShadingPattern = function(t, e) { return E("addShadingPattern()"), Wt(t, e), this }, v.beginTilingPattern = function(t) { E("beginTilingPattern()"), Fr(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix) }, v.endTilingPattern = function(t, e) { E("endTilingPattern()"), e.stream = nt[X].join("\n"), Wt(t, e), qt.publish("endTilingPattern", e), zt.pop().restore() };
        var Gt = v.__private__.newObject = function() { var t = Yt(); return Jt(t, !0), t },
            Yt = v.__private__.newObjectDeferred = function() { return $++, Q[$] = function() { return et }, $ },
            Jt = function(t, e) { return e = "boolean" == typeof e && e, Q[t] = et, e && ut(t + " 0 obj"), t },
            Xt = v.__private__.newAdditionalObject = function() { var t = { objId: Yt(), content: "" }; return rt.push(t), t },
            Kt = Yt(),
            Zt = Yt(),
            $t = v.__private__.decodeColorString = function(t) {
                var e = t.split(" ");
                if (2 !== e.length || "g" !== e[1] && "G" !== e[1]) { if (5 === e.length && ("k" === e[4] || "K" === e[4])) { e = [(1 - e[0]) * (1 - e[3]), (1 - e[1]) * (1 - e[3]), (1 - e[2]) * (1 - e[3]), "r"] } } else {
                    var r = parseFloat(e[0]);
                    e = [r, r, r, "r"]
                }
                for (var n = "#", i = 0; i < 3; i++) n += ("0" + Math.floor(255 * parseFloat(e[i])).toString(16)).slice(-2);
                return n
            },
            Qt = v.__private__.encodeColorString = function(t) {
                var e;
                "string" == typeof t && (t = { ch1: t });
                var r = t.ch1,
                    n = t.ch2,
                    i = t.ch3,
                    a = t.ch4,
                    o = "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
                if ("string" == typeof r && "#" !== r.charAt(0)) {
                    var s = new c(r);
                    if (s.ok) r = s.toHex();
                    else if (!/^\d*\.?\d*$/.test(r)) throw new Error('Invalid color "' + r + '" passed to jsPDF.encodeColorString.')
                }
                if ("string" == typeof r && /^#[0-9A-Fa-f]{3}$/.test(r) && (r = "#" + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]), "string" == typeof r && /^#[0-9A-Fa-f]{6}$/.test(r)) {
                    var u = parseInt(r.substr(1), 16);
                    r = u >> 16 & 255, n = u >> 8 & 255, i = 255 & u
                }
                if (void 0 === n || void 0 === a && r === n && n === i)
                    if ("string" == typeof r) e = r + " " + o[0];
                    else switch (t.precision) {
                        case 2:
                            e = M(r / 255) + " " + o[0];
                            break;
                        case 3:
                        default:
                            e = q(r / 255) + " " + o[0]
                    } else if (void 0 === a || "object" == typeof a) {
                        if (a && !isNaN(a.a) && 0 === a.a) return e = ["1.", "1.", "1.", o[1]].join(" ");
                        if ("string" == typeof r) e = [r, n, i, o[1]].join(" ");
                        else switch (t.precision) {
                            case 2:
                                e = [M(r / 255), M(n / 255), M(i / 255), o[1]].join(" ");
                                break;
                            default:
                            case 3:
                                e = [q(r / 255), q(n / 255), q(i / 255), o[1]].join(" ")
                        }
                    } else if ("string" == typeof r) e = [r, n, i, a, o[2]].join(" ");
                else switch (t.precision) {
                    case 2:
                        e = [M(r), M(n), M(i), M(a), o[2]].join(" ");
                        break;
                    case 3:
                    default:
                        e = [q(r), q(n), q(i), q(a), o[2]].join(" ")
                }
                return e
            },
            te = v.__private__.getFilters = function() { return l },
            ee = v.__private__.putStream = function(t) {
                var e = (t = t || {}).data || "",
                    r = t.filters || te(),
                    n = t.alreadyAppliedFilters || [],
                    i = t.addLength1 || !1,
                    a = e.length,
                    o = t.objectId,
                    s = function(t) { return t };
                if (null !== g && void 0 === o) throw new Error("ObjectId must be passed to putStream for file encryption");
                null !== g && (s = Ve.encryptor(o, 0));
                var u = {};
                !0 === r && (r = ["FlateEncode"]);
                var h = t.additionalKeyValues || [],
                    c = (u = void 0 !== j.API.processDataByFilters ? j.API.processDataByFilters(e, r) : { data: e, reverseChain: [] }).reverseChain + (Array.isArray(n) ? n.join(" ") : n.toString());
                if (0 !== u.data.length && (h.push({ key: "Length", value: u.data.length }), !0 === i && h.push({ key: "Length1", value: a })), 0 != c.length)
                    if (c.split("/").length - 1 == 1) h.push({ key: "Filter", value: c });
                    else {
                        h.push({ key: "Filter", value: "[" + c + "]" });
                        for (var l = 0; l < h.length; l += 1)
                            if ("DecodeParms" === h[l].key) {
                                for (var f = [], d = 0; d < u.reverseChain.split("/").length - 1; d += 1) f.push("null");
                                f.push(h[l].value), h[l].value = "[" + f.join(" ") + "]"
                            }
                    }
                ut("<<");
                for (var p = 0; p < h.length; p++) ut("/" + h[p].key + " " + h[p].value);
                ut(">>"), 0 !== u.data.length && (ut("stream"), ut(s(u.data)), ut("endstream"))
            },
            re = v.__private__.putPage = function(t) {
                var e = t.number,
                    r = t.data,
                    n = t.objId,
                    i = t.contentsObjId;
                Jt(n, !0), ut("<</Type /Page"), ut("/Parent " + t.rootDictionaryObjId + " 0 R"), ut("/Resources " + t.resourceDictionaryObjId + " 0 R"), ut("/MediaBox [" + parseFloat(B(t.mediaBox.bottomLeftX)) + " " + parseFloat(B(t.mediaBox.bottomLeftY)) + " " + B(t.mediaBox.topRightX) + " " + B(t.mediaBox.topRightY) + "]"), null !== t.cropBox && ut("/CropBox [" + B(t.cropBox.bottomLeftX) + " " + B(t.cropBox.bottomLeftY) + " " + B(t.cropBox.topRightX) + " " + B(t.cropBox.topRightY) + "]"), null !== t.bleedBox && ut("/BleedBox [" + B(t.bleedBox.bottomLeftX) + " " + B(t.bleedBox.bottomLeftY) + " " + B(t.bleedBox.topRightX) + " " + B(t.bleedBox.topRightY) + "]"), null !== t.trimBox && ut("/TrimBox [" + B(t.trimBox.bottomLeftX) + " " + B(t.trimBox.bottomLeftY) + " " + B(t.trimBox.topRightX) + " " + B(t.trimBox.topRightY) + "]"), null !== t.artBox && ut("/ArtBox [" + B(t.artBox.bottomLeftX) + " " + B(t.artBox.bottomLeftY) + " " + B(t.artBox.topRightX) + " " + B(t.artBox.topRightY) + "]"), "number" == typeof t.userUnit && 1 !== t.userUnit && ut("/UserUnit " + t.userUnit), qt.publish("putPage", { objId: n, pageContext: Mt[e], pageNumber: e, page: r }), ut("/Contents " + i + " 0 R"), ut(">>"), ut("endobj");
                var a = r.join("\n");
                return N === A.ADVANCED && (a += "\nQ"), Jt(i, !0), ee({ data: a, filters: te(), objectId: i }), ut("endobj"), n
            },
            ne = v.__private__.putPages = function() {
                var t, e, r = [];
                for (t = 1; t <= Ot; t++) Mt[t].objId = Yt(), Mt[t].contentsObjId = Yt();
                for (t = 1; t <= Ot; t++) r.push(re({ number: t, data: nt[t], objId: Mt[t].objId, contentsObjId: Mt[t].contentsObjId, mediaBox: Mt[t].mediaBox, cropBox: Mt[t].cropBox, bleedBox: Mt[t].bleedBox, trimBox: Mt[t].trimBox, artBox: Mt[t].artBox, userUnit: Mt[t].userUnit, rootDictionaryObjId: Kt, resourceDictionaryObjId: Zt }));
                Jt(Kt, !0), ut("<</Type /Pages");
                var n = "/Kids [";
                for (e = 0; e < Ot; e++) n += r[e] + " 0 R ";
                ut(n + "]"), ut("/Count " + Ot), ut(">>"), ut("endobj"), qt.publish("postPutPages")
            },
            ie = function(t) {
                var e = function(t, e) { return -1 !== t.indexOf(" ") ? "(" + Pe(t, e) + ")" : Pe(t, e) };
                qt.publish("putFont", { font: t, out: ut, newObject: Gt, putStream: ee, pdfEscapeWithNeededParanthesis: e }), !0 !== t.isAlreadyPutted && (t.objectNumber = Gt(), ut("<<"), ut("/Type /Font"), ut("/BaseFont /" + e(t.postScriptName)), ut("/Subtype /Type1"), "string" == typeof t.encoding && ut("/Encoding /" + t.encoding), ut("/FirstChar 32"), ut("/LastChar 255"), ut(">>"), ut("endobj"))
            },
            ae = function() { for (var t in kt) kt.hasOwnProperty(t) && (!1 === m || !0 === m && b.hasOwnProperty(t)) && ie(kt[t]) },
            oe = function(t) {
                t.objectNumber = Gt();
                var e = [];
                e.push({ key: "Type", value: "/XObject" }), e.push({ key: "Subtype", value: "/Form" }), e.push({ key: "BBox", value: "[" + [B(t.x), B(t.y), B(t.x + t.width), B(t.y + t.height)].join(" ") + "]" }), e.push({ key: "Matrix", value: "[" + t.matrix.toString() + "]" });
                var r = t.pages[1].join("\n");
                ee({ data: r, additionalKeyValues: e, objectId: t.objectNumber }), ut("endobj")
            },
            se = function() { for (var t in Tt) Tt.hasOwnProperty(t) && oe(Tt[t]) },
            ue = function(t, e) {
                var r, n = [],
                    i = 1 / (e - 1);
                for (r = 0; r < 1; r += i) n.push(r);
                if (n.push(1), 0 != t[0].offset) {
                    var a = { offset: 0, color: t[0].color };
                    t.unshift(a)
                }
                if (1 != t[t.length - 1].offset) {
                    var o = { offset: 1, color: t[t.length - 1].color };
                    t.push(o)
                }
                for (var s = "", u = 0, h = 0; h < n.length; h++) {
                    for (r = n[h]; r > t[u + 1].offset;) u++;
                    var c = t[u].offset,
                        l = (r - c) / (t[u + 1].offset - c),
                        f = t[u].color,
                        d = t[u + 1].color;
                    s += Z(Math.round((1 - l) * f[0] + l * d[0]).toString(16)) + Z(Math.round((1 - l) * f[1] + l * d[1]).toString(16)) + Z(Math.round((1 - l) * f[2] + l * d[2]).toString(16))
                }
                return s.trim()
            },
            he = function(t, e) {
                e || (e = 21);
                var r = Gt(),
                    n = ue(t.colors, e),
                    i = [];
                i.push({ key: "FunctionType", value: "0" }), i.push({ key: "Domain", value: "[0.0 1.0]" }), i.push({ key: "Size", value: "[" + e + "]" }), i.push({ key: "BitsPerSample", value: "8" }), i.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), i.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), ee({ data: n, additionalKeyValues: i, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: r }), ut("endobj"), t.objectNumber = Gt(), ut("<< /ShadingType " + t.type), ut("/ColorSpace /DeviceRGB");
                var a = "/Coords [" + B(parseFloat(t.coords[0])) + " " + B(parseFloat(t.coords[1])) + " ";
                2 === t.type ? a += B(parseFloat(t.coords[2])) + " " + B(parseFloat(t.coords[3])) : a += B(parseFloat(t.coords[2])) + " " + B(parseFloat(t.coords[3])) + " " + B(parseFloat(t.coords[4])) + " " + B(parseFloat(t.coords[5])), ut(a += "]"), t.matrix && ut("/Matrix [" + t.matrix.toString() + "]"), ut("/Function " + r + " 0 R"), ut("/Extend [true true]"), ut(">>"), ut("endobj")
            },
            ce = function(t, e) {
                var r = Yt(),
                    n = Gt();
                e.push({ resourcesOid: r, objectOid: n }), t.objectNumber = n;
                var i = [];
                i.push({ key: "Type", value: "/Pattern" }), i.push({ key: "PatternType", value: "1" }), i.push({ key: "PaintType", value: "1" }), i.push({ key: "TilingType", value: "1" }), i.push({ key: "BBox", value: "[" + t.boundingBox.map(B).join(" ") + "]" }), i.push({ key: "XStep", value: B(t.xStep) }), i.push({ key: "YStep", value: B(t.yStep) }), i.push({ key: "Resources", value: r + " 0 R" }), t.matrix && i.push({ key: "Matrix", value: "[" + t.matrix.toString() + "]" }), ee({ data: t.stream, additionalKeyValues: i, objectId: t.objectNumber }), ut("endobj")
            },
            le = function(t) { var e; for (e in Ft) Ft.hasOwnProperty(e) && (Ft[e] instanceof F ? he(Ft[e]) : Ft[e] instanceof C && ce(Ft[e], t)) },
            fe = function(t) {
                for (var e in t.objectNumber = Gt(), ut("<<"), t) switch (e) {
                    case "opacity":
                        ut("/ca " + M(t[e]));
                        break;
                    case "stroke-opacity":
                        ut("/CA " + M(t[e]))
                }
                ut(">>"), ut("endobj")
            },
            de = function() { var t; for (t in jt) jt.hasOwnProperty(t) && fe(jt[t]) },
            pe = function() {
                for (var t in ut("/XObject <<"), Tt) Tt.hasOwnProperty(t) && Tt[t].objectNumber >= 0 && ut("/" + t + " " + Tt[t].objectNumber + " 0 R");
                qt.publish("putXobjectDict"), ut(">>")
            },
            ge = function() { Ve.oid = Gt(), ut("<<"), ut("/Filter /Standard"), ut("/V " + Ve.v), ut("/R " + Ve.r), ut("/U <" + Ve.toHexString(Ve.U) + ">"), ut("/O <" + Ve.toHexString(Ve.O) + ">"), ut("/P " + Ve.P), ut(">>"), ut("endobj") },
            me = function() {
                for (var t in ut("/Font <<"), kt) kt.hasOwnProperty(t) && (!1 === m || !0 === m && b.hasOwnProperty(t)) && ut("/" + t + " " + kt[t].objectNumber + " 0 R");
                ut(">>")
            },
            be = function() {
                if (Object.keys(Ft).length > 0) {
                    for (var t in ut("/Shading <<"), Ft) Ft.hasOwnProperty(t) && Ft[t] instanceof F && Ft[t].objectNumber >= 0 && ut("/" + t + " " + Ft[t].objectNumber + " 0 R");
                    qt.publish("putShadingPatternDict"), ut(">>")
                }
            },
            ve = function(t) {
                if (Object.keys(Ft).length > 0) {
                    for (var e in ut("/Pattern <<"), Ft) Ft.hasOwnProperty(e) && Ft[e] instanceof v.TilingPattern && Ft[e].objectNumber >= 0 && Ft[e].objectNumber < t && ut("/" + e + " " + Ft[e].objectNumber + " 0 R");
                    qt.publish("putTilingPatternDict"), ut(">>")
                }
            },
            we = function() {
                if (Object.keys(jt).length > 0) {
                    var t;
                    for (t in ut("/ExtGState <<"), jt) jt.hasOwnProperty(t) && jt[t].objectNumber >= 0 && ut("/" + t + " " + jt[t].objectNumber + " 0 R");
                    qt.publish("putGStateDict"), ut(">>")
                }
            },
            ye = function(t) { Jt(t.resourcesOid, !0), ut("<<"), ut("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), me(), be(), ve(t.objectOid), we(), pe(), ut(">>"), ut("endobj") },
            _e = function() {
                var t = [];
                ae(), de(), se(), le(t), qt.publish("putResources"), t.forEach(ye), ye({ resourcesOid: Zt, objectOid: Number.MAX_SAFE_INTEGER }), qt.publish("postPutResources")
            },
            xe = function() {
                qt.publish("putAdditionalObjects");
                for (var t = 0; t < rt.length; t++) {
                    var e = rt[t];
                    Jt(e.objId, !0), ut(e.content), ut("endobj")
                }
                qt.publish("postPutAdditionalObjects")
            },
            Ae = function(t) { Pt[t.fontName] = Pt[t.fontName] || {}, Pt[t.fontName][t.fontStyle] = t.id },
            Ne = function(t, e, r, n, i) { var a = { id: "F" + (Object.keys(kt).length + 1).toString(10), postScriptName: t, fontName: e, fontStyle: r, encoding: n, isStandardFont: i || !1, metadata: {} }; return qt.publish("addFont", { font: a, instance: this }), kt[a.id] = a, Ae(a), a.id },
            Le = function(t) {
                for (var e = 0, r = lt.length; e < r; e++) {
                    var n = Ne.call(this, t[e][0], t[e][1], t[e][2], lt[e][3], !0);
                    !1 === m && (b[n] = !0);
                    var i = t[e][0].split("-");
                    Ae({ id: n, fontName: i[0], fontStyle: i[1] || "" })
                }
                qt.publish("addFonts", { fonts: kt, dictionary: Pt })
            },
            Se = function(t) {
                return t.foo = function() {
                    try { return t.apply(this, arguments) } catch (t) {
                        var r = t.stack || "";
                        ~r.indexOf(" at ") && (r = r.split(" at ")[1]);
                        var n = "Error in function " + r.split("\n")[0].split("<")[0] + ": " + t.message;
                        if (!e.console) throw new Error(n);
                        e.console.error(n, t), e.alert && alert(n)
                    }
                }, t.foo.bar = t, t.foo
            },
            ke = function(t, e) {
                var r, n, i, a, o, s, u, h, c;
                if (i = (e = e || {}).sourceEncoding || "Unicode", o = e.outputEncoding, (e.autoencode || o) && kt[xt].metadata && kt[xt].metadata[i] && kt[xt].metadata[i].encoding && (a = kt[xt].metadata[i].encoding, !o && kt[xt].encoding && (o = kt[xt].encoding), !o && a.codePages && (o = a.codePages[0]), "string" == typeof o && (o = a[o]), o)) {
                    for (u = !1, s = [], r = 0, n = t.length; r < n; r++)(h = o[t.charCodeAt(r)]) ? s.push(String.fromCharCode(h)) : s.push(t[r]), s[r].charCodeAt(0) >> 8 && (u = !0);
                    t = s.join("")
                }
                for (r = t.length; void 0 === u && 0 !== r;) t.charCodeAt(r - 1) >> 8 && (u = !0), r--;
                if (!u) return t;
                for (s = e.noBOM ? [] : [254, 255], r = 0, n = t.length; r < n; r++) {
                    if ((c = (h = t.charCodeAt(r)) >> 8) >> 8) throw new Error("Character at position " + r + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                    s.push(c), s.push(h - (c << 8))
                }
                return String.fromCharCode.apply(void 0, s)
            },
            Pe = v.__private__.pdfEscape = v.pdfEscape = function(t, e) { return ke(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)") },
            Ie = v.__private__.beginPage = function(t) { nt[++Ot] = [], Mt[Ot] = { objId: 0, contentsObjId: 0, userUnit: Number(f), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(t[0]), topRightY: Number(t[1]) } }, je(Ot), st(nt[X]) },
            Fe = function(t, e) {
                var r, a, s;
                switch (i = e || i, "string" == typeof t && (r = x(t.toLowerCase()), Array.isArray(r) && (a = r[0], s = r[1])), Array.isArray(t) && (a = t[0] * At, s = t[1] * At), isNaN(a) && (a = o[0], s = o[1]), (a > 14400 || s > 14400) && (n.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), a = Math.min(14400, a), s = Math.min(14400, s)), o = [a, s], i.substr(0, 1)) {
                    case "l":
                        s > a && (o = [s, a]);
                        break;
                    case "p":
                        a > s && (o = [s, a])
                }
                Ie(o), cr(hr), ut(vr), 0 !== Nr && ut(Nr + " J"), 0 !== Lr && ut(Lr + " j"), qt.publish("addPage", { pageNumber: Ot })
            },
            Ce = function(t) { t > 0 && t <= Ot && (nt.splice(t, 1), Mt.splice(t, 1), Ot--, X > Ot && (X = Ot), this.setPage(X)) },
            je = function(t) { t > 0 && t <= Ot && (X = t) },
            Be = v.__private__.getNumberOfPages = v.getNumberOfPages = function() { return nt.length - 1 },
            Ee = function(t, e, r) { var i, a = void 0; return r = r || {}, t = void 0 !== t ? t : kt[xt].fontName, e = void 0 !== e ? e : kt[xt].fontStyle, i = t.toLowerCase(), void 0 !== Pt[i] && void 0 !== Pt[i][e] ? a = Pt[i][e] : void 0 !== Pt[t] && void 0 !== Pt[t][e] ? a = Pt[t][e] : !1 === r.disableWarning && n.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."), a || r.noFallback || null == (a = Pt.times[e]) && (a = Pt.times.normal), a },
            Oe = v.__private__.putInfo = function() {
                var t = Gt(),
                    e = function(t) { return t };
                for (var r in null !== g && (e = Ve.encryptor(t, 0)), ut("<<"), ut("/Producer (" + Pe(e("jsPDF " + j.version)) + ")"), _t) _t.hasOwnProperty(r) && _t[r] && ut("/" + r.substr(0, 1).toUpperCase() + r.substr(1) + " (" + Pe(e(_t[r])) + ")");
                ut("/CreationDate (" + Pe(e(z)) + ")"), ut(">>"), ut("endobj")
            },
            Me = v.__private__.putCatalog = function(t) {
                var e = (t = t || {}).rootDictionaryObjId || Kt;
                switch (Gt(), ut("<<"), ut("/Type /Catalog"), ut("/Pages " + e + " 0 R"), dt || (dt = "fullwidth"), dt) {
                    case "fullwidth":
                        ut("/OpenAction [3 0 R /FitH null]");
                        break;
                    case "fullheight":
                        ut("/OpenAction [3 0 R /FitV null]");
                        break;
                    case "fullpage":
                        ut("/OpenAction [3 0 R /Fit]");
                        break;
                    case "original":
                        ut("/OpenAction [3 0 R /XYZ null null 1]");
                        break;
                    default:
                        var r = "" + dt;
                        "%" === r.substr(r.length - 1) && (dt = parseInt(dt) / 100), "number" == typeof dt && ut("/OpenAction [3 0 R /XYZ null null " + M(dt) + "]")
                }
                switch (vt || (vt = "continuous"), vt) {
                    case "continuous":
                        ut("/PageLayout /OneColumn");
                        break;
                    case "single":
                        ut("/PageLayout /SinglePage");
                        break;
                    case "two":
                    case "twoleft":
                        ut("/PageLayout /TwoColumnLeft");
                        break;
                    case "tworight":
                        ut("/PageLayout /TwoColumnRight")
                }
                mt && ut("/PageMode /" + mt), qt.publish("putCatalog"), ut(">>"), ut("endobj")
            },
            qe = v.__private__.putTrailer = function() { ut("trailer"), ut("<<"), ut("/Size " + ($ + 1)), ut("/Root " + $ + " 0 R"), ut("/Info " + ($ - 1) + " 0 R"), null !== g && ut("/Encrypt " + Ve.oid + " 0 R"), ut("/ID [ <" + U + "> <" + U + "> ]"), ut(">>") },
            Re = v.__private__.putHeader = function() { ut("%PDF-" + w), ut("%ºß¬à") },
            Te = v.__private__.putXRef = function() {
                var t = "0000000000";
                ut("xref"), ut("0 " + ($ + 1)), ut("0000000000 65535 f ");
                for (var e = 1; e <= $; e++) { "function" == typeof Q[e] ? ut((t + Q[e]()).slice(-10) + " 00000 n ") : void 0 !== Q[e] ? ut((t + Q[e]).slice(-10) + " 00000 n ") : ut("0000000000 00000 n ") }
            },
            De = v.__private__.buildDocument = function() { ot(), st(tt), qt.publish("buildDocument"), Re(), ne(), xe(), _e(), null !== g && ge(), Oe(), Me(); var t = et; return Te(), qe(), ut("startxref"), ut("" + t), ut("%%EOF"), st(nt[X]), tt.join("\n") },
            ze = v.__private__.getBlob = function(t) { return new Blob([ct(t)], { type: "application/pdf" }) },
            Ue = v.output = v.__private__.output = Se((function(t, r) {
                switch ("string" == typeof(r = r || {}) ? r = { filename: r } : r.filename = r.filename || "generated.pdf", t) {
                    case void 0:
                        return De();
                    case "save":
                        v.save(r.filename);
                        break;
                    case "arraybuffer":
                        return ct(De());
                    case "blob":
                        return ze(De());
                    case "bloburi":
                    case "bloburl":
                        if (void 0 !== e.URL && "function" == typeof e.URL.createObjectURL) return e.URL && e.URL.createObjectURL(ze(De())) || void 0;
                        n.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                        break;
                    case "datauristring":
                    case "dataurlstring":
                        var i = "",
                            a = De();
                        try { i = u(a) } catch (t) { i = u(unescape(encodeURIComponent(a))) }
                        return "data:application/pdf;filename=" + r.filename + ";base64," + i;
                    case "pdfobjectnewwindow":
                        if ("[object Window]" === Object.prototype.toString.call(e)) {
                            var o = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + (r.pdfObjectUrl || "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js") + '"><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(r) + ");<\/script></body></html>",
                                s = e.open();
                            return null !== s && s.document.write(o), s
                        }
                        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
                    case "pdfjsnewwindow":
                        if ("[object Window]" === Object.prototype.toString.call(e)) {
                            var h = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (r.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + r.filename + '" width="500px" height="400px" /></body></html>',
                                c = e.open();
                            if (null !== c) {
                                c.document.write(h);
                                var l = this;
                                c.document.documentElement.querySelector("#pdfViewer").onload = function() { c.document.title = r.filename, c.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(l.output("bloburl")) }
                            }
                            return c
                        }
                        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
                    case "dataurlnewwindow":
                        if ("[object Window]" !== Object.prototype.toString.call(e)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
                        var f = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", r) + '"></iframe></body></html>',
                            d = e.open();
                        if (null !== d && (d.document.write(f), d.document.title = r.filename), d || "undefined" == typeof safari) return d;
                        break;
                    case "datauri":
                    case "dataurl":
                        return e.document.location.href = this.output("datauristring", r);
                    default:
                        return null
                }
            })),
            He = function(t) { return !0 === Array.isArray(Rt) && Rt.indexOf(t) > -1 };
        switch (a) {
            case "pt":
                At = 1;
                break;
            case "mm":
                At = 72 / 25.4;
                break;
            case "cm":
                At = 72 / 2.54;
                break;
            case "in":
                At = 72;
                break;
            case "px":
                At = 1 == He("px_scaling") ? .75 : 96 / 72;
                break;
            case "pc":
            case "em":
                At = 12;
                break;
            case "ex":
                At = 6;
                break;
            default:
                throw new Error("Invalid unit: " + a)
        }
        var Ve = null;
        Y(), V();
        var We = function(t) { return null !== g ? Ve.encryptor(t, 0) : function(t) { return t } },
            Ge = v.__private__.getPageInfo = v.getPageInfo = function(t) { if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo"); return { objId: Mt[t].objId, pageNumber: t, pageContext: Mt[t] } },
            Ye = v.__private__.getPageInfoByObjId = function(t) {
                if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
                for (var e in Mt)
                    if (Mt[e].objId === t) break;
                return Ge(e)
            },
            Je = v.__private__.getCurrentPageInfo = v.getCurrentPageInfo = function() { return { objId: Mt[X].objId, pageNumber: X, pageContext: Mt[X] } };
        v.addPage = function() { return Fe.apply(this, arguments), this }, v.setPage = function() { return je.apply(this, arguments), st.call(this, nt[X]), this }, v.insertPage = function(t) { return this.addPage(), this.movePage(X, t), this }, v.movePage = function(t, e) {
            var r, n;
            if (t > e) {
                r = nt[t], n = Mt[t];
                for (var i = t; i > e; i--) nt[i] = nt[i - 1], Mt[i] = Mt[i - 1];
                nt[e] = r, Mt[e] = n, this.setPage(e)
            } else if (t < e) {
                r = nt[t], n = Mt[t];
                for (var a = t; a < e; a++) nt[a] = nt[a + 1], Mt[a] = Mt[a + 1];
                nt[e] = r, Mt[e] = n, this.setPage(e)
            }
            return this
        }, v.deletePage = function() { return Ce.apply(this, arguments), this }, v.__private__.text = v.text = function(t, e, r, n, i) {
            var a, o, s, u, h, c, l, f, d = (n = n || {}).scope || this;
            if ("number" == typeof t && "number" == typeof e && ("string" == typeof r || Array.isArray(r))) {
                var p = r;
                r = e, e = t, t = p
            }
            if (arguments[3] instanceof Ut == !1 ? (s = arguments[4], u = arguments[5], "object" == typeof(l = arguments[3]) && null !== l || ("string" == typeof s && (u = s, s = null), "string" == typeof l && (u = l, l = null), "number" == typeof l && (s = l, l = null), n = { flags: l, angle: s, align: u })) : (E("The transform parameter of text() with a Matrix value"), f = i), isNaN(e) || isNaN(r) || null == t) throw new Error("Invalid arguments passed to jsPDF.text");
            if (0 === t.length) return d;
            var g = "",
                m = !1,
                v = "number" == typeof n.lineHeightFactor ? n.lineHeightFactor : ur,
                w = d.internal.scaleFactor;

            function y(t) { return t = t.split("\t").join(Array(n.TabLen || 9).join(" ")), Pe(t, l) }

            function _(t) { for (var e, r = t.concat(), n = [], i = r.length; i--;) "string" == typeof(e = r.shift()) ? n.push(e) : Array.isArray(t) && (1 === e.length || void 0 === e[1] && void 0 === e[2]) ? n.push(e[0]) : n.push([e[0], e[1], e[2]]); return n }

            function x(t, e) {
                var r;
                if ("string" == typeof t) r = e(t)[0];
                else if (Array.isArray(t)) {
                    for (var n, i, a = t.concat(), o = [], s = a.length; s--;) "string" == typeof(n = a.shift()) ? o.push(e(n)[0]) : Array.isArray(n) && "string" == typeof n[0] && (i = e(n[0], n[1], n[2]), o.push([i[0], i[1], i[2]]));
                    r = o
                }
                return r
            }
            var L = !1,
                S = !0;
            if ("string" == typeof t) L = !0;
            else if (Array.isArray(t)) {
                var k = t.concat();
                o = [];
                for (var P, I = k.length; I--;)("string" != typeof(P = k.shift()) || Array.isArray(P) && "string" != typeof P[0]) && (S = !1);
                L = S
            }
            if (!1 === L) throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
            "string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
            var F = ft / d.internal.scaleFactor,
                C = F * (ur - 1);
            switch (n.baseline) {
                case "bottom":
                    r -= C;
                    break;
                case "top":
                    r += F - C;
                    break;
                case "hanging":
                    r += F - 2 * C;
                    break;
                case "middle":
                    r += F / 2 - C
            }
            if ((c = n.maxWidth || 0) > 0 && ("string" == typeof t ? t = d.splitTextToSize(t, c) : "[object Array]" === Object.prototype.toString.call(t) && (t = t.reduce((function(t, e) { return t.concat(d.splitTextToSize(e, c)) }), []))), a = { text: t, x: e, y: r, options: n, mutex: { pdfEscape: Pe, activeFontKey: xt, fonts: kt, activeFontSize: ft } }, qt.publish("preProcessText", a), t = a.text, s = (n = a.options).angle, f instanceof Ut == !1 && s && "number" == typeof s) {
                s *= Math.PI / 180, 0 === n.rotationDirection && (s = -s), N === A.ADVANCED && (s = -s);
                var j = Math.cos(s),
                    O = Math.sin(s);
                f = new Ut(j, O, -O, j, 0, 0)
            } else s && s instanceof Ut && (f = s);
            N !== A.ADVANCED || f || (f = Vt), void 0 !== (h = n.charSpace || xr) && (g += B(R(h)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0));
            n.lang;
            var M = -1,
                q = void 0 !== n.renderingMode ? n.renderingMode : n.stroke,
                T = d.internal.getCurrentPageInfo().pageContext;
            switch (q) {
                case 0:
                case !1:
                case "fill":
                    M = 0;
                    break;
                case 1:
                case !0:
                case "stroke":
                    M = 1;
                    break;
                case 2:
                case "fillThenStroke":
                    M = 2;
                    break;
                case 3:
                case "invisible":
                    M = 3;
                    break;
                case 4:
                case "fillAndAddForClipping":
                    M = 4;
                    break;
                case 5:
                case "strokeAndAddPathForClipping":
                    M = 5;
                    break;
                case 6:
                case "fillThenStrokeAndAddToPathForClipping":
                    M = 6;
                    break;
                case 7:
                case "addToPathForClipping":
                    M = 7
            }
            var D = void 0 !== T.usedRenderingMode ? T.usedRenderingMode : -1; - 1 !== M ? g += M + " Tr\n" : -1 !== D && (g += "0 Tr\n"), -1 !== M && (T.usedRenderingMode = M), u = n.align || "left";
            var z, U = ft * v,
                H = d.internal.pageSize.getWidth(),
                V = kt[xt];
            h = n.charSpace || xr, c = n.maxWidth || 0, l = {};
            var W = [];
            if ("[object Array]" === Object.prototype.toString.call(t)) {
                var G;
                o = _(t), "left" !== u && (z = o.map((function(t) { return d.getStringUnitWidth(t, { font: V, charSpace: h, fontSize: ft, doKerning: !1 }) * ft / w })));
                var Y, J = 0;
                if ("right" === u) { e -= z[0], t = [], I = o.length; for (var X = 0; X < I; X++) 0 === X ? (Y = pr(e), G = gr(r)) : (Y = R(J - z[X]), G = -U), t.push([o[X], Y, G]), J = z[X] } else if ("center" === u) { e -= z[0] / 2, t = [], I = o.length; for (var K = 0; K < I; K++) 0 === K ? (Y = pr(e), G = gr(r)) : (Y = R((J - z[K]) / 2), G = -U), t.push([o[K], Y, G]), J = z[K] } else if ("left" === u) { t = [], I = o.length; for (var Z = 0; Z < I; Z++) t.push(o[Z]) } else {
                    if ("justify" !== u) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                    t = [], I = o.length, c = 0 !== c ? c : H;
                    for (var $ = 0; $ < I; $++) G = 0 === $ ? gr(r) : -U, Y = 0 === $ ? pr(e) : 0, $ < I - 1 && W.push(B(R((c - z[$]) / (o[$].split(" ").length - 1)))), t.push([o[$], Y, G])
                }
            }
            var Q = "boolean" == typeof n.R2L ? n.R2L : gt;
            !0 === Q && (t = x(t, (function(t, e, r) { return [t.split("").reverse().join(""), e, r] }))), a = { text: t, x: e, y: r, options: n, mutex: { pdfEscape: Pe, activeFontKey: xt, fonts: kt, activeFontSize: ft } }, qt.publish("postProcessText", a), t = a.text, m = a.mutex.isHex || !1;
            var tt = kt[xt].encoding;
            "WinAnsiEncoding" !== tt && "StandardEncoding" !== tt || (t = x(t, (function(t, e, r) { return [y(t), e, r] }))), o = _(t), t = [];
            for (var et, rt, nt, it = 0, at = 1, ot = Array.isArray(o[0]) ? at : it, st = "", ht = function(t, e, r) { var i = ""; return r instanceof Ut ? (r = "number" == typeof n.angle ? Ht(r, new Ut(1, 0, 0, 1, t, e)) : Ht(new Ut(1, 0, 0, 1, t, e), r), N === A.ADVANCED && (r = Ht(new Ut(1, 0, 0, -1, 0, 0), r)), i = r.join(" ") + " Tm\n") : i = B(t) + " " + B(e) + " Td\n", i }, ct = 0; ct < o.length; ct++) {
                switch (st = "", ot) {
                    case at:
                        nt = (m ? "<" : "(") + o[ct][0] + (m ? ">" : ")"), et = parseFloat(o[ct][1]), rt = parseFloat(o[ct][2]);
                        break;
                    case it:
                        nt = (m ? "<" : "(") + o[ct] + (m ? ">" : ")"), et = pr(e), rt = gr(r)
                }
                void 0 !== W && void 0 !== W[ct] && (st = W[ct] + " Tw\n"), 0 === ct ? t.push(st + ht(et, rt, f) + nt) : ot === it ? t.push(st + nt) : ot === at && t.push(st + ht(et, rt, f) + nt)
            }
            t = ot === it ? t.join(" Tj\nT* ") : t.join(" Tj\n"), t += " Tj\n";
            var lt = "BT\n/";
            return lt += xt + " " + ft + " Tf\n", lt += B(ft * v) + " TL\n", lt += yr + "\n", lt += g, lt += t, ut(lt += "ET"), b[xt] = !0, d
        };
        var Xe = v.__private__.clip = v.clip = function(t) { return ut("evenodd" === t ? "W*" : "W"), this };
        v.clipEvenOdd = function() { return Xe("evenodd") }, v.__private__.discardPath = v.discardPath = function() { return ut("n"), this };
        var Ke = v.__private__.isValidStyle = function(t) { var e = !1; return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(t) && (e = !0), e };
        v.__private__.setDefaultPathOperation = v.setDefaultPathOperation = function(t) { return Ke(t) && (p = t), this };
        var Ze = v.__private__.getStyle = v.getStyle = function(t) {
                var e = p;
                switch (t) {
                    case "D":
                    case "S":
                        e = "S";
                        break;
                    case "F":
                        e = "f";
                        break;
                    case "FD":
                    case "DF":
                        e = "B";
                        break;
                    case "f":
                    case "f*":
                    case "B":
                    case "B*":
                        e = t
                }
                return e
            },
            $e = v.close = function() { return ut("h"), this };
        v.stroke = function() { return ut("S"), this }, v.fill = function(t) { return Qe("f", t), this }, v.fillEvenOdd = function(t) { return Qe("f*", t), this }, v.fillStroke = function(t) { return Qe("B", t), this }, v.fillStrokeEvenOdd = function(t) { return Qe("B*", t), this };
        var Qe = function(t, e) { "object" == typeof e ? rr(e, t) : ut(t) },
            tr = function(t) { null === t || N === A.ADVANCED && void 0 === t || (t = Ze(t), ut(t)) };

        function er(t, e, r, n, i) {
            var a = new C(e || this.boundingBox, r || this.xStep, n || this.yStep, this.gState, i || this.matrix);
            a.stream = this.stream;
            var o = t + "$$" + this.cloneIndex++ + "$$";
            return Wt(o, a), a
        }
        var rr = function(t, e) {
                var r = Ct[t.key],
                    n = Ft[r];
                if (n instanceof F) ut("q"), ut(nr(e)), n.gState && v.setGState(n.gState), ut(t.matrix.toString() + " cm"), ut("/" + r + " sh"), ut("Q");
                else if (n instanceof C) {
                    var i = new Ut(1, 0, 0, -1, 0, Or());
                    t.matrix && (i = i.multiply(t.matrix || Vt), r = er.call(n, t.key, t.boundingBox, t.xStep, t.yStep, i).id), ut("q"), ut("/Pattern cs"), ut("/" + r + " scn"), n.gState && v.setGState(n.gState), ut(e), ut("Q")
                }
            },
            nr = function(t) {
                switch (t) {
                    case "f":
                    case "F":
                        return "W n";
                    case "f*":
                        return "W* n";
                    case "B":
                        return "W S";
                    case "B*":
                        return "W* S";
                    case "S":
                        return "W S";
                    case "n":
                        return "W n"
                }
            },
            ir = v.moveTo = function(t, e) { return ut(B(R(t)) + " " + B(D(e)) + " m"), this },
            ar = v.lineTo = function(t, e) { return ut(B(R(t)) + " " + B(D(e)) + " l"), this },
            or = v.curveTo = function(t, e, r, n, i, a) { return ut([B(R(t)), B(D(e)), B(R(r)), B(D(n)), B(R(i)), B(D(a)), "c"].join(" ")), this };
        v.__private__.line = v.line = function(t, e, r, n, i) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Ke(i)) throw new Error("Invalid arguments passed to jsPDF.line");
            return N === A.COMPAT ? this.lines([
                [r - t, n - e]
            ], t, e, [1, 1], i || "S") : this.lines([
                [r - t, n - e]
            ], t, e, [1, 1]).stroke()
        }, v.__private__.lines = v.lines = function(t, e, r, n, i, a) { var o, s, u, h, c, l, f, d, p, g, m, b; if ("number" == typeof t && (b = r, r = e, e = t, t = b), n = n || [1, 1], a = a || !1, isNaN(e) || isNaN(r) || !Array.isArray(t) || !Array.isArray(n) || !Ke(i) || "boolean" != typeof a) throw new Error("Invalid arguments passed to jsPDF.lines"); for (ir(e, r), o = n[0], s = n[1], h = t.length, g = e, m = r, u = 0; u < h; u++) 2 === (c = t[u]).length ? (g = c[0] * o + g, m = c[1] * s + m, ar(g, m)) : (l = c[0] * o + g, f = c[1] * s + m, d = c[2] * o + g, p = c[3] * s + m, g = c[4] * o + g, m = c[5] * s + m, or(l, f, d, p, g, m)); return a && $e(), tr(i), this }, v.path = function(t) {
            for (var e = 0; e < t.length; e++) {
                var r = t[e],
                    n = r.c;
                switch (r.op) {
                    case "m":
                        ir(n[0], n[1]);
                        break;
                    case "l":
                        ar(n[0], n[1]);
                        break;
                    case "c":
                        or.apply(this, n);
                        break;
                    case "h":
                        $e()
                }
            }
            return this
        }, v.__private__.rect = v.rect = function(t, e, r, n, i) { if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Ke(i)) throw new Error("Invalid arguments passed to jsPDF.rect"); return N === A.COMPAT && (n = -n), ut([B(R(t)), B(D(e)), B(R(r)), B(R(n)), "re"].join(" ")), tr(i), this }, v.__private__.triangle = v.triangle = function(t, e, r, n, i, a, o) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a) || !Ke(o)) throw new Error("Invalid arguments passed to jsPDF.triangle");
            return this.lines([
                [r - t, n - e],
                [i - r, a - n],
                [t - i, e - a]
            ], t, e, [1, 1], o, !0), this
        }, v.__private__.roundedRect = v.roundedRect = function(t, e, r, n, i, a, o) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a) || !Ke(o)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
            var s = 4 / 3 * (Math.SQRT2 - 1);
            return i = Math.min(i, .5 * r), a = Math.min(a, .5 * n), this.lines([
                [r - 2 * i, 0],
                [i * s, 0, i, a - a * s, i, a],
                [0, n - 2 * a],
                [0, a * s, -i * s, a, -i, a],
                [2 * i - r, 0],
                [-i * s, 0, -i, -a * s, -i, -a],
                [0, 2 * a - n],
                [0, -a * s, i * s, -a, i, -a]
            ], t + i, e, [1, 1], o, !0), this
        }, v.__private__.ellipse = v.ellipse = function(t, e, r, n, i) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Ke(i)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
            var a = 4 / 3 * (Math.SQRT2 - 1) * r,
                o = 4 / 3 * (Math.SQRT2 - 1) * n;
            return ir(t + r, e), or(t + r, e - o, t + a, e - n, t, e - n), or(t - a, e - n, t - r, e - o, t - r, e), or(t - r, e + o, t - a, e + n, t, e + n), or(t + a, e + n, t + r, e + o, t + r, e), tr(i), this
        }, v.__private__.circle = v.circle = function(t, e, r, n) { if (isNaN(t) || isNaN(e) || isNaN(r) || !Ke(n)) throw new Error("Invalid arguments passed to jsPDF.circle"); return this.ellipse(t, e, r, r, n) }, v.setFont = function(t, e) { return xt = Ee(t, e, { disableWarning: !1 }), this };
        var sr = v.__private__.getFont = v.getFont = function() { return kt[Ee.apply(v, arguments)] };
        v.__private__.getFontList = v.getFontList = function() {
            var t, e, r = {};
            for (t in Pt)
                if (Pt.hasOwnProperty(t))
                    for (e in r[t] = [], Pt[t]) Pt[t].hasOwnProperty(e) && r[t].push(e);
            return r
        }, v.addFont = function(t, e, r, n) { return n = n || "Identity-H", Ne.call(this, t, e, r, n) };
        var ur, hr = t.lineWidth || .200025,
            cr = v.__private__.setLineWidth = v.setLineWidth = function(t) { return ut(B(R(t)) + " w"), this };
        v.__private__.setLineDash = j.API.setLineDash = j.API.setLineDashPattern = function(t, e) { if (t = t || [], e = e || 0, isNaN(e) || !Array.isArray(t)) throw new Error("Invalid arguments passed to jsPDF.setLineDash"); return t = t.map((function(t) { return B(R(t)) })).join(" "), e = B(R(e)), ut("[" + t + "] " + e + " d"), this };
        var lr = v.__private__.getLineHeight = v.getLineHeight = function() { return ft * ur };
        v.__private__.getLineHeight = v.getLineHeight = function() { return ft * ur };
        var fr = v.__private__.setLineHeightFactor = v.setLineHeightFactor = function(t) { return "number" == typeof(t = t || 1.15) && (ur = t), this },
            dr = v.__private__.getLineHeightFactor = v.getLineHeightFactor = function() { return ur };
        fr(t.lineHeight);
        var pr = v.__private__.getHorizontalCoordinate = function(t) { return R(t) },
            gr = v.__private__.getVerticalCoordinate = function(t) { return N === A.ADVANCED ? t : Mt[X].mediaBox.topRightY - Mt[X].mediaBox.bottomLeftY - R(t) },
            mr = v.__private__.getHorizontalCoordinateString = v.getHorizontalCoordinateString = function(t) { return B(pr(t)) },
            br = v.__private__.getVerticalCoordinateString = v.getVerticalCoordinateString = function(t) { return B(gr(t)) },
            vr = t.strokeColor || "0 G";
        v.__private__.getStrokeColor = v.getDrawColor = function() { return $t(vr) }, v.__private__.setStrokeColor = v.setDrawColor = function(t, e, r, n) { return vr = Qt({ ch1: t, ch2: e, ch3: r, ch4: n, pdfColorType: "draw", precision: 2 }), ut(vr), this };
        var wr = t.fillColor || "0 g";
        v.__private__.getFillColor = v.getFillColor = function() { return $t(wr) }, v.__private__.setFillColor = v.setFillColor = function(t, e, r, n) { return wr = Qt({ ch1: t, ch2: e, ch3: r, ch4: n, pdfColorType: "fill", precision: 2 }), ut(wr), this };
        var yr = t.textColor || "0 g",
            _r = v.__private__.getTextColor = v.getTextColor = function() { return $t(yr) };
        v.__private__.setTextColor = v.setTextColor = function(t, e, r, n) { return yr = Qt({ ch1: t, ch2: e, ch3: r, ch4: n, pdfColorType: "text", precision: 3 }), this };
        var xr = t.charSpace,
            Ar = v.__private__.getCharSpace = v.getCharSpace = function() { return parseFloat(xr || 0) };
        v.__private__.setCharSpace = v.setCharSpace = function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setCharSpace"); return xr = t, this };
        var Nr = 0;
        v.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, v.__private__.setLineCap = v.setLineCap = function(t) { var e = v.CapJoinStyles[t]; if (void 0 === e) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles"); return Nr = e, ut(e + " J"), this };
        var Lr = 0;
        v.__private__.setLineJoin = v.setLineJoin = function(t) { var e = v.CapJoinStyles[t]; if (void 0 === e) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles"); return Lr = e, ut(e + " j"), this }, v.__private__.setLineMiterLimit = v.__private__.setMiterLimit = v.setLineMiterLimit = v.setMiterLimit = function(t) { if (t = t || 0, isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit"); return ut(B(R(t)) + " M"), this }, v.GState = P, v.setGState = function(t) {
            (t = "string" == typeof t ? jt[Bt[t]] : Sr(null, t)).equals(Et) || (ut("/" + t.id + " gs"), Et = t)
        };
        var Sr = function(t, e) {
            if (!t || !Bt[t]) {
                var r = !1;
                for (var n in jt)
                    if (jt.hasOwnProperty(n) && jt[n].equals(e)) { r = !0; break }
                if (r) e = jt[n];
                else {
                    var i = "GS" + (Object.keys(jt).length + 1).toString(10);
                    jt[i] = e, e.id = i
                }
                return t && (Bt[t] = e.id), qt.publish("addGState", e), e
            }
        };
        v.addGState = function(t, e) { return Sr(t, e), this }, v.saveGraphicsState = function() { return ut("q"), It.push({ key: xt, size: ft, color: yr }), this }, v.restoreGraphicsState = function() { ut("Q"); var t = It.pop(); return xt = t.key, ft = t.size, yr = t.color, Et = null, this }, v.setCurrentTransformationMatrix = function(t) { return ut(t.toString() + " cm"), this }, v.comment = function(t) { return ut("#" + t), this };
        var kr = function(t, e) {
                var r = t || 0;
                Object.defineProperty(this, "x", { enumerable: !0, get: function() { return r }, set: function(t) { isNaN(t) || (r = parseFloat(t)) } });
                var n = e || 0;
                Object.defineProperty(this, "y", { enumerable: !0, get: function() { return n }, set: function(t) { isNaN(t) || (n = parseFloat(t)) } });
                var i = "pt";
                return Object.defineProperty(this, "type", { enumerable: !0, get: function() { return i }, set: function(t) { i = t.toString() } }), this
            },
            Pr = function(t, e, r, n) {
                kr.call(this, t, e), this.type = "rect";
                var i = r || 0;
                Object.defineProperty(this, "w", { enumerable: !0, get: function() { return i }, set: function(t) { isNaN(t) || (i = parseFloat(t)) } });
                var a = n || 0;
                return Object.defineProperty(this, "h", { enumerable: !0, get: function() { return a }, set: function(t) { isNaN(t) || (a = parseFloat(t)) } }), this
            },
            Ir = function() { this.page = Ot, this.currentPage = X, this.pages = nt.slice(0), this.pagesContext = Mt.slice(0), this.x = Nt, this.y = Lt, this.matrix = St, this.width = Br(X), this.height = Or(X), this.outputDestination = at, this.id = "", this.objectNumber = -1 };
        Ir.prototype.restore = function() { Ot = this.page, X = this.currentPage, Mt = this.pagesContext, nt = this.pages, Nt = this.x, Lt = this.y, St = this.matrix, Er(X, this.width), Mr(X, this.height), at = this.outputDestination };
        var Fr = function(t, e, r, n, i) { zt.push(new Ir), Ot = X = 0, nt = [], Nt = t, Lt = e, St = i, Ie([r, n]) },
            Cr = function(t) {
                if (!Dt[t]) {
                    var e = new Ir,
                        r = "Xo" + (Object.keys(Tt).length + 1).toString(10);
                    e.id = r, Dt[t] = r, Tt[r] = e, qt.publish("addFormObject", e), zt.pop().restore()
                }
            };
        for (var jr in v.beginFormObject = function(t, e, r, n, i) { return Fr(t, e, r, n, i), this }, v.endFormObject = function(t) { return Cr(t), this }, v.doFormObject = function(t, e) { var r = Tt[Dt[t]]; return ut("q"), ut(e.toString() + " cm"), ut("/" + r.id + " Do"), ut("Q"), this }, v.getFormObject = function(t) { var e = Tt[Dt[t]]; return { x: e.x, y: e.y, width: e.width, height: e.height, matrix: e.matrix } }, v.save = function(t, r) { return t = t || "generated.pdf", (r = r || {}).returnPromise = r.returnPromise || !1, !1 === r.returnPromise ? (h(ze(De()), t), "function" == typeof h.unload && e.setTimeout && setTimeout(h.unload, 911), this) : new Promise((function(r, n) { try { var i = h(ze(De()), t); "function" == typeof h.unload && e.setTimeout && setTimeout(h.unload, 911), r(i) } catch (t) { n(t.message) } })) }, j.API) j.API.hasOwnProperty(jr) && ("events" === jr && j.API.events.length ? function(t, e) { var r, n, i; for (i = e.length - 1; - 1 !== i; i--) r = e[i][0], n = e[i][1], t.subscribe.apply(t, [r].concat("function" == typeof n ? [n] : n)) }(qt, j.API.events) : v[jr] = j.API[jr]);
        var Br = v.getPageWidth = function(t) { return (Mt[t = t || X].mediaBox.topRightX - Mt[t].mediaBox.bottomLeftX) / At },
            Er = v.setPageWidth = function(t, e) { Mt[t].mediaBox.topRightX = e * At + Mt[t].mediaBox.bottomLeftX },
            Or = v.getPageHeight = function(t) { return (Mt[t = t || X].mediaBox.topRightY - Mt[t].mediaBox.bottomLeftY) / At },
            Mr = v.setPageHeight = function(t, e) { Mt[t].mediaBox.topRightY = e * At + Mt[t].mediaBox.bottomLeftY };
        return v.internal = { pdfEscape: Pe, getStyle: Ze, getFont: sr, getFontSize: pt, getCharSpace: Ar, getTextColor: _r, getLineHeight: lr, getLineHeightFactor: dr, write: ht, getHorizontalCoordinate: pr, getVerticalCoordinate: gr, getCoordinateString: mr, getVerticalCoordinateString: br, collections: {}, newObject: Gt, newAdditionalObject: Xt, newObjectDeferred: Yt, newObjectDeferredBegin: Jt, getFilters: te, putStream: ee, events: qt, scaleFactor: At, pageSize: { getWidth: function() { return Br(X) }, setWidth: function(t) { Er(X, t) }, getHeight: function() { return Or(X) }, setHeight: function(t) { Mr(X, t) } }, encryptionOptions: g, encryption: Ve, getEncryptor: We, output: Ue, getNumberOfPages: Be, pages: nt, out: ut, f2: M, f3: q, getPageInfo: Ge, getPageInfoByObjId: Ye, getCurrentPageInfo: Je, getPDFVersion: y, Point: kr, Rectangle: Pr, Matrix: Ut, hasHotfix: He }, Object.defineProperty(v.internal.pageSize, "width", { get: function() { return Br(X) }, set: function(t) { Er(X, t) }, enumerable: !0, configurable: !0 }), Object.defineProperty(v.internal.pageSize, "height", { get: function() { return Or(X) }, set: function(t) { Mr(X, t) }, enumerable: !0, configurable: !0 }), Le.call(v, lt), xt = "F1", Fe(o, i), qt.publish("initialized"), v
    }
    S.prototype.lsbFirstWord = function(t) { return String.fromCharCode(t >> 0 & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255) }, S.prototype.toHexString = function(t) { return t.split("").map((function(t) { return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2) })).join("") }, S.prototype.hexToBytes = function(t) { for (var e = [], r = 0; r < t.length; r += 2) e.push(String.fromCharCode(parseInt(t.substr(r, 2), 16))); return e.join("") }, S.prototype.processOwnerPassword = function(t, e) { return N(x(e).substr(0, 5), t) }, S.prototype.encryptor = function(t, e) { let r = x(this.encryptionKey + String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10); return function(t) { return N(r, t) } }, P.prototype.equals = function(t) {
        var e, r = "id,objectNumber,equals";
        if (!t || typeof t != typeof this) return !1;
        var n = 0;
        for (e in this)
            if (!(r.indexOf(e) >= 0)) {
                if (this.hasOwnProperty(e) && !t.hasOwnProperty(e)) return !1;
                if (this[e] !== t[e]) return !1;
                n++
            }
        for (e in t) t.hasOwnProperty(e) && r.indexOf(e) < 0 && n--;
        return 0 === n
    }, j.API = { events: [] }, j.version = "2.2.0";
    var B = j.API,
        E = 1,
        O = function(t) { return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)") },
        M = function(t) { return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")") },
        q = function(t) { return t.toFixed(2) },
        R = function(t) { return t.toFixed(5) };
    B.__acroform__ = {};
    var T = function(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t },
        D = function(t) { return t * E },
        z = function(t) {
            var e = new at,
                r = wt.internal.getHeight(t) || 0,
                n = wt.internal.getWidth(t) || 0;
            return e.BBox = [0, 0, Number(q(n)), Number(q(r))], e
        },
        U = B.__acroform__.setBit = function(t, e) { if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit"); return t |= 1 << e },
        H = B.__acroform__.clearBit = function(t, e) { if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit"); return t &= ~(1 << e) },
        V = B.__acroform__.getBit = function(t, e) { if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit"); return 0 == (t & 1 << e) ? 0 : 1 },
        W = B.__acroform__.getBitForPdf = function(t, e) { if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf"); return V(t, e - 1) },
        G = B.__acroform__.setBitForPdf = function(t, e) { if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf"); return U(t, e - 1) },
        Y = B.__acroform__.clearBitForPdf = function(t, e) { if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf"); return H(t, e - 1) },
        J = B.__acroform__.calculateCoordinates = function(t, e) {
            var r = e.internal.getHorizontalCoordinate,
                n = e.internal.getVerticalCoordinate,
                i = t[0],
                a = t[1],
                o = t[2],
                s = t[3],
                u = {};
            return u.lowerLeft_X = r(i) || 0, u.lowerLeft_Y = n(a + s) || 0, u.upperRight_X = r(i + o) || 0, u.upperRight_Y = n(a) || 0, [Number(q(u.lowerLeft_X)), Number(q(u.lowerLeft_Y)), Number(q(u.upperRight_X)), Number(q(u.upperRight_Y))]
        },
        X = function(t) {
            if (t.appearanceStreamContent) return t.appearanceStreamContent;
            if (t.V || t.DV) {
                var e = [],
                    r = t._V || t.DV,
                    n = K(t, r),
                    i = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
                e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(t.scope.__private__.encodeColorString(t.color)), e.push("/" + i + " " + q(n.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(n.text), e.push("ET"), e.push("Q"), e.push("EMC");
                var a = z(t);
                return a.scope = t.scope, a.stream = e.join("\n"), a
            }
        },
        K = function(t, e) {
            var r = 0 === t.fontSize ? t.maxFontSize : t.fontSize,
                n = { text: "", fontSize: "" },
                i = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" "),
                a = r,
                o = wt.internal.getHeight(t) || 0;
            o = o < 0 ? -o : o;
            var s = wt.internal.getWidth(t) || 0;
            s = s < 0 ? -s : s;
            var u = function(e, r, n) { if (e + 1 < i.length) { var a = r + " " + i[e + 1]; return Z(a, t, n).width <= s - 4 } return !1 };
            a++;
            t: for (; a > 0;) {
                e = "", a--;
                var h, c, l = Z("3", t, a).height,
                    f = t.multiline ? o - a : (o - l) / 2,
                    d = f += 2,
                    p = 0,
                    g = 0;
                if (a <= 0) { e = "(...) Tj\n", e += "% Width of Text: " + Z(e, t, a = 12).width + ", FieldWidth:" + s + "\n"; break }
                var m = "",
                    b = 0;
                for (var v in i)
                    if (i.hasOwnProperty(v)) {
                        m = " " == (m += i[v] + " ").substr(m.length - 1) ? m.substr(0, m.length - 1) : m;
                        var w = parseInt(v),
                            y = u(w, m, a),
                            _ = v >= i.length - 1;
                        if (y && !_) { m += " "; continue }
                        if (y || _) {
                            if (_) g = w;
                            else if (t.multiline && (l + 2) * (b + 2) + 2 > o) continue t
                        } else {
                            if (!t.multiline) continue t;
                            if ((l + 2) * (b + 2) + 2 > o) continue t;
                            g = w
                        }
                        for (var x = "", A = p; A <= g; A++) x += i[A] + " ";
                        switch (x = " " == x.substr(x.length - 1) ? x.substr(0, x.length - 1) : x, c = Z(x, t, a).width, t.textAlign) {
                            case "right":
                                h = s - c - 2;
                                break;
                            case "center":
                                h = (s - c) / 2;
                                break;
                            case "left":
                            default:
                                h = 2
                        }
                        e += q(h) + " " + q(d) + " Td\n", e += "(" + O(x) + ") Tj\n", e += -q(h) + " 0 Td\n", d = -(a + 2), c = 0, p = g + 1, b++, m = ""
                    } else;
                break
            }
            return n.text = e, n.fontSize = a, n
        },
        Z = function(t, e, r) {
            var n = e.scope.internal.getFont(e.fontName, e.fontStyle),
                i = e.scope.getStringUnitWidth(t, { font: n, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r);
            return { height: e.scope.getStringUnitWidth("3", { font: n, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r) * 1.5, width: i }
        },
        $ = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 },
        Q = function(t, e) {
            var r = { type: "reference", object: t };
            void 0 === e.internal.getPageInfo(t.page).pageContext.annotations.find((function(t) { return t.type === r.type && t.object === r.object })) && e.internal.getPageInfo(t.page).pageContext.annotations.push(r)
        },
        tt = function(t, e) {
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var n = r,
                        i = t[r];
                    e.internal.newObjectDeferredBegin(i.objId, !0), "object" == typeof i && "function" == typeof i.putStream && i.putStream(), delete t[n]
                }
        },
        et = function(t, e) {
            if (e.scope = t, void 0 !== t.internal && (void 0 === t.internal.acroformPlugin || !1 === t.internal.acroformPlugin.isInitialized)) {
                if (st.FieldNum = 0, t.internal.acroformPlugin = JSON.parse(JSON.stringify($)), t.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
                E = t.internal.scaleFactor, t.internal.acroformPlugin.acroFormDictionaryRoot = new ot, t.internal.acroformPlugin.acroFormDictionaryRoot.scope = t, t.internal.acroformPlugin.acroFormDictionaryRoot._eventID = t.internal.events.subscribe("postPutResources", (function() {! function(t) { t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = !0 }(t) })), t.internal.events.subscribe("buildDocument", (function() {
                    ! function(t) {
                        t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                        var e = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                        for (var r in e)
                            if (e.hasOwnProperty(r)) {
                                var n = e[r];
                                n.objId = void 0, n.hasAnnotation && Q(n, t)
                            }
                    }(t)
                })), t.internal.events.subscribe("putCatalog", (function() {
                    ! function(t) {
                        if (void 0 === t.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
                        t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
                    }(t)
                })), t.internal.events.subscribe("postPutPages", (function(e) {
                    ! function(t, e) {
                        var r = !t;
                        for (var n in t || (e.internal.newObjectDeferredBegin(e.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), e.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), t = t || e.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
                            if (t.hasOwnProperty(n)) {
                                var i = t[n],
                                    a = [],
                                    o = i.Rect;
                                if (i.Rect && (i.Rect = J(i.Rect, e)), e.internal.newObjectDeferredBegin(i.objId, !0), i.DA = wt.createDefaultAppearanceStream(i), "object" == typeof i && "function" == typeof i.getKeyValueListForStream && (a = i.getKeyValueListForStream()), i.Rect = o, i.hasAppearanceStream && !i.appearanceStreamContent) {
                                    var s = X(i);
                                    a.push({ key: "AP", value: "<</N " + s + ">>" }), e.internal.acroformPlugin.xForms.push(s)
                                }
                                if (i.appearanceStreamContent) {
                                    var u = "";
                                    for (var h in i.appearanceStreamContent)
                                        if (i.appearanceStreamContent.hasOwnProperty(h)) {
                                            var c = i.appearanceStreamContent[h];
                                            if (u += "/" + h + " ", u += "<<", Object.keys(c).length >= 1 || Array.isArray(c)) {
                                                for (var n in c)
                                                    if (c.hasOwnProperty(n)) { var l = c[n]; "function" == typeof l && (l = l.call(e, i)), u += "/" + n + " " + l + " ", e.internal.acroformPlugin.xForms.indexOf(l) >= 0 || e.internal.acroformPlugin.xForms.push(l) }
                                            } else "function" == typeof(l = c) && (l = l.call(e, i)), u += "/" + n + " " + l, e.internal.acroformPlugin.xForms.indexOf(l) >= 0 || e.internal.acroformPlugin.xForms.push(l);
                                            u += ">>"
                                        }
                                    a.push({ key: "AP", value: "<<\n" + u + ">>" })
                                }
                                e.internal.putStream({ additionalKeyValues: a, objectId: i.objId }), e.internal.out("endobj")
                            }
                        r && tt(e.internal.acroformPlugin.xForms, e)
                    }(e, t)
                })), t.internal.acroformPlugin.isInitialized = !0
            }
        },
        rt = B.__acroform__.arrayToPdfArray = function(t, e, r) {
            var n = function(t) { return t };
            if (Array.isArray(t)) {
                for (var i = "[", a = 0; a < t.length; a++) switch (0 !== a && (i += " "), typeof t[a]) {
                    case "boolean":
                    case "number":
                    case "object":
                        i += t[a].toString();
                        break;
                    case "string":
                        "/" !== t[a].substr(0, 1) ? (void 0 !== e && r && (n = r.internal.getEncryptor(e)), i += "(" + O(n(t[a].toString())) + ")") : i += t[a].toString()
                }
                return i += "]"
            }
            throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
        };
    var nt = function(t, e, r) { var n = function(t) { return t }; return void 0 !== e && r && (n = r.internal.getEncryptor(e)), (t = t || "").toString(), t = "(" + O(n(t)) + ")" },
        it = function() {
            this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
                get: function() {
                    if (void 0 === this._objId) {
                        if (void 0 === this.scope) return;
                        this._objId = this.scope.internal.newObjectDeferred()
                    }
                    return this._objId
                },
                set: function(t) { this._objId = t }
            }), Object.defineProperty(this, "scope", { value: this._scope, writable: !0 })
        };
    it.prototype.toString = function() { return this.objId + " 0 R" }, it.prototype.putStream = function() {
        var t = this.getKeyValueListForStream();
        this.scope.internal.putStream({ data: this.stream, additionalKeyValues: t, objectId: this.objId }), this.scope.internal.out("endobj")
    }, it.prototype.getKeyValueListForStream = function() {
        var t = [],
            e = Object.getOwnPropertyNames(this).filter((function(t) { return "content" != t && "appearanceStreamContent" != t && "scope" != t && "objId" != t && "_" != t.substring(0, 1) }));
        for (var r in e)
            if (!1 === Object.getOwnPropertyDescriptor(this, e[r]).configurable) {
                var n = e[r],
                    i = this[n];
                i && (Array.isArray(i) ? t.push({ key: n, value: rt(i, this.objId, this.scope) }) : i instanceof it ? (i.scope = this.scope, t.push({ key: n, value: i.objId + " 0 R" })) : "function" != typeof i && t.push({ key: n, value: i }))
            }
        return t
    };
    var at = function() {
        it.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
        var t, e = [];
        Object.defineProperty(this, "BBox", { configurable: !1, get: function() { return e }, set: function(t) { e = t } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(e) { t = e.trim() }, get: function() { return t || null } })
    };
    T(at, it);
    var ot = function() {
        it.call(this);
        var t, e = [];
        Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() { return e.length > 0 ? e : void 0 } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() { return e } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() { if (t) { var e = function(t) { return t }; return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + O(e(t)) + ")" } }, set: function(e) { t = e } })
    };
    T(ot, it);
    var st = function() {
        it.call(this);
        var t = 4;
        Object.defineProperty(this, "F", {
            enumerable: !1,
            configurable: !1,
            get: function() { return t },
            set: function(e) {
                if (isNaN(e)) throw new Error('Invalid value "' + e + '" for attribute F supplied.');
                t = e
            }
        }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(t, 3)) }, set: function(e) {!0 === Boolean(e) ? this.F = G(t, 3) : this.F = Y(t, 3) } });
        var e = 0;
        Object.defineProperty(this, "Ff", {
            enumerable: !1,
            configurable: !1,
            get: function() { return e },
            set: function(t) {
                if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
                e = t
            }
        });
        var r = [];
        Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() { if (0 !== r.length) return r }, set: function(t) { r = void 0 !== t ? t : [] } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() { return !r || isNaN(r[0]) ? 0 : r[0] }, set: function(t) { r[0] = t } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() { return !r || isNaN(r[1]) ? 0 : r[1] }, set: function(t) { r[1] = t } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() { return !r || isNaN(r[2]) ? 0 : r[2] }, set: function(t) { r[2] = t } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() { return !r || isNaN(r[3]) ? 0 : r[3] }, set: function(t) { r[3] = t } });
        var n = "";
        Object.defineProperty(this, "FT", {
            enumerable: !0,
            configurable: !1,
            get: function() { return n },
            set: function(t) {
                switch (t) {
                    case "/Btn":
                    case "/Tx":
                    case "/Ch":
                    case "/Sig":
                        n = t;
                        break;
                    default:
                        throw new Error('Invalid value "' + t + '" for attribute FT supplied.')
                }
            }
        });
        var i = null;
        Object.defineProperty(this, "T", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                if (!i || i.length < 1) {
                    if (this instanceof gt) return;
                    i = "FieldObject" + st.FieldNum++
                }
                var t = function(t) { return t };
                return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + O(t(i)) + ")"
            },
            set: function(t) { i = t.toString() }
        }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() { return i }, set: function(t) { i = t } });
        var a = "helvetica";
        Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() { return a }, set: function(t) { a = t } });
        var o = "normal";
        Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() { return o }, set: function(t) { o = t } });
        var s = 0;
        Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() { return s }, set: function(t) { s = t } });
        var u = void 0;
        Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() { return void 0 === u ? 50 / E : u }, set: function(t) { u = t } });
        var h = "black";
        Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() { return h }, set: function(t) { h = t } });
        var c = "/F1 0 Tf 0 g";
        Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() { if (!(!c || this instanceof gt || this instanceof bt)) return nt(c, this.objId, this.scope) }, set: function(t) { t = t.toString(), c = t } });
        var l = null;
        Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() { if (l) return this instanceof ft == !1 ? nt(l, this.objId, this.scope) : l }, set: function(t) { t = t.toString(), l = this instanceof ft == !1 ? "(" === t.substr(0, 1) ? M(t.substr(1, t.length - 2)) : M(t) : t } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() { return this instanceof ft == !0 ? M(l.substr(1, l.length - 1)) : l }, set: function(t) { t = t.toString(), l = this instanceof ft == !0 ? "/" + t : t } });
        var f = null;
        Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() { if (f) return f }, set: function(t) { this.V = t } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() { if (f) return this instanceof ft == !1 ? nt(f, this.objId, this.scope) : f }, set: function(t) { t = t.toString(), f = this instanceof ft == !1 ? "(" === t.substr(0, 1) ? M(t.substr(1, t.length - 2)) : M(t) : t } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() { return this instanceof ft == !0 ? M(f.substr(1, f.length - 1)) : f }, set: function(t) { t = t.toString(), f = this instanceof ft == !0 ? "/" + t : t } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() { return this.Rect } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() { return this.hasAnnotation ? "/Annot" : null } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() { return this.hasAnnotation ? "/Widget" : null } });
        var d, p = !1;
        Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() { return p }, set: function(t) { t = Boolean(t), p = t } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, get: function() { if (d) return d }, set: function(t) { d = t } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 1)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 1) : this.Ff = Y(this.Ff, 1) } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 2)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 2) : this.Ff = Y(this.Ff, 2) } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 3)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 3) : this.Ff = Y(this.Ff, 3) } });
        var g = null;
        Object.defineProperty(this, "Q", {
            enumerable: !0,
            configurable: !1,
            get: function() { if (null !== g) return g },
            set: function(t) {
                if (-1 === [0, 1, 2].indexOf(t)) throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
                g = t
            }
        }), Object.defineProperty(this, "textAlign", {
            get: function() {
                var t;
                switch (g) {
                    case 0:
                    default:
                        t = "left";
                        break;
                    case 1:
                        t = "center";
                        break;
                    case 2:
                        t = "right"
                }
                return t
            },
            configurable: !0,
            enumerable: !0,
            set: function(t) {
                switch (t) {
                    case "right":
                    case 2:
                        g = 2;
                        break;
                    case "center":
                    case 1:
                        g = 1;
                        break;
                    case "left":
                    case 0:
                    default:
                        g = 0
                }
            }
        })
    };
    T(st, it);
    var ut = function() {
        st.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
        var t = 0;
        Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() { return t }, set: function(e) { t = e } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() { return t }, set: function(e) { t = e } });
        var e = [];
        Object.defineProperty(this, "Opt", {
            enumerable: !0,
            configurable: !1,
            get: function() { return rt(e, this.objId, this.scope) },
            set: function(t) {
                var r, n;
                n = [], "string" == typeof(r = t) && (n = function(t, e, r) { r || (r = 1); for (var n, i = []; n = e.exec(t);) i.push(n[r]); return i }(r, /\((.*?)\)/g)), e = n
            }
        }), this.getOptions = function() { return e }, this.setOptions = function(t) { e = t, this.sort && e.sort() }, this.addOption = function(t) { t = (t = t || "").toString(), e.push(t), this.sort && e.sort() }, this.removeOption = function(t, r) { for (r = r || !1, t = (t = t || "").toString(); - 1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1), !1 !== r);); }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 18)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 18) : this.Ff = Y(this.Ff, 18) } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 19)) }, set: function(t) {!0 === this.combo && (!0 === Boolean(t) ? this.Ff = G(this.Ff, 19) : this.Ff = Y(this.Ff, 19)) } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 20)) }, set: function(t) {!0 === Boolean(t) ? (this.Ff = G(this.Ff, 20), e.sort()) : this.Ff = Y(this.Ff, 20) } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 22)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 22) : this.Ff = Y(this.Ff, 22) } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 23)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 23) : this.Ff = Y(this.Ff, 23) } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 27)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 27) : this.Ff = Y(this.Ff, 27) } }), this.hasAppearanceStream = !1
    };
    T(ut, st);
    var ht = function() { ut.call(this), this.fontName = "helvetica", this.combo = !1 };
    T(ht, ut);
    var ct = function() { ht.call(this), this.combo = !0 };
    T(ct, ht);
    var lt = function() { ct.call(this), this.edit = !0 };
    T(lt, ct);
    var ft = function() {
        st.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 15)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 15) : this.Ff = Y(this.Ff, 15) } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 16)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 16) : this.Ff = Y(this.Ff, 16) } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 17)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 17) : this.Ff = Y(this.Ff, 17) } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 26)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 26) : this.Ff = Y(this.Ff, 26) } });
        var t, e = {};
        Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() { var t = function(t) { return t }; if (this.scope && (t = this.scope.internal.getEncryptor(this.objId)), 0 !== Object.keys(e).length) { var r, n = []; for (r in n.push("<<"), e) n.push("/" + r + " (" + O(t(e[r])) + ")"); return n.push(">>"), n.join("\n") } }, set: function(t) { "object" == typeof t && (e = t) } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() { return e.CA || "" }, set: function(t) { "string" == typeof t && (e.CA = t) } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() { return t }, set: function(e) { t = e } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() { return t.substr(1, t.length - 1) }, set: function(e) { t = "/" + e } })
    };
    T(ft, st);
    var dt = function() { ft.call(this), this.pushButton = !0 };
    T(dt, ft);
    var pt = function() {
        ft.call(this), this.radio = !0, this.pushButton = !1;
        var t = [];
        Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() { return t }, set: function(e) { t = void 0 !== e ? e : [] } })
    };
    T(pt, ft);
    var gt = function() {
        var t, e;
        st.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() { return t }, set: function(e) { t = e } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() { return e }, set: function(t) { e = t } });
        var r, n = {};
        Object.defineProperty(this, "MK", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                var t = function(t) { return t };
                this.scope && (t = this.scope.internal.getEncryptor(this.objId));
                var e, r = [];
                for (e in r.push("<<"), n) r.push("/" + e + " (" + O(t(n[e])) + ")");
                return r.push(">>"), r.join("\n")
            },
            set: function(t) { "object" == typeof t && (n = t) }
        }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() { return n.CA || "" }, set: function(t) { "string" == typeof t && (n.CA = t) } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() { return r }, set: function(t) { r = t } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() { return r.substr(1, r.length - 1) }, set: function(t) { r = "/" + t } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = wt.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName)
    };
    T(gt, st), pt.prototype.setAppearance = function(t) {
        if (!("createAppearanceStream" in t) || !("getCA" in t)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
        for (var e in this.Kids)
            if (this.Kids.hasOwnProperty(e)) {
                var r = this.Kids[e];
                r.appearanceStreamContent = t.createAppearanceStream(r.optionName), r.caption = t.getCA()
            }
    }, pt.prototype.createOption = function(t) { var e = new gt; return e.Parent = this, e.optionName = t, this.Kids.push(e), yt.call(this.scope, e), e };
    var mt = function() { ft.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = wt.CheckBox.createAppearanceStream() };
    T(mt, ft);
    var bt = function() {
        st.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 13)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 13) : this.Ff = Y(this.Ff, 13) } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 21)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 21) : this.Ff = Y(this.Ff, 21) } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 23)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 23) : this.Ff = Y(this.Ff, 23) } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 24)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 24) : this.Ff = Y(this.Ff, 24) } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 25)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 25) : this.Ff = Y(this.Ff, 25) } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 26)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 26) : this.Ff = Y(this.Ff, 26) } });
        var t = null;
        Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() { return t }, set: function(e) { t = e } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() { return t }, set: function(e) { Number.isInteger(e) && (t = e) } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() { return this.V || this.DV } })
    };
    T(bt, st);
    var vt = function() { bt.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() { return Boolean(W(this.Ff, 14)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = G(this.Ff, 14) : this.Ff = Y(this.Ff, 14) } }), this.password = !0 };
    T(vt, bt);
    var wt = {
        CheckBox: {
            createAppearanceStream: function() { return { N: { On: wt.CheckBox.YesNormal }, D: { On: wt.CheckBox.YesPushDown, Off: wt.CheckBox.OffPushDown } } },
            YesPushDown: function(t) {
                var e = z(t);
                e.scope = t.scope;
                var r = [],
                    n = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
                    i = t.scope.__private__.encodeColorString(t.color),
                    a = K(t, t.caption);
                return r.push("0.749023 g"), r.push("0 0 " + q(wt.internal.getWidth(t)) + " " + q(wt.internal.getHeight(t)) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + n + " " + q(a.fontSize) + " Tf " + i), r.push("BT"), r.push(a.text), r.push("ET"), r.push("Q"), r.push("EMC"), e.stream = r.join("\n"), e
            },
            YesNormal: function(t) {
                var e = z(t);
                e.scope = t.scope;
                var r = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
                    n = t.scope.__private__.encodeColorString(t.color),
                    i = [],
                    a = wt.internal.getHeight(t),
                    o = wt.internal.getWidth(t),
                    s = K(t, t.caption);
                return i.push("1 g"), i.push("0 0 " + q(o) + " " + q(a) + " re"), i.push("f"), i.push("q"), i.push("0 0 1 rg"), i.push("0 0 " + q(o - 1) + " " + q(a - 1) + " re"), i.push("W"), i.push("n"), i.push("0 g"), i.push("BT"), i.push("/" + r + " " + q(s.fontSize) + " Tf " + n), i.push(s.text), i.push("ET"), i.push("Q"), e.stream = i.join("\n"), e
            },
            OffPushDown: function(t) {
                var e = z(t);
                e.scope = t.scope;
                var r = [];
                return r.push("0.749023 g"), r.push("0 0 " + q(wt.internal.getWidth(t)) + " " + q(wt.internal.getHeight(t)) + " re"), r.push("f"), e.stream = r.join("\n"), e
            }
        },
        RadioButton: {
            Circle: {
                createAppearanceStream: function(t) { var e = { D: { Off: wt.RadioButton.Circle.OffPushDown }, N: {} }; return e.N[t] = wt.RadioButton.Circle.YesNormal, e.D[t] = wt.RadioButton.Circle.YesPushDown, e },
                getCA: function() { return "l" },
                YesNormal: function(t) {
                    var e = z(t);
                    e.scope = t.scope;
                    var r = [],
                        n = wt.internal.getWidth(t) <= wt.internal.getHeight(t) ? wt.internal.getWidth(t) / 4 : wt.internal.getHeight(t) / 4;
                    n = Number((.9 * n).toFixed(5));
                    var i = wt.internal.Bezier_C,
                        a = Number((n * i).toFixed(5));
                    return r.push("q"), r.push("1 0 0 1 " + R(wt.internal.getWidth(t) / 2) + " " + R(wt.internal.getHeight(t) / 2) + " cm"), r.push(n + " 0 m"), r.push(n + " " + a + " " + a + " " + n + " 0 " + n + " c"), r.push("-" + a + " " + n + " -" + n + " " + a + " -" + n + " 0 c"), r.push("-" + n + " -" + a + " -" + a + " -" + n + " 0 -" + n + " c"), r.push(a + " -" + n + " " + n + " -" + a + " " + n + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join("\n"), e
                },
                YesPushDown: function(t) {
                    var e = z(t);
                    e.scope = t.scope;
                    var r = [],
                        n = wt.internal.getWidth(t) <= wt.internal.getHeight(t) ? wt.internal.getWidth(t) / 4 : wt.internal.getHeight(t) / 4;
                    n = Number((.9 * n).toFixed(5));
                    var i = Number((2 * n).toFixed(5)),
                        a = Number((i * wt.internal.Bezier_C).toFixed(5)),
                        o = Number((n * wt.internal.Bezier_C).toFixed(5));
                    return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + R(wt.internal.getWidth(t) / 2) + " " + R(wt.internal.getHeight(t) / 2) + " cm"), r.push(i + " 0 m"), r.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), r.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), r.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), r.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), r.push("f"), r.push("Q"), r.push("0 g"), r.push("q"), r.push("1 0 0 1 " + R(wt.internal.getWidth(t) / 2) + " " + R(wt.internal.getHeight(t) / 2) + " cm"), r.push(n + " 0 m"), r.push(n + " " + o + " " + o + " " + n + " 0 " + n + " c"), r.push("-" + o + " " + n + " -" + n + " " + o + " -" + n + " 0 c"), r.push("-" + n + " -" + o + " -" + o + " -" + n + " 0 -" + n + " c"), r.push(o + " -" + n + " " + n + " -" + o + " " + n + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join("\n"), e
                },
                OffPushDown: function(t) {
                    var e = z(t);
                    e.scope = t.scope;
                    var r = [],
                        n = wt.internal.getWidth(t) <= wt.internal.getHeight(t) ? wt.internal.getWidth(t) / 4 : wt.internal.getHeight(t) / 4;
                    n = Number((.9 * n).toFixed(5));
                    var i = Number((2 * n).toFixed(5)),
                        a = Number((i * wt.internal.Bezier_C).toFixed(5));
                    return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + R(wt.internal.getWidth(t) / 2) + " " + R(wt.internal.getHeight(t) / 2) + " cm"), r.push(i + " 0 m"), r.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), r.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), r.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), r.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join("\n"), e
                }
            },
            Cross: {
                createAppearanceStream: function(t) { var e = { D: { Off: wt.RadioButton.Cross.OffPushDown }, N: {} }; return e.N[t] = wt.RadioButton.Cross.YesNormal, e.D[t] = wt.RadioButton.Cross.YesPushDown, e },
                getCA: function() { return "8" },
                YesNormal: function(t) {
                    var e = z(t);
                    e.scope = t.scope;
                    var r = [],
                        n = wt.internal.calculateCross(t);
                    return r.push("q"), r.push("1 1 " + q(wt.internal.getWidth(t) - 2) + " " + q(wt.internal.getHeight(t) - 2) + " re"), r.push("W"), r.push("n"), r.push(q(n.x1.x) + " " + q(n.x1.y) + " m"), r.push(q(n.x2.x) + " " + q(n.x2.y) + " l"), r.push(q(n.x4.x) + " " + q(n.x4.y) + " m"), r.push(q(n.x3.x) + " " + q(n.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join("\n"), e
                },
                YesPushDown: function(t) {
                    var e = z(t);
                    e.scope = t.scope;
                    var r = wt.internal.calculateCross(t),
                        n = [];
                    return n.push("0.749023 g"), n.push("0 0 " + q(wt.internal.getWidth(t)) + " " + q(wt.internal.getHeight(t)) + " re"), n.push("f"), n.push("q"), n.push("1 1 " + q(wt.internal.getWidth(t) - 2) + " " + q(wt.internal.getHeight(t) - 2) + " re"), n.push("W"), n.push("n"), n.push(q(r.x1.x) + " " + q(r.x1.y) + " m"), n.push(q(r.x2.x) + " " + q(r.x2.y) + " l"), n.push(q(r.x4.x) + " " + q(r.x4.y) + " m"), n.push(q(r.x3.x) + " " + q(r.x3.y) + " l"), n.push("s"), n.push("Q"), e.stream = n.join("\n"), e
                },
                OffPushDown: function(t) {
                    var e = z(t);
                    e.scope = t.scope;
                    var r = [];
                    return r.push("0.749023 g"), r.push("0 0 " + q(wt.internal.getWidth(t)) + " " + q(wt.internal.getHeight(t)) + " re"), r.push("f"), e.stream = r.join("\n"), e
                }
            }
        },
        createDefaultAppearanceStream: function(t) {
            var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
                r = t.scope.__private__.encodeColorString(t.color);
            return "/" + e + " " + t.fontSize + " Tf " + r
        }
    };
    wt.internal = {
        Bezier_C: .551915024494,
        calculateCross: function(t) {
            var e = wt.internal.getWidth(t),
                r = wt.internal.getHeight(t),
                n = Math.min(e, r);
            return { x1: { x: (e - n) / 2, y: (r - n) / 2 + n }, x2: { x: (e - n) / 2 + n, y: (r - n) / 2 }, x3: { x: (e - n) / 2, y: (r - n) / 2 }, x4: { x: (e - n) / 2 + n, y: (r - n) / 2 + n } }
        }
    }, wt.internal.getWidth = function(t) { var e = 0; return "object" == typeof t && (e = D(t.Rect[2])), e }, wt.internal.getHeight = function(t) { var e = 0; return "object" == typeof t && (e = D(t.Rect[3])), e };
    var yt = B.addField = function(t) { if (et(this, t), !(t instanceof st)) throw new Error("Invalid argument passed to jsPDF.addField."); var e; return (e = t).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), t.page = t.scope.internal.getCurrentPageInfo().pageNumber, this };
    B.AcroFormChoiceField = ut, B.AcroFormListBox = ht, B.AcroFormComboBox = ct, B.AcroFormEditBox = lt, B.AcroFormButton = ft, B.AcroFormPushButton = dt, B.AcroFormRadioButton = pt, B.AcroFormCheckBox = mt, B.AcroFormTextField = bt, B.AcroFormPasswordField = vt, B.AcroFormAppearance = wt, B.AcroForm = { ChoiceField: ut, ListBox: ht, ComboBox: ct, EditBox: lt, Button: ft, PushButton: dt, RadioButton: pt, CheckBox: mt, TextField: bt, PasswordField: vt, Appearance: wt }, j.AcroForm = { ChoiceField: ut, ListBox: ht, ComboBox: ct, EditBox: lt, Button: ft, PushButton: dt, RadioButton: pt, CheckBox: mt, TextField: bt, PasswordField: vt, Appearance: wt };
    var _t = j.AcroForm;
    /** @license
     * jsPDF addImage plugin
     * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
     *               2013 Chris Dowling, https://github.com/gingerchris
     *               2013 Trinh Ho, https://github.com/ineedfat
     *               2013 Edwin Alejandro Perez, https://github.com/eaparango
     *               2013 Norah Smith, https://github.com/burnburnrocket
     *               2014 Diego Casorran, https://github.com/diegocr
     *               2014 James Robb, https://github.com/jamesbrobb
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    ! function(t) {
        t.__addimage__ = {};
        var e = "UNKNOWN",
            r = {
                PNG: [
                    [137, 80, 78, 71]
                ],
                TIFF: [
                    [77, 77, 0, 42],
                    [73, 73, 42, 0]
                ],
                JPEG: [
                    [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
                    [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
                    [255, 216, 255, 219],
                    [255, 216, 255, 238]
                ],
                JPEG2000: [
                    [0, 0, 0, 12, 106, 80, 32, 32]
                ],
                GIF87a: [
                    [71, 73, 70, 56, 55, 97]
                ],
                GIF89a: [
                    [71, 73, 70, 56, 57, 97]
                ],
                WEBP: [
                    [82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]
                ],
                BMP: [
                    [66, 77],
                    [66, 65],
                    [67, 73],
                    [67, 80],
                    [73, 67],
                    [80, 84]
                ]
            },
            n = t.__addimage__.getImageFileTypeByImageData = function(t, n) {
                var i, a;
                n = n || e;
                var o, s, u, h = e;
                if (N(t))
                    for (u in r)
                        for (o = r[u], i = 0; i < o.length; i += 1) {
                            for (s = !0, a = 0; a < o[i].length; a += 1)
                                if (void 0 !== o[i][a] && o[i][a] !== t[a]) { s = !1; break }
                            if (!0 === s) { h = u; break }
                        } else
                            for (u in r)
                                for (o = r[u], i = 0; i < o.length; i += 1) {
                                    for (s = !0, a = 0; a < o[i].length; a += 1)
                                        if (void 0 !== o[i][a] && o[i][a] !== t.charCodeAt(a)) { s = !1; break }
                                    if (!0 === s) { h = u; break }
                                }
                return h === e && n !== e && (h = n), h
            },
            i = function(t) {
                for (var e = this.internal.write, r = this.internal.putStream, n = (0, this.internal.getFilters)(); - 1 !== n.indexOf("FlateEncode");) n.splice(n.indexOf("FlateEncode"), 1);
                t.objectId = this.internal.newObject();
                var a = [];
                if (a.push({ key: "Type", value: "/XObject" }), a.push({ key: "Subtype", value: "/Image" }), a.push({ key: "Width", value: t.width }), a.push({ key: "Height", value: t.height }), t.colorSpace === v.INDEXED ? a.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (t.palette.length / 3 - 1) + " " + ("sMask" in t && void 0 !== t.sMask ? t.objectId + 2 : t.objectId + 1) + " 0 R]" }) : (a.push({ key: "ColorSpace", value: "/" + t.colorSpace }), t.colorSpace === v.DEVICE_CMYK && a.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), a.push({ key: "BitsPerComponent", value: t.bitsPerComponent }), "decodeParameters" in t && void 0 !== t.decodeParameters && a.push({ key: "DecodeParms", value: "<<" + t.decodeParameters + ">>" }), "transparency" in t && Array.isArray(t.transparency)) {
                    for (var o = "", s = 0, u = t.transparency.length; s < u; s++) o += t.transparency[s] + " " + t.transparency[s] + " ";
                    a.push({ key: "Mask", value: "[" + o + "]" })
                }
                void 0 !== t.sMask && a.push({ key: "SMask", value: t.objectId + 1 + " 0 R" });
                var h = void 0 !== t.filter ? ["/" + t.filter] : void 0;
                if (r({ data: t.data, additionalKeyValues: a, alreadyAppliedFilters: h, objectId: t.objectId }), e("endobj"), "sMask" in t && void 0 !== t.sMask) {
                    var c = "/Predictor " + t.predictor + " /Colors 1 /BitsPerComponent " + t.bitsPerComponent + " /Columns " + t.width,
                        l = { width: t.width, height: t.height, colorSpace: "DeviceGray", bitsPerComponent: t.bitsPerComponent, decodeParameters: c, data: t.sMask };
                    "filter" in t && (l.filter = t.filter), i.call(this, l)
                }
                if (t.colorSpace === v.INDEXED) {
                    var f = this.internal.newObject();
                    r({ data: S(new Uint8Array(t.palette)), objectId: f }), e("endobj")
                }
            },
            a = function() { var t = this.internal.collections.addImage_images; for (var e in t) i.call(this, t[e]) },
            o = function() {
                var t, e = this.internal.collections.addImage_images,
                    r = this.internal.write;
                for (var n in e) r("/I" + (t = e[n]).index, t.objectId, "0", "R")
            },
            h = function() { this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", a), this.internal.events.subscribe("putXobjectDict", o)) },
            c = function() { var t = this.internal.collections.addImage_images; return h.call(this), t },
            l = function() { return Object.keys(this.internal.collections.addImage_images).length },
            f = function(e) { return "function" == typeof t["process" + e.toUpperCase()] },
            d = function(t) { return "object" == typeof t && 1 === t.nodeType },
            p = function(e, r) {
                if ("IMG" === e.nodeName && e.hasAttribute("src")) { var n = "" + e.getAttribute("src"); if (0 === n.indexOf("data:image/")) return s(unescape(n).split("base64,").pop()); var i = t.loadFile(n, !0); if (void 0 !== i) return i }
                if ("CANVAS" === e.nodeName) {
                    var a;
                    switch (r) {
                        case "PNG":
                            a = "image/png";
                            break;
                        case "WEBP":
                            a = "image/webp";
                            break;
                        case "JPEG":
                        case "JPG":
                        default:
                            a = "image/jpeg"
                    }
                    return s(e.toDataURL(a, 1).split("base64,").pop())
                }
            },
            g = function(t) {
                var e = this.internal.collections.addImage_images;
                if (e)
                    for (var r in e)
                        if (t === e[r].alias) return e[r]
            },
            m = function(t, e, r) { return t || e || (t = -96, e = -96), t < 0 && (t = -1 * r.width * 72 / t / this.internal.scaleFactor), e < 0 && (e = -1 * r.height * 72 / e / this.internal.scaleFactor), 0 === t && (t = e * r.width / r.height), 0 === e && (e = t * r.height / r.width), [t, e] },
            b = function(t, e, r, n, i, a) {
                var o = m.call(this, r, n, i),
                    s = this.internal.getCoordinateString,
                    u = this.internal.getVerticalCoordinateString,
                    h = c.call(this);
                if (r = o[0], n = o[1], h[i.index] = i, a) {
                    a *= Math.PI / 180;
                    var l = Math.cos(a),
                        f = Math.sin(a),
                        d = function(t) { return t.toFixed(4) },
                        p = [d(l), d(f), d(-1 * f), d(l), 0, 0, "cm"]
                }
                this.internal.write("q"), a ? (this.internal.write([1, "0", "0", 1, s(t), u(e + n), "cm"].join(" ")), this.internal.write(p.join(" ")), this.internal.write([s(r), "0", "0", s(n), "0", "0", "cm"].join(" "))) : this.internal.write([s(r), "0", "0", s(n), s(t), u(e + n), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + i.index + " Do"), this.internal.write("Q")
            },
            v = t.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
        t.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
        var w = t.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" },
            y = t.__addimage__.sHashCode = function(t) {
                var e, r, n = 0;
                if ("string" == typeof t)
                    for (r = t.length, e = 0; e < r; e++) n = (n << 5) - n + t.charCodeAt(e), n |= 0;
                else if (N(t))
                    for (r = t.byteLength / 2, e = 0; e < r; e++) n = (n << 5) - n + t[e], n |= 0;
                return n
            },
            _ = t.__addimage__.validateStringAsBase64 = function(t) {
                (t = t || "").toString().trim();
                var e = !0;
                return 0 === t.length && (e = !1), t.length % 4 != 0 && (e = !1), !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (e = !1), !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2)) && (e = !1), e
            },
            x = t.__addimage__.extractImageFromDataUrl = function(t) {
                var e = (t = t || "").split("base64,"),
                    r = null;
                if (2 === e.length) {
                    var n = /^data:(\w*\/\w*);*(charset=[\w=-]*)*;*$/.exec(e[0]);
                    Array.isArray(n) && (r = { mimeType: n[1], charset: n[2], data: e[1] })
                }
                return r
            },
            A = t.__addimage__.supportsArrayBuffer = function() { return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array };
        t.__addimage__.isArrayBuffer = function(t) { return A() && t instanceof ArrayBuffer };
        var N = t.__addimage__.isArrayBufferView = function(t) { return A() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) },
            L = t.__addimage__.binaryStringToUint8Array = function(t) { for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++) r[n] = t.charCodeAt(n); return r },
            S = t.__addimage__.arrayBufferToBinaryString = function(t) { try { return s(u(String.fromCharCode.apply(null, t))) } catch (e) { if ("undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.reduce) return new Uint8Array(t).reduce((function(t, e) { return t.push(String.fromCharCode(e)), t }), []).join("") } };
        t.addImage = function() {
            var t, r, n, i, a, o, s, u, c;
            if ("number" == typeof arguments[1] ? (r = e, n = arguments[1], i = arguments[2], a = arguments[3], o = arguments[4], s = arguments[5], u = arguments[6], c = arguments[7]) : (r = arguments[1], n = arguments[2], i = arguments[3], a = arguments[4], o = arguments[5], s = arguments[6], u = arguments[7], c = arguments[8]), "object" == typeof(t = arguments[0]) && !d(t) && "imageData" in t) {
                var l = t;
                t = l.imageData, r = l.format || r || e, n = l.x || n || 0, i = l.y || i || 0, a = l.w || l.width || a, o = l.h || l.height || o, s = l.alias || s, u = l.compression || u, c = l.rotation || l.angle || c
            }
            var f = this.internal.getFilters();
            if (void 0 === u && -1 !== f.indexOf("FlateEncode") && (u = "SLOW"), isNaN(n) || isNaN(i)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
            h.call(this);
            var p = k.call(this, t, r, s, u);
            return b.call(this, n, i, a, o, p, c), this
        };
        var k = function(r, i, a, o) {
                var s, u, h;
                if ("string" == typeof r && n(r) === e) {
                    r = unescape(r);
                    var c = P(r, !1);
                    ("" !== c || void 0 !== (c = t.loadFile(r, !0))) && (r = c)
                }
                if (d(r) && (r = p(r, i)), i = n(r, i), !f(i)) throw new Error("addImage does not support files of type '" + i + "', please ensure that a plugin for '" + i + "' support is added.");
                if ((null == (h = a) || 0 === h.length) && (a = function(t) { return "string" == typeof t || N(t) ? y(t) : null }(r)), (s = g.call(this, a)) || (A() && (r instanceof Uint8Array || (u = r, r = L(r))), s = this["process" + i.toUpperCase()](r, l.call(this), a, function(e) { return e && "string" == typeof e && (e = e.toUpperCase()), e in t.image_compression ? e : w.NONE }(o), u)), !s) throw new Error("An unknown error occurred whilst processing the image.");
                return s
            },
            P = t.__addimage__.convertBase64ToBinaryString = function(t, e) {
                var r;
                e = "boolean" != typeof e || e;
                var n, i = "";
                if ("string" == typeof t) { n = null !== (r = x(t)) ? r.data : t; try { i = s(n) } catch (t) { if (e) throw _(n) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + t.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ") } }
                return i
            };
        t.getImageProperties = function(r) { var i, a, o = ""; if (d(r) && (r = p(r)), "string" == typeof r && n(r) === e && ("" === (o = P(r, !1)) && (o = t.loadFile(r) || ""), r = o), a = n(r), !f(a)) throw new Error("addImage does not support files of type '" + a + "', please ensure that a plugin for '" + a + "' support is added."); if (!A() || r instanceof Uint8Array || (r = L(r)), !(i = this["process" + a.toUpperCase()](r))) throw new Error("An unknown error occurred whilst processing the image"); return i.fileType = a, i }
    }(j.API),
    /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    function(t) {
        var e = function(t) { if (void 0 !== t && "" != t) return !0 };
        j.API.events.push(["addPage", function(t) { this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [] }]), t.events.push(["putPage", function(t) {
            for (var r, n, i, a = this.internal.getCoordinateString, o = this.internal.getVerticalCoordinateString, s = this.internal.getPageInfoByObjId(t.objId), u = t.pageContext.annotations, h = !1, c = 0; c < u.length && !h; c++) switch ((r = u[c]).type) {
                case "link":
                    (e(r.options.url) || e(r.options.pageNumber)) && (h = !0);
                    break;
                case "reference":
                case "text":
                case "freetext":
                    h = !0
            }
            if (0 != h) {
                this.internal.write("/Annots [");
                for (var l = 0; l < u.length; l++) {
                    r = u[l];
                    var f = this.internal.pdfEscape,
                        d = this.internal.getEncryptor(t.objId);
                    switch (r.type) {
                        case "reference":
                            this.internal.write(" " + r.object.objId + " 0 R ");
                            break;
                        case "text":
                            var p = this.internal.newAdditionalObject(),
                                g = this.internal.newAdditionalObject(),
                                m = this.internal.getEncryptor(p.objId),
                                b = r.title || "Note";
                            i = "<</Type /Annot /Subtype /Text " + (n = "/Rect [" + a(r.bounds.x) + " " + o(r.bounds.y + r.bounds.h) + " " + a(r.bounds.x + r.bounds.w) + " " + o(r.bounds.y) + "] ") + "/Contents (" + f(m(r.contents)) + ")", i += " /Popup " + g.objId + " 0 R", i += " /P " + s.objId + " 0 R", i += " /T (" + f(m(b)) + ") >>", p.content = i;
                            var v = p.objId + " 0 R";
                            i = "<</Type /Annot /Subtype /Popup " + (n = "/Rect [" + a(r.bounds.x + 30) + " " + o(r.bounds.y + r.bounds.h) + " " + a(r.bounds.x + r.bounds.w + 30) + " " + o(r.bounds.y) + "] ") + " /Parent " + v, r.open && (i += " /Open true"), i += " >>", g.content = i, this.internal.write(p.objId, "0 R", g.objId, "0 R");
                            break;
                        case "freetext":
                            n = "/Rect [" + a(r.bounds.x) + " " + o(r.bounds.y) + " " + a(r.bounds.x + r.bounds.w) + " " + o(r.bounds.y + r.bounds.h) + "] ";
                            var w = r.color || "#000000";
                            i = "<</Type /Annot /Subtype /FreeText " + n + "/Contents (" + f(d(r.contents)) + ")", i += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + w + ")", i += " /Border [0 0 0]", i += " >>", this.internal.write(i);
                            break;
                        case "link":
                            if (r.options.name) {
                                var y = this.annotations._nameMap[r.options.name];
                                r.options.pageNumber = y.page, r.options.top = y.y
                            } else r.options.top || (r.options.top = 0);
                            if (n = "/Rect [" + r.finalBounds.x + " " + r.finalBounds.y + " " + r.finalBounds.w + " " + r.finalBounds.h + "] ", i = "", r.options.url) i = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /A <</S /URI /URI (" + f(d(r.options.url)) + ") >>";
                            else if (r.options.pageNumber) {
                                switch (i = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(r.options.pageNumber).objId + " 0 R", r.options.magFactor = r.options.magFactor || "XYZ", r.options.magFactor) {
                                    case "Fit":
                                        i += " /Fit]";
                                        break;
                                    case "FitH":
                                        i += " /FitH " + r.options.top + "]";
                                        break;
                                    case "FitV":
                                        r.options.left = r.options.left || 0, i += " /FitV " + r.options.left + "]";
                                        break;
                                    case "XYZ":
                                    default:
                                        var _ = o(r.options.top);
                                        r.options.left = r.options.left || 0, void 0 === r.options.zoom && (r.options.zoom = 0), i += " /XYZ " + r.options.left + " " + _ + " " + r.options.zoom + "]"
                                }
                            }
                            "" != i && (i += " >>", this.internal.write(i))
                    }
                }
                this.internal.write("]")
            }
        }]), t.createAnnotation = function(t) {
            var e = this.internal.getCurrentPageInfo();
            switch (t.type) {
                case "link":
                    this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                    break;
                case "text":
                case "freetext":
                    e.pageContext.annotations.push(t)
            }
        }, t.link = function(t, e, r, n, i) {
            var a = this.internal.getCurrentPageInfo(),
                o = this.internal.getCoordinateString,
                s = this.internal.getVerticalCoordinateString;
            a.pageContext.annotations.push({ finalBounds: { x: o(t), y: s(e), w: o(t + r), h: s(e + n) }, options: i, type: "link" })
        }, t.textWithLink = function(t, e, r, n) {
            var i = this.getTextWidth(t),
                a = this.internal.getLineHeight() / this.internal.scaleFactor;
            return this.text(t, e, r, n), r += .2 * a, this.link(e, r - a, i, a, n), i
        }, t.getTextWidth = function(t) { var e = this.internal.getFontSize(); return this.getStringUnitWidth(t) * e / this.internal.scaleFactor }
    }(j.API),
    /**
     * @license
     * Copyright (c) 2017 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    function(t) {
        var e = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] },
            r = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } },
            n = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 },
            i = [1570, 1571, 1573, 1575];
        t.__arabicParser__ = {};
        var a = t.__arabicParser__.isInArabicSubstitutionA = function(t) { return void 0 !== e[t.charCodeAt(0)] },
            o = t.__arabicParser__.isArabicLetter = function(t) { return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t) },
            s = t.__arabicParser__.isArabicEndLetter = function(t) { return o(t) && a(t) && e[t.charCodeAt(0)].length <= 2 },
            u = t.__arabicParser__.isArabicAlfLetter = function(t) { return o(t) && i.indexOf(t.charCodeAt(0)) >= 0 };
        t.__arabicParser__.arabicLetterHasIsolatedForm = function(t) { return o(t) && a(t) && e[t.charCodeAt(0)].length >= 1 };
        var h = t.__arabicParser__.arabicLetterHasFinalForm = function(t) { return o(t) && a(t) && e[t.charCodeAt(0)].length >= 2 };
        t.__arabicParser__.arabicLetterHasInitialForm = function(t) { return o(t) && a(t) && e[t.charCodeAt(0)].length >= 3 };
        var c = t.__arabicParser__.arabicLetterHasMedialForm = function(t) { return o(t) && a(t) && 4 == e[t.charCodeAt(0)].length },
            l = t.__arabicParser__.resolveLigatures = function(t) {
                var e = 0,
                    n = r,
                    i = "",
                    a = 0;
                for (e = 0; e < t.length; e += 1) void 0 !== n[t.charCodeAt(e)] ? (a++, "number" == typeof(n = n[t.charCodeAt(e)]) && (i += String.fromCharCode(n), n = r, a = 0), e === t.length - 1 && (n = r, i += t.charAt(e - (a - 1)), e -= a - 1, a = 0)) : (n = r, i += t.charAt(e - a), e -= a, a = 0);
                return i
            };
        t.__arabicParser__.isArabicDiacritic = function(t) { return void 0 !== t && void 0 !== n[t.charCodeAt(0)] };
        var f = t.__arabicParser__.getCorrectForm = function(t, e, r) { return o(t) ? !1 === a(t) ? -1 : !h(t) || !o(e) && !o(r) || !o(r) && s(e) || s(t) && !o(e) || s(t) && u(e) || s(t) && s(e) ? 0 : c(t) && o(e) && !s(e) && o(r) && h(r) ? 3 : s(t) || !o(r) ? 1 : 2 : -1 },
            d = function(t) {
                var r = 0,
                    n = 0,
                    i = 0,
                    a = "",
                    s = "",
                    u = "",
                    h = (t = t || "").split("\\s+"),
                    c = [];
                for (r = 0; r < h.length; r += 1) {
                    for (c.push(""), n = 0; n < h[r].length; n += 1) a = h[r][n], s = h[r][n - 1], u = h[r][n + 1], o(a) ? (i = f(a, s, u), c[r] += -1 !== i ? String.fromCharCode(e[a.charCodeAt(0)][i]) : a) : c[r] += a;
                    c[r] = l(c[r])
                }
                return c.join(" ")
            },
            p = t.__arabicParser__.processArabic = t.processArabic = function() {
                var t, e = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text,
                    r = [];
                if (Array.isArray(e)) {
                    var n = 0;
                    for (r = [], n = 0; n < e.length; n += 1) Array.isArray(e[n]) ? r.push([d(e[n][0]), e[n][1], e[n][2]]) : r.push([d(e[n])]);
                    t = r
                } else t = d(e);
                return "string" == typeof arguments[0] ? t : (arguments[0].text = t, arguments[0])
            };
        t.events.push(["preProcessText", p])
    }(j.API),
    /** @license
     * jsPDF Autoprint Plugin
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    function(t) {
        t.autoPrint = function(t) {
            var e;
            switch ((t = t || {}).variant = t.variant || "non-conform", t.variant) {
                case "javascript":
                    this.addJS("print({});");
                    break;
                case "non-conform":
                default:
                    this.internal.events.subscribe("postPutResources", (function() { e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj") })), this.internal.events.subscribe("putCatalog", (function() { this.internal.out("/OpenAction " + e + " 0 R") }))
            }
            return this
        }
    }(j.API),
    /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    function(t) {
        var e = function() {
            var t = void 0;
            Object.defineProperty(this, "pdf", { get: function() { return t }, set: function(e) { t = e } });
            var e = 150;
            Object.defineProperty(this, "width", { get: function() { return e }, set: function(t) { e = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e + 1) } });
            var r = 300;
            Object.defineProperty(this, "height", { get: function() { return r }, set: function(t) { r = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r + 1) } });
            var n = [];
            Object.defineProperty(this, "childNodes", { get: function() { return n }, set: function(t) { n = t } });
            var i = {};
            Object.defineProperty(this, "style", { get: function() { return i }, set: function(t) { i = t } }), Object.defineProperty(this, "parentNode", {})
        };
        e.prototype.getContext = function(t, e) { var r; if ("2d" !== (t = t || "2d")) return null; for (r in e) this.pdf.context2d.hasOwnProperty(r) && (this.pdf.context2d[r] = e[r]); return this.pdf.context2d._canvas = this, this.pdf.context2d }, e.prototype.toDataURL = function() { throw new Error("toDataURL is not implemented.") }, t.events.push(["initialized", function() { this.canvas = new e, this.canvas.pdf = this }])
    }(j.API),
    /**
     * @license
     * ====================================================================
     * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
     *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
     *               2013 Lee Driscoll, https://github.com/lsdriscoll
     *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
     *               2014 James Hall, james@parall.ax
     *               2014 Diego Casorran, https://github.com/diegocr
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    function(t) {
        var e = { left: 0, top: 0, bottom: 0, right: 0 },
            r = !1,
            n = function() { void 0 === this.internal.__cell__ && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), i.call(this)) },
            i = function() { this.internal.__cell__.lastCell = new a, this.internal.__cell__.pages = 1 },
            a = function() {
                var t = arguments[0];
                Object.defineProperty(this, "x", { enumerable: !0, get: function() { return t }, set: function(e) { t = e } });
                var e = arguments[1];
                Object.defineProperty(this, "y", { enumerable: !0, get: function() { return e }, set: function(t) { e = t } });
                var r = arguments[2];
                Object.defineProperty(this, "width", { enumerable: !0, get: function() { return r }, set: function(t) { r = t } });
                var n = arguments[3];
                Object.defineProperty(this, "height", { enumerable: !0, get: function() { return n }, set: function(t) { n = t } });
                var i = arguments[4];
                Object.defineProperty(this, "text", { enumerable: !0, get: function() { return i }, set: function(t) { i = t } });
                var a = arguments[5];
                Object.defineProperty(this, "lineNumber", { enumerable: !0, get: function() { return a }, set: function(t) { a = t } });
                var o = arguments[6];
                return Object.defineProperty(this, "align", { enumerable: !0, get: function() { return o }, set: function(t) { o = t } }), this
            };
        a.prototype.clone = function() { return new a(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align) }, a.prototype.toArray = function() { return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align] }, t.setHeaderFunction = function(t) { return n.call(this), this.internal.__cell__.headerFunction = "function" == typeof t ? t : void 0, this }, t.getTextDimensions = function(t, e) {
            n.call(this);
            var r = (e = e || {}).fontSize || this.getFontSize(),
                i = e.font || this.getFont(),
                a = e.scaleFactor || this.internal.scaleFactor,
                o = 0,
                s = 0,
                u = 0;
            if (!Array.isArray(t) && "string" != typeof t) {
                if ("number" != typeof t) throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
                t = String(t)
            }
            const h = e.maxWidth;
            h > 0 ? "string" == typeof t ? t = this.splitTextToSize(t, h) : "[object Array]" === Object.prototype.toString.call(t) && (t = t.reduce((function(t, e) { return t.concat(scope.splitTextToSize(e, h)) }), [])) : t = Array.isArray(t) ? t : [t];
            for (var c = 0; c < t.length; c++) o < (u = this.getStringUnitWidth(t[c], { font: i }) * r) && (o = u);
            return 0 !== o && (s = t.length), { w: o /= a, h: Math.max((s * r * this.getLineHeightFactor() - r * (this.getLineHeightFactor() - 1)) / a, 0) }
        }, t.cellAddPage = function() { n.call(this), this.addPage(); var t = this.internal.__cell__.margins || e; return this.internal.__cell__.lastCell = new a(t.left, t.top, void 0, void 0), this.internal.__cell__.pages += 1, this };
        var o = t.cell = function() {
            var t;
            t = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), n.call(this);
            var i = this.internal.__cell__.lastCell,
                o = this.internal.__cell__.padding,
                s = this.internal.__cell__.margins || e,
                u = this.internal.__cell__.tableHeaderRow,
                h = this.internal.__cell__.printHeaders;
            return void 0 !== i.lineNumber && (i.lineNumber === t.lineNumber ? (t.x = (i.x || 0) + (i.width || 0), t.y = i.y || 0) : i.y + i.height + t.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(), t.y = s.top, h && u && (this.printHeaderRow(t.lineNumber, !0), t.y += u[0].height)) : t.y = i.y + i.height || t.y), void 0 !== t.text[0] && (this.rect(t.x, t.y, t.width, t.height, !0 === r ? "FD" : void 0), "right" === t.align ? this.text(t.text, t.x + t.width - o, t.y + o, { align: "right", baseline: "top" }) : "center" === t.align ? this.text(t.text, t.x + t.width / 2, t.y + o, { align: "center", baseline: "top", maxWidth: t.width - o - o }) : this.text(t.text, t.x + o, t.y + o, { align: "left", baseline: "top", maxWidth: t.width - o - o })), this.internal.__cell__.lastCell = t, this
        };
        t.table = function(t, r, u, h, c) {
            if (n.call(this), !u) throw new Error("No data for PDF table.");
            var l, f, d, p, g = [],
                m = [],
                b = [],
                v = {},
                w = {},
                y = [],
                _ = [],
                x = (c = c || {}).autoSize || !1,
                A = !1 !== c.printHeaders,
                N = c.css && void 0 !== c.css["font-size"] ? 16 * c.css["font-size"] : c.fontSize || 12,
                L = c.margins || Object.assign({ width: this.getPageWidth() }, e),
                S = "number" == typeof c.padding ? c.padding : 3,
                k = c.headerBackgroundColor || "#c8c8c8";
            if (i.call(this), this.internal.__cell__.printHeaders = A, this.internal.__cell__.margins = L, this.internal.__cell__.table_font_size = N, this.internal.__cell__.padding = S, this.internal.__cell__.headerBackgroundColor = k, this.setFontSize(N), null == h) m = g = Object.keys(u[0]), b = g.map((function() { return "left" }));
            else if (Array.isArray(h) && "object" == typeof h[0])
                for (g = h.map((function(t) { return t.name })), m = h.map((function(t) { return t.prompt || t.name || "" })), b = g.map((function(t) { return t.align || "left" })), l = 0; l < h.length; l += 1) w[h[l].name] = h[l].width * (19.049976 / 25.4);
            else Array.isArray(h) && "string" == typeof h[0] && (m = g = h, b = g.map((function() { return "left" })));
            if (x)
                for (l = 0; l < g.length; l += 1) {
                    for (v[p = g[l]] = u.map((function(t) { return t[p] })), this.setFont(void 0, "bold"), y.push(this.getTextDimensions(m[l], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), f = v[p], this.setFont(void 0, "normal"), d = 0; d < f.length; d += 1) y.push(this.getTextDimensions(f[d], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
                    w[p] = Math.max.apply(null, y) + S + S, y = []
                }
            if (A) {
                var P = {};
                for (l = 0; l < g.length; l += 1) P[g[l]] = {}, P[g[l]].text = m[l], P[g[l]].align = b[l];
                var I = s.call(this, P, w);
                _ = g.map((function(e) { return new a(t, r, w[e], I, P[e].text, void 0, P[e].align) })), this.setTableHeaderRow(_), this.printHeaderRow(1, !1)
            }
            var F = h.reduce((function(t, e) { return t[e.name] = e.align, t }), {});
            for (l = 0; l < u.length; l += 1) { var C = s.call(this, u[l], w); for (d = 0; d < g.length; d += 1) o.call(this, new a(t, r, w[g[d]], C, u[l][g[d]], l + 2, F[g[d]])) }
            return this.internal.__cell__.table_x = t, this.internal.__cell__.table_y = r, this
        };
        var s = function(t, e) {
            var r = this.internal.__cell__.padding,
                n = this.internal.__cell__.table_font_size,
                i = this.internal.scaleFactor;
            return Object.keys(t).map((function(n) { var i = t[n]; return this.splitTextToSize(i.hasOwnProperty("text") ? i.text : i, e[n] - r - r) }), this).map((function(t) { return this.getLineHeightFactor() * t.length * n / i + r + r }), this).reduce((function(t, e) { return Math.max(t, e) }), 0)
        };
        t.setTableHeaderRow = function(t) { n.call(this), this.internal.__cell__.tableHeaderRow = t }, t.printHeaderRow = function(t, e) {
            if (n.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
            var i;
            if (r = !0, "function" == typeof this.internal.__cell__.headerFunction) {
                var s = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
                this.internal.__cell__.lastCell = new a(s[0], s[1], s[2], s[3], void 0, -1)
            }
            this.setFont(void 0, "bold");
            for (var u = [], h = 0; h < this.internal.__cell__.tableHeaderRow.length; h += 1) i = this.internal.__cell__.tableHeaderRow[h].clone(), e && (i.y = this.internal.__cell__.margins.top || 0, u.push(i)), i.lineNumber = t, this.setFillColor(this.internal.__cell__.headerBackgroundColor), o.call(this, i);
            u.length > 0 && this.setTableHeaderRow(u), this.setFont(void 0, "normal"), r = !1
        }
    }(j.API),
    function(t) {
        var e, r, i, a, o, s, u, h, l, f = function(t) { return t = t || {}, this.isStrokeTransparent = t.isStrokeTransparent || !1, this.strokeOpacity = t.strokeOpacity || 1, this.strokeStyle = t.strokeStyle || "#000000", this.fillStyle = t.fillStyle || "#000000", this.isFillTransparent = t.isFillTransparent || !1, this.fillOpacity = t.fillOpacity || 1, this.font = t.font || "10px sans-serif", this.textBaseline = t.textBaseline || "alphabetic", this.textAlign = t.textAlign || "left", this.lineWidth = t.lineWidth || 1, this.lineJoin = t.lineJoin || "miter", this.lineCap = t.lineCap || "butt", this.path = t.path || [], this.transform = void 0 !== t.transform ? t.transform.clone() : new h, this.globalCompositeOperation = t.globalCompositeOperation || "normal", this.globalAlpha = t.globalAlpha || 1, this.clip_path = t.clip_path || [], this.currentPoint = t.currentPoint || new s, this.miterLimit = t.miterLimit || 10, this.lastPoint = t.lastPoint || new s, this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect, this };
        t.events.push(["initialized", function() { this.context2d = new d(this), e = this.internal.f2, r = this.internal.getCoordinateString, i = this.internal.getVerticalCoordinateString, a = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, s = this.internal.Point, u = this.internal.Rectangle, h = this.internal.Matrix, l = new f }]);
        var d = function(t) {
            Object.defineProperty(this, "canvas", { get: function() { return { parentNode: !1, style: !1 } } });
            var e = t;
            Object.defineProperty(this, "pdf", { get: function() { return e } });
            var r = !1;
            Object.defineProperty(this, "pageWrapXEnabled", { get: function() { return r }, set: function(t) { r = Boolean(t) } });
            var n = !1;
            Object.defineProperty(this, "pageWrapYEnabled", { get: function() { return n }, set: function(t) { n = Boolean(t) } });
            var i = 0;
            Object.defineProperty(this, "posX", { get: function() { return i }, set: function(t) { isNaN(t) || (i = t) } });
            var a = 0;
            Object.defineProperty(this, "posY", { get: function() { return a }, set: function(t) { isNaN(t) || (a = t) } });
            var o = !1;
            Object.defineProperty(this, "autoPaging", { get: function() { return o }, set: function(t) { o = Boolean(t) } });
            var s = 0;
            Object.defineProperty(this, "lastBreak", { get: function() { return s }, set: function(t) { s = t } });
            var u = [];
            Object.defineProperty(this, "pageBreaks", { get: function() { return u }, set: function(t) { u = t } }), Object.defineProperty(this, "ctx", { get: function() { return l }, set: function(t) { t instanceof f && (l = t) } }), Object.defineProperty(this, "path", { get: function() { return l.path }, set: function(t) { l.path = t } });
            var h = [];
            Object.defineProperty(this, "ctxStack", { get: function() { return h }, set: function(t) { h = t } }), Object.defineProperty(this, "fillStyle", {
                get: function() { return this.ctx.fillStyle },
                set: function(t) {
                    var e;
                    e = p(t), this.ctx.fillStyle = e.style, this.ctx.isFillTransparent = 0 === e.a, this.ctx.fillOpacity = e.a, this.pdf.setFillColor(e.r, e.g, e.b, { a: e.a }), this.pdf.setTextColor(e.r, e.g, e.b, { a: e.a })
                }
            }), Object.defineProperty(this, "strokeStyle", {
                get: function() { return this.ctx.strokeStyle },
                set: function(t) {
                    var e = p(t);
                    this.ctx.strokeStyle = e.style, this.ctx.isStrokeTransparent = 0 === e.a, this.ctx.strokeOpacity = e.a, 0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b))
                }
            }), Object.defineProperty(this, "lineCap", { get: function() { return this.ctx.lineCap }, set: function(t) {-1 !== ["butt", "round", "square"].indexOf(t) && (this.ctx.lineCap = t, this.pdf.setLineCap(t)) } }), Object.defineProperty(this, "lineWidth", { get: function() { return this.ctx.lineWidth }, set: function(t) { isNaN(t) || (this.ctx.lineWidth = t, this.pdf.setLineWidth(t)) } }), Object.defineProperty(this, "lineJoin", { get: function() { return this.ctx.lineJoin }, set: function(t) {-1 !== ["bevel", "round", "miter"].indexOf(t) && (this.ctx.lineJoin = t, this.pdf.setLineJoin(t)) } }), Object.defineProperty(this, "miterLimit", { get: function() { return this.ctx.miterLimit }, set: function(t) { isNaN(t) || (this.ctx.miterLimit = t, this.pdf.setMiterLimit(t)) } }), Object.defineProperty(this, "textBaseline", { get: function() { return this.ctx.textBaseline }, set: function(t) { this.ctx.textBaseline = t } }), Object.defineProperty(this, "textAlign", { get: function() { return this.ctx.textAlign }, set: function(t) {-1 !== ["right", "end", "center", "left", "start"].indexOf(t) && (this.ctx.textAlign = t) } }), Object.defineProperty(this, "font", {
                get: function() { return this.ctx.font },
                set: function(t) {
                    var e;
                    if (this.ctx.font = t, null !== (e = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))) {
                        var r = e[1],
                            n = (e[2], e[3]),
                            i = e[4],
                            a = (e[5], e[6]),
                            o = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
                        i = "px" === o ? Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor) : "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i);
                        var s = "";
                        ("bold" === n || parseInt(n, 10) >= 700 || "bold" === r) && (s = "bold"), "italic" === r && (s += "italic"), 0 === s.length && (s = "normal");
                        for (var u = "", h = a.replace(/"|'/g, "").split(/\s*,\s*/), c = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, l = 0; l < h.length; l++) {
                            if (void 0 !== this.pdf.internal.getFont(h[l], s, { noFallback: !0, disableWarning: !0 })) { u = h[l]; break }
                            if ("bolditalic" === s && void 0 !== this.pdf.internal.getFont(h[l], "bold", { noFallback: !0, disableWarning: !0 })) u = h[l], s = "bold";
                            else if (void 0 !== this.pdf.internal.getFont(h[l], "normal", { noFallback: !0, disableWarning: !0 })) { u = h[l], s = "normal"; break }
                        }
                        if ("" === u)
                            for (var f = 0; f < h.length; f++)
                                if (c[h[f]]) { u = c[h[f]]; break }
                        u = "" === u ? "Times" : u, this.pdf.setFont(u, s)
                    }
                }
            }), Object.defineProperty(this, "globalCompositeOperation", { get: function() { return this.ctx.globalCompositeOperation }, set: function(t) { this.ctx.globalCompositeOperation = t } }), Object.defineProperty(this, "globalAlpha", { get: function() { return this.ctx.globalAlpha }, set: function(t) { this.ctx.globalAlpha = t } }), Object.defineProperty(this, "ignoreClearRect", { get: function() { return this.ctx.ignoreClearRect }, set: function(t) { this.ctx.ignoreClearRect = Boolean(t) } })
        };
        d.prototype.fill = function() { _.call(this, "fill", !1) }, d.prototype.stroke = function() { _.call(this, "stroke", !1) }, d.prototype.beginPath = function() { this.path = [{ type: "begin" }] }, d.prototype.moveTo = function(t, e) {
            if (isNaN(t) || isNaN(e)) throw n.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
            var r = this.ctx.transform.applyToPoint(new s(t, e));
            this.path.push({ type: "mt", x: r.x, y: r.y }), this.ctx.lastPoint = new s(t, e)
        }, d.prototype.closePath = function() {
            var t = new s(0, 0),
                e = 0;
            for (e = this.path.length - 1; - 1 !== e; e--)
                if ("begin" === this.path[e].type && "object" == typeof this.path[e + 1] && "number" == typeof this.path[e + 1].x) { t = new s(this.path[e + 1].x, this.path[e + 1].y), this.path.push({ type: "lt", x: t.x, y: t.y }); break }
                "object" == typeof this.path[e + 2] && "number" == typeof this.path[e + 2].x && this.path.push(JSON.parse(JSON.stringify(this.path[e + 2]))), this.path.push({ type: "close" }), this.ctx.lastPoint = new s(t.x, t.y)
        }, d.prototype.lineTo = function(t, e) {
            if (isNaN(t) || isNaN(e)) throw n.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
            var r = this.ctx.transform.applyToPoint(new s(t, e));
            this.path.push({ type: "lt", x: r.x, y: r.y }), this.ctx.lastPoint = new s(r.x, r.y)
        }, d.prototype.clip = function() { this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), _.call(this, null, !0) }, d.prototype.quadraticCurveTo = function(t, e, r, i) {
            if (isNaN(r) || isNaN(i) || isNaN(t) || isNaN(e)) throw n.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
            var a = this.ctx.transform.applyToPoint(new s(r, i)),
                o = this.ctx.transform.applyToPoint(new s(t, e));
            this.path.push({ type: "qct", x1: o.x, y1: o.y, x: a.x, y: a.y }), this.ctx.lastPoint = new s(a.x, a.y)
        }, d.prototype.bezierCurveTo = function(t, e, r, i, a, o) {
            if (isNaN(a) || isNaN(o) || isNaN(t) || isNaN(e) || isNaN(r) || isNaN(i)) throw n.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
            var u = this.ctx.transform.applyToPoint(new s(a, o)),
                h = this.ctx.transform.applyToPoint(new s(t, e)),
                c = this.ctx.transform.applyToPoint(new s(r, i));
            this.path.push({ type: "bct", x1: h.x, y1: h.y, x2: c.x, y2: c.y, x: u.x, y: u.y }), this.ctx.lastPoint = new s(u.x, u.y)
        }, d.prototype.arc = function(t, e, r, i, a, o) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(i) || isNaN(a)) throw n.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
            if (o = Boolean(o), !this.ctx.transform.isIdentity) {
                var u = this.ctx.transform.applyToPoint(new s(t, e));
                t = u.x, e = u.y;
                var h = this.ctx.transform.applyToPoint(new s(0, r)),
                    c = this.ctx.transform.applyToPoint(new s(0, 0));
                r = Math.sqrt(Math.pow(h.x - c.x, 2) + Math.pow(h.y - c.y, 2))
            }
            Math.abs(a - i) >= 2 * Math.PI && (i = 0, a = 2 * Math.PI), this.path.push({ type: "arc", x: t, y: e, radius: r, startAngle: i, endAngle: a, counterclockwise: o })
        }, d.prototype.arcTo = function(t, e, r, n, i) { throw new Error("arcTo not implemented.") }, d.prototype.rect = function(t, e, r, i) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(i)) throw n.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
            this.moveTo(t, e), this.lineTo(t + r, e), this.lineTo(t + r, e + i), this.lineTo(t, e + i), this.lineTo(t, e), this.lineTo(t + r, e), this.lineTo(t, e)
        }, d.prototype.fillRect = function(t, e, r, i) { if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(i)) throw n.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect"); if (!g.call(this)) { var a = {}; "butt" !== this.lineCap && (a.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (a.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t, e, r, i), this.fill(), a.hasOwnProperty("lineCap") && (this.lineCap = a.lineCap), a.hasOwnProperty("lineJoin") && (this.lineJoin = a.lineJoin) } }, d.prototype.strokeRect = function(t, e, r, i) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(i)) throw n.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
            m.call(this) || (this.beginPath(), this.rect(t, e, r, i), this.stroke())
        }, d.prototype.clearRect = function(t, e, r, i) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(i)) throw n.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
            this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t, e, r, i))
        }, d.prototype.save = function(t) {
            t = "boolean" != typeof t || t;
            for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++) this.pdf.setPage(r + 1), this.pdf.internal.out("q");
            if (this.pdf.setPage(e), t) {
                this.ctx.fontSize = this.pdf.internal.getFontSize();
                var n = new f(this.ctx);
                this.ctxStack.push(this.ctx), this.ctx = n
            }
        }, d.prototype.restore = function(t) {
            t = "boolean" != typeof t || t;
            for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++) this.pdf.setPage(r + 1), this.pdf.internal.out("Q");
            this.pdf.setPage(e), t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin)
        }, d.prototype.toDataURL = function() { throw new Error("toDataUrl not implemented.") };
        var p = function(t) {
                var e, r, n, i;
                if (!0 === t.isCanvasGradient && (t = t.getColor()), !t) return { r: 0, g: 0, b: 0, a: 0, style: t };
                if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t)) e = 0, r = 0, n = 0, i = 0;
                else {
                    var a = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
                    if (null !== a) e = parseInt(a[1]), r = parseInt(a[2]), n = parseInt(a[3]), i = 1;
                    else if (null !== (a = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t))) e = parseInt(a[1]), r = parseInt(a[2]), n = parseInt(a[3]), i = parseFloat(a[4]);
                    else {
                        if (i = 1, "string" == typeof t && "#" !== t.charAt(0)) {
                            var o = new c(t);
                            t = o.ok ? o.toHex() : "#000000"
                        }
                        4 === t.length ? (e = t.substring(1, 2), e += e, r = t.substring(2, 3), r += r, n = t.substring(3, 4), n += n) : (e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7)), e = parseInt(e, 16), r = parseInt(r, 16), n = parseInt(n, 16)
                    }
                }
                return { r: e, g: r, b: n, a: i, style: t }
            },
            g = function() { return this.ctx.isFillTransparent || 0 == this.globalAlpha },
            m = function() { return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha) };
        d.prototype.fillText = function(t, e, r, i) {
            if (isNaN(e) || isNaN(r) || "string" != typeof t) throw n.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
            if (i = isNaN(i) ? void 0 : i, !g.call(this)) {
                r = A.call(this, r);
                var a = E(this.ctx.transform.rotation),
                    o = this.ctx.transform.scaleX;
                P.call(this, { text: t, x: e, y: r, scale: o, angle: a, align: this.textAlign, maxWidth: i })
            }
        }, d.prototype.strokeText = function(t, e, r, i) {
            if (isNaN(e) || isNaN(r) || "string" != typeof t) throw n.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
            if (!m.call(this)) {
                i = isNaN(i) ? void 0 : i, r = A.call(this, r);
                var a = E(this.ctx.transform.rotation),
                    o = this.ctx.transform.scaleX;
                P.call(this, { text: t, x: e, y: r, scale: o, renderingMode: "stroke", angle: a, align: this.textAlign, maxWidth: i })
            }
        }, d.prototype.measureText = function(t) {
            if ("string" != typeof t) throw n.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
            var e = this.pdf,
                r = this.pdf.internal.scaleFactor,
                i = e.internal.getFontSize(),
                a = e.getStringUnitWidth(t) * i / e.internal.scaleFactor,
                o = function(t) { var e = (t = t || {}).width || 0; return Object.defineProperty(this, "width", { get: function() { return e } }), this };
            return new o({ width: a *= Math.round(96 * r / 72 * 1e4) / 1e4 })
        }, d.prototype.scale = function(t, e) {
            if (isNaN(t) || isNaN(e)) throw n.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
            var r = new h(t, 0, 0, e, 0, 0);
            this.ctx.transform = this.ctx.transform.multiply(r)
        }, d.prototype.rotate = function(t) {
            if (isNaN(t)) throw n.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
            var e = new h(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0);
            this.ctx.transform = this.ctx.transform.multiply(e)
        }, d.prototype.translate = function(t, e) {
            if (isNaN(t) || isNaN(e)) throw n.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
            var r = new h(1, 0, 0, 1, t, e);
            this.ctx.transform = this.ctx.transform.multiply(r)
        }, d.prototype.transform = function(t, e, r, i, a, o) {
            if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(i) || isNaN(a) || isNaN(o)) throw n.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
            var s = new h(t, e, r, i, a, o);
            this.ctx.transform = this.ctx.transform.multiply(s)
        }, d.prototype.setTransform = function(t, e, r, n, i, a) { t = isNaN(t) ? 1 : t, e = isNaN(e) ? 0 : e, r = isNaN(r) ? 0 : r, n = isNaN(n) ? 1 : n, i = isNaN(i) ? 0 : i, a = isNaN(a) ? 0 : a, this.ctx.transform = new h(t, e, r, n, i, a) }, d.prototype.drawImage = function(t, e, r, n, i, a, o, s, c) {
            var l = this.pdf.getImageProperties(t),
                f = 1,
                d = 1,
                p = 1,
                g = 1;
            void 0 !== n && void 0 !== s && (p = s / n, g = c / i, f = l.width / n * s / n, d = l.height / i * c / i), void 0 === a && (a = e, o = r, e = 0, r = 0), void 0 !== n && void 0 === s && (s = n, c = i), void 0 === n && void 0 === s && (s = l.width, c = l.height);
            for (var m, v = this.ctx.transform.decompose(), _ = E(v.rotate.shx), A = new h, N = (A = (A = (A = A.multiply(v.translate)).multiply(v.skew)).multiply(v.scale)).applyToRectangle(new u(a - e * p, o - r * g, n * f, i * d)), L = b.call(this, N), S = [], k = 0; k < L.length; k += 1) - 1 === S.indexOf(L[k]) && S.push(L[k]);
            if (y(S), this.autoPaging)
                for (var P = S[0], I = S[S.length - 1], F = P; F < I + 1; F++) {
                    if (this.pdf.setPage(F), 0 !== this.ctx.clip_path.length) {
                        var C = this.path;
                        m = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = w(m, this.posX, -1 * this.pdf.internal.pageSize.height * (F - 1) + this.posY), x.call(this, "fill", !0), this.path = C
                    }
                    var j = JSON.parse(JSON.stringify(N));
                    j = w([j], this.posX, -1 * this.pdf.internal.pageSize.height * (F - 1) + this.posY)[0], this.pdf.addImage(t, "JPEG", j.x, j.y, j.w, j.h, null, null, _)
                } else this.pdf.addImage(t, "JPEG", N.x, N.y, N.w, N.h, null, null, _)
        };
        var b = function(t, e, r) {
                var n = [];
                switch (e = e || this.pdf.internal.pageSize.width, r = r || this.pdf.internal.pageSize.height, t.type) {
                    default:
                        case "mt":
                        case "lt":
                        n.push(Math.floor((t.y + this.posY) / r) + 1);
                    break;
                    case "arc":
                            n.push(Math.floor((t.y + this.posY - t.radius) / r) + 1),
                        n.push(Math.floor((t.y + this.posY + t.radius) / r) + 1);
                        break;
                    case "qct":
                            var i = O(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);n.push(Math.floor(i.y / r) + 1),
                        n.push(Math.floor((i.y + i.h) / r) + 1);
                        break;
                    case "bct":
                            var a = M(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);n.push(Math.floor(a.y / r) + 1),
                        n.push(Math.floor((a.y + a.h) / r) + 1);
                        break;
                    case "rect":
                            n.push(Math.floor((t.y + this.posY) / r) + 1),
                        n.push(Math.floor((t.y + t.h + this.posY) / r) + 1)
                }
                for (var o = 0; o < n.length; o += 1)
                    for (; this.pdf.internal.getNumberOfPages() < n[o];) v.call(this);
                return n
            },
            v = function() {
                var t = this.fillStyle,
                    e = this.strokeStyle,
                    r = this.font,
                    n = this.lineCap,
                    i = this.lineWidth,
                    a = this.lineJoin;
                this.pdf.addPage(), this.fillStyle = t, this.strokeStyle = e, this.font = r, this.lineCap = n, this.lineWidth = i, this.lineJoin = a
            },
            w = function(t, e, r) {
                for (var n = 0; n < t.length; n++) switch (t[n].type) {
                    case "bct":
                        t[n].x2 += e, t[n].y2 += r;
                    case "qct":
                        t[n].x1 += e, t[n].y1 += r;
                    case "mt":
                    case "lt":
                    case "arc":
                    default:
                        t[n].x += e, t[n].y += r
                }
                return t
            },
            y = function(t) { return t.sort((function(t, e) { return t - e })) },
            _ = function(t, e) {
                for (var r, n, i = this.fillStyle, a = this.strokeStyle, o = this.lineCap, s = this.lineWidth, u = s * this.ctx.transform.scaleX, h = this.lineJoin, c = JSON.parse(JSON.stringify(this.path)), l = JSON.parse(JSON.stringify(this.path)), f = [], d = 0; d < l.length; d++)
                    if (void 0 !== l[d].x)
                        for (var p = b.call(this, l[d]), g = 0; g < p.length; g += 1) - 1 === f.indexOf(p[g]) && f.push(p[g]);
                for (var m = 0; m < f.length; m++)
                    for (; this.pdf.internal.getNumberOfPages() < f[m];) v.call(this);
                if (y(f), this.autoPaging)
                    for (var _ = f[0], A = f[f.length - 1], N = _; N < A + 1; N++) {
                        if (this.pdf.setPage(N), this.fillStyle = i, this.strokeStyle = a, this.lineCap = o, this.lineWidth = u, this.lineJoin = h, 0 !== this.ctx.clip_path.length) {
                            var L = this.path;
                            r = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = w(r, this.posX, -1 * this.pdf.internal.pageSize.height * (N - 1) + this.posY), x.call(this, t, !0), this.path = L
                        }
                        n = JSON.parse(JSON.stringify(c)), this.path = w(n, this.posX, -1 * this.pdf.internal.pageSize.height * (N - 1) + this.posY), !1 !== e && 0 !== N || x.call(this, t, e), this.lineWidth = s
                    } else this.lineWidth = u, x.call(this, t, e), this.lineWidth = s;
                this.path = c
            },
            x = function(t, e) {
                if (("stroke" !== t || e || !m.call(this)) && ("stroke" === t || e || !g.call(this))) {
                    for (var r, n, i = [], a = this.path, o = 0; o < a.length; o++) {
                        var s = a[o];
                        switch (s.type) {
                            case "begin":
                                i.push({ begin: !0 });
                                break;
                            case "close":
                                i.push({ close: !0 });
                                break;
                            case "mt":
                                i.push({ start: s, deltas: [], abs: [] });
                                break;
                            case "lt":
                                var u = i.length;
                                if (!isNaN(a[o - 1].x) && (r = [s.x - a[o - 1].x, s.y - a[o - 1].y], u > 0))
                                    for (; u >= 0; u--)
                                        if (!0 !== i[u - 1].close && !0 !== i[u - 1].begin) { i[u - 1].deltas.push(r), i[u - 1].abs.push(s); break }
                                break;
                            case "bct":
                                r = [s.x1 - a[o - 1].x, s.y1 - a[o - 1].y, s.x2 - a[o - 1].x, s.y2 - a[o - 1].y, s.x - a[o - 1].x, s.y - a[o - 1].y], i[i.length - 1].deltas.push(r);
                                break;
                            case "qct":
                                var h = a[o - 1].x + 2 / 3 * (s.x1 - a[o - 1].x),
                                    c = a[o - 1].y + 2 / 3 * (s.y1 - a[o - 1].y),
                                    l = s.x + 2 / 3 * (s.x1 - s.x),
                                    f = s.y + 2 / 3 * (s.y1 - s.y),
                                    d = s.x,
                                    p = s.y;
                                r = [h - a[o - 1].x, c - a[o - 1].y, l - a[o - 1].x, f - a[o - 1].y, d - a[o - 1].x, p - a[o - 1].y], i[i.length - 1].deltas.push(r);
                                break;
                            case "arc":
                                i.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s)
                        }
                    }
                    n = e ? null : "stroke" === t ? "stroke" : "fill";
                    for (var b = 0; b < i.length; b++) {
                        if (i[b].arc) {
                            for (var v = i[b].abs, w = 0; w < v.length; w++) { var y = v[w]; "arc" === y.type ? N.call(this, y.x, y.y, y.radius, y.startAngle, y.endAngle, y.counterclockwise, void 0, e) : I.call(this, y.x, y.y) }
                            L.call(this, n), this.pdf.internal.out("h")
                        }
                        if (!i[b].arc && !0 !== i[b].close && !0 !== i[b].begin) {
                            var _ = i[b].start.x,
                                x = i[b].start.y;
                            F.call(this, i[b].deltas, _, x)
                        }
                    }
                    n && L.call(this, n), e && S.call(this)
                }
            },
            A = function(t) {
                var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
                    r = e * (this.pdf.internal.getLineHeightFactor() - 1);
                switch (this.ctx.textBaseline) {
                    case "bottom":
                        return t - r;
                    case "top":
                        return t + e - r;
                    case "hanging":
                        return t + e - 2 * r;
                    case "middle":
                        return t + e / 2 - r;
                    case "ideographic":
                        return t;
                    case "alphabetic":
                    default:
                        return t
                }
            };
        d.prototype.createLinearGradient = function() { var t = function() {}; return t.colorStops = [], t.addColorStop = function(t, e) { this.colorStops.push([t, e]) }, t.getColor = function() { return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1] }, t.isCanvasGradient = !0, t }, d.prototype.createPattern = function() { return this.createLinearGradient() }, d.prototype.createRadialGradient = function() { return this.createLinearGradient() };
        var N = function(t, e, r, n, i, a, o, s) {
                for (var u = j.call(this, r, n, i, a), h = 0; h < u.length; h++) {
                    var c = u[h];
                    0 === h && k.call(this, c.x1 + t, c.y1 + e), C.call(this, t, e, c.x2, c.y2, c.x3, c.y3, c.x4, c.y4)
                }
                s ? S.call(this) : L.call(this, o)
            },
            L = function(t) {
                switch (t) {
                    case "stroke":
                        this.pdf.internal.out("S");
                        break;
                    case "fill":
                        this.pdf.internal.out("f")
                }
            },
            S = function() { this.pdf.clip(), this.pdf.discardPath() },
            k = function(t, e) { this.pdf.internal.out(r(t) + " " + i(e) + " m") },
            P = function(t) {
                var e;
                switch (t.align) {
                    case "right":
                    case "end":
                        e = "right";
                        break;
                    case "center":
                        e = "center";
                        break;
                    case "left":
                    case "start":
                    default:
                        e = "left"
                }
                var r = this.ctx.transform.applyToPoint(new s(t.x, t.y)),
                    n = this.ctx.transform.decompose(),
                    i = new h;
                i = (i = (i = i.multiply(n.translate)).multiply(n.skew)).multiply(n.scale);
                for (var a, o, c, l = this.pdf.getTextDimensions(t.text), f = this.ctx.transform.applyToRectangle(new u(t.x, t.y, l.w, l.h)), d = i.applyToRectangle(new u(t.x, t.y - l.h, l.w, l.h)), p = b.call(this, d), g = [], m = 0; m < p.length; m += 1) - 1 === g.indexOf(p[m]) && g.push(p[m]);
                if (y(g), !0 === this.autoPaging)
                    for (var v = g[0], _ = g[g.length - 1], A = v; A < _ + 1; A++) {
                        if (this.pdf.setPage(A), 0 !== this.ctx.clip_path.length) {
                            var N = this.path;
                            a = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = w(a, this.posX, -1 * this.pdf.internal.pageSize.height * (A - 1) + this.posY), x.call(this, "fill", !0), this.path = N
                        }
                        var L = JSON.parse(JSON.stringify(f));
                        L = w([L], this.posX, -1 * this.pdf.internal.pageSize.height * (A - 1) + this.posY)[0], t.scale >= .01 && (o = this.pdf.internal.getFontSize(), this.pdf.setFontSize(o * t.scale), c = this.lineWidth, this.lineWidth = c * t.scale), this.pdf.text(t.text, L.x, L.y, { angle: t.angle, align: e, renderingMode: t.renderingMode, maxWidth: t.maxWidth }), t.scale >= .01 && (this.pdf.setFontSize(o), this.lineWidth = c)
                    } else t.scale >= .01 && (o = this.pdf.internal.getFontSize(), this.pdf.setFontSize(o * t.scale), c = this.lineWidth, this.lineWidth = c * t.scale), this.pdf.text(t.text, r.x + this.posX, r.y + this.posY, { angle: t.angle, align: e, renderingMode: t.renderingMode, maxWidth: t.maxWidth }), t.scale >= .01 && (this.pdf.setFontSize(o), this.lineWidth = c)
            },
            I = function(t, e, n, a) { n = n || 0, a = a || 0, this.pdf.internal.out(r(t + n) + " " + i(e + a) + " l") },
            F = function(t, e, r) { return this.pdf.lines(t, e, r, null, null) },
            C = function(t, r, n, i, s, u, h, c) { this.pdf.internal.out([e(a(n + t)), e(o(i + r)), e(a(s + t)), e(o(u + r)), e(a(h + t)), e(o(c + r)), "c"].join(" ")) },
            j = function(t, e, r, n) {
                for (var i = 2 * Math.PI, a = Math.PI / 2; e > r;) e -= i;
                var o = Math.abs(r - e);
                o < i && n && (o = i - o);
                for (var s = [], u = n ? -1 : 1, h = e; o > 1e-5;) {
                    var c = h + u * Math.min(o, a);
                    s.push(B.call(this, t, h, c)), o -= Math.abs(c - h), h = c
                }
                return s
            },
            B = function(t, e, r) {
                var n = (r - e) / 2,
                    i = t * Math.cos(n),
                    a = t * Math.sin(n),
                    o = i,
                    s = -a,
                    u = o * o + s * s,
                    h = u + o * i + s * a,
                    c = 4 / 3 * (Math.sqrt(2 * u * h) - h) / (o * a - s * i),
                    l = o - c * s,
                    f = s + c * o,
                    d = l,
                    p = -f,
                    g = n + e,
                    m = Math.cos(g),
                    b = Math.sin(g);
                return { x1: t * Math.cos(e), y1: t * Math.sin(e), x2: l * m - f * b, y2: l * b + f * m, x3: d * m - p * b, y3: d * b + p * m, x4: t * Math.cos(r), y4: t * Math.sin(r) }
            },
            E = function(t) { return 180 * t / Math.PI },
            O = function(t, e, r, n, i, a) {
                var o = t + .5 * (r - t),
                    s = e + .5 * (n - e),
                    h = i + .5 * (r - i),
                    c = a + .5 * (n - a),
                    l = Math.min(t, i, o, h),
                    f = Math.max(t, i, o, h),
                    d = Math.min(e, a, s, c),
                    p = Math.max(e, a, s, c);
                return new u(l, d, f - l, p - d)
            },
            M = function(t, e, r, n, i, a, o, s) {
                var h, c, l, f, d, p, g, m, b, v, w, y, _, x, A = r - t,
                    N = n - e,
                    L = i - r,
                    S = a - n,
                    k = o - i,
                    P = s - a;
                for (c = 0; c < 41; c++) b = (g = (l = t + (h = c / 40) * A) + h * ((d = r + h * L) - l)) + h * (d + h * (i + h * k - d) - g), v = (m = (f = e + h * N) + h * ((p = n + h * S) - f)) + h * (p + h * (a + h * P - p) - m), 0 == c ? (w = b, y = v, _ = b, x = v) : (w = Math.min(w, b), y = Math.min(y, v), _ = Math.max(_, b), x = Math.max(x, v));
                return new u(Math.round(w), Math.round(y), Math.round(_ - w), Math.round(x - y))
            }
    }(j.API);
    var xt = function(t, e) { return t(e = { exports: {} }, e.exports), e.exports }((function(t, e) {
        var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;

        function n(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }
        e.assign = function(t) { for (var e = Array.prototype.slice.call(arguments, 1); e.length;) { var r = e.shift(); if (r) { if ("object" != typeof r) throw new TypeError(r + "must be non-object"); for (var i in r) n(r, i) && (t[i] = r[i]) } } return t }, e.shrinkBuf = function(t, e) { return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t) };
        var i = {
                arraySet: function(t, e, r, n, i) {
                    if (e.subarray && t.subarray) t.set(e.subarray(r, r + n), i);
                    else
                        for (var a = 0; a < n; a++) t[i + a] = e[r + a]
                },
                flattenChunks: function(t) { var e, r, n, i, a, o; for (n = 0, e = 0, r = t.length; e < r; e++) n += t[e].length; for (o = new Uint8Array(n), i = 0, e = 0, r = t.length; e < r; e++) a = t[e], o.set(a, i), i += a.length; return o }
            },
            a = { arraySet: function(t, e, r, n, i) { for (var a = 0; a < n; a++) t[i + a] = e[r + a] }, flattenChunks: function(t) { return [].concat.apply([], t) } };
        e.setTyped = function(t) { t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, i)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, a)) }, e.setTyped(r)
    }));
    xt.assign, xt.shrinkBuf, xt.setTyped, xt.Buf8, xt.Buf16, xt.Buf32;

    function At(t) { for (var e = t.length; --e >= 0;) t[e] = 0 }
    var Nt = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        Lt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        St = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        kt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        Pt = new Array(576);
    At(Pt);
    var It = new Array(60);
    At(It);
    var Ft = new Array(512);
    At(Ft);
    var Ct = new Array(256);
    At(Ct);
    var jt = new Array(29);
    At(jt);
    var Bt, Et, Ot, Mt = new Array(30);

    function qt(t, e, r, n, i) { this.static_tree = t, this.extra_bits = e, this.extra_base = r, this.elems = n, this.max_length = i, this.has_stree = t && t.length }

    function Rt(t, e) { this.dyn_tree = t, this.max_code = 0, this.stat_desc = e }

    function Tt(t) { return t < 256 ? Ft[t] : Ft[256 + (t >>> 7)] }

    function Dt(t, e) { t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255 }

    function zt(t, e, r) { t.bi_valid > 16 - r ? (t.bi_buf |= e << t.bi_valid & 65535, Dt(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += r - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += r) }

    function Ut(t, e, r) { zt(t, r[2 * e], r[2 * e + 1]) }

    function Ht(t, e) {
        var r = 0;
        do { r |= 1 & t, t >>>= 1, r <<= 1 } while (--e > 0);
        return r >>> 1
    }

    function Vt(t, e, r) {
        var n, i, a = new Array(16),
            o = 0;
        for (n = 1; n <= 15; n++) a[n] = o = o + r[n - 1] << 1;
        for (i = 0; i <= e; i++) {
            var s = t[2 * i + 1];
            0 !== s && (t[2 * i] = Ht(a[s]++, s))
        }
    }

    function Wt(t) {
        var e;
        for (e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
        t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
    }

    function Gt(t) { t.bi_valid > 8 ? Dt(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0 }

    function Yt(t, e, r, n) {
        var i = 2 * e,
            a = 2 * r;
        return t[i] < t[a] || t[i] === t[a] && n[e] <= n[r]
    }

    function Jt(t, e, r) {
        for (var n = t.heap[r], i = r << 1; i <= t.heap_len && (i < t.heap_len && Yt(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !Yt(e, n, t.heap[i], t.depth));) t.heap[r] = t.heap[i], r = i, i <<= 1;
        t.heap[r] = n
    }

    function Xt(t, e, r) {
        var n, i, a, o, s = 0;
        if (0 !== t.last_lit)
            do { n = t.pending_buf[t.d_buf + 2 * s] << 8 | t.pending_buf[t.d_buf + 2 * s + 1], i = t.pending_buf[t.l_buf + s], s++, 0 === n ? Ut(t, i, e) : (Ut(t, (a = Ct[i]) + 256 + 1, e), 0 !== (o = Nt[a]) && zt(t, i -= jt[a], o), Ut(t, a = Tt(--n), r), 0 !== (o = Lt[a]) && zt(t, n -= Mt[a], o)) } while (s < t.last_lit);
        Ut(t, 256, e)
    }

    function Kt(t, e) {
        var r, n, i, a = e.dyn_tree,
            o = e.stat_desc.static_tree,
            s = e.stat_desc.has_stree,
            u = e.stat_desc.elems,
            h = -1;
        for (t.heap_len = 0, t.heap_max = 573, r = 0; r < u; r++) 0 !== a[2 * r] ? (t.heap[++t.heap_len] = h = r, t.depth[r] = 0) : a[2 * r + 1] = 0;
        for (; t.heap_len < 2;) a[2 * (i = t.heap[++t.heap_len] = h < 2 ? ++h : 0)] = 1, t.depth[i] = 0, t.opt_len--, s && (t.static_len -= o[2 * i + 1]);
        for (e.max_code = h, r = t.heap_len >> 1; r >= 1; r--) Jt(t, a, r);
        i = u;
        do { r = t.heap[1], t.heap[1] = t.heap[t.heap_len--], Jt(t, a, 1), n = t.heap[1], t.heap[--t.heap_max] = r, t.heap[--t.heap_max] = n, a[2 * i] = a[2 * r] + a[2 * n], t.depth[i] = (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) + 1, a[2 * r + 1] = a[2 * n + 1] = i, t.heap[1] = i++, Jt(t, a, 1) } while (t.heap_len >= 2);
        t.heap[--t.heap_max] = t.heap[1],
            function(t, e) {
                var r, n, i, a, o, s, u = e.dyn_tree,
                    h = e.max_code,
                    c = e.stat_desc.static_tree,
                    l = e.stat_desc.has_stree,
                    f = e.stat_desc.extra_bits,
                    d = e.stat_desc.extra_base,
                    p = e.stat_desc.max_length,
                    g = 0;
                for (a = 0; a <= 15; a++) t.bl_count[a] = 0;
                for (u[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1; r < 573; r++)(a = u[2 * u[2 * (n = t.heap[r]) + 1] + 1] + 1) > p && (a = p, g++), u[2 * n + 1] = a, n > h || (t.bl_count[a]++, o = 0, n >= d && (o = f[n - d]), s = u[2 * n], t.opt_len += s * (a + o), l && (t.static_len += s * (c[2 * n + 1] + o)));
                if (0 !== g) {
                    do {
                        for (a = p - 1; 0 === t.bl_count[a];) a--;
                        t.bl_count[a]--, t.bl_count[a + 1] += 2, t.bl_count[p]--, g -= 2
                    } while (g > 0);
                    for (a = p; 0 !== a; a--)
                        for (n = t.bl_count[a]; 0 !== n;)(i = t.heap[--r]) > h || (u[2 * i + 1] !== a && (t.opt_len += (a - u[2 * i + 1]) * u[2 * i], u[2 * i + 1] = a), n--)
                }
            }(t, e), Vt(a, h, t.bl_count)
    }

    function Zt(t, e, r) {
        var n, i, a = -1,
            o = e[1],
            s = 0,
            u = 7,
            h = 4;
        for (0 === o && (u = 138, h = 3), e[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++) i = o, o = e[2 * (n + 1) + 1], ++s < u && i === o || (s < h ? t.bl_tree[2 * i] += s : 0 !== i ? (i !== a && t.bl_tree[2 * i]++, t.bl_tree[32]++) : s <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++, s = 0, a = i, 0 === o ? (u = 138, h = 3) : i === o ? (u = 6, h = 3) : (u = 7, h = 4))
    }

    function $t(t, e, r) {
        var n, i, a = -1,
            o = e[1],
            s = 0,
            u = 7,
            h = 4;
        for (0 === o && (u = 138, h = 3), n = 0; n <= r; n++)
            if (i = o, o = e[2 * (n + 1) + 1], !(++s < u && i === o)) {
                if (s < h)
                    do { Ut(t, i, t.bl_tree) } while (0 != --s);
                else 0 !== i ? (i !== a && (Ut(t, i, t.bl_tree), s--), Ut(t, 16, t.bl_tree), zt(t, s - 3, 2)) : s <= 10 ? (Ut(t, 17, t.bl_tree), zt(t, s - 3, 3)) : (Ut(t, 18, t.bl_tree), zt(t, s - 11, 7));
                s = 0, a = i, 0 === o ? (u = 138, h = 3) : i === o ? (u = 6, h = 3) : (u = 7, h = 4)
            }
    }
    At(Mt);
    var Qt = !1;

    function te(t, e, r, n) {
        zt(t, 0 + (n ? 1 : 0), 3),
            function(t, e, r, n) { Gt(t), n && (Dt(t, r), Dt(t, ~r)), xt.arraySet(t.pending_buf, t.window, e, r, t.pending), t.pending += r }(t, e, r, !0)
    }
    var ee = {
        _tr_init: function(t) {
            Qt || (! function() {
                var t, e, r, n, i, a = new Array(16);
                for (r = 0, n = 0; n < 28; n++)
                    for (jt[n] = r, t = 0; t < 1 << Nt[n]; t++) Ct[r++] = n;
                for (Ct[r - 1] = n, i = 0, n = 0; n < 16; n++)
                    for (Mt[n] = i, t = 0; t < 1 << Lt[n]; t++) Ft[i++] = n;
                for (i >>= 7; n < 30; n++)
                    for (Mt[n] = i << 7, t = 0; t < 1 << Lt[n] - 7; t++) Ft[256 + i++] = n;
                for (e = 0; e <= 15; e++) a[e] = 0;
                for (t = 0; t <= 143;) Pt[2 * t + 1] = 8, t++, a[8]++;
                for (; t <= 255;) Pt[2 * t + 1] = 9, t++, a[9]++;
                for (; t <= 279;) Pt[2 * t + 1] = 7, t++, a[7]++;
                for (; t <= 287;) Pt[2 * t + 1] = 8, t++, a[8]++;
                for (Vt(Pt, 287, a), t = 0; t < 30; t++) It[2 * t + 1] = 5, It[2 * t] = Ht(t, 5);
                Bt = new qt(Pt, Nt, 257, 286, 15), Et = new qt(It, Lt, 0, 30, 15), Ot = new qt(new Array(0), St, 0, 19, 7)
            }(), Qt = !0), t.l_desc = new Rt(t.dyn_ltree, Bt), t.d_desc = new Rt(t.dyn_dtree, Et), t.bl_desc = new Rt(t.bl_tree, Ot), t.bi_buf = 0, t.bi_valid = 0, Wt(t)
        },
        _tr_stored_block: te,
        _tr_flush_block: function(t, e, r, n) {
            var i, a, o = 0;
            t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = function(t) {
                var e, r = 4093624447;
                for (e = 0; e <= 31; e++, r >>>= 1)
                    if (1 & r && 0 !== t.dyn_ltree[2 * e]) return 0;
                if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
                for (e = 32; e < 256; e++)
                    if (0 !== t.dyn_ltree[2 * e]) return 1;
                return 0
            }(t)), Kt(t, t.l_desc), Kt(t, t.d_desc), o = function(t) { var e; for (Zt(t, t.dyn_ltree, t.l_desc.max_code), Zt(t, t.dyn_dtree, t.d_desc.max_code), Kt(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * kt[e] + 1]; e--); return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e }(t), i = t.opt_len + 3 + 7 >>> 3, (a = t.static_len + 3 + 7 >>> 3) <= i && (i = a)) : i = a = r + 5, r + 4 <= i && -1 !== e ? te(t, e, r, n) : 4 === t.strategy || a === i ? (zt(t, 2 + (n ? 1 : 0), 3), Xt(t, Pt, It)) : (zt(t, 4 + (n ? 1 : 0), 3), function(t, e, r, n) {
                var i;
                for (zt(t, e - 257, 5), zt(t, r - 1, 5), zt(t, n - 4, 4), i = 0; i < n; i++) zt(t, t.bl_tree[2 * kt[i] + 1], 3);
                $t(t, t.dyn_ltree, e - 1), $t(t, t.dyn_dtree, r - 1)
            }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1), Xt(t, t.dyn_ltree, t.dyn_dtree)), Wt(t), n && Gt(t)
        },
        _tr_tally: function(t, e, r) { return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & r, t.last_lit++, 0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++, e--, t.dyn_ltree[2 * (Ct[r] + 256 + 1)]++, t.dyn_dtree[2 * Tt(e)]++), t.last_lit === t.lit_bufsize - 1 },
        _tr_align: function(t) {
            zt(t, 2, 3), Ut(t, 256, Pt),
                function(t) { 16 === t.bi_valid ? (Dt(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8) }(t)
        }
    };
    var re = function(t, e, r, n) {
        for (var i = 65535 & t | 0, a = t >>> 16 & 65535 | 0, o = 0; 0 !== r;) {
            r -= o = r > 2e3 ? 2e3 : r;
            do { a = a + (i = i + e[n++] | 0) | 0 } while (--o);
            i %= 65521, a %= 65521
        }
        return i | a << 16 | 0
    };
    var ne = function() {
        for (var t, e = [], r = 0; r < 256; r++) {
            t = r;
            for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
            e[r] = t
        }
        return e
    }();
    var ie, ae = function(t, e, r, n) {
            var i = ne,
                a = n + r;
            t ^= -1;
            for (var o = n; o < a; o++) t = t >>> 8 ^ i[255 & (t ^ e[o])];
            return -1 ^ t
        },
        oe = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };

    function se(t, e) { return t.msg = oe[e], e }

    function ue(t) { return (t << 1) - (t > 4 ? 9 : 0) }

    function he(t) { for (var e = t.length; --e >= 0;) t[e] = 0 }

    function ce(t) {
        var e = t.state,
            r = e.pending;
        r > t.avail_out && (r = t.avail_out), 0 !== r && (xt.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out), t.next_out += r, e.pending_out += r, t.total_out += r, t.avail_out -= r, e.pending -= r, 0 === e.pending && (e.pending_out = 0))
    }

    function le(t, e) { ee._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, ce(t.strm) }

    function fe(t, e) { t.pending_buf[t.pending++] = e }

    function de(t, e) { t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e }

    function pe(t, e) {
        var r, n, i = t.max_chain_length,
            a = t.strstart,
            o = t.prev_length,
            s = t.nice_match,
            u = t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0,
            h = t.window,
            c = t.w_mask,
            l = t.prev,
            f = t.strstart + 258,
            d = h[a + o - 1],
            p = h[a + o];
        t.prev_length >= t.good_match && (i >>= 2), s > t.lookahead && (s = t.lookahead);
        do {
            if (h[(r = e) + o] === p && h[r + o - 1] === d && h[r] === h[a] && h[++r] === h[a + 1]) {
                a += 2, r++;
                do {} while (h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && a < f);
                if (n = 258 - (f - a), a = f - 258, n > o) {
                    if (t.match_start = e, o = n, n >= s) break;
                    d = h[a + o - 1], p = h[a + o]
                }
            }
        } while ((e = l[e & c]) > u && 0 != --i);
        return o <= t.lookahead ? o : t.lookahead
    }

    function ge(t) {
        var e, r, n, i, a, o, s, u, h, c, l = t.w_size;
        do {
            if (i = t.window_size - t.lookahead - t.strstart, t.strstart >= l + (l - 262)) {
                xt.arraySet(t.window, t.window, l, l, 0), t.match_start -= l, t.strstart -= l, t.block_start -= l, e = r = t.hash_size;
                do { n = t.head[--e], t.head[e] = n >= l ? n - l : 0 } while (--r);
                e = r = l;
                do { n = t.prev[--e], t.prev[e] = n >= l ? n - l : 0 } while (--r);
                i += l
            }
            if (0 === t.strm.avail_in) break;
            if (o = t.strm, s = t.window, u = t.strstart + t.lookahead, h = i, c = void 0, (c = o.avail_in) > h && (c = h), r = 0 === c ? 0 : (o.avail_in -= c, xt.arraySet(s, o.input, o.next_in, c, u), 1 === o.state.wrap ? o.adler = re(o.adler, s, c, u) : 2 === o.state.wrap && (o.adler = ae(o.adler, s, c, u)), o.next_in += c, o.total_in += c, c), t.lookahead += r, t.lookahead + t.insert >= 3)
                for (a = t.strstart - t.insert, t.ins_h = t.window[a], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + 3 - 1]) & t.hash_mask, t.prev[a & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = a, a++, t.insert--, !(t.lookahead + t.insert < 3)););
        } while (t.lookahead < 262 && 0 !== t.strm.avail_in)
    }

    function me(t, e) {
        for (var r, n;;) {
            if (t.lookahead < 262) { if (ge(t), t.lookahead < 262 && 0 === e) return 1; if (0 === t.lookahead) break }
            if (r = 0, t.lookahead >= 3 && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 3 - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== r && t.strstart - r <= t.w_size - 262 && (t.match_length = pe(t, r)), t.match_length >= 3)
                if (n = ee._tr_tally(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                    t.match_length--;
                    do { t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 3 - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart } while (0 != --t.match_length);
                    t.strstart++
                } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
            else n = ee._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
            if (n && (le(t, !1), 0 === t.strm.avail_out)) return 1
        }
        return t.insert = t.strstart < 2 ? t.strstart : 2, 4 === e ? (le(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (le(t, !1), 0 === t.strm.avail_out) ? 1 : 2
    }

    function be(t, e) {
        for (var r, n, i;;) {
            if (t.lookahead < 262) { if (ge(t), t.lookahead < 262 && 0 === e) return 1; if (0 === t.lookahead) break }
            if (r = 0, t.lookahead >= 3 && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 3 - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== r && t.prev_length < t.max_lazy_match && t.strstart - r <= t.w_size - 262 && (t.match_length = pe(t, r), t.match_length <= 5 && (1 === t.strategy || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
                i = t.strstart + t.lookahead - 3, n = ee._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                do {++t.strstart <= i && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 3 - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart) } while (0 != --t.prev_length);
                if (t.match_available = 0, t.match_length = 2, t.strstart++, n && (le(t, !1), 0 === t.strm.avail_out)) return 1
            } else if (t.match_available) { if ((n = ee._tr_tally(t, 0, t.window[t.strstart - 1])) && le(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1 } else t.match_available = 1, t.strstart++, t.lookahead--
        }
        return t.match_available && (n = ee._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, 4 === e ? (le(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (le(t, !1), 0 === t.strm.avail_out) ? 1 : 2
    }

    function ve(t, e, r, n, i) { this.good_length = t, this.max_lazy = e, this.nice_length = r, this.max_chain = n, this.func = i }

    function we() { this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new xt.Buf16(1146), this.dyn_dtree = new xt.Buf16(122), this.bl_tree = new xt.Buf16(78), he(this.dyn_ltree), he(this.dyn_dtree), he(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new xt.Buf16(16), this.heap = new xt.Buf16(573), he(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new xt.Buf16(573), he(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0 }

    function ye(t) { var e; return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = 2, (e = t.state).pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? 42 : 113, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = 0, ee._tr_init(e), 0) : se(t, -2) }

    function _e(t) { var e = ye(t); return 0 === e && function(t) { t.window_size = 2 * t.w_size, he(t.head), t.max_lazy_match = ie[t.level].max_lazy, t.good_match = ie[t.level].good_length, t.nice_match = ie[t.level].nice_length, t.max_chain_length = ie[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = 2, t.match_available = 0, t.ins_h = 0 }(t.state), e }

    function xe(t, e, r, n, i, a) {
        if (!t) return -2;
        var o = 1;
        if (-1 === e && (e = 6), n < 0 ? (o = 0, n = -n) : n > 15 && (o = 2, n -= 16), i < 1 || i > 9 || 8 !== r || n < 8 || n > 15 || e < 0 || e > 9 || a < 0 || a > 4) return se(t, -2);
        8 === n && (n = 9);
        var s = new we;
        return t.state = s, s.strm = t, s.wrap = o, s.gzhead = null, s.w_bits = n, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = i + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3), s.window = new xt.Buf8(2 * s.w_size), s.head = new xt.Buf16(s.hash_size), s.prev = new xt.Buf16(s.w_size), s.lit_bufsize = 1 << i + 6, s.pending_buf_size = 4 * s.lit_bufsize, s.pending_buf = new xt.Buf8(s.pending_buf_size), s.d_buf = 1 * s.lit_bufsize, s.l_buf = 3 * s.lit_bufsize, s.level = e, s.strategy = a, s.method = r, _e(t)
    }
    ie = [new ve(0, 0, 0, 0, (function(t, e) {
        var r = 65535;
        for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5);;) {
            if (t.lookahead <= 1) { if (ge(t), 0 === t.lookahead && 0 === e) return 1; if (0 === t.lookahead) break }
            t.strstart += t.lookahead, t.lookahead = 0;
            var n = t.block_start + r;
            if ((0 === t.strstart || t.strstart >= n) && (t.lookahead = t.strstart - n, t.strstart = n, le(t, !1), 0 === t.strm.avail_out)) return 1;
            if (t.strstart - t.block_start >= t.w_size - 262 && (le(t, !1), 0 === t.strm.avail_out)) return 1
        }
        return t.insert = 0, 4 === e ? (le(t, !0), 0 === t.strm.avail_out ? 3 : 4) : (t.strstart > t.block_start && (le(t, !1), t.strm.avail_out), 1)
    })), new ve(4, 4, 8, 4, me), new ve(4, 5, 16, 8, me), new ve(4, 6, 32, 32, me), new ve(4, 4, 16, 16, be), new ve(8, 16, 32, 32, be), new ve(8, 16, 128, 128, be), new ve(8, 32, 128, 256, be), new ve(32, 128, 258, 1024, be), new ve(32, 258, 258, 4096, be)];
    var Ae = {
            deflateInit: function(t, e) { return xe(t, e, 8, 15, 8, 0) },
            deflateInit2: xe,
            deflateReset: _e,
            deflateResetKeep: ye,
            deflateSetHeader: function(t, e) { return t && t.state ? 2 !== t.state.wrap ? -2 : (t.state.gzhead = e, 0) : -2 },
            deflate: function(t, e) {
                var r, n, i, a;
                if (!t || !t.state || e > 5 || e < 0) return t ? se(t, -2) : -2;
                if (n = t.state, !t.output || !t.input && 0 !== t.avail_in || 666 === n.status && 4 !== e) return se(t, 0 === t.avail_out ? -5 : -2);
                if (n.strm = t, r = n.last_flush, n.last_flush = e, 42 === n.status)
                    if (2 === n.wrap) t.adler = 0, fe(n, 31), fe(n, 139), fe(n, 8), n.gzhead ? (fe(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), fe(n, 255 & n.gzhead.time), fe(n, n.gzhead.time >> 8 & 255), fe(n, n.gzhead.time >> 16 & 255), fe(n, n.gzhead.time >> 24 & 255), fe(n, 9 === n.level ? 2 : n.strategy >= 2 || n.level < 2 ? 4 : 0), fe(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (fe(n, 255 & n.gzhead.extra.length), fe(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (t.adler = ae(t.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69) : (fe(n, 0), fe(n, 0), fe(n, 0), fe(n, 0), fe(n, 0), fe(n, 9 === n.level ? 2 : n.strategy >= 2 || n.level < 2 ? 4 : 0), fe(n, 3), n.status = 113);
                    else {
                        var o = 8 + (n.w_bits - 8 << 4) << 8;
                        o |= (n.strategy >= 2 || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (o |= 32), o += 31 - o % 31, n.status = 113, de(n, o), 0 !== n.strstart && (de(n, t.adler >>> 16), de(n, 65535 & t.adler)), t.adler = 1
                    }
                if (69 === n.status)
                    if (n.gzhead.extra) {
                        for (i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (t.adler = ae(t.adler, n.pending_buf, n.pending - i, i)), ce(t), i = n.pending, n.pending !== n.pending_buf_size));) fe(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
                        n.gzhead.hcrc && n.pending > i && (t.adler = ae(t.adler, n.pending_buf, n.pending - i, i)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = 73)
                    } else n.status = 73;
                if (73 === n.status)
                    if (n.gzhead.name) {
                        i = n.pending;
                        do {
                            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (t.adler = ae(t.adler, n.pending_buf, n.pending - i, i)), ce(t), i = n.pending, n.pending === n.pending_buf_size)) { a = 1; break }
                            a = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, fe(n, a)
                        } while (0 !== a);
                        n.gzhead.hcrc && n.pending > i && (t.adler = ae(t.adler, n.pending_buf, n.pending - i, i)), 0 === a && (n.gzindex = 0, n.status = 91)
                    } else n.status = 91;
                if (91 === n.status)
                    if (n.gzhead.comment) {
                        i = n.pending;
                        do {
                            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (t.adler = ae(t.adler, n.pending_buf, n.pending - i, i)), ce(t), i = n.pending, n.pending === n.pending_buf_size)) { a = 1; break }
                            a = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, fe(n, a)
                        } while (0 !== a);
                        n.gzhead.hcrc && n.pending > i && (t.adler = ae(t.adler, n.pending_buf, n.pending - i, i)), 0 === a && (n.status = 103)
                    } else n.status = 103;
                if (103 === n.status && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && ce(t), n.pending + 2 <= n.pending_buf_size && (fe(n, 255 & t.adler), fe(n, t.adler >> 8 & 255), t.adler = 0, n.status = 113)) : n.status = 113), 0 !== n.pending) { if (ce(t), 0 === t.avail_out) return n.last_flush = -1, 0 } else if (0 === t.avail_in && ue(e) <= ue(r) && 4 !== e) return se(t, -5);
                if (666 === n.status && 0 !== t.avail_in) return se(t, -5);
                if (0 !== t.avail_in || 0 !== n.lookahead || 0 !== e && 666 !== n.status) {
                    var s = 2 === n.strategy ? function(t, e) { for (var r;;) { if (0 === t.lookahead && (ge(t), 0 === t.lookahead)) { if (0 === e) return 1; break } if (t.match_length = 0, r = ee._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, r && (le(t, !1), 0 === t.strm.avail_out)) return 1 } return t.insert = 0, 4 === e ? (le(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (le(t, !1), 0 === t.strm.avail_out) ? 1 : 2 }(n, e) : 3 === n.strategy ? function(t, e) {
                        for (var r, n, i, a, o = t.window;;) {
                            if (t.lookahead <= 258) { if (ge(t), t.lookahead <= 258 && 0 === e) return 1; if (0 === t.lookahead) break }
                            if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (n = o[i = t.strstart - 1]) === o[++i] && n === o[++i] && n === o[++i]) {
                                a = t.strstart + 258;
                                do {} while (n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && i < a);
                                t.match_length = 258 - (a - i), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                            }
                            if (t.match_length >= 3 ? (r = ee._tr_tally(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (r = ee._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), r && (le(t, !1), 0 === t.strm.avail_out)) return 1
                        }
                        return t.insert = 0, 4 === e ? (le(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (le(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                    }(n, e) : ie[n.level].func(n, e);
                    if (3 !== s && 4 !== s || (n.status = 666), 1 === s || 3 === s) return 0 === t.avail_out && (n.last_flush = -1), 0;
                    if (2 === s && (1 === e ? ee._tr_align(n) : 5 !== e && (ee._tr_stored_block(n, 0, 0, !1), 3 === e && (he(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), ce(t), 0 === t.avail_out)) return n.last_flush = -1, 0
                }
                return 4 !== e ? 0 : n.wrap <= 0 ? 1 : (2 === n.wrap ? (fe(n, 255 & t.adler), fe(n, t.adler >> 8 & 255), fe(n, t.adler >> 16 & 255), fe(n, t.adler >> 24 & 255), fe(n, 255 & t.total_in), fe(n, t.total_in >> 8 & 255), fe(n, t.total_in >> 16 & 255), fe(n, t.total_in >> 24 & 255)) : (de(n, t.adler >>> 16), de(n, 65535 & t.adler)), ce(t), n.wrap > 0 && (n.wrap = -n.wrap), 0 !== n.pending ? 0 : 1)
            },
            deflateEnd: function(t) { var e; return t && t.state ? 42 !== (e = t.state.status) && 69 !== e && 73 !== e && 91 !== e && 103 !== e && 113 !== e && 666 !== e ? se(t, -2) : (t.state = null, 113 === e ? se(t, -3) : 0) : -2 },
            deflateSetDictionary: function(t, e) {
                var r, n, i, a, o, s, u, h, c = e.length;
                if (!t || !t.state) return -2;
                if (2 === (a = (r = t.state).wrap) || 1 === a && 42 !== r.status || r.lookahead) return -2;
                for (1 === a && (t.adler = re(t.adler, e, c, 0)), r.wrap = 0, c >= r.w_size && (0 === a && (he(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), h = new xt.Buf8(r.w_size), xt.arraySet(h, e, c - r.w_size, r.w_size, 0), e = h, c = r.w_size), o = t.avail_in, s = t.next_in, u = t.input, t.avail_in = c, t.next_in = 0, t.input = e, ge(r); r.lookahead >= 3;) {
                    n = r.strstart, i = r.lookahead - 2;
                    do { r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + 3 - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++ } while (--i);
                    r.strstart = n, r.lookahead = 2, ge(r)
                }
                return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = 2, r.match_available = 0, t.next_in = s, t.input = u, t.avail_in = o, r.wrap = a, 0
            },
            deflateInfo: "pako deflate (from Nodeca project)"
        },
        Ne = !0,
        Le = !0;
    try { String.fromCharCode.apply(null, [0]) } catch (t) { Ne = !1 }
    try { String.fromCharCode.apply(null, new Uint8Array(1)) } catch (t) { Le = !1 }
    for (var Se = new xt.Buf8(256), ke = 0; ke < 256; ke++) Se[ke] = ke >= 252 ? 6 : ke >= 248 ? 5 : ke >= 240 ? 4 : ke >= 224 ? 3 : ke >= 192 ? 2 : 1;
    Se[254] = Se[254] = 1;

    function Pe(t, e) { if (e < 65534 && (t.subarray && Le || !t.subarray && Ne)) return String.fromCharCode.apply(null, xt.shrinkBuf(t, e)); for (var r = "", n = 0; n < e; n++) r += String.fromCharCode(t[n]); return r }
    var Ie = function(t) {
            var e, r, n, i, a, o = t.length,
                s = 0;
            for (i = 0; i < o; i++) 55296 == (64512 & (r = t.charCodeAt(i))) && i + 1 < o && 56320 == (64512 & (n = t.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), s += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
            for (e = new xt.Buf8(s), a = 0, i = 0; a < s; i++) 55296 == (64512 & (r = t.charCodeAt(i))) && i + 1 < o && 56320 == (64512 & (n = t.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? e[a++] = r : r < 2048 ? (e[a++] = 192 | r >>> 6, e[a++] = 128 | 63 & r) : r < 65536 ? (e[a++] = 224 | r >>> 12, e[a++] = 128 | r >>> 6 & 63, e[a++] = 128 | 63 & r) : (e[a++] = 240 | r >>> 18, e[a++] = 128 | r >>> 12 & 63, e[a++] = 128 | r >>> 6 & 63, e[a++] = 128 | 63 & r);
            return e
        },
        Fe = function(t) { return Pe(t, t.length) },
        Ce = function(t) { for (var e = new xt.Buf8(t.length), r = 0, n = e.length; r < n; r++) e[r] = t.charCodeAt(r); return e },
        je = function(t, e) {
            var r, n, i, a, o = e || t.length,
                s = new Array(2 * o);
            for (n = 0, r = 0; r < o;)
                if ((i = t[r++]) < 128) s[n++] = i;
                else if ((a = Se[i]) > 4) s[n++] = 65533, r += a - 1;
            else {
                for (i &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && r < o;) i = i << 6 | 63 & t[r++], a--;
                a > 1 ? s[n++] = 65533 : i < 65536 ? s[n++] = i : (i -= 65536, s[n++] = 55296 | i >> 10 & 1023, s[n++] = 56320 | 1023 & i)
            }
            return Pe(s, n)
        },
        Be = function(t, e) { var r; for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; r >= 0 && 128 == (192 & t[r]);) r--; return r < 0 || 0 === r ? e : r + Se[t[r]] > e ? r : e };
    var Ee = function() { this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0 },
        Oe = Object.prototype.toString;

    function Me(t) {
        if (!(this instanceof Me)) return new Me(t);
        this.options = xt.assign({ level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" }, t || {});
        var e = this.options;
        e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Ee, this.strm.avail_out = 0;
        var r = Ae.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (0 !== r) throw new Error(oe[r]);
        if (e.header && Ae.deflateSetHeader(this.strm, e.header), e.dictionary) {
            var n;
            if (n = "string" == typeof e.dictionary ? Ie(e.dictionary) : "[object ArrayBuffer]" === Oe.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, 0 !== (r = Ae.deflateSetDictionary(this.strm, n))) throw new Error(oe[r]);
            this._dict_set = !0
        }
    }

    function qe(t, e) { var r = new Me(e); if (r.push(t, !0), r.err) throw r.msg || oe[r.err]; return r.result }
    Me.prototype.push = function(t, e) {
        var r, n, i = this.strm,
            a = this.options.chunkSize;
        if (this.ended) return !1;
        n = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? i.input = Ie(t) : "[object ArrayBuffer]" === Oe.call(t) ? i.input = new Uint8Array(t) : i.input = t, i.next_in = 0, i.avail_in = i.input.length;
        do {
            if (0 === i.avail_out && (i.output = new xt.Buf8(a), i.next_out = 0, i.avail_out = a), 1 !== (r = Ae.deflate(i, n)) && 0 !== r) return this.onEnd(r), this.ended = !0, !1;
            0 !== i.avail_out && (0 !== i.avail_in || 4 !== n && 2 !== n) || ("string" === this.options.to ? this.onData(Fe(xt.shrinkBuf(i.output, i.next_out))) : this.onData(xt.shrinkBuf(i.output, i.next_out)))
        } while ((i.avail_in > 0 || 0 === i.avail_out) && 1 !== r);
        return 4 === n ? (r = Ae.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, 0 === r) : 2 !== n || (this.onEnd(0), i.avail_out = 0, !0)
    }, Me.prototype.onData = function(t) { this.chunks.push(t) }, Me.prototype.onEnd = function(t) { 0 === t && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = xt.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg };
    var Re = { Deflate: Me, deflate: qe, deflateRaw: function(t, e) { return (e = e || {}).raw = !0, qe(t, e) }, gzip: function(t, e) { return (e = e || {}).gzip = !0, qe(t, e) } },
        Te = function(t, e) {
            var r, n, i, a, o, s, u, h, c, l, f, d, p, g, m, b, v, w, y, _, x, A, N, L, S;
            r = t.state, n = t.next_in, L = t.input, i = n + (t.avail_in - 5), a = t.next_out, S = t.output, o = a - (e - t.avail_out), s = a + (t.avail_out - 257), u = r.dmax, h = r.wsize, c = r.whave, l = r.wnext, f = r.window, d = r.hold, p = r.bits, g = r.lencode, m = r.distcode, b = (1 << r.lenbits) - 1, v = (1 << r.distbits) - 1;
            t: do {
                p < 15 && (d += L[n++] << p, p += 8, d += L[n++] << p, p += 8), w = g[d & b];
                e: for (;;) {
                    if (d >>>= y = w >>> 24, p -= y, 0 === (y = w >>> 16 & 255)) S[a++] = 65535 & w;
                    else {
                        if (!(16 & y)) {
                            if (0 == (64 & y)) { w = g[(65535 & w) + (d & (1 << y) - 1)]; continue e }
                            if (32 & y) { r.mode = 12; break t }
                            t.msg = "invalid literal/length code", r.mode = 30;
                            break t
                        }
                        _ = 65535 & w, (y &= 15) && (p < y && (d += L[n++] << p, p += 8), _ += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += L[n++] << p, p += 8, d += L[n++] << p, p += 8), w = m[d & v];
                        r: for (;;) {
                            if (d >>>= y = w >>> 24, p -= y, !(16 & (y = w >>> 16 & 255))) {
                                if (0 == (64 & y)) { w = m[(65535 & w) + (d & (1 << y) - 1)]; continue r }
                                t.msg = "invalid distance code", r.mode = 30;
                                break t
                            }
                            if (x = 65535 & w, p < (y &= 15) && (d += L[n++] << p, (p += 8) < y && (d += L[n++] << p, p += 8)), (x += d & (1 << y) - 1) > u) { t.msg = "invalid distance too far back", r.mode = 30; break t }
                            if (d >>>= y, p -= y, x > (y = a - o)) {
                                if ((y = x - y) > c && r.sane) { t.msg = "invalid distance too far back", r.mode = 30; break t }
                                if (A = 0, N = f, 0 === l) {
                                    if (A += h - y, y < _) {
                                        _ -= y;
                                        do { S[a++] = f[A++] } while (--y);
                                        A = a - x, N = S
                                    }
                                } else if (l < y) {
                                    if (A += h + l - y, (y -= l) < _) {
                                        _ -= y;
                                        do { S[a++] = f[A++] } while (--y);
                                        if (A = 0, l < _) {
                                            _ -= y = l;
                                            do { S[a++] = f[A++] } while (--y);
                                            A = a - x, N = S
                                        }
                                    }
                                } else if (A += l - y, y < _) {
                                    _ -= y;
                                    do { S[a++] = f[A++] } while (--y);
                                    A = a - x, N = S
                                }
                                for (; _ > 2;) S[a++] = N[A++], S[a++] = N[A++], S[a++] = N[A++], _ -= 3;
                                _ && (S[a++] = N[A++], _ > 1 && (S[a++] = N[A++]))
                            } else {
                                A = a - x;
                                do { S[a++] = S[A++], S[a++] = S[A++], S[a++] = S[A++], _ -= 3 } while (_ > 2);
                                _ && (S[a++] = S[A++], _ > 1 && (S[a++] = S[A++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (n < i && a < s);
            n -= _ = p >> 3, d &= (1 << (p -= _ << 3)) - 1, t.next_in = n, t.next_out = a, t.avail_in = n < i ? i - n + 5 : 5 - (n - i), t.avail_out = a < s ? s - a + 257 : 257 - (a - s), r.hold = d, r.bits = p
        },
        De = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        ze = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        Ue = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        He = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64],
        Ve = function(t, e, r, n, i, a, o, s) {
            var u, h, c, l, f, d, p, g, m, b = s.bits,
                v = 0,
                w = 0,
                y = 0,
                _ = 0,
                x = 0,
                A = 0,
                N = 0,
                L = 0,
                S = 0,
                k = 0,
                P = null,
                I = 0,
                F = new xt.Buf16(16),
                C = new xt.Buf16(16),
                j = null,
                B = 0;
            for (v = 0; v <= 15; v++) F[v] = 0;
            for (w = 0; w < n; w++) F[e[r + w]]++;
            for (x = b, _ = 15; _ >= 1 && 0 === F[_]; _--);
            if (x > _ && (x = _), 0 === _) return i[a++] = 20971520, i[a++] = 20971520, s.bits = 1, 0;
            for (y = 1; y < _ && 0 === F[y]; y++);
            for (x < y && (x = y), L = 1, v = 1; v <= 15; v++)
                if (L <<= 1, (L -= F[v]) < 0) return -1;
            if (L > 0 && (0 === t || 1 !== _)) return -1;
            for (C[1] = 0, v = 1; v < 15; v++) C[v + 1] = C[v] + F[v];
            for (w = 0; w < n; w++) 0 !== e[r + w] && (o[C[e[r + w]]++] = w);
            if (0 === t ? (P = j = o, d = 19) : 1 === t ? (P = De, I -= 257, j = ze, B -= 257, d = 256) : (P = Ue, j = He, d = -1), k = 0, w = 0, v = y, f = a, A = x, N = 0, c = -1, l = (S = 1 << x) - 1, 1 === t && S > 852 || 2 === t && S > 592) return 1;
            for (;;) {
                p = v - N, o[w] < d ? (g = 0, m = o[w]) : o[w] > d ? (g = j[B + o[w]], m = P[I + o[w]]) : (g = 96, m = 0), u = 1 << v - N, y = h = 1 << A;
                do { i[f + (k >> N) + (h -= u)] = p << 24 | g << 16 | m | 0 } while (0 !== h);
                for (u = 1 << v - 1; k & u;) u >>= 1;
                if (0 !== u ? (k &= u - 1, k += u) : k = 0, w++, 0 == --F[v]) {
                    if (v === _) break;
                    v = e[r + o[w]]
                }
                if (v > x && (k & l) !== c) {
                    for (0 === N && (N = x), f += y, L = 1 << (A = v - N); A + N < _ && !((L -= F[A + N]) <= 0);) A++, L <<= 1;
                    if (S += 1 << A, 1 === t && S > 852 || 2 === t && S > 592) return 1;
                    i[c = k & l] = x << 24 | A << 16 | f - a | 0
                }
            }
            return 0 !== k && (i[f + k] = v - N << 24 | 64 << 16 | 0), s.bits = x, 0
        };

    function We(t) { return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24) }

    function Ge() { this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new xt.Buf16(320), this.work = new xt.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0 }

    function Ye(t) { var e; return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = 1, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new xt.Buf32(852), e.distcode = e.distdyn = new xt.Buf32(592), e.sane = 1, e.back = -1, 0) : -2 }

    function Je(t) { var e; return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, Ye(t)) : -2 }

    function Xe(t, e) { var r, n; return t && t.state ? (n = t.state, e < 0 ? (r = 0, e = -e) : (r = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? -2 : (null !== n.window && n.wbits !== e && (n.window = null), n.wrap = r, n.wbits = e, Je(t))) : -2 }

    function Ke(t, e) { var r, n; return t ? (n = new Ge, t.state = n, n.window = null, 0 !== (r = Xe(t, e)) && (t.state = null), r) : -2 }
    var Ze, $e, Qe = !0;

    function tr(t) {
        if (Qe) {
            var e;
            for (Ze = new xt.Buf32(512), $e = new xt.Buf32(32), e = 0; e < 144;) t.lens[e++] = 8;
            for (; e < 256;) t.lens[e++] = 9;
            for (; e < 280;) t.lens[e++] = 7;
            for (; e < 288;) t.lens[e++] = 8;
            for (Ve(1, t.lens, 0, 288, Ze, 0, t.work, { bits: 9 }), e = 0; e < 32;) t.lens[e++] = 5;
            Ve(2, t.lens, 0, 32, $e, 0, t.work, { bits: 5 }), Qe = !1
        }
        t.lencode = Ze, t.lenbits = 9, t.distcode = $e, t.distbits = 5
    }

    function er(t, e, r, n) { var i, a = t.state; return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new xt.Buf8(a.wsize)), n >= a.wsize ? (xt.arraySet(a.window, e, r - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : ((i = a.wsize - a.wnext) > n && (i = n), xt.arraySet(a.window, e, r - n, i, a.wnext), (n -= i) ? (xt.arraySet(a.window, e, r - n, n, 0), a.wnext = n, a.whave = a.wsize) : (a.wnext += i, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += i))), 0 }
    var rr = {
            inflateReset: Je,
            inflateReset2: Xe,
            inflateResetKeep: Ye,
            inflateInit: function(t) { return Ke(t, 15) },
            inflateInit2: Ke,
            inflate: function(t, e) {
                var r, n, i, a, o, s, u, h, c, l, f, d, p, g, m, b, v, w, y, _, x, A, N, L, S = 0,
                    k = new xt.Buf8(4),
                    P = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return -2;
                12 === (r = t.state).mode && (r.mode = 13), o = t.next_out, i = t.output, u = t.avail_out, a = t.next_in, n = t.input, s = t.avail_in, h = r.hold, c = r.bits, l = s, f = u, A = 0;
                t: for (;;) switch (r.mode) {
                    case 1:
                        if (0 === r.wrap) { r.mode = 13; break }
                        for (; c < 16;) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        if (2 & r.wrap && 35615 === h) { r.check = 0, k[0] = 255 & h, k[1] = h >>> 8 & 255, r.check = ae(r.check, k, 2, 0), h = 0, c = 0, r.mode = 2; break }
                        if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) { t.msg = "incorrect header check", r.mode = 30; break }
                        if (8 != (15 & h)) { t.msg = "unknown compression method", r.mode = 30; break }
                        if (c -= 4, x = 8 + (15 & (h >>>= 4)), 0 === r.wbits) r.wbits = x;
                        else if (x > r.wbits) { t.msg = "invalid window size", r.mode = 30; break }
                        r.dmax = 1 << x, t.adler = r.check = 1, r.mode = 512 & h ? 10 : 12, h = 0, c = 0;
                        break;
                    case 2:
                        for (; c < 16;) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        if (r.flags = h, 8 != (255 & r.flags)) { t.msg = "unknown compression method", r.mode = 30; break }
                        if (57344 & r.flags) { t.msg = "unknown header flags set", r.mode = 30; break }
                        r.head && (r.head.text = h >> 8 & 1), 512 & r.flags && (k[0] = 255 & h, k[1] = h >>> 8 & 255, r.check = ae(r.check, k, 2, 0)), h = 0, c = 0, r.mode = 3;
                    case 3:
                        for (; c < 32;) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        r.head && (r.head.time = h), 512 & r.flags && (k[0] = 255 & h, k[1] = h >>> 8 & 255, k[2] = h >>> 16 & 255, k[3] = h >>> 24 & 255, r.check = ae(r.check, k, 4, 0)), h = 0, c = 0, r.mode = 4;
                    case 4:
                        for (; c < 16;) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        r.head && (r.head.xflags = 255 & h, r.head.os = h >> 8), 512 & r.flags && (k[0] = 255 & h, k[1] = h >>> 8 & 255, r.check = ae(r.check, k, 2, 0)), h = 0, c = 0, r.mode = 5;
                    case 5:
                        if (1024 & r.flags) {
                            for (; c < 16;) {
                                if (0 === s) break t;
                                s--, h += n[a++] << c, c += 8
                            }
                            r.length = h, r.head && (r.head.extra_len = h), 512 & r.flags && (k[0] = 255 & h, k[1] = h >>> 8 & 255, r.check = ae(r.check, k, 2, 0)), h = 0, c = 0
                        } else r.head && (r.head.extra = null);
                        r.mode = 6;
                    case 6:
                        if (1024 & r.flags && ((d = r.length) > s && (d = s), d && (r.head && (x = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), xt.arraySet(r.head.extra, n, a, d, x)), 512 & r.flags && (r.check = ae(r.check, n, d, a)), s -= d, a += d, r.length -= d), r.length)) break t;
                        r.length = 0, r.mode = 7;
                    case 7:
                        if (2048 & r.flags) {
                            if (0 === s) break t;
                            d = 0;
                            do { x = n[a + d++], r.head && x && r.length < 65536 && (r.head.name += String.fromCharCode(x)) } while (x && d < s);
                            if (512 & r.flags && (r.check = ae(r.check, n, d, a)), s -= d, a += d, x) break t
                        } else r.head && (r.head.name = null);
                        r.length = 0, r.mode = 8;
                    case 8:
                        if (4096 & r.flags) {
                            if (0 === s) break t;
                            d = 0;
                            do { x = n[a + d++], r.head && x && r.length < 65536 && (r.head.comment += String.fromCharCode(x)) } while (x && d < s);
                            if (512 & r.flags && (r.check = ae(r.check, n, d, a)), s -= d, a += d, x) break t
                        } else r.head && (r.head.comment = null);
                        r.mode = 9;
                    case 9:
                        if (512 & r.flags) {
                            for (; c < 16;) {
                                if (0 === s) break t;
                                s--, h += n[a++] << c, c += 8
                            }
                            if (h !== (65535 & r.check)) { t.msg = "header crc mismatch", r.mode = 30; break }
                            h = 0, c = 0
                        }
                        r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), t.adler = r.check = 0, r.mode = 12;
                        break;
                    case 10:
                        for (; c < 32;) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        t.adler = r.check = We(h), h = 0, c = 0, r.mode = 11;
                    case 11:
                        if (0 === r.havedict) return t.next_out = o, t.avail_out = u, t.next_in = a, t.avail_in = s, r.hold = h, r.bits = c, 2;
                        t.adler = r.check = 1, r.mode = 12;
                    case 12:
                        if (5 === e || 6 === e) break t;
                    case 13:
                        if (r.last) { h >>>= 7 & c, c -= 7 & c, r.mode = 27; break }
                        for (; c < 3;) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        switch (r.last = 1 & h, c -= 1, 3 & (h >>>= 1)) {
                            case 0:
                                r.mode = 14;
                                break;
                            case 1:
                                if (tr(r), r.mode = 20, 6 === e) { h >>>= 2, c -= 2; break t }
                                break;
                            case 2:
                                r.mode = 17;
                                break;
                            case 3:
                                t.msg = "invalid block type", r.mode = 30
                        }
                        h >>>= 2, c -= 2;
                        break;
                    case 14:
                        for (h >>>= 7 & c, c -= 7 & c; c < 32;) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        if ((65535 & h) != (h >>> 16 ^ 65535)) { t.msg = "invalid stored block lengths", r.mode = 30; break }
                        if (r.length = 65535 & h, h = 0, c = 0, r.mode = 15, 6 === e) break t;
                    case 15:
                        r.mode = 16;
                    case 16:
                        if (d = r.length) {
                            if (d > s && (d = s), d > u && (d = u), 0 === d) break t;
                            xt.arraySet(i, n, a, d, o), s -= d, a += d, u -= d, o += d, r.length -= d;
                            break
                        }
                        r.mode = 12;
                        break;
                    case 17:
                        for (; c < 14;) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        if (r.nlen = 257 + (31 & h), h >>>= 5, c -= 5, r.ndist = 1 + (31 & h), h >>>= 5, c -= 5, r.ncode = 4 + (15 & h), h >>>= 4, c -= 4, r.nlen > 286 || r.ndist > 30) { t.msg = "too many length or distance symbols", r.mode = 30; break }
                        r.have = 0, r.mode = 18;
                    case 18:
                        for (; r.have < r.ncode;) {
                            for (; c < 3;) {
                                if (0 === s) break t;
                                s--, h += n[a++] << c, c += 8
                            }
                            r.lens[P[r.have++]] = 7 & h, h >>>= 3, c -= 3
                        }
                        for (; r.have < 19;) r.lens[P[r.have++]] = 0;
                        if (r.lencode = r.lendyn, r.lenbits = 7, N = { bits: r.lenbits }, A = Ve(0, r.lens, 0, 19, r.lencode, 0, r.work, N), r.lenbits = N.bits, A) { t.msg = "invalid code lengths set", r.mode = 30; break }
                        r.have = 0, r.mode = 19;
                    case 19:
                        for (; r.have < r.nlen + r.ndist;) {
                            for (; b = (S = r.lencode[h & (1 << r.lenbits) - 1]) >>> 16 & 255, v = 65535 & S, !((m = S >>> 24) <= c);) {
                                if (0 === s) break t;
                                s--, h += n[a++] << c, c += 8
                            }
                            if (v < 16) h >>>= m, c -= m, r.lens[r.have++] = v;
                            else {
                                if (16 === v) {
                                    for (L = m + 2; c < L;) {
                                        if (0 === s) break t;
                                        s--, h += n[a++] << c, c += 8
                                    }
                                    if (h >>>= m, c -= m, 0 === r.have) { t.msg = "invalid bit length repeat", r.mode = 30; break }
                                    x = r.lens[r.have - 1], d = 3 + (3 & h), h >>>= 2, c -= 2
                                } else if (17 === v) {
                                    for (L = m + 3; c < L;) {
                                        if (0 === s) break t;
                                        s--, h += n[a++] << c, c += 8
                                    }
                                    c -= m, x = 0, d = 3 + (7 & (h >>>= m)), h >>>= 3, c -= 3
                                } else {
                                    for (L = m + 7; c < L;) {
                                        if (0 === s) break t;
                                        s--, h += n[a++] << c, c += 8
                                    }
                                    c -= m, x = 0, d = 11 + (127 & (h >>>= m)), h >>>= 7, c -= 7
                                }
                                if (r.have + d > r.nlen + r.ndist) { t.msg = "invalid bit length repeat", r.mode = 30; break }
                                for (; d--;) r.lens[r.have++] = x
                            }
                        }
                        if (30 === r.mode) break;
                        if (0 === r.lens[256]) { t.msg = "invalid code -- missing end-of-block", r.mode = 30; break }
                        if (r.lenbits = 9, N = { bits: r.lenbits }, A = Ve(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, N), r.lenbits = N.bits, A) { t.msg = "invalid literal/lengths set", r.mode = 30; break }
                        if (r.distbits = 6, r.distcode = r.distdyn, N = { bits: r.distbits }, A = Ve(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, N), r.distbits = N.bits, A) { t.msg = "invalid distances set", r.mode = 30; break }
                        if (r.mode = 20, 6 === e) break t;
                    case 20:
                        r.mode = 21;
                    case 21:
                        if (s >= 6 && u >= 258) { t.next_out = o, t.avail_out = u, t.next_in = a, t.avail_in = s, r.hold = h, r.bits = c, Te(t, f), o = t.next_out, i = t.output, u = t.avail_out, a = t.next_in, n = t.input, s = t.avail_in, h = r.hold, c = r.bits, 12 === r.mode && (r.back = -1); break }
                        for (r.back = 0; b = (S = r.lencode[h & (1 << r.lenbits) - 1]) >>> 16 & 255, v = 65535 & S, !((m = S >>> 24) <= c);) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        if (b && 0 == (240 & b)) {
                            for (w = m, y = b, _ = v; b = (S = r.lencode[_ + ((h & (1 << w + y) - 1) >> w)]) >>> 16 & 255, v = 65535 & S, !(w + (m = S >>> 24) <= c);) {
                                if (0 === s) break t;
                                s--, h += n[a++] << c, c += 8
                            }
                            h >>>= w, c -= w, r.back += w
                        }
                        if (h >>>= m, c -= m, r.back += m, r.length = v, 0 === b) { r.mode = 26; break }
                        if (32 & b) { r.back = -1, r.mode = 12; break }
                        if (64 & b) { t.msg = "invalid literal/length code", r.mode = 30; break }
                        r.extra = 15 & b, r.mode = 22;
                    case 22:
                        if (r.extra) {
                            for (L = r.extra; c < L;) {
                                if (0 === s) break t;
                                s--, h += n[a++] << c, c += 8
                            }
                            r.length += h & (1 << r.extra) - 1, h >>>= r.extra, c -= r.extra, r.back += r.extra
                        }
                        r.was = r.length, r.mode = 23;
                    case 23:
                        for (; b = (S = r.distcode[h & (1 << r.distbits) - 1]) >>> 16 & 255, v = 65535 & S, !((m = S >>> 24) <= c);) {
                            if (0 === s) break t;
                            s--, h += n[a++] << c, c += 8
                        }
                        if (0 == (240 & b)) {
                            for (w = m, y = b, _ = v; b = (S = r.distcode[_ + ((h & (1 << w + y) - 1) >> w)]) >>> 16 & 255, v = 65535 & S, !(w + (m = S >>> 24) <= c);) {
                                if (0 === s) break t;
                                s--, h += n[a++] << c, c += 8
                            }
                            h >>>= w, c -= w, r.back += w
                        }
                        if (h >>>= m, c -= m, r.back += m, 64 & b) { t.msg = "invalid distance code", r.mode = 30; break }
                        r.offset = v, r.extra = 15 & b, r.mode = 24;
                    case 24:
                        if (r.extra) {
                            for (L = r.extra; c < L;) {
                                if (0 === s) break t;
                                s--, h += n[a++] << c, c += 8
                            }
                            r.offset += h & (1 << r.extra) - 1, h >>>= r.extra, c -= r.extra, r.back += r.extra
                        }
                        if (r.offset > r.dmax) { t.msg = "invalid distance too far back", r.mode = 30; break }
                        r.mode = 25;
                    case 25:
                        if (0 === u) break t;
                        if (d = f - u, r.offset > d) {
                            if ((d = r.offset - d) > r.whave && r.sane) { t.msg = "invalid distance too far back", r.mode = 30; break }
                            d > r.wnext ? (d -= r.wnext, p = r.wsize - d) : p = r.wnext - d, d > r.length && (d = r.length), g = r.window
                        } else g = i, p = o - r.offset, d = r.length;
                        d > u && (d = u), u -= d, r.length -= d;
                        do { i[o++] = g[p++] } while (--d);
                        0 === r.length && (r.mode = 21);
                        break;
                    case 26:
                        if (0 === u) break t;
                        i[o++] = r.length, u--, r.mode = 21;
                        break;
                    case 27:
                        if (r.wrap) {
                            for (; c < 32;) {
                                if (0 === s) break t;
                                s--, h |= n[a++] << c, c += 8
                            }
                            if (f -= u, t.total_out += f, r.total += f, f && (t.adler = r.check = r.flags ? ae(r.check, i, f, o - f) : re(r.check, i, f, o - f)), f = u, (r.flags ? h : We(h)) !== r.check) { t.msg = "incorrect data check", r.mode = 30; break }
                            h = 0, c = 0
                        }
                        r.mode = 28;
                    case 28:
                        if (r.wrap && r.flags) {
                            for (; c < 32;) {
                                if (0 === s) break t;
                                s--, h += n[a++] << c, c += 8
                            }
                            if (h !== (4294967295 & r.total)) { t.msg = "incorrect length check", r.mode = 30; break }
                            h = 0, c = 0
                        }
                        r.mode = 29;
                    case 29:
                        A = 1;
                        break t;
                    case 30:
                        A = -3;
                        break t;
                    case 31:
                        return -4;
                    case 32:
                    default:
                        return -2
                }
                return t.next_out = o, t.avail_out = u, t.next_in = a, t.avail_in = s, r.hold = h, r.bits = c, (r.wsize || f !== t.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== e)) && er(t, t.output, t.next_out, f - t.avail_out), l -= t.avail_in, f -= t.avail_out, t.total_in += l, t.total_out += f, r.total += f, r.wrap && f && (t.adler = r.check = r.flags ? ae(r.check, i, f, t.next_out - f) : re(r.check, i, f, t.next_out - f)), t.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 === l && 0 === f || 4 === e) && 0 === A && (A = -5), A
            },
            inflateEnd: function(t) { if (!t || !t.state) return -2; var e = t.state; return e.window && (e.window = null), t.state = null, 0 },
            inflateGetHeader: function(t, e) { var r; return t && t.state ? 0 == (2 & (r = t.state).wrap) ? -2 : (r.head = e, e.done = !1, 0) : -2 },
            inflateSetDictionary: function(t, e) { var r, n = e.length; return t && t.state ? 0 !== (r = t.state).wrap && 11 !== r.mode ? -2 : 11 === r.mode && re(1, e, n, 0) !== r.check ? -3 : er(t, e, n, n) ? (r.mode = 31, -4) : (r.havedict = 1, 0) : -2 },
            inflateInfo: "pako inflate (from Nodeca project)"
        },
        nr = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    var ir = function() { this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1 },
        ar = Object.prototype.toString;

    function or(t) {
        if (!(this instanceof or)) return new or(t);
        this.options = xt.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t || {});
        var e = this.options;
        e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Ee, this.strm.avail_out = 0;
        var r = rr.inflateInit2(this.strm, e.windowBits);
        if (r !== nr.Z_OK) throw new Error(oe[r]);
        if (this.header = new ir, rr.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = Ie(e.dictionary) : "[object ArrayBuffer]" === ar.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (r = rr.inflateSetDictionary(this.strm, e.dictionary)) !== nr.Z_OK)) throw new Error(oe[r])
    }

    function sr(t, e) { var r = new or(e); if (r.push(t, !0), r.err) throw r.msg || oe[r.err]; return r.result }
    or.prototype.push = function(t, e) {
        var r, n, i, a, o, s = this.strm,
            u = this.options.chunkSize,
            h = this.options.dictionary,
            c = !1;
        if (this.ended) return !1;
        n = e === ~~e ? e : !0 === e ? nr.Z_FINISH : nr.Z_NO_FLUSH, "string" == typeof t ? s.input = Ce(t) : "[object ArrayBuffer]" === ar.call(t) ? s.input = new Uint8Array(t) : s.input = t, s.next_in = 0, s.avail_in = s.input.length;
        do {
            if (0 === s.avail_out && (s.output = new xt.Buf8(u), s.next_out = 0, s.avail_out = u), (r = rr.inflate(s, nr.Z_NO_FLUSH)) === nr.Z_NEED_DICT && h && (r = rr.inflateSetDictionary(this.strm, h)), r === nr.Z_BUF_ERROR && !0 === c && (r = nr.Z_OK, c = !1), r !== nr.Z_STREAM_END && r !== nr.Z_OK) return this.onEnd(r), this.ended = !0, !1;
            s.next_out && (0 !== s.avail_out && r !== nr.Z_STREAM_END && (0 !== s.avail_in || n !== nr.Z_FINISH && n !== nr.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i = Be(s.output, s.next_out), a = s.next_out - i, o = je(s.output, i), s.next_out = a, s.avail_out = u - a, a && xt.arraySet(s.output, s.output, i, a, 0), this.onData(o)) : this.onData(xt.shrinkBuf(s.output, s.next_out)))), 0 === s.avail_in && 0 === s.avail_out && (c = !0)
        } while ((s.avail_in > 0 || 0 === s.avail_out) && r !== nr.Z_STREAM_END);
        return r === nr.Z_STREAM_END && (n = nr.Z_FINISH), n === nr.Z_FINISH ? (r = rr.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === nr.Z_OK) : n !== nr.Z_SYNC_FLUSH || (this.onEnd(nr.Z_OK), s.avail_out = 0, !0)
    }, or.prototype.onData = function(t) { this.chunks.push(t) }, or.prototype.onEnd = function(t) { t === nr.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = xt.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg };
    var ur = { Inflate: or, inflate: sr, inflateRaw: function(t, e) { return (e = e || {}).raw = !0, sr(t, e) }, ungzip: sr },
        hr = {};
    (0, xt.assign)(hr, Re, ur, nr);
    var cr = hr;
    /**
     * @license
     * jsPDF filters PlugIn
     * Copyright (c) 2014 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    ! function(t) {
        var e = function(t) { var e, r, n, i, a, o, s, u, h, c; for (/[^\x00-\xFF]/.test(t), r = [], n = 0, i = (t += e = "\0\0\0\0".slice(t.length % 4 || 4)).length; i > n; n += 4) 0 !== (a = (t.charCodeAt(n) << 24) + (t.charCodeAt(n + 1) << 16) + (t.charCodeAt(n + 2) << 8) + t.charCodeAt(n + 3)) ? (o = (a = ((a = ((a = ((a = (a - (c = a % 85)) / 85) - (h = a % 85)) / 85) - (u = a % 85)) / 85) - (s = a % 85)) / 85) % 85, r.push(o + 33, s + 33, u + 33, h + 33, c + 33)) : r.push(122); return function(t, e) { for (var r = e; r > 0; r--) t.pop() }(r, e.length), String.fromCharCode.apply(String, r) + "~>" },
            r = function(t) {
                var e, r, n, i, a, o = String,
                    s = "length",
                    u = 255,
                    h = "charCodeAt",
                    c = "slice",
                    l = "replace";
                for (t[c](-2), t = t[c](0, -2)[l](/\s/g, "")[l]("z", "!!!!!"), n = [], i = 0, a = (t += e = "uuuuu" [c](t[s] % 5 || 5))[s]; a > i; i += 5) r = 52200625 * (t[h](i) - 33) + 614125 * (t[h](i + 1) - 33) + 7225 * (t[h](i + 2) - 33) + 85 * (t[h](i + 3) - 33) + (t[h](i + 4) - 33), n.push(u & r >> 24, u & r >> 16, u & r >> 8, u & r);
                return function(t, e) { for (var r = e; r > 0; r--) t.pop() }(n, e[s]), o.fromCharCode.apply(o, n)
            },
            n = function(t) { var e = new RegExp(/^([0-9A-Fa-f]{2})+$/); if (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))), t.length % 2 && (t += "0"), !1 === e.test(t)) return ""; for (var r = "", n = 0; n < t.length; n += 2) r += String.fromCharCode("0x" + (t[n] + t[n + 1])); return r },
            i = function(e) { for (var r, n = [], i = e.length; i--;) n[i] = e.charCodeAt(i); return r = t.adler32cs.from(e), e = cr.deflate(n), (n = new Uint8Array(e.byteLength + 4)).set(e, 0), n.set(new Uint8Array([255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255]), e.byteLength), e = n.reduce((function(t, e) { return t + String.fromCharCode(e) }), "") };
        t.processDataByFilters = function(t, a) {
            var o = 0,
                s = t || "",
                u = [];
            for ("string" == typeof(a = a || []) && (a = [a]), o = 0; o < a.length; o += 1) switch (a[o]) {
                case "ASCII85Decode":
                case "/ASCII85Decode":
                    s = r(s), u.push("/ASCII85Encode");
                    break;
                case "ASCII85Encode":
                case "/ASCII85Encode":
                    s = e(s), u.push("/ASCII85Decode");
                    break;
                case "ASCIIHexDecode":
                case "/ASCIIHexDecode":
                    s = n(s), u.push("/ASCIIHexEncode");
                    break;
                case "ASCIIHexEncode":
                case "/ASCIIHexEncode":
                    s = s.split("").map((function(t) { return ("0" + t.charCodeAt().toString(16)).slice(-2) })).join("") + ">", u.push("/ASCIIHexDecode");
                    break;
                case "FlateEncode":
                case "/FlateEncode":
                    s = i(s), u.push("/FlateDecode");
                    break;
                default:
                    throw new Error('The filter: "' + a[o] + '" is not implemented')
            }
            return { data: s, reverseChain: u.reverse().join(" ") }
        }
    }(j.API),
    /**
     * @license
     * jsPDF fileloading PlugIn
     * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    function(t) {
        t.loadFile = function(t, e, r) {
            return function(t, e, r) {
                e = !1 !== e, r = "function" == typeof r ? r : function() {};
                var n = void 0;
                try {
                    n = function(t, e, r) {
                        var n = new XMLHttpRequest,
                            i = 0,
                            a = function(t) {
                                var e = t.length,
                                    r = [],
                                    n = String.fromCharCode;
                                for (i = 0; i < e; i += 1) r.push(n(255 & t.charCodeAt(i)));
                                return r.join("")
                            };
                        if (n.open("GET", t, !e), n.overrideMimeType("text/plain; charset=x-user-defined"), !1 === e && (n.onload = function() { 200 === n.status ? r(a(this.responseText)) : r(void 0) }), n.send(null), e && 200 === n.status) return a(n.responseText)
                    }(t, e, r)
                } catch (t) {}
                return n
            }(t, e, r)
        }, t.loadImageFile = t.loadFile
    }(j.API),
    /**
     * @license
     * Copyright (c) 2018 Erik Koopmans
     * Released under the MIT License.
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    function(r) {
        function n() { return (e.html2canvas ? Promise.resolve(e.html2canvas) : "object" == typeof t && "undefined" != typeof module ? new Promise((function(t, e) { try { t(require("html2canvas")) } catch (t) { e(t) } })) : "function" == typeof define && define.amd ? new Promise((function(t, e) { try { require(["html2canvas"], t) } catch (t) { e(t) } })) : Promise.reject(new Error("Could not load html2canvas"))).catch((function(t) { return Promise.reject(new Error("Could not load html2canvas: " + t)) })).then((function(t) { return t.default ? t.default : t })) }

        function i() { return (e.DOMPurify ? Promise.resolve(e.DOMPurify) : "object" == typeof t && "undefined" != typeof module ? new Promise((function(t, e) { try { t(require("dompurify")) } catch (t) { e(t) } })) : "function" == typeof define && define.amd ? new Promise((function(t, e) { try { require(["dompurify"], t) } catch (t) { e(t) } })) : Promise.reject(new Error("Could not load dompurify"))).catch((function(t) { return Promise.reject(new Error("Could not load dompurify: " + t)) })).then((function(t) { return t.default ? t.default : t })) }
        var a = function(t) { var e = typeof t; return "undefined" === e ? "undefined" : "string" === e || t instanceof String ? "string" : "number" === e || t instanceof Number ? "number" : "function" === e || t instanceof Function ? "function" : t && t.constructor === Array ? "array" : t && 1 === t.nodeType ? "element" : "object" === e ? "object" : "unknown" },
            o = function(t, e) { var r = document.createElement(t); for (var n in e.className && (r.className = e.className), e.innerHTML && e.dompurify && (r.innerHTML = e.dompurify.sanitize(e.innerHTML)), e.style) r.style[n] = e.style[n]; return r },
            s = function(t, e) { for (var r = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), n = t.firstChild; n; n = n.nextSibling) !0 !== e && 1 === n.nodeType && "SCRIPT" === n.nodeName || r.appendChild(s(n, e)); return 1 === t.nodeType && ("CANVAS" === t.nodeName ? (r.width = t.width, r.height = t.height, r.getContext("2d").drawImage(t, 0, 0)) : "TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName || (r.value = t.value), r.addEventListener("load", (function() { r.scrollTop = t.scrollTop, r.scrollLeft = t.scrollLeft }), !0)), r },
            u = function t(e) {
                var r = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))),
                    n = t.convert(Promise.resolve(), r);
                return n = (n = n.setProgress(1, t, 1, [t])).set(e)
            };
        (u.prototype = Object.create(Promise.prototype)).constructor = u, u.convert = function(t, e) { return t.__proto__ = e || u.prototype, t }, u.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {} }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, u.prototype.from = function(t, e) {
            return this.then((function() {
                switch (e = e || function(t) {
                    switch (a(t)) {
                        case "string":
                            return "string";
                        case "element":
                            return "canvas" === t.nodeName.toLowerCase ? "canvas" : "element";
                        default:
                            return "unknown"
                    }
                }(t)) {
                    case "string":
                        return this.then(i).then((function(e) { return this.set({ src: o("div", { innerHTML: t, dompurify: e }) }) }));
                    case "element":
                        return this.set({ src: t });
                    case "canvas":
                        return this.set({ canvas: t });
                    case "img":
                        return this.set({ img: t });
                    default:
                        return this.error("Unknown source type.")
                }
            }))
        }, u.prototype.to = function(t) {
            switch (t) {
                case "container":
                    return this.toContainer();
                case "canvas":
                    return this.toCanvas();
                case "img":
                    return this.toImg();
                case "pdf":
                    return this.toPdf();
                default:
                    return this.error("Invalid target.")
            }
        }, u.prototype.toContainer = function() {
            return this.thenList([function() { return this.prop.src || this.error("Cannot duplicate - no source HTML.") }, function() { return this.prop.pageSize || this.setPageSize() }]).then((function() {
                var t = { position: "relative", display: "inline-block", width: Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor },
                    e = s(this.prop.src, this.opt.html2canvas.javascriptEnabled);
                "BODY" === e.tagName && (t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = o("div", { className: "html2pdf__container", style: t }), this.prop.container.appendChild(e), this.prop.container.firstChild.appendChild(o("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
            }))
        }, u.prototype.toCanvas = function() {
            var t = [function() { return document.body.contains(this.prop.container) || this.toContainer() }];
            return this.thenList(t).then(n).then((function(t) { var e = Object.assign({}, this.opt.html2canvas); return delete e.onrendered, t(this.prop.container, e) })).then((function(t) {
                (this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay)
            }))
        }, u.prototype.toContext2d = function() {
            var t = [function() { return document.body.contains(this.prop.container) || this.toContainer() }];
            return this.thenList(t).then(n).then((function(t) {
                var e = this.opt.jsPDF,
                    r = Object.assign({ async: !0, allowTaint: !0, scale: 1, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
                return delete r.onrendered, e.context2d.autoPaging = !0, e.context2d.posX = this.opt.x, e.context2d.posY = this.opt.y, r.windowHeight = r.windowHeight || 0, r.windowHeight = 0 == r.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : r.windowHeight, t(this.prop.container, r)
            })).then((function(t) {
                (this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay)
            }))
        }, u.prototype.toImg = function() {
            return this.thenList([function() { return this.prop.canvas || this.toCanvas() }]).then((function() {
                var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
                this.prop.img = document.createElement("img"), this.prop.img.src = t
            }))
        }, u.prototype.toPdf = function() { return this.thenList([function() { return this.toContext2d() }]).then((function() { this.prop.pdf = this.prop.pdf || this.opt.jsPDF })) }, u.prototype.output = function(t, e, r) { return "img" === (r = r || "pdf").toLowerCase() || "image" === r.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e) }, u.prototype.outputPdf = function(t, e) { return this.thenList([function() { return this.prop.pdf || this.toPdf() }]).then((function() { return this.prop.pdf.output(t, e) })) }, u.prototype.outputImg = function(t) {
            return this.thenList([function() { return this.prop.img || this.toImg() }]).then((function() {
                switch (t) {
                    case void 0:
                    case "img":
                        return this.prop.img;
                    case "datauristring":
                    case "dataurlstring":
                        return this.prop.img.src;
                    case "datauri":
                    case "dataurl":
                        return document.location.href = this.prop.img.src;
                    default:
                        throw 'Image output type "' + t + '" is not supported.'
                }
            }))
        }, u.prototype.save = function(t) { return this.thenList([function() { return this.prop.pdf || this.toPdf() }]).set(t ? { filename: t } : null).then((function() { this.prop.pdf.save(this.opt.filename) })) }, u.prototype.doCallback = function() { return this.thenList([function() { return this.prop.pdf || this.toPdf() }]).then((function() { this.prop.callback(this.prop.pdf) })) }, u.prototype.set = function(t) {
            if ("object" !== a(t)) return this;
            var e = Object.keys(t || {}).map((function(e) {
                if (e in u.template.prop) return function() { this.prop[e] = t[e] };
                switch (e) {
                    case "margin":
                        return this.setMargin.bind(this, t.margin);
                    case "jsPDF":
                        return function() { return this.opt.jsPDF = t.jsPDF, this.setPageSize() };
                    case "pageSize":
                        return this.setPageSize.bind(this, t.pageSize);
                    default:
                        return function() { this.opt[e] = t[e] }
                }
            }), this);
            return this.then((function() { return this.thenList(e) }))
        }, u.prototype.get = function(t, e) { return this.then((function() { var r = t in u.template.prop ? this.prop[t] : this.opt[t]; return e ? e(r) : r })) }, u.prototype.setMargin = function(t) {
            return this.then((function() {
                switch (a(t)) {
                    case "number":
                        t = [t, t, t, t];
                    case "array":
                        if (2 === t.length && (t = [t[0], t[1], t[0], t[1]]), 4 === t.length) break;
                    default:
                        return this.error("Invalid margin array.")
                }
                this.opt.margin = t
            })).then(this.setPageSize)
        }, u.prototype.setPageSize = function(t) {
            function e(t, e) { return Math.floor(t * e / 72 * 96) }
            return this.then((function() {
                (t = t || j.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = { width: t.width - this.opt.margin[1] - this.opt.margin[3], height: t.height - this.opt.margin[0] - this.opt.margin[2] }, t.inner.px = { width: e(t.inner.width, t.k), height: e(t.inner.height, t.k) }, t.inner.ratio = t.inner.height / t.inner.width), this.prop.pageSize = t
            }))
        }, u.prototype.setProgress = function(t, e, r, n) { return null != t && (this.progress.val = t), null != e && (this.progress.state = e), null != r && (this.progress.n = r), null != n && (this.progress.stack = n), this.progress.ratio = this.progress.val / this.progress.state, this }, u.prototype.updateProgress = function(t, e, r, n) { return this.setProgress(t ? this.progress.val + t : null, e || null, r ? this.progress.n + r : null, n ? this.progress.stack.concat(n) : null) }, u.prototype.then = function(t, e) { var r = this; return this.thenCore(t, e, (function(t, e) { return r.updateProgress(null, null, 1, [t]), Promise.prototype.then.call(this, (function(e) { return r.updateProgress(null, t), e })).then(t, e).then((function(t) { return r.updateProgress(1), t })) })) }, u.prototype.thenCore = function(t, e, r) {
            r = r || Promise.prototype.then;
            t && (t = t.bind(this)), e && (e = e.bind(this));
            var n = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : u.convert(Object.assign({}, this), Promise.prototype),
                i = r.call(n, t, e);
            return u.convert(i, this.__proto__)
        }, u.prototype.thenExternal = function(t, e) { return Promise.prototype.then.call(this, t, e) }, u.prototype.thenList = function(t) { var e = this; return t.forEach((function(t) { e = e.thenCore(t) })), e }, u.prototype.catch = function(t) { t && (t = t.bind(this)); var e = Promise.prototype.catch.call(this, t); return u.convert(e, this) }, u.prototype.catchExternal = function(t) { return Promise.prototype.catch.call(this, t) }, u.prototype.error = function(t) { return this.then((function() { throw new Error(t) })) }, u.prototype.using = u.prototype.set, u.prototype.saveAs = u.prototype.save, u.prototype.export = u.prototype.output, u.prototype.run = u.prototype.then, j.getPageSize = function(t, e, r) {
            if ("object" == typeof t) {
                var n = t;
                t = n.orientation, e = n.unit || e, r = n.format || r
            }
            e = e || "mm", r = r || "a4", t = ("" + (t || "P")).toLowerCase();
            var i, a = ("" + r).toLowerCase(),
                o = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
            switch (e) {
                case "pt":
                    i = 1;
                    break;
                case "mm":
                    i = 72 / 25.4;
                    break;
                case "cm":
                    i = 72 / 2.54;
                    break;
                case "in":
                    i = 72;
                    break;
                case "px":
                    i = .75;
                    break;
                case "pc":
                case "em":
                    i = 12;
                    break;
                case "ex":
                    i = 6;
                    break;
                default:
                    throw "Invalid unit: " + e
            }
            var s, u = 0,
                h = 0;
            if (o.hasOwnProperty(a)) u = o[a][1] / i, h = o[a][0] / i;
            else try { u = r[1], h = r[0] } catch (t) { throw new Error("Invalid format: " + r) }
            if ("p" === t || "portrait" === t) t = "p", h > u && (s = h, h = u, u = s);
            else {
                if ("l" !== t && "landscape" !== t) throw "Invalid orientation: " + t;
                t = "l", u > h && (s = h, h = u, u = s)
            }
            return { width: h, height: u, unit: e, k: i, orientation: t }
        }, r.html = function(t, e) {
            (e = e || {}).callback = e.callback || function() {}, e.html2canvas = e.html2canvas || {}, e.html2canvas.canvas = e.html2canvas.canvas || this.canvas, e.jsPDF = e.jsPDF || this;
            var r = new u(e);
            return e.worker ? r : r.from(t).doCallback()
        }
    }(j.API),
    /**
     * @license
     * ====================================================================
     * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    function(t) {
        var e, r, n;
        t.addJS = function(t) { return n = t, this.internal.events.subscribe("postPutResources", (function() { e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (e + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), r = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + n + ")"), this.internal.out(">>"), this.internal.out("endobj") })), this.internal.events.subscribe("putCatalog", (function() { void 0 !== e && void 0 !== r && this.internal.out("/Names <</JavaScript " + e + " 0 R>>") })), this }
    }(j.API),
    /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    function(t) {
        var e;
        t.events.push(["postPutResources", function() {
            var t = this,
                r = /^(\d+) 0 obj$/;
            if (this.outline.root.children.length > 0)
                for (var n = t.outline.render().split(/\r\n/), i = 0; i < n.length; i++) {
                    var a = n[i],
                        o = r.exec(a);
                    if (null != o) {
                        var s = o[1];
                        t.internal.newObjectDeferredBegin(s, !1)
                    }
                    t.internal.write(a)
                }
            if (this.outline.createNamedDestinations) {
                var u = this.internal.pages.length,
                    h = [];
                for (i = 0; i < u; i++) {
                    var c = t.internal.newObject();
                    h.push(c);
                    var l = t.internal.getPageInfo(i + 1);
                    t.internal.write("<< /D[" + l.objId + " 0 R /XYZ null null null]>> endobj")
                }
                var f = t.internal.newObject();
                t.internal.write("<< /Names [ ");
                for (i = 0; i < h.length; i++) t.internal.write("(page_" + (i + 1) + ")" + h[i] + " 0 R");
                t.internal.write(" ] >>", "endobj"), e = t.internal.newObject(), t.internal.write("<< /Dests " + f + " 0 R"), t.internal.write(">>", "endobj")
            }
        }]), t.events.push(["putCatalog", function() { this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R")) }]), t.events.push(["initialized", function() {
            var t = this;
            t.outline = { createNamedDestinations: !1, root: { children: [] } }, t.outline.add = function(t, e, r) { var n = { title: e, options: r, children: [] }; return null == t && (t = this.root), t.children.push(n), n }, t.outline.render = function() { return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val }, t.outline.genIds_r = function(e) { e.id = t.internal.newObjectDeferred(); for (var r = 0; r < e.children.length; r++) this.genIds_r(e.children[r]) }, t.outline.renderRoot = function(t) { this.objStart(t), this.line("/Type /Outlines"), t.children.length > 0 && (this.line("/First " + this.makeRef(t.children[0])), this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, t)), this.objEnd() }, t.outline.renderItems = function(e) {
                for (var r = this.ctx.pdf.internal.getVerticalCoordinateString, n = 0; n < e.children.length; n++) {
                    var i = e.children[n];
                    this.objStart(i), this.line("/Title " + this.makeString(i.title)), this.line("/Parent " + this.makeRef(e)), n > 0 && this.line("/Prev " + this.makeRef(e.children[n - 1])), n < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[n + 1])), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
                    var a = this.count = this.count_r({ count: 0 }, i);
                    if (a > 0 && this.line("/Count " + a), i.options && i.options.pageNumber) {
                        var o = t.internal.getPageInfo(i.options.pageNumber);
                        this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + r(0) + " 0]")
                    }
                    this.objEnd()
                }
                for (var s = 0; s < e.children.length; s++) this.renderItems(e.children[s])
            }, t.outline.line = function(t) { this.ctx.val += t + "\r\n" }, t.outline.makeRef = function(t) { return t.id + " 0 R" }, t.outline.makeString = function(e) { return "(" + t.internal.pdfEscape(e) + ")" }, t.outline.objStart = function(t) { this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n" }, t.outline.objEnd = function() { this.ctx.val += ">> \r\nendobj\r\n" }, t.outline.count_r = function(t, e) { for (var r = 0; r < e.children.length; r++) t.count++, this.count_r(t, e.children[r]); return t.count }
        }])
    }(j.API),
    /**
     * @license
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    function(t) {
        var e = [192, 193, 194, 195, 196, 197, 198, 199];
        t.processJPEG = function(t, r, n, i, a, o) {
            var s, u = this.decode.DCT_DECODE,
                h = null;
            if ("string" == typeof t || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
                switch (t = a || t, t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t, (s = function(t) {
                    for (var r, n = 256 * t.charCodeAt(4) + t.charCodeAt(5), i = t.length, a = { width: 0, height: 0, numcomponents: 1 }, o = 4; o < i; o += 2) {
                        if (o += n, -1 !== e.indexOf(t.charCodeAt(o + 1))) { r = 256 * t.charCodeAt(o + 5) + t.charCodeAt(o + 6), a = { width: 256 * t.charCodeAt(o + 7) + t.charCodeAt(o + 8), height: r, numcomponents: t.charCodeAt(o + 9) }; break }
                        n = 256 * t.charCodeAt(o + 2) + t.charCodeAt(o + 3)
                    }
                    return a
                }(t = this.__addimage__.isArrayBufferView(t) ? this.__addimage__.arrayBufferToBinaryString(t) : t)).numcomponents) {
                    case 1:
                        o = this.color_spaces.DEVICE_GRAY;
                        break;
                    case 4:
                        o = this.color_spaces.DEVICE_CMYK;
                        break;
                    case 3:
                        o = this.color_spaces.DEVICE_RGB
                }
                h = { data: t, width: s.width, height: s.height, colorSpace: o, bitsPerComponent: 8, filter: u, index: r, alias: n }
            }
            return h
        }
    }(j.API);
    /**
     * @license
     * Extracted from pdf.js
     * https://github.com/andreasgal/pdf.js
     *
     * Copyright (c) 2011 Mozilla Foundation
     *
     * Contributors: Andreas Gal <gal@mozilla.com>
     *               Chris G Jones <cjones@mozilla.com>
     *               Shaon Barman <shaon.barman@gmail.com>
     *               Vivien Nicolas <21@vingtetun.org>
     *               Justin D'Arcangelo <justindarc@gmail.com>
     *               Yury Delendik
     *
     * Permission is hereby granted, free of charge, to any person obtaining a
     * copy of this software and associated documentation files (the "Software"),
     * to deal in the Software without restriction, including without limitation
     * the rights to use, copy, modify, merge, publish, distribute, sublicense,
     * and/or sell copies of the Software, and to permit persons to whom the
     * Software is furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
     * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
     * DEALINGS IN THE SOFTWARE.
     */
    var lr, fr, dr, pr, gr, mr = function() {
            function t() { this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null }
            return t.prototype = {
                ensureBuffer: function(t) {
                    var e = this.buffer,
                        r = e ? e.byteLength : 0;
                    if (t < r) return e;
                    for (var n = 512; n < t;) n <<= 1;
                    for (var i = new Uint8Array(n), a = 0; a < r; ++a) i[a] = e[a];
                    return this.buffer = i
                },
                getByte: function() {
                    for (var t = this.pos; this.bufferLength <= t;) {
                        if (this.eof) return null;
                        this.readBlock()
                    }
                    return this.buffer[this.pos++]
                },
                getBytes: function(t) {
                    var e = this.pos;
                    if (t) {
                        this.ensureBuffer(e + t);
                        for (var r = e + t; !this.eof && this.bufferLength < r;) this.readBlock();
                        var n = this.bufferLength;
                        r > n && (r = n)
                    } else {
                        for (; !this.eof;) this.readBlock();
                        r = this.bufferLength
                    }
                    return this.pos = r, this.buffer.subarray(e, r)
                },
                lookChar: function() {
                    for (var t = this.pos; this.bufferLength <= t;) {
                        if (this.eof) return null;
                        this.readBlock()
                    }
                    return String.fromCharCode(this.buffer[this.pos])
                },
                getChar: function() {
                    for (var t = this.pos; this.bufferLength <= t;) {
                        if (this.eof) return null;
                        this.readBlock()
                    }
                    return String.fromCharCode(this.buffer[this.pos++])
                },
                makeSubStream: function(t, e, r) { for (var n = t + e; this.bufferLength <= n && !this.eof;) this.readBlock(); return new Stream(this.buffer, t, e, r) },
                skip: function(t) { t || (t = 1), this.pos += t },
                reset: function() { this.pos = 0 }
            }, t
        }(),
        br = ("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()).FlateStream = function() {
            if ("undefined" != typeof Uint32Array) {
                var t = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                    e = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]),
                    r = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]),
                    n = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9],
                    i = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
                return o.prototype = Object.create(mr.prototype), o.prototype.getBits = function(t) { for (var e, r = this.codeSize, n = this.codeBuf, i = this.bytes, o = this.bytesPos; r < t;) void 0 === (e = i[o++]) && a("Bad encoding in flate stream"), n |= e << r, r += 8; return e = n & (1 << t) - 1, this.codeBuf = n >> t, this.codeSize = r -= t, this.bytesPos = o, e }, o.prototype.getCode = function(t) {
                    for (var e = t[0], r = t[1], n = this.codeSize, i = this.codeBuf, o = this.bytes, s = this.bytesPos; n < r;) {
                        var u;
                        void 0 === (u = o[s++]) && a("Bad encoding in flate stream"), i |= u << n, n += 8
                    }
                    var h = e[i & (1 << r) - 1],
                        c = h >> 16,
                        l = 65535 & h;
                    return (0 == n || n < c || 0 == c) && a("Bad encoding in flate stream"), this.codeBuf = i >> c, this.codeSize = n - c, this.bytesPos = s, l
                }, o.prototype.generateHuffmanTable = function(t) {
                    for (var e = t.length, r = 0, n = 0; n < e; ++n) t[n] > r && (r = t[n]);
                    for (var i = 1 << r, a = new Uint32Array(i), o = 1, s = 0, u = 2; o <= r; ++o, s <<= 1, u <<= 1)
                        for (var h = 0; h < e; ++h)
                            if (t[h] == o) {
                                var c = 0,
                                    l = s;
                                for (n = 0; n < o; ++n) c = c << 1 | 1 & l, l >>= 1;
                                for (n = c; n < i; n += u) a[n] = o << 16 | h;
                                ++s
                            }
                    return [a, r]
                }, o.prototype.readBlock = function() {
                    function o(t, e, r, n, i) { for (var a = t.getBits(r) + n; a-- > 0;) e[p++] = i }
                    var s = this.getBits(3);
                    if (1 & s && (this.eof = !0), 0 != (s >>= 1)) {
                        var u, h;
                        if (1 == s) u = n, h = i;
                        else if (2 == s) {
                            for (var c = this.getBits(5) + 257, l = this.getBits(5) + 1, f = this.getBits(4) + 4, d = Array(t.length), p = 0; p < f;) d[t[p++]] = this.getBits(3);
                            for (var g = this.generateHuffmanTable(d), m = 0, b = (p = 0, c + l), v = new Array(b); p < b;) {
                                var w = this.getCode(g);
                                16 == w ? o(this, v, 2, 3, m) : 17 == w ? o(this, v, 3, 3, m = 0) : 18 == w ? o(this, v, 7, 11, m = 0) : v[p++] = m = w
                            }
                            u = this.generateHuffmanTable(v.slice(0, c)), h = this.generateHuffmanTable(v.slice(c, b))
                        } else a("Unknown block type in flate stream");
                        for (var y = (j = this.buffer) ? j.length : 0, _ = this.bufferLength;;) {
                            var x = this.getCode(u);
                            if (x < 256) _ + 1 >= y && (y = (j = this.ensureBuffer(_ + 1)).length), j[_++] = x;
                            else {
                                if (256 == x) return void(this.bufferLength = _);
                                var A = (x = e[x -= 257]) >> 16;
                                A > 0 && (A = this.getBits(A));
                                m = (65535 & x) + A;
                                x = this.getCode(h), (A = (x = r[x]) >> 16) > 0 && (A = this.getBits(A));
                                var N = (65535 & x) + A;
                                _ + m >= y && (y = (j = this.ensureBuffer(_ + m)).length);
                                for (var L = 0; L < m; ++L, ++_) j[_] = j[_ - N]
                            }
                        }
                    } else {
                        var S, k = this.bytes,
                            P = this.bytesPos;
                        void 0 === (S = k[P++]) && a("Bad block header in flate stream");
                        var I = S;
                        void 0 === (S = k[P++]) && a("Bad block header in flate stream"), I |= S << 8, void 0 === (S = k[P++]) && a("Bad block header in flate stream");
                        var F = S;
                        void 0 === (S = k[P++]) && a("Bad block header in flate stream"), (F |= S << 8) != (65535 & ~I) && a("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
                        var C = this.bufferLength,
                            j = this.ensureBuffer(C + I),
                            B = C + I;
                        this.bufferLength = B;
                        for (var E = C; E < B; ++E) {
                            if (void 0 === (S = k[P++])) { this.eof = !0; break }
                            j[E] = S
                        }
                        this.bytesPos = P
                    }
                }, o
            }

            function a(t) { throw new Error(t) }

            function o(t) {
                var e = 0,
                    r = t[e++],
                    n = t[e++]; - 1 != r && -1 != n || a("Invalid header in flate stream"), 8 != (15 & r) && a("Unknown compression method in flate stream"), ((r << 8) + n) % 31 != 0 && a("Bad FCHECK in flate stream"), 32 & n && a("FDICT bit set in flate stream"), this.bytes = t, this.bytesPos = 2, this.codeSize = 0, this.codeBuf = 0, mr.call(this)
            }
        }(),
        vr = function() {
            var t, r, n;

            function i(t) {
                var e, r, n, i, a, o, s, u, h, c, l, f, d, p;
                for (this.data = t, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, o = null;;) {
                    switch (e = this.readUInt32(), h = function() { var t, e; for (e = [], t = 0; t < 4; ++t) e.push(String.fromCharCode(this.data[this.pos++])); return e }.call(this).join("")) {
                        case "IHDR":
                            this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
                            break;
                        case "acTL":
                            this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
                            break;
                        case "PLTE":
                            this.palette = this.read(e);
                            break;
                        case "fcTL":
                            o && this.animation.frames.push(o), this.pos += 4, o = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, a = this.readUInt16(), i = this.readUInt16() || 100, o.delay = 1e3 * a / i, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
                            break;
                        case "IDAT":
                        case "fdAT":
                            for ("fdAT" === h && (this.pos += 4, e -= 4), t = (null != o ? o.data : void 0) || this.imgData, f = 0; 0 <= e ? f < e : f > e; 0 <= e ? ++f : --f) t.push(this.data[this.pos++]);
                            break;
                        case "tRNS":
                            switch (this.transparency = {}, this.colorType) {
                                case 3:
                                    if (n = this.palette.length / 3, this.transparency.indexed = this.read(e), this.transparency.indexed.length > n) throw new Error("More transparent colors than palette size");
                                    if ((c = n - this.transparency.indexed.length) > 0)
                                        for (d = 0; 0 <= c ? d < c : d > c; 0 <= c ? ++d : --d) this.transparency.indexed.push(255);
                                    break;
                                case 0:
                                    this.transparency.grayscale = this.read(e)[0];
                                    break;
                                case 2:
                                    this.transparency.rgb = this.read(e)
                            }
                            break;
                        case "tEXt":
                            s = (l = this.read(e)).indexOf(0), u = String.fromCharCode.apply(String, l.slice(0, s)), this.text[u] = String.fromCharCode.apply(String, l.slice(s + 1));
                            break;
                        case "IEND":
                            return o && this.animation.frames.push(o), this.colors = function() {
                                switch (this.colorType) {
                                    case 0:
                                    case 3:
                                    case 4:
                                        return 1;
                                    case 2:
                                    case 6:
                                        return 3
                                }
                            }.call(this), this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p, r = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * r, this.colorSpace = function() {
                                switch (this.colors) {
                                    case 1:
                                        return "DeviceGray";
                                    case 3:
                                        return "DeviceRGB"
                                }
                            }.call(this), void(this.imgData = new Uint8Array(this.imgData));
                        default:
                            this.pos += e
                    }
                    if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file")
                }
            }
            i.prototype.read = function(t) { var e, r; for (r = [], e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) r.push(this.data[this.pos++]); return r }, i.prototype.readUInt32 = function() { return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++] }, i.prototype.readUInt16 = function() { return this.data[this.pos++] << 8 | this.data[this.pos++] }, i.prototype.decodePixels = function(t) {
                var e = this.pixelBitlength / 8,
                    r = new Uint8Array(this.width * this.height * e),
                    n = 0,
                    i = this;
                if (null == t && (t = this.imgData), 0 === t.length) return new Uint8Array(0);

                function a(a, o, s, u) {
                    var h, c, l, f, d, p, g, m, b, v, w, y, _, x, A, N, L, S, k, P, I, F = Math.ceil((i.width - a) / s),
                        C = Math.ceil((i.height - o) / u),
                        j = i.width == F && i.height == C;
                    for (x = e * F, y = j ? r : new Uint8Array(x * C), p = t.length, _ = 0, c = 0; _ < C && n < p;) {
                        switch (t[n++]) {
                            case 0:
                                for (f = L = 0; L < x; f = L += 1) y[c++] = t[n++];
                                break;
                            case 1:
                                for (f = S = 0; S < x; f = S += 1) h = t[n++], d = f < e ? 0 : y[c - e], y[c++] = (h + d) % 256;
                                break;
                            case 2:
                                for (f = k = 0; k < x; f = k += 1) h = t[n++], l = (f - f % e) / e, A = _ && y[(_ - 1) * x + l * e + f % e], y[c++] = (A + h) % 256;
                                break;
                            case 3:
                                for (f = P = 0; P < x; f = P += 1) h = t[n++], l = (f - f % e) / e, d = f < e ? 0 : y[c - e], A = _ && y[(_ - 1) * x + l * e + f % e], y[c++] = (h + Math.floor((d + A) / 2)) % 256;
                                break;
                            case 4:
                                for (f = I = 0; I < x; f = I += 1) h = t[n++], l = (f - f % e) / e, d = f < e ? 0 : y[c - e], 0 === _ ? A = N = 0 : (A = y[(_ - 1) * x + l * e + f % e], N = l && y[(_ - 1) * x + (l - 1) * e + f % e]), g = d + A - N, m = Math.abs(g - d), v = Math.abs(g - A), w = Math.abs(g - N), b = m <= v && m <= w ? d : v <= w ? A : N, y[c++] = (h + b) % 256;
                                break;
                            default:
                                throw new Error("Invalid filter algorithm: " + t[n - 1])
                        }
                        if (!j) {
                            var B = ((o + _ * u) * i.width + a) * e,
                                E = _ * x;
                            for (f = 0; f < F; f += 1) {
                                for (var O = 0; O < e; O += 1) r[B++] = y[E++];
                                B += (s - 1) * e
                            }
                        }
                        _++
                    }
                }
                return t = (t = new br(t)).getBytes(), 1 == i.interlaceMethod ? (a(0, 0, 8, 8), a(4, 0, 8, 8), a(0, 4, 4, 8), a(2, 0, 4, 4), a(0, 2, 2, 4), a(1, 0, 2, 2), a(0, 1, 1, 2)) : a(0, 0, 1, 1), r
            }, i.prototype.decodePalette = function() { var t, e, r, n, i, a, o, s, u; for (r = this.palette, a = this.transparency.indexed || [], i = new Uint8Array((a.length || 0) + r.length), n = 0, t = 0, e = o = 0, s = r.length; o < s; e = o += 3) i[n++] = r[e], i[n++] = r[e + 1], i[n++] = r[e + 2], i[n++] = null != (u = a[t++]) ? u : 255; return i }, i.prototype.copyToImageData = function(t, e) {
                var r, n, i, a, o, s, u, h, c, l, f;
                if (n = this.colors, c = null, r = this.hasAlphaChannel, this.palette.length && (c = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(), n = 4, r = !0), h = (i = t.data || t).length, o = c || e, a = s = 0, 1 === n)
                    for (; a < h;) u = c ? 4 * e[a / 4] : s, l = o[u++], i[a++] = l, i[a++] = l, i[a++] = l, i[a++] = r ? o[u++] : 255, s = u;
                else
                    for (; a < h;) u = c ? 4 * e[a / 4] : s, i[a++] = o[u++], i[a++] = o[u++], i[a++] = o[u++], i[a++] = r ? o[u++] : 255, s = u
            }, i.prototype.decode = function() { var t; return t = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t, this.decodePixels()), t };
            var a = function() { if ("[object Window]" === Object.prototype.toString.call(e)) { try { r = e.document.createElement("canvas"), n = r.getContext("2d") } catch (t) { return !1 } return !0 } return !1 };
            return a(), t = function(t) { var e; if (!0 === a()) return n.width = t.width, n.height = t.height, n.clearRect(0, 0, t.width, t.height), n.putImageData(t, 0, 0), (e = new Image).src = r.toDataURL(), e; throw new Error("This method requires a Browser with Canvas-capability.") }, i.prototype.decodeFrames = function(e) { var r, n, i, a, o, s, u, h; if (this.animation) { for (h = [], n = o = 0, s = (u = this.animation.frames).length; o < s; n = ++o) r = u[n], i = e.createImageData(r.width, r.height), a = this.decodePixels(new Uint8Array(r.data)), this.copyToImageData(i, a), r.imageData = i, h.push(r.image = t(i)); return h } }, i.prototype.renderFrame = function(t, e) { var r, n, i; return r = (n = this.animation.frames)[e], i = n[e - 1], 0 === e && t.clearRect(0, 0, this.width, this.height), 1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset), 0 === r.blendOp && t.clearRect(r.xOffset, r.yOffset, r.width, r.height), t.drawImage(r.image, r.xOffset, r.yOffset) }, i.prototype.animate = function(t) { var e, r, n, i, a, o, s = this; return r = 0, o = this.animation, i = o.numFrames, n = o.frames, a = o.numPlays, (e = function() { var o, u; if (o = r++ % i, u = n[o], s.renderFrame(t, o), i > 1 && r / i < a) return s.animation._timeout = setTimeout(e, u.delay) })() }, i.prototype.stopAnimation = function() { var t; return clearTimeout(null != (t = this.animation) ? t._timeout : void 0) }, i.prototype.render = function(t) { var e, r; return t._png && t._png.stopAnimation(), t._png = this, t.width = this.width, t.height = this.height, e = t.getContext("2d"), this.animation ? (this.decodeFrames(e), this.animate(e)) : (r = e.createImageData(this.width, this.height), this.copyToImageData(r, this.decodePixels()), e.putImageData(r, 0, 0)) }, i
        }();
    /**
     * @license
     * (c) Dean McNamee <dean@gmail.com>, 2013.
     *
     * https://github.com/deanm/omggif
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to
     * deal in the Software without restriction, including without limitation the
     * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
     * sell copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
     * IN THE SOFTWARE.
     *
     * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
     * including animation and compression.  It does not rely on any specific
     * underlying system, so should run in the browser, Node, or Plask.
     */
    function wr(t) {
        var e = 0;
        if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 != (t[e++] + 1 & 253) || 97 !== t[e++]) throw new Error("Invalid GIF 87a/89a header.");
        var r = t[e++] | t[e++] << 8,
            n = t[e++] | t[e++] << 8,
            i = t[e++],
            a = i >> 7,
            o = 1 << (7 & i) + 1;
        t[e++];
        t[e++];
        var s = null,
            u = null;
        a && (s = e, u = o, e += 3 * o);
        var h = !0,
            c = [],
            l = 0,
            f = null,
            d = 0,
            p = null;
        for (this.width = r, this.height = n; h && e < t.length;) switch (t[e++]) {
            case 33:
                switch (t[e++]) {
                    case 255:
                        if (11 !== t[e] || 78 == t[e + 1] && 69 == t[e + 2] && 84 == t[e + 3] && 83 == t[e + 4] && 67 == t[e + 5] && 65 == t[e + 6] && 80 == t[e + 7] && 69 == t[e + 8] && 50 == t[e + 9] && 46 == t[e + 10] && 48 == t[e + 11] && 3 == t[e + 12] && 1 == t[e + 13] && 0 == t[e + 16]) e += 14, p = t[e++] | t[e++] << 8, e++;
                        else
                            for (e += 12;;) {
                                if (!((k = t[e++]) >= 0)) throw Error("Invalid block size");
                                if (0 === k) break;
                                e += k
                            }
                        break;
                    case 249:
                        if (4 !== t[e++] || 0 !== t[e + 4]) throw new Error("Invalid graphics extension block.");
                        var g = t[e++];
                        l = t[e++] | t[e++] << 8, f = t[e++], 0 == (1 & g) && (f = null), d = g >> 2 & 7, e++;
                        break;
                    case 254:
                        for (;;) {
                            if (!((k = t[e++]) >= 0)) throw Error("Invalid block size");
                            if (0 === k) break;
                            e += k
                        }
                        break;
                    default:
                        throw new Error("Unknown graphic control label: 0x" + t[e - 1].toString(16))
                }
                break;
            case 44:
                var m = t[e++] | t[e++] << 8,
                    b = t[e++] | t[e++] << 8,
                    v = t[e++] | t[e++] << 8,
                    w = t[e++] | t[e++] << 8,
                    y = t[e++],
                    _ = y >> 6 & 1,
                    x = 1 << (7 & y) + 1,
                    A = s,
                    N = u,
                    L = !1;
                if (y >> 7) {
                    L = !0;
                    A = e, N = x, e += 3 * x
                }
                var S = e;
                for (e++;;) {
                    var k;
                    if (!((k = t[e++]) >= 0)) throw Error("Invalid block size");
                    if (0 === k) break;
                    e += k
                }
                c.push({ x: m, y: b, width: v, height: w, has_local_palette: L, palette_offset: A, palette_size: N, data_offset: S, data_length: e - S, transparent_index: f, interlaced: !!_, delay: l, disposal: d });
                break;
            case 59:
                h = !1;
                break;
            default:
                throw new Error("Unknown gif block: 0x" + t[e - 1].toString(16))
        }
        this.numFrames = function() { return c.length }, this.loopCount = function() { return p }, this.frameInfo = function(t) { if (t < 0 || t >= c.length) throw new Error("Frame index out of range."); return c[t] }, this.decodeAndBlitFrameBGRA = function(e, n) {
            var i = this.frameInfo(e),
                a = i.width * i.height,
                o = new Uint8Array(a);
            yr(t, i.data_offset, o, a);
            var s = i.palette_offset,
                u = i.transparent_index;
            null === u && (u = 256);
            var h = i.width,
                c = r - h,
                l = h,
                f = 4 * (i.y * r + i.x),
                d = 4 * ((i.y + i.height) * r + i.x),
                p = f,
                g = 4 * c;
            !0 === i.interlaced && (g += 4 * r * 7);
            for (var m = 8, b = 0, v = o.length; b < v; ++b) {
                var w = o[b];
                if (0 === l && (l = h, (p += g) >= d && (g = 4 * c + 4 * r * (m - 1), p = f + (h + c) * (m << 1), m >>= 1)), w === u) p += 4;
                else {
                    var y = t[s + 3 * w],
                        _ = t[s + 3 * w + 1],
                        x = t[s + 3 * w + 2];
                    n[p++] = x, n[p++] = _, n[p++] = y, n[p++] = 255
                }--l
            }
        }, this.decodeAndBlitFrameRGBA = function(e, n) {
            var i = this.frameInfo(e),
                a = i.width * i.height,
                o = new Uint8Array(a);
            yr(t, i.data_offset, o, a);
            var s = i.palette_offset,
                u = i.transparent_index;
            null === u && (u = 256);
            var h = i.width,
                c = r - h,
                l = h,
                f = 4 * (i.y * r + i.x),
                d = 4 * ((i.y + i.height) * r + i.x),
                p = f,
                g = 4 * c;
            !0 === i.interlaced && (g += 4 * r * 7);
            for (var m = 8, b = 0, v = o.length; b < v; ++b) {
                var w = o[b];
                if (0 === l && (l = h, (p += g) >= d && (g = 4 * c + 4 * r * (m - 1), p = f + (h + c) * (m << 1), m >>= 1)), w === u) p += 4;
                else {
                    var y = t[s + 3 * w],
                        _ = t[s + 3 * w + 1],
                        x = t[s + 3 * w + 2];
                    n[p++] = y, n[p++] = _, n[p++] = x, n[p++] = 255
                }--l
            }
        }
    }

    function yr(t, e, r, i) {
        for (var a = t[e++], o = 1 << a, s = o + 1, u = s + 1, h = a + 1, c = (1 << h) - 1, l = 0, f = 0, d = 0, p = t[e++], g = new Int32Array(4096), m = null;;) {
            for (; l < 16 && 0 !== p;) f |= t[e++] << l, l += 8, 1 === p ? p = t[e++] : --p;
            if (l < h) break;
            var b = f & c;
            if (f >>= h, l -= h, b !== o) {
                if (b === s) break;
                for (var v = b < u ? b : m, w = 0, y = v; y > o;) y = g[y] >> 8, ++w;
                var _ = y;
                if (d + w + (v !== b ? 1 : 0) > i) return void n.log("Warning, gif stream longer than expected.");
                r[d++] = _;
                var x = d += w;
                for (v !== b && (r[d++] = _), y = v; w--;) y = g[y], r[--x] = 255 & y, y >>= 8;
                null !== m && u < 4096 && (g[u++] = m << 8 | _, u >= c + 1 && h < 12 && (++h, c = c << 1 | 1)), m = b
            } else u = s + 1, c = (1 << (h = a + 1)) - 1, m = null
        }
        return d !== i && n.log("Warning, gif stream shorter than expected."), r
    }
    /**
       * @license
        Copyright (c) 2008, Adobe Systems Incorporated
        All rights reserved.

        Redistribution and use in source and binary forms, with or without 
        modification, are permitted provided that the following conditions are
        met:

        * Redistributions of source code must retain the above copyright notice, 
          this list of conditions and the following disclaimer.
        
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the 
          documentation and/or other materials provided with the distribution.
        
        * Neither the name of Adobe Systems Incorporated nor the names of its 
          contributors may be used to endorse or promote products derived from 
          this software without specific prior written permission.

        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
        IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
        THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
        PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
        CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
        EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
        PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
        PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
        LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
        NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
        SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */
    function _r(t) {
        var e, r, n, i, a, o = Math.floor,
            s = new Array(64),
            u = new Array(64),
            h = new Array(64),
            c = new Array(64),
            l = new Array(65535),
            f = new Array(65535),
            d = new Array(64),
            p = new Array(64),
            g = [],
            m = 0,
            b = 7,
            v = new Array(64),
            w = new Array(64),
            y = new Array(64),
            _ = new Array(256),
            x = new Array(2048),
            A = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
            N = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            L = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            S = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
            k = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
            P = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            I = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            F = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
            C = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

        function j(t, e) {
            for (var r = 0, n = 0, i = new Array, a = 1; a <= 16; a++) {
                for (var o = 1; o <= t[a]; o++) i[e[n]] = [], i[e[n]][0] = r, i[e[n]][1] = a, n++, r++;
                r *= 2
            }
            return i
        }

        function B(t) { for (var e = t[0], r = t[1] - 1; r >= 0;) e & 1 << r && (m |= 1 << b), r--, --b < 0 && (255 == m ? (E(255), E(0)) : E(m), b = 7, m = 0) }

        function E(t) { g.push(t) }

        function O(t) { E(t >> 8 & 255), E(255 & t) }

        function M(t, e, r, n, i) {
            for (var a, o = i[0], s = i[240], u = function(t, e) {
                    var r, n, i, a, o, s, u, h, c, l, f = 0;
                    for (c = 0; c < 8; ++c) {
                        r = t[f], n = t[f + 1], i = t[f + 2], a = t[f + 3], o = t[f + 4], s = t[f + 5], u = t[f + 6];
                        var p = r + (h = t[f + 7]),
                            g = r - h,
                            m = n + u,
                            b = n - u,
                            v = i + s,
                            w = i - s,
                            y = a + o,
                            _ = a - o,
                            x = p + y,
                            A = p - y,
                            N = m + v,
                            L = m - v;
                        t[f] = x + N, t[f + 4] = x - N;
                        var S = .707106781 * (L + A);
                        t[f + 2] = A + S, t[f + 6] = A - S;
                        var k = .382683433 * ((x = _ + w) - (L = b + g)),
                            P = .5411961 * x + k,
                            I = 1.306562965 * L + k,
                            F = .707106781 * (N = w + b),
                            C = g + F,
                            j = g - F;
                        t[f + 5] = j + P, t[f + 3] = j - P, t[f + 1] = C + I, t[f + 7] = C - I, f += 8
                    }
                    for (f = 0, c = 0; c < 8; ++c) {
                        r = t[f], n = t[f + 8], i = t[f + 16], a = t[f + 24], o = t[f + 32], s = t[f + 40], u = t[f + 48];
                        var B = r + (h = t[f + 56]),
                            E = r - h,
                            O = n + u,
                            M = n - u,
                            q = i + s,
                            R = i - s,
                            T = a + o,
                            D = a - o,
                            z = B + T,
                            U = B - T,
                            H = O + q,
                            V = O - q;
                        t[f] = z + H, t[f + 32] = z - H;
                        var W = .707106781 * (V + U);
                        t[f + 16] = U + W, t[f + 48] = U - W;
                        var G = .382683433 * ((z = D + R) - (V = M + E)),
                            Y = .5411961 * z + G,
                            J = 1.306562965 * V + G,
                            X = .707106781 * (H = R + M),
                            K = E + X,
                            Z = E - X;
                        t[f + 40] = Z + Y, t[f + 24] = Z - Y, t[f + 8] = K + J, t[f + 56] = K - J, f++
                    }
                    for (c = 0; c < 64; ++c) l = t[c] * e[c], d[c] = l > 0 ? l + .5 | 0 : l - .5 | 0;
                    return d
                }(t, e), h = 0; h < 64; ++h) p[A[h]] = u[h];
            var c = p[0] - r;
            r = p[0], 0 == c ? B(n[0]) : (B(n[f[a = 32767 + c]]), B(l[a]));
            for (var g = 63; g > 0 && 0 == p[g];) g--;
            if (0 == g) return B(o), r;
            for (var m, b = 1; b <= g;) {
                for (var v = b; 0 == p[b] && b <= g;) ++b;
                var w = b - v;
                if (w >= 16) {
                    m = w >> 4;
                    for (var y = 1; y <= m; ++y) B(s);
                    w &= 15
                }
                a = 32767 + p[b], B(i[(w << 4) + f[a]]), B(l[a]), b++
            }
            return 63 != g && B(o), r
        }

        function q(t) {
            (t = Math.min(Math.max(t, 1), 100), a != t) && (! function(t) {
                for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], r = 0; r < 64; r++) {
                    var n = o((e[r] * t + 50) / 100);
                    n = Math.min(Math.max(n, 1), 255), s[A[r]] = n
                }
                for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], a = 0; a < 64; a++) {
                    var l = o((i[a] * t + 50) / 100);
                    l = Math.min(Math.max(l, 1), 255), u[A[a]] = l
                }
                for (var f = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], d = 0, p = 0; p < 8; p++)
                    for (var g = 0; g < 8; g++) h[d] = 1 / (s[A[d]] * f[p] * f[g] * 8), c[d] = 1 / (u[A[d]] * f[p] * f[g] * 8), d++
            }(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)), a = t)
        }
        this.encode = function(t, a) {
                a && q(a), g = new Array, m = 0, b = 7, O(65496), O(65504), O(16), E(74), E(70), E(73), E(70), E(0), E(1), E(1), E(0), O(1), O(1), E(0), E(0),
                    function() {
                        O(65499), O(132), E(0);
                        for (var t = 0; t < 64; t++) E(s[t]);
                        E(1);
                        for (var e = 0; e < 64; e++) E(u[e])
                    }(),
                    function(t, e) { O(65472), O(17), E(8), O(e), O(t), E(3), E(1), E(17), E(0), E(2), E(17), E(1), E(3), E(17), E(1) }(t.width, t.height),
                    function() {
                        O(65476), O(418), E(0);
                        for (var t = 0; t < 16; t++) E(N[t + 1]);
                        for (var e = 0; e <= 11; e++) E(L[e]);
                        E(16);
                        for (var r = 0; r < 16; r++) E(S[r + 1]);
                        for (var n = 0; n <= 161; n++) E(k[n]);
                        E(1);
                        for (var i = 0; i < 16; i++) E(P[i + 1]);
                        for (var a = 0; a <= 11; a++) E(I[a]);
                        E(17);
                        for (var o = 0; o < 16; o++) E(F[o + 1]);
                        for (var s = 0; s <= 161; s++) E(C[s])
                    }(), O(65498), O(12), E(3), E(1), E(0), E(2), E(17), E(3), E(17), E(0), E(63), E(0);
                var o = 0,
                    l = 0,
                    f = 0;
                m = 0, b = 7, this.encode.displayName = "_encode_";
                for (var d, p, _, A, j, R, T, D, z, U = t.data, H = t.width, V = t.height, W = 4 * H, G = 0; G < V;) {
                    for (d = 0; d < W;) {
                        for (j = W * G + d, T = -1, D = 0, z = 0; z < 64; z++) R = j + (D = z >> 3) * W + (T = 4 * (7 & z)), G + D >= V && (R -= W * (G + 1 + D - V)), d + T >= W && (R -= d + T - W + 4), p = U[R++], _ = U[R++], A = U[R++], v[z] = (x[p] + x[_ + 256 >> 0] + x[A + 512 >> 0] >> 16) - 128, w[z] = (x[p + 768 >> 0] + x[_ + 1024 >> 0] + x[A + 1280 >> 0] >> 16) - 128, y[z] = (x[p + 1280 >> 0] + x[_ + 1536 >> 0] + x[A + 1792 >> 0] >> 16) - 128;
                        o = M(v, h, o, e, n), l = M(w, c, l, r, i), f = M(y, c, f, r, i), d += 32
                    }
                    G += 8
                }
                if (b >= 0) {
                    var Y = [];
                    Y[1] = b + 1, Y[0] = (1 << b + 1) - 1, B(Y)
                }
                return O(65497), new Uint8Array(g)
            }, t = t || 50,
            function() { for (var t = String.fromCharCode, e = 0; e < 256; e++) _[e] = t(e) }(), e = j(N, L), r = j(P, I), n = j(S, k), i = j(F, C),
            function() {
                for (var t = 1, e = 2, r = 1; r <= 15; r++) {
                    for (var n = t; n < e; n++) f[32767 + n] = r, l[32767 + n] = [], l[32767 + n][1] = r, l[32767 + n][0] = n;
                    for (var i = -(e - 1); i <= -t; i++) f[32767 + i] = r, l[32767 + i] = [], l[32767 + i][1] = r, l[32767 + i][0] = e - 1 + i;
                    t <<= 1, e <<= 1
                }
            }(),
            function() { for (var t = 0; t < 256; t++) x[t] = 19595 * t, x[t + 256 >> 0] = 38470 * t, x[t + 512 >> 0] = 7471 * t + 32768, x[t + 768 >> 0] = -11059 * t, x[t + 1024 >> 0] = -21709 * t, x[t + 1280 >> 0] = 32768 * t + 8421375, x[t + 1536 >> 0] = -27439 * t, x[t + 1792 >> 0] = -5329 * t }(), q(t)
    }
    /**
     * @license
     * Copyright (c) 2017 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    function xr(t, e) {
        if (this.pos = 0, this.buffer = t, this.datav = new DataView(t.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
        this.parseHeader(), this.parseBGR()
    }

    function Ar(t) {
        function e(t) { if (!t) throw Error("assert :P") }

        function r(t, e, r) {
            for (var n = 0; 4 > n; n++)
                if (t[e + n] != r.charCodeAt(n)) return !0;
            return !1
        }

        function n(t, e, r, n, i) { for (var a = 0; a < i; a++) t[e + a] = r[n + a] }

        function i(t, e, r, n) { for (var i = 0; i < n; i++) t[e + i] = r }

        function a(t) { return new Int32Array(t) }

        function o(t, e) { for (var r = [], n = 0; n < t; n++) r.push(new e); return r }

        function s(t, e) { var r = []; return function t(r, n, i) { for (var a = i[n], o = 0; o < a && (r.push(i.length > n + 1 ? [] : new e), !(i.length < n + 1)); o++) t(r[o], n + 1, i) }(r, 0, t), r }

        function u(t, e) { for (var r = "", n = 0; n < 4; n++) r += String.fromCharCode(t[e++]); return r }

        function h(t, e) { return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16) >>> 0 }

        function c(t, e) { return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0 }
        new(Ar = function() {
            var t = this;

            function u(t, e) { for (var r = 1 << e - 1 >>> 0; t & r;) r >>>= 1; return r ? (t & r - 1) + r : t }

            function h(t, r, n, i, a) {
                e(!(i % n));
                do { t[r + (i -= n)] = a } while (0 < i)
            }

            function c(t, r, n, i, o) {
                if (e(2328 >= o), 512 >= o) var s = a(512);
                else if (null == (s = a(o))) return 0;
                return function(t, r, n, i, o, s) {
                    var c, f, d = r,
                        p = 1 << n,
                        g = a(16),
                        m = a(16);
                    for (e(0 != o), e(null != i), e(null != t), e(0 < n), f = 0; f < o; ++f) { if (15 < i[f]) return 0;++g[i[f]] }
                    if (g[0] == o) return 0;
                    for (m[1] = 0, c = 1; 15 > c; ++c) {
                        if (g[c] > 1 << c) return 0;
                        m[c + 1] = m[c] + g[c]
                    }
                    for (f = 0; f < o; ++f) c = i[f], 0 < i[f] && (s[m[c]++] = f);
                    if (1 == m[15]) return (i = new l).g = 0, i.value = s[0], h(t, d, 1, p, i), p;
                    var b, v = -1,
                        w = p - 1,
                        y = 0,
                        _ = 1,
                        x = 1,
                        A = 1 << n;
                    for (f = 0, c = 1, o = 2; c <= n; ++c, o <<= 1) { if (_ += x <<= 1, 0 > (x -= g[c])) return 0; for (; 0 < g[c]; --g[c])(i = new l).g = c, i.value = s[f++], h(t, d + y, o, A, i), y = u(y, c) }
                    for (c = n + 1, o = 2; 15 >= c; ++c, o <<= 1) {
                        if (_ += x <<= 1, 0 > (x -= g[c])) return 0;
                        for (; 0 < g[c]; --g[c]) {
                            if (i = new l, (y & w) != v) {
                                for (d += A, b = 1 << (v = c) - n; 15 > v && !(0 >= (b -= g[v]));) ++v, b <<= 1;
                                p += A = 1 << (b = v - n), t[r + (v = y & w)].g = b + n, t[r + v].value = d - r - v
                            }
                            i.g = c - n, i.value = s[f++], h(t, d + (y >> n), o, A, i), y = u(y, c)
                        }
                    }
                    return _ != 2 * m[15] - 1 ? 0 : p
                }(t, r, n, i, o, s)
            }

            function l() { this.value = this.g = 0 }

            function f() { this.value = this.g = 0 }

            function d() { this.G = o(5, l), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o(Rr, f) }

            function p(t, r, n, i) { e(null != t), e(null != r), e(2147483648 > i), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = r, t.pa = n, t.Jd = r, t.Yc = n + i, t.Zc = 4 <= i ? n + i - 4 + 1 : n, S(t) }

            function g(t, e) { for (var r = 0; 0 < e--;) r |= P(t, 128) << e; return r }

            function m(t, e) { var r = g(t, e); return k(t) ? -r : r }

            function b(t, r, n, i) {
                var a, o = 0;
                for (e(null != t), e(null != r), e(4294967288 > i), t.Sb = i, t.Ra = 0, t.u = 0, t.h = 0, 4 < i && (i = 4), a = 0; a < i; ++a) o += r[n + a] << 8 * a;
                t.Ra = o, t.bb = i, t.oa = r, t.pa = n
            }

            function v(t) {
                for (; 8 <= t.u && t.bb < t.Sb;) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << zr - 8 >>> 0, ++t.bb, t.u -= 8;
                A(t) && (t.h = 1, t.u = 0)
            }

            function w(t, r) { if (e(0 <= r), !t.h && r <= Dr) { var n = x(t) & Tr[r]; return t.u += r, v(t), n } return t.h = 1, t.u = 0 }

            function y() { this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0 }

            function _() { this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0 }

            function x(t) { return t.Ra >>> (t.u & zr - 1) >>> 0 }

            function A(t) { return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > zr }

            function N(t, e) { t.u = e, t.h = A(t) }

            function L(t) { t.u >= Ur && (e(t.u >= Ur), v(t)) }

            function S(t) { e(null != t && null != t.oa), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(null != t && null != t.oa), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1)) }

            function k(t) { return g(t, 1) }

            function P(t, e) {
                var r = t.Ca;
                0 > t.b && S(t);
                var n = t.b,
                    i = r * e >>> 8,
                    a = (t.I >>> n > i) + 0;
                for (a ? (r -= i, t.I -= i + 1 << n >>> 0) : r = i + 1, n = r, i = 0; 256 <= n;) i += 8, n >>= 8;
                return n = 7 ^ i + Hr[n], t.b -= n, t.Ca = (r << n) - 1, a
            }

            function I(t, e, r) { t[e + 0] = r >> 24 & 255, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = r >> 0 & 255 }

            function F(t, e) { return t[e + 0] << 0 | t[e + 1] << 8 }

            function C(t, e) { return F(t, e) | t[e + 2] << 16 }

            function j(t, e) { return F(t, e) | F(t, e + 2) << 16 }

            function B(t, r) { var n = 1 << r; return e(null != t), e(0 < r), t.X = a(n), null == t.X ? 0 : (t.Mb = 32 - r, t.Xa = r, 1) }

            function E(t, r) { e(null != t), e(null != r), e(t.Xa == r.Xa), n(r.X, 0, t.X, 0, 1 << r.Xa) }

            function O() { this.X = [], this.Xa = this.Mb = 0 }

            function M(t, r, n, i) {
                e(null != n), e(null != i);
                var a = n[0],
                    o = i[0];
                return 0 == a && (a = (t * o + r / 2) / r), 0 == o && (o = (r * a + t / 2) / t), 0 >= a || 0 >= o ? 0 : (n[0] = a, i[0] = o, 1)
            }

            function q(t, e) { return t + (1 << e) - 1 >>> e }

            function R(t, e) { return ((4278255360 & t) + (4278255360 & e) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & e) >>> 0 & 16711935) >>> 0 }

            function T(e, r) {
                t[r] = function(r, n, i, a, o, s, u) {
                    var h;
                    for (h = 0; h < o; ++h) {
                        var c = t[e](s[u + h - 1], i, a + h);
                        s[u + h] = R(r[n + h], c)
                    }
                }
            }

            function D() { this.ud = this.hd = this.jd = 0 }

            function z(t, e) { return ((4278124286 & (t ^ e)) >>> 1) + (t & e) >>> 0 }

            function U(t) { return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0 }

            function H(t, e) { return U(t + (t - e + .5 >> 1)) }

            function V(t, e, r) { return Math.abs(e - r) - Math.abs(t - r) }

            function W(t, e, r, n, i, a, o) { for (n = a[o - 1], r = 0; r < i; ++r) a[o + r] = n = R(t[e + r], n) }

            function G(t, e, r, n, i) {
                var a;
                for (a = 0; a < r; ++a) {
                    var o = t[e + a],
                        s = o >> 8 & 255,
                        u = 16711935 & (u = (u = 16711935 & o) + ((s << 16) + s));
                    n[i + a] = (4278255360 & o) + u >>> 0
                }
            }

            function Y(t, e) { e.jd = t >> 0 & 255, e.hd = t >> 8 & 255, e.ud = t >> 16 & 255 }

            function J(t, e, r, n, i, a) {
                var o;
                for (o = 0; o < n; ++o) {
                    var s = e[r + o],
                        u = s >>> 8,
                        h = s,
                        c = 255 & (c = (c = s >>> 16) + ((t.jd << 24 >> 24) * (u << 24 >> 24) >>> 5));
                    h = 255 & (h = (h = h + ((t.hd << 24 >> 24) * (u << 24 >> 24) >>> 5)) + ((t.ud << 24 >> 24) * (c << 24 >> 24) >>> 5));
                    i[a + o] = (4278255360 & s) + (c << 16) + h
                }
            }

            function X(e, r, n, i, a) {
                t[r] = function(t, e, r, n, o, s, u, h, c) {
                    for (n = u; n < h; ++n)
                        for (u = 0; u < c; ++u) o[s++] = a(r[i(t[e++])])
                }, t[e] = function(e, r, o, s, u, h, c) {
                    var l = 8 >> e.b,
                        f = e.Ea,
                        d = e.K[0],
                        p = e.w;
                    if (8 > l)
                        for (e = (1 << e.b) - 1, p = (1 << l) - 1; r < o; ++r) { var g, m = 0; for (g = 0; g < f; ++g) g & e || (m = i(s[u++])), h[c++] = a(d[m & p]), m >>= l } else t["VP8LMapColor" + n](s, u, d, p, h, c, r, o, f)
                }
            }

            function K(t, e, r, n, i) {
                for (r = e + r; e < r;) {
                    var a = t[e++];
                    n[i++] = a >> 16 & 255, n[i++] = a >> 8 & 255, n[i++] = a >> 0 & 255
                }
            }

            function Z(t, e, r, n, i) {
                for (r = e + r; e < r;) {
                    var a = t[e++];
                    n[i++] = a >> 16 & 255, n[i++] = a >> 8 & 255, n[i++] = a >> 0 & 255, n[i++] = a >> 24 & 255
                }
            }

            function $(t, e, r, n, i) {
                for (r = e + r; e < r;) {
                    var a = (o = t[e++]) >> 16 & 240 | o >> 12 & 15,
                        o = o >> 0 & 240 | o >> 28 & 15;
                    n[i++] = a, n[i++] = o
                }
            }

            function Q(t, e, r, n, i) {
                for (r = e + r; e < r;) {
                    var a = (o = t[e++]) >> 16 & 248 | o >> 13 & 7,
                        o = o >> 5 & 224 | o >> 3 & 31;
                    n[i++] = a, n[i++] = o
                }
            }

            function tt(t, e, r, n, i) {
                for (r = e + r; e < r;) {
                    var a = t[e++];
                    n[i++] = a >> 0 & 255, n[i++] = a >> 8 & 255, n[i++] = a >> 16 & 255
                }
            }

            function et(t, e, r, i, a, o) {
                if (0 == o)
                    for (r = e + r; e < r;) I(i, ((o = t[e++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0), a += 32;
                else n(i, a, t, e, r)
            }

            function rt(e, r) { t[r][0] = t[e + "0"], t[r][1] = t[e + "1"], t[r][2] = t[e + "2"], t[r][3] = t[e + "3"], t[r][4] = t[e + "4"], t[r][5] = t[e + "5"], t[r][6] = t[e + "6"], t[r][7] = t[e + "7"], t[r][8] = t[e + "8"], t[r][9] = t[e + "9"], t[r][10] = t[e + "10"], t[r][11] = t[e + "11"], t[r][12] = t[e + "12"], t[r][13] = t[e + "13"], t[r][14] = t[e + "0"], t[r][15] = t[e + "0"] }

            function nt(t) { return t == Hn || t == Vn || t == Wn || t == Gn }

            function it() { this.eb = [], this.size = this.A = this.fb = 0 }

            function at() { this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0 }

            function ot() { this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new it, this.f.kb = new at, this.sd = null }

            function st() { this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0] }

            function ut() { this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0 }

            function ht(t) { return alert("todo:WebPSamplerProcessPlane"), t.T }

            function ct(t, e) {
                var r = t.T,
                    i = e.ba.f.RGBA,
                    a = i.eb,
                    o = i.fb + t.ka * i.A,
                    s = bi[e.ba.S],
                    u = t.y,
                    h = t.O,
                    c = t.f,
                    l = t.N,
                    f = t.ea,
                    d = t.W,
                    p = e.cc,
                    g = e.dc,
                    m = e.Mc,
                    b = e.Nc,
                    v = t.ka,
                    w = t.ka + t.T,
                    y = t.U,
                    _ = y + 1 >> 1;
                for (0 == v ? s(u, h, null, null, c, l, f, d, c, l, f, d, a, o, null, null, y) : (s(e.ec, e.fc, u, h, p, g, m, b, c, l, f, d, a, o - i.A, a, o, y), ++r); v + 2 < w; v += 2) p = c, g = l, m = f, b = d, l += t.Rc, d += t.Rc, o += 2 * i.A, s(u, (h += 2 * t.fa) - t.fa, u, h, p, g, m, b, c, l, f, d, a, o - i.A, a, o, y);
                return h += t.fa, t.j + w < t.o ? (n(e.ec, e.fc, u, h, y), n(e.cc, e.dc, c, l, _), n(e.Mc, e.Nc, f, d, _), r--) : 1 & w || s(u, h, null, null, c, l, f, d, c, l, f, d, a, o + i.A, null, null, y), r
            }

            function lt(t, r, n) {
                var i = t.F,
                    a = [t.J];
                if (null != i) {
                    var o = t.U,
                        s = r.ba.S,
                        u = s == Dn || s == Wn;
                    r = r.ba.f.RGBA;
                    var h = [0],
                        c = t.ka;
                    h[0] = t.T, t.Kb && (0 == c ? --h[0] : (--c, a[0] -= t.width), t.j + t.ka + t.T == t.o && (h[0] = t.o - t.j - c));
                    var l = r.eb;
                    c = r.fb + c * r.A;
                    t = Ln(i, a[0], t.width, o, h, l, c + (u ? 0 : 3), r.A), e(n == h), t && nt(s) && An(l, c, u, o, h, r.A)
                }
                return 0
            }

            function ft(t) {
                var e = t.ma,
                    r = e.ba.S,
                    n = 11 > r,
                    i = r == qn || r == Tn || r == Dn || r == zn || 12 == r || nt(r);
                if (e.memory = null, e.Ib = null, e.Jb = null, e.Nd = null, !Or(e.Oa, t, i ? 11 : 12)) return 0;
                if (i && nt(r) && vr(), t.da) alert("todo:use_scaling");
                else {
                    if (n) {
                        if (e.Ib = ht, t.Kb) {
                            if (r = t.U + 1 >> 1, e.memory = a(t.U + 2 * r), null == e.memory) return 0;
                            e.ec = e.memory, e.fc = 0, e.cc = e.ec, e.dc = e.fc + t.U, e.Mc = e.cc, e.Nc = e.dc + r, e.Ib = ct, vr()
                        }
                    } else alert("todo:EmitYUV");
                    i && (e.Jb = lt, n && mr())
                }
                if (n && !Ci) {
                    for (t = 0; 256 > t; ++t) ji[t] = 89858 * (t - 128) + Si >> Li, Oi[t] = -22014 * (t - 128) + Si, Ei[t] = -45773 * (t - 128), Bi[t] = 113618 * (t - 128) + Si >> Li;
                    for (t = ki; t < Pi; ++t) e = 76283 * (t - 16) + Si >> Li, Mi[t - ki] = Wt(e, 255), qi[t - ki] = Wt(e + 8 >> 4, 15);
                    Ci = 1
                }
                return 1
            }

            function dt(t) {
                var r = t.ma,
                    n = t.U,
                    i = t.T;
                return e(!(1 & t.ka)), 0 >= n || 0 >= i ? 0 : (n = r.Ib(t, r), null != r.Jb && r.Jb(t, r, n), r.Dc += n, 1)
            }

            function pt(t) { t.ma.memory = null }

            function gt(t, e, r, n) { return 47 != w(t, 8) ? 0 : (e[0] = w(t, 14) + 1, r[0] = w(t, 14) + 1, n[0] = w(t, 1), 0 != w(t, 3) ? 0 : !t.h) }

            function mt(t, e) { if (4 > t) return t + 1; var r = t - 2 >> 1; return (2 + (1 & t) << r) + w(e, r) + 1 }

            function bt(t, e) { return 120 < e ? e - 120 : 1 <= (r = ((r = $n[e - 1]) >> 4) * t + (8 - (15 & r))) ? r : 1; var r }

            function vt(t, e, r) {
                var n = x(r),
                    i = t[e += 255 & n].g - 8;
                return 0 < i && (N(r, r.u + 8), n = x(r), e += t[e].value, e += n & (1 << i) - 1), N(r, r.u + t[e].g), t[e].value
            }

            function wt(t, r, n) { return n.g += t.g, n.value += t.value << r >>> 0, e(8 >= n.g), t.g }

            function yt(t, r, n) { var i = t.xc; return e((r = 0 == i ? 0 : t.vc[t.md * (n >> i) + (r >> i)]) < t.Wb), t.Ya[r] }

            function _t(t, r, i, a) {
                var o = t.ab,
                    s = t.c * r,
                    u = t.C;
                r = u + r;
                var h = i,
                    c = a;
                for (a = t.Ta, i = t.Ua; 0 < o--;) {
                    var l = t.gc[o],
                        f = u,
                        d = r,
                        p = h,
                        g = c,
                        m = (c = a, h = i, l.Ea);
                    switch (e(f < d), e(d <= l.nc), l.hc) {
                        case 2:
                            Gr(p, g, (d - f) * m, c, h);
                            break;
                        case 0:
                            var b = f,
                                v = d,
                                w = c,
                                y = h,
                                _ = (S = l).Ea;
                            0 == b && (Vr(p, g, null, null, 1, w, y), W(p, g + 1, 0, 0, _ - 1, w, y + 1), g += _, y += _, ++b);
                            for (var x = 1 << S.b, A = x - 1, N = q(_, S.b), L = S.K, S = S.w + (b >> S.b) * N; b < v;) {
                                var k = L,
                                    P = S,
                                    I = 1;
                                for (Wr(p, g, w, y - _, 1, w, y); I < _;) {
                                    var F = (I & ~A) + x;
                                    F > _ && (F = _), (0, Zr[k[P++] >> 8 & 15])(p, g + +I, w, y + I - _, F - I, w, y + I), I = F
                                }
                                g += _, y += _, ++b & A || (S += N)
                            }
                            d != l.nc && n(c, h - m, c, h + (d - f - 1) * m, m);
                            break;
                        case 1:
                            for (m = p, v = g, _ = (p = l.Ea) - (y = p & ~(w = (g = 1 << l.b) - 1)), b = q(p, l.b), x = l.K, l = l.w + (f >> l.b) * b; f < d;) {
                                for (A = x, N = l, L = new D, S = v + y, k = v + p; v < S;) Y(A[N++], L), $r(L, m, v, g, c, h), v += g, h += g;
                                v < k && (Y(A[N++], L), $r(L, m, v, _, c, h), v += _, h += _), ++f & w || (l += b)
                            }
                            break;
                        case 3:
                            if (p == c && g == h && 0 < l.b) {
                                for (v = c, p = m = h + (d - f) * m - (y = (d - f) * q(l.Ea, l.b)), g = c, w = h, b = [], y = (_ = y) - 1; 0 <= y; --y) b[y] = g[w + y];
                                for (y = _ - 1; 0 <= y; --y) v[p + y] = b[y];
                                Yr(l, f, d, c, m, c, h)
                            } else Yr(l, f, d, p, g, c, h)
                    }
                    h = a, c = i
                }
                c != i && n(a, i, h, c, s)
            }

            function xt(t, r) {
                var n = t.V,
                    i = t.Ba + t.c * t.C,
                    a = r - t.C;
                if (e(r <= t.l.o), e(16 >= a), 0 < a) {
                    var o = t.l,
                        s = t.Ta,
                        u = t.Ua,
                        h = o.width;
                    if (_t(t, a, n, i), a = u = [u], e((n = t.C) < (i = r)), e(o.v < o.va), i > o.o && (i = o.o), n < o.j) {
                        var c = o.j - n;
                        n = o.j;
                        a[0] += c * h
                    }
                    if (n >= i ? n = 0 : (a[0] += 4 * o.v, o.ka = n - o.j, o.U = o.va - o.v, o.T = i - n, n = 1), n) {
                        if (u = u[0], 11 > (n = t.ca).S) {
                            var l = n.f.RGBA,
                                f = (i = n.S, a = o.U, o = o.T, c = l.eb, l.A),
                                d = o;
                            for (l = l.fb + t.Ma * l.A; 0 < d--;) {
                                var p = s,
                                    g = u,
                                    m = a,
                                    b = c,
                                    v = l;
                                switch (i) {
                                    case Mn:
                                        Qr(p, g, m, b, v);
                                        break;
                                    case qn:
                                        tn(p, g, m, b, v);
                                        break;
                                    case Hn:
                                        tn(p, g, m, b, v), An(b, v, 0, m, 1, 0);
                                        break;
                                    case Rn:
                                        nn(p, g, m, b, v);
                                        break;
                                    case Tn:
                                        et(p, g, m, b, v, 1);
                                        break;
                                    case Vn:
                                        et(p, g, m, b, v, 1), An(b, v, 0, m, 1, 0);
                                        break;
                                    case Dn:
                                        et(p, g, m, b, v, 0);
                                        break;
                                    case Wn:
                                        et(p, g, m, b, v, 0), An(b, v, 1, m, 1, 0);
                                        break;
                                    case zn:
                                        en(p, g, m, b, v);
                                        break;
                                    case Gn:
                                        en(p, g, m, b, v), Nn(b, v, m, 1, 0);
                                        break;
                                    case Un:
                                        rn(p, g, m, b, v);
                                        break;
                                    default:
                                        e(0)
                                }
                                u += h, l += f
                            }
                            t.Ma += o
                        } else alert("todo:EmitRescaledRowsYUVA");
                        e(t.Ma <= n.height)
                    }
                }
                t.C = r, e(t.C <= t.i)
            }

            function At(t) {
                var e;
                if (0 < t.ua) return 0;
                for (e = 0; e < t.Wb; ++e) {
                    var r = t.Ya[e].G,
                        n = t.Ya[e].H;
                    if (0 < r[1][n[1] + 0].g || 0 < r[2][n[2] + 0].g || 0 < r[3][n[3] + 0].g) return 0
                }
                return 1
            }

            function Nt(t, r, n, i, a, o) {
                if (0 != t.Z) {
                    var s = t.qd,
                        u = t.rd;
                    for (e(null != mi[t.Z]); r < n; ++r) mi[t.Z](s, u, i, a, i, a, o), s = i, u = a, a += o;
                    t.qd = s, t.rd = u
                }
            }

            function Lt(t, r) {
                var n = t.l.ma,
                    i = 0 == n.Z || 1 == n.Z ? t.l.j : t.C;
                i = t.C < i ? i : t.C;
                if (e(r <= t.l.o), r > i) {
                    var a = t.l.width,
                        o = n.ca,
                        s = n.tb + a * i,
                        u = t.V,
                        h = t.Ba + t.c * i,
                        c = t.gc;
                    e(1 == t.ab), e(3 == c[0].hc), Xr(c[0], i, r, u, h, o, s), Nt(n, i, r, o, s, a)
                }
                t.C = t.Ma = r
            }

            function St(t, r, n, i, a, o, s) {
                var u = t.$ / i,
                    h = t.$ % i,
                    c = t.m,
                    l = t.s,
                    f = n + t.$,
                    d = f;
                a = n + i * a;
                var p = n + i * o,
                    g = 280 + l.ua,
                    m = t.Pb ? u : 16777216,
                    b = 0 < l.ua ? l.Wa : null,
                    v = l.wc,
                    w = f < p ? yt(l, h, u) : null;
                e(t.C < o), e(p <= a);
                var y = !1;
                t: for (;;) {
                    for (; y || f < p;) {
                        var _ = 0;
                        if (u >= m) {
                            var S = f - n;
                            e((m = t).Pb), m.wd = m.m, m.xd = S, 0 < m.s.ua && E(m.s.Wa, m.s.vb), m = u + ti
                        }
                        if (h & v || (w = yt(l, h, u)), e(null != w), w.Qb && (r[f] = w.qb, y = !0), !y)
                            if (L(c), w.jc) {
                                _ = c, S = r;
                                var k = f,
                                    P = w.pd[x(_) & Rr - 1];
                                e(w.jc), 256 > P.g ? (N(_, _.u + P.g), S[k] = P.value, _ = 0) : (N(_, _.u + P.g - 256), e(256 <= P.value), _ = P.value), 0 == _ && (y = !0)
                            } else _ = vt(w.G[0], w.H[0], c);
                        if (c.h) break;
                        if (y || 256 > _) {
                            if (!y)
                                if (w.nd) r[f] = (w.qb | _ << 8) >>> 0;
                                else {
                                    if (L(c), y = vt(w.G[1], w.H[1], c), L(c), S = vt(w.G[2], w.H[2], c), k = vt(w.G[3], w.H[3], c), c.h) break;
                                    r[f] = (k << 24 | y << 16 | _ << 8 | S) >>> 0
                                }
                            if (y = !1, ++f, ++h >= i && (h = 0, ++u, null != s && u <= o && !(u % 16) && s(t, u), null != b))
                                for (; d < f;) _ = r[d++], b.X[(506832829 * _ & 4294967295) >>> b.Mb] = _
                        } else if (280 > _) {
                            if (_ = mt(_ - 256, c), S = vt(w.G[4], w.H[4], c), L(c), S = bt(i, S = mt(S, c)), c.h) break;
                            if (f - n < S || a - f < _) break t;
                            for (k = 0; k < _; ++k) r[f + k] = r[f + k - S];
                            for (f += _, h += _; h >= i;) h -= i, ++u, null != s && u <= o && !(u % 16) && s(t, u);
                            if (e(f <= a), h & v && (w = yt(l, h, u)), null != b)
                                for (; d < f;) _ = r[d++], b.X[(506832829 * _ & 4294967295) >>> b.Mb] = _
                        } else {
                            if (!(_ < g)) break t;
                            for (y = _ - 280, e(null != b); d < f;) _ = r[d++], b.X[(506832829 * _ & 4294967295) >>> b.Mb] = _;
                            _ = f, e(!(y >>> (S = b).Xa)), r[_] = S.X[y], y = !0
                        }
                        y || e(c.h == A(c))
                    }
                    if (t.Pb && c.h && f < a) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && E(t.s.vb, t.s.Wa);
                    else {
                        if (c.h) break t;
                        null != s && s(t, u > o ? o : u), t.a = 0, t.$ = f - n
                    }
                    return 1
                }
                return t.a = 3, 0
            }

            function kt(t) {
                e(null != t), t.vc = null, t.yc = null, t.Ya = null;
                var r = t.Wa;
                null != r && (r.X = null), t.vb = null, e(null != t)
            }

            function Pt() { var e = new or; return null == e ? null : (e.a = 0, e.xb = gi, rt("Predictor", "VP8LPredictors"), rt("Predictor", "VP8LPredictors_C"), rt("PredictorAdd", "VP8LPredictorsAdd"), rt("PredictorAdd", "VP8LPredictorsAdd_C"), Gr = G, $r = J, Qr = K, tn = Z, en = $, rn = Q, nn = tt, t.VP8LMapColor32b = Jr, t.VP8LMapColor8b = Kr, e) }

            function It(t, r, n, s, u) {
                var h = 1,
                    f = [t],
                    p = [r],
                    g = s.m,
                    m = s.s,
                    b = null,
                    v = 0;
                t: for (;;) {
                    if (n)
                        for (; h && w(g, 1);) {
                            var y = f,
                                _ = p,
                                A = s,
                                S = 1,
                                k = A.m,
                                P = A.gc[A.ab],
                                I = w(k, 2);
                            if (A.Oc & 1 << I) h = 0;
                            else {
                                switch (A.Oc |= 1 << I, P.hc = I, P.Ea = y[0], P.nc = _[0], P.K = [null], ++A.ab, e(4 >= A.ab), I) {
                                    case 0:
                                    case 1:
                                        P.b = w(k, 3) + 2, S = It(q(P.Ea, P.b), q(P.nc, P.b), 0, A, P.K), P.K = P.K[0];
                                        break;
                                    case 3:
                                        var F, C = w(k, 8) + 1,
                                            j = 16 < C ? 0 : 4 < C ? 1 : 2 < C ? 2 : 3;
                                        if (y[0] = q(P.Ea, j), P.b = j, F = S = It(C, 1, 0, A, P.K)) {
                                            var E, O = C,
                                                M = P,
                                                T = 1 << (8 >> M.b),
                                                D = a(T);
                                            if (null == D) F = 0;
                                            else {
                                                var z = M.K[0],
                                                    U = M.w;
                                                for (D[0] = M.K[0][0], E = 1; E < 1 * O; ++E) D[E] = R(z[U + E], D[E - 1]);
                                                for (; E < 4 * T; ++E) D[E] = 0;
                                                M.K[0] = null, M.K[0] = D, F = 1
                                            }
                                        }
                                        S = F;
                                        break;
                                    case 2:
                                        break;
                                    default:
                                        e(0)
                                }
                                h = S
                            }
                        }
                    if (f = f[0], p = p[0], h && w(g, 1) && !(h = 1 <= (v = w(g, 4)) && 11 >= v)) { s.a = 3; break t }
                    var H;
                    if (H = h) e: {
                        var V, W, G, Y = s,
                            J = f,
                            X = p,
                            K = v,
                            Z = n,
                            $ = Y.m,
                            Q = Y.s,
                            tt = [null],
                            et = 1,
                            rt = 0,
                            nt = Qn[K];r: for (;;) {
                            if (Z && w($, 1)) {
                                var it = w($, 3) + 2,
                                    at = q(J, it),
                                    ot = q(X, it),
                                    st = at * ot;
                                if (!It(at, ot, 0, Y, tt)) break r;
                                for (tt = tt[0], Q.xc = it, V = 0; V < st; ++V) {
                                    var ut = tt[V] >> 8 & 65535;
                                    tt[V] = ut, ut >= et && (et = ut + 1)
                                }
                            }
                            if ($.h) break r;
                            for (W = 0; 5 > W; ++W) { var ht = Xn[W];!W && 0 < K && (ht += 1 << K), rt < ht && (rt = ht) }
                            var ct = o(et * nt, l),
                                lt = et,
                                ft = o(lt, d);
                            if (null == ft) var dt = null;
                            else e(65536 >= lt), dt = ft;
                            var pt = a(rt);
                            if (null == dt || null == pt || null == ct) { Y.a = 1; break r }
                            var gt = ct;
                            for (V = G = 0; V < et; ++V) {
                                var mt = dt[V],
                                    bt = mt.G,
                                    vt = mt.H,
                                    yt = 0,
                                    _t = 1,
                                    xt = 0;
                                for (W = 0; 5 > W; ++W) {
                                    ht = Xn[W], bt[W] = gt, vt[W] = G, !W && 0 < K && (ht += 1 << K);
                                    n: {
                                        var At, Nt = ht,
                                            Lt = Y,
                                            Pt = pt,
                                            Ft = gt,
                                            Ct = G,
                                            jt = 0,
                                            Bt = Lt.m,
                                            Et = w(Bt, 1);
                                        if (i(Pt, 0, 0, Nt), Et) {
                                            var Ot = w(Bt, 1) + 1,
                                                Mt = w(Bt, 1),
                                                qt = w(Bt, 0 == Mt ? 1 : 8);
                                            Pt[qt] = 1, 2 == Ot && (Pt[qt = w(Bt, 8)] = 1);
                                            var Rt = 1
                                        } else {
                                            var Tt = a(19),
                                                Dt = w(Bt, 4) + 4;
                                            if (19 < Dt) { Lt.a = 3; var zt = 0; break n }
                                            for (At = 0; At < Dt; ++At) Tt[Zn[At]] = w(Bt, 3);
                                            var Ut = void 0,
                                                Ht = void 0,
                                                Vt = Lt,
                                                Wt = Tt,
                                                Gt = Nt,
                                                Yt = Pt,
                                                Jt = 0,
                                                Xt = Vt.m,
                                                Kt = 8,
                                                Zt = o(128, l);
                                            i: for (; c(Zt, 0, 7, Wt, 19);) {
                                                if (w(Xt, 1)) { var $t = 2 + 2 * w(Xt, 3); if ((Ut = 2 + w(Xt, $t)) > Gt) break i } else Ut = Gt;
                                                for (Ht = 0; Ht < Gt && Ut--;) {
                                                    L(Xt);
                                                    var Qt = Zt[0 + (127 & x(Xt))];
                                                    N(Xt, Xt.u + Qt.g);
                                                    var te = Qt.value;
                                                    if (16 > te) Yt[Ht++] = te, 0 != te && (Kt = te);
                                                    else {
                                                        var ee = 16 == te,
                                                            re = te - 16,
                                                            ne = Jn[re],
                                                            ie = w(Xt, Yn[re]) + ne;
                                                        if (Ht + ie > Gt) break i;
                                                        for (var ae = ee ? Kt : 0; 0 < ie--;) Yt[Ht++] = ae
                                                    }
                                                }
                                                Jt = 1;
                                                break i
                                            }
                                            Jt || (Vt.a = 3), Rt = Jt
                                        }(Rt = Rt && !Bt.h) && (jt = c(Ft, Ct, 8, Pt, Nt)),
                                        Rt && 0 != jt ? zt = jt : (Lt.a = 3, zt = 0)
                                    }
                                    if (0 == zt) break r;
                                    if (_t && 1 == Kn[W] && (_t = 0 == gt[G].g), yt += gt[G].g, G += zt, 3 >= W) {
                                        var oe, se = pt[0];
                                        for (oe = 1; oe < ht; ++oe) pt[oe] > se && (se = pt[oe]);
                                        xt += se
                                    }
                                }
                                if (mt.nd = _t, mt.Qb = 0, _t && (mt.qb = (bt[3][vt[3] + 0].value << 24 | bt[1][vt[1] + 0].value << 16 | bt[2][vt[2] + 0].value) >>> 0, 0 == yt && 256 > bt[0][vt[0] + 0].value && (mt.Qb = 1, mt.qb += bt[0][vt[0] + 0].value << 8)), mt.jc = !mt.Qb && 6 > xt, mt.jc) {
                                    var ue, he = mt;
                                    for (ue = 0; ue < Rr; ++ue) {
                                        var ce = ue,
                                            le = he.pd[ce],
                                            fe = he.G[0][he.H[0] + ce];
                                        256 <= fe.value ? (le.g = fe.g + 256, le.value = fe.value) : (le.g = 0, le.value = 0, ce >>= wt(fe, 8, le), ce >>= wt(he.G[1][he.H[1] + ce], 16, le), ce >>= wt(he.G[2][he.H[2] + ce], 0, le), wt(he.G[3][he.H[3] + ce], 24, le))
                                    }
                                }
                            }
                            Q.vc = tt, Q.Wb = et, Q.Ya = dt, Q.yc = ct, H = 1;
                            break e
                        }
                        H = 0
                    }
                    if (!(h = H)) { s.a = 3; break t }
                    if (0 < v) { if (m.ua = 1 << v, !B(m.Wa, v)) { s.a = 1, h = 0; break t } } else m.ua = 0;
                    var de = s,
                        pe = f,
                        ge = p,
                        me = de.s,
                        be = me.xc;
                    if (de.c = pe, de.i = ge, me.md = q(pe, be), me.wc = 0 == be ? -1 : (1 << be) - 1, n) { s.xb = pi; break t }
                    if (null == (b = a(f * p))) { s.a = 1, h = 0; break t }
                    h = (h = St(s, b, 0, f, p, p, null)) && !g.h;
                    break t
                }
                return h ? (null != u ? u[0] = b : (e(null == b), e(n)), s.$ = 0, n || kt(m)) : kt(m), h
            }

            function Ft(t, r) {
                var n = t.c * t.i,
                    i = n + r + 16 * r;
                return e(t.c <= r), t.V = a(i), null == t.V ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + n + r, 1)
            }

            function Ct(t, r) {
                var n = t.C,
                    i = r - n,
                    a = t.V,
                    o = t.Ba + t.c * n;
                for (e(r <= t.l.o); 0 < i;) {
                    var s = 16 < i ? 16 : i,
                        u = t.l.ma,
                        h = t.l.width,
                        c = h * s,
                        l = u.ca,
                        f = u.tb + h * n,
                        d = t.Ta,
                        p = t.Ua;
                    _t(t, s, a, o), Sn(d, p, l, f, c), Nt(u, n, n + s, l, f, h), i -= s, a += s * t.c, n += s
                }
                e(n == r), t.C = t.Ma = r
            }

            function jt() { this.ub = this.yd = this.td = this.Rb = 0 }

            function Bt() { this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0 }

            function Et() { this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4) }

            function Ot() { this.Yb = function() { var t = []; return function t(e, r, n) { for (var i = n[r], a = 0; a < i && (e.push(n.length > r + 1 ? [] : 0), !(n.length < r + 1)); a++) t(e[a], r + 1, n) }(t, 0, [3, 11]), t }() }

            function Mt() { this.jb = a(3), this.Wc = s([4, 8], Ot), this.Xc = s([4, 17], Ot) }

            function qt() { this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4) }

            function Rt() { this.ld = this.La = this.dd = this.tc = 0 }

            function Tt() { this.Na = this.la = 0 }

            function Dt() { this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0 }

            function zt() { this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0 }

            function Ut() { this.uc = this.M = this.Nb = 0, this.wa = Array(new Rt), this.Y = 0, this.ya = Array(new zt), this.aa = 0, this.l = new Gt }

            function Ht() { this.y = a(16), this.f = a(8), this.ea = a(8) }

            function Vt() { this.cb = this.a = 0, this.sc = "", this.m = new y, this.Od = new jt, this.Kc = new Bt, this.ed = new qt, this.Qa = new Et, this.Ic = this.$c = this.Aa = 0, this.D = new Ut, this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o(8, y), this.ia = 0, this.pb = o(4, Dt), this.Pa = new Mt, this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Ht), this.Hd = 0, this.rb = Array(new Tt), this.sb = 0, this.wa = Array(new Rt), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new zt), this.L = this.aa = 0, this.gd = s([4, 2], Rt), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0 }

            function Wt(t, e) { return 0 > t ? 0 : t > e ? e : t }

            function Gt() { this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0 }

            function Yt() { var t = new Vt; return null != t && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, ni || (ni = Zt)), t }

            function Jt(t, e, r) { return 0 == t.a && (t.a = e, t.sc = r, t.cb = 0), 0 }

            function Xt(t, e, r) { return 3 <= r && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2] }

            function Kt(t, r) {
                if (null == t) return 0;
                if (t.a = 0, t.sc = "OK", null == r) return Jt(t, 2, "null VP8Io passed to VP8GetHeaders()");
                var n = r.data,
                    a = r.w,
                    o = r.ha;
                if (4 > o) return Jt(t, 7, "Truncated header.");
                var s = n[a + 0] | n[a + 1] << 8 | n[a + 2] << 16,
                    u = t.Od;
                if (u.Rb = !(1 & s), u.td = s >> 1 & 7, u.yd = s >> 4 & 1, u.ub = s >> 5, 3 < u.td) return Jt(t, 3, "Incorrect keyframe parameters.");
                if (!u.yd) return Jt(t, 4, "Frame not displayable.");
                a += 3, o -= 3;
                var h = t.Kc;
                if (u.Rb) {
                    if (7 > o) return Jt(t, 7, "cannot parse picture header");
                    if (!Xt(n, a, o)) return Jt(t, 3, "Bad code word");
                    h.c = 16383 & (n[a + 4] << 8 | n[a + 3]), h.Td = n[a + 4] >> 6, h.i = 16383 & (n[a + 6] << 8 | n[a + 5]), h.Ud = n[a + 6] >> 6, a += 7, o -= 7, t.za = h.c + 15 >> 4, t.Ub = h.i + 15 >> 4, r.width = h.c, r.height = h.i, r.Da = 0, r.j = 0, r.v = 0, r.va = r.width, r.o = r.height, r.da = 0, r.ib = r.width, r.hb = r.height, r.U = r.width, r.T = r.height, i((s = t.Pa).jb, 0, 255, s.jb.length), e(null != (s = t.Qa)), s.Cb = 0, s.Bb = 0, s.Fb = 1, i(s.Zb, 0, 0, s.Zb.length), i(s.Lb, 0, 0, s.Lb)
                }
                if (u.ub > o) return Jt(t, 7, "bad partition length");
                p(s = t.m, n, a, u.ub), a += u.ub, o -= u.ub, u.Rb && (h.Ld = k(s), h.Kd = k(s)), h = t.Qa;
                var c, l = t.Pa;
                if (e(null != s), e(null != h), h.Cb = k(s), h.Cb) {
                    if (h.Bb = k(s), k(s)) { for (h.Fb = k(s), c = 0; 4 > c; ++c) h.Zb[c] = k(s) ? m(s, 7) : 0; for (c = 0; 4 > c; ++c) h.Lb[c] = k(s) ? m(s, 6) : 0 }
                    if (h.Bb)
                        for (c = 0; 3 > c; ++c) l.jb[c] = k(s) ? g(s, 8) : 255
                } else h.Bb = 0;
                if (s.Ka) return Jt(t, 3, "cannot parse segment header");
                if ((h = t.ed).zd = k(s), h.Tb = g(s, 6), h.wb = g(s, 3), h.Pc = k(s), h.Pc && k(s)) { for (l = 0; 4 > l; ++l) k(s) && (h.vd[l] = m(s, 6)); for (l = 0; 4 > l; ++l) k(s) && (h.od[l] = m(s, 6)) }
                if (t.L = 0 == h.Tb ? 0 : h.zd ? 1 : 2, s.Ka) return Jt(t, 3, "cannot parse filter header");
                var f = o;
                if (o = c = a, a = c + f, h = f, t.Xb = (1 << g(t.m, 2)) - 1, f < 3 * (l = t.Xb)) n = 7;
                else {
                    for (c += 3 * l, h -= 3 * l, f = 0; f < l; ++f) {
                        var d = n[o + 0] | n[o + 1] << 8 | n[o + 2] << 16;
                        d > h && (d = h), p(t.Jc[+f], n, c, d), c += d, h -= d, o += 3
                    }
                    p(t.Jc[+l], n, c, h), n = c < a ? 0 : 5
                }
                if (0 != n) return Jt(t, n, "cannot parse partitions");
                for (n = g(c = t.m, 7), o = k(c) ? m(c, 4) : 0, a = k(c) ? m(c, 4) : 0, h = k(c) ? m(c, 4) : 0, l = k(c) ? m(c, 4) : 0, c = k(c) ? m(c, 4) : 0, f = t.Qa, d = 0; 4 > d; ++d) {
                    if (f.Cb) {
                        var b = f.Zb[d];
                        f.Fb || (b += n)
                    } else {
                        if (0 < d) { t.pb[d] = t.pb[0]; continue }
                        b = n
                    }
                    var v = t.pb[d];
                    v.Sc[0] = ei[Wt(b + o, 127)], v.Sc[1] = ri[Wt(b + 0, 127)], v.Eb[0] = 2 * ei[Wt(b + a, 127)], v.Eb[1] = 101581 * ri[Wt(b + h, 127)] >> 16, 8 > v.Eb[1] && (v.Eb[1] = 8), v.Qc[0] = ei[Wt(b + l, 117)], v.Qc[1] = ri[Wt(b + c, 127)], v.lc = b + c
                }
                if (!u.Rb) return Jt(t, 4, "Not a key frame.");
                for (k(s), u = t.Pa, n = 0; 4 > n; ++n) {
                    for (o = 0; 8 > o; ++o)
                        for (a = 0; 3 > a; ++a)
                            for (h = 0; 11 > h; ++h) l = P(s, hi[n][o][a][h]) ? g(s, 8) : si[n][o][a][h], u.Wc[n][o].Yb[a][h] = l;
                    for (o = 0; 17 > o; ++o) u.Xc[n][o] = u.Wc[n][ci[o]]
                }
                return t.kc = k(s), t.kc && (t.Bd = g(s, 8)), t.cb = 1
            }

            function Zt(t, e, r, n, i, a, o) {
                var s = e[i].Yb[r];
                for (r = 0; 16 > i; ++i) {
                    if (!P(t, s[r + 0])) return i;
                    for (; !P(t, s[r + 1]);)
                        if (s = e[++i].Yb[0], r = 0, 16 == i) return 16;
                    var u = e[i + 1].Yb;
                    if (P(t, s[r + 2])) {
                        var h = t,
                            c = 0;
                        if (P(h, (f = s)[(l = r) + 3]))
                            if (P(h, f[l + 6])) {
                                for (s = 0, l = 2 * (c = P(h, f[l + 8])) + (f = P(h, f[l + 9 + c])), c = 0, f = ii[l]; f[s]; ++s) c += c + P(h, f[s]);
                                c += 3 + (8 << l)
                            } else P(h, f[l + 7]) ? (c = 7 + 2 * P(h, 165), c += P(h, 145)) : c = 5 + P(h, 159);
                        else c = P(h, f[l + 4]) ? 3 + P(h, f[l + 5]) : 2;
                        s = u[2]
                    } else c = 1, s = u[1];
                    u = o + ai[i], 0 > (h = t).b && S(h);
                    var l, f = h.b,
                        d = (l = h.Ca >> 1) - (h.I >> f) >> 31;
                    --h.b, h.Ca += d, h.Ca |= 1, h.I -= (l + 1 & d) << f, a[u] = ((c ^ d) - d) * n[(0 < i) + 0]
                }
                return 16
            }

            function $t(t) {
                var e = t.rb[t.sb - 1];
                e.la = 0, e.Na = 0, i(t.zc, 0, 0, t.zc.length), t.ja = 0
            }

            function Qt(t, r) {
                if (null == t) return 0;
                if (null == r) return Jt(t, 2, "NULL VP8Io parameter in VP8Decode().");
                if (!t.cb && !Kt(t, r)) return 0;
                if (e(t.cb), null == r.ac || r.ac(r)) {
                    r.ob && (t.L = 0);
                    var s = Ti[t.L];
                    if (2 == t.L ? (t.yb = 0, t.zb = 0) : (t.yb = r.v - s >> 4, t.zb = r.j - s >> 4, 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)), t.Va = r.o + 15 + s >> 4, t.Hb = r.va + 15 + s >> 4, t.Hb > t.za && (t.Hb = t.za), t.Va > t.Ub && (t.Va = t.Ub), 0 < t.L) {
                        var u = t.ed;
                        for (s = 0; 4 > s; ++s) {
                            var h;
                            if (t.Qa.Cb) {
                                var c = t.Qa.Lb[s];
                                t.Qa.Fb || (c += u.Tb)
                            } else c = u.Tb;
                            for (h = 0; 1 >= h; ++h) {
                                var l = t.gd[s][h],
                                    f = c;
                                if (u.Pc && (f += u.vd[0], h && (f += u.od[0])), 0 < (f = 0 > f ? 0 : 63 < f ? 63 : f)) {
                                    var d = f;
                                    0 < u.wb && ((d = 4 < u.wb ? d >> 2 : d >> 1) > 9 - u.wb && (d = 9 - u.wb)), 1 > d && (d = 1), l.dd = d, l.tc = 2 * f + d, l.ld = 40 <= f ? 2 : 15 <= f ? 1 : 0
                                } else l.tc = 0;
                                l.La = h
                            }
                        }
                    }
                    s = 0
                } else Jt(t, 6, "Frame setup failed"), s = t.a;
                if (s = 0 == s) {
                    if (s) {
                        t.$c = 0, 0 < t.Aa || (t.Ic = zi);
                        t: {
                            s = t.Ic;u = 4 * (d = t.za);
                            var p = 32 * d,
                                g = d + 1,
                                m = 0 < t.L ? d * (0 < t.Aa ? 2 : 1) : 0,
                                b = (2 == t.Aa ? 2 : 1) * d;
                            if ((l = u + 832 + (h = 3 * (16 * s + Ti[t.L]) / 2 * p) + (c = null != t.Fa && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != l) s = 0;
                            else {
                                if (l > t.Vb) {
                                    if (t.Vb = 0, t.Ec = a(l), t.Fc = 0, null == t.Ec) { s = Jt(t, 1, "no memory during frame initialization."); break t }
                                    t.Vb = l
                                }
                                l = t.Ec, f = t.Fc, t.Ac = l, t.Bc = f, f += u, t.Gd = o(p, Ht), t.Hd = 0, t.rb = o(g + 1, Tt), t.sb = 1, t.wa = m ? o(m, Rt) : null, t.Y = 0, t.D.Nb = 0, t.D.wa = t.wa, t.D.Y = t.Y, 0 < t.Aa && (t.D.Y += d), e(!0), t.oc = l, t.pc = f, f += 832, t.ya = o(b, zt), t.aa = 0, t.D.ya = t.ya, t.D.aa = t.aa, 2 == t.Aa && (t.D.aa += d), t.R = 16 * d, t.B = 8 * d, d = (p = Ti[t.L]) * t.R, p = p / 2 * t.B, t.sa = l, t.ta = f + d, t.qa = t.sa, t.ra = t.ta + 16 * s * t.R + p, t.Ha = t.qa, t.Ia = t.ra + 8 * s * t.B + p, t.$c = 0, f += h, t.mb = c ? l : null, t.nb = c ? f : null, e(f + c <= t.Fc + t.Vb), $t(t), i(t.Ac, t.Bc, 0, u), s = 1
                            }
                        }
                        if (s) {
                            if (r.ka = 0, r.y = t.sa, r.O = t.ta, r.f = t.qa, r.N = t.ra, r.ea = t.Ha, r.Vd = t.Ia, r.fa = t.R, r.Rc = t.B, r.F = null, r.J = 0, !Cn) {
                                for (s = -255; 255 >= s; ++s) kn[255 + s] = 0 > s ? -s : s;
                                for (s = -1020; 1020 >= s; ++s) Pn[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
                                for (s = -112; 112 >= s; ++s) In[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
                                for (s = -255; 510 >= s; ++s) Fn[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
                                Cn = 1
                            }
                            an = he, on = ae, un = oe, hn = se, cn = ue, sn = ie, ln = Je, fn = Xe, dn = $e, pn = Qe, gn = Ke, mn = Ze, bn = tr, vn = er, wn = Ue, yn = He, _n = Ve, xn = We, fi[0] = Ne, fi[1] = le, fi[2] = xe, fi[3] = Ae, fi[4] = Le, fi[5] = ke, fi[6] = Se, fi[7] = Pe, fi[8] = Fe, fi[9] = Ie, li[0] = be, li[1] = de, li[2] = pe, li[3] = ge, li[4] = ve, li[5] = we, li[6] = ye, di[0] = Ee, di[1] = fe, di[2] = Ce, di[3] = je, di[4] = Me, di[5] = Oe, di[6] = qe, s = 1
                        } else s = 0
                    }
                    s && (s = function(t, r) {
                        for (t.M = 0; t.M < t.Va; ++t.M) {
                            var o, s = t.Jc[t.M & t.Xb],
                                u = t.m,
                                h = t;
                            for (o = 0; o < h.za; ++o) {
                                var c = u,
                                    l = h,
                                    f = l.Ac,
                                    d = l.Bc + 4 * o,
                                    p = l.zc,
                                    g = l.ya[l.aa + o];
                                if (l.Qa.Bb ? g.$b = P(c, l.Pa.jb[0]) ? 2 + P(c, l.Pa.jb[2]) : P(c, l.Pa.jb[1]) : g.$b = 0, l.kc && (g.Ad = P(c, l.Bd)), g.Za = !P(c, 145) + 0, g.Za) {
                                    var m = g.Ob,
                                        b = 0;
                                    for (l = 0; 4 > l; ++l) {
                                        var v, w = p[0 + l];
                                        for (v = 0; 4 > v; ++v) {
                                            w = ui[f[d + v]][w];
                                            for (var y = oi[P(c, w[0])]; 0 < y;) y = oi[2 * y + P(c, w[y])];
                                            w = -y, f[d + v] = w
                                        }
                                        n(m, b, f, d, 4), b += 4, p[0 + l] = w
                                    }
                                } else w = P(c, 156) ? P(c, 128) ? 1 : 3 : P(c, 163) ? 2 : 0, g.Ob[0] = w, i(f, d, w, 4), i(p, 0, w, 4);
                                g.Dd = P(c, 142) ? P(c, 114) ? P(c, 183) ? 1 : 3 : 2 : 0
                            }
                            if (h.m.Ka) return Jt(t, 7, "Premature end-of-partition0 encountered.");
                            for (; t.ja < t.za; ++t.ja) {
                                if (h = s, c = (u = t).rb[u.sb - 1], f = u.rb[u.sb + u.ja], o = u.ya[u.aa + u.ja], d = u.kc ? o.Ad : 0) c.la = f.la = 0, o.Za || (c.Na = f.Na = 0), o.Hc = 0, o.Gc = 0, o.ia = 0;
                                else {
                                    var _, x;
                                    c = f, f = h, d = u.Pa.Xc, p = u.ya[u.aa + u.ja], g = u.pb[p.$b];
                                    if (l = p.ad, m = 0, b = u.rb[u.sb - 1], w = v = 0, i(l, m, 0, 384), p.Za) var A = 0,
                                        N = d[3];
                                    else {
                                        y = a(16);
                                        var L = c.Na + b.Na;
                                        if (L = ni(f, d[1], L, g.Eb, 0, y, 0), c.Na = b.Na = (0 < L) + 0, 1 < L) an(y, 0, l, m);
                                        else { var S = y[0] + 3 >> 3; for (y = 0; 256 > y; y += 16) l[m + y] = S }
                                        A = 1, N = d[0]
                                    }
                                    var k = 15 & c.la,
                                        I = 15 & b.la;
                                    for (y = 0; 4 > y; ++y) {
                                        var F = 1 & I;
                                        for (S = x = 0; 4 > S; ++S) k = k >> 1 | (F = (L = ni(f, N, L = F + (1 & k), g.Sc, A, l, m)) > A) << 7, x = x << 2 | (3 < L ? 3 : 1 < L ? 2 : 0 != l[m + 0]), m += 16;
                                        k >>= 4, I = I >> 1 | F << 7, v = (v << 8 | x) >>> 0
                                    }
                                    for (N = k, A = I >> 4, _ = 0; 4 > _; _ += 2) {
                                        for (x = 0, k = c.la >> 4 + _, I = b.la >> 4 + _, y = 0; 2 > y; ++y) {
                                            for (F = 1 & I, S = 0; 2 > S; ++S) L = F + (1 & k), k = k >> 1 | (F = 0 < (L = ni(f, d[2], L, g.Qc, 0, l, m))) << 3, x = x << 2 | (3 < L ? 3 : 1 < L ? 2 : 0 != l[m + 0]), m += 16;
                                            k >>= 2, I = I >> 1 | F << 5
                                        }
                                        w |= x << 4 * _, N |= k << 4 << _, A |= (240 & I) << _
                                    }
                                    c.la = N, b.la = A, p.Hc = v, p.Gc = w, p.ia = 43690 & w ? 0 : g.ia, d = !(v | w)
                                }
                                if (0 < u.L && (u.wa[u.Y + u.ja] = u.gd[o.$b][o.Za], u.wa[u.Y + u.ja].La |= !d), h.Ka) return Jt(t, 7, "Premature end-of-file encountered.")
                            }
                            if ($t(t), u = r, h = 1, o = (s = t).D, c = 0 < s.L && s.M >= s.zb && s.M <= s.Va, 0 == s.Aa) t: {
                                if (o.M = s.M, o.uc = c, Br(s, o), h = 1, o = (x = s.D).Nb, c = (w = Ti[s.L]) * s.R, f = w / 2 * s.B, y = 16 * o * s.R, S = 8 * o * s.B, d = s.sa, p = s.ta - c + y, g = s.qa, l = s.ra - f + S, m = s.Ha, b = s.Ia - f + S, I = 0 == (k = x.M), v = k >= s.Va - 1, 2 == s.Aa && Br(s, x), x.uc)
                                    for (F = (L = s).D.M, e(L.D.uc), x = L.yb; x < L.Hb; ++x) {
                                        A = x, N = F;
                                        var C = (j = (z = L).D).Nb;
                                        _ = z.R;
                                        var j = j.wa[j.Y + A],
                                            B = z.sa,
                                            E = z.ta + 16 * C * _ + 16 * A,
                                            O = j.dd,
                                            M = j.tc;
                                        if (0 != M)
                                            if (e(3 <= M), 1 == z.L) 0 < A && yn(B, E, _, M + 4), j.La && xn(B, E, _, M), 0 < N && wn(B, E, _, M + 4), j.La && _n(B, E, _, M);
                                            else {
                                                var q = z.B,
                                                    R = z.qa,
                                                    T = z.ra + 8 * C * q + 8 * A,
                                                    D = z.Ha,
                                                    z = z.Ia + 8 * C * q + 8 * A;
                                                C = j.ld;
                                                0 < A && (fn(B, E, _, M + 4, O, C), pn(R, T, D, z, q, M + 4, O, C)), j.La && (mn(B, E, _, M, O, C), vn(R, T, D, z, q, M, O, C)), 0 < N && (ln(B, E, _, M + 4, O, C), dn(R, T, D, z, q, M + 4, O, C)), j.La && (gn(B, E, _, M, O, C), bn(R, T, D, z, q, M, O, C))
                                            }
                                    }
                                if (s.ia && alert("todo:DitherRow"), null != u.put) {
                                    if (x = 16 * k, k = 16 * (k + 1), I ? (u.y = s.sa, u.O = s.ta + y, u.f = s.qa, u.N = s.ra + S, u.ea = s.Ha, u.W = s.Ia + S) : (x -= w, u.y = d, u.O = p, u.f = g, u.N = l, u.ea = m, u.W = b), v || (k -= w), k > u.o && (k = u.o), u.F = null, u.J = null, null != s.Fa && 0 < s.Fa.length && x < k && (u.J = lr(s, u, x, k - x), u.F = s.mb, null == u.F && 0 == u.F.length)) { h = Jt(s, 3, "Could not decode alpha data."); break t }
                                    x < u.j && (w = u.j - x, x = u.j, e(!(1 & w)), u.O += s.R * w, u.N += s.B * (w >> 1), u.W += s.B * (w >> 1), null != u.F && (u.J += u.width * w)), x < k && (u.O += u.v, u.N += u.v >> 1, u.W += u.v >> 1, null != u.F && (u.J += u.v), u.ka = x - u.j, u.U = u.va - u.v, u.T = k - x, h = u.put(u))
                                }
                                o + 1 != s.Ic || v || (n(s.sa, s.ta - c, d, p + 16 * s.R, c), n(s.qa, s.ra - f, g, l + 8 * s.B, f), n(s.Ha, s.Ia - f, m, b + 8 * s.B, f))
                            }
                            if (!h) return Jt(t, 6, "Output aborted.")
                        }
                        return 1
                    }(t, r)), null != r.bc && r.bc(r), s &= 1
                }
                return s ? (t.cb = 0, s) : 0
            }

            function te(t, e, r, n, i) { i = t[e + r + 32 * n] + (i >> 3), t[e + r + 32 * n] = -256 & i ? 0 > i ? 0 : 255 : i }

            function ee(t, e, r, n, i, a) { te(t, e, 0, r, n + i), te(t, e, 1, r, n + a), te(t, e, 2, r, n - a), te(t, e, 3, r, n - i) }

            function re(t) { return (20091 * t >> 16) + t }

            function ne(t, e, r, n) {
                var i, o = 0,
                    s = a(16);
                for (i = 0; 4 > i; ++i) {
                    var u = t[e + 0] + t[e + 8],
                        h = t[e + 0] - t[e + 8],
                        c = (35468 * t[e + 4] >> 16) - re(t[e + 12]),
                        l = re(t[e + 4]) + (35468 * t[e + 12] >> 16);
                    s[o + 0] = u + l, s[o + 1] = h + c, s[o + 2] = h - c, s[o + 3] = u - l, o += 4, e++
                }
                for (i = o = 0; 4 > i; ++i) u = (t = s[o + 0] + 4) + s[o + 8], h = t - s[o + 8], c = (35468 * s[o + 4] >> 16) - re(s[o + 12]), te(r, n, 0, 0, u + (l = re(s[o + 4]) + (35468 * s[o + 12] >> 16))), te(r, n, 1, 0, h + c), te(r, n, 2, 0, h - c), te(r, n, 3, 0, u - l), o++, n += 32
            }

            function ie(t, e, r, n) {
                var i = t[e + 0] + 4,
                    a = 35468 * t[e + 4] >> 16,
                    o = re(t[e + 4]),
                    s = 35468 * t[e + 1] >> 16;
                ee(r, n, 0, i + o, t = re(t[e + 1]), s), ee(r, n, 1, i + a, t, s), ee(r, n, 2, i - a, t, s), ee(r, n, 3, i - o, t, s)
            }

            function ae(t, e, r, n, i) { ne(t, e, r, n), i && ne(t, e + 16, r, n + 4) }

            function oe(t, e, r, n) { on(t, e + 0, r, n, 1), on(t, e + 32, r, n + 128, 1) }

            function se(t, e, r, n) {
                var i;
                for (t = t[e + 0] + 4, i = 0; 4 > i; ++i)
                    for (e = 0; 4 > e; ++e) te(r, n, e, i, t)
            }

            function ue(t, e, r, n) { t[e + 0] && hn(t, e + 0, r, n), t[e + 16] && hn(t, e + 16, r, n + 4), t[e + 32] && hn(t, e + 32, r, n + 128), t[e + 48] && hn(t, e + 48, r, n + 128 + 4) }

            function he(t, e, r, n) {
                var i, o = a(16);
                for (i = 0; 4 > i; ++i) {
                    var s = t[e + 0 + i] + t[e + 12 + i],
                        u = t[e + 4 + i] + t[e + 8 + i],
                        h = t[e + 4 + i] - t[e + 8 + i],
                        c = t[e + 0 + i] - t[e + 12 + i];
                    o[0 + i] = s + u, o[8 + i] = s - u, o[4 + i] = c + h, o[12 + i] = c - h
                }
                for (i = 0; 4 > i; ++i) s = (t = o[0 + 4 * i] + 3) + o[3 + 4 * i], u = o[1 + 4 * i] + o[2 + 4 * i], h = o[1 + 4 * i] - o[2 + 4 * i], c = t - o[3 + 4 * i], r[n + 0] = s + u >> 3, r[n + 16] = c + h >> 3, r[n + 32] = s - u >> 3, r[n + 48] = c - h >> 3, n += 64
            }

            function ce(t, e, r) {
                var n, i = e - 32,
                    a = En,
                    o = 255 - t[i - 1];
                for (n = 0; n < r; ++n) {
                    var s, u = a,
                        h = o + t[e - 1];
                    for (s = 0; s < r; ++s) t[e + s] = u[h + t[i + s]];
                    e += 32
                }
            }

            function le(t, e) { ce(t, e, 4) }

            function fe(t, e) { ce(t, e, 8) }

            function de(t, e) { ce(t, e, 16) }

            function pe(t, e) { var r; for (r = 0; 16 > r; ++r) n(t, e + 32 * r, t, e - 32, 16) }

            function ge(t, e) { var r; for (r = 16; 0 < r; --r) i(t, e, t[e - 1], 16), e += 32 }

            function me(t, e, r) { var n; for (n = 0; 16 > n; ++n) i(e, r + 32 * n, t, 16) }

            function be(t, e) {
                var r, n = 16;
                for (r = 0; 16 > r; ++r) n += t[e - 1 + 32 * r] + t[e + r - 32];
                me(n >> 5, t, e)
            }

            function ve(t, e) {
                var r, n = 8;
                for (r = 0; 16 > r; ++r) n += t[e - 1 + 32 * r];
                me(n >> 4, t, e)
            }

            function we(t, e) {
                var r, n = 8;
                for (r = 0; 16 > r; ++r) n += t[e + r - 32];
                me(n >> 4, t, e)
            }

            function ye(t, e) { me(128, t, e) }

            function _e(t, e, r) { return t + 2 * e + r + 2 >> 2 }

            function xe(t, e) {
                var r, i = e - 32;
                i = new Uint8Array([_e(t[i - 1], t[i + 0], t[i + 1]), _e(t[i + 0], t[i + 1], t[i + 2]), _e(t[i + 1], t[i + 2], t[i + 3]), _e(t[i + 2], t[i + 3], t[i + 4])]);
                for (r = 0; 4 > r; ++r) n(t, e + 32 * r, i, 0, i.length)
            }

            function Ae(t, e) {
                var r = t[e - 1],
                    n = t[e - 1 + 32],
                    i = t[e - 1 + 64],
                    a = t[e - 1 + 96];
                I(t, e + 0, 16843009 * _e(t[e - 1 - 32], r, n)), I(t, e + 32, 16843009 * _e(r, n, i)), I(t, e + 64, 16843009 * _e(n, i, a)), I(t, e + 96, 16843009 * _e(i, a, a))
            }

            function Ne(t, e) { var r, n = 4; for (r = 0; 4 > r; ++r) n += t[e + r - 32] + t[e - 1 + 32 * r]; for (n >>= 3, r = 0; 4 > r; ++r) i(t, e + 32 * r, n, 4) }

            function Le(t, e) {
                var r = t[e - 1 + 0],
                    n = t[e - 1 + 32],
                    i = t[e - 1 + 64],
                    a = t[e - 1 - 32],
                    o = t[e + 0 - 32],
                    s = t[e + 1 - 32],
                    u = t[e + 2 - 32],
                    h = t[e + 3 - 32];
                t[e + 0 + 96] = _e(n, i, t[e - 1 + 96]), t[e + 1 + 96] = t[e + 0 + 64] = _e(r, n, i), t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = _e(a, r, n), t[e + 3 + 96] = t[e + 2 + 64] = t[e + 1 + 32] = t[e + 0 + 0] = _e(o, a, r), t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = _e(s, o, a), t[e + 3 + 32] = t[e + 2 + 0] = _e(u, s, o), t[e + 3 + 0] = _e(h, u, s)
            }

            function Se(t, e) {
                var r = t[e + 1 - 32],
                    n = t[e + 2 - 32],
                    i = t[e + 3 - 32],
                    a = t[e + 4 - 32],
                    o = t[e + 5 - 32],
                    s = t[e + 6 - 32],
                    u = t[e + 7 - 32];
                t[e + 0 + 0] = _e(t[e + 0 - 32], r, n), t[e + 1 + 0] = t[e + 0 + 32] = _e(r, n, i), t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = _e(n, i, a), t[e + 3 + 0] = t[e + 2 + 32] = t[e + 1 + 64] = t[e + 0 + 96] = _e(i, a, o), t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = _e(a, o, s), t[e + 3 + 64] = t[e + 2 + 96] = _e(o, s, u), t[e + 3 + 96] = _e(s, u, u)
            }

            function ke(t, e) {
                var r = t[e - 1 + 0],
                    n = t[e - 1 + 32],
                    i = t[e - 1 + 64],
                    a = t[e - 1 - 32],
                    o = t[e + 0 - 32],
                    s = t[e + 1 - 32],
                    u = t[e + 2 - 32],
                    h = t[e + 3 - 32];
                t[e + 0 + 0] = t[e + 1 + 64] = a + o + 1 >> 1, t[e + 1 + 0] = t[e + 2 + 64] = o + s + 1 >> 1, t[e + 2 + 0] = t[e + 3 + 64] = s + u + 1 >> 1, t[e + 3 + 0] = u + h + 1 >> 1, t[e + 0 + 96] = _e(i, n, r), t[e + 0 + 64] = _e(n, r, a), t[e + 0 + 32] = t[e + 1 + 96] = _e(r, a, o), t[e + 1 + 32] = t[e + 2 + 96] = _e(a, o, s), t[e + 2 + 32] = t[e + 3 + 96] = _e(o, s, u), t[e + 3 + 32] = _e(s, u, h)
            }

            function Pe(t, e) {
                var r = t[e + 0 - 32],
                    n = t[e + 1 - 32],
                    i = t[e + 2 - 32],
                    a = t[e + 3 - 32],
                    o = t[e + 4 - 32],
                    s = t[e + 5 - 32],
                    u = t[e + 6 - 32],
                    h = t[e + 7 - 32];
                t[e + 0 + 0] = r + n + 1 >> 1, t[e + 1 + 0] = t[e + 0 + 64] = n + i + 1 >> 1, t[e + 2 + 0] = t[e + 1 + 64] = i + a + 1 >> 1, t[e + 3 + 0] = t[e + 2 + 64] = a + o + 1 >> 1, t[e + 0 + 32] = _e(r, n, i), t[e + 1 + 32] = t[e + 0 + 96] = _e(n, i, a), t[e + 2 + 32] = t[e + 1 + 96] = _e(i, a, o), t[e + 3 + 32] = t[e + 2 + 96] = _e(a, o, s), t[e + 3 + 64] = _e(o, s, u), t[e + 3 + 96] = _e(s, u, h)
            }

            function Ie(t, e) {
                var r = t[e - 1 + 0],
                    n = t[e - 1 + 32],
                    i = t[e - 1 + 64],
                    a = t[e - 1 + 96];
                t[e + 0 + 0] = r + n + 1 >> 1, t[e + 2 + 0] = t[e + 0 + 32] = n + i + 1 >> 1, t[e + 2 + 32] = t[e + 0 + 64] = i + a + 1 >> 1, t[e + 1 + 0] = _e(r, n, i), t[e + 3 + 0] = t[e + 1 + 32] = _e(n, i, a), t[e + 3 + 32] = t[e + 1 + 64] = _e(i, a, a), t[e + 3 + 64] = t[e + 2 + 64] = t[e + 0 + 96] = t[e + 1 + 96] = t[e + 2 + 96] = t[e + 3 + 96] = a
            }

            function Fe(t, e) {
                var r = t[e - 1 + 0],
                    n = t[e - 1 + 32],
                    i = t[e - 1 + 64],
                    a = t[e - 1 + 96],
                    o = t[e - 1 - 32],
                    s = t[e + 0 - 32],
                    u = t[e + 1 - 32],
                    h = t[e + 2 - 32];
                t[e + 0 + 0] = t[e + 2 + 32] = r + o + 1 >> 1, t[e + 0 + 32] = t[e + 2 + 64] = n + r + 1 >> 1, t[e + 0 + 64] = t[e + 2 + 96] = i + n + 1 >> 1, t[e + 0 + 96] = a + i + 1 >> 1, t[e + 3 + 0] = _e(s, u, h), t[e + 2 + 0] = _e(o, s, u), t[e + 1 + 0] = t[e + 3 + 32] = _e(r, o, s), t[e + 1 + 32] = t[e + 3 + 64] = _e(n, r, o), t[e + 1 + 64] = t[e + 3 + 96] = _e(i, n, r), t[e + 1 + 96] = _e(a, i, n)
            }

            function Ce(t, e) { var r; for (r = 0; 8 > r; ++r) n(t, e + 32 * r, t, e - 32, 8) }

            function je(t, e) { var r; for (r = 0; 8 > r; ++r) i(t, e, t[e - 1], 8), e += 32 }

            function Be(t, e, r) { var n; for (n = 0; 8 > n; ++n) i(e, r + 32 * n, t, 8) }

            function Ee(t, e) {
                var r, n = 8;
                for (r = 0; 8 > r; ++r) n += t[e + r - 32] + t[e - 1 + 32 * r];
                Be(n >> 4, t, e)
            }

            function Oe(t, e) {
                var r, n = 4;
                for (r = 0; 8 > r; ++r) n += t[e + r - 32];
                Be(n >> 3, t, e)
            }

            function Me(t, e) {
                var r, n = 4;
                for (r = 0; 8 > r; ++r) n += t[e - 1 + 32 * r];
                Be(n >> 3, t, e)
            }

            function qe(t, e) { Be(128, t, e) }

            function Re(t, e, r) {
                var n = t[e - r],
                    i = t[e + 0],
                    a = 3 * (i - n) + jn[1020 + t[e - 2 * r] - t[e + r]],
                    o = Bn[112 + (a + 4 >> 3)];
                t[e - r] = En[255 + n + Bn[112 + (a + 3 >> 3)]], t[e + 0] = En[255 + i - o]
            }

            function Te(t, e, r, n) {
                var i = t[e + 0],
                    a = t[e + r];
                return On[255 + t[e - 2 * r] - t[e - r]] > n || On[255 + a - i] > n
            }

            function De(t, e, r, n) { return 4 * On[255 + t[e - r] - t[e + 0]] + On[255 + t[e - 2 * r] - t[e + r]] <= n }

            function ze(t, e, r, n, i) {
                var a = t[e - 3 * r],
                    o = t[e - 2 * r],
                    s = t[e - r],
                    u = t[e + 0],
                    h = t[e + r],
                    c = t[e + 2 * r],
                    l = t[e + 3 * r];
                return 4 * On[255 + s - u] + On[255 + o - h] > n ? 0 : On[255 + t[e - 4 * r] - a] <= i && On[255 + a - o] <= i && On[255 + o - s] <= i && On[255 + l - c] <= i && On[255 + c - h] <= i && On[255 + h - u] <= i
            }

            function Ue(t, e, r, n) { var i = 2 * n + 1; for (n = 0; 16 > n; ++n) De(t, e + n, r, i) && Re(t, e + n, r) }

            function He(t, e, r, n) { var i = 2 * n + 1; for (n = 0; 16 > n; ++n) De(t, e + n * r, 1, i) && Re(t, e + n * r, 1) }

            function Ve(t, e, r, n) { var i; for (i = 3; 0 < i; --i) Ue(t, e += 4 * r, r, n) }

            function We(t, e, r, n) { var i; for (i = 3; 0 < i; --i) He(t, e += 4, r, n) }

            function Ge(t, e, r, n, i, a, o, s) {
                for (a = 2 * a + 1; 0 < i--;) {
                    if (ze(t, e, r, a, o))
                        if (Te(t, e, r, s)) Re(t, e, r);
                        else {
                            var u = t,
                                h = e,
                                c = r,
                                l = u[h - 2 * c],
                                f = u[h - c],
                                d = u[h + 0],
                                p = u[h + c],
                                g = u[h + 2 * c],
                                m = 27 * (v = jn[1020 + 3 * (d - f) + jn[1020 + l - p]]) + 63 >> 7,
                                b = 18 * v + 63 >> 7,
                                v = 9 * v + 63 >> 7;
                            u[h - 3 * c] = En[255 + u[h - 3 * c] + v], u[h - 2 * c] = En[255 + l + b], u[h - c] = En[255 + f + m], u[h + 0] = En[255 + d - m], u[h + c] = En[255 + p - b], u[h + 2 * c] = En[255 + g - v]
                        }
                    e += n
                }
            }

            function Ye(t, e, r, n, i, a, o, s) {
                for (a = 2 * a + 1; 0 < i--;) {
                    if (ze(t, e, r, a, o))
                        if (Te(t, e, r, s)) Re(t, e, r);
                        else {
                            var u = t,
                                h = e,
                                c = r,
                                l = u[h - c],
                                f = u[h + 0],
                                d = u[h + c],
                                p = Bn[112 + ((g = 3 * (f - l)) + 4 >> 3)],
                                g = Bn[112 + (g + 3 >> 3)],
                                m = p + 1 >> 1;
                            u[h - 2 * c] = En[255 + u[h - 2 * c] + m], u[h - c] = En[255 + l + g], u[h + 0] = En[255 + f - p], u[h + c] = En[255 + d - m]
                        }
                    e += n
                }
            }

            function Je(t, e, r, n, i, a) { Ge(t, e, r, 1, 16, n, i, a) }

            function Xe(t, e, r, n, i, a) { Ge(t, e, 1, r, 16, n, i, a) }

            function Ke(t, e, r, n, i, a) { var o; for (o = 3; 0 < o; --o) Ye(t, e += 4 * r, r, 1, 16, n, i, a) }

            function Ze(t, e, r, n, i, a) { var o; for (o = 3; 0 < o; --o) Ye(t, e += 4, 1, r, 16, n, i, a) }

            function $e(t, e, r, n, i, a, o, s) { Ge(t, e, i, 1, 8, a, o, s), Ge(r, n, i, 1, 8, a, o, s) }

            function Qe(t, e, r, n, i, a, o, s) { Ge(t, e, 1, i, 8, a, o, s), Ge(r, n, 1, i, 8, a, o, s) }

            function tr(t, e, r, n, i, a, o, s) { Ye(t, e + 4 * i, i, 1, 8, a, o, s), Ye(r, n + 4 * i, i, 1, 8, a, o, s) }

            function er(t, e, r, n, i, a, o, s) { Ye(t, e + 4, 1, i, 8, a, o, s), Ye(r, n + 4, 1, i, 8, a, o, s) }

            function rr() { this.ba = new ot, this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new ut, this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc" }

            function nr() { this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0 }

            function ir() { this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0 }

            function ar() { this.ua = 0, this.Wa = new O, this.vb = new O, this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new d, this.yc = new l }

            function or() { this.xb = this.a = 0, this.l = new Gt, this.ca = new ot, this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new _, this.Pb = 0, this.wd = new _, this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new ar, this.ab = 0, this.gc = o(4, ir), this.Oc = 0 }

            function sr() { this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Gt, this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0 }

            function ur(t, e, r, n, i, a, o) { for (t = null == t ? 0 : t[e + 0], e = 0; e < o; ++e) i[a + e] = t + r[n + e] & 255, t = i[a + e] }

            function hr(t, e, r, n, i, a, o) {
                var s;
                if (null == t) ur(null, null, r, n, i, a, o);
                else
                    for (s = 0; s < o; ++s) i[a + s] = t[e + s] + r[n + s] & 255
            }

            function cr(t, e, r, n, i, a, o) {
                if (null == t) ur(null, null, r, n, i, a, o);
                else {
                    var s, u = t[e + 0],
                        h = u,
                        c = u;
                    for (s = 0; s < o; ++s) h = c + (u = t[e + s]) - h, c = r[n + s] + (-256 & h ? 0 > h ? 0 : 255 : h) & 255, h = u, i[a + s] = c
                }
            }

            function lr(t, r, i, o) {
                var s = r.width,
                    u = r.o;
                if (e(null != t && null != r), 0 > i || 0 >= o || i + o > u) return null;
                if (!t.Cc) {
                    if (null == t.ga) {
                        var h;
                        if (t.ga = new sr, (h = null == t.ga) || (h = r.width * r.o, e(0 == t.Gb.length), t.Gb = a(h), t.Uc = 0, null == t.Gb ? h = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, h = 1), h = !h), !h) {
                            h = t.ga;
                            var c = t.Fa,
                                l = t.P,
                                f = t.qc,
                                d = t.mb,
                                p = t.nb,
                                g = l + 1,
                                m = f - 1,
                                v = h.l;
                            if (e(null != c && null != d && null != r), mi[0] = null, mi[1] = ur, mi[2] = hr, mi[3] = cr, h.ca = d, h.tb = p, h.c = r.width, h.i = r.height, e(0 < h.c && 0 < h.i), 1 >= f) r = 0;
                            else if (h.$a = c[l + 0] >> 0 & 3, h.Z = c[l + 0] >> 2 & 3, h.Lc = c[l + 0] >> 4 & 3, l = c[l + 0] >> 6 & 3, 0 > h.$a || 1 < h.$a || 4 <= h.Z || 1 < h.Lc || l) r = 0;
                            else if (v.put = dt, v.ac = ft, v.bc = pt, v.ma = h, v.width = r.width, v.height = r.height, v.Da = r.Da, v.v = r.v, v.va = r.va, v.j = r.j, v.o = r.o, h.$a) t: {
                                e(1 == h.$a),
                                r = Pt();e: for (;;) {
                                    if (null == r) { r = 0; break t }
                                    if (e(null != h), h.mc = r, r.c = h.c, r.i = h.i, r.l = h.l, r.l.ma = h, r.l.width = h.c, r.l.height = h.i, r.a = 0, b(r.m, c, g, m), !It(h.c, h.i, 1, r, null)) break e;
                                    if (1 == r.ab && 3 == r.gc[0].hc && At(r.s) ? (h.ic = 1, c = r.c * r.i, r.Ta = null, r.Ua = 0, r.V = a(c), r.Ba = 0, null == r.V ? (r.a = 1, r = 0) : r = 1) : (h.ic = 0, r = Ft(r, h.c)), !r) break e;
                                    r = 1;
                                    break t
                                }
                                h.mc = null,
                                r = 0
                            }
                            else r = m >= h.c * h.i;
                            h = !r
                        }
                        if (h) return null;
                        1 != t.ga.Lc ? t.Ga = 0 : o = u - i
                    }
                    e(null != t.ga), e(i + o <= u);
                    t: {
                        if (r = (c = t.ga).c, u = c.l.o, 0 == c.$a) {
                            if (g = t.rc, m = t.Vc, v = t.Fa, l = t.P + 1 + i * r, f = t.mb, d = t.nb + i * r, e(l <= t.P + t.qc), 0 != c.Z)
                                for (e(null != mi[c.Z]), h = 0; h < o; ++h) mi[c.Z](g, m, v, l, f, d, r), g = f, m = d, d += r, l += r;
                            else
                                for (h = 0; h < o; ++h) n(f, d, v, l, r), g = f, m = d, d += r, l += r;
                            t.rc = g, t.Vc = m
                        } else {
                            if (e(null != c.mc), r = i + o, e(null != (h = c.mc)), e(r <= h.i), h.C >= r) r = 1;
                            else if (c.ic || mr(), c.ic) {
                                c = h.V, g = h.Ba, m = h.c;
                                var w = h.i,
                                    y = (v = 1, l = h.$ / m, f = h.$ % m, d = h.m, p = h.s, h.$),
                                    _ = m * w,
                                    x = m * r,
                                    N = p.wc,
                                    S = y < x ? yt(p, f, l) : null;
                                e(y <= _), e(r <= w), e(At(p));
                                e: for (;;) {
                                    for (; !d.h && y < x;) {
                                        if (f & N || (S = yt(p, f, l)), e(null != S), L(d), 256 > (w = vt(S.G[0], S.H[0], d))) c[g + y] = w, ++y, ++f >= m && (f = 0, ++l <= r && !(l % 16) && Lt(h, l));
                                        else {
                                            if (!(280 > w)) { v = 0; break e }
                                            w = mt(w - 256, d);
                                            var k, P = vt(S.G[4], S.H[4], d);
                                            if (L(d), !(y >= (P = bt(m, P = mt(P, d))) && _ - y >= w)) { v = 0; break e }
                                            for (k = 0; k < w; ++k) c[g + y + k] = c[g + y + k - P];
                                            for (y += w, f += w; f >= m;) f -= m, ++l <= r && !(l % 16) && Lt(h, l);
                                            y < x && f & N && (S = yt(p, f, l))
                                        }
                                        e(d.h == A(d))
                                    }
                                    Lt(h, l > r ? r : l);
                                    break e
                                }!v || d.h && y < _ ? (v = 0, h.a = d.h ? 5 : 3) : h.$ = y, r = v
                            } else r = St(h, h.V, h.Ba, h.c, h.i, r, Ct);
                            if (!r) { o = 0; break t }
                        }
                        i + o >= u && (t.Cc = 1),
                        o = 1
                    }
                    if (!o) return null;
                    if (t.Cc && (null != (o = t.ga) && (o.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null
                }
                return t.nb + i * s
            }

            function fr(t, e, r, n, i, a) {
                for (; 0 < i--;) {
                    var o, s = t,
                        u = e + (r ? 1 : 0),
                        h = t,
                        c = e + (r ? 0 : 3);
                    for (o = 0; o < n; ++o) {
                        var l = h[c + 4 * o];
                        255 != l && (l *= 32897, s[u + 4 * o + 0] = s[u + 4 * o + 0] * l >> 23, s[u + 4 * o + 1] = s[u + 4 * o + 1] * l >> 23, s[u + 4 * o + 2] = s[u + 4 * o + 2] * l >> 23)
                    }
                    e += a
                }
            }

            function dr(t, e, r, n, i) {
                for (; 0 < n--;) {
                    var a;
                    for (a = 0; a < r; ++a) {
                        var o = t[e + 2 * a + 0],
                            s = 15 & (h = t[e + 2 * a + 1]),
                            u = 4369 * s,
                            h = (240 & h | h >> 4) * u >> 16;
                        t[e + 2 * a + 0] = (240 & o | o >> 4) * u >> 16 & 240 | (15 & o | o << 4) * u >> 16 >> 4 & 15, t[e + 2 * a + 1] = 240 & h | s
                    }
                    e += i
                }
            }

            function pr(t, e, r, n, i, a, o, s) {
                var u, h, c = 255;
                for (h = 0; h < i; ++h) {
                    for (u = 0; u < n; ++u) {
                        var l = t[e + u];
                        a[o + 4 * u] = l, c &= l
                    }
                    e += r, o += s
                }
                return 255 != c
            }

            function gr(t, e, r, n, i) { var a; for (a = 0; a < i; ++a) r[n + a] = t[e + a] >> 8 }

            function mr() { An = fr, Nn = dr, Ln = pr, Sn = gr }

            function br(r, n, i) {
                t[r] = function(t, r, a, o, s, u, h, c, l, f, d, p, g, m, b, v, w) {
                    var y, _ = w - 1 >> 1,
                        x = s[u + 0] | h[c + 0] << 16,
                        A = l[f + 0] | d[p + 0] << 16;
                    e(null != t);
                    var N = 3 * x + A + 131074 >> 2;
                    for (n(t[r + 0], 255 & N, N >> 16, g, m), null != a && (N = 3 * A + x + 131074 >> 2, n(a[o + 0], 255 & N, N >> 16, b, v)), y = 1; y <= _; ++y) {
                        var L = s[u + y] | h[c + y] << 16,
                            S = l[f + y] | d[p + y] << 16,
                            k = x + L + A + S + 524296,
                            P = k + 2 * (L + A) >> 3;
                        N = P + x >> 1, x = (k = k + 2 * (x + S) >> 3) + L >> 1, n(t[r + 2 * y - 1], 255 & N, N >> 16, g, m + (2 * y - 1) * i), n(t[r + 2 * y - 0], 255 & x, x >> 16, g, m + (2 * y - 0) * i), null != a && (N = k + A >> 1, x = P + S >> 1, n(a[o + 2 * y - 1], 255 & N, N >> 16, b, v + (2 * y - 1) * i), n(a[o + 2 * y + 0], 255 & x, x >> 16, b, v + (2 * y + 0) * i)), x = L, A = S
                    }
                    1 & w || (N = 3 * x + A + 131074 >> 2, n(t[r + w - 1], 255 & N, N >> 16, g, m + (w - 1) * i), null != a && (N = 3 * A + x + 131074 >> 2, n(a[o + w - 1], 255 & N, N >> 16, b, v + (w - 1) * i)))
                }
            }

            function vr() { bi[Mn] = vi, bi[qn] = yi, bi[Rn] = wi, bi[Tn] = _i, bi[Dn] = xi, bi[zn] = Ai, bi[Un] = Ni, bi[Hn] = yi, bi[Vn] = _i, bi[Wn] = xi, bi[Gn] = Ai }

            function wr(t) { return t & ~Fi ? 0 > t ? 0 : 255 : t >> Ii }

            function yr(t, e) { return wr((19077 * t >> 8) + (26149 * e >> 8) - 14234) }

            function _r(t, e, r) { return wr((19077 * t >> 8) - (6419 * e >> 8) - (13320 * r >> 8) + 8708) }

            function xr(t, e) { return wr((19077 * t >> 8) + (33050 * e >> 8) - 17685) }

            function Ar(t, e, r, n, i) { n[i + 0] = yr(t, r), n[i + 1] = _r(t, e, r), n[i + 2] = xr(t, e) }

            function Nr(t, e, r, n, i) { n[i + 0] = xr(t, e), n[i + 1] = _r(t, e, r), n[i + 2] = yr(t, r) }

            function Lr(t, e, r, n, i) {
                var a = _r(t, e, r);
                e = a << 3 & 224 | xr(t, e) >> 3, n[i + 0] = 248 & yr(t, r) | a >> 5, n[i + 1] = e
            }

            function Sr(t, e, r, n, i) {
                var a = 240 & xr(t, e) | 15;
                n[i + 0] = 240 & yr(t, r) | _r(t, e, r) >> 4, n[i + 1] = a
            }

            function kr(t, e, r, n, i) { n[i + 0] = 255, Ar(t, e, r, n, i + 1) }

            function Pr(t, e, r, n, i) { Nr(t, e, r, n, i), n[i + 3] = 255 }

            function Ir(t, e, r, n, i) { Ar(t, e, r, n, i), n[i + 3] = 255 }

            function Wt(t, e) { return 0 > t ? 0 : t > e ? e : t }

            function Fr(e, r, n) {
                t[e] = function(t, e, i, a, o, s, u, h, c) {
                    for (var l = h + (-2 & c) * n; h != l;) r(t[e + 0], i[a + 0], o[s + 0], u, h), r(t[e + 1], i[a + 0], o[s + 0], u, h + n), e += 2, ++a, ++s, h += 2 * n;
                    1 & c && r(t[e + 0], i[a + 0], o[s + 0], u, h)
                }
            }

            function Cr(t, e, r) { return 0 == r ? 0 == t ? 0 == e ? 6 : 5 : 0 == e ? 4 : 0 : r }

            function jr(t, e, r, n, i) {
                switch (t >>> 30) {
                    case 3:
                        on(e, r, n, i, 0);
                        break;
                    case 2:
                        sn(e, r, n, i);
                        break;
                    case 1:
                        hn(e, r, n, i)
                }
            }

            function Br(t, e) {
                var r, a, o = e.M,
                    s = e.Nb,
                    u = t.oc,
                    h = t.pc + 40,
                    c = t.oc,
                    l = t.pc + 584,
                    f = t.oc,
                    d = t.pc + 600;
                for (r = 0; 16 > r; ++r) u[h + 32 * r - 1] = 129;
                for (r = 0; 8 > r; ++r) c[l + 32 * r - 1] = 129, f[d + 32 * r - 1] = 129;
                for (0 < o ? u[h - 1 - 32] = c[l - 1 - 32] = f[d - 1 - 32] = 129 : (i(u, h - 32 - 1, 127, 21), i(c, l - 32 - 1, 127, 9), i(f, d - 32 - 1, 127, 9)), a = 0; a < t.za; ++a) {
                    var p = e.ya[e.aa + a];
                    if (0 < a) { for (r = -1; 16 > r; ++r) n(u, h + 32 * r - 4, u, h + 32 * r + 12, 4); for (r = -1; 8 > r; ++r) n(c, l + 32 * r - 4, c, l + 32 * r + 4, 4), n(f, d + 32 * r - 4, f, d + 32 * r + 4, 4) }
                    var g = t.Gd,
                        m = t.Hd + a,
                        b = p.ad,
                        v = p.Hc;
                    if (0 < o && (n(u, h - 32, g[m].y, 0, 16), n(c, l - 32, g[m].f, 0, 8), n(f, d - 32, g[m].ea, 0, 8)), p.Za) {
                        var w = u,
                            y = h - 32 + 16;
                        for (0 < o && (a >= t.za - 1 ? i(w, y, g[m].y[15], 4) : n(w, y, g[m + 1].y, 0, 4)), r = 0; 4 > r; r++) w[y + 128 + r] = w[y + 256 + r] = w[y + 384 + r] = w[y + 0 + r];
                        for (r = 0; 16 > r; ++r, v <<= 2) w = u, y = h + Ri[r], fi[p.Ob[r]](w, y), jr(v, b, 16 * +r, w, y)
                    } else if (w = Cr(a, o, p.Ob[0]), li[w](u, h), 0 != v)
                        for (r = 0; 16 > r; ++r, v <<= 2) jr(v, b, 16 * +r, u, h + Ri[r]);
                    for (r = p.Gc, w = Cr(a, o, p.Dd), di[w](c, l), di[w](f, d), v = b, w = c, y = l, 255 & (p = r >> 0) && (170 & p ? un(v, 256, w, y) : cn(v, 256, w, y)), p = f, v = d, 255 & (r >>= 8) && (170 & r ? un(b, 320, p, v) : cn(b, 320, p, v)), o < t.Ub - 1 && (n(g[m].y, 0, u, h + 480, 16), n(g[m].f, 0, c, l + 224, 8), n(g[m].ea, 0, f, d + 224, 8)), r = 8 * s * t.B, g = t.sa, m = t.ta + 16 * a + 16 * s * t.R, b = t.qa, p = t.ra + 8 * a + r, v = t.Ha, w = t.Ia + 8 * a + r, r = 0; 16 > r; ++r) n(g, m + r * t.R, u, h + 32 * r, 16);
                    for (r = 0; 8 > r; ++r) n(b, p + r * t.B, c, l + 32 * r, 8), n(v, w + r * t.B, f, d + 32 * r, 8)
                }
            }

            function Er(t, n, i, a, o, s, u, h, c) {
                var l = [0],
                    f = [0],
                    d = 0,
                    p = null != c ? c.kd : 0,
                    g = null != c ? c : new nr;
                if (null == t || 12 > i) return 7;
                g.data = t, g.w = n, g.ha = i, n = [n], i = [i], g.gb = [g.gb];
                t: {
                    var m = n,
                        v = i,
                        w = g.gb;
                    if (e(null != t), e(null != v), e(null != w), w[0] = 0, 12 <= v[0] && !r(t, m[0], "RIFF")) {
                        if (r(t, m[0] + 8, "WEBP")) { w = 3; break t }
                        var y = j(t, m[0] + 4);
                        if (12 > y || 4294967286 < y) { w = 3; break t }
                        if (p && y > v[0] - 8) { w = 7; break t }
                        w[0] = y, m[0] += 12, v[0] -= 12
                    }
                    w = 0
                }
                if (0 != w) return w;
                for (y = 0 < g.gb[0], i = i[0];;) {
                    t: {
                        var x = t;v = n,
                        w = i;
                        var A = l,
                            N = f,
                            L = m = [0];
                        if ((P = d = [d])[0] = 0, 8 > w[0]) w = 7;
                        else {
                            if (!r(x, v[0], "VP8X")) {
                                if (10 != j(x, v[0] + 4)) { w = 3; break t }
                                if (18 > w[0]) { w = 7; break t }
                                var S = j(x, v[0] + 8),
                                    k = 1 + C(x, v[0] + 12);
                                if (2147483648 <= k * (x = 1 + C(x, v[0] + 15))) { w = 3; break t }
                                null != L && (L[0] = S), null != A && (A[0] = k), null != N && (N[0] = x), v[0] += 18, w[0] -= 18, P[0] = 1
                            }
                            w = 0
                        }
                    }
                    if (d = d[0], m = m[0], 0 != w) return w;
                    if (v = !!(2 & m), !y && d) return 3;
                    if (null != s && (s[0] = !!(16 & m)), null != u && (u[0] = v), null != h && (h[0] = 0), u = l[0], m = f[0], d && v && null == c) { w = 0; break }
                    if (4 > i) { w = 7; break }
                    if (y && d || !y && !d && !r(t, n[0], "ALPH")) {
                        i = [i], g.na = [g.na], g.P = [g.P], g.Sa = [g.Sa];
                        t: {
                            S = t,
                            w = n,
                            y = i;
                            var P = g.gb;A = g.na,
                            N = g.P,
                            L = g.Sa;k = 22,
                            e(null != S),
                            e(null != y),
                            x = w[0];
                            var I = y[0];
                            for (e(null != A), e(null != L), A[0] = null, N[0] = null, L[0] = 0;;) {
                                if (w[0] = x, y[0] = I, 8 > I) { w = 7; break t }
                                var F = j(S, x + 4);
                                if (4294967286 < F) { w = 3; break t }
                                var B = 8 + F + 1 & -2;
                                if (k += B, 0 < P && k > P) { w = 3; break t }
                                if (!r(S, x, "VP8 ") || !r(S, x, "VP8L")) { w = 0; break t }
                                if (I[0] < B) { w = 7; break t }
                                r(S, x, "ALPH") || (A[0] = S, N[0] = x + 8, L[0] = F), x += B, I -= B
                            }
                        }
                        if (i = i[0], g.na = g.na[0], g.P = g.P[0], g.Sa = g.Sa[0], 0 != w) break
                    }
                    i = [i],
                    g.Ja = [g.Ja],
                    g.xa = [g.xa];t: if (P = t, w = n, y = i, A = g.gb[0], N = g.Ja, L = g.xa, S = w[0], x = !r(P, S, "VP8 "), k = !r(P, S, "VP8L"), e(null != P), e(null != y), e(null != N), e(null != L), 8 > y[0]) w = 7;
                        else {
                            if (x || k) {
                                if (P = j(P, S + 4), 12 <= A && P > A - 12) { w = 3; break t }
                                if (p && P > y[0] - 8) { w = 7; break t }
                                N[0] = P, w[0] += 8, y[0] -= 8, L[0] = k
                            } else L[0] = 5 <= y[0] && 47 == P[S + 0] && !(P[S + 4] >> 5), N[0] = y[0];
                            w = 0
                        }if (i = i[0], g.Ja = g.Ja[0], g.xa = g.xa[0], n = n[0], 0 != w) break;
                    if (4294967286 < g.Ja) return 3;
                    if (null == h || v || (h[0] = g.xa ? 2 : 1), u = [u], m = [m], g.xa) {
                        if (5 > i) { w = 7; break }
                        h = u, p = m, v = s, null == t || 5 > i ? t = 0 : 5 <= i && 47 == t[n + 0] && !(t[n + 4] >> 5) ? (y = [0], P = [0], A = [0], b(N = new _, t, n, i), gt(N, y, P, A) ? (null != h && (h[0] = y[0]), null != p && (p[0] = P[0]), null != v && (v[0] = A[0]), t = 1) : t = 0) : t = 0
                    } else {
                        if (10 > i) { w = 7; break }
                        h = m, null == t || 10 > i || !Xt(t, n + 3, i - 3) ? t = 0 : (p = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16, v = 16383 & (t[n + 7] << 8 | t[n + 6]), t = 16383 & (t[n + 9] << 8 | t[n + 8]), 1 & p || 3 < (p >> 1 & 7) || !(p >> 4 & 1) || p >> 5 >= g.Ja || !v || !t ? t = 0 : (u && (u[0] = v), h && (h[0] = t), t = 1))
                    }
                    if (!t) return 3;
                    if (u = u[0], m = m[0], d && (l[0] != u || f[0] != m)) return 3;null != c && (c[0] = g, c.offset = n - c.w, e(4294967286 > n - c.w), e(c.offset == c.ha - i));
                    break
                }
                return 0 == w || 7 == w && d && null == c ? (null != s && (s[0] |= null != g.na && 0 < g.na.length), null != a && (a[0] = u), null != o && (o[0] = m), 0) : w
            }

            function Or(t, e, r) {
                var n = e.width,
                    i = e.height,
                    a = 0,
                    o = 0,
                    s = n,
                    u = i;
                if (e.Da = null != t && 0 < t.Da, e.Da && (s = t.cd, u = t.bd, a = t.v, o = t.j, 11 > r || (a &= -2, o &= -2), 0 > a || 0 > o || 0 >= s || 0 >= u || a + s > n || o + u > i)) return 0;
                if (e.v = a, e.j = o, e.va = a + s, e.o = o + u, e.U = s, e.T = u, e.da = null != t && 0 < t.da, e.da) {
                    if (!M(s, u, r = [t.ib], a = [t.hb])) return 0;
                    e.ib = r[0], e.hb = a[0]
                }
                return e.ob = null != t && t.ob, e.Kb = null == t || !t.Sd, e.da && (e.ob = e.ib < 3 * n / 4 && e.hb < 3 * i / 4, e.Kb = 0), 1
            }

            function Mr(t) {
                if (null == t) return 2;
                if (11 > t.S) {
                    var e = t.f.RGBA;
                    e.fb += (t.height - 1) * e.A, e.A = -e.A
                } else e = t.f.kb, t = t.height, e.O += (t - 1) * e.fa, e.fa = -e.fa, e.N += (t - 1 >> 1) * e.Ab, e.Ab = -e.Ab, e.W += (t - 1 >> 1) * e.Db, e.Db = -e.Db, null != e.F && (e.J += (t - 1) * e.lb, e.lb = -e.lb);
                return 0
            }

            function qr(t, e, r, n) {
                if (null == n || 0 >= t || 0 >= e) return 2;
                if (null != r) {
                    if (r.Da) {
                        var i = r.cd,
                            o = r.bd,
                            s = -2 & r.v,
                            u = -2 & r.j;
                        if (0 > s || 0 > u || 0 >= i || 0 >= o || s + i > t || u + o > e) return 2;
                        t = i, e = o
                    }
                    if (r.da) {
                        if (!M(t, e, i = [r.ib], o = [r.hb])) return 2;
                        t = i[0], e = o[0]
                    }
                }
                n.width = t, n.height = e;
                t: {
                    var h = n.width,
                        c = n.height;
                    if (t = n.S, 0 >= h || 0 >= c || !(t >= Mn && 13 > t)) t = 2;
                    else {
                        if (0 >= n.Rd && null == n.sd) {
                            s = o = i = e = 0;
                            var l = (u = h * Ui[t]) * c;
                            if (11 > t || (o = (c + 1) / 2 * (e = (h + 1) / 2), 12 == t && (s = (i = h) * c)), null == (c = a(l + 2 * o + s))) { t = 1; break t }
                            n.sd = c, 11 > t ? ((h = n.f.RGBA).eb = c, h.fb = 0, h.A = u, h.size = l) : ((h = n.f.kb).y = c, h.O = 0, h.fa = u, h.Fd = l, h.f = c, h.N = 0 + l, h.Ab = e, h.Cd = o, h.ea = c, h.W = 0 + l + o, h.Db = e, h.Ed = o, 12 == t && (h.F = c, h.J = 0 + l + 2 * o), h.Tc = s, h.lb = i)
                        }
                        if (e = 1, i = n.S, o = n.width, s = n.height, i >= Mn && 13 > i)
                            if (11 > i) t = n.f.RGBA, e &= (u = Math.abs(t.A)) * (s - 1) + o <= t.size, e &= u >= o * Ui[i], e &= null != t.eb;
                            else {
                                t = n.f.kb, u = (o + 1) / 2, l = (s + 1) / 2, h = Math.abs(t.fa);
                                c = Math.abs(t.Ab);
                                var f = Math.abs(t.Db),
                                    d = Math.abs(t.lb),
                                    p = d * (s - 1) + o;
                                e &= h * (s - 1) + o <= t.Fd, e &= c * (l - 1) + u <= t.Cd, e = (e &= f * (l - 1) + u <= t.Ed) & h >= o & c >= u & f >= u, e &= null != t.y, e &= null != t.f, e &= null != t.ea, 12 == i && (e &= d >= o, e &= p <= t.Tc, e &= null != t.F)
                            }
                        else e = 0;
                        t = e ? 0 : 2
                    }
                }
                return 0 != t || null != r && r.fd && (t = Mr(n)), t
            }
            var Rr = 64,
                Tr = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215],
                Dr = 24,
                zr = 32,
                Ur = 8,
                Hr = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
            T("Predictor0", "PredictorAdd0"), t.Predictor0 = function() { return 4278190080 }, t.Predictor1 = function(t) { return t }, t.Predictor2 = function(t, e, r) { return e[r + 0] }, t.Predictor3 = function(t, e, r) { return e[r + 1] }, t.Predictor4 = function(t, e, r) { return e[r - 1] }, t.Predictor5 = function(t, e, r) { return z(z(t, e[r + 1]), e[r + 0]) }, t.Predictor6 = function(t, e, r) { return z(t, e[r - 1]) }, t.Predictor7 = function(t, e, r) { return z(t, e[r + 0]) }, t.Predictor8 = function(t, e, r) { return z(e[r - 1], e[r + 0]) }, t.Predictor9 = function(t, e, r) { return z(e[r + 0], e[r + 1]) }, t.Predictor10 = function(t, e, r) { return z(z(t, e[r - 1]), z(e[r + 0], e[r + 1])) }, t.Predictor11 = function(t, e, r) { var n = e[r + 0]; return 0 >= V(n >> 24 & 255, t >> 24 & 255, (e = e[r - 1]) >> 24 & 255) + V(n >> 16 & 255, t >> 16 & 255, e >> 16 & 255) + V(n >> 8 & 255, t >> 8 & 255, e >> 8 & 255) + V(255 & n, 255 & t, 255 & e) ? n : t }, t.Predictor12 = function(t, e, r) { var n = e[r + 0]; return (U((t >> 24 & 255) + (n >> 24 & 255) - ((e = e[r - 1]) >> 24 & 255)) << 24 | U((t >> 16 & 255) + (n >> 16 & 255) - (e >> 16 & 255)) << 16 | U((t >> 8 & 255) + (n >> 8 & 255) - (e >> 8 & 255)) << 8 | U((255 & t) + (255 & n) - (255 & e))) >>> 0 }, t.Predictor13 = function(t, e, r) { var n = e[r - 1]; return (H((t = z(t, e[r + 0])) >> 24 & 255, n >> 24 & 255) << 24 | H(t >> 16 & 255, n >> 16 & 255) << 16 | H(t >> 8 & 255, n >> 8 & 255) << 8 | H(t >> 0 & 255, n >> 0 & 255)) >>> 0 };
            var Vr = t.PredictorAdd0;
            t.PredictorAdd1 = W, T("Predictor2", "PredictorAdd2"), T("Predictor3", "PredictorAdd3"), T("Predictor4", "PredictorAdd4"), T("Predictor5", "PredictorAdd5"), T("Predictor6", "PredictorAdd6"), T("Predictor7", "PredictorAdd7"), T("Predictor8", "PredictorAdd8"), T("Predictor9", "PredictorAdd9"), T("Predictor10", "PredictorAdd10"), T("Predictor11", "PredictorAdd11"), T("Predictor12", "PredictorAdd12"), T("Predictor13", "PredictorAdd13");
            var Wr = t.PredictorAdd2;
            X("ColorIndexInverseTransform", "MapARGB", "32b", (function(t) { return t >> 8 & 255 }), (function(t) { return t })), X("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", (function(t) { return t }), (function(t) { return t >> 8 & 255 }));
            var Gr, Yr = t.ColorIndexInverseTransform,
                Jr = t.MapARGB,
                Xr = t.VP8LColorIndexInverseTransformAlpha,
                Kr = t.MapAlpha,
                Zr = t.VP8LPredictorsAdd = [];
            Zr.length = 16, (t.VP8LPredictors = []).length = 16, (t.VP8LPredictorsAdd_C = []).length = 16, (t.VP8LPredictors_C = []).length = 16;
            var $r, Qr, tn, en, rn, nn, an, on, sn, un, hn, cn, ln, fn, dn, pn, gn, mn, bn, vn, wn, yn, _n, xn, An, Nn, Ln, Sn, kn = a(511),
                Pn = a(2041),
                In = a(225),
                Fn = a(767),
                Cn = 0,
                jn = Pn,
                Bn = In,
                En = Fn,
                On = kn,
                Mn = 0,
                qn = 1,
                Rn = 2,
                Tn = 3,
                Dn = 4,
                zn = 5,
                Un = 6,
                Hn = 7,
                Vn = 8,
                Wn = 9,
                Gn = 10,
                Yn = [2, 3, 7],
                Jn = [3, 3, 11],
                Xn = [280, 256, 256, 256, 40],
                Kn = [0, 1, 1, 1, 0],
                Zn = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                $n = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112],
                Qn = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
                ti = 8,
                ei = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157],
                ri = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284],
                ni = null,
                ii = [
                    [173, 148, 140, 0],
                    [176, 155, 140, 135, 0],
                    [180, 157, 141, 134, 130, 0],
                    [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
                ],
                ai = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
                oi = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
                si = [
                    [
                        [
                            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                        ],
                        [
                            [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
                            [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
                            [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
                        ],
                        [
                            [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
                            [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
                            [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
                        ],
                        [
                            [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
                            [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
                            [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
                        ],
                        [
                            [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
                            [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
                            [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
                        ],
                        [
                            [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
                            [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
                            [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
                        ],
                        [
                            [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
                            [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
                            [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
                        ],
                        [
                            [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                            [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                            [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                        ]
                    ],
                    [
                        [
                            [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
                            [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
                            [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
                        ],
                        [
                            [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
                            [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
                            [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
                        ],
                        [
                            [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
                            [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
                            [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
                        ],
                        [
                            [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
                            [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
                            [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
                        ],
                        [
                            [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
                            [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
                            [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
                        ],
                        [
                            [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
                            [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
                            [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
                        ],
                        [
                            [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
                            [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
                            [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
                        ],
                        [
                            [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
                            [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                            [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
                        ]
                    ],
                    [
                        [
                            [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
                            [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
                            [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
                        ],
                        [
                            [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
                            [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
                            [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
                        ],
                        [
                            [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
                            [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
                            [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
                        ],
                        [
                            [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
                            [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
                            [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
                        ],
                        [
                            [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                            [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
                            [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                        ],
                        [
                            [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                            [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                            [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                        ],
                        [
                            [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
                            [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
                            [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                        ],
                        [
                            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                        ]
                    ],
                    [
                        [
                            [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
                            [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
                            [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
                        ],
                        [
                            [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
                            [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
                            [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
                        ],
                        [
                            [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
                            [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
                            [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
                        ],
                        [
                            [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
                            [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
                            [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
                        ],
                        [
                            [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
                            [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
                            [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
                        ],
                        [
                            [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
                            [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
                            [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
                        ],
                        [
                            [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
                            [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
                            [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
                        ],
                        [
                            [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                            [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                            [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                        ]
                    ]
                ],
                ui = [
                    [
                        [231, 120, 48, 89, 115, 113, 120, 152, 112],
                        [152, 179, 64, 126, 170, 118, 46, 70, 95],
                        [175, 69, 143, 80, 85, 82, 72, 155, 103],
                        [56, 58, 10, 171, 218, 189, 17, 13, 152],
                        [114, 26, 17, 163, 44, 195, 21, 10, 173],
                        [121, 24, 80, 195, 26, 62, 44, 64, 85],
                        [144, 71, 10, 38, 171, 213, 144, 34, 26],
                        [170, 46, 55, 19, 136, 160, 33, 206, 71],
                        [63, 20, 8, 114, 114, 208, 12, 9, 226],
                        [81, 40, 11, 96, 182, 84, 29, 16, 36]
                    ],
                    [
                        [134, 183, 89, 137, 98, 101, 106, 165, 148],
                        [72, 187, 100, 130, 157, 111, 32, 75, 80],
                        [66, 102, 167, 99, 74, 62, 40, 234, 128],
                        [41, 53, 9, 178, 241, 141, 26, 8, 107],
                        [74, 43, 26, 146, 73, 166, 49, 23, 157],
                        [65, 38, 105, 160, 51, 52, 31, 115, 128],
                        [104, 79, 12, 27, 217, 255, 87, 17, 7],
                        [87, 68, 71, 44, 114, 51, 15, 186, 23],
                        [47, 41, 14, 110, 182, 183, 21, 17, 194],
                        [66, 45, 25, 102, 197, 189, 23, 18, 22]
                    ],
                    [
                        [88, 88, 147, 150, 42, 46, 45, 196, 205],
                        [43, 97, 183, 117, 85, 38, 35, 179, 61],
                        [39, 53, 200, 87, 26, 21, 43, 232, 171],
                        [56, 34, 51, 104, 114, 102, 29, 93, 77],
                        [39, 28, 85, 171, 58, 165, 90, 98, 64],
                        [34, 22, 116, 206, 23, 34, 43, 166, 73],
                        [107, 54, 32, 26, 51, 1, 81, 43, 31],
                        [68, 25, 106, 22, 64, 171, 36, 225, 114],
                        [34, 19, 21, 102, 132, 188, 16, 76, 124],
                        [62, 18, 78, 95, 85, 57, 50, 48, 51]
                    ],
                    [
                        [193, 101, 35, 159, 215, 111, 89, 46, 111],
                        [60, 148, 31, 172, 219, 228, 21, 18, 111],
                        [112, 113, 77, 85, 179, 255, 38, 120, 114],
                        [40, 42, 1, 196, 245, 209, 10, 25, 109],
                        [88, 43, 29, 140, 166, 213, 37, 43, 154],
                        [61, 63, 30, 155, 67, 45, 68, 1, 209],
                        [100, 80, 8, 43, 154, 1, 51, 26, 71],
                        [142, 78, 78, 16, 255, 128, 34, 197, 171],
                        [41, 40, 5, 102, 211, 183, 4, 1, 221],
                        [51, 50, 17, 168, 209, 192, 23, 25, 82]
                    ],
                    [
                        [138, 31, 36, 171, 27, 166, 38, 44, 229],
                        [67, 87, 58, 169, 82, 115, 26, 59, 179],
                        [63, 59, 90, 180, 59, 166, 93, 73, 154],
                        [40, 40, 21, 116, 143, 209, 34, 39, 175],
                        [47, 15, 16, 183, 34, 223, 49, 45, 183],
                        [46, 17, 33, 183, 6, 98, 15, 32, 183],
                        [57, 46, 22, 24, 128, 1, 54, 17, 37],
                        [65, 32, 73, 115, 28, 128, 23, 128, 205],
                        [40, 3, 9, 115, 51, 192, 18, 6, 223],
                        [87, 37, 9, 115, 59, 77, 64, 21, 47]
                    ],
                    [
                        [104, 55, 44, 218, 9, 54, 53, 130, 226],
                        [64, 90, 70, 205, 40, 41, 23, 26, 57],
                        [54, 57, 112, 184, 5, 41, 38, 166, 213],
                        [30, 34, 26, 133, 152, 116, 10, 32, 134],
                        [39, 19, 53, 221, 26, 114, 32, 73, 255],
                        [31, 9, 65, 234, 2, 15, 1, 118, 73],
                        [75, 32, 12, 51, 192, 255, 160, 43, 51],
                        [88, 31, 35, 67, 102, 85, 55, 186, 85],
                        [56, 21, 23, 111, 59, 205, 45, 37, 192],
                        [55, 38, 70, 124, 73, 102, 1, 34, 98]
                    ],
                    [
                        [125, 98, 42, 88, 104, 85, 117, 175, 82],
                        [95, 84, 53, 89, 128, 100, 113, 101, 45],
                        [75, 79, 123, 47, 51, 128, 81, 171, 1],
                        [57, 17, 5, 71, 102, 57, 53, 41, 49],
                        [38, 33, 13, 121, 57, 73, 26, 1, 85],
                        [41, 10, 67, 138, 77, 110, 90, 47, 114],
                        [115, 21, 2, 10, 102, 255, 166, 23, 6],
                        [101, 29, 16, 10, 85, 128, 101, 196, 26],
                        [57, 18, 10, 102, 102, 213, 34, 20, 43],
                        [117, 20, 15, 36, 163, 128, 68, 1, 26]
                    ],
                    [
                        [102, 61, 71, 37, 34, 53, 31, 243, 192],
                        [69, 60, 71, 38, 73, 119, 28, 222, 37],
                        [68, 45, 128, 34, 1, 47, 11, 245, 171],
                        [62, 17, 19, 70, 146, 85, 55, 62, 70],
                        [37, 43, 37, 154, 100, 163, 85, 160, 1],
                        [63, 9, 92, 136, 28, 64, 32, 201, 85],
                        [75, 15, 9, 9, 64, 255, 184, 119, 16],
                        [86, 6, 28, 5, 64, 255, 25, 248, 1],
                        [56, 8, 17, 132, 137, 255, 55, 116, 128],
                        [58, 15, 20, 82, 135, 57, 26, 121, 40]
                    ],
                    [
                        [164, 50, 31, 137, 154, 133, 25, 35, 218],
                        [51, 103, 44, 131, 131, 123, 31, 6, 158],
                        [86, 40, 64, 135, 148, 224, 45, 183, 128],
                        [22, 26, 17, 131, 240, 154, 14, 1, 209],
                        [45, 16, 21, 91, 64, 222, 7, 1, 197],
                        [56, 21, 39, 155, 60, 138, 23, 102, 213],
                        [83, 12, 13, 54, 192, 255, 68, 47, 28],
                        [85, 26, 85, 85, 128, 128, 32, 146, 171],
                        [18, 11, 7, 63, 144, 171, 4, 4, 246],
                        [35, 27, 10, 146, 174, 171, 12, 26, 128]
                    ],
                    [
                        [190, 80, 35, 99, 180, 80, 126, 54, 45],
                        [85, 126, 47, 87, 176, 51, 41, 20, 32],
                        [101, 75, 128, 139, 118, 146, 116, 128, 85],
                        [56, 41, 15, 176, 236, 85, 37, 9, 62],
                        [71, 30, 17, 119, 118, 255, 17, 18, 138],
                        [101, 38, 60, 138, 55, 70, 43, 26, 142],
                        [146, 36, 19, 30, 171, 255, 97, 27, 20],
                        [138, 45, 61, 62, 219, 1, 81, 188, 64],
                        [32, 41, 20, 117, 151, 142, 20, 21, 163],
                        [112, 19, 12, 61, 195, 128, 48, 4, 24]
                    ]
                ],
                hi = [
                    [
                        [
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                            [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                            [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
                            [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
                            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ]
                    ],
                    [
                        [
                            [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
                            [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
                        ],
                        [
                            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ]
                    ],
                    [
                        [
                            [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
                            [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
                            [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
                        ],
                        [
                            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ]
                    ],
                    [
                        [
                            [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
                            [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                            [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                            [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                            [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                            [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                            [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ],
                        [
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                        ]
                    ]
                ],
                ci = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
                li = [],
                fi = [],
                di = [],
                pi = 1,
                gi = 2,
                mi = [],
                bi = [];
            br("UpsampleRgbLinePair", Ar, 3), br("UpsampleBgrLinePair", Nr, 3), br("UpsampleRgbaLinePair", Ir, 4), br("UpsampleBgraLinePair", Pr, 4), br("UpsampleArgbLinePair", kr, 4), br("UpsampleRgba4444LinePair", Sr, 2), br("UpsampleRgb565LinePair", Lr, 2);
            var vi = t.UpsampleRgbLinePair,
                wi = t.UpsampleBgrLinePair,
                yi = t.UpsampleRgbaLinePair,
                _i = t.UpsampleBgraLinePair,
                xi = t.UpsampleArgbLinePair,
                Ai = t.UpsampleRgba4444LinePair,
                Ni = t.UpsampleRgb565LinePair,
                Li = 16,
                Si = 1 << Li - 1,
                ki = -227,
                Pi = 482,
                Ii = 6,
                Fi = (256 << Ii) - 1,
                Ci = 0,
                ji = a(256),
                Bi = a(256),
                Ei = a(256),
                Oi = a(256),
                Mi = a(Pi - ki),
                qi = a(Pi - ki);
            Fr("YuvToRgbRow", Ar, 3), Fr("YuvToBgrRow", Nr, 3), Fr("YuvToRgbaRow", Ir, 4), Fr("YuvToBgraRow", Pr, 4), Fr("YuvToArgbRow", kr, 4), Fr("YuvToRgba4444Row", Sr, 2), Fr("YuvToRgb565Row", Lr, 2);
            var Ri = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
                Ti = [0, 2, 8],
                Di = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
                zi = 1;
            this.WebPDecodeRGBA = function(t, r, n, i, a) {
                var o = qn,
                    s = new rr,
                    u = new ot;
                s.ba = u, u.S = o, u.width = [u.width], u.height = [u.height];
                var h = u.width,
                    c = u.height,
                    l = new st;
                if (null == l || null == t) var f = 2;
                else e(null != l), f = Er(t, r, n, l.width, l.height, l.Pd, l.Qd, l.format, null);
                if (0 != f ? h = 0 : (null != h && (h[0] = l.width[0]), null != c && (c[0] = l.height[0]), h = 1), h) {
                    u.width = u.width[0], u.height = u.height[0], null != i && (i[0] = u.width), null != a && (a[0] = u.height);
                    t: {
                        if (i = new Gt, (a = new nr).data = t, a.w = r, a.ha = n, a.kd = 1, r = [0], e(null != a), (0 == (t = Er(a.data, a.w, a.ha, null, null, null, r, null, a)) || 7 == t) && r[0] && (t = 4), 0 == (r = t)) {
                            if (e(null != s), i.data = a.data, i.w = a.w + a.offset, i.ha = a.ha - a.offset, i.put = dt, i.ac = ft, i.bc = pt, i.ma = s, a.xa) {
                                if (null == (t = Pt())) { s = 1; break t }
                                if (function(t, r) {
                                        var n = [0],
                                            i = [0],
                                            a = [0];
                                        e: for (;;) { if (null == t) return 0; if (null == r) return t.a = 2, 0; if (t.l = r, t.a = 0, b(t.m, r.data, r.w, r.ha), !gt(t.m, n, i, a)) { t.a = 3; break e } if (t.xb = gi, r.width = n[0], r.height = i[0], !It(n[0], i[0], 1, t, null)) break e; return 1 }
                                        return e(0 != t.a), 0
                                    }(t, i)) {
                                    if (i = 0 == (r = qr(i.width, i.height, s.Oa, s.ba))) {
                                        e: {
                                            i = t;r: for (;;) {
                                                if (null == i) { i = 0; break e }
                                                if (e(null != i.s.yc), e(null != i.s.Ya), e(0 < i.s.Wb), e(null != (n = i.l)), e(null != (a = n.ma)), 0 != i.xb) {
                                                    if (i.ca = a.ba, i.tb = a.tb, e(null != i.ca), !Or(a.Oa, n, Tn)) { i.a = 2; break r }
                                                    if (!Ft(i, n.width)) break r;
                                                    if (n.da) break r;
                                                    if ((n.da || nt(i.ca.S)) && mr(), 11 > i.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), null != i.ca.f.kb.F && mr()), i.Pb && 0 < i.s.ua && null == i.s.vb.X && !B(i.s.vb, i.s.Wa.Xa)) { i.a = 1; break r }
                                                    i.xb = 0
                                                }
                                                if (!St(i, i.V, i.Ba, i.c, i.i, n.o, xt)) break r;
                                                a.Dc = i.Ma, i = 1;
                                                break e
                                            }
                                            e(0 != i.a),
                                            i = 0
                                        }
                                        i = !i
                                    }
                                    i && (r = t.a)
                                } else r = t.a
                            } else {
                                if (null == (t = new Yt)) { s = 1; break t }
                                if (t.Fa = a.na, t.P = a.P, t.qc = a.Sa, Kt(t, i)) {
                                    if (0 == (r = qr(i.width, i.height, s.Oa, s.ba))) {
                                        if (t.Aa = 0, n = s.Oa, e(null != (a = t)), null != n) {
                                            if (0 < (h = 0 > (h = n.Md) ? 0 : 100 < h ? 255 : 255 * h / 100)) {
                                                for (c = l = 0; 4 > c; ++c) 12 > (f = a.pb[c]).lc && (f.ia = h * Di[0 > f.lc ? 0 : f.lc] >> 3), l |= f.ia;
                                                l && (alert("todo:VP8InitRandom"), a.ia = 1)
                                            }
                                            a.Ga = n.Id, 100 < a.Ga ? a.Ga = 100 : 0 > a.Ga && (a.Ga = 0)
                                        }
                                        Qt(t, i) || (r = t.a)
                                    }
                                } else r = t.a
                            }
                            0 == r && null != s.Oa && s.Oa.fd && (r = Mr(s.ba))
                        }
                        s = r
                    }
                    o = 0 != s ? null : 11 > o ? u.f.RGBA.eb : u.f.kb.y
                } else o = null;
                return o
            };
            var Ui = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
        });
        var l = [0],
            f = [0],
            d = [],
            p = new Ar,
            g = t,
            m = function(t, e) {
                var r = {},
                    n = 0,
                    i = !1,
                    a = 0,
                    o = 0;
                if (r.frames = [], !
                    /** @license
                         * Copyright (c) 2017 Dominik Homberger

                      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

                      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

                      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

                      https://webpjs.appspot.com
                      WebPRiffParser dominikhlbg@gmail.com
                      */
                    function(t, e, r, n) {
                        for (var i = 0; i < n; i++)
                            if (t[e + i] != r.charCodeAt(i)) return !0;
                        return !1
                    }(t, e, "RIFF", 4)) {
                    var s, l;
                    c(t, e += 4);
                    for (e += 8; e < t.length;) {
                        var f = u(t, e),
                            d = c(t, e += 4);
                        e += 4;
                        var p = d + (1 & d);
                        switch (f) {
                            case "VP8 ":
                            case "VP8L":
                                void 0 === r.frames[n] && (r.frames[n] = {});
                                (b = r.frames[n]).src_off = i ? o : e - 8, b.src_size = a + d + 8, n++, i && (i = !1, a = 0, o = 0);
                                break;
                            case "VP8X":
                                (b = r.header = {}).feature_flags = t[e];
                                var g = e + 4;
                                b.canvas_width = 1 + h(t, g);
                                g += 3;
                                b.canvas_height = 1 + h(t, g);
                                g += 3;
                                break;
                            case "ALPH":
                                i = !0, a = p + 8, o = e - 8;
                                break;
                            case "ANIM":
                                (b = r.header).bgcolor = c(t, e);
                                g = e + 4;
                                b.loop_count = (s = t)[(l = g) + 0] << 0 | s[l + 1] << 8;
                                g += 2;
                                break;
                            case "ANMF":
                                var m, b;
                                (b = r.frames[n] = {}).offset_x = 2 * h(t, e), e += 3, b.offset_y = 2 * h(t, e), e += 3, b.width = 1 + h(t, e), e += 3, b.height = 1 + h(t, e), e += 3, b.duration = h(t, e), e += 3, m = t[e++], b.dispose = 1 & m, b.blend = m >> 1 & 1
                        }
                        "ANMF" != f && (e += p)
                    }
                    return r
                }
            }(g, 0);
        m.response = g, m.rgbaoutput = !0, m.dataurl = !1;
        var b = m.header ? m.header : null,
            v = m.frames ? m.frames : null;
        if (b) { b.loop_counter = b.loop_count, l = [b.canvas_height], f = [b.canvas_width]; for (var w = 0; w < v.length && 0 != v[w].blend; w++); }
        var y = v[0],
            _ = p.WebPDecodeRGBA(g, y.src_off, y.src_size, f, l);
        y.rgba = _, y.imgwidth = f[0], y.imgheight = l[0];
        for (var x = 0; x < f[0] * l[0] * 4; x++) d[x] = _[x];
        return this.width = f, this.height = l, this.data = d, this
    }
    /**
     * @license
     *
     * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    ! function(t) {
        var e = function() { return "function" == typeof cr.deflate },
            r = function(e, r, i, h) {
                var c = 5,
                    l = o;
                switch (h) {
                    case t.image_compression.FAST:
                        c = 3, l = a;
                        break;
                    case t.image_compression.MEDIUM:
                        c = 6, l = s;
                        break;
                    case t.image_compression.SLOW:
                        c = 9, l = u
                }
                e = n(e, r, i, l);
                var f = j.API.adler32cs.fromBuffer(e.buffer),
                    d = new cr.Deflate({ level: c });
                d.push(e, !0);
                var p = d.result,
                    g = p.length,
                    m = new Uint8Array(p.length + 4);
                return m.set(p, 0), m[g++] = f >>> 24 & 255, m[g++] = f >>> 16 & 255, m[g++] = f >>> 8 & 255, m[g++] = 255 & f, t.__addimage__.arrayBufferToBinaryString(m)
            },
            n = function(t, e, r, n) {
                for (var i, a, o, s = t.length / e, u = new Uint8Array(t.length + s), h = c(), f = 0; f < s; f += 1) {
                    if (o = f * e, i = t.subarray(o, o + e), n) u.set(n(i, r, a), o + f);
                    else {
                        for (var d, p = h.length, g = []; d < p; d += 1) g[d] = h[d](i, r, a);
                        var m = l(g.concat());
                        u.set(g[m], o + f)
                    }
                    a = i
                }
                return u
            },
            i = function(t) { var e = Array.apply([], t); return e.unshift(0), e },
            a = function(t, e) {
                var r, n = [],
                    i = t.length;
                n[0] = 1;
                for (var a = 0; a < i; a += 1) r = t[a - e] || 0, n[a + 1] = t[a] - r + 256 & 255;
                return n
            },
            o = function(t, e, r) {
                var n, i = [],
                    a = t.length;
                i[0] = 2;
                for (var o = 0; o < a; o += 1) n = r && r[o] || 0, i[o + 1] = t[o] - n + 256 & 255;
                return i
            },
            s = function(t, e, r) {
                var n, i, a = [],
                    o = t.length;
                a[0] = 3;
                for (var s = 0; s < o; s += 1) n = t[s - e] || 0, i = r && r[s] || 0, a[s + 1] = t[s] + 256 - (n + i >>> 1) & 255;
                return a
            },
            u = function(t, e, r) {
                var n, i, a, o, s = [],
                    u = t.length;
                s[0] = 4;
                for (var c = 0; c < u; c += 1) n = t[c - e] || 0, i = r && r[c] || 0, a = r && r[c - e] || 0, o = h(n, i, a), s[c + 1] = t[c] - o + 256 & 255;
                return s
            },
            h = function(t, e, r) {
                if (t === e && e === r) return t;
                var n = Math.abs(e - r),
                    i = Math.abs(t - r),
                    a = Math.abs(t + e - r - r);
                return n <= i && n <= a ? t : i <= a ? e : r
            },
            c = function() { return [i, a, o, s, u] },
            l = function(t) { var e = t.map((function(t) { return t.reduce((function(t, e) { return t + Math.abs(e) }), 0) })); return e.indexOf(Math.min.apply(null, e)) };
        t.processPNG = function(n, i, a, o) {
            var s, u, h, c, l, f, d, p, g, m, b, v, w, y, _, x = this.decode.FLATE_DECODE,
                A = "";
            if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
                if (n = (h = new vr(n)).imgData, u = h.bits, s = h.colorSpace, l = h.colors, -1 !== [4, 6].indexOf(h.colorType)) {
                    if (8 === h.bits) {
                        g = (p = 32 == h.pixelBitlength ? new Uint32Array(h.decodePixels().buffer) : 16 == h.pixelBitlength ? new Uint16Array(h.decodePixels().buffer) : new Uint8Array(h.decodePixels().buffer)).length, b = new Uint8Array(g * h.colors), m = new Uint8Array(g);
                        var N, L = h.pixelBitlength - h.bits;
                        for (y = 0, _ = 0; y < g; y++) {
                            for (w = p[y], N = 0; N < L;) b[_++] = w >>> N & 255, N += h.bits;
                            m[y] = w >>> N & 255
                        }
                    }
                    if (16 === h.bits) {
                        g = (p = new Uint32Array(h.decodePixels().buffer)).length, b = new Uint8Array(g * (32 / h.pixelBitlength) * h.colors), m = new Uint8Array(g * (32 / h.pixelBitlength)), v = h.colors > 1, y = 0, _ = 0;
                        for (var S = 0; y < g;) w = p[y++], b[_++] = w >>> 0 & 255, v && (b[_++] = w >>> 16 & 255, w = p[y++], b[_++] = w >>> 0 & 255), m[S++] = w >>> 16 & 255;
                        u = 8
                    }
                    o !== t.image_compression.NONE && e() ? (n = r(b, h.width * h.colors, h.colors, o), d = r(m, h.width, 1, o)) : (n = b, d = m, x = void 0)
                }
                if (3 === h.colorType && (s = this.color_spaces.INDEXED, f = h.palette, h.transparency.indexed)) {
                    var k = h.transparency.indexed,
                        P = 0;
                    for (y = 0, g = k.length; y < g; ++y) P += k[y];
                    if ((P /= 255) === g - 1 && -1 !== k.indexOf(0)) c = [k.indexOf(0)];
                    else if (P !== g) {
                        for (p = h.decodePixels(), m = new Uint8Array(p.length), y = 0, g = p.length; y < g; y++) m[y] = k[p[y]];
                        d = r(m, h.width, 1)
                    }
                }
                var I = function(e) {
                    var r;
                    switch (e) {
                        case t.image_compression.FAST:
                            r = 11;
                            break;
                        case t.image_compression.MEDIUM:
                            r = 13;
                            break;
                        case t.image_compression.SLOW:
                            r = 14;
                            break;
                        default:
                            r = 12
                    }
                    return r
                }(o);
                return x === this.decode.FLATE_DECODE && (A = "/Predictor " + I + " "), A += "/Colors " + l + " /BitsPerComponent " + u + " /Columns " + h.width, (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (d && this.__addimage__.isArrayBuffer(d) || this.__addimage__.isArrayBufferView(d)) && (d = this.__addimage__.arrayBufferToBinaryString(d)), { alias: a, data: n, index: i, filter: x, decodeParameters: A, transparency: c, palette: f, sMask: d, predictor: I, width: h.width, height: h.height, bitsPerComponent: u, colorSpace: s }
            }
        }
    }(j.API),
    function(t) {
        t.processGIF89A = function(e, r, n, i) {
            var a = new wr(e),
                o = a.width,
                s = a.height,
                u = [];
            a.decodeAndBlitFrameRGBA(0, u);
            var h = { data: u, width: o, height: s },
                c = new _r(100).encode(h, 100);
            return t.processJPEG.call(this, c, r, n, i)
        }, t.processGIF87A = t.processGIF89A
    }(j.API), xr.prototype.parseHeader = function() {
            if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
                var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
                this.palette = new Array(t);
                for (var e = 0; e < t; e++) {
                    var r = this.datav.getUint8(this.pos++, !0),
                        n = this.datav.getUint8(this.pos++, !0),
                        i = this.datav.getUint8(this.pos++, !0),
                        a = this.datav.getUint8(this.pos++, !0);
                    this.palette[e] = { red: i, green: n, blue: r, quad: a }
                }
            }
            this.height < 0 && (this.height *= -1, this.bottom_up = !1)
        }, xr.prototype.parseBGR = function() {
            this.pos = this.offset;
            try {
                var t = "bit" + this.bitPP,
                    e = this.width * this.height * 4;
                this.data = new Uint8Array(e), this[t]()
            } catch (t) { n.log("bit decode error:" + t) }
        }, xr.prototype.bit1 = function() {
            var t, e = Math.ceil(this.width / 8),
                r = e % 4;
            for (t = this.height - 1; t >= 0; t--) {
                for (var n = this.bottom_up ? t : this.height - 1 - t, i = 0; i < e; i++)
                    for (var a = this.datav.getUint8(this.pos++, !0), o = n * this.width * 4 + 8 * i * 4, s = 0; s < 8 && 8 * i + s < this.width; s++) {
                        var u = this.palette[a >> 7 - s & 1];
                        this.data[o + 4 * s] = u.blue, this.data[o + 4 * s + 1] = u.green, this.data[o + 4 * s + 2] = u.red, this.data[o + 4 * s + 3] = 255
                    }
                0 !== r && (this.pos += 4 - r)
            }
        }, xr.prototype.bit4 = function() {
            for (var t = Math.ceil(this.width / 2), e = t % 4, r = this.height - 1; r >= 0; r--) {
                for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < t; i++) {
                    var a = this.datav.getUint8(this.pos++, !0),
                        o = n * this.width * 4 + 2 * i * 4,
                        s = a >> 4,
                        u = 15 & a,
                        h = this.palette[s];
                    if (this.data[o] = h.blue, this.data[o + 1] = h.green, this.data[o + 2] = h.red, this.data[o + 3] = 255, 2 * i + 1 >= this.width) break;
                    h = this.palette[u], this.data[o + 4] = h.blue, this.data[o + 4 + 1] = h.green, this.data[o + 4 + 2] = h.red, this.data[o + 4 + 3] = 255
                }
                0 !== e && (this.pos += 4 - e)
            }
        }, xr.prototype.bit8 = function() {
            for (var t = this.width % 4, e = this.height - 1; e >= 0; e--) {
                for (var r = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
                    var i = this.datav.getUint8(this.pos++, !0),
                        a = r * this.width * 4 + 4 * n;
                    if (i < this.palette.length) {
                        var o = this.palette[i];
                        this.data[a] = o.red, this.data[a + 1] = o.green, this.data[a + 2] = o.blue, this.data[a + 3] = 255
                    } else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255
                }
                0 !== t && (this.pos += 4 - t)
            }
        }, xr.prototype.bit15 = function() {
            for (var t = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
                for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < this.width; i++) {
                    var a = this.datav.getUint16(this.pos, !0);
                    this.pos += 2;
                    var o = (a & e) / e * 255 | 0,
                        s = (a >> 5 & e) / e * 255 | 0,
                        u = (a >> 10 & e) / e * 255 | 0,
                        h = a >> 15 ? 255 : 0,
                        c = n * this.width * 4 + 4 * i;
                    this.data[c] = u, this.data[c + 1] = s, this.data[c + 2] = o, this.data[c + 3] = h
                }
                this.pos += t
            }
        }, xr.prototype.bit16 = function() {
            for (var t = this.width % 3, e = parseInt("11111", 2), r = parseInt("111111", 2), n = this.height - 1; n >= 0; n--) {
                for (var i = this.bottom_up ? n : this.height - 1 - n, a = 0; a < this.width; a++) {
                    var o = this.datav.getUint16(this.pos, !0);
                    this.pos += 2;
                    var s = (o & e) / e * 255 | 0,
                        u = (o >> 5 & r) / r * 255 | 0,
                        h = (o >> 11) / e * 255 | 0,
                        c = i * this.width * 4 + 4 * a;
                    this.data[c] = h, this.data[c + 1] = u, this.data[c + 2] = s, this.data[c + 3] = 255
                }
                this.pos += t
            }
        }, xr.prototype.bit24 = function() {
            for (var t = this.height - 1; t >= 0; t--) {
                for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
                    var n = this.datav.getUint8(this.pos++, !0),
                        i = this.datav.getUint8(this.pos++, !0),
                        a = this.datav.getUint8(this.pos++, !0),
                        o = e * this.width * 4 + 4 * r;
                    this.data[o] = a, this.data[o + 1] = i, this.data[o + 2] = n, this.data[o + 3] = 255
                }
                this.pos += this.width % 4
            }
        }, xr.prototype.bit32 = function() {
            for (var t = this.height - 1; t >= 0; t--)
                for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
                    var n = this.datav.getUint8(this.pos++, !0),
                        i = this.datav.getUint8(this.pos++, !0),
                        a = this.datav.getUint8(this.pos++, !0),
                        o = this.datav.getUint8(this.pos++, !0),
                        s = e * this.width * 4 + 4 * r;
                    this.data[s] = a, this.data[s + 1] = i, this.data[s + 2] = n, this.data[s + 3] = o
                }
        }, xr.prototype.getData = function() { return this.data },
        /**
         * @license
         * Copyright (c) 2018 Aras Abbasi
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        function(t) {
            t.processBMP = function(e, r, n, i) {
                var a = new xr(e, !1),
                    o = a.width,
                    s = a.height,
                    u = { data: a.getData(), width: o, height: s },
                    h = new _r(100).encode(u, 100);
                return t.processJPEG.call(this, h, r, n, i)
            }
        }(j.API), Ar.prototype.getData = function() { return this.data },
        /**
         * @license
         * Copyright (c) 2019 Aras Abbasi
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        function(t) {
            t.processWEBP = function(e, r, n, i) {
                var a = new Ar(e, !1),
                    o = a.width,
                    s = a.height,
                    u = { data: a.getData(), width: o, height: s },
                    h = new _r(100).encode(u, 100);
                return t.processJPEG.call(this, h, r, n, i)
            }
        }(j.API),
        /**
         * @license
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        function(t) { t.setLanguage = function(t) { return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), void 0 !== { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "FYRO Macedonian", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[t] && (this.internal.languageSettings.languageCode = t, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() { this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")") })), this.internal.languageSettings.isSubscribed = !0)), this } }(j.API),
        /** @license
         * MIT license.
         * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
         *               2014 Diego Casorran, https://github.com/diegocr
         *
         * Permission is hereby granted, free of charge, to any person obtaining
         * a copy of this software and associated documentation files (the
         * "Software"), to deal in the Software without restriction, including
         * without limitation the rights to use, copy, modify, merge, publish,
         * distribute, sublicense, and/or sell copies of the Software, and to
         * permit persons to whom the Software is furnished to do so, subject to
         * the following conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
         * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
         * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
         * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
         * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
         * ====================================================================
         */
        lr = j.API, fr = lr.getCharWidthsArray = function(t, e) {
            var r, n, i = (e = e || {}).font || this.internal.getFont(),
                a = e.fontSize || this.internal.getFontSize(),
                o = e.charSpace || this.internal.getCharSpace(),
                s = e.widths ? e.widths : i.metadata.Unicode.widths,
                u = s.fof ? s.fof : 1,
                h = e.kerning ? e.kerning : i.metadata.Unicode.kerning,
                c = h.fof ? h.fof : 1,
                l = !1 !== e.doKerning,
                f = 0,
                d = t.length,
                p = 0,
                g = s[0] || u,
                m = [];
            for (r = 0; r < d; r++) n = t.charCodeAt(r), "function" == typeof i.metadata.widthOfString ? m.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(n)) + o * (1e3 / a) || 0) / 1e3) : (f = l && "object" == typeof h[n] && !isNaN(parseInt(h[n][p], 10)) ? h[n][p] / c : 0, m.push((s[n] || g) / u + f)), p = n;
            return m
        }, dr = lr.getStringUnitWidth = function(t, e) {
            var r = (e = e || {}).fontSize || this.internal.getFontSize(),
                n = e.font || this.internal.getFont(),
                i = e.charSpace || this.internal.getCharSpace();
            return lr.processArabic && (t = lr.processArabic(t)), "function" == typeof n.metadata.widthOfString ? n.metadata.widthOfString(t, r, i) / r : fr.apply(this, arguments).reduce((function(t, e) { return t + e }), 0)
        }, pr = function(t, e, r, n) {
            for (var i = [], a = 0, o = t.length, s = 0; a !== o && s + e[a] < r;) s += e[a], a++;
            i.push(t.slice(0, a));
            var u = a;
            for (s = 0; a !== o;) s + e[a] > n && (i.push(t.slice(u, a)), s = 0, u = a), s += e[a], a++;
            return u !== a && i.push(t.slice(u, a)), i
        }, gr = function(t, e, r) {
            r || (r = {});
            var n, i, a, o, s, u, h, c = [],
                l = [c],
                f = r.textIndent || 0,
                d = 0,
                p = 0,
                g = t.split(" "),
                m = fr.apply(this, [" ", r])[0];
            if (u = -1 === r.lineIndent ? g[0].length + 2 : r.lineIndent || 0) {
                var b = Array(u).join(" "),
                    v = [];
                g.map((function(t) {
                    (t = t.split(/\s*\n/)).length > 1 ? v = v.concat(t.map((function(t, e) { return (e && t.length ? "\n" : "") + t }))) : v.push(t[0])
                })), g = v, u = dr.apply(this, [b, r])
            }
            for (a = 0, o = g.length; a < o; a++) {
                var w = 0;
                if (n = g[a], u && "\n" == n[0] && (n = n.substr(1), w = 1), f + d + (p = (i = fr.apply(this, [n, r])).reduce((function(t, e) { return t + e }), 0)) > e || w) {
                    if (p > e) {
                        for (s = pr.apply(this, [n, i, e - (f + d), e]), c.push(s.shift()), c = [s.pop()]; s.length;) l.push([s.shift()]);
                        p = i.slice(n.length - (c[0] ? c[0].length : 0)).reduce((function(t, e) { return t + e }), 0)
                    } else c = [n];
                    l.push(c), f = p + u, d = m
                } else c.push(n), f += d + p, d = m
            }
            return h = u ? function(t, e) { return (e ? b : "") + t.join(" ") } : function(t) { return t.join(" ") }, l.map(h)
        }, lr.splitTextToSize = function(t, e, r) {
            var n, i = (r = r || {}).fontSize || this.internal.getFontSize(),
                a = function(t) { if (t.widths && t.kerning) return { widths: t.widths, kerning: t.kerning }; var e = this.internal.getFont(t.fontName, t.fontStyle); return e.metadata.Unicode ? { widths: e.metadata.Unicode.widths || { 0: 1 }, kerning: e.metadata.Unicode.kerning || {} } : { font: e.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() } }.call(this, r);
            n = Array.isArray(t) ? t : String(t).split(/\r?\n/);
            var o = 1 * this.internal.scaleFactor * e / i;
            a.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / i : 0, a.lineIndent = r.lineIndent;
            var s, u, h = [];
            for (s = 0, u = n.length; s < u; s++) h = h.concat(gr.apply(this, [n[s], o, a]));
            return h
        },
        /** @license
           jsPDF standard_fonts_metrics plugin
           * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
           * MIT license.
           * Permission is hereby granted, free of charge, to any person obtaining
           * a copy of this software and associated documentation files (the
           * "Software"), to deal in the Software without restriction, including
           * without limitation the rights to use, copy, modify, merge, publish,
           * distribute, sublicense, and/or sell copies of the Software, and to
           * permit persons to whom the Software is furnished to do so, subject to
           * the following conditions:
           * 
           * The above copyright notice and this permission notice shall be
           * included in all copies or substantial portions of the Software.
           * 
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
           * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
           * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
           * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
           * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
           * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
           * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
           * ====================================================================
           */
        function(t) {
            t.__fontmetrics__ = t.__fontmetrics__ || {};
            for (var e = "klmnopqrstuvwxyz", r = {}, n = {}, i = 0; i < e.length; i++) r[e[i]] = "0123456789abcdef" [i], n["0123456789abcdef" [i]] = e[i];
            var a = function(t) { return "0x" + parseInt(t, 10).toString(16) },
                o = t.__fontmetrics__.compress = function(t) {
                    var e, r, i, s, u = ["{"];
                    for (var h in t) {
                        if (e = t[h], isNaN(parseInt(h, 10)) ? r = "'" + h + "'" : (h = parseInt(h, 10), r = (r = a(h).slice(2)).slice(0, -1) + n[r.slice(-1)]), "number" == typeof e) e < 0 ? (i = a(e).slice(3), s = "-") : (i = a(e).slice(2), s = ""), i = s + i.slice(0, -1) + n[i.slice(-1)];
                        else {
                            if ("object" != typeof e) throw new Error("Don't know what to do with value type " + typeof e + ".");
                            i = o(e)
                        }
                        u.push(r + i)
                    }
                    return u.push("}"), u.join("")
                },
                s = t.__fontmetrics__.uncompress = function(t) { if ("string" != typeof t) throw new Error("Invalid argument passed to uncompress."); for (var e, n, i, a, o = {}, s = 1, u = o, h = [], c = "", l = "", f = t.length - 1, d = 1; d < f; d += 1) "'" == (a = t[d]) ? e ? (i = e.join(""), e = void 0) : e = [] : e ? e.push(a) : "{" == a ? (h.push([u, i]), u = {}, i = void 0) : "}" == a ? ((n = h.pop())[0][n[1]] = u, i = void 0, u = n[0]) : "-" == a ? s = -1 : void 0 === i ? r.hasOwnProperty(a) ? (c += r[a], i = parseInt(c, 16) * s, s = 1, c = "") : c += a : r.hasOwnProperty(a) ? (l += r[a], u[i] = parseInt(l, 16) * s, s = 1, i = void 0, l = "") : l += a; return o },
                u = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: s("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") },
                h = { Unicode: { Courier: u, "Courier-Bold": u, "Courier-BoldOblique": u, "Courier-Oblique": u, Helvetica: u, "Helvetica-Bold": u, "Helvetica-BoldOblique": u, "Helvetica-Oblique": u, "Times-Roman": u, "Times-Bold": u, "Times-BoldItalic": u, "Times-Italic": u } },
                c = { Unicode: { "Courier-Oblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": s("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": s("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: s("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: s("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": s("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": s("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
            t.events.push(["addFont", function(t) {
                var e = t.font,
                    r = c.Unicode[e.postScriptName];
                r && (e.metadata.Unicode = {}, e.metadata.Unicode.widths = r.widths, e.metadata.Unicode.kerning = r.kerning);
                var n = h.Unicode[e.postScriptName];
                n && (e.metadata.Unicode.encoding = n, e.encoding = n.codePages[0])
            }])
        }(j.API),
        /**
         * @license
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        function(t) {
            var e = function(t) { for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++) r[n] = t.charCodeAt(n); return r };
            t.API.events.push(["addFont", function(r) {
                var n = void 0,
                    i = r.font,
                    a = r.instance;
                if (!i.isStandardFont) { if (void 0 === a) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "')."); if ("string" != typeof(n = !1 === a.existsFileInVFS(i.postScriptName) ? a.loadFile(i.postScriptName) : a.getFileFromVFS(i.postScriptName))) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");! function(r, n) { n = /^\x00\x01\x00\x00/.test(n) ? e(n) : e(s(n)), r.metadata = t.API.TTFFont.open(n), r.metadata.Unicode = r.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, r.metadata.glyIdsUsed = [0] }(i, n) }
            }])
        }(j),
        /** @license
         * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
         *
         * Permission is hereby granted, free of charge, to any person obtaining
         * a copy of this software and associated documentation files (the
         * "Software"), to deal in the Software without restriction, including
         * without limitation the rights to use, copy, modify, merge, publish,
         * distribute, sublicense, and/or sell copies of the Software, and to
         * permit persons to whom the Software is furnished to do so, subject to
         * the following conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
         * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
         * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
         * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
         * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
         * ====================================================================
         */
        function(r) {
            function i() { return (e.canvg ? Promise.resolve(e.canvg) : "object" == typeof t && "undefined" != typeof module ? new Promise((function(t, e) { try { t(require("canvg")) } catch (t) { e(t) } })) : "function" == typeof define && define.amd ? new Promise((function(t, e) { try { require(["canvg"], t) } catch (t) { e(t) } })) : Promise.reject(new Error("Could not load canvg"))).catch((function(t) { return Promise.reject(new Error("Could not load canvg: " + t)) })).then((function(t) { return t.default ? t.default : t })) }
            r.addSvgAsImage = function(t, e, r, a, o, s, u, h) {
                if (isNaN(e) || isNaN(r)) throw n.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
                if (isNaN(a) || isNaN(o)) throw n.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
                var c = document.createElement("canvas");
                c.width = a, c.height = o;
                var l = c.getContext("2d");
                l.fillStyle = "#fff", l.fillRect(0, 0, c.width, c.height);
                var f = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 },
                    d = this;
                return i().then((function(e) { return e.fromString(l, t, f) }), (function() { return Promise.reject(new Error("Could not load canvg.")) })).then((function(t) { return t.render(f) })).then((function() { d.addImage(c.toDataURL("image/jpeg", 1), e, r, a, o, u, h) }))
            }
        }(j.API),
        /**
         * @license
         * ====================================================================
         * Copyright (c) 2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
         *
         * Permission is hereby granted, free of charge, to any person obtaining
         * a copy of this software and associated documentation files (the
         * "Software"), to deal in the Software without restriction, including
         * without limitation the rights to use, copy, modify, merge, publish,
         * distribute, sublicense, and/or sell copies of the Software, and to
         * permit persons to whom the Software is furnished to do so, subject to
         * the following conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
         * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
         * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
         * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
         * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
         * ====================================================================
         */
        function(t) {
            t.putTotalPages = function(t) {
                var e, r = 0;
                parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(t, "g"), r = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g"), r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
                for (var n = 1; n <= this.internal.getNumberOfPages(); n++)
                    for (var i = 0; i < this.internal.pages[n].length; i++) this.internal.pages[n][i] = this.internal.pages[n][i].replace(e, r);
                return this
            }
        }(j.API),
        /**
         * @license
         * jsPDF viewerPreferences Plugin
         * @author Aras Abbasi (github.com/arasabbasi)
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        function(t) {
            t.viewerPreferences = function(t, e) {
                var r;
                t = t || {}, e = e || !1;
                var n, i, a, o = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } },
                    s = Object.keys(o),
                    u = [],
                    h = 0,
                    c = 0,
                    l = 0;

                function f(t, e) { var r, n = !1; for (r = 0; r < t.length; r += 1) t[r] === e && (n = !0); return n }
                if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o)), this.internal.viewerpreferences.isSubscribed = !1), r = this.internal.viewerpreferences.configuration, "reset" === t || !0 === e) { var d = s.length; for (l = 0; l < d; l += 1) r[s[l]].value = r[s[l]].defaultValue, r[s[l]].explicitSet = !1 }
                if ("object" == typeof t)
                    for (i in t)
                        if (a = t[i], f(s, i) && void 0 !== a) {
                            if ("boolean" === r[i].type && "boolean" == typeof a) r[i].value = a;
                            else if ("name" === r[i].type && f(r[i].valueSet, a)) r[i].value = a;
                            else if ("integer" === r[i].type && Number.isInteger(a)) r[i].value = a;
                            else if ("array" === r[i].type) {
                                for (h = 0; h < a.length; h += 1)
                                    if (n = !0, 1 === a[h].length && "number" == typeof a[h][0]) u.push(String(a[h] - 1));
                                    else if (a[h].length > 1) { for (c = 0; c < a[h].length; c += 1) "number" != typeof a[h][c] && (n = !1);!0 === n && u.push([a[h][0] - 1, a[h][1] - 1].join(" ")) }
                                r[i].value = "[" + u.join(" ") + "]"
                            } else r[i].value = r[i].defaultValue;
                            r[i].explicitSet = !0
                        }
                return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
                    var t, e = [];
                    for (t in r) !0 === r[t].explicitSet && ("name" === r[t].type ? e.push("/" + t + " /" + r[t].value) : e.push("/" + t + " " + r[t].value));
                    0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>")
                })), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = r, this
            }
        }(j.API),
        /** ====================================================================
         * @license
         * jsPDF XMP metadata plugin
         * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
         *
         * Permission is hereby granted, free of charge, to any person obtaining
         * a copy of this software and associated documentation files (the
         * "Software"), to deal in the Software without restriction, including
         * without limitation the rights to use, copy, modify, merge, publish,
         * distribute, sublicense, and/or sell copies of the Software, and to
         * permit persons to whom the Software is furnished to do so, subject to
         * the following conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
         * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
         * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
         * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
         * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
         * ====================================================================
         */
        function(t) {
            var e = function() {
                    var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>',
                        e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
                        r = unescape(encodeURIComponent(t)),
                        n = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
                        i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
                        a = unescape(encodeURIComponent("</x:xmpmeta>")),
                        o = r.length + n.length + i.length + e.length + a.length;
                    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"), this.internal.write("stream"), this.internal.write(e + r + n + i + a), this.internal.write("endstream"), this.internal.write("endobj")
                },
                r = function() { this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R") };
            t.addMetadata = function(t, n) { return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = { metadata: t, namespaceuri: n || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", r), this.internal.events.subscribe("postPutResources", e)), this }
        }(j.API),
        function(t) {
            var e = t.API,
                r = e.pdfEscape16 = function(t, e) {
                    for (var r, n = e.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], a = [""], o = 0, s = t.length; o < s; ++o) {
                        if (r = e.metadata.characterToGlyph(t.charCodeAt(o)), e.metadata.glyIdsUsed.push(r), e.metadata.toUnicode[r] = t.charCodeAt(o), -1 == n.indexOf(r) && (n.push(r), n.push([parseInt(e.metadata.widthOfGlyph(r), 10)])), "0" == r) return a.join("");
                        r = r.toString(16), a.push(i[4 - r.length], r)
                    }
                    return a.join("")
                },
                n = function(t) { var e, r, n, i, a, o, s; for (a = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", n = [], o = 0, s = (r = Object.keys(t).sort((function(t, e) { return t - e }))).length; o < s; o++) e = r[o], n.length >= 100 && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar", n = []), void 0 !== t[e] && null !== t[e] && "function" == typeof t[e].toString && (i = ("0000" + t[e].toString(16)).slice(-4), e = ("0000" + (+e).toString(16)).slice(-4), n.push("<" + e + "><" + i + ">")); return n.length && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar\n"), a += "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend" };
            e.events.push(["putFont", function(e) {
                ! function(e) {
                    var r = e.font,
                        i = e.out,
                        a = e.newObject,
                        o = e.putStream,
                        s = e.pdfEscapeWithNeededParanthesis;
                    if (r.metadata instanceof t.API.TTFFont && "Identity-H" === r.encoding) {
                        for (var u = r.metadata.Unicode.widths, h = r.metadata.subset.encode(r.metadata.glyIdsUsed, 1), c = "", l = 0; l < h.length; l++) c += String.fromCharCode(h[l]);
                        var f = a();
                        o({ data: c, addLength1: !0, objectId: f }), i("endobj");
                        var d = a();
                        o({ data: n(r.metadata.toUnicode), addLength1: !0, objectId: d }), i("endobj");
                        var p = a();
                        i("<<"), i("/Type /FontDescriptor"), i("/FontName /" + s(r.fontName)), i("/FontFile2 " + f + " 0 R"), i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)), i("/Flags " + r.metadata.flags), i("/StemV " + r.metadata.stemV), i("/ItalicAngle " + r.metadata.italicAngle), i("/Ascent " + r.metadata.ascender), i("/Descent " + r.metadata.decender), i("/CapHeight " + r.metadata.capHeight), i(">>"), i("endobj");
                        var g = a();
                        i("<<"), i("/Type /Font"), i("/BaseFont /" + s(r.fontName)), i("/FontDescriptor " + p + " 0 R"), i("/W " + t.API.PDFObject.convert(u)), i("/CIDToGIDMap /Identity"), i("/DW 1000"), i("/Subtype /CIDFontType2"), i("/CIDSystemInfo"), i("<<"), i("/Supplement 0"), i("/Registry (Adobe)"), i("/Ordering (" + r.encoding + ")"), i(">>"), i(">>"), i("endobj"), r.objectNumber = a(), i("<<"), i("/Type /Font"), i("/Subtype /Type0"), i("/ToUnicode " + d + " 0 R"), i("/BaseFont /" + s(r.fontName)), i("/Encoding /" + r.encoding), i("/DescendantFonts [" + g + " 0 R]"), i(">>"), i("endobj"), r.isAlreadyPutted = !0
                    }
                }(e)
            }]);
            e.events.push(["putFont", function(e) {
                ! function(e) {
                    var r = e.font,
                        i = e.out,
                        a = e.newObject,
                        o = e.putStream,
                        s = e.pdfEscapeWithNeededParanthesis;
                    if (r.metadata instanceof t.API.TTFFont && "WinAnsiEncoding" === r.encoding) {
                        for (var u = r.metadata.rawData, h = "", c = 0; c < u.length; c++) h += String.fromCharCode(u[c]);
                        var l = a();
                        o({ data: h, addLength1: !0, objectId: l }), i("endobj");
                        var f = a();
                        o({ data: n(r.metadata.toUnicode), addLength1: !0, objectId: f }), i("endobj");
                        var d = a();
                        i("<<"), i("/Descent " + r.metadata.decender), i("/CapHeight " + r.metadata.capHeight), i("/StemV " + r.metadata.stemV), i("/Type /FontDescriptor"), i("/FontFile2 " + l + " 0 R"), i("/Flags 96"), i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)), i("/FontName /" + s(r.fontName)), i("/ItalicAngle " + r.metadata.italicAngle), i("/Ascent " + r.metadata.ascender), i(">>"), i("endobj"), r.objectNumber = a();
                        for (var p = 0; p < r.metadata.hmtx.widths.length; p++) r.metadata.hmtx.widths[p] = parseInt(r.metadata.hmtx.widths[p] * (1e3 / r.metadata.head.unitsPerEm));
                        i("<</Subtype/TrueType/Type/Font/ToUnicode " + f + " 0 R/BaseFont/" + s(r.fontName) + "/FontDescriptor " + d + " 0 R/Encoding/" + r.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t.API.PDFObject.convert(r.metadata.hmtx.widths) + ">>"), i("endobj"), r.isAlreadyPutted = !0
                    }
                }(e)
            }]);
            var i = function(t) {
                var e, n = t.text || "",
                    i = t.x,
                    a = t.y,
                    o = t.options || {},
                    s = t.mutex || {},
                    u = s.pdfEscape,
                    h = s.activeFontKey,
                    c = s.fonts,
                    l = h,
                    f = "",
                    d = 0,
                    p = "",
                    g = c[l].encoding;
                if ("Identity-H" !== c[l].encoding) return { text: n, x: i, y: a, options: o, mutex: s };
                for (p = n, l = h, Array.isArray(n) && (p = n[0]), d = 0; d < p.length; d += 1) c[l].metadata.hasOwnProperty("cmap") && (e = c[l].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]), e || p[d].charCodeAt(0) < 256 && c[l].metadata.hasOwnProperty("Unicode") ? f += p[d] : f += "";
                var m = "";
                return parseInt(l.slice(1)) < 14 || "WinAnsiEncoding" === g ? m = u(f, l).split("").map((function(t) { return t.charCodeAt(0).toString(16) })).join("") : "Identity-H" === g && (m = r(f, c[l])), s.isHex = !0, { text: m, x: i, y: a, options: o, mutex: s }
            };
            e.events.push(["postProcessText", function(t) {
                var e = t.text || "",
                    r = [],
                    n = { text: e, x: t.x, y: t.y, options: t.options, mutex: t.mutex };
                if (Array.isArray(e)) {
                    var a = 0;
                    for (a = 0; a < e.length; a += 1) Array.isArray(e[a]) && 3 === e[a].length ? r.push([i(Object.assign({}, n, { text: e[a][0] })).text, e[a][1], e[a][2]]) : r.push(i(Object.assign({}, n, { text: e[a] })).text);
                    t.text = r
                } else t.text = i(Object.assign({}, n, { text: e })).text
            }])
        }(j),
        /**
         * @license
         * jsPDF virtual FileSystem functionality
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        function(t) {
            var e = function() { return void 0 === this.internal.vFS && (this.internal.vFS = {}), !0 };
            t.existsFileInVFS = function(t) { return e.call(this), void 0 !== this.internal.vFS[t] }, t.addFileToVFS = function(t, r) { return e.call(this), this.internal.vFS[t] = r, this }, t.getFileFromVFS = function(t) { return e.call(this), void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null }
        }(j.API),
        /**
         * @license
         * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
         * MIT License
         */
        function(t) {
            t.__bidiEngine__ = t.prototype.__bidiEngine__ = function(t) {
                var r, n, i, a, o, s, u, h = e,
                    c = [
                        [0, 3, 0, 1, 0, 0, 0],
                        [0, 3, 0, 1, 2, 2, 0],
                        [0, 3, 0, 17, 2, 0, 1],
                        [0, 3, 5, 5, 4, 1, 0],
                        [0, 3, 21, 21, 4, 0, 1],
                        [0, 3, 5, 5, 4, 2, 0]
                    ],
                    l = [
                        [2, 0, 1, 1, 0, 1, 0],
                        [2, 0, 1, 1, 0, 2, 0],
                        [2, 0, 2, 1, 3, 2, 0],
                        [2, 0, 2, 33, 3, 1, 1]
                    ],
                    f = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 },
                    d = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 },
                    p = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"],
                    g = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
                    m = !1,
                    b = 0;
                this.__bidiEngine__ = {};
                var v = function(t) {
                        var e = t.charCodeAt(),
                            r = e >> 8,
                            n = d[r];
                        return void 0 !== n ? h[256 * n + (255 & e)] : 252 === r || 253 === r ? "AL" : g.test(r) ? "L" : 8 === r ? "R" : "N"
                    },
                    w = function(t) { for (var e, r = 0; r < t.length; r++) { if ("L" === (e = v(t.charAt(r)))) return !1; if ("R" === e) return !0 } return !1 },
                    y = function(t, e, o, s) {
                        var u, h, c, l, f = e[s];
                        switch (f) {
                            case "L":
                            case "R":
                                m = !1;
                                break;
                            case "N":
                            case "AN":
                                break;
                            case "EN":
                                m && (f = "AN");
                                break;
                            case "AL":
                                m = !0, f = "R";
                                break;
                            case "WS":
                                f = "N";
                                break;
                            case "CS":
                                s < 1 || s + 1 >= e.length || "EN" !== (u = o[s - 1]) && "AN" !== u || "EN" !== (h = e[s + 1]) && "AN" !== h ? f = "N" : m && (h = "AN"), f = h === u ? h : "N";
                                break;
                            case "ES":
                                f = "EN" === (u = s > 0 ? o[s - 1] : "B") && s + 1 < e.length && "EN" === e[s + 1] ? "EN" : "N";
                                break;
                            case "ET":
                                if (s > 0 && "EN" === o[s - 1]) { f = "EN"; break }
                                if (m) { f = "N"; break }
                                for (c = s + 1, l = e.length; c < l && "ET" === e[c];) c++;
                                f = c < l && "EN" === e[c] ? "EN" : "N";
                                break;
                            case "NSM":
                                if (i && !a) {
                                    for (l = e.length, c = s + 1; c < l && "NSM" === e[c];) c++;
                                    if (c < l) {
                                        var d = t[s],
                                            p = d >= 1425 && d <= 2303 || 64286 === d;
                                        if (u = e[c], p && ("R" === u || "AL" === u)) { f = "R"; break }
                                    }
                                }
                                f = s < 1 || "B" === (u = e[s - 1]) ? "N" : o[s - 1];
                                break;
                            case "B":
                                m = !1, r = !0, f = b;
                                break;
                            case "S":
                                n = !0, f = "N";
                                break;
                            case "LRE":
                            case "RLE":
                            case "LRO":
                            case "RLO":
                            case "PDF":
                                m = !1;
                                break;
                            case "BN":
                                f = "N"
                        }
                        return f
                    },
                    _ = function(t, e, r) { var n = t.split(""); return r && x(n, r, { hiLevel: b }), n.reverse(), e && e.reverse(), n.join("") },
                    x = function(t, e, i) {
                        var a, o, s, u, h, d = -1,
                            p = t.length,
                            g = 0,
                            w = [],
                            _ = b ? l : c,
                            x = [];
                        for (m = !1, r = !1, n = !1, o = 0; o < p; o++) x[o] = v(t[o]);
                        for (s = 0; s < p; s++) {
                            if (h = g, w[s] = y(t, x, w, s), a = 240 & (g = _[h][f[w[s]]]), g &= 15, e[s] = u = _[g][5], a > 0)
                                if (16 === a) {
                                    for (o = d; o < s; o++) e[o] = 1;
                                    d = -1
                                } else d = -1;
                            if (_[g][6]) - 1 === d && (d = s);
                            else if (d > -1) {
                                for (o = d; o < s; o++) e[o] = u;
                                d = -1
                            }
                            "B" === x[s] && (e[s] = 0), i.hiLevel |= u
                        }
                        n && function(t, e, r) {
                            for (var n = 0; n < r; n++)
                                if ("S" === t[n]) { e[n] = b; for (var i = n - 1; i >= 0 && "WS" === t[i]; i--) e[i] = b }
                        }(x, e, p)
                    },
                    A = function(t, e, n, i, a) {
                        if (!(a.hiLevel < t)) {
                            if (1 === t && 1 === b && !r) return e.reverse(), void(n && n.reverse());
                            for (var o, s, u, h, c = e.length, l = 0; l < c;) {
                                if (i[l] >= t) {
                                    for (u = l + 1; u < c && i[u] >= t;) u++;
                                    for (h = l, s = u - 1; h < s; h++, s--) o = e[h], e[h] = e[s], e[s] = o, n && (o = n[h], n[h] = n[s], n[s] = o);
                                    l = u
                                }
                                l++
                            }
                        }
                    },
                    N = function(t, e, r) {
                        var n = t.split(""),
                            i = { hiLevel: b };
                        return r || (r = []), x(n, r, i),
                            function(t, e, r) {
                                if (0 !== r.hiLevel && u)
                                    for (var n, i = 0; i < t.length; i++) 1 === e[i] && (n = p.indexOf(t[i])) >= 0 && (t[i] = p[n + 1])
                            }(n, r, i), A(2, n, e, r, i), A(1, n, e, r, i), n.join("")
                    };
                return this.__bidiEngine__.doBidiReorder = function(t, e, r) {
                    if (function(t, e) {
                            if (e)
                                for (var r = 0; r < t.length; r++) e[r] = r;
                            void 0 === a && (a = w(t)), void 0 === s && (s = w(t))
                        }(t, e), i || !o || s)
                        if (i && o && a ^ s) b = a ? 1 : 0, t = _(t, e, r);
                        else if (!i && o && s) b = a ? 1 : 0, t = N(t, e, r), t = _(t, e);
                    else if (!i || a || o || s) {
                        if (i && !o && a ^ s) t = _(t, e), a ? (b = 0, t = N(t, e, r)) : (b = 1, t = N(t, e, r), t = _(t, e));
                        else if (i && a && !o && s) b = 1, t = N(t, e, r), t = _(t, e);
                        else if (!i && !o && a ^ s) {
                            var n = u;
                            a ? (b = 1, t = N(t, e, r), b = 0, u = !1, t = N(t, e, r), u = n) : (b = 0, t = N(t, e, r), t = _(t, e), b = 1, u = !1, t = N(t, e, r), u = n, t = _(t, e))
                        }
                    } else b = 0, t = N(t, e, r);
                    else b = a ? 1 : 0, t = N(t, e, r);
                    return t
                }, this.__bidiEngine__.setOptions = function(t) { t && (i = t.isInputVisual, o = t.isOutputVisual, a = t.isInputRtl, s = t.isOutputRtl, u = t.isSymmetricSwapping) }, this.__bidiEngine__.setOptions(t), this.__bidiEngine__
            };
            var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
                r = new t.__bidiEngine__({ isInputVisual: !0 });
            t.API.events.push(["postProcessText", function(t) {
                var e = t.text,
                    n = (t.x, t.y, t.options || {}),
                    i = (t.mutex, n.lang, []);
                if (n.isInputVisual = "boolean" != typeof n.isInputVisual || n.isInputVisual, r.setOptions(n), "[object Array]" === Object.prototype.toString.call(e)) {
                    var a = 0;
                    for (i = [], a = 0; a < e.length; a += 1) "[object Array]" === Object.prototype.toString.call(e[a]) ? i.push([r.doBidiReorder(e[a][0]), e[a][1], e[a][2]]) : i.push([r.doBidiReorder(e[a])]);
                    t.text = i
                } else t.text = r.doBidiReorder(e);
                r.setOptions({ isInputVisual: !0 })
            }])
        }(j), j.API.TTFFont = function() {
            function t(t) {
                var e;
                if (this.rawData = t, e = this.contents = new Lr(t), this.contents.pos = 4, "ttcf" === e.readString(4)) throw new Error("TTCF not supported.");
                e.pos = 0, this.parse(), this.subset = new Vr(this), this.registerTTF()
            }
            return t.open = function(e) { return new t(e) }, t.prototype.parse = function() { return this.directory = new Sr(this.contents), this.head = new Ir(this), this.name = new Mr(this), this.cmap = new Cr(this), this.toUnicode = {}, this.hhea = new jr(this), this.maxp = new qr(this), this.hmtx = new Rr(this), this.post = new Er(this), this.os2 = new Br(this), this.loca = new Hr(this), this.glyf = new Dr(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax] }, t.prototype.registerTTF = function() { var t, e, r, n, i; if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() { var e, r, n, i; for (i = [], e = 0, r = (n = this.bbox).length; e < r; e++) t = n[e], i.push(Math.round(t * this.scaleFactor)); return i }.call(this), this.stemV = 0, this.post.exists ? (r = 255 & (n = this.post.italic_angle), 0 != (32768 & (e = n >> 16)) && (e = -(1 + (65535 ^ e))), this.italicAngle = +(e + "." + r)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (i = this.familyClass) || 2 === i || 3 === i || 4 === i || 5 === i || 7 === i, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font") }, t.prototype.characterToGlyph = function(t) { var e; return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0 }, t.prototype.widthOfGlyph = function(t) { var e; return e = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * e }, t.prototype.widthOfString = function(t, e, r) { var n, i, a, o; for (a = 0, i = 0, o = (t = "" + t).length; 0 <= o ? i < o : i > o; i = 0 <= o ? ++i : --i) n = t.charCodeAt(i), a += this.widthOfGlyph(this.characterToGlyph(n)) + r * (1e3 / e) || 0; return a * (e / 1e3) }, t.prototype.lineHeight = function(t, e) { var r; return null == e && (e = !1), r = e ? this.lineGap : 0, (this.ascender + r - this.decender) / 1e3 * t }, t
        }();
    var Nr, Lr = function() {
            function t(t) { this.data = null != t ? t : [], this.pos = 0, this.length = this.data.length }
            return t.prototype.readByte = function() { return this.data[this.pos++] }, t.prototype.writeByte = function(t) { return this.data[this.pos++] = t }, t.prototype.readUInt32 = function() { return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte() }, t.prototype.writeUInt32 = function(t) { return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t) }, t.prototype.readInt32 = function() { var t; return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t }, t.prototype.writeInt32 = function(t) { return t < 0 && (t += 4294967296), this.writeUInt32(t) }, t.prototype.readUInt16 = function() { return this.readByte() << 8 | this.readByte() }, t.prototype.writeUInt16 = function(t) { return this.writeByte(t >> 8 & 255), this.writeByte(255 & t) }, t.prototype.readInt16 = function() { var t; return (t = this.readUInt16()) >= 32768 ? t - 65536 : t }, t.prototype.writeInt16 = function(t) { return t < 0 && (t += 65536), this.writeUInt16(t) }, t.prototype.readString = function(t) { var e, r; for (r = [], e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e) r[e] = String.fromCharCode(this.readByte()); return r.join("") }, t.prototype.writeString = function(t) { var e, r, n; for (n = [], e = 0, r = t.length; 0 <= r ? e < r : e > r; e = 0 <= r ? ++e : --e) n.push(this.writeByte(t.charCodeAt(e))); return n }, t.prototype.readShort = function() { return this.readInt16() }, t.prototype.writeShort = function(t) { return this.writeInt16(t) }, t.prototype.readLongLong = function() { var t, e, r, n, i, a, o, s; return t = this.readByte(), e = this.readByte(), r = this.readByte(), n = this.readByte(), i = this.readByte(), a = this.readByte(), o = this.readByte(), s = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ r) + 4294967296 * (255 ^ n) + 16777216 * (255 ^ i) + 65536 * (255 ^ a) + 256 * (255 ^ o) + (255 ^ s) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * r + 4294967296 * n + 16777216 * i + 65536 * a + 256 * o + s }, t.prototype.writeLongLong = function(t) { var e, r; return e = Math.floor(t / 4294967296), r = 4294967295 & t, this.writeByte(e >> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e), this.writeByte(r >> 24 & 255), this.writeByte(r >> 16 & 255), this.writeByte(r >> 8 & 255), this.writeByte(255 & r) }, t.prototype.readInt = function() { return this.readInt32() }, t.prototype.writeInt = function(t) { return this.writeInt32(t) }, t.prototype.read = function(t) { var e, r; for (e = [], r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r) e.push(this.readByte()); return e }, t.prototype.write = function(t) { var e, r, n, i; for (i = [], r = 0, n = t.length; r < n; r++) e = t[r], i.push(this.writeByte(e)); return i }, t
        }(),
        Sr = function() {
            var t;

            function e(t) { var e, r, n; for (this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {}, r = 0, n = this.tableCount; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r) e = { tag: t.readString(4), checksum: t.readInt(), offset: t.readInt(), length: t.readInt() }, this.tables[e.tag] = e }
            return e.prototype.encode = function(e) {
                var r, n, i, a, o, s, u, h, c, l, f, d, p;
                for (p in f = Object.keys(e).length, s = Math.log(2), c = 16 * Math.floor(Math.log(f) / s), a = Math.floor(c / s), h = 16 * f - c, (n = new Lr).writeInt(this.scalarType), n.writeShort(f), n.writeShort(c), n.writeShort(a), n.writeShort(h), i = 16 * f, u = n.pos + i, o = null, d = [], e)
                    for (l = e[p], n.writeString(p), n.writeInt(t(l)), n.writeInt(u), n.writeInt(l.length), d = d.concat(l), "head" === p && (o = u), u += l.length; u % 4;) d.push(0), u++;
                return n.write(d), r = 2981146554 - t(n.data), n.pos = o + 8, n.writeUInt32(r), n.data
            }, t = function(t) { var e, r, n, i; for (t = Tr.call(t); t.length % 4;) t.push(0); for (n = new Lr(t), r = 0, e = 0, i = t.length; e < i; e = e += 4) r += n.readUInt32(); return 4294967295 & r }, e
        }(),
        kr = {}.hasOwnProperty,
        Pr = function(t, e) {
            for (var r in e) kr.call(e, r) && (t[r] = e[r]);

            function n() { this.constructor = t }
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        },
        Ir = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "head", e.prototype.parse = function(t) { return t.pos = this.offset, this.version = t.readInt(), this.revision = t.readInt(), this.checkSumAdjustment = t.readInt(), this.magicNumber = t.readInt(), this.flags = t.readShort(), this.unitsPerEm = t.readShort(), this.created = t.readLongLong(), this.modified = t.readLongLong(), this.xMin = t.readShort(), this.yMin = t.readShort(), this.xMax = t.readShort(), this.yMax = t.readShort(), this.macStyle = t.readShort(), this.lowestRecPPEM = t.readShort(), this.fontDirectionHint = t.readShort(), this.indexToLocFormat = t.readShort(), this.glyphDataFormat = t.readShort() }, e.prototype.encode = function(t) { var e; return (e = new Lr).writeInt(this.version), e.writeInt(this.revision), e.writeInt(this.checkSumAdjustment), e.writeInt(this.magicNumber), e.writeShort(this.flags), e.writeShort(this.unitsPerEm), e.writeLongLong(this.created), e.writeLongLong(this.modified), e.writeShort(this.xMin), e.writeShort(this.yMin), e.writeShort(this.xMax), e.writeShort(this.yMax), e.writeShort(this.macStyle), e.writeShort(this.lowestRecPPEM), e.writeShort(this.fontDirectionHint), e.writeShort(t), e.writeShort(this.glyphDataFormat), e.data }, e
        }(Nr = function() {
            function t(t) {
                var e;
                this.file = t, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents))
            }
            return t.prototype.parse = function() {}, t.prototype.encode = function() {}, t.prototype.raw = function() { return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null }, t
        }()),
        Fr = function() {
            function t(t, e) {
                var r, n, i, a, o, s, u, h, c, l, f, d, p, g, m, b, v;
                switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = e + t.readInt(), c = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
                    case 0:
                        for (s = 0; s < 256; ++s) this.codeMap[s] = t.readByte();
                        break;
                    case 4:
                        for (f = t.readUInt16(), l = f / 2, t.pos += 6, i = function() { var e, r; for (r = [], s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e) r.push(t.readUInt16()); return r }(), t.pos += 2, p = function() { var e, r; for (r = [], s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e) r.push(t.readUInt16()); return r }(), u = function() { var e, r; for (r = [], s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e) r.push(t.readUInt16()); return r }(), h = function() { var e, r; for (r = [], s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e) r.push(t.readUInt16()); return r }(), n = (this.length - t.pos + this.offset) / 2, o = function() { var e, r; for (r = [], s = e = 0; 0 <= n ? e < n : e > n; s = 0 <= n ? ++e : --e) r.push(t.readUInt16()); return r }(), s = m = 0, v = i.length; m < v; s = ++m)
                            for (g = i[s], r = b = d = p[s]; d <= g ? b <= g : b >= g; r = d <= g ? ++b : --b) 0 === h[s] ? a = r + u[s] : 0 !== (a = o[h[s] / 2 + (r - d) - (l - s)] || 0) && (a += u[s]), this.codeMap[r] = 65535 & a
                }
                t.pos = c
            }
            return t.encode = function(t, e) {
                var r, n, i, a, o, s, u, h, c, l, f, d, p, g, m, b, v, w, y, _, x, A, N, L, S, k, P, I, F, C, j, B, E, O, M, q, R, T, D, z, U, H, V, W, G, Y;
                switch (I = new Lr, a = Object.keys(t).sort((function(t, e) { return t - e })), e) {
                    case "macroman":
                        for (p = 0, g = function() { var t = []; for (d = 0; d < 256; ++d) t.push(0); return t }(), b = { 0: 0 }, i = {}, F = 0, E = a.length; F < E; F++) null == b[V = t[n = a[F]]] && (b[V] = ++p), i[n] = { old: t[n], new: b[t[n]] }, g[n] = b[t[n]];
                        return I.writeUInt16(1), I.writeUInt16(0), I.writeUInt32(12), I.writeUInt16(0), I.writeUInt16(262), I.writeUInt16(0), I.write(g), { charMap: i, subtable: I.data, maxGlyphID: p + 1 };
                    case "unicode":
                        for (k = [], c = [], v = 0, b = {}, r = {}, m = u = null, C = 0, O = a.length; C < O; C++) null == b[y = t[n = a[C]]] && (b[y] = ++v), r[n] = { old: y, new: b[y] }, o = b[y] - n, null != m && o === u || (m && c.push(m), k.push(n), u = o), m = n;
                        for (m && c.push(m), c.push(65535), k.push(65535), L = 2 * (N = k.length), A = 2 * Math.pow(Math.log(N) / Math.LN2, 2), l = Math.log(A / 2) / Math.LN2, x = 2 * N - A, s = [], _ = [], f = [], d = j = 0, M = k.length; j < M; d = ++j) {
                            if (S = k[d], h = c[d], 65535 === S) { s.push(0), _.push(0); break }
                            if (S - (P = r[S].new) >= 32768)
                                for (s.push(0), _.push(2 * (f.length + N - d)), n = B = S; S <= h ? B <= h : B >= h; n = S <= h ? ++B : --B) f.push(r[n].new);
                            else s.push(P - S), _.push(0)
                        }
                        for (I.writeUInt16(3), I.writeUInt16(1), I.writeUInt32(12), I.writeUInt16(4), I.writeUInt16(16 + 8 * N + 2 * f.length), I.writeUInt16(0), I.writeUInt16(L), I.writeUInt16(A), I.writeUInt16(l), I.writeUInt16(x), U = 0, q = c.length; U < q; U++) n = c[U], I.writeUInt16(n);
                        for (I.writeUInt16(0), H = 0, R = k.length; H < R; H++) n = k[H], I.writeUInt16(n);
                        for (W = 0, T = s.length; W < T; W++) o = s[W], I.writeUInt16(o);
                        for (G = 0, D = _.length; G < D; G++) w = _[G], I.writeUInt16(w);
                        for (Y = 0, z = f.length; Y < z; Y++) p = f[Y], I.writeUInt16(p);
                        return { charMap: r, subtable: I.data, maxGlyphID: v + 1 }
                }
            }, t
        }(),
        Cr = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "cmap", e.prototype.parse = function(t) { var e, r, n; for (t.pos = this.offset, this.version = t.readUInt16(), n = t.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r) e = new Fr(t, this.offset), this.tables.push(e), e.isUnicode && null == this.unicode && (this.unicode = e); return !0 }, e.encode = function(t, e) { var r, n; return null == e && (e = "macroman"), r = Fr.encode(t, e), (n = new Lr).writeUInt16(0), n.writeUInt16(1), r.table = n.data.concat(r.subtable), r }, e
        }(Nr),
        jr = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "hhea", e.prototype.parse = function(t) { return t.pos = this.offset, this.version = t.readInt(), this.ascender = t.readShort(), this.decender = t.readShort(), this.lineGap = t.readShort(), this.advanceWidthMax = t.readShort(), this.minLeftSideBearing = t.readShort(), this.minRightSideBearing = t.readShort(), this.xMaxExtent = t.readShort(), this.caretSlopeRise = t.readShort(), this.caretSlopeRun = t.readShort(), this.caretOffset = t.readShort(), t.pos += 8, this.metricDataFormat = t.readShort(), this.numberOfMetrics = t.readUInt16() }, e
        }(Nr),
        Br = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "OS/2", e.prototype.parse = function(t) { if (t.pos = this.offset, this.version = t.readUInt16(), this.averageCharWidth = t.readShort(), this.weightClass = t.readUInt16(), this.widthClass = t.readUInt16(), this.type = t.readShort(), this.ySubscriptXSize = t.readShort(), this.ySubscriptYSize = t.readShort(), this.ySubscriptXOffset = t.readShort(), this.ySubscriptYOffset = t.readShort(), this.ySuperscriptXSize = t.readShort(), this.ySuperscriptYSize = t.readShort(), this.ySuperscriptXOffset = t.readShort(), this.ySuperscriptYOffset = t.readShort(), this.yStrikeoutSize = t.readShort(), this.yStrikeoutPosition = t.readShort(), this.familyClass = t.readShort(), this.panose = function() { var e, r; for (r = [], e = 0; e < 10; ++e) r.push(t.readByte()); return r }(), this.charRange = function() { var e, r; for (r = [], e = 0; e < 4; ++e) r.push(t.readInt()); return r }(), this.vendorID = t.readString(4), this.selection = t.readShort(), this.firstCharIndex = t.readShort(), this.lastCharIndex = t.readShort(), this.version > 0 && (this.ascent = t.readShort(), this.descent = t.readShort(), this.lineGap = t.readShort(), this.winAscent = t.readShort(), this.winDescent = t.readShort(), this.codePageRange = function() { var e, r; for (r = [], e = 0; e < 2; e = ++e) r.push(t.readInt()); return r }(), this.version > 1)) return this.xHeight = t.readShort(), this.capHeight = t.readShort(), this.defaultChar = t.readShort(), this.breakChar = t.readShort(), this.maxContext = t.readShort() }, e
        }(Nr),
        Er = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "post", e.prototype.parse = function(t) {
                var e, r, n;
                switch (t.pos = this.offset, this.format = t.readInt(), this.italicAngle = t.readInt(), this.underlinePosition = t.readShort(), this.underlineThickness = t.readShort(), this.isFixedPitch = t.readInt(), this.minMemType42 = t.readInt(), this.maxMemType42 = t.readInt(), this.minMemType1 = t.readInt(), this.maxMemType1 = t.readInt(), this.format) {
                    case 65536:
                        break;
                    case 131072:
                        var i;
                        for (r = t.readUInt16(), this.glyphNameIndex = [], i = 0; 0 <= r ? i < r : i > r; i = 0 <= r ? ++i : --i) this.glyphNameIndex.push(t.readUInt16());
                        for (this.names = [], n = []; t.pos < this.offset + this.length;) e = t.readByte(), n.push(this.names.push(t.readString(e)));
                        return n;
                    case 151552:
                        return r = t.readUInt16(), this.offsets = t.read(r);
                    case 196608:
                        break;
                    case 262144:
                        return this.map = function() { var e, r, n; for (n = [], i = e = 0, r = this.file.maxp.numGlyphs; 0 <= r ? e < r : e > r; i = 0 <= r ? ++e : --e) n.push(t.readUInt32()); return n }.call(this)
                }
            }, e
        }(Nr),
        Or = function(t, e) { this.raw = t, this.length = t.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID },
        Mr = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "name", e.prototype.parse = function(t) {
                var e, r, n, i, a, o, s, u, h, c, l;
                for (t.pos = this.offset, t.readShort(), e = t.readShort(), o = t.readShort(), r = [], i = 0; 0 <= e ? i < e : i > e; i = 0 <= e ? ++i : --i) r.push({ platformID: t.readShort(), encodingID: t.readShort(), languageID: t.readShort(), nameID: t.readShort(), length: t.readShort(), offset: this.offset + o + t.readShort() });
                for (s = {}, i = h = 0, c = r.length; h < c; i = ++h) n = r[i], t.pos = n.offset, u = t.readString(n.length), a = new Or(u, n), null == s[l = n.nameID] && (s[l] = []), s[n.nameID].push(a);
                this.strings = s, this.copyright = s[0], this.fontFamily = s[1], this.fontSubfamily = s[2], this.uniqueSubfamily = s[3], this.fontName = s[4], this.version = s[5];
                try { this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "") } catch (t) { this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "") }
                return this.trademark = s[7], this.manufacturer = s[8], this.designer = s[9], this.description = s[10], this.vendorUrl = s[11], this.designerUrl = s[12], this.license = s[13], this.licenseUrl = s[14], this.preferredFamily = s[15], this.preferredSubfamily = s[17], this.compatibleFull = s[18], this.sampleText = s[19]
            }, e
        }(Nr),
        qr = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "maxp", e.prototype.parse = function(t) { return t.pos = this.offset, this.version = t.readInt(), this.numGlyphs = t.readUInt16(), this.maxPoints = t.readUInt16(), this.maxContours = t.readUInt16(), this.maxCompositePoints = t.readUInt16(), this.maxComponentContours = t.readUInt16(), this.maxZones = t.readUInt16(), this.maxTwilightPoints = t.readUInt16(), this.maxStorage = t.readUInt16(), this.maxFunctionDefs = t.readUInt16(), this.maxInstructionDefs = t.readUInt16(), this.maxStackElements = t.readUInt16(), this.maxSizeOfInstructions = t.readUInt16(), this.maxComponentElements = t.readUInt16(), this.maxComponentDepth = t.readUInt16() }, e
        }(Nr),
        Rr = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "hmtx", e.prototype.parse = function(t) { var e, r, n, i, a, o, s; for (t.pos = this.offset, this.metrics = [], e = 0, o = this.file.hhea.numberOfMetrics; 0 <= o ? e < o : e > o; e = 0 <= o ? ++e : --e) this.metrics.push({ advance: t.readUInt16(), lsb: t.readInt16() }); for (n = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() { var r, i; for (i = [], e = r = 0; 0 <= n ? r < n : r > n; e = 0 <= n ? ++r : --r) i.push(t.readInt16()); return i }(), this.widths = function() { var t, e, r, n; for (n = [], t = 0, e = (r = this.metrics).length; t < e; t++) i = r[t], n.push(i.advance); return n }.call(this), r = this.widths[this.widths.length - 1], s = [], e = a = 0; 0 <= n ? a < n : a > n; e = 0 <= n ? ++a : --a) s.push(this.widths.push(r)); return s }, e.prototype.forGlyph = function(t) { return t in this.metrics ? this.metrics[t] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[t - this.metrics.length] } }, e
        }(Nr),
        Tr = [].slice,
        Dr = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "glyf", e.prototype.parse = function() { return this.cache = {} }, e.prototype.glyphFor = function(t) { var e, r, n, i, a, o, s, u, h, c; return t in this.cache ? this.cache[t] : (i = this.file.loca, e = this.file.contents, r = i.indexOf(t), 0 === (n = i.lengthOf(t)) ? this.cache[t] = null : (e.pos = this.offset + r, a = (o = new Lr(e.read(n))).readShort(), u = o.readShort(), c = o.readShort(), s = o.readShort(), h = o.readShort(), this.cache[t] = -1 === a ? new Ur(o, u, c, s, h) : new zr(o, a, u, c, s, h), this.cache[t])) }, e.prototype.encode = function(t, e, r) { var n, i, a, o, s; for (a = [], i = [], o = 0, s = e.length; o < s; o++) n = t[e[o]], i.push(a.length), n && (a = a.concat(n.encode(r))); return i.push(a.length), { table: a, offsets: i } }, e
        }(Nr),
        zr = function() {
            function t(t, e, r, n, i, a) { this.raw = t, this.numberOfContours = e, this.xMin = r, this.yMin = n, this.xMax = i, this.yMax = a, this.compound = !1 }
            return t.prototype.encode = function() { return this.raw.data }, t
        }(),
        Ur = function() {
            function t(t, e, r, n, i) { var a, o; for (this.raw = t, this.xMin = e, this.yMin = r, this.xMax = n, this.yMax = i, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], a = this.raw; o = a.readShort(), this.glyphOffsets.push(a.pos), this.glyphIDs.push(a.readUInt16()), 32 & o;) a.pos += 1 & o ? 4 : 2, 128 & o ? a.pos += 8 : 64 & o ? a.pos += 4 : 8 & o && (a.pos += 2) }
            return 1, 8, 32, 64, 128, t.prototype.encode = function() { var t, e, r; for (e = new Lr(Tr.call(this.raw.data)), t = 0, r = this.glyphIDs.length; t < r; ++t) e.pos = this.glyphOffsets[t]; return e.data }, t
        }(),
        Hr = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Pr(e, t), e.prototype.tag = "loca", e.prototype.parse = function(t) { var e, r; return t.pos = this.offset, e = this.file.head.indexToLocFormat, this.offsets = 0 === e ? function() { var e, n; for (n = [], r = 0, e = this.length; r < e; r += 2) n.push(2 * t.readUInt16()); return n }.call(this) : function() { var e, n; for (n = [], r = 0, e = this.length; r < e; r += 4) n.push(t.readUInt32()); return n }.call(this) }, e.prototype.indexOf = function(t) { return this.offsets[t] }, e.prototype.lengthOf = function(t) { return this.offsets[t + 1] - this.offsets[t] }, e.prototype.encode = function(t, e) {
                for (var r = new Uint32Array(this.offsets.length), n = 0, i = 0, a = 0; a < r.length; ++a)
                    if (r[a] = n, i < e.length && e[i] == a) {
                        ++i, r[a] = n;
                        var o = this.offsets[a],
                            s = this.offsets[a + 1] - o;
                        s > 0 && (n += s)
                    }
                for (var u = new Array(4 * r.length), h = 0; h < r.length; ++h) u[4 * h + 3] = 255 & r[h], u[4 * h + 2] = (65280 & r[h]) >> 8, u[4 * h + 1] = (16711680 & r[h]) >> 16, u[4 * h] = (4278190080 & r[h]) >> 24;
                return u
            }, e
        }(Nr),
        Vr = function() {
            function t(t) { this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33 }
            return t.prototype.generateCmap = function() { var t, e, r, n, i; for (e in n = this.font.cmap.tables[0].codeMap, t = {}, i = this.subset) r = i[e], t[e] = n[r]; return t }, t.prototype.glyphsFor = function(t) {
                var e, r, n, i, a, o, s;
                for (n = {}, a = 0, o = t.length; a < o; a++) n[i = t[a]] = this.font.glyf.glyphFor(i);
                for (i in e = [], n)(null != (r = n[i]) ? r.compound : void 0) && e.push.apply(e, r.glyphIDs);
                if (e.length > 0)
                    for (i in s = this.glyphsFor(e)) r = s[i], n[i] = r;
                return n
            }, t.prototype.encode = function(t, e) { var r, n, i, a, o, s, u, h, c, l, f, d, p, g, m; for (n in r = Cr.encode(this.generateCmap(), "unicode"), a = this.glyphsFor(t), f = { 0: 0 }, m = r.charMap) f[(s = m[n]).old] = s.new; for (d in l = r.maxGlyphID, a) d in f || (f[d] = l++); return h = function(t) { var e, r; for (e in r = {}, t) r[t[e]] = e; return r }(f), c = Object.keys(h).sort((function(t, e) { return t - e })), p = function() { var t, e, r; for (r = [], t = 0, e = c.length; t < e; t++) o = c[t], r.push(h[o]); return r }(), i = this.font.glyf.encode(a, p, f), u = this.font.loca.encode(i.offsets, p), g = { cmap: this.font.cmap.raw(), glyf: i.table, loca: u, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(e) }, this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()), this.font.directory.encode(g) }, t
        }();
    j.API.PDFObject = function() {
            var t;

            function e() {}
            return t = function(t, e) { return (Array(e + 1).join("0") + t).slice(-e) }, e.convert = function(r) { var n, i, a, o; if (Array.isArray(r)) return "[" + function() { var t, i, a; for (a = [], t = 0, i = r.length; t < i; t++) n = r[t], a.push(e.convert(n)); return a }().join(" ") + "]"; if ("string" == typeof r) return "/" + r; if (null != r ? r.isString : void 0) return "(" + r + ")"; if (r instanceof Date) return "(D:" + t(r.getUTCFullYear(), 4) + t(r.getUTCMonth(), 2) + t(r.getUTCDate(), 2) + t(r.getUTCHours(), 2) + t(r.getUTCMinutes(), 2) + t(r.getUTCSeconds(), 2) + "Z)"; if ("[object Object]" === {}.toString.call(r)) { for (i in a = ["<<"], r) o = r[i], a.push("/" + i + " " + e.convert(o)); return a.push(">>"), a.join("\n") } return "" + r }, e
        }(),
        /**
         * @license
         * Copyright (c) 2012 chick307 <chick307@gmail.com>
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
        function(t, e) {
            t.API.adler32cs = function() {
                var t = "function" == typeof ArrayBuffer && "function" == typeof Uint8Array,
                    e = null,
                    r = function() { if (!t) return function() { return !1 }; try { var r = {}; "function" == typeof r.Buffer && (e = r.Buffer) } catch (t) {} return function(t) { return t instanceof ArrayBuffer || null !== e && t instanceof e } }(),
                    n = null !== e ? function(t) { return new e(t, "utf8").toString("binary") } : function(t) { return unescape(encodeURIComponent(t)) },
                    i = function(t, e) { for (var r = 65535 & t, n = t >>> 16, i = 0, a = e.length; i < a; i++) n = (n + (r = (r + (255 & e.charCodeAt(i))) % 65521)) % 65521; return (n << 16 | r) >>> 0 },
                    a = function(t, e) { for (var r = 65535 & t, n = t >>> 16, i = 0, a = e.length; i < a; i++) n = (n + (r = (r + e[i]) % 65521)) % 65521; return (n << 16 | r) >>> 0 },
                    o = {},
                    s = o.Adler32 = (l = function(t) {
                        if (!(this instanceof l)) throw new TypeError("Constructor cannot called be as a function.");
                        if (!isFinite(t = null === t ? 1 : +t)) throw new Error("First arguments needs to be a finite number.");
                        this.checksum = t >>> 0
                    }, f = l.prototype = {}, f.constructor = l, l.from = ((u = function(t) {
                        if (!(this instanceof l)) throw new TypeError("Constructor cannot called be as a function.");
                        if (null === t) throw new Error("First argument needs to be a string.");
                        this.checksum = i(1, t.toString())
                    }).prototype = f, u), l.fromUtf8 = ((h = function(t) {
                        if (!(this instanceof l)) throw new TypeError("Constructor cannot called be as a function.");
                        if (null === t) throw new Error("First argument needs to be a string.");
                        var e = n(t.toString());
                        this.checksum = i(1, e)
                    }).prototype = f, h), t && (l.fromBuffer = ((c = function(t) { if (!(this instanceof l)) throw new TypeError("Constructor cannot called be as a function."); if (!r(t)) throw new Error("First argument needs to be ArrayBuffer."); var e = new Uint8Array(t); return this.checksum = a(1, e) }).prototype = f, c)), f.update = function(t) { if (null === t) throw new Error("First argument needs to be a string."); return t = t.toString(), this.checksum = i(this.checksum, t) }, f.updateUtf8 = function(t) { if (null === t) throw new Error("First argument needs to be a string."); var e = n(t.toString()); return this.checksum = i(this.checksum, e) }, t && (f.updateBuffer = function(t) { if (!r(t)) throw new Error("First argument needs to be ArrayBuffer."); var e = new Uint8Array(t); return this.checksum = a(this.checksum, e) }), f.clone = function() { return new s(this.checksum) }, l);
                var u, h, c, l, f;
                o.from = function(t) { if (null === t) throw new Error("First argument needs to be a string."); return i(1, t.toString()) }, o.fromUtf8 = function(t) { if (null === t) throw new Error("First argument needs to be a string."); var e = n(t.toString()); return i(1, e) }, t && (o.fromBuffer = function(t) { if (!r(t)) throw new Error("First argument need to be ArrayBuffer."); var e = new Uint8Array(t); return a(1, e) });
                return o
            }()
        }(j), t.AcroForm = _t, t.AcroFormAppearance = wt, t.AcroFormButton = ft, t.AcroFormCheckBox = mt, t.AcroFormChoiceField = ut, t.AcroFormComboBox = ct, t.AcroFormEditBox = lt, t.AcroFormListBox = ht, t.AcroFormPasswordField = vt, t.AcroFormPushButton = dt, t.AcroFormRadioButton = pt, t.AcroFormTextField = bt, t.GState = P, t.ShadingPattern = F, t.TilingPattern = C, t.default = j, t.jsPDF = j, Object.defineProperty(t, "__esModule", { value: !0 })
}));
//# sourceMappingURL=jspdf.umd.min.js.map