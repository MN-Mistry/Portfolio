! function(a, b) {
  function c() {
    s(!0)
  }
  if (a.respond = {}, respond.update = function() {}, respond.mediaQueriesSupported = b, !b) {
    var d, e, f = a.document,
      g = f.documentElement,
      h = [],
      i = [],
      j = [],
      k = {},
      l = 30,
      m = f.getElementsByTagName("head")[0] || g,
      n = m.getElementsByTagName("link"),
      o = [],
      p = function() {
        for (var b, c, d, e, f = n, g = f.length, h = 0; g > h; h++) b = f[h], c = b.href, d = b.media, e = b.rel && "stylesheet" === b.rel.toLowerCase(), c && e && !k[c] && (b.styleSheet && b.styleSheet.rawCssText ? (r(b.styleSheet.rawCssText, c, d), k[c] = !0) : /^([a-zA-Z]+?:(\/\/)?)/.test(c) && c.replace(RegExp.$1, "").split("/")[0] !== a.location.host || o.push({
          href: c,
          media: d
        }));
        q()
      },
      q = function() {
        if (o.length) {
          var a = o.shift();
          t(a.href, function(b) {
            r(b, a.href, a.media), k[a.href] = !0, q()
          })
        }
      },
      r = function(a, b, c) {
        var d, e, f, g, j, k = a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),
          l = k && k.length || 0,
          b = b.substring(0, b.lastIndexOf("/")),
          m = function(a) {
            return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3")
          },
          n = !l && c,
          o = 0;
        for (b.length && (b += "/"), n && (l = 1); l > o; o++)
          for (d = 0, n ? (e = c, i.push(m(a))) : (e = k[o].match(/@media ([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, i.push(RegExp.$2 && m(RegExp.$2))), g = e.split(","), j = g.length; j > d; d++) f = g[d], h.push({
            media: f.match(/(only\s+)?([a-zA-Z]+)(\sand)?/) && RegExp.$2,
            rules: i.length - 1,
            minw: f.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1),
            maxw: f.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1)
          });
        s()
      },
      s = function(a) {
        var b = "clientWidth",
          c = g[b],
          k = "CSS1Compat" === f.compatMode && c || f.body[b] || c,
          o = {},
          p = f.createDocumentFragment(),
          q = n[n.length - 1],
          r = (new Date).getTime();
        if (a && d && l > r - d) return clearTimeout(e), void(e = setTimeout(s, l));
        d = r;
        for (var t in h) {
          var u = h[t];
          (!u.minw && !u.maxw || (!u.minw || u.minw && k >= u.minw) && (!u.maxw || u.maxw && k <= u.maxw)) && (o[u.media] || (o[u.media] = []), o[u.media].push(i[u.rules]))
        }
        for (var t in j) j[t] && j[t].parentNode === m && m.removeChild(j[t]);
        for (var t in o) {
          var v = f.createElement("style"),
            w = o[t].join("\n");
          v.type = "text/css", v.media = t, v.styleSheet ? v.styleSheet.cssText = w : v.appendChild(f.createTextNode(w)), p.appendChild(v), j.push(v)
        }
        m.insertBefore(p, q.nextSibling)
      },
      t = function(a, b) {
        var c = u();
        c && (c.open("GET", a, !0), c.onreadystatechange = function() {
          4 != c.readyState || 200 != c.status && 304 != c.status || b(c.responseText)
        }, 4 != c.readyState && c.send(null))
      },
      u = function() {
        var a = !1;
        try {
          a = new XMLHttpRequest
        } catch (b) {
          a = new ActiveXObject("Microsoft.XMLHTTP")
        }
        return function() {
          return a
        }
      }();
    p(), respond.update = p, a.addEventListener ? a.addEventListener("resize", c, !1) : a.attachEvent && a.attachEvent("onresize", c)
  }
}(this, function(a) {
  if (a.matchMedia) return !0;
  var b, c = document,
    d = c.documentElement,
    e = d.firstElementChild || d.firstChild,
    f = !c.body,
    g = c.body || c.createElement("body"),
    h = c.createElement("div"),
    i = "only all";
  return h.id = "mq-test-1", h.style.cssText = "position:absolute;top:-99em", g.appendChild(h), h.innerHTML = '_<style media="' + i + '"> #mq-test-1 { width: 9px; }</style>', f && d.insertBefore(g, e), h.removeChild(h.firstChild), b = 9 == h.offsetWidth, f ? d.removeChild(g) : g.removeChild(h), b
}(this)),
function(a) {
  function b(a) {
    for (var b = ["Webkit", "Moz", "O", "ms"], c = 0; c < b.length; c++)
      if (b[c] + "Transition" in a.style) return "-" + b[c].toLowerCase() + "-";
    return "transition" in a.style ? "" : !1
  }
  var c = {
    init: function(c) {
      return this.each(function() {
        function d(a, c) {
          function d() {
            n.eq(a).removeAttr("style"), i = c, m = !1, f()
          }
          if (m || a == c) return !1;
          if (m = !0, r.removeClass("active").eq(j).addClass("active"), n.eq(a).css("z-index", 3), n.eq(c).css({
              "z-index": 2,
              opacity: 1
            }), b) {
            var e = {};
            e[b + "transition"] = "opacity " + g.fadeDur + "ms", e.opacity = 0, n.eq(a).css(e);
            setTimeout(function() {
              d()
            }, g.fadeDur)
          } else n.eq(a).animate({
            opacity: 0
          }, g.fadeDur, function() {
            d()
          })
        }

        function e(a) {
          "next" == a ? (j = i + 1, j > o - 1 && (j = 0)) : "prev" == a ? (j = i - 1, 0 > j && (j = o - 1)) : j = a, d(i, j)
        }

        function f() {
          h = setTimeout(function() {
            e("next")
          }, g.slideDur)
        }
        var g = {
          slideDur: 7e3,
          fadeDur: 800
        };
        c && a.extend(g, c), this.config = g;
        var h, i, j, k = a(this),
          l = ".slide",
          m = !1,
          n = k.find(l),
          o = n.length,
          p = k.find(".pager_list");
        b = b(k[0]);
        for (var q = 0; o > q; q++) p.append('<li class="page" data-target="' + q + '"></li>');
        k.find(".page").bind("click", function() {
          var b = a(this).attr("data-target");
          clearTimeout(h), e(b)
        });
        var r = p.find(".page");
        n.eq(0).css("opacity", 1), r.eq(0).addClass("active"), i = 0, f()
      })
    }
  };
  a.fn.easyFader = function(a) {
    return c.init.apply(this, arguments)
  }
}(jQuery), $(function() {
  $("#Slider").easyFader({
    slideDur: 6e3,
    fadeDur: 800
  })
}), $(window).scroll(function() {
  $(document).scrollTop() < 75 ? $(".mod").removeClass("tiny") : $(".mod").addClass("tiny")
});
