/* */ 
(function(Buffer, process) {
  (this.define || function(N, O) {
    this.sourceMapSupport = O();
  })("browser-source-map-support", function(N) {
    (function p(v, l, b) {
      function e(d, a) {
        if (!l[d]) {
          if (!v[d]) {
            var h = "function" == typeof require && require;
            if (!a && h)
              return h(d, !0);
            if (k)
              return k(d, !0);
            throw Error("Cannot find module '" + d + "'");
          }
          h = l[d] = {exports: {}};
          v[d][0].call(h.exports, function(a) {
            var b = v[d][1][a];
            return e(b ? b : a);
          }, h, h.exports, p, v, l, b);
        }
        return l[d].exports;
      }
      for (var k = "function" == typeof require && require,
          r = 0; r < b.length; r++)
        e(b[r]);
      return e;
    })({
      1: [function(p, v, l) {
        N = p("./source-map-support");
      }, {"./source-map-support": 19}],
      2: [function(p, v, l) {
        (function(b) {
          function e(b) {
            b = b.charCodeAt(0);
            if (43 === b || 45 === b)
              return 62;
            if (47 === b || 95 === b)
              return 63;
            if (48 > b)
              return -1;
            if (58 > b)
              return b - 48 + 52;
            if (91 > b)
              return b - 65;
            if (123 > b)
              return b - 97 + 26;
          }
          var k = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
          b.toByteArray = function(b) {
            function d(a) {
              c[f++] = a;
            }
            var a,
                h,
                n,
                t,
                c;
            if (0 < b.length % 4)
              throw Error("Invalid string. Length must be a multiple of 4");
            a = b.length;
            t = "=" === b.charAt(a - 2) ? 2 : "=" === b.charAt(a - 1) ? 1 : 0;
            c = new k(3 * b.length / 4 - t);
            h = 0 < t ? b.length - 4 : b.length;
            var f = 0;
            for (a = 0; a < h; a += 4)
              n = e(b.charAt(a)) << 18 | e(b.charAt(a + 1)) << 12 | e(b.charAt(a + 2)) << 6 | e(b.charAt(a + 3)), d((n & 16711680) >> 16), d((n & 65280) >> 8), d(n & 255);
            2 === t ? (n = e(b.charAt(a)) << 2 | e(b.charAt(a + 1)) >> 4, d(n & 255)) : 1 === t && (n = e(b.charAt(a)) << 10 | e(b.charAt(a + 1)) << 4 | e(b.charAt(a + 2)) >> 2, d(n >> 8 & 255), d(n & 255));
            return c;
          };
          b.fromByteArray = function(b) {
            var d,
                a = b.length % 3,
                h = "",
                n,
                e;
            d = 0;
            for (e = b.length - a; d < e; d += 3)
              n = (b[d] << 16) + (b[d + 1] << 8) + b[d + 2], n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 18 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 12 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n & 63), h += n;
            switch (a) {
              case 1:
                n = b[b.length - 1];
                h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 2);
                h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n << 4 & 63);
                h += "==";
                break;
              case 2:
                n = (b[b.length - 2] << 8) + b[b.length - 1], h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 10), h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 4 & 63), h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n << 2 & 63), h += "=";
            }
            return h;
          };
        })("undefined" === typeof l ? this.base64js = {} : l);
      }, {}],
      3: [function(p, v, l) {}, {}],
      4: [function(p, v, l) {
        function b(g, m, c) {
          if (!(this instanceof b))
            return new b(g, m, c);
          var y = typeof g;
          if ("base64" === m && "string" === y)
            for (g = g.trim ? g.trim() : g.replace(/^\s+|\s+$/g, ""); 0 !== g.length % 4; )
              g += "=";
          var a;
          if ("number" === y)
            a = A(g);
          else if ("string" === y)
            a = b.byteLength(g, m);
          else if ("object" === y)
            a = A(g.length);
          else
            throw Error("First argument needs to be a number, array or string.");
          var f;
          b._useTypedArrays ? f = b._augment(new Uint8Array(a)) : (f = this, f.length = a, f._isBuffer = !0);
          if (b._useTypedArrays && "number" === typeof g.byteLength)
            f._set(g);
          else {
            var d = g;
            if (L(d) || b.isBuffer(d) || d && "object" === typeof d && "number" === typeof d.length)
              for (m = 0; m < a; m++)
                b.isBuffer(g) ? f[m] = g.readUInt8(m) : f[m] = g[m];
            else if ("string" === y)
              f.write(g, 0, m);
            else if ("number" === y && !b._useTypedArrays && !c)
              for (m = 0; m < a; m++)
                f[m] = 0;
          }
          return f;
        }
        function e(g, m, c) {
          var y = "";
          for (c = Math.min(g.length, c); m < c; m++)
            y += String.fromCharCode(g[m]);
          return y;
        }
        function k(g, m, c, a) {
          a || (q("boolean" === typeof c, "missing or invalid endian"), q(void 0 !== m && null !== m, "missing offset"), q(m + 1 < g.length, "Trying to read beyond buffer length"));
          a = g.length;
          if (!(m >= a))
            return c ? (c = g[m], m + 1 < a && (c |= g[m + 1] << 8)) : (c = g[m] << 8, m + 1 < a && (c |= g[m + 1])), c;
        }
        function r(g, m, c, a) {
          a || (q("boolean" === typeof c, "missing or invalid endian"), q(void 0 !== m && null !== m, "missing offset"), q(m + 3 < g.length, "Trying to read beyond buffer length"));
          a = g.length;
          if (!(m >= a)) {
            var y;
            c ? (m + 2 < a && (y = g[m + 2] << 16), m + 1 < a && (y |= g[m + 1] << 8), y |= g[m], m + 3 < a && (y += g[m + 3] << 24 >>> 0)) : (m + 1 < a && (y = g[m + 1] << 16), m + 2 < a && (y |= g[m + 2] << 8), m + 3 < a && (y |= g[m + 3]), y += g[m] << 24 >>> 0);
            return y;
          }
        }
        function d(g, m, c, a) {
          a || (q("boolean" === typeof c, "missing or invalid endian"), q(void 0 !== m && null !== m, "missing offset"), q(m + 1 < g.length, "Trying to read beyond buffer length"));
          if (!(m >= g.length))
            return g = k(g, m, c, !0), g & 32768 ? -1 * (65535 - g + 1) : g;
        }
        function a(g, m, c, a) {
          a || (q("boolean" === typeof c, "missing or invalid endian"), q(void 0 !== m && null !== m, "missing offset"), q(m + 3 < g.length, "Trying to read beyond buffer length"));
          if (!(m >= g.length))
            return g = r(g, m, c, !0), g & 2147483648 ? -1 * (4294967295 - g + 1) : g;
        }
        function h(g, m, c, a) {
          a || (q("boolean" === typeof c, "missing or invalid endian"), q(m + 3 < g.length, "Trying to read beyond buffer length"));
          return J.read(g, m, c, 23, 4);
        }
        function n(g, m, c, a) {
          a || (q("boolean" === typeof c, "missing or invalid endian"), q(m + 7 < g.length, "Trying to read beyond buffer length"));
          return J.read(g, m, c, 52, 8);
        }
        function t(g, m, c, a, b) {
          b || (q(void 0 !== m && null !== m, "missing value"), q("boolean" === typeof a, "missing or invalid endian"), q(void 0 !== c && null !== c, "missing offset"), q(c + 1 < g.length, "trying to write beyond buffer length"), H(m, 65535));
          var y = g.length;
          if (!(c >= y))
            for (b = 0, y = Math.min(y - c, 2); b < y; b++)
              g[c + b] = (m & 255 << 8 * (a ? b : 1 - b)) >>> 8 * (a ? b : 1 - b);
        }
        function c(g, c, a, b, f) {
          f || (q(void 0 !== c && null !== c, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 3 < g.length, "trying to write beyond buffer length"), H(c, 4294967295));
          var m = g.length;
          if (!(a >= m))
            for (f = 0, m = Math.min(m - a, 4); f < m; f++)
              g[a + f] = c >>> 8 * (b ? f : 3 - f) & 255;
        }
        function f(g, c, a, b, f) {
          f || (q(void 0 !== c && null !== c, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 1 < g.length, "Trying to write beyond buffer length"), z(c, 32767, -32768));
          a >= g.length || (0 <= c ? t(g, c, a, b, f) : t(g, 65535 + c + 1, a, b, f));
        }
        function G(g, m, a, b, f) {
          f || (q(void 0 !== m && null !== m, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 3 < g.length, "Trying to write beyond buffer length"), z(m, 2147483647, -2147483648));
          a >= g.length || (0 <= m ? c(g, m, a, b, f) : c(g, 4294967295 + m + 1, a, b, f));
        }
        function u(g, c, a, b, f) {
          f || (q(void 0 !== c && null !== c, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 3 < g.length, "Trying to write beyond buffer length"), E(c, 3.4028234663852886E38, -3.4028234663852886E38));
          a >= g.length || J.write(g, c, a, b, 23, 4);
        }
        function M(g, c, a, b, f) {
          f || (q(void 0 !== c && null !== c, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 7 < g.length, "Trying to write beyond buffer length"), E(c, 1.7976931348623157E308, -1.7976931348623157E308));
          a >= g.length || J.write(g, c, a, b, 52, 8);
        }
        function I(g, c, a) {
          if ("number" !== typeof g)
            return a;
          g = ~~g;
          if (g >= c)
            return c;
          if (0 <= g)
            return g;
          g += c;
          return 0 <= g ? g : 0;
        }
        function A(g) {
          g = ~~Math.ceil(+g);
          return 0 > g ? 0 : g;
        }
        function L(g) {
          return (Array.isArray || function(g) {
            return "[object Array]" === Object.prototype.toString.call(g);
          })(g);
        }
        function C(g) {
          return 16 > g ? "0" + g.toString(16) : g.toString(16);
        }
        function x(g) {
          for (var c = [],
              a = 0; a < g.length; a++) {
            var b = g.charCodeAt(a);
            if (127 >= b)
              c.push(g.charCodeAt(a));
            else {
              var f = a;
              55296 <= b && 57343 >= b && a++;
              b = encodeURIComponent(g.slice(f, a + 1)).substr(1).split("%");
              for (f = 0; f < b.length; f++)
                c.push(parseInt(b[f], 16));
            }
          }
          return c;
        }
        function K(g) {
          for (var c = [],
              a = 0; a < g.length; a++)
            c.push(g.charCodeAt(a) & 255);
          return c;
        }
        function B(g, c, a, b) {
          for (var m = 0; m < b && !(m + a >= c.length || m >= g.length); m++)
            c[m + a] = g[m];
          return m;
        }
        function F(g) {
          try {
            return decodeURIComponent(g);
          } catch (m) {
            return String.fromCharCode(65533);
          }
        }
        function H(g, c) {
          q("number" === typeof g, "cannot write a non-number as a number");
          q(0 <= g, "specified a negative value for writing an unsigned value");
          q(g <= c, "value is larger than maximum value for type");
          q(Math.floor(g) === g, "value has a fractional component");
        }
        function z(g, c, a) {
          q("number" === typeof g, "cannot write a non-number as a number");
          q(g <= c, "value larger than maximum allowed value");
          q(g >= a, "value smaller than minimum allowed value");
          q(Math.floor(g) === g, "value has a fractional component");
        }
        function E(g, c, a) {
          q("number" === typeof g, "cannot write a non-number as a number");
          q(g <= c, "value larger than maximum allowed value");
          q(g >= a, "value smaller than minimum allowed value");
        }
        function q(g, c) {
          if (!g)
            throw Error(c || "Failed assertion");
        }
        var D = p("base64-js"),
            J = p("ieee754");
        l.Buffer = b;
        l.SlowBuffer = b;
        l.INSPECT_MAX_BYTES = 50;
        b.poolSize = 8192;
        b._useTypedArrays = function() {
          try {
            var g = new ArrayBuffer(0),
                c = new Uint8Array(g);
            c.foo = function() {
              return 42;
            };
            return 42 === c.foo() && "function" === typeof c.subarray;
          } catch (y) {
            return !1;
          }
        }();
        b.isEncoding = function(g) {
          switch (String(g).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "raw":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        };
        b.isBuffer = function(g) {
          return !(null === g || void 0 === g || !g._isBuffer);
        };
        b.byteLength = function(g, c) {
          var a;
          g += "";
          switch (c || "utf8") {
            case "hex":
              a = g.length / 2;
              break;
            case "utf8":
            case "utf-8":
              a = x(g).length;
              break;
            case "ascii":
            case "binary":
            case "raw":
              a = g.length;
              break;
            case "base64":
              a = D.toByteArray(g).length;
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              a = 2 * g.length;
              break;
            default:
              throw Error("Unknown encoding");
          }
          return a;
        };
        b.concat = function(g, c) {
          q(L(g), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array.");
          if (0 === g.length)
            return new b(0);
          if (1 === g.length)
            return g[0];
          var a;
          if ("number" !== typeof c)
            for (a = c = 0; a < g.length; a++)
              c += g[a].length;
          var m = new b(c),
              f = 0;
          for (a = 0; a < g.length; a++) {
            var d = g[a];
            d.copy(m, f);
            f += d.length;
          }
          return m;
        };
        b.prototype.write = function(g, c, a, f) {
          if (isFinite(c))
            isFinite(a) || (f = a, a = void 0);
          else {
            var m = f;
            f = c;
            c = a;
            a = m;
          }
          c = Number(c) || 0;
          m = this.length - c;
          a ? (a = Number(a), a > m && (a = m)) : a = m;
          f = String(f || "utf8").toLowerCase();
          switch (f) {
            case "hex":
              c = Number(c) || 0;
              f = this.length - c;
              a ? (a = Number(a), a > f && (a = f)) : a = f;
              f = g.length;
              q(0 === f % 2, "Invalid hex string");
              a > f / 2 && (a = f / 2);
              for (f = 0; f < a; f++)
                m = parseInt(g.substr(2 * f, 2), 16), q(!isNaN(m), "Invalid hex string"), this[c + f] = m;
              b._charsWritten = 2 * f;
              g = f;
              break;
            case "utf8":
            case "utf-8":
              g = b._charsWritten = B(x(g), this, c, a);
              break;
            case "ascii":
              g = b._charsWritten = B(K(g), this, c, a);
              break;
            case "binary":
              g = b._charsWritten = B(K(g), this, c, a);
              break;
            case "base64":
              g = b._charsWritten = B(D.toByteArray(g), this, c, a);
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              for (var d,
                  m = [],
                  h = 0; h < g.length; h++)
                d = g.charCodeAt(h), f = d >> 8, d %= 256, m.push(d), m.push(f);
              g = b._charsWritten = B(m, this, c, a);
              break;
            default:
              throw Error("Unknown encoding");
          }
          return g;
        };
        b.prototype.toString = function(g, c, a) {
          g = String(g || "utf8").toLowerCase();
          c = Number(c) || 0;
          a = void 0 !== a ? Number(a) : a = this.length;
          if (a === c)
            return "";
          switch (g) {
            case "hex":
              g = this.length;
              if (!c || 0 > c)
                c = 0;
              if (!a || 0 > a || a > g)
                a = g;
              for (g = ""; c < a; c++)
                g += C(this[c]);
              a = g;
              break;
            case "utf8":
            case "utf-8":
              var f = g = "";
              for (a = Math.min(this.length, a); c < a; c++)
                127 >= this[c] ? (g += F(f) + String.fromCharCode(this[c]), f = "") : f += "%" + this[c].toString(16);
              a = g + F(f);
              break;
            case "ascii":
              a = e(this, c, a);
              break;
            case "binary":
              a = e(this, c, a);
              break;
            case "base64":
              a = 0 === c && a === this.length ? D.fromByteArray(this) : D.fromByteArray(this.slice(c, a));
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              a = this.slice(c, a);
              c = "";
              for (g = 0; g < a.length; g += 2)
                c += String.fromCharCode(a[g] + 256 * a[g + 1]);
              a = c;
              break;
            default:
              throw Error("Unknown encoding");
          }
          return a;
        };
        b.prototype.toJSON = function() {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        b.prototype.copy = function(g, c, a, f) {
          a || (a = 0);
          f || 0 === f || (f = this.length);
          c || (c = 0);
          if (f !== a && 0 !== g.length && 0 !== this.length)
            if (q(f >= a, "sourceEnd < sourceStart"), q(0 <= c && c < g.length, "targetStart out of bounds"), q(0 <= a && a < this.length, "sourceStart out of bounds"), q(0 <= f && f <= this.length, "sourceEnd out of bounds"), f > this.length && (f = this.length), g.length - c < f - a && (f = g.length - c + a), f -= a, 100 > f || !b._useTypedArrays)
              for (var m = 0; m < f; m++)
                g[m + c] = this[m + a];
            else
              g._set(this.subarray(a, a + f), c);
        };
        b.prototype.slice = function(a, c) {
          var g = this.length;
          a = I(a, g, 0);
          c = I(c, g, g);
          if (b._useTypedArrays)
            return b._augment(this.subarray(a, c));
          for (var g = c - a,
              f = new b(g, void 0, !0),
              m = 0; m < g; m++)
            f[m] = this[m + a];
          return f;
        };
        b.prototype.get = function(a) {
          console.log(".get() is deprecated. Access using array indexes instead.");
          return this.readUInt8(a);
        };
        b.prototype.set = function(a, c) {
          console.log(".set() is deprecated. Access using array indexes instead.");
          return this.writeUInt8(a, c);
        };
        b.prototype.readUInt8 = function(a, c) {
          c || (q(void 0 !== a && null !== a, "missing offset"), q(a < this.length, "Trying to read beyond buffer length"));
          if (!(a >= this.length))
            return this[a];
        };
        b.prototype.readUInt16LE = function(a, c) {
          return k(this, a, !0, c);
        };
        b.prototype.readUInt16BE = function(a, c) {
          return k(this, a, !1, c);
        };
        b.prototype.readUInt32LE = function(a, c) {
          return r(this, a, !0, c);
        };
        b.prototype.readUInt32BE = function(a, c) {
          return r(this, a, !1, c);
        };
        b.prototype.readInt8 = function(a, c) {
          c || (q(void 0 !== a && null !== a, "missing offset"), q(a < this.length, "Trying to read beyond buffer length"));
          if (!(a >= this.length))
            return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a];
        };
        b.prototype.readInt16LE = function(a, c) {
          return d(this, a, !0, c);
        };
        b.prototype.readInt16BE = function(a, c) {
          return d(this, a, !1, c);
        };
        b.prototype.readInt32LE = function(c, f) {
          return a(this, c, !0, f);
        };
        b.prototype.readInt32BE = function(c, f) {
          return a(this, c, !1, f);
        };
        b.prototype.readFloatLE = function(a, c) {
          return h(this, a, !0, c);
        };
        b.prototype.readFloatBE = function(a, c) {
          return h(this, a, !1, c);
        };
        b.prototype.readDoubleLE = function(a, c) {
          return n(this, a, !0, c);
        };
        b.prototype.readDoubleBE = function(a, c) {
          return n(this, a, !1, c);
        };
        b.prototype.writeUInt8 = function(a, c, f) {
          f || (q(void 0 !== a && null !== a, "missing value"), q(void 0 !== c && null !== c, "missing offset"), q(c < this.length, "trying to write beyond buffer length"), H(a, 255));
          c >= this.length || (this[c] = a);
        };
        b.prototype.writeUInt16LE = function(a, c, f) {
          t(this, a, c, !0, f);
        };
        b.prototype.writeUInt16BE = function(a, c, f) {
          t(this, a, c, !1, f);
        };
        b.prototype.writeUInt32LE = function(a, f, b) {
          c(this, a, f, !0, b);
        };
        b.prototype.writeUInt32BE = function(a, f, b) {
          c(this, a, f, !1, b);
        };
        b.prototype.writeInt8 = function(a, c, f) {
          f || (q(void 0 !== a && null !== a, "missing value"), q(void 0 !== c && null !== c, "missing offset"), q(c < this.length, "Trying to write beyond buffer length"), z(a, 127, -128));
          c >= this.length || (0 <= a ? this.writeUInt8(a, c, f) : this.writeUInt8(255 + a + 1, c, f));
        };
        b.prototype.writeInt16LE = function(a, c, b) {
          f(this, a, c, !0, b);
        };
        b.prototype.writeInt16BE = function(a, c, b) {
          f(this, a, c, !1, b);
        };
        b.prototype.writeInt32LE = function(a, c, f) {
          G(this, a, c, !0, f);
        };
        b.prototype.writeInt32BE = function(a, c, f) {
          G(this, a, c, !1, f);
        };
        b.prototype.writeFloatLE = function(a, c, f) {
          u(this, a, c, !0, f);
        };
        b.prototype.writeFloatBE = function(a, c, f) {
          u(this, a, c, !1, f);
        };
        b.prototype.writeDoubleLE = function(a, c, f) {
          M(this, a, c, !0, f);
        };
        b.prototype.writeDoubleBE = function(a, c, f) {
          M(this, a, c, !1, f);
        };
        b.prototype.fill = function(a, c, f) {
          a || (a = 0);
          c || (c = 0);
          f || (f = this.length);
          "string" === typeof a && (a = a.charCodeAt(0));
          q("number" === typeof a && !isNaN(a), "value is not a number");
          q(f >= c, "end < start");
          if (f !== c && 0 !== this.length)
            for (q(0 <= c && c < this.length, "start out of bounds"), q(0 <= f && f <= this.length, "end out of bounds"); c < f; c++)
              this[c] = a;
        };
        b.prototype.inspect = function() {
          for (var a = [],
              c = this.length,
              f = 0; f < c; f++)
            if (a[f] = C(this[f]), f === l.INSPECT_MAX_BYTES) {
              a[f + 1] = "...";
              break;
            }
          return "<Buffer " + a.join(" ") + ">";
        };
        b.prototype.toArrayBuffer = function() {
          if ("undefined" !== typeof Uint8Array) {
            if (b._useTypedArrays)
              return (new b(this)).buffer;
            for (var a = new Uint8Array(this.length),
                c = 0,
                f = a.length; c < f; c += 1)
              a[c] = this[c];
            return a.buffer;
          }
          throw Error("Buffer.toArrayBuffer not supported in this browser");
        };
        var w = b.prototype;
        b._augment = function(a) {
          a._isBuffer = !0;
          a._get = a.get;
          a._set = a.set;
          a.get = w.get;
          a.set = w.set;
          a.write = w.write;
          a.toString = w.toString;
          a.toLocaleString = w.toString;
          a.toJSON = w.toJSON;
          a.copy = w.copy;
          a.slice = w.slice;
          a.readUInt8 = w.readUInt8;
          a.readUInt16LE = w.readUInt16LE;
          a.readUInt16BE = w.readUInt16BE;
          a.readUInt32LE = w.readUInt32LE;
          a.readUInt32BE = w.readUInt32BE;
          a.readInt8 = w.readInt8;
          a.readInt16LE = w.readInt16LE;
          a.readInt16BE = w.readInt16BE;
          a.readInt32LE = w.readInt32LE;
          a.readInt32BE = w.readInt32BE;
          a.readFloatLE = w.readFloatLE;
          a.readFloatBE = w.readFloatBE;
          a.readDoubleLE = w.readDoubleLE;
          a.readDoubleBE = w.readDoubleBE;
          a.writeUInt8 = w.writeUInt8;
          a.writeUInt16LE = w.writeUInt16LE;
          a.writeUInt16BE = w.writeUInt16BE;
          a.writeUInt32LE = w.writeUInt32LE;
          a.writeUInt32BE = w.writeUInt32BE;
          a.writeInt8 = w.writeInt8;
          a.writeInt16LE = w.writeInt16LE;
          a.writeInt16BE = w.writeInt16BE;
          a.writeInt32LE = w.writeInt32LE;
          a.writeInt32BE = w.writeInt32BE;
          a.writeFloatLE = w.writeFloatLE;
          a.writeFloatBE = w.writeFloatBE;
          a.writeDoubleLE = w.writeDoubleLE;
          a.writeDoubleBE = w.writeDoubleBE;
          a.fill = w.fill;
          a.inspect = w.inspect;
          a.toArrayBuffer = w.toArrayBuffer;
          return a;
        };
      }, {
        "base64-js": 2,
        ieee754: 5
      }],
      5: [function(p, v, l) {
        l.read = function(b, e, k, r, d) {
          var a;
          a = 8 * d - r - 1;
          var h = (1 << a) - 1,
              n = h >> 1,
              t = -7;
          d = k ? d - 1 : 0;
          var c = k ? -1 : 1,
              f = b[e + d];
          d += c;
          k = f & (1 << -t) - 1;
          f >>= -t;
          for (t += a; 0 < t; k = 256 * k + b[e + d], d += c, t -= 8)
            ;
          a = k & (1 << -t) - 1;
          k >>= -t;
          for (t += r; 0 < t; a = 256 * a + b[e + d], d += c, t -= 8)
            ;
          if (0 === k)
            k = 1 - n;
          else {
            if (k === h)
              return a ? NaN : Infinity * (f ? -1 : 1);
            a += Math.pow(2, r);
            k -= n;
          }
          return (f ? -1 : 1) * a * Math.pow(2, k - r);
        };
        l.write = function(b, e, k, r, d, a) {
          var h,
              n = 8 * a - d - 1,
              t = (1 << n) - 1,
              c = t >> 1,
              f = 23 === d ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
          a = r ? 0 : a - 1;
          var G = r ? 1 : -1,
              u = 0 > e || 0 === e && 0 > 1 / e ? 1 : 0;
          e = Math.abs(e);
          isNaN(e) || Infinity === e ? (e = isNaN(e) ? 1 : 0, r = t) : (r = Math.floor(Math.log(e) / Math.LN2), 1 > e * (h = Math.pow(2, -r)) && (r--, h *= 2), e = 1 <= r + c ? e + f / h : e + f * Math.pow(2, 1 - c), 2 <= e * h && (r++, h /= 2), r + c >= t ? (e = 0, r = t) : 1 <= r + c ? (e = (e * h - 1) * Math.pow(2, d), r += c) : (e = e * Math.pow(2, c - 1) * Math.pow(2, d), r = 0));
          for (; 8 <= d; b[k + a] = e & 255, a += G, e /= 256, d -= 8)
            ;
          r = r << d | e;
          for (n += d; 0 < n; b[k + a] = r & 255, a += G, r /= 256, n -= 8)
            ;
          b[k + a - G] |= 128 * u;
        };
      }, {}],
      6: [function(p, v, l) {
        (function(b) {
          function e(a, b) {
            for (var d = 0,
                h = a.length - 1; 0 <= h; h--) {
              var c = a[h];
              "." === c ? a.splice(h, 1) : ".." === c ? (a.splice(h, 1), d++) : d && (a.splice(h, 1), d--);
            }
            if (b)
              for (; d--; d)
                a.unshift("..");
            return a;
          }
          function k(a, b) {
            if (a.filter)
              return a.filter(b);
            for (var d = [],
                h = 0; h < a.length; h++)
              b(a[h], h, a) && d.push(a[h]);
            return d;
          }
          var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          l.resolve = function() {
            for (var a = "",
                d = !1,
                n = arguments.length - 1; -1 <= n && !d; n--) {
              var t = 0 <= n ? arguments[n] : b.cwd();
              if ("string" !== typeof t)
                throw new TypeError("Arguments to path.resolve must be strings");
              t && (a = t + "/" + a, d = "/" === t.charAt(0));
            }
            a = e(k(a.split("/"), function(a) {
              return !!a;
            }), !d).join("/");
            return (d ? "/" : "") + a || ".";
          };
          l.normalize = function(a) {
            var b = l.isAbsolute(a),
                n = "/" === d(a, -1);
            (a = e(k(a.split("/"), function(a) {
              return !!a;
            }), !b).join("/")) || b || (a = ".");
            a && n && (a += "/");
            return (b ? "/" : "") + a;
          };
          l.isAbsolute = function(a) {
            return "/" === a.charAt(0);
          };
          l.join = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return l.normalize(k(a, function(a, b) {
              if ("string" !== typeof a)
                throw new TypeError("Arguments to path.join must be strings");
              return a;
            }).join("/"));
          };
          l.relative = function(a, b) {
            function d(a) {
              for (var c = 0; c < a.length && "" === a[c]; c++)
                ;
              for (var f = a.length - 1; 0 <= f && "" === a[f]; f--)
                ;
              return c > f ? [] : a.slice(c, f - c + 1);
            }
            a = l.resolve(a).substr(1);
            b = l.resolve(b).substr(1);
            for (var h = d(a.split("/")),
                c = d(b.split("/")),
                f = Math.min(h.length, c.length),
                G = f,
                u = 0; u < f; u++)
              if (h[u] !== c[u]) {
                G = u;
                break;
              }
            f = [];
            for (u = G; u < h.length; u++)
              f.push("..");
            f = f.concat(c.slice(G));
            return f.join("/");
          };
          l.sep = "/";
          l.delimiter = ":";
          l.dirname = function(a) {
            var b = r.exec(a).slice(1);
            a = b[0];
            b = b[1];
            if (!a && !b)
              return ".";
            b && (b = b.substr(0, b.length - 1));
            return a + b;
          };
          l.basename = function(a, b) {
            var d = r.exec(a).slice(1)[2];
            b && d.substr(-1 * b.length) === b && (d = d.substr(0, d.length - b.length));
            return d;
          };
          l.extname = function(a) {
            return r.exec(a).slice(1)[3];
          };
          var d = "b" === "ab".substr(-1) ? function(a, b, d) {
            return a.substr(b, d);
          } : function(a, b, d) {
            0 > b && (b = a.length + b);
            return a.substr(b, d);
          };
        }).call(this, p("node_modules/process/browser.js"));
      }, {"node_modules/process/browser.js": 7}],
      7: [function(p, v, l) {
        function b() {}
        p = v.exports = {};
        p.nextTick = function() {
          if ("undefined" !== typeof window && window.setImmediate)
            return function(b) {
              return window.setImmediate(b);
            };
          if ("undefined" !== typeof window && window.postMessage && window.addEventListener) {
            var b = [];
            window.addEventListener("message", function(e) {
              var k = e.source;
              k !== window && null !== k || "process-tick" !== e.data || (e.stopPropagation(), 0 < b.length && b.shift()());
            }, !0);
            return function(e) {
              b.push(e);
              window.postMessage("process-tick", "*");
            };
          }
          return function(b) {
            setTimeout(b, 0);
          };
        }();
        p.title = "browser";
        p.browser = !0;
        p.env = {};
        p.argv = [];
        p.on = b;
        p.once = b;
        p.off = b;
        p.emit = b;
        p.binding = function(b) {
          throw Error("process.binding is not supported");
        };
        p.cwd = function() {
          return "/";
        };
        p.chdir = function(b) {
          throw Error("process.chdir is not supported");
        };
      }, {}],
      8: [function(p, v, l) {
        function b() {
          this._array = [];
          this._set = Object.create(null);
        }
        var e = p("./util"),
            k = Object.prototype.hasOwnProperty;
        b.fromArray = function(e, d) {
          for (var a = new b,
              h = 0,
              n = e.length; h < n; h++)
            a.add(e[h], d);
          return a;
        };
        b.prototype.size = function() {
          return Object.getOwnPropertyNames(this._set).length;
        };
        b.prototype.add = function(b, d) {
          var a = e.toSetString(b),
              h = k.call(this._set, a),
              n = this._array.length;
          h && !d || this._array.push(b);
          h || (this._set[a] = n);
        };
        b.prototype.has = function(b) {
          b = e.toSetString(b);
          return k.call(this._set, b);
        };
        b.prototype.indexOf = function(b) {
          var d = e.toSetString(b);
          if (k.call(this._set, d))
            return this._set[d];
          throw Error('"' + b + '" is not in the set.');
        };
        b.prototype.at = function(b) {
          if (0 <= b && b < this._array.length)
            return this._array[b];
          throw Error("No element indexed by " + b);
        };
        b.prototype.toArray = function() {
          return this._array.slice();
        };
        l.ArraySet = b;
      }, {"./util": 17}],
      9: [function(p, v, l) {
        var b = p("./base64");
        l.encode = function(e) {
          var k = "",
              r = 0 > e ? (-e << 1) + 1 : (e << 1) + 0;
          do
            e = r & 31, r >>>= 5, 0 < r && (e |= 32), k += b.encode(e);
 while (0 < r);
          return k;
        };
        l.decode = function(e, k, r) {
          var d = e.length,
              a = 0,
              h = 0,
              n,
              t;
          do {
            if (k >= d)
              throw Error("Expected more digits in base 64 VLQ value.");
            t = b.decode(e.charCodeAt(k++));
            if (-1 === t)
              throw Error("Invalid base64 digit: " + e.charAt(k - 1));
            n = !!(t & 32);
            t &= 31;
            a += t << h;
            h += 5;
          } while (n);
          e = a >> 1;
          r.value = 1 === (a & 1) ? -e : e;
          r.rest = k;
        };
      }, {"./base64": 10}],
      10: [function(p, v, l) {
        var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        l.encode = function(e) {
          if (0 <= e && e < b.length)
            return b[e];
          throw new TypeError("Must be between 0 and 63: " + e);
        };
        l.decode = function(b) {
          return 65 <= b && 90 >= b ? b - 65 : 97 <= b && 122 >= b ? b - 97 + 26 : 48 <= b && 57 >= b ? b - 48 + 52 : 43 == b ? 62 : 47 == b ? 63 : -1;
        };
      }, {}],
      11: [function(p, v, l) {
        function b(e, k, r, d, a, h) {
          var n = Math.floor((k - e) / 2) + e,
              t = a(r, d[n], !0);
          return 0 === t ? n : 0 < t ? 1 < k - n ? b(n, k, r, d, a, h) : h == l.LEAST_UPPER_BOUND ? k < d.length ? k : -1 : n : 1 < n - e ? b(e, n, r, d, a, h) : h == l.LEAST_UPPER_BOUND ? n : 0 > e ? -1 : e;
        }
        l.GREATEST_LOWER_BOUND = 1;
        l.LEAST_UPPER_BOUND = 2;
        l.search = function(e, k, r, d) {
          if (0 === k.length)
            return -1;
          e = b(-1, k.length, e, k, r, d || l.GREATEST_LOWER_BOUND);
          if (0 > e)
            return -1;
          for (; 0 <= e - 1 && 0 === r(k[e], k[e - 1], !0); )
            --e;
          return e;
        };
      }, {}],
      12: [function(p, v, l) {
        function b() {
          this._array = [];
          this._sorted = !0;
          this._last = {
            generatedLine: -1,
            generatedColumn: 0
          };
        }
        var e = p("./util");
        b.prototype.unsortedForEach = function(b, e) {
          this._array.forEach(b, e);
        };
        b.prototype.add = function(b) {
          var k = this._last,
              d = k.generatedLine,
              a = b.generatedLine,
              h = k.generatedColumn,
              n = b.generatedColumn;
          a > d || a == d && n >= h || 0 >= e.compareByGeneratedPositionsInflated(k, b) ? this._last = b : this._sorted = !1;
          this._array.push(b);
        };
        b.prototype.toArray = function() {
          this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0);
          return this._array;
        };
        l.MappingList = b;
      }, {"./util": 17}],
      13: [function(p, v, l) {
        function b(b, e, d) {
          var a = b[e];
          b[e] = b[d];
          b[d] = a;
        }
        function e(k, l, d, a) {
          if (d < a) {
            var h = d - 1;
            b(k, Math.round(d + Math.random() * (a - d)), a);
            for (var n = k[a],
                t = d; t < a; t++)
              0 >= l(k[t], n) && (h += 1, b(k, h, t));
            b(k, h + 1, t);
            h += 1;
            e(k, l, d, h - 1);
            e(k, l, h + 1, a);
          }
        }
        l.quickSort = function(b, l) {
          e(b, l, 0, b.length - 1);
        };
      }, {}],
      14: [function(p, v, l) {
        function b(a) {
          var c = a;
          "string" === typeof a && (c = JSON.parse(a.replace(/^\)\]\}'/, "")));
          return null != c.sections ? new r(c) : new e(c);
        }
        function e(a) {
          var c = a;
          "string" === typeof a && (c = JSON.parse(a.replace(/^\)\]\}'/, "")));
          a = d.getArg(c, "version");
          var b = d.getArg(c, "sources"),
              u = d.getArg(c, "names", []),
              e = d.getArg(c, "sourceRoot", null),
              n = d.getArg(c, "sourcesContent", null),
              t = d.getArg(c, "mappings"),
              c = d.getArg(c, "file", null);
          if (a != this._version)
            throw Error("Unsupported version: " + a);
          b = b.map(String).map(d.normalize).map(function(a) {
            return e && d.isAbsolute(e) && d.isAbsolute(a) ? d.relative(e, a) : a;
          });
          this._names = h.fromArray(u.map(String), !0);
          this._sources = h.fromArray(b, !0);
          this.sourceRoot = e;
          this.sourcesContent = n;
          this._mappings = t;
          this.file = c;
        }
        function k() {
          this.generatedColumn = this.generatedLine = 0;
          this.name = this.originalColumn = this.originalLine = this.source = null;
        }
        function r(a) {
          var c = a;
          "string" === typeof a && (c = JSON.parse(a.replace(/^\)\]\}'/, "")));
          a = d.getArg(c, "version");
          c = d.getArg(c, "sections");
          if (a != this._version)
            throw Error("Unsupported version: " + a);
          this._sources = new h;
          this._names = new h;
          var e = {
            line: -1,
            column: 0
          };
          this._sections = c.map(function(a) {
            if (a.url)
              throw Error("Support for url field in sections not implemented.");
            var c = d.getArg(a, "offset"),
                f = d.getArg(c, "line"),
                u = d.getArg(c, "column");
            if (f < e.line || f === e.line && u < e.column)
              throw Error("Section offsets must be ordered and non-overlapping.");
            e = c;
            return {
              generatedOffset: {
                generatedLine: f + 1,
                generatedColumn: u + 1
              },
              consumer: new b(d.getArg(a, "map"))
            };
          });
        }
        var d = p("./util"),
            a = p("./binary-search"),
            h = p("./array-set").ArraySet,
            n = p("./base64-vlq"),
            t = p("./quick-sort").quickSort;
        b.fromSourceMap = function(a) {
          return e.fromSourceMap(a);
        };
        b.prototype._version = 3;
        b.prototype.__generatedMappings = null;
        Object.defineProperty(b.prototype, "_generatedMappings", {get: function() {
            this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot);
            return this.__generatedMappings;
          }});
        b.prototype.__originalMappings = null;
        Object.defineProperty(b.prototype, "_originalMappings", {get: function() {
            this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot);
            return this.__originalMappings;
          }});
        b.prototype._charIsMappingSeparator = function(a, b) {
          var c = a.charAt(b);
          return ";" === c || "," === c;
        };
        b.prototype._parseMappings = function(a, b) {
          throw Error("Subclasses must implement _parseMappings");
        };
        b.GENERATED_ORDER = 1;
        b.ORIGINAL_ORDER = 2;
        b.GREATEST_LOWER_BOUND = 1;
        b.LEAST_UPPER_BOUND = 2;
        b.prototype.eachMapping = function(a, f, e) {
          f = f || null;
          switch (e || b.GENERATED_ORDER) {
            case b.GENERATED_ORDER:
              e = this._generatedMappings;
              break;
            case b.ORIGINAL_ORDER:
              e = this._originalMappings;
              break;
            default:
              throw Error("Unknown order of iteration.");
          }
          var c = this.sourceRoot;
          e.map(function(a) {
            var b = null === a.source ? null : this._sources.at(a.source);
            null != b && null != c && (b = d.join(c, b));
            return {
              source: b,
              generatedLine: a.generatedLine,
              generatedColumn: a.generatedColumn,
              originalLine: a.originalLine,
              originalColumn: a.originalColumn,
              name: null === a.name ? null : this._names.at(a.name)
            };
          }, this).forEach(a, f);
        };
        b.prototype.allGeneratedPositionsFor = function(c) {
          var b = d.getArg(c, "line"),
              e = {
                source: d.getArg(c, "source"),
                originalLine: b,
                originalColumn: d.getArg(c, "column", 0)
              };
          null != this.sourceRoot && (e.source = d.relative(this.sourceRoot, e.source));
          if (!this._sources.has(e.source))
            return [];
          e.source = this._sources.indexOf(e.source);
          var u = [],
              e = this._findMapping(e, this._originalMappings, "originalLine", "originalColumn", d.compareByOriginalPositions, a.LEAST_UPPER_BOUND);
          if (0 <= e) {
            var h = this._originalMappings[e];
            if (void 0 === c.column)
              for (b = h.originalLine; h && h.originalLine === b; )
                u.push({
                  line: d.getArg(h, "generatedLine", null),
                  column: d.getArg(h, "generatedColumn", null),
                  lastColumn: d.getArg(h, "lastGeneratedColumn", null)
                }), h = this._originalMappings[++e];
            else
              for (c = h.originalColumn; h && h.originalLine === b && h.originalColumn == c; )
                u.push({
                  line: d.getArg(h, "generatedLine", null),
                  column: d.getArg(h, "generatedColumn", null),
                  lastColumn: d.getArg(h, "lastGeneratedColumn", null)
                }), h = this._originalMappings[++e];
          }
          return u;
        };
        l.SourceMapConsumer = b;
        e.prototype = Object.create(b.prototype);
        e.prototype.consumer = b;
        e.fromSourceMap = function(a) {
          var c = Object.create(e.prototype),
              b = c._names = h.fromArray(a._names.toArray(), !0),
              u = c._sources = h.fromArray(a._sources.toArray(), !0);
          c.sourceRoot = a._sourceRoot;
          c.sourcesContent = a._generateSourcesContent(c._sources.toArray(), c.sourceRoot);
          c.file = a._file;
          a = a._mappings.toArray().slice();
          for (var n = c.__generatedMappings = [],
              l = c.__originalMappings = [],
              r = 0,
              p = a.length; r < p; r++) {
            var C = a[r],
                x = new k;
            x.generatedLine = C.generatedLine;
            x.generatedColumn = C.generatedColumn;
            C.source && (x.source = u.indexOf(C.source), x.originalLine = C.originalLine, x.originalColumn = C.originalColumn, C.name && (x.name = b.indexOf(C.name)), l.push(x));
            n.push(x);
          }
          t(c.__originalMappings, d.compareByOriginalPositions);
          return c;
        };
        e.prototype._version = 3;
        Object.defineProperty(e.prototype, "sources", {get: function() {
            return this._sources.toArray().map(function(a) {
              return null != this.sourceRoot ? d.join(this.sourceRoot, a) : a;
            }, this);
          }});
        e.prototype._parseMappings = function(a, b) {
          for (var c = 1,
              f = 0,
              e = 0,
              h = 0,
              l = 0,
              r = 0,
              p = a.length,
              x = 0,
              v = {},
              B = {},
              F = [],
              H = [],
              z,
              E,
              q,
              D,
              J; x < p; )
            if (";" === a.charAt(x))
              c++, x++, f = 0;
            else if ("," === a.charAt(x))
              x++;
            else {
              z = new k;
              z.generatedLine = c;
              for (D = x; D < p && !this._charIsMappingSeparator(a, D); D++)
                ;
              E = a.slice(x, D);
              if (q = v[E])
                x += E.length;
              else {
                for (q = []; x < D; )
                  n.decode(a, x, B), J = B.value, x = B.rest, q.push(J);
                if (2 === q.length)
                  throw Error("Found a source, but no line and column");
                if (3 === q.length)
                  throw Error("Found a source and line, but no column");
                v[E] = q;
              }
              z.generatedColumn = f + q[0];
              f = z.generatedColumn;
              1 < q.length && (z.source = l + q[1], l += q[1], z.originalLine = e + q[2], e = z.originalLine, z.originalLine += 1, z.originalColumn = h + q[3], h = z.originalColumn, 4 < q.length && (z.name = r + q[4], r += q[4]));
              H.push(z);
              "number" === typeof z.originalLine && F.push(z);
            }
          t(H, d.compareByGeneratedPositionsDeflated);
          this.__generatedMappings = H;
          t(F, d.compareByOriginalPositions);
          this.__originalMappings = F;
        };
        e.prototype._findMapping = function(c, b, d, e, h, n) {
          if (0 >= c[d])
            throw new TypeError("Line must be greater than or equal to 1, got " + c[d]);
          if (0 > c[e])
            throw new TypeError("Column must be greater than or equal to 0, got " + c[e]);
          return a.search(c, b, h, n);
        };
        e.prototype.computeColumnSpans = function() {
          for (var a = 0; a < this._generatedMappings.length; ++a) {
            var b = this._generatedMappings[a];
            if (a + 1 < this._generatedMappings.length) {
              var d = this._generatedMappings[a + 1];
              if (b.generatedLine === d.generatedLine) {
                b.lastGeneratedColumn = d.generatedColumn - 1;
                continue;
              }
            }
            b.lastGeneratedColumn = Infinity;
          }
        };
        e.prototype.originalPositionFor = function(a) {
          var c = {
            generatedLine: d.getArg(a, "line"),
            generatedColumn: d.getArg(a, "column")
          };
          a = this._findMapping(c, this._generatedMappings, "generatedLine", "generatedColumn", d.compareByGeneratedPositionsDeflated, d.getArg(a, "bias", b.GREATEST_LOWER_BOUND));
          if (0 <= a && (a = this._generatedMappings[a], a.generatedLine === c.generatedLine)) {
            c = d.getArg(a, "source", null);
            null !== c && (c = this._sources.at(c), null != this.sourceRoot && (c = d.join(this.sourceRoot, c)));
            var e = d.getArg(a, "name", null);
            null !== e && (e = this._names.at(e));
            return {
              source: c,
              line: d.getArg(a, "originalLine", null),
              column: d.getArg(a, "originalColumn", null),
              name: e
            };
          }
          return {
            source: null,
            line: null,
            column: null,
            name: null
          };
        };
        e.prototype.hasContentsOfAllSources = function() {
          return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(a) {
            return null == a;
          }) : !1;
        };
        e.prototype.sourceContentFor = function(a, b) {
          if (!this.sourcesContent)
            return null;
          null != this.sourceRoot && (a = d.relative(this.sourceRoot, a));
          if (this._sources.has(a))
            return this.sourcesContent[this._sources.indexOf(a)];
          var c;
          if (null != this.sourceRoot && (c = d.urlParse(this.sourceRoot))) {
            var f = a.replace(/^file:\/\//, "");
            if ("file" == c.scheme && this._sources.has(f))
              return this.sourcesContent[this._sources.indexOf(f)];
            if ((!c.path || "/" == c.path) && this._sources.has("/" + a))
              return this.sourcesContent[this._sources.indexOf("/" + a)];
          }
          if (b)
            return null;
          throw Error('"' + a + '" is not in the SourceMap.');
        };
        e.prototype.generatedPositionFor = function(a) {
          var c = d.getArg(a, "source");
          null != this.sourceRoot && (c = d.relative(this.sourceRoot, c));
          if (!this._sources.has(c))
            return {
              line: null,
              column: null,
              lastColumn: null
            };
          c = this._sources.indexOf(c);
          c = {
            source: c,
            originalLine: d.getArg(a, "line"),
            originalColumn: d.getArg(a, "column")
          };
          a = this._findMapping(c, this._originalMappings, "originalLine", "originalColumn", d.compareByOriginalPositions, d.getArg(a, "bias", b.GREATEST_LOWER_BOUND));
          return 0 <= a && (a = this._originalMappings[a], a.source === c.source) ? {
            line: d.getArg(a, "generatedLine", null),
            column: d.getArg(a, "generatedColumn", null),
            lastColumn: d.getArg(a, "lastGeneratedColumn", null)
          } : {
            line: null,
            column: null,
            lastColumn: null
          };
        };
        l.BasicSourceMapConsumer = e;
        r.prototype = Object.create(b.prototype);
        r.prototype.constructor = b;
        r.prototype._version = 3;
        Object.defineProperty(r.prototype, "sources", {get: function() {
            for (var a = [],
                b = 0; b < this._sections.length; b++)
              for (var d = 0; d < this._sections[b].consumer.sources.length; d++)
                a.push(this._sections[b].consumer.sources[d]);
            return a;
          }});
        r.prototype.originalPositionFor = function(c) {
          var b = {
            generatedLine: d.getArg(c, "line"),
            generatedColumn: d.getArg(c, "column")
          },
              e = a.search(b, this._sections, function(a, c) {
                var b = a.generatedLine - c.generatedOffset.generatedLine;
                return b ? b : a.generatedColumn - c.generatedOffset.generatedColumn;
              });
          return (e = this._sections[e]) ? e.consumer.originalPositionFor({
            line: b.generatedLine - (e.generatedOffset.generatedLine - 1),
            column: b.generatedColumn - (e.generatedOffset.generatedLine === b.generatedLine ? e.generatedOffset.generatedColumn - 1 : 0),
            bias: c.bias
          }) : {
            source: null,
            line: null,
            column: null,
            name: null
          };
        };
        r.prototype.hasContentsOfAllSources = function() {
          return this._sections.every(function(a) {
            return a.consumer.hasContentsOfAllSources();
          });
        };
        r.prototype.sourceContentFor = function(a, b) {
          for (var c = 0; c < this._sections.length; c++) {
            var f = this._sections[c].consumer.sourceContentFor(a, !0);
            if (f)
              return f;
          }
          if (b)
            return null;
          throw Error('"' + a + '" is not in the SourceMap.');
        };
        r.prototype.generatedPositionFor = function(a) {
          for (var c = 0; c < this._sections.length; c++) {
            var b = this._sections[c];
            if (-1 !== b.consumer.sources.indexOf(d.getArg(a, "source"))) {
              var e = b.consumer.generatedPositionFor(a);
              if (e)
                return {
                  line: e.line + (b.generatedOffset.generatedLine - 1),
                  column: e.column + (b.generatedOffset.generatedLine === e.line ? b.generatedOffset.generatedColumn - 1 : 0)
                };
            }
          }
          return {
            line: null,
            column: null
          };
        };
        r.prototype._parseMappings = function(a, b) {
          this.__generatedMappings = [];
          this.__originalMappings = [];
          for (var c = 0; c < this._sections.length; c++)
            for (var f = this._sections[c],
                e = f.consumer._generatedMappings,
                h = 0; h < e.length; h++) {
              var n = e[h],
                  k = f.consumer._sources.at(n.source);
              null !== f.consumer.sourceRoot && (k = d.join(f.consumer.sourceRoot, k));
              this._sources.add(k);
              var k = this._sources.indexOf(k),
                  l = f.consumer._names.at(n.name);
              this._names.add(l);
              l = this._names.indexOf(l);
              n = {
                source: k,
                generatedLine: n.generatedLine + (f.generatedOffset.generatedLine - 1),
                generatedColumn: n.generatedColumn + (f.generatedOffset.generatedLine === n.generatedLine ? f.generatedOffset.generatedColumn - 1 : 0),
                originalLine: n.originalLine,
                originalColumn: n.originalColumn,
                name: l
              };
              this.__generatedMappings.push(n);
              "number" === typeof n.originalLine && this.__originalMappings.push(n);
            }
          t(this.__generatedMappings, d.compareByGeneratedPositionsDeflated);
          t(this.__originalMappings, d.compareByOriginalPositions);
        };
        l.IndexedSourceMapConsumer = r;
      }, {
        "./array-set": 8,
        "./base64-vlq": 9,
        "./binary-search": 11,
        "./quick-sort": 13,
        "./util": 17
      }],
      15: [function(p, v, l) {
        function b(a) {
          a || (a = {});
          this._file = k.getArg(a, "file", null);
          this._sourceRoot = k.getArg(a, "sourceRoot", null);
          this._skipValidation = k.getArg(a, "skipValidation", !1);
          this._sources = new r;
          this._names = new r;
          this._mappings = new d;
          this._sourcesContents = null;
        }
        var e = p("./base64-vlq"),
            k = p("./util"),
            r = p("./array-set").ArraySet,
            d = p("./mapping-list").MappingList;
        b.prototype._version = 3;
        b.fromSourceMap = function(a) {
          var d = a.sourceRoot,
              e = new b({
                file: a.file,
                sourceRoot: d
              });
          a.eachMapping(function(a) {
            var c = {generated: {
                line: a.generatedLine,
                column: a.generatedColumn
              }};
            null != a.source && (c.source = a.source, null != d && (c.source = k.relative(d, c.source)), c.original = {
              line: a.originalLine,
              column: a.originalColumn
            }, null != a.name && (c.name = a.name));
            e.addMapping(c);
          });
          a.sources.forEach(function(b) {
            var c = a.sourceContentFor(b);
            null != c && e.setSourceContent(b, c);
          });
          return e;
        };
        b.prototype.addMapping = function(a) {
          var b = k.getArg(a, "generated"),
              d = k.getArg(a, "original", null),
              e = k.getArg(a, "source", null);
          a = k.getArg(a, "name", null);
          this._skipValidation || this._validateMapping(b, d, e, a);
          null != e && (e = String(e), this._sources.has(e) || this._sources.add(e));
          null != a && (a = String(a), this._names.has(a) || this._names.add(a));
          this._mappings.add({
            generatedLine: b.line,
            generatedColumn: b.column,
            originalLine: null != d && d.line,
            originalColumn: null != d && d.column,
            source: e,
            name: a
          });
        };
        b.prototype.setSourceContent = function(a, b) {
          var d = a;
          null != this._sourceRoot && (d = k.relative(this._sourceRoot, d));
          null != b ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[k.toSetString(d)] = b) : this._sourcesContents && (delete this._sourcesContents[k.toSetString(d)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
        };
        b.prototype.applySourceMap = function(a, b, d) {
          var e = b;
          if (null == b) {
            if (null == a.file)
              throw Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
            e = a.file;
          }
          var c = this._sourceRoot;
          null != c && (e = k.relative(c, e));
          var f = new r,
              h = new r;
          this._mappings.unsortedForEach(function(b) {
            if (b.source === e && null != b.originalLine) {
              var n = a.originalPositionFor({
                line: b.originalLine,
                column: b.originalColumn
              });
              null != n.source && (b.source = n.source, null != d && (b.source = k.join(d, b.source)), null != c && (b.source = k.relative(c, b.source)), b.originalLine = n.line, b.originalColumn = n.column, null != n.name && (b.name = n.name));
            }
            n = b.source;
            null == n || f.has(n) || f.add(n);
            b = b.name;
            null == b || h.has(b) || h.add(b);
          }, this);
          this._sources = f;
          this._names = h;
          a.sources.forEach(function(b) {
            var f = a.sourceContentFor(b);
            null != f && (null != d && (b = k.join(d, b)), null != c && (b = k.relative(c, b)), this.setSourceContent(b, f));
          }, this);
        };
        b.prototype._validateMapping = function(a, b, d, e) {
          if (!(a && "line" in a && "column" in a && 0 < a.line && 0 <= a.column && !b && !d && !e || a && "line" in a && "column" in a && b && "line" in b && "column" in b && 0 < a.line && 0 <= a.column && 0 < b.line && 0 <= b.column && d))
            throw Error("Invalid mapping: " + JSON.stringify({
              generated: a,
              source: d,
              original: b,
              name: e
            }));
        };
        b.prototype._serializeMappings = function() {
          for (var a = 0,
              b = 1,
              d = 0,
              l = 0,
              c = 0,
              f = 0,
              r = "",
              u,
              p,
              I,
              A = this._mappings.toArray(),
              v = 0,
              C = A.length; v < C; v++) {
            p = A[v];
            u = "";
            if (p.generatedLine !== b)
              for (a = 0; p.generatedLine !== b; )
                u += ";", b++;
            else if (0 < v) {
              if (!k.compareByGeneratedPositionsInflated(p, A[v - 1]))
                continue;
              u += ",";
            }
            u += e.encode(p.generatedColumn - a);
            a = p.generatedColumn;
            null != p.source && (I = this._sources.indexOf(p.source), u += e.encode(I - f), f = I, u += e.encode(p.originalLine - 1 - l), l = p.originalLine - 1, u += e.encode(p.originalColumn - d), d = p.originalColumn, null != p.name && (p = this._names.indexOf(p.name), u += e.encode(p - c), c = p));
            r += u;
          }
          return r;
        };
        b.prototype._generateSourcesContent = function(a, b) {
          return a.map(function(a) {
            if (!this._sourcesContents)
              return null;
            null != b && (a = k.relative(b, a));
            a = k.toSetString(a);
            return Object.prototype.hasOwnProperty.call(this._sourcesContents, a) ? this._sourcesContents[a] : null;
          }, this);
        };
        b.prototype.toJSON = function() {
          var a = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings()
          };
          null != this._file && (a.file = this._file);
          null != this._sourceRoot && (a.sourceRoot = this._sourceRoot);
          this._sourcesContents && (a.sourcesContent = this._generateSourcesContent(a.sources, a.sourceRoot));
          return a;
        };
        b.prototype.toString = function() {
          return JSON.stringify(this.toJSON());
        };
        l.SourceMapGenerator = b;
      }, {
        "./array-set": 8,
        "./base64-vlq": 9,
        "./mapping-list": 12,
        "./util": 17
      }],
      16: [function(p, v, l) {
        function b(b, a, e, n, k) {
          this.children = [];
          this.sourceContents = {};
          this.line = null == b ? null : b;
          this.column = null == a ? null : a;
          this.source = null == e ? null : e;
          this.name = null == k ? null : k;
          this.$$$isSourceNode$$$ = !0;
          null != n && this.add(n);
        }
        var e = p("./source-map-generator").SourceMapGenerator,
            k = p("./util"),
            r = /(\r?\n)/;
        b.fromStringWithSourceMap = function(d, a, e) {
          function h(a, c) {
            if (null === a || void 0 === a.source)
              l.add(c);
            else {
              var f = e ? k.join(e, a.source) : a.source;
              l.add(new b(a.originalLine, a.originalColumn, f, c, a.name));
            }
          }
          var l = new b,
              c = d.split(r),
              f = function() {
                var a = c.shift(),
                    b = c.shift() || "";
                return a + b;
              },
              p = 1,
              u = 0,
              v = null;
          a.eachMapping(function(a) {
            if (null !== v)
              if (p < a.generatedLine)
                h(v, f()), p++, u = 0;
              else {
                var b = c[0],
                    d = b.substr(0, a.generatedColumn - u);
                c[0] = b.substr(a.generatedColumn - u);
                u = a.generatedColumn;
                h(v, d);
                v = a;
                return;
              }
            for (; p < a.generatedLine; )
              l.add(f()), p++;
            u < a.generatedColumn && (b = c[0], l.add(b.substr(0, a.generatedColumn)), c[0] = b.substr(a.generatedColumn), u = a.generatedColumn);
            v = a;
          }, this);
          0 < c.length && (v && h(v, f()), l.add(c.join("")));
          a.sources.forEach(function(c) {
            var b = a.sourceContentFor(c);
            null != b && (null != e && (c = k.join(e, c)), l.setSourceContent(c, b));
          });
          return l;
        };
        b.prototype.add = function(b) {
          if (Array.isArray(b))
            b.forEach(function(a) {
              this.add(a);
            }, this);
          else if (b.$$$isSourceNode$$$ || "string" === typeof b)
            b && this.children.push(b);
          else
            throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + b);
          return this;
        };
        b.prototype.prepend = function(b) {
          if (Array.isArray(b))
            for (var a = b.length - 1; 0 <= a; a--)
              this.prepend(b[a]);
          else if (b.$$$isSourceNode$$$ || "string" === typeof b)
            this.children.unshift(b);
          else
            throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + b);
          return this;
        };
        b.prototype.walk = function(b) {
          for (var a,
              d = 0,
              e = this.children.length; d < e; d++)
            a = this.children[d], a.$$$isSourceNode$$$ ? a.walk(b) : "" !== a && b(a, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
        };
        b.prototype.join = function(b) {
          var a,
              d,
              e = this.children.length;
          if (0 < e) {
            a = [];
            for (d = 0; d < e - 1; d++)
              a.push(this.children[d]), a.push(b);
            a.push(this.children[d]);
            this.children = a;
          }
          return this;
        };
        b.prototype.replaceRight = function(b, a) {
          var d = this.children[this.children.length - 1];
          d.$$$isSourceNode$$$ ? d.replaceRight(b, a) : "string" === typeof d ? this.children[this.children.length - 1] = d.replace(b, a) : this.children.push("".replace(b, a));
          return this;
        };
        b.prototype.setSourceContent = function(b, a) {
          this.sourceContents[k.toSetString(b)] = a;
        };
        b.prototype.walkSourceContents = function(b) {
          for (var a = 0,
              d = this.children.length; a < d; a++)
            this.children[a].$$$isSourceNode$$$ && this.children[a].walkSourceContents(b);
          for (var e = Object.keys(this.sourceContents),
              a = 0,
              d = e.length; a < d; a++)
            b(k.fromSetString(e[a]), this.sourceContents[e[a]]);
        };
        b.prototype.toString = function() {
          var b = "";
          this.walk(function(a) {
            b += a;
          });
          return b;
        };
        b.prototype.toStringWithSourceMap = function(b) {
          var a = "",
              d = 1,
              k = 0,
              l = new e(b),
              c = !1,
              f = null,
              p = null,
              u = null,
              r = null;
          this.walk(function(b, e) {
            a += b;
            null !== e.source && null !== e.line && null !== e.column ? (f === e.source && p === e.line && u === e.column && r === e.name || l.addMapping({
              source: e.source,
              original: {
                line: e.line,
                column: e.column
              },
              generated: {
                line: d,
                column: k
              },
              name: e.name
            }), f = e.source, p = e.line, u = e.column, r = e.name, c = !0) : c && (l.addMapping({generated: {
                line: d,
                column: k
              }}), f = null, c = !1);
            for (var h = 0,
                n = b.length; h < n; h++)
              10 === b.charCodeAt(h) ? (d++, k = 0, h + 1 === n ? (f = null, c = !1) : c && l.addMapping({
                source: e.source,
                original: {
                  line: e.line,
                  column: e.column
                },
                generated: {
                  line: d,
                  column: k
                },
                name: e.name
              })) : k++;
          });
          this.walkSourceContents(function(a, b) {
            l.setSourceContent(a, b);
          });
          return {
            code: a,
            map: l
          };
        };
        l.SourceNode = b;
      }, {
        "./source-map-generator": 15,
        "./util": 17
      }],
      17: [function(p, v, l) {
        function b(a) {
          return (a = a.match(n)) ? {
            scheme: a[1],
            auth: a[2],
            host: a[3],
            port: a[4],
            path: a[5]
          } : null;
        }
        function e(a) {
          var b = "";
          a.scheme && (b += a.scheme + ":");
          b += "//";
          a.auth && (b += a.auth + "@");
          a.host && (b += a.host);
          a.port && (b += ":" + a.port);
          a.path && (b += a.path);
          return b;
        }
        function k(a) {
          var c = a,
              d = b(a);
          if (d) {
            if (!d.path)
              return a;
            c = d.path;
          }
          a = l.isAbsolute(c);
          for (var c = c.split(/\/+/),
              h,
              k = 0,
              n = c.length - 1; 0 <= n; n--)
            h = c[n], "." === h ? c.splice(n, 1) : ".." === h ? k++ : 0 < k && ("" === h ? (c.splice(n + 1, k), k = 0) : (c.splice(n, 2), k--));
          c = c.join("/");
          "" === c && (c = a ? "/" : ".");
          return d ? (d.path = c, e(d)) : c;
        }
        function r(a) {
          return a;
        }
        function d(a) {
          return h(a) ? "$" + a : a;
        }
        function a(a) {
          return h(a) ? a.slice(1) : a;
        }
        function h(a) {
          if (!a)
            return !1;
          var b = a.length;
          if (9 > b || 95 !== a.charCodeAt(b - 1) || 95 !== a.charCodeAt(b - 2) || 111 !== a.charCodeAt(b - 3) || 116 !== a.charCodeAt(b - 4) || 111 !== a.charCodeAt(b - 5) || 114 !== a.charCodeAt(b - 6) || 112 !== a.charCodeAt(b - 7) || 95 !== a.charCodeAt(b - 8) || 95 !== a.charCodeAt(b - 9))
            return !1;
          for (b -= 10; 0 <= b; b--)
            if (36 !== a.charCodeAt(b))
              return !1;
          return !0;
        }
        l.getArg = function(a, b, d) {
          if (b in a)
            return a[b];
          if (3 === arguments.length)
            return d;
          throw Error('"' + b + '" is a required argument.');
        };
        var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
            t = /^data:.+\,.+$/;
        l.urlParse = b;
        l.urlGenerate = e;
        l.normalize = k;
        l.join = function(a, d) {
          "" === a && (a = ".");
          "" === d && (d = ".");
          var c = b(d),
              f = b(a);
          f && (a = f.path || "/");
          if (c && !c.scheme)
            return f && (c.scheme = f.scheme), e(c);
          if (c || d.match(t))
            return d;
          if (f && !f.host && !f.path)
            return f.host = d, e(f);
          c = "/" === d.charAt(0) ? d : k(a.replace(/\/+$/, "") + "/" + d);
          return f ? (f.path = c, e(f)) : c;
        };
        l.isAbsolute = function(a) {
          return "/" === a.charAt(0) || !!a.match(n);
        };
        l.relative = function(a, b) {
          "" === a && (a = ".");
          a = a.replace(/\/$/, "");
          for (var c = 0; 0 !== b.indexOf(a + "/"); ) {
            var d = a.lastIndexOf("/");
            if (0 > d)
              return b;
            a = a.slice(0, d);
            if (a.match(/^([^\/]+:\/)?\/*$/))
              return b;
            ++c;
          }
          return Array(c + 1).join("../") + b.substr(a.length + 1);
        };
        p = !("__proto__" in Object.create(null));
        l.toSetString = p ? r : d;
        l.fromSetString = p ? r : a;
        l.compareByOriginalPositions = function(a, b, d) {
          var c = a.source - b.source;
          if (0 !== c)
            return c;
          c = a.originalLine - b.originalLine;
          if (0 !== c)
            return c;
          c = a.originalColumn - b.originalColumn;
          if (0 !== c || d)
            return c;
          c = a.generatedColumn - b.generatedColumn;
          if (0 !== c)
            return c;
          c = a.generatedLine - b.generatedLine;
          return 0 !== c ? c : a.name - b.name;
        };
        l.compareByGeneratedPositionsDeflated = function(a, b, d) {
          var c = a.generatedLine - b.generatedLine;
          if (0 !== c)
            return c;
          c = a.generatedColumn - b.generatedColumn;
          if (0 !== c || d)
            return c;
          c = a.source - b.source;
          if (0 !== c)
            return c;
          c = a.originalLine - b.originalLine;
          if (0 !== c)
            return c;
          c = a.originalColumn - b.originalColumn;
          return 0 !== c ? c : a.name - b.name;
        };
        l.compareByGeneratedPositionsInflated = function(a, b) {
          var c = a.generatedLine - b.generatedLine;
          if (0 !== c)
            return c;
          c = a.generatedColumn - b.generatedColumn;
          if (0 !== c)
            return c;
          var c = a.source,
              d = b.source,
              c = c === d ? 0 : c > d ? 1 : -1;
          if (0 !== c)
            return c;
          c = a.originalLine - b.originalLine;
          if (0 !== c)
            return c;
          c = a.originalColumn - b.originalColumn;
          0 === c && (c = a.name, d = b.name, c = c === d ? 0 : c > d ? 1 : -1);
          return c;
        };
      }, {}],
      18: [function(p, v, l) {
        l.SourceMapGenerator = p("./lib/source-map-generator").SourceMapGenerator;
        l.SourceMapConsumer = p("./lib/source-map-consumer").SourceMapConsumer;
        l.SourceNode = p("./lib/source-node").SourceNode;
      }, {
        "./lib/source-map-consumer": 14,
        "./lib/source-map-generator": 15,
        "./lib/source-node": 16
      }],
      19: [function(p, v, l) {
        (function(b, e) {
          function k() {
            return "browser" === K ? !0 : "node" === K ? !1 : "undefined" !== typeof window && "function" === typeof XMLHttpRequest && !(window.require && window.module && window.process && "renderer" === window.process.type);
          }
          function r(a) {
            return function(b) {
              for (var c = 0; c < a.length; c++) {
                var d = a[c](b);
                if (d)
                  return d;
              }
              return null;
            };
          }
          function d(a, b) {
            if (!a)
              return b;
            var c = I.dirname(a),
                d = /^\w+:\/\/[^\/]*/.exec(c),
                d = d ? d[0] : "";
            return d + I.resolve(c.slice(d.length), b);
          }
          function a(a) {
            var b = F[a.source];
            if (!b) {
              var c = D(a.source);
              c ? (b = F[a.source] = {
                url: c.url,
                map: new M(c.map)
              }, b.map.sourcesContent && b.map.sources.forEach(function(a, c) {
                var g = b.map.sourcesContent[c];
                if (g) {
                  var e = d(b.url, a);
                  B[e] = g;
                }
              })) : b = F[a.source] = {
                url: null,
                map: null
              };
            }
            return b && b.map && (c = b.map.originalPositionFor(a), null !== c.source) ? (c.source = d(b.url, c.source), c) : a;
          }
          function h(b) {
            var c = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(b);
            return c ? (b = a({
              source: c[2],
              line: +c[3],
              column: c[4] - 1
            }), "eval at " + c[1] + " (" + b.source + ":" + b.line + ":" + (b.column + 1) + ")") : (c = /^eval at ([^(]+) \((.+)\)$/.exec(b)) ? "eval at " + c[1] + " (" + h(c[2]) + ")" : b;
          }
          function n() {
            var a,
                b = "";
            this.isNative() ? b = "native" : (a = this.getScriptNameOrSourceURL(), !a && this.isEval() && (b = this.getEvalOrigin(), b += ", "), b = a ? b + a : b + "<anonymous>", a = this.getLineNumber(), null != a && (b += ":" + a, (a = this.getColumnNumber()) && (b += ":" + a)));
            a = "";
            var c = this.getFunctionName(),
                d = !0,
                e = this.isConstructor();
            if (this.isToplevel() || e)
              e ? a += "new " + (c || "<anonymous>") : c ? a += c : (a += b, d = !1);
            else {
              e = this.getTypeName();
              "[object Object]" === e && (e = "null");
              var f = this.getMethodName();
              c ? (e && 0 != c.indexOf(e) && (a += e + "."), a += c, f && c.indexOf("." + f) != c.length - f.length - 1 && (a += " [as " + f + "]")) : a += e + "." + (f || "<anonymous>");
            }
            d && (a += " (" + b + ")");
            return a;
          }
          function t(a) {
            var b = {};
            Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(function(c) {
              b[c] = /^(?:is|get)/.test(c) ? function() {
                return a[c].call(a);
              } : a[c];
            });
            b.toString = n;
            return b;
          }
          function c(b) {
            if (b.isNative())
              return b;
            var c = b.getFileName() || b.getScriptNameOrSourceURL();
            if (c) {
              var d = b.getLineNumber(),
                  e = b.getColumnNumber() - 1;
              1 !== d || k() || b.isEval() || (e -= 62);
              var f = a({
                source: c,
                line: d,
                column: e
              });
              b = t(b);
              b.getFileName = function() {
                return f.source;
              };
              b.getLineNumber = function() {
                return f.line;
              };
              b.getColumnNumber = function() {
                return f.column + 1;
              };
              b.getScriptNameOrSourceURL = function() {
                return f.source;
              };
              return b;
            }
            var l = b.isEval() && b.getEvalOrigin();
            l && (l = h(l), b = t(b), b.getEvalOrigin = function() {
              return l;
            });
            return b;
          }
          function f(a, b) {
            x && (B = {}, F = {});
            return a + b.map(function(a) {
              return "\n    at " + c(a);
            }).join("");
          }
          function v(a) {
            var b = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(a.stack);
            if (b) {
              a = b[1];
              var c = +b[2],
                  b = +b[3],
                  d = B[a];
              !d && A && A.existsSync(a) && (d = A.readFileSync(a, "utf8"));
              if (d && (d = d.split(/(?:\r\n|\r|\n)/)[c - 1]))
                return a + ":" + c + "\n" + d + "\n" + Array(b).join(" ") + "^";
            }
            return null;
          }
          function u() {
            var a = b.emit;
            b.emit = function(c) {
              if ("uncaughtException" === c) {
                var d = arguments[1] && arguments[1].stack,
                    e = 0 < this.listeners(c).length;
                if (d && !e) {
                  d = arguments[1];
                  if (e = v(d))
                    console.error(), console.error(e);
                  console.error(d.stack);
                  b.exit(1);
                  return;
                }
              }
              return a.apply(this, arguments);
            };
          }
          var M = p("source-map").SourceMapConsumer,
              I = p("path"),
              A;
          try {
            A = p("fs"), A.existsSync && A.readFileSync || (A = null);
          } catch (J) {}
          var L = !1,
              C = !1,
              x = !1,
              K = "auto",
              B = {},
              F = {},
              H = /^data:application\/json[^,]+base64,/,
              z = [],
              E = [],
              q = r(z);
          z.push(function(a) {
            a = a.trim();
            if (a in B)
              return B[a];
            var b = null;
            if (A)
              A.existsSync(a) && (b = A.readFileSync(a, "utf8"));
            else {
              var c = new XMLHttpRequest;
              c.open("GET", a, !1);
              c.send(null);
              b = null;
              4 === c.readyState && 200 === c.status && (b = c.responseText);
            }
            return B[a] = b;
          });
          var D = r(E);
          E.push(function(a) {
            var b;
            a: {
              if (k())
                try {
                  var c = new XMLHttpRequest;
                  c.open("GET", a, !1);
                  c.send(null);
                  var f = c.getResponseHeader("SourceMap") || c.getResponseHeader("X-SourceMap");
                  if (f) {
                    b = f;
                    break a;
                  }
                } catch (P) {}
              b = q(a);
              for (var c = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/mg,
                  h; f = c.exec(b); )
                h = f;
              b = h ? h[1] : null;
            }
            if (!b)
              return null;
            H.test(b) ? (h = b.slice(b.indexOf(",") + 1), h = (new e(h, "base64")).toString(), b = a) : (b = d(a, b), h = q(b));
            return h ? {
              url: b,
              map: h
            } : null;
          });
          l.wrapCallSite = c;
          l.getErrorSource = v;
          l.mapSourcePosition = a;
          l.retrieveSourceMap = D;
          l.install = function(a) {
            a = a || {};
            if (a.environment && (K = a.environment, -1 === ["node", "browser", "auto"].indexOf(K)))
              throw Error("environment " + K + " was unknown. Available options are {auto, browser, node}");
            a.retrieveFile && (a.overrideRetrieveFile && (z.length = 0), z.unshift(a.retrieveFile));
            a.retrieveSourceMap && (a.overrideRetrieveSourceMap && (E.length = 0), E.unshift(a.retrieveSourceMap));
            if (a.hookRequire && !k()) {
              var c;
              try {
                c = p("module");
              } catch (m) {}
              var d = c.prototype._compile;
              d.__sourceMapSupport || (c.prototype._compile = function(a, b) {
                B[b] = a;
                F[b] = void 0;
                return d.call(this, a, b);
              }, c.prototype._compile.__sourceMapSupport = !0);
            }
            x || (x = "emptyCacheBetweenOperations" in a ? a.emptyCacheBetweenOperations : !1);
            L || (L = !0, Error.prepareStackTrace = f);
            !C && ("handleUncaughtExceptions" in a ? a.handleUncaughtExceptions : 1) && "object" === typeof b && null !== b && "function" === typeof b.on && (C = !0, u());
          };
        }).call(this, p("node_modules/process/browser.js"), p("buffer").Buffer);
      }, {
        "node_modules/process/browser.js": 7,
        buffer: 4,
        fs: 3,
        module: 3,
        path: 6,
        "source-map": 18
      }]
    }, {}, [1]);
    return N;
  });
})(require('buffer').Buffer, require('process'));
