!(function (e) {
	var t = {};
	function n(r) {
		if (t[r]) return t[r].exports;
		var o = (t[r] = { i: r, l: !1, exports: {} });
		return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = e),
		(n.c = t),
		(n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
		}),
		(n.r = function (e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(n.t = function (e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e;
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (
				(n.r(r),
				Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
				2 & t && 'string' != typeof e)
			)
				for (var o in e)
					n.d(
						r,
						o,
						function (t) {
							return e[t];
						}.bind(null, o),
					);
			return r;
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return n.d(t, 'a', t), t;
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(n.p = ''),
		n((n.s = 1));
})([
	function (e, t, n) {
		/*!
		 * clipboard.js v2.0.6
		 * https://clipboardjs.com/
		 *
		 * Licensed MIT © Zeno Rocha
		 */
		var r;
		(r = function () {
			return (function (e) {
				var t = {};
				function n(r) {
					if (t[r]) return t[r].exports;
					var o = (t[r] = { i: r, l: !1, exports: {} });
					return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
				}
				return (
					(n.m = e),
					(n.c = t),
					(n.d = function (e, t, r) {
						n.o(e, t) ||
							Object.defineProperty(e, t, { enumerable: !0, get: r });
					}),
					(n.r = function (e) {
						'undefined' != typeof Symbol &&
							Symbol.toStringTag &&
							Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
							Object.defineProperty(e, '__esModule', { value: !0 });
					}),
					(n.t = function (e, t) {
						if ((1 & t && (e = n(e)), 8 & t)) return e;
						if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
						var r = Object.create(null);
						if (
							(n.r(r),
							Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
							2 & t && 'string' != typeof e)
						)
							for (var o in e)
								n.d(
									r,
									o,
									function (t) {
										return e[t];
									}.bind(null, o),
								);
						return r;
					}),
					(n.n = function (e) {
						var t =
							e && e.__esModule
								? function () {
										return e.default;
								  }
								: function () {
										return e;
								  };
						return n.d(t, 'a', t), t;
					}),
					(n.o = function (e, t) {
						return Object.prototype.hasOwnProperty.call(e, t);
					}),
					(n.p = ''),
					n((n.s = 6))
				);
			})([
				function (e, t) {
					e.exports = function (e) {
						var t;
						if ('SELECT' === e.nodeName) e.focus(), (t = e.value);
						else if ('INPUT' === e.nodeName || 'TEXTAREA' === e.nodeName) {
							var n = e.hasAttribute('readonly');
							n || e.setAttribute('readonly', ''),
								e.select(),
								e.setSelectionRange(0, e.value.length),
								n || e.removeAttribute('readonly'),
								(t = e.value);
						} else {
							e.hasAttribute('contenteditable') && e.focus();
							var r = window.getSelection(),
								o = document.createRange();
							o.selectNodeContents(e),
								r.removeAllRanges(),
								r.addRange(o),
								(t = r.toString());
						}
						return t;
					};
				},
				function (e, t) {
					function n() {}
					(n.prototype = {
						on: function (e, t, n) {
							var r = this.e || (this.e = {});
							return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
						},
						once: function (e, t, n) {
							var r = this;
							function o() {
								r.off(e, o), t.apply(n, arguments);
							}
							return (o._ = t), this.on(e, o, n);
						},
						emit: function (e) {
							for (
								var t = [].slice.call(arguments, 1),
									n = ((this.e || (this.e = {}))[e] || []).slice(),
									r = 0,
									o = n.length;
								r < o;
								r++
							)
								n[r].fn.apply(n[r].ctx, t);
							return this;
						},
						off: function (e, t) {
							var n = this.e || (this.e = {}),
								r = n[e],
								o = [];
							if (r && t)
								for (var i = 0, c = r.length; i < c; i++)
									r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
							return o.length ? (n[e] = o) : delete n[e], this;
						},
					}),
						(e.exports = n),
						(e.exports.TinyEmitter = n);
				},
				function (e, t, n) {
					var r = n(3),
						o = n(4);
					e.exports = function (e, t, n) {
						if (!e && !t && !n) throw new Error('Missing required arguments');
						if (!r.string(t))
							throw new TypeError('Second argument must be a String');
						if (!r.fn(n))
							throw new TypeError('Third argument must be a Function');
						if (r.node(e))
							return (function (e, t, n) {
								return (
									e.addEventListener(t, n),
									{
										destroy: function () {
											e.removeEventListener(t, n);
										},
									}
								);
							})(e, t, n);
						if (r.nodeList(e))
							return (function (e, t, n) {
								return (
									Array.prototype.forEach.call(e, function (e) {
										e.addEventListener(t, n);
									}),
									{
										destroy: function () {
											Array.prototype.forEach.call(e, function (e) {
												e.removeEventListener(t, n);
											});
										},
									}
								);
							})(e, t, n);
						if (r.string(e))
							return (function (e, t, n) {
								return o(document.body, e, t, n);
							})(e, t, n);
						throw new TypeError(
							'First argument must be a String, HTMLElement, HTMLCollection, or NodeList',
						);
					};
				},
				function (e, t) {
					(t.node = function (e) {
						return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
					}),
						(t.nodeList = function (e) {
							var n = Object.prototype.toString.call(e);
							return (
								void 0 !== e &&
								('[object NodeList]' === n ||
									'[object HTMLCollection]' === n) &&
								'length' in e &&
								(0 === e.length || t.node(e[0]))
							);
						}),
						(t.string = function (e) {
							return 'string' == typeof e || e instanceof String;
						}),
						(t.fn = function (e) {
							return '[object Function]' === Object.prototype.toString.call(e);
						});
				},
				function (e, t, n) {
					var r = n(5);
					function o(e, t, n, r, o) {
						var c = i.apply(this, arguments);
						return (
							e.addEventListener(n, c, o),
							{
								destroy: function () {
									e.removeEventListener(n, c, o);
								},
							}
						);
					}
					function i(e, t, n, o) {
						return function (n) {
							(n.delegateTarget = r(n.target, t)),
								n.delegateTarget && o.call(e, n);
						};
					}
					e.exports = function (e, t, n, r, i) {
						return 'function' == typeof e.addEventListener
							? o.apply(null, arguments)
							: 'function' == typeof n
							? o.bind(null, document).apply(null, arguments)
							: ('string' == typeof e && (e = document.querySelectorAll(e)),
							  Array.prototype.map.call(e, function (e) {
									return o(e, t, n, r, i);
							  }));
					};
				},
				function (e, t) {
					if ('undefined' != typeof Element && !Element.prototype.matches) {
						var n = Element.prototype;
						n.matches =
							n.matchesSelector ||
							n.mozMatchesSelector ||
							n.msMatchesSelector ||
							n.oMatchesSelector ||
							n.webkitMatchesSelector;
					}
					e.exports = function (e, t) {
						for (; e && 9 !== e.nodeType; ) {
							if ('function' == typeof e.matches && e.matches(t)) return e;
							e = e.parentNode;
						}
					};
				},
				function (e, t, n) {
					'use strict';
					n.r(t);
					var r = n(0),
						o = n.n(r),
						i =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											'function' == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? 'symbol'
											: typeof e;
								  },
						c = (function () {
							function e(e, t) {
								for (var n = 0; n < t.length; n++) {
									var r = t[n];
									(r.enumerable = r.enumerable || !1),
										(r.configurable = !0),
										'value' in r && (r.writable = !0),
										Object.defineProperty(e, r.key, r);
								}
							}
							return function (t, n, r) {
								return n && e(t.prototype, n), r && e(t, r), t;
							};
						})(),
						a = (function () {
							function e(t) {
								!(function (e, t) {
									if (!(e instanceof t))
										throw new TypeError('Cannot call a class as a function');
								})(this, e),
									this.resolveOptions(t),
									this.initSelection();
							}
							return (
								c(e, [
									{
										key: 'resolveOptions',
										value: function () {
											var e =
												arguments.length > 0 && void 0 !== arguments[0]
													? arguments[0]
													: {};
											(this.action = e.action),
												(this.container = e.container),
												(this.emitter = e.emitter),
												(this.target = e.target),
												(this.text = e.text),
												(this.trigger = e.trigger),
												(this.selectedText = '');
										},
									},
									{
										key: 'initSelection',
										value: function () {
											this.text
												? this.selectFake()
												: this.target && this.selectTarget();
										},
									},
									{
										key: 'selectFake',
										value: function () {
											var e = this,
												t =
													'rtl' == document.documentElement.getAttribute('dir');
											this.removeFake(),
												(this.fakeHandlerCallback = function () {
													return e.removeFake();
												}),
												(this.fakeHandler =
													this.container.addEventListener(
														'click',
														this.fakeHandlerCallback,
													) || !0),
												(this.fakeElem = document.createElement('textarea')),
												(this.fakeElem.style.fontSize = '12pt'),
												(this.fakeElem.style.border = '0'),
												(this.fakeElem.style.padding = '0'),
												(this.fakeElem.style.margin = '0'),
												(this.fakeElem.style.position = 'absolute'),
												(this.fakeElem.style[t ? 'right' : 'left'] = '-9999px');
											var n =
												window.pageYOffset ||
												document.documentElement.scrollTop;
											(this.fakeElem.style.top = n + 'px'),
												this.fakeElem.setAttribute('readonly', ''),
												(this.fakeElem.value = this.text),
												this.container.appendChild(this.fakeElem),
												(this.selectedText = o()(this.fakeElem)),
												this.copyText();
										},
									},
									{
										key: 'removeFake',
										value: function () {
											this.fakeHandler &&
												(this.container.removeEventListener(
													'click',
													this.fakeHandlerCallback,
												),
												(this.fakeHandler = null),
												(this.fakeHandlerCallback = null)),
												this.fakeElem &&
													(this.container.removeChild(this.fakeElem),
													(this.fakeElem = null));
										},
									},
									{
										key: 'selectTarget',
										value: function () {
											(this.selectedText = o()(this.target)), this.copyText();
										},
									},
									{
										key: 'copyText',
										value: function () {
											var e = void 0;
											try {
												e = document.execCommand(this.action);
											} catch (t) {
												e = !1;
											}
											this.handleResult(e);
										},
									},
									{
										key: 'handleResult',
										value: function (e) {
											this.emitter.emit(e ? 'success' : 'error', {
												action: this.action,
												text: this.selectedText,
												trigger: this.trigger,
												clearSelection: this.clearSelection.bind(this),
											});
										},
									},
									{
										key: 'clearSelection',
										value: function () {
											this.trigger && this.trigger.focus(),
												document.activeElement.blur(),
												window.getSelection().removeAllRanges();
										},
									},
									{
										key: 'destroy',
										value: function () {
											this.removeFake();
										},
									},
									{
										key: 'action',
										set: function () {
											var e =
												arguments.length > 0 && void 0 !== arguments[0]
													? arguments[0]
													: 'copy';
											if (
												((this._action = e),
												'copy' !== this._action && 'cut' !== this._action)
											)
												throw new Error(
													'Invalid "action" value, use either "copy" or "cut"',
												);
										},
										get: function () {
											return this._action;
										},
									},
									{
										key: 'target',
										set: function (e) {
											if (void 0 !== e) {
												if (
													!e ||
													'object' !== (void 0 === e ? 'undefined' : i(e)) ||
													1 !== e.nodeType
												)
													throw new Error(
														'Invalid "target" value, use a valid Element',
													);
												if (
													'copy' === this.action &&
													e.hasAttribute('disabled')
												)
													throw new Error(
														'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute',
													);
												if (
													'cut' === this.action &&
													(e.hasAttribute('readonly') ||
														e.hasAttribute('disabled'))
												)
													throw new Error(
														'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes',
													);
												this._target = e;
											}
										},
										get: function () {
											return this._target;
										},
									},
								]),
								e
							);
						})(),
						l = n(1),
						u = n.n(l),
						s = n(2),
						f = n.n(s),
						d =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											'function' == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? 'symbol'
											: typeof e;
								  },
						y = (function () {
							function e(e, t) {
								for (var n = 0; n < t.length; n++) {
									var r = t[n];
									(r.enumerable = r.enumerable || !1),
										(r.configurable = !0),
										'value' in r && (r.writable = !0),
										Object.defineProperty(e, r.key, r);
								}
							}
							return function (t, n, r) {
								return n && e(t.prototype, n), r && e(t, r), t;
							};
						})(),
						p = (function (e) {
							function t(e, n) {
								!(function (e, t) {
									if (!(e instanceof t))
										throw new TypeError('Cannot call a class as a function');
								})(this, t);
								var r = (function (e, t) {
									if (!e)
										throw new ReferenceError(
											"this hasn't been initialised - super() hasn't been called",
										);
									return !t || ('object' != typeof t && 'function' != typeof t)
										? e
										: t;
								})(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
								return r.resolveOptions(n), r.listenClick(e), r;
							}
							return (
								(function (e, t) {
									if ('function' != typeof t && null !== t)
										throw new TypeError(
											'Super expression must either be null or a function, not ' +
												typeof t,
										);
									(e.prototype = Object.create(t && t.prototype, {
										constructor: {
											value: e,
											enumerable: !1,
											writable: !0,
											configurable: !0,
										},
									})),
										t &&
											(Object.setPrototypeOf
												? Object.setPrototypeOf(e, t)
												: (e.__proto__ = t));
								})(t, e),
								y(
									t,
									[
										{
											key: 'resolveOptions',
											value: function () {
												var e =
													arguments.length > 0 && void 0 !== arguments[0]
														? arguments[0]
														: {};
												(this.action =
													'function' == typeof e.action
														? e.action
														: this.defaultAction),
													(this.target =
														'function' == typeof e.target
															? e.target
															: this.defaultTarget),
													(this.text =
														'function' == typeof e.text
															? e.text
															: this.defaultText),
													(this.container =
														'object' === d(e.container)
															? e.container
															: document.body);
											},
										},
										{
											key: 'listenClick',
											value: function (e) {
												var t = this;
												this.listener = f()(e, 'click', function (e) {
													return t.onClick(e);
												});
											},
										},
										{
											key: 'onClick',
											value: function (e) {
												var t = e.delegateTarget || e.currentTarget;
												this.clipboardAction && (this.clipboardAction = null),
													(this.clipboardAction = new a({
														action: this.action(t),
														target: this.target(t),
														text: this.text(t),
														container: this.container,
														trigger: t,
														emitter: this,
													}));
											},
										},
										{
											key: 'defaultAction',
											value: function (e) {
												return h('action', e);
											},
										},
										{
											key: 'defaultTarget',
											value: function (e) {
												var t = h('target', e);
												if (t) return document.querySelector(t);
											},
										},
										{
											key: 'defaultText',
											value: function (e) {
												return h('text', e);
											},
										},
										{
											key: 'destroy',
											value: function () {
												this.listener.destroy(),
													this.clipboardAction &&
														(this.clipboardAction.destroy(),
														(this.clipboardAction = null));
											},
										},
									],
									[
										{
											key: 'isSupported',
											value: function () {
												var e =
														arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: ['copy', 'cut'],
													t = 'string' == typeof e ? [e] : e,
													n = !!document.queryCommandSupported;
												return (
													t.forEach(function (e) {
														n = n && !!document.queryCommandSupported(e);
													}),
													n
												);
											},
										},
									],
								),
								t
							);
						})(u.a);
					function h(e, t) {
						var n = 'data-clipboard-' + e;
						if (t.hasAttribute(n)) return t.getAttribute(n);
					}
					t.default = p;
				},
			]).default;
		}),
			(e.exports = r());
	},
	function (e, t, n) {
		'use strict';
		n.r(t);
		n(2);
		var r = n(0),
			o = n.n(r);
		function i(e, t) {
			var n;
			if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
				if (
					Array.isArray(e) ||
					(n = (function (e, t) {
						if (!e) return;
						if ('string' == typeof e) return c(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						'Object' === n && e.constructor && (n = e.constructor.name);
						if ('Map' === n || 'Set' === n) return Array.from(e);
						if (
							'Arguments' === n ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
						)
							return c(e, t);
					})(e)) ||
					(t && e && 'number' == typeof e.length)
				) {
					n && (e = n);
					var r = 0,
						o = function () {};
					return {
						s: o,
						n: function () {
							return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
						},
						e: function (e) {
							throw e;
						},
						f: o,
					};
				}
				throw new TypeError(
					'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
				);
			}
			var i,
				a = !0,
				l = !1;
			return {
				s: function () {
					n = e[Symbol.iterator]();
				},
				n: function () {
					var e = n.next();
					return (a = e.done), e;
				},
				e: function (e) {
					(l = !0), (i = e);
				},
				f: function () {
					try {
						a || null == n.return || n.return();
					} finally {
						if (l) throw i;
					}
				},
			};
		}
		function c(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		var a,
			l = document.querySelector('.ccSection'),
			u = document.querySelector('.bccSection'),
			s = document.querySelector('.ccButton'),
			f = document.querySelector('.bccButton'),
			d = document.querySelectorAll('.input'),
			y = document.querySelector('.copyCode'),
			p = i(d);
		try {
			for (p.s(); !(a = p.n()).done; ) {
				a.value.addEventListener('keyup', function (e) {
					var t = e.target.value,
						n = e.target.id,
						r = document.querySelector('.' + n + 'Output'),
						o = document.querySelector('.mailto-link-container'),
						i = document.getElementById(n + 'Label'),
						c = new RegExp(',');
					if (
						(console.log(r, n, i, t),
						(r.innerText = t),
						'recipient' != n &&
							(t.length >= 1
								? i.classList.add('dib')
								: i.classList.remove('dib')),
						'recipient' == n || 'cc' == n || 'bcc' == n)
					)
						if ((o.classList.add('active'), c.test(t))) {
							var a = r.innerHTML;
							(a = a.replace(/\s+/g, '')), (r.innerHTML = a);
						} else r.innerHTML = t;
					if (
						('recipient' == n &&
							(t.length >= 3
								? o.classList.add('active')
								: o.classList.remove('active')),
						'subject' == n || 'body' == n)
					) {
						var l = r.innerText,
							u = encodeURIComponent(l).replace(/%0A/g, '%0D%0A');
						r.innerText = u;
					}
				});
			}
		} catch (e) {
			p.e(e);
		} finally {
			p.f();
		}
		s.addEventListener('click', function (e) {
			l.classList.contains('dn')
				? (l.classList.remove('dn'), document.getElementById('cc').focus())
				: l.classList.add('dn');
		}),
			f.addEventListener('click', function (e) {
				u.classList.contains('dn')
					? (u.classList.remove('dn'), document.getElementById('bcc').focus())
					: u.classList.add('dn');
			});
		var h = new o.a('.copyCode', {
			target: function (e) {
				return console.log((e.innerHTML = 'Copied')), e.previousElementSibling;
			},
		});
		h.on('success', function (e, t) {
			for (
				var n = document.getElementsByClassName('copyCode'), r = 0;
				r < n.length;
				r += 1
			)
				n[r].innerHTML = 'Copy';
			e.trigger.innerHTML = 'Copied';
		}),
			y.addEventListener('click', function (e) {
				var t,
					n = document.querySelectorAll('.label.dib'),
					r = n[0],
					o = (document.querySelector('.label.dib'), n.length, i(n));
				try {
					for (o.s(); !(t = o.n()).done; ) {
						var c = t.value;
						-1 === c.innerHTML.indexOf('&') && c.prepend('&');
					}
				} catch (e) {
					o.e(e);
				} finally {
					o.f();
				}
				if (r) {
					var a = r.innerHTML;
					(a = a.replace('&amp;', '')),
						(r.innerHTML = a),
						-1 === r.innerHTML.indexOf('?') && r.prepend('?');
				}
			}),
			h.on('success', function (e, t) {
				document.getElementsByClassName('copyCode');
				(e.trigger.innerHTML = 'Copied!'),
					y.addEventListener('mouseover', function (e) {
						(y.innerHTML = 'Copied!') && (y.innerHTML = 'Copy Code');
					});
			});
	},
	function (e, t) {
		var n = window.matchMedia('(prefers-color-scheme: light)'),
			r = window.matchMedia('(prefers-color-scheme: dark)'),
			o = document.getElementById('nav-light');
		function i() {
			document.body.classList.replace('light', 'dark');
		}
		function c() {
			document.body.classList.replace('dark', 'light');
		}
		function a() {
			n.matches
				? (c(), localStorage.setItem('mode', 'light'))
				: r.matches && (i(), localStorage.setItem('mode', 'dark'));
		}
		'dark' == localStorage.getItem('mode')
			? i()
			: 'light' == localStorage.getItem('mode') || n.matches
			? c()
			: r.matches && i(),
			o.addEventListener('click', function () {
				document.body.classList.contains('light')
					? (i(), localStorage.setItem('mode', 'dark'))
					: (c(), localStorage.setItem('mode', 'light'));
			}),
			n.addListener(a),
			r.addListener(a);
	},
]);
