/*! For license information please see app.js.LICENSE.txt */
(() => {
    var t, e = {
            757: (t, e, n) => {
                t.exports = n(666)
            },
            63: (t, e, n) => {
                "use strict";

                function r(t) {
                    var e, n;
                    (function(t) {
                        var e = a;
                        t = $(t);
                        var n = $([]);
                        t[e(199)](e(234)) ? n[e(181)](t) : n = t[e(187)](".btn-friendRequest"), n[e(185)]((function(t) {
                            var n = e,
                                r = $(this),
                                i = r[n(207)]("data-isFriend") || 0;
                            s(r, i), r.on(n(166), o)
                        }))
                    })(t), e = t, n = a, (e = $(e))[n(187)](n(239)).on(n(166), (function(t) {
                        var e = n,
                            r = $(t[e(238)]).data("name");
                        !r && alert(e(210)), i(e(206), t[e(238)], 1, r)
                    })), e[n(187)](".friendBtns a.ignore").on(n(166), (function(t) {
                        var e = n,
                            r = $(t[e(238)])[e(214)](e(225));
                        !r && alert("Temporarily unavailable, try again"), i("respond", t.currentTarget, 0, r)
                    }))
                }

                function i(t, e, n, r) {
                    var i = a,
                        o = document[i(183)].querySelector(i(233))[i(203)],
                        s = new XMLHttpRequest;
                    s[i(213)] = 5e3, s[i(191)]("POST", "/code/friends", !0), s[i(215)](i(204), "XMLHttpRequest"), s[i(215)](i(196), o), s[i(215)](i(165), i(220)), s.send("a=" + t + i(171) + r + i(232) + n), s[i(178)] = function() {
                        alert(i(195))
                    }, s[i(176)] = function() {
                        var t = i;
                        200 == s.status ? "1" == s[t(211)] ? ($(e)[t(172)]().parent().parent()[t(231)](), 1 == n ? ($(t(194))[t(237)]("flashAnimA"), setTimeout((function() {
                            var e = t;
                            $(e(194))[e(212)](parseInt($("#frCnt").text()) + 1), $(e(240))[e(212)](parseInt($(e(240))[e(212)]()) - 1)
                        }), 250), setTimeout((function() {
                            var e = t;
                            $(e(194))[e(208)]("flashAnimA")
                        }), 1e3)) : 0 == n && $(t(240)).text(parseInt($(t(240))[t(212)]()) - 1)) : alert(t(242)) : alert(t(241) + s.status)
                    }
                }

                function o(t, e) {
                    var n = a,
                        r = $(this),
                        i = r[0];
                    if (e || !i[n(162)][n(169)](n(224))) {
                        e || (e = ""), s(r, -1);
                        var o = document[n(183)].querySelector(n(233))[n(203)],
                            l = new XMLHttpRequest,
                            c = n(221);
                        l[n(213)] = 5e3, l[n(191)](n(236), c, !0), l[n(215)](n(204), "XMLHttpRequest"), l[n(215)](n(196), o), l[n(215)](n(165), n(220)), l[n(161)](n(188) + i.dataset[n(225)] + e), l[n(178)] = function() {
                            alert(n(242))
                        }, l[n(176)] = function() {
                            var t = n;
                            200 == l.status ? "1" == l[t(211)] ? s(r, 5) : "2" == l[t(211)] ? (s(r, 1), alert("There already is existing/pending friendship.")) : "3" == l[t(211)] ? (s(r, 0), alert(t(219))) : s(r, 0) : alert("Failed to process - " + l[t(192)])
                        }
                    }
                }

                function a(t, e) {
                    var n = l();
                    return (a = function(t, e) {
                        return n[t -= 161]
                    })(t, e)
                }

                function s(t, e) {
                    var n = a,
                        r = t[0];
                    if (t.find(".fr-add").hide(), t[n(187)](n(222)).hide(), t[n(167)](), r[n(162)][n(193)](n(224)), r[n(162)][n(193)]("btn-warning"), r.classList.remove("btn-info"), r[n(162)][n(193)](n(209)), r[n(162)][n(193)]("btn-primary"), r[n(162)][n(193)](n(198)), 2 == e) t.find(n(222))[n(167)](), t[n(187)](n(201)).text(n(163)), r[n(162)][n(181)](n(224)), r.classList[n(181)](n(198)), r[n(164)] = n(179);
                    else if (1 == e) r[n(162)][n(181)](n(224)), t[n(187)](".fr-text").text(n(173)), r[n(162)][n(181)](n(226));
                    else if (0 == e) t[n(187)](n(168))[n(167)](), t.find(n(201)).text(n(230)), r.classList.add(n(227));
                    else if (3 == e) t[n(187)](n(168))[n(167)](), t[n(187)](n(201))[n(212)](n(182)), r[n(162)][n(181)](n(170));
                    else if (4 == e) {
                        r[n(162)][n(181)]("disable");
                        var i = n(217),
                            s = "Accept friend request?";
                        t.find(n(201))[n(212)](i), r[n(164)] = "/friends/pending", r[n(162)][n(181)](n(226)), t[n(228)]((function() {
                            var e = n;
                            t[e(187)](".fr-text")[e(212)](s), r[e(162)][e(181)]("btn-success"), r[e(162)].remove(e(226))
                        }), (function() {
                            var e = n;
                            t[e(187)](".fr-text")[e(212)](i), r[e(162)][e(193)](e(198)), r[e(162)].add("btn-info")
                        }))
                    } else if (5 == e) {
                        r[n(162)].add(n(224));
                        i = n(229), s = "Withdraw request?";
                        t[n(187)](n(201))[n(212)](i), r.classList[n(181)](n(226)), t[n(228)]((function() {
                            var e = n;
                            t[e(187)](e(201))[e(212)](s), r[e(162)][e(181)]("btn-danger"), r[e(162)][e(193)](e(226))
                        }), (function() {
                            var e = n;
                            t[e(187)](".fr-text")[e(212)](i), r[e(162)][e(193)]("btn-danger"), r[e(162)][e(181)](e(226))
                        })), t.unbind("click"), t.on(n(166), (function(e) {
                            var r = n;
                            t[r(218)](r(216)), o.call(t, null, r(180)), e.preventDefault()
                        }))
                    } else r.classList[n(181)](n(224)), t[n(187)](n(201))[n(223)](n(190))
                }

                function l() {
                    var t = ["Content-type", "click", "show", ".fr-add", "contains", "btn-warning", "&name=", "parent", "Friendship pending…", "22MQXXgp", "329cDDvWB", "onload", "2966020pEglRA", "onerror", "/friends", "&wd=1", "add", "You denied the friend request. Resend?", "head", "20OSoxnv", "each", "9872NQGnqS", "find", "a=add&name=", "3TQWBdm", '<img src="/res/svg/spinWhite.svg"> Loading...', "open", "status", "remove", "#frCnt", "Could not process, try again", "X-CSRF-TOKEN", "132612MWtfpA", "btn-success", "hasClass", "1095957aDfPdz", ".fr-text", "280881WYOIFb", "content", "X-Requested-With", "1191390dHhbsf", "respond", "attr", "removeClass", "btn-danger", "Temporarily unavailable, try again", "responseText", "text", "timeout", "data", "setRequestHeader", "mouseenter mouseleave", "Friend request received…", "unbind", "Friend limit exceeded. Contact jstris discord if you think the limit should be higher.", "application/x-www-form-urlencoded", "/code/friends", ".fr-added", "html", "disable", "name", "btn-info", "btn-primary", "hover", "Request sent…", "Add friend", "fadeOut", "&r=", "[name=csrf-token]", "btn-friendRequest", "77898hAcfDM", "POST", "addClass", "currentTarget", ".friendBtns a.accept", "#penCnt", "Failed to process - ", "Error", "send", "classList", "You are friends", "href"];
                    return (l = function() {
                        return t
                    })()
                }! function(t, e) {
                    for (var n = a, r = t();;) try {
                        if (105476 === parseInt(n(189)) / 1 * (parseInt(n(235)) / 2) + -parseInt(n(202)) / 3 + parseInt(n(197)) / 4 * (-parseInt(n(184)) / 5) + -parseInt(n(205)) / 6 + parseInt(n(175)) / 7 * (-parseInt(n(186)) / 8) + -parseInt(n(200)) / 9 + parseInt(n(177)) / 10 * (parseInt(n(174)) / 11)) break;
                        r.push(r.shift())
                    } catch (t) {
                        r.push(r.shift())
                    }
                }(l);

                function c(t, e, n) {
                    var r = 1 == n ? "alert-danger" : "alert-success";
                    $(t).find(".alert").remove();
                    var i = $('<div class="alert '.concat(r, '">').concat(e, "</div>"));
                    $(t).find(".modal-body").prepend(i)
                }

                function u(t) {
                    $(window).trigger("modal-opened", []), $("#report-modal-w").remove();
                    var e = function(t) {
                        for (var e = "", n = [jstris.lang("rr0", "Spam or unwanted advertising"), jstris.lang("rr1", "Sexually explicit content"), jstris.lang("rr2", "Hate speech"), jstris.lang("rr3", "Harassment or bullying"), jstris.lang("rr4", "Other (specify)")], r = 0; r < n.length; ++r) {
                            var i = n[r];
                            e += '<div class="radio"><label><input type="radio" name="rep-reason" '.concat(0 == r ? "checked" : "", ' value="').concat(r, '">').concat(i, "</label></div>")
                        }
                        var o = '<div class="modal report" id="report-modal-w">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h4 class="modal-title">'.concat(jstris.lang("reportU", "Report user"), '</h4>\n      </div>\n      <div class="modal-body">\n    <form class="form-horizontal">\n      <fieldset>\n        <div class="form-group">\n          <label  class="col-lg-2 control-label">').concat(jstris.lang("user", "User"), '</label>\n          <div class="col-lg-10">\n            <input type="text" class="form-control rep-username" name="name" autocomplete="off" readonly>\n          </div>\n        </div>\n        <div class="form-group">\n          <label class="col-lg-2 control-label">').concat(jstris.lang("reason", "Reason"), '</label>\n          <div class="col-lg-10">\n            ').concat(e, '\n          </div>\n        </div>\n        <div class="form-group">\n            <label class="col-lg-2 control-label">Details</label>\n            <div class="col-lg-10">\n              <textarea class="form-control" rows="3" name="details"></textarea>\n              <span class="help-block">Other details you want to add to the report. No need to copy and paste messages.</span>\n            </div>\n        </div>\n      </fieldset>\n    </form>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">').concat(jstris.lang("close", "Close"), '</button>\n        <button type="button" class="btn btn-sm btn-danger btn-send-report"><svg><use xlink:href="/svg/white.svg?1#s-warn"></use></svg> ').concat(jstris.lang("sendReport", "Send report"), "</button>\n      </div>\n    </div>\n  </div>\n</div>\n"),
                            a = $(o),
                            s = a.find(".btn-send-report"),
                            l = s.html();
                        return s.on("click", (function() {
                            s.html('<img src="/res/svg/spinWhite.svg"> Wait...'), s.prop("disabled", !0);
                            var t = a.find(".form-horizontal"),
                                e = document.head.querySelector("[name=csrf-token]").content,
                                n = t.serialize();
                            jstris.roomId && (n += "&roomId=" + jstris.roomId), $.ajax({
                                type: "POST",
                                url: "/code/report",
                                data: n,
                                headers: {
                                    "X-CSRF-TOKEN": e
                                },
                                success: function(e) {
                                    t.hide(), s.hide(), c(a, "Report has been sent!", 2)
                                },
                                error: function(t) {
                                    if (s.prop("disabled", !1), s.html(l), 422 == t.status) c(a, "The report form contains errors.", 1);
                                    else if (419 == t.status) c(a, "Login expired. Refresh the page.", 1);
                                    else if (t.responseJSON && t.responseJSON.e) {
                                        var e = t.responseJSON.e;
                                        c(a, e, 1)
                                    } else c(a, "Unknown error. If the problem persists, send the report manually via Jstris discord.", 1);
                                    console.error(t)
                                }
                            })
                        })), a.find(".rep-username").val(t), a
                    }($(this).attr("data-name"));
                    $(window.document.body).append(e), e.modal("show")
                }
                const f = function(t) {
                    (t = $(t)).find(".btn-report").each((function(t) {
                        $(this).on("click", u)
                    }))
                };
                var d = n(757),
                    p = n.n(d);

                function h(t) {
                    var e = "function" == typeof Map ? new Map : void 0;
                    return h = function(t) {
                        if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                        var n;
                        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== e) {
                            if (e.has(t)) return e.get(t);
                            e.set(t, r)
                        }

                        function r() {
                            return m(t, arguments, T(this).constructor)
                        }
                        return r.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), y(r, t)
                    }, h(t)
                }

                function m(t, e, n) {
                    return m = x() ? Reflect.construct : function(t, e, n) {
                        var r = [null];
                        r.push.apply(r, e);
                        var i = new(Function.bind.apply(t, r));
                        return n && y(i, n.prototype), i
                    }, m.apply(null, arguments)
                }

                function v(t) {
                    return function(t) {
                        if (Array.isArray(t)) return O(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                    }(t) || S(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function g(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    Object.defineProperty(t, "prototype", {
                        value: Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        writable: !1
                    }), e && y(t, e)
                }

                function y(t, e) {
                    return y = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    }, y(t, e)
                }

                function b(t) {
                    var e = x();
                    return function() {
                        var n, r = T(t);
                        if (e) {
                            var i = T(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else n = r.apply(this, arguments);
                        return w(this, n)
                    }
                }

                function w(t, e) {
                    if (e && ("object" === A(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }

                function x() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }

                function T(t) {
                    return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, T(t)
                }

                function k(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function C(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function E(t, e, n) {
                    return e && C(t.prototype, e), n && C(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t
                }

                function S(t, e) {
                    if (t) {
                        if ("string" == typeof t) return O(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(t, e) : void 0
                    }
                }

                function O(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function A(t) {
                    return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, A(t)
                }

                function j() {}

                function N(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                }

                function D(t) {
                    return t()
                }

                function I() {
                    return Object.create(null)
                }

                function L(t) {
                    t.forEach(D)
                }

                function P(t) {
                    return "function" == typeof t
                }

                function _(t, e) {
                    return t != t ? e == e : t !== e || t && "object" === A(t) || "function" == typeof t
                }

                function R(t) {
                    return 0 === Object.keys(t).length
                }

                function H(t) {
                    var e = {};
                    for (var n in t) "$" !== n[0] && (e[n] = t[n]);
                    return e
                }
                new Set;

                function M() {
                    !0
                }

                function q() {
                    !1
                }

                function z(t, e) {
                    t.appendChild(e)
                }

                function F(t) {
                    if (!t) return document;
                    var e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
                    return e && e.host ? e : t.ownerDocument
                }

                function W(t, e) {
                    z(t.head || t, e)
                }

                function B(t, e, n) {
                    t.insertBefore(e, n || null)
                }

                function U(t) {
                    t.parentNode.removeChild(t)
                }

                function X(t) {
                    return document.createElement(t)
                }

                function Y(t) {
                    return document.createTextNode(t)
                }

                function V() {
                    return Y(" ")
                }

                function G() {
                    return Y("")
                }

                function Q(t, e, n, r) {
                    return t.addEventListener(e, n, r),
                        function() {
                            return t.removeEventListener(e, n, r)
                        }
                }

                function J(t) {
                    return function(e) {
                        return e.preventDefault(), t.call(this, e)
                    }
                }

                function K(t, e, n) {
                    null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
                }

                function Z(t) {
                    return Array.from(t.childNodes)
                }

                function tt(t, e) {
                    e = "" + e, t.wholeText !== e && (t.data = e)
                }

                function et(t, e) {
                    t.value = null == e ? "" : e
                }

                function nt(t, e, n) {
                    t.classList[n ? "add" : "remove"](e)
                }
                var rt = function() {
                    function t() {
                        k(this, t), this.e = this.n = null
                    }
                    return E(t, [{
                        key: "c",
                        value: function(t) {
                            this.h(t)
                        }
                    }, {
                        key: "m",
                        value: function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            this.e || (this.e = X(e.nodeName), this.t = e, this.c(t)), this.i(n)
                        }
                    }, {
                        key: "h",
                        value: function(t) {
                            this.e.innerHTML = t, this.n = Array.from(this.e.childNodes)
                        }
                    }, {
                        key: "i",
                        value: function(t) {
                            for (var e = 0; e < this.n.length; e += 1) B(this.t, this.n[e], t)
                        }
                    }, {
                        key: "p",
                        value: function(t) {
                            this.d(), this.h(t), this.i(this.a)
                        }
                    }, {
                        key: "d",
                        value: function() {
                            this.n.forEach(U)
                        }
                    }]), t
                }();
                var it;
                new Set;

                function ot(t) {
                    it = t
                }

                function at() {
                    if (!it) throw new Error("Function called outside component initialization");
                    return it
                }

                function st(t) {
                    at().$$.before_update.push(t)
                }
                var lt = [],
                    ct = [],
                    ut = [],
                    ft = [],
                    dt = Promise.resolve(),
                    pt = !1;

                function ht() {
                    pt || (pt = !0, dt.then(yt))
                }

                function mt(t) {
                    ut.push(t)
                }
                var vt = new Set,
                    gt = 0;

                function yt() {
                    var t = it;
                    do {
                        for (; gt < lt.length;) {
                            var e = lt[gt];
                            gt++, ot(e), bt(e.$$)
                        }
                        for (ot(null), lt.length = 0, gt = 0; ct.length;) ct.pop()();
                        for (var n = 0; n < ut.length; n += 1) {
                            var r = ut[n];
                            vt.has(r) || (vt.add(r), r())
                        }
                        ut.length = 0
                    } while (lt.length);
                    for (; ft.length;) ft.pop()();
                    pt = !1, vt.clear(), ot(t)
                }

                function bt(t) {
                    if (null !== t.fragment) {
                        t.update(), L(t.before_update);
                        var e = t.dirty;
                        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(mt)
                    }
                }
                var wt, xt = new Set;

                function Tt() {
                    wt = {
                        r: 0,
                        c: [],
                        p: wt
                    }
                }

                function kt() {
                    wt.r || L(wt.c), wt = wt.p
                }

                function Ct(t, e) {
                    t && t.i && (xt.delete(t), t.i(e))
                }

                function Et(t, e, n, r) {
                    if (t && t.o) {
                        if (xt.has(t)) return;
                        xt.add(t), wt.c.push((function() {
                            xt.delete(t), r && (n && t.d(1), r())
                        })), t.o(e)
                    }
                }
                "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
                new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"]);

                function $t(t) {
                    t && t.c()
                }

                function St(t, e, n, r) {
                    var i = t.$$,
                        o = i.fragment,
                        a = i.on_mount,
                        s = i.on_destroy,
                        l = i.after_update;
                    o && o.m(e, n), r || mt((function() {
                        var e = a.map(D).filter(P);
                        s ? s.push.apply(s, v(e)) : L(e), t.$$.on_mount = []
                    })), l.forEach(mt)
                }

                function Ot(t, e) {
                    var n = t.$$;
                    null !== n.fragment && (L(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
                }

                function At(t, e) {
                    -1 === t.$$.dirty[0] && (lt.push(t), ht(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
                }

                function jt(t, e, n, r, i, o, a) {
                    var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [-1],
                        l = it;
                    ot(t);
                    var c = t.$$ = {
                        fragment: null,
                        ctx: null,
                        props: o,
                        update: j,
                        not_equal: i,
                        bound: I(),
                        on_mount: [],
                        on_destroy: [],
                        on_disconnect: [],
                        before_update: [],
                        after_update: [],
                        context: new Map(e.context || (l ? l.$$.context : [])),
                        callbacks: I(),
                        dirty: s,
                        skip_bound: !1,
                        root: e.target || l.$$.root
                    };
                    a && a(c.root);
                    var u = !1;
                    if (c.ctx = n ? n(t, e.props || {}, (function(e, n) {
                            var r = !(arguments.length <= 2) && arguments.length - 2 ? arguments.length <= 2 ? void 0 : arguments[2] : n;
                            return c.ctx && i(c.ctx[e], c.ctx[e] = r) && (!c.skip_bound && c.bound[e] && c.bound[e](r), u && At(t, e)), n
                        })) : [], c.update(), u = !0, L(c.before_update), c.fragment = !!r && r(c.ctx), e.target) {
                        if (e.hydrate) {
                            M();
                            var f = Z(e.target);
                            c.fragment && c.fragment.l(f), f.forEach(U)
                        } else c.fragment && c.fragment.c();
                        e.intro && Ct(t.$$.fragment), St(t, e.target, e.anchor, e.customElement), q(), yt()
                    }
                    ot(l)
                }
                "function" == typeof HTMLElement && HTMLElement;
                var Nt = function() {
                    function t() {
                        k(this, t)
                    }
                    return E(t, [{
                        key: "$destroy",
                        value: function() {
                            Ot(this, 1), this.$destroy = j
                        }
                    }, {
                        key: "$on",
                        value: function(t, e) {
                            var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                            return n.push(e),
                                function() {
                                    var t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
                                }
                        }
                    }, {
                        key: "$set",
                        value: function(t) {
                            this.$$set && !R(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
                        }
                    }]), t
                }();
                var Dt = {
                        prefix: "fas",
                        iconName: "check",
                        icon: [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]
                    },
                    It = {
                        prefix: "fas",
                        iconName: "exclamation-triangle",
                        icon: [576, 512, [], "f071", "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"]
                    },
                    Lt = {
                        prefix: "fas",
                        iconName: "gift",
                        icon: [512, 512, [], "f06b", "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"]
                    },
                    Pt = {
                        prefix: "fas",
                        iconName: "plus",
                        icon: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]
                    },
                    _t = {
                        prefix: "fas",
                        iconName: "question-circle",
                        icon: [512, 512, [], "f059", "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"]
                    },
                    Rt = {
                        prefix: "fas",
                        iconName: "redo",
                        icon: [512, 512, [], "f01e", "M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"]
                    },
                    Ht = {
                        prefix: "fas",
                        iconName: "spinner",
                        icon: [512, 512, [], "f110", "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]
                    };

                function Mt(t) {
                    return Mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, Mt(t)
                }

                function qt(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function zt(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function Ft(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        })))), r.forEach((function(e) {
                            zt(t, e, n[e])
                        }))
                    }
                    return t
                }

                function Wt(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                        } catch (t) {
                            i = !0, o = t
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }
                var Bt = function() {},
                    Ut = {},
                    Xt = {},
                    Yt = {
                        mark: Bt,
                        measure: Bt
                    };
                try {
                    "undefined" != typeof window && (Ut = window), "undefined" != typeof document && (Xt = document), "undefined" != typeof MutationObserver && MutationObserver, "undefined" != typeof performance && (Yt = performance)
                } catch (t) {}
                var Vt = (Ut.navigator || {}).userAgent,
                    Gt = void 0 === Vt ? "" : Vt,
                    Qt = Ut,
                    Jt = Xt,
                    Kt = Yt,
                    Zt = (Qt.document, !!Jt.documentElement && !!Jt.head && "function" == typeof Jt.addEventListener && "function" == typeof Jt.createElement),
                    te = (~Gt.indexOf("MSIE") || Gt.indexOf("Trident/"), "svg-inline--fa"),
                    ee = "data-fa-i2svg",
                    ne = (function() {
                        try {} catch (t) {
                            return !1
                        }
                    }(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
                    re = ne.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                    ie = {
                        GROUP: "group",
                        SWAP_OPACITY: "swap-opacity",
                        PRIMARY: "primary",
                        SECONDARY: "secondary"
                    },
                    oe = (["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", ie.GROUP, ie.SWAP_OPACITY, ie.PRIMARY, ie.SECONDARY].concat(ne.map((function(t) {
                        return "".concat(t, "x")
                    }))).concat(re.map((function(t) {
                        return "w-".concat(t)
                    }))), Qt.FontAwesomeConfig || {});
                if (Jt && "function" == typeof Jt.querySelector) {
                    [
                        ["data-family-prefix", "familyPrefix"],
                        ["data-replacement-class", "replacementClass"],
                        ["data-auto-replace-svg", "autoReplaceSvg"],
                        ["data-auto-add-css", "autoAddCss"],
                        ["data-auto-a11y", "autoA11y"],
                        ["data-search-pseudo-elements", "searchPseudoElements"],
                        ["data-observe-mutations", "observeMutations"],
                        ["data-mutate-approach", "mutateApproach"],
                        ["data-keep-original-source", "keepOriginalSource"],
                        ["data-measure-performance", "measurePerformance"],
                        ["data-show-missing-icons", "showMissingIcons"]
                    ].forEach((function(t) {
                        var e = Wt(t, 2),
                            n = e[0],
                            r = e[1],
                            i = function(t) {
                                return "" === t || "false" !== t && ("true" === t || t)
                            }(function(t) {
                                var e = Jt.querySelector("script[" + t + "]");
                                if (e) return e.getAttribute(t)
                            }(n));
                        null != i && (oe[r] = i)
                    }))
                }
                var ae = Ft({}, {
                    familyPrefix: "fa",
                    replacementClass: te,
                    autoReplaceSvg: !0,
                    autoAddCss: !0,
                    autoA11y: !0,
                    searchPseudoElements: !1,
                    observeMutations: !0,
                    mutateApproach: "async",
                    keepOriginalSource: !0,
                    measurePerformance: !1,
                    showMissingIcons: !0
                }, oe);
                ae.autoReplaceSvg || (ae.observeMutations = !1);
                var se = Ft({}, ae);
                Qt.FontAwesomeConfig = se;
                var le = Qt || {};
                le.___FONT_AWESOME___ || (le.___FONT_AWESOME___ = {}), le.___FONT_AWESOME___.styles || (le.___FONT_AWESOME___.styles = {}), le.___FONT_AWESOME___.hooks || (le.___FONT_AWESOME___.hooks = {}), le.___FONT_AWESOME___.shims || (le.___FONT_AWESOME___.shims = []);
                var ce = le.___FONT_AWESOME___,
                    ue = [];
                Zt && ((Jt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Jt.readyState) || Jt.addEventListener("DOMContentLoaded", (function t() {
                    Jt.removeEventListener("DOMContentLoaded", t), 1, ue.map((function(t) {
                        return t()
                    }))
                })));
                var fe, de = "pending",
                    pe = "settled",
                    he = "fulfilled",
                    me = "rejected",
                    ve = function() {},
                    ge = void 0 !== n.g && void 0 !== n.g.process && "function" == typeof n.g.process.emit,
                    ye = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
                    be = [];

                function we() {
                    for (var t = 0; t < be.length; t++) be[t][0](be[t][1]);
                    be = [], fe = !1
                }

                function xe(t, e) {
                    be.push([t, e]), fe || (fe = !0, ye(we, 0))
                }

                function Te(t) {
                    var e = t.owner,
                        n = e._state,
                        r = e._data,
                        i = t[n],
                        o = t.then;
                    if ("function" == typeof i) {
                        n = he;
                        try {
                            r = i(r)
                        } catch (t) {
                            $e(o, t)
                        }
                    }
                    ke(o, r) || (n === he && Ce(o, r), n === me && $e(o, r))
                }

                function ke(t, e) {
                    var n;
                    try {
                        if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                        if (e && ("function" == typeof e || "object" === Mt(e))) {
                            var r = e.then;
                            if ("function" == typeof r) return r.call(e, (function(r) {
                                n || (n = !0, e === r ? Ee(t, r) : Ce(t, r))
                            }), (function(e) {
                                n || (n = !0, $e(t, e))
                            })), !0
                        }
                    } catch (e) {
                        return n || $e(t, e), !0
                    }
                    return !1
                }

                function Ce(t, e) {
                    t !== e && ke(t, e) || Ee(t, e)
                }

                function Ee(t, e) {
                    t._state === de && (t._state = pe, t._data = e, xe(Oe, t))
                }

                function $e(t, e) {
                    t._state === de && (t._state = pe, t._data = e, xe(Ae, t))
                }

                function Se(t) {
                    t._then = t._then.forEach(Te)
                }

                function Oe(t) {
                    t._state = he, Se(t)
                }

                function Ae(t) {
                    t._state = me, Se(t), !t._handled && ge && n.g.process.emit("unhandledRejection", t._data, t)
                }

                function je(t) {
                    n.g.process.emit("rejectionHandled", t)
                }

                function Ne(t) {
                    if ("function" != typeof t) throw new TypeError("Promise resolver " + t + " is not a function");
                    if (this instanceof Ne == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    this._then = [],
                        function(t, e) {
                            function n(t) {
                                $e(e, t)
                            }
                            try {
                                t((function(t) {
                                    Ce(e, t)
                                }), n)
                            } catch (t) {
                                n(t)
                            }
                        }(t, this)
                }
                Ne.prototype = {
                    constructor: Ne,
                    _state: de,
                    _then: null,
                    _data: void 0,
                    _handled: !1,
                    then: function(t, e) {
                        var n = {
                            owner: this,
                            then: new this.constructor(ve),
                            fulfilled: t,
                            rejected: e
                        };
                        return !e && !t || this._handled || (this._handled = !0, this._state === me && ge && xe(je, this)), this._state === he || this._state === me ? xe(Te, n) : this._then.push(n), n.then
                    },
                    catch: function(t) {
                        return this.then(null, t)
                    }
                }, Ne.all = function(t) {
                    if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.all().");
                    return new Ne((function(e, n) {
                        var r = [],
                            i = 0;

                        function o(t) {
                            return i++,
                                function(n) {
                                    r[t] = n, --i || e(r)
                                }
                        }
                        for (var a, s = 0; s < t.length; s++)(a = t[s]) && "function" == typeof a.then ? a.then(o(s), n) : r[s] = a;
                        i || e(r)
                    }))
                }, Ne.race = function(t) {
                    if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.race().");
                    return new Ne((function(e, n) {
                        for (var r, i = 0; i < t.length; i++)(r = t[i]) && "function" == typeof r.then ? r.then(e, n) : e(r)
                    }))
                }, Ne.resolve = function(t) {
                    return t && "object" === Mt(t) && t.constructor === Ne ? t : new Ne((function(e) {
                        e(t)
                    }))
                }, Ne.reject = function(t) {
                    return new Ne((function(e, n) {
                        n(t)
                    }))
                };
                var De = {
                    size: 16,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    flipX: !1,
                    flipY: !1
                };

                function Ie(t) {
                    if (t && Zt) {
                        var e = Jt.createElement("style");
                        e.setAttribute("type", "text/css"), e.innerHTML = t;
                        for (var n = Jt.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
                            var o = n[i],
                                a = (o.tagName || "").toUpperCase();
                            ["STYLE", "LINK"].indexOf(a) > -1 && (r = o)
                        }
                        return Jt.head.insertBefore(e, r), t
                    }
                }

                function Le() {
                    for (var t = 12, e = ""; t-- > 0;) e += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
                    return e
                }

                function Pe(t) {
                    return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function _e(t) {
                    return Object.keys(t || {}).reduce((function(e, n) {
                        return e + "".concat(n, ": ").concat(t[n], ";")
                    }), "")
                }

                function Re(t) {
                    return t.size !== De.size || t.x !== De.x || t.y !== De.y || t.rotate !== De.rotate || t.flipX || t.flipY
                }

                function He(t) {
                    var e = t.transform,
                        n = t.containerWidth,
                        r = t.iconWidth,
                        i = {
                            transform: "translate(".concat(n / 2, " 256)")
                        },
                        o = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
                        a = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
                        s = "rotate(".concat(e.rotate, " 0 0)");
                    return {
                        outer: i,
                        inner: {
                            transform: "".concat(o, " ").concat(a, " ").concat(s)
                        },
                        path: {
                            transform: "translate(".concat(r / 2 * -1, " -256)")
                        }
                    }
                }
                var Me = {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: "100%"
                };

                function qe(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t
                }

                function ze(t) {
                    var e = t.icons,
                        n = e.main,
                        r = e.mask,
                        i = t.prefix,
                        o = t.iconName,
                        a = t.transform,
                        s = t.symbol,
                        l = t.title,
                        c = t.maskId,
                        u = t.titleId,
                        f = t.extra,
                        d = t.watchable,
                        p = void 0 !== d && d,
                        h = r.found ? r : n,
                        m = h.width,
                        v = h.height,
                        g = "fak" === i,
                        y = g ? "" : "fa-w-".concat(Math.ceil(m / v * 16)),
                        b = [se.replacementClass, o ? "".concat(se.familyPrefix, "-").concat(o) : "", y].filter((function(t) {
                            return -1 === f.classes.indexOf(t)
                        })).filter((function(t) {
                            return "" !== t || !!t
                        })).concat(f.classes).join(" "),
                        w = {
                            children: [],
                            attributes: Ft({}, f.attributes, {
                                "data-prefix": i,
                                "data-icon": o,
                                class: b,
                                role: f.attributes.role || "img",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 ".concat(m, " ").concat(v)
                            })
                        },
                        x = g && !~f.classes.indexOf("fa-fw") ? {
                            width: "".concat(m / v * 16 * .0625, "em")
                        } : {};
                    p && (w.attributes[ee] = ""), l && w.children.push({
                        tag: "title",
                        attributes: {
                            id: w.attributes["aria-labelledby"] || "title-".concat(u || Le())
                        },
                        children: [l]
                    });
                    var T = Ft({}, w, {
                            prefix: i,
                            iconName: o,
                            main: n,
                            mask: r,
                            maskId: c,
                            transform: a,
                            symbol: s,
                            styles: Ft({}, x, f.styles)
                        }),
                        k = r.found && n.found ? function(t) {
                            var e, n = t.children,
                                r = t.attributes,
                                i = t.main,
                                o = t.mask,
                                a = t.maskId,
                                s = t.transform,
                                l = i.width,
                                c = i.icon,
                                u = o.width,
                                f = o.icon,
                                d = He({
                                    transform: s,
                                    containerWidth: u,
                                    iconWidth: l
                                }),
                                p = {
                                    tag: "rect",
                                    attributes: Ft({}, Me, {
                                        fill: "white"
                                    })
                                },
                                h = c.children ? {
                                    children: c.children.map(qe)
                                } : {},
                                m = {
                                    tag: "g",
                                    attributes: Ft({}, d.inner),
                                    children: [qe(Ft({
                                        tag: c.tag,
                                        attributes: Ft({}, c.attributes, d.path)
                                    }, h))]
                                },
                                v = {
                                    tag: "g",
                                    attributes: Ft({}, d.outer),
                                    children: [m]
                                },
                                g = "mask-".concat(a || Le()),
                                y = "clip-".concat(a || Le()),
                                b = {
                                    tag: "mask",
                                    attributes: Ft({}, Me, {
                                        id: g,
                                        maskUnits: "userSpaceOnUse",
                                        maskContentUnits: "userSpaceOnUse"
                                    }),
                                    children: [p, v]
                                },
                                w = {
                                    tag: "defs",
                                    children: [{
                                        tag: "clipPath",
                                        attributes: {
                                            id: y
                                        },
                                        children: (e = f, "g" === e.tag ? e.children : [e])
                                    }, b]
                                };
                            return n.push(w, {
                                tag: "rect",
                                attributes: Ft({
                                    fill: "currentColor",
                                    "clip-path": "url(#".concat(y, ")"),
                                    mask: "url(#".concat(g, ")")
                                }, Me)
                            }), {
                                children: n,
                                attributes: r
                            }
                        }(T) : function(t) {
                            var e = t.children,
                                n = t.attributes,
                                r = t.main,
                                i = t.transform,
                                o = _e(t.styles);
                            if (o.length > 0 && (n.style = o), Re(i)) {
                                var a = He({
                                    transform: i,
                                    containerWidth: r.width,
                                    iconWidth: r.width
                                });
                                e.push({
                                    tag: "g",
                                    attributes: Ft({}, a.outer),
                                    children: [{
                                        tag: "g",
                                        attributes: Ft({}, a.inner),
                                        children: [{
                                            tag: r.icon.tag,
                                            children: r.icon.children,
                                            attributes: Ft({}, r.icon.attributes, a.path)
                                        }]
                                    }]
                                })
                            } else e.push(r.icon);
                            return {
                                children: e,
                                attributes: n
                            }
                        }(T),
                        C = k.children,
                        E = k.attributes;
                    return T.children = C, T.attributes = E, s ? function(t) {
                        var e = t.prefix,
                            n = t.iconName,
                            r = t.children,
                            i = t.attributes,
                            o = t.symbol;
                        return [{
                            tag: "svg",
                            attributes: {
                                style: "display: none;"
                            },
                            children: [{
                                tag: "symbol",
                                attributes: Ft({}, i, {
                                    id: !0 === o ? "".concat(e, "-").concat(se.familyPrefix, "-").concat(n) : o
                                }),
                                children: r
                            }]
                        }]
                    }(T) : function(t) {
                        var e = t.children,
                            n = t.main,
                            r = t.mask,
                            i = t.attributes,
                            o = t.styles,
                            a = t.transform;
                        if (Re(a) && n.found && !r.found) {
                            var s = {
                                x: n.width / n.height / 2,
                                y: .5
                            };
                            i.style = _e(Ft({}, o, {
                                "transform-origin": "".concat(s.x + a.x / 16, "em ").concat(s.y + a.y / 16, "em")
                            }))
                        }
                        return [{
                            tag: "svg",
                            attributes: i,
                            children: e
                        }]
                    }(T)
                }
                var Fe = function() {},
                    We = (se.measurePerformance && Kt && Kt.mark && Kt.measure, function(t, e, n, r) {
                        var i, o, a, s = Object.keys(t),
                            l = s.length,
                            c = void 0 !== r ? function(t, e) {
                                return function(n, r, i, o) {
                                    return t.call(e, n, r, i, o)
                                }
                            }(e, r) : e;
                        for (void 0 === n ? (i = 1, a = t[s[0]]) : (i = 0, a = n); i < l; i++) a = c(a, t[o = s[i]], o, t);
                        return a
                    });

                function Be(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.skipHooks,
                        i = void 0 !== r && r,
                        o = Object.keys(e).reduce((function(t, n) {
                            var r = e[n];
                            return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t
                        }), {});
                    "function" != typeof ce.hooks.addPack || i ? ce.styles[t] = Ft({}, ce.styles[t] || {}, o) : ce.hooks.addPack(t, o), "fas" === t && Be("fa", e)
                }
                var Ue = ce.styles,
                    Xe = ce.shims,
                    Ye = function() {
                        var t = function(t) {
                            return We(Ue, (function(e, n, r) {
                                return e[r] = We(n, t, {}), e
                            }), {})
                        };
                        t((function(t, e, n) {
                            return e[3] && (t[e[3]] = n), t
                        })), t((function(t, e, n) {
                            var r = e[2];
                            return t[n] = n, r.forEach((function(e) {
                                t[e] = n
                            })), t
                        }));
                        var e = "far" in Ue;
                        We(Xe, (function(t, n) {
                            var r = n[0],
                                i = n[1],
                                o = n[2];
                            return "far" !== i || e || (i = "fas"), t[r] = {
                                prefix: i,
                                iconName: o
                            }, t
                        }), {})
                    };
                Ye();
                ce.styles;

                function Ve(t, e, n) {
                    if (t && t[e] && t[e][n]) return {
                        prefix: e,
                        iconName: n,
                        icon: t[e][n]
                    }
                }

                function Ge(t) {
                    var e = t.tag,
                        n = t.attributes,
                        r = void 0 === n ? {} : n,
                        i = t.children,
                        o = void 0 === i ? [] : i;
                    return "string" == typeof t ? Pe(t) : "<".concat(e, " ").concat(function(t) {
                        return Object.keys(t || {}).reduce((function(e, n) {
                            return e + "".concat(n, '="').concat(Pe(t[n]), '" ')
                        }), "").trim()
                    }(r), ">").concat(o.map(Ge).join(""), "</").concat(e, ">")
                }
                var Qe = function(t) {
                    var e = {
                        size: 16,
                        x: 0,
                        y: 0,
                        flipX: !1,
                        flipY: !1,
                        rotate: 0
                    };
                    return t ? t.toLowerCase().split(" ").reduce((function(t, e) {
                        var n = e.toLowerCase().split("-"),
                            r = n[0],
                            i = n.slice(1).join("-");
                        if (r && "h" === i) return t.flipX = !0, t;
                        if (r && "v" === i) return t.flipY = !0, t;
                        if (i = parseFloat(i), isNaN(i)) return t;
                        switch (r) {
                            case "grow":
                                t.size = t.size + i;
                                break;
                            case "shrink":
                                t.size = t.size - i;
                                break;
                            case "left":
                                t.x = t.x - i;
                                break;
                            case "right":
                                t.x = t.x + i;
                                break;
                            case "up":
                                t.y = t.y - i;
                                break;
                            case "down":
                                t.y = t.y + i;
                                break;
                            case "rotate":
                                t.rotate = t.rotate + i
                        }
                        return t
                    }), e) : e
                };

                function Je(t) {
                    this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = (new Error).stack
                }
                Je.prototype = Object.create(Error.prototype), Je.prototype.constructor = Je;
                var Ke = {
                        fill: "currentColor"
                    },
                    Ze = {
                        attributeType: "XML",
                        repeatCount: "indefinite",
                        dur: "2s"
                    },
                    tn = {
                        tag: "path",
                        attributes: Ft({}, Ke, {
                            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                        })
                    },
                    en = Ft({}, Ze, {
                        attributeName: "opacity"
                    });
                Ft({}, Ke, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }), Ft({}, Ze, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                }), Ft({}, en, {
                    values: "1;0;1;1;0;1;"
                }), Ft({}, Ke, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }), Ft({}, en, {
                    values: "1;0;0;0;0;1;"
                }), Ft({}, Ke, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }), Ft({}, en, {
                    values: "0;0;1;1;0;0;"
                }), ce.styles;

                function nn(t) {
                    var e = t[0],
                        n = t[1],
                        r = Wt(t.slice(4), 1)[0];
                    return {
                        found: !0,
                        width: e,
                        height: n,
                        icon: Array.isArray(r) ? {
                            tag: "g",
                            attributes: {
                                class: "".concat(se.familyPrefix, "-").concat(ie.GROUP)
                            },
                            children: [{
                                tag: "path",
                                attributes: {
                                    class: "".concat(se.familyPrefix, "-").concat(ie.SECONDARY),
                                    fill: "currentColor",
                                    d: r[0]
                                }
                            }, {
                                tag: "path",
                                attributes: {
                                    class: "".concat(se.familyPrefix, "-").concat(ie.PRIMARY),
                                    fill: "currentColor",
                                    d: r[1]
                                }
                            }]
                        } : {
                            tag: "path",
                            attributes: {
                                fill: "currentColor",
                                d: r
                            }
                        }
                    }
                }
                ce.styles;

                function rn() {
                    var t = "fa",
                        e = te,
                        n = se.familyPrefix,
                        r = se.replacementClass,
                        i = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
                    if (n !== t || r !== e) {
                        var o = new RegExp("\\.".concat(t, "\\-"), "g"),
                            a = new RegExp("\\--".concat(t, "\\-"), "g"),
                            s = new RegExp("\\.".concat(e), "g");
                        i = i.replace(o, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r))
                    }
                    return i
                }
                var on = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.definitions = {}
                    }
                    var e, n, r;
                    return e = t, n = [{
                        key: "add",
                        value: function() {
                            for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            var i = n.reduce(this._pullDefinitions, {});
                            Object.keys(i).forEach((function(e) {
                                t.definitions[e] = Ft({}, t.definitions[e] || {}, i[e]), Be(e, i[e]), Ye()
                            }))
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.definitions = {}
                        }
                    }, {
                        key: "_pullDefinitions",
                        value: function(t, e) {
                            var n = e.prefix && e.iconName && e.icon ? {
                                0: e
                            } : e;
                            return Object.keys(n).map((function(e) {
                                var r = n[e],
                                    i = r.prefix,
                                    o = r.iconName,
                                    a = r.icon;
                                t[i] || (t[i] = {}), t[i][o] = a
                            })), t
                        }
                    }], n && qt(e.prototype, n), r && qt(e, r), t
                }();

                function an() {
                    se.autoAddCss && !fn && (Ie(rn()), fn = !0)
                }

                function sn(t, e) {
                    return Object.defineProperty(t, "abstract", {
                        get: e
                    }), Object.defineProperty(t, "html", {
                        get: function() {
                            return t.abstract.map((function(t) {
                                return Ge(t)
                            }))
                        }
                    }), Object.defineProperty(t, "node", {
                        get: function() {
                            if (Zt) {
                                var e = Jt.createElement("div");
                                return e.innerHTML = t.html, e.children
                            }
                        }
                    }), t
                }

                function ln(t) {
                    var e = t.prefix,
                        n = void 0 === e ? "fa" : e,
                        r = t.iconName;
                    if (r) return Ve(un.definitions, n, r) || Ve(ce.styles, n, r)
                }
                var cn, un = new on,
                    fn = !1,
                    dn = {
                        transform: function(t) {
                            return Qe(t)
                        }
                    },
                    pn = (cn = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.transform,
                            r = void 0 === n ? De : n,
                            i = e.symbol,
                            o = void 0 !== i && i,
                            a = e.mask,
                            s = void 0 === a ? null : a,
                            l = e.maskId,
                            c = void 0 === l ? null : l,
                            u = e.title,
                            f = void 0 === u ? null : u,
                            d = e.titleId,
                            p = void 0 === d ? null : d,
                            h = e.classes,
                            m = void 0 === h ? [] : h,
                            v = e.attributes,
                            g = void 0 === v ? {} : v,
                            y = e.styles,
                            b = void 0 === y ? {} : y;
                        if (t) {
                            var w = t.prefix,
                                x = t.iconName,
                                T = t.icon;
                            return sn(Ft({
                                type: "icon"
                            }, t), (function() {
                                return an(), se.autoA11y && (f ? g["aria-labelledby"] = "".concat(se.replacementClass, "-title-").concat(p || Le()) : (g["aria-hidden"] = "true", g.focusable = "false")), ze({
                                    icons: {
                                        main: nn(T),
                                        mask: s ? nn(s.icon) : {
                                            found: !1,
                                            width: null,
                                            height: null,
                                            icon: {}
                                        }
                                    },
                                    prefix: w,
                                    iconName: x,
                                    transform: Ft({}, De, r),
                                    symbol: o,
                                    title: f,
                                    maskId: c,
                                    titleId: p,
                                    extra: {
                                        attributes: g,
                                        styles: b,
                                        classes: m
                                    }
                                })
                            }))
                        }
                    }, function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = (t || {}).icon ? t : ln(t || {}),
                            r = e.mask;
                        return r && (r = (r || {}).icon ? r : ln(r || {})), cn(n, Ft({}, e, {
                            mask: r
                        }))
                    });

                function hn(t) {
                    if (null === t) return t;
                    if ("object" == typeof t && t.prefix && t.iconName) return t;
                    if (Array.isArray(t) && 2 === t.length) {
                        const [e, n] = t;
                        return {
                            prefix: e,
                            iconName: n
                        }
                    }
                    return "string" == typeof t ? {
                        prefix: "fas",
                        iconName: t
                    } : void 0
                }

                function mn(t) {
                    return mn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, mn(t)
                }

                function vn(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function gn(t, e) {
                    return gn = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    }, gn(t, e)
                }

                function yn(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = xn(t);
                        if (e) {
                            var i = xn(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else n = r.apply(this, arguments);
                        return bn(this, n)
                    }
                }

                function bn(t, e) {
                    if (e && ("object" === mn(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return wn(t)
                }

                function wn(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }

                function xn(t) {
                    return xn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, xn(t)
                }

                function Tn(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function kn(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Tn(Object(n), !0).forEach((function(e) {
                            Cn(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function Cn(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function En(t) {
                    return function(t) {
                        if (Array.isArray(t)) return On(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                    }(t) || Sn(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function $n(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null == n) return;
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0);
                        } catch (t) {
                            s = !0, i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }(t, e) || Sn(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function Sn(t, e) {
                    if (t) {
                        if ("string" == typeof t) return On(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? On(t, e) : void 0
                    }
                }

                function On(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function An(t) {
                    var e, n;
                    return {
                        c: function() {
                            e = new rt, n = G(), e.a = n
                        },
                        m: function(r, i) {
                            e.m(t[0], r, i), B(r, n, i)
                        },
                        p: function(t, n) {
                            1 & $n(n, 1)[0] && e.p(t[0])
                        },
                        i: j,
                        o: j,
                        d: function(t) {
                            t && U(n), t && e.d()
                        }
                    }
                }

                function jn(t, e, n) {
                    var r, i, o = e.border,
                        a = void 0 !== o && o,
                        s = e.fixedWidth,
                        l = void 0 !== s && s,
                        c = e.flip,
                        u = void 0 === c ? null : c,
                        f = e.icon,
                        d = void 0 === f ? null : f,
                        p = e.mask,
                        h = void 0 === p ? null : p,
                        m = e.listItem,
                        v = void 0 !== m && m,
                        g = e.pull,
                        y = void 0 === g ? null : g,
                        b = e.pulse,
                        w = void 0 !== b && b,
                        x = e.rotation,
                        T = void 0 === x ? null : x,
                        k = e.swapOpacity,
                        C = void 0 !== k && k,
                        E = e.size,
                        $ = void 0 === E ? null : E,
                        S = e.spin,
                        O = void 0 !== S && S,
                        A = e.transform,
                        j = void 0 === A ? {} : A,
                        D = e.symbol,
                        I = void 0 !== D && D,
                        L = e.title,
                        P = void 0 === L ? null : L,
                        _ = e.inverse,
                        R = void 0 !== _ && _,
                        M = "";
                    return st((function() {
                        var t = hn(d);
                        if (t) {
                            var o = ln(t),
                                a = pn(o || d, {
                                    symbol: I,
                                    title: P,
                                    styles: e.style ? i : {},
                                    classes: [].concat(En(Object.keys(r).map((function(t) {
                                        return r[t] ? t : null
                                    })).filter((function(t) {
                                        return !!t
                                    }))), [(e.class || "").split(" ")]),
                                    transform: kn({}, "string" == typeof j ? dn.transform(j) : j),
                                    mask: hn(h)
                                });
                            a ? n(0, M = a.html) : console.warn("Could not find one or more icon(s)", o || d, h)
                        }
                    })), t.$$set = function(t) {
                        n(19, e = N(N({}, e), H(t))), "border" in t && n(1, a = t.border), "fixedWidth" in t && n(2, l = t.fixedWidth), "flip" in t && n(3, u = t.flip), "icon" in t && n(4, d = t.icon), "mask" in t && n(5, h = t.mask), "listItem" in t && n(6, v = t.listItem), "pull" in t && n(7, y = t.pull), "pulse" in t && n(8, w = t.pulse), "rotation" in t && n(9, T = t.rotation), "swapOpacity" in t && n(10, C = t.swapOpacity), "size" in t && n(11, $ = t.size), "spin" in t && n(12, O = t.spin), "transform" in t && n(13, j = t.transform), "symbol" in t && n(14, I = t.symbol), "title" in t && n(15, P = t.title), "inverse" in t && n(16, R = t.inverse)
                    }, t.$$.update = function() {
                        var n;
                        73678 & t.$$.dirty && (Cn(n = {
                            "fa-spin": O,
                            "fa-pulse": w,
                            "fa-fw": l,
                            "fa-border": a,
                            "fa-li": v,
                            "fa-inverse": R,
                            "fa-flip-horizontal": ["both", "horizontal"].includes(u),
                            "fa-flip-vertical": ["both", "vertical"].includes(u)
                        }, "fa-".concat($), null !== $), Cn(n, "fa-rotate-".concat(T), null !== T), Cn(n, "fa-pull-".concat(y), null !== y), Cn(n, "fa-swap-opacity", C), r = n);
                        i = (e.style || "").split(";").filter((function(t) {
                            return !!t
                        })).map((function(t) {
                            return t.split(":").map((function(t) {
                                return t.trim()
                            }))
                        })).reduce((function(t, e) {
                            var n = $n(e, 2),
                                r = n[0],
                                i = n[1];
                            return t[r] = i, t
                        }), {})
                    }, e = H(e), [M, a, l, u, d, h, v, y, w, T, C, $, O, j, I, P, R]
                }
                const Nn = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        Object.defineProperty(t, "prototype", {
                            value: Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            writable: !1
                        }), e && gn(t, e)
                    }(o, t);
                    var e, n, r, i = yn(o);

                    function o(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), jt(wn(e = i.call(this)), t, jn, An, _, {
                            border: 1,
                            fixedWidth: 2,
                            flip: 3,
                            icon: 4,
                            mask: 5,
                            listItem: 6,
                            pull: 7,
                            pulse: 8,
                            rotation: 9,
                            swapOpacity: 10,
                            size: 11,
                            spin: 12,
                            transform: 13,
                            symbol: 14,
                            title: 15,
                            inverse: 16
                        }), e
                    }
                    return e = o, n && vn(e.prototype, n), r && vn(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }(Nt);

                function Dn(t) {
                    return Dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, Dn(t)
                }

                function In(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function Ln(t, e) {
                    return Ln = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    }, Ln(t, e)
                }

                function Pn(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = Hn(t);
                        if (e) {
                            var i = Hn(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else n = r.apply(this, arguments);
                        return _n(this, n)
                    }
                }

                function _n(t, e) {
                    if (e && ("object" === Dn(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return Rn(t)
                }

                function Rn(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }

                function Hn(t) {
                    return Hn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, Hn(t)
                }

                function Mn(t, e, n, r, i, o, a) {
                    try {
                        var s = t[o](a),
                            l = s.value
                    } catch (t) {
                        return void n(t)
                    }
                    s.done ? e(l) : Promise.resolve(l).then(r, i)
                }

                function qn(t) {
                    return function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var o = t.apply(e, n);

                            function a(t) {
                                Mn(o, r, i, a, s, "next", t)
                            }

                            function s(t) {
                                Mn(o, r, i, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }
                }

                function zn(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null == n) return;
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0);
                        } catch (t) {
                            s = !0, i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }(t, e) || function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Fn(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fn(t, e)
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function Fn(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function Wn(t) {
                    ! function(t, e, n) {
                        var r = F(t);
                        if (!r.getElementById(e)) {
                            var i = X("style");
                            i.id = e, i.textContent = n, W(r, i)
                        }
                    }(t, "svelte-1k10hre", ".modal-content.svelte-1k10hre.svelte-1k10hre{text-align:left;font-size:16px}.input-sm.svelte-1k10hre.svelte-1k10hre{padding:6px 9px}.modal-header.svelte-1k10hre.svelte-1k10hre{background-color:#454088;padding:6px 17px 4px 8px;border-bottom:1px solid #1c62d3;border-radius:7px 7px 0 0;display:flex;align-items:center;gap:0.5em}.modal-header.svelte-1k10hre img.svelte-1k10hre{height:44px}.modal-header.svelte-1k10hre h4.svelte-1k10hre{font-weight:bold;flex-grow:1}.modal-body.svelte-1k10hre.svelte-1k10hre{padding:0}.g-row-1.svelte-1k10hre.svelte-1k10hre{display:flex;gap:1em;align-items:center;margin:20px}.g-row-3.svelte-1k10hre.svelte-1k10hre{display:flex;gap:1em;align-items:center;margin:20px}.g-row-3.svelte-1k10hre h3.svelte-1k10hre{margin-bottom:13px;background-color:#454088;padding:10px 10px}.g-row-3.svelte-1k10hre .btn-group.svelte-1k10hre{margin:7px 0;height:35px;width:unset}.g-row-3.svelte-1k10hre .btn-group a.btn.svelte-1k10hre{padding:0}.g-row-3.svelte-1k10hre .btn-group a.btn.svelte-1k10hre:focus:not(.active){background-color:#375a7f;border-color:#375a7f}.g-opts.svelte-1k10hre.svelte-1k10hre{display:flex;gap:20px;margin:4px 10px}.g-opts.svelte-1k10hre .g-o-l.svelte-1k10hre{flex-basis:50%}.g-opts.svelte-1k10hre .g-o-r.svelte-1k10hre{flex-basis:50%}.gift-conf.svelte-1k10hre.svelte-1k10hre{flex-grow:1;border:1px solid #454088}.gift-conf.svelte-1k10hre h3.svelte-1k10hre,.gift-conf.svelte-1k10hre h4.svelte-1k10hre{font-size:17px;margin:0}.gift-conf.svelte-1k10hre h4.svelte-1k10hre{margin:9px 0}.g-balance.svelte-1k10hre.svelte-1k10hre{min-width:166px;border:1px solid #1e1e1e;text-align:center;display:flex;flex-direction:column}.g-balance.svelte-1k10hre h5.svelte-1k10hre{background-color:#1e1e1e;margin:0;padding:8px 9px;font-size:17px}.g-bval.svelte-1k10hre.svelte-1k10hre{display:flex;flex-direction:column;flex-grow:1;font-size:1.4rem;margin:7px 0}.g-bval.svelte-1k10hre span.svelte-1k10hre{font-size:2rem;font-weight:bold}.g-bval.svelte-1k10hre .g-loader.svelte-1k10hre{text-align:center;padding:9px;font-size:20px}.g-btn-strip.svelte-1k10hre.svelte-1k10hre{background-color:#1e1e1e;padding:6px 0;display:flex;justify-content:space-evenly}.g-btn-strip.svelte-1k10hre .btn.svelte-1k10hre{padding:0px 13px}.g-btn-strip.svelte-1k10hre .btn-success.svelte-1k10hre svg{margin-right:6px;vertical-align:-2px}.g-how-info.svelte-1k10hre.svelte-1k10hre{text-align:justify;font-size:1.5rem}.g-how-info.svelte-1k10hre h5.svelte-1k10hre{margin-top:0;font-size:1.7rem;border-bottom:1px solid gray;padding-bottom:7px;margin-bottom:3px}.g-row-2.svelte-1k10hre.svelte-1k10hre{display:flex;background-color:#1e1e1e;padding:9px 20px;gap:12px;align-items:center}.g-row-2.svelte-1k10hre img.svelte-1k10hre{border-radius:12px;height:50px}.g-row-2.svelte-1k10hre .j-sup-inf.svelte-1k10hre{flex-grow:1}.g-row-2.svelte-1k10hre .j-sup-inf p.svelte-1k10hre{margin:1px}.benef-line.svelte-1k10hre.svelte-1k10hre{display:flex;gap:0.3em}.scroller.svelte-1k10hre.svelte-1k10hre{height:1.2em;line-height:1.2em;position:relative;overflow:hidden;flex-grow:1;align-self:flex-end}.scroller.svelte-1k10hre>span.svelte-1k10hre{position:absolute;top:0;transform:translateY(0);animation:svelte-1k10hre-slide 10s infinite;animation-delay:2s;font-weight:bold}.modal-footer.svelte-1k10hre.svelte-1k10hre{padding:5px 20px 20px 20px;border:none}.modal-footer.svelte-1k10hre .g-errs.svelte-1k10hre{color:orange;margin-bottom:5px}.modal-footer.svelte-1k10hre .g-errs.red.svelte-1k10hre{color:#61ff00}@keyframes svelte-1k10hre-slide{0%{transform:translateY(0em)}12.5%{transform:translateY(-1.2em)}25%{transform:translateY(-2.4em)}37.5%{transform:translateY(-3.6em)}50%{transform:translateY(-4.8em)}62.5%{transform:translateY(-6em)}75%{transform:translateY(-7.2em)}87.5%{transform:translateY(-8.4em)}100%{transform:translateY(-9.6em)}99.999990%{transform:translateY(-9.6em)}99.999991%{transform:translateY(0)}}")
                }

                function Bn(t) {
                    var e, n, r, i, o, a = 1 != t[2] ? "s" : "";
                    return {
                        c: function() {
                            e = X("span"), n = Y(t[2]), r = Y(" day"), i = Y(a), o = Y("\n                            of Jstris Supporter"), K(e, "class", "svelte-1k10hre")
                        },
                        m: function(t, a) {
                            B(t, e, a), z(e, n), z(e, r), z(e, i), B(t, o, a)
                        },
                        p: function(t, e) {
                            4 & e && tt(n, t[2]), 4 & e && a !== (a = 1 != t[2] ? "s" : "") && tt(i, a)
                        },
                        i: j,
                        o: j,
                        d: function(t) {
                            t && U(e), t && U(o)
                        }
                    }
                }

                function Un(t) {
                    var e, n, r;
                    return n = new Nn({
                        props: {
                            icon: Ht,
                            spin: !0
                        }
                    }), {
                        c: function() {
                            e = X("div"), $t(n.$$.fragment), K(e, "class", "g-loader svelte-1k10hre")
                        },
                        m: function(t, i) {
                            B(t, e, i), St(n, e, null), r = !0
                        },
                        p: j,
                        i: function(t) {
                            r || (Ct(n.$$.fragment, t), r = !0)
                        },
                        o: function(t) {
                            Et(n.$$.fragment, t), r = !1
                        },
                        d: function(t) {
                            t && U(e), Ot(n)
                        }
                    }
                }

                function Xn(t) {
                    var e, n, r;
                    return {
                        c: function() {
                            e = Y("("), n = Y(t[1]), r = Y(")")
                        },
                        m: function(t, i) {
                            B(t, e, i), B(t, n, i), B(t, r, i)
                        },
                        p: function(t, e) {
                            2 & e && tt(n, t[1])
                        },
                        d: function(t) {
                            t && U(e), t && U(n), t && U(r)
                        }
                    }
                }

                function Yn(t) {
                    var e, n, r, i, o;
                    return n = new Nn({
                        props: {
                            icon: It,
                            size: "md"
                        }
                    }), {
                        c: function() {
                            e = X("div"), $t(n.$$.fragment), r = V(), i = Y(t[6]), K(e, "class", "g-errs red svelte-1k10hre")
                        },
                        m: function(t, a) {
                            B(t, e, a), St(n, e, null), z(e, r), z(e, i), o = !0
                        },
                        p: function(t, e) {
                            (!o || 64 & e) && tt(i, t[6])
                        },
                        i: function(t) {
                            o || (Ct(n.$$.fragment, t), o = !0)
                        },
                        o: function(t) {
                            Et(n.$$.fragment, t), o = !1
                        },
                        d: function(t) {
                            t && U(e), Ot(n)
                        }
                    }
                }

                function Vn(t) {
                    var e, n, r, i;
                    return n = new Nn({
                        props: {
                            icon: It,
                            size: "md"
                        }
                    }), {
                        c: function() {
                            e = X("div"), $t(n.$$.fragment), r = Y(" Insufficient balance"), K(e, "class", "g-errs svelte-1k10hre")
                        },
                        m: function(t, o) {
                            B(t, e, o), St(n, e, null), z(e, r), i = !0
                        },
                        p: j,
                        i: function(t) {
                            i || (Ct(n.$$.fragment, t), i = !0)
                        },
                        o: function(t) {
                            Et(n.$$.fragment, t), i = !1
                        },
                        d: function(t) {
                            t && U(e), Ot(n)
                        }
                    }
                }

                function Gn(t) {
                    var e, n, r;
                    return e = new Nn({
                        props: {
                            icon: Ht,
                            spin: !0
                        }
                    }), {
                        c: function() {
                            $t(e.$$.fragment), n = Y(" Processing...")
                        },
                        m: function(t, i) {
                            St(e, t, i), B(t, n, i), r = !0
                        },
                        p: j,
                        i: function(t) {
                            r || (Ct(e.$$.fragment, t), r = !0)
                        },
                        o: function(t) {
                            Et(e.$$.fragment, t), r = !1
                        },
                        d: function(t) {
                            Ot(e, t), t && U(n)
                        }
                    }
                }

                function Qn(t) {
                    var e, n, r;
                    return e = new Nn({
                        props: {
                            icon: Lt,
                            size: "md"
                        }
                    }), {
                        c: function() {
                            $t(e.$$.fragment), n = Y(" Send gift")
                        },
                        m: function(t, i) {
                            St(e, t, i), B(t, n, i), r = !0
                        },
                        p: j,
                        i: function(t) {
                            r || (Ct(e.$$.fragment, t), r = !0)
                        },
                        o: function(t) {
                            Et(e.$$.fragment, t), r = !1
                        },
                        d: function(t) {
                            Ot(e, t), t && U(n)
                        }
                    }
                }

                function Jn(t) {
                    var e, n, r, i;
                    return e = new Nn({
                        props: {
                            icon: Dt,
                            size: "md"
                        }
                    }), {
                        c: function() {
                            $t(e.$$.fragment), n = V(), (r = X("b")).textContent = "SENT!"
                        },
                        m: function(t, o) {
                            St(e, t, o), B(t, n, o), B(t, r, o), i = !0
                        },
                        p: j,
                        i: function(t) {
                            i || (Ct(e.$$.fragment, t), i = !0)
                        },
                        o: function(t) {
                            Et(e.$$.fragment, t), i = !1
                        },
                        d: function(t) {
                            Ot(e, t), t && U(n), t && U(r)
                        }
                    }
                }

                function Kn(t) {
                    var e, n, r, i, o, a, s, l, c, u, f, d, p, h, m, v, g, y, b, w, x, T, k, C, E, $, S, O, A, j, N, D, I, P, _, R, H, M, q, F, W, G, Z, rt, it, ot, at, st, lt, ct, ut, ft, dt, pt, ht, mt, vt, gt, yt, bt, wt, xt, At, jt, Nt, Dt, It, Lt, Ht = Zn(t[1]),
                        Mt = [Un, Bn],
                        qt = [];

                    function zt(t, e) {
                        return t[7] ? 0 : 1
                    }
                    f = zt(t), d = qt[f] = Mt[f](t), v = new Nn({
                        props: {
                            icon: Pt,
                            size: "md"
                        }
                    }), w = new Nn({
                        props: {
                            icon: Rt,
                            size: "md"
                        }
                    }), C = new Nn({
                        props: {
                            icon: _t,
                            size: "md"
                        }
                    });
                    var Ft = Ht && Xn(t),
                        Wt = [Vn, Yn],
                        Bt = [];

                    function Ut(t, e) {
                        return t[2] >= t[1] ? t[6] ? 1 : -1 : 0
                    }~(vt = Ut(t)) && (gt = Bt[vt] = Wt[vt](t));
                    var Xt = [Jn, Qn, Gn],
                        Yt = [];

                    function Vt(t, e) {
                        return t[4] ? 0 : t[3] ? t[3] ? 2 : -1 : 1
                    }
                    return ~(At = Vt(t)) && (jt = Yt[At] = Xt[At](t)), {
                        c: function() {
                            e = X("div"), n = X("div"), (r = X("div")).innerHTML = '<img src="/res/oe/wrapped_gift.svg" alt="Gift" class="svelte-1k10hre"/> \n            <h4 class="modal-title svelte-1k10hre">Gift Jstris Supporter</h4> \n            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>', i = V(), o = X("div"), a = X("div"), s = X("div"), (l = X("h5")).textContent = "Gifting balance", c = V(), u = X("div"), d.c(), p = V(), h = X("div"), m = X("a"), $t(v.$$.fragment), g = Y("Add"), y = V(), b = X("button"), $t(w.$$.fragment), x = V(), T = X("div"), k = X("h5"), $t(C.$$.fragment), E = Y(" How does it work?"), $ = Y("\n                    You can top up your gifting balance by sending a single donation with amount of your choice.\n                    It will be converted to respective length of Jstris supporter in days, which you can gift to any player on Jstris."), S = V(), (O = X("div")).innerHTML = '<img src="/res/logo.png" alt="Logo" class="svelte-1k10hre"/> \n                <div class="j-sup-inf svelte-1k10hre"><p class="svelte-1k10hre">Supporter helps cover server costs and further development</p> \n                    <div class="benef-line svelte-1k10hre"><span>It comes with benefits such as</span> \n                        <div class="scroller svelte-1k10hre"><span class="svelte-1k10hre">Colored name<br/>\n                                Name icon<br/>\n                                100+ block skins<br/> \n                                Profile customizations<br/>\n                                Unlimited replays<br/>\n                                Bot matches<br/>\n                                Chat emotes<br/>\n                                Supporter role<br/>\n                                Colored name</span></div></div></div>', A = V(), j = X("div"), N = X("div"), D = X("h3"), I = Y("Gift to "), P = X("b"), _ = Y(t[0]), R = V(), H = X("div"), M = X("div"), (q = X("h4")).textContent = "Amount in days:", F = V(), W = X("div"), (G = X("a")).textContent = "15", Z = V(), (rt = X("a")).textContent = "30", it = V(), (ot = X("a")).textContent = "60", at = V(), st = X("a"), lt = Y("Other\n                                    "), Ft && Ft.c(), ct = V(), ut = X("div"), (ft = X("h4")).textContent = "Message:", dt = V(), pt = X("input"), ht = V(), mt = X("div"), gt && gt.c(), yt = V(), (bt = X("button")).textContent = "Close", wt = V(), xt = X("button"), jt && jt.c(), K(r, "class", "modal-header svelte-1k10hre"), K(l, "class", "svelte-1k10hre"), K(u, "class", "g-bval svelte-1k10hre"), K(m, "class", "btn btn-sm btn-success svelte-1k10hre"), K(m, "target", "_blank"), K(m, "href", "/donate/gift"), K(m, "title", "Add to your Gifting balance"), K(b, "class", "btn btn-sm btn-primary svelte-1k10hre"), b.disabled = t[7], K(b, "title", "Refresh"), K(h, "class", "g-btn-strip svelte-1k10hre"), K(s, "class", "g-balance svelte-1k10hre"), K(k, "class", "svelte-1k10hre"), K(T, "class", "g-how-info svelte-1k10hre"), K(a, "class", "g-row-1 svelte-1k10hre"), K(O, "class", "g-row-2 svelte-1k10hre"), K(D, "class", "svelte-1k10hre"), K(q, "class", "svelte-1k10hre"), K(G, "href", "#"), K(G, "class", "btn btn-primary svelte-1k10hre"), nt(G, "active", 15 === t[1]), K(rt, "href", "#"), K(rt, "class", "btn btn-primary svelte-1k10hre"), nt(rt, "active", 30 === t[1]), K(ot, "href", "#"), K(ot, "class", "btn btn-primary svelte-1k10hre"), nt(ot, "active", 60 === t[1]), K(st, "href", "#"), K(st, "class", "btn btn-primary svelte-1k10hre"), nt(st, "active", Zn(t[1])), K(W, "class", "btn-group btn-group-justified svelte-1k10hre"), K(M, "class", "g-o-l svelte-1k10hre"), K(ft, "class", "svelte-1k10hre"), K(pt, "class", "form-control input-sm svelte-1k10hre"), K(pt, "type", "text"), K(pt, "placeholder", "Optional private message"), K(ut, "class", "g-o-r svelte-1k10hre"), K(H, "class", "g-opts svelte-1k10hre"), K(N, "class", "gift-conf svelte-1k10hre"), K(j, "class", "g-row-3 svelte-1k10hre"), K(o, "class", "modal-body svelte-1k10hre"), K(bt, "type", "button"), K(bt, "class", "btn btn-default"), K(bt, "data-dismiss", "modal"), K(xt, "type", "button"), K(xt, "class", "btn btn-success"), xt.disabled = Nt = !(t[2] >= t[1]) || t[3] || t[4], K(mt, "class", "modal-footer svelte-1k10hre"), K(n, "class", "modal-content svelte-1k10hre"), K(e, "class", "modal-dialog")
                        },
                        m: function(d, L) {
                            B(d, e, L), z(e, n), z(n, r), z(n, i), z(n, o), z(o, a), z(a, s), z(s, l), z(s, c), z(s, u), qt[f].m(u, null), z(s, p), z(s, h), z(h, m), St(v, m, null), z(m, g), z(h, y), z(h, b), St(w, b, null), z(a, x), z(a, T), z(T, k), St(C, k, null), z(k, E), z(T, $), z(o, S), z(o, O), z(o, A), z(o, j), z(j, N), z(N, D), z(D, I), z(D, P), z(P, _), z(N, R), z(N, H), z(H, M), z(M, q), z(M, F), z(M, W), z(W, G), z(W, Z), z(W, rt), z(W, it), z(W, ot), z(W, at), z(W, st), z(st, lt), Ft && Ft.m(st, null), z(H, ct), z(H, ut), z(ut, ft), z(ut, dt), z(ut, pt), et(pt, t[5]), z(n, ht), z(n, mt), ~vt && Bt[vt].m(mt, null), z(mt, yt), z(mt, bt), z(mt, wt), z(mt, xt), ~At && Yt[At].m(xt, null), Dt = !0, It || (Lt = [Q(b, "click", t[10]), Q(G, "click", J(t[14])), Q(rt, "click", J(t[15])), Q(ot, "click", J(t[16])), Q(st, "click", J(t[17])), Q(pt, "input", t[18]), Q(xt, "click", t[11])], It = !0)
                        },
                        p: function(t, e) {
                            var n = zn(e, 1)[0],
                                r = f;
                            (f = zt(t)) === r ? qt[f].p(t, n) : (Tt(), Et(qt[r], 1, 1, (function() {
                                qt[r] = null
                            })), kt(), (d = qt[f]) ? d.p(t, n) : (d = qt[f] = Mt[f](t)).c(), Ct(d, 1), d.m(u, null)), (!Dt || 128 & n) && (b.disabled = t[7]), (!Dt || 1 & n) && tt(_, t[0]), 2 & n && nt(G, "active", 15 === t[1]), 2 & n && nt(rt, "active", 30 === t[1]), 2 & n && nt(ot, "active", 60 === t[1]), 2 & n && (Ht = Zn(t[1])), Ht ? Ft ? Ft.p(t, n) : ((Ft = Xn(t)).c(), Ft.m(st, null)) : Ft && (Ft.d(1), Ft = null), 2 & n && nt(st, "active", Zn(t[1])), 32 & n && pt.value !== t[5] && et(pt, t[5]);
                            var i = vt;
                            (vt = Ut(t)) === i ? ~vt && Bt[vt].p(t, n) : (gt && (Tt(), Et(Bt[i], 1, 1, (function() {
                                Bt[i] = null
                            })), kt()), ~vt ? ((gt = Bt[vt]) ? gt.p(t, n) : (gt = Bt[vt] = Wt[vt](t)).c(), Ct(gt, 1), gt.m(mt, yt)) : gt = null);
                            var o = At;
                            (At = Vt(t)) === o ? ~At && Yt[At].p(t, n) : (jt && (Tt(), Et(Yt[o], 1, 1, (function() {
                                Yt[o] = null
                            })), kt()), ~At ? ((jt = Yt[At]) ? jt.p(t, n) : (jt = Yt[At] = Xt[At](t)).c(), Ct(jt, 1), jt.m(xt, null)) : jt = null), (!Dt || 30 & n && Nt !== (Nt = !(t[2] >= t[1]) || t[3] || t[4])) && (xt.disabled = Nt)
                        },
                        i: function(t) {
                            Dt || (Ct(d), Ct(v.$$.fragment, t), Ct(w.$$.fragment, t), Ct(C.$$.fragment, t), Ct(gt), Ct(jt), Dt = !0)
                        },
                        o: function(t) {
                            Et(d), Et(v.$$.fragment, t), Et(w.$$.fragment, t), Et(C.$$.fragment, t), Et(gt), Et(jt), Dt = !1
                        },
                        d: function(t) {
                            t && U(e), qt[f].d(), Ot(v), Ot(w), Ot(C), Ft && Ft.d(), ~vt && Bt[vt].d(), ~At && Yt[At].d(), It = !1, L(Lt)
                        }
                    }
                }

                function Zn(t) {
                    return 15 != t && 30 != t && 60 != t
                }

                function tr(t, e, n) {
                    var r, i = e.targetUser,
                        o = void 0 === i ? "" : i,
                        a = e.modalElement,
                        s = void 0 === a ? null : a,
                        l = e.onSuccessTransaction,
                        c = void 0 === l ? function() {} : l,
                        u = 30,
                        f = 0,
                        d = !1,
                        h = !1,
                        m = "",
                        v = null,
                        g = !1;

                    function y(t) {
                        n(1, u = t)
                    }

                    function b() {
                        var t = window.prompt("Enter custom amount of days:");
                        if (null !== t) {
                            var e = parseInt(t);
                            !e || e < 15 ? alert("Minimal amount to gift is 15 days.") : n(1, u = e)
                        }
                    }

                    function w() {
                        return x.apply(this, arguments)
                    }

                    function x() {
                        return (x = qn(p().mark((function t() {
                            return p().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!g) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        n(7, g = !0), fetch("/code/giftBalance").then((function(t) {
                                            return t.json()
                                        })).then((function(t) {
                                            n(2, f = 0), t.balance && n(2, f = t.balance)
                                        })).catch((function(t) {
                                            n(2, f = 0), console.error(t)
                                        })).finally((function() {
                                            n(7, g = !1)
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }

                    function T() {
                        return (T = qn(p().mark((function t() {
                            return p().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n(6, v = null), n(3, d = !0), fetch("/code/sendGift", {
                                            method: "POST",
                                            headers: {
                                                "X-CSRF-TOKEN": Laravel.csrfToken
                                            },
                                            body: JSON.stringify({
                                                giftAmount: u,
                                                user: o,
                                                message: m
                                            })
                                        }).then((function(t) {
                                            return t.json()
                                        })).then((function(t) {
                                            "e" in t ? n(6, v = t.e) : "sent" in t && t.sent && (n(2, f -= u), n(4, h = !0), setTimeout((function() {
                                                s && s.modal("hide"), s[0] && s[0].remove(), setTimeout((function() {
                                                    c()
                                                }), 500)
                                            }), 500))
                                        })).catch((function(t) {
                                            n(6, v = "Unknown error!"), console.error(t)
                                        })).finally((function() {
                                            n(3, d = !1)
                                        }));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }
                    r = qn(p().mark((function t() {
                        return p().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, w();
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), at().$$.on_mount.push(r);
                    return t.$$set = function(t) {
                        "targetUser" in t && n(0, o = t.targetUser), "modalElement" in t && n(12, s = t.modalElement), "onSuccessTransaction" in t && n(13, c = t.onSuccessTransaction)
                    }, [o, u, f, d, h, m, v, g, y, b, w, function() {
                        return T.apply(this, arguments)
                    }, s, c, function() {
                        return y(15)
                    }, function() {
                        return y(30)
                    }, function() {
                        return y(60)
                    }, function() {
                        return b()
                    }, function() {
                        m = this.value, n(5, m)
                    }]
                }
                var er = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        Object.defineProperty(t, "prototype", {
                            value: Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            writable: !1
                        }), e && Ln(t, e)
                    }(o, t);
                    var e, n, r, i = Pn(o);

                    function o(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), jt(Rn(e = i.call(this)), t, tr, Kn, _, {
                            targetUser: 0,
                            modalElement: 12,
                            onSuccessTransaction: 13
                        }, Wn), e
                    }
                    return e = o, n && In(e.prototype, n), r && In(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }(Nt);
                const nr = er;

                function rr() {
                    this.roomId = null, this.isInGame = !1, this.notifCountStr = '<span class="notification-count">1</span>'
                }
                rr.prototype.onLoad = function() {
                    var t = this;
                    $(window).on("room-join", (function(e, n) {
                        t.roomId = n, t.isInGame = !0
                    }))
                }, rr.prototype.lang = function(t, e) {
                    return "i18n" in window && t in window.i18n ? window.i18n[t] : e
                }, rr.prototype.respondFriendRequest = i, rr.prototype.contentAdded = function(t) {
                    t instanceof jQuery || $(t), r(t), f(t), this.initGiftHandlers(t)
                };
                rr.prototype.notif = function(t) {
                    "friend" == t ? (this.addNotif(), this.addFriendNotif()) : "activ" == t && (this.addNotif(), this.addActivNotif())
                }, rr.prototype.addNotif = function() {
                    var t = $(".umd-uname");
                    if (t.length) {
                        var e = t.find(".notification-count");
                        if (0 == e.length) {
                            var n = $(this.notifCountStr),
                                r = t.find(".caret");
                            1 == r.length ? r[0].before(n[0]) : t.append(n)
                        } else e.html(parseInt(e.html()) + 1)
                    }
                }, rr.prototype.addSubmenuNotif = function(t) {
                    var e = $(t);
                    if (e.length) {
                        var n = e.find(".notification-count");
                        0 == n.length ? e.append($(this.notifCountStr)) : n.html(parseInt(n.html()) + 1)
                    }
                }, rr.prototype.addActivNotif = function() {
                    this.addSubmenuNotif(".umd-activ")
                }, rr.prototype.addFriendNotif = function() {
                    this.addSubmenuNotif(".umd-fr")
                }, rr.prototype.initGiftHandlers = function(t) {
                    var e = (t = $(t)).find(".btn-gift"),
                        n = this,
                        r = function() {
                            var t = $(this).attr("data-name");
                            if (t) {
                                $(window).trigger("modal-opened", []), $("#gift-modal-w").remove();
                                var e = $('<div class="modal gift-tool" id="gift-modal-w"></div>');
                                $(window.document.body).append(e), e.modal("show");
                                new nr({
                                    target: e[0],
                                    props: {
                                        targetUser: t,
                                        modalElement: e,
                                        onSuccessTransaction: function() {
                                            n.isInGame || document.location.reload(!0)
                                        }
                                    }
                                })
                            }
                        };
                    e.each((function(t) {
                        $(this).on("click", r)
                    }))
                };
                const ir = new rr;
                (function(t, e) {
                    for (var n = ar, r = t();;) try {
                        if (929500 === -parseInt(n(471)) / 1 + parseInt(n(458)) / 2 * (-parseInt(n(483)) / 3) + -parseInt(n(477)) / 4 + parseInt(n(479)) / 5 * (-parseInt(n(482)) / 6) + -parseInt(n(472)) / 7 * (parseInt(n(481)) / 8) + parseInt(n(469)) / 9 * (-parseInt(n(485)) / 10) + parseInt(n(463)) / 11) break;
                        r.push(r.shift())
                    } catch (t) {
                        r.push(r.shift())
                    }
                })(lr), n(489);
                var or = function(t) {
                    var e = ar,
                        n = (t.href || $(t)[e(487)](e(468)))[e(475)](/\/u\/(.*)(\?.*)?/);
                    if (n && !(n[e(461)] < 2)) {
                        var r, i = decodeURI(n[1]),
                            o = '\n<div class="t-hdr">\n<div class="t-hdr-l">\n    <h3><a href="/u/' + (r = i) + '">' + r + ar(488),
                            a = $(o);
                        jstris[e(486)](a), $(t).removeClass("ut").data(e(462), a).powerTip({
                            smartPlacement: !0,
                            mouseOnToPopup: !0,
                            popupClass: e(466)
                        }).on({
                            powerTipPreRender: function(t) {
                                var n = e;
                                $[n(484)](n(474) + i, (function(t) {
                                    var e = n,
                                        r = document[e(459)](e(465));
                                    r[e(460)] = t, jstris[e(486)](r)
                                }))[n(470)]((function() {
                                    var t = n;
                                    document[t(459)](t(465))[t(460)] = t(464)
                                }))
                            }
                        })
                    }
                };

                function ar(t, e) {
                    var n = lr();
                    return (ar = function(t, e) {
                        return n[t -= 457]
                    })(t, e)
                }
                const sr = function() {
                    var t = ar;
                    t(478) in window || document.body[t(467)](t(457), (function(e) {
                        var n, r, i, o = t,
                            a = e[o(480)];
                        a.classList[o(473)]("ut") && (r = e, i = ar, or(n = a), $[i(465)][i(476)](n, r))
                    }))
                };

                function lr() {
                    var t = ["contentAdded", "data", '</a></h3>\n    <div class="t-titles">\n        <span class="a-bg ph-w"></span>\n        <span class="a-bg ph-w"></span>\n    </div>\n</div>\n<div class="t-hdr-r">\n    <div class="ph a-bg">\n    </div>\n</div>\n</div>\n<div class="t-main">\n<div class="t-itm">\n    <div class="t-val a-bg"></div>\n    <div class="t-desc a-bg"></div>\n</div>\n<div class="t-itm">\n    <div class="t-val a-bg"></div>\n    <div class="t-desc a-bg"></div>\n</div>\n<div class="t-itm">\n    <div class="t-val a-bg"></div>\n    <div class="t-desc a-bg"></div>\n</div>\n<div class="t-itm">\n    <div class="t-val a-bg"></div>\n    <div class="t-desc a-bg"></div>\n</div>\n</div>\n<div class="t-ftr">\n<a href="#" class="btn btn-report disabled"><svg><use xlink:href="/svg/white.svg?1#s-warn"></use></svg> Report</a>\n<a href="#" class="btn btn-gift disabled"><svg><use xlink:href="/svg/white.svg?1#s-gift"></use></svg>Gift</a>\n<a href="#" class="btn btn-primary disabled" data-name="">\n    <span class="fr-add" style=""><svg><use xlink:href="/svg/white.svg?1#s-friends"></use></svg></span>\n    <span class="fr-text">Add friend</span>\n</a>\n</div>\n    ', "mouseover", "2742052DdLPQi", "getElementById", "innerHTML", "length", "powertipjq", "70617514chltfh", "<div style='padding:2em;text-align:center'>Unable to load user info at this time.</div>", "powerTip", "u-tt", "addEventListener", "href", "30933HkCQzF", "fail", "1561955lqZKrR", "28beMFiM", "contains", "/code/tt/", "match", "show", "3001340wUYEbP", "ontouchstart", "1675HClgZT", "target", "100784mPcTGi", "10962yZXeHt", "3FXZJMv", "get", "3330faameR"];
                    return (lr = function() {
                        return t
                    })()
                }
                n(807), window.jstris = ir, window.addEventListener("load", (function() {
                    sr(), ir.contentAdded(window.document.body), ir.onLoad(), $(".u-submenu").parent().hover((function() {
                        var t = $(this).find("ul");
                        if ($(t).offset().left + t.width() > $(window).width()) {
                            var e = -$(t).width();
                            t.css({
                                left: e
                            })
                        }
                    }))
                }))
            },
            807: (t, e, n) => {
                window.$ = window.jQuery = n(755), n(2)
            },
            2: () => {
                if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
                ! function(t) {
                    "use strict";
                    var e = jQuery.fn.jquery.split(" ")[0].split(".");
                    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
                }(),
                function(t) {
                    "use strict";
                    t.fn.emulateTransitionEnd = function(e) {
                        var n = !1,
                            r = this;
                        t(this).one("bsTransitionEnd", (function() {
                            n = !0
                        }));
                        return setTimeout((function() {
                            n || t(r).trigger(t.support.transition.end)
                        }), e), this
                    }, t((function() {
                        t.support.transition = function() {
                            var t = document.createElement("bootstrap"),
                                e = {
                                    WebkitTransition: "webkitTransitionEnd",
                                    MozTransition: "transitionend",
                                    OTransition: "oTransitionEnd otransitionend",
                                    transition: "transitionend"
                                };
                            for (var n in e)
                                if (void 0 !== t.style[n]) return {
                                    end: e[n]
                                };
                            return !1
                        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                            bindType: t.support.transition.end,
                            delegateType: t.support.transition.end,
                            handle: function(e) {
                                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                            }
                        })
                    }))
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = '[data-dismiss="alert"]',
                        n = function(n) {
                            t(n).on("click", e, this.close)
                        };
                    n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
                        var r = t(this),
                            i = r.attr("data-target");
                        i || (i = (i = r.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), i = "#" === i ? [] : i;
                        var o = t(document).find(i);

                        function a() {
                            o.detach().trigger("closed.bs.alert").remove()
                        }
                        e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a())
                    };
                    var r = t.fn.alert;
                    t.fn.alert = function(e) {
                        return this.each((function() {
                            var r = t(this),
                                i = r.data("bs.alert");
                            i || r.data("bs.alert", i = new n(this)), "string" == typeof e && i[e].call(r)
                        }))
                    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
                        return t.fn.alert = r, this
                    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = function(n, r) {
                        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r), this.isLoading = !1
                    };

                    function n(n) {
                        return this.each((function() {
                            var r = t(this),
                                i = r.data("bs.button"),
                                o = "object" == typeof n && n;
                            i || r.data("bs.button", i = new e(this, o)), "toggle" == n ? i.toggle() : n && i.setState(n)
                        }))
                    }
                    e.VERSION = "3.4.1", e.DEFAULTS = {
                        loadingText: "loading..."
                    }, e.prototype.setState = function(e) {
                        var n = "disabled",
                            r = this.$element,
                            i = r.is("input") ? "val" : "html",
                            o = r.data();
                        e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy((function() {
                            r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1))
                        }), this), 0)
                    }, e.prototype.toggle = function() {
                        var t = !0,
                            e = this.$element.closest('[data-toggle="buttons"]');
                        if (e.length) {
                            var n = this.$element.find("input");
                            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
                        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
                    };
                    var r = t.fn.button;
                    t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
                        return t.fn.button = r, this
                    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
                        var r = t(e.target).closest(".btn");
                        n.call(r, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
                    })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
                        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
                    }))
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = function(e, n) {
                        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
                    };

                    function n(n) {
                        return this.each((function() {
                            var r = t(this),
                                i = r.data("bs.carousel"),
                                o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n),
                                a = "string" == typeof n ? n : o.slide;
                            i || r.data("bs.carousel", i = new e(this, o)), "number" == typeof n ? i.to(n) : a ? i[a]() : o.interval && i.pause().cycle()
                        }))
                    }
                    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
                        interval: 5e3,
                        pause: "hover",
                        wrap: !0,
                        keyboard: !0
                    }, e.prototype.keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) {
                            switch (t.which) {
                                case 37:
                                    this.prev();
                                    break;
                                case 39:
                                    this.next();
                                    break;
                                default:
                                    return
                            }
                            t.preventDefault()
                        }
                    }, e.prototype.cycle = function(e) {
                        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
                    }, e.prototype.getItemIndex = function(t) {
                        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
                    }, e.prototype.getItemForDirection = function(t, e) {
                        var n = this.getItemIndex(e);
                        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
                        var r = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
                        return this.$items.eq(r)
                    }, e.prototype.to = function(t) {
                        var e = this,
                            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", (function() {
                            e.to(t)
                        })) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
                    }, e.prototype.pause = function(e) {
                        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
                    }, e.prototype.next = function() {
                        if (!this.sliding) return this.slide("next")
                    }, e.prototype.prev = function() {
                        if (!this.sliding) return this.slide("prev")
                    }, e.prototype.slide = function(n, r) {
                        var i = this.$element.find(".item.active"),
                            o = r || this.getItemForDirection(n, i),
                            a = this.interval,
                            s = "next" == n ? "left" : "right",
                            l = this;
                        if (o.hasClass("active")) return this.sliding = !1;
                        var c = o[0],
                            u = t.Event("slide.bs.carousel", {
                                relatedTarget: c,
                                direction: s
                            });
                        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                                this.$indicators.find(".active").removeClass("active");
                                var f = t(this.$indicators.children()[this.getItemIndex(o)]);
                                f && f.addClass("active")
                            }
                            var d = t.Event("slid.bs.carousel", {
                                relatedTarget: c,
                                direction: s
                            });
                            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(n), "object" == typeof o && o.length && o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", (function() {
                                o.removeClass([n, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout((function() {
                                    l.$element.trigger(d)
                                }), 0)
                            })).emulateTransitionEnd(e.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), a && this.cycle(), this
                        }
                    };
                    var r = t.fn.carousel;
                    t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
                        return t.fn.carousel = r, this
                    };
                    var i = function(e) {
                        var r = t(this),
                            i = r.attr("href");
                        i && (i = i.replace(/.*(?=#[^\s]+$)/, ""));
                        var o = r.attr("data-target") || i,
                            a = t(document).find(o);
                        if (a.hasClass("carousel")) {
                            var s = t.extend({}, a.data(), r.data()),
                                l = r.attr("data-slide-to");
                            l && (s.interval = !1), n.call(a, s), l && a.data("bs.carousel").to(l), e.preventDefault()
                        }
                    };
                    t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", (function() {
                        t('[data-ride="carousel"]').each((function() {
                            var e = t(this);
                            n.call(e, e.data())
                        }))
                    }))
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = function(n, r) {
                        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
                    };

                    function n(e) {
                        var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
                        return t(document).find(r)
                    }

                    function r(n) {
                        return this.each((function() {
                            var r = t(this),
                                i = r.data("bs.collapse"),
                                o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
                            !i && o.toggle && /show|hide/.test(n) && (o.toggle = !1), i || r.data("bs.collapse", i = new e(this, o)), "string" == typeof n && i[n]()
                        }))
                    }
                    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
                        toggle: !0
                    }, e.prototype.dimension = function() {
                        return this.$element.hasClass("width") ? "width" : "height"
                    }, e.prototype.show = function() {
                        if (!this.transitioning && !this.$element.hasClass("in")) {
                            var n, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                            if (!(i && i.length && (n = i.data("bs.collapse")) && n.transitioning)) {
                                var o = t.Event("show.bs.collapse");
                                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                                    i && i.length && (r.call(i, "hide"), n || i.data("bs.collapse", null));
                                    var a = this.dimension();
                                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                                    var s = function() {
                                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                                    };
                                    if (!t.support.transition) return s.call(this);
                                    var l = t.camelCase(["scroll", a].join("-"));
                                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[a](this.$element[0][l])
                                }
                            }
                        }
                    }, e.prototype.hide = function() {
                        if (!this.transitioning && this.$element.hasClass("in")) {
                            var n = t.Event("hide.bs.collapse");
                            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                                var r = this.dimension();
                                this.$element[r](this.$element[r]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                                var i = function() {
                                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                };
                                if (!t.support.transition) return i.call(this);
                                this.$element[r](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
                            }
                        }
                    }, e.prototype.toggle = function() {
                        this[this.$element.hasClass("in") ? "hide" : "show"]()
                    }, e.prototype.getParent = function() {
                        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(e, r) {
                            var i = t(r);
                            this.addAriaAndCollapsedClass(n(i), i)
                        }), this)).end()
                    }, e.prototype.addAriaAndCollapsedClass = function(t, e) {
                        var n = t.hasClass("in");
                        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
                    };
                    var i = t.fn.collapse;
                    t.fn.collapse = r, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
                        return t.fn.collapse = i, this
                    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
                        var i = t(this);
                        i.attr("data-target") || e.preventDefault();
                        var o = n(i),
                            a = o.data("bs.collapse") ? "toggle" : i.data();
                        r.call(o, a)
                    }))
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = '[data-toggle="dropdown"]',
                        n = function(e) {
                            t(e).on("click.bs.dropdown", this.toggle)
                        };

                    function r(e) {
                        var n = e.attr("data-target");
                        n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                        var r = "#" !== n ? t(document).find(n) : null;
                        return r && r.length ? r : e.parent()
                    }

                    function i(n) {
                        n && 3 === n.which || (t(".dropdown-backdrop").remove(), t(e).each((function() {
                            var e = t(this),
                                i = r(e),
                                o = {
                                    relatedTarget: this
                                };
                            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
                        })))
                    }
                    n.VERSION = "3.4.1", n.prototype.toggle = function(e) {
                        var n = t(this);
                        if (!n.is(".disabled, :disabled")) {
                            var o = r(n),
                                a = o.hasClass("open");
                            if (i(), !a) {
                                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                                var s = {
                                    relatedTarget: this
                                };
                                if (o.trigger(e = t.Event("show.bs.dropdown", s)), e.isDefaultPrevented()) return;
                                n.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
                            }
                            return !1
                        }
                    }, n.prototype.keydown = function(n) {
                        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                            var i = t(this);
                            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                                var o = r(i),
                                    a = o.hasClass("open");
                                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(e).trigger("focus"), i.trigger("click");
                                var s = o.find(".dropdown-menu li:not(.disabled):visible a");
                                if (s.length) {
                                    var l = s.index(n.target);
                                    38 == n.which && l > 0 && l--, 40 == n.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
                                }
                            }
                        }
                    };
                    var o = t.fn.dropdown;
                    t.fn.dropdown = function(e) {
                        return this.each((function() {
                            var r = t(this),
                                i = r.data("bs.dropdown");
                            i || r.data("bs.dropdown", i = new n(this)), "string" == typeof e && i[e].call(r)
                        }))
                    }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
                        return t.fn.dropdown = o, this
                    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
                        t.stopPropagation()
                    })).on("click.bs.dropdown.data-api", e, n.prototype.toggle).on("keydown.bs.dropdown.data-api", e, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = function(e, n) {
                        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() {
                            this.$element.trigger("loaded.bs.modal")
                        }), this))
                    };

                    function n(n, r) {
                        return this.each((function() {
                            var i = t(this),
                                o = i.data("bs.modal"),
                                a = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
                            o || i.data("bs.modal", o = new e(this, a)), "string" == typeof n ? o[n](r) : a.show && o.show(r)
                        }))
                    }
                    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
                        backdrop: !0,
                        keyboard: !0,
                        show: !0
                    }, e.prototype.toggle = function(t) {
                        return this.isShown ? this.hide() : this.show(t)
                    }, e.prototype.show = function(n) {
                        var r = this,
                            i = t.Event("show.bs.modal", {
                                relatedTarget: n
                            });
                        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
                            r.$element.one("mouseup.dismiss.bs.modal", (function(e) {
                                t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                            }))
                        })), this.backdrop((function() {
                            var i = t.support.transition && r.$element.hasClass("fade");
                            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
                            var o = t.Event("shown.bs.modal", {
                                relatedTarget: n
                            });
                            i ? r.$dialog.one("bsTransitionEnd", (function() {
                                r.$element.trigger("focus").trigger(o)
                            })).emulateTransitionEnd(e.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
                        })))
                    }, e.prototype.hide = function(n) {
                        n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
                    }, e.prototype.enforceFocus = function() {
                        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) {
                            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                        }), this))
                    }, e.prototype.escape = function() {
                        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) {
                            27 == t.which && this.hide()
                        }), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                    }, e.prototype.resize = function() {
                        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
                    }, e.prototype.hideModal = function() {
                        var t = this;
                        this.$element.hide(), this.backdrop((function() {
                            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
                        }))
                    }, e.prototype.removeBackdrop = function() {
                        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                    }, e.prototype.backdrop = function(n) {
                        var r = this,
                            i = this.$element.hasClass("fade") ? "fade" : "";
                        if (this.isShown && this.options.backdrop) {
                            var o = t.support.transition && i;
                            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) {
                                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                                }), this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
                            o ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n()
                        } else if (!this.isShown && this.$backdrop) {
                            this.$backdrop.removeClass("in");
                            var a = function() {
                                r.removeBackdrop(), n && n()
                            };
                            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : a()
                        } else n && n()
                    }, e.prototype.handleUpdate = function() {
                        this.adjustDialog()
                    }, e.prototype.adjustDialog = function() {
                        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                        this.$element.css({
                            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                        })
                    }, e.prototype.resetAdjustments = function() {
                        this.$element.css({
                            paddingLeft: "",
                            paddingRight: ""
                        })
                    }, e.prototype.checkScrollbar = function() {
                        var t = window.innerWidth;
                        if (!t) {
                            var e = document.documentElement.getBoundingClientRect();
                            t = e.right - Math.abs(e.left)
                        }
                        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
                    }, e.prototype.setScrollbar = function() {
                        var e = parseInt(this.$body.css("padding-right") || 0, 10);
                        this.originalBodyPad = document.body.style.paddingRight || "";
                        var n = this.scrollbarWidth;
                        this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each((function(e, r) {
                            var i = r.style.paddingRight,
                                o = t(r).css("padding-right");
                            t(r).data("padding-right", i).css("padding-right", parseFloat(o) + n + "px")
                        })))
                    }, e.prototype.resetScrollbar = function() {
                        this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each((function(e, n) {
                            var r = t(n).data("padding-right");
                            t(n).removeData("padding-right"), n.style.paddingRight = r || ""
                        }))
                    }, e.prototype.measureScrollbar = function() {
                        var t = document.createElement("div");
                        t.className = "modal-scrollbar-measure", this.$body.append(t);
                        var e = t.offsetWidth - t.clientWidth;
                        return this.$body[0].removeChild(t), e
                    };
                    var r = t.fn.modal;
                    t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
                        return t.fn.modal = r, this
                    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
                        var r = t(this),
                            i = r.attr("href"),
                            o = r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""),
                            a = t(document).find(o),
                            s = a.data("bs.modal") ? "toggle" : t.extend({
                                remote: !/#/.test(i) && i
                            }, a.data(), r.data());
                        r.is("a") && e.preventDefault(), a.one("show.bs.modal", (function(t) {
                            t.isDefaultPrevented() || a.one("hidden.bs.modal", (function() {
                                r.is(":visible") && r.trigger("focus")
                            }))
                        })), n.call(a, s, this)
                    }))
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = ["sanitize", "whiteList", "sanitizeFn"],
                        n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                        r = {
                            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                            a: ["target", "href", "title", "rel"],
                            area: [],
                            b: [],
                            br: [],
                            col: [],
                            code: [],
                            div: [],
                            em: [],
                            hr: [],
                            h1: [],
                            h2: [],
                            h3: [],
                            h4: [],
                            h5: [],
                            h6: [],
                            i: [],
                            img: ["src", "alt", "title", "width", "height"],
                            li: [],
                            ol: [],
                            p: [],
                            pre: [],
                            s: [],
                            small: [],
                            span: [],
                            sub: [],
                            sup: [],
                            strong: [],
                            u: [],
                            ul: []
                        },
                        i = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                        o = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

                    function a(e, r) {
                        var a = e.nodeName.toLowerCase();
                        if (-1 !== t.inArray(a, r)) return -1 === t.inArray(a, n) || Boolean(e.nodeValue.match(i) || e.nodeValue.match(o));
                        for (var s = t(r).filter((function(t, e) {
                                return e instanceof RegExp
                            })), l = 0, c = s.length; l < c; l++)
                            if (a.match(s[l])) return !0;
                        return !1
                    }

                    function s(e, n, r) {
                        if (0 === e.length) return e;
                        if (r && "function" == typeof r) return r(e);
                        if (!document.implementation || !document.implementation.createHTMLDocument) return e;
                        var i = document.implementation.createHTMLDocument("sanitization");
                        i.body.innerHTML = e;
                        for (var o = t.map(n, (function(t, e) {
                                return e
                            })), s = t(i.body).find("*"), l = 0, c = s.length; l < c; l++) {
                            var u = s[l],
                                f = u.nodeName.toLowerCase();
                            if (-1 !== t.inArray(f, o))
                                for (var d = t.map(u.attributes, (function(t) {
                                        return t
                                    })), p = [].concat(n["*"] || [], n[f] || []), h = 0, m = d.length; h < m; h++) a(d[h], p) || u.removeAttribute(d[h].nodeName);
                            else u.parentNode.removeChild(u)
                        }
                        return i.body.innerHTML
                    }
                    var l = function(t, e) {
                        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
                    };
                    l.VERSION = "3.4.1", l.TRANSITION_DURATION = 150, l.DEFAULTS = {
                        animation: !0,
                        placement: "top",
                        selector: !1,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        container: !1,
                        viewport: {
                            selector: "body",
                            padding: 0
                        },
                        sanitize: !0,
                        sanitizeFn: null,
                        whiteList: r
                    }, l.prototype.init = function(e, n, r) {
                        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                                click: !1,
                                hover: !1,
                                focus: !1
                            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
                            var a = i[o];
                            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                            else if ("manual" != a) {
                                var s = "hover" == a ? "mouseenter" : "focusin",
                                    l = "hover" == a ? "mouseleave" : "focusout";
                                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                            }
                        }
                        this.options.selector ? this._options = t.extend({}, this.options, {
                            trigger: "manual",
                            selector: ""
                        }) : this.fixTitle()
                    }, l.prototype.getDefaults = function() {
                        return l.DEFAULTS
                    }, l.prototype.getOptions = function(n) {
                        var r = this.$element.data();
                        for (var i in r) r.hasOwnProperty(i) && -1 !== t.inArray(i, e) && delete r[i];
                        return (n = t.extend({}, this.getDefaults(), r, n)).delay && "number" == typeof n.delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), n.sanitize && (n.template = s(n.template, n.whiteList, n.sanitizeFn)), n
                    }, l.prototype.getDelegateOptions = function() {
                        var e = {},
                            n = this.getDefaults();
                        return this._options && t.each(this._options, (function(t, r) {
                            n[t] != r && (e[t] = r)
                        })), e
                    }, l.prototype.enter = function(e) {
                        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
                        else {
                            if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
                            n.timeout = setTimeout((function() {
                                "in" == n.hoverState && n.show()
                            }), n.options.delay.show)
                        }
                    }, l.prototype.isInStateTrue = function() {
                        for (var t in this.inState)
                            if (this.inState[t]) return !0;
                        return !1
                    }, l.prototype.leave = function(e) {
                        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
                            if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                            n.timeout = setTimeout((function() {
                                "out" == n.hoverState && n.hide()
                            }), n.options.delay.hide)
                        }
                    }, l.prototype.show = function() {
                        var e = t.Event("show.bs." + this.type);
                        if (this.hasContent() && this.enabled) {
                            this.$element.trigger(e);
                            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                            if (e.isDefaultPrevented() || !n) return;
                            var r = this,
                                i = this.tip(),
                                o = this.getUID(this.type);
                            this.setContent(), i.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && i.addClass("fade");
                            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                                s = /\s?auto?\s?/i,
                                c = s.test(a);
                            c && (a = a.replace(s, "") || "top"), i.detach().css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }).addClass(a).data("bs." + this.type, this), this.options.container ? i.appendTo(t(document).find(this.options.container)) : i.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                            var u = this.getPosition(),
                                f = i[0].offsetWidth,
                                d = i[0].offsetHeight;
                            if (c) {
                                var p = a,
                                    h = this.getPosition(this.$viewport);
                                a = "bottom" == a && u.bottom + d > h.bottom ? "top" : "top" == a && u.top - d < h.top ? "bottom" : "right" == a && u.right + f > h.width ? "left" : "left" == a && u.left - f < h.left ? "right" : a, i.removeClass(p).addClass(a)
                            }
                            var m = this.getCalculatedOffset(a, u, f, d);
                            this.applyPlacement(m, a);
                            var v = function() {
                                var t = r.hoverState;
                                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
                            };
                            t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", v).emulateTransitionEnd(l.TRANSITION_DURATION) : v()
                        }
                    }, l.prototype.applyPlacement = function(e, n) {
                        var r = this.tip(),
                            i = r[0].offsetWidth,
                            o = r[0].offsetHeight,
                            a = parseInt(r.css("margin-top"), 10),
                            s = parseInt(r.css("margin-left"), 10);
                        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(r[0], t.extend({
                            using: function(t) {
                                r.css({
                                    top: Math.round(t.top),
                                    left: Math.round(t.left)
                                })
                            }
                        }, e), 0), r.addClass("in");
                        var l = r[0].offsetWidth,
                            c = r[0].offsetHeight;
                        "top" == n && c != o && (e.top = e.top + o - c);
                        var u = this.getViewportAdjustedDelta(n, e, l, c);
                        u.left ? e.left += u.left : e.top += u.top;
                        var f = /top|bottom/.test(n),
                            d = f ? 2 * u.left - i + l : 2 * u.top - o + c,
                            p = f ? "offsetWidth" : "offsetHeight";
                        r.offset(e), this.replaceArrow(d, r[0][p], f)
                    }, l.prototype.replaceArrow = function(t, e, n) {
                        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
                    }, l.prototype.setContent = function() {
                        var t = this.tip(),
                            e = this.getTitle();
                        this.options.html ? (this.options.sanitize && (e = s(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
                    }, l.prototype.hide = function(e) {
                        var n = this,
                            r = t(this.$tip),
                            i = t.Event("hide.bs." + this.type);

                        function o() {
                            "in" != n.hoverState && r.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
                        }
                        if (this.$element.trigger(i), !i.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", o).emulateTransitionEnd(l.TRANSITION_DURATION) : o(), this.hoverState = null, this
                    }, l.prototype.fixTitle = function() {
                        var t = this.$element;
                        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
                    }, l.prototype.hasContent = function() {
                        return this.getTitle()
                    }, l.prototype.getPosition = function(e) {
                        var n = (e = e || this.$element)[0],
                            r = "BODY" == n.tagName,
                            i = n.getBoundingClientRect();
                        null == i.width && (i = t.extend({}, i, {
                            width: i.right - i.left,
                            height: i.bottom - i.top
                        }));
                        var o = window.SVGElement && n instanceof window.SVGElement,
                            a = r ? {
                                top: 0,
                                left: 0
                            } : o ? null : e.offset(),
                            s = {
                                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                            },
                            l = r ? {
                                width: t(window).width(),
                                height: t(window).height()
                            } : null;
                        return t.extend({}, i, s, l, a)
                    }, l.prototype.getCalculatedOffset = function(t, e, n, r) {
                        return "bottom" == t ? {
                            top: e.top + e.height,
                            left: e.left + e.width / 2 - n / 2
                        } : "top" == t ? {
                            top: e.top - r,
                            left: e.left + e.width / 2 - n / 2
                        } : "left" == t ? {
                            top: e.top + e.height / 2 - r / 2,
                            left: e.left - n
                        } : {
                            top: e.top + e.height / 2 - r / 2,
                            left: e.left + e.width
                        }
                    }, l.prototype.getViewportAdjustedDelta = function(t, e, n, r) {
                        var i = {
                            top: 0,
                            left: 0
                        };
                        if (!this.$viewport) return i;
                        var o = this.options.viewport && this.options.viewport.padding || 0,
                            a = this.getPosition(this.$viewport);
                        if (/right|left/.test(t)) {
                            var s = e.top - o - a.scroll,
                                l = e.top + o - a.scroll + r;
                            s < a.top ? i.top = a.top - s : l > a.top + a.height && (i.top = a.top + a.height - l)
                        } else {
                            var c = e.left - o,
                                u = e.left + o + n;
                            c < a.left ? i.left = a.left - c : u > a.right && (i.left = a.left + a.width - u)
                        }
                        return i
                    }, l.prototype.getTitle = function() {
                        var t = this.$element,
                            e = this.options;
                        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
                    }, l.prototype.getUID = function(t) {
                        do {
                            t += ~~(1e6 * Math.random())
                        } while (document.getElementById(t));
                        return t
                    }, l.prototype.tip = function() {
                        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                        return this.$tip
                    }, l.prototype.arrow = function() {
                        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                    }, l.prototype.enable = function() {
                        this.enabled = !0
                    }, l.prototype.disable = function() {
                        this.enabled = !1
                    }, l.prototype.toggleEnabled = function() {
                        this.enabled = !this.enabled
                    }, l.prototype.toggle = function(e) {
                        var n = this;
                        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
                    }, l.prototype.destroy = function() {
                        var t = this;
                        clearTimeout(this.timeout), this.hide((function() {
                            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
                        }))
                    }, l.prototype.sanitizeHtml = function(t) {
                        return s(t, this.options.whiteList, this.options.sanitizeFn)
                    };
                    var c = t.fn.tooltip;
                    t.fn.tooltip = function(e) {
                        return this.each((function() {
                            var n = t(this),
                                r = n.data("bs.tooltip"),
                                i = "object" == typeof e && e;
                            !r && /destroy|hide/.test(e) || (r || n.data("bs.tooltip", r = new l(this, i)), "string" == typeof e && r[e]())
                        }))
                    }, t.fn.tooltip.Constructor = l, t.fn.tooltip.noConflict = function() {
                        return t.fn.tooltip = c, this
                    }
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = function(t, e) {
                        this.init("popover", t, e)
                    };
                    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
                    e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                        placement: "right",
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                    }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function() {
                        return e.DEFAULTS
                    }, e.prototype.setContent = function() {
                        var t = this.tip(),
                            e = this.getTitle(),
                            n = this.getContent();
                        if (this.options.html) {
                            var r = typeof n;
                            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === r && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === r ? "html" : "append"](n)
                        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
                        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
                    }, e.prototype.hasContent = function() {
                        return this.getTitle() || this.getContent()
                    }, e.prototype.getContent = function() {
                        var t = this.$element,
                            e = this.options;
                        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
                    }, e.prototype.arrow = function() {
                        return this.$arrow = this.$arrow || this.tip().find(".arrow")
                    };
                    var n = t.fn.popover;
                    t.fn.popover = function(n) {
                        return this.each((function() {
                            var r = t(this),
                                i = r.data("bs.popover"),
                                o = "object" == typeof n && n;
                            !i && /destroy|hide/.test(n) || (i || r.data("bs.popover", i = new e(this, o)), "string" == typeof n && i[n]())
                        }))
                    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
                        return t.fn.popover = n, this
                    }
                }(jQuery),
                function(t) {
                    "use strict";

                    function e(n, r) {
                        this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
                    }

                    function n(n) {
                        return this.each((function() {
                            var r = t(this),
                                i = r.data("bs.scrollspy"),
                                o = "object" == typeof n && n;
                            i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
                        }))
                    }
                    e.VERSION = "3.4.1", e.DEFAULTS = {
                        offset: 10
                    }, e.prototype.getScrollHeight = function() {
                        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                    }, e.prototype.refresh = function() {
                        var e = this,
                            n = "offset",
                            r = 0;
                        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function() {
                            var e = t(this),
                                i = e.data("target") || e.attr("href"),
                                o = /^#./.test(i) && t(i);
                            return o && o.length && o.is(":visible") && [
                                [o[n]().top + r, i]
                            ] || null
                        })).sort((function(t, e) {
                            return t[0] - e[0]
                        })).each((function() {
                            e.offsets.push(this[0]), e.targets.push(this[1])
                        }))
                    }, e.prototype.process = function() {
                        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                            n = this.getScrollHeight(),
                            r = this.options.offset + n - this.$scrollElement.height(),
                            i = this.offsets,
                            o = this.targets,
                            a = this.activeTarget;
                        if (this.scrollHeight != n && this.refresh(), e >= r) return a != (t = o[o.length - 1]) && this.activate(t);
                        if (a && e < i[0]) return this.activeTarget = null, this.clear();
                        for (t = i.length; t--;) a != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
                    }, e.prototype.activate = function(e) {
                        this.activeTarget = e, this.clear();
                        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                            r = t(n).parents("li").addClass("active");
                        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
                    }, e.prototype.clear = function() {
                        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                    };
                    var r = t.fn.scrollspy;
                    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
                        return t.fn.scrollspy = r, this
                    }, t(window).on("load.bs.scrollspy.data-api", (function() {
                        t('[data-spy="scroll"]').each((function() {
                            var e = t(this);
                            n.call(e, e.data())
                        }))
                    }))
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = function(e) {
                        this.element = t(e)
                    };

                    function n(n) {
                        return this.each((function() {
                            var r = t(this),
                                i = r.data("bs.tab");
                            i || r.data("bs.tab", i = new e(this)), "string" == typeof n && i[n]()
                        }))
                    }
                    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
                        var e = this.element,
                            n = e.closest("ul:not(.dropdown-menu)"),
                            r = e.data("target");
                        if (r || (r = (r = e.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                            var i = n.find(".active:last a"),
                                o = t.Event("hide.bs.tab", {
                                    relatedTarget: e[0]
                                }),
                                a = t.Event("show.bs.tab", {
                                    relatedTarget: i[0]
                                });
                            if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                                var s = t(document).find(r);
                                this.activate(e.closest("li"), n), this.activate(s, s.parent(), (function() {
                                    i.trigger({
                                        type: "hidden.bs.tab",
                                        relatedTarget: e[0]
                                    }), e.trigger({
                                        type: "shown.bs.tab",
                                        relatedTarget: i[0]
                                    })
                                }))
                            }
                        }
                    }, e.prototype.activate = function(n, r, i) {
                        var o = r.find("> .active"),
                            a = i && t.support.transition && (o.length && o.hasClass("fade") || !!r.find("> .fade").length);

                        function s() {
                            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
                        }
                        o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), o.removeClass("in")
                    };
                    var r = t.fn.tab;
                    t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
                        return t.fn.tab = r, this
                    };
                    var i = function(e) {
                        e.preventDefault(), n.call(t(this), "show")
                    };
                    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
                }(jQuery),
                function(t) {
                    "use strict";
                    var e = function(n, r) {
                        this.options = t.extend({}, e.DEFAULTS, r);
                        var i = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
                        this.$target = i.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
                    };

                    function n(n) {
                        return this.each((function() {
                            var r = t(this),
                                i = r.data("bs.affix"),
                                o = "object" == typeof n && n;
                            i || r.data("bs.affix", i = new e(this, o)), "string" == typeof n && i[n]()
                        }))
                    }
                    e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
                        offset: 0,
                        target: window
                    }, e.prototype.getState = function(t, e, n, r) {
                        var i = this.$target.scrollTop(),
                            o = this.$element.offset(),
                            a = this.$target.height();
                        if (null != n && "top" == this.affixed) return i < n && "top";
                        if ("bottom" == this.affixed) return null != n ? !(i + this.unpin <= o.top) && "bottom" : !(i + a <= t - r) && "bottom";
                        var s = null == this.affixed,
                            l = s ? i : o.top;
                        return null != n && i <= n ? "top" : null != r && l + (s ? a : e) >= t - r && "bottom"
                    }, e.prototype.getPinnedOffset = function() {
                        if (this.pinnedOffset) return this.pinnedOffset;
                        this.$element.removeClass(e.RESET).addClass("affix");
                        var t = this.$target.scrollTop(),
                            n = this.$element.offset();
                        return this.pinnedOffset = n.top - t
                    }, e.prototype.checkPositionWithEventLoop = function() {
                        setTimeout(t.proxy(this.checkPosition, this), 1)
                    }, e.prototype.checkPosition = function() {
                        if (this.$element.is(":visible")) {
                            var n = this.$element.height(),
                                r = this.options.offset,
                                i = r.top,
                                o = r.bottom,
                                a = Math.max(t(document).height(), t(document.body).height());
                            "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
                            var s = this.getState(a, n, i, o);
                            if (this.affixed != s) {
                                null != this.unpin && this.$element.css("top", "");
                                var l = "affix" + (s ? "-" + s : ""),
                                    c = t.Event(l + ".bs.affix");
                                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                            }
                            "bottom" == s && this.$element.offset({
                                top: a - n - o
                            })
                        }
                    };
                    var r = t.fn.affix;
                    t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
                        return t.fn.affix = r, this
                    }, t(window).on("load", (function() {
                        t('[data-spy="affix"]').each((function() {
                            var e = t(this),
                                r = e.data();
                            r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), n.call(e, r)
                        }))
                    }))
                }(jQuery)
            },
            489: function(t, e, n) {
                var r, i, o;
                i = [n(755)], r = function(t) {
                    var e = t(document),
                        n = t(window),
                        r = t("body"),
                        i = "displayController",
                        o = "hasActiveHover",
                        a = "forcedOpen",
                        s = "hasMouseMove",
                        l = "mouseOnToPopup",
                        c = "originalTitle",
                        u = "powertip",
                        f = "powertipjq",
                        d = "powertiptarget",
                        p = ".powertip",
                        h = 180 / Math.PI,
                        m = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "contextmenu"],
                        v = {
                            elements: null,
                            tooltips: null,
                            isTipOpen: !1,
                            isFixedTipOpen: !1,
                            isClosing: !1,
                            tipOpenImminent: !1,
                            activeHover: null,
                            currentX: 0,
                            currentY: 0,
                            previousX: 0,
                            previousY: 0,
                            desyncTimeout: null,
                            closeDelayTimeout: null,
                            mouseTrackingActive: !1,
                            delayInProgress: !1,
                            windowWidth: 0,
                            windowHeight: 0,
                            scrollTop: 0,
                            scrollLeft: 0
                        },
                        g = {
                            none: 0,
                            top: 1,
                            bottom: 2,
                            left: 4,
                            right: 8
                        };

                    function y() {
                        var e = this;
                        e.top = "auto", e.left = "auto", e.right = "auto", e.bottom = "auto", e.set = function(n, r) {
                            t.isNumeric(r) && (e[n] = Math.round(r))
                        }
                    }

                    function b(t, e, n) {
                        var r = null,
                            s = null;

                        function l(i, s) {
                            c(), t.data(o) ? u() : i ? (s && t.data(a, !0), f(), n.showTip(t)) : (v.tipOpenImminent = !0, r = setTimeout((function() {
                                r = null, Math.abs(v.previousX - v.currentX) + Math.abs(v.previousY - v.currentY) < e.intentSensitivity ? (u(), f(), n.showTip(t)) : (v.previousX = v.currentX, v.previousY = v.currentY, l())
                            }), e.intentPollInterval))
                        }

                        function c(t) {
                            r = clearTimeout(r), (v.closeDelayTimeout && s === v.closeDelayTimeout || t) && u()
                        }

                        function u() {
                            v.closeDelayTimeout = clearTimeout(v.closeDelayTimeout), v.delayInProgress = !1
                        }

                        function f() {
                            v.delayInProgress && v.activeHover && !v.activeHover.is(t) && v.activeHover.data(i).hide(!0)
                        }
                        this.show = l, this.hide = function(r) {
                            s && (s = v.closeDelayTimeout = clearTimeout(s), v.delayInProgress = !1), c(), v.tipOpenImminent = !1, t.data(o) && (t.data(a, !1), r ? n.hideTip(t) : (v.delayInProgress = !0, v.closeDelayTimeout = setTimeout((function() {
                                v.closeDelayTimeout = null, n.hideTip(t), v.delayInProgress = !1, s = null
                            }), e.closeDelay), s = v.closeDelayTimeout))
                        }, this.cancel = c, this.resetPosition = function() {
                            n.resetPosition(t)
                        }
                    }

                    function w() {
                        this.compute = function(t, e, n, r, i) {
                            var o, a, s = e.split("-")[0],
                                l = new y;
                            switch (a = t, o = Boolean(window.SVGElement && a[0] instanceof SVGElement) ? function(t, e) {
                                    var n, r, i, o, a = t.closest("svg")[0],
                                        s = t[0],
                                        l = a.createSVGPoint(),
                                        c = s.getBBox(),
                                        u = s.getScreenCTM(),
                                        f = c.width / 2,
                                        d = c.height / 2,
                                        p = [],
                                        m = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];

                                    function g() {
                                        p.push(l.matrixTransform(u))
                                    }
                                    if (l.x = c.x, l.y = c.y, g(), l.x += f, g(), l.x += f, g(), l.y += d, g(), l.y += d, g(), l.x -= f, g(), l.x -= f, g(), l.y -= d, g(), p[0].y !== p[1].y || p[0].x !== p[7].x)
                                        for (r = Math.atan2(u.b, u.a) * h, (i = Math.ceil((r % 360 - 22.5) / 45)) < 1 && (i += 8); i--;) m.push(m.shift());
                                    for (o = 0; o < p.length; o++)
                                        if (m[o] === e) {
                                            n = p[o];
                                            break
                                        } return {
                                        top: n.y + v.scrollTop,
                                        left: n.x + v.scrollLeft
                                    }
                                }(t, s) : function(t, e) {
                                    var n, r, i = t.offset(),
                                        o = t.outerWidth(),
                                        a = t.outerHeight();
                                    switch (e) {
                                        case "n":
                                            n = i.left + o / 2, r = i.top;
                                            break;
                                        case "e":
                                            n = i.left + o, r = i.top + a / 2;
                                            break;
                                        case "s":
                                            n = i.left + o / 2, r = i.top + a;
                                            break;
                                        case "w":
                                            n = i.left, r = i.top + a / 2;
                                            break;
                                        case "nw":
                                            n = i.left, r = i.top;
                                            break;
                                        case "ne":
                                            n = i.left + o, r = i.top;
                                            break;
                                        case "sw":
                                            n = i.left, r = i.top + a;
                                            break;
                                        case "se":
                                            n = i.left + o, r = i.top + a
                                    }
                                    return {
                                        top: r,
                                        left: n
                                    }
                                }(t, s), e) {
                                case "n":
                                    l.set("left", o.left - n / 2), l.set("bottom", v.windowHeight - o.top + i);
                                    break;
                                case "e":
                                    l.set("left", o.left + i), l.set("top", o.top - r / 2);
                                    break;
                                case "s":
                                    l.set("left", o.left - n / 2), l.set("top", o.top + i);
                                    break;
                                case "w":
                                    l.set("top", o.top - r / 2), l.set("right", v.windowWidth - o.left + i);
                                    break;
                                case "nw":
                                    l.set("bottom", v.windowHeight - o.top + i), l.set("right", v.windowWidth - o.left - 20);
                                    break;
                                case "nw-alt":
                                    l.set("left", o.left), l.set("bottom", v.windowHeight - o.top + i);
                                    break;
                                case "ne":
                                    l.set("left", o.left - 20), l.set("bottom", v.windowHeight - o.top + i);
                                    break;
                                case "ne-alt":
                                    l.set("bottom", v.windowHeight - o.top + i), l.set("right", v.windowWidth - o.left);
                                    break;
                                case "sw":
                                    l.set("top", o.top + i), l.set("right", v.windowWidth - o.left - 20);
                                    break;
                                case "sw-alt":
                                    l.set("left", o.left), l.set("top", o.top + i);
                                    break;
                                case "se":
                                    l.set("left", o.left - 20), l.set("top", o.top + i);
                                    break;
                                case "se-alt":
                                    l.set("top", o.top + i), l.set("right", v.windowWidth - o.left)
                            }
                            return l
                        }
                    }

                    function x(c) {
                        var h = new w,
                            m = t("#" + c.popupId);

                        function b(t) {
                            v.isClosing = !0, v.isTipOpen = !1, v.desyncTimeout = clearInterval(v.desyncTimeout), t.data(o, !1), t.data(a, !1), e.off("click" + p), m.off(p), m.fadeOut(c.fadeOutTime, (function() {
                                var e = new y;
                                v.activeHover = null, v.isClosing = !1, v.isFixedTipOpen = !1, m.removeClass(), e.set("top", v.currentY + c.offset), e.set("left", v.currentX + c.offset), m.css(e), t.trigger("powerTipClose")
                            }))
                        }

                        function x() {
                            var t, e, n, r;
                            !v.isFixedTipOpen && (v.isTipOpen || v.tipOpenImminent && m.data(s)) && (t = m.outerWidth(), e = m.outerHeight(), (n = new y).set("top", v.currentY + c.offset), n.set("left", v.currentX + c.offset), (r = O(n, t, e)) !== g.none && (1 === function(t) {
                                for (var e = 0; t;) t &= t - 1, e++;
                                return e
                            }(r) ? r === g.right ? n.set("left", v.scrollLeft + v.windowWidth - t) : r === g.bottom && n.set("top", v.scrollTop + v.windowHeight - e) : (n.set("left", v.currentX - t - c.offset), n.set("top", v.currentY - e - c.offset))), m.css(n))
                        }

                        function T(e) {
                            var n, r;
                            c.smartPlacement || c.followMouse && e.data(a) ? (n = t.fn.powerTip.smartPlacementLists[c.placement], t.each(n, (function(t, n) {
                                var i = O(k(e, n), m.outerWidth(), m.outerHeight());
                                return r = n, i !== g.none
                            }))) : (k(e, c.placement), r = c.placement), m.removeClass("w nw sw e ne se n s w se-alt sw-alt ne-alt nw-alt"), m.addClass(r)
                        }

                        function k(t, e) {
                            var n, r, i = 0,
                                o = new y;
                            for (o.set("top", 0), o.set("left", 0), m.css(o); n = m.outerWidth(), r = m.outerHeight(), o = h.compute(t, e, n, r, c.offset), m.css(o), ++i <= 5 && (n !== m.outerWidth() || r !== m.outerHeight()););
                            return o
                        }

                        function C() {
                            var e = !1,
                                n = 0 < t.grep(["mouseleave", "mouseout", "blur", "focusout"], (function(e) {
                                    return -1 !== t.inArray(e, c.closeEvents)
                                })).length;
                            v.isTipOpen && !v.isClosing && !v.delayInProgress && n && (!1 === v.activeHover.data(o) || v.activeHover.is(":disabled") ? e = !0 : S(v.activeHover) || v.activeHover.is(":focus") || v.activeHover.data(a) || m.data(l) && S(m) || (e = !0), e && b(v.activeHover))
                        }
                        0 === m.length && (m = t("<div/>", {
                            id: c.popupId
                        }), 0 === r.length && (r = t("body")), r.append(m), v.tooltips = v.tooltips ? v.tooltips.add(m) : m), c.followMouse && (m.data(s) || (e.on("mousemove" + p, x), n.on("scroll" + p, x), m.data(s, !0))), this.showTip = function(n) {
                            n.data(o, !0), m.queue((function(r) {
                                ! function n(r) {
                                    var s;
                                    if (r.data(o)) {
                                        if (v.isTipOpen) return v.isClosing || b(v.activeHover), void m.delay(100).queue((function(t) {
                                            n(r), t()
                                        }));
                                        var h, g, y, w, k, E;
                                        r.trigger("powerTipPreRender"), w = (h = r).data(u), k = h.data(f), E = h.data(d), w ? (t.isFunction(w) && (w = w.call(h[0])), y = w) : k ? (t.isFunction(k) && (k = k.call(h[0])), 0 < k.length && (y = k.clone(!0, !0))) : E && 0 < (g = t("#" + E)).length && (y = g.html()), (s = y) && (m.empty().append(s), r.trigger("powerTipRender"), v.activeHover = r, v.isTipOpen = !0, m.data(l, c.mouseOnToPopup), m.addClass(c.popupClass), !c.followMouse || r.data(a) ? (T(r), v.isFixedTipOpen = !0) : x(), r.data(a) || c.followMouse || e.on("click" + p, (function(e) {
                                            var n = e.target;
                                            n !== r[0] && (c.mouseOnToPopup && (n === m[0] || t.contains(m[0], n)) || t.powerTip.hide())
                                        })), c.mouseOnToPopup && !c.manual && (m.on("mouseenter" + p, (function() {
                                            v.activeHover && v.activeHover.data(i).cancel()
                                        })), m.on("mouseleave" + p, (function() {
                                            v.activeHover && v.activeHover.data(i).hide()
                                        }))), m.fadeIn(c.fadeInTime, (function() {
                                            v.desyncTimeout || (v.desyncTimeout = setInterval(C, 500)), r.trigger("powerTipOpen")
                                        })))
                                    }
                                }(n), r()
                            }))
                        }, this.hideTip = b, this.resetPosition = T
                    }

                    function T(e) {
                        return Boolean(e && -1 < t.inArray(e.type, m) && "number" == typeof e.pageX)
                    }

                    function k() {
                        v.scrollLeft = n.scrollLeft(), v.scrollTop = n.scrollTop(), v.windowWidth = n.width(), v.windowHeight = n.height()
                    }

                    function C() {
                        v.windowWidth = n.width(), v.windowHeight = n.height()
                    }

                    function E() {
                        var t = n.scrollLeft(),
                            e = n.scrollTop();
                        t !== v.scrollLeft && (v.currentX += t - v.scrollLeft, v.scrollLeft = t), e !== v.scrollTop && (v.currentY += e - v.scrollTop, v.scrollTop = e)
                    }

                    function $(t) {
                        v.currentX = t.pageX, v.currentY = t.pageY
                    }

                    function S(t) {
                        var e = t.offset(),
                            n = t[0].getBoundingClientRect(),
                            r = n.right - n.left,
                            i = n.bottom - n.top;
                        return v.currentX >= e.left && v.currentX <= e.left + r && v.currentY >= e.top && v.currentY <= e.top + i
                    }

                    function O(t, e, n) {
                        var r = v.scrollTop,
                            i = v.scrollLeft,
                            o = r + v.windowHeight,
                            a = i + v.windowWidth,
                            s = g.none;
                        return (t.top < r || Math.abs(t.bottom - v.windowHeight) - n < r) && (s |= g.top), (t.top + n > o || Math.abs(t.bottom - v.windowHeight) > o) && (s |= g.bottom), (t.left < i || t.right + e > a) && (s |= g.left), (t.left + e > a || t.right < i) && (s |= g.right), s
                    }
                    return t.fn.powerTip = function(r, o) {
                        var a, s, l = this;
                        return l.length ? "string" === t.type(r) && t.powerTip[r] ? t.powerTip[r].call(l, l, o) : (a = t.extend({}, t.fn.powerTip.defaults, r), t.powerTip.destroy(l), s = new x(a), v.mouseTrackingActive || (v.mouseTrackingActive = !0, k(), t(k), e.on("mousemove" + p, $), n.on("resize" + p, C), n.on("scroll" + p, E)), l.each((function() {
                            var e = t(this),
                                n = e.data(u),
                                r = e.data(f),
                                o = e.data(d),
                                l = e.attr("title");
                            n || o || r || !l || (e.data(u, l), e.data(c, l), e.removeAttr("title")), e.data(i, new b(e, a, s))
                        })), a.manual || (t.each(a.openEvents, (function(e, n) {
                            -1 < t.inArray(n, a.closeEvents) ? l.on(n + p, (function(e) {
                                t.powerTip.toggle(this, e)
                            })) : l.on(n + p, (function(e) {
                                t.powerTip.show(this, e)
                            }))
                        })), t.each(a.closeEvents, (function(e, n) {
                            t.inArray(n, a.openEvents) < 0 && l.on(n + p, (function(e) {
                                t.powerTip.hide(this, !T(e))
                            }))
                        })), l.on("keydown" + p, (function(e) {
                            27 === e.keyCode && t.powerTip.hide(this, !0)
                        }))), v.elements = v.elements ? v.elements.add(l) : l, l) : l
                    }, t.fn.powerTip.defaults = {
                        fadeInTime: 200,
                        fadeOutTime: 100,
                        followMouse: !1,
                        popupId: "powerTip",
                        popupClass: null,
                        intentSensitivity: 7,
                        intentPollInterval: 100,
                        closeDelay: 100,
                        placement: "n",
                        smartPlacement: !1,
                        offset: 10,
                        mouseOnToPopup: !1,
                        manual: !1,
                        openEvents: ["mouseenter", "focus"],
                        closeEvents: ["mouseleave", "blur"]
                    }, t.fn.powerTip.smartPlacementLists = {
                        n: ["n", "ne", "nw", "s"],
                        e: ["e", "ne", "se", "w", "nw", "sw", "n", "s", "e"],
                        s: ["s", "se", "sw", "n"],
                        w: ["w", "nw", "sw", "e", "ne", "se", "n", "s", "w"],
                        nw: ["nw", "w", "sw", "n", "s", "se", "nw"],
                        ne: ["ne", "e", "se", "n", "s", "sw", "ne"],
                        sw: ["sw", "w", "nw", "s", "n", "ne", "sw"],
                        se: ["se", "e", "ne", "s", "n", "nw", "se"],
                        "nw-alt": ["nw-alt", "n", "ne-alt", "sw-alt", "s", "se-alt", "w", "e"],
                        "ne-alt": ["ne-alt", "n", "nw-alt", "se-alt", "s", "sw-alt", "e", "w"],
                        "sw-alt": ["sw-alt", "s", "se-alt", "nw-alt", "n", "ne-alt", "w", "e"],
                        "se-alt": ["se-alt", "s", "sw-alt", "ne-alt", "n", "nw-alt", "e", "w"]
                    }, t.powerTip = {
                        show: function(e, n) {
                            return T(n) ? ($(n), v.previousX = n.pageX, v.previousY = n.pageY, t(e).data(i).show()) : t(e).first().data(i).show(!0, !0), e
                        },
                        reposition: function(e) {
                            return t(e).first().data(i).resetPosition(), e
                        },
                        hide: function(e, n) {
                            var r;
                            return n = !e || n, e ? r = t(e).first().data(i) : v.activeHover && (r = v.activeHover.data(i)), r && r.hide(n), e
                        },
                        toggle: function(e, n) {
                            return v.activeHover && v.activeHover.is(e) ? t.powerTip.hide(e, !T(n)) : t.powerTip.show(e, n), e
                        },
                        destroy: function(r) {
                            var s = r ? t(r) : v.elements;
                            return v.elements && 0 !== v.elements.length && (v.isTipOpen && !v.isClosing && 0 < s.filter(v.activeHover).length && (v.delayInProgress && v.activeHover.data(i).cancel(), t.powerTip.hide(v.activeHover, !0)), s.off(p).each((function() {
                                var e = t(this),
                                    n = [c, i, o, a];
                                e.data(c) && (e.attr("title", e.data(c)), n.push(u)), e.removeData(n)
                            })), v.elements = v.elements.not(s), 0 === v.elements.length && (n.off(p), e.off(p), v.mouseTrackingActive = !1, v.tooltips.remove(), v.tooltips = null)), r
                        }
                    }, t.powerTip.showTip = t.powerTip.show, t.powerTip.closeTip = t.powerTip.hide, t.powerTip
                }, void 0 === (o = "function" == typeof r ? r.apply(e, i) : r) || (t.exports = o)
            },
            755: function(t, e) {
                var n;
                ! function(e, n) {
                    "use strict";
                    "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
                        if (!t.document) throw new Error("jQuery requires a window with a document");
                        return n(t)
                    } : n(e)
                }("undefined" != typeof window ? window : this, (function(r, i) {
                    "use strict";
                    var o = [],
                        a = Object.getPrototypeOf,
                        s = o.slice,
                        l = o.flat ? function(t) {
                            return o.flat.call(t)
                        } : function(t) {
                            return o.concat.apply([], t)
                        },
                        c = o.push,
                        u = o.indexOf,
                        f = {},
                        d = f.toString,
                        p = f.hasOwnProperty,
                        h = p.toString,
                        m = h.call(Object),
                        v = {},
                        g = function(t) {
                            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
                        },
                        y = function(t) {
                            return null != t && t === t.window
                        },
                        b = r.document,
                        w = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };

                    function x(t, e, n) {
                        var r, i, o = (n = n || b).createElement("script");
                        if (o.text = t, e)
                            for (r in w)(i = e[r] || e.getAttribute && e.getAttribute(r)) && o.setAttribute(r, i);
                        n.head.appendChild(o).parentNode.removeChild(o)
                    }

                    function T(t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? f[d.call(t)] || "object" : typeof t
                    }
                    var k = "3.6.0",
                        C = function(t, e) {
                            return new C.fn.init(t, e)
                        };

                    function E(t) {
                        var e = !!t && "length" in t && t.length,
                            n = T(t);
                        return !g(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                    }
                    C.fn = C.prototype = {
                        jquery: k,
                        constructor: C,
                        length: 0,
                        toArray: function() {
                            return s.call(this)
                        },
                        get: function(t) {
                            return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
                        },
                        pushStack: function(t) {
                            var e = C.merge(this.constructor(), t);
                            return e.prevObject = this, e
                        },
                        each: function(t) {
                            return C.each(this, t)
                        },
                        map: function(t) {
                            return this.pushStack(C.map(this, (function(e, n) {
                                return t.call(e, n, e)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(s.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        even: function() {
                            return this.pushStack(C.grep(this, (function(t, e) {
                                return (e + 1) % 2
                            })))
                        },
                        odd: function() {
                            return this.pushStack(C.grep(this, (function(t, e) {
                                return e % 2
                            })))
                        },
                        eq: function(t) {
                            var e = this.length,
                                n = +t + (t < 0 ? e : 0);
                            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: c,
                        sort: o.sort,
                        splice: o.splice
                    }, C.extend = C.fn.extend = function() {
                        var t, e, n, r, i, o, a = arguments[0] || {},
                            s = 1,
                            l = arguments.length,
                            c = !1;
                        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                            if (null != (t = arguments[s]))
                                for (e in t) r = t[e], "__proto__" !== e && a !== r && (c && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[e], o = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, a[e] = C.extend(c, o, r)) : void 0 !== r && (a[e] = r));
                        return a
                    }, C.extend({
                        expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(t) {
                            throw new Error(t)
                        },
                        noop: function() {},
                        isPlainObject: function(t) {
                            var e, n;
                            return !(!t || "[object Object]" !== d.call(t)) && (!(e = a(t)) || "function" == typeof(n = p.call(e, "constructor") && e.constructor) && h.call(n) === m)
                        },
                        isEmptyObject: function(t) {
                            var e;
                            for (e in t) return !1;
                            return !0
                        },
                        globalEval: function(t, e, n) {
                            x(t, {
                                nonce: e && e.nonce
                            }, n)
                        },
                        each: function(t, e) {
                            var n, r = 0;
                            if (E(t))
                                for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
                            else
                                for (r in t)
                                    if (!1 === e.call(t[r], r, t[r])) break;
                            return t
                        },
                        makeArray: function(t, e) {
                            var n = e || [];
                            return null != t && (E(Object(t)) ? C.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)), n
                        },
                        inArray: function(t, e, n) {
                            return null == e ? -1 : u.call(e, t, n)
                        },
                        merge: function(t, e) {
                            for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
                            return t.length = i, t
                        },
                        grep: function(t, e, n) {
                            for (var r = [], i = 0, o = t.length, a = !n; i < o; i++) !e(t[i], i) !== a && r.push(t[i]);
                            return r
                        },
                        map: function(t, e, n) {
                            var r, i, o = 0,
                                a = [];
                            if (E(t))
                                for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && a.push(i);
                            else
                                for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
                            return l(a)
                        },
                        guid: 1,
                        support: v
                    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
                        f["[object " + e + "]"] = e.toLowerCase()
                    }));
                    var $ = function(t) {
                        var e, n, r, i, o, a, s, l, c, u, f, d, p, h, m, v, g, y, b, w = "sizzle" + 1 * new Date,
                            x = t.document,
                            T = 0,
                            k = 0,
                            C = lt(),
                            E = lt(),
                            $ = lt(),
                            S = lt(),
                            O = function(t, e) {
                                return t === e && (f = !0), 0
                            },
                            A = {}.hasOwnProperty,
                            j = [],
                            N = j.pop,
                            D = j.push,
                            I = j.push,
                            L = j.slice,
                            P = function(t, e) {
                                for (var n = 0, r = t.length; n < r; n++)
                                    if (t[n] === e) return n;
                                return -1
                            },
                            _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            R = "[\\x20\\t\\r\\n\\f]",
                            H = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            M = "\\[[\\x20\\t\\r\\n\\f]*(" + H + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]",
                            q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                            z = new RegExp(R + "+", "g"),
                            F = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            B = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            U = new RegExp(R + "|>"),
                            X = new RegExp(q),
                            Y = new RegExp("^" + H + "$"),
                            V = {
                                ID: new RegExp("^#(" + H + ")"),
                                CLASS: new RegExp("^\\.(" + H + ")"),
                                TAG: new RegExp("^(" + H + "|[*])"),
                                ATTR: new RegExp("^" + M),
                                PSEUDO: new RegExp("^" + q),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                                bool: new RegExp("^(?:" + _ + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                            },
                            G = /HTML$/i,
                            Q = /^(?:input|select|textarea|button)$/i,
                            J = /^h\d$/i,
                            K = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            tt = /[+~]/,
                            et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                            nt = function(t, e) {
                                var n = "0x" + t.slice(1) - 65536;
                                return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                            },
                            rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            it = function(t, e) {
                                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                            },
                            ot = function() {
                                d()
                            },
                            at = wt((function(t) {
                                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            I.apply(j = L.call(x.childNodes), x.childNodes), j[x.childNodes.length].nodeType
                        } catch (t) {
                            I = {
                                apply: j.length ? function(t, e) {
                                    D.apply(t, L.call(e))
                                } : function(t, e) {
                                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                                    t.length = n - 1
                                }
                            }
                        }

                        function st(t, e, r, i) {
                            var o, s, c, u, f, h, g, y = e && e.ownerDocument,
                                x = e ? e.nodeType : 9;
                            if (r = r || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return r;
                            if (!i && (d(e), e = e || p, m)) {
                                if (11 !== x && (f = Z.exec(t)))
                                    if (o = f[1]) {
                                        if (9 === x) {
                                            if (!(c = e.getElementById(o))) return r;
                                            if (c.id === o) return r.push(c), r
                                        } else if (y && (c = y.getElementById(o)) && b(e, c) && c.id === o) return r.push(c), r
                                    } else {
                                        if (f[2]) return I.apply(r, e.getElementsByTagName(t)), r;
                                        if ((o = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return I.apply(r, e.getElementsByClassName(o)), r
                                    } if (n.qsa && !S[t + " "] && (!v || !v.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                                    if (g = t, y = e, 1 === x && (U.test(t) || B.test(t))) {
                                        for ((y = tt.test(t) && gt(e.parentNode) || e) === e && n.scope || ((u = e.getAttribute("id")) ? u = u.replace(rt, it) : e.setAttribute("id", u = w)), s = (h = a(t)).length; s--;) h[s] = (u ? "#" + u : ":scope") + " " + bt(h[s]);
                                        g = h.join(",")
                                    }
                                    try {
                                        return I.apply(r, y.querySelectorAll(g)), r
                                    } catch (e) {
                                        S(t, !0)
                                    } finally {
                                        u === w && e.removeAttribute("id")
                                    }
                                }
                            }
                            return l(t.replace(F, "$1"), e, r, i)
                        }

                        function lt() {
                            var t = [];
                            return function e(n, i) {
                                return t.push(n + " ") > r.cacheLength && delete e[t.shift()], e[n + " "] = i
                            }
                        }

                        function ct(t) {
                            return t[w] = !0, t
                        }

                        function ut(t) {
                            var e = p.createElement("fieldset");
                            try {
                                return !!t(e)
                            } catch (t) {
                                return !1
                            } finally {
                                e.parentNode && e.parentNode.removeChild(e), e = null
                            }
                        }

                        function ft(t, e) {
                            for (var n = t.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = e
                        }

                        function dt(t, e) {
                            var n = e && t,
                                r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                            if (r) return r;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === e) return -1;
                            return t ? 1 : -1
                        }

                        function pt(t) {
                            return function(e) {
                                return "input" === e.nodeName.toLowerCase() && e.type === t
                            }
                        }

                        function ht(t) {
                            return function(e) {
                                var n = e.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && e.type === t
                            }
                        }

                        function mt(t) {
                            return function(e) {
                                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
                            }
                        }

                        function vt(t) {
                            return ct((function(e) {
                                return e = +e, ct((function(n, r) {
                                    for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                }))
                            }))
                        }

                        function gt(t) {
                            return t && void 0 !== t.getElementsByTagName && t
                        }
                        for (e in n = st.support = {}, o = st.isXML = function(t) {
                                var e = t && t.namespaceURI,
                                    n = t && (t.ownerDocument || t).documentElement;
                                return !G.test(e || n && n.nodeName || "HTML")
                            }, d = st.setDocument = function(t) {
                                var e, i, a = t ? t.ownerDocument || t : x;
                                return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, m = !o(p), x != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ot, !1) : i.attachEvent && i.attachEvent("onunload", ot)), n.scope = ut((function(t) {
                                    return h.appendChild(t).appendChild(p.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                                })), n.attributes = ut((function(t) {
                                    return t.className = "i", !t.getAttribute("className")
                                })), n.getElementsByTagName = ut((function(t) {
                                    return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                                })), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ut((function(t) {
                                    return h.appendChild(t).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                                })), n.getById ? (r.filter.ID = function(t) {
                                    var e = t.replace(et, nt);
                                    return function(t) {
                                        return t.getAttribute("id") === e
                                    }
                                }, r.find.ID = function(t, e) {
                                    if (void 0 !== e.getElementById && m) {
                                        var n = e.getElementById(t);
                                        return n ? [n] : []
                                    }
                                }) : (r.filter.ID = function(t) {
                                    var e = t.replace(et, nt);
                                    return function(t) {
                                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                        return n && n.value === e
                                    }
                                }, r.find.ID = function(t, e) {
                                    if (void 0 !== e.getElementById && m) {
                                        var n, r, i, o = e.getElementById(t);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                            for (i = e.getElementsByName(t), r = 0; o = i[r++];)
                                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                                        }
                                        return []
                                    }
                                }), r.find.TAG = n.getElementsByTagName ? function(t, e) {
                                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                                } : function(t, e) {
                                    var n, r = [],
                                        i = 0,
                                        o = e.getElementsByTagName(t);
                                    if ("*" === t) {
                                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                        return r
                                    }
                                    return o
                                }, r.find.CLASS = n.getElementsByClassName && function(t, e) {
                                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                                }, g = [], v = [], (n.qsa = K.test(p.querySelectorAll)) && (ut((function(t) {
                                    var e;
                                    h.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + _ + ")"), t.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), (e = p.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]"), t.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                                })), ut((function(t) {
                                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var e = p.createElement("input");
                                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                                }))), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ut((function(t) {
                                    n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), g.push("!=", q)
                                })), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), e = K.test(h.compareDocumentPosition), b = e || K.test(h.contains) ? function(t, e) {
                                    var n = 9 === t.nodeType ? t.documentElement : t,
                                        r = e && e.parentNode;
                                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                                } : function(t, e) {
                                    if (e)
                                        for (; e = e.parentNode;)
                                            if (e === t) return !0;
                                    return !1
                                }, O = e ? function(t, e) {
                                    if (t === e) return f = !0, 0;
                                    var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                    return r || (1 & (r = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === r ? t == p || t.ownerDocument == x && b(x, t) ? -1 : e == p || e.ownerDocument == x && b(x, e) ? 1 : u ? P(u, t) - P(u, e) : 0 : 4 & r ? -1 : 1)
                                } : function(t, e) {
                                    if (t === e) return f = !0, 0;
                                    var n, r = 0,
                                        i = t.parentNode,
                                        o = e.parentNode,
                                        a = [t],
                                        s = [e];
                                    if (!i || !o) return t == p ? -1 : e == p ? 1 : i ? -1 : o ? 1 : u ? P(u, t) - P(u, e) : 0;
                                    if (i === o) return dt(t, e);
                                    for (n = t; n = n.parentNode;) a.unshift(n);
                                    for (n = e; n = n.parentNode;) s.unshift(n);
                                    for (; a[r] === s[r];) r++;
                                    return r ? dt(a[r], s[r]) : a[r] == x ? -1 : s[r] == x ? 1 : 0
                                }, p) : p
                            }, st.matches = function(t, e) {
                                return st(t, null, null, e)
                            }, st.matchesSelector = function(t, e) {
                                if (d(t), n.matchesSelector && m && !S[e + " "] && (!g || !g.test(e)) && (!v || !v.test(e))) try {
                                    var r = y.call(t, e);
                                    if (r || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                                } catch (t) {
                                    S(e, !0)
                                }
                                return st(e, p, null, [t]).length > 0
                            }, st.contains = function(t, e) {
                                return (t.ownerDocument || t) != p && d(t), b(t, e)
                            }, st.attr = function(t, e) {
                                (t.ownerDocument || t) != p && d(t);
                                var i = r.attrHandle[e.toLowerCase()],
                                    o = i && A.call(r.attrHandle, e.toLowerCase()) ? i(t, e, !m) : void 0;
                                return void 0 !== o ? o : n.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                            }, st.escape = function(t) {
                                return (t + "").replace(rt, it)
                            }, st.error = function(t) {
                                throw new Error("Syntax error, unrecognized expression: " + t)
                            }, st.uniqueSort = function(t) {
                                var e, r = [],
                                    i = 0,
                                    o = 0;
                                if (f = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(O), f) {
                                    for (; e = t[o++];) e === t[o] && (i = r.push(o));
                                    for (; i--;) t.splice(r[i], 1)
                                }
                                return u = null, t
                            }, i = st.getText = function(t) {
                                var e, n = "",
                                    r = 0,
                                    o = t.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof t.textContent) return t.textContent;
                                        for (t = t.firstChild; t; t = t.nextSibling) n += i(t)
                                    } else if (3 === o || 4 === o) return t.nodeValue
                                } else
                                    for (; e = t[r++];) n += i(e);
                                return n
                            }, r = st.selectors = {
                                cacheLength: 50,
                                createPseudo: ct,
                                match: V,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(t) {
                                        return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                    },
                                    CHILD: function(t) {
                                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                                    },
                                    PSEUDO: function(t) {
                                        var e, n = !t[6] && t[2];
                                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(t) {
                                        var e = t.replace(et, nt).toLowerCase();
                                        return "*" === t ? function() {
                                            return !0
                                        } : function(t) {
                                            return t.nodeName && t.nodeName.toLowerCase() === e
                                        }
                                    },
                                    CLASS: function(t) {
                                        var e = C[t + " "];
                                        return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + R + "|$)")) && C(t, (function(t) {
                                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(t, e, n) {
                                        return function(r) {
                                            var i = st.attr(r, t);
                                            return null == i ? "!=" === e : !e || (i += "", "=" === e ? i === n : "!=" === e ? i !== n : "^=" === e ? n && 0 === i.indexOf(n) : "*=" === e ? n && i.indexOf(n) > -1 : "$=" === e ? n && i.slice(-n.length) === n : "~=" === e ? (" " + i.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === e && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function(t, e, n, r, i) {
                                        var o = "nth" !== t.slice(0, 3),
                                            a = "last" !== t.slice(-4),
                                            s = "of-type" === e;
                                        return 1 === r && 0 === i ? function(t) {
                                            return !!t.parentNode
                                        } : function(e, n, l) {
                                            var c, u, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                                                v = e.parentNode,
                                                g = s && e.nodeName.toLowerCase(),
                                                y = !l && !s,
                                                b = !1;
                                            if (v) {
                                                if (o) {
                                                    for (; m;) {
                                                        for (d = e; d = d[m];)
                                                            if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                                        h = m = "only" === t && !h && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                                    for (b = (p = (c = (u = (f = (d = v)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === T && c[1]) && c[2], d = p && v.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();)
                                                        if (1 === d.nodeType && ++b && d === e) {
                                                            u[t] = [T, p, b];
                                                            break
                                                        }
                                                } else if (y && (b = p = (c = (u = (f = (d = e)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === T && c[1]), !1 === b)
                                                    for (;
                                                        (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [T, b]), d !== e)););
                                                return (b -= i) === r || b % r == 0 && b / r >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(t, e) {
                                        var n, i = r.pseudos[t] || r.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                                        return i[w] ? i(e) : i.length > 1 ? (n = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, n) {
                                            for (var r, o = i(t, e), a = o.length; a--;) t[r = P(t, o[a])] = !(n[r] = o[a])
                                        })) : function(t) {
                                            return i(t, 0, n)
                                        }) : i
                                    }
                                },
                                pseudos: {
                                    not: ct((function(t) {
                                        var e = [],
                                            n = [],
                                            r = s(t.replace(F, "$1"));
                                        return r[w] ? ct((function(t, e, n, i) {
                                            for (var o, a = r(t, null, i, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                                        })) : function(t, i, o) {
                                            return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                                        }
                                    })),
                                    has: ct((function(t) {
                                        return function(e) {
                                            return st(t, e).length > 0
                                        }
                                    })),
                                    contains: ct((function(t) {
                                        return t = t.replace(et, nt),
                                            function(e) {
                                                return (e.textContent || i(e)).indexOf(t) > -1
                                            }
                                    })),
                                    lang: ct((function(t) {
                                        return Y.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                            function(e) {
                                                var n;
                                                do {
                                                    if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function(e) {
                                        var n = t.location && t.location.hash;
                                        return n && n.slice(1) === e.id
                                    },
                                    root: function(t) {
                                        return t === h
                                    },
                                    focus: function(t) {
                                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                    },
                                    enabled: mt(!1),
                                    disabled: mt(!0),
                                    checked: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                                    },
                                    selected: function(t) {
                                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                    },
                                    empty: function(t) {
                                        for (t = t.firstChild; t; t = t.nextSibling)
                                            if (t.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(t) {
                                        return !r.pseudos.empty(t)
                                    },
                                    header: function(t) {
                                        return J.test(t.nodeName)
                                    },
                                    input: function(t) {
                                        return Q.test(t.nodeName)
                                    },
                                    button: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return "input" === e && "button" === t.type || "button" === e
                                    },
                                    text: function(t) {
                                        var e;
                                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                    },
                                    first: vt((function() {
                                        return [0]
                                    })),
                                    last: vt((function(t, e) {
                                        return [e - 1]
                                    })),
                                    eq: vt((function(t, e, n) {
                                        return [n < 0 ? n + e : n]
                                    })),
                                    even: vt((function(t, e) {
                                        for (var n = 0; n < e; n += 2) t.push(n);
                                        return t
                                    })),
                                    odd: vt((function(t, e) {
                                        for (var n = 1; n < e; n += 2) t.push(n);
                                        return t
                                    })),
                                    lt: vt((function(t, e, n) {
                                        for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0;) t.push(r);
                                        return t
                                    })),
                                    gt: vt((function(t, e, n) {
                                        for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                                        return t
                                    }))
                                }
                            }, r.pseudos.nth = r.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) r.pseudos[e] = pt(e);
                        for (e in {
                                submit: !0,
                                reset: !0
                            }) r.pseudos[e] = ht(e);

                        function yt() {}

                        function bt(t) {
                            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                            return r
                        }

                        function wt(t, e, n) {
                            var r = e.dir,
                                i = e.next,
                                o = i || r,
                                a = n && "parentNode" === o,
                                s = k++;
                            return e.first ? function(e, n, i) {
                                for (; e = e[r];)
                                    if (1 === e.nodeType || a) return t(e, n, i);
                                return !1
                            } : function(e, n, l) {
                                var c, u, f, d = [T, s];
                                if (l) {
                                    for (; e = e[r];)
                                        if ((1 === e.nodeType || a) && t(e, n, l)) return !0
                                } else
                                    for (; e = e[r];)
                                        if (1 === e.nodeType || a)
                                            if (u = (f = e[w] || (e[w] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase()) e = e[r] || e;
                                            else {
                                                if ((c = u[o]) && c[0] === T && c[1] === s) return d[2] = c[2];
                                                if (u[o] = d, d[2] = t(e, n, l)) return !0
                                            } return !1
                            }
                        }

                        function xt(t) {
                            return t.length > 1 ? function(e, n, r) {
                                for (var i = t.length; i--;)
                                    if (!t[i](e, n, r)) return !1;
                                return !0
                            } : t[0]
                        }

                        function Tt(t, e, n, r, i) {
                            for (var o, a = [], s = 0, l = t.length, c = null != e; s < l; s++)(o = t[s]) && (n && !n(o, r, i) || (a.push(o), c && e.push(s)));
                            return a
                        }

                        function kt(t, e, n, r, i, o) {
                            return r && !r[w] && (r = kt(r)), i && !i[w] && (i = kt(i, o)), ct((function(o, a, s, l) {
                                var c, u, f, d = [],
                                    p = [],
                                    h = a.length,
                                    m = o || function(t, e, n) {
                                        for (var r = 0, i = e.length; r < i; r++) st(t, e[r], n);
                                        return n
                                    }(e || "*", s.nodeType ? [s] : s, []),
                                    v = !t || !o && e ? m : Tt(m, d, t, s, l),
                                    g = n ? i || (o ? t : h || r) ? [] : a : v;
                                if (n && n(v, g, s, l), r)
                                    for (c = Tt(g, p), r(c, [], s, l), u = c.length; u--;)(f = c[u]) && (g[p[u]] = !(v[p[u]] = f));
                                if (o) {
                                    if (i || t) {
                                        if (i) {
                                            for (c = [], u = g.length; u--;)(f = g[u]) && c.push(v[u] = f);
                                            i(null, g = [], c, l)
                                        }
                                        for (u = g.length; u--;)(f = g[u]) && (c = i ? P(o, f) : d[u]) > -1 && (o[c] = !(a[c] = f))
                                    }
                                } else g = Tt(g === a ? g.splice(h, g.length) : g), i ? i(null, a, g, l) : I.apply(a, g)
                            }))
                        }

                        function Ct(t) {
                            for (var e, n, i, o = t.length, a = r.relative[t[0].type], s = a || r.relative[" "], l = a ? 1 : 0, u = wt((function(t) {
                                    return t === e
                                }), s, !0), f = wt((function(t) {
                                    return P(e, t) > -1
                                }), s, !0), d = [function(t, n, r) {
                                    var i = !a && (r || n !== c) || ((e = n).nodeType ? u(t, n, r) : f(t, n, r));
                                    return e = null, i
                                }]; l < o; l++)
                                if (n = r.relative[t[l].type]) d = [wt(xt(d), n)];
                                else {
                                    if ((n = r.filter[t[l].type].apply(null, t[l].matches))[w]) {
                                        for (i = ++l; i < o && !r.relative[t[i].type]; i++);
                                        return kt(l > 1 && xt(d), l > 1 && bt(t.slice(0, l - 1).concat({
                                            value: " " === t[l - 2].type ? "*" : ""
                                        })).replace(F, "$1"), n, l < i && Ct(t.slice(l, i)), i < o && Ct(t = t.slice(i)), i < o && bt(t))
                                    }
                                    d.push(n)
                                } return xt(d)
                        }
                        return yt.prototype = r.filters = r.pseudos, r.setFilters = new yt, a = st.tokenize = function(t, e) {
                            var n, i, o, a, s, l, c, u = E[t + " "];
                            if (u) return e ? 0 : u.slice(0);
                            for (s = t, l = [], c = r.preFilter; s;) {
                                for (a in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = B.exec(s)) && (n = i.shift(), o.push({
                                        value: n,
                                        type: i[0].replace(F, " ")
                                    }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                                    value: n,
                                    type: a,
                                    matches: i
                                }), s = s.slice(n.length));
                                if (!n) break
                            }
                            return e ? s.length : s ? st.error(t) : E(t, l).slice(0)
                        }, s = st.compile = function(t, e) {
                            var n, i = [],
                                o = [],
                                s = $[t + " "];
                            if (!s) {
                                for (e || (e = a(t)), n = e.length; n--;)(s = Ct(e[n]))[w] ? i.push(s) : o.push(s);
                                s = $(t, function(t, e) {
                                    var n = e.length > 0,
                                        i = t.length > 0,
                                        o = function(o, a, s, l, u) {
                                            var f, h, v, g = 0,
                                                y = "0",
                                                b = o && [],
                                                w = [],
                                                x = c,
                                                k = o || i && r.find.TAG("*", u),
                                                C = T += null == x ? 1 : Math.random() || .1,
                                                E = k.length;
                                            for (u && (c = a == p || a || u); y !== E && null != (f = k[y]); y++) {
                                                if (i && f) {
                                                    for (h = 0, a || f.ownerDocument == p || (d(f), s = !m); v = t[h++];)
                                                        if (v(f, a || p, s)) {
                                                            l.push(f);
                                                            break
                                                        } u && (T = C)
                                                }
                                                n && ((f = !v && f) && g--, o && b.push(f))
                                            }
                                            if (g += y, n && y !== g) {
                                                for (h = 0; v = e[h++];) v(b, w, a, s);
                                                if (o) {
                                                    if (g > 0)
                                                        for (; y--;) b[y] || w[y] || (w[y] = N.call(l));
                                                    w = Tt(w)
                                                }
                                                I.apply(l, w), u && !o && w.length > 0 && g + e.length > 1 && st.uniqueSort(l)
                                            }
                                            return u && (T = C, c = x), b
                                        };
                                    return n ? ct(o) : o
                                }(o, i)), s.selector = t
                            }
                            return s
                        }, l = st.select = function(t, e, n, i) {
                            var o, l, c, u, f, d = "function" == typeof t && t,
                                p = !i && a(t = d.selector || t);
                            if (n = n || [], 1 === p.length) {
                                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && r.relative[l[1].type]) {
                                    if (!(e = (r.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                                }
                                for (o = V.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !r.relative[u = c.type]);)
                                    if ((f = r.find[u]) && (i = f(c.matches[0].replace(et, nt), tt.test(l[0].type) && gt(e.parentNode) || e))) {
                                        if (l.splice(o, 1), !(t = i.length && bt(l))) return I.apply(n, i), n;
                                        break
                                    }
                            }
                            return (d || s(t, p))(i, e, !m, n, !e || tt.test(t) && gt(e.parentNode) || e), n
                        }, n.sortStable = w.split("").sort(O).join("") === w, n.detectDuplicates = !!f, d(), n.sortDetached = ut((function(t) {
                            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
                        })), ut((function(t) {
                            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                        })) || ft("type|href|height|width", (function(t, e, n) {
                            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                        })), n.attributes && ut((function(t) {
                            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                        })) || ft("value", (function(t, e, n) {
                            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                        })), ut((function(t) {
                            return null == t.getAttribute("disabled")
                        })) || ft(_, (function(t, e, n) {
                            var r;
                            if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                        })), st
                    }(r);
                    C.find = $, C.expr = $.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = $.uniqueSort, C.text = $.getText, C.isXMLDoc = $.isXML, C.contains = $.contains, C.escapeSelector = $.escape;
                    var S = function(t, e, n) {
                            for (var r = [], i = void 0 !== n;
                                (t = t[e]) && 9 !== t.nodeType;)
                                if (1 === t.nodeType) {
                                    if (i && C(t).is(n)) break;
                                    r.push(t)
                                } return r
                        },
                        O = function(t, e) {
                            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                            return n
                        },
                        A = C.expr.match.needsContext;

                    function j(t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                    }
                    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                    function D(t, e, n) {
                        return g(e) ? C.grep(t, (function(t, r) {
                            return !!e.call(t, r, t) !== n
                        })) : e.nodeType ? C.grep(t, (function(t) {
                            return t === e !== n
                        })) : "string" != typeof e ? C.grep(t, (function(t) {
                            return u.call(e, t) > -1 !== n
                        })) : C.filter(e, t, n)
                    }
                    C.filter = function(t, e, n) {
                        var r = e[0];
                        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? C.find.matchesSelector(r, t) ? [r] : [] : C.find.matches(t, C.grep(e, (function(t) {
                            return 1 === t.nodeType
                        })))
                    }, C.fn.extend({
                        find: function(t) {
                            var e, n, r = this.length,
                                i = this;
                            if ("string" != typeof t) return this.pushStack(C(t).filter((function() {
                                for (e = 0; e < r; e++)
                                    if (C.contains(i[e], this)) return !0
                            })));
                            for (n = this.pushStack([]), e = 0; e < r; e++) C.find(t, i[e], n);
                            return r > 1 ? C.uniqueSort(n) : n
                        },
                        filter: function(t) {
                            return this.pushStack(D(this, t || [], !1))
                        },
                        not: function(t) {
                            return this.pushStack(D(this, t || [], !0))
                        },
                        is: function(t) {
                            return !!D(this, "string" == typeof t && A.test(t) ? C(t) : t || [], !1).length
                        }
                    });
                    var I, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (C.fn.init = function(t, e, n) {
                        var r, i;
                        if (!t) return this;
                        if (n = n || I, "string" == typeof t) {
                            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : L.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                            if (r[1]) {
                                if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : b, !0)), N.test(r[1]) && C.isPlainObject(e))
                                    for (r in e) g(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                                return this
                            }
                            return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                        }
                        return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== n.ready ? n.ready(t) : t(C) : C.makeArray(t, this)
                    }).prototype = C.fn, I = C(b);
                    var P = /^(?:parents|prev(?:Until|All))/,
                        _ = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function R(t, e) {
                        for (;
                            (t = t[e]) && 1 !== t.nodeType;);
                        return t
                    }
                    C.fn.extend({
                        has: function(t) {
                            var e = C(t, this),
                                n = e.length;
                            return this.filter((function() {
                                for (var t = 0; t < n; t++)
                                    if (C.contains(this, e[t])) return !0
                            }))
                        },
                        closest: function(t, e) {
                            var n, r = 0,
                                i = this.length,
                                o = [],
                                a = "string" != typeof t && C(t);
                            if (!A.test(t))
                                for (; r < i; r++)
                                    for (n = this[r]; n && n !== e; n = n.parentNode)
                                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, t))) {
                                            o.push(n);
                                            break
                                        } return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
                        },
                        index: function(t) {
                            return t ? "string" == typeof t ? u.call(C(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(t, e) {
                            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
                        },
                        addBack: function(t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                        }
                    }), C.each({
                        parent: function(t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null
                        },
                        parents: function(t) {
                            return S(t, "parentNode")
                        },
                        parentsUntil: function(t, e, n) {
                            return S(t, "parentNode", n)
                        },
                        next: function(t) {
                            return R(t, "nextSibling")
                        },
                        prev: function(t) {
                            return R(t, "previousSibling")
                        },
                        nextAll: function(t) {
                            return S(t, "nextSibling")
                        },
                        prevAll: function(t) {
                            return S(t, "previousSibling")
                        },
                        nextUntil: function(t, e, n) {
                            return S(t, "nextSibling", n)
                        },
                        prevUntil: function(t, e, n) {
                            return S(t, "previousSibling", n)
                        },
                        siblings: function(t) {
                            return O((t.parentNode || {}).firstChild, t)
                        },
                        children: function(t) {
                            return O(t.firstChild)
                        },
                        contents: function(t) {
                            return null != t.contentDocument && a(t.contentDocument) ? t.contentDocument : (j(t, "template") && (t = t.content || t), C.merge([], t.childNodes))
                        }
                    }, (function(t, e) {
                        C.fn[t] = function(n, r) {
                            var i = C.map(this, e, n);
                            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (_[t] || C.uniqueSort(i), P.test(t) && i.reverse()), this.pushStack(i)
                        }
                    }));
                    var H = /[^\x20\t\r\n\f]+/g;

                    function M(t) {
                        return t
                    }

                    function q(t) {
                        throw t
                    }

                    function z(t, e, n, r) {
                        var i;
                        try {
                            t && g(i = t.promise) ? i.call(t).done(e).fail(n) : t && g(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [t].slice(r))
                        } catch (t) {
                            n.apply(void 0, [t])
                        }
                    }
                    C.Callbacks = function(t) {
                        t = "string" == typeof t ? function(t) {
                            var e = {};
                            return C.each(t.match(H) || [], (function(t, n) {
                                e[n] = !0
                            })), e
                        }(t) : C.extend({}, t);
                        var e, n, r, i, o = [],
                            a = [],
                            s = -1,
                            l = function() {
                                for (i = i || t.once, r = e = !0; a.length; s = -1)
                                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && (s = o.length, n = !1);
                                t.memory || (n = !1), e = !1, i && (o = n ? [] : "")
                            },
                            c = {
                                add: function() {
                                    return o && (n && !e && (s = o.length - 1, a.push(n)), function e(n) {
                                        C.each(n, (function(n, r) {
                                            g(r) ? t.unique && c.has(r) || o.push(r) : r && r.length && "string" !== T(r) && e(r)
                                        }))
                                    }(arguments), n && !e && l()), this
                                },
                                remove: function() {
                                    return C.each(arguments, (function(t, e) {
                                        for (var n;
                                            (n = C.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                                    })), this
                                },
                                has: function(t) {
                                    return t ? C.inArray(t, o) > -1 : o.length > 0
                                },
                                empty: function() {
                                    return o && (o = []), this
                                },
                                disable: function() {
                                    return i = a = [], o = n = "", this
                                },
                                disabled: function() {
                                    return !o
                                },
                                lock: function() {
                                    return i = a = [], n || e || (o = n = ""), this
                                },
                                locked: function() {
                                    return !!i
                                },
                                fireWith: function(t, n) {
                                    return i || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || l()), this
                                },
                                fire: function() {
                                    return c.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!r
                                }
                            };
                        return c
                    }, C.extend({
                        Deferred: function(t) {
                            var e = [
                                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                                ],
                                n = "pending",
                                i = {
                                    state: function() {
                                        return n
                                    },
                                    always: function() {
                                        return o.done(arguments).fail(arguments), this
                                    },
                                    catch: function(t) {
                                        return i.then(null, t)
                                    },
                                    pipe: function() {
                                        var t = arguments;
                                        return C.Deferred((function(n) {
                                            C.each(e, (function(e, r) {
                                                var i = g(t[r[4]]) && t[r[4]];
                                                o[r[1]]((function() {
                                                    var t = i && i.apply(this, arguments);
                                                    t && g(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [t] : arguments)
                                                }))
                                            })), t = null
                                        })).promise()
                                    },
                                    then: function(t, n, i) {
                                        var o = 0;

                                        function a(t, e, n, i) {
                                            return function() {
                                                var s = this,
                                                    l = arguments,
                                                    c = function() {
                                                        var r, c;
                                                        if (!(t < o)) {
                                                            if ((r = n.apply(s, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                            c = r && ("object" == typeof r || "function" == typeof r) && r.then, g(c) ? i ? c.call(r, a(o, e, M, i), a(o, e, q, i)) : (o++, c.call(r, a(o, e, M, i), a(o, e, q, i), a(o, e, M, e.notifyWith))) : (n !== M && (s = void 0, l = [r]), (i || e.resolveWith)(s, l))
                                                        }
                                                    },
                                                    u = i ? c : function() {
                                                        try {
                                                            c()
                                                        } catch (r) {
                                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(r, u.stackTrace), t + 1 >= o && (n !== q && (s = void 0, l = [r]), e.rejectWith(s, l))
                                                        }
                                                    };
                                                t ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()), r.setTimeout(u))
                                            }
                                        }
                                        return C.Deferred((function(r) {
                                            e[0][3].add(a(0, r, g(i) ? i : M, r.notifyWith)), e[1][3].add(a(0, r, g(t) ? t : M)), e[2][3].add(a(0, r, g(n) ? n : q))
                                        })).promise()
                                    },
                                    promise: function(t) {
                                        return null != t ? C.extend(t, i) : i
                                    }
                                },
                                o = {};
                            return C.each(e, (function(t, r) {
                                var a = r[2],
                                    s = r[5];
                                i[r[1]] = a.add, s && a.add((function() {
                                    n = s
                                }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(r[3].fire), o[r[0]] = function() {
                                    return o[r[0] + "With"](this === o ? void 0 : this, arguments), this
                                }, o[r[0] + "With"] = a.fireWith
                            })), i.promise(o), t && t.call(o, o), o
                        },
                        when: function(t) {
                            var e = arguments.length,
                                n = e,
                                r = Array(n),
                                i = s.call(arguments),
                                o = C.Deferred(),
                                a = function(t) {
                                    return function(n) {
                                        r[t] = this, i[t] = arguments.length > 1 ? s.call(arguments) : n, --e || o.resolveWith(r, i)
                                    }
                                };
                            if (e <= 1 && (z(t, o.done(a(n)).resolve, o.reject, !e), "pending" === o.state() || g(i[n] && i[n].then))) return o.then();
                            for (; n--;) z(i[n], a(n), o.reject);
                            return o.promise()
                        }
                    });
                    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    C.Deferred.exceptionHook = function(t, e) {
                        r.console && r.console.warn && t && F.test(t.name) && r.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
                    }, C.readyException = function(t) {
                        r.setTimeout((function() {
                            throw t
                        }))
                    };
                    var W = C.Deferred();

                    function B() {
                        b.removeEventListener("DOMContentLoaded", B), r.removeEventListener("load", B), C.ready()
                    }
                    C.fn.ready = function(t) {
                        return W.then(t).catch((function(t) {
                            C.readyException(t)
                        })), this
                    }, C.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(t) {
                            (!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== t && --C.readyWait > 0 || W.resolveWith(b, [C]))
                        }
                    }), C.ready.then = W.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? r.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", B), r.addEventListener("load", B));
                    var U = function(t, e, n, r, i, o, a) {
                            var s = 0,
                                l = t.length,
                                c = null == n;
                            if ("object" === T(n))
                                for (s in i = !0, n) U(t, e, s, n[s], !0, o, a);
                            else if (void 0 !== r && (i = !0, g(r) || (a = !0), c && (a ? (e.call(t, r), e = null) : (c = e, e = function(t, e, n) {
                                    return c.call(C(t), n)
                                })), e))
                                for (; s < l; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                            return i ? t : c ? e.call(t) : l ? e(t[0], n) : o
                        },
                        X = /^-ms-/,
                        Y = /-([a-z])/g;

                    function V(t, e) {
                        return e.toUpperCase()
                    }

                    function G(t) {
                        return t.replace(X, "ms-").replace(Y, V)
                    }
                    var Q = function(t) {
                        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                    };

                    function J() {
                        this.expando = C.expando + J.uid++
                    }
                    J.uid = 1, J.prototype = {
                        cache: function(t) {
                            var e = t[this.expando];
                            return e || (e = {}, Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                                value: e,
                                configurable: !0
                            }))), e
                        },
                        set: function(t, e, n) {
                            var r, i = this.cache(t);
                            if ("string" == typeof e) i[G(e)] = n;
                            else
                                for (r in e) i[G(r)] = e[r];
                            return i
                        },
                        get: function(t, e) {
                            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
                        },
                        access: function(t, e, n) {
                            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
                        },
                        remove: function(t, e) {
                            var n, r = t[this.expando];
                            if (void 0 !== r) {
                                if (void 0 !== e) {
                                    n = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in r ? [e] : e.match(H) || []).length;
                                    for (; n--;) delete r[e[n]]
                                }(void 0 === e || C.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                            }
                        },
                        hasData: function(t) {
                            var e = t[this.expando];
                            return void 0 !== e && !C.isEmptyObject(e)
                        }
                    };
                    var K = new J,
                        Z = new J,
                        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        et = /[A-Z]/g;

                    function nt(t, e, n) {
                        var r;
                        if (void 0 === n && 1 === t.nodeType)
                            if (r = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(r))) {
                                try {
                                    n = function(t) {
                                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                                    }(n)
                                } catch (t) {}
                                Z.set(t, e, n)
                            } else n = void 0;
                        return n
                    }
                    C.extend({
                        hasData: function(t) {
                            return Z.hasData(t) || K.hasData(t)
                        },
                        data: function(t, e, n) {
                            return Z.access(t, e, n)
                        },
                        removeData: function(t, e) {
                            Z.remove(t, e)
                        },
                        _data: function(t, e, n) {
                            return K.access(t, e, n)
                        },
                        _removeData: function(t, e) {
                            K.remove(t, e)
                        }
                    }), C.fn.extend({
                        data: function(t, e) {
                            var n, r, i, o = this[0],
                                a = o && o.attributes;
                            if (void 0 === t) {
                                if (this.length && (i = Z.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), nt(o, r, i[r]));
                                    K.set(o, "hasDataAttrs", !0)
                                }
                                return i
                            }
                            return "object" == typeof t ? this.each((function() {
                                Z.set(this, t)
                            })) : U(this, (function(e) {
                                var n;
                                if (o && void 0 === e) return void 0 !== (n = Z.get(o, t)) || void 0 !== (n = nt(o, t)) ? n : void 0;
                                this.each((function() {
                                    Z.set(this, t, e)
                                }))
                            }), null, e, arguments.length > 1, null, !0)
                        },
                        removeData: function(t) {
                            return this.each((function() {
                                Z.remove(this, t)
                            }))
                        }
                    }), C.extend({
                        queue: function(t, e, n) {
                            var r;
                            if (t) return e = (e || "fx") + "queue", r = K.get(t, e), n && (!r || Array.isArray(n) ? r = K.access(t, e, C.makeArray(n)) : r.push(n)), r || []
                        },
                        dequeue: function(t, e) {
                            e = e || "fx";
                            var n = C.queue(t, e),
                                r = n.length,
                                i = n.shift(),
                                o = C._queueHooks(t, e);
                            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, (function() {
                                C.dequeue(t, e)
                            }), o)), !r && o && o.empty.fire()
                        },
                        _queueHooks: function(t, e) {
                            var n = e + "queueHooks";
                            return K.get(t, n) || K.access(t, n, {
                                empty: C.Callbacks("once memory").add((function() {
                                    K.remove(t, [e + "queue", n])
                                }))
                            })
                        }
                    }), C.fn.extend({
                        queue: function(t, e) {
                            var n = 2;
                            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? C.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                                var n = C.queue(this, t, e);
                                C._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && C.dequeue(this, t)
                            }))
                        },
                        dequeue: function(t) {
                            return this.each((function() {
                                C.dequeue(this, t)
                            }))
                        },
                        clearQueue: function(t) {
                            return this.queue(t || "fx", [])
                        },
                        promise: function(t, e) {
                            var n, r = 1,
                                i = C.Deferred(),
                                o = this,
                                a = this.length,
                                s = function() {
                                    --r || i.resolveWith(o, [o])
                                };
                            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = K.get(o[a], t + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                            return s(), i.promise(e)
                        }
                    });
                    var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        it = new RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"),
                        ot = ["Top", "Right", "Bottom", "Left"],
                        at = b.documentElement,
                        st = function(t) {
                            return C.contains(t.ownerDocument, t)
                        },
                        lt = {
                            composed: !0
                        };
                    at.getRootNode && (st = function(t) {
                        return C.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument
                    });
                    var ct = function(t, e) {
                        return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === C.css(t, "display")
                    };

                    function ut(t, e, n, r) {
                        var i, o, a = 20,
                            s = r ? function() {
                                return r.cur()
                            } : function() {
                                return C.css(t, e, "")
                            },
                            l = s(),
                            c = n && n[3] || (C.cssNumber[e] ? "" : "px"),
                            u = t.nodeType && (C.cssNumber[e] || "px" !== c && +l) && it.exec(C.css(t, e));
                        if (u && u[3] !== c) {
                            for (l /= 2, c = c || u[3], u = +l || 1; a--;) C.style(t, e, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
                            u *= 2, C.style(t, e, u + c), n = n || []
                        }
                        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
                    }
                    var ft = {};

                    function dt(t) {
                        var e, n = t.ownerDocument,
                            r = t.nodeName,
                            i = ft[r];
                        return i || (e = n.body.appendChild(n.createElement(r)), i = C.css(e, "display"), e.parentNode.removeChild(e), "none" === i && (i = "block"), ft[r] = i, i)
                    }

                    function pt(t, e) {
                        for (var n, r, i = [], o = 0, a = t.length; o < a; o++)(r = t[o]).style && (n = r.style.display, e ? ("none" === n && (i[o] = K.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ct(r) && (i[o] = dt(r))) : "none" !== n && (i[o] = "none", K.set(r, "display", n)));
                        for (o = 0; o < a; o++) null != i[o] && (t[o].style.display = i[o]);
                        return t
                    }
                    C.fn.extend({
                        show: function() {
                            return pt(this, !0)
                        },
                        hide: function() {
                            return pt(this)
                        },
                        toggle: function(t) {
                            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                                ct(this) ? C(this).show() : C(this).hide()
                            }))
                        }
                    });
                    var ht, mt, vt = /^(?:checkbox|radio)$/i,
                        gt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        yt = /^$|^module$|\/(?:java|ecma)script/i;
                    ht = b.createDocumentFragment().appendChild(b.createElement("div")), (mt = b.createElement("input")).setAttribute("type", "radio"), mt.setAttribute("checked", "checked"), mt.setAttribute("name", "t"), ht.appendChild(mt), v.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue, ht.innerHTML = "<option></option>", v.option = !!ht.lastChild;
                    var bt = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                    function wt(t, e) {
                        var n;
                        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && j(t, e) ? C.merge([t], n) : n
                    }

                    function xt(t, e) {
                        for (var n = 0, r = t.length; n < r; n++) K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"))
                    }
                    bt.tbody = bt.tfoot = bt.colgroup = bt.caption = bt.thead, bt.th = bt.td, v.option || (bt.optgroup = bt.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var Tt = /<|&#?\w+;/;

                    function kt(t, e, n, r, i) {
                        for (var o, a, s, l, c, u, f = e.createDocumentFragment(), d = [], p = 0, h = t.length; p < h; p++)
                            if ((o = t[p]) || 0 === o)
                                if ("object" === T(o)) C.merge(d, o.nodeType ? [o] : o);
                                else if (Tt.test(o)) {
                            for (a = a || f.appendChild(e.createElement("div")), s = (gt.exec(o) || ["", ""])[1].toLowerCase(), l = bt[s] || bt._default, a.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
                            C.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
                        } else d.push(e.createTextNode(o));
                        for (f.textContent = "", p = 0; o = d[p++];)
                            if (r && C.inArray(o, r) > -1) i && i.push(o);
                            else if (c = st(o), a = wt(f.appendChild(o), "script"), c && xt(a), n)
                            for (u = 0; o = a[u++];) yt.test(o.type || "") && n.push(o);
                        return f
                    }
                    var Ct = /^([^.]*)(?:\.(.+)|)/;

                    function Et() {
                        return !0
                    }

                    function $t() {
                        return !1
                    }

                    function St(t, e) {
                        return t === function() {
                            try {
                                return b.activeElement
                            } catch (t) {}
                        }() == ("focus" === e)
                    }

                    function Ot(t, e, n, r, i, o) {
                        var a, s;
                        if ("object" == typeof e) {
                            for (s in "string" != typeof n && (r = r || n, n = void 0), e) Ot(t, s, n, r, e[s], o);
                            return t
                        }
                        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = $t;
                        else if (!i) return t;
                        return 1 === o && (a = i, i = function(t) {
                            return C().off(t), a.apply(this, arguments)
                        }, i.guid = a.guid || (a.guid = C.guid++)), t.each((function() {
                            C.event.add(this, e, i, r, n)
                        }))
                    }

                    function At(t, e, n) {
                        n ? (K.set(t, e, !1), C.event.add(t, e, {
                            namespace: !1,
                            handler: function(t) {
                                var r, i, o = K.get(this, e);
                                if (1 & t.isTrigger && this[e]) {
                                    if (o.length)(C.event.special[e] || {}).delegateType && t.stopPropagation();
                                    else if (o = s.call(arguments), K.set(this, e, o), r = n(this, e), this[e](), o !== (i = K.get(this, e)) || r ? K.set(this, e, !1) : i = {}, o !== i) return t.stopImmediatePropagation(), t.preventDefault(), i && i.value
                                } else o.length && (K.set(this, e, {
                                    value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                                }), t.stopImmediatePropagation())
                            }
                        })) : void 0 === K.get(t, e) && C.event.add(t, e, Et)
                    }
                    C.event = {
                        global: {},
                        add: function(t, e, n, r, i) {
                            var o, a, s, l, c, u, f, d, p, h, m, v = K.get(t);
                            if (Q(t))
                                for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(at, i), n.guid || (n.guid = C.guid++), (l = v.events) || (l = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                                    }), c = (e = (e || "").match(H) || [""]).length; c--;) p = m = (s = Ct.exec(e[c]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = C.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = C.event.special[p] || {}, u = C.extend({
                                    type: p,
                                    origType: m,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && C.expr.match.needsContext.test(i),
                                    namespace: h.join(".")
                                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, u) : d.push(u), C.event.global[p] = !0)
                        },
                        remove: function(t, e, n, r, i) {
                            var o, a, s, l, c, u, f, d, p, h, m, v = K.hasData(t) && K.get(t);
                            if (v && (l = v.events)) {
                                for (c = (e = (e || "").match(H) || [""]).length; c--;)
                                    if (p = m = (s = Ct.exec(e[c]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                        for (f = C.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) u = d[o], !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(t, u));
                                        a && !d.length && (f.teardown && !1 !== f.teardown.call(t, h, v.handle) || C.removeEvent(t, p, v.handle), delete l[p])
                                    } else
                                        for (p in l) C.event.remove(t, p + e[c], n, r, !0);
                                C.isEmptyObject(l) && K.remove(t, "handle events")
                            }
                        },
                        dispatch: function(t) {
                            var e, n, r, i, o, a, s = new Array(arguments.length),
                                l = C.event.fix(t),
                                c = (K.get(this, "events") || Object.create(null))[l.type] || [],
                                u = C.event.special[l.type] || {};
                            for (s[0] = l, e = 1; e < arguments.length; e++) s[e] = arguments[e];
                            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                                for (a = C.event.handlers.call(this, l, c), e = 0;
                                    (i = a[e++]) && !l.isPropagationStopped();)
                                    for (l.currentTarget = i.elem, n = 0;
                                        (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                                return u.postDispatch && u.postDispatch.call(this, l), l.result
                            }
                        },
                        handlers: function(t, e) {
                            var n, r, i, o, a, s = [],
                                l = e.delegateCount,
                                c = t.target;
                            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                                for (; c !== this; c = c.parentNode || this)
                                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = e[n]).selector + " "] && (a[i] = r.needsContext ? C(i, this).index(c) > -1 : C.find(i, this, null, [c]).length), a[i] && o.push(r);
                                        o.length && s.push({
                                            elem: c,
                                            handlers: o
                                        })
                                    } return c = this, l < e.length && s.push({
                                elem: c,
                                handlers: e.slice(l)
                            }), s
                        },
                        addProp: function(t, e) {
                            Object.defineProperty(C.Event.prototype, t, {
                                enumerable: !0,
                                configurable: !0,
                                get: g(e) ? function() {
                                    if (this.originalEvent) return e(this.originalEvent)
                                } : function() {
                                    if (this.originalEvent) return this.originalEvent[t]
                                },
                                set: function(e) {
                                    Object.defineProperty(this, t, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e
                                    })
                                }
                            })
                        },
                        fix: function(t) {
                            return t[C.expando] ? t : new C.Event(t)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function(t) {
                                    var e = this || t;
                                    return vt.test(e.type) && e.click && j(e, "input") && At(e, "click", Et), !1
                                },
                                trigger: function(t) {
                                    var e = this || t;
                                    return vt.test(e.type) && e.click && j(e, "input") && At(e, "click"), !0
                                },
                                _default: function(t) {
                                    var e = t.target;
                                    return vt.test(e.type) && e.click && j(e, "input") && K.get(e, "click") || j(e, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(t) {
                                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                                }
                            }
                        }
                    }, C.removeEvent = function(t, e, n) {
                        t.removeEventListener && t.removeEventListener(e, n)
                    }, C.Event = function(t, e) {
                        if (!(this instanceof C.Event)) return new C.Event(t, e);
                        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Et : $t, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[C.expando] = !0
                    }, C.Event.prototype = {
                        constructor: C.Event,
                        isDefaultPrevented: $t,
                        isPropagationStopped: $t,
                        isImmediatePropagationStopped: $t,
                        isSimulated: !1,
                        preventDefault: function() {
                            var t = this.originalEvent;
                            this.isDefaultPrevented = Et, t && !this.isSimulated && t.preventDefault()
                        },
                        stopPropagation: function() {
                            var t = this.originalEvent;
                            this.isPropagationStopped = Et, t && !this.isSimulated && t.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var t = this.originalEvent;
                            this.isImmediatePropagationStopped = Et, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, C.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0
                    }, C.event.addProp), C.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(t, e) {
                        C.event.special[t] = {
                            setup: function() {
                                return At(this, t, St), !1
                            },
                            trigger: function() {
                                return At(this, t), !0
                            },
                            _default: function() {
                                return !0
                            },
                            delegateType: e
                        }
                    })), C.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(t, e) {
                        C.event.special[t] = {
                            delegateType: e,
                            bindType: e,
                            handle: function(t) {
                                var n, r = this,
                                    i = t.relatedTarget,
                                    o = t.handleObj;
                                return i && (i === r || C.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                            }
                        }
                    })), C.fn.extend({
                        on: function(t, e, n, r) {
                            return Ot(this, t, e, n, r)
                        },
                        one: function(t, e, n, r) {
                            return Ot(this, t, e, n, r, 1)
                        },
                        off: function(t, e, n) {
                            var r, i;
                            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, C(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                            if ("object" == typeof t) {
                                for (i in t) this.off(i, e, t[i]);
                                return this
                            }
                            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = $t), this.each((function() {
                                C.event.remove(this, t, n, e)
                            }))
                        }
                    });
                    var jt = /<script|<style|<link/i,
                        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                    function It(t, e) {
                        return j(t, "table") && j(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t
                    }

                    function Lt(t) {
                        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
                    }

                    function Pt(t) {
                        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
                    }

                    function _t(t, e) {
                        var n, r, i, o, a, s;
                        if (1 === e.nodeType) {
                            if (K.hasData(t) && (s = K.get(t).events))
                                for (i in K.remove(e, "handle events"), s)
                                    for (n = 0, r = s[i].length; n < r; n++) C.event.add(e, i, s[i][n]);
                            Z.hasData(t) && (o = Z.access(t), a = C.extend({}, o), Z.set(e, a))
                        }
                    }

                    function Rt(t, e) {
                        var n = e.nodeName.toLowerCase();
                        "input" === n && vt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                    }

                    function Ht(t, e, n, r) {
                        e = l(e);
                        var i, o, a, s, c, u, f = 0,
                            d = t.length,
                            p = d - 1,
                            h = e[0],
                            m = g(h);
                        if (m || d > 1 && "string" == typeof h && !v.checkClone && Nt.test(h)) return t.each((function(i) {
                            var o = t.eq(i);
                            m && (e[0] = h.call(this, i, o.html())), Ht(o, e, n, r)
                        }));
                        if (d && (o = (i = kt(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                            for (s = (a = C.map(wt(i, "script"), Lt)).length; f < d; f++) c = i, f !== p && (c = C.clone(c, !0, !0), s && C.merge(a, wt(c, "script"))), n.call(t[f], c, f);
                            if (s)
                                for (u = a[a.length - 1].ownerDocument, C.map(a, Pt), f = 0; f < s; f++) c = a[f], yt.test(c.type || "") && !K.access(c, "globalEval") && C.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                                    nonce: c.nonce || c.getAttribute("nonce")
                                }, u) : x(c.textContent.replace(Dt, ""), c, u))
                        }
                        return t
                    }

                    function Mt(t, e, n) {
                        for (var r, i = e ? C.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(wt(r)), r.parentNode && (n && st(r) && xt(wt(r, "script")), r.parentNode.removeChild(r));
                        return t
                    }
                    C.extend({
                        htmlPrefilter: function(t) {
                            return t
                        },
                        clone: function(t, e, n) {
                            var r, i, o, a, s = t.cloneNode(!0),
                                l = st(t);
                            if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
                                for (a = wt(s), r = 0, i = (o = wt(t)).length; r < i; r++) Rt(o[r], a[r]);
                            if (e)
                                if (n)
                                    for (o = o || wt(t), a = a || wt(s), r = 0, i = o.length; r < i; r++) _t(o[r], a[r]);
                                else _t(t, s);
                            return (a = wt(s, "script")).length > 0 && xt(a, !l && wt(t, "script")), s
                        },
                        cleanData: function(t) {
                            for (var e, n, r, i = C.event.special, o = 0; void 0 !== (n = t[o]); o++)
                                if (Q(n)) {
                                    if (e = n[K.expando]) {
                                        if (e.events)
                                            for (r in e.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, e.handle);
                                        n[K.expando] = void 0
                                    }
                                    n[Z.expando] && (n[Z.expando] = void 0)
                                }
                        }
                    }), C.fn.extend({
                        detach: function(t) {
                            return Mt(this, t, !0)
                        },
                        remove: function(t) {
                            return Mt(this, t)
                        },
                        text: function(t) {
                            return U(this, (function(t) {
                                return void 0 === t ? C.text(this) : this.empty().each((function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                                }))
                            }), null, t, arguments.length)
                        },
                        append: function() {
                            return Ht(this, arguments, (function(t) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t)
                            }))
                        },
                        prepend: function() {
                            return Ht(this, arguments, (function(t) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var e = It(this, t);
                                    e.insertBefore(t, e.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return Ht(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this)
                            }))
                        },
                        after: function() {
                            return Ht(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(wt(t, !1)), t.textContent = "");
                            return this
                        },
                        clone: function(t, e) {
                            return t = null != t && t, e = null == e ? t : e, this.map((function() {
                                return C.clone(this, t, e)
                            }))
                        },
                        html: function(t) {
                            return U(this, (function(t) {
                                var e = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                if ("string" == typeof t && !jt.test(t) && !bt[(gt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = C.htmlPrefilter(t);
                                    try {
                                        for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (C.cleanData(wt(e, !1)), e.innerHTML = t);
                                        e = 0
                                    } catch (t) {}
                                }
                                e && this.empty().append(t)
                            }), null, t, arguments.length)
                        },
                        replaceWith: function() {
                            var t = [];
                            return Ht(this, arguments, (function(e) {
                                var n = this.parentNode;
                                C.inArray(this, t) < 0 && (C.cleanData(wt(this)), n && n.replaceChild(e, this))
                            }), t)
                        }
                    }), C.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(t, e) {
                        C.fn[t] = function(t) {
                            for (var n, r = [], i = C(t), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), C(i[a])[e](n), c.apply(r, n.get());
                            return this.pushStack(r)
                        }
                    }));
                    var qt = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
                        zt = function(t) {
                            var e = t.ownerDocument.defaultView;
                            return e && e.opener || (e = r), e.getComputedStyle(t)
                        },
                        Ft = function(t, e, n) {
                            var r, i, o = {};
                            for (i in e) o[i] = t.style[i], t.style[i] = e[i];
                            for (i in r = n.call(t), e) t.style[i] = o[i];
                            return r
                        },
                        Wt = new RegExp(ot.join("|"), "i");

                    function Bt(t, e, n) {
                        var r, i, o, a, s = t.style;
                        return (n = n || zt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || st(t) || (a = C.style(t, e)), !v.pixelBoxStyles() && qt.test(a) && Wt.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
                    }

                    function Ut(t, e) {
                        return {
                            get: function() {
                                if (!t()) return (this.get = e).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function() {
                        function t() {
                            if (u) {
                                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", at.appendChild(c).appendChild(u);
                                var t = r.getComputedStyle(u);
                                n = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", a = 36 === e(t.right), i = 36 === e(t.width), u.style.position = "absolute", o = 12 === e(u.offsetWidth / 3), at.removeChild(c), u = null
                            }
                        }

                        function e(t) {
                            return Math.round(parseFloat(t))
                        }
                        var n, i, o, a, s, l, c = b.createElement("div"),
                            u = b.createElement("div");
                        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(v, {
                            boxSizingReliable: function() {
                                return t(), i
                            },
                            pixelBoxStyles: function() {
                                return t(), a
                            },
                            pixelPosition: function() {
                                return t(), n
                            },
                            reliableMarginLeft: function() {
                                return t(), l
                            },
                            scrollboxSize: function() {
                                return t(), o
                            },
                            reliableTrDimensions: function() {
                                var t, e, n, i;
                                return null == s && (t = b.createElement("table"), e = b.createElement("tr"), n = b.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", e.style.cssText = "border:1px solid", e.style.height = "1px", n.style.height = "9px", n.style.display = "block", at.appendChild(t).appendChild(e).appendChild(n), i = r.getComputedStyle(e), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === e.offsetHeight, at.removeChild(t)), s
                            }
                        }))
                    }();
                    var Xt = ["Webkit", "Moz", "ms"],
                        Yt = b.createElement("div").style,
                        Vt = {};

                    function Gt(t) {
                        var e = C.cssProps[t] || Vt[t];
                        return e || (t in Yt ? t : Vt[t] = function(t) {
                            for (var e = t[0].toUpperCase() + t.slice(1), n = Xt.length; n--;)
                                if ((t = Xt[n] + e) in Yt) return t
                        }(t) || t)
                    }
                    var Qt = /^(none|table(?!-c[ea]).+)/,
                        Jt = /^--/,
                        Kt = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        Zt = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };

                    function te(t, e, n) {
                        var r = it.exec(e);
                        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
                    }

                    function ee(t, e, n, r, i, o) {
                        var a = "width" === e ? 1 : 0,
                            s = 0,
                            l = 0;
                        if (n === (r ? "border" : "content")) return 0;
                        for (; a < 4; a += 2) "margin" === n && (l += C.css(t, n + ot[a], !0, i)), r ? ("content" === n && (l -= C.css(t, "padding" + ot[a], !0, i)), "margin" !== n && (l -= C.css(t, "border" + ot[a] + "Width", !0, i))) : (l += C.css(t, "padding" + ot[a], !0, i), "padding" !== n ? l += C.css(t, "border" + ot[a] + "Width", !0, i) : s += C.css(t, "border" + ot[a] + "Width", !0, i));
                        return !r && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - s - .5)) || 0), l
                    }

                    function ne(t, e, n) {
                        var r = zt(t),
                            i = (!v.boxSizingReliable() || n) && "border-box" === C.css(t, "boxSizing", !1, r),
                            o = i,
                            a = Bt(t, e, r),
                            s = "offset" + e[0].toUpperCase() + e.slice(1);
                        if (qt.test(a)) {
                            if (!n) return a;
                            a = "auto"
                        }
                        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && j(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(t, "display", !1, r)) && t.getClientRects().length && (i = "border-box" === C.css(t, "boxSizing", !1, r), (o = s in t) && (a = t[s])), (a = parseFloat(a) || 0) + ee(t, e, n || (i ? "border" : "content"), o, r, a) + "px"
                    }

                    function re(t, e, n, r, i) {
                        return new re.prototype.init(t, e, n, r, i)
                    }
                    C.extend({
                        cssHooks: {
                            opacity: {
                                get: function(t, e) {
                                    if (e) {
                                        var n = Bt(t, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function(t, e, n, r) {
                            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                var i, o, a, s = G(e),
                                    l = Jt.test(e),
                                    c = t.style;
                                if (l || (e = Gt(s)), a = C.cssHooks[e] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : c[e];
                                "string" === (o = typeof n) && (i = it.exec(n)) && i[1] && (n = ut(t, e, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (C.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (l ? c.setProperty(e, n) : c[e] = n))
                            }
                        },
                        css: function(t, e, n, r) {
                            var i, o, a, s = G(e);
                            return Jt.test(e) || (e = Gt(s)), (a = C.cssHooks[e] || C.cssHooks[s]) && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = Bt(t, e, r)), "normal" === i && e in Zt && (i = Zt[e]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                        }
                    }), C.each(["height", "width"], (function(t, e) {
                        C.cssHooks[e] = {
                            get: function(t, n, r) {
                                if (n) return !Qt.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ne(t, e, r) : Ft(t, Kt, (function() {
                                    return ne(t, e, r)
                                }))
                            },
                            set: function(t, n, r) {
                                var i, o = zt(t),
                                    a = !v.scrollboxSize() && "absolute" === o.position,
                                    s = (a || r) && "border-box" === C.css(t, "boxSizing", !1, o),
                                    l = r ? ee(t, e, r, s, o) : 0;
                                return s && a && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ee(t, e, "border", !1, o) - .5)), l && (i = it.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = C.css(t, e)), te(0, n, l)
                            }
                        }
                    })), C.cssHooks.marginLeft = Ut(v.reliableMarginLeft, (function(t, e) {
                        if (e) return (parseFloat(Bt(t, "marginLeft")) || t.getBoundingClientRect().left - Ft(t, {
                            marginLeft: 0
                        }, (function() {
                            return t.getBoundingClientRect().left
                        }))) + "px"
                    })), C.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(t, e) {
                        C.cssHooks[t + e] = {
                            expand: function(n) {
                                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + ot[r] + e] = o[r] || o[r - 2] || o[0];
                                return i
                            }
                        }, "margin" !== t && (C.cssHooks[t + e].set = te)
                    })), C.fn.extend({
                        css: function(t, e) {
                            return U(this, (function(t, e, n) {
                                var r, i, o = {},
                                    a = 0;
                                if (Array.isArray(e)) {
                                    for (r = zt(t), i = e.length; a < i; a++) o[e[a]] = C.css(t, e[a], !1, r);
                                    return o
                                }
                                return void 0 !== n ? C.style(t, e, n) : C.css(t, e)
                            }), t, e, arguments.length > 1)
                        }
                    }), C.Tween = re, re.prototype = {
                        constructor: re,
                        init: function(t, e, n, r, i, o) {
                            this.elem = t, this.prop = n, this.easing = i || C.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var t = re.propHooks[this.prop];
                            return t && t.get ? t.get(this) : re.propHooks._default.get(this)
                        },
                        run: function(t) {
                            var e, n = re.propHooks[this.prop];
                            return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : re.propHooks._default.set(this), this
                        }
                    }, re.prototype.init.prototype = re.prototype, re.propHooks = {
                        _default: {
                            get: function(t) {
                                var e;
                                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                            },
                            set: function(t) {
                                C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !C.cssHooks[t.prop] && null == t.elem.style[Gt(t.prop)] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
                            }
                        }
                    }, re.propHooks.scrollTop = re.propHooks.scrollLeft = {
                        set: function(t) {
                            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                        }
                    }, C.easing = {
                        linear: function(t) {
                            return t
                        },
                        swing: function(t) {
                            return .5 - Math.cos(t * Math.PI) / 2
                        },
                        _default: "swing"
                    }, C.fx = re.prototype.init, C.fx.step = {};
                    var ie, oe, ae = /^(?:toggle|show|hide)$/,
                        se = /queueHooks$/;

                    function le() {
                        oe && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(le) : r.setTimeout(le, C.fx.interval), C.fx.tick())
                    }

                    function ce() {
                        return r.setTimeout((function() {
                            ie = void 0
                        })), ie = Date.now()
                    }

                    function ue(t, e) {
                        var n, r = 0,
                            i = {
                                height: t
                            };
                        for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = ot[r])] = i["padding" + n] = t;
                        return e && (i.opacity = i.width = t), i
                    }

                    function fe(t, e, n) {
                        for (var r, i = (de.tweeners[e] || []).concat(de.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                            if (r = i[o].call(n, e, t)) return r
                    }

                    function de(t, e, n) {
                        var r, i, o = 0,
                            a = de.prefilters.length,
                            s = C.Deferred().always((function() {
                                delete l.elem
                            })),
                            l = function() {
                                if (i) return !1;
                                for (var e = ie || ce(), n = Math.max(0, c.startTime + c.duration - e), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(r);
                                return s.notifyWith(t, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1)
                            },
                            c = s.promise({
                                elem: t,
                                props: C.extend({}, e),
                                opts: C.extend(!0, {
                                    specialEasing: {},
                                    easing: C.easing._default
                                }, n),
                                originalProperties: e,
                                originalOptions: n,
                                startTime: ie || ce(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function(e, n) {
                                    var r = C.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                                    return c.tweens.push(r), r
                                },
                                stop: function(e) {
                                    var n = 0,
                                        r = e ? c.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                                    return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
                                }
                            }),
                            u = c.props;
                        for (! function(t, e) {
                                var n, r, i, o, a;
                                for (n in t)
                                    if (i = e[r = G(n)], o = t[n], Array.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (a = C.cssHooks[r]) && "expand" in a)
                                        for (n in o = a.expand(o), delete t[r], o) n in t || (t[n] = o[n], e[n] = i);
                                    else e[r] = i
                            }(u, c.opts.specialEasing); o < a; o++)
                            if (r = de.prefilters[o].call(c, t, u, c.opts)) return g(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
                        return C.map(u, fe, c), g(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                            elem: t,
                            anim: c,
                            queue: c.opts.queue
                        })), c
                    }
                    C.Animation = C.extend(de, {
                            tweeners: {
                                "*": [function(t, e) {
                                    var n = this.createTween(t, e);
                                    return ut(n.elem, t, it.exec(e), n), n
                                }]
                            },
                            tweener: function(t, e) {
                                g(t) ? (e = t, t = ["*"]) : t = t.match(H);
                                for (var n, r = 0, i = t.length; r < i; r++) n = t[r], de.tweeners[n] = de.tweeners[n] || [], de.tweeners[n].unshift(e)
                            },
                            prefilters: [function(t, e, n) {
                                var r, i, o, a, s, l, c, u, f = "width" in e || "height" in e,
                                    d = this,
                                    p = {},
                                    h = t.style,
                                    m = t.nodeType && ct(t),
                                    v = K.get(t, "fxshow");
                                for (r in n.queue || (null == (a = C._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                        a.unqueued || s()
                                    }), a.unqueued++, d.always((function() {
                                        d.always((function() {
                                            a.unqueued--, C.queue(t, "fx").length || a.empty.fire()
                                        }))
                                    }))), e)
                                    if (i = e[r], ae.test(i)) {
                                        if (delete e[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                                            if ("show" !== i || !v || void 0 === v[r]) continue;
                                            m = !0
                                        }
                                        p[r] = v && v[r] || C.style(t, r)
                                    } if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(p))
                                    for (r in f && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = K.get(t, "display")), "none" === (u = C.css(t, "display")) && (c ? u = c : (pt([t], !0), c = t.style.display || c, u = C.css(t, "display"), pt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(t, "float") && (l || (d.done((function() {
                                            h.display = c
                                        })), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always((function() {
                                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                        }))), l = !1, p) l || (v ? "hidden" in v && (m = v.hidden) : v = K.access(t, "fxshow", {
                                        display: c
                                    }), o && (v.hidden = !m), m && pt([t], !0), d.done((function() {
                                        for (r in m || pt([t]), K.remove(t, "fxshow"), p) C.style(t, r, p[r])
                                    }))), l = fe(m ? v[r] : 0, r, d), r in v || (v[r] = l.start, m && (l.end = l.start, l.start = 0))
                            }],
                            prefilter: function(t, e) {
                                e ? de.prefilters.unshift(t) : de.prefilters.push(t)
                            }
                        }), C.speed = function(t, e, n) {
                            var r = t && "object" == typeof t ? C.extend({}, t) : {
                                complete: n || !n && e || g(t) && t,
                                duration: t,
                                easing: n && e || e && !g(e) && e
                            };
                            return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                                g(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                            }, r
                        }, C.fn.extend({
                            fadeTo: function(t, e, n, r) {
                                return this.filter(ct).css("opacity", 0).show().end().animate({
                                    opacity: e
                                }, t, n, r)
                            },
                            animate: function(t, e, n, r) {
                                var i = C.isEmptyObject(t),
                                    o = C.speed(e, n, r),
                                    a = function() {
                                        var e = de(this, C.extend({}, t), o);
                                        (i || K.get(this, "finish")) && e.stop(!0)
                                    };
                                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                            },
                            stop: function(t, e, n) {
                                var r = function(t) {
                                    var e = t.stop;
                                    delete t.stop, e(n)
                                };
                                return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                                    var e = !0,
                                        i = null != t && t + "queueHooks",
                                        o = C.timers,
                                        a = K.get(this);
                                    if (i) a[i] && a[i].stop && r(a[i]);
                                    else
                                        for (i in a) a[i] && a[i].stop && se.test(i) && r(a[i]);
                                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                                    !e && n || C.dequeue(this, t)
                                }))
                            },
                            finish: function(t) {
                                return !1 !== t && (t = t || "fx"), this.each((function() {
                                    var e, n = K.get(this),
                                        r = n[t + "queue"],
                                        i = n[t + "queueHooks"],
                                        o = C.timers,
                                        a = r ? r.length : 0;
                                    for (n.finish = !0, C.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                    for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                                    delete n.finish
                                }))
                            }
                        }), C.each(["toggle", "show", "hide"], (function(t, e) {
                            var n = C.fn[e];
                            C.fn[e] = function(t, r, i) {
                                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ue(e, !0), t, r, i)
                            }
                        })), C.each({
                            slideDown: ue("show"),
                            slideUp: ue("hide"),
                            slideToggle: ue("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(t, e) {
                            C.fn[t] = function(t, n, r) {
                                return this.animate(e, t, n, r)
                            }
                        })), C.timers = [], C.fx.tick = function() {
                            var t, e = 0,
                                n = C.timers;
                            for (ie = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                            n.length || C.fx.stop(), ie = void 0
                        }, C.fx.timer = function(t) {
                            C.timers.push(t), C.fx.start()
                        }, C.fx.interval = 13, C.fx.start = function() {
                            oe || (oe = !0, le())
                        }, C.fx.stop = function() {
                            oe = null
                        }, C.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, C.fn.delay = function(t, e) {
                            return t = C.fx && C.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, n) {
                                var i = r.setTimeout(e, t);
                                n.stop = function() {
                                    r.clearTimeout(i)
                                }
                            }))
                        },
                        function() {
                            var t = b.createElement("input"),
                                e = b.createElement("select").appendChild(b.createElement("option"));
                            t.type = "checkbox", v.checkOn = "" !== t.value, v.optSelected = e.selected, (t = b.createElement("input")).value = "t", t.type = "radio", v.radioValue = "t" === t.value
                        }();
                    var pe, he = C.expr.attrHandle;
                    C.fn.extend({
                        attr: function(t, e) {
                            return U(this, C.attr, t, e, arguments.length > 1)
                        },
                        removeAttr: function(t) {
                            return this.each((function() {
                                C.removeAttr(this, t)
                            }))
                        }
                    }), C.extend({
                        attr: function(t, e, n) {
                            var r, i, o = t.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? C.prop(t, e, n) : (1 === o && C.isXMLDoc(t) || (i = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? pe : void 0)), void 0 !== n ? null === n ? void C.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : null == (r = C.find.attr(t, e)) ? void 0 : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(t, e) {
                                    if (!v.radioValue && "radio" === e && j(t, "input")) {
                                        var n = t.value;
                                        return t.setAttribute("type", e), n && (t.value = n), e
                                    }
                                }
                            }
                        },
                        removeAttr: function(t, e) {
                            var n, r = 0,
                                i = e && e.match(H);
                            if (i && 1 === t.nodeType)
                                for (; n = i[r++];) t.removeAttribute(n)
                        }
                    }), pe = {
                        set: function(t, e, n) {
                            return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n
                        }
                    }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                        var n = he[e] || C.find.attr;
                        he[e] = function(t, e, r) {
                            var i, o, a = e.toLowerCase();
                            return r || (o = he[a], he[a] = i, i = null != n(t, e, r) ? a : null, he[a] = o), i
                        }
                    }));
                    var me = /^(?:input|select|textarea|button)$/i,
                        ve = /^(?:a|area)$/i;

                    function ge(t) {
                        return (t.match(H) || []).join(" ")
                    }

                    function ye(t) {
                        return t.getAttribute && t.getAttribute("class") || ""
                    }

                    function be(t) {
                        return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || []
                    }
                    C.fn.extend({
                        prop: function(t, e) {
                            return U(this, C.prop, t, e, arguments.length > 1)
                        },
                        removeProp: function(t) {
                            return this.each((function() {
                                delete this[C.propFix[t] || t]
                            }))
                        }
                    }), C.extend({
                        prop: function(t, e, n) {
                            var r, i, o = t.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(t) || (e = C.propFix[e] || e, i = C.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(t) {
                                    var e = C.find.attr(t, "tabindex");
                                    return e ? parseInt(e, 10) : me.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), v.optSelected || (C.propHooks.selected = {
                        get: function(t) {
                            var e = t.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null
                        },
                        set: function(t) {
                            var e = t.parentNode;
                            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                        }
                    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        C.propFix[this.toLowerCase()] = this
                    })), C.fn.extend({
                        addClass: function(t) {
                            var e, n, r, i, o, a, s, l = 0;
                            if (g(t)) return this.each((function(e) {
                                C(this).addClass(t.call(this, e, ye(this)))
                            }));
                            if ((e = be(t)).length)
                                for (; n = this[l++];)
                                    if (i = ye(n), r = 1 === n.nodeType && " " + ge(i) + " ") {
                                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                        i !== (s = ge(r)) && n.setAttribute("class", s)
                                    } return this
                        },
                        removeClass: function(t) {
                            var e, n, r, i, o, a, s, l = 0;
                            if (g(t)) return this.each((function(e) {
                                C(this).removeClass(t.call(this, e, ye(this)))
                            }));
                            if (!arguments.length) return this.attr("class", "");
                            if ((e = be(t)).length)
                                for (; n = this[l++];)
                                    if (i = ye(n), r = 1 === n.nodeType && " " + ge(i) + " ") {
                                        for (a = 0; o = e[a++];)
                                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                        i !== (s = ge(r)) && n.setAttribute("class", s)
                                    } return this
                        },
                        toggleClass: function(t, e) {
                            var n = typeof t,
                                r = "string" === n || Array.isArray(t);
                            return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each((function(n) {
                                C(this).toggleClass(t.call(this, n, ye(this), e), e)
                            })) : this.each((function() {
                                var e, i, o, a;
                                if (r)
                                    for (i = 0, o = C(this), a = be(t); e = a[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                                else void 0 !== t && "boolean" !== n || ((e = ye(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""))
                            }))
                        },
                        hasClass: function(t) {
                            var e, n, r = 0;
                            for (e = " " + t + " "; n = this[r++];)
                                if (1 === n.nodeType && (" " + ge(ye(n)) + " ").indexOf(e) > -1) return !0;
                            return !1
                        }
                    });
                    var we = /\r/g;
                    C.fn.extend({
                        val: function(t) {
                            var e, n, r, i = this[0];
                            return arguments.length ? (r = g(t), this.each((function(n) {
                                var i;
                                1 === this.nodeType && (null == (i = r ? t.call(this, n, C(this).val()) : t) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, (function(t) {
                                    return null == t ? "" : t + ""
                                }))), (e = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                            }))) : i ? (e = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(we, "") : null == n ? "" : n : void 0
                        }
                    }), C.extend({
                        valHooks: {
                            option: {
                                get: function(t) {
                                    var e = C.find.attr(t, "value");
                                    return null != e ? e : ge(C.text(t))
                                }
                            },
                            select: {
                                get: function(t) {
                                    var e, n, r, i = t.options,
                                        o = t.selectedIndex,
                                        a = "select-one" === t.type,
                                        s = a ? null : [],
                                        l = a ? o + 1 : i.length;
                                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                            if (e = C(n).val(), a) return e;
                                            s.push(e)
                                        } return s
                                },
                                set: function(t, e) {
                                    for (var n, r, i = t.options, o = C.makeArray(e), a = i.length; a--;)((r = i[a]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                                    return n || (t.selectedIndex = -1), o
                                }
                            }
                        }
                    }), C.each(["radio", "checkbox"], (function() {
                        C.valHooks[this] = {
                            set: function(t, e) {
                                if (Array.isArray(e)) return t.checked = C.inArray(C(t).val(), e) > -1
                            }
                        }, v.checkOn || (C.valHooks[this].get = function(t) {
                            return null === t.getAttribute("value") ? "on" : t.value
                        })
                    })), v.focusin = "onfocusin" in r;
                    var xe = /^(?:focusinfocus|focusoutblur)$/,
                        Te = function(t) {
                            t.stopPropagation()
                        };
                    C.extend(C.event, {
                        trigger: function(t, e, n, i) {
                            var o, a, s, l, c, u, f, d, h = [n || b],
                                m = p.call(t, "type") ? t.type : t,
                                v = p.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (a = d = s = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !xe.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[C.expando] ? t : new C.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : C.makeArray(e, [t]), f = C.event.special[m] || {}, i || !f.trigger || !1 !== f.trigger.apply(n, e))) {
                                if (!i && !f.noBubble && !y(n)) {
                                    for (l = f.delegateType || m, xe.test(l + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                                    s === (n.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || r)
                                }
                                for (o = 0;
                                    (a = h[o++]) && !t.isPropagationStopped();) d = a, t.type = o > 1 ? l : f.bindType || m, (u = (K.get(a, "events") || Object.create(null))[t.type] && K.get(a, "handle")) && u.apply(a, e), (u = c && a[c]) && u.apply && Q(a) && (t.result = u.apply(a, e), !1 === t.result && t.preventDefault());
                                return t.type = m, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), e) || !Q(n) || c && g(n[m]) && !y(n) && ((s = n[c]) && (n[c] = null), C.event.triggered = m, t.isPropagationStopped() && d.addEventListener(m, Te), n[m](), t.isPropagationStopped() && d.removeEventListener(m, Te), C.event.triggered = void 0, s && (n[c] = s)), t.result
                            }
                        },
                        simulate: function(t, e, n) {
                            var r = C.extend(new C.Event, n, {
                                type: t,
                                isSimulated: !0
                            });
                            C.event.trigger(r, null, e)
                        }
                    }), C.fn.extend({
                        trigger: function(t, e) {
                            return this.each((function() {
                                C.event.trigger(t, e, this)
                            }))
                        },
                        triggerHandler: function(t, e) {
                            var n = this[0];
                            if (n) return C.event.trigger(t, e, n, !0)
                        }
                    }), v.focusin || C.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(t, e) {
                        var n = function(t) {
                            C.event.simulate(e, t.target, C.event.fix(t))
                        };
                        C.event.special[e] = {
                            setup: function() {
                                var r = this.ownerDocument || this.document || this,
                                    i = K.access(r, e);
                                i || r.addEventListener(t, n, !0), K.access(r, e, (i || 0) + 1)
                            },
                            teardown: function() {
                                var r = this.ownerDocument || this.document || this,
                                    i = K.access(r, e) - 1;
                                i ? K.access(r, e, i) : (r.removeEventListener(t, n, !0), K.remove(r, e))
                            }
                        }
                    }));
                    var ke = r.location,
                        Ce = {
                            guid: Date.now()
                        },
                        Ee = /\?/;
                    C.parseXML = function(t) {
                        var e, n;
                        if (!t || "string" != typeof t) return null;
                        try {
                            e = (new r.DOMParser).parseFromString(t, "text/xml")
                        } catch (t) {}
                        return n = e && e.getElementsByTagName("parsererror")[0], e && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, (function(t) {
                            return t.textContent
                        })).join("\n") : t)), e
                    };
                    var $e = /\[\]$/,
                        Se = /\r?\n/g,
                        Oe = /^(?:submit|button|image|reset|file)$/i,
                        Ae = /^(?:input|select|textarea|keygen)/i;

                    function je(t, e, n, r) {
                        var i;
                        if (Array.isArray(e)) C.each(e, (function(e, i) {
                            n || $e.test(t) ? r(t, i) : je(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
                        }));
                        else if (n || "object" !== T(e)) r(t, e);
                        else
                            for (i in e) je(t + "[" + i + "]", e[i], n, r)
                    }
                    C.param = function(t, e) {
                        var n, r = [],
                            i = function(t, e) {
                                var n = g(e) ? e() : e;
                                r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                            };
                        if (null == t) return "";
                        if (Array.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, (function() {
                            i(this.name, this.value)
                        }));
                        else
                            for (n in t) je(n, t[n], e, i);
                        return r.join("&")
                    }, C.fn.extend({
                        serialize: function() {
                            return C.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var t = C.prop(this, "elements");
                                return t ? C.makeArray(t) : this
                            })).filter((function() {
                                var t = this.type;
                                return this.name && !C(this).is(":disabled") && Ae.test(this.nodeName) && !Oe.test(t) && (this.checked || !vt.test(t))
                            })).map((function(t, e) {
                                var n = C(this).val();
                                return null == n ? null : Array.isArray(n) ? C.map(n, (function(t) {
                                    return {
                                        name: e.name,
                                        value: t.replace(Se, "\r\n")
                                    }
                                })) : {
                                    name: e.name,
                                    value: n.replace(Se, "\r\n")
                                }
                            })).get()
                        }
                    });
                    var Ne = /%20/g,
                        De = /#.*$/,
                        Ie = /([?&])_=[^&]*/,
                        Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Pe = /^(?:GET|HEAD)$/,
                        _e = /^\/\//,
                        Re = {},
                        He = {},
                        Me = "*/".concat("*"),
                        qe = b.createElement("a");

                    function ze(t) {
                        return function(e, n) {
                            "string" != typeof e && (n = e, e = "*");
                            var r, i = 0,
                                o = e.toLowerCase().match(H) || [];
                            if (g(n))
                                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
                        }
                    }

                    function Fe(t, e, n, r) {
                        var i = {},
                            o = t === He;

                        function a(s) {
                            var l;
                            return i[s] = !0, C.each(t[s] || [], (function(t, s) {
                                var c = s(e, n, r);
                                return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), a(c), !1)
                            })), l
                        }
                        return a(e.dataTypes[0]) || !i["*"] && a("*")
                    }

                    function We(t, e) {
                        var n, r, i = C.ajaxSettings.flatOptions || {};
                        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
                        return r && C.extend(!0, t, r), t
                    }
                    qe.href = ke.href, C.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: ke.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ke.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Me,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": C.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(t, e) {
                            return e ? We(We(t, C.ajaxSettings), e) : We(C.ajaxSettings, t)
                        },
                        ajaxPrefilter: ze(Re),
                        ajaxTransport: ze(He),
                        ajax: function(t, e) {
                            "object" == typeof t && (e = t, t = void 0), e = e || {};
                            var n, i, o, a, s, l, c, u, f, d, p = C.ajaxSetup({}, e),
                                h = p.context || p,
                                m = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                                v = C.Deferred(),
                                g = C.Callbacks("once memory"),
                                y = p.statusCode || {},
                                w = {},
                                x = {},
                                T = "canceled",
                                k = {
                                    readyState: 0,
                                    getResponseHeader: function(t) {
                                        var e;
                                        if (c) {
                                            if (!a)
                                                for (a = {}; e = Le.exec(o);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                            e = a[t.toLowerCase() + " "]
                                        }
                                        return null == e ? null : e.join(", ")
                                    },
                                    getAllResponseHeaders: function() {
                                        return c ? o : null
                                    },
                                    setRequestHeader: function(t, e) {
                                        return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                                    },
                                    overrideMimeType: function(t) {
                                        return null == c && (p.mimeType = t), this
                                    },
                                    statusCode: function(t) {
                                        var e;
                                        if (t)
                                            if (c) k.always(t[k.status]);
                                            else
                                                for (e in t) y[e] = [y[e], t[e]];
                                        return this
                                    },
                                    abort: function(t) {
                                        var e = t || T;
                                        return n && n.abort(e), E(0, e), this
                                    }
                                };
                            if (v.promise(k), p.url = ((t || p.url || ke.href) + "").replace(_e, ke.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""], null == p.crossDomain) {
                                l = b.createElement("a");
                                try {
                                    l.href = p.url, l.href = l.href, p.crossDomain = qe.protocol + "//" + qe.host != l.protocol + "//" + l.host
                                } catch (t) {
                                    p.crossDomain = !0
                                }
                            }
                            if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Fe(Re, p, e, k), c) return k;
                            for (f in (u = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Pe.test(p.type), i = p.url.replace(De, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ne, "+")) : (d = p.url.slice(i.length), p.data && (p.processData || "string" == typeof p.data) && (i += (Ee.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (i = i.replace(Ie, "$1"), d = (Ee.test(i) ? "&" : "?") + "_=" + Ce.guid++ + d), p.url = i + d), p.ifModified && (C.lastModified[i] && k.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && k.setRequestHeader("If-None-Match", C.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(f, p.headers[f]);
                            if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || c)) return k.abort();
                            if (T = "abort", g.add(p.complete), k.done(p.success), k.fail(p.error), n = Fe(He, p, e, k)) {
                                if (k.readyState = 1, u && m.trigger("ajaxSend", [k, p]), c) return k;
                                p.async && p.timeout > 0 && (s = r.setTimeout((function() {
                                    k.abort("timeout")
                                }), p.timeout));
                                try {
                                    c = !1, n.send(w, E)
                                } catch (t) {
                                    if (c) throw t;
                                    E(-1, t)
                                }
                            } else E(-1, "No Transport");

                            function E(t, e, a, l) {
                                var f, d, b, w, x, T = e;
                                c || (c = !0, s && r.clearTimeout(s), n = void 0, o = l || "", k.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (w = function(t, e, n) {
                                    for (var r, i, o, a, s = t.contents, l = t.dataTypes;
                                        "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                                    if (r)
                                        for (i in s)
                                            if (s[i] && s[i].test(r)) {
                                                l.unshift(i);
                                                break
                                            } if (l[0] in n) o = l[0];
                                    else {
                                        for (i in n) {
                                            if (!l[0] || t.converters[i + " " + l[0]]) {
                                                o = i;
                                                break
                                            }
                                            a || (a = i)
                                        }
                                        o = o || a
                                    }
                                    if (o) return o !== l[0] && l.unshift(o), n[o]
                                }(p, k, a)), !f && C.inArray("script", p.dataTypes) > -1 && C.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), w = function(t, e, n, r) {
                                    var i, o, a, s, l, c = {},
                                        u = t.dataTypes.slice();
                                    if (u[1])
                                        for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                                    for (o = u.shift(); o;)
                                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                                            if ("*" === o) o = l;
                                            else if ("*" !== l && l !== o) {
                                        if (!(a = c[l + " " + o] || c["* " + o]))
                                            for (i in c)
                                                if ((s = i.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                                    !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], u.unshift(s[1]));
                                                    break
                                                } if (!0 !== a)
                                            if (a && t.throws) e = a(e);
                                            else try {
                                                e = a(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? t : "No conversion from " + l + " to " + o
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: e
                                    }
                                }(p, w, k, f), f ? (p.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (C.lastModified[i] = x), (x = k.getResponseHeader("etag")) && (C.etag[i] = x)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, d = w.data, f = !(b = w.error))) : (b = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (e || T) + "", f ? v.resolveWith(h, [d, T, k]) : v.rejectWith(h, [k, T, b]), k.statusCode(y), y = void 0, u && m.trigger(f ? "ajaxSuccess" : "ajaxError", [k, p, f ? d : b]), g.fireWith(h, [k, T]), u && (m.trigger("ajaxComplete", [k, p]), --C.active || C.event.trigger("ajaxStop")))
                            }
                            return k
                        },
                        getJSON: function(t, e, n) {
                            return C.get(t, e, n, "json")
                        },
                        getScript: function(t, e) {
                            return C.get(t, void 0, e, "script")
                        }
                    }), C.each(["get", "post"], (function(t, e) {
                        C[e] = function(t, n, r, i) {
                            return g(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                                url: t,
                                type: e,
                                dataType: i,
                                data: n,
                                success: r
                            }, C.isPlainObject(t) && t))
                        }
                    })), C.ajaxPrefilter((function(t) {
                        var e;
                        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
                    })), C._evalUrl = function(t, e, n) {
                        return C.ajax({
                            url: t,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(t) {
                                C.globalEval(t, e, n)
                            }
                        })
                    }, C.fn.extend({
                        wrapAll: function(t) {
                            var e;
                            return this[0] && (g(t) && (t = t.call(this[0])), e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                                return t
                            })).append(this)), this
                        },
                        wrapInner: function(t) {
                            return g(t) ? this.each((function(e) {
                                C(this).wrapInner(t.call(this, e))
                            })) : this.each((function() {
                                var e = C(this),
                                    n = e.contents();
                                n.length ? n.wrapAll(t) : e.append(t)
                            }))
                        },
                        wrap: function(t) {
                            var e = g(t);
                            return this.each((function(n) {
                                C(this).wrapAll(e ? t.call(this, n) : t)
                            }))
                        },
                        unwrap: function(t) {
                            return this.parent(t).not("body").each((function() {
                                C(this).replaceWith(this.childNodes)
                            })), this
                        }
                    }), C.expr.pseudos.hidden = function(t) {
                        return !C.expr.pseudos.visible(t)
                    }, C.expr.pseudos.visible = function(t) {
                        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                    }, C.ajaxSettings.xhr = function() {
                        try {
                            return new r.XMLHttpRequest
                        } catch (t) {}
                    };
                    var Be = {
                            0: 200,
                            1223: 204
                        },
                        Ue = C.ajaxSettings.xhr();
                    v.cors = !!Ue && "withCredentials" in Ue, v.ajax = Ue = !!Ue, C.ajaxTransport((function(t) {
                        var e, n;
                        if (v.cors || Ue && !t.crossDomain) return {
                            send: function(i, o) {
                                var a, s = t.xhr();
                                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                                e = function(t) {
                                    return function() {
                                        e && (e = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Be[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()))
                                    }
                                }, s.onload = e(), n = s.onerror = s.ontimeout = e("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                                    4 === s.readyState && r.setTimeout((function() {
                                        e && n()
                                    }))
                                }, e = e("abort");
                                try {
                                    s.send(t.hasContent && t.data || null)
                                } catch (t) {
                                    if (e) throw t
                                }
                            },
                            abort: function() {
                                e && e()
                            }
                        }
                    })), C.ajaxPrefilter((function(t) {
                        t.crossDomain && (t.contents.script = !1)
                    })), C.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(t) {
                                return C.globalEval(t), t
                            }
                        }
                    }), C.ajaxPrefilter("script", (function(t) {
                        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
                    })), C.ajaxTransport("script", (function(t) {
                        var e, n;
                        if (t.crossDomain || t.scriptAttrs) return {
                            send: function(r, i) {
                                e = C("<script>").attr(t.scriptAttrs || {}).prop({
                                    charset: t.scriptCharset,
                                    src: t.url
                                }).on("load error", n = function(t) {
                                    e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                                }), b.head.appendChild(e[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }));
                    var Xe, Ye = [],
                        Ve = /(=)\?(?=&|$)|\?\?/;
                    C.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var t = Ye.pop() || C.expando + "_" + Ce.guid++;
                            return this[t] = !0, t
                        }
                    }), C.ajaxPrefilter("json jsonp", (function(t, e, n) {
                        var i, o, a, s = !1 !== t.jsonp && (Ve.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(t.data) && "data");
                        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ve, "$1" + i) : !1 !== t.jsonp && (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                            return a || C.error(i + " was not called"), a[0]
                        }, t.dataTypes[0] = "json", o = r[i], r[i] = function() {
                            a = arguments
                        }, n.always((function() {
                            void 0 === o ? C(r).removeProp(i) : r[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Ye.push(i)), a && g(o) && o(a[0]), a = o = void 0
                        })), "script"
                    })), v.createHTMLDocument = ((Xe = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xe.childNodes.length), C.parseHTML = function(t, e, n) {
                        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((r = (e = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, e.head.appendChild(r)) : e = b), o = !n && [], (i = N.exec(t)) ? [e.createElement(i[1])] : (i = kt([t], e, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
                        var r, i, o
                    }, C.fn.load = function(t, e, n) {
                        var r, i, o, a = this,
                            s = t.indexOf(" ");
                        return s > -1 && (r = ge(t.slice(s)), t = t.slice(0, s)), g(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && C.ajax({
                            url: t,
                            type: i || "GET",
                            dataType: "html",
                            data: e
                        }).done((function(t) {
                            o = arguments, a.html(r ? C("<div>").append(C.parseHTML(t)).find(r) : t)
                        })).always(n && function(t, e) {
                            a.each((function() {
                                n.apply(this, o || [t.responseText, e, t])
                            }))
                        }), this
                    }, C.expr.pseudos.animated = function(t) {
                        return C.grep(C.timers, (function(e) {
                            return t === e.elem
                        })).length
                    }, C.offset = {
                        setOffset: function(t, e, n) {
                            var r, i, o, a, s, l, c = C.css(t, "position"),
                                u = C(t),
                                f = {};
                            "static" === c && (t.style.position = "relative"), s = u.offset(), o = C.css(t, "top"), l = C.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (r = u.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), g(e) && (e = e.call(t, n, C.extend({}, s))), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + i), "using" in e ? e.using.call(t, f) : u.css(f)
                        }
                    }, C.fn.extend({
                        offset: function(t) {
                            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                                C.offset.setOffset(this, t, e)
                            }));
                            var e, n, r = this[0];
                            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                                top: e.top + n.pageYOffset,
                                left: e.left + n.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var t, e, n, r = this[0],
                                    i = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === C.css(r, "position")) e = r.getBoundingClientRect();
                                else {
                                    for (e = this.offset(), n = r.ownerDocument, t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === C.css(t, "position");) t = t.parentNode;
                                    t && t !== r && 1 === t.nodeType && ((i = C(t).offset()).top += C.css(t, "borderTopWidth", !0), i.left += C.css(t, "borderLeftWidth", !0))
                                }
                                return {
                                    top: e.top - i.top - C.css(r, "marginTop", !0),
                                    left: e.left - i.left - C.css(r, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var t = this.offsetParent; t && "static" === C.css(t, "position");) t = t.offsetParent;
                                return t || at
                            }))
                        }
                    }), C.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(t, e) {
                        var n = "pageYOffset" === e;
                        C.fn[t] = function(r) {
                            return U(this, (function(t, r, i) {
                                var o;
                                if (y(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === i) return o ? o[e] : t[r];
                                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i
                            }), t, r, arguments.length)
                        }
                    })), C.each(["top", "left"], (function(t, e) {
                        C.cssHooks[e] = Ut(v.pixelPosition, (function(t, n) {
                            if (n) return n = Bt(t, e), qt.test(n) ? C(t).position()[e] + "px" : n
                        }))
                    })), C.each({
                        Height: "height",
                        Width: "width"
                    }, (function(t, e) {
                        C.each({
                            padding: "inner" + t,
                            content: e,
                            "": "outer" + t
                        }, (function(n, r) {
                            C.fn[r] = function(i, o) {
                                var a = arguments.length && (n || "boolean" != typeof i),
                                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                                return U(this, (function(e, n, i) {
                                    var o;
                                    return y(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? C.css(e, n, s) : C.style(e, n, i, s)
                                }), e, a ? i : void 0, a)
                            }
                        }))
                    })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
                        C.fn[e] = function(t) {
                            return this.on(e, t)
                        }
                    })), C.fn.extend({
                        bind: function(t, e, n) {
                            return this.on(t, null, e, n)
                        },
                        unbind: function(t, e) {
                            return this.off(t, null, e)
                        },
                        delegate: function(t, e, n, r) {
                            return this.on(e, t, n, r)
                        },
                        undelegate: function(t, e, n) {
                            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                        },
                        hover: function(t, e) {
                            return this.mouseenter(t).mouseleave(e || t)
                        }
                    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
                        C.fn[e] = function(t, n) {
                            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                        }
                    }));
                    var Ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    C.proxy = function(t, e) {
                        var n, r, i;
                        if ("string" == typeof e && (n = t[e], e = t, t = n), g(t)) return r = s.call(arguments, 2), i = function() {
                            return t.apply(e || this, r.concat(s.call(arguments)))
                        }, i.guid = t.guid = t.guid || C.guid++, i
                    }, C.holdReady = function(t) {
                        t ? C.readyWait++ : C.ready(!0)
                    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = j, C.isFunction = g, C.isWindow = y, C.camelCase = G, C.type = T, C.now = Date.now, C.isNumeric = function(t) {
                        var e = C.type(t);
                        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                    }, C.trim = function(t) {
                        return null == t ? "" : (t + "").replace(Ge, "")
                    }, void 0 === (n = function() {
                        return C
                    }.apply(e, [])) || (t.exports = n);
                    var Qe = r.jQuery,
                        Je = r.$;
                    return C.noConflict = function(t) {
                        return r.$ === C && (r.$ = Je), t && r.jQuery === C && (r.jQuery = Qe), C
                    }, void 0 === i && (r.jQuery = r.$ = C), C
                }))
            },
            850: () => {},
            485: () => {},
            65: () => {},
            737: () => {},
            666: t => {
                var e = function(t) {
                    "use strict";
                    var e, n = Object.prototype,
                        r = n.hasOwnProperty,
                        i = "function" == typeof Symbol ? Symbol : {},
                        o = i.iterator || "@@iterator",
                        a = i.asyncIterator || "@@asyncIterator",
                        s = i.toStringTag || "@@toStringTag";

                    function l(t, e, n) {
                        return Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), t[e]
                    }
                    try {
                        l({}, "")
                    } catch (t) {
                        l = function(t, e, n) {
                            return t[e] = n
                        }
                    }

                    function c(t, e, n, r) {
                        var i = e && e.prototype instanceof v ? e : v,
                            o = Object.create(i.prototype),
                            a = new O(r || []);
                        return o._invoke = function(t, e, n) {
                            var r = f;
                            return function(i, o) {
                                if (r === p) throw new Error("Generator is already running");
                                if (r === h) {
                                    if ("throw" === i) throw o;
                                    return j()
                                }
                                for (n.method = i, n.arg = o;;) {
                                    var a = n.delegate;
                                    if (a) {
                                        var s = E(a, n);
                                        if (s) {
                                            if (s === m) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (r === f) throw r = h, n.arg;
                                        n.dispatchException(n.arg)
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = p;
                                    var l = u(t, e, n);
                                    if ("normal" === l.type) {
                                        if (r = n.done ? h : d, l.arg === m) continue;
                                        return {
                                            value: l.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === l.type && (r = h, n.method = "throw", n.arg = l.arg)
                                }
                            }
                        }(t, n, a), o
                    }

                    function u(t, e, n) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, n)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    t.wrap = c;
                    var f = "suspendedStart",
                        d = "suspendedYield",
                        p = "executing",
                        h = "completed",
                        m = {};

                    function v() {}

                    function g() {}

                    function y() {}
                    var b = {};
                    l(b, o, (function() {
                        return this
                    }));
                    var w = Object.getPrototypeOf,
                        x = w && w(w(A([])));
                    x && x !== n && r.call(x, o) && (b = x);
                    var T = y.prototype = v.prototype = Object.create(b);

                    function k(t) {
                        ["next", "throw", "return"].forEach((function(e) {
                            l(t, e, (function(t) {
                                return this._invoke(e, t)
                            }))
                        }))
                    }

                    function C(t, e) {
                        function n(i, o, a, s) {
                            var l = u(t[i], t, o);
                            if ("throw" !== l.type) {
                                var c = l.arg,
                                    f = c.value;
                                return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                    n("next", t, a, s)
                                }), (function(t) {
                                    n("throw", t, a, s)
                                })) : e.resolve(f).then((function(t) {
                                    c.value = t, a(c)
                                }), (function(t) {
                                    return n("throw", t, a, s)
                                }))
                            }
                            s(l.arg)
                        }
                        var i;
                        this._invoke = function(t, r) {
                            function o() {
                                return new e((function(e, i) {
                                    n(t, r, e, i)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    }

                    function E(t, n) {
                        var r = t.iterator[n.method];
                        if (r === e) {
                            if (n.delegate = null, "throw" === n.method) {
                                if (t.iterator.return && (n.method = "return", n.arg = e, E(t, n), "throw" === n.method)) return m;
                                n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return m
                        }
                        var i = u(r, t.iterator, n.arg);
                        if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, m;
                        var o = i.arg;
                        return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, m) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
                    }

                    function $(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                    }

                    function S(t) {
                        var e = t.completion || {};
                        e.type = "normal", delete e.arg, t.completion = e
                    }

                    function O(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], t.forEach($, this), this.reset(!0)
                    }

                    function A(t) {
                        if (t) {
                            var n = t[o];
                            if (n) return n.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var i = -1,
                                    a = function n() {
                                        for (; ++i < t.length;)
                                            if (r.call(t, i)) return n.value = t[i], n.done = !1, n;
                                        return n.value = e, n.done = !0, n
                                    };
                                return a.next = a
                            }
                        }
                        return {
                            next: j
                        }
                    }

                    function j() {
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    return g.prototype = y, l(T, "constructor", y), l(y, "constructor", g), g.displayName = l(y, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
                    }, t.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, s, "GeneratorFunction")), t.prototype = Object.create(T), t
                    }, t.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }, k(C.prototype), l(C.prototype, a, (function() {
                        return this
                    })), t.AsyncIterator = C, t.async = function(e, n, r, i, o) {
                        void 0 === o && (o = Promise);
                        var a = new C(c(e, n, r, i), o);
                        return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                            return t.done ? t.value : a.next()
                        }))
                    }, k(T), l(T, s, "Generator"), l(T, o, (function() {
                        return this
                    })), l(T, "toString", (function() {
                        return "[object Generator]"
                    })), t.keys = function(t) {
                        var e = [];
                        for (var n in t) e.push(n);
                        return e.reverse(),
                            function n() {
                                for (; e.length;) {
                                    var r = e.pop();
                                    if (r in t) return n.value = r, n.done = !1, n
                                }
                                return n.done = !0, n
                            }
                    }, t.values = A, O.prototype = {
                        constructor: O,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(S), !t)
                                for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var n = this;

                            function i(r, i) {
                                return s.type = "throw", s.arg = t, n.next = r, i && (n.method = "next", n.arg = e), !!i
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o],
                                    s = a.completion;
                                if ("root" === a.tryLoc) return i("end");
                                if (a.tryLoc <= this.prev) {
                                    var l = r.call(a, "catchLoc"),
                                        c = r.call(a, "finallyLoc");
                                    if (l && c) {
                                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                    } else if (l) {
                                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var i = this.tryEntries[n];
                                if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break
                                }
                            }
                            o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                            var a = o ? o.completion : {};
                            return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(a)
                        },
                        complete: function(t, e) {
                            if ("throw" === t.type) throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m
                        },
                        finish: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), m
                            }
                        },
                        catch: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.tryLoc === t) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var i = r.arg;
                                        S(n)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, n, r) {
                            return this.delegate = {
                                iterator: A(t),
                                resultName: n,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = e), m
                        }
                    }, t
                }(t.exports);
                try {
                    regeneratorRuntime = e
                } catch (t) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
                }
            }
        },
        n = {};

    function r(t) {
        var i = n[t];
        if (void 0 !== i) return i.exports;
        var o = n[t] = {
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, r), o.exports
    }
    r.m = e, t = [], r.O = (e, n, i, o) => {
        if (!n) {
            var a = 1 / 0;
            for (u = 0; u < t.length; u++) {
                for (var [n, i, o] = t[u], s = !0, l = 0; l < n.length; l++)(!1 & o || a >= o) && Object.keys(r.O).every((t => r.O[t](n[l]))) ? n.splice(l--, 1) : (s = !1, o < a && (a = o));
                if (s) {
                    t.splice(u--, 1);
                    var c = i();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        o = o || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > o; u--) t[u] = t[u - 1];
        t[u] = [n, i, o]
    }, r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {
            a: e
        }), e
    }, r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        var t = {
            773: 0,
            870: 0,
            325: 0,
            641: 0,
            246: 0
        };
        r.O.j = e => 0 === t[e];
        var e = (e, n) => {
                var i, o, [a, s, l] = n,
                    c = 0;
                if (a.some((e => 0 !== t[e]))) {
                    for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                    if (l) var u = l(r)
                }
                for (e && e(n); c < a.length; c++) o = a[c], r.o(t, o) && t[o] && t[o][0](), t[a[c]] = 0;
                return r.O(u)
            },
            n = self.webpackChunk = self.webpackChunk || [];
        n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
    })(), r.O(void 0, [870, 325, 641, 246], (() => r(63))), r.O(void 0, [870, 325, 641, 246], (() => r(850))), r.O(void 0, [870, 325, 641, 246], (() => r(485))), r.O(void 0, [870, 325, 641, 246], (() => r(65)));
    var i = r.O(void 0, [870, 325, 641, 246], (() => r(737)));
    i = r.O(i)
})();