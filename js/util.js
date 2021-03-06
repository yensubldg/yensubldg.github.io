/*! website - v0.1.0 - 2020-06-10 */ function SplitText(a, b) {
	function c(a) {
		if ('object' == typeof a && null !== a) {
			var b = {};
			for (var d in a) b[d] = c(a[d]);
			return b;
		}
		return a;
	}
	function d(a, b) {
		return new RegExp('(\\s|^)' + b + '(\\s|$)').test(a.className);
	}
	function e(a, b) {
		d(a, b) || (a.className += ' ' + b);
	}
	function f(a) {
		var a = a,
			b = 0,
			c = 0,
			d = 0,
			e = 0;
		if (a.offsetParent) {
			do {
				a.offsetParent && (a.offsetParent, document.getElementsByTagName('html')[0]),
					(b += a.offsetTop),
					(c += a.offsetParent ? a.offsetParent.scrollTop : 0),
					(d += a.offsetLeft),
					(e += a.offsetParent ? a.offsetParent.scrollLeft : 0);
			} while ((a = a.offsetParent));
			return [d - e, b - c];
		}
	}
	function g(a, b) {
		var c = "<div style='display:inline-block;'>",
			d = '</div>';
		a.innerHTML = c + a.innerHTML.replaceAll(' ', d + ' ' + c) + d;
		for (var g = a.querySelectorAll('div'), h = 0; h < g.length; h++) {
			if (
				(void 0 !== b.vars.wordsClass &&
					'undefined' != b.vars.wordsClass &&
					e(g[h], b.vars.wordsClass.replaceAll('++', h + 1)),
				null !== b.vars.position)
			)
				if ('absolute' == b.vars.position)
					(g[h].toBe = { top: g[h].offsetTop, left: g[h].offsetLeft }), (g[h].style.position = 'relative');
				else if ('fixed' == b.vars.position) {
					var i = f(g[h]);
					(g[h].toBe = { top: i[1], left: i[0] }), (g[h].style.position = 'relative');
				} else g[h].style.position = b.vars.position;
			p.words.push(g[h]);
		}
	}
	function h(a, b) {
		var c = "<div style='display:inline-block;'>",
			d = '</div>',
			g = a.innerHTML.match(/(&\w+;)/g);
		a.innerHTML =
			c +
			a.innerHTML
				.replace(/&\w+;/g, 'áˆ…')
				.split('')
				.join(d + c) +
			d;
		for (var h = a.querySelectorAll('div'), i = 0; i < h.length; i++) {
			if (void 0 !== b.vars.charsClass && 'undefined' != b.vars.charsClass) {
				var j = b.vars.charsClass.replaceAll('++', i + 1);
				(j = i != h.length - 1 ? j.replaceAll('**', h[i].innerHTML + h[i + 1].innerHTML) : j.replaceAll('**', '')),
					e(h[i], j);
			}
			if (null !== b.vars.position)
				if ('absolute' == b.vars.position)
					(h[i].toBe = { top: h[i].offsetTop, left: h[i].offsetLeft }), (h[i].style.position = 'relative');
				else if ('fixed' == b.vars.position) {
					var k = f(h[i]);
					(h[i].toBe = { top: k[1], left: k[0] }), (h[i].style.position = 'relative');
				} else h[i].style.position = b.vars.position;
			'áˆ…' == h[i].innerHTML && ((h[i].innerHTML = g[0]), g.splice(0, 1)), p.chars.push(h[i]);
		}
	}
	String.prototype.replaceAll = function (a, b) {
		return this.split(a).join(b);
	};
	var a = a || [],
		i = {
			type: 'chars,words,lines',
			charsClass: void 0,
			linesClass: void 0,
			wordsClass: void 0,
			position: 'relative',
		};
	(this.HTMLobjects = []),
		(this.vars = {}),
		(this.originalHTML = []),
		(this.lines = []),
		(this.words = []),
		(this.chars = []),
		Array.isArray(a) || (a = [a]);
	for (var j = 0; j < a.length; j++) {
		if (
			(1 == a[j].nodeType && this.HTMLobjects.push(a[j]),
			window.jQuery && a[j] && (a[j] instanceof jQuery || a[j].constructor.prototype.jquery))
		)
			for (var k = 0; k < a[j].length; k++) 1 == a[j][k].nodeType && this.HTMLobjects.push(a[j][k]);
		if ('string' == typeof a[j]) {
			elements = document.querySelectorAll(a[j]);
			for (var k = 0; k < elements.length; k++) 1 == elements[k].nodeType && this.HTMLobjects.push(elements[k]);
		}
	}
	if (b && 'object' == typeof b && null !== b) {
		if (b.type && 'string' == typeof b.type) {
			b.type = b.type.split(',');
			for (var l = ['chars', 'words', 'lines'], m = [], j = 0; j < b.type.length; j++)
				-1 != l.indexOf(b.type[j].toLowerCase()) && -1 == m.indexOf(b.type[j].toLowerCase())
					? m.push(b.type[j].toLowerCase())
					: console.error(b.type[j] + 'is not a valid type');
			0 == m.length ? (this.vars.type = i.type) : (this.vars.type = m.join(','));
		} else this.vars.type = i.type;
		(this.vars.charsClass = b.charsClass && 'string' == typeof b.charsClass ? b.charsClass : i.charsClass),
			(this.vars.wordsClass = b.wordsClass && 'string' == typeof b.wordsClass ? b.wordsClass : i.wordsClass),
			(this.vars.linesClass = b.linesClass && 'string' == typeof b.linesClass ? b.linesClass : i.linesClass);
		var n = ['absolute', 'relative', 'static', 'fixed', 'inherit', 'initial', null];
		this.vars.position = b.position && -1 != n.indexOf(b.position) ? b.position : i.position;
	} else this.vars = c(i);
	for (var j = 0; j < this.HTMLobjects.length; j++) this.originalHTML[j] = this.HTMLobjects[j].innerHTML;
	(this.revert = function () {
		for (var a = 0; a < this.HTMLobjects.length; a++) this.HTMLobjects[a].innerHTML = this.originalHTML[a];
	}),
		(this.vars.type = this.vars.type.split(','));
	for (var j = 0; j < this.HTMLobjects.length; j++) {
		var o = this.HTMLobjects[j];
		o.innerHTML = o.innerHTML.replace(/<\/?[^>]+(>|$)/g, '');
		var p = { lines: [], words: [], chars: [] };
		if (-1 != this.vars.type.indexOf('lines')) {
			var q = o.innerHTML,
				r = q.split(' '),
				s = [];
			o.innerHTML = r[0];
			for (var t = o.offsetHeight, k = 1; k < r.length; k++)
				(o.innerHTML = o.innerHTML + ' ' + r[k]),
					o.offsetHeight > t && ((t = o.offsetHeight), s.push(o.innerHTML.length - (r[k].length + 1)));
			s.push(o.innerHTML.length), (o.innerHTML = '');
			for (var k = 0; k < s.length; k++) {
				var u = 0 == k ? 0 : s[k - 1] + 1,
					v = k == s.length - 1 ? q.length : s[k],
					w = document.createElement('div');
				if (
					((w.style.display = 'block'),
					void 0 !== this.vars.linesClass &&
						'undefined' != this.vars.linesClass &&
						(this.class = this.vars.linesClass.replace('++', k + 1)),
					(w.innerHTML = q.substring(u, v)),
					o.appendChild(w),
					null !== this.vars.position)
				)
					if ('absolute' == this.vars.position)
						(w.toBe = { top: w.offsetTop, left: w.offsetLeft }), (w.style.position = 'relative');
					else if ('fixed' == this.vars.position) {
						var x = f(w);
						(w.toBe = { top: x[1], left: x[0] }), (w.style.position = 'relative');
					} else w.style.position = this.vars.position;
				p.lines.push(w);
			}
		}
		if (-1 != this.vars.type.indexOf('words'))
			if (-1 != this.vars.type.indexOf('lines')) for (var k = 0; k < p.lines.length; k++) g(p.lines[k], this);
			else g(o, this);
		if (-1 != this.vars.type.indexOf('chars'))
			if (-1 != this.vars.type.indexOf('words')) for (var k = 0; k < p.words.length; k++) h(p.words[k], this);
			else if (-1 != this.vars.type.indexOf('lines')) for (var k = 0; k < p.lines.length; k++) h(p.lines[k], this);
			else h(o, this);
		if ('absolute' == this.vars.position || 'fixed' == this.vars.position) {
			for (var k = p.chars.length - 1; k >= 0; k--)
				(p.chars[k].style.width = p.chars[k].offsetWidth + 'px'),
					(p.chars[k].style.height = p.chars[k].offsetHeight + 'px'),
					(p.chars[k].style.left = p.chars[k].toBe.left + 'px'),
					(p.chars[k].style.top = p.chars[k].toBe.top + 'px');
			for (var k = p.words.length - 1; k >= 0; k--)
				(p.words[k].style.width = p.words[k].offsetWidth + 'px'),
					(p.words[k].style.height = p.words[k].offsetHeight + 'px'),
					(p.words[k].style.left = p.words[k].toBe.left + 'px'),
					(p.words[k].style.top = p.words[k].toBe.top + 'px');
			for (var k = p.lines.length - 1; k >= 0; k--)
				(p.lines[k].style.width = p.lines[k].offsetWidth + 'px'),
					(p.lines[k].style.height = p.lines[k].offsetHeight + 'px'),
					(p.lines[k].style.left = p.lines[k].toBe.left + 'px'),
					(p.lines[k].style.top = p.lines[k].toBe.top + 'px');
			for (var k = p.chars.length - 1; k >= 0; k--) p.chars[k].style.position = this.vars.position;
			for (var k = p.words.length - 1; k >= 0; k--) p.words[k].style.position = this.vars.position;
			for (var k = p.lines.length - 1; k >= 0; k--) p.lines[k].style.position = this.vars.position;
		}
		(this.lines = this.lines.concat(p.lines)),
			(this.words = this.words.concat(p.words)),
			(this.chars = this.chars.concat(p.chars));
	}
}
var _gsScope = 'undefined' != typeof module && module.exports && 'undefined' != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
	'use strict';
	_gsScope._gsDefine(
		'TweenMax',
		['core.Animation', 'core.SimpleTimeline', 'TweenLite'],
		function (a, b, c) {
			var d = function (a) {
					var b,
						c = [],
						d = a.length;
					for (b = 0; b !== d; c.push(a[b++]));
					return c;
				},
				e = function (a, b, c) {
					var d,
						e,
						f = a.cycle;
					for (d in f) (e = f[d]), (a[d] = 'function' == typeof e ? e.call(b[c], c) : e[c % e.length]);
					delete a.cycle;
				},
				f = function (a, b, d) {
					c.call(this, a, b, d),
						(this._cycle = 0),
						(this._yoyo = !0 === this.vars.yoyo),
						(this._repeat = this.vars.repeat || 0),
						(this._repeatDelay = this.vars.repeatDelay || 0),
						(this._dirty = !0),
						(this.render = f.prototype.render);
				},
				g = 1e-10,
				h = c._internals,
				i = h.isSelector,
				j = h.isArray,
				k = (f.prototype = c.to({}, 0.1, {})),
				l = [];
			(f.version = '1.18.0'),
				(k.constructor = f),
				(k.kill()._gc = !1),
				(f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf),
				(f.getTweensOf = c.getTweensOf),
				(f.lagSmoothing = c.lagSmoothing),
				(f.ticker = c.ticker),
				(f.render = c.render),
				(k.invalidate = function () {
					return (
						(this._yoyo = !0 === this.vars.yoyo),
						(this._repeat = this.vars.repeat || 0),
						(this._repeatDelay = this.vars.repeatDelay || 0),
						this._uncache(!0),
						c.prototype.invalidate.call(this)
					);
				}),
				(k.updateTo = function (a, b) {
					var d,
						e = this.ratio,
						f = this.vars.immediateRender || a.immediateRender;
					b &&
						this._startTime < this._timeline._time &&
						((this._startTime = this._timeline._time),
						this._uncache(!1),
						this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
					for (d in a) this.vars[d] = a[d];
					if (this._initted || f)
						if (b) (this._initted = !1), f && this.render(0, !0, !0);
						else if (
							(this._gc && this._enabled(!0, !1),
							this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent('_onDisable', this),
							this._time / this._duration > 0.998)
						) {
							var g = this._time;
							this.render(0, !0, !1), (this._initted = !1), this.render(g, !0, !1);
						} else if (this._time > 0 || f) {
							(this._initted = !1), this._init();
							for (var h, i = 1 / (1 - e), j = this._firstPT; j; )
								(h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next);
						}
					return this;
				}),
				(k.render = function (a, b, c) {
					this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
					var d,
						e,
						f,
						i,
						j,
						k,
						l,
						m,
						n = this._dirty ? this.totalDuration() : this._totalDuration,
						o = this._time,
						p = this._totalTime,
						q = this._cycle,
						r = this._duration,
						s = this._rawPrevTime;
					if (
						(a >= n
							? ((this._totalTime = n),
							  (this._cycle = this._repeat),
							  this._yoyo && 0 != (1 & this._cycle)
									? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0))
									: ((this._time = r), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
							  this._reversed || ((d = !0), (e = 'onComplete'), (c = c || this._timeline.autoRemoveChildren)),
							  0 === r &&
									(this._initted || !this.vars.lazy || c) &&
									(this._startTime === this._timeline._duration && (a = 0),
									(0 === a || 0 > s || s === g) && s !== a && ((c = !0), s > g && (e = 'onReverseComplete')),
									(this._rawPrevTime = m = !b || a || s === a ? a : g)))
							: 1e-7 > a
							? ((this._totalTime = this._time = this._cycle = 0),
							  (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
							  (0 !== p || (0 === r && s > 0)) && ((e = 'onReverseComplete'), (d = this._reversed)),
							  0 > a &&
									((this._active = !1),
									0 === r &&
										(this._initted || !this.vars.lazy || c) &&
										(s >= 0 && (c = !0), (this._rawPrevTime = m = !b || a || s === a ? a : g))),
							  this._initted || (c = !0))
							: ((this._totalTime = this._time = a),
							  0 !== this._repeat &&
									((i = r + this._repeatDelay),
									(this._cycle = (this._totalTime / i) >> 0),
									0 !== this._cycle && this._cycle === this._totalTime / i && this._cycle--,
									(this._time = this._totalTime - this._cycle * i),
									this._yoyo && 0 != (1 & this._cycle) && (this._time = r - this._time),
									this._time > r ? (this._time = r) : 0 > this._time && (this._time = 0)),
							  this._easeType
									? ((j = this._time / r),
									  (k = this._easeType),
									  (l = this._easePower),
									  (1 === k || (3 === k && j >= 0.5)) && (j = 1 - j),
									  3 === k && (j *= 2),
									  1 === l
											? (j *= j)
											: 2 === l
											? (j *= j * j)
											: 3 === l
											? (j *= j * j * j)
											: 4 === l && (j *= j * j * j * j),
									  (this.ratio = 1 === k ? 1 - j : 2 === k ? j : 0.5 > this._time / r ? j / 2 : 1 - j / 2))
									: (this.ratio = this._ease.getRatio(this._time / r))),
						o === this._time && !c && q === this._cycle)
					)
						return void (p !== this._totalTime && this._onUpdate && (b || this._callback('onUpdate')));
					if (!this._initted) {
						if ((this._init(), !this._initted || this._gc)) return;
						if (
							!c &&
							this._firstPT &&
							((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration))
						)
							return (
								(this._time = o),
								(this._totalTime = p),
								(this._rawPrevTime = s),
								(this._cycle = q),
								h.lazyTweens.push(this),
								void (this._lazy = [a, b])
							);
						this._time && !d
							? (this.ratio = this._ease.getRatio(this._time / r))
							: d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
					}
					for (
						!1 !== this._lazy && (this._lazy = !1),
							this._active || (!this._paused && this._time !== o && a >= 0 && (this._active = !0)),
							0 === p &&
								(2 === this._initted && a > 0 && this._init(),
								this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = '_dummyGS')),
								this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this._callback('onStart'))),
							f = this._firstPT;
						f;

					)
						f.f ? f.t[f.p](f.c * this.ratio + f.s) : (f.t[f.p] = f.c * this.ratio + f.s), (f = f._next);
					this._onUpdate &&
						(0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c),
						b || ((this._totalTime !== p || d) && this._callback('onUpdate'))),
						this._cycle !== q && (b || this._gc || (this.vars.onRepeat && this._callback('onRepeat'))),
						e &&
							(!this._gc || c) &&
							(0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c),
							d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
							!b && this.vars[e] && this._callback(e),
							0 === r && this._rawPrevTime === g && m !== g && (this._rawPrevTime = 0));
				}),
				(f.to = function (a, b, c) {
					return new f(a, b, c);
				}),
				(f.from = function (a, b, c) {
					return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), new f(a, b, c);
				}),
				(f.fromTo = function (a, b, c, d) {
					return (
						(d.startAt = c),
						(d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender),
						new f(a, b, d)
					);
				}),
				(f.staggerTo = f.allTo =
					function (a, b, g, h, k, m, n) {
						h = h || 0;
						var o,
							p,
							q,
							r,
							s = g.delay || 0,
							t = [],
							u = function () {
								g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments),
									k.apply(n || g.callbackScope || this, m || l);
							},
							v = g.cycle,
							w = g.startAt && g.startAt.cycle;
						for (
							j(a) || ('string' == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))),
								a = a || [],
								0 > h && ((a = d(a)), a.reverse(), (h *= -1)),
								o = a.length - 1,
								q = 0;
							o >= q;
							q++
						) {
							p = {};
							for (r in g) p[r] = g[r];
							if ((v && e(p, a, q), w)) {
								w = p.startAt = {};
								for (r in g.startAt) w[r] = g.startAt[r];
								e(p.startAt, a, q);
							}
							(p.delay = s), q === o && k && (p.onComplete = u), (t[q] = new f(a[q], b, p)), (s += h);
						}
						return t;
					}),
				(f.staggerFrom = f.allFrom =
					function (a, b, c, d, e, g, h) {
						return (
							(c.runBackwards = !0),
							(c.immediateRender = 0 != c.immediateRender),
							f.staggerTo(a, b, c, d, e, g, h)
						);
					}),
				(f.staggerFromTo = f.allFromTo =
					function (a, b, c, d, e, g, h, i) {
						return (
							(d.startAt = c),
							(d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender),
							f.staggerTo(a, b, d, e, g, h, i)
						);
					}),
				(f.delayedCall = function (a, b, c, d, e) {
					return new f(b, 0, {
						delay: a,
						onComplete: b,
						onCompleteParams: c,
						callbackScope: d,
						onReverseComplete: b,
						onReverseCompleteParams: c,
						immediateRender: !1,
						useFrames: e,
						overwrite: 0,
					});
				}),
				(f.set = function (a, b) {
					return new f(a, 0, b);
				}),
				(f.isTweening = function (a) {
					return c.getTweensOf(a, !0).length > 0;
				});
			var m = function (a, b) {
					for (var d = [], e = 0, f = a._first; f; )
						f instanceof c ? (d[e++] = f) : (b && (d[e++] = f), (d = d.concat(m(f, b))), (e = d.length)),
							(f = f._next);
					return d;
				},
				n = (f.getAllTweens = function (b) {
					return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
				});
			(f.killAll = function (a, c, d, e) {
				null == c && (c = !0), null == d && (d = !0);
				var f,
					g,
					h,
					i = n(0 != e),
					j = i.length,
					k = c && d && e;
				for (h = 0; j > h; h++)
					(g = i[h]),
						(k || g instanceof b || ((f = g.target === g.vars.onComplete) && d) || (c && !f)) &&
							(a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
			}),
				(f.killChildTweensOf = function (a, b) {
					if (null != a) {
						var e,
							g,
							k,
							l,
							m,
							n = h.tweenLookup;
						if (('string' == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a)))
							for (l = a.length; --l > -1; ) f.killChildTweensOf(a[l], b);
						else {
							e = [];
							for (k in n)
								for (g = n[k].target.parentNode; g; )
									g === a && (e = e.concat(n[k].tweens)), (g = g.parentNode);
							for (m = e.length, l = 0; m > l; l++)
								b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1);
						}
					}
				});
			var o = function (a, c, d, e) {
				(c = !1 !== c), (d = !1 !== d), (e = !1 !== e);
				for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1; )
					(g = h[j]),
						(i || g instanceof b || ((f = g.target === g.vars.onComplete) && d) || (c && !f)) && g.paused(a);
			};
			return (
				(f.pauseAll = function (a, b, c) {
					o(!0, a, b, c);
				}),
				(f.resumeAll = function (a, b, c) {
					o(!1, a, b, c);
				}),
				(f.globalTimeScale = function (b) {
					var d = a._rootTimeline,
						e = c.ticker.time;
					return arguments.length
						? ((b = b || g),
						  (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
						  (d = a._rootFramesTimeline),
						  (e = c.ticker.frame),
						  (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
						  (d._timeScale = a._rootTimeline._timeScale = b),
						  b)
						: d._timeScale;
				}),
				(k.progress = function (a) {
					return arguments.length
						? this.totalTime(
								this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) +
									this._cycle * (this._duration + this._repeatDelay),
								!1,
						  )
						: this._time / this.duration();
				}),
				(k.totalProgress = function (a) {
					return arguments.length
						? this.totalTime(this.totalDuration() * a, !1)
						: this._totalTime / this.totalDuration();
				}),
				(k.time = function (a, b) {
					return arguments.length
						? (this._dirty && this.totalDuration(),
						  a > this._duration && (a = this._duration),
						  this._yoyo && 0 != (1 & this._cycle)
								? (a = this._duration - a + this._cycle * (this._duration + this._repeatDelay))
								: 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
						  this.totalTime(a, b))
						: this._time;
				}),
				(k.duration = function (b) {
					return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
				}),
				(k.totalDuration = function (a) {
					return arguments.length
						? -1 === this._repeat
							? this
							: this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1))
						: (this._dirty &&
								((this._totalDuration =
									-1 === this._repeat
										? 999999999999
										: this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
								(this._dirty = !1)),
						  this._totalDuration);
				}),
				(k.repeat = function (a) {
					return arguments.length ? ((this._repeat = a), this._uncache(!0)) : this._repeat;
				}),
				(k.repeatDelay = function (a) {
					return arguments.length ? ((this._repeatDelay = a), this._uncache(!0)) : this._repeatDelay;
				}),
				(k.yoyo = function (a) {
					return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
				}),
				f
			);
		},
		!0,
	),
		_gsScope._gsDefine(
			'TimelineLite',
			['core.Animation', 'core.SimpleTimeline', 'TweenLite'],
			function (a, b, c) {
				var d = function (a) {
						b.call(this, a),
							(this._labels = {}),
							(this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
							(this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
							(this._sortChildren = !0),
							(this._onUpdate = this.vars.onUpdate);
						var c,
							d,
							e = this.vars;
						for (d in e)
							(c = e[d]), i(c) && -1 !== c.join('').indexOf('{self}') && (e[d] = this._swapSelfInParams(c));
						i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
					},
					e = 1e-10,
					f = c._internals,
					g = (d._internals = {}),
					h = f.isSelector,
					i = f.isArray,
					j = f.lazyTweens,
					k = f.lazyRender,
					l = _gsScope._gsDefine.globals,
					m = function (a) {
						var b,
							c = {};
						for (b in a) c[b] = a[b];
						return c;
					},
					n = function (a, b, c) {
						var d,
							e,
							f = a.cycle;
						for (d in f) (e = f[d]), (a[d] = 'function' == typeof e ? e.call(b[c], c) : e[c % e.length]);
						delete a.cycle;
					},
					o = (g.pauseCallback = function () {}),
					p = function (a) {
						var b,
							c = [],
							d = a.length;
						for (b = 0; b !== d; c.push(a[b++]));
						return c;
					},
					q = (d.prototype = new b());
				return (
					(d.version = '1.18.0'),
					(q.constructor = d),
					(q.kill()._gc = q._forcingPlayhead = q._hasPause = !1),
					(q.to = function (a, b, d, e) {
						var f = (d.repeat && l.TweenMax) || c;
						return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
					}),
					(q.from = function (a, b, d, e) {
						return this.add(((d.repeat && l.TweenMax) || c).from(a, b, d), e);
					}),
					(q.fromTo = function (a, b, d, e, f) {
						var g = (e.repeat && l.TweenMax) || c;
						return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
					}),
					(q.staggerTo = function (a, b, e, f, g, i, j, k) {
						var l,
							o,
							q = new d({
								onComplete: i,
								onCompleteParams: j,
								callbackScope: k,
								smoothChildTiming: this.smoothChildTiming,
							}),
							r = e.cycle;
						for (
							'string' == typeof a && (a = c.selector(a) || a),
								a = a || [],
								h(a) && (a = p(a)),
								f = f || 0,
								0 > f && ((a = p(a)), a.reverse(), (f *= -1)),
								o = 0;
							a.length > o;
							o++
						)
							(l = m(e)),
								l.startAt && ((l.startAt = m(l.startAt)), l.startAt.cycle && n(l.startAt, a, o)),
								r && n(l, a, o),
								q.to(a[o], b, l, o * f);
						return this.add(q, g);
					}),
					(q.staggerFrom = function (a, b, c, d, e, f, g, h) {
						return (
							(c.immediateRender = 0 != c.immediateRender),
							(c.runBackwards = !0),
							this.staggerTo(a, b, c, d, e, f, g, h)
						);
					}),
					(q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
						return (
							(d.startAt = c),
							(d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender),
							this.staggerTo(a, b, d, e, f, g, h, i)
						);
					}),
					(q.call = function (a, b, d, e) {
						return this.add(c.delayedCall(0, a, b, d), e);
					}),
					(q.set = function (a, b, d) {
						return (
							(d = this._parseTimeOrLabel(d, 0, !0)),
							null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused),
							this.add(new c(a, 0, b), d)
						);
					}),
					(d.exportRoot = function (a, b) {
						(a = a || {}), null == a.smoothChildTiming && (a.smoothChildTiming = !0);
						var e,
							f,
							g = new d(a),
							h = g._timeline;
						for (
							null == b && (b = !0),
								h._remove(g, !0),
								g._startTime = 0,
								g._rawPrevTime = g._time = g._totalTime = h._time,
								e = h._first;
							e;

						)
							(f = e._next),
								(b && e instanceof c && e.target === e.vars.onComplete) || g.add(e, e._startTime - e._delay),
								(e = f);
						return h.add(g, 0), g;
					}),
					(q.add = function (e, f, g, h) {
						var j, k, l, m, n, o;
						if (('number' != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a))) {
							if (e instanceof Array || (e && e.push && i(e))) {
								for (g = g || 'normal', h = h || 0, j = f, k = e.length, l = 0; k > l; l++)
									i((m = e[l])) && (m = new d({ tweens: m })),
										this.add(m, j),
										'string' != typeof m &&
											'function' != typeof m &&
											('sequence' === g
												? (j = m._startTime + m.totalDuration() / m._timeScale)
												: 'start' === g && (m._startTime -= m.delay())),
										(j += h);
								return this._uncache(!0);
							}
							if ('string' == typeof e) return this.addLabel(e, f);
							if ('function' != typeof e)
								throw (
									'Cannot add ' + e + ' into the timeline; it is not a tween, timeline, function, or string.'
								);
							e = c.delayedCall(0, e);
						}
						if (
							(b.prototype.add.call(this, e, f),
							(this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
						)
							for (n = this, o = n.rawTime() > e._startTime; n._timeline; )
								o && n._timeline.smoothChildTiming
									? n.totalTime(n._totalTime, !0)
									: n._gc && n._enabled(!0, !1),
									(n = n._timeline);
						return this;
					}),
					(q.remove = function (b) {
						if (b instanceof a) {
							this._remove(b, !1);
							var c = (b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline);
							return (
								(b._startTime =
									(b._paused ? b._pauseTime : c._time) -
									(b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale),
								this
							);
						}
						if (b instanceof Array || (b && b.push && i(b))) {
							for (var d = b.length; --d > -1; ) this.remove(b[d]);
							return this;
						}
						return 'string' == typeof b ? this.removeLabel(b) : this.kill(null, b);
					}),
					(q._remove = function (a, c) {
						b.prototype._remove.call(this, a, c);
						var d = this._last;
						return (
							d
								? this._time > d._startTime + d._totalDuration / d._timeScale &&
								  ((this._time = this.duration()), (this._totalTime = this._totalDuration))
								: (this._time = this._totalTime = this._duration = this._totalDuration = 0),
							this
						);
					}),
					(q.append = function (a, b) {
						return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
					}),
					(q.insert = q.insertMultiple =
						function (a, b, c, d) {
							return this.add(a, b || 0, c, d);
						}),
					(q.appendMultiple = function (a, b, c, d) {
						return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
					}),
					(q.addLabel = function (a, b) {
						return (this._labels[a] = this._parseTimeOrLabel(b)), this;
					}),
					(q.addPause = function (a, b, d, e) {
						var f = c.delayedCall(0, o, d, e || this);
						return (
							(f.vars.onComplete = f.vars.onReverseComplete = b),
							(f.data = 'isPause'),
							(this._hasPause = !0),
							this.add(f, a)
						);
					}),
					(q.removeLabel = function (a) {
						return delete this._labels[a], this;
					}),
					(q.getLabelTime = function (a) {
						return null != this._labels[a] ? this._labels[a] : -1;
					}),
					(q._parseTimeOrLabel = function (b, c, d, e) {
						var f;
						if (e instanceof a && e.timeline === this) this.remove(e);
						else if (e && (e instanceof Array || (e.push && i(e))))
							for (f = e.length; --f > -1; ) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
						if ('string' == typeof c)
							return this._parseTimeOrLabel(
								c,
								d && 'number' == typeof b && null == this._labels[c] ? b - this.duration() : 0,
								d,
							);
						if (((c = c || 0), 'string' != typeof b || (!isNaN(b) && null == this._labels[b])))
							null == b && (b = this.duration());
						else {
							if (-1 === (f = b.indexOf('=')))
								return null == this._labels[b]
									? d
										? (this._labels[b] = this.duration() + c)
										: c
									: this._labels[b] + c;
							(c = parseInt(b.charAt(f - 1) + '1', 10) * Number(b.substr(f + 1))),
								(b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration());
						}
						return Number(b) + c;
					}),
					(q.seek = function (a, b) {
						return this.totalTime('number' == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b);
					}),
					(q.stop = function () {
						return this.paused(!0);
					}),
					(q.gotoAndPlay = function (a, b) {
						return this.play(a, b);
					}),
					(q.gotoAndStop = function (a, b) {
						return this.pause(a, b);
					}),
					(q.render = function (a, b, c) {
						this._gc && this._enabled(!0, !1);
						var d,
							f,
							g,
							h,
							i,
							l,
							m = this._dirty ? this.totalDuration() : this._totalDuration,
							n = this._time,
							o = this._startTime,
							p = this._timeScale,
							q = this._paused;
						if (a >= m)
							(this._totalTime = this._time = m),
								this._reversed ||
									this._hasPausedChild() ||
									((f = !0),
									(h = 'onComplete'),
									(i = !!this._timeline.autoRemoveChildren),
									0 === this._duration &&
										(0 === a || 0 > this._rawPrevTime || this._rawPrevTime === e) &&
										this._rawPrevTime !== a &&
										this._first &&
										((i = !0), this._rawPrevTime > e && (h = 'onReverseComplete'))),
								(this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e),
								(a = m + 1e-4);
						else if (1e-7 > a)
							if (
								((this._totalTime = this._time = 0),
								(0 !== n ||
									(0 === this._duration &&
										this._rawPrevTime !== e &&
										(this._rawPrevTime > 0 || (0 > a && this._rawPrevTime >= 0)))) &&
									((h = 'onReverseComplete'), (f = this._reversed)),
								0 > a)
							)
								(this._active = !1),
									this._timeline.autoRemoveChildren && this._reversed
										? ((i = f = !0), (h = 'onReverseComplete'))
										: this._rawPrevTime >= 0 && this._first && (i = !0),
									(this._rawPrevTime = a);
							else {
								if (
									((this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e),
									0 === a && f)
								)
									for (d = this._first; d && 0 === d._startTime; ) d._duration || (f = !1), (d = d._next);
								(a = 0), this._initted || (i = !0);
							}
						else {
							if (this._hasPause && !this._forcingPlayhead && !b) {
								if (a >= n)
									for (d = this._first; d && a >= d._startTime && !l; )
										d._duration ||
											'isPause' !== d.data ||
											d.ratio ||
											(0 === d._startTime && 0 === this._rawPrevTime) ||
											(l = d),
											(d = d._next);
								else
									for (d = this._last; d && d._startTime >= a && !l; )
										d._duration || ('isPause' === d.data && d._rawPrevTime > 0 && (l = d)), (d = d._prev);
								l &&
									((this._time = a = l._startTime),
									(this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)));
							}
							this._totalTime = this._time = this._rawPrevTime = a;
						}
						if ((this._time !== n && this._first) || c || i || l) {
							if (
								(this._initted || (this._initted = !0),
								this._active || (!this._paused && this._time !== n && a > 0 && (this._active = !0)),
								0 === n && this.vars.onStart && 0 !== this._time && (b || this._callback('onStart')),
								this._time >= n)
							)
								for (d = this._first; d && ((g = d._next), !this._paused || q); )
									(d._active || (d._startTime <= this._time && !d._paused && !d._gc)) &&
										(l === d && this.pause(),
										d._reversed
											? d.render(
													(d._dirty ? d.totalDuration() : d._totalDuration) -
														(a - d._startTime) * d._timeScale,
													b,
													c,
											  )
											: d.render((a - d._startTime) * d._timeScale, b, c)),
										(d = g);
							else
								for (d = this._last; d && ((g = d._prev), !this._paused || q); ) {
									if (d._active || (n >= d._startTime && !d._paused && !d._gc)) {
										if (l === d) {
											for (l = d._prev; l && l.endTime() > this._time; )
												l.render(
													l._reversed
														? l.totalDuration() - (a - l._startTime) * l._timeScale
														: (a - l._startTime) * l._timeScale,
													b,
													c,
												),
													(l = l._prev);
											(l = null), this.pause();
										}
										d._reversed
											? d.render(
													(d._dirty ? d.totalDuration() : d._totalDuration) -
														(a - d._startTime) * d._timeScale,
													b,
													c,
											  )
											: d.render((a - d._startTime) * d._timeScale, b, c);
									}
									d = g;
								}
							this._onUpdate && (b || (j.length && k(), this._callback('onUpdate'))),
								h &&
									(this._gc ||
										((o === this._startTime || p !== this._timeScale) &&
											(0 === this._time || m >= this.totalDuration()) &&
											(f &&
												(j.length && k(),
												this._timeline.autoRemoveChildren && this._enabled(!1, !1),
												(this._active = !1)),
											!b && this.vars[h] && this._callback(h))));
						}
					}),
					(q._hasPausedChild = function () {
						for (var a = this._first; a; ) {
							if (a._paused || (a instanceof d && a._hasPausedChild())) return !0;
							a = a._next;
						}
						return !1;
					}),
					(q.getChildren = function (a, b, d, e) {
						e = e || -9999999999;
						for (var f = [], g = this._first, h = 0; g; )
							e > g._startTime ||
								(g instanceof c
									? !1 !== b && (f[h++] = g)
									: (!1 !== d && (f[h++] = g),
									  !1 !== a && ((f = f.concat(g.getChildren(!0, b, d))), (h = f.length)))),
								(g = g._next);
						return f;
					}),
					(q.getTweensOf = function (a, b) {
						var d,
							e,
							f = this._gc,
							g = [],
							h = 0;
						for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1; )
							(d[e].timeline === this || (b && this._contains(d[e]))) && (g[h++] = d[e]);
						return f && this._enabled(!1, !0), g;
					}),
					(q.recent = function () {
						return this._recent;
					}),
					(q._contains = function (a) {
						for (var b = a.timeline; b; ) {
							if (b === this) return !0;
							b = b.timeline;
						}
						return !1;
					}),
					(q.shiftChildren = function (a, b, c) {
						c = c || 0;
						for (var d, e = this._first, f = this._labels; e; )
							e._startTime >= c && (e._startTime += a), (e = e._next);
						if (b) for (d in f) f[d] >= c && (f[d] += a);
						return this._uncache(!0);
					}),
					(q._kill = function (a, b) {
						if (!a && !b) return this._enabled(!1, !1);
						for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1; )
							c[d]._kill(a, b) && (e = !0);
						return e;
					}),
					(q.clear = function (a) {
						var b = this.getChildren(!1, !0, !0),
							c = b.length;
						for (this._time = this._totalTime = 0; --c > -1; ) b[c]._enabled(!1, !1);
						return !1 !== a && (this._labels = {}), this._uncache(!0);
					}),
					(q.invalidate = function () {
						for (var b = this._first; b; ) b.invalidate(), (b = b._next);
						return a.prototype.invalidate.call(this);
					}),
					(q._enabled = function (a, c) {
						if (a === this._gc) for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next);
						return b.prototype._enabled.call(this, a, c);
					}),
					(q.totalTime = function () {
						this._forcingPlayhead = !0;
						var b = a.prototype.totalTime.apply(this, arguments);
						return (this._forcingPlayhead = !1), b;
					}),
					(q.duration = function (a) {
						return arguments.length
							? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this)
							: (this._dirty && this.totalDuration(), this._duration);
					}),
					(q.totalDuration = function (a) {
						if (!arguments.length) {
							if (this._dirty) {
								for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
									(b = e._prev),
										e._dirty && e.totalDuration(),
										e._startTime > f && this._sortChildren && !e._paused
											? this.add(e, e._startTime - e._delay)
											: (f = e._startTime),
										0 > e._startTime &&
											!e._paused &&
											((d -= e._startTime),
											this._timeline.smoothChildTiming &&
												(this._startTime += e._startTime / this._timeScale),
											this.shiftChildren(-e._startTime, !1, -9999999999),
											(f = 0)),
										(c = e._startTime + e._totalDuration / e._timeScale),
										c > d && (d = c),
										(e = b);
								(this._duration = this._totalDuration = d), (this._dirty = !1);
							}
							return this._totalDuration;
						}
						return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this;
					}),
					(q.paused = function (b) {
						if (!b)
							for (var c = this._first, d = this._time; c; )
								c._startTime === d && 'isPause' === c.data && (c._rawPrevTime = 0), (c = c._next);
						return a.prototype.paused.apply(this, arguments);
					}),
					(q.usesFrames = function () {
						for (var b = this._timeline; b._timeline; ) b = b._timeline;
						return b === a._rootFramesTimeline;
					}),
					(q.rawTime = function () {
						return this._paused
							? this._totalTime
							: (this._timeline.rawTime() - this._startTime) * this._timeScale;
					}),
					d
				);
			},
			!0,
		),
		_gsScope._gsDefine(
			'TimelineMax',
			['TimelineLite', 'TweenLite', 'easing.Ease'],
			function (a, b, c) {
				var d = function (b) {
						a.call(this, b),
							(this._repeat = this.vars.repeat || 0),
							(this._repeatDelay = this.vars.repeatDelay || 0),
							(this._cycle = 0),
							(this._yoyo = !0 === this.vars.yoyo),
							(this._dirty = !0);
					},
					e = 1e-10,
					f = b._internals,
					g = f.lazyTweens,
					h = f.lazyRender,
					i = new c(null, null, 1, 0),
					j = (d.prototype = new a());
				return (
					(j.constructor = d),
					(j.kill()._gc = !1),
					(d.version = '1.18.0'),
					(j.invalidate = function () {
						return (
							(this._yoyo = !0 === this.vars.yoyo),
							(this._repeat = this.vars.repeat || 0),
							(this._repeatDelay = this.vars.repeatDelay || 0),
							this._uncache(!0),
							a.prototype.invalidate.call(this)
						);
					}),
					(j.addCallback = function (a, c, d, e) {
						return this.add(b.delayedCall(0, a, d, e), c);
					}),
					(j.removeCallback = function (a, b) {
						if (a)
							if (null == b) this._kill(null, a);
							else
								for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1; )
									c[d]._startTime === e && c[d]._enabled(!1, !1);
						return this;
					}),
					(j.removePause = function (b) {
						return this.removeCallback(a._internals.pauseCallback, b);
					}),
					(j.tweenTo = function (a, c) {
						c = c || {};
						var d,
							e,
							f,
							g = { ease: i, useFrames: this.usesFrames(), immediateRender: !1 };
						for (e in c) g[e] = c[e];
						return (
							(g.time = this._parseTimeOrLabel(a)),
							(d = Math.abs(Number(g.time) - this._time) / this._timeScale || 0.001),
							(f = new b(this, d, g)),
							(g.onStart = function () {
								f.target.paused(!0),
									f.vars.time !== f.target.time() &&
										d === f.duration() &&
										f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale),
									c.onStart && f._callback('onStart');
							}),
							f
						);
					}),
					(j.tweenFromTo = function (a, b, c) {
						(c = c || {}),
							(a = this._parseTimeOrLabel(a)),
							(c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }),
							(c.immediateRender = !1 !== c.immediateRender);
						var d = this.tweenTo(b, c);
						return d.duration(Math.abs(d.vars.time - a) / this._timeScale || 0.001);
					}),
					(j.render = function (a, b, c) {
						this._gc && this._enabled(!0, !1);
						var d,
							f,
							i,
							j,
							k,
							l,
							m,
							n = this._dirty ? this.totalDuration() : this._totalDuration,
							o = this._duration,
							p = this._time,
							q = this._totalTime,
							r = this._startTime,
							s = this._timeScale,
							t = this._rawPrevTime,
							u = this._paused,
							v = this._cycle;
						if (a >= n)
							this._locked || ((this._totalTime = n), (this._cycle = this._repeat)),
								this._reversed ||
									this._hasPausedChild() ||
									((f = !0),
									(j = 'onComplete'),
									(k = !!this._timeline.autoRemoveChildren),
									0 === this._duration &&
										(0 === a || 0 > t || t === e) &&
										t !== a &&
										this._first &&
										((k = !0), t > e && (j = 'onReverseComplete'))),
								(this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e),
								this._yoyo && 0 != (1 & this._cycle)
									? (this._time = a = 0)
									: ((this._time = o), (a = o + 1e-4));
						else if (1e-7 > a)
							if (
								(this._locked || (this._totalTime = this._cycle = 0),
								(this._time = 0),
								(0 !== p || (0 === o && t !== e && (t > 0 || (0 > a && t >= 0)) && !this._locked)) &&
									((j = 'onReverseComplete'), (f = this._reversed)),
								0 > a)
							)
								(this._active = !1),
									this._timeline.autoRemoveChildren && this._reversed
										? ((k = f = !0), (j = 'onReverseComplete'))
										: t >= 0 && this._first && (k = !0),
									(this._rawPrevTime = a);
							else {
								if (((this._rawPrevTime = o || !b || a || this._rawPrevTime === a ? a : e), 0 === a && f))
									for (d = this._first; d && 0 === d._startTime; ) d._duration || (f = !1), (d = d._next);
								(a = 0), this._initted || (k = !0);
							}
						else if (
							(0 === o && 0 > t && (k = !0),
							(this._time = this._rawPrevTime = a),
							this._locked ||
								((this._totalTime = a),
								0 !== this._repeat &&
									((l = o + this._repeatDelay),
									(this._cycle = (this._totalTime / l) >> 0),
									0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--,
									(this._time = this._totalTime - this._cycle * l),
									this._yoyo && 0 != (1 & this._cycle) && (this._time = o - this._time),
									this._time > o
										? ((this._time = o), (a = o + 1e-4))
										: 0 > this._time
										? (this._time = a = 0)
										: (a = this._time))),
							this._hasPause && !this._forcingPlayhead && !b)
						) {
							if ((a = this._time) >= p)
								for (d = this._first; d && a >= d._startTime && !m; )
									d._duration ||
										'isPause' !== d.data ||
										d.ratio ||
										(0 === d._startTime && 0 === this._rawPrevTime) ||
										(m = d),
										(d = d._next);
							else
								for (d = this._last; d && d._startTime >= a && !m; )
									d._duration || ('isPause' === d.data && d._rawPrevTime > 0 && (m = d)), (d = d._prev);
							m &&
								((this._time = a = m._startTime),
								(this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)));
						}
						if (this._cycle !== v && !this._locked) {
							var w = this._yoyo && 0 != (1 & v),
								x = w === (this._yoyo && 0 != (1 & this._cycle)),
								y = this._totalTime,
								z = this._cycle,
								A = this._rawPrevTime,
								B = this._time;
							if (
								((this._totalTime = v * o),
								v > this._cycle ? (w = !w) : (this._totalTime += o),
								(this._time = p),
								(this._rawPrevTime = 0 === o ? t - 1e-4 : t),
								(this._cycle = v),
								(this._locked = !0),
								(p = w ? 0 : o),
								this.render(p, b, 0 === o),
								b || this._gc || (this.vars.onRepeat && this._callback('onRepeat')),
								x && ((p = w ? o + 1e-4 : -1e-4), this.render(p, !0, !1)),
								(this._locked = !1),
								this._paused && !u)
							)
								return;
							(this._time = B), (this._totalTime = y), (this._cycle = z), (this._rawPrevTime = A);
						}
						if (!((this._time !== p && this._first) || c || k || m))
							return void (q !== this._totalTime && this._onUpdate && (b || this._callback('onUpdate')));
						if (
							(this._initted || (this._initted = !0),
							this._active || (!this._paused && this._totalTime !== q && a > 0 && (this._active = !0)),
							0 === q && this.vars.onStart && 0 !== this._totalTime && (b || this._callback('onStart')),
							this._time >= p)
						)
							for (d = this._first; d && ((i = d._next), !this._paused || u); )
								(d._active || (d._startTime <= this._time && !d._paused && !d._gc)) &&
									(m === d && this.pause(),
									d._reversed
										? d.render(
												(d._dirty ? d.totalDuration() : d._totalDuration) -
													(a - d._startTime) * d._timeScale,
												b,
												c,
										  )
										: d.render((a - d._startTime) * d._timeScale, b, c)),
									(d = i);
						else
							for (d = this._last; d && ((i = d._prev), !this._paused || u); ) {
								if (d._active || (p >= d._startTime && !d._paused && !d._gc)) {
									if (m === d) {
										for (m = d._prev; m && m.endTime() > this._time; )
											m.render(
												m._reversed
													? m.totalDuration() - (a - m._startTime) * m._timeScale
													: (a - m._startTime) * m._timeScale,
												b,
												c,
											),
												(m = m._prev);
										(m = null), this.pause();
									}
									d._reversed
										? d.render(
												(d._dirty ? d.totalDuration() : d._totalDuration) -
													(a - d._startTime) * d._timeScale,
												b,
												c,
										  )
										: d.render((a - d._startTime) * d._timeScale, b, c);
								}
								d = i;
							}
						this._onUpdate && (b || (g.length && h(), this._callback('onUpdate'))),
							j &&
								(this._locked ||
									this._gc ||
									((r === this._startTime || s !== this._timeScale) &&
										(0 === this._time || n >= this.totalDuration()) &&
										(f &&
											(g.length && h(),
											this._timeline.autoRemoveChildren && this._enabled(!1, !1),
											(this._active = !1)),
										!b && this.vars[j] && this._callback(j))));
					}),
					(j.getActive = function (a, b, c) {
						null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
						var d,
							e,
							f = [],
							g = this.getChildren(a, b, c),
							h = 0,
							i = g.length;
						for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
						return f;
					}),
					(j.getLabelAfter = function (a) {
						a || (0 !== a && (a = this._time));
						var b,
							c = this.getLabelsArray(),
							d = c.length;
						for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
						return null;
					}),
					(j.getLabelBefore = function (a) {
						null == a && (a = this._time);
						for (var b = this.getLabelsArray(), c = b.length; --c > -1; ) if (a > b[c].time) return b[c].name;
						return null;
					}),
					(j.getLabelsArray = function () {
						var a,
							b = [],
							c = 0;
						for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
						return (
							b.sort(function (a, b) {
								return a.time - b.time;
							}),
							b
						);
					}),
					(j.progress = function (a, b) {
						return arguments.length
							? this.totalTime(
									this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) +
										this._cycle * (this._duration + this._repeatDelay),
									b,
							  )
							: this._time / this.duration();
					}),
					(j.totalProgress = function (a, b) {
						return arguments.length
							? this.totalTime(this.totalDuration() * a, b)
							: this._totalTime / this.totalDuration();
					}),
					(j.totalDuration = function (b) {
						return arguments.length
							? -1 === this._repeat
								? this
								: this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1))
							: (this._dirty &&
									(a.prototype.totalDuration.call(this),
									(this._totalDuration =
										-1 === this._repeat
											? 999999999999
											: this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)),
							  this._totalDuration);
					}),
					(j.time = function (a, b) {
						return arguments.length
							? (this._dirty && this.totalDuration(),
							  a > this._duration && (a = this._duration),
							  this._yoyo && 0 != (1 & this._cycle)
									? (a = this._duration - a + this._cycle * (this._duration + this._repeatDelay))
									: 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
							  this.totalTime(a, b))
							: this._time;
					}),
					(j.repeat = function (a) {
						return arguments.length ? ((this._repeat = a), this._uncache(!0)) : this._repeat;
					}),
					(j.repeatDelay = function (a) {
						return arguments.length ? ((this._repeatDelay = a), this._uncache(!0)) : this._repeatDelay;
					}),
					(j.yoyo = function (a) {
						return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
					}),
					(j.currentLabel = function (a) {
						return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8);
					}),
					d
				);
			},
			!0,
		),
		(function () {
			var a = 180 / Math.PI,
				b = [],
				c = [],
				d = [],
				e = {},
				f = _gsScope._gsDefine.globals,
				g = function (a, b, c, d) {
					(this.a = a),
						(this.b = b),
						(this.c = c),
						(this.d = d),
						(this.da = d - a),
						(this.ca = c - a),
						(this.ba = b - a);
				},
				h =
					',x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,',
				i = function (a, b, c, d) {
					var e = { a: a },
						f = {},
						g = {},
						h = { c: d },
						i = (a + b) / 2,
						j = (b + c) / 2,
						k = (c + d) / 2,
						l = (i + j) / 2,
						m = (j + k) / 2,
						n = (m - l) / 8;
					return (
						(e.b = i + (a - i) / 4),
						(f.b = l + n),
						(e.c = f.a = (e.b + f.b) / 2),
						(f.c = g.a = (l + m) / 2),
						(g.b = m - n),
						(h.b = k + (d - k) / 4),
						(g.c = h.a = (g.b + h.b) / 2),
						[e, f, g, h]
					);
				},
				j = function (a, e, f, g, h) {
					var j,
						k,
						l,
						m,
						n,
						o,
						p,
						q,
						r,
						s,
						t,
						u,
						v,
						w = a.length - 1,
						x = 0,
						y = a[0].a;
					for (j = 0; w > j; j++)
						(n = a[x]),
							(k = n.a),
							(l = n.d),
							(m = a[x + 1].d),
							h
								? ((t = b[j]),
								  (u = c[j]),
								  (v = (0.25 * (u + t) * e) / (g ? 0.5 : d[j] || 0.5)),
								  (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
								  (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
								  (q = l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
								: ((o = l - 0.5 * (l - k) * e), (p = l + 0.5 * (m - l) * e), (q = l - (o + p) / 2)),
							(o += q),
							(p += q),
							(n.c = r = o),
							(n.b = 0 !== j ? y : (y = n.a + 0.6 * (n.c - n.a))),
							(n.da = l - k),
							(n.ca = r - k),
							(n.ba = y - k),
							f ? ((s = i(k, y, r, l)), a.splice(x, 1, s[0], s[1], s[2], s[3]), (x += 4)) : x++,
							(y = p);
					(n = a[x]),
						(n.b = y),
						(n.c = y + 0.4 * (n.d - y)),
						(n.da = n.d - n.a),
						(n.ca = n.c - n.a),
						(n.ba = y - n.a),
						f && ((s = i(n.a, y, n.c, n.d)), a.splice(x, 1, s[0], s[1], s[2], s[3]));
				},
				k = function (a, d, e, f) {
					var h,
						i,
						j,
						k,
						l,
						m,
						n = [];
					if (f)
						for (a = [f].concat(a), i = a.length; --i > -1; )
							'string' == typeof (m = a[i][d]) &&
								'=' === m.charAt(1) &&
								(a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
					if (0 > (h = a.length - 2)) return (n[0] = new g(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d])), n;
					for (i = 0; h > i; i++)
						(j = a[i][d]),
							(k = a[i + 1][d]),
							(n[i] = new g(j, 0, 0, k)),
							e &&
								((l = a[i + 2][d]),
								(b[i] = (b[i] || 0) + (k - j) * (k - j)),
								(c[i] = (c[i] || 0) + (l - k) * (l - k)));
					return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
				},
				l = function (a, f, g, i, l, m) {
					var n,
						o,
						p,
						q,
						r,
						s,
						t,
						u,
						v = {},
						w = [],
						x = m || a[0];
					(l = 'string' == typeof l ? ',' + l + ',' : h), null == f && (f = 1);
					for (o in a[0]) w.push(o);
					if (a.length > 1) {
						for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
							if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
								t = !1;
								break;
							}
						t && ((a = a.concat()), m && a.unshift(m), a.push(a[1]), (m = a[a.length - 3]));
					}
					for (b.length = c.length = d.length = 0, n = w.length; --n > -1; )
						(o = w[n]), (e[o] = -1 !== l.indexOf(',' + o + ',')), (v[o] = k(a, o, e[o], m));
					for (n = b.length; --n > -1; ) (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
					if (!i) {
						for (n = w.length; --n > -1; )
							if (e[o])
								for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)
									(r = p[q + 1].da / c[q] + p[q].da / b[q]), (d[q] = (d[q] || 0) + r * r);
						for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
					}
					for (n = w.length, q = g ? 4 : 1; --n > -1; )
						(o = w[n]), (p = v[o]), j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
					return v;
				},
				m = function (a, b, c) {
					b = b || 'soft';
					var d,
						e,
						f,
						h,
						i,
						j,
						k,
						l,
						m,
						n,
						o,
						p = {},
						q = 'cubic' === b ? 3 : 2,
						r = 'soft' === b,
						s = [];
					if ((r && c && (a = [c].concat(a)), null == a || q + 1 > a.length)) throw 'invalid Bezier data';
					for (m in a[0]) s.push(m);
					for (j = s.length; --j > -1; ) {
						for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++)
							(d =
								null == c
									? a[k][m]
									: 'string' == typeof (o = a[k][m]) && '=' === o.charAt(1)
									? c[m] + Number(o.charAt(0) + o.substr(2))
									: Number(o)),
								r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
								(i[n++] = d);
						for (l = n - q + 1, n = 0, k = 0; l > k; k += q)
							(d = i[k]),
								(e = i[k + 1]),
								(f = i[k + 2]),
								(h = 2 === q ? 0 : i[k + 3]),
								(i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
						i.length = n;
					}
					return p;
				},
				n = function (a, b, c) {
					for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1; )
						for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++)
							(j = o * k),
								(l = 1 - j),
								(d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)),
								(n = p * c + k - 1),
								(b[n] = (b[n] || 0) + d * d);
				},
				o = function (a, b) {
					b = b >> 0 || 6;
					var c,
						d,
						e,
						f,
						g = [],
						h = [],
						i = 0,
						j = 0,
						k = b - 1,
						l = [],
						m = [];
					for (c in a) n(a[c], g, b);
					for (e = g.length, d = 0; e > d; d++)
						(i += Math.sqrt(g[d])),
							(f = d % b),
							(m[f] = i),
							f === k && ((j += i), (f = (d / b) >> 0), (l[f] = m), (h[f] = j), (i = 0), (m = []));
					return { length: j, lengths: h, segments: l };
				},
				p = _gsScope._gsDefine.plugin({
					propName: 'bezier',
					priority: -1,
					version: '1.3.4',
					API: 2,
					global: !0,
					init: function (a, b, c) {
						(this._target = a),
							b instanceof Array && (b = { values: b }),
							(this._func = {}),
							(this._round = {}),
							(this._props = []),
							(this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
						var d,
							e,
							f,
							g,
							h,
							i = b.values || [],
							j = {},
							k = i[0],
							n = b.autoRotate || c.vars.orientToBezier;
						this._autoRotate = n
							? n instanceof Array
								? n
								: [['x', 'y', 'rotation', !0 === n ? 0 : Number(n) || 0]]
							: null;
						for (d in k) this._props.push(d);
						for (f = this._props.length; --f > -1; )
							(d = this._props[f]),
								this._overwriteProps.push(d),
								(e = this._func[d] = 'function' == typeof a[d]),
								(j[d] = e
									? a[
											d.indexOf('set') || 'function' != typeof a['get' + d.substr(3)]
												? d
												: 'get' + d.substr(3)
									  ]()
									: parseFloat(a[d])),
								h || (j[d] !== i[0][d] && (h = j));
						if (
							((this._beziers =
								'cubic' !== b.type && 'quadratic' !== b.type && 'soft' !== b.type
									? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, 'thruBasic' === b.type, b.correlate, h)
									: m(i, b.type, j)),
							(this._segCount = this._beziers[d].length),
							this._timeRes)
						) {
							var p = o(this._beziers, this._timeRes);
							(this._length = p.length),
								(this._lengths = p.lengths),
								(this._segments = p.segments),
								(this._l1 = this._li = this._s1 = this._si = 0),
								(this._l2 = this._lengths[0]),
								(this._curSeg = this._segments[0]),
								(this._s2 = this._curSeg[0]),
								(this._prec = 1 / this._curSeg.length);
						}
						if ((n = this._autoRotate))
							for (
								this._initialRotations = [],
									n[0] instanceof Array || (this._autoRotate = n = [n]),
									f = n.length;
								--f > -1;

							) {
								for (g = 0; 3 > g; g++)
									(d = n[f][g]),
										(this._func[d] =
											'function' == typeof a[d] &&
											a[
												d.indexOf('set') || 'function' != typeof a['get' + d.substr(3)]
													? d
													: 'get' + d.substr(3)
											]);
								(d = n[f][2]),
									(this._initialRotations[f] = this._func[d]
										? this._func[d].call(this._target)
										: this._target[d]);
							}
						return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
					},
					set: function (b) {
						var c,
							d,
							e,
							f,
							g,
							h,
							i,
							j,
							k,
							l,
							m = this._segCount,
							n = this._func,
							o = this._target,
							p = b !== this._startRatio;
						if (this._timeRes) {
							if (
								((k = this._lengths),
								(l = this._curSeg),
								(b *= this._length),
								(e = this._li),
								b > this._l2 && m - 1 > e)
							) {
								for (j = m - 1; j > e && b >= (this._l2 = k[++e]); );
								(this._l1 = k[e - 1]),
									(this._li = e),
									(this._curSeg = l = this._segments[e]),
									(this._s2 = l[(this._s1 = this._si = 0)]);
							} else if (this._l1 > b && e > 0) {
								for (; e > 0 && (this._l1 = k[--e]) >= b; );
								0 === e && this._l1 > b ? (this._l1 = 0) : e++,
									(this._l2 = k[e]),
									(this._li = e),
									(this._curSeg = l = this._segments[e]),
									(this._s1 = l[(this._si = l.length - 1) - 1] || 0),
									(this._s2 = l[this._si]);
							}
							if (((c = e), (b -= this._l1), (e = this._si), b > this._s2 && l.length - 1 > e)) {
								for (j = l.length - 1; j > e && b >= (this._s2 = l[++e]); );
								(this._s1 = l[e - 1]), (this._si = e);
							} else if (this._s1 > b && e > 0) {
								for (; e > 0 && (this._s1 = l[--e]) >= b; );
								0 === e && this._s1 > b ? (this._s1 = 0) : e++, (this._s2 = l[e]), (this._si = e);
							}
							h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec;
						} else (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0), (h = (b - c * (1 / m)) * m);
						for (d = 1 - h, e = this._props.length; --e > -1; )
							(f = this._props[e]),
								(g = this._beziers[f][c]),
								(i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a),
								this._round[f] && (i = Math.round(i)),
								n[f] ? o[f](i) : (o[f] = i);
						if (this._autoRotate) {
							var q,
								r,
								s,
								t,
								u,
								v,
								w,
								x = this._autoRotate;
							for (e = x.length; --e > -1; )
								(f = x[e][2]),
									(v = x[e][3] || 0),
									(w = !0 === x[e][4] ? 1 : a),
									(g = this._beziers[x[e][0]]),
									(q = this._beziers[x[e][1]]),
									g &&
										q &&
										((g = g[c]),
										(q = q[c]),
										(r = g.a + (g.b - g.a) * h),
										(t = g.b + (g.c - g.b) * h),
										(r += (t - r) * h),
										(t += (g.c + (g.d - g.c) * h - t) * h),
										(s = q.a + (q.b - q.a) * h),
										(u = q.b + (q.c - q.b) * h),
										(s += (u - s) * h),
										(u += (q.c + (q.d - q.c) * h - u) * h),
										(i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e]),
										n[f] ? o[f](i) : (o[f] = i));
						}
					},
				}),
				q = p.prototype;
			(p.bezierThrough = l),
				(p.cubicToQuadratic = i),
				(p._autoCSS = !0),
				(p.quadraticToCubic = function (a, b, c) {
					return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
				}),
				(p._cssRegister = function () {
					var a = f.CSSPlugin;
					if (a) {
						var b = a._internals,
							c = b._parseToProxy,
							d = b._setPluginRatio,
							e = b.CSSPropTween;
						b._registerComplexSpecialProp('bezier', {
							parser: function (a, b, f, g, h, i) {
								b instanceof Array && (b = { values: b }), (i = new p());
								var j,
									k,
									l,
									m = b.values,
									n = m.length - 1,
									o = [],
									q = {};
								if (0 > n) return h;
								for (j = 0; n >= j; j++) (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
								for (k in b) q[k] = b[k];
								return (
									(q.values = o),
									(h = new e(a, 'bezier', 0, 0, l.pt, 2)),
									(h.data = l),
									(h.plugin = i),
									(h.setRatio = d),
									0 === q.autoRotate && (q.autoRotate = !0),
									!q.autoRotate ||
										q.autoRotate instanceof Array ||
										((j = !0 === q.autoRotate ? 0 : Number(q.autoRotate)),
										(q.autoRotate =
											null != l.end.left
												? [['left', 'top', 'rotation', j, !1]]
												: null != l.end.x && [['x', 'y', 'rotation', j, !1]])),
									q.autoRotate &&
										(g._transform || g._enableTransforms(!1), (l.autoRotate = g._target._gsTransform)),
									i._onInitTween(l.proxy, q, g._tween),
									h
								);
							},
						});
					}
				}),
				(q._roundProps = function (a, b) {
					for (var c = this._overwriteProps, d = c.length; --d > -1; )
						(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b);
				}),
				(q._kill = function (a) {
					var b,
						c,
						d = this._props;
					for (b in this._beziers)
						if (b in a)
							for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1; )
								d[c] === b && d.splice(c, 1);
					return this._super._kill.call(this, a);
				});
		})(),
		_gsScope._gsDefine(
			'plugins.CSSPlugin',
			['plugins.TweenPlugin', 'TweenLite'],
			function (a, b) {
				var c,
					d,
					e,
					f,
					g = function () {
						a.call(this, 'css'), (this._overwriteProps.length = 0), (this.setRatio = g.prototype.setRatio);
					},
					h = _gsScope._gsDefine.globals,
					i = {},
					j = (g.prototype = new a('css'));
				(j.constructor = g),
					(g.version = '1.18.0'),
					(g.API = 2),
					(g.defaultTransformPerspective = 0),
					(g.defaultSkewType = 'compensated'),
					(g.defaultSmoothOrigin = !0),
					(j = 'px'),
					(g.suffixMap = {
						top: j,
						right: j,
						bottom: j,
						left: j,
						width: j,
						height: j,
						fontSize: j,
						padding: j,
						margin: j,
						perspective: j,
						lineHeight: '',
					});
				var k,
					l,
					m,
					n,
					o,
					p,
					q = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
					r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					u = /(?:\d|\-|\+|=|#|\.)*/g,
					v = /opacity *= *([^)]*)/i,
					w = /opacity:([^;]*)/i,
					x = /alpha\(opacity *=.+?\)/i,
					y = /^(rgb|hsl)/,
					z = /([A-Z])/g,
					A = /-([a-z])/gi,
					B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					C = function (a, b) {
						return b.toUpperCase();
					},
					D = /(?:Left|Right|Width)/i,
					E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					G = /,(?=[^\)]*(?:\(|$))/gi,
					H = Math.PI / 180,
					I = 180 / Math.PI,
					J = {},
					K = document,
					L = function (a) {
						return K.createElementNS ? K.createElementNS('http://www.w3.org/1999/xhtml', a) : K.createElement(a);
					},
					M = L('div'),
					N = L('img'),
					O = (g._internals = { _specialProps: i }),
					P = navigator.userAgent,
					Q = (function () {
						var a = P.indexOf('Android'),
							b = L('a');
						return (
							(m =
								-1 !== P.indexOf('Safari') &&
								-1 === P.indexOf('Chrome') &&
								(-1 === a || Number(P.substr(a + 8, 1)) > 3)),
							(o = m && 6 > Number(P.substr(P.indexOf('Version/') + 8, 1))),
							(n = -1 !== P.indexOf('Firefox')),
							(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P)) &&
								(p = parseFloat(RegExp.$1)),
							!!b && ((b.style.cssText = 'top:1px;opacity:.55;'), /^0.55/.test(b.style.opacity))
						);
					})(),
					R = function (a) {
						return v.test(
							'string' == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || '',
						)
							? parseFloat(RegExp.$1) / 100
							: 1;
					},
					S = function (a) {
						window.console && console.log(a);
					},
					T = '',
					U = '',
					V = function (a, b) {
						b = b || M;
						var c,
							d,
							e = b.style;
						if (void 0 !== e[a]) return a;
						for (
							a = a.charAt(0).toUpperCase() + a.substr(1), c = ['O', 'Moz', 'ms', 'Ms', 'Webkit'], d = 5;
							--d > -1 && void 0 === e[c[d] + a];

						);
						return d >= 0 ? ((U = 3 === d ? 'ms' : c[d]), (T = '-' + U.toLowerCase() + '-'), U + a) : null;
					},
					W = K.defaultView ? K.defaultView.getComputedStyle : function () {},
					X = (g.getStyle = function (a, b, c, d, e) {
						var f;
						return Q || 'opacity' !== b
							? (!d && a.style[b]
									? (f = a.style[b])
									: (c = c || W(a))
									? (f =
											c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, '-$1').toLowerCase()))
									: a.currentStyle && (f = a.currentStyle[b]),
							  null == e || (f && 'none' !== f && 'auto' !== f && 'auto auto' !== f) ? f : e)
							: R(a);
					}),
					Y = (O.convertToPixels = function (a, c, d, e, f) {
						if ('px' === e || !e) return d;
						if ('auto' === e || !d) return 0;
						var h,
							i,
							j,
							k = D.test(c),
							l = a,
							m = M.style,
							n = 0 > d;
						if ((n && (d = -d), '%' === e && -1 !== c.indexOf('border')))
							h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
						else {
							if (
								((m.cssText = 'border:0 solid red;position:' + X(a, 'position') + ';line-height:0;'),
								'%' !== e && l.appendChild && 'v' !== e.charAt(0) && 'rem' !== e)
							)
								m[k ? 'borderLeftWidth' : 'borderTopWidth'] = d + e;
							else {
								if (
									((l = a.parentNode || K.body),
									(i = l._gsCache),
									(j = b.ticker.frame),
									i && k && i.time === j)
								)
									return (i.width * d) / 100;
								m[k ? 'width' : 'height'] = d + e;
							}
							l.appendChild(M),
								(h = parseFloat(M[k ? 'offsetWidth' : 'offsetHeight'])),
								l.removeChild(M),
								k &&
									'%' === e &&
									!1 !== g.cacheWidths &&
									((i = l._gsCache = l._gsCache || {}), (i.time = j), (i.width = (h / d) * 100)),
								0 !== h || f || (h = Y(a, c, d, e, !0));
						}
						return n ? -h : h;
					}),
					Z = (O.calculateOffset = function (a, b, c) {
						if ('absolute' !== X(a, 'position', c)) return 0;
						var d = 'left' === b ? 'Left' : 'Top',
							e = X(a, 'margin' + d, c);
						return a['offset' + d] - (Y(a, b, parseFloat(e), e.replace(u, '')) || 0);
					}),
					$ = function (a, b) {
						var c,
							d,
							e,
							f = {};
						if ((b = b || W(a, null)))
							if ((c = b.length))
								for (; --c > -1; )
									(e = b[c]),
										(-1 === e.indexOf('-transform') || za === e) &&
											(f[e.replace(A, C)] = b.getPropertyValue(e));
							else for (c in b) (-1 === c.indexOf('Transform') || ya === c) && (f[c] = b[c]);
						else if ((b = a.currentStyle || a.style))
							for (c in b) 'string' == typeof c && void 0 === f[c] && (f[c.replace(A, C)] = b[c]);
						return (
							Q || (f.opacity = R(a)),
							(d = La(a, b, !1)),
							(f.rotation = d.rotation),
							(f.skewX = d.skewX),
							(f.scaleX = d.scaleX),
							(f.scaleY = d.scaleY),
							(f.x = d.x),
							(f.y = d.y),
							Ba &&
								((f.z = d.z), (f.rotationX = d.rotationX), (f.rotationY = d.rotationY), (f.scaleZ = d.scaleZ)),
							f.filters && delete f.filters,
							f
						);
					},
					_ = function (a, b, c, d, e) {
						var f,
							g,
							h,
							i = {},
							j = a.style;
						for (g in c)
							'cssText' !== g &&
								'length' !== g &&
								isNaN(g) &&
								(b[g] !== (f = c[g]) || (e && e[g])) &&
								-1 === g.indexOf('Origin') &&
								('number' == typeof f || 'string' == typeof f) &&
								((i[g] =
									'auto' !== f || ('left' !== g && 'top' !== g)
										? ('' !== f && 'auto' !== f && 'none' !== f) ||
										  'string' != typeof b[g] ||
										  '' === b[g].replace(t, '')
											? f
											: 0
										: Z(a, g)),
								void 0 !== j[g] && (h = new oa(j, g, j[g], h)));
						if (d) for (g in d) 'className' !== g && (i[g] = d[g]);
						return { difs: i, firstMPT: h };
					},
					aa = { width: ['Left', 'Right'], height: ['Top', 'Bottom'] },
					ba = ['marginLeft', 'marginRight', 'marginTop', 'marginBottom'],
					ca = function (a, b, c) {
						var d = parseFloat('width' === b ? a.offsetWidth : a.offsetHeight),
							e = aa[b],
							f = e.length;
						for (c = c || W(a, null); --f > -1; )
							(d -= parseFloat(X(a, 'padding' + e[f], c, !0)) || 0),
								(d -= parseFloat(X(a, 'border' + e[f] + 'Width', c, !0)) || 0);
						return d;
					},
					da = function (a, b) {
						if ('contain' === a || 'auto' === a || 'auto auto' === a) return a + ' ';
						(null == a || '' === a) && (a = '0 0');
						var c = a.split(' '),
							d = -1 !== a.indexOf('left') ? '0%' : -1 !== a.indexOf('right') ? '100%' : c[0],
							e = -1 !== a.indexOf('top') ? '0%' : -1 !== a.indexOf('bottom') ? '100%' : c[1];
						return (
							null == e ? (e = 'center' === d ? '50%' : '0') : 'center' === e && (e = '50%'),
							('center' === d || (isNaN(parseFloat(d)) && -1 === (d + '').indexOf('='))) && (d = '50%'),
							(a = d + ' ' + e + (c.length > 2 ? ' ' + c[2] : '')),
							b &&
								((b.oxp = -1 !== d.indexOf('%')),
								(b.oyp = -1 !== e.indexOf('%')),
								(b.oxr = '=' === d.charAt(1)),
								(b.oyr = '=' === e.charAt(1)),
								(b.ox = parseFloat(d.replace(t, ''))),
								(b.oy = parseFloat(e.replace(t, ''))),
								(b.v = a)),
							b || a
						);
					},
					ea = function (a, b) {
						return 'string' == typeof a && '=' === a.charAt(1)
							? parseInt(a.charAt(0) + '1', 10) * parseFloat(a.substr(2))
							: parseFloat(a) - parseFloat(b);
					},
					fa = function (a, b) {
						return null == a
							? b
							: 'string' == typeof a && '=' === a.charAt(1)
							? parseInt(a.charAt(0) + '1', 10) * parseFloat(a.substr(2)) + b
							: parseFloat(a);
					},
					ga = function (a, b, c, d) {
						var e,
							f,
							g,
							h,
							i,
							j = 1e-6;
						return (
							null == a
								? (h = b)
								: 'number' == typeof a
								? (h = a)
								: ((e = 360),
								  (f = a.split('_')),
								  (i = '=' === a.charAt(1)),
								  (g =
										(i ? parseInt(a.charAt(0) + '1', 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) *
											(-1 === a.indexOf('rad') ? 1 : I) -
										(i ? 0 : b)),
								  f.length &&
										(d && (d[c] = b + g),
										-1 !== a.indexOf('short') && (g %= e) !== g % (e / 2) && (g = 0 > g ? g + e : g - e),
										-1 !== a.indexOf('_cw') && 0 > g
											? (g = ((g + 9999999999 * e) % e) - (0 | (g / e)) * e)
											: -1 !== a.indexOf('ccw') &&
											  g > 0 &&
											  (g = ((g - 9999999999 * e) % e) - (0 | (g / e)) * e)),
								  (h = b + g)),
							j > h && h > -j && (h = 0),
							h
						);
					},
					ha = {
						aqua: [0, 255, 255],
						lime: [0, 255, 0],
						silver: [192, 192, 192],
						black: [0, 0, 0],
						maroon: [128, 0, 0],
						teal: [0, 128, 128],
						blue: [0, 0, 255],
						navy: [0, 0, 128],
						white: [255, 255, 255],
						fuchsia: [255, 0, 255],
						olive: [128, 128, 0],
						yellow: [255, 255, 0],
						orange: [255, 165, 0],
						gray: [128, 128, 128],
						purple: [128, 0, 128],
						green: [0, 128, 0],
						red: [255, 0, 0],
						pink: [255, 192, 203],
						cyan: [0, 255, 255],
						transparent: [255, 255, 255, 0],
					},
					ia = function (a, b, c) {
						return (
							(a = 0 > a ? a + 1 : a > 1 ? a - 1 : a),
							0 |
								(255 *
									(1 > 6 * a
										? b + 6 * (c - b) * a
										: 0.5 > a
										? c
										: 2 > 3 * a
										? b + 6 * (c - b) * (2 / 3 - a)
										: b) +
									0.5)
						);
					},
					ja = (g.parseColor = function (a, b) {
						var c, d, e, f, g, h, i, j, k, l, m;
						if (a)
							if ('number' == typeof a) c = [a >> 16, 255 & (a >> 8), 255 & a];
							else {
								if ((',' === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ha[a])) c = ha[a];
								else if ('#' === a.charAt(0))
									4 === a.length &&
										((d = a.charAt(1)),
										(e = a.charAt(2)),
										(f = a.charAt(3)),
										(a = '#' + d + d + e + e + f + f)),
										(a = parseInt(a.substr(1), 16)),
										(c = [a >> 16, 255 & (a >> 8), 255 & a]);
								else if ('hsl' === a.substr(0, 3))
									if (((c = m = a.match(q)), b)) {
										if (-1 !== a.indexOf('=')) return a.match(r);
									} else
										(g = (Number(c[0]) % 360) / 360),
											(h = Number(c[1]) / 100),
											(i = Number(c[2]) / 100),
											(e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
											(d = 2 * i - e),
											c.length > 3 && (c[3] = Number(a[3])),
											(c[0] = ia(g + 1 / 3, d, e)),
											(c[1] = ia(g, d, e)),
											(c[2] = ia(g - 1 / 3, d, e));
								else c = a.match(q) || ha.transparent;
								(c[0] = Number(c[0])),
									(c[1] = Number(c[1])),
									(c[2] = Number(c[2])),
									c.length > 3 && (c[3] = Number(c[3]));
							}
						else c = ha.black;
						return (
							b &&
								!m &&
								((d = c[0] / 255),
								(e = c[1] / 255),
								(f = c[2] / 255),
								(j = Math.max(d, e, f)),
								(k = Math.min(d, e, f)),
								(i = (j + k) / 2),
								j === k
									? (g = h = 0)
									: ((l = j - k),
									  (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)),
									  (g =
											j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4),
									  (g *= 60)),
								(c[0] = 0 | (g + 0.5)),
								(c[1] = 0 | (100 * h + 0.5)),
								(c[2] = 0 | (100 * i + 0.5))),
							c
						);
					}),
					ka = function (a, b) {
						var c,
							d,
							e,
							f = a.match(la) || [],
							g = 0,
							h = f.length ? '' : a;
						for (c = 0; f.length > c; c++)
							(d = f[c]),
								(e = a.substr(g, a.indexOf(d, g) - g)),
								(g += e.length + d.length),
								(d = ja(d, b)),
								3 === d.length && d.push(1),
								(h +=
									e +
									(b ? 'hsla(' + d[0] + ',' + d[1] + '%,' + d[2] + '%,' + d[3] : 'rgba(' + d.join(',')) +
									')');
						return h;
					},
					la = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b';
				for (j in ha) la += '|' + j + '\\b';
				(la = RegExp(la + ')', 'gi')),
					(g.colorStringFilter = function (a) {
						var b,
							c = a[0] + a[1];
						(la.lastIndex = 0),
							la.test(c) &&
								((b = -1 !== c.indexOf('hsl(') || -1 !== c.indexOf('hsla(')),
								(a[0] = ka(a[0], b)),
								(a[1] = ka(a[1], b)));
					}),
					b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
				var ma = function (a, b, c, d) {
						if (null == a)
							return function (a) {
								return a;
							};
						var e,
							f = b ? (a.match(la) || [''])[0] : '',
							g = a.split(f).join('').match(s) || [],
							h = a.substr(0, a.indexOf(g[0])),
							i = ')' === a.charAt(a.length - 1) ? ')' : '',
							j = -1 !== a.indexOf(' ') ? ' ' : ',',
							k = g.length,
							l = k > 0 ? g[0].replace(q, '') : '';
						return k
							? (e = b
									? function (a) {
											var b, m, n, o;
											if ('number' == typeof a) a += l;
											else if (d && G.test(a)) {
												for (o = a.replace(G, '|').split('|'), n = 0; o.length > n; n++) o[n] = e(o[n]);
												return o.join(',');
											}
											if (
												((b = (a.match(la) || [f])[0]),
												(m = a.split(b).join('').match(s) || []),
												(n = m.length),
												k > n--)
											)
												for (; k > ++n; ) m[n] = c ? m[0 | ((n - 1) / 2)] : g[n];
											return h + m.join(j) + j + b + i + (-1 !== a.indexOf('inset') ? ' inset' : '');
									  }
									: function (a) {
											var b, f, m;
											if ('number' == typeof a) a += l;
											else if (d && G.test(a)) {
												for (f = a.replace(G, '|').split('|'), m = 0; f.length > m; m++) f[m] = e(f[m]);
												return f.join(',');
											}
											if (((b = a.match(s) || []), (m = b.length), k > m--))
												for (; k > ++m; ) b[m] = c ? b[0 | ((m - 1) / 2)] : g[m];
											return h + b.join(j) + i;
									  })
							: function (a) {
									return a;
							  };
					},
					na = function (a) {
						return (
							(a = a.split(',')),
							function (b, c, d, e, f, g, h) {
								var i,
									j = (c + '').split(' ');
								for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
								return e.parse(b, h, f, g);
							}
						);
					},
					oa =
						((O._setPluginRatio = function (a) {
							this.plugin.setRatio(a);
							for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h; )
								(b = g[h.v]),
									h.r ? (b = Math.round(b)) : i > b && b > -i && (b = 0),
									(h.t[h.p] = b),
									(h = h._next);
							if ((f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a))
								for (h = f.firstMPT; h; ) {
									if (((c = h.t), c.type)) {
										if (1 === c.type) {
											for (e = c.xs0 + c.s + c.xs1, d = 1; c.l > d; d++)
												e += c['xn' + d] + c['xs' + (d + 1)];
											c.e = e;
										}
									} else c.e = c.s + c.xs0;
									h = h._next;
								}
						}),
						function (a, b, c, d, e) {
							(this.t = a), (this.p = b), (this.v = c), (this.r = e), d && ((d._prev = this), (this._next = d));
						}),
					pa =
						((O._parseToProxy = function (a, b, c, d, e, f) {
							var g,
								h,
								i,
								j,
								k,
								l = d,
								m = {},
								n = {},
								o = c._transform,
								p = J;
							for (
								c._transform = null,
									J = b,
									d = k = c.parse(a, b, d, e),
									J = p,
									f && ((c._transform = o), l && ((l._prev = null), l._prev && (l._prev._next = null)));
								d && d !== l;

							) {
								if (
									1 >= d.type &&
									((h = d.p),
									(n[h] = d.s + d.c),
									(m[h] = d.s),
									f || ((j = new oa(d, 's', h, j, d.r)), (d.c = 0)),
									1 === d.type)
								)
									for (g = d.l; --g > 0; )
										(i = 'xn' + g),
											(h = d.p + '_' + i),
											(n[h] = d.data[i]),
											(m[h] = d[i]),
											f || (j = new oa(d, i, h, j, d.rxp[i]));
								d = d._next;
							}
							return { proxy: m, end: n, firstMPT: j, pt: k };
						}),
						(O.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
							(this.t = a),
								(this.p = b),
								(this.s = d),
								(this.c = e),
								(this.n = i || b),
								a instanceof pa || f.push(this.n),
								(this.r = j),
								(this.type = h || 0),
								k && ((this.pr = k), (c = !0)),
								(this.b = void 0 === l ? d : l),
								(this.e = void 0 === m ? d + e : m),
								g && ((this._next = g), (g._prev = this));
						})),
					qa = function (a, b, c, d, e, f) {
						var g = new pa(a, b, c, d - c, e, -1, f);
						return (g.b = c), (g.e = g.xs0 = d), g;
					},
					ra = (g.parseComplex = function (a, b, c, d, e, f, g, h, i, j) {
						(c = c || f || ''), (g = new pa(a, b, 0, 0, g, j ? 2 : 1, null, !1, h, c, d)), (d += '');
						var l,
							m,
							n,
							o,
							p,
							s,
							t,
							u,
							v,
							w,
							x,
							y,
							z,
							A = c.split(', ').join(',').split(' '),
							B = d.split(', ').join(',').split(' '),
							C = A.length,
							D = !1 !== k;
						for (
							(-1 !== d.indexOf(',') || -1 !== c.indexOf(',')) &&
								((A = A.join(' ').replace(G, ', ').split(' ')),
								(B = B.join(' ').replace(G, ', ').split(' ')),
								(C = A.length)),
								C !== B.length && ((A = (f || '').split(' ')), (C = A.length)),
								g.plugin = i,
								g.setRatio = j,
								la.lastIndex = 0,
								l = 0;
							C > l;
							l++
						)
							if (((o = A[l]), (p = B[l]), (u = parseFloat(o)) || 0 === u))
								g.appendXtra('', u, ea(p, u), p.replace(r, ''), D && -1 !== p.indexOf('px'), !0);
							else if (e && la.test(o))
								(y = ',' === p.charAt(p.length - 1) ? '),' : ')'),
									(z = -1 !== p.indexOf('hsl') && Q),
									(o = ja(o, z)),
									(p = ja(p, z)),
									(v = o.length + p.length > 6),
									v && !Q && 0 === p[3]
										? ((g['xs' + g.l] += g.l ? ' transparent' : 'transparent'),
										  (g.e = g.e.split(B[l]).join('transparent')))
										: (Q || (v = !1),
										  z
												? g
														.appendXtra(v ? 'hsla(' : 'hsl(', o[0], ea(p[0], o[0]), ',', !1, !0)
														.appendXtra('', o[1], ea(p[1], o[1]), '%,', !1)
														.appendXtra('', o[2], ea(p[2], o[2]), v ? '%,' : '%' + y, !1)
												: g
														.appendXtra(v ? 'rgba(' : 'rgb(', o[0], p[0] - o[0], ',', !0, !0)
														.appendXtra('', o[1], p[1] - o[1], ',', !0)
														.appendXtra('', o[2], p[2] - o[2], v ? ',' : y, !0),
										  v &&
												((o = 4 > o.length ? 1 : o[3]),
												g.appendXtra('', o, (4 > p.length ? 1 : p[3]) - o, y, !1))),
									(la.lastIndex = 0);
							else if ((s = o.match(q))) {
								if (!(t = p.match(r)) || t.length !== s.length) return g;
								for (n = 0, m = 0; s.length > m; m++)
									(x = s[m]),
										(w = o.indexOf(x, n)),
										g.appendXtra(
											o.substr(n, w - n),
											Number(x),
											ea(t[m], x),
											'',
											D && 'px' === o.substr(w + x.length, 2),
											0 === m,
										),
										(n = w + x.length);
								g['xs' + g.l] += o.substr(n);
							} else g['xs' + g.l] += g.l ? ' ' + o : o;
						if (-1 !== d.indexOf('=') && g.data) {
							for (y = g.xs0 + g.data.s, l = 1; g.l > l; l++) y += g['xs' + l] + g.data['xn' + l];
							g.e = y + g['xs' + l];
						}
						return g.l || ((g.type = -1), (g.xs0 = g.e)), g.xfirst || g;
					}),
					sa = 9;
				for (j = pa.prototype, j.l = j.pr = 0; --sa > 0; ) (j['xn' + sa] = 0), (j['xs' + sa] = '');
				(j.xs0 = ''),
					(j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null),
					(j.appendXtra = function (a, b, c, d, e, f) {
						var g = this,
							h = g.l;
						return (
							(g['xs' + h] += f && h ? ' ' + a : a || ''),
							c || 0 === h || g.plugin
								? (g.l++,
								  (g.type = g.setRatio ? 2 : 1),
								  (g['xs' + g.l] = d || ''),
								  h > 0
										? ((g.data['xn' + h] = b + c),
										  (g.rxp['xn' + h] = e),
										  (g['xn' + h] = b),
										  g.plugin ||
												((g.xfirst = new pa(g, 'xn' + h, b, c, g.xfirst || g, 0, g.n, e, g.pr)),
												(g.xfirst.xs0 = 0)),
										  g)
										: ((g.data = { s: b + c }), (g.rxp = {}), (g.s = b), (g.c = c), (g.r = e), g))
								: ((g['xs' + h] += b + (d || '')), g)
						);
					});
				var ta = function (a, b) {
						(b = b || {}),
							(this.p = b.prefix ? V(a) || a : a),
							(i[a] = i[this.p] = this),
							(this.format = b.formatter || ma(b.defaultValue, b.color, b.collapsible, b.multi)),
							b.parser && (this.parse = b.parser),
							(this.clrs = b.color),
							(this.multi = b.multi),
							(this.keyword = b.keyword),
							(this.dflt = b.defaultValue),
							(this.pr = b.priority || 0);
					},
					ua = (O._registerComplexSpecialProp = function (a, b, c) {
						'object' != typeof b && (b = { parser: c });
						var d,
							e = a.split(','),
							f = b.defaultValue;
						for (c = c || [f], d = 0; e.length > d; d++)
							(b.prefix = 0 === d && b.prefix), (b.defaultValue = c[d] || f), new ta(e[d], b);
					}),
					va = function (a) {
						if (!i[a]) {
							var b = a.charAt(0).toUpperCase() + a.substr(1) + 'Plugin';
							ua(a, {
								parser: function (a, c, d, e, f, g, j) {
									var k = h.com.greensock.plugins[b];
									return k
										? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j))
										: (S('Error: ' + b + ' js file not loaded.'), f);
								},
							});
						}
					};
				(j = ta.prototype),
					(j.parseComplex = function (a, b, c, d, e, f) {
						var g,
							h,
							i,
							j,
							k,
							l,
							m = this.keyword;
						if (
							(this.multi &&
								(G.test(c) || G.test(b)
									? ((h = b.replace(G, '|').split('|')), (i = c.replace(G, '|').split('|')))
									: m && ((h = [b]), (i = [c]))),
							i)
						) {
							for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++)
								(b = h[g] = h[g] || this.dflt),
									(c = i[g] = i[g] || this.dflt),
									m &&
										((k = b.indexOf(m)),
										(l = c.indexOf(m)),
										k !== l && (-1 === l ? (h[g] = h[g].split(m).join('')) : -1 === k && (h[g] += ' ' + m)));
							(b = h.join(', ')), (c = i.join(', '));
						}
						return ra(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
					}),
					(j.parse = function (a, b, c, d, f, g) {
						return this.parseComplex(a.style, this.format(X(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
					}),
					(g.registerSpecialProp = function (a, b, c) {
						ua(a, {
							parser: function (a, d, e, f, g, h) {
								var i = new pa(a, e, 0, 0, g, 2, e, !1, c);
								return (i.plugin = h), (i.setRatio = b(a, d, f._tween, e)), i;
							},
							priority: c,
						});
					}),
					(g.useSVGTransformAttr = m || n);
				var wa,
					xa =
						'scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent'.split(
							',',
						),
					ya = V('transform'),
					za = T + 'transform',
					Aa = V('transformOrigin'),
					Ba = null !== V('perspective'),
					Ca = (O.Transform = function () {
						(this.perspective = parseFloat(g.defaultTransformPerspective) || 0),
							(this.force3D = !(!1 === g.defaultForce3D || !Ba) && (g.defaultForce3D || 'auto'));
					}),
					Da = window.SVGElement,
					Ea = function (a, b, c) {
						var d,
							e = K.createElementNS('http://www.w3.org/2000/svg', a),
							f = /([a-z])([A-Z])/g;
						for (d in c) e.setAttributeNS(null, d.replace(f, '$1-$2').toLowerCase(), c[d]);
						return b.appendChild(e), e;
					},
					Fa = K.documentElement,
					Ga = (function () {
						var a,
							b,
							c,
							d = p || (/Android/i.test(P) && !window.chrome);
						return (
							K.createElementNS &&
								!d &&
								((a = Ea('svg', Fa)),
								(b = Ea('rect', a, { width: 100, height: 50, x: 100 })),
								(c = b.getBoundingClientRect().width),
								(b.style[Aa] = '50% 50%'),
								(b.style[ya] = 'scaleX(0.5)'),
								(d = c === b.getBoundingClientRect().width && !(n && Ba)),
								Fa.removeChild(a)),
							d
						);
					})(),
					Ha = function (a, b, c, d, e) {
						var f,
							h,
							i,
							j,
							k,
							l,
							m,
							n,
							o,
							p,
							q,
							r,
							s,
							t,
							u = a._gsTransform,
							v = Ka(a, !0);
						u && ((s = u.xOrigin), (t = u.yOrigin)),
							(!d || 2 > (f = d.split(' ')).length) &&
								((m = a.getBBox()),
								(b = da(b).split(' ')),
								(f = [
									(-1 !== b[0].indexOf('%') ? (parseFloat(b[0]) / 100) * m.width : parseFloat(b[0])) + m.x,
									(-1 !== b[1].indexOf('%') ? (parseFloat(b[1]) / 100) * m.height : parseFloat(b[1])) + m.y,
								])),
							(c.xOrigin = j = parseFloat(f[0])),
							(c.yOrigin = k = parseFloat(f[1])),
							d &&
								v !== Ja &&
								((l = v[0]),
								(m = v[1]),
								(n = v[2]),
								(o = v[3]),
								(p = v[4]),
								(q = v[5]),
								(r = l * o - m * n),
								(h = j * (o / r) + k * (-n / r) + (n * q - o * p) / r),
								(i = j * (-m / r) + k * (l / r) - (l * q - m * p) / r),
								(j = c.xOrigin = f[0] = h),
								(k = c.yOrigin = f[1] = i)),
							u &&
								(e || (!1 !== e && !1 !== g.defaultSmoothOrigin)
									? ((h = j - s),
									  (i = k - t),
									  (u.xOffset += h * v[0] + i * v[2] - h),
									  (u.yOffset += h * v[1] + i * v[3] - i))
									: (u.xOffset = u.yOffset = 0)),
							a.setAttribute('data-svg-origin', f.join(' '));
					},
					Ia = function (a) {
						return !!(
							Da &&
							'function' == typeof a.getBBox &&
							a.getCTM &&
							(!a.parentNode || (a.parentNode.getBBox && a.parentNode.getCTM))
						);
					},
					Ja = [1, 0, 0, 1, 0, 0],
					Ka = function (a, b) {
						var c,
							d,
							e,
							f,
							g,
							h = a._gsTransform || new Ca(),
							i = 1e5;
						if (
							(ya
								? (d = X(a, za, null, !0))
								: a.currentStyle &&
								  ((d = a.currentStyle.filter.match(E)),
								  (d =
										d && 4 === d.length
											? [
													d[0].substr(4),
													Number(d[2].substr(4)),
													Number(d[1].substr(4)),
													d[3].substr(4),
													h.x || 0,
													h.y || 0,
											  ].join(',')
											: '')),
							(c = !d || 'none' === d || 'matrix(1, 0, 0, 1, 0, 0)' === d),
							(h.svg || (a.getBBox && Ia(a))) &&
								(c && -1 !== (a.style[ya] + '').indexOf('matrix') && ((d = a.style[ya]), (c = 0)),
								(e = a.getAttribute('transform')),
								c &&
									e &&
									(-1 !== e.indexOf('matrix')
										? ((d = e), (c = 0))
										: -1 !== e.indexOf('translate') &&
										  ((d = 'matrix(1,0,0,1,' + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(',') + ')'),
										  (c = 0)))),
							c)
						)
							return Ja;
						for (e = (d || '').match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], sa = e.length; --sa > -1; )
							(f = Number(e[sa])),
								(e[sa] = (g = f - (f |= 0)) ? (0 | (g * i + (0 > g ? -0.5 : 0.5))) / i + f : f);
						return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
					},
					La = (O.getTransform = function (a, c, d, f) {
						if (a._gsTransform && d && !f) return a._gsTransform;
						var h,
							i,
							j,
							k,
							l,
							m,
							n = d ? a._gsTransform || new Ca() : new Ca(),
							o = 0 > n.scaleX,
							p = 2e-5,
							q = 1e5,
							r = Ba ? parseFloat(X(a, Aa, c, !1, '0 0 0').split(' ')[2]) || n.zOrigin || 0 : 0,
							s = parseFloat(g.defaultTransformPerspective) || 0;
						if (
							((n.svg = !(!a.getBBox || !Ia(a))),
							n.svg &&
								(Ha(a, X(a, Aa, e, !1, '50% 50%') + '', n, a.getAttribute('data-svg-origin')),
								(wa = g.useSVGTransformAttr || Ga)),
							(h = Ka(a)) !== Ja)
						) {
							if (16 === h.length) {
								var t,
									u,
									v,
									w,
									x,
									y = h[0],
									z = h[1],
									A = h[2],
									B = h[3],
									C = h[4],
									D = h[5],
									E = h[6],
									F = h[7],
									G = h[8],
									H = h[9],
									J = h[10],
									K = h[12],
									L = h[13],
									M = h[14],
									N = h[11],
									O = Math.atan2(E, J);
								n.zOrigin &&
									((M = -n.zOrigin),
									(K = G * M - h[12]),
									(L = H * M - h[13]),
									(M = J * M + n.zOrigin - h[14])),
									(n.rotationX = O * I),
									O &&
										((w = Math.cos(-O)),
										(x = Math.sin(-O)),
										(t = C * w + G * x),
										(u = D * w + H * x),
										(v = E * w + J * x),
										(G = C * -x + G * w),
										(H = D * -x + H * w),
										(J = E * -x + J * w),
										(N = F * -x + N * w),
										(C = t),
										(D = u),
										(E = v)),
									(O = Math.atan2(G, J)),
									(n.rotationY = O * I),
									O &&
										((w = Math.cos(-O)),
										(x = Math.sin(-O)),
										(t = y * w - G * x),
										(u = z * w - H * x),
										(v = A * w - J * x),
										(H = z * x + H * w),
										(J = A * x + J * w),
										(N = B * x + N * w),
										(y = t),
										(z = u),
										(A = v)),
									(O = Math.atan2(z, y)),
									(n.rotation = O * I),
									O &&
										((w = Math.cos(-O)),
										(x = Math.sin(-O)),
										(y = y * w + C * x),
										(u = z * w + D * x),
										(D = z * -x + D * w),
										(E = A * -x + E * w),
										(z = u)),
									n.rotationX &&
										Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 &&
										((n.rotationX = n.rotation = 0), (n.rotationY += 180)),
									(n.scaleX = (0 | (Math.sqrt(y * y + z * z) * q + 0.5)) / q),
									(n.scaleY = (0 | (Math.sqrt(D * D + H * H) * q + 0.5)) / q),
									(n.scaleZ = (0 | (Math.sqrt(E * E + J * J) * q + 0.5)) / q),
									(n.skewX = 0),
									(n.perspective = N ? 1 / (0 > N ? -N : N) : 0),
									(n.x = K),
									(n.y = L),
									(n.z = M),
									n.svg &&
										((n.x -= n.xOrigin - (n.xOrigin * y - n.yOrigin * C)),
										(n.y -= n.yOrigin - (n.yOrigin * z - n.xOrigin * D)));
							} else if (
								!(
									(Ba && !f && h.length && n.x === h[4] && n.y === h[5] && (n.rotationX || n.rotationY)) ||
									(void 0 !== n.x && 'none' === X(a, 'display', c))
								)
							) {
								var P = h.length >= 6,
									Q = P ? h[0] : 1,
									R = h[1] || 0,
									S = h[2] || 0,
									T = P ? h[3] : 1;
								(n.x = h[4] || 0),
									(n.y = h[5] || 0),
									(j = Math.sqrt(Q * Q + R * R)),
									(k = Math.sqrt(T * T + S * S)),
									(l = Q || R ? Math.atan2(R, Q) * I : n.rotation || 0),
									(m = S || T ? Math.atan2(S, T) * I + l : n.skewX || 0),
									Math.abs(m) > 90 &&
										270 > Math.abs(m) &&
										(o
											? ((j *= -1), (m += 0 >= l ? 180 : -180), (l += 0 >= l ? 180 : -180))
											: ((k *= -1), (m += 0 >= m ? 180 : -180))),
									(n.scaleX = j),
									(n.scaleY = k),
									(n.rotation = l),
									(n.skewX = m),
									Ba && ((n.rotationX = n.rotationY = n.z = 0), (n.perspective = s), (n.scaleZ = 1)),
									n.svg &&
										((n.x -= n.xOrigin - (n.xOrigin * Q + n.yOrigin * S)),
										(n.y -= n.yOrigin - (n.xOrigin * R + n.yOrigin * T)));
							}
							n.zOrigin = r;
							for (i in n) p > n[i] && n[i] > -p && (n[i] = 0);
						}
						return (
							d &&
								((a._gsTransform = n),
								n.svg &&
									(wa && a.style[ya]
										? b.delayedCall(0.001, function () {
												Pa(a.style, ya);
										  })
										: !wa &&
										  a.getAttribute('transform') &&
										  b.delayedCall(0.001, function () {
												a.removeAttribute('transform');
										  }))),
							n
						);
					}),
					Ma = function (a) {
						var b,
							c,
							d = this.data,
							e = -d.rotation * H,
							f = e + d.skewX * H,
							g = 1e5,
							h = (0 | (Math.cos(e) * d.scaleX * g)) / g,
							i = (0 | (Math.sin(e) * d.scaleX * g)) / g,
							j = (0 | (Math.sin(f) * -d.scaleY * g)) / g,
							k = (0 | (Math.cos(f) * d.scaleY * g)) / g,
							l = this.t.style,
							m = this.t.currentStyle;
						if (m) {
							(c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = '');
							var n,
								o,
								q = this.t.offsetWidth,
								r = this.t.offsetHeight,
								s = 'absolute' !== m.position,
								t =
									'progid:DXImageTransform.Microsoft.Matrix(M11=' +
									h +
									', M12=' +
									i +
									', M21=' +
									j +
									', M22=' +
									k,
								w = d.x + (q * d.xPercent) / 100,
								x = d.y + (r * d.yPercent) / 100;
							if (
								(null != d.ox &&
									((n = (d.oxp ? 0.01 * q * d.ox : d.ox) - q / 2),
									(o = (d.oyp ? 0.01 * r * d.oy : d.oy) - r / 2),
									(w += n - (n * h + o * i)),
									(x += o - (n * j + o * k))),
								s
									? ((n = q / 2),
									  (o = r / 2),
									  (t += ', Dx=' + (n - (n * h + o * i) + w) + ', Dy=' + (o - (n * j + o * k) + x) + ')'))
									: (t += ", sizingMethod='auto expand')"),
								(l.filter =
									-1 !== b.indexOf('DXImageTransform.Microsoft.Matrix(') ? b.replace(F, t) : t + ' ' + b),
								(0 === a || 1 === a) &&
									1 === h &&
									0 === i &&
									0 === j &&
									1 === k &&
									((s && -1 === t.indexOf('Dx=0, Dy=0')) ||
										(v.test(b) && 100 !== parseFloat(RegExp.$1)) ||
										(-1 === b.indexOf(b.indexOf('Alpha')) && l.removeAttribute('filter'))),
								!s)
							) {
								var y,
									z,
									A,
									B = 8 > p ? 1 : -1;
								for (
									n = d.ieOffsetX || 0,
										o = d.ieOffsetY || 0,
										d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w),
										d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x),
										sa = 0;
									4 > sa;
									sa++
								)
									(z = ba[sa]),
										(y = m[z]),
										(c =
											-1 !== y.indexOf('px')
												? parseFloat(y)
												: Y(this.t, z, parseFloat(y), y.replace(u, '')) || 0),
										(A =
											c !== d[z]
												? 2 > sa
													? -d.ieOffsetX
													: -d.ieOffsetY
												: 2 > sa
												? n - d.ieOffsetX
												: o - d.ieOffsetY),
										(l[z] = (d[z] = Math.round(c - A * (0 === sa || 2 === sa ? 1 : B))) + 'px');
							}
						}
					},
					Na =
						(O.set3DTransformRatio =
						O.setTransformRatio =
							function (a) {
								var b,
									c,
									d,
									e,
									f,
									g,
									h,
									i,
									j,
									k,
									l,
									m,
									o,
									p,
									q,
									r,
									s,
									t,
									u,
									v,
									w,
									x,
									y,
									z = this.data,
									A = this.t.style,
									B = z.rotation,
									C = z.rotationX,
									D = z.rotationY,
									E = z.scaleX,
									F = z.scaleY,
									G = z.scaleZ,
									I = z.x,
									J = z.y,
									K = z.z,
									L = z.svg,
									M = z.perspective,
									N = z.force3D;
								if (
									!(
										(((1 !== a && 0 !== a) ||
											'auto' !== N ||
											(this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) &&
											N) ||
										K ||
										M ||
										D ||
										C
									) ||
									(wa && L) ||
									!Ba
								)
									return void (B || z.skewX || L
										? ((B *= H),
										  (x = z.skewX * H),
										  (y = 1e5),
										  (b = Math.cos(B) * E),
										  (e = Math.sin(B) * E),
										  (c = Math.sin(B - x) * -F),
										  (f = Math.cos(B - x) * F),
										  x &&
												'simple' === z.skewType &&
												((s = Math.tan(x)),
												(s = Math.sqrt(1 + s * s)),
												(c *= s),
												(f *= s),
												z.skewY && ((b *= s), (e *= s))),
										  L &&
												((I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset),
												(J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset),
												wa &&
													(z.xPercent || z.yPercent) &&
													((p = this.t.getBBox()),
													(I += 0.01 * z.xPercent * p.width),
													(J += 0.01 * z.yPercent * p.height)),
												(p = 1e-6),
												p > I && I > -p && (I = 0),
												p > J && J > -p && (J = 0)),
										  (u =
												(0 | (b * y)) / y +
												',' +
												(0 | (e * y)) / y +
												',' +
												(0 | (c * y)) / y +
												',' +
												(0 | (f * y)) / y +
												',' +
												I +
												',' +
												J +
												')'),
										  L && wa
												? this.t.setAttribute('transform', 'matrix(' + u)
												: (A[ya] =
														(z.xPercent || z.yPercent
															? 'translate(' + z.xPercent + '%,' + z.yPercent + '%) matrix('
															: 'matrix(') + u))
										: (A[ya] =
												(z.xPercent || z.yPercent
													? 'translate(' + z.xPercent + '%,' + z.yPercent + '%) matrix('
													: 'matrix(') +
												E +
												',0,0,' +
												F +
												',' +
												I +
												',' +
												J +
												')'));
								if (
									(n &&
										((p = 1e-4),
										p > E && E > -p && (E = G = 2e-5),
										p > F && F > -p && (F = G = 2e-5),
										!M || z.z || z.rotationX || z.rotationY || (M = 0)),
									B || z.skewX)
								)
									(B *= H),
										(q = b = Math.cos(B)),
										(r = e = Math.sin(B)),
										z.skewX &&
											((B -= z.skewX * H),
											(q = Math.cos(B)),
											(r = Math.sin(B)),
											'simple' === z.skewType &&
												((s = Math.tan(z.skewX * H)),
												(s = Math.sqrt(1 + s * s)),
												(q *= s),
												(r *= s),
												z.skewY && ((b *= s), (e *= s)))),
										(c = -r),
										(f = q);
								else {
									if (!(D || C || 1 !== G || M || L))
										return void (A[ya] =
											(z.xPercent || z.yPercent
												? 'translate(' + z.xPercent + '%,' + z.yPercent + '%) translate3d('
												: 'translate3d(') +
											I +
											'px,' +
											J +
											'px,' +
											K +
											'px)' +
											(1 !== E || 1 !== F ? ' scale(' + E + ',' + F + ')' : ''));
									(b = f = 1), (c = e = 0);
								}
								(j = 1),
									(d = g = h = i = k = l = 0),
									(m = M ? -1 / M : 0),
									(o = z.zOrigin),
									(p = 1e-6),
									(v = ','),
									(w = '0'),
									(B = D * H),
									B &&
										((q = Math.cos(B)),
										(r = Math.sin(B)),
										(h = -r),
										(k = m * -r),
										(d = b * r),
										(g = e * r),
										(j = q),
										(m *= q),
										(b *= q),
										(e *= q)),
									(B = C * H),
									B &&
										((q = Math.cos(B)),
										(r = Math.sin(B)),
										(s = c * q + d * r),
										(t = f * q + g * r),
										(i = j * r),
										(l = m * r),
										(d = c * -r + d * q),
										(g = f * -r + g * q),
										(j *= q),
										(m *= q),
										(c = s),
										(f = t)),
									1 !== G && ((d *= G), (g *= G), (j *= G), (m *= G)),
									1 !== F && ((c *= F), (f *= F), (i *= F), (l *= F)),
									1 !== E && ((b *= E), (e *= E), (h *= E), (k *= E)),
									(o || L) &&
										(o && ((I += d * -o), (J += g * -o), (K += j * -o + o)),
										L &&
											((I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset),
											(J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset)),
										p > I && I > -p && (I = w),
										p > J && J > -p && (J = w),
										p > K && K > -p && (K = 0)),
									(u =
										z.xPercent || z.yPercent
											? 'translate(' + z.xPercent + '%,' + z.yPercent + '%) matrix3d('
											: 'matrix3d('),
									(u +=
										(p > b && b > -p ? w : b) +
										v +
										(p > e && e > -p ? w : e) +
										v +
										(p > h && h > -p ? w : h)),
									(u +=
										v +
										(p > k && k > -p ? w : k) +
										v +
										(p > c && c > -p ? w : c) +
										v +
										(p > f && f > -p ? w : f)),
									C || D
										? ((u +=
												v +
												(p > i && i > -p ? w : i) +
												v +
												(p > l && l > -p ? w : l) +
												v +
												(p > d && d > -p ? w : d)),
										  (u +=
												v +
												(p > g && g > -p ? w : g) +
												v +
												(p > j && j > -p ? w : j) +
												v +
												(p > m && m > -p ? w : m) +
												v))
										: (u += ',0,0,0,0,1,0,'),
									(u += I + v + J + v + K + v + (M ? 1 + -K / M : 1) + ')'),
									(A[ya] = u);
							});
				(j = Ca.prototype),
					(j.x =
						j.y =
						j.z =
						j.skewX =
						j.skewY =
						j.rotation =
						j.rotationX =
						j.rotationY =
						j.zOrigin =
						j.xPercent =
						j.yPercent =
						j.xOffset =
						j.yOffset =
							0),
					(j.scaleX = j.scaleY = j.scaleZ = 1),
					ua(
						'transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin',
						{
							parser: function (a, b, c, d, f, h, i) {
								if (d._lastParsedTransform === i) return f;
								d._lastParsedTransform = i;
								var j,
									k,
									l,
									m,
									n,
									o,
									p,
									q,
									r,
									s,
									t = a._gsTransform,
									u = a.style,
									v = 1e-6,
									w = xa.length,
									x = i,
									y = {},
									z = 'transformOrigin';
								if (
									(i.display
										? ((m = X(a, 'display')),
										  (u.display = 'block'),
										  (j = La(a, e, !0, i.parseTransform)),
										  (u.display = m))
										: (j = La(a, e, !0, i.parseTransform)),
									(d._transform = j),
									'string' == typeof x.transform && ya)
								)
									(m = M.style),
										(m[ya] = x.transform),
										(m.display = 'block'),
										(m.position = 'absolute'),
										K.body.appendChild(M),
										(k = La(M, null, !1)),
										K.body.removeChild(M),
										k.perspective || (k.perspective = j.perspective),
										null != x.xPercent && (k.xPercent = fa(x.xPercent, j.xPercent)),
										null != x.yPercent && (k.yPercent = fa(x.yPercent, j.yPercent));
								else if ('object' == typeof x) {
									if (
										((k = {
											scaleX: fa(null != x.scaleX ? x.scaleX : x.scale, j.scaleX),
											scaleY: fa(null != x.scaleY ? x.scaleY : x.scale, j.scaleY),
											scaleZ: fa(x.scaleZ, j.scaleZ),
											x: fa(x.x, j.x),
											y: fa(x.y, j.y),
											z: fa(x.z, j.z),
											xPercent: fa(x.xPercent, j.xPercent),
											yPercent: fa(x.yPercent, j.yPercent),
											perspective: fa(x.transformPerspective, j.perspective),
										}),
										null != (q = x.directionalRotation))
									)
										if ('object' == typeof q) for (m in q) x[m] = q[m];
										else x.rotation = q;
									'string' == typeof x.x &&
										-1 !== x.x.indexOf('%') &&
										((k.x = 0), (k.xPercent = fa(x.x, j.xPercent))),
										'string' == typeof x.y &&
											-1 !== x.y.indexOf('%') &&
											((k.y = 0), (k.yPercent = fa(x.y, j.yPercent))),
										(k.rotation = ga(
											'rotation' in x
												? x.rotation
												: 'shortRotation' in x
												? x.shortRotation + '_short'
												: 'rotationZ' in x
												? x.rotationZ
												: j.rotation,
											j.rotation,
											'rotation',
											y,
										)),
										Ba &&
											((k.rotationX = ga(
												'rotationX' in x
													? x.rotationX
													: 'shortRotationX' in x
													? x.shortRotationX + '_short'
													: j.rotationX || 0,
												j.rotationX,
												'rotationX',
												y,
											)),
											(k.rotationY = ga(
												'rotationY' in x
													? x.rotationY
													: 'shortRotationY' in x
													? x.shortRotationY + '_short'
													: j.rotationY || 0,
												j.rotationY,
												'rotationY',
												y,
											))),
										(k.skewX = null == x.skewX ? j.skewX : ga(x.skewX, j.skewX)),
										(k.skewY = null == x.skewY ? j.skewY : ga(x.skewY, j.skewY)),
										(l = k.skewY - j.skewY) && ((k.skewX += l), (k.rotation += l));
								}
								for (
									Ba && null != x.force3D && ((j.force3D = x.force3D), (p = !0)),
										j.skewType = x.skewType || j.skewType || g.defaultSkewType,
										(o =
											j.force3D ||
											j.z ||
											j.rotationX ||
											j.rotationY ||
											k.z ||
											k.rotationX ||
											k.rotationY ||
											k.perspective) ||
											null == x.scale ||
											(k.scaleZ = 1);
									--w > -1;

								)
									(c = xa[w]),
										((n = k[c] - j[c]) > v || -v > n || null != x[c] || null != J[c]) &&
											((p = !0),
											(f = new pa(j, c, j[c], n, f)),
											c in y && (f.e = y[c]),
											(f.xs0 = 0),
											(f.plugin = h),
											d._overwriteProps.push(f.n));
								return (
									(n = x.transformOrigin),
									j.svg &&
										(n || x.svgOrigin) &&
										((r = j.xOffset),
										(s = j.yOffset),
										Ha(a, da(n), k, x.svgOrigin, x.smoothOrigin),
										(f = qa(j, 'xOrigin', (t ? j : k).xOrigin, k.xOrigin, f, z)),
										(f = qa(j, 'yOrigin', (t ? j : k).yOrigin, k.yOrigin, f, z)),
										(r !== j.xOffset || s !== j.yOffset) &&
											((f = qa(j, 'xOffset', t ? r : j.xOffset, j.xOffset, f, z)),
											(f = qa(j, 'yOffset', t ? s : j.yOffset, j.yOffset, f, z))),
										(n = wa ? null : '0px 0px')),
									(n || (Ba && o && j.zOrigin)) &&
										(ya
											? ((p = !0),
											  (c = Aa),
											  (n = (n || X(a, c, e, !1, '50% 50%')) + ''),
											  (f = new pa(u, c, 0, 0, f, -1, z)),
											  (f.b = u[c]),
											  (f.plugin = h),
											  Ba
													? ((m = j.zOrigin),
													  (n = n.split(' ')),
													  (j.zOrigin =
															(n.length > 2 && (0 === m || '0px' !== n[2]) ? parseFloat(n[2]) : m) || 0),
													  (f.xs0 = f.e = n[0] + ' ' + (n[1] || '50%') + ' 0px'),
													  (f = new pa(j, 'zOrigin', 0, 0, f, -1, f.n)),
													  (f.b = m),
													  (f.xs0 = f.e = j.zOrigin))
													: (f.xs0 = f.e = n))
											: da(n + '', j)),
									p && (d._transformType = (j.svg && wa) || (!o && 3 !== this._transformType) ? 2 : 3),
									f
								);
							},
							prefix: !0,
						},
					),
					ua('boxShadow', {
						defaultValue: '0px 0px 0px 0px #999',
						prefix: !0,
						color: !0,
						multi: !0,
						keyword: 'inset',
					}),
					ua('borderRadius', {
						defaultValue: '0px',
						parser: function (a, b, c, f, g) {
							b = this.format(b);
							var h,
								i,
								j,
								k,
								l,
								m,
								n,
								o,
								p,
								q,
								r,
								s,
								t,
								u,
								v,
								w,
								x = [
									'borderTopLeftRadius',
									'borderTopRightRadius',
									'borderBottomRightRadius',
									'borderBottomLeftRadius',
								],
								y = a.style;
							for (
								p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(' '), i = 0;
								x.length > i;
								i++
							)
								this.p.indexOf('border') && (x[i] = V(x[i])),
									(l = k = X(a, x[i], e, !1, '0px')),
									-1 !== l.indexOf(' ') && ((k = l.split(' ')), (l = k[0]), (k = k[1])),
									(m = j = h[i]),
									(n = parseFloat(l)),
									(s = l.substr((n + '').length)),
									(t = '=' === m.charAt(1)),
									t
										? ((o = parseInt(m.charAt(0) + '1', 10)),
										  (m = m.substr(2)),
										  (o *= parseFloat(m)),
										  (r = m.substr((o + '').length - (0 > o ? 1 : 0)) || ''))
										: ((o = parseFloat(m)), (r = m.substr((o + '').length))),
									'' === r && (r = d[c] || s),
									r !== s &&
										((u = Y(a, 'borderLeft', n, s)),
										(v = Y(a, 'borderTop', n, s)),
										'%' === r
											? ((l = (u / p) * 100 + '%'), (k = (v / q) * 100 + '%'))
											: 'em' === r
											? ((w = Y(a, 'borderLeft', 1, 'em')), (l = u / w + 'em'), (k = v / w + 'em'))
											: ((l = u + 'px'), (k = v + 'px')),
										t && ((m = parseFloat(l) + o + r), (j = parseFloat(k) + o + r))),
									(g = ra(y, x[i], l + ' ' + k, m + ' ' + j, !1, '0px', g));
							return g;
						},
						prefix: !0,
						formatter: ma('0px 0px 0px 0px', !1, !0),
					}),
					ua('backgroundPosition', {
						defaultValue: '0 0',
						parser: function (a, b, c, d, f, g) {
							var h,
								i,
								j,
								k,
								l,
								m,
								n = 'background-position',
								o = e || W(a, null),
								q = this.format(
									(o
										? p
											? o.getPropertyValue(n + '-x') + ' ' + o.getPropertyValue(n + '-y')
											: o.getPropertyValue(n)
										: a.currentStyle.backgroundPositionX + ' ' + a.currentStyle.backgroundPositionY) || '0 0',
								),
								r = this.format(b);
							if (
								(-1 !== q.indexOf('%')) != (-1 !== r.indexOf('%')) &&
								(m = X(a, 'backgroundImage').replace(B, '')) &&
								'none' !== m
							) {
								for (h = q.split(' '), i = r.split(' '), N.setAttribute('src', m), j = 2; --j > -1; )
									(q = h[j]),
										(k = -1 !== q.indexOf('%')) !== (-1 !== i[j].indexOf('%')) &&
											((l = 0 === j ? a.offsetWidth - N.width : a.offsetHeight - N.height),
											(h[j] = k ? (parseFloat(q) / 100) * l + 'px' : (parseFloat(q) / l) * 100 + '%'));
								q = h.join(' ');
							}
							return this.parseComplex(a.style, q, r, f, g);
						},
						formatter: da,
					}),
					ua('backgroundSize', { defaultValue: '0 0', formatter: da }),
					ua('perspective', { defaultValue: '0px', prefix: !0 }),
					ua('perspectiveOrigin', { defaultValue: '50% 50%', prefix: !0 }),
					ua('transformStyle', { prefix: !0 }),
					ua('backfaceVisibility', { prefix: !0 }),
					ua('userSelect', { prefix: !0 }),
					ua('margin', { parser: na('marginTop,marginRight,marginBottom,marginLeft') }),
					ua('padding', { parser: na('paddingTop,paddingRight,paddingBottom,paddingLeft') }),
					ua('clip', {
						defaultValue: 'rect(0px,0px,0px,0px)',
						parser: function (a, b, c, d, f, g) {
							var h, i, j;
							return (
								9 > p
									? ((i = a.currentStyle),
									  (j = 8 > p ? ' ' : ','),
									  (h = 'rect(' + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ')'),
									  (b = this.format(b).split(',').join(j)))
									: ((h = this.format(X(a, this.p, e, !1, this.dflt))), (b = this.format(b))),
								this.parseComplex(a.style, h, b, f, g)
							);
						},
					}),
					ua('textShadow', { defaultValue: '0px 0px 0px #999', color: !0, multi: !0 }),
					ua('autoRound,strictUnits', {
						parser: function (a, b, c, d, e) {
							return e;
						},
					}),
					ua('border', {
						defaultValue: '0px solid #000',
						parser: function (a, b, c, d, f, g) {
							return this.parseComplex(
								a.style,
								this.format(
									X(a, 'borderTopWidth', e, !1, '0px') +
										' ' +
										X(a, 'borderTopStyle', e, !1, 'solid') +
										' ' +
										X(a, 'borderTopColor', e, !1, '#000'),
								),
								this.format(b),
								f,
								g,
							);
						},
						color: !0,
						formatter: function (a) {
							var b = a.split(' ');
							return b[0] + ' ' + (b[1] || 'solid') + ' ' + (a.match(la) || ['#000'])[0];
						},
					}),
					ua('borderWidth', { parser: na('borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth') }),
					ua('float,cssFloat,styleFloat', {
						parser: function (a, b, c, d, e) {
							var f = a.style,
								g = 'cssFloat' in f ? 'cssFloat' : 'styleFloat';
							return new pa(f, g, 0, 0, e, -1, c, !1, 0, f[g], b);
						},
					});
				var Oa = function (a) {
					var b,
						c = this.t,
						d = c.filter || X(this.data, 'filter') || '',
						e = 0 | (this.s + this.c * a);
					100 === e &&
						(-1 === d.indexOf('atrix(') && -1 === d.indexOf('radient(') && -1 === d.indexOf('oader(')
							? (c.removeAttribute('filter'), (b = !X(this.data, 'filter')))
							: ((c.filter = d.replace(x, '')), (b = !0))),
						b ||
							(this.xn1 && (c.filter = d = d || 'alpha(opacity=' + e + ')'),
							-1 === d.indexOf('pacity')
								? (0 === e && this.xn1) || (c.filter = d + ' alpha(opacity=' + e + ')')
								: (c.filter = d.replace(v, 'opacity=' + e)));
				};
				ua('opacity,alpha,autoAlpha', {
					defaultValue: '1',
					parser: function (a, b, c, d, f, g) {
						var h = parseFloat(X(a, 'opacity', e, !1, '1')),
							i = a.style,
							j = 'autoAlpha' === c;
						return (
							'string' == typeof b &&
								'=' === b.charAt(1) &&
								(b = ('-' === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
							j && 1 === h && 'hidden' === X(a, 'visibility', e) && 0 !== b && (h = 0),
							Q
								? (f = new pa(i, 'opacity', h, b - h, f))
								: ((f = new pa(i, 'opacity', 100 * h, 100 * (b - h), f)),
								  (f.xn1 = j ? 1 : 0),
								  (i.zoom = 1),
								  (f.type = 2),
								  (f.b = 'alpha(opacity=' + f.s + ')'),
								  (f.e = 'alpha(opacity=' + (f.s + f.c) + ')'),
								  (f.data = a),
								  (f.plugin = g),
								  (f.setRatio = Oa)),
							j &&
								((f = new pa(
									i,
									'visibility',
									0,
									0,
									f,
									-1,
									null,
									!1,
									0,
									0 !== h ? 'inherit' : 'hidden',
									0 === b ? 'hidden' : 'inherit',
								)),
								(f.xs0 = 'inherit'),
								d._overwriteProps.push(f.n),
								d._overwriteProps.push(c)),
							f
						);
					},
				});
				var Pa = function (a, b) {
						b &&
							(a.removeProperty
								? (('ms' === b.substr(0, 2) || 'webkit' === b.substr(0, 6)) && (b = '-' + b),
								  a.removeProperty(b.replace(z, '-$1').toLowerCase()))
								: a.removeAttribute(b));
					},
					Qa = function (a) {
						if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
							this.t.setAttribute('class', 0 === a ? this.b : this.e);
							for (var b = this.data, c = this.t.style; b; ) b.v ? (c[b.p] = b.v) : Pa(c, b.p), (b = b._next);
							1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
						} else this.t.getAttribute('class') !== this.e && this.t.setAttribute('class', this.e);
					};
				ua('className', {
					parser: function (a, b, d, f, g, h, i) {
						var j,
							k,
							l,
							m,
							n,
							o = a.getAttribute('class') || '',
							p = a.style.cssText;
						if (
							((g = f._classNamePT = new pa(a, d, 0, 0, g, 2)),
							(g.setRatio = Qa),
							(g.pr = -11),
							(c = !0),
							(g.b = o),
							(k = $(a, e)),
							(l = a._gsClassPT))
						) {
							for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
							l.setRatio(1);
						}
						return (
							(a._gsClassPT = g),
							(g.e =
								'=' !== b.charAt(1)
									? b
									: o.replace(RegExp('\\s*\\b' + b.substr(2) + '\\b'), '') +
									  ('+' === b.charAt(0) ? ' ' + b.substr(2) : '')),
							a.setAttribute('class', g.e),
							(j = _(a, k, $(a), i, m)),
							a.setAttribute('class', o),
							(g.data = j.firstMPT),
							(a.style.cssText = p),
							(g = g.xfirst = f.parse(a, j.difs, g, h))
						);
					},
				});
				var Ra = function (a) {
					if (
						(1 === a || 0 === a) &&
						this.data._totalTime === this.data._totalDuration &&
						'isFromStart' !== this.data.data
					) {
						var b,
							c,
							d,
							e,
							f,
							g = this.t.style,
							h = i.transform.parse;
						if ('all' === this.e) (g.cssText = ''), (e = !0);
						else
							for (b = this.e.split(' ').join('').split(','), d = b.length; --d > -1; )
								(c = b[d]),
									i[c] && (i[c].parse === h ? (e = !0) : (c = 'transformOrigin' === c ? Aa : i[c].p)),
									Pa(g, c);
						e &&
							(Pa(g, ya),
							(f = this.t._gsTransform) &&
								(f.svg && this.t.removeAttribute('data-svg-origin'), delete this.t._gsTransform));
					}
				};
				for (
					ua('clearProps', {
						parser: function (a, b, d, e, f) {
							return (
								(f = new pa(a, d, 0, 0, f, 2)),
								(f.setRatio = Ra),
								(f.e = b),
								(f.pr = -10),
								(f.data = e._tween),
								(c = !0),
								f
							);
						},
					}),
						j = 'bezier,throwProps,physicsProps,physics2D'.split(','),
						sa = j.length;
					sa--;

				)
					va(j[sa]);
				(j = g.prototype),
					(j._firstPT = j._lastParsedTransform = j._transform = null),
					(j._onInitTween = function (a, b, h) {
						if (!a.nodeType) return !1;
						(this._target = a),
							(this._tween = h),
							(this._vars = b),
							(k = b.autoRound),
							(c = !1),
							(d = b.suffixMap || g.suffixMap),
							(e = W(a, '')),
							(f = this._overwriteProps);
						var j,
							n,
							p,
							q,
							r,
							s,
							t,
							u,
							v,
							x = a.style;
						if (
							(l &&
								'' === x.zIndex &&
								('auto' === (j = X(a, 'zIndex', e)) || '' === j) &&
								this._addLazySet(x, 'zIndex', 0),
							'string' == typeof b &&
								((q = x.cssText),
								(j = $(a, e)),
								(x.cssText = q + ';' + b),
								(j = _(a, j, $(a)).difs),
								!Q && w.test(b) && (j.opacity = parseFloat(RegExp.$1)),
								(b = j),
								(x.cssText = q)),
							(this._firstPT = n =
								b.className
									? i.className.parse(a, b.className, 'className', this, null, null, b)
									: this.parse(a, b, null)),
							this._transformType)
						) {
							for (
								v = 3 === this._transformType,
									ya
										? m &&
										  ((l = !0),
										  '' === x.zIndex &&
												('auto' === (t = X(a, 'zIndex', e)) || '' === t) &&
												this._addLazySet(x, 'zIndex', 0),
										  o &&
												this._addLazySet(
													x,
													'WebkitBackfaceVisibility',
													this._vars.WebkitBackfaceVisibility || (v ? 'visible' : 'hidden'),
												))
										: (x.zoom = 1),
									p = n;
								p && p._next;

							)
								p = p._next;
							(u = new pa(a, 'transform', 0, 0, null, 2)),
								this._linkCSSP(u, null, p),
								(u.setRatio = ya ? Na : Ma),
								(u.data = this._transform || La(a, e, !0)),
								(u.tween = h),
								(u.pr = -1),
								f.pop();
						}
						if (c) {
							for (; n; ) {
								for (s = n._next, p = q; p && p.pr > n.pr; ) p = p._next;
								(n._prev = p ? p._prev : r) ? (n._prev._next = n) : (q = n),
									(n._next = p) ? (p._prev = n) : (r = n),
									(n = s);
							}
							this._firstPT = q;
						}
						return !0;
					}),
					(j.parse = function (a, b, c, f) {
						var g,
							h,
							j,
							l,
							m,
							n,
							o,
							p,
							q,
							r,
							s = a.style;
						for (g in b)
							(n = b[g]),
								(h = i[g]),
								h
									? (c = h.parse(a, n, g, this, c, f, b))
									: ((m = X(a, g, e) + ''),
									  (q = 'string' == typeof n),
									  'color' === g ||
									  'fill' === g ||
									  'stroke' === g ||
									  -1 !== g.indexOf('Color') ||
									  (q && y.test(n))
											? (q || ((n = ja(n)), (n = (n.length > 3 ? 'rgba(' : 'rgb(') + n.join(',') + ')')),
											  (c = ra(s, g, m, n, !0, 'transparent', c, 0, f)))
											: !q || (-1 === n.indexOf(' ') && -1 === n.indexOf(','))
											? ((j = parseFloat(m)),
											  (o = j || 0 === j ? m.substr((j + '').length) : ''),
											  ('' === m || 'auto' === m) &&
													('width' === g || 'height' === g
														? ((j = ca(a, g, e)), (o = 'px'))
														: 'left' === g || 'top' === g
														? ((j = Z(a, g, e)), (o = 'px'))
														: ((j = 'opacity' !== g ? 0 : 1), (o = ''))),
											  (r = q && '=' === n.charAt(1)),
											  r
													? ((l = parseInt(n.charAt(0) + '1', 10)),
													  (n = n.substr(2)),
													  (l *= parseFloat(n)),
													  (p = n.replace(u, '')))
													: ((l = parseFloat(n)), (p = q ? n.replace(u, '') : '')),
											  '' === p && (p = g in d ? d[g] : o),
											  (n = l || 0 === l ? (r ? l + j : l) + p : b[g]),
											  o !== p &&
													'' !== p &&
													(l || 0 === l) &&
													j &&
													((j = Y(a, g, j, o)),
													'%' === p
														? ((j /= Y(a, g, 100, '%') / 100), !0 !== b.strictUnits && (m = j + '%'))
														: 'em' === p || 'rem' === p
														? (j /= Y(a, g, 1, p))
														: 'px' !== p && ((l = Y(a, g, l, p)), (p = 'px')),
													r && (l || 0 === l) && (n = l + j + p)),
											  r && (l += j),
											  (!j && 0 !== j) || (!l && 0 !== l)
													? void 0 !== s[g] && (n || ('NaN' != n + '' && null != n))
														? ((c = new pa(s, g, l || j || 0, 0, c, -1, g, !1, 0, m, n)),
														  (c.xs0 =
																'none' !== n || ('display' !== g && -1 === g.indexOf('Style')) ? n : m))
														: S('invalid ' + g + ' tween value: ' + b[g])
													: ((c = new pa(
															s,
															g,
															j,
															l - j,
															c,
															0,
															g,
															!1 !== k && ('px' === p || 'zIndex' === g),
															0,
															m,
															n,
													  )),
													  (c.xs0 = p)))
											: (c = ra(s, g, m, n, !0, null, c, 0, f))),
								f && c && !c.plugin && (c.plugin = f);
						return c;
					}),
					(j.setRatio = function (a) {
						var b,
							c,
							d,
							e = this._firstPT,
							f = 1e-6;
						if (1 !== a || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
							if (
								a ||
								(this._tween._time !== this._tween._duration && 0 !== this._tween._time) ||
								-1e-6 === this._tween._rawPrevTime
							)
								for (; e; ) {
									if (((b = e.c * a + e.s), e.r ? (b = Math.round(b)) : f > b && b > -f && (b = 0), e.type))
										if (1 === e.type)
											if (2 === (d = e.l)) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
											else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
											else if (4 === d)
												e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
											else if (5 === d)
												e.t[e.p] =
													e.xs0 +
													b +
													e.xs1 +
													e.xn1 +
													e.xs2 +
													e.xn2 +
													e.xs3 +
													e.xn3 +
													e.xs4 +
													e.xn4 +
													e.xs5;
											else {
												for (c = e.xs0 + b + e.xs1, d = 1; e.l > d; d++)
													c += e['xn' + d] + e['xs' + (d + 1)];
												e.t[e.p] = c;
											}
										else -1 === e.type ? (e.t[e.p] = e.xs0) : e.setRatio && e.setRatio(a);
									else e.t[e.p] = b + e.xs0;
									e = e._next;
								}
							else for (; e; ) 2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a), (e = e._next);
						else
							for (; e; ) {
								if (2 !== e.type)
									if (e.r && -1 !== e.type)
										if (((b = Math.round(e.s + e.c)), e.type)) {
											if (1 === e.type) {
												for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; e.l > d; d++)
													c += e['xn' + d] + e['xs' + (d + 1)];
												e.t[e.p] = c;
											}
										} else e.t[e.p] = b + e.xs0;
									else e.t[e.p] = e.e;
								else e.setRatio(a);
								e = e._next;
							}
					}),
					(j._enableTransforms = function (a) {
						(this._transform = this._transform || La(this._target, e, !0)),
							(this._transformType = (this._transform.svg && wa) || (!a && 3 !== this._transformType) ? 2 : 3);
					});
				var Sa = function () {
					(this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
				};
				(j._addLazySet = function (a, b, c) {
					var d = (this._firstPT = new pa(a, b, 0, 0, this._firstPT, 2));
					(d.e = c), (d.setRatio = Sa), (d.data = this);
				}),
					(j._linkCSSP = function (a, b, c, d) {
						return (
							a &&
								(b && (b._prev = a),
								a._next && (a._next._prev = a._prev),
								a._prev
									? (a._prev._next = a._next)
									: this._firstPT === a && ((this._firstPT = a._next), (d = !0)),
								c ? (c._next = a) : d || null !== this._firstPT || (this._firstPT = a),
								(a._next = b),
								(a._prev = c)),
							a
						);
					}),
					(j._kill = function (b) {
						var c,
							d,
							e,
							f = b;
						if (b.autoAlpha || b.alpha) {
							f = {};
							for (d in b) f[d] = b[d];
							(f.opacity = 1), f.autoAlpha && (f.visibility = 1);
						}
						return (
							b.className &&
								(c = this._classNamePT) &&
								((e = c.xfirst),
								e && e._prev
									? this._linkCSSP(e._prev, c._next, e._prev._prev)
									: e === this._firstPT && (this._firstPT = c._next),
								c._next && this._linkCSSP(c._next, c._next._next, e._prev),
								(this._classNamePT = null)),
							a.prototype._kill.call(this, f)
						);
					});
				var Ta = function (a, b, c) {
					var d, e, f, g;
					if (a.slice) for (e = a.length; --e > -1; ) Ta(a[e], b, c);
					else
						for (d = a.childNodes, e = d.length; --e > -1; )
							(f = d[e]),
								(g = f.type),
								f.style && (b.push($(f)), c && c.push(f)),
								(1 !== g && 9 !== g && 11 !== g) || !f.childNodes.length || Ta(f, b, c);
				};
				return (
					(g.cascadeTo = function (a, c, d) {
						var e,
							f,
							g,
							h,
							i = b.to(a, c, d),
							j = [i],
							k = [],
							l = [],
							m = [],
							n = b._internals.reservedProps;
						for (
							a = i._targets || i.target,
								Ta(a, k, m),
								i.render(c, !0, !0),
								Ta(a, l),
								i.render(0, !0, !0),
								i._enabled(!0),
								e = m.length;
							--e > -1;

						)
							if (((f = _(m[e], k[e], l[e])), f.firstMPT)) {
								f = f.difs;
								for (g in d) n[g] && (f[g] = d[g]);
								h = {};
								for (g in f) h[g] = k[e][g];
								j.push(b.fromTo(m[e], c, h, f));
							}
						return j;
					}),
					a.activate([g]),
					g
				);
			},
			!0,
		),
		(function () {
			var a = _gsScope._gsDefine.plugin({
					propName: 'roundProps',
					version: '1.5',
					priority: -1,
					API: 2,
					init: function (a, b, c) {
						return (this._tween = c), !0;
					},
				}),
				b = function (a) {
					for (; a; ) a.f || a.blob || (a.r = 1), (a = a._next);
				},
				c = a.prototype;
			(c._onInitAllProps = function () {
				for (
					var a,
						c,
						d,
						e = this._tween,
						f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(','),
						g = f.length,
						h = {},
						i = e._propLookup.roundProps;
					--g > -1;

				)
					h[f[g]] = 1;
				for (g = f.length; --g > -1; )
					for (a = f[g], c = e._firstPT; c; )
						(d = c._next),
							c.pg
								? c.t._roundProps(h, !0)
								: c.n === a &&
								  (2 === c.f && c.t
										? b(c.t._firstPT)
										: (this._add(c.t, a, c.s, c.c),
										  d && (d._prev = c._prev),
										  c._prev ? (c._prev._next = d) : e._firstPT === c && (e._firstPT = d),
										  (c._next = c._prev = null),
										  (e._propLookup[a] = i))),
							(c = d);
				return !1;
			}),
				(c._add = function (a, b, c, d) {
					this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b);
				});
		})(),
		(function () {
			_gsScope._gsDefine.plugin({
				propName: 'attr',
				API: 2,
				version: '0.5.0',
				init: function (a, b) {
					var c;
					if ('function' != typeof a.setAttribute) return !1;
					for (c in b)
						this._addTween(a, 'setAttribute', a.getAttribute(c) + '', b[c] + '', c, !1, c),
							this._overwriteProps.push(c);
					return !0;
				},
			});
		})(),
		(_gsScope._gsDefine.plugin({
			propName: 'directionalRotation',
			version: '0.2.1',
			API: 2,
			init: function (a, b) {
				'object' != typeof b && (b = { rotation: b }), (this.finals = {});
				var c,
					d,
					e,
					f,
					g,
					h,
					i = !0 === b.useRadians ? 2 * Math.PI : 360,
					j = 1e-6;
				for (c in b)
					'useRadians' !== c &&
						((h = (b[c] + '').split('_')),
						(d = h[0]),
						(e = parseFloat(
							'function' != typeof a[c]
								? a[c]
								: a[
										c.indexOf('set') || 'function' != typeof a['get' + c.substr(3)] ? c : 'get' + c.substr(3)
								  ](),
						)),
						(f = this.finals[c] =
							'string' == typeof d && '=' === d.charAt(1)
								? e + parseInt(d.charAt(0) + '1', 10) * Number(d.substr(2))
								: Number(d) || 0),
						(g = f - e),
						h.length &&
							((d = h.join('_')),
							-1 !== d.indexOf('short') && (g %= i) !== g % (i / 2) && (g = 0 > g ? g + i : g - i),
							-1 !== d.indexOf('_cw') && 0 > g
								? (g = ((g + 9999999999 * i) % i) - (0 | (g / i)) * i)
								: -1 !== d.indexOf('ccw') && g > 0 && (g = ((g - 9999999999 * i) % i) - (0 | (g / i)) * i)),
						(g > j || -j > g) && (this._addTween(a, c, e, e + g, c), this._overwriteProps.push(c)));
				return !0;
			},
			set: function (a) {
				var b;
				if (1 !== a) this._super.setRatio.call(this, a);
				else
					for (b = this._firstPT; b; )
						b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]), (b = b._next);
			},
		})._autoCSS = !0),
		_gsScope._gsDefine(
			'easing.Back',
			['easing.Ease'],
			function (a) {
				var b,
					c,
					d,
					e = _gsScope.GreenSockGlobals || _gsScope,
					f = e.com.greensock,
					g = 2 * Math.PI,
					h = Math.PI / 2,
					i = f._class,
					j = function (b, c) {
						var d = i('easing.' + b, function () {}, !0),
							e = (d.prototype = new a());
						return (e.constructor = d), (e.getRatio = c), d;
					},
					k = a.register || function () {},
					l = function (a, b, c, d) {
						var e = i('easing.' + a, { easeOut: new b(), easeIn: new c(), easeInOut: new d() }, !0);
						return k(e, a), e;
					},
					m = function (a, b, c) {
						(this.t = a),
							(this.v = b),
							c && ((this.next = c), (c.prev = this), (this.c = c.v - b), (this.gap = c.t - a));
					},
					n = function (b, c) {
						var d = i(
								'easing.' + b,
								function (a) {
									(this._p1 = a || 0 === a ? a : 1.70158), (this._p2 = 1.525 * this._p1);
								},
								!0,
							),
							e = (d.prototype = new a());
						return (
							(e.constructor = d),
							(e.getRatio = c),
							(e.config = function (a) {
								return new d(a);
							}),
							d
						);
					},
					o = l(
						'Back',
						n('BackOut', function (a) {
							return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
						}),
						n('BackIn', function (a) {
							return a * a * ((this._p1 + 1) * a - this._p1);
						}),
						n('BackInOut', function (a) {
							return 1 > (a *= 2)
								? 0.5 * a * a * ((this._p2 + 1) * a - this._p2)
								: 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
						}),
					),
					p = i(
						'easing.SlowMo',
						function (a, b, c) {
							(b = b || 0 === b ? b : 0.7),
								null == a ? (a = 0.7) : a > 1 && (a = 1),
								(this._p = 1 !== a ? b : 0),
								(this._p1 = (1 - a) / 2),
								(this._p2 = a),
								(this._p3 = this._p1 + this._p2),
								(this._calcEnd = !0 === c);
						},
						!0,
					),
					q = (p.prototype = new a());
				return (
					(q.constructor = p),
					(q.getRatio = function (a) {
						var b = a + (0.5 - a) * this._p;
						return this._p1 > a
							? this._calcEnd
								? 1 - (a = 1 - a / this._p1) * a
								: b - (a = 1 - a / this._p1) * a * a * a * b
							: a > this._p3
							? this._calcEnd
								? 1 - (a = (a - this._p3) / this._p1) * a
								: b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
							: this._calcEnd
							? 1
							: b;
					}),
					(p.ease = new p(0.7, 0.7)),
					(q.config = p.config =
						function (a, b, c) {
							return new p(a, b, c);
						}),
					(b = i(
						'easing.SteppedEase',
						function (a) {
							(a = a || 1), (this._p1 = 1 / a), (this._p2 = a + 1);
						},
						!0,
					)),
					(q = b.prototype = new a()),
					(q.constructor = b),
					(q.getRatio = function (a) {
						return 0 > a ? (a = 0) : a >= 1 && (a = 0.999999999), ((this._p2 * a) >> 0) * this._p1;
					}),
					(q.config = b.config =
						function (a) {
							return new b(a);
						}),
					(c = i(
						'easing.RoughEase',
						function (b) {
							b = b || {};
							for (
								var c,
									d,
									e,
									f,
									g,
									h,
									i = b.taper || 'none',
									j = [],
									k = 0,
									l = 0 | (b.points || 20),
									n = l,
									o = !1 !== b.randomize,
									p = !0 === b.clamp,
									q = b.template instanceof a ? b.template : null,
									r = 'number' == typeof b.strength ? 0.4 * b.strength : 0.4;
								--n > -1;

							)
								(c = o ? Math.random() : (1 / l) * n),
									(d = q ? q.getRatio(c) : c),
									'none' === i
										? (e = r)
										: 'out' === i
										? ((f = 1 - c), (e = f * f * r))
										: 'in' === i
										? (e = c * c * r)
										: 0.5 > c
										? ((f = 2 * c), (e = 0.5 * f * f * r))
										: ((f = 2 * (1 - c)), (e = 0.5 * f * f * r)),
									o ? (d += Math.random() * e - 0.5 * e) : n % 2 ? (d += 0.5 * e) : (d -= 0.5 * e),
									p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
									(j[k++] = { x: c, y: d });
							for (
								j.sort(function (a, b) {
									return a.x - b.x;
								}),
									h = new m(1, 1, null),
									n = l;
								--n > -1;

							)
								(g = j[n]), (h = new m(g.x, g.y, h));
							this._prev = new m(0, 0, 0 !== h.t ? h : h.next);
						},
						!0,
					)),
					(q = c.prototype = new a()),
					(q.constructor = c),
					(q.getRatio = function (a) {
						var b = this._prev;
						if (a > b.t) {
							for (; b.next && a >= b.t; ) b = b.next;
							b = b.prev;
						} else for (; b.prev && b.t >= a; ) b = b.prev;
						return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
					}),
					(q.config = function (a) {
						return new c(a);
					}),
					(c.ease = new c()),
					l(
						'Bounce',
						j('BounceOut', function (a) {
							return 1 / 2.75 > a
								? 7.5625 * a * a
								: 2 / 2.75 > a
								? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
								: 2.5 / 2.75 > a
								? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
								: 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
						}),
						j('BounceIn', function (a) {
							return 1 / 2.75 > (a = 1 - a)
								? 1 - 7.5625 * a * a
								: 2 / 2.75 > a
								? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
								: 2.5 / 2.75 > a
								? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
								: 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
						}),
						j('BounceInOut', function (a) {
							var b = 0.5 > a;
							return (
								(a = b ? 1 - 2 * a : 2 * a - 1),
								(a =
									1 / 2.75 > a
										? 7.5625 * a * a
										: 2 / 2.75 > a
										? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
										: 2.5 / 2.75 > a
										? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
										: 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
								b ? 0.5 * (1 - a) : 0.5 * a + 0.5
							);
						}),
					),
					l(
						'Circ',
						j('CircOut', function (a) {
							return Math.sqrt(1 - (a -= 1) * a);
						}),
						j('CircIn', function (a) {
							return -(Math.sqrt(1 - a * a) - 1);
						}),
						j('CircInOut', function (a) {
							return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
						}),
					),
					(d = function (b, c, d) {
						var e = i(
								'easing.' + b,
								function (a, b) {
									(this._p1 = a >= 1 ? a : 1),
										(this._p2 = (b || d) / (1 > a ? a : 1)),
										(this._p3 = (this._p2 / g) * (Math.asin(1 / this._p1) || 0)),
										(this._p2 = g / this._p2);
								},
								!0,
							),
							f = (e.prototype = new a());
						return (
							(f.constructor = e),
							(f.getRatio = c),
							(f.config = function (a, b) {
								return new e(a, b);
							}),
							e
						);
					}),
					l(
						'Elastic',
						d(
							'ElasticOut',
							function (a) {
								return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
							},
							0.3,
						),
						d(
							'ElasticIn',
							function (a) {
								return -this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2);
							},
							0.3,
						),
						d(
							'ElasticInOut',
							function (a) {
								return 1 > (a *= 2)
									? -0.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)
									: 0.5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) + 1;
							},
							0.45,
						),
					),
					l(
						'Expo',
						j('ExpoOut', function (a) {
							return 1 - Math.pow(2, -10 * a);
						}),
						j('ExpoIn', function (a) {
							return Math.pow(2, 10 * (a - 1)) - 0.001;
						}),
						j('ExpoInOut', function (a) {
							return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
						}),
					),
					l(
						'Sine',
						j('SineOut', function (a) {
							return Math.sin(a * h);
						}),
						j('SineIn', function (a) {
							return 1 - Math.cos(a * h);
						}),
						j('SineInOut', function (a) {
							return -0.5 * (Math.cos(Math.PI * a) - 1);
						}),
					),
					i(
						'easing.EaseLookup',
						{
							find: function (b) {
								return a.map[b];
							},
						},
						!0,
					),
					k(e.SlowMo, 'SlowMo', 'ease,'),
					k(c, 'RoughEase', 'ease,'),
					k(b, 'SteppedEase', 'ease,'),
					o
				);
			},
			!0,
		);
}),
	_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	(function (a, b) {
		'use strict';
		var c = (a.GreenSockGlobals = a.GreenSockGlobals || a);
		if (!c.TweenLite) {
			var d,
				e,
				f,
				g,
				h,
				i = function (a) {
					var b,
						d = a.split('.'),
						e = c;
					for (b = 0; d.length > b; b++) e[d[b]] = e = e[d[b]] || {};
					return e;
				},
				j = i('com.greensock'),
				k = 1e-10,
				l = function (a) {
					var b,
						c = [],
						d = a.length;
					for (b = 0; b !== d; c.push(a[b++]));
					return c;
				},
				m = function () {},
				n = (function () {
					var a = Object.prototype.toString,
						b = a.call([]);
					return function (c) {
						return null != c && (c instanceof Array || ('object' == typeof c && !!c.push && a.call(c) === b));
					};
				})(),
				o = {},
				p = function (d, e, f, g) {
					(this.sc = o[d] ? o[d].sc : []), (o[d] = this), (this.gsClass = null), (this.func = f);
					var h = [];
					(this.check = function (j) {
						for (var k, l, m, n, q, r = e.length, s = r; --r > -1; )
							(k = o[e[r]] || new p(e[r], [])).gsClass ? ((h[r] = k.gsClass), s--) : j && k.sc.push(this);
						if (0 === s && f)
							for (
								l = ('com.greensock.' + d).split('.'),
									m = l.pop(),
									n = i(l.join('.'))[m] = this.gsClass = f.apply(f, h),
									g &&
										((c[m] = n),
										(q = 'undefined' != typeof module && module.exports),
										!q && 'function' == typeof define && define.amd
											? define(
													(a.GreenSockAMDPath ? a.GreenSockAMDPath + '/' : '') + d.split('.').pop(),
													[],
													function () {
														return n;
													},
											  )
											: d === b && q && (module.exports = n)),
									r = 0;
								this.sc.length > r;
								r++
							)
								this.sc[r].check();
					}),
						this.check(!0);
				},
				q = (a._gsDefine = function (a, b, c, d) {
					return new p(a, b, c, d);
				}),
				r = (j._class = function (a, b, c) {
					return (
						(b = b || function () {}),
						q(
							a,
							[],
							function () {
								return b;
							},
							c,
						),
						b
					);
				});
			q.globals = c;
			var s = [0, 0, 1, 1],
				t = [],
				u = r(
					'easing.Ease',
					function (a, b, c, d) {
						(this._func = a), (this._type = c || 0), (this._power = d || 0), (this._params = b ? s.concat(b) : s);
					},
					!0,
				),
				v = (u.map = {}),
				w = (u.register = function (a, b, c, d) {
					for (
						var e, f, g, h, i = b.split(','), k = i.length, l = (c || 'easeIn,easeOut,easeInOut').split(',');
						--k > -1;

					)
						for (f = i[k], e = d ? r('easing.' + f, null, !0) : j.easing[f] || {}, g = l.length; --g > -1; )
							(h = l[g]), (v[f + '.' + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a());
				});
			for (
				f = u.prototype,
					f._calcEnd = !1,
					f.getRatio = function (a) {
						if (this._func) return (this._params[0] = a), this._func.apply(null, this._params);
						var b = this._type,
							c = this._power,
							d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
						return (
							1 === c
								? (d *= d)
								: 2 === c
								? (d *= d * d)
								: 3 === c
								? (d *= d * d * d)
								: 4 === c && (d *= d * d * d * d),
							1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
						);
					},
					d = ['Linear', 'Quad', 'Cubic', 'Quart', 'Quint,Strong'],
					e = d.length;
				--e > -1;

			)
				(f = d[e] + ',Power' + e),
					w(new u(null, null, 1, e), f, 'easeOut', !0),
					w(new u(null, null, 2, e), f, 'easeIn' + (0 === e ? ',easeNone' : '')),
					w(new u(null, null, 3, e), f, 'easeInOut');
			(v.linear = j.easing.Linear.easeIn), (v.swing = j.easing.Quad.easeInOut);
			var x = r('events.EventDispatcher', function (a) {
				(this._listeners = {}), (this._eventTarget = a || this);
			});
			(f = x.prototype),
				(f.addEventListener = function (a, b, c, d, e) {
					e = e || 0;
					var f,
						i,
						j = this._listeners[a],
						k = 0;
					for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1; )
						(f = j[i]), f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && e > f.pr && (k = i + 1);
					j.splice(k, 0, { c: b, s: c, up: d, pr: e }), this !== g || h || g.wake();
				}),
				(f.removeEventListener = function (a, b) {
					var c,
						d = this._listeners[a];
					if (d) for (c = d.length; --c > -1; ) if (d[c].c === b) return void d.splice(c, 1);
				}),
				(f.dispatchEvent = function (a) {
					var b,
						c,
						d,
						e = this._listeners[a];
					if (e)
						for (b = e.length, c = this._eventTarget; --b > -1; )
							(d = e[b]) && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c));
				});
			var y = a.requestAnimationFrame,
				z = a.cancelAnimationFrame,
				A =
					Date.now ||
					function () {
						return new Date().getTime();
					},
				B = A();
			for (d = ['ms', 'moz', 'webkit', 'o'], e = d.length; --e > -1 && !y; )
				(y = a[d[e] + 'RequestAnimationFrame']),
					(z = a[d[e] + 'CancelAnimationFrame'] || a[d[e] + 'CancelRequestAnimationFrame']);
			r('Ticker', function (a, b) {
				var c,
					d,
					e,
					f,
					i,
					j = this,
					l = A(),
					n = !1 !== b && y,
					o = 500,
					p = 33,
					q = 'tick',
					r = function (a) {
						var b,
							g,
							h = A() - B;
						h > o && (l += h - p),
							(B += h),
							(j.time = (B - l) / 1e3),
							(b = j.time - i),
							(!c || b > 0 || !0 === a) && (j.frame++, (i += b + (b >= f ? 0.004 : f - b)), (g = !0)),
							!0 !== a && (e = d(r)),
							g && j.dispatchEvent(q);
					};
				x.call(j),
					(j.time = j.frame = 0),
					(j.tick = function () {
						r(!0);
					}),
					(j.lagSmoothing = function (a, b) {
						(o = a || 1 / k), (p = Math.min(b, o, 0));
					}),
					(j.sleep = function () {
						null != e && (n && z ? z(e) : clearTimeout(e), (d = m), (e = null), j === g && (h = !1));
					}),
					(j.wake = function () {
						null !== e ? j.sleep() : j.frame > 10 && (B = A() - o + 5),
							(d =
								0 === c
									? m
									: n && y
									? y
									: function (a) {
											return setTimeout(a, 0 | (1e3 * (i - j.time) + 1));
									  }),
							j === g && (h = !0),
							r(2);
					}),
					(j.fps = function (a) {
						return arguments.length ? ((c = a), (f = 1 / (c || 60)), (i = this.time + f), void j.wake()) : c;
					}),
					(j.useRAF = function (a) {
						return arguments.length ? (j.sleep(), (n = a), void j.fps(c)) : n;
					}),
					j.fps(a),
					setTimeout(function () {
						n && 5 > j.frame && j.useRAF(!1);
					}, 1500);
			}),
				(f = j.Ticker.prototype = new j.events.EventDispatcher()),
				(f.constructor = j.Ticker);
			var C = r('core.Animation', function (a, b) {
				if (
					((this.vars = b = b || {}),
					(this._duration = this._totalDuration = a || 0),
					(this._delay = Number(b.delay) || 0),
					(this._timeScale = 1),
					(this._active = !0 === b.immediateRender),
					(this.data = b.data),
					(this._reversed = !0 === b.reversed),
					V)
				) {
					h || g.wake();
					var c = this.vars.useFrames ? U : V;
					c.add(this, c._time), this.vars.paused && this.paused(!0);
				}
			});
			(g = C.ticker = new j.Ticker()),
				(f = C.prototype),
				(f._dirty = f._gc = f._initted = f._paused = !1),
				(f._totalTime = f._time = 0),
				(f._rawPrevTime = -1),
				(f._next = f._last = f._onUpdate = f._timeline = f.timeline = null),
				(f._paused = !1);
			var D = function () {
				h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3);
			};
			D(),
				(f.play = function (a, b) {
					return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
				}),
				(f.pause = function (a, b) {
					return null != a && this.seek(a, b), this.paused(!0);
				}),
				(f.resume = function (a, b) {
					return null != a && this.seek(a, b), this.paused(!1);
				}),
				(f.seek = function (a, b) {
					return this.totalTime(Number(a), !1 !== b);
				}),
				(f.restart = function (a, b) {
					return this.reversed(!1)
						.paused(!1)
						.totalTime(a ? -this._delay : 0, !1 !== b, !0);
				}),
				(f.reverse = function (a, b) {
					return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
				}),
				(f.render = function () {}),
				(f.invalidate = function () {
					return (
						(this._time = this._totalTime = 0),
						(this._initted = this._gc = !1),
						(this._rawPrevTime = -1),
						(this._gc || !this.timeline) && this._enabled(!0),
						this
					);
				}),
				(f.isActive = function () {
					var a,
						b = this._timeline,
						c = this._startTime;
					return (
						!b ||
						(!this._gc &&
							!this._paused &&
							b.isActive() &&
							(a = b.rawTime()) >= c &&
							c + this.totalDuration() / this._timeScale > a)
					);
				}),
				(f._enabled = function (a, b) {
					return (
						h || g.wake(),
						(this._gc = !a),
						(this._active = this.isActive()),
						!0 !== b &&
							(a && !this.timeline
								? this._timeline.add(this, this._startTime - this._delay)
								: !a && this.timeline && this._timeline._remove(this, !0)),
						!1
					);
				}),
				(f._kill = function () {
					return this._enabled(!1, !1);
				}),
				(f.kill = function (a, b) {
					return this._kill(a, b), this;
				}),
				(f._uncache = function (a) {
					for (var b = a ? this : this.timeline; b; ) (b._dirty = !0), (b = b.timeline);
					return this;
				}),
				(f._swapSelfInParams = function (a) {
					for (var b = a.length, c = a.concat(); --b > -1; ) '{self}' === a[b] && (c[b] = this);
					return c;
				}),
				(f._callback = function (a) {
					var b = this.vars;
					b[a].apply(b[a + 'Scope'] || b.callbackScope || this, b[a + 'Params'] || t);
				}),
				(f.eventCallback = function (a, b, c, d) {
					if ('on' === (a || '').substr(0, 2)) {
						var e = this.vars;
						if (1 === arguments.length) return e[a];
						null == b
							? delete e[a]
							: ((e[a] = b),
							  (e[a + 'Params'] = n(c) && -1 !== c.join('').indexOf('{self}') ? this._swapSelfInParams(c) : c),
							  (e[a + 'Scope'] = d)),
							'onUpdate' === a && (this._onUpdate = b);
					}
					return this;
				}),
				(f.delay = function (a) {
					return arguments.length
						? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay),
						  (this._delay = a),
						  this)
						: this._delay;
				}),
				(f.duration = function (a) {
					return arguments.length
						? ((this._duration = this._totalDuration = a),
						  this._uncache(!0),
						  this._timeline.smoothChildTiming &&
								this._time > 0 &&
								this._time < this._duration &&
								0 !== a &&
								this.totalTime(this._totalTime * (a / this._duration), !0),
						  this)
						: ((this._dirty = !1), this._duration);
				}),
				(f.totalDuration = function (a) {
					return (this._dirty = !1), arguments.length ? this.duration(a) : this._totalDuration;
				}),
				(f.time = function (a, b) {
					return arguments.length
						? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b))
						: this._time;
				}),
				(f.totalTime = function (a, b, c) {
					if ((h || g.wake(), !arguments.length)) return this._totalTime;
					if (this._timeline) {
						if ((0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming)) {
							this._dirty && this.totalDuration();
							var d = this._totalDuration,
								e = this._timeline;
							if (
								(a > d && !c && (a = d),
								(this._startTime =
									(this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale),
								e._dirty || this._uncache(!1),
								e._timeline)
							)
								for (; e._timeline; )
									e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale &&
										e.totalTime(e._totalTime, !0),
										(e = e._timeline);
						}
						this._gc && this._enabled(!0, !1),
							(this._totalTime !== a || 0 === this._duration) &&
								(I.length && X(), this.render(a, b, !1), I.length && X());
					}
					return this;
				}),
				(f.progress = f.totalProgress =
					function (a, b) {
						var c = this.duration();
						return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
					}),
				(f.startTime = function (a) {
					return arguments.length
						? (a !== this._startTime &&
								((this._startTime = a),
								this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)),
						  this)
						: this._startTime;
				}),
				(f.endTime = function (a) {
					return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
				}),
				(f.timeScale = function (a) {
					if (!arguments.length) return this._timeScale;
					if (((a = a || k), this._timeline && this._timeline.smoothChildTiming)) {
						var b = this._pauseTime,
							c = b || 0 === b ? b : this._timeline.totalTime();
						this._startTime = c - ((c - this._startTime) * this._timeScale) / a;
					}
					return (this._timeScale = a), this._uncache(!1);
				}),
				(f.reversed = function (a) {
					return arguments.length
						? (a != this._reversed &&
								((this._reversed = a),
								this.totalTime(
									this._timeline && !this._timeline.smoothChildTiming
										? this.totalDuration() - this._totalTime
										: this._totalTime,
									!0,
								)),
						  this)
						: this._reversed;
				}),
				(f.paused = function (a) {
					if (!arguments.length) return this._paused;
					var b,
						c,
						d = this._timeline;
					return (
						a != this._paused &&
							d &&
							(h || a || g.wake(),
							(b = d.rawTime()),
							(c = b - this._pauseTime),
							!a && d.smoothChildTiming && ((this._startTime += c), this._uncache(!1)),
							(this._pauseTime = a ? b : null),
							(this._paused = a),
							(this._active = this.isActive()),
							!a &&
								0 !== c &&
								this._initted &&
								this.duration() &&
								((b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale),
								this.render(b, b === this._totalTime, !0))),
						this._gc && !a && this._enabled(!0, !1),
						this
					);
				});
			var E = r('core.SimpleTimeline', function (a) {
				C.call(this, 0, a), (this.autoRemoveChildren = this.smoothChildTiming = !0);
			});
			(f = E.prototype = new C()),
				(f.constructor = E),
				(f.kill()._gc = !1),
				(f._first = f._last = f._recent = null),
				(f._sortChildren = !1),
				(f.add = f.insert =
					function (a, b) {
						var c, d;
						if (
							((a._startTime = Number(b || 0) + a._delay),
							a._paused &&
								this !== a._timeline &&
								(a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),
							a.timeline && a.timeline._remove(a, !0),
							(a.timeline = a._timeline = this),
							a._gc && a._enabled(!0, !0),
							(c = this._last),
							this._sortChildren)
						)
							for (d = a._startTime; c && c._startTime > d; ) c = c._prev;
						return (
							c ? ((a._next = c._next), (c._next = a)) : ((a._next = this._first), (this._first = a)),
							a._next ? (a._next._prev = a) : (this._last = a),
							(a._prev = c),
							(this._recent = a),
							this._timeline && this._uncache(!0),
							this
						);
					}),
				(f._remove = function (a, b) {
					return (
						a.timeline === this &&
							(b || a._enabled(!1, !0),
							a._prev ? (a._prev._next = a._next) : this._first === a && (this._first = a._next),
							a._next ? (a._next._prev = a._prev) : this._last === a && (this._last = a._prev),
							(a._next = a._prev = a.timeline = null),
							a === this._recent && (this._recent = this._last),
							this._timeline && this._uncache(!0)),
						this
					);
				}),
				(f.render = function (a, b, c) {
					var d,
						e = this._first;
					for (this._totalTime = this._time = this._rawPrevTime = a; e; )
						(d = e._next),
							(e._active || (a >= e._startTime && !e._paused)) &&
								(e._reversed
									? e.render(
											(e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale,
											b,
											c,
									  )
									: e.render((a - e._startTime) * e._timeScale, b, c)),
							(e = d);
				}),
				(f.rawTime = function () {
					return h || g.wake(), this._totalTime;
				});
			var F = r(
					'TweenLite',
					function (b, c, d) {
						if ((C.call(this, c, d), (this.render = F.prototype.render), null == b))
							throw 'Cannot tween a null target.';
						this.target = b = 'string' != typeof b ? b : F.selector(b) || b;
						var e,
							f,
							g,
							h =
								b.jquery ||
								(b.length && b !== a && b[0] && (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
							i = this.vars.overwrite;
						if (
							((this._overwrite = i = null == i ? T[F.defaultOverwrite] : 'number' == typeof i ? i >> 0 : T[i]),
							(h || b instanceof Array || (b.push && n(b))) && 'number' != typeof b[0])
						)
							for (
								this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0;
								g.length > e;
								e++
							)
								(f = g[e]),
									f
										? 'string' != typeof f
											? f.length &&
											  f !== a &&
											  f[0] &&
											  (f[0] === a || (f[0].nodeType && f[0].style && !f.nodeType))
												? (g.splice(e--, 1), (this._targets = g = g.concat(l(f))))
												: ((this._siblings[e] = Y(f, this, !1)),
												  1 === i && this._siblings[e].length > 1 && $(f, this, null, 1, this._siblings[e]))
											: 'string' == typeof (f = g[e--] = F.selector(f)) && g.splice(e + 1, 1)
										: g.splice(e--, 1);
						else
							(this._propLookup = {}),
								(this._siblings = Y(b, this, !1)),
								1 === i && this._siblings.length > 1 && $(b, this, null, 1, this._siblings);
						(this.vars.immediateRender || (0 === c && 0 === this._delay && !1 !== this.vars.immediateRender)) &&
							((this._time = -k), this.render(-this._delay));
					},
					!0,
				),
				G = function (b) {
					return b && b.length && b !== a && b[0] && (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType));
				},
				H = function (a, b) {
					var c,
						d = {};
					for (c in a)
						S[c] ||
							(c in b &&
								'transform' !== c &&
								'x' !== c &&
								'y' !== c &&
								'width' !== c &&
								'height' !== c &&
								'className' !== c &&
								'border' !== c) ||
							!(!P[c] || (P[c] && P[c]._autoCSS)) ||
							((d[c] = a[c]), delete a[c]);
					a.css = d;
				};
			(f = F.prototype = new C()),
				(f.constructor = F),
				(f.kill()._gc = !1),
				(f.ratio = 0),
				(f._firstPT = f._targets = f._overwrittenProps = f._startAt = null),
				(f._notifyPluginsOfEnabled = f._lazy = !1),
				(F.version = '1.18.0'),
				(F.defaultEase = f._ease = new u(null, null, 1, 1)),
				(F.defaultOverwrite = 'auto'),
				(F.ticker = g),
				(F.autoSleep = 120),
				(F.lagSmoothing = function (a, b) {
					g.lagSmoothing(a, b);
				}),
				(F.selector =
					a.$ ||
					a.jQuery ||
					function (b) {
						var c = a.$ || a.jQuery;
						return c
							? ((F.selector = c), c(b))
							: 'undefined' == typeof document
							? b
							: document.querySelectorAll
							? document.querySelectorAll(b)
							: document.getElementById('#' === b.charAt(0) ? b.substr(1) : b);
					});
			var I = [],
				J = {},
				K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				L = function (a) {
					for (var b, c = this._firstPT, d = 1e-6; c; )
						(b = c.blob ? (a ? this.join('') : this.start) : c.c * a + c.s),
							c.r ? (b = Math.round(b)) : d > b && b > -d && (b = 0),
							c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
							(c = c._next);
				},
				M = function (a, b, c, d) {
					var e,
						f,
						g,
						h,
						i,
						j,
						k,
						l = [a, b],
						m = 0,
						n = '',
						o = 0;
					for (
						l.start = a,
							c && (c(l), (a = l[0]), (b = l[1])),
							l.length = 0,
							e = a.match(K) || [],
							f = b.match(K) || [],
							d && ((d._next = null), (d.blob = 1), (l._firstPT = d)),
							i = f.length,
							h = 0;
						i > h;
						h++
					)
						(k = f[h]),
							(j = b.substr(m, b.indexOf(k, m) - m)),
							(n += j || !h ? j : ','),
							(m += j.length),
							o ? (o = (o + 1) % 5) : 'rgba(' === j.substr(-5) && (o = 1),
							k === e[h] || h >= e.length
								? (n += k)
								: (n && (l.push(n), (n = '')),
								  (g = parseFloat(e[h])),
								  l.push(g),
								  (l._firstPT = {
										_next: l._firstPT,
										t: l,
										p: l.length - 1,
										s: g,
										c:
											('=' === k.charAt(1)
												? parseInt(k.charAt(0) + '1', 10) * parseFloat(k.substr(2))
												: parseFloat(k) - g) || 0,
										f: 0,
										r: o && 4 > o,
								  })),
							(m += k.length);
					return (n += b.substr(m)), n && l.push(n), (l.setRatio = L), l;
				},
				N = function (a, b, c, d, e, f, g, h) {
					var i,
						j,
						k = 'get' === c ? a[b] : c,
						l = typeof a[b],
						m = 'string' == typeof d && '=' === d.charAt(1),
						n = {
							t: a,
							p: b,
							s: k,
							f: 'function' === l,
							pg: 0,
							n: e || b,
							r: f,
							pr: 0,
							c: m ? parseInt(d.charAt(0) + '1', 10) * parseFloat(d.substr(2)) : parseFloat(d) - k || 0,
						};
					return (
						'number' !== l &&
							('function' === l &&
								'get' === c &&
								((j =
									b.indexOf('set') || 'function' != typeof a['get' + b.substr(3)] ? b : 'get' + b.substr(3)),
								(n.s = k = g ? a[j](g) : a[j]())),
							'string' == typeof k && (g || isNaN(k))
								? ((n.fp = g),
								  (i = M(k, d, h || F.defaultStringFilter, n)),
								  (n = { t: i, p: 'setRatio', s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0 }))
								: m || (n.c = parseFloat(d) - parseFloat(k) || 0)),
						n.c ? ((n._next = this._firstPT) && (n._next._prev = n), (this._firstPT = n), n) : void 0
					);
				},
				O = (F._internals = { isArray: n, isSelector: G, lazyTweens: I, blobDif: M }),
				P = (F._plugins = {}),
				Q = (O.tweenLookup = {}),
				R = 0,
				S = (O.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
				}),
				T = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
				U = (C._rootFramesTimeline = new E()),
				V = (C._rootTimeline = new E()),
				W = 30,
				X = (O.lazyRender = function () {
					var a,
						b = I.length;
					for (J = {}; --b > -1; )
						(a = I[b]) && !1 !== a._lazy && (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1));
					I.length = 0;
				});
			(V._startTime = g.time),
				(U._startTime = g.frame),
				(V._active = U._active = !0),
				setTimeout(X, 1),
				(C._updateRoot = F.render =
					function () {
						var a, b, c;
						if (
							(I.length && X(),
							V.render((g.time - V._startTime) * V._timeScale, !1, !1),
							U.render((g.frame - U._startTime) * U._timeScale, !1, !1),
							I.length && X(),
							g.frame >= W)
						) {
							W = g.frame + (parseInt(F.autoSleep, 10) || 120);
							for (c in Q) {
								for (b = Q[c].tweens, a = b.length; --a > -1; ) b[a]._gc && b.splice(a, 1);
								0 === b.length && delete Q[c];
							}
							if ((!(c = V._first) || c._paused) && F.autoSleep && !U._first && 1 === g._listeners.tick.length) {
								for (; c && c._paused; ) c = c._next;
								c || g.sleep();
							}
						}
					}),
				g.addEventListener('tick', C._updateRoot);
			var Y = function (a, b, c) {
					var d,
						e,
						f = a._gsTweenID;
					if (
						(Q[f || (a._gsTweenID = f = 't' + R++)] || (Q[f] = { target: a, tweens: [] }),
						b && ((d = Q[f].tweens), (d[(e = d.length)] = b), c))
					)
						for (; --e > -1; ) d[e] === b && d.splice(e, 1);
					return Q[f].tweens;
				},
				Z = function (a, b, c, d) {
					var e,
						f,
						g = a.vars.onOverwrite;
					return g && (e = g(a, b, c, d)), (g = F.onOverwrite), g && (f = g(a, b, c, d)), !1 !== e && !1 !== f;
				},
				$ = function (a, b, c, d, e) {
					var f, g, h, i;
					if (1 === d || d >= 4) {
						for (i = e.length, f = 0; i > f; f++)
							if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
							else if (5 === d) break;
						return g;
					}
					var j,
						l = b._startTime + k,
						m = [],
						n = 0,
						o = 0 === b._duration;
					for (f = e.length; --f > -1; )
						(h = e[f]) === b ||
							h._gc ||
							h._paused ||
							(h._timeline !== b._timeline
								? ((j = j || _(b, 0, o)), 0 === _(h, j, o) && (m[n++] = h))
								: l >= h._startTime &&
								  h._startTime + h.totalDuration() / h._timeScale > l &&
								  (((o || !h._initted) && 2e-10 >= l - h._startTime) || (m[n++] = h)));
					for (f = n; --f > -1; )
						if (((h = m[f]), 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || (!h._firstPT && h._initted))) {
							if (2 !== d && !Z(h, b)) continue;
							h._enabled(!1, !1) && (g = !0);
						}
					return g;
				},
				_ = function (a, b, c) {
					for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline; ) {
						if (((f += d._startTime), (e *= d._timeScale), d._paused)) return -100;
						d = d._timeline;
					}
					return (
						(f /= e),
						f > b
							? f - b
							: (c && f === b) || (!a._initted && 2 * k > f - b)
							? k
							: (f += a.totalDuration() / a._timeScale / e) > b + k
							? 0
							: f - b - k
					);
				};
			(f._init = function () {
				var a,
					b,
					c,
					d,
					e,
					f = this.vars,
					g = this._overwrittenProps,
					h = this._duration,
					i = !!f.immediateRender,
					j = f.ease;
				if (f.startAt) {
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (e = {});
					for (d in f.startAt) e[d] = f.startAt[d];
					if (
						((e.overwrite = !1),
						(e.immediateRender = !0),
						(e.lazy = i && !1 !== f.lazy),
						(e.startAt = e.delay = null),
						(this._startAt = F.to(this.target, 0, e)),
						i)
					)
						if (this._time > 0) this._startAt = null;
						else if (0 !== h) return;
				} else if (f.runBackwards && 0 !== h)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
					else {
						0 !== this._time && (i = !1), (c = {});
						for (d in f) (S[d] && 'autoCSS' !== d) || (c[d] = f[d]);
						if (
							((c.overwrite = 0),
							(c.data = 'isFromStart'),
							(c.lazy = i && !1 !== f.lazy),
							(c.immediateRender = i),
							(this._startAt = F.to(this.target, 0, c)),
							i)
						) {
							if (0 === this._time) return;
						} else
							this._startAt._init(),
								this._startAt._enabled(!1),
								this.vars.immediateRender && (this._startAt = null);
					}
				if (
					((this._ease = j =
						j
							? j instanceof u
								? j
								: 'function' == typeof j
								? new u(j, f.easeParams)
								: v[j] || F.defaultEase
							: F.defaultEase),
					f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)),
					(this._easeType = this._ease._type),
					(this._easePower = this._ease._power),
					(this._firstPT = null),
					this._targets)
				)
					for (a = this._targets.length; --a > -1; )
						this._initProps(this._targets[a], (this._propLookup[a] = {}), this._siblings[a], g ? g[a] : null) &&
							(b = !0);
				else b = this._initProps(this.target, this._propLookup, this._siblings, g);
				if (
					(b && F._onPluginEvent('_onInitAllProps', this),
					g && (this._firstPT || ('function' != typeof this.target && this._enabled(!1, !1))),
					f.runBackwards)
				)
					for (c = this._firstPT; c; ) (c.s += c.c), (c.c = -c.c), (c = c._next);
				(this._onUpdate = f.onUpdate), (this._initted = !0);
			}),
				(f._initProps = function (b, c, d, e) {
					var f, g, h, i, j, k;
					if (null == b) return !1;
					J[b._gsTweenID] && X(),
						this.vars.css ||
							(b.style && b !== a && b.nodeType && P.css && !1 !== this.vars.autoCSS && H(this.vars, b));
					for (f in this.vars)
						if (((k = this.vars[f]), S[f]))
							k &&
								(k instanceof Array || (k.push && n(k))) &&
								-1 !== k.join('').indexOf('{self}') &&
								(this.vars[f] = k = this._swapSelfInParams(k, this));
						else if (P[f] && (i = new P[f]())._onInitTween(b, this.vars[f], this)) {
							for (
								this._firstPT = j =
									{
										_next: this._firstPT,
										t: i,
										p: 'setRatio',
										s: 0,
										c: 1,
										f: 1,
										n: f,
										pg: 1,
										pr: i._priority,
									},
									g = i._overwriteProps.length;
								--g > -1;

							)
								c[i._overwriteProps[g]] = this._firstPT;
							(i._priority || i._onInitAllProps) && (h = !0),
								(i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0),
								j._next && (j._next._prev = j);
						} else c[f] = N.call(this, b, f, 'get', k, f, 0, null, this.vars.stringFilter);
					return e && this._kill(e, b)
						? this._initProps(b, c, d, e)
						: this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d)
						? (this._kill(c, b), this._initProps(b, c, d, e))
						: (this._firstPT &&
								((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) &&
								(J[b._gsTweenID] = !0),
						  h);
				}),
				(f.render = function (a, b, c) {
					var d,
						e,
						f,
						g,
						h = this._time,
						i = this._duration,
						j = this._rawPrevTime;
					if (a >= i)
						(this._totalTime = this._time = i),
							(this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
							this._reversed || ((d = !0), (e = 'onComplete'), (c = c || this._timeline.autoRemoveChildren)),
							0 === i &&
								(this._initted || !this.vars.lazy || c) &&
								(this._startTime === this._timeline._duration && (a = 0),
								(0 === a || 0 > j || (j === k && 'isPause' !== this.data)) &&
									j !== a &&
									((c = !0), j > k && (e = 'onReverseComplete')),
								(this._rawPrevTime = g = !b || a || j === a ? a : k));
					else if (1e-7 > a)
						(this._totalTime = this._time = 0),
							(this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
							(0 !== h || (0 === i && j > 0)) && ((e = 'onReverseComplete'), (d = this._reversed)),
							0 > a &&
								((this._active = !1),
								0 === i &&
									(this._initted || !this.vars.lazy || c) &&
									(j >= 0 && (j !== k || 'isPause' !== this.data) && (c = !0),
									(this._rawPrevTime = g = !b || a || j === a ? a : k))),
							this._initted || (c = !0);
					else if (((this._totalTime = this._time = a), this._easeType)) {
						var l = a / i,
							m = this._easeType,
							n = this._easePower;
						(1 === m || (3 === m && l >= 0.5)) && (l = 1 - l),
							3 === m && (l *= 2),
							1 === n
								? (l *= l)
								: 2 === n
								? (l *= l * l)
								: 3 === n
								? (l *= l * l * l)
								: 4 === n && (l *= l * l * l * l),
							(this.ratio = 1 === m ? 1 - l : 2 === m ? l : 0.5 > a / i ? l / 2 : 1 - l / 2);
					} else this.ratio = this._ease.getRatio(a / i);
					if (this._time !== h || c) {
						if (!this._initted) {
							if ((this._init(), !this._initted || this._gc)) return;
							if (
								!c &&
								this._firstPT &&
								((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration))
							)
								return (
									(this._time = this._totalTime = h),
									(this._rawPrevTime = j),
									I.push(this),
									void (this._lazy = [a, b])
								);
							this._time && !d
								? (this.ratio = this._ease.getRatio(this._time / i))
								: d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
						}
						for (
							!1 !== this._lazy && (this._lazy = !1),
								this._active || (!this._paused && this._time !== h && a >= 0 && (this._active = !0)),
								0 === h &&
									(this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = '_dummyGS')),
									this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback('onStart'))),
								f = this._firstPT;
							f;

						)
							f.f ? f.t[f.p](f.c * this.ratio + f.s) : (f.t[f.p] = f.c * this.ratio + f.s), (f = f._next);
						this._onUpdate &&
							(0 > a && this._startAt && -1e-4 !== a && this._startAt.render(a, b, c),
							b || ((this._time !== h || d) && this._callback('onUpdate'))),
							e &&
								(!this._gc || c) &&
								(0 > a && this._startAt && !this._onUpdate && -1e-4 !== a && this._startAt.render(a, b, c),
								d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
								!b && this.vars[e] && this._callback(e),
								0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0));
					}
				}),
				(f._kill = function (a, b, c) {
					if (('all' === a && (a = null), null == a && (null == b || b === this.target)))
						return (this._lazy = !1), this._enabled(!1, !1);
					b = 'string' != typeof b ? b || this._targets || this.target : F.selector(b) || b;
					var d,
						e,
						f,
						g,
						h,
						i,
						j,
						k,
						l,
						m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
					if ((n(b) || G(b)) && 'number' != typeof b[0])
						for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0);
					else {
						if (this._targets) {
							for (d = this._targets.length; --d > -1; )
								if (b === this._targets[d]) {
									(h = this._propLookup[d] || {}),
										(this._overwrittenProps = this._overwrittenProps || []),
										(e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : 'all');
									break;
								}
						} else {
							if (b !== this.target) return !1;
							(h = this._propLookup), (e = this._overwrittenProps = a ? this._overwrittenProps || {} : 'all');
						}
						if (h) {
							if (
								((j = a || h),
								(k = a !== e && 'all' !== e && a !== h && ('object' != typeof a || !a._tempKill)),
								c && (F.onOverwrite || this.vars.onOverwrite))
							) {
								for (f in j) h[f] && (l || (l = []), l.push(f));
								if ((l || !a) && !Z(this, c, b, l)) return !1;
							}
							for (f in j)
								(g = h[f]) &&
									(m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
									g.pg && g.t._kill(j) && (i = !0),
									(g.pg && 0 !== g.t._overwriteProps.length) ||
										(g._prev ? (g._prev._next = g._next) : g === this._firstPT && (this._firstPT = g._next),
										g._next && (g._next._prev = g._prev),
										(g._next = g._prev = null)),
									delete h[f]),
									k && (e[f] = 1);
							!this._firstPT && this._initted && this._enabled(!1, !1);
						}
					}
					return i;
				}),
				(f.invalidate = function () {
					return (
						this._notifyPluginsOfEnabled && F._onPluginEvent('_onDisable', this),
						(this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
						(this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
						(this._propLookup = this._targets ? {} : []),
						C.prototype.invalidate.call(this),
						this.vars.immediateRender && ((this._time = -k), this.render(-this._delay)),
						this
					);
				}),
				(f._enabled = function (a, b) {
					if ((h || g.wake(), a && this._gc)) {
						var c,
							d = this._targets;
						if (d) for (c = d.length; --c > -1; ) this._siblings[c] = Y(d[c], this, !0);
						else this._siblings = Y(this.target, this, !0);
					}
					return (
						C.prototype._enabled.call(this, a, b),
						!(!this._notifyPluginsOfEnabled || !this._firstPT) &&
							F._onPluginEvent(a ? '_onEnable' : '_onDisable', this)
					);
				}),
				(F.to = function (a, b, c) {
					return new F(a, b, c);
				}),
				(F.from = function (a, b, c) {
					return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), new F(a, b, c);
				}),
				(F.fromTo = function (a, b, c, d) {
					return (
						(d.startAt = c),
						(d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender),
						new F(a, b, d)
					);
				}),
				(F.delayedCall = function (a, b, c, d, e) {
					return new F(b, 0, {
						delay: a,
						onComplete: b,
						onCompleteParams: c,
						callbackScope: d,
						onReverseComplete: b,
						onReverseCompleteParams: c,
						immediateRender: !1,
						lazy: !1,
						useFrames: e,
						overwrite: 0,
					});
				}),
				(F.set = function (a, b) {
					return new F(a, 0, b);
				}),
				(F.getTweensOf = function (a, b) {
					if (null == a) return [];
					a = 'string' != typeof a ? a : F.selector(a) || a;
					var c, d, e, f;
					if ((n(a) || G(a)) && 'number' != typeof a[0]) {
						for (c = a.length, d = []; --c > -1; ) d = d.concat(F.getTweensOf(a[c], b));
						for (c = d.length; --c > -1; ) for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1);
					} else
						for (d = Y(a).concat(), c = d.length; --c > -1; )
							(d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
					return d;
				}),
				(F.killTweensOf = F.killDelayedCallsTo =
					function (a, b, c) {
						'object' == typeof b && ((c = b), (b = !1));
						for (var d = F.getTweensOf(a, b), e = d.length; --e > -1; ) d[e]._kill(c, a);
					});
			var aa = r(
				'plugins.TweenPlugin',
				function (a, b) {
					(this._overwriteProps = (a || '').split(',')),
						(this._propName = this._overwriteProps[0]),
						(this._priority = b || 0),
						(this._super = aa.prototype);
				},
				!0,
			);
			if (
				((f = aa.prototype),
				(aa.version = '1.18.0'),
				(aa.API = 2),
				(f._firstPT = null),
				(f._addTween = N),
				(f.setRatio = L),
				(f._kill = function (a) {
					var b,
						c = this._overwriteProps,
						d = this._firstPT;
					if (null != a[this._propName]) this._overwriteProps = [];
					else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1);
					for (; d; )
						null != a[d.n] &&
							(d._next && (d._next._prev = d._prev),
							d._prev
								? ((d._prev._next = d._next), (d._prev = null))
								: this._firstPT === d && (this._firstPT = d._next)),
							(d = d._next);
					return !1;
				}),
				(f._roundProps = function (a, b) {
					for (var c = this._firstPT; c; )
						(a[this._propName] || (null != c.n && a[c.n.split(this._propName + '_').join('')])) && (c.r = b),
							(c = c._next);
				}),
				(F._onPluginEvent = function (a, b) {
					var c,
						d,
						e,
						f,
						g,
						h = b._firstPT;
					if ('_onInitAllProps' === a) {
						for (; h; ) {
							for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
							(h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h),
								(h._next = d) ? (d._prev = h) : (f = h),
								(h = g);
						}
						h = b._firstPT = e;
					}
					for (; h; ) h.pg && 'function' == typeof h.t[a] && h.t[a]() && (c = !0), (h = h._next);
					return c;
				}),
				(aa.activate = function (a) {
					for (var b = a.length; --b > -1; ) a[b].API === aa.API && (P[new a[b]()._propName] = a[b]);
					return !0;
				}),
				(q.plugin = function (a) {
					if (!(a && a.propName && a.init && a.API)) throw 'illegal plugin definition.';
					var b,
						c = a.propName,
						d = a.priority || 0,
						e = a.overwriteProps,
						f = {
							init: '_onInitTween',
							set: 'setRatio',
							kill: '_kill',
							round: '_roundProps',
							initAll: '_onInitAllProps',
						},
						g = r(
							'plugins.' + c.charAt(0).toUpperCase() + c.substr(1) + 'Plugin',
							function () {
								aa.call(this, c, d), (this._overwriteProps = e || []);
							},
							!0 === a.global,
						),
						h = (g.prototype = new aa(c));
					(h.constructor = g), (g.API = a.API);
					for (b in f) 'function' == typeof a[b] && (h[f[b]] = a[b]);
					return (g.version = a.version), aa.activate([g]), g;
				}),
				(d = a._gsQueue))
			) {
				for (e = 0; d.length > e; e++) d[e]();
				for (f in o) o[f].func || a.console.log('GSAP encountered missing dependency: com.greensock.' + f);
			}
			h = !1;
		}
	})(
		'undefined' != typeof module && module.exports && 'undefined' != typeof global ? global : this || window,
		'TweenMax',
	),
	(function (a, b) {
		function c(a) {
			var b = a.length,
				c = ka.type(a);
			return (
				!ka.isWindow(a) &&
				(!(1 !== a.nodeType || !b) ||
					'array' === c ||
					('function' !== c && (0 === b || ('number' == typeof b && b > 0 && b - 1 in a))))
			);
		}
		function d(a) {
			var b = (za[a] = {});
			return (
				ka.each(a.match(ma) || [], function (a, c) {
					b[c] = !0;
				}),
				b
			);
		}
		function e(a, c, d, e) {
			if (ka.acceptData(a)) {
				var f,
					g,
					h = ka.expando,
					i = a.nodeType,
					j = i ? ka.cache : a,
					k = i ? a[h] : a[h] && h;
				if ((k && j[k] && (e || j[k].data)) || d !== b || 'string' != typeof c)
					return (
						k || (k = i ? (a[h] = ba.pop() || ka.guid++) : h),
						j[k] || (j[k] = i ? {} : { toJSON: ka.noop }),
						('object' == typeof c || 'function' == typeof c) &&
							(e ? (j[k] = ka.extend(j[k], c)) : (j[k].data = ka.extend(j[k].data, c))),
						(g = j[k]),
						e || (g.data || (g.data = {}), (g = g.data)),
						d !== b && (g[ka.camelCase(c)] = d),
						'string' == typeof c ? null == (f = g[c]) && (f = g[ka.camelCase(c)]) : (f = g),
						f
					);
			}
		}
		function f(a, b, c) {
			if (ka.acceptData(a)) {
				var d,
					e,
					f = a.nodeType,
					g = f ? ka.cache : a,
					i = f ? a[ka.expando] : ka.expando;
				if (g[i]) {
					if (b && (d = c ? g[i] : g[i].data)) {
						ka.isArray(b)
							? (b = b.concat(ka.map(b, ka.camelCase)))
							: b in d
							? (b = [b])
							: ((b = ka.camelCase(b)), (b = b in d ? [b] : b.split(' '))),
							(e = b.length);
						for (; e--; ) delete d[b[e]];
						if (c ? !h(d) : !ka.isEmptyObject(d)) return;
					}
					(c || (delete g[i].data, h(g[i]))) &&
						(f ? ka.cleanData([a], !0) : ka.support.deleteExpando || g != g.window ? delete g[i] : (g[i] = null));
				}
			}
		}
		function g(a, c, d) {
			if (d === b && 1 === a.nodeType) {
				var e = 'data-' + c.replace(Ba, '-$1').toLowerCase();
				if ('string' == typeof (d = a.getAttribute(e))) {
					try {
						d =
							'true' === d ||
							('false' !== d && ('null' === d ? null : +d + '' === d ? +d : Aa.test(d) ? ka.parseJSON(d) : d));
					} catch (a) {}
					ka.data(a, c, d);
				} else d = b;
			}
			return d;
		}
		function h(a) {
			var b;
			for (b in a) if (('data' !== b || !ka.isEmptyObject(a[b])) && 'toJSON' !== b) return !1;
			return !0;
		}
		function i() {
			return !0;
		}
		function j() {
			return !1;
		}
		function k() {
			try {
				return Y.activeElement;
			} catch (a) {}
		}
		function l(a, b) {
			do {
				a = a[b];
			} while (a && 1 !== a.nodeType);
			return a;
		}
		function m(a, b, c) {
			if (ka.isFunction(b))
				return ka.grep(a, function (a, d) {
					return !!b.call(a, d, a) !== c;
				});
			if (b.nodeType)
				return ka.grep(a, function (a) {
					return (a === b) !== c;
				});
			if ('string' == typeof b) {
				if (Qa.test(b)) return ka.filter(b, a, c);
				b = ka.filter(b, a);
			}
			return ka.grep(a, function (a) {
				return ka.inArray(a, b) >= 0 !== c;
			});
		}
		function n(a) {
			var b = Ua.split('|'),
				c = a.createDocumentFragment();
			if (c.createElement) for (; b.length; ) c.createElement(b.pop());
			return c;
		}
		function o(a, b) {
			return ka.nodeName(a, 'table') && ka.nodeName(1 === b.nodeType ? b : b.firstChild, 'tr')
				? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody'))
				: a;
		}
		function p(a) {
			return (a.type = (null !== ka.find.attr(a, 'type')) + '/' + a.type), a;
		}
		function q(a) {
			var b = eb.exec(a.type);
			return b ? (a.type = b[1]) : a.removeAttribute('type'), a;
		}
		function r(a, b) {
			for (var c, d = 0; null != (c = a[d]); d++) ka._data(c, 'globalEval', !b || ka._data(b[d], 'globalEval'));
		}
		function s(a, b) {
			if (1 === b.nodeType && ka.hasData(a)) {
				var c,
					d,
					e,
					f = ka._data(a),
					g = ka._data(b, f),
					h = f.events;
				if (h) {
					delete g.handle, (g.events = {});
					for (c in h) for (d = 0, e = h[c].length; e > d; d++) ka.event.add(b, c, h[c][d]);
				}
				g.data && (g.data = ka.extend({}, g.data));
			}
		}
		function t(a, b) {
			var c, d, e;
			if (1 === b.nodeType) {
				if (((c = b.nodeName.toLowerCase()), !ka.support.noCloneEvent && b[ka.expando])) {
					e = ka._data(b);
					for (d in e.events) ka.removeEvent(b, d, e.handle);
					b.removeAttribute(ka.expando);
				}
				'script' === c && b.text !== a.text
					? ((p(b).text = a.text), q(b))
					: 'object' === c
					? (b.parentNode && (b.outerHTML = a.outerHTML),
					  ka.support.html5Clone && a.innerHTML && !ka.trim(b.innerHTML) && (b.innerHTML = a.innerHTML))
					: 'input' === c && bb.test(a.type)
					? ((b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value))
					: 'option' === c
					? (b.defaultSelected = b.selected = a.defaultSelected)
					: ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
			}
		}
		function u(a, c) {
			var d,
				e,
				f = 0,
				g =
					typeof a.getElementsByTagName !== W
						? a.getElementsByTagName(c || '*')
						: typeof a.querySelectorAll !== W
						? a.querySelectorAll(c || '*')
						: b;
			if (!g)
				for (g = [], d = a.childNodes || a; null != (e = d[f]); f++)
					!c || ka.nodeName(e, c) ? g.push(e) : ka.merge(g, u(e, c));
			return c === b || (c && ka.nodeName(a, c)) ? ka.merge([a], g) : g;
		}
		function v(a) {
			bb.test(a.type) && (a.defaultChecked = a.checked);
		}
		function w(a, b) {
			if (b in a) return b;
			for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yb.length; e--; )
				if ((b = yb[e] + c) in a) return b;
			return d;
		}
		function x(a, b) {
			return (a = b || a), 'none' === ka.css(a, 'display') || !ka.contains(a.ownerDocument, a);
		}
		function y(a, b) {
			for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
				(d = a[g]),
					d.style &&
						((f[g] = ka._data(d, 'olddisplay')),
						(c = d.style.display),
						b
							? (f[g] || 'none' !== c || (d.style.display = ''),
							  '' === d.style.display && x(d) && (f[g] = ka._data(d, 'olddisplay', C(d.nodeName))))
							: f[g] ||
							  ((e = x(d)),
							  ((c && 'none' !== c) || !e) && ka._data(d, 'olddisplay', e ? c : ka.css(d, 'display'))));
			for (g = 0; h > g; g++)
				(d = a[g]),
					d.style &&
						((b && 'none' !== d.style.display && '' !== d.style.display) ||
							(d.style.display = b ? f[g] || '' : 'none'));
			return a;
		}
		function z(a, b, c) {
			var d = rb.exec(b);
			return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
		}
		function A(a, b, c, d, e) {
			for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2)
				'margin' === c && (g += ka.css(a, c + xb[f], !0, e)),
					d
						? ('content' === c && (g -= ka.css(a, 'padding' + xb[f], !0, e)),
						  'margin' !== c && (g -= ka.css(a, 'border' + xb[f] + 'Width', !0, e)))
						: ((g += ka.css(a, 'padding' + xb[f], !0, e)),
						  'padding' !== c && (g += ka.css(a, 'border' + xb[f] + 'Width', !0, e)));
			return g;
		}
		function B(a, b, c) {
			var d = !0,
				e = 'width' === b ? a.offsetWidth : a.offsetHeight,
				f = kb(a),
				g = ka.support.boxSizing && 'border-box' === ka.css(a, 'boxSizing', !1, f);
			if (0 >= e || null == e) {
				if (((e = lb(a, b, f)), (0 > e || null == e) && (e = a.style[b]), sb.test(e))) return e;
				(d = g && (ka.support.boxSizingReliable || e === a.style[b])), (e = parseFloat(e) || 0);
			}
			return e + A(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
		}
		function C(a) {
			var b = Y,
				c = ub[a];
			return (
				c ||
					((c = D(a, b)),
					('none' !== c && c) ||
						((jb = (
							jb ||
							ka("<iframe frameborder='0' width='0' height='0'/>").css('cssText', 'display:block !important')
						).appendTo(b.documentElement)),
						(b = (jb[0].contentWindow || jb[0].contentDocument).document),
						b.write('<!doctype html><html><body>'),
						b.close(),
						(c = D(a, b)),
						jb.detach()),
					(ub[a] = c)),
				c
			);
		}
		function D(a, b) {
			var c = ka(b.createElement(a)).appendTo(b.body),
				d = ka.css(c[0], 'display');
			return c.remove(), d;
		}
		function E(a, b, c, d) {
			var e;
			if (ka.isArray(b))
				ka.each(b, function (b, e) {
					c || Ab.test(a) ? d(a, e) : E(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
				});
			else if (c || 'object' !== ka.type(b)) d(a, b);
			else for (e in b) E(a + '[' + e + ']', b[e], c, d);
		}
		function F(a) {
			return function (b, c) {
				'string' != typeof b && ((c = b), (b = '*'));
				var d,
					e = 0,
					f = b.toLowerCase().match(ma) || [];
				if (ka.isFunction(c))
					for (; (d = f[e++]); )
						'+' === d[0]
							? ((d = d.slice(1) || '*'), (a[d] = a[d] || []).unshift(c))
							: (a[d] = a[d] || []).push(c);
			};
		}
		function G(a, c, d, e) {
			function f(i) {
				var j;
				return (
					(g[i] = !0),
					ka.each(a[i] || [], function (a, i) {
						var k = i(c, d, e);
						return 'string' != typeof k || h || g[k] ? (h ? !(j = k) : b) : (c.dataTypes.unshift(k), f(k), !1);
					}),
					j
				);
			}
			var g = {},
				h = a === Rb;
			return f(c.dataTypes[0]) || (!g['*'] && f('*'));
		}
		function H(a, c) {
			var d,
				e,
				f = ka.ajaxSettings.flatOptions || {};
			for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
			return d && ka.extend(!0, a, d), a;
		}
		function I(a, c, d) {
			for (var e, f, g, h, i = a.contents, j = a.dataTypes; '*' === j[0]; )
				j.shift(), f === b && (f = a.mimeType || c.getResponseHeader('Content-Type'));
			if (f)
				for (h in i)
					if (i[h] && i[h].test(f)) {
						j.unshift(h);
						break;
					}
			if (j[0] in d) g = j[0];
			else {
				for (h in d) {
					if (!j[0] || a.converters[h + ' ' + j[0]]) {
						g = h;
						break;
					}
					e || (e = h);
				}
				g = g || e;
			}
			return g ? (g !== j[0] && j.unshift(g), d[g]) : b;
		}
		function J(a, b, c, d) {
			var e,
				f,
				g,
				h,
				i,
				j = {},
				k = a.dataTypes.slice();
			if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
			for (f = k.shift(); f; )
				if (
					(a.responseFields[f] && (c[a.responseFields[f]] = b),
					!i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
					(i = f),
					(f = k.shift()))
				)
					if ('*' === f) f = i;
					else if ('*' !== i && i !== f) {
						if (!(g = j[i + ' ' + f] || j['* ' + f]))
							for (e in j)
								if (((h = e.split(' ')), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]]))) {
									!0 === g ? (g = j[e]) : !0 !== j[e] && ((f = h[0]), k.unshift(h[1]));
									break;
								}
						if (!0 !== g)
							if (g && a.throws) b = g(b);
							else
								try {
									b = g(b);
								} catch (a) {
									return { state: 'parsererror', error: g ? a : 'No conversion from ' + i + ' to ' + f };
								}
					}
			return { state: 'success', data: b };
		}
		function K() {
			try {
				return new a.XMLHttpRequest();
			} catch (a) {}
		}
		function L() {
			try {
				return new a.ActiveXObject('Microsoft.XMLHTTP');
			} catch (a) {}
		}
		function M() {
			return (
				setTimeout(function () {
					Zb = b;
				}),
				(Zb = ka.now())
			);
		}
		function N(a, b, c) {
			for (var d, e = (dc[b] || []).concat(dc['*']), f = 0, g = e.length; g > f; f++)
				if ((d = e[f].call(c, b, a))) return d;
		}
		function O(a, b, c) {
			var d,
				e,
				f = 0,
				g = cc.length,
				h = ka.Deferred().always(function () {
					delete i.elem;
				}),
				i = function () {
					if (e) return !1;
					for (
						var b = Zb || M(),
							c = Math.max(0, j.startTime + j.duration - b),
							d = c / j.duration || 0,
							f = 1 - d,
							g = 0,
							i = j.tweens.length;
						i > g;
						g++
					)
						j.tweens[g].run(f);
					return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
				},
				j = h.promise({
					elem: a,
					props: ka.extend({}, b),
					opts: ka.extend(!0, { specialEasing: {} }, c),
					originalProperties: b,
					originalOptions: c,
					startTime: Zb || M(),
					duration: c.duration,
					tweens: [],
					createTween: function (b, c) {
						var d = ka.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
						return j.tweens.push(d), d;
					},
					stop: function (b) {
						var c = 0,
							d = b ? j.tweens.length : 0;
						if (e) return this;
						for (e = !0; d > c; c++) j.tweens[c].run(1);
						return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
					},
				}),
				k = j.props;
			for (P(k, j.opts.specialEasing); g > f; f++) if ((d = cc[f].call(j, a, k, j.opts))) return d;
			return (
				ka.map(k, N, j),
				ka.isFunction(j.opts.start) && j.opts.start.call(a, j),
				ka.fx.timer(ka.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
				j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
			);
		}
		function P(a, b) {
			var c, d, e, f, g;
			for (c in a)
				if (
					((d = ka.camelCase(c)),
					(e = b[d]),
					(f = a[c]),
					ka.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
					c !== d && ((a[d] = f), delete a[c]),
					(g = ka.cssHooks[d]) && 'expand' in g)
				) {
					(f = g.expand(f)), delete a[d];
					for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
				} else b[d] = e;
		}
		function Q(a, b, c) {
			var d,
				e,
				f,
				g,
				h,
				i,
				j = this,
				k = {},
				l = a.style,
				m = a.nodeType && x(a),
				n = ka._data(a, 'fxshow');
			c.queue ||
				((h = ka._queueHooks(a, 'fx')),
				null == h.unqueued &&
					((h.unqueued = 0),
					(i = h.empty.fire),
					(h.empty.fire = function () {
						h.unqueued || i();
					})),
				h.unqueued++,
				j.always(function () {
					j.always(function () {
						h.unqueued--, ka.queue(a, 'fx').length || h.empty.fire();
					});
				})),
				1 === a.nodeType &&
					('height' in b || 'width' in b) &&
					((c.overflow = [l.overflow, l.overflowX, l.overflowY]),
					'inline' === ka.css(a, 'display') &&
						'none' === ka.css(a, 'float') &&
						(ka.support.inlineBlockNeedsLayout && 'inline' !== C(a.nodeName)
							? (l.zoom = 1)
							: (l.display = 'inline-block'))),
				c.overflow &&
					((l.overflow = 'hidden'),
					ka.support.shrinkWrapBlocks ||
						j.always(function () {
							(l.overflow = c.overflow[0]), (l.overflowX = c.overflow[1]), (l.overflowY = c.overflow[2]);
						}));
			for (d in b)
				if (((e = b[d]), _b.exec(e))) {
					if ((delete b[d], (f = f || 'toggle' === e), e === (m ? 'hide' : 'show'))) continue;
					k[d] = (n && n[d]) || ka.style(a, d);
				}
			if (!ka.isEmptyObject(k)) {
				n ? 'hidden' in n && (m = n.hidden) : (n = ka._data(a, 'fxshow', {})),
					f && (n.hidden = !m),
					m
						? ka(a).show()
						: j.done(function () {
								ka(a).hide();
						  }),
					j.done(function () {
						var b;
						ka._removeData(a, 'fxshow');
						for (b in k) ka.style(a, b, k[b]);
					});
				for (d in k)
					(g = N(m ? n[d] : 0, d, j)),
						d in n ||
							((n[d] = g.start), m && ((g.end = g.start), (g.start = 'width' === d || 'height' === d ? 1 : 0)));
			}
		}
		function R(a, b, c, d, e) {
			return new R.prototype.init(a, b, c, d, e);
		}
		function S(a, b) {
			var c,
				d = { height: a },
				e = 0;
			for (b = b ? 1 : 0; 4 > e; e += 2 - b) (c = xb[e]), (d['margin' + c] = d['padding' + c] = a);
			return b && (d.opacity = d.width = a), d;
		}
		function T(a) {
			return ka.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow);
		}
		var U,
			V,
			W = typeof b,
			X = a.location,
			Y = a.document,
			Z = Y.documentElement,
			$ = a.jQuery,
			_ = a.$,
			aa = {},
			ba = [],
			ca = '1.10.2',
			da = ba.concat,
			ea = ba.push,
			fa = ba.slice,
			ga = ba.indexOf,
			ha = aa.toString,
			ia = aa.hasOwnProperty,
			ja = ca.trim,
			ka = function (a, b) {
				return new ka.fn.init(a, b, V);
			},
			la = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			ma = /\S+/g,
			na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			oa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			pa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			qa = /^[\],:{}\s]*$/,
			ra = /(?:^|:|,)(?:\s*\[)+/g,
			sa = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
			ta = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
			ua = /^-ms-/,
			va = /-([\da-z])/gi,
			wa = function (a, b) {
				return b.toUpperCase();
			},
			xa = function (a) {
				(Y.addEventListener || 'load' === a.type || 'complete' === Y.readyState) && (ya(), ka.ready());
			},
			ya = function () {
				Y.addEventListener
					? (Y.removeEventListener('DOMContentLoaded', xa, !1), a.removeEventListener('load', xa, !1))
					: (Y.detachEvent('onreadystatechange', xa), a.detachEvent('onload', xa));
			};
		(ka.fn = ka.prototype =
			{
				jquery: ca,
				constructor: ka,
				init: function (a, c, d) {
					var e, f;
					if (!a) return this;
					if ('string' == typeof a) {
						if (
							!(e =
								'<' === a.charAt(0) && '>' === a.charAt(a.length - 1) && a.length >= 3
									? [null, a, null]
									: oa.exec(a)) ||
							(!e[1] && c)
						)
							return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
						if (e[1]) {
							if (
								((c = c instanceof ka ? c[0] : c),
								ka.merge(this, ka.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)),
								pa.test(e[1]) && ka.isPlainObject(c))
							)
								for (e in c) ka.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
							return this;
						}
						if ((f = Y.getElementById(e[2])) && f.parentNode) {
							if (f.id !== e[2]) return d.find(a);
							(this.length = 1), (this[0] = f);
						}
						return (this.context = Y), (this.selector = a), this;
					}
					return a.nodeType
						? ((this.context = this[0] = a), (this.length = 1), this)
						: ka.isFunction(a)
						? d.ready(a)
						: (a.selector !== b && ((this.selector = a.selector), (this.context = a.context)),
						  ka.makeArray(a, this));
				},
				selector: '',
				length: 0,
				toArray: function () {
					return fa.call(this);
				},
				get: function (a) {
					return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
				},
				pushStack: function (a) {
					var b = ka.merge(this.constructor(), a);
					return (b.prevObject = this), (b.context = this.context), b;
				},
				each: function (a, b) {
					return ka.each(this, a, b);
				},
				ready: function (a) {
					return ka.ready.promise().done(a), this;
				},
				slice: function () {
					return this.pushStack(fa.apply(this, arguments));
				},
				first: function () {
					return this.eq(0);
				},
				last: function () {
					return this.eq(-1);
				},
				eq: function (a) {
					var b = this.length,
						c = +a + (0 > a ? b : 0);
					return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
				},
				map: function (a) {
					return this.pushStack(
						ka.map(this, function (b, c) {
							return a.call(b, c, b);
						}),
					);
				},
				end: function () {
					return this.prevObject || this.constructor(null);
				},
				push: ea,
				sort: [].sort,
				splice: [].splice,
			}),
			(ka.fn.init.prototype = ka.fn),
			(ka.extend = ka.fn.extend =
				function () {
					var a,
						c,
						d,
						e,
						f,
						g,
						h = arguments[0] || {},
						i = 1,
						j = arguments.length,
						k = !1;
					for (
						'boolean' == typeof h && ((k = h), (h = arguments[1] || {}), (i = 2)),
							'object' == typeof h || ka.isFunction(h) || (h = {}),
							j === i && ((h = this), --i);
						j > i;
						i++
					)
						if (null != (f = arguments[i]))
							for (e in f)
								(a = h[e]),
									(d = f[e]),
									h !== d &&
										(k && d && (ka.isPlainObject(d) || (c = ka.isArray(d)))
											? (c
													? ((c = !1), (g = a && ka.isArray(a) ? a : []))
													: (g = a && ka.isPlainObject(a) ? a : {}),
											  (h[e] = ka.extend(k, g, d)))
											: d !== b && (h[e] = d));
					return h;
				}),
			ka.extend({
				expando: 'jQuery' + (ca + Math.random()).replace(/\D/g, ''),
				noConflict: function (b) {
					return a.$ === ka && (a.$ = _), b && a.jQuery === ka && (a.jQuery = $), ka;
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function (a) {
					a ? ka.readyWait++ : ka.ready(!0);
				},
				ready: function (a) {
					if (!0 === a ? !--ka.readyWait : !ka.isReady) {
						if (!Y.body) return setTimeout(ka.ready);
						(ka.isReady = !0),
							(!0 !== a && --ka.readyWait > 0) ||
								(U.resolveWith(Y, [ka]), ka.fn.trigger && ka(Y).trigger('ready').off('ready'));
					}
				},
				isFunction: function (a) {
					return 'function' === ka.type(a);
				},
				isArray:
					Array.isArray ||
					function (a) {
						return 'array' === ka.type(a);
					},
				isWindow: function (a) {
					return null != a && a == a.window;
				},
				isNumeric: function (a) {
					return !isNaN(parseFloat(a)) && isFinite(a);
				},
				type: function (a) {
					return null == a
						? a + ''
						: 'object' == typeof a || 'function' == typeof a
						? aa[ha.call(a)] || 'object'
						: typeof a;
				},
				isPlainObject: function (a) {
					var c;
					if (!a || 'object' !== ka.type(a) || a.nodeType || ka.isWindow(a)) return !1;
					try {
						if (a.constructor && !ia.call(a, 'constructor') && !ia.call(a.constructor.prototype, 'isPrototypeOf'))
							return !1;
					} catch (a) {
						return !1;
					}
					if (ka.support.ownLast) for (c in a) return ia.call(a, c);
					for (c in a);
					return c === b || ia.call(a, c);
				},
				isEmptyObject: function (a) {
					var b;
					for (b in a) return !1;
					return !0;
				},
				error: function (a) {
					throw Error(a);
				},
				parseHTML: function (a, b, c) {
					if (!a || 'string' != typeof a) return null;
					'boolean' == typeof b && ((c = b), (b = !1)), (b = b || Y);
					var d = pa.exec(a),
						e = !c && [];
					return d
						? [b.createElement(d[1])]
						: ((d = ka.buildFragment([a], b, e)), e && ka(e).remove(), ka.merge([], d.childNodes));
				},
				parseJSON: function (c) {
					return a.JSON && a.JSON.parse
						? a.JSON.parse(c)
						: null === c
						? c
						: 'string' == typeof c &&
						  (c = ka.trim(c)) &&
						  qa.test(c.replace(sa, '@').replace(ta, ']').replace(ra, ''))
						? Function('return ' + c)()
						: (ka.error('Invalid JSON: ' + c), b);
				},
				parseXML: function (c) {
					var d, e;
					if (!c || 'string' != typeof c) return null;
					try {
						a.DOMParser
							? ((e = new DOMParser()), (d = e.parseFromString(c, 'text/xml')))
							: ((d = new ActiveXObject('Microsoft.XMLDOM')), (d.async = 'false'), d.loadXML(c));
					} catch (a) {
						d = b;
					}
					return (
						(d && d.documentElement && !d.getElementsByTagName('parsererror').length) ||
							ka.error('Invalid XML: ' + c),
						d
					);
				},
				noop: function () {},
				globalEval: function (b) {
					b &&
						ka.trim(b) &&
						(
							a.execScript ||
							function (b) {
								a.eval.call(a, b);
							}
						)(b);
				},
				camelCase: function (a) {
					return a.replace(ua, 'ms-').replace(va, wa);
				},
				nodeName: function (a, b) {
					return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
				},
				each: function (a, b, d) {
					var e = 0,
						f = a.length,
						g = c(a);
					if (d) {
						if (g) for (; f > e && !1 !== b.apply(a[e], d); e++);
						else for (e in a) if (!1 === b.apply(a[e], d)) break;
					} else if (g) for (; f > e && !1 !== b.call(a[e], e, a[e]); e++);
					else for (e in a) if (!1 === b.call(a[e], e, a[e])) break;
					return a;
				},
				trim:
					ja && !ja.call('\ufeffÂ ')
						? function (a) {
								return null == a ? '' : ja.call(a);
						  }
						: function (a) {
								return null == a ? '' : (a + '').replace(na, '');
						  },
				makeArray: function (a, b) {
					var d = b || [];
					return null != a && (c(Object(a)) ? ka.merge(d, 'string' == typeof a ? [a] : a) : ea.call(d, a)), d;
				},
				inArray: function (a, b, c) {
					var d;
					if (b) {
						if (ga) return ga.call(b, a, c);
						for (d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0; d > c; c++)
							if (c in b && b[c] === a) return c;
					}
					return -1;
				},
				merge: function (a, c) {
					var d = c.length,
						e = a.length,
						f = 0;
					if ('number' == typeof d) for (; d > f; f++) a[e++] = c[f];
					else for (; c[f] !== b; ) a[e++] = c[f++];
					return (a.length = e), a;
				},
				grep: function (a, b, c) {
					var d,
						e = [],
						f = 0,
						g = a.length;
					for (c = !!c; g > f; f++) (d = !!b(a[f], f)), c !== d && e.push(a[f]);
					return e;
				},
				map: function (a, b, d) {
					var e,
						f = 0,
						g = a.length,
						h = c(a),
						i = [];
					if (h) for (; g > f; f++) null != (e = b(a[f], f, d)) && (i[i.length] = e);
					else for (f in a) null != (e = b(a[f], f, d)) && (i[i.length] = e);
					return da.apply([], i);
				},
				guid: 1,
				proxy: function (a, c) {
					var d, e, f;
					return (
						'string' == typeof c && ((f = a[c]), (c = a), (a = f)),
						ka.isFunction(a)
							? ((d = fa.call(arguments, 2)),
							  (e = function () {
									return a.apply(c || this, d.concat(fa.call(arguments)));
							  }),
							  (e.guid = a.guid = a.guid || ka.guid++),
							  e)
							: b
					);
				},
				access: function (a, c, d, e, f, g, h) {
					var i = 0,
						j = a.length,
						k = null == d;
					if ('object' === ka.type(d)) {
						f = !0;
						for (i in d) ka.access(a, c, i, d[i], !0, g, h);
					} else if (
						e !== b &&
						((f = !0),
						ka.isFunction(e) || (h = !0),
						k &&
							(h
								? (c.call(a, e), (c = null))
								: ((k = c),
								  (c = function (a, b, c) {
										return k.call(ka(a), c);
								  }))),
						c)
					)
						for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
					return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
				},
				now: function () {
					return new Date().getTime();
				},
				swap: function (a, b, c, d) {
					var e,
						f,
						g = {};
					for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
					e = c.apply(a, d || []);
					for (f in b) a.style[f] = g[f];
					return e;
				},
			}),
			(ka.ready.promise = function (b) {
				if (!U)
					if (((U = ka.Deferred()), 'complete' === Y.readyState)) setTimeout(ka.ready);
					else if (Y.addEventListener)
						Y.addEventListener('DOMContentLoaded', xa, !1), a.addEventListener('load', xa, !1);
					else {
						Y.attachEvent('onreadystatechange', xa), a.attachEvent('onload', xa);
						var c = !1;
						try {
							c = null == a.frameElement && Y.documentElement;
						} catch (a) {}
						c &&
							c.doScroll &&
							(function a() {
								if (!ka.isReady) {
									try {
										c.doScroll('left');
									} catch (b) {
										return setTimeout(a, 50);
									}
									ya(), ka.ready();
								}
							})();
					}
				return U.promise(b);
			}),
			ka.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
				aa['[object ' + b + ']'] = b.toLowerCase();
			}),
			(V = ka(Y)),
			(function (a, b) {
				function c(a, b, c, d) {
					var e, f, g, h, i, j, k, l, o, p;
					if (
						((b ? b.ownerDocument || b : O) !== G && F(b),
						(b = b || G),
						(c = c || []),
						!a || 'string' != typeof a)
					)
						return c;
					if (1 !== (h = b.nodeType) && 9 !== h) return [];
					if (I && !d) {
						if ((e = ta.exec(a)))
							if ((g = e[1])) {
								if (9 === h) {
									if (!(f = b.getElementById(g)) || !f.parentNode) return c;
									if (f.id === g) return c.push(f), c;
								} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
									return c.push(f), c;
							} else {
								if (e[2]) return aa.apply(c, b.getElementsByTagName(a)), c;
								if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)
									return aa.apply(c, b.getElementsByClassName(g)), c;
							}
						if (x.qsa && (!J || !J.test(a))) {
							if (((l = k = N), (o = b), (p = 9 === h && a), 1 === h && 'object' !== b.nodeName.toLowerCase())) {
								for (
									j = m(a),
										(k = b.getAttribute('id')) ? (l = k.replace(wa, '\\$&')) : b.setAttribute('id', l),
										l = "[id='" + l + "'] ",
										i = j.length;
									i--;

								)
									j[i] = l + n(j[i]);
								(o = (na.test(a) && b.parentNode) || b), (p = j.join(','));
							}
							if (p)
								try {
									return aa.apply(c, o.querySelectorAll(p)), c;
								} catch (a) {
								} finally {
									k || b.removeAttribute('id');
								}
						}
					}
					return v(a.replace(ja, '$1'), b, c, d);
				}
				function d() {
					function a(c, d) {
						return b.push((c += ' ')) > z.cacheLength && delete a[b.shift()], (a[c] = d);
					}
					var b = [];
					return a;
				}
				function e(a) {
					return (a[N] = !0), a;
				}
				function f(a) {
					var b = G.createElement('div');
					try {
						return !!a(b);
					} catch (a) {
						return !1;
					} finally {
						b.parentNode && b.parentNode.removeChild(b), (b = null);
					}
				}
				function g(a, b) {
					for (var c = a.split('|'), d = a.length; d--; ) z.attrHandle[c[d]] = b;
				}
				function h(a, b) {
					var c = b && a,
						d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
					if (d) return d;
					if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
					return a ? 1 : -1;
				}
				function i(a) {
					return function (b) {
						return 'input' === b.nodeName.toLowerCase() && b.type === a;
					};
				}
				function j(a) {
					return function (b) {
						var c = b.nodeName.toLowerCase();
						return ('input' === c || 'button' === c) && b.type === a;
					};
				}
				function k(a) {
					return e(function (b) {
						return (
							(b = +b),
							e(function (c, d) {
								for (var e, f = a([], c.length, b), g = f.length; g--; )
									c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
							})
						);
					});
				}
				function l() {}
				function m(a, b) {
					var d,
						e,
						f,
						g,
						h,
						i,
						j,
						k = S[a + ' '];
					if (k) return b ? 0 : k.slice(0);
					for (h = a, i = [], j = z.preFilter; h; ) {
						(!d || (e = la.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
							(d = !1),
							(e = ma.exec(h)) &&
								((d = e.shift()), f.push({ value: d, type: e[0].replace(ja, ' ') }), (h = h.slice(d.length)));
						for (g in z.filter)
							!(e = ra[g].exec(h)) ||
								(j[g] && !(e = j[g](e))) ||
								((d = e.shift()), f.push({ value: d, type: g, matches: e }), (h = h.slice(d.length)));
						if (!d) break;
					}
					return b ? h.length : h ? c.error(a) : S(a, i).slice(0);
				}
				function n(a) {
					for (var b = 0, c = a.length, d = ''; c > b; b++) d += a[b].value;
					return d;
				}
				function o(a, b, c) {
					var d = b.dir,
						e = c && 'parentNode' === d,
						f = Q++;
					return b.first
						? function (b, c, f) {
								for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
						  }
						: function (b, c, g) {
								var h,
									i,
									j,
									k = P + ' ' + f;
								if (g) {
									for (; (b = b[d]); ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
								} else
									for (; (b = b[d]); )
										if (1 === b.nodeType || e)
											if (((j = b[N] || (b[N] = {})), (i = j[d]) && i[0] === k)) {
												if (!0 === (h = i[1]) || h === y) return !0 === h;
											} else if (((i = j[d] = [k]), (i[1] = a(b, c, g) || y), !0 === i[1])) return !0;
						  };
				}
				function p(a) {
					return a.length > 1
						? function (b, c, d) {
								for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
								return !0;
						  }
						: a[0];
				}
				function q(a, b, c, d, e) {
					for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
						(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
					return g;
				}
				function r(a, b, c, d, f, g) {
					return (
						d && !d[N] && (d = r(d)),
						f && !f[N] && (f = r(f, g)),
						e(function (e, g, h, i) {
							var j,
								k,
								l,
								m = [],
								n = [],
								o = g.length,
								p = e || u(b || '*', h.nodeType ? [h] : h, []),
								r = !a || (!e && b) ? p : q(p, m, a, h, i),
								s = c ? (f || (e ? a : o || d) ? [] : g) : r;
							if ((c && c(r, s, h, i), d))
								for (j = q(s, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
							if (e) {
								if (f || a) {
									if (f) {
										for (j = [], k = s.length; k--; ) (l = s[k]) && j.push((r[k] = l));
										f(null, (s = []), j, i);
									}
									for (k = s.length; k--; )
										(l = s[k]) && (j = f ? ca.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l));
								}
							} else (s = q(s === g ? s.splice(o, s.length) : s)), f ? f(null, g, s, i) : aa.apply(g, s);
						})
					);
				}
				function s(a) {
					for (
						var b,
							c,
							d,
							e = a.length,
							f = z.relative[a[0].type],
							g = f || z.relative[' '],
							h = f ? 1 : 0,
							i = o(
								function (a) {
									return a === b;
								},
								g,
								!0,
							),
							j = o(
								function (a) {
									return ca.call(b, a) > -1;
								},
								g,
								!0,
							),
							k = [
								function (a, c, d) {
									return (!f && (d || c !== D)) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
								},
							];
						e > h;
						h++
					)
						if ((c = z.relative[a[h].type])) k = [o(p(k), c)];
						else {
							if (((c = z.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
								for (d = ++h; e > d && !z.relative[a[d].type]; d++);
								return r(
									h > 1 && p(k),
									h > 1 &&
										n(a.slice(0, h - 1).concat({ value: ' ' === a[h - 2].type ? '*' : '' })).replace(
											ja,
											'$1',
										),
									c,
									d > h && s(a.slice(h, d)),
									e > d && s((a = a.slice(d))),
									e > d && n(a),
								);
							}
							k.push(c);
						}
					return p(k);
				}
				function t(a, b) {
					var d = 0,
						f = b.length > 0,
						g = a.length > 0,
						h = function (e, h, i, j, k) {
							var l,
								m,
								n,
								o = [],
								p = 0,
								r = '0',
								s = e && [],
								t = null != k,
								u = D,
								v = e || (g && z.find.TAG('*', (k && h.parentNode) || h)),
								w = (P += null == u ? 1 : Math.random() || 0.1);
							for (t && ((D = h !== G && h), (y = d)); null != (l = v[r]); r++) {
								if (g && l) {
									for (m = 0; (n = a[m++]); )
										if (n(l, h, i)) {
											j.push(l);
											break;
										}
									t && ((P = w), (y = ++d));
								}
								f && ((l = !n && l) && p--, e && s.push(l));
							}
							if (((p += r), f && r !== p)) {
								for (m = 0; (n = b[m++]); ) n(s, o, h, i);
								if (e) {
									if (p > 0) for (; r--; ) s[r] || o[r] || (o[r] = $.call(j));
									o = q(o);
								}
								aa.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j);
							}
							return t && ((P = w), (D = u)), s;
						};
					return f ? e(h) : h;
				}
				function u(a, b, d) {
					for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
					return d;
				}
				function v(a, b, c, d) {
					var e,
						f,
						g,
						h,
						i,
						j = m(a);
					if (!d && 1 === j.length) {
						if (
							((f = j[0] = j[0].slice(0)),
							f.length > 2 &&
								'ID' === (g = f[0]).type &&
								x.getById &&
								9 === b.nodeType &&
								I &&
								z.relative[f[1].type])
						) {
							if (!(b = (z.find.ID(g.matches[0].replace(xa, ya), b) || [])[0])) return c;
							a = a.slice(f.shift().value.length);
						}
						for (e = ra.needsContext.test(a) ? 0 : f.length; e-- && ((g = f[e]), !z.relative[(h = g.type)]); )
							if (
								(i = z.find[h]) &&
								(d = i(g.matches[0].replace(xa, ya), (na.test(f[0].type) && b.parentNode) || b))
							) {
								if ((f.splice(e, 1), !(a = d.length && n(f)))) return aa.apply(c, d), c;
								break;
							}
					}
					return C(a, j)(d, b, !I, c, na.test(a)), c;
				}
				var w,
					x,
					y,
					z,
					A,
					B,
					C,
					D,
					E,
					F,
					G,
					H,
					I,
					J,
					K,
					L,
					M,
					N = 'sizzle' + -new Date(),
					O = a.document,
					P = 0,
					Q = 0,
					R = d(),
					S = d(),
					T = d(),
					U = !1,
					V = function (a, b) {
						return a === b ? ((U = !0), 0) : 0;
					},
					W = typeof b,
					X = 1 << 31,
					Y = {}.hasOwnProperty,
					Z = [],
					$ = Z.pop,
					_ = Z.push,
					aa = Z.push,
					ba = Z.slice,
					ca =
						Z.indexOf ||
						function (a) {
							for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
							return -1;
						},
					da =
						'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
					ea = '[\\x20\\t\\r\\n\\f]',
					fa = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
					ga = fa.replace('w', 'w#'),
					ha =
						'\\[' +
						ea +
						'*(' +
						fa +
						')' +
						ea +
						'*(?:([*^$|!~]?=)' +
						ea +
						'*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' +
						ga +
						')|)|)' +
						ea +
						'*\\]',
					ia =
						':(' +
						fa +
						')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' +
						ha.replace(3, 8) +
						')*)|.*)\\)|)',
					ja = RegExp('^' + ea + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ea + '+$', 'g'),
					la = RegExp('^' + ea + '*,' + ea + '*'),
					ma = RegExp('^' + ea + '*([>+~]|' + ea + ')' + ea + '*'),
					na = RegExp(ea + '*[+~]'),
					oa = RegExp('=' + ea + '*([^\\]\'"]*)' + ea + '*\\]', 'g'),
					pa = RegExp(ia),
					qa = RegExp('^' + ga + '$'),
					ra = {
						ID: RegExp('^#(' + fa + ')'),
						CLASS: RegExp('^\\.(' + fa + ')'),
						TAG: RegExp('^(' + fa.replace('w', 'w*') + ')'),
						ATTR: RegExp('^' + ha),
						PSEUDO: RegExp('^' + ia),
						CHILD: RegExp(
							'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
								ea +
								'*(even|odd|(([+-]|)(\\d*)n|)' +
								ea +
								'*(?:([+-]|)' +
								ea +
								'*(\\d+)|))' +
								ea +
								'*\\)|)',
							'i',
						),
						bool: RegExp('^(?:' + da + ')$', 'i'),
						needsContext: RegExp(
							'^' +
								ea +
								'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
								ea +
								'*((?:-\\d)?\\d*)' +
								ea +
								'*\\)|)(?=[^-]|$)',
							'i',
						),
					},
					sa = /^[^{]+\{\s*\[native \w/,
					ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					ua = /^(?:input|select|textarea|button)$/i,
					va = /^h\d$/i,
					wa = /'|\\/g,
					xa = RegExp('\\\\([\\da-f]{1,6}' + ea + '?|(' + ea + ')|.)', 'ig'),
					ya = function (a, b, c) {
						var d = '0x' + b - 65536;
						return d !== d || c
							? b
							: 0 > d
							? String.fromCharCode(d + 65536)
							: String.fromCharCode(55296 | (d >> 10), 56320 | (1023 & d));
					};
				try {
					aa.apply((Z = ba.call(O.childNodes)), O.childNodes), Z[O.childNodes.length].nodeType;
				} catch (a) {
					aa = {
						apply: Z.length
							? function (a, b) {
									_.apply(a, ba.call(b));
							  }
							: function (a, b) {
									for (var c = a.length, d = 0; (a[c++] = b[d++]); );
									a.length = c - 1;
							  },
					};
				}
				(B = c.isXML =
					function (a) {
						var b = a && (a.ownerDocument || a).documentElement;
						return !!b && 'HTML' !== b.nodeName;
					}),
					(x = c.support = {}),
					(F = c.setDocument =
						function (a) {
							var c = a ? a.ownerDocument || a : O,
								d = c.defaultView;
							return c !== G && 9 === c.nodeType && c.documentElement
								? ((G = c),
								  (H = c.documentElement),
								  (I = !B(c)),
								  d &&
										d.attachEvent &&
										d !== d.top &&
										d.attachEvent('onbeforeunload', function () {
											F();
										}),
								  (x.attributes = f(function (a) {
										return (a.className = 'i'), !a.getAttribute('className');
								  })),
								  (x.getElementsByTagName = f(function (a) {
										return a.appendChild(c.createComment('')), !a.getElementsByTagName('*').length;
								  })),
								  (x.getElementsByClassName = f(function (a) {
										return (
											(a.innerHTML = "<div class='a'></div><div class='a i'></div>"),
											(a.firstChild.className = 'i'),
											2 === a.getElementsByClassName('i').length
										);
								  })),
								  (x.getById = f(function (a) {
										return (H.appendChild(a).id = N), !c.getElementsByName || !c.getElementsByName(N).length;
								  })),
								  x.getById
										? ((z.find.ID = function (a, b) {
												if (typeof b.getElementById !== W && I) {
													var c = b.getElementById(a);
													return c && c.parentNode ? [c] : [];
												}
										  }),
										  (z.filter.ID = function (a) {
												var b = a.replace(xa, ya);
												return function (a) {
													return a.getAttribute('id') === b;
												};
										  }))
										: (delete z.find.ID,
										  (z.filter.ID = function (a) {
												var b = a.replace(xa, ya);
												return function (a) {
													var c = typeof a.getAttributeNode !== W && a.getAttributeNode('id');
													return c && c.value === b;
												};
										  })),
								  (z.find.TAG = x.getElementsByTagName
										? function (a, c) {
												return typeof c.getElementsByTagName !== W ? c.getElementsByTagName(a) : b;
										  }
										: function (a, b) {
												var c,
													d = [],
													e = 0,
													f = b.getElementsByTagName(a);
												if ('*' === a) {
													for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
													return d;
												}
												return f;
										  }),
								  (z.find.CLASS =
										x.getElementsByClassName &&
										function (a, c) {
											return typeof c.getElementsByClassName !== W && I ? c.getElementsByClassName(a) : b;
										}),
								  (K = []),
								  (J = []),
								  (x.qsa = sa.test(c.querySelectorAll)) &&
										(f(function (a) {
											(a.innerHTML = "<select><option selected=''></option></select>"),
												a.querySelectorAll('[selected]').length ||
													J.push('\\[' + ea + '*(?:value|' + da + ')'),
												a.querySelectorAll(':checked').length || J.push(':checked');
										}),
										f(function (a) {
											var b = c.createElement('input');
											b.setAttribute('type', 'hidden'),
												a.appendChild(b).setAttribute('t', ''),
												a.querySelectorAll("[t^='']").length && J.push('[*^$]=' + ea + '*(?:\'\'|"")'),
												a.querySelectorAll(':enabled').length || J.push(':enabled', ':disabled'),
												a.querySelectorAll('*,:x'),
												J.push(',.*:');
										})),
								  (x.matchesSelector = sa.test(
										(L =
											H.webkitMatchesSelector ||
											H.mozMatchesSelector ||
											H.oMatchesSelector ||
											H.msMatchesSelector),
								  )) &&
										f(function (a) {
											(x.disconnectedMatch = L.call(a, 'div')), L.call(a, "[s!='']:x"), K.push('!=', ia);
										}),
								  (J = J.length && RegExp(J.join('|'))),
								  (K = K.length && RegExp(K.join('|'))),
								  (M =
										sa.test(H.contains) || H.compareDocumentPosition
											? function (a, b) {
													var c = 9 === a.nodeType ? a.documentElement : a,
														d = b && b.parentNode;
													return (
														a === d ||
														!(
															!d ||
															1 !== d.nodeType ||
															!(c.contains
																? c.contains(d)
																: a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))
														)
													);
											  }
											: function (a, b) {
													if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
													return !1;
											  }),
								  (V = H.compareDocumentPosition
										? function (a, b) {
												if (a === b) return (U = !0), 0;
												var d =
													b.compareDocumentPosition &&
													a.compareDocumentPosition &&
													a.compareDocumentPosition(b);
												return d
													? 1 & d || (!x.sortDetached && b.compareDocumentPosition(a) === d)
														? a === c || M(O, a)
															? -1
															: b === c || M(O, b)
															? 1
															: E
															? ca.call(E, a) - ca.call(E, b)
															: 0
														: 4 & d
														? -1
														: 1
													: a.compareDocumentPosition
													? -1
													: 1;
										  }
										: function (a, b) {
												var d,
													e = 0,
													f = a.parentNode,
													g = b.parentNode,
													i = [a],
													j = [b];
												if (a === b) return (U = !0), 0;
												if (!f || !g)
													return a === c
														? -1
														: b === c
														? 1
														: f
														? -1
														: g
														? 1
														: E
														? ca.call(E, a) - ca.call(E, b)
														: 0;
												if (f === g) return h(a, b);
												for (d = a; (d = d.parentNode); ) i.unshift(d);
												for (d = b; (d = d.parentNode); ) j.unshift(d);
												for (; i[e] === j[e]; ) e++;
												return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
										  }),
								  c)
								: G;
						}),
					(c.matches = function (a, b) {
						return c(a, null, null, b);
					}),
					(c.matchesSelector = function (a, b) {
						if (
							((a.ownerDocument || a) !== G && F(a),
							(b = b.replace(oa, "='$1']")),
							!(!x.matchesSelector || !I || (K && K.test(b)) || (J && J.test(b))))
						)
							try {
								var d = L.call(a, b);
								if (d || x.disconnectedMatch || (a.document && 11 !== a.document.nodeType)) return d;
							} catch (a) {}
						return c(b, G, null, [a]).length > 0;
					}),
					(c.contains = function (a, b) {
						return (a.ownerDocument || a) !== G && F(a), M(a, b);
					}),
					(c.attr = function (a, c) {
						(a.ownerDocument || a) !== G && F(a);
						var d = z.attrHandle[c.toLowerCase()],
							e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
						return e === b
							? x.attributes || !I
								? a.getAttribute(c)
								: (e = a.getAttributeNode(c)) && e.specified
								? e.value
								: null
							: e;
					}),
					(c.error = function (a) {
						throw Error('Syntax error, unrecognized expression: ' + a);
					}),
					(c.uniqueSort = function (a) {
						var b,
							c = [],
							d = 0,
							e = 0;
						if (((U = !x.detectDuplicates), (E = !x.sortStable && a.slice(0)), a.sort(V), U)) {
							for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
							for (; d--; ) a.splice(c[d], 1);
						}
						return a;
					}),
					(A = c.getText =
						function (a) {
							var b,
								c = '',
								d = 0,
								e = a.nodeType;
							if (e) {
								if (1 === e || 9 === e || 11 === e) {
									if ('string' == typeof a.textContent) return a.textContent;
									for (a = a.firstChild; a; a = a.nextSibling) c += A(a);
								} else if (3 === e || 4 === e) return a.nodeValue;
							} else for (; (b = a[d]); d++) c += A(b);
							return c;
						}),
					(z = c.selectors =
						{
							cacheLength: 50,
							createPseudo: e,
							match: ra,
							attrHandle: {},
							find: {},
							relative: {
								'>': { dir: 'parentNode', first: !0 },
								' ': { dir: 'parentNode' },
								'+': { dir: 'previousSibling', first: !0 },
								'~': { dir: 'previousSibling' },
							},
							preFilter: {
								ATTR: function (a) {
									return (
										(a[1] = a[1].replace(xa, ya)),
										(a[3] = (a[4] || a[5] || '').replace(xa, ya)),
										'~=' === a[2] && (a[3] = ' ' + a[3] + ' '),
										a.slice(0, 4)
									);
								},
								CHILD: function (a) {
									return (
										(a[1] = a[1].toLowerCase()),
										'nth' === a[1].slice(0, 3)
											? (a[3] || c.error(a[0]),
											  (a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3]))),
											  (a[5] = +(a[7] + a[8] || 'odd' === a[3])))
											: a[3] && c.error(a[0]),
										a
									);
								},
								PSEUDO: function (a) {
									var c,
										d = !a[5] && a[2];
									return ra.CHILD.test(a[0])
										? null
										: (a[3] && a[4] !== b
												? (a[2] = a[4])
												: d &&
												  pa.test(d) &&
												  (c = m(d, !0)) &&
												  (c = d.indexOf(')', d.length - c) - d.length) &&
												  ((a[0] = a[0].slice(0, c)), (a[2] = d.slice(0, c))),
										  a.slice(0, 3));
								},
							},
							filter: {
								TAG: function (a) {
									var b = a.replace(xa, ya).toLowerCase();
									return '*' === a
										? function () {
												return !0;
										  }
										: function (a) {
												return a.nodeName && a.nodeName.toLowerCase() === b;
										  };
								},
								CLASS: function (a) {
									var b = R[a + ' '];
									return (
										b ||
										((b = RegExp('(^|' + ea + ')' + a + '(' + ea + '|$)')) &&
											R(a, function (a) {
												return b.test(
													('string' == typeof a.className && a.className) ||
														(typeof a.getAttribute !== W && a.getAttribute('class')) ||
														'',
												);
											}))
									);
								},
								ATTR: function (a, b, d) {
									return function (e) {
										var f = c.attr(e, a);
										return null == f
											? '!=' === b
											: !b ||
													((f += ''),
													'=' === b
														? f === d
														: '!=' === b
														? f !== d
														: '^=' === b
														? d && 0 === f.indexOf(d)
														: '*=' === b
														? d && f.indexOf(d) > -1
														: '$=' === b
														? d && f.slice(-d.length) === d
														: '~=' === b
														? (' ' + f + ' ').indexOf(d) > -1
														: '|=' === b && (f === d || f.slice(0, d.length + 1) === d + '-'));
									};
								},
								CHILD: function (a, b, c, d, e) {
									var f = 'nth' !== a.slice(0, 3),
										g = 'last' !== a.slice(-4),
										h = 'of-type' === b;
									return 1 === d && 0 === e
										? function (a) {
												return !!a.parentNode;
										  }
										: function (b, c, i) {
												var j,
													k,
													l,
													m,
													n,
													o,
													p = f !== g ? 'nextSibling' : 'previousSibling',
													q = b.parentNode,
													r = h && b.nodeName.toLowerCase(),
													s = !i && !h;
												if (q) {
													if (f) {
														for (; p; ) {
															for (l = b; (l = l[p]); )
																if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
															o = p = 'only' === a && !o && 'nextSibling';
														}
														return !0;
													}
													if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
														for (
															k = q[N] || (q[N] = {}),
																j = k[a] || [],
																n = j[0] === P && j[1],
																m = j[0] === P && j[2],
																l = n && q.childNodes[n];
															(l = (++n && l && l[p]) || (m = n = 0) || o.pop());

														)
															if (1 === l.nodeType && ++m && l === b) {
																k[a] = [P, n, m];
																break;
															}
													} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
													else
														for (
															;
															(l = (++n && l && l[p]) || (m = n = 0) || o.pop()) &&
															((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) ||
																!++m ||
																(s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b));

														);
													return (m -= e) === d || (0 == m % d && m / d >= 0);
												}
										  };
								},
								PSEUDO: function (a, b) {
									var d,
										f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error('unsupported pseudo: ' + a);
									return f[N]
										? f(b)
										: f.length > 1
										? ((d = [a, a, '', b]),
										  z.setFilters.hasOwnProperty(a.toLowerCase())
												? e(function (a, c) {
														for (var d, e = f(a, b), g = e.length; g--; )
															(d = ca.call(a, e[g])), (a[d] = !(c[d] = e[g]));
												  })
												: function (a) {
														return f(a, 0, d);
												  })
										: f;
								},
							},
							pseudos: {
								not: e(function (a) {
									var b = [],
										c = [],
										d = C(a.replace(ja, '$1'));
									return d[N]
										? e(function (a, b, c, e) {
												for (var f, g = d(a, null, e, []), h = a.length; h--; )
													(f = g[h]) && (a[h] = !(b[h] = f));
										  })
										: function (a, e, f) {
												return (b[0] = a), d(b, null, f, c), !c.pop();
										  };
								}),
								has: e(function (a) {
									return function (b) {
										return c(a, b).length > 0;
									};
								}),
								contains: e(function (a) {
									return function (b) {
										return (b.textContent || b.innerText || A(b)).indexOf(a) > -1;
									};
								}),
								lang: e(function (a) {
									return (
										qa.test(a || '') || c.error('unsupported lang: ' + a),
										(a = a.replace(xa, ya).toLowerCase()),
										function (b) {
											var c;
											do {
												if ((c = I ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang')))
													return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + '-');
											} while ((b = b.parentNode) && 1 === b.nodeType);
											return !1;
										}
									);
								}),
								target: function (b) {
									var c = a.location && a.location.hash;
									return c && c.slice(1) === b.id;
								},
								root: function (a) {
									return a === H;
								},
								focus: function (a) {
									return (
										a === G.activeElement &&
										(!G.hasFocus || G.hasFocus()) &&
										!!(a.type || a.href || ~a.tabIndex)
									);
								},
								enabled: function (a) {
									return !1 === a.disabled;
								},
								disabled: function (a) {
									return !0 === a.disabled;
								},
								checked: function (a) {
									var b = a.nodeName.toLowerCase();
									return ('input' === b && !!a.checked) || ('option' === b && !!a.selected);
								},
								selected: function (a) {
									return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
								},
								empty: function (a) {
									for (a = a.firstChild; a; a = a.nextSibling)
										if (a.nodeName > '@' || 3 === a.nodeType || 4 === a.nodeType) return !1;
									return !0;
								},
								parent: function (a) {
									return !z.pseudos.empty(a);
								},
								header: function (a) {
									return va.test(a.nodeName);
								},
								input: function (a) {
									return ua.test(a.nodeName);
								},
								button: function (a) {
									var b = a.nodeName.toLowerCase();
									return ('input' === b && 'button' === a.type) || 'button' === b;
								},
								text: function (a) {
									var b;
									return (
										'input' === a.nodeName.toLowerCase() &&
										'text' === a.type &&
										(null == (b = a.getAttribute('type')) || b.toLowerCase() === a.type)
									);
								},
								first: k(function () {
									return [0];
								}),
								last: k(function (a, b) {
									return [b - 1];
								}),
								eq: k(function (a, b, c) {
									return [0 > c ? c + b : c];
								}),
								even: k(function (a, b) {
									for (var c = 0; b > c; c += 2) a.push(c);
									return a;
								}),
								odd: k(function (a, b) {
									for (var c = 1; b > c; c += 2) a.push(c);
									return a;
								}),
								lt: k(function (a, b, c) {
									for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
									return a;
								}),
								gt: k(function (a, b, c) {
									for (var d = 0 > c ? c + b : c; b > ++d; ) a.push(d);
									return a;
								}),
							},
						}),
					(z.pseudos.nth = z.pseudos.eq);
				for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) z.pseudos[w] = i(w);
				for (w in { submit: !0, reset: !0 }) z.pseudos[w] = j(w);
				(l.prototype = z.filters = z.pseudos),
					(z.setFilters = new l()),
					(C = c.compile =
						function (a, b) {
							var c,
								d = [],
								e = [],
								f = T[a + ' '];
							if (!f) {
								for (b || (b = m(a)), c = b.length; c--; ) (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
								f = T(a, t(e, d));
							}
							return f;
						}),
					(x.sortStable = N.split('').sort(V).join('') === N),
					(x.detectDuplicates = U),
					F(),
					(x.sortDetached = f(function (a) {
						return 1 & a.compareDocumentPosition(G.createElement('div'));
					})),
					f(function (a) {
						return (a.innerHTML = "<a href='#'></a>"), '#' === a.firstChild.getAttribute('href');
					}) ||
						g('type|href|height|width', function (a, c, d) {
							return d ? b : a.getAttribute(c, 'type' === c.toLowerCase() ? 1 : 2);
						}),
					(x.attributes &&
						f(function (a) {
							return (
								(a.innerHTML = '<input/>'),
								a.firstChild.setAttribute('value', ''),
								'' === a.firstChild.getAttribute('value')
							);
						})) ||
						g('value', function (a, c, d) {
							return d || 'input' !== a.nodeName.toLowerCase() ? b : a.defaultValue;
						}),
					f(function (a) {
						return null == a.getAttribute('disabled');
					}) ||
						g(da, function (a, c, d) {
							var e;
							return d
								? b
								: (e = a.getAttributeNode(c)) && e.specified
								? e.value
								: !0 === a[c]
								? c.toLowerCase()
								: null;
						}),
					(ka.find = c),
					(ka.expr = c.selectors),
					(ka.expr[':'] = ka.expr.pseudos),
					(ka.unique = c.uniqueSort),
					(ka.text = c.getText),
					(ka.isXMLDoc = c.isXML),
					(ka.contains = c.contains);
			})(a);
		var za = {};
		(ka.Callbacks = function (a) {
			a = 'string' == typeof a ? za[a] || d(a) : ka.extend({}, a);
			var c,
				e,
				f,
				g,
				h,
				i,
				j = [],
				k = !a.once && [],
				l = function (b) {
					for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
						if (!1 === j[h].apply(b[0], b[1]) && a.stopOnFalse) {
							e = !1;
							break;
						}
					(c = !1), j && (k ? k.length && l(k.shift()) : e ? (j = []) : m.disable());
				},
				m = {
					add: function () {
						if (j) {
							var b = j.length;
							(function b(c) {
								ka.each(c, function (c, d) {
									var e = ka.type(d);
									'function' === e
										? (a.unique && m.has(d)) || j.push(d)
										: d && d.length && 'string' !== e && b(d);
								});
							})(arguments),
								c ? (g = j.length) : e && ((i = b), l(e));
						}
						return this;
					},
					remove: function () {
						return (
							j &&
								ka.each(arguments, function (a, b) {
									for (var d; (d = ka.inArray(b, j, d)) > -1; )
										j.splice(d, 1), c && (g >= d && g--, h >= d && h--);
								}),
							this
						);
					},
					has: function (a) {
						return a ? ka.inArray(a, j) > -1 : !(!j || !j.length);
					},
					empty: function () {
						return (j = []), (g = 0), this;
					},
					disable: function () {
						return (j = k = e = b), this;
					},
					disabled: function () {
						return !j;
					},
					lock: function () {
						return (k = b), e || m.disable(), this;
					},
					locked: function () {
						return !k;
					},
					fireWith: function (a, b) {
						return (
							!j || (f && !k) || ((b = b || []), (b = [a, b.slice ? b.slice() : b]), c ? k.push(b) : l(b)), this
						);
					},
					fire: function () {
						return m.fireWith(this, arguments), this;
					},
					fired: function () {
						return !!f;
					},
				};
			return m;
		}),
			ka.extend({
				Deferred: function (a) {
					var b = [
							['resolve', 'done', ka.Callbacks('once memory'), 'resolved'],
							['reject', 'fail', ka.Callbacks('once memory'), 'rejected'],
							['notify', 'progress', ka.Callbacks('memory')],
						],
						c = 'pending',
						d = {
							state: function () {
								return c;
							},
							always: function () {
								return e.done(arguments).fail(arguments), this;
							},
							then: function () {
								var a = arguments;
								return ka
									.Deferred(function (c) {
										ka.each(b, function (b, f) {
											var g = f[0],
												h = ka.isFunction(a[b]) && a[b];
											e[f[1]](function () {
												var a = h && h.apply(this, arguments);
												a && ka.isFunction(a.promise)
													? a.promise().done(c.resolve).fail(c.reject).progress(c.notify)
													: c[g + 'With'](this === d ? c.promise() : this, h ? [a] : arguments);
											});
										}),
											(a = null);
									})
									.promise();
							},
							promise: function (a) {
								return null != a ? ka.extend(a, d) : d;
							},
						},
						e = {};
					return (
						(d.pipe = d.then),
						ka.each(b, function (a, f) {
							var g = f[2],
								h = f[3];
							(d[f[1]] = g.add),
								h &&
									g.add(
										function () {
											c = h;
										},
										b[1 ^ a][2].disable,
										b[2][2].lock,
									),
								(e[f[0]] = function () {
									return e[f[0] + 'With'](this === e ? d : this, arguments), this;
								}),
								(e[f[0] + 'With'] = g.fireWith);
						}),
						d.promise(e),
						a && a.call(e, e),
						e
					);
				},
				when: function (a) {
					var b,
						c,
						d,
						e = 0,
						f = fa.call(arguments),
						g = f.length,
						h = 1 !== g || (a && ka.isFunction(a.promise)) ? g : 0,
						i = 1 === h ? a : ka.Deferred(),
						j = function (a, c, d) {
							return function (e) {
								(c[a] = this),
									(d[a] = arguments.length > 1 ? fa.call(arguments) : e),
									d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
							};
						};
					if (g > 1)
						for (b = Array(g), c = Array(g), d = Array(g); g > e; e++)
							f[e] && ka.isFunction(f[e].promise)
								? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b))
								: --h;
					return h || i.resolveWith(d, f), i.promise();
				},
			}),
			(ka.support = (function (b) {
				var c,
					d,
					e,
					f,
					g,
					h,
					i,
					j,
					k,
					l = Y.createElement('div');
				if (
					(l.setAttribute('className', 't'),
					(l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
					(c = l.getElementsByTagName('*') || []),
					!(d = l.getElementsByTagName('a')[0]) || !d.style || !c.length)
				)
					return b;
				(f = Y.createElement('select')),
					(h = f.appendChild(Y.createElement('option'))),
					(e = l.getElementsByTagName('input')[0]),
					(d.style.cssText = 'top:1px;float:left;opacity:.5'),
					(b.getSetAttribute = 't' !== l.className),
					(b.leadingWhitespace = 3 === l.firstChild.nodeType),
					(b.tbody = !l.getElementsByTagName('tbody').length),
					(b.htmlSerialize = !!l.getElementsByTagName('link').length),
					(b.style = /top/.test(d.getAttribute('style'))),
					(b.hrefNormalized = '/a' === d.getAttribute('href')),
					(b.opacity = /^0.5/.test(d.style.opacity)),
					(b.cssFloat = !!d.style.cssFloat),
					(b.checkOn = !!e.value),
					(b.optSelected = h.selected),
					(b.enctype = !!Y.createElement('form').enctype),
					(b.html5Clone = '<:nav></:nav>' !== Y.createElement('nav').cloneNode(!0).outerHTML),
					(b.inlineBlockNeedsLayout = !1),
					(b.shrinkWrapBlocks = !1),
					(b.pixelPosition = !1),
					(b.deleteExpando = !0),
					(b.noCloneEvent = !0),
					(b.reliableMarginRight = !0),
					(b.boxSizingReliable = !0),
					(e.checked = !0),
					(b.noCloneChecked = e.cloneNode(!0).checked),
					(f.disabled = !0),
					(b.optDisabled = !h.disabled);
				try {
					delete l.test;
				} catch (a) {
					b.deleteExpando = !1;
				}
				(e = Y.createElement('input')),
					e.setAttribute('value', ''),
					(b.input = '' === e.getAttribute('value')),
					(e.value = 't'),
					e.setAttribute('type', 'radio'),
					(b.radioValue = 't' === e.value),
					e.setAttribute('checked', 't'),
					e.setAttribute('name', 't'),
					(g = Y.createDocumentFragment()),
					g.appendChild(e),
					(b.appendChecked = e.checked),
					(b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked),
					l.attachEvent &&
						(l.attachEvent('onclick', function () {
							b.noCloneEvent = !1;
						}),
						l.cloneNode(!0).click());
				for (k in { submit: !0, change: !0, focusin: !0 })
					l.setAttribute((i = 'on' + k), 't'), (b[k + 'Bubbles'] = i in a || !1 === l.attributes[i].expando);
				(l.style.backgroundClip = 'content-box'),
					(l.cloneNode(!0).style.backgroundClip = ''),
					(b.clearCloneStyle = 'content-box' === l.style.backgroundClip);
				for (k in ka(b)) break;
				return (
					(b.ownLast = '0' !== k),
					ka(function () {
						var c,
							d,
							e,
							f =
								'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;',
							g = Y.getElementsByTagName('body')[0];
						g &&
							((c = Y.createElement('div')),
							(c.style.cssText =
								'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px'),
							g.appendChild(c).appendChild(l),
							(l.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
							(e = l.getElementsByTagName('td')),
							(e[0].style.cssText = 'padding:0;margin:0;border:0;display:none'),
							(j = 0 === e[0].offsetHeight),
							(e[0].style.display = ''),
							(e[1].style.display = 'none'),
							(b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight),
							(l.innerHTML = ''),
							(l.style.cssText =
								'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;'),
							ka.swap(g, null != g.style.zoom ? { zoom: 1 } : {}, function () {
								b.boxSizing = 4 === l.offsetWidth;
							}),
							a.getComputedStyle &&
								((b.pixelPosition = '1%' !== (a.getComputedStyle(l, null) || {}).top),
								(b.boxSizingReliable = '4px' === (a.getComputedStyle(l, null) || { width: '4px' }).width),
								(d = l.appendChild(Y.createElement('div'))),
								(d.style.cssText = l.style.cssText = f),
								(d.style.marginRight = d.style.width = '0'),
								(l.style.width = '1px'),
								(b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight))),
							typeof l.style.zoom !== W &&
								((l.innerHTML = ''),
								(l.style.cssText = f + 'width:1px;padding:1px;display:inline;zoom:1'),
								(b.inlineBlockNeedsLayout = 3 === l.offsetWidth),
								(l.style.display = 'block'),
								(l.innerHTML = '<div></div>'),
								(l.firstChild.style.width = '5px'),
								(b.shrinkWrapBlocks = 3 !== l.offsetWidth),
								b.inlineBlockNeedsLayout && (g.style.zoom = 1)),
							g.removeChild(c),
							(c = l = e = d = null));
					}),
					(c = f = g = h = d = e = null),
					b
				);
			})({}));
		var Aa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
			Ba = /([A-Z])/g;
		ka.extend({
			cache: {},
			noData: { applet: !0, embed: !0, object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' },
			hasData: function (a) {
				return !!(a = a.nodeType ? ka.cache[a[ka.expando]] : a[ka.expando]) && !h(a);
			},
			data: function (a, b, c) {
				return e(a, b, c);
			},
			removeData: function (a, b) {
				return f(a, b);
			},
			_data: function (a, b, c) {
				return e(a, b, c, !0);
			},
			_removeData: function (a, b) {
				return f(a, b, !0);
			},
			acceptData: function (a) {
				if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
				var b = a.nodeName && ka.noData[a.nodeName.toLowerCase()];
				return !b || (!0 !== b && a.getAttribute('classid') === b);
			},
		}),
			ka.fn.extend({
				data: function (a, c) {
					var d,
						e,
						f = null,
						h = 0,
						i = this[0];
					if (a === b) {
						if (this.length && ((f = ka.data(i)), 1 === i.nodeType && !ka._data(i, 'parsedAttrs'))) {
							for (d = i.attributes; d.length > h; h++)
								(e = d[h].name), 0 === e.indexOf('data-') && ((e = ka.camelCase(e.slice(5))), g(i, e, f[e]));
							ka._data(i, 'parsedAttrs', !0);
						}
						return f;
					}
					return 'object' == typeof a
						? this.each(function () {
								ka.data(this, a);
						  })
						: arguments.length > 1
						? this.each(function () {
								ka.data(this, a, c);
						  })
						: i
						? g(i, a, ka.data(i, a))
						: null;
				},
				removeData: function (a) {
					return this.each(function () {
						ka.removeData(this, a);
					});
				},
			}),
			ka.extend({
				queue: function (a, c, d) {
					var e;
					return a
						? ((c = (c || 'fx') + 'queue'),
						  (e = ka._data(a, c)),
						  d && (!e || ka.isArray(d) ? (e = ka._data(a, c, ka.makeArray(d))) : e.push(d)),
						  e || [])
						: b;
				},
				dequeue: function (a, b) {
					b = b || 'fx';
					var c = ka.queue(a, b),
						d = c.length,
						e = c.shift(),
						f = ka._queueHooks(a, b),
						g = function () {
							ka.dequeue(a, b);
						};
					'inprogress' === e && ((e = c.shift()), d--),
						e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)),
						!d && f && f.empty.fire();
				},
				_queueHooks: function (a, b) {
					var c = b + 'queueHooks';
					return (
						ka._data(a, c) ||
						ka._data(a, c, {
							empty: ka.Callbacks('once memory').add(function () {
								ka._removeData(a, b + 'queue'), ka._removeData(a, c);
							}),
						})
					);
				},
			}),
			ka.fn.extend({
				queue: function (a, c) {
					var d = 2;
					return (
						'string' != typeof a && ((c = a), (a = 'fx'), d--),
						d > arguments.length
							? ka.queue(this[0], a)
							: c === b
							? this
							: this.each(function () {
									var b = ka.queue(this, a, c);
									ka._queueHooks(this, a), 'fx' === a && 'inprogress' !== b[0] && ka.dequeue(this, a);
							  })
					);
				},
				dequeue: function (a) {
					return this.each(function () {
						ka.dequeue(this, a);
					});
				},
				delay: function (a, b) {
					return (
						(a = ka.fx ? ka.fx.speeds[a] || a : a),
						(b = b || 'fx'),
						this.queue(b, function (b, c) {
							var d = setTimeout(b, a);
							c.stop = function () {
								clearTimeout(d);
							};
						})
					);
				},
				clearQueue: function (a) {
					return this.queue(a || 'fx', []);
				},
				promise: function (a, c) {
					var d,
						e = 1,
						f = ka.Deferred(),
						g = this,
						h = this.length,
						i = function () {
							--e || f.resolveWith(g, [g]);
						};
					for ('string' != typeof a && ((c = a), (a = b)), a = a || 'fx'; h--; )
						(d = ka._data(g[h], a + 'queueHooks')) && d.empty && (e++, d.empty.add(i));
					return i(), f.promise(c);
				},
			});
		var Ca,
			Da,
			Ea = /[\t\r\n\f]/g,
			Fa = /\r/g,
			Ga = /^(?:input|select|textarea|button|object)$/i,
			Ha = /^(?:a|area)$/i,
			Ia = /^(?:checked|selected)$/i,
			Ja = ka.support.getSetAttribute,
			Ka = ka.support.input;
		ka.fn.extend({
			attr: function (a, b) {
				return ka.access(this, ka.attr, a, b, arguments.length > 1);
			},
			removeAttr: function (a) {
				return this.each(function () {
					ka.removeAttr(this, a);
				});
			},
			prop: function (a, b) {
				return ka.access(this, ka.prop, a, b, arguments.length > 1);
			},
			removeProp: function (a) {
				return (
					(a = ka.propFix[a] || a),
					this.each(function () {
						try {
							(this[a] = b), delete this[a];
						} catch (a) {}
					})
				);
			},
			addClass: function (a) {
				var b,
					c,
					d,
					e,
					f,
					g = 0,
					h = this.length,
					i = 'string' == typeof a && a;
				if (ka.isFunction(a))
					return this.each(function (b) {
						ka(this).addClass(a.call(this, b, this.className));
					});
				if (i)
					for (b = (a || '').match(ma) || []; h > g; g++)
						if (
							((c = this[g]),
							(d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(Ea, ' ') : ' ')))
						) {
							for (f = 0; (e = b[f++]); ) 0 > d.indexOf(' ' + e + ' ') && (d += e + ' ');
							c.className = ka.trim(d);
						}
				return this;
			},
			removeClass: function (a) {
				var b,
					c,
					d,
					e,
					f,
					g = 0,
					h = this.length,
					i = 0 === arguments.length || ('string' == typeof a && a);
				if (ka.isFunction(a))
					return this.each(function (b) {
						ka(this).removeClass(a.call(this, b, this.className));
					});
				if (i)
					for (b = (a || '').match(ma) || []; h > g; g++)
						if (
							((c = this[g]),
							(d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(Ea, ' ') : '')))
						) {
							for (f = 0; (e = b[f++]); )
								for (; d.indexOf(' ' + e + ' ') >= 0; ) d = d.replace(' ' + e + ' ', ' ');
							c.className = a ? ka.trim(d) : '';
						}
				return this;
			},
			toggleClass: function (a, b) {
				var c = typeof a;
				return 'boolean' == typeof b && 'string' === c
					? b
						? this.addClass(a)
						: this.removeClass(a)
					: ka.isFunction(a)
					? this.each(function (c) {
							ka(this).toggleClass(a.call(this, c, this.className, b), b);
					  })
					: this.each(function () {
							if ('string' === c)
								for (var b, d = 0, e = ka(this), f = a.match(ma) || []; (b = f[d++]); )
									e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
							else
								(c === W || 'boolean' === c) &&
									(this.className && ka._data(this, '__className__', this.className),
									(this.className = this.className || !1 === a ? '' : ka._data(this, '__className__') || ''));
					  });
			},
			hasClass: function (a) {
				for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++)
					if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(Ea, ' ').indexOf(b) >= 0)
						return !0;
				return !1;
			},
			val: function (a) {
				var c,
					d,
					e,
					f = this[0];
				return arguments.length
					? ((e = ka.isFunction(a)),
					  this.each(function (c) {
							var f;
							1 === this.nodeType &&
								((f = e ? a.call(this, c, ka(this).val()) : a),
								null == f
									? (f = '')
									: 'number' == typeof f
									? (f += '')
									: ka.isArray(f) &&
									  (f = ka.map(f, function (a) {
											return null == a ? '' : a + '';
									  })),
								((d = ka.valHooks[this.type] || ka.valHooks[this.nodeName.toLowerCase()]) &&
									'set' in d &&
									d.set(this, f, 'value') !== b) ||
									(this.value = f));
					  }))
					: f
					? ((d = ka.valHooks[f.type] || ka.valHooks[f.nodeName.toLowerCase()]),
					  d && 'get' in d && (c = d.get(f, 'value')) !== b
							? c
							: ((c = f.value), 'string' == typeof c ? c.replace(Fa, '') : null == c ? '' : c))
					: void 0;
			},
		}),
			ka.extend({
				valHooks: {
					option: {
						get: function (a) {
							var b = ka.find.attr(a, 'value');
							return null != b ? b : a.text;
						},
					},
					select: {
						get: function (a) {
							for (
								var b,
									c,
									d = a.options,
									e = a.selectedIndex,
									f = 'select-one' === a.type || 0 > e,
									g = f ? null : [],
									h = f ? e + 1 : d.length,
									i = 0 > e ? h : f ? e : 0;
								h > i;
								i++
							)
								if (
									((c = d[i]),
									!(
										(!c.selected && i !== e) ||
										(ka.support.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) ||
										(c.parentNode.disabled && ka.nodeName(c.parentNode, 'optgroup'))
									))
								) {
									if (((b = ka(c).val()), f)) return b;
									g.push(b);
								}
							return g;
						},
						set: function (a, b) {
							for (var c, d, e = a.options, f = ka.makeArray(b), g = e.length; g--; )
								(d = e[g]), (d.selected = ka.inArray(ka(d).val(), f) >= 0) && (c = !0);
							return c || (a.selectedIndex = -1), f;
						},
					},
				},
				attr: function (a, c, d) {
					var e,
						f,
						g = a.nodeType;
					if (a && 3 !== g && 8 !== g && 2 !== g)
						return typeof a.getAttribute === W
							? ka.prop(a, c, d)
							: ((1 === g && ka.isXMLDoc(a)) ||
									((c = c.toLowerCase()), (e = ka.attrHooks[c] || (ka.expr.match.bool.test(c) ? Da : Ca))),
							  d === b
									? e && 'get' in e && null !== (f = e.get(a, c))
										? f
										: ((f = ka.find.attr(a, c)), null == f ? b : f)
									: null !== d
									? e && 'set' in e && (f = e.set(a, d, c)) !== b
										? f
										: (a.setAttribute(c, d + ''), d)
									: (ka.removeAttr(a, c), b));
				},
				removeAttr: function (a, b) {
					var c,
						d,
						e = 0,
						f = b && b.match(ma);
					if (f && 1 === a.nodeType)
						for (; (c = f[e++]); )
							(d = ka.propFix[c] || c),
								ka.expr.match.bool.test(c)
									? (Ka && Ja) || !Ia.test(c)
										? (a[d] = !1)
										: (a[ka.camelCase('default-' + c)] = a[d] = !1)
									: ka.attr(a, c, ''),
								a.removeAttribute(Ja ? c : d);
				},
				attrHooks: {
					type: {
						set: function (a, b) {
							if (!ka.support.radioValue && 'radio' === b && ka.nodeName(a, 'input')) {
								var c = a.value;
								return a.setAttribute('type', b), c && (a.value = c), b;
							}
						},
					},
				},
				propFix: { for: 'htmlFor', class: 'className' },
				prop: function (a, c, d) {
					var e,
						f,
						g,
						h = a.nodeType;
					if (a && 3 !== h && 8 !== h && 2 !== h)
						return (
							(g = 1 !== h || !ka.isXMLDoc(a)),
							g && ((c = ka.propFix[c] || c), (f = ka.propHooks[c])),
							d !== b
								? f && 'set' in f && (e = f.set(a, d, c)) !== b
									? e
									: (a[c] = d)
								: f && 'get' in f && null !== (e = f.get(a, c))
								? e
								: a[c]
						);
				},
				propHooks: {
					tabIndex: {
						get: function (a) {
							var b = ka.find.attr(a, 'tabindex');
							return b ? parseInt(b, 10) : Ga.test(a.nodeName) || (Ha.test(a.nodeName) && a.href) ? 0 : -1;
						},
					},
				},
			}),
			(Da = {
				set: function (a, b, c) {
					return (
						!1 === b
							? ka.removeAttr(a, c)
							: (Ka && Ja) || !Ia.test(c)
							? a.setAttribute((!Ja && ka.propFix[c]) || c, c)
							: (a[ka.camelCase('default-' + c)] = a[c] = !0),
						c
					);
				},
			}),
			ka.each(ka.expr.match.bool.source.match(/\w+/g), function (a, c) {
				var d = ka.expr.attrHandle[c] || ka.find.attr;
				ka.expr.attrHandle[c] =
					(Ka && Ja) || !Ia.test(c)
						? function (a, c, e) {
								var f = ka.expr.attrHandle[c],
									g = e ? b : (ka.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
								return (ka.expr.attrHandle[c] = f), g;
						  }
						: function (a, c, d) {
								return d ? b : a[ka.camelCase('default-' + c)] ? c.toLowerCase() : null;
						  };
			}),
			(Ka && Ja) ||
				(ka.attrHooks.value = {
					set: function (a, c, d) {
						return ka.nodeName(a, 'input') ? ((a.defaultValue = c), b) : Ca && Ca.set(a, c, d);
					},
				}),
			Ja ||
				((Ca = {
					set: function (a, c, d) {
						var e = a.getAttributeNode(d);
						return (
							e || a.setAttributeNode((e = a.ownerDocument.createAttribute(d))),
							(e.value = c += ''),
							'value' === d || c === a.getAttribute(d) ? c : b
						);
					},
				}),
				(ka.expr.attrHandle.id =
					ka.expr.attrHandle.name =
					ka.expr.attrHandle.coords =
						function (a, c, d) {
							var e;
							return d ? b : (e = a.getAttributeNode(c)) && '' !== e.value ? e.value : null;
						}),
				(ka.valHooks.button = {
					get: function (a, c) {
						var d = a.getAttributeNode(c);
						return d && d.specified ? d.value : b;
					},
					set: Ca.set,
				}),
				(ka.attrHooks.contenteditable = {
					set: function (a, b, c) {
						Ca.set(a, '' !== b && b, c);
					},
				}),
				ka.each(['width', 'height'], function (a, c) {
					ka.attrHooks[c] = {
						set: function (a, d) {
							return '' === d ? (a.setAttribute(c, 'auto'), d) : b;
						},
					};
				})),
			ka.support.hrefNormalized ||
				ka.each(['href', 'src'], function (a, b) {
					ka.propHooks[b] = {
						get: function (a) {
							return a.getAttribute(b, 4);
						},
					};
				}),
			ka.support.style ||
				(ka.attrHooks.style = {
					get: function (a) {
						return a.style.cssText || b;
					},
					set: function (a, b) {
						return (a.style.cssText = b + '');
					},
				}),
			ka.support.optSelected ||
				(ka.propHooks.selected = {
					get: function (a) {
						var b = a.parentNode;
						return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
					},
				}),
			ka.each(
				[
					'tabIndex',
					'readOnly',
					'maxLength',
					'cellSpacing',
					'cellPadding',
					'rowSpan',
					'colSpan',
					'useMap',
					'frameBorder',
					'contentEditable',
				],
				function () {
					ka.propFix[this.toLowerCase()] = this;
				},
			),
			ka.support.enctype || (ka.propFix.enctype = 'encoding'),
			ka.each(['radio', 'checkbox'], function () {
				(ka.valHooks[this] = {
					set: function (a, c) {
						return ka.isArray(c) ? (a.checked = ka.inArray(ka(a).val(), c) >= 0) : b;
					},
				}),
					ka.support.checkOn ||
						(ka.valHooks[this].get = function (a) {
							return null === a.getAttribute('value') ? 'on' : a.value;
						});
			});
		var La = /^(?:input|select|textarea)$/i,
			Ma = /^key/,
			Na = /^(?:mouse|contextmenu)|click/,
			Oa = /^(?:focusinfocus|focusoutblur)$/,
			Pa = /^([^.]*)(?:\.(.+)|)$/;
		(ka.event = {
			global: {},
			add: function (a, c, d, e, f) {
				var g,
					h,
					i,
					j,
					k,
					l,
					m,
					n,
					o,
					p,
					q,
					r = ka._data(a);
				if (r) {
					for (
						d.handler && ((j = d), (d = j.handler), (f = j.selector)),
							d.guid || (d.guid = ka.guid++),
							(h = r.events) || (h = r.events = {}),
							(l = r.handle) ||
								((l = r.handle =
									function (a) {
										return typeof ka === W || (a && ka.event.triggered === a.type)
											? b
											: ka.event.dispatch.apply(l.elem, arguments);
									}),
								(l.elem = a)),
							c = (c || '').match(ma) || [''],
							i = c.length;
						i--;

					)
						(g = Pa.exec(c[i]) || []),
							(o = q = g[1]),
							(p = (g[2] || '').split('.').sort()),
							o &&
								((k = ka.event.special[o] || {}),
								(o = (f ? k.delegateType : k.bindType) || o),
								(k = ka.event.special[o] || {}),
								(m = ka.extend(
									{
										type: o,
										origType: q,
										data: e,
										handler: d,
										guid: d.guid,
										selector: f,
										needsContext: f && ka.expr.match.needsContext.test(f),
										namespace: p.join('.'),
									},
									j,
								)),
								(n = h[o]) ||
									((n = h[o] = []),
									(n.delegateCount = 0),
									(k.setup && !1 !== k.setup.call(a, e, p, l)) ||
										(a.addEventListener
											? a.addEventListener(o, l, !1)
											: a.attachEvent && a.attachEvent('on' + o, l))),
								k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)),
								f ? n.splice(n.delegateCount++, 0, m) : n.push(m),
								(ka.event.global[o] = !0));
					a = null;
				}
			},
			remove: function (a, b, c, d, e) {
				var f,
					g,
					h,
					i,
					j,
					k,
					l,
					m,
					n,
					o,
					p,
					q = ka.hasData(a) && ka._data(a);
				if (q && (k = q.events)) {
					for (b = (b || '').match(ma) || [''], j = b.length; j--; )
						if (((h = Pa.exec(b[j]) || []), (n = p = h[1]), (o = (h[2] || '').split('.').sort()), n)) {
							for (
								l = ka.event.special[n] || {},
									n = (d ? l.delegateType : l.bindType) || n,
									m = k[n] || [],
									h = h[2] && RegExp('(^|\\.)' + o.join('\\.(?:.*\\.|)') + '(\\.|$)'),
									i = f = m.length;
								f--;

							)
								(g = m[f]),
									(!e && p !== g.origType) ||
										(c && c.guid !== g.guid) ||
										(h && !h.test(g.namespace)) ||
										(d && d !== g.selector && ('**' !== d || !g.selector)) ||
										(m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
							i &&
								!m.length &&
								((l.teardown && !1 !== l.teardown.call(a, o, q.handle)) || ka.removeEvent(a, n, q.handle),
								delete k[n]);
						} else for (n in k) ka.event.remove(a, n + b[j], c, d, !0);
					ka.isEmptyObject(k) && (delete q.handle, ka._removeData(a, 'events'));
				}
			},
			trigger: function (c, d, e, f) {
				var g,
					h,
					i,
					j,
					k,
					l,
					m,
					n = [e || Y],
					o = ia.call(c, 'type') ? c.type : c,
					p = ia.call(c, 'namespace') ? c.namespace.split('.') : [];
				if (
					((i = l = e = e || Y),
					3 !== e.nodeType &&
						8 !== e.nodeType &&
						!Oa.test(o + ka.event.triggered) &&
						(o.indexOf('.') >= 0 && ((p = o.split('.')), (o = p.shift()), p.sort()),
						(h = 0 > o.indexOf(':') && 'on' + o),
						(c = c[ka.expando] ? c : new ka.Event(o, 'object' == typeof c && c)),
						(c.isTrigger = f ? 2 : 3),
						(c.namespace = p.join('.')),
						(c.namespace_re = c.namespace ? RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
						(c.result = b),
						c.target || (c.target = e),
						(d = null == d ? [c] : ka.makeArray(d, [c])),
						(k = ka.event.special[o] || {}),
						f || !k.trigger || !1 !== k.trigger.apply(e, d)))
				) {
					if (!f && !k.noBubble && !ka.isWindow(e)) {
						for (j = k.delegateType || o, Oa.test(j + o) || (i = i.parentNode); i; i = i.parentNode)
							n.push(i), (l = i);
						l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a);
					}
					for (m = 0; (i = n[m++]) && !c.isPropagationStopped(); )
						(c.type = m > 1 ? j : k.bindType || o),
							(g = (ka._data(i, 'events') || {})[c.type] && ka._data(i, 'handle')),
							g && g.apply(i, d),
							(g = h && i[h]) && ka.acceptData(i) && g.apply && !1 === g.apply(i, d) && c.preventDefault();
					if (
						((c.type = o),
						!f &&
							!c.isDefaultPrevented() &&
							(!k._default || !1 === k._default.apply(n.pop(), d)) &&
							ka.acceptData(e) &&
							h &&
							e[o] &&
							!ka.isWindow(e))
					) {
						(l = e[h]), l && (e[h] = null), (ka.event.triggered = o);
						try {
							e[o]();
						} catch (a) {}
						(ka.event.triggered = b), l && (e[h] = l);
					}
					return c.result;
				}
			},
			dispatch: function (a) {
				a = ka.event.fix(a);
				var c,
					d,
					e,
					f,
					g,
					h = [],
					i = fa.call(arguments),
					j = (ka._data(this, 'events') || {})[a.type] || [],
					k = ka.event.special[a.type] || {};
				if (((i[0] = a), (a.delegateTarget = this), !k.preDispatch || !1 !== k.preDispatch.call(this, a))) {
					for (h = ka.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped(); )
						for (a.currentTarget = f.elem, g = 0; (e = f.handlers[g++]) && !a.isImmediatePropagationStopped(); )
							(!a.namespace_re || a.namespace_re.test(e.namespace)) &&
								((a.handleObj = e),
								(a.data = e.data),
								(d = ((ka.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i)) !== b &&
									!1 === (a.result = d) &&
									(a.preventDefault(), a.stopPropagation()));
					return k.postDispatch && k.postDispatch.call(this, a), a.result;
				}
			},
			handlers: function (a, c) {
				var d,
					e,
					f,
					g,
					h = [],
					i = c.delegateCount,
					j = a.target;
				if (i && j.nodeType && (!a.button || 'click' !== a.type))
					for (; j != this; j = j.parentNode || this)
						if (1 === j.nodeType && (!0 !== j.disabled || 'click' !== a.type)) {
							for (f = [], g = 0; i > g; g++)
								(e = c[g]),
									(d = e.selector + ' '),
									f[d] === b &&
										(f[d] = e.needsContext ? ka(d, this).index(j) >= 0 : ka.find(d, this, null, [j]).length),
									f[d] && f.push(e);
							f.length && h.push({ elem: j, handlers: f });
						}
				return c.length > i && h.push({ elem: this, handlers: c.slice(i) }), h;
			},
			fix: function (a) {
				if (a[ka.expando]) return a;
				var b,
					c,
					d,
					e = a.type,
					f = a,
					g = this.fixHooks[e];
				for (
					g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}),
						d = g.props ? this.props.concat(g.props) : this.props,
						a = new ka.Event(f),
						b = d.length;
					b--;

				)
					(c = d[b]), (a[c] = f[c]);
				return (
					a.target || (a.target = f.srcElement || Y),
					3 === a.target.nodeType && (a.target = a.target.parentNode),
					(a.metaKey = !!a.metaKey),
					g.filter ? g.filter(a, f) : a
				);
			},
			props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
				' ',
			),
			fixHooks: {},
			keyHooks: {
				props: 'char charCode key keyCode'.split(' '),
				filter: function (a, b) {
					return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
				},
			},
			mouseHooks: {
				props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
					' ',
				),
				filter: function (a, c) {
					var d,
						e,
						f,
						g = c.button,
						h = c.fromElement;
					return (
						null == a.pageX &&
							null != c.clientX &&
							((e = a.target.ownerDocument || Y),
							(f = e.documentElement),
							(d = e.body),
							(a.pageX =
								c.clientX +
								((f && f.scrollLeft) || (d && d.scrollLeft) || 0) -
								((f && f.clientLeft) || (d && d.clientLeft) || 0)),
							(a.pageY =
								c.clientY +
								((f && f.scrollTop) || (d && d.scrollTop) || 0) -
								((f && f.clientTop) || (d && d.clientTop) || 0))),
						!a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h),
						a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
						a
					);
				},
			},
			special: {
				load: { noBubble: !0 },
				focus: {
					trigger: function () {
						if (this !== k() && this.focus)
							try {
								return this.focus(), !1;
							} catch (a) {}
					},
					delegateType: 'focusin',
				},
				blur: {
					trigger: function () {
						return this === k() && this.blur ? (this.blur(), !1) : b;
					},
					delegateType: 'focusout',
				},
				click: {
					trigger: function () {
						return ka.nodeName(this, 'input') && 'checkbox' === this.type && this.click ? (this.click(), !1) : b;
					},
					_default: function (a) {
						return ka.nodeName(a.target, 'a');
					},
				},
				beforeunload: {
					postDispatch: function (a) {
						a.result !== b && (a.originalEvent.returnValue = a.result);
					},
				},
			},
			simulate: function (a, b, c, d) {
				var e = ka.extend(new ka.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });
				d ? ka.event.trigger(e, null, b) : ka.event.dispatch.call(b, e),
					e.isDefaultPrevented() && c.preventDefault();
			},
		}),
			(ka.removeEvent = Y.removeEventListener
				? function (a, b, c) {
						a.removeEventListener && a.removeEventListener(b, c, !1);
				  }
				: function (a, b, c) {
						var d = 'on' + b;
						a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c));
				  }),
			(ka.Event = function (a, c) {
				return this instanceof ka.Event
					? (a && a.type
							? ((this.originalEvent = a),
							  (this.type = a.type),
							  (this.isDefaultPrevented =
									a.defaultPrevented || !1 === a.returnValue || (a.getPreventDefault && a.getPreventDefault())
										? i
										: j))
							: (this.type = a),
					  c && ka.extend(this, c),
					  (this.timeStamp = (a && a.timeStamp) || ka.now()),
					  (this[ka.expando] = !0),
					  b)
					: new ka.Event(a, c);
			}),
			(ka.Event.prototype = {
				isDefaultPrevented: j,
				isPropagationStopped: j,
				isImmediatePropagationStopped: j,
				preventDefault: function () {
					var a = this.originalEvent;
					(this.isDefaultPrevented = i), a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
				},
				stopPropagation: function () {
					var a = this.originalEvent;
					(this.isPropagationStopped = i), a && (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
				},
				stopImmediatePropagation: function () {
					(this.isImmediatePropagationStopped = i), this.stopPropagation();
				},
			}),
			ka.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function (a, b) {
				ka.event.special[a] = {
					delegateType: b,
					bindType: b,
					handle: function (a) {
						var c,
							d = this,
							e = a.relatedTarget,
							f = a.handleObj;
						return (
							(!e || (e !== d && !ka.contains(d, e))) &&
								((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)),
							c
						);
					},
				};
			}),
			ka.support.submitBubbles ||
				(ka.event.special.submit = {
					setup: function () {
						return (
							!ka.nodeName(this, 'form') &&
							(ka.event.add(this, 'click._submit keypress._submit', function (a) {
								var c = a.target,
									d = ka.nodeName(c, 'input') || ka.nodeName(c, 'button') ? c.form : b;
								d &&
									!ka._data(d, 'submitBubbles') &&
									(ka.event.add(d, 'submit._submit', function (a) {
										a._submit_bubble = !0;
									}),
									ka._data(d, 'submitBubbles', !0));
							}),
							b)
						);
					},
					postDispatch: function (a) {
						a._submit_bubble &&
							(delete a._submit_bubble,
							this.parentNode && !a.isTrigger && ka.event.simulate('submit', this.parentNode, a, !0));
					},
					teardown: function () {
						return !ka.nodeName(this, 'form') && (ka.event.remove(this, '._submit'), b);
					},
				}),
			ka.support.changeBubbles ||
				(ka.event.special.change = {
					setup: function () {
						return La.test(this.nodeName)
							? (('checkbox' === this.type || 'radio' === this.type) &&
									(ka.event.add(this, 'propertychange._change', function (a) {
										'checked' === a.originalEvent.propertyName && (this._just_changed = !0);
									}),
									ka.event.add(this, 'click._change', function (a) {
										this._just_changed && !a.isTrigger && (this._just_changed = !1),
											ka.event.simulate('change', this, a, !0);
									})),
							  !1)
							: (ka.event.add(this, 'beforeactivate._change', function (a) {
									var b = a.target;
									La.test(b.nodeName) &&
										!ka._data(b, 'changeBubbles') &&
										(ka.event.add(b, 'change._change', function (a) {
											!this.parentNode ||
												a.isSimulated ||
												a.isTrigger ||
												ka.event.simulate('change', this.parentNode, a, !0);
										}),
										ka._data(b, 'changeBubbles', !0));
							  }),
							  b);
					},
					handle: function (a) {
						var c = a.target;
						return this !== c || a.isSimulated || a.isTrigger || ('radio' !== c.type && 'checkbox' !== c.type)
							? a.handleObj.handler.apply(this, arguments)
							: b;
					},
					teardown: function () {
						return ka.event.remove(this, '._change'), !La.test(this.nodeName);
					},
				}),
			ka.support.focusinBubbles ||
				ka.each({ focus: 'focusin', blur: 'focusout' }, function (a, b) {
					var c = 0,
						d = function (a) {
							ka.event.simulate(b, a.target, ka.event.fix(a), !0);
						};
					ka.event.special[b] = {
						setup: function () {
							0 == c++ && Y.addEventListener(a, d, !0);
						},
						teardown: function () {
							0 == --c && Y.removeEventListener(a, d, !0);
						},
					};
				}),
			ka.fn.extend({
				on: function (a, c, d, e, f) {
					var g, h;
					if ('object' == typeof a) {
						'string' != typeof c && ((d = d || c), (c = b));
						for (g in a) this.on(g, c, d, a[g], f);
						return this;
					}
					if (
						(null == d && null == e
							? ((e = c), (d = c = b))
							: null == e && ('string' == typeof c ? ((e = d), (d = b)) : ((e = d), (d = c), (c = b))),
						!1 === e)
					)
						e = j;
					else if (!e) return this;
					return (
						1 === f &&
							((h = e),
							(e = function (a) {
								return ka().off(a), h.apply(this, arguments);
							}),
							(e.guid = h.guid || (h.guid = ka.guid++))),
						this.each(function () {
							ka.event.add(this, a, e, d, c);
						})
					);
				},
				one: function (a, b, c, d) {
					return this.on(a, b, c, d, 1);
				},
				off: function (a, c, d) {
					var e, f;
					if (a && a.preventDefault && a.handleObj)
						return (
							(e = a.handleObj),
							ka(a.delegateTarget).off(
								e.namespace ? e.origType + '.' + e.namespace : e.origType,
								e.selector,
								e.handler,
							),
							this
						);
					if ('object' == typeof a) {
						for (f in a) this.off(f, c, a[f]);
						return this;
					}
					return (
						(!1 === c || 'function' == typeof c) && ((d = c), (c = b)),
						!1 === d && (d = j),
						this.each(function () {
							ka.event.remove(this, a, d, c);
						})
					);
				},
				trigger: function (a, b) {
					return this.each(function () {
						ka.event.trigger(a, b, this);
					});
				},
				triggerHandler: function (a, c) {
					var d = this[0];
					return d ? ka.event.trigger(a, c, d, !0) : b;
				},
			});
		var Qa = /^.[^:#\[\.,]*$/,
			Ra = /^(?:parents|prev(?:Until|All))/,
			Sa = ka.expr.match.needsContext,
			Ta = { children: !0, contents: !0, next: !0, prev: !0 };
		ka.fn.extend({
			find: function (a) {
				var b,
					c = [],
					d = this,
					e = d.length;
				if ('string' != typeof a)
					return this.pushStack(
						ka(a).filter(function () {
							for (b = 0; e > b; b++) if (ka.contains(d[b], this)) return !0;
						}),
					);
				for (b = 0; e > b; b++) ka.find(a, d[b], c);
				return (
					(c = this.pushStack(e > 1 ? ka.unique(c) : c)),
					(c.selector = this.selector ? this.selector + ' ' + a : a),
					c
				);
			},
			has: function (a) {
				var b,
					c = ka(a, this),
					d = c.length;
				return this.filter(function () {
					for (b = 0; d > b; b++) if (ka.contains(this, c[b])) return !0;
				});
			},
			not: function (a) {
				return this.pushStack(m(this, a || [], !0));
			},
			filter: function (a) {
				return this.pushStack(m(this, a || [], !1));
			},
			is: function (a) {
				return !!m(this, 'string' == typeof a && Sa.test(a) ? ka(a) : a || [], !1).length;
			},
			closest: function (a, b) {
				for (
					var c,
						d = 0,
						e = this.length,
						f = [],
						g = Sa.test(a) || 'string' != typeof a ? ka(a, b || this.context) : 0;
					e > d;
					d++
				)
					for (c = this[d]; c && c !== b; c = c.parentNode)
						if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && ka.find.matchesSelector(c, a))) {
							c = f.push(c);
							break;
						}
				return this.pushStack(f.length > 1 ? ka.unique(f) : f);
			},
			index: function (a) {
				return a
					? 'string' == typeof a
						? ka.inArray(this[0], ka(a))
						: ka.inArray(a.jquery ? a[0] : a, this)
					: this[0] && this[0].parentNode
					? this.first().prevAll().length
					: -1;
			},
			add: function (a, b) {
				var c = 'string' == typeof a ? ka(a, b) : ka.makeArray(a && a.nodeType ? [a] : a),
					d = ka.merge(this.get(), c);
				return this.pushStack(ka.unique(d));
			},
			addBack: function (a) {
				return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
			},
		}),
			ka.each(
				{
					parent: function (a) {
						var b = a.parentNode;
						return b && 11 !== b.nodeType ? b : null;
					},
					parents: function (a) {
						return ka.dir(a, 'parentNode');
					},
					parentsUntil: function (a, b, c) {
						return ka.dir(a, 'parentNode', c);
					},
					next: function (a) {
						return l(a, 'nextSibling');
					},
					prev: function (a) {
						return l(a, 'previousSibling');
					},
					nextAll: function (a) {
						return ka.dir(a, 'nextSibling');
					},
					prevAll: function (a) {
						return ka.dir(a, 'previousSibling');
					},
					nextUntil: function (a, b, c) {
						return ka.dir(a, 'nextSibling', c);
					},
					prevUntil: function (a, b, c) {
						return ka.dir(a, 'previousSibling', c);
					},
					siblings: function (a) {
						return ka.sibling((a.parentNode || {}).firstChild, a);
					},
					children: function (a) {
						return ka.sibling(a.firstChild);
					},
					contents: function (a) {
						return ka.nodeName(a, 'iframe')
							? a.contentDocument || a.contentWindow.document
							: ka.merge([], a.childNodes);
					},
				},
				function (a, b) {
					ka.fn[a] = function (c, d) {
						var e = ka.map(this, b, c);
						return (
							'Until' !== a.slice(-5) && (d = c),
							d && 'string' == typeof d && (e = ka.filter(d, e)),
							this.length > 1 && (Ta[a] || (e = ka.unique(e)), Ra.test(a) && (e = e.reverse())),
							this.pushStack(e)
						);
					};
				},
			),
			ka.extend({
				filter: function (a, b, c) {
					var d = b[0];
					return (
						c && (a = ':not(' + a + ')'),
						1 === b.length && 1 === d.nodeType
							? ka.find.matchesSelector(d, a)
								? [d]
								: []
							: ka.find.matches(
									a,
									ka.grep(b, function (a) {
										return 1 === a.nodeType;
									}),
							  )
					);
				},
				dir: function (a, c, d) {
					for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ka(f).is(d)); )
						1 === f.nodeType && e.push(f), (f = f[c]);
					return e;
				},
				sibling: function (a, b) {
					for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
					return c;
				},
			});
		var Ua =
				'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
			Va = / jQuery\d+="(?:null|\d+)"/g,
			Wa = RegExp('<(?:' + Ua + ')[\\s/>]', 'i'),
			Xa = /^\s+/,
			Ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Za = /<([\w:]+)/,
			$a = /<tbody/i,
			_a = /<|&#?\w+;/,
			ab = /<(?:script|style|link)/i,
			bb = /^(?:checkbox|radio)$/i,
			cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
			db = /^$|\/(?:java|ecma)script/i,
			eb = /^true\/(.*)/,
			fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			gb = {
				option: [1, "<select multiple='multiple'>", '</select>'],
				legend: [1, '<fieldset>', '</fieldset>'],
				area: [1, '<map>', '</map>'],
				param: [1, '<object>', '</object>'],
				thead: [1, '<table>', '</table>'],
				tr: [2, '<table><tbody>', '</tbody></table>'],
				col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
				td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
				_default: ka.support.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'],
			},
			hb = n(Y),
			ib = hb.appendChild(Y.createElement('div'));
		(gb.optgroup = gb.option),
			(gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead),
			(gb.th = gb.td),
			ka.fn.extend({
				text: function (a) {
					return ka.access(
						this,
						function (a) {
							return a === b
								? ka.text(this)
								: this.empty().append(((this[0] && this[0].ownerDocument) || Y).createTextNode(a));
						},
						null,
						a,
						arguments.length,
					);
				},
				append: function () {
					return this.domManip(arguments, function (a) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							o(this, a).appendChild(a);
						}
					});
				},
				prepend: function () {
					return this.domManip(arguments, function (a) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var b = o(this, a);
							b.insertBefore(a, b.firstChild);
						}
					});
				},
				before: function () {
					return this.domManip(arguments, function (a) {
						this.parentNode && this.parentNode.insertBefore(a, this);
					});
				},
				after: function () {
					return this.domManip(arguments, function (a) {
						this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
					});
				},
				remove: function (a, b) {
					for (var c, d = a ? ka.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
						b || 1 !== c.nodeType || ka.cleanData(u(c)),
							c.parentNode &&
								(b && ka.contains(c.ownerDocument, c) && r(u(c, 'script')), c.parentNode.removeChild(c));
					return this;
				},
				empty: function () {
					for (var a, b = 0; null != (a = this[b]); b++) {
						for (1 === a.nodeType && ka.cleanData(u(a, !1)); a.firstChild; ) a.removeChild(a.firstChild);
						a.options && ka.nodeName(a, 'select') && (a.options.length = 0);
					}
					return this;
				},
				clone: function (a, b) {
					return (
						(a = null != a && a),
						(b = null == b ? a : b),
						this.map(function () {
							return ka.clone(this, a, b);
						})
					);
				},
				html: function (a) {
					return ka.access(
						this,
						function (a) {
							var c = this[0] || {},
								d = 0,
								e = this.length;
							if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Va, '') : b;
							if (
								!(
									'string' != typeof a ||
									ab.test(a) ||
									(!ka.support.htmlSerialize && Wa.test(a)) ||
									(!ka.support.leadingWhitespace && Xa.test(a)) ||
									gb[(Za.exec(a) || ['', ''])[1].toLowerCase()]
								)
							) {
								a = a.replace(Ya, '<$1></$2>');
								try {
									for (; e > d; d++)
										(c = this[d] || {}), 1 === c.nodeType && (ka.cleanData(u(c, !1)), (c.innerHTML = a));
									c = 0;
								} catch (a) {}
							}
							c && this.empty().append(a);
						},
						null,
						a,
						arguments.length,
					);
				},
				replaceWith: function () {
					var a = ka.map(this, function (a) {
							return [a.nextSibling, a.parentNode];
						}),
						b = 0;
					return (
						this.domManip(
							arguments,
							function (c) {
								var d = a[b++],
									e = a[b++];
								e &&
									(d && d.parentNode !== e && (d = this.nextSibling), ka(this).remove(), e.insertBefore(c, d));
							},
							!0,
						),
						b ? this : this.remove()
					);
				},
				detach: function (a) {
					return this.remove(a, !0);
				},
				domManip: function (a, b, c) {
					a = da.apply([], a);
					var d,
						e,
						f,
						g,
						h,
						i,
						j = 0,
						k = this.length,
						l = this,
						m = k - 1,
						n = a[0],
						o = ka.isFunction(n);
					if (o || (!(1 >= k || 'string' != typeof n || ka.support.checkClone) && cb.test(n)))
						return this.each(function (d) {
							var e = l.eq(d);
							o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c);
						});
					if (
						k &&
						((i = ka.buildFragment(a, this[0].ownerDocument, !1, !c && this)),
						(d = i.firstChild),
						1 === i.childNodes.length && (i = d),
						d)
					) {
						for (g = ka.map(u(i, 'script'), p), f = g.length; k > j; j++)
							(e = i),
								j !== m && ((e = ka.clone(e, !0, !0)), f && ka.merge(g, u(e, 'script'))),
								b.call(this[j], e, j);
						if (f)
							for (h = g[g.length - 1].ownerDocument, ka.map(g, q), j = 0; f > j; j++)
								(e = g[j]),
									db.test(e.type || '') &&
										!ka._data(e, 'globalEval') &&
										ka.contains(h, e) &&
										(e.src
											? ka._evalUrl(e.src)
											: ka.globalEval((e.text || e.textContent || e.innerHTML || '').replace(fb, '')));
						i = d = null;
					}
					return this;
				},
			}),
			ka.each(
				{
					appendTo: 'append',
					prependTo: 'prepend',
					insertBefore: 'before',
					insertAfter: 'after',
					replaceAll: 'replaceWith',
				},
				function (a, b) {
					ka.fn[a] = function (a) {
						for (var c, d = 0, e = [], f = ka(a), g = f.length - 1; g >= d; d++)
							(c = d === g ? this : this.clone(!0)), ka(f[d])[b](c), ea.apply(e, c.get());
						return this.pushStack(e);
					};
				},
			),
			ka.extend({
				clone: function (a, b, c) {
					var d,
						e,
						f,
						g,
						h,
						i = ka.contains(a.ownerDocument, a);
					if (
						(ka.support.html5Clone || ka.isXMLDoc(a) || !Wa.test('<' + a.nodeName + '>')
							? (f = a.cloneNode(!0))
							: ((ib.innerHTML = a.outerHTML), ib.removeChild((f = ib.firstChild))),
						!(
							(ka.support.noCloneEvent && ka.support.noCloneChecked) ||
							(1 !== a.nodeType && 11 !== a.nodeType) ||
							ka.isXMLDoc(a)
						))
					)
						for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
					if (b)
						if (c) for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
						else s(a, f);
					return (d = u(f, 'script')), d.length > 0 && r(d, !i && u(a, 'script')), (d = h = e = null), f;
				},
				buildFragment: function (a, b, c, d) {
					for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++)
						if ((f = a[p]) || 0 === f)
							if ('object' === ka.type(f)) ka.merge(o, f.nodeType ? [f] : f);
							else if (_a.test(f)) {
								for (
									h = h || m.appendChild(b.createElement('div')),
										i = (Za.exec(f) || ['', ''])[1].toLowerCase(),
										k = gb[i] || gb._default,
										h.innerHTML = k[1] + f.replace(Ya, '<$1></$2>') + k[2],
										e = k[0];
									e--;

								)
									h = h.lastChild;
								if (
									(!ka.support.leadingWhitespace && Xa.test(f) && o.push(b.createTextNode(Xa.exec(f)[0])),
									!ka.support.tbody)
								)
									for (
										f =
											'table' !== i || $a.test(f)
												? '<table>' !== k[1] || $a.test(f)
													? 0
													: h
												: h.firstChild,
											e = f && f.childNodes.length;
										e--;

									)
										ka.nodeName((j = f.childNodes[e]), 'tbody') && !j.childNodes.length && f.removeChild(j);
								for (ka.merge(o, h.childNodes), h.textContent = ''; h.firstChild; ) h.removeChild(h.firstChild);
								h = m.lastChild;
							} else o.push(b.createTextNode(f));
					for (h && m.removeChild(h), ka.support.appendChecked || ka.grep(u(o, 'input'), v), p = 0; (f = o[p++]); )
						if (
							(!d || -1 === ka.inArray(f, d)) &&
							((g = ka.contains(f.ownerDocument, f)), (h = u(m.appendChild(f), 'script')), g && r(h), c)
						)
							for (e = 0; (f = h[e++]); ) db.test(f.type || '') && c.push(f);
					return (h = null), m;
				},
				cleanData: function (a, b) {
					for (
						var c,
							d,
							e,
							f,
							g = 0,
							h = ka.expando,
							i = ka.cache,
							j = ka.support.deleteExpando,
							k = ka.event.special;
						null != (c = a[g]);
						g++
					)
						if ((b || ka.acceptData(c)) && ((e = c[h]), (f = e && i[e]))) {
							if (f.events) for (d in f.events) k[d] ? ka.event.remove(c, d) : ka.removeEvent(c, d, f.handle);
							i[e] &&
								(delete i[e],
								j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : (c[h] = null),
								ba.push(e));
						}
				},
				_evalUrl: function (a) {
					return ka.ajax({ url: a, type: 'GET', dataType: 'script', async: !1, global: !1, throws: !0 });
				},
			}),
			ka.fn.extend({
				wrapAll: function (a) {
					if (ka.isFunction(a))
						return this.each(function (b) {
							ka(this).wrapAll(a.call(this, b));
						});
					if (this[0]) {
						var b = ka(a, this[0].ownerDocument).eq(0).clone(!0);
						this[0].parentNode && b.insertBefore(this[0]),
							b
								.map(function () {
									for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
									return a;
								})
								.append(this);
					}
					return this;
				},
				wrapInner: function (a) {
					return ka.isFunction(a)
						? this.each(function (b) {
								ka(this).wrapInner(a.call(this, b));
						  })
						: this.each(function () {
								var b = ka(this),
									c = b.contents();
								c.length ? c.wrapAll(a) : b.append(a);
						  });
				},
				wrap: function (a) {
					var b = ka.isFunction(a);
					return this.each(function (c) {
						ka(this).wrapAll(b ? a.call(this, c) : a);
					});
				},
				unwrap: function () {
					return this.parent()
						.each(function () {
							ka.nodeName(this, 'body') || ka(this).replaceWith(this.childNodes);
						})
						.end();
				},
			});
		var jb,
			kb,
			lb,
			mb = /alpha\([^)]*\)/i,
			nb = /opacity\s*=\s*([^)]*)/,
			ob = /^(top|right|bottom|left)$/,
			pb = /^(none|table(?!-c[ea]).+)/,
			qb = /^margin/,
			rb = RegExp('^(' + la + ')(.*)$', 'i'),
			sb = RegExp('^(' + la + ')(?!px)[a-z%]+$', 'i'),
			tb = RegExp('^([+-])=(' + la + ')', 'i'),
			ub = { BODY: 'block' },
			vb = { position: 'absolute', visibility: 'hidden', display: 'block' },
			wb = { letterSpacing: 0, fontWeight: 400 },
			xb = ['Top', 'Right', 'Bottom', 'Left'],
			yb = ['Webkit', 'O', 'Moz', 'ms'];
		ka.fn.extend({
			css: function (a, c) {
				return ka.access(
					this,
					function (a, c, d) {
						var e,
							f,
							g = {},
							h = 0;
						if (ka.isArray(c)) {
							for (f = kb(a), e = c.length; e > h; h++) g[c[h]] = ka.css(a, c[h], !1, f);
							return g;
						}
						return d !== b ? ka.style(a, c, d) : ka.css(a, c);
					},
					a,
					c,
					arguments.length > 1,
				);
			},
			show: function () {
				return y(this, !0);
			},
			hide: function () {
				return y(this);
			},
			toggle: function (a) {
				return 'boolean' == typeof a
					? a
						? this.show()
						: this.hide()
					: this.each(function () {
							x(this) ? ka(this).show() : ka(this).hide();
					  });
			},
		}),
			ka.extend({
				cssHooks: {
					opacity: {
						get: function (a, b) {
							if (b) {
								var c = lb(a, 'opacity');
								return '' === c ? '1' : c;
							}
						},
					},
				},
				cssNumber: {
					columnCount: !0,
					fillOpacity: !0,
					fontWeight: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0,
				},
				cssProps: { float: ka.support.cssFloat ? 'cssFloat' : 'styleFloat' },
				style: function (a, c, d, e) {
					if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
						var f,
							g,
							h,
							i = ka.camelCase(c),
							j = a.style;
						if (
							((c = ka.cssProps[i] || (ka.cssProps[i] = w(j, i))),
							(h = ka.cssHooks[c] || ka.cssHooks[i]),
							d === b)
						)
							return h && 'get' in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
						if (
							((g = typeof d),
							'string' === g &&
								(f = tb.exec(d)) &&
								((d = (f[1] + 1) * f[2] + parseFloat(ka.css(a, c))), (g = 'number')),
							!(
								null == d ||
								('number' === g && isNaN(d)) ||
								('number' !== g || ka.cssNumber[i] || (d += 'px'),
								ka.support.clearCloneStyle || '' !== d || 0 !== c.indexOf('background') || (j[c] = 'inherit'),
								h && 'set' in h && (d = h.set(a, d, e)) === b)
							))
						)
							try {
								j[c] = d;
							} catch (a) {}
					}
				},
				css: function (a, c, d, e) {
					var f,
						g,
						h,
						i = ka.camelCase(c);
					return (
						(c = ka.cssProps[i] || (ka.cssProps[i] = w(a.style, i))),
						(h = ka.cssHooks[c] || ka.cssHooks[i]),
						h && 'get' in h && (g = h.get(a, !0, d)),
						g === b && (g = lb(a, c, e)),
						'normal' === g && c in wb && (g = wb[c]),
						'' === d || d ? ((f = parseFloat(g)), !0 === d || ka.isNumeric(f) ? f || 0 : g) : g
					);
				},
			}),
			a.getComputedStyle
				? ((kb = function (b) {
						return a.getComputedStyle(b, null);
				  }),
				  (lb = function (a, c, d) {
						var e,
							f,
							g,
							h = d || kb(a),
							i = h ? h.getPropertyValue(c) || h[c] : b,
							j = a.style;
						return (
							h &&
								('' !== i || ka.contains(a.ownerDocument, a) || (i = ka.style(a, c)),
								sb.test(i) &&
									qb.test(c) &&
									((e = j.width),
									(f = j.minWidth),
									(g = j.maxWidth),
									(j.minWidth = j.maxWidth = j.width = i),
									(i = h.width),
									(j.width = e),
									(j.minWidth = f),
									(j.maxWidth = g))),
							i
						);
				  }))
				: Y.documentElement.currentStyle &&
				  ((kb = function (a) {
						return a.currentStyle;
				  }),
				  (lb = function (a, c, d) {
						var e,
							f,
							g,
							h = d || kb(a),
							i = h ? h[c] : b,
							j = a.style;
						return (
							null == i && j && j[c] && (i = j[c]),
							sb.test(i) &&
								!ob.test(c) &&
								((e = j.left),
								(f = a.runtimeStyle),
								(g = f && f.left),
								g && (f.left = a.currentStyle.left),
								(j.left = 'fontSize' === c ? '1em' : i),
								(i = j.pixelLeft + 'px'),
								(j.left = e),
								g && (f.left = g)),
							'' === i ? 'auto' : i
						);
				  })),
			ka.each(['height', 'width'], function (a, c) {
				ka.cssHooks[c] = {
					get: function (a, d, e) {
						return d
							? 0 === a.offsetWidth && pb.test(ka.css(a, 'display'))
								? ka.swap(a, vb, function () {
										return B(a, c, e);
								  })
								: B(a, c, e)
							: b;
					},
					set: function (a, b, d) {
						var e = d && kb(a);
						return z(
							a,
							b,
							d ? A(a, c, d, ka.support.boxSizing && 'border-box' === ka.css(a, 'boxSizing', !1, e), e) : 0,
						);
					},
				};
			}),
			ka.support.opacity ||
				(ka.cssHooks.opacity = {
					get: function (a, b) {
						return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '')
							? 0.01 * parseFloat(RegExp.$1) + ''
							: b
							? '1'
							: '';
					},
					set: function (a, b) {
						var c = a.style,
							d = a.currentStyle,
							e = ka.isNumeric(b) ? 'alpha(opacity=' + 100 * b + ')' : '',
							f = (d && d.filter) || c.filter || '';
						(c.zoom = 1),
							((b >= 1 || '' === b) &&
								'' === ka.trim(f.replace(mb, '')) &&
								c.removeAttribute &&
								(c.removeAttribute('filter'), '' === b || (d && !d.filter))) ||
								(c.filter = mb.test(f) ? f.replace(mb, e) : f + ' ' + e);
					},
				}),
			ka(function () {
				ka.support.reliableMarginRight ||
					(ka.cssHooks.marginRight = {
						get: function (a, c) {
							return c ? ka.swap(a, { display: 'inline-block' }, lb, [a, 'marginRight']) : b;
						},
					}),
					!ka.support.pixelPosition &&
						ka.fn.position &&
						ka.each(['top', 'left'], function (a, c) {
							ka.cssHooks[c] = {
								get: function (a, d) {
									return d ? ((d = lb(a, c)), sb.test(d) ? ka(a).position()[c] + 'px' : d) : b;
								},
							};
						});
			}),
			ka.expr &&
				ka.expr.filters &&
				((ka.expr.filters.hidden = function (a) {
					return (
						(0 >= a.offsetWidth && 0 >= a.offsetHeight) ||
						(!ka.support.reliableHiddenOffsets &&
							'none' === ((a.style && a.style.display) || ka.css(a, 'display')))
					);
				}),
				(ka.expr.filters.visible = function (a) {
					return !ka.expr.filters.hidden(a);
				})),
			ka.each({ margin: '', padding: '', border: 'Width' }, function (a, b) {
				(ka.cssHooks[a + b] = {
					expand: function (c) {
						for (var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c]; 4 > d; d++)
							e[a + xb[d] + b] = f[d] || f[d - 2] || f[0];
						return e;
					},
				}),
					qb.test(a) || (ka.cssHooks[a + b].set = z);
			});
		var zb = /%20/g,
			Ab = /\[\]$/,
			Bb = /\r?\n/g,
			Cb = /^(?:submit|button|image|reset|file)$/i,
			Db = /^(?:input|select|textarea|keygen)/i;
		ka.fn.extend({
			serialize: function () {
				return ka.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					var a = ka.prop(this, 'elements');
					return a ? ka.makeArray(a) : this;
				})
					.filter(function () {
						var a = this.type;
						return (
							this.name &&
							!ka(this).is(':disabled') &&
							Db.test(this.nodeName) &&
							!Cb.test(a) &&
							(this.checked || !bb.test(a))
						);
					})
					.map(function (a, b) {
						var c = ka(this).val();
						return null == c
							? null
							: ka.isArray(c)
							? ka.map(c, function (a) {
									return { name: b.name, value: a.replace(Bb, '\r\n') };
							  })
							: { name: b.name, value: c.replace(Bb, '\r\n') };
					})
					.get();
			},
		}),
			(ka.param = function (a, c) {
				var d,
					e = [],
					f = function (a, b) {
						(b = ka.isFunction(b) ? b() : null == b ? '' : b),
							(e[e.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b));
					};
				if (
					(c === b && (c = ka.ajaxSettings && ka.ajaxSettings.traditional),
					ka.isArray(a) || (a.jquery && !ka.isPlainObject(a)))
				)
					ka.each(a, function () {
						f(this.name, this.value);
					});
				else for (d in a) E(d, a[d], c, f);
				return e.join('&').replace(zb, '+');
			}),
			ka.each(
				'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
					' ',
				),
				function (a, b) {
					ka.fn[b] = function (a, c) {
						return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
					};
				},
			),
			ka.fn.extend({
				hover: function (a, b) {
					return this.mouseenter(a).mouseleave(b || a);
				},
				bind: function (a, b, c) {
					return this.on(a, null, b, c);
				},
				unbind: function (a, b) {
					return this.off(a, null, b);
				},
				delegate: function (a, b, c, d) {
					return this.on(b, a, c, d);
				},
				undelegate: function (a, b, c) {
					return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
				},
			});
		var Eb,
			Fb,
			Gb = ka.now(),
			Hb = /\?/,
			Ib = /#.*$/,
			Jb = /([?&])_=[^&]*/,
			Kb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Lb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Mb = /^(?:GET|HEAD)$/,
			Nb = /^\/\//,
			Ob = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
			Pb = ka.fn.load,
			Qb = {},
			Rb = {},
			Sb = '*/'.concat('*');
		try {
			Fb = X.href;
		} catch (a) {
			(Fb = Y.createElement('a')), (Fb.href = ''), (Fb = Fb.href);
		}
		(Eb = Ob.exec(Fb.toLowerCase()) || []),
			(ka.fn.load = function (a, c, d) {
				if ('string' != typeof a && Pb) return Pb.apply(this, arguments);
				var e,
					f,
					g,
					h = this,
					i = a.indexOf(' ');
				return (
					i >= 0 && ((e = a.slice(i, a.length)), (a = a.slice(0, i))),
					ka.isFunction(c) ? ((d = c), (c = b)) : c && 'object' == typeof c && (g = 'POST'),
					h.length > 0 &&
						ka
							.ajax({ url: a, type: g, dataType: 'html', data: c })
							.done(function (a) {
								(f = arguments), h.html(e ? ka('<div>').append(ka.parseHTML(a)).find(e) : a);
							})
							.complete(
								d &&
									function (a, b) {
										h.each(d, f || [a.responseText, b, a]);
									},
							),
					this
				);
			}),
			ka.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (a, b) {
				ka.fn[b] = function (a) {
					return this.on(b, a);
				};
			}),
			ka.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: Fb,
					type: 'GET',
					isLocal: Lb.test(Eb[1]),
					global: !0,
					processData: !0,
					async: !0,
					contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
					accepts: {
						'*': Sb,
						text: 'text/plain',
						html: 'text/html',
						xml: 'application/xml, text/xml',
						json: 'application/json, text/javascript',
					},
					contents: { xml: /xml/, html: /html/, json: /json/ },
					responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
					converters: { '* text': String, 'text html': !0, 'text json': ka.parseJSON, 'text xml': ka.parseXML },
					flatOptions: { url: !0, context: !0 },
				},
				ajaxSetup: function (a, b) {
					return b ? H(H(a, ka.ajaxSettings), b) : H(ka.ajaxSettings, a);
				},
				ajaxPrefilter: F(Qb),
				ajaxTransport: F(Rb),
				ajax: function (a, c) {
					function d(a, c, d, e) {
						var f,
							l,
							s,
							t,
							v,
							x = c;
						2 !== u &&
							((u = 2),
							i && clearTimeout(i),
							(k = b),
							(h = e || ''),
							(w.readyState = a > 0 ? 4 : 0),
							(f = (a >= 200 && 300 > a) || 304 === a),
							d && (t = I(m, w, d)),
							(t = J(m, t, w, f)),
							f
								? (m.ifModified &&
										((v = w.getResponseHeader('Last-Modified')),
										v && (ka.lastModified[g] = v),
										(v = w.getResponseHeader('etag')) && (ka.etag[g] = v)),
								  204 === a || 'HEAD' === m.type
										? (x = 'nocontent')
										: 304 === a
										? (x = 'notmodified')
										: ((x = t.state), (l = t.data), (s = t.error), (f = !s)))
								: ((s = x), (a || !x) && ((x = 'error'), 0 > a && (a = 0))),
							(w.status = a),
							(w.statusText = (c || x) + ''),
							f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
							w.statusCode(r),
							(r = b),
							j && o.trigger(f ? 'ajaxSuccess' : 'ajaxError', [w, m, f ? l : s]),
							q.fireWith(n, [w, x]),
							j && (o.trigger('ajaxComplete', [w, m]), --ka.active || ka.event.trigger('ajaxStop')));
					}
					'object' == typeof a && ((c = a), (a = b)), (c = c || {});
					var e,
						f,
						g,
						h,
						i,
						j,
						k,
						l,
						m = ka.ajaxSetup({}, c),
						n = m.context || m,
						o = m.context && (n.nodeType || n.jquery) ? ka(n) : ka.event,
						p = ka.Deferred(),
						q = ka.Callbacks('once memory'),
						r = m.statusCode || {},
						s = {},
						t = {},
						u = 0,
						v = 'canceled',
						w = {
							readyState: 0,
							getResponseHeader: function (a) {
								var b;
								if (2 === u) {
									if (!l) for (l = {}; (b = Kb.exec(h)); ) l[b[1].toLowerCase()] = b[2];
									b = l[a.toLowerCase()];
								}
								return null == b ? null : b;
							},
							getAllResponseHeaders: function () {
								return 2 === u ? h : null;
							},
							setRequestHeader: function (a, b) {
								var c = a.toLowerCase();
								return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
							},
							overrideMimeType: function (a) {
								return u || (m.mimeType = a), this;
							},
							statusCode: function (a) {
								var b;
								if (a)
									if (2 > u) for (b in a) r[b] = [r[b], a[b]];
									else w.always(a[w.status]);
								return this;
							},
							abort: function (a) {
								var b = a || v;
								return k && k.abort(b), d(0, b), this;
							},
						};
					if (
						((p.promise(w).complete = q.add),
						(w.success = w.done),
						(w.error = w.fail),
						(m.url = ((a || m.url || Fb) + '').replace(Ib, '').replace(Nb, Eb[1] + '//')),
						(m.type = c.method || c.type || m.method || m.type),
						(m.dataTypes = ka
							.trim(m.dataType || '*')
							.toLowerCase()
							.match(ma) || ['']),
						null == m.crossDomain &&
							((e = Ob.exec(m.url.toLowerCase())),
							(m.crossDomain = !(
								!e ||
								(e[1] === Eb[1] &&
									e[2] === Eb[2] &&
									(e[3] || ('http:' === e[1] ? '80' : '443')) ===
										(Eb[3] || ('http:' === Eb[1] ? '80' : '443')))
							))),
						m.data && m.processData && 'string' != typeof m.data && (m.data = ka.param(m.data, m.traditional)),
						G(Qb, m, c, w),
						2 === u)
					)
						return w;
					(j = m.global),
						j && 0 == ka.active++ && ka.event.trigger('ajaxStart'),
						(m.type = m.type.toUpperCase()),
						(m.hasContent = !Mb.test(m.type)),
						(g = m.url),
						m.hasContent ||
							(m.data && ((g = m.url += (Hb.test(g) ? '&' : '?') + m.data), delete m.data),
							!1 === m.cache &&
								(m.url = Jb.test(g)
									? g.replace(Jb, '$1_=' + Gb++)
									: g + (Hb.test(g) ? '&' : '?') + '_=' + Gb++)),
						m.ifModified &&
							(ka.lastModified[g] && w.setRequestHeader('If-Modified-Since', ka.lastModified[g]),
							ka.etag[g] && w.setRequestHeader('If-None-Match', ka.etag[g])),
						((m.data && m.hasContent && !1 !== m.contentType) || c.contentType) &&
							w.setRequestHeader('Content-Type', m.contentType),
						w.setRequestHeader(
							'Accept',
							m.dataTypes[0] && m.accepts[m.dataTypes[0]]
								? m.accepts[m.dataTypes[0]] + ('*' !== m.dataTypes[0] ? ', ' + Sb + '; q=0.01' : '')
								: m.accepts['*'],
						);
					for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
					if (m.beforeSend && (!1 === m.beforeSend.call(n, w, m) || 2 === u)) return w.abort();
					v = 'abort';
					for (f in { success: 1, error: 1, complete: 1 }) w[f](m[f]);
					if ((k = G(Rb, m, c, w))) {
						(w.readyState = 1),
							j && o.trigger('ajaxSend', [w, m]),
							m.async &&
								m.timeout > 0 &&
								(i = setTimeout(function () {
									w.abort('timeout');
								}, m.timeout));
						try {
							(u = 1), k.send(s, d);
						} catch (a) {
							if (!(2 > u)) throw a;
							d(-1, a);
						}
					} else d(-1, 'No Transport');
					return w;
				},
				getJSON: function (a, b, c) {
					return ka.get(a, b, c, 'json');
				},
				getScript: function (a, c) {
					return ka.get(a, b, c, 'script');
				},
			}),
			ka.each(['get', 'post'], function (a, c) {
				ka[c] = function (a, d, e, f) {
					return (
						ka.isFunction(d) && ((f = f || e), (e = d), (d = b)),
						ka.ajax({ url: a, type: c, dataType: f, data: d, success: e })
					);
				};
			}),
			ka.ajaxSetup({
				accepts: {
					script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
				},
				contents: { script: /(?:java|ecma)script/ },
				converters: {
					'text script': function (a) {
						return ka.globalEval(a), a;
					},
				},
			}),
			ka.ajaxPrefilter('script', function (a) {
				a.cache === b && (a.cache = !1), a.crossDomain && ((a.type = 'GET'), (a.global = !1));
			}),
			ka.ajaxTransport('script', function (a) {
				if (a.crossDomain) {
					var c,
						d = Y.head || ka('head')[0] || Y.documentElement;
					return {
						send: function (b, e) {
							(c = Y.createElement('script')),
								(c.async = !0),
								a.scriptCharset && (c.charset = a.scriptCharset),
								(c.src = a.url),
								(c.onload = c.onreadystatechange =
									function (a, b) {
										(b || !c.readyState || /loaded|complete/.test(c.readyState)) &&
											((c.onload = c.onreadystatechange = null),
											c.parentNode && c.parentNode.removeChild(c),
											(c = null),
											b || e(200, 'success'));
									}),
								d.insertBefore(c, d.firstChild);
						},
						abort: function () {
							c && c.onload(b, !0);
						},
					};
				}
			});
		var Tb = [],
			Ub = /(=)\?(?=&|$)|\?\?/;
		ka.ajaxSetup({
			jsonp: 'callback',
			jsonpCallback: function () {
				var a = Tb.pop() || ka.expando + '_' + Gb++;
				return (this[a] = !0), a;
			},
		}),
			ka.ajaxPrefilter('json jsonp', function (c, d, e) {
				var f,
					g,
					h,
					i =
						!1 !== c.jsonp &&
						(Ub.test(c.url)
							? 'url'
							: 'string' == typeof c.data &&
							  !(c.contentType || '').indexOf('application/x-www-form-urlencoded') &&
							  Ub.test(c.data) &&
							  'data');
				return i || 'jsonp' === c.dataTypes[0]
					? ((f = c.jsonpCallback = ka.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback),
					  i
							? (c[i] = c[i].replace(Ub, '$1' + f))
							: !1 !== c.jsonp && (c.url += (Hb.test(c.url) ? '&' : '?') + c.jsonp + '=' + f),
					  (c.converters['script json'] = function () {
							return h || ka.error(f + ' was not called'), h[0];
					  }),
					  (c.dataTypes[0] = 'json'),
					  (g = a[f]),
					  (a[f] = function () {
							h = arguments;
					  }),
					  e.always(function () {
							(a[f] = g),
								c[f] && ((c.jsonpCallback = d.jsonpCallback), Tb.push(f)),
								h && ka.isFunction(g) && g(h[0]),
								(h = g = b);
					  }),
					  'script')
					: b;
			});
		var Vb,
			Wb,
			Xb = 0,
			Yb =
				a.ActiveXObject &&
				function () {
					var a;
					for (a in Vb) Vb[a](b, !0);
				};
		(ka.ajaxSettings.xhr = a.ActiveXObject
			? function () {
					return (!this.isLocal && K()) || L();
			  }
			: K),
			(Wb = ka.ajaxSettings.xhr()),
			(ka.support.cors = !!Wb && 'withCredentials' in Wb),
			(Wb = ka.support.ajax = !!Wb) &&
				ka.ajaxTransport(function (c) {
					if (!c.crossDomain || ka.support.cors) {
						var d;
						return {
							send: function (e, f) {
								var g,
									h,
									i = c.xhr();
								if (
									(c.username
										? i.open(c.type, c.url, c.async, c.username, c.password)
										: i.open(c.type, c.url, c.async),
									c.xhrFields)
								)
									for (h in c.xhrFields) i[h] = c.xhrFields[h];
								c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
									c.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest');
								try {
									for (h in e) i.setRequestHeader(h, e[h]);
								} catch (a) {}
								i.send((c.hasContent && c.data) || null),
									(d = function (a, e) {
										var h, j, k, l;
										try {
											if (d && (e || 4 === i.readyState))
												if (((d = b), g && ((i.onreadystatechange = ka.noop), Yb && delete Vb[g]), e))
													4 !== i.readyState && i.abort();
												else {
													(l = {}),
														(h = i.status),
														(j = i.getAllResponseHeaders()),
														'string' == typeof i.responseText && (l.text = i.responseText);
													try {
														k = i.statusText;
													} catch (a) {
														k = '';
													}
													h || !c.isLocal || c.crossDomain
														? 1223 === h && (h = 204)
														: (h = l.text ? 200 : 404);
												}
										} catch (a) {
											e || f(-1, a);
										}
										l && f(h, k, l, j);
									}),
									c.async
										? 4 === i.readyState
											? setTimeout(d)
											: ((g = ++Xb),
											  Yb && (Vb || ((Vb = {}), ka(a).unload(Yb)), (Vb[g] = d)),
											  (i.onreadystatechange = d))
										: d();
							},
							abort: function () {
								d && d(b, !0);
							},
						};
					}
				});
		var Zb,
			$b,
			_b = /^(?:toggle|show|hide)$/,
			ac = RegExp('^(?:([+-])=|)(' + la + ')([a-z%]*)$', 'i'),
			bc = /queueHooks$/,
			cc = [Q],
			dc = {
				'*': [
					function (a, b) {
						var c = this.createTween(a, b),
							d = c.cur(),
							e = ac.exec(b),
							f = (e && e[3]) || (ka.cssNumber[a] ? '' : 'px'),
							g = (ka.cssNumber[a] || ('px' !== f && +d)) && ac.exec(ka.css(c.elem, a)),
							h = 1,
							i = 20;
						if (g && g[3] !== f) {
							(f = f || g[3]), (e = e || []), (g = +d || 1);
							do {
								(h = h || '.5'), (g /= h), ka.style(c.elem, a, g + f);
							} while (h !== (h = c.cur() / d) && 1 !== h && --i);
						}
						return (
							e && ((g = c.start = +g || +d || 0), (c.unit = f), (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
							c
						);
					},
				],
			};
		(ka.Animation = ka.extend(O, {
			tweener: function (a, b) {
				ka.isFunction(a) ? ((b = a), (a = ['*'])) : (a = a.split(' '));
				for (var c, d = 0, e = a.length; e > d; d++) (c = a[d]), (dc[c] = dc[c] || []), dc[c].unshift(b);
			},
			prefilter: function (a, b) {
				b ? cc.unshift(a) : cc.push(a);
			},
		})),
			(ka.Tween = R),
			(R.prototype = {
				constructor: R,
				init: function (a, b, c, d, e, f) {
					(this.elem = a),
						(this.prop = c),
						(this.easing = e || 'swing'),
						(this.options = b),
						(this.start = this.now = this.cur()),
						(this.end = d),
						(this.unit = f || (ka.cssNumber[c] ? '' : 'px'));
				},
				cur: function () {
					var a = R.propHooks[this.prop];
					return a && a.get ? a.get(this) : R.propHooks._default.get(this);
				},
				run: function (a) {
					var b,
						c = R.propHooks[this.prop];
					return (
						(this.pos = b =
							this.options.duration
								? ka.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)
								: a),
						(this.now = (this.end - this.start) * b + this.start),
						this.options.step && this.options.step.call(this.elem, this.now, this),
						c && c.set ? c.set(this) : R.propHooks._default.set(this),
						this
					);
				},
			}),
			(R.prototype.init.prototype = R.prototype),
			(R.propHooks = {
				_default: {
					get: function (a) {
						var b;
						return null == a.elem[a.prop] || (a.elem.style && null != a.elem.style[a.prop])
							? ((b = ka.css(a.elem, a.prop, '')), b && 'auto' !== b ? b : 0)
							: a.elem[a.prop];
					},
					set: function (a) {
						ka.fx.step[a.prop]
							? ka.fx.step[a.prop](a)
							: a.elem.style && (null != a.elem.style[ka.cssProps[a.prop]] || ka.cssHooks[a.prop])
							? ka.style(a.elem, a.prop, a.now + a.unit)
							: (a.elem[a.prop] = a.now);
					},
				},
			}),
			(R.propHooks.scrollTop = R.propHooks.scrollLeft =
				{
					set: function (a) {
						a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
					},
				}),
			ka.each(['toggle', 'show', 'hide'], function (a, b) {
				var c = ka.fn[b];
				ka.fn[b] = function (a, d, e) {
					return null == a || 'boolean' == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e);
				};
			}),
			ka.fn.extend({
				fadeTo: function (a, b, c, d) {
					return this.filter(x).css('opacity', 0).show().end().animate({ opacity: b }, a, c, d);
				},
				animate: function (a, b, c, d) {
					var e = ka.isEmptyObject(a),
						f = ka.speed(b, c, d),
						g = function () {
							var b = O(this, ka.extend({}, a), f);
							(e || ka._data(this, 'finish')) && b.stop(!0);
						};
					return (g.finish = g), e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g);
				},
				stop: function (a, c, d) {
					var e = function (a) {
						var b = a.stop;
						delete a.stop, b(d);
					};
					return (
						'string' != typeof a && ((d = c), (c = a), (a = b)),
						c && !1 !== a && this.queue(a || 'fx', []),
						this.each(function () {
							var b = !0,
								c = null != a && a + 'queueHooks',
								f = ka.timers,
								g = ka._data(this);
							if (c) g[c] && g[c].stop && e(g[c]);
							else for (c in g) g[c] && g[c].stop && bc.test(c) && e(g[c]);
							for (c = f.length; c--; )
								f[c].elem !== this ||
									(null != a && f[c].queue !== a) ||
									(f[c].anim.stop(d), (b = !1), f.splice(c, 1));
							(b || !d) && ka.dequeue(this, a);
						})
					);
				},
				finish: function (a) {
					return (
						!1 !== a && (a = a || 'fx'),
						this.each(function () {
							var b,
								c = ka._data(this),
								d = c[a + 'queue'],
								e = c[a + 'queueHooks'],
								f = ka.timers,
								g = d ? d.length : 0;
							for (
								c.finish = !0, ka.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length;
								b--;

							)
								f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
							for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
							delete c.finish;
						})
					);
				},
			}),
			ka.each(
				{
					slideDown: S('show'),
					slideUp: S('hide'),
					slideToggle: S('toggle'),
					fadeIn: { opacity: 'show' },
					fadeOut: { opacity: 'hide' },
					fadeToggle: { opacity: 'toggle' },
				},
				function (a, b) {
					ka.fn[a] = function (a, c, d) {
						return this.animate(b, a, c, d);
					};
				},
			),
			(ka.speed = function (a, b, c) {
				var d =
					a && 'object' == typeof a
						? ka.extend({}, a)
						: {
								complete: c || (!c && b) || (ka.isFunction(a) && a),
								duration: a,
								easing: (c && b) || (b && !ka.isFunction(b) && b),
						  };
				return (
					(d.duration = ka.fx.off
						? 0
						: 'number' == typeof d.duration
						? d.duration
						: d.duration in ka.fx.speeds
						? ka.fx.speeds[d.duration]
						: ka.fx.speeds._default),
					(null == d.queue || !0 === d.queue) && (d.queue = 'fx'),
					(d.old = d.complete),
					(d.complete = function () {
						ka.isFunction(d.old) && d.old.call(this), d.queue && ka.dequeue(this, d.queue);
					}),
					d
				);
			}),
			(ka.easing = {
				linear: function (a) {
					return a;
				},
				swing: function (a) {
					return 0.5 - Math.cos(a * Math.PI) / 2;
				},
			}),
			(ka.timers = []),
			(ka.fx = R.prototype.init),
			(ka.fx.tick = function () {
				var a,
					c = ka.timers,
					d = 0;
				for (Zb = ka.now(); c.length > d; d++) (a = c[d])() || c[d] !== a || c.splice(d--, 1);
				c.length || ka.fx.stop(), (Zb = b);
			}),
			(ka.fx.timer = function (a) {
				a() && ka.timers.push(a) && ka.fx.start();
			}),
			(ka.fx.interval = 13),
			(ka.fx.start = function () {
				$b || ($b = setInterval(ka.fx.tick, ka.fx.interval));
			}),
			(ka.fx.stop = function () {
				clearInterval($b), ($b = null);
			}),
			(ka.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
			(ka.fx.step = {}),
			ka.expr &&
				ka.expr.filters &&
				(ka.expr.filters.animated = function (a) {
					return ka.grep(ka.timers, function (b) {
						return a === b.elem;
					}).length;
				}),
			(ka.fn.offset = function (a) {
				if (arguments.length)
					return a === b
						? this
						: this.each(function (b) {
								ka.offset.setOffset(this, a, b);
						  });
				var c,
					d,
					e = { top: 0, left: 0 },
					f = this[0],
					g = f && f.ownerDocument;
				return g
					? ((c = g.documentElement),
					  ka.contains(c, f)
							? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()),
							  (d = T(g)),
							  {
									top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
									left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0),
							  })
							: e)
					: void 0;
			}),
			(ka.offset = {
				setOffset: function (a, b, c) {
					var d = ka.css(a, 'position');
					'static' === d && (a.style.position = 'relative');
					var e,
						f,
						g = ka(a),
						h = g.offset(),
						i = ka.css(a, 'top'),
						j = ka.css(a, 'left'),
						k = ('absolute' === d || 'fixed' === d) && ka.inArray('auto', [i, j]) > -1,
						l = {},
						m = {};
					k
						? ((m = g.position()), (e = m.top), (f = m.left))
						: ((e = parseFloat(i) || 0), (f = parseFloat(j) || 0)),
						ka.isFunction(b) && (b = b.call(a, c, h)),
						null != b.top && (l.top = b.top - h.top + e),
						null != b.left && (l.left = b.left - h.left + f),
						'using' in b ? b.using.call(a, l) : g.css(l);
				},
			}),
			ka.fn.extend({
				position: function () {
					if (this[0]) {
						var a,
							b,
							c = { top: 0, left: 0 },
							d = this[0];
						return (
							'fixed' === ka.css(d, 'position')
								? (b = d.getBoundingClientRect())
								: ((a = this.offsetParent()),
								  (b = this.offset()),
								  ka.nodeName(a[0], 'html') || (c = a.offset()),
								  (c.top += ka.css(a[0], 'borderTopWidth', !0)),
								  (c.left += ka.css(a[0], 'borderLeftWidth', !0))),
							{
								top: b.top - c.top - ka.css(d, 'marginTop', !0),
								left: b.left - c.left - ka.css(d, 'marginLeft', !0),
							}
						);
					}
				},
				offsetParent: function () {
					return this.map(function () {
						for (
							var a = this.offsetParent || Z;
							a && !ka.nodeName(a, 'html') && 'static' === ka.css(a, 'position');

						)
							a = a.offsetParent;
						return a || Z;
					});
				},
			}),
			ka.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (a, c) {
				var d = /Y/.test(c);
				ka.fn[a] = function (e) {
					return ka.access(
						this,
						function (a, e, f) {
							var g = T(a);
							return f === b
								? g
									? c in g
										? g[c]
										: g.document.documentElement[e]
									: a[e]
								: (g ? g.scrollTo(d ? ka(g).scrollLeft() : f, d ? f : ka(g).scrollTop()) : (a[e] = f), b);
						},
						a,
						e,
						arguments.length,
						null,
					);
				};
			}),
			ka.each({ Height: 'height', Width: 'width' }, function (a, c) {
				ka.each({ padding: 'inner' + a, content: c, '': 'outer' + a }, function (d, e) {
					ka.fn[e] = function (e, f) {
						var g = arguments.length && (d || 'boolean' != typeof e),
							h = d || (!0 === e || !0 === f ? 'margin' : 'border');
						return ka.access(
							this,
							function (c, d, e) {
								var f;
								return ka.isWindow(c)
									? c.document.documentElement['client' + a]
									: 9 === c.nodeType
									? ((f = c.documentElement),
									  Math.max(
											c.body['scroll' + a],
											f['scroll' + a],
											c.body['offset' + a],
											f['offset' + a],
											f['client' + a],
									  ))
									: e === b
									? ka.css(c, d, h)
									: ka.style(c, d, e, h);
							},
							c,
							g ? e : b,
							g,
							null,
						);
					};
				});
			}),
			(ka.fn.size = function () {
				return this.length;
			}),
			(ka.fn.andSelf = ka.fn.addBack),
			'object' == typeof module && module && 'object' == typeof module.exports
				? (module.exports = ka)
				: ((a.jQuery = a.$ = ka),
				  'function' == typeof define &&
						define.amd &&
						define('jquery', [], function () {
							return ka;
						}));
	})(window),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('jquery-bridget/jquery-bridget', ['jquery'], function (c) {
					return b(a, c);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('jquery')))
			: (a.jQueryBridget = b(a, a.jQuery));
	})(window, function (a, b) {
		'use strict';
		function c(c, f, h) {
			(h = h || b || a.jQuery) &&
				(f.prototype.option ||
					(f.prototype.option = function (a) {
						h.isPlainObject(a) && (this.options = h.extend(!0, this.options, a));
					}),
				(h.fn[c] = function (a) {
					return 'string' == typeof a
						? (function (a, b, d) {
								var e,
									f = '$().' + c + '("' + b + '")';
								return (
									a.each(function (a, i) {
										var j = h.data(i, c);
										if (j) {
											var k = j[b];
											if (k && '_' != b.charAt(0)) {
												var l = k.apply(j, d);
												e = void 0 === e ? l : e;
											} else g(f + ' is not a valid method');
										} else g(c + ' not initialized. Cannot call methods, i.e. ' + f);
									}),
									void 0 !== e ? e : a
								);
						  })(this, a, e.call(arguments, 1))
						: ((function (a, b) {
								a.each(function (a, d) {
									var e = h.data(d, c);
									e ? (e.option(b), e._init()) : ((e = new f(d, b)), h.data(d, c, e));
								});
						  })(this, a),
						  this);
				}),
				d(h));
		}
		function d(a) {
			!a || (a && a.bridget) || (a.bridget = c);
		}
		var e = Array.prototype.slice,
			f = a.console,
			g =
				void 0 === f
					? function () {}
					: function (a) {
							f.error(a);
					  };
		return d(b || a.jQuery), c;
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('ev-emitter/ev-emitter', b)
			: 'object' == typeof module && module.exports
			? (module.exports = b())
			: (a.EvEmitter = b());
	})('undefined' != typeof window ? window : this, function () {
		function a() {}
		var b = a.prototype;
		return (
			(b.on = function (a, b) {
				if (a && b) {
					var c = (this._events = this._events || {}),
						d = (c[a] = c[a] || []);
					return -1 == d.indexOf(b) && d.push(b), this;
				}
			}),
			(b.once = function (a, b) {
				if (a && b) {
					this.on(a, b);
					var c = (this._onceEvents = this._onceEvents || {});
					return ((c[a] = c[a] || {})[b] = !0), this;
				}
			}),
			(b.off = function (a, b) {
				var c = this._events && this._events[a];
				if (c && c.length) {
					var d = c.indexOf(b);
					return -1 != d && c.splice(d, 1), this;
				}
			}),
			(b.emitEvent = function (a, b) {
				var c = this._events && this._events[a];
				if (c && c.length) {
					(c = c.slice(0)), (b = b || []);
					for (var d = this._onceEvents && this._onceEvents[a], e = 0; e < c.length; e++) {
						var f = c[e];
						d && d[f] && (this.off(a, f), delete d[f]), f.apply(this, b);
					}
					return this;
				}
			}),
			(b.allOff = function () {
				delete this._events, delete this._onceEvents;
			}),
			a
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('get-size/get-size', b)
			: 'object' == typeof module && module.exports
			? (module.exports = b())
			: (a.getSize = b());
	})(window, function () {
		'use strict';
		function a(a) {
			var b = parseFloat(a);
			return -1 == a.indexOf('%') && !isNaN(b) && b;
		}
		function b(a) {
			var b = getComputedStyle(a);
			return (
				b ||
					e(
						'Style returned ' +
							b +
							'. Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1',
					),
				b
			);
		}
		function c(e) {
			if (
				((function () {
					if (!h) {
						h = !0;
						var e = document.createElement('div');
						(e.style.width = '200px'),
							(e.style.padding = '1px 2px 3px 4px'),
							(e.style.borderStyle = 'solid'),
							(e.style.borderWidth = '1px 2px 3px 4px'),
							(e.style.boxSizing = 'border-box');
						var f = document.body || document.documentElement;
						f.appendChild(e);
						var g = b(e);
						(d = 200 == Math.round(a(g.width))), (c.isBoxSizeOuter = d), f.removeChild(e);
					}
				})(),
				'string' == typeof e && (e = document.querySelector(e)),
				e && 'object' == typeof e && e.nodeType)
			) {
				var i = b(e);
				if ('none' == i.display)
					return (function () {
						for (
							var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 },
								b = 0;
							b < g;
							b++
						)
							a[f[b]] = 0;
						return a;
					})();
				var j = {};
				(j.width = e.offsetWidth), (j.height = e.offsetHeight);
				for (var k = (j.isBorderBox = 'border-box' == i.boxSizing), l = 0; l < g; l++) {
					var m = f[l],
						n = i[m],
						o = parseFloat(n);
					j[m] = isNaN(o) ? 0 : o;
				}
				var p = j.paddingLeft + j.paddingRight,
					q = j.paddingTop + j.paddingBottom,
					r = j.marginLeft + j.marginRight,
					s = j.marginTop + j.marginBottom,
					t = j.borderLeftWidth + j.borderRightWidth,
					u = j.borderTopWidth + j.borderBottomWidth,
					v = k && d,
					w = a(i.width);
				!1 !== w && (j.width = w + (v ? 0 : p + t));
				var x = a(i.height);
				return (
					!1 !== x && (j.height = x + (v ? 0 : q + u)),
					(j.innerWidth = j.width - (p + t)),
					(j.innerHeight = j.height - (q + u)),
					(j.outerWidth = j.width + r),
					(j.outerHeight = j.height + s),
					j
				);
			}
		}
		var d,
			e =
				'undefined' == typeof console
					? function () {}
					: function (a) {
							console.error(a);
					  },
			f = [
				'paddingLeft',
				'paddingRight',
				'paddingTop',
				'paddingBottom',
				'marginLeft',
				'marginRight',
				'marginTop',
				'marginBottom',
				'borderLeftWidth',
				'borderRightWidth',
				'borderTopWidth',
				'borderBottomWidth',
			],
			g = f.length,
			h = !1;
		return c;
	}),
	(function (a, b) {
		'use strict';
		'function' == typeof define && define.amd
			? define('desandro-matches-selector/matches-selector', b)
			: 'object' == typeof module && module.exports
			? (module.exports = b())
			: (a.matchesSelector = b());
	})(window, function () {
		'use strict';
		var a = (function () {
			var a = window.Element.prototype;
			if (a.matches) return 'matches';
			if (a.matchesSelector) return 'matchesSelector';
			for (var b = ['webkit', 'moz', 'ms', 'o'], c = 0; c < b.length; c++) {
				var d = b[c] + 'MatchesSelector';
				if (a[d]) return d;
			}
		})();
		return function (b, c) {
			return b[a](c);
		};
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function (c) {
					return b(a, c);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('desandro-matches-selector')))
			: (a.fizzyUIUtils = b(a, a.matchesSelector));
	})(window, function (a, b) {
		var c = {
				extend: function (a, b) {
					for (var c in b) a[c] = b[c];
					return a;
				},
				modulo: function (a, b) {
					return ((a % b) + b) % b;
				},
			},
			d = Array.prototype.slice;
		(c.makeArray = function (a) {
			return Array.isArray(a)
				? a
				: null == a
				? []
				: 'object' == typeof a && 'number' == typeof a.length
				? d.call(a)
				: [a];
		}),
			(c.removeFrom = function (a, b) {
				var c = a.indexOf(b);
				-1 != c && a.splice(c, 1);
			}),
			(c.getParent = function (a, c) {
				for (; a.parentNode && a != document.body; ) if (((a = a.parentNode), b(a, c))) return a;
			}),
			(c.getQueryElement = function (a) {
				return 'string' == typeof a ? document.querySelector(a) : a;
			}),
			(c.handleEvent = function (a) {
				var b = 'on' + a.type;
				this[b] && this[b](a);
			}),
			(c.filterFindElements = function (a, d) {
				a = c.makeArray(a);
				var e = [];
				return (
					a.forEach(function (a) {
						if (a instanceof HTMLElement)
							if (d) {
								b(a, d) && e.push(a);
								for (var c = a.querySelectorAll(d), f = 0; f < c.length; f++) e.push(c[f]);
							} else e.push(a);
					}),
					e
				);
			}),
			(c.debounceMethod = function (a, b, c) {
				c = c || 100;
				var d = a.prototype[b],
					e = b + 'Timeout';
				a.prototype[b] = function () {
					var a = this[e];
					clearTimeout(a);
					var b = arguments,
						f = this;
					this[e] = setTimeout(function () {
						d.apply(f, b), delete f[e];
					}, c);
				};
			}),
			(c.docReady = function (a) {
				var b = document.readyState;
				'complete' == b || 'interactive' == b ? setTimeout(a) : document.addEventListener('DOMContentLoaded', a);
			}),
			(c.toDashed = function (a) {
				return a
					.replace(/(.)([A-Z])/g, function (a, b, c) {
						return b + '-' + c;
					})
					.toLowerCase();
			});
		var e = a.console;
		return (
			(c.htmlInit = function (b, d) {
				c.docReady(function () {
					var f = c.toDashed(d),
						g = 'data-' + f,
						h = document.querySelectorAll('[' + g + ']'),
						i = document.querySelectorAll('.js-' + f),
						j = c.makeArray(h).concat(c.makeArray(i)),
						k = g + '-options',
						l = a.jQuery;
					j.forEach(function (a) {
						var c,
							f = a.getAttribute(g) || a.getAttribute(k);
						try {
							c = f && JSON.parse(f);
						} catch (c) {
							return void (e && e.error('Error parsing ' + g + ' on ' + a.className + ': ' + c));
						}
						var h = new b(a, c);
						l && l.data(a, d, h);
					});
				});
			}),
			c
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('flickity/js/cell', ['get-size/get-size'], function (c) {
					return b(a, c);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('get-size')))
			: ((a.Flickity = a.Flickity || {}), (a.Flickity.Cell = b(a, a.getSize)));
	})(window, function (a, b) {
		function c(a, b) {
			(this.element = a), (this.parent = b), this.create();
		}
		var d = c.prototype;
		return (
			(d.create = function () {
				(this.element.style.position = 'absolute'),
					this.element.setAttribute('aria-hidden', 'true'),
					(this.x = 0),
					(this.shift = 0);
			}),
			(d.destroy = function () {
				this.unselect(), (this.element.style.position = '');
				var a = this.parent.originSide;
				this.element.style[a] = '';
			}),
			(d.getSize = function () {
				this.size = b(this.element);
			}),
			(d.setPosition = function (a) {
				(this.x = a), this.updateTarget(), this.renderPosition(a);
			}),
			(d.updateTarget = d.setDefaultTarget =
				function () {
					var a = 'left' == this.parent.originSide ? 'marginLeft' : 'marginRight';
					this.target = this.x + this.size[a] + this.size.width * this.parent.cellAlign;
				}),
			(d.renderPosition = function (a) {
				var b = this.parent.originSide;
				this.element.style[b] = this.parent.getPositionValue(a);
			}),
			(d.select = function () {
				this.element.classList.add('is-selected'), this.element.removeAttribute('aria-hidden');
			}),
			(d.unselect = function () {
				this.element.classList.remove('is-selected'), this.element.setAttribute('aria-hidden', 'true');
			}),
			(d.wrapShift = function (a) {
				(this.shift = a), this.renderPosition(this.x + this.parent.slideableWidth * a);
			}),
			(d.remove = function () {
				this.element.parentNode.removeChild(this.element);
			}),
			c
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('flickity/js/slide', b)
			: 'object' == typeof module && module.exports
			? (module.exports = b())
			: ((a.Flickity = a.Flickity || {}), (a.Flickity.Slide = b()));
	})(window, function () {
		'use strict';
		function a(a) {
			(this.parent = a),
				(this.isOriginLeft = 'left' == a.originSide),
				(this.cells = []),
				(this.outerWidth = 0),
				(this.height = 0);
		}
		var b = a.prototype;
		return (
			(b.addCell = function (a) {
				if (
					(this.cells.push(a),
					(this.outerWidth += a.size.outerWidth),
					(this.height = Math.max(a.size.outerHeight, this.height)),
					1 == this.cells.length)
				) {
					this.x = a.x;
					var b = this.isOriginLeft ? 'marginLeft' : 'marginRight';
					this.firstMargin = a.size[b];
				}
			}),
			(b.updateTarget = function () {
				var a = this.isOriginLeft ? 'marginRight' : 'marginLeft',
					b = this.getLastCell(),
					c = b ? b.size[a] : 0,
					d = this.outerWidth - (this.firstMargin + c);
				this.target = this.x + this.firstMargin + d * this.parent.cellAlign;
			}),
			(b.getLastCell = function () {
				return this.cells[this.cells.length - 1];
			}),
			(b.select = function () {
				this.cells.forEach(function (a) {
					a.select();
				});
			}),
			(b.unselect = function () {
				this.cells.forEach(function (a) {
					a.unselect();
				});
			}),
			(b.getCellElements = function () {
				return this.cells.map(function (a) {
					return a.element;
				});
			}),
			a
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('flickity/js/animate', ['fizzy-ui-utils/utils'], function (c) {
					return b(a, c);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('fizzy-ui-utils')))
			: ((a.Flickity = a.Flickity || {}), (a.Flickity.animatePrototype = b(a, a.fizzyUIUtils)));
	})(window, function (a, b) {
		return {
			startAnimation: function () {
				this.isAnimating || ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
			},
			animate: function () {
				this.applyDragForce(), this.applySelectedAttraction();
				var a = this.x;
				if ((this.integratePhysics(), this.positionSlider(), this.settle(a), this.isAnimating)) {
					var b = this;
					requestAnimationFrame(function () {
						b.animate();
					});
				}
			},
			positionSlider: function () {
				var a = this.x;
				this.options.wrapAround &&
					1 < this.cells.length &&
					((a = b.modulo(a, this.slideableWidth)), (a -= this.slideableWidth), this.shiftWrapCells(a)),
					this.setTranslateX(a, this.isAnimating),
					this.dispatchScrollEvent();
			},
			setTranslateX: function (a, b) {
				(a += this.cursorPosition), (a = this.options.rightToLeft ? -a : a);
				var c = this.getPositionValue(a);
				this.slider.style.transform = b ? 'translate3d(' + c + ',0,0)' : 'translateX(' + c + ')';
			},
			dispatchScrollEvent: function () {
				var a = this.slides[0];
				if (a) {
					var b = -this.x - a.target,
						c = b / this.slidesWidth;
					this.dispatchEvent('scroll', null, [c, b]);
				}
			},
			positionSliderAtSelected: function () {
				this.cells.length && ((this.x = -this.selectedSlide.target), (this.velocity = 0), this.positionSlider());
			},
			getPositionValue: function (a) {
				return this.options.percentPosition
					? 0.01 * Math.round((a / this.size.innerWidth) * 1e4) + '%'
					: Math.round(a) + 'px';
			},
			settle: function (a) {
				this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * a) || this.restingFrames++,
					2 < this.restingFrames &&
						((this.isAnimating = !1),
						delete this.isFreeScrolling,
						this.positionSlider(),
						this.dispatchEvent('settle', null, [this.selectedIndex]));
			},
			shiftWrapCells: function (a) {
				var b = this.cursorPosition + a;
				this._shiftCells(this.beforeShiftCells, b, -1);
				var c = this.size.innerWidth - (a + this.slideableWidth + this.cursorPosition);
				this._shiftCells(this.afterShiftCells, c, 1);
			},
			_shiftCells: function (a, b, c) {
				for (var d = 0; d < a.length; d++) {
					var e = a[d],
						f = 0 < b ? c : 0;
					e.wrapShift(f), (b -= e.size.outerWidth);
				}
			},
			_unshiftCells: function (a) {
				if (a && a.length) for (var b = 0; b < a.length; b++) a[b].wrapShift(0);
			},
			integratePhysics: function () {
				(this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
			},
			applyForce: function (a) {
				this.velocity += a;
			},
			getFrictionFactor: function () {
				return 1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction'];
			},
			getRestingPosition: function () {
				return this.x + this.velocity / (1 - this.getFrictionFactor());
			},
			applyDragForce: function () {
				if (this.isDraggable && this.isPointerDown) {
					var a = this.dragX - this.x - this.velocity;
					this.applyForce(a);
				}
			},
			applySelectedAttraction: function () {
				if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
					var a = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
					this.applyForce(a);
				}
			},
		};
	}),
	(function (a, b) {
		if ('function' == typeof define && define.amd)
			define('flickity/js/flickity', [
				'ev-emitter/ev-emitter',
				'get-size/get-size',
				'fizzy-ui-utils/utils',
				'./cell',
				'./slide',
				'./animate',
			], function (c, d, e, f, g, h) {
				return b(a, c, d, e, f, g, h);
			});
		else if ('object' == typeof module && module.exports)
			module.exports = b(
				a,
				require('ev-emitter'),
				require('get-size'),
				require('fizzy-ui-utils'),
				require('./cell'),
				require('./slide'),
				require('./animate'),
			);
		else {
			var c = a.Flickity;
			a.Flickity = b(a, a.EvEmitter, a.getSize, a.fizzyUIUtils, c.Cell, c.Slide, c.animatePrototype);
		}
	})(window, function (a, b, c, d, e, f, g) {
		function h(a, b) {
			for (a = d.makeArray(a); a.length; ) b.appendChild(a.shift());
		}
		function i(a, b) {
			var c = d.getQueryElement(a);
			if (c) {
				if (((this.element = c), this.element.flickityGUID)) {
					var e = n[this.element.flickityGUID];
					return e.option(b), e;
				}
				j && (this.$element = j(this.element)),
					(this.options = d.extend({}, this.constructor.defaults)),
					this.option(b),
					this._create();
			} else l && l.error('Bad element for Flickity: ' + (c || a));
		}
		var j = a.jQuery,
			k = a.getComputedStyle,
			l = a.console,
			m = 0,
			n = {};
		(i.defaults = {
			accessibility: !0,
			cellAlign: 'center',
			freeScrollFriction: 0.075,
			friction: 0.28,
			namespaceJQueryEvents: !0,
			percentPosition: !0,
			resize: !0,
			selectedAttraction: 0.025,
			setGallerySize: !0,
		}),
			(i.createMethods = []);
		var o = i.prototype;
		d.extend(o, b.prototype),
			(o._create = function () {
				var b = (this.guid = ++m);
				for (var c in ((this.element.flickityGUID = b),
				((n[b] = this).selectedIndex = 0),
				(this.restingFrames = 0),
				(this.x = 0),
				(this.velocity = 0),
				(this.originSide = this.options.rightToLeft ? 'right' : 'left'),
				(this.viewport = document.createElement('div')),
				(this.viewport.className = 'flickity-viewport'),
				this._createSlider(),
				(this.options.resize || this.options.watchCSS) && a.addEventListener('resize', this),
				this.options.on)) {
					var d = this.options.on[c];
					this.on(c, d);
				}
				i.createMethods.forEach(function (a) {
					this[a]();
				}, this),
					this.options.watchCSS ? this.watchCSS() : this.activate();
			}),
			(o.option = function (a) {
				d.extend(this.options, a);
			}),
			(o.activate = function () {
				this.isActive ||
					((this.isActive = !0),
					this.element.classList.add('flickity-enabled'),
					this.options.rightToLeft && this.element.classList.add('flickity-rtl'),
					this.getSize(),
					h(this._filterFindCellElements(this.element.children), this.slider),
					this.viewport.appendChild(this.slider),
					this.element.appendChild(this.viewport),
					this.reloadCells(),
					this.options.accessibility &&
						((this.element.tabIndex = 0), this.element.addEventListener('keydown', this)),
					this.emitEvent('activate'),
					this.selectInitialIndex(),
					(this.isInitActivated = !0),
					this.dispatchEvent('ready'));
			}),
			(o._createSlider = function () {
				var a = document.createElement('div');
				(a.className = 'flickity-slider'), (a.style[this.originSide] = 0), (this.slider = a);
			}),
			(o._filterFindCellElements = function (a) {
				return d.filterFindElements(a, this.options.cellSelector);
			}),
			(o.reloadCells = function () {
				(this.cells = this._makeCells(this.slider.children)),
					this.positionCells(),
					this._getWrapShiftCells(),
					this.setGallerySize();
			}),
			(o._makeCells = function (a) {
				return this._filterFindCellElements(a).map(function (a) {
					return new e(a, this);
				}, this);
			}),
			(o.getLastCell = function () {
				return this.cells[this.cells.length - 1];
			}),
			(o.getLastSlide = function () {
				return this.slides[this.slides.length - 1];
			}),
			(o.positionCells = function () {
				this._sizeCells(this.cells), this._positionCells(0);
			}),
			(o._positionCells = function (a) {
				(a = a || 0), (this.maxCellHeight = (a && this.maxCellHeight) || 0);
				var b = 0;
				if (0 < a) {
					var c = this.cells[a - 1];
					b = c.x + c.size.outerWidth;
				}
				for (var d = this.cells.length, e = a; e < d; e++) {
					var f = this.cells[e];
					f.setPosition(b),
						(b += f.size.outerWidth),
						(this.maxCellHeight = Math.max(f.size.outerHeight, this.maxCellHeight));
				}
				(this.slideableWidth = b),
					this.updateSlides(),
					this._containSlides(),
					(this.slidesWidth = d ? this.getLastSlide().target - this.slides[0].target : 0);
			}),
			(o._sizeCells = function (a) {
				a.forEach(function (a) {
					a.getSize();
				});
			}),
			(o.updateSlides = function () {
				if (((this.slides = []), this.cells.length)) {
					var a = new f(this);
					this.slides.push(a);
					var b = 'left' == this.originSide ? 'marginRight' : 'marginLeft',
						c = this._getCanCellFit();
					this.cells.forEach(function (d, e) {
						if (a.cells.length) {
							var g = a.outerWidth - a.firstMargin + (d.size.outerWidth - d.size[b]);
							c.call(this, e, g) || (a.updateTarget(), (a = new f(this)), this.slides.push(a)), a.addCell(d);
						} else a.addCell(d);
					}, this),
						a.updateTarget(),
						this.updateSelectedSlide();
				}
			}),
			(o._getCanCellFit = function () {
				var a = this.options.groupCells;
				if (!a)
					return function () {
						return !1;
					};
				if ('number' == typeof a) {
					var b = parseInt(a, 10);
					return function (a) {
						return a % b != 0;
					};
				}
				var c = 'string' == typeof a && a.match(/^(\d+)%$/),
					d = c ? parseInt(c[1], 10) / 100 : 1;
				return function (a, b) {
					return b <= (this.size.innerWidth + 1) * d;
				};
			}),
			(o._init = o.reposition =
				function () {
					this.positionCells(), this.positionSliderAtSelected();
				}),
			(o.getSize = function () {
				(this.size = c(this.element)),
					this.setCellAlign(),
					(this.cursorPosition = this.size.innerWidth * this.cellAlign);
			});
		var p = { center: { left: 0.5, right: 0.5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };
		return (
			(o.setCellAlign = function () {
				var a = p[this.options.cellAlign];
				this.cellAlign = a ? a[this.originSide] : this.options.cellAlign;
			}),
			(o.setGallerySize = function () {
				if (this.options.setGallerySize) {
					var a =
						this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
					this.viewport.style.height = a + 'px';
				}
			}),
			(o._getWrapShiftCells = function () {
				if (this.options.wrapAround) {
					this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
					var a = this.cursorPosition,
						b = this.cells.length - 1;
					(this.beforeShiftCells = this._getGapCells(a, b, -1)),
						(a = this.size.innerWidth - this.cursorPosition),
						(this.afterShiftCells = this._getGapCells(a, 0, 1));
				}
			}),
			(o._getGapCells = function (a, b, c) {
				for (var d = []; 0 < a; ) {
					var e = this.cells[b];
					if (!e) break;
					d.push(e), (b += c), (a -= e.size.outerWidth);
				}
				return d;
			}),
			(o._containSlides = function () {
				if (this.options.contain && !this.options.wrapAround && this.cells.length) {
					var a = this.options.rightToLeft,
						b = a ? 'marginRight' : 'marginLeft',
						c = a ? 'marginLeft' : 'marginRight',
						d = this.slideableWidth - this.getLastCell().size[c],
						e = d < this.size.innerWidth,
						f = this.cursorPosition + this.cells[0].size[b],
						g = d - this.size.innerWidth * (1 - this.cellAlign);
					this.slides.forEach(function (a) {
						e
							? (a.target = d * this.cellAlign)
							: ((a.target = Math.max(a.target, f)), (a.target = Math.min(a.target, g)));
					}, this);
				}
			}),
			(o.dispatchEvent = function (a, b, c) {
				var d = b ? [b].concat(c) : c;
				if ((this.emitEvent(a, d), j && this.$element)) {
					var e = (a += this.options.namespaceJQueryEvents ? '.flickity' : '');
					if (b) {
						var f = j.Event(b);
						(f.type = a), (e = f);
					}
					this.$element.trigger(e, c);
				}
			}),
			(o.select = function (a, b, c) {
				if (
					this.isActive &&
					((a = parseInt(a, 10)),
					this._wrapSelect(a),
					(this.options.wrapAround || b) && (a = d.modulo(a, this.slides.length)),
					this.slides[a])
				) {
					var e = this.selectedIndex;
					(this.selectedIndex = a),
						this.updateSelectedSlide(),
						c ? this.positionSliderAtSelected() : this.startAnimation(),
						this.options.adaptiveHeight && this.setGallerySize(),
						this.dispatchEvent('select', null, [a]),
						a != e && this.dispatchEvent('change', null, [a]),
						this.dispatchEvent('cellSelect');
				}
			}),
			(o._wrapSelect = function (a) {
				var b = this.slides.length;
				if (!(this.options.wrapAround && 1 < b)) return a;
				var c = d.modulo(a, b),
					e = Math.abs(c - this.selectedIndex),
					f = Math.abs(c + b - this.selectedIndex),
					g = Math.abs(c - b - this.selectedIndex);
				!this.isDragSelect && f < e ? (a += b) : !this.isDragSelect && g < e && (a -= b),
					a < 0 ? (this.x -= this.slideableWidth) : b <= a && (this.x += this.slideableWidth);
			}),
			(o.previous = function (a, b) {
				this.select(this.selectedIndex - 1, a, b);
			}),
			(o.next = function (a, b) {
				this.select(this.selectedIndex + 1, a, b);
			}),
			(o.updateSelectedSlide = function () {
				var a = this.slides[this.selectedIndex];
				a &&
					(this.unselectSelectedSlide(),
					(this.selectedSlide = a).select(),
					(this.selectedCells = a.cells),
					(this.selectedElements = a.getCellElements()),
					(this.selectedCell = a.cells[0]),
					(this.selectedElement = this.selectedElements[0]));
			}),
			(o.unselectSelectedSlide = function () {
				this.selectedSlide && this.selectedSlide.unselect();
			}),
			(o.selectInitialIndex = function () {
				var a = this.options.initialIndex;
				if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
				else {
					if (a && 'string' == typeof a && this.queryCell(a)) return void this.selectCell(a, !1, !0);
					var b = 0;
					a && this.slides[a] && (b = a), this.select(b, !1, !0);
				}
			}),
			(o.selectCell = function (a, b, c) {
				var d = this.queryCell(a);
				if (d) {
					var e = this.getCellSlideIndex(d);
					this.select(e, b, c);
				}
			}),
			(o.getCellSlideIndex = function (a) {
				for (var b = 0; b < this.slides.length; b++) if (-1 != this.slides[b].cells.indexOf(a)) return b;
			}),
			(o.getCell = function (a) {
				for (var b = 0; b < this.cells.length; b++) {
					var c = this.cells[b];
					if (c.element == a) return c;
				}
			}),
			(o.getCells = function (a) {
				a = d.makeArray(a);
				var b = [];
				return (
					a.forEach(function (a) {
						var c = this.getCell(a);
						c && b.push(c);
					}, this),
					b
				);
			}),
			(o.getCellElements = function () {
				return this.cells.map(function (a) {
					return a.element;
				});
			}),
			(o.getParentCell = function (a) {
				return this.getCell(a) || ((a = d.getParent(a, '.flickity-slider > *')), this.getCell(a));
			}),
			(o.getAdjacentCellElements = function (a, b) {
				if (!a) return this.selectedSlide.getCellElements();
				b = void 0 === b ? this.selectedIndex : b;
				var c = this.slides.length;
				if (c <= 1 + 2 * a) return this.getCellElements();
				for (var e = [], f = b - a; f <= b + a; f++) {
					var g = this.options.wrapAround ? d.modulo(f, c) : f,
						h = this.slides[g];
					h && (e = e.concat(h.getCellElements()));
				}
				return e;
			}),
			(o.queryCell = function (a) {
				if ('number' == typeof a) return this.cells[a];
				if ('string' == typeof a) {
					if (a.match(/^[#\.]?[\d\/]/)) return;
					a = this.element.querySelector(a);
				}
				return this.getCell(a);
			}),
			(o.uiChange = function () {
				this.emitEvent('uiChange');
			}),
			(o.childUIPointerDown = function (a) {
				'touchstart' != a.type && a.preventDefault(), this.focus();
			}),
			(o.onresize = function () {
				this.watchCSS(), this.resize();
			}),
			d.debounceMethod(i, 'onresize', 150),
			(o.resize = function () {
				if (this.isActive) {
					this.getSize(),
						this.options.wrapAround && (this.x = d.modulo(this.x, this.slideableWidth)),
						this.positionCells(),
						this._getWrapShiftCells(),
						this.setGallerySize(),
						this.emitEvent('resize');
					var a = this.selectedElements && this.selectedElements[0];
					this.selectCell(a, !1, !0);
				}
			}),
			(o.watchCSS = function () {
				this.options.watchCSS &&
					(-1 != k(this.element, ':after').content.indexOf('flickity') ? this.activate() : this.deactivate());
			}),
			(o.onkeydown = function (a) {
				var b = document.activeElement && document.activeElement != this.element;
				if (this.options.accessibility && !b) {
					var c = i.keyboardHandlers[a.keyCode];
					c && c.call(this);
				}
			}),
			(i.keyboardHandlers = {
				37: function () {
					var a = this.options.rightToLeft ? 'next' : 'previous';
					this.uiChange(), this[a]();
				},
				39: function () {
					var a = this.options.rightToLeft ? 'previous' : 'next';
					this.uiChange(), this[a]();
				},
			}),
			(o.focus = function () {
				var b = a.pageYOffset;
				this.element.focus({ preventScroll: !0 }), a.pageYOffset != b && a.scrollTo(a.pageXOffset, b);
			}),
			(o.deactivate = function () {
				this.isActive &&
					(this.element.classList.remove('flickity-enabled'),
					this.element.classList.remove('flickity-rtl'),
					this.unselectSelectedSlide(),
					this.cells.forEach(function (a) {
						a.destroy();
					}),
					this.element.removeChild(this.viewport),
					h(this.slider.children, this.element),
					this.options.accessibility &&
						(this.element.removeAttribute('tabIndex'), this.element.removeEventListener('keydown', this)),
					(this.isActive = !1),
					this.emitEvent('deactivate'));
			}),
			(o.destroy = function () {
				this.deactivate(),
					a.removeEventListener('resize', this),
					this.allOff(),
					this.emitEvent('destroy'),
					j && this.$element && j.removeData(this.element, 'flickity'),
					delete this.element.flickityGUID,
					delete n[this.guid];
			}),
			d.extend(o, g),
			(i.data = function (a) {
				var b = (a = d.getQueryElement(a)) && a.flickityGUID;
				return b && n[b];
			}),
			d.htmlInit(i, 'flickity'),
			j && j.bridget && j.bridget('flickity', i),
			(i.setJQuery = function (a) {
				j = a;
			}),
			(i.Cell = e),
			(i.Slide = f),
			i
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('unipointer/unipointer', ['ev-emitter/ev-emitter'], function (c) {
					return b(a, c);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('ev-emitter')))
			: (a.Unipointer = b(a, a.EvEmitter));
	})(window, function (a, b) {
		function c() {}
		var d = (c.prototype = Object.create(b.prototype));
		(d.bindStartEvent = function (a) {
			this._bindStartEvent(a, !0);
		}),
			(d.unbindStartEvent = function (a) {
				this._bindStartEvent(a, !1);
			}),
			(d._bindStartEvent = function (b, c) {
				var d = (c = void 0 === c || c) ? 'addEventListener' : 'removeEventListener',
					e = 'mousedown';
				a.PointerEvent ? (e = 'pointerdown') : 'ontouchstart' in a && (e = 'touchstart'), b[d](e, this);
			}),
			(d.handleEvent = function (a) {
				var b = 'on' + a.type;
				this[b] && this[b](a);
			}),
			(d.getTouch = function (a) {
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (c.identifier == this.pointerIdentifier) return c;
				}
			}),
			(d.onmousedown = function (a) {
				var b = a.button;
				(b && 0 !== b && 1 !== b) || this._pointerDown(a, a);
			}),
			(d.ontouchstart = function (a) {
				this._pointerDown(a, a.changedTouches[0]);
			}),
			(d.onpointerdown = function (a) {
				this._pointerDown(a, a);
			}),
			(d._pointerDown = function (a, b) {
				a.button ||
					this.isPointerDown ||
					((this.isPointerDown = !0),
					(this.pointerIdentifier = void 0 !== b.pointerId ? b.pointerId : b.identifier),
					this.pointerDown(a, b));
			}),
			(d.pointerDown = function (a, b) {
				this._bindPostStartEvents(a), this.emitEvent('pointerDown', [a, b]);
			});
		var e = {
			mousedown: ['mousemove', 'mouseup'],
			touchstart: ['touchmove', 'touchend', 'touchcancel'],
			pointerdown: ['pointermove', 'pointerup', 'pointercancel'],
		};
		return (
			(d._bindPostStartEvents = function (b) {
				if (b) {
					var c = e[b.type];
					c.forEach(function (b) {
						a.addEventListener(b, this);
					}, this),
						(this._boundPointerEvents = c);
				}
			}),
			(d._unbindPostStartEvents = function () {
				this._boundPointerEvents &&
					(this._boundPointerEvents.forEach(function (b) {
						a.removeEventListener(b, this);
					}, this),
					delete this._boundPointerEvents);
			}),
			(d.onmousemove = function (a) {
				this._pointerMove(a, a);
			}),
			(d.onpointermove = function (a) {
				a.pointerId == this.pointerIdentifier && this._pointerMove(a, a);
			}),
			(d.ontouchmove = function (a) {
				var b = this.getTouch(a.changedTouches);
				b && this._pointerMove(a, b);
			}),
			(d._pointerMove = function (a, b) {
				this.pointerMove(a, b);
			}),
			(d.pointerMove = function (a, b) {
				this.emitEvent('pointerMove', [a, b]);
			}),
			(d.onmouseup = function (a) {
				this._pointerUp(a, a);
			}),
			(d.onpointerup = function (a) {
				a.pointerId == this.pointerIdentifier && this._pointerUp(a, a);
			}),
			(d.ontouchend = function (a) {
				var b = this.getTouch(a.changedTouches);
				b && this._pointerUp(a, b);
			}),
			(d._pointerUp = function (a, b) {
				this._pointerDone(), this.pointerUp(a, b);
			}),
			(d.pointerUp = function (a, b) {
				this.emitEvent('pointerUp', [a, b]);
			}),
			(d._pointerDone = function () {
				this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
			}),
			(d._pointerReset = function () {
				(this.isPointerDown = !1), delete this.pointerIdentifier;
			}),
			(d.pointerDone = function () {}),
			(d.onpointercancel = function (a) {
				a.pointerId == this.pointerIdentifier && this._pointerCancel(a, a);
			}),
			(d.ontouchcancel = function (a) {
				var b = this.getTouch(a.changedTouches);
				b && this._pointerCancel(a, b);
			}),
			(d._pointerCancel = function (a, b) {
				this._pointerDone(), this.pointerCancel(a, b);
			}),
			(d.pointerCancel = function (a, b) {
				this.emitEvent('pointerCancel', [a, b]);
			}),
			(c.getPointerPoint = function (a) {
				return { x: a.pageX, y: a.pageY };
			}),
			c
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('unidragger/unidragger', ['unipointer/unipointer'], function (c) {
					return b(a, c);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('unipointer')))
			: (a.Unidragger = b(a, a.Unipointer));
	})(window, function (a, b) {
		function c() {}
		var d = (c.prototype = Object.create(b.prototype));
		(d.bindHandles = function () {
			this._bindHandles(!0);
		}),
			(d.unbindHandles = function () {
				this._bindHandles(!1);
			}),
			(d._bindHandles = function (b) {
				for (
					var c = (b = void 0 === b || b) ? 'addEventListener' : 'removeEventListener',
						d = b ? this._touchActionValue : '',
						e = 0;
					e < this.handles.length;
					e++
				) {
					var f = this.handles[e];
					this._bindStartEvent(f, b), f[c]('click', this), a.PointerEvent && (f.style.touchAction = d);
				}
			}),
			(d._touchActionValue = 'none'),
			(d.pointerDown = function (a, b) {
				this.okayPointerDown(a) &&
					((this.pointerDownPointer = b),
					a.preventDefault(),
					this.pointerDownBlur(),
					this._bindPostStartEvents(a),
					this.emitEvent('pointerDown', [a, b]));
			});
		var e = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
			f = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };
		return (
			(d.okayPointerDown = function (a) {
				var b = e[a.target.nodeName],
					c = f[a.target.type],
					d = !b || c;
				return d || this._pointerReset(), d;
			}),
			(d.pointerDownBlur = function () {
				var a = document.activeElement;
				a && a.blur && a != document.body && a.blur();
			}),
			(d.pointerMove = function (a, b) {
				var c = this._dragPointerMove(a, b);
				this.emitEvent('pointerMove', [a, b, c]), this._dragMove(a, b, c);
			}),
			(d._dragPointerMove = function (a, b) {
				var c = { x: b.pageX - this.pointerDownPointer.pageX, y: b.pageY - this.pointerDownPointer.pageY };
				return !this.isDragging && this.hasDragStarted(c) && this._dragStart(a, b), c;
			}),
			(d.hasDragStarted = function (a) {
				return 3 < Math.abs(a.x) || 3 < Math.abs(a.y);
			}),
			(d.pointerUp = function (a, b) {
				this.emitEvent('pointerUp', [a, b]), this._dragPointerUp(a, b);
			}),
			(d._dragPointerUp = function (a, b) {
				this.isDragging ? this._dragEnd(a, b) : this._staticClick(a, b);
			}),
			(d._dragStart = function (a, b) {
				(this.isDragging = !0), (this.isPreventingClicks = !0), this.dragStart(a, b);
			}),
			(d.dragStart = function (a, b) {
				this.emitEvent('dragStart', [a, b]);
			}),
			(d._dragMove = function (a, b, c) {
				this.isDragging && this.dragMove(a, b, c);
			}),
			(d.dragMove = function (a, b, c) {
				a.preventDefault(), this.emitEvent('dragMove', [a, b, c]);
			}),
			(d._dragEnd = function (a, b) {
				(this.isDragging = !1),
					setTimeout(
						function () {
							delete this.isPreventingClicks;
						}.bind(this),
					),
					this.dragEnd(a, b);
			}),
			(d.dragEnd = function (a, b) {
				this.emitEvent('dragEnd', [a, b]);
			}),
			(d.onclick = function (a) {
				this.isPreventingClicks && a.preventDefault();
			}),
			(d._staticClick = function (a, b) {
				(this.isIgnoringMouseUp && 'mouseup' == a.type) ||
					(this.staticClick(a, b),
					'mouseup' != a.type &&
						((this.isIgnoringMouseUp = !0),
						setTimeout(
							function () {
								delete this.isIgnoringMouseUp;
							}.bind(this),
							400,
						)));
			}),
			(d.staticClick = function (a, b) {
				this.emitEvent('staticClick', [a, b]);
			}),
			(c.getPointerPoint = b.getPointerPoint),
			c
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define(
					'flickity/js/drag',
					['./flickity', 'unidragger/unidragger', 'fizzy-ui-utils/utils'],
					function (c, d, e) {
						return b(a, c, d, e);
					},
			  )
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('./flickity'), require('unidragger'), require('fizzy-ui-utils')))
			: (a.Flickity = b(a, a.Flickity, a.Unidragger, a.fizzyUIUtils));
	})(window, function (a, b, c, d) {
		function e() {
			return { x: a.pageXOffset, y: a.pageYOffset };
		}
		d.extend(b.defaults, { draggable: '>1', dragThreshold: 3 }), b.createMethods.push('_createDrag');
		var f = b.prototype;
		d.extend(f, c.prototype), (f._touchActionValue = 'pan-y');
		var g = 'createTouch' in document,
			h = !1;
		(f._createDrag = function () {
			this.on('activate', this.onActivateDrag),
				this.on('uiChange', this._uiChangeDrag),
				this.on('deactivate', this.onDeactivateDrag),
				this.on('cellChange', this.updateDraggable),
				g && !h && (a.addEventListener('touchmove', function () {}), (h = !0));
		}),
			(f.onActivateDrag = function () {
				(this.handles = [this.viewport]), this.bindHandles(), this.updateDraggable();
			}),
			(f.onDeactivateDrag = function () {
				this.unbindHandles(), this.element.classList.remove('is-draggable');
			}),
			(f.updateDraggable = function () {
				'>1' == this.options.draggable
					? (this.isDraggable = 1 < this.slides.length)
					: (this.isDraggable = this.options.draggable),
					this.isDraggable
						? this.element.classList.add('is-draggable')
						: this.element.classList.remove('is-draggable');
			}),
			(f.bindDrag = function () {
				(this.options.draggable = !0), this.updateDraggable();
			}),
			(f.unbindDrag = function () {
				(this.options.draggable = !1), this.updateDraggable();
			}),
			(f._uiChangeDrag = function () {
				delete this.isFreeScrolling;
			}),
			(f.pointerDown = function (b, c) {
				this.isDraggable
					? this.okayPointerDown(b) &&
					  (this._pointerDownPreventDefault(b),
					  this.pointerDownFocus(b),
					  document.activeElement != this.element && this.pointerDownBlur(),
					  (this.dragX = this.x),
					  this.viewport.classList.add('is-pointer-down'),
					  (this.pointerDownScroll = e()),
					  a.addEventListener('scroll', this),
					  this._pointerDownDefault(b, c))
					: this._pointerDownDefault(b, c);
			}),
			(f._pointerDownDefault = function (a, b) {
				(this.pointerDownPointer = { pageX: b.pageX, pageY: b.pageY }),
					this._bindPostStartEvents(a),
					this.dispatchEvent('pointerDown', a, [b]);
			});
		var i = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
		return (
			(f.pointerDownFocus = function (a) {
				i[a.target.nodeName] || this.focus();
			}),
			(f._pointerDownPreventDefault = function (a) {
				var b = 'touchstart' == a.type,
					c = 'touch' == a.pointerType,
					d = i[a.target.nodeName];
				b || c || d || a.preventDefault();
			}),
			(f.hasDragStarted = function (a) {
				return Math.abs(a.x) > this.options.dragThreshold;
			}),
			(f.pointerUp = function (a, b) {
				delete this.isTouchScrolling,
					this.viewport.classList.remove('is-pointer-down'),
					this.dispatchEvent('pointerUp', a, [b]),
					this._dragPointerUp(a, b);
			}),
			(f.pointerDone = function () {
				a.removeEventListener('scroll', this), delete this.pointerDownScroll;
			}),
			(f.dragStart = function (b, c) {
				this.isDraggable &&
					((this.dragStartPosition = this.x),
					this.startAnimation(),
					a.removeEventListener('scroll', this),
					this.dispatchEvent('dragStart', b, [c]));
			}),
			(f.pointerMove = function (a, b) {
				var c = this._dragPointerMove(a, b);
				this.dispatchEvent('pointerMove', a, [b, c]), this._dragMove(a, b, c);
			}),
			(f.dragMove = function (a, b, c) {
				if (this.isDraggable) {
					a.preventDefault(), (this.previousDragX = this.dragX);
					var d = this.options.rightToLeft ? -1 : 1;
					this.options.wrapAround && (c.x = c.x % this.slideableWidth);
					var e = this.dragStartPosition + c.x * d;
					if (!this.options.wrapAround && this.slides.length) {
						var f = Math.max(-this.slides[0].target, this.dragStartPosition);
						e = f < e ? 0.5 * (e + f) : e;
						var g = Math.min(-this.getLastSlide().target, this.dragStartPosition);
						e = e < g ? 0.5 * (e + g) : e;
					}
					(this.dragX = e), (this.dragMoveTime = new Date()), this.dispatchEvent('dragMove', a, [b, c]);
				}
			}),
			(f.dragEnd = function (a, b) {
				if (this.isDraggable) {
					this.options.freeScroll && (this.isFreeScrolling = !0);
					var c = this.dragEndRestingSelect();
					if (this.options.freeScroll && !this.options.wrapAround) {
						var d = this.getRestingPosition();
						this.isFreeScrolling = -d > this.slides[0].target && -d < this.getLastSlide().target;
					} else this.options.freeScroll || c != this.selectedIndex || (c += this.dragEndBoostSelect());
					delete this.previousDragX,
						(this.isDragSelect = this.options.wrapAround),
						this.select(c),
						delete this.isDragSelect,
						this.dispatchEvent('dragEnd', a, [b]);
				}
			}),
			(f.dragEndRestingSelect = function () {
				var a = this.getRestingPosition(),
					b = Math.abs(this.getSlideDistance(-a, this.selectedIndex)),
					c = this._getClosestResting(a, b, 1),
					d = this._getClosestResting(a, b, -1);
				return c.distance < d.distance ? c.index : d.index;
			}),
			(f._getClosestResting = function (a, b, c) {
				for (
					var d = this.selectedIndex,
						e = 1 / 0,
						f =
							this.options.contain && !this.options.wrapAround
								? function (a, b) {
										return a <= b;
								  }
								: function (a, b) {
										return a < b;
								  };
					f(b, e) && ((d += c), (e = b), null !== (b = this.getSlideDistance(-a, d)));

				)
					b = Math.abs(b);
				return { distance: e, index: d - c };
			}),
			(f.getSlideDistance = function (a, b) {
				var c = this.slides.length,
					e = this.options.wrapAround && 1 < c,
					f = e ? d.modulo(b, c) : b,
					g = this.slides[f];
				if (!g) return null;
				var h = e ? this.slideableWidth * Math.floor(b / c) : 0;
				return a - (g.target + h);
			}),
			(f.dragEndBoostSelect = function () {
				if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date() - this.dragMoveTime) return 0;
				var a = this.getSlideDistance(-this.dragX, this.selectedIndex),
					b = this.previousDragX - this.dragX;
				return 0 < a && 0 < b ? 1 : a < 0 && b < 0 ? -1 : 0;
			}),
			(f.staticClick = function (a, b) {
				var c = this.getParentCell(a.target),
					d = c && c.element,
					e = c && this.cells.indexOf(c);
				this.dispatchEvent('staticClick', a, [b, d, e]);
			}),
			(f.onscroll = function () {
				var a = e(),
					b = this.pointerDownScroll.x - a.x,
					c = this.pointerDownScroll.y - a.y;
				(3 < Math.abs(b) || 3 < Math.abs(c)) && this._pointerDone();
			}),
			b
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define(
					'flickity/js/prev-next-button',
					['./flickity', 'unipointer/unipointer', 'fizzy-ui-utils/utils'],
					function (c, d, e) {
						return b(a, c, d, e);
					},
			  )
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('./flickity'), require('unipointer'), require('fizzy-ui-utils')))
			: b(a, a.Flickity, a.Unipointer, a.fizzyUIUtils);
	})(window, function (a, b, c, d) {
		'use strict';
		function e(a, b) {
			(this.direction = a), (this.parent = b), this._create();
		}
		var f = 'http://www.w3.org/2000/svg';
		((e.prototype = Object.create(c.prototype))._create = function () {
			(this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
			var a = this.parent.options.rightToLeft ? 1 : -1;
			this.isLeft = this.direction == a;
			var b = (this.element = document.createElement('button'));
			(b.className = 'flickity-button flickity-prev-next-button'),
				(b.className += this.isPrevious ? ' previous' : ' next'),
				b.setAttribute('type', 'button'),
				this.disable(),
				b.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next');
			var c = this.createSVG();
			b.appendChild(c),
				this.parent.on('select', this.update.bind(this)),
				this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
		}),
			(e.prototype.activate = function () {
				this.bindStartEvent(this.element),
					this.element.addEventListener('click', this),
					this.parent.element.appendChild(this.element);
			}),
			(e.prototype.deactivate = function () {
				this.parent.element.removeChild(this.element),
					this.unbindStartEvent(this.element),
					this.element.removeEventListener('click', this);
			}),
			(e.prototype.createSVG = function () {
				var a = document.createElementNS(f, 'svg');
				a.setAttribute('class', 'flickity-button-icon'), a.setAttribute('viewBox', '0 0 100 100');
				var b = document.createElementNS(f, 'path'),
					c = (function (a) {
						return 'string' != typeof a
							? 'M ' +
									a.x0 +
									',50 L ' +
									a.x1 +
									',' +
									(a.y1 + 50) +
									' L ' +
									a.x2 +
									',' +
									(a.y2 + 50) +
									' L ' +
									a.x3 +
									',50  L ' +
									a.x2 +
									',' +
									(50 - a.y2) +
									' L ' +
									a.x1 +
									',' +
									(50 - a.y1) +
									' Z'
							: a;
					})(this.parent.options.arrowShape);
				return (
					b.setAttribute('d', c),
					b.setAttribute('class', 'arrow'),
					this.isLeft || b.setAttribute('transform', 'translate(100, 100) rotate(180) '),
					a.appendChild(b),
					a
				);
			}),
			(e.prototype.handleEvent = d.handleEvent),
			(e.prototype.onclick = function () {
				if (this.isEnabled) {
					this.parent.uiChange();
					var a = this.isPrevious ? 'previous' : 'next';
					this.parent[a]();
				}
			}),
			(e.prototype.enable = function () {
				this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
			}),
			(e.prototype.disable = function () {
				this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
			}),
			(e.prototype.update = function () {
				var a = this.parent.slides;
				if (this.parent.options.wrapAround && 1 < a.length) this.enable();
				else {
					var b = a.length ? a.length - 1 : 0,
						c = this.isPrevious ? 0 : b;
					this[this.parent.selectedIndex == c ? 'disable' : 'enable']();
				}
			}),
			(e.prototype.destroy = function () {
				this.deactivate(), this.allOff();
			}),
			d.extend(b.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }),
			b.createMethods.push('_createPrevNextButtons');
		var g = b.prototype;
		return (
			(g._createPrevNextButtons = function () {
				this.options.prevNextButtons &&
					((this.prevButton = new e(-1, this)),
					(this.nextButton = new e(1, this)),
					this.on('activate', this.activatePrevNextButtons));
			}),
			(g.activatePrevNextButtons = function () {
				this.prevButton.activate(),
					this.nextButton.activate(),
					this.on('deactivate', this.deactivatePrevNextButtons);
			}),
			(g.deactivatePrevNextButtons = function () {
				this.prevButton.deactivate(),
					this.nextButton.deactivate(),
					this.off('deactivate', this.deactivatePrevNextButtons);
			}),
			(b.PrevNextButton = e),
			b
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define(
					'flickity/js/page-dots',
					['./flickity', 'unipointer/unipointer', 'fizzy-ui-utils/utils'],
					function (c, d, e) {
						return b(a, c, d, e);
					},
			  )
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('./flickity'), require('unipointer'), require('fizzy-ui-utils')))
			: b(a, a.Flickity, a.Unipointer, a.fizzyUIUtils);
	})(window, function (a, b, c, d) {
		function e(a) {
			(this.parent = a), this._create();
		}
		((e.prototype = Object.create(c.prototype))._create = function () {
			(this.holder = document.createElement('ol')),
				(this.holder.className = 'flickity-page-dots'),
				(this.dots = []),
				(this.handleClick = this.onClick.bind(this)),
				this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
		}),
			(e.prototype.activate = function () {
				this.setDots(),
					this.holder.addEventListener('click', this.handleClick),
					this.bindStartEvent(this.holder),
					this.parent.element.appendChild(this.holder);
			}),
			(e.prototype.deactivate = function () {
				this.holder.removeEventListener('click', this.handleClick),
					this.unbindStartEvent(this.holder),
					this.parent.element.removeChild(this.holder);
			}),
			(e.prototype.setDots = function () {
				var a = this.parent.slides.length - this.dots.length;
				0 < a ? this.addDots(a) : a < 0 && this.removeDots(-a);
			}),
			(e.prototype.addDots = function (a) {
				for (
					var b = document.createDocumentFragment(), c = [], d = this.dots.length, e = d + a, f = d;
					f < e;
					f++
				) {
					var g = document.createElement('li');
					(g.className = 'dot'), g.setAttribute('aria-label', 'Page dot ' + (f + 1)), b.appendChild(g), c.push(g);
				}
				this.holder.appendChild(b), (this.dots = this.dots.concat(c));
			}),
			(e.prototype.removeDots = function (a) {
				this.dots.splice(this.dots.length - a, a).forEach(function (a) {
					this.holder.removeChild(a);
				}, this);
			}),
			(e.prototype.updateSelected = function () {
				this.selectedDot &&
					((this.selectedDot.className = 'dot'), this.selectedDot.removeAttribute('aria-current')),
					this.dots.length &&
						((this.selectedDot = this.dots[this.parent.selectedIndex]),
						(this.selectedDot.className = 'dot is-selected'),
						this.selectedDot.setAttribute('aria-current', 'step'));
			}),
			(e.prototype.onTap = e.prototype.onClick =
				function (a) {
					var b = a.target;
					if ('LI' == b.nodeName) {
						this.parent.uiChange();
						var c = this.dots.indexOf(b);
						this.parent.select(c);
					}
				}),
			(e.prototype.destroy = function () {
				this.deactivate(), this.allOff();
			}),
			(b.PageDots = e),
			d.extend(b.defaults, { pageDots: !0 }),
			b.createMethods.push('_createPageDots');
		var f = b.prototype;
		return (
			(f._createPageDots = function () {
				this.options.pageDots &&
					((this.pageDots = new e(this)),
					this.on('activate', this.activatePageDots),
					this.on('select', this.updateSelectedPageDots),
					this.on('cellChange', this.updatePageDots),
					this.on('resize', this.updatePageDots),
					this.on('deactivate', this.deactivatePageDots));
			}),
			(f.activatePageDots = function () {
				this.pageDots.activate();
			}),
			(f.updateSelectedPageDots = function () {
				this.pageDots.updateSelected();
			}),
			(f.updatePageDots = function () {
				this.pageDots.setDots();
			}),
			(f.deactivatePageDots = function () {
				this.pageDots.deactivate();
			}),
			(b.PageDots = e),
			b
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define(
					'flickity/js/player',
					['ev-emitter/ev-emitter', 'fizzy-ui-utils/utils', './flickity'],
					function (a, c, d) {
						return b(a, c, d);
					},
			  )
			: 'object' == typeof module && module.exports
			? (module.exports = b(require('ev-emitter'), require('fizzy-ui-utils'), require('./flickity')))
			: b(a.EvEmitter, a.fizzyUIUtils, a.Flickity);
	})(window, function (a, b, c) {
		function d(a) {
			(this.parent = a),
				(this.state = 'stopped'),
				(this.onVisibilityChange = this.visibilityChange.bind(this)),
				(this.onVisibilityPlay = this.visibilityPlay.bind(this));
		}
		((d.prototype = Object.create(a.prototype)).play = function () {
			'playing' != this.state &&
				(document.hidden
					? document.addEventListener('visibilitychange', this.onVisibilityPlay)
					: ((this.state = 'playing'),
					  document.addEventListener('visibilitychange', this.onVisibilityChange),
					  this.tick()));
		}),
			(d.prototype.tick = function () {
				if ('playing' == this.state) {
					var a = this.parent.options.autoPlay;
					a = 'number' == typeof a ? a : 3e3;
					var b = this;
					this.clear(),
						(this.timeout = setTimeout(function () {
							b.parent.next(!0), b.tick();
						}, a));
				}
			}),
			(d.prototype.stop = function () {
				(this.state = 'stopped'),
					this.clear(),
					document.removeEventListener('visibilitychange', this.onVisibilityChange);
			}),
			(d.prototype.clear = function () {
				clearTimeout(this.timeout);
			}),
			(d.prototype.pause = function () {
				'playing' == this.state && ((this.state = 'paused'), this.clear());
			}),
			(d.prototype.unpause = function () {
				'paused' == this.state && this.play();
			}),
			(d.prototype.visibilityChange = function () {
				this[document.hidden ? 'pause' : 'unpause']();
			}),
			(d.prototype.visibilityPlay = function () {
				this.play(), document.removeEventListener('visibilitychange', this.onVisibilityPlay);
			}),
			b.extend(c.defaults, { pauseAutoPlayOnHover: !0 }),
			c.createMethods.push('_createPlayer');
		var e = c.prototype;
		return (
			(e._createPlayer = function () {
				(this.player = new d(this)),
					this.on('activate', this.activatePlayer),
					this.on('uiChange', this.stopPlayer),
					this.on('pointerDown', this.stopPlayer),
					this.on('deactivate', this.deactivatePlayer);
			}),
			(e.activatePlayer = function () {
				this.options.autoPlay && (this.player.play(), this.element.addEventListener('mouseenter', this));
			}),
			(e.playPlayer = function () {
				this.player.play();
			}),
			(e.stopPlayer = function () {
				this.player.stop();
			}),
			(e.pausePlayer = function () {
				this.player.pause();
			}),
			(e.unpausePlayer = function () {
				this.player.unpause();
			}),
			(e.deactivatePlayer = function () {
				this.player.stop(), this.element.removeEventListener('mouseenter', this);
			}),
			(e.onmouseenter = function () {
				this.options.pauseAutoPlayOnHover &&
					(this.player.pause(), this.element.addEventListener('mouseleave', this));
			}),
			(e.onmouseleave = function () {
				this.player.unpause(), this.element.removeEventListener('mouseleave', this);
			}),
			(c.Player = d),
			c
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('flickity/js/add-remove-cell', ['./flickity', 'fizzy-ui-utils/utils'], function (c, d) {
					return b(a, c, d);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('./flickity'), require('fizzy-ui-utils')))
			: b(a, a.Flickity, a.fizzyUIUtils);
	})(window, function (a, b, c) {
		var d = b.prototype;
		return (
			(d.insert = function (a, b) {
				var c = this._makeCells(a);
				if (c && c.length) {
					var d = this.cells.length;
					b = void 0 === b ? d : b;
					var e = (function (a) {
							var b = document.createDocumentFragment();
							return (
								a.forEach(function (a) {
									b.appendChild(a.element);
								}),
								b
							);
						})(c),
						f = b == d;
					if (f) this.slider.appendChild(e);
					else {
						var g = this.cells[b].element;
						this.slider.insertBefore(e, g);
					}
					if (0 === b) this.cells = c.concat(this.cells);
					else if (f) this.cells = this.cells.concat(c);
					else {
						var h = this.cells.splice(b, d - b);
						this.cells = this.cells.concat(c).concat(h);
					}
					this._sizeCells(c), this.cellChange(b, !0);
				}
			}),
			(d.append = function (a) {
				this.insert(a, this.cells.length);
			}),
			(d.prepend = function (a) {
				this.insert(a, 0);
			}),
			(d.remove = function (a) {
				var b = this.getCells(a);
				if (b && b.length) {
					var d = this.cells.length - 1;
					b.forEach(function (a) {
						a.remove();
						var b = this.cells.indexOf(a);
						(d = Math.min(b, d)), c.removeFrom(this.cells, a);
					}, this),
						this.cellChange(d, !0);
				}
			}),
			(d.cellSizeChange = function (a) {
				var b = this.getCell(a);
				if (b) {
					b.getSize();
					var c = this.cells.indexOf(b);
					this.cellChange(c);
				}
			}),
			(d.cellChange = function (a, b) {
				var c = this.selectedElement;
				this._positionCells(a), this._getWrapShiftCells(), this.setGallerySize();
				var d = this.getCell(c);
				d && (this.selectedIndex = this.getCellSlideIndex(d)),
					(this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex)),
					this.emitEvent('cellChange', [a]),
					this.select(this.selectedIndex),
					b && this.positionSliderAtSelected();
			}),
			b
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('flickity/js/lazyload', ['./flickity', 'fizzy-ui-utils/utils'], function (c, d) {
					return b(a, c, d);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('./flickity'), require('fizzy-ui-utils')))
			: b(a, a.Flickity, a.fizzyUIUtils);
	})(window, function (a, b, c) {
		'use strict';
		function d(a, b) {
			(this.img = a), (this.flickity = b), this.load();
		}
		b.createMethods.push('_createLazyload');
		var e = b.prototype;
		return (
			(e._createLazyload = function () {
				this.on('select', this.lazyLoad);
			}),
			(e.lazyLoad = function () {
				var a = this.options.lazyLoad;
				if (a) {
					var b = 'number' == typeof a ? a : 0,
						e = this.getAdjacentCellElements(b),
						f = [];
					e.forEach(function (a) {
						var b = (function (a) {
							if ('IMG' == a.nodeName) {
								var b = a.getAttribute('data-flickity-lazyload'),
									d = a.getAttribute('data-flickity-lazyload-src'),
									e = a.getAttribute('data-flickity-lazyload-srcset');
								if (b || d || e) return [a];
							}
							var f = a.querySelectorAll(
								'img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]',
							);
							return c.makeArray(f);
						})(a);
						f = f.concat(b);
					}),
						f.forEach(function (a) {
							new d(a, this);
						}, this);
				}
			}),
			(d.prototype.handleEvent = c.handleEvent),
			(d.prototype.load = function () {
				this.img.addEventListener('load', this), this.img.addEventListener('error', this);
				var a =
						this.img.getAttribute('data-flickity-lazyload') ||
						this.img.getAttribute('data-flickity-lazyload-src'),
					b = this.img.getAttribute('data-flickity-lazyload-srcset');
				(this.img.src = a),
					b && this.img.setAttribute('srcset', b),
					this.img.removeAttribute('data-flickity-lazyload'),
					this.img.removeAttribute('data-flickity-lazyload-src'),
					this.img.removeAttribute('data-flickity-lazyload-srcset');
			}),
			(d.prototype.onload = function (a) {
				this.complete(a, 'flickity-lazyloaded');
			}),
			(d.prototype.onerror = function (a) {
				this.complete(a, 'flickity-lazyerror');
			}),
			(d.prototype.complete = function (a, b) {
				this.img.removeEventListener('load', this), this.img.removeEventListener('error', this);
				var c = this.flickity.getParentCell(this.img),
					d = c && c.element;
				this.flickity.cellSizeChange(d), this.img.classList.add(b), this.flickity.dispatchEvent('lazyLoad', a, d);
			}),
			(b.LazyLoader = d),
			b
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define(
					'flickity/js/index',
					[
						'./flickity',
						'./drag',
						'./prev-next-button',
						'./page-dots',
						'./player',
						'./add-remove-cell',
						'./lazyload',
					],
					b,
			  )
			: 'object' == typeof module &&
			  module.exports &&
			  (module.exports = b(
					require('./flickity'),
					require('./drag'),
					require('./prev-next-button'),
					require('./page-dots'),
					require('./player'),
					require('./add-remove-cell'),
					require('./lazyload'),
			  ));
	})(window, function (a) {
		return a;
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('flickity-as-nav-for/as-nav-for', ['flickity/js/index', 'fizzy-ui-utils/utils'], b)
			: 'object' == typeof module && module.exports
			? (module.exports = b(require('flickity'), require('fizzy-ui-utils')))
			: (a.Flickity = b(a.Flickity, a.fizzyUIUtils));
	})(window, function (a, b) {
		a.createMethods.push('_createAsNavFor');
		var c = a.prototype;
		return (
			(c._createAsNavFor = function () {
				this.on('activate', this.activateAsNavFor),
					this.on('deactivate', this.deactivateAsNavFor),
					this.on('destroy', this.destroyAsNavFor);
				var a = this.options.asNavFor;
				if (a) {
					var b = this;
					setTimeout(function () {
						b.setNavCompanion(a);
					});
				}
			}),
			(c.setNavCompanion = function (c) {
				c = b.getQueryElement(c);
				var d = a.data(c);
				if (d && d != this) {
					this.navCompanion = d;
					var e = this;
					(this.onNavCompanionSelect = function () {
						e.navCompanionSelect();
					}),
						d.on('select', this.onNavCompanionSelect),
						this.on('staticClick', this.onNavStaticClick),
						this.navCompanionSelect(!0);
				}
			}),
			(c.navCompanionSelect = function (a) {
				var b = this.navCompanion && this.navCompanion.selectedCells;
				if (b) {
					var c = b[0],
						d = this.navCompanion.cells.indexOf(c),
						e = d + b.length - 1,
						f = Math.floor(
							(function (a, b, c) {
								return (b - a) * c + a;
							})(d, e, this.navCompanion.cellAlign),
						);
					if ((this.selectCell(f, !1, a), this.removeNavSelectedElements(), !(f >= this.cells.length))) {
						var g = this.cells.slice(d, 1 + e);
						(this.navSelectedElements = g.map(function (a) {
							return a.element;
						})),
							this.changeNavSelectedClass('add');
					}
				}
			}),
			(c.changeNavSelectedClass = function (a) {
				this.navSelectedElements.forEach(function (b) {
					b.classList[a]('is-nav-selected');
				});
			}),
			(c.activateAsNavFor = function () {
				this.navCompanionSelect(!0);
			}),
			(c.removeNavSelectedElements = function () {
				this.navSelectedElements && (this.changeNavSelectedClass('remove'), delete this.navSelectedElements);
			}),
			(c.onNavStaticClick = function (a, b, c, d) {
				'number' == typeof d && this.navCompanion.selectCell(d);
			}),
			(c.deactivateAsNavFor = function () {
				this.removeNavSelectedElements();
			}),
			(c.destroyAsNavFor = function () {
				this.navCompanion &&
					(this.navCompanion.off('select', this.onNavCompanionSelect),
					this.off('staticClick', this.onNavStaticClick),
					delete this.navCompanion);
			}),
			a
		);
	}),
	(function (a, b) {
		'use strict';
		'function' == typeof define && define.amd
			? define('imagesloaded/imagesloaded', ['ev-emitter/ev-emitter'], function (c) {
					return b(a, c);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('ev-emitter')))
			: (a.imagesLoaded = b(a, a.EvEmitter));
	})('undefined' != typeof window ? window : this, function (a, b) {
		function c(a, b) {
			for (var c in b) a[c] = b[c];
			return a;
		}
		function d(a, b, e) {
			if (!(this instanceof d)) return new d(a, b, e);
			var f = a;
			'string' == typeof a && (f = document.querySelectorAll(a)),
				f
					? ((this.elements = (function (a) {
							return Array.isArray(a)
								? a
								: 'object' == typeof a && 'number' == typeof a.length
								? i.call(a)
								: [a];
					  })(f)),
					  (this.options = c({}, this.options)),
					  'function' == typeof b ? (e = b) : c(this.options, b),
					  e && this.on('always', e),
					  this.getImages(),
					  g && (this.jqDeferred = new g.Deferred()),
					  setTimeout(this.check.bind(this)))
					: h.error('Bad element for imagesLoaded ' + (f || a));
		}
		function e(a) {
			this.img = a;
		}
		function f(a, b) {
			(this.url = a), (this.element = b), (this.img = new Image());
		}
		var g = a.jQuery,
			h = a.console,
			i = Array.prototype.slice;
		((d.prototype = Object.create(b.prototype)).options = {}),
			(d.prototype.getImages = function () {
				(this.images = []), this.elements.forEach(this.addElementImages, this);
			}),
			(d.prototype.addElementImages = function (a) {
				'IMG' == a.nodeName && this.addImage(a),
					!0 === this.options.background && this.addElementBackgroundImages(a);
				var b = a.nodeType;
				if (b && j[b]) {
					for (var c = a.querySelectorAll('img'), d = 0; d < c.length; d++) {
						var e = c[d];
						this.addImage(e);
					}
					if ('string' == typeof this.options.background) {
						var f = a.querySelectorAll(this.options.background);
						for (d = 0; d < f.length; d++) {
							var g = f[d];
							this.addElementBackgroundImages(g);
						}
					}
				}
			});
		var j = { 1: !0, 9: !0, 11: !0 };
		return (
			(d.prototype.addElementBackgroundImages = function (a) {
				var b = getComputedStyle(a);
				if (b)
					for (var c = /url\((['"])?(.*?)\1\)/gi, d = c.exec(b.backgroundImage); null !== d; ) {
						var e = d && d[2];
						e && this.addBackground(e, a), (d = c.exec(b.backgroundImage));
					}
			}),
			(d.prototype.addImage = function (a) {
				var b = new e(a);
				this.images.push(b);
			}),
			(d.prototype.addBackground = function (a, b) {
				var c = new f(a, b);
				this.images.push(c);
			}),
			(d.prototype.check = function () {
				function a(a, c, d) {
					setTimeout(function () {
						b.progress(a, c, d);
					});
				}
				var b = this;
				(this.progressedCount = 0),
					(this.hasAnyBroken = !1),
					this.images.length
						? this.images.forEach(function (b) {
								b.once('progress', a), b.check();
						  })
						: this.complete();
			}),
			(d.prototype.progress = function (a, b, c) {
				this.progressedCount++,
					(this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded),
					this.emitEvent('progress', [this, a, b]),
					this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a),
					this.progressedCount == this.images.length && this.complete(),
					this.options.debug && h && h.log('progress: ' + c, a, b);
			}),
			(d.prototype.complete = function () {
				var a = this.hasAnyBroken ? 'fail' : 'done';
				if (
					((this.isComplete = !0), this.emitEvent(a, [this]), this.emitEvent('always', [this]), this.jqDeferred)
				) {
					var b = this.hasAnyBroken ? 'reject' : 'resolve';
					this.jqDeferred[b](this);
				}
			}),
			((e.prototype = Object.create(b.prototype)).check = function () {
				this.getIsImageComplete()
					? this.confirm(0 !== this.img.naturalWidth, 'naturalWidth')
					: ((this.proxyImage = new Image()),
					  this.proxyImage.addEventListener('load', this),
					  this.proxyImage.addEventListener('error', this),
					  this.img.addEventListener('load', this),
					  this.img.addEventListener('error', this),
					  (this.proxyImage.src = this.img.src));
			}),
			(e.prototype.getIsImageComplete = function () {
				return this.img.complete && this.img.naturalWidth;
			}),
			(e.prototype.confirm = function (a, b) {
				(this.isLoaded = a), this.emitEvent('progress', [this, this.img, b]);
			}),
			(e.prototype.handleEvent = function (a) {
				var b = 'on' + a.type;
				this[b] && this[b](a);
			}),
			(e.prototype.onload = function () {
				this.confirm(!0, 'onload'), this.unbindEvents();
			}),
			(e.prototype.onerror = function () {
				this.confirm(!1, 'onerror'), this.unbindEvents();
			}),
			(e.prototype.unbindEvents = function () {
				this.proxyImage.removeEventListener('load', this),
					this.proxyImage.removeEventListener('error', this),
					this.img.removeEventListener('load', this),
					this.img.removeEventListener('error', this);
			}),
			((f.prototype = Object.create(e.prototype)).check = function () {
				this.img.addEventListener('load', this),
					this.img.addEventListener('error', this),
					(this.img.src = this.url),
					this.getIsImageComplete() &&
						(this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'), this.unbindEvents());
			}),
			(f.prototype.unbindEvents = function () {
				this.img.removeEventListener('load', this), this.img.removeEventListener('error', this);
			}),
			(f.prototype.confirm = function (a, b) {
				(this.isLoaded = a), this.emitEvent('progress', [this, this.element, b]);
			}),
			(d.makeJQueryPlugin = function (b) {
				(b = b || a.jQuery) &&
					((g = b).fn.imagesLoaded = function (a, b) {
						return new d(this, a, b).jqDeferred.promise(g(this));
					});
			}),
			d.makeJQueryPlugin(),
			d
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define(['flickity/js/index', 'imagesloaded/imagesloaded'], function (c, d) {
					return b(a, c, d);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('flickity'), require('imagesloaded')))
			: (a.Flickity = b(a, a.Flickity, a.imagesLoaded));
	})(window, function (a, b, c) {
		'use strict';
		b.createMethods.push('_createImagesLoaded');
		var d = b.prototype;
		return (
			(d._createImagesLoaded = function () {
				this.on('activate', this.imagesLoaded);
			}),
			(d.imagesLoaded = function () {
				if (this.options.imagesLoaded) {
					var a = this;
					c(this.slider).on('progress', function (b, c) {
						var d = a.getParentCell(c.img);
						a.cellSizeChange(d && d.element), a.options.freeScroll || a.positionSliderAtSelected();
					});
				}
			}),
			b
		);
	}),
	(function (a, b) {
		'function' == typeof define && define.amd
			? define('ev-emitter/ev-emitter', b)
			: 'object' == typeof module && module.exports
			? (module.exports = b())
			: (a.EvEmitter = b());
	})('undefined' != typeof window ? window : this, function () {
		function a() {}
		var b = a.prototype;
		return (
			(b.on = function (a, b) {
				if (a && b) {
					var c = (this._events = this._events || {}),
						d = (c[a] = c[a] || []);
					return -1 == d.indexOf(b) && d.push(b), this;
				}
			}),
			(b.once = function (a, b) {
				if (a && b) {
					this.on(a, b);
					var c = (this._onceEvents = this._onceEvents || {});
					return ((c[a] = c[a] || {})[b] = !0), this;
				}
			}),
			(b.off = function (a, b) {
				var c = this._events && this._events[a];
				if (c && c.length) {
					var d = c.indexOf(b);
					return -1 != d && c.splice(d, 1), this;
				}
			}),
			(b.emitEvent = function (a, b) {
				var c = this._events && this._events[a];
				if (c && c.length) {
					var d = 0,
						e = c[d];
					b = b || [];
					for (var f = this._onceEvents && this._onceEvents[a]; e; ) {
						var g = f && f[e];
						g && (this.off(a, e), delete f[e]), e.apply(this, b), (d += g ? 0 : 1), (e = c[d]);
					}
					return this;
				}
			}),
			a
		);
	}),
	(function (a, b) {
		'use strict';
		'function' == typeof define && define.amd
			? define(['ev-emitter/ev-emitter'], function (c) {
					return b(a, c);
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = b(a, require('ev-emitter')))
			: (a.imagesLoaded = b(a, a.EvEmitter));
	})(window, function (a, b) {
		function c(a, b) {
			for (var c in b) a[c] = b[c];
			return a;
		}
		function d(a) {
			var b = [];
			if (Array.isArray(a)) b = a;
			else if ('number' == typeof a.length) for (var c = 0; c < a.length; c++) b.push(a[c]);
			else b.push(a);
			return b;
		}
		function e(a, b, f) {
			return this instanceof e
				? ('string' == typeof a && (a = document.querySelectorAll(a)),
				  (this.elements = d(a)),
				  (this.options = c({}, this.options)),
				  'function' == typeof b ? (f = b) : c(this.options, b),
				  f && this.on('always', f),
				  this.getImages(),
				  h && (this.jqDeferred = new h.Deferred()),
				  void setTimeout(
						function () {
							this.check();
						}.bind(this),
				  ))
				: new e(a, b, f);
		}
		function f(a) {
			this.img = a;
		}
		function g(a, b) {
			(this.url = a), (this.element = b), (this.img = new Image());
		}
		var h = a.jQuery,
			i = a.console;
		(e.prototype = Object.create(b.prototype)),
			(e.prototype.options = {}),
			(e.prototype.getImages = function () {
				(this.images = []), this.elements.forEach(this.addElementImages, this);
			}),
			(e.prototype.addElementImages = function (a) {
				'IMG' == a.nodeName && this.addImage(a),
					!0 === this.options.background && this.addElementBackgroundImages(a);
				var b = a.nodeType;
				if (b && j[b]) {
					for (var c = a.querySelectorAll('img'), d = 0; d < c.length; d++) {
						var e = c[d];
						this.addImage(e);
					}
					if ('string' == typeof this.options.background) {
						var f = a.querySelectorAll(this.options.background);
						for (d = 0; d < f.length; d++) {
							var g = f[d];
							this.addElementBackgroundImages(g);
						}
					}
				}
			});
		var j = { 1: !0, 9: !0, 11: !0 };
		return (
			(e.prototype.addElementBackgroundImages = function (a) {
				var b = getComputedStyle(a);
				if (b)
					for (var c = /url\((['"])?(.*?)\1\)/gi, d = c.exec(b.backgroundImage); null !== d; ) {
						var e = d && d[2];
						e && this.addBackground(e, a), (d = c.exec(b.backgroundImage));
					}
			}),
			(e.prototype.addImage = function (a) {
				var b = new f(a);
				this.images.push(b);
			}),
			(e.prototype.addBackground = function (a, b) {
				var c = new g(a, b);
				this.images.push(c);
			}),
			(e.prototype.check = function () {
				function a(a, c, d) {
					setTimeout(function () {
						b.progress(a, c, d);
					});
				}
				var b = this;
				return (
					(this.progressedCount = 0),
					(this.hasAnyBroken = !1),
					this.images.length
						? void this.images.forEach(function (b) {
								b.once('progress', a), b.check();
						  })
						: void this.complete()
				);
			}),
			(e.prototype.progress = function (a, b, c) {
				this.progressedCount++,
					(this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded),
					this.emitEvent('progress', [this, a, b]),
					this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a),
					this.progressedCount == this.images.length && this.complete(),
					this.options.debug && i && i.log('progress: ' + c, a, b);
			}),
			(e.prototype.complete = function () {
				var a = this.hasAnyBroken ? 'fail' : 'done';
				if (
					((this.isComplete = !0), this.emitEvent(a, [this]), this.emitEvent('always', [this]), this.jqDeferred)
				) {
					var b = this.hasAnyBroken ? 'reject' : 'resolve';
					this.jqDeferred[b](this);
				}
			}),
			(f.prototype = Object.create(b.prototype)),
			(f.prototype.check = function () {
				return this.getIsImageComplete()
					? void this.confirm(0 !== this.img.naturalWidth, 'naturalWidth')
					: ((this.proxyImage = new Image()),
					  this.proxyImage.addEventListener('load', this),
					  this.proxyImage.addEventListener('error', this),
					  this.img.addEventListener('load', this),
					  this.img.addEventListener('error', this),
					  void (this.proxyImage.src = this.img.src));
			}),
			(f.prototype.getIsImageComplete = function () {
				return this.img.complete && void 0 !== this.img.naturalWidth;
			}),
			(f.prototype.confirm = function (a, b) {
				(this.isLoaded = a), this.emitEvent('progress', [this, this.img, b]);
			}),
			(f.prototype.handleEvent = function (a) {
				var b = 'on' + a.type;
				this[b] && this[b](a);
			}),
			(f.prototype.onload = function () {
				this.confirm(!0, 'onload'), this.unbindEvents();
			}),
			(f.prototype.onerror = function () {
				this.confirm(!1, 'onerror'), this.unbindEvents();
			}),
			(f.prototype.unbindEvents = function () {
				this.proxyImage.removeEventListener('load', this),
					this.proxyImage.removeEventListener('error', this),
					this.img.removeEventListener('load', this),
					this.img.removeEventListener('error', this);
			}),
			(g.prototype = Object.create(f.prototype)),
			(g.prototype.check = function () {
				this.img.addEventListener('load', this),
					this.img.addEventListener('error', this),
					(this.img.src = this.url),
					this.getIsImageComplete() &&
						(this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'), this.unbindEvents());
			}),
			(g.prototype.unbindEvents = function () {
				this.img.removeEventListener('load', this), this.img.removeEventListener('error', this);
			}),
			(g.prototype.confirm = function (a, b) {
				(this.isLoaded = a), this.emitEvent('progress', [this, this.element, b]);
			}),
			(e.makeJQueryPlugin = function (b) {
				(b = b || a.jQuery) &&
					((h = b),
					(h.fn.imagesLoaded = function (a, b) {
						return new e(this, a, b).jqDeferred.promise(h(this));
					}));
			}),
			e.makeJQueryPlugin(),
			e
		);
	}),
	(function (a, b) {
		var c = b(a, a.document, Date);
		(a.lazySizes = c), 'object' == typeof module && module.exports && (module.exports = c);
	})('undefined' != typeof window ? window : {}, function (a, b, c) {
		'use strict';
		var d, e;
		if (
			((function () {
				var b,
					c = {
						lazyClass: 'lazyload',
						loadedClass: 'lazyloaded',
						loadingClass: 'lazyloading',
						preloadClass: 'lazypreload',
						errorClass: 'lazyerror',
						autosizesClass: 'lazyautosizes',
						srcAttr: 'data-src',
						srcsetAttr: 'data-srcset',
						sizesAttr: 'data-sizes',
						minSize: 40,
						customMedia: {},
						init: !0,
						expFactor: 1.5,
						hFac: 0.8,
						loadMode: 2,
						loadHidden: !0,
						ricTimeout: 0,
						throttleDelay: 125,
					};
				e = a.lazySizesConfig || a.lazysizesConfig || {};
				for (b in c) b in e || (e[b] = c[b]);
			})(),
			!b || !b.getElementsByClassName)
		)
			return { init: function () {}, cfg: e, noSupport: !0 };
		var f = b.documentElement,
			g = a.HTMLPictureElement,
			h = 'addEventListener',
			i = 'getAttribute',
			j = a[h].bind(a),
			k = a.setTimeout,
			l = a.requestAnimationFrame || k,
			m = a.requestIdleCallback,
			n = /^picture$/i,
			o = ['load', 'error', 'lazyincluded', '_lazyloaded'],
			p = {},
			q = Array.prototype.forEach,
			r = function (a, b) {
				return p[b] || (p[b] = new RegExp('(\\s|^)' + b + '(\\s|$)')), p[b].test(a[i]('class') || '') && p[b];
			},
			s = function (a, b) {
				r(a, b) || a.setAttribute('class', (a[i]('class') || '').trim() + ' ' + b);
			},
			t = function (a, b) {
				var c;
				(c = r(a, b)) && a.setAttribute('class', (a[i]('class') || '').replace(c, ' '));
			},
			u = function (a, b, c) {
				var d = c ? h : 'removeEventListener';
				c && u(a, b),
					o.forEach(function (c) {
						a[d](c, b);
					});
			},
			v = function (a, c, e, f, g) {
				var h = b.createEvent('Event');
				return e || (e = {}), (e.instance = d), h.initEvent(c, !f, !g), (h.detail = e), a.dispatchEvent(h), h;
			},
			w = function (b, c) {
				var d;
				!g && (d = a.picturefill || e.pf)
					? (c && c.src && !b[i]('srcset') && b.setAttribute('srcset', c.src),
					  d({ reevaluate: !0, elements: [b] }))
					: c && c.src && (b.src = c.src);
			},
			x = function (a, b) {
				return (getComputedStyle(a, null) || {})[b];
			},
			y = function (a, b, c) {
				for (c = c || a.offsetWidth; c < e.minSize && b && !a._lazysizesWidth; )
					(c = b.offsetWidth), (b = b.parentNode);
				return c;
			},
			z = (function () {
				var a,
					c,
					d = [],
					e = [],
					f = d,
					g = function () {
						var b = f;
						for (f = d.length ? e : d, a = !0, c = !1; b.length; ) b.shift()();
						a = !1;
					},
					h = function (d, e) {
						a && !e ? d.apply(this, arguments) : (f.push(d), c || ((c = !0), (b.hidden ? k : l)(g)));
					};
				return (h._lsFlush = g), h;
			})(),
			A = function (a, b) {
				return b
					? function () {
							z(a);
					  }
					: function () {
							var b = this,
								c = arguments;
							z(function () {
								a.apply(b, c);
							});
					  };
			},
			B = function (a) {
				var b,
					d = 0,
					f = e.throttleDelay,
					g = e.ricTimeout,
					h = function () {
						(b = !1), (d = c.now()), a();
					},
					i =
						m && g > 49
							? function () {
									m(h, { timeout: g }), g !== e.ricTimeout && (g = e.ricTimeout);
							  }
							: A(function () {
									k(h);
							  }, !0);
				return function (a) {
					var e;
					(a = !0 === a) && (g = 33),
						b || ((b = !0), (e = f - (c.now() - d)), e < 0 && (e = 0), a || e < 9 ? i() : k(i, e));
				};
			},
			C = function (a) {
				var b,
					d,
					e = 99,
					f = function () {
						(b = null), a();
					},
					g = function () {
						var a = c.now() - d;
						a < e ? k(g, e - a) : (m || f)(f);
					};
				return function () {
					(d = c.now()), b || (b = k(g, e));
				};
			},
			D = (function () {
				var g,
					m,
					o,
					p,
					y,
					D,
					F,
					G,
					H,
					I,
					J,
					K,
					L = /^img$/i,
					M = /^iframe$/i,
					N = 'onscroll' in a && !/(gle|ing)bot/.test(navigator.userAgent),
					O = 0,
					P = 0,
					Q = 0,
					R = -1,
					S = function (a) {
						Q--, (!a || Q < 0 || !a.target) && (Q = 0);
					},
					T = function (a) {
						return (
							null == K && (K = 'hidden' == x(b.body, 'visibility')),
							K || !('hidden' == x(a.parentNode, 'visibility') && 'hidden' == x(a, 'visibility'))
						);
					},
					U = function (a, c) {
						var d,
							e = a,
							g = T(a);
						for (G -= c, J += c, H -= c, I += c; g && (e = e.offsetParent) && e != b.body && e != f; )
							(g = (x(e, 'opacity') || 1) > 0) &&
								'visible' != x(e, 'overflow') &&
								((d = e.getBoundingClientRect()),
								(g = I > d.left && H < d.right && J > d.top - 1 && G < d.bottom + 1));
						return g;
					},
					V = function () {
						var a,
							c,
							h,
							j,
							k,
							l,
							n,
							o,
							q,
							r,
							s,
							t,
							u = d.elements;
						if ((p = e.loadMode) && Q < 8 && (a = u.length)) {
							for (c = 0, R++; c < a; c++)
								if (u[c] && !u[c]._lazyRace)
									if (!N || (d.prematureUnveil && d.prematureUnveil(u[c]))) ba(u[c]);
									else if (
										(((o = u[c][i]('data-expand')) && (l = 1 * o)) || (l = P),
										r ||
											((r =
												!e.expand || e.expand < 1
													? f.clientHeight > 500 && f.clientWidth > 500
														? 500
														: 370
													: e.expand),
											(d._defEx = r),
											(s = r * e.expFactor),
											(t = e.hFac),
											(K = null),
											P < s && Q < 1 && R > 2 && p > 2 && !b.hidden
												? ((P = s), (R = 0))
												: (P = p > 1 && R > 1 && Q < 6 ? r : O)),
										q !== l && ((D = innerWidth + l * t), (F = innerHeight + l), (n = -1 * l), (q = l)),
										(h = u[c].getBoundingClientRect()),
										(J = h.bottom) >= n &&
											(G = h.top) <= F &&
											(I = h.right) >= n * t &&
											(H = h.left) <= D &&
											(J || I || H || G) &&
											(e.loadHidden || T(u[c])) &&
											((m && Q < 3 && !o && (p < 3 || R < 4)) || U(u[c], l)))
									) {
										if ((ba(u[c]), (k = !0), Q > 9)) break;
									} else
										!k &&
											m &&
											!j &&
											Q < 4 &&
											R < 4 &&
											p > 2 &&
											(g[0] || e.preloadAfterLoad) &&
											(g[0] || (!o && (J || I || H || G || 'auto' != u[c][i](e.sizesAttr)))) &&
											(j = g[0] || u[c]);
							j && !k && ba(j);
						}
					},
					W = B(V),
					X = function (a) {
						var b = a.target;
						if (b._lazyCache) return void delete b._lazyCache;
						S(a), s(b, e.loadedClass), t(b, e.loadingClass), u(b, Z), v(b, 'lazyloaded');
					},
					Y = A(X),
					Z = function (a) {
						Y({ target: a.target });
					},
					$ = function (a, b) {
						try {
							a.contentWindow.location.replace(b);
						} catch (c) {
							a.src = b;
						}
					},
					_ = function (a) {
						var b,
							c = a[i](e.srcsetAttr);
						(b = e.customMedia[a[i]('data-media') || a[i]('media')]) && a.setAttribute('media', b),
							c && a.setAttribute('srcset', c);
					},
					aa = A(function (a, b, c, d, f) {
						var g, h, j, l, m, p;
						(m = v(a, 'lazybeforeunveil', b)).defaultPrevented ||
							(d && (c ? s(a, e.autosizesClass) : a.setAttribute('sizes', d)),
							(h = a[i](e.srcsetAttr)),
							(g = a[i](e.srcAttr)),
							f && ((j = a.parentNode), (l = j && n.test(j.nodeName || ''))),
							(p = b.firesLoad || ('src' in a && (h || g || l))),
							(m = { target: a }),
							s(a, e.loadingClass),
							p && (clearTimeout(o), (o = k(S, 2500)), u(a, Z, !0)),
							l && q.call(j.getElementsByTagName('source'), _),
							h ? a.setAttribute('srcset', h) : g && !l && (M.test(a.nodeName) ? $(a, g) : (a.src = g)),
							f && (h || l) && w(a, { src: g })),
							a._lazyRace && delete a._lazyRace,
							t(a, e.lazyClass),
							z(function () {
								var b = a.complete && a.naturalWidth > 1;
								(p && !b) ||
									(b && s(a, 'ls-is-cached'),
									X(m),
									(a._lazyCache = !0),
									k(function () {
										'_lazyCache' in a && delete a._lazyCache;
									}, 9)),
									'lazy' == a.loading && Q--;
							}, !0);
					}),
					ba = function (a) {
						if (!a._lazyRace) {
							var b,
								c = L.test(a.nodeName),
								d = c && (a[i](e.sizesAttr) || a[i]('sizes')),
								f = 'auto' == d;
							((!f && m) ||
								!c ||
								(!a[i]('src') && !a.srcset) ||
								a.complete ||
								r(a, e.errorClass) ||
								!r(a, e.lazyClass)) &&
								((b = v(a, 'lazyunveilread').detail),
								f && E.updateElem(a, !0, a.offsetWidth),
								(a._lazyRace = !0),
								Q++,
								aa(a, b, f, d, c));
						}
					},
					ca = C(function () {
						(e.loadMode = 3), W();
					}),
					da = function () {
						3 == e.loadMode && (e.loadMode = 2), ca();
					},
					ea = function () {
						if (!m) {
							if (c.now() - y < 999) return void k(ea, 999);
							(m = !0), (e.loadMode = 3), W(), j('scroll', da, !0);
						}
					};
				return {
					_: function () {
						(y = c.now()),
							(d.elements = b.getElementsByClassName(e.lazyClass)),
							(g = b.getElementsByClassName(e.lazyClass + ' ' + e.preloadClass)),
							j('scroll', W, !0),
							j('resize', W, !0),
							j('pageshow', function (a) {
								if (a.persisted) {
									var c = b.querySelectorAll('.' + e.loadingClass);
									c.length &&
										c.forEach &&
										l(function () {
											c.forEach(function (a) {
												a.complete && ba(a);
											});
										});
								}
							}),
							a.MutationObserver
								? new MutationObserver(W).observe(f, { childList: !0, subtree: !0, attributes: !0 })
								: (f[h]('DOMNodeInserted', W, !0), f[h]('DOMAttrModified', W, !0), setInterval(W, 999)),
							j('hashchange', W, !0),
							['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function (a) {
								b[h](a, W, !0);
							}),
							/d$|^c/.test(b.readyState) ? ea() : (j('load', ea), b[h]('DOMContentLoaded', W), k(ea, 2e4)),
							d.elements.length ? (V(), z._lsFlush()) : W();
					},
					checkElems: W,
					unveil: ba,
					_aLSL: da,
				};
			})(),
			E = (function () {
				var a,
					c = A(function (a, b, c, d) {
						var e, f, g;
						if (((a._lazysizesWidth = d), (d += 'px'), a.setAttribute('sizes', d), n.test(b.nodeName || '')))
							for (e = b.getElementsByTagName('source'), f = 0, g = e.length; f < g; f++)
								e[f].setAttribute('sizes', d);
						c.detail.dataAttr || w(a, c.detail);
					}),
					d = function (a, b, d) {
						var e,
							f = a.parentNode;
						f &&
							((d = y(a, f, d)),
							(e = v(a, 'lazybeforesizes', { width: d, dataAttr: !!b })),
							e.defaultPrevented || ((d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)));
					},
					f = function () {
						var b,
							c = a.length;
						if (c) for (b = 0; b < c; b++) d(a[b]);
					},
					g = C(f);
				return {
					_: function () {
						(a = b.getElementsByClassName(e.autosizesClass)), j('resize', g);
					},
					checkElems: g,
					updateElem: d,
				};
			})(),
			F = function () {
				!F.i && b.getElementsByClassName && ((F.i = !0), E._(), D._());
			};
		return (
			k(function () {
				e.init && F();
			}),
			(d = { cfg: e, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z })
		);
	}),
	($.fn.svgToInline = function (a) {
		'use strict';
		var b = { class: this.selector.replace('.', ''), useClass: (a && a.useTriggerClass) || !1 };
		this.each(function () {
			var a = { currency: $(this), oldClass: '', newClass: '', path: $(this).attr('data') || $(this).attr('src') },
				c = { element: '', svgTag: '', svgTagWithoutClass: '' },
				d = $(this).attr('class').split(' '),
				e = d.length;
			if (e > 0)
				for (var f = 0; f < e; ++f) {
					var g = '';
					(d[f] !== b.class || b.useClass) && (f !== d.length - 1 && (g = ' '), d[f] && (a.newClass += d[f] + g));
				}
			$.ajax({
				url: a.path,
				dataType: 'text',
				success: function (b) {
					(c.element = b.replace(/<[?!][\s\w\"-\/:=?]+>/g, '')),
						(c.svgTag = c.element.match(/<svg[\w\s\t\n:="\\'\/.#-]+>/g)),
						(c.svgTagWithoutClass = c.svgTag[0].replace(/class=\"[\w\s-_]+\"/, '')),
						(a.oldClass = c.svgTag[0].match(/class=\"(.*?)\"/)),
						a.oldClass && a.oldClass[1] && a.newClass && (a.newClass = a.oldClass[1] + ' ' + a.newClass),
						'' !== a.newClass && (a.newClass = 'class="' + a.newClass + '"'),
						(c.svgTagWithoutClass = c.svgTagWithoutClass.replace('>', ' ' + a.newClass + '>')),
						a.currency.replaceWith(c.element.replace(/<svg[\w\s\t\n:="\\'\/.#-]+>/g, c.svgTagWithoutClass));
				},
			});
		});
	}),
	(function (a, b, c) {
		function d(a) {
			return function () {
				return this[a];
			};
		}
		function e(a, b) {
			var c = a.split('.'),
				d = fa;
			!(c[0] in d) && d.execScript && d.execScript('var ' + c[0]);
			for (var e; c.length && (e = c.shift()); ) c.length || b === ba ? (d = d[e] ? d[e] : (d[e] = {})) : (d[e] = b);
		}
		function f(a, b, c) {
			return a.call.apply(a.bind, arguments);
		}
		function g(a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function () {
					var c = Array.prototype.slice.call(arguments);
					return Array.prototype.unshift.apply(c, d), a.apply(b, c);
				};
			}
			return function () {
				return a.apply(b, arguments);
			};
		}
		function h(a, b, c) {
			return (
				(h = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? f : g),
				h.apply(da, arguments)
			);
		}
		function i(a, b) {
			(this.G = a), (this.u = b || a), (this.z = this.u.document), (this.R = ba);
		}
		function j(a, c, d) {
			(a = a.z.getElementsByTagName(c)[0]),
				a || (a = b.documentElement),
				a && a.lastChild && a.insertBefore(d, a.lastChild);
		}
		function k(a, b) {
			return a.createElement('link', { rel: 'stylesheet', href: b });
		}
		function l(a, b) {
			return a.createElement('script', { src: b });
		}
		function m(a, b) {
			for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return;
			c.push(b),
				(a.className = c
					.join(' ')
					.replace(/\s+/g, ' ')
					.replace(/^\s+|\s+$/, ''));
		}
		function n(a, b) {
			for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
			a.className = d
				.join(' ')
				.replace(/\s+/g, ' ')
				.replace(/^\s+|\s+$/, '');
		}
		function o(a, b) {
			for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return ca;
			return ea;
		}
		function p(a) {
			if (a.R === ba) {
				var b = a.z.createElement('p');
				(b.innerHTML = '<a style="top:1px;">w</a>'),
					(a.R = /top/.test(b.getElementsByTagName('a')[0].getAttribute('style')));
			}
			return a.R;
		}
		function q(a) {
			var b = a.u.location.protocol;
			return 'about:' == b && (b = a.G.location.protocol), 'https:' == b ? 'https:' : 'http:';
		}
		function r(a, b, c) {
			(this.w = a), (this.T = b), (this.Aa = c);
		}
		function s(a, b, c, d) {
			(this.e = a != da ? a : da),
				(this.o = b != da ? b : da),
				(this.ba = c != da ? c : da),
				(this.f = d != da ? d : da);
		}
		function t(a) {
			a = ha.exec(a);
			var b = da,
				c = da,
				d = da,
				e = da;
			return (
				a &&
					(a[1] !== da && a[1] && (b = parseInt(a[1], 10)),
					a[2] !== da && a[2] && (c = parseInt(a[2], 10)),
					a[3] !== da && a[3] && (d = parseInt(a[3], 10)),
					a[4] !== da && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4])),
				new s(b, c, d, e)
			);
		}
		function u(a, b, c, d, e, f, g, h, i, j, k) {
			(this.J = a),
				(this.Ha = b),
				(this.za = c),
				(this.ga = d),
				(this.Fa = e),
				(this.fa = f),
				(this.xa = g),
				(this.Ga = h),
				(this.wa = i),
				(this.ea = j),
				(this.k = k);
		}
		function v(a, b) {
			(this.a = a), (this.H = b);
		}
		function w(a) {
			var b = y(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
			return '' != b
				? (/BB\d{2}/.test(b) && (b = 'BlackBerry'), b)
				: ((a = y(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1)),
				  '' != a ? ('Mac_PowerPC' == a && (a = 'Macintosh'), a) : 'Unknown');
		}
		function x(a) {
			var b = y(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
			if (b || (b = y(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = y(a.a, /(iPhone )?OS ([\d_]+)/, 2))) return b;
			if ((b = y(a.a, /(?:Linux|CrOS) ([^;)]+)/, 1)))
				for (var b = b.split(/\s/), c = 0; c < b.length; c += 1) if (/^[\d\._]+$/.test(b[c])) return b[c];
			return (a = y(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : 'Unknown';
		}
		function y(a, b, c) {
			return (a = a.match(b)) && a[c] ? a[c] : '';
		}
		function z(a) {
			if (a.documentMode) return a.documentMode;
		}
		function A(a) {
			this.va = a || '-';
		}
		function B(a, b) {
			(this.J = a), (this.U = 4), (this.K = 'n');
			var c = (b || 'n4').match(/^([nio])([1-9])$/i);
			c && ((this.K = c[1]), (this.U = parseInt(c[2], 10)));
		}
		function C(a) {
			return a.K + a.U;
		}
		function D(a) {
			var b = 4,
				c = 'n',
				d = da;
			return (
				a &&
					((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()),
					(d = a.match(/([1-9]00|normal|bold)/i)) &&
						d[1] &&
						(/bold/i.test(d[1]) ? (b = 7) : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10)))),
				c + b
			);
		}
		function E(a, b, c) {
			(this.c = a), (this.h = b), (this.M = c), (this.j = 'wf'), (this.g = new A('-'));
		}
		function F(a) {
			m(a.h, a.g.f(a.j, 'loading')), H(a, 'loading');
		}
		function G(a) {
			n(a.h, a.g.f(a.j, 'loading')),
				o(a.h, a.g.f(a.j, 'active')) || m(a.h, a.g.f(a.j, 'inactive')),
				H(a, 'inactive');
		}
		function H(a, b, c) {
			a.M[b] && (c ? a.M[b](c.getName(), C(c)) : a.M[b]());
		}
		function I(a, b) {
			(this.c = a), (this.C = b), (this.s = this.c.createElement('span', { 'aria-hidden': 'true' }, this.C));
		}
		function J(a, b) {
			var c,
				d = a.s;
			c = [];
			for (var e = b.J.split(/,\s*/), f = 0; f < e.length; f++) {
				var g = e[f].replace(/['"]/g, '');
				-1 == g.indexOf(' ') ? c.push(g) : c.push("'" + g + "'");
			}
			(c = c.join(',')),
				(e = 'normal'),
				(f = b.U + '00'),
				'o' === b.K ? (e = 'oblique') : 'i' === b.K && (e = 'italic'),
				(c =
					'position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:' +
					c +
					';font-style:' +
					e +
					';font-weight:' +
					f +
					';'),
				p(a.c) ? d.setAttribute('style', c) : (d.style.cssText = c);
		}
		function K(a) {
			j(a.c, 'body', a.s);
		}
		function L(a, b, c, d, e, f, g, h) {
			(this.V = a),
				(this.ta = b),
				(this.c = c),
				(this.q = d),
				(this.C = h || 'BESbswy'),
				(this.k = e),
				(this.F = {}),
				(this.S = f || 5e3),
				(this.Z = g || da),
				(this.B = this.A = da),
				(a = new I(this.c, this.C)),
				K(a);
			for (var i in ja) ja.hasOwnProperty(i) && (J(a, new B(ja[i], C(this.q))), (this.F[ja[i]] = a.s.offsetWidth));
			a.remove();
		}
		function M(a, b, c) {
			for (var d in ja) if (ja.hasOwnProperty(d) && b === a.F[ja[d]] && c === a.F[ja[d]]) return ca;
			return ea;
		}
		function N(a) {
			var b = a.A.s.offsetWidth,
				c = a.B.s.offsetWidth;
			(b === a.F.serif && c === a.F['sans-serif']) || (a.k.T && M(a, b, c))
				? ga() - a.ya >= a.S
					? a.k.T && M(a, b, c) && (a.Z === da || a.Z.hasOwnProperty(a.q.getName()))
						? O(a, a.V)
						: O(a, a.ta)
					: setTimeout(
							h(function () {
								N(this);
							}, a),
							25,
					  )
				: O(a, a.V);
		}
		function O(a, b) {
			a.A.remove(), a.B.remove(), b(a.q);
		}
		function P(a, b, c, d) {
			(this.c = b), (this.t = c), (this.N = 0), (this.ca = this.Y = ea), (this.S = d), (this.k = a.k);
		}
		function Q(a, b, c, d, e) {
			if (0 === b.length && e) G(a.t);
			else
				for (a.N += b.length, e && (a.Y = e), e = 0; e < b.length; e++) {
					var f = b[e],
						g = c[f.getName()],
						i = a.t,
						j = f;
					m(i.h, i.g.f(i.j, j.getName(), C(j).toString(), 'loading')),
						H(i, 'fontloading', j),
						new L(h(a.ha, a), h(a.ia, a), a.c, f, a.k, a.S, d, g).start();
				}
		}
		function R(a) {
			0 == --a.N &&
				a.Y &&
				(a.ca
					? ((a = a.t),
					  n(a.h, a.g.f(a.j, 'loading')),
					  n(a.h, a.g.f(a.j, 'inactive')),
					  m(a.h, a.g.f(a.j, 'active')),
					  H(a, 'active'))
					: G(a.t));
		}
		function S(a, b, c) {
			(this.G = a), (this.W = b), (this.a = c), (this.O = this.P = 0);
		}
		function T(a, b) {
			ma.W.$[a] = b;
		}
		function U(a, b) {
			(this.c = a), (this.d = b);
		}
		function V(a, b) {
			(this.c = a), (this.d = b);
		}
		function W(a) {
			var b = a.split(':');
			if (((a = b[0]), b[1])) {
				for (var c = b[1].split(','), b = [], d = 0, e = c.length; d < e; d++) {
					var f = c[d];
					if (f) {
						var g = na[f];
						b.push(g || f);
					}
				}
				for (c = [], d = 0; d < b.length; d += 1) c.push(new B(a, b[d]));
				return c;
			}
			return [new B(a)];
		}
		function X(a, b, c) {
			(this.a = a), (this.c = b), (this.d = c), (this.m = []);
		}
		function Y(a, b) {
			(this.c = a), (this.d = b), (this.m = []);
		}
		function Z(a, b, c) {
			(this.L = a || b + oa), (this.p = []), (this.Q = []), (this.da = c || '');
		}
		function $(a) {
			(this.p = a), (this.aa = []), (this.I = {});
		}
		function _(a, b, c) {
			(this.a = a), (this.c = b), (this.d = c);
		}
		function aa(a, b) {
			(this.c = a), (this.d = b), (this.m = []);
		}
		var ba = void 0,
			ca = !0,
			da = null,
			ea = !1,
			fa = this;
		fa.Ba = ca;
		var ga =
			Date.now ||
			function () {
				return +new Date();
			};
		(i.prototype.createElement = function (a, b, c) {
			if (((a = this.z.createElement(a)), b))
				for (var d in b)
					if (b.hasOwnProperty(d))
						if ('style' == d) {
							var e = a,
								f = b[d];
							p(this) ? e.setAttribute('style', f) : (e.style.cssText = f);
						} else a.setAttribute(d, b[d]);
			return c && a.appendChild(this.z.createTextNode(c)), a;
		}),
			e('webfont.BrowserInfo', r),
			(r.prototype.qa = d('w')),
			(r.prototype.hasWebFontSupport = r.prototype.qa),
			(r.prototype.ra = d('T')),
			(r.prototype.hasWebKitFallbackBug = r.prototype.ra),
			(r.prototype.sa = d('Aa')),
			(r.prototype.hasWebKitMetricsBug = r.prototype.sa);
		var ha = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
		(s.prototype.toString = function () {
			return [this.e, this.o || '', this.ba || '', this.f || ''].join('');
		}),
			e('webfont.UserAgent', u),
			(u.prototype.getName = d('J')),
			(u.prototype.getName = u.prototype.getName),
			(u.prototype.pa = d('za')),
			(u.prototype.getVersion = u.prototype.pa),
			(u.prototype.la = d('ga')),
			(u.prototype.getEngine = u.prototype.la),
			(u.prototype.ma = d('fa')),
			(u.prototype.getEngineVersion = u.prototype.ma),
			(u.prototype.na = d('xa')),
			(u.prototype.getPlatform = u.prototype.na),
			(u.prototype.oa = d('wa')),
			(u.prototype.getPlatformVersion = u.prototype.oa),
			(u.prototype.ka = d('ea')),
			(u.prototype.getDocumentMode = u.prototype.ka),
			(u.prototype.ja = d('k')),
			(u.prototype.getBrowserInfo = u.prototype.ja);
		var ia = new u(
			'Unknown',
			new s(),
			'Unknown',
			'Unknown',
			new s(),
			'Unknown',
			'Unknown',
			new s(),
			'Unknown',
			ba,
			new r(ea, ea, ea),
		);
		(v.prototype.parse = function () {
			var a;
			if (-1 != this.a.indexOf('MSIE')) {
				a = w(this);
				var b = x(this),
					c = t(b),
					d = y(this.a, /MSIE ([\d\w\.]+)/, 1),
					e = t(d);
				a = new u(
					'MSIE',
					e,
					d,
					'MSIE',
					e,
					d,
					a,
					c,
					b,
					z(this.H),
					new r(('Windows' == a && 6 <= e.e) || ('Windows Phone' == a && 8 <= c.e), ea, ea),
				);
			} else if (-1 != this.a.indexOf('Opera'))
				a: {
					a = 'Unknown';
					var b = y(this.a, /Presto\/([\d\w\.]+)/, 1),
						c = t(b),
						d = x(this),
						e = t(d),
						f = z(this.H);
					if (
						(c.e !== da
							? (a = 'Presto')
							: (-1 != this.a.indexOf('Gecko') && (a = 'Gecko'), (b = y(this.a, /rv:([^\)]+)/, 1)), (c = t(b))),
						-1 != this.a.indexOf('Opera Mini/'))
					) {
						var g = y(this.a, /Opera Mini\/([\d\.]+)/, 1),
							h = t(g);
						a = new u('OperaMini', h, g, a, c, b, w(this), e, d, f, new r(ea, ea, ea));
					} else {
						if (
							-1 != this.a.indexOf('Version/') &&
							((g = y(this.a, /Version\/([\d\.]+)/, 1)), (h = t(g)), h.e !== da)
						) {
							a = new u('Opera', h, g, a, c, b, w(this), e, d, f, new r(10 <= h.e, ea, ea));
							break a;
						}
						(g = y(this.a, /Opera[\/ ]([\d\.]+)/, 1)),
							(h = t(g)),
							(a =
								h.e !== da
									? new u('Opera', h, g, a, c, b, w(this), e, d, f, new r(10 <= h.e, ea, ea))
									: new u('Opera', new s(), 'Unknown', a, c, b, w(this), e, d, f, new r(ea, ea, ea)));
					}
				}
			else if (/AppleWeb(K|k)it/.test(this.a)) {
				a = w(this);
				var b = x(this),
					c = t(b),
					d = y(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
					e = t(d),
					f = 'Unknown',
					g = new s(),
					h = 'Unknown',
					i = ea;
				-1 != this.a.indexOf('Chrome') || -1 != this.a.indexOf('CrMo') || -1 != this.a.indexOf('CriOS')
					? (f = 'Chrome')
					: /Silk\/\d/.test(this.a)
					? (f = 'Silk')
					: 'BlackBerry' == a || 'Android' == a
					? (f = 'BuiltinBrowser')
					: -1 != this.a.indexOf('Safari')
					? (f = 'Safari')
					: -1 != this.a.indexOf('AdobeAIR') && (f = 'AdobeAIR'),
					'BuiltinBrowser' == f
						? (h = 'Unknown')
						: 'Silk' == f
						? (h = y(this.a, /Silk\/([\d\._]+)/, 1))
						: 'Chrome' == f
						? (h = y(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2))
						: -1 != this.a.indexOf('Version/')
						? (h = y(this.a, /Version\/([\d\.\w]+)/, 1))
						: 'AdobeAIR' == f && (h = y(this.a, /AdobeAIR\/([\d\.]+)/, 1)),
					(g = t(h)),
					(i =
						'AdobeAIR' == f
							? 2 < g.e || (2 == g.e && 5 <= g.o)
							: 'BlackBerry' == a
							? 10 <= c.e
							: 'Android' == a
							? 2 < c.e || (2 == c.e && 1 < c.o)
							: 526 <= e.e || (525 <= e.e && 13 <= e.o)),
					(a = new u(
						f,
						g,
						h,
						'AppleWebKit',
						e,
						d,
						a,
						c,
						b,
						z(this.H),
						new r(
							i,
							536 > e.e || (536 == e.e && 11 > e.o),
							'iPhone' == a || 'iPad' == a || 'iPod' == a || 'Macintosh' == a,
						),
					));
			} else
				-1 != this.a.indexOf('Gecko')
					? ((a = 'Unknown'),
					  (b = new s()),
					  (c = 'Unknown'),
					  (d = x(this)),
					  (e = t(d)),
					  (f = ea),
					  -1 != this.a.indexOf('Firefox')
							? ((a = 'Firefox'),
							  (c = y(this.a, /Firefox\/([\d\w\.]+)/, 1)),
							  (b = t(c)),
							  (f = 3 <= b.e && 5 <= b.o))
							: -1 != this.a.indexOf('Mozilla') && (a = 'Mozilla'),
					  (g = y(this.a, /rv:([^\)]+)/, 1)),
					  (h = t(g)),
					  f ||
							(f =
								1 < h.e ||
								(1 == h.e && 9 < h.o) ||
								(1 == h.e && 9 == h.o && 2 <= h.ba) ||
								g.match(/1\.9\.1b[123]/) != da ||
								g.match(/1\.9\.1\.[\d\.]+/) != da),
					  (a = new u(a, b, c, 'Gecko', h, g, w(this), e, d, z(this.H), new r(f, ea, ea))))
					: (a = ia);
			return a;
		}),
			(A.prototype.f = function (a) {
				for (var b = [], c = 0; c < arguments.length; c++)
					b.push(arguments[c].replace(/[\W_]+/g, '').toLowerCase());
				return b.join(this.va);
			}),
			(B.prototype.getName = d('J')),
			(I.prototype.remove = function () {
				var a = this.s;
				a.parentNode && a.parentNode.removeChild(a);
			});
		var ja = { Ea: 'serif', Da: 'sans-serif', Ca: 'monospace' };
		(L.prototype.start = function () {
			(this.A = new I(this.c, this.C)),
				K(this.A),
				(this.B = new I(this.c, this.C)),
				K(this.B),
				(this.ya = ga()),
				J(this.A, new B(this.q.getName() + ',serif', C(this.q))),
				J(this.B, new B(this.q.getName() + ',sans-serif', C(this.q))),
				N(this);
		}),
			(P.prototype.ha = function (a) {
				var b = this.t;
				n(b.h, b.g.f(b.j, a.getName(), C(a).toString(), 'loading')),
					n(b.h, b.g.f(b.j, a.getName(), C(a).toString(), 'inactive')),
					m(b.h, b.g.f(b.j, a.getName(), C(a).toString(), 'active')),
					H(b, 'fontactive', a),
					(this.ca = ca),
					R(this);
			}),
			(P.prototype.ia = function (a) {
				var b = this.t;
				n(b.h, b.g.f(b.j, a.getName(), C(a).toString(), 'loading')),
					o(b.h, b.g.f(b.j, a.getName(), C(a).toString(), 'active')) ||
						m(b.h, b.g.f(b.j, a.getName(), C(a).toString(), 'inactive')),
					H(b, 'fontinactive', a),
					R(this);
			}),
			(S.prototype.load = function (a) {
				var b = a.context || this.G;
				if (((this.c = new i(this.G, b)), (b = new E(this.c, b.document.documentElement, a)), this.a.k.w)) {
					var c,
						d = this.W,
						e = this.c,
						f = [];
					for (c in a)
						if (a.hasOwnProperty(c)) {
							var g = d.$[c];
							g && f.push(g(a[c], e));
						}
					for (
						a = a.timeout, this.O = this.P = f.length, a = new P(this.a, this.c, b, a), c = 0, d = f.length;
						c < d;
						c++
					)
						(e = f[c]), e.v(this.a, h(this.ua, this, e, b, a));
				} else G(b);
			}),
			(S.prototype.ua = function (a, b, c, d) {
				var e = this;
				d
					? a.load(function (a, d, f) {
							var g = 0 == --e.P;
							g && F(b),
								setTimeout(function () {
									Q(c, a, d || {}, f || da, g);
								}, 0);
					  })
					: ((a = 0 == --this.P), this.O--, a && (0 == this.O ? G(b) : F(b)), Q(c, [], {}, da, a));
			});
		var ka = a,
			la = new v(navigator.userAgent, b).parse(),
			ma = (ka.WebFont = new S(
				a,
				new (function () {
					this.$ = {};
				})(),
				la,
			));
		(ma.load = ma.load),
			(U.prototype.load = function (a) {
				var b,
					c,
					d = this.d.urls || [],
					e = this.d.families || [];
				for (b = 0, c = d.length; b < c; b++) j(this.c, 'head', k(this.c, d[b]));
				for (d = [], b = 0, c = e.length; b < c; b++) {
					var f = e[b].split(':');
					if (f[1]) for (var g = f[1].split(','), h = 0; h < g.length; h += 1) d.push(new B(f[0], g[h]));
					else d.push(new B(f[0]));
				}
				a(d);
			}),
			(U.prototype.v = function (a, b) {
				return b(a.k.w);
			}),
			T('custom', function (a, b) {
				return new U(b, a);
			});
		var na = { regular: 'n4', bold: 'n7', italic: 'i4', bolditalic: 'i7', r: 'n4', b: 'n7', i: 'i4', bi: 'i7' };
		(V.prototype.v = function (a, b) {
			return b(a.k.w);
		}),
			(V.prototype.load = function (a) {
				j(this.c, 'head', k(this.c, q(this.c) + '//webfonts.fontslive.com/css/' + this.d.key + '.css'));
				for (var b = this.d.families, c = [], d = 0, e = b.length; d < e; d++) c.push.apply(c, W(b[d]));
				a(c);
			}),
			T('ascender', function (a, b) {
				return new V(b, a);
			}),
			(X.prototype.v = function (a, b) {
				var c = this,
					d = c.d.projectId,
					e = c.d.version;
				if (d) {
					var f = c.c.u,
						g = c.c.createElement('script');
					g.id = '__MonotypeAPIScript__' + d;
					var h = ea;
					(g.onload = g.onreadystatechange =
						function () {
							if (!(h || (this.readyState && 'loaded' !== this.readyState && 'complete' !== this.readyState))) {
								if (((h = ca), f['__mti_fntLst' + d])) {
									var e = f['__mti_fntLst' + d]();
									if (e) for (var i = 0; i < e.length; i++) c.m.push(new B(e[i].fontfamily));
								}
								b(a.k.w), (g.onload = g.onreadystatechange = da);
							}
						}),
						(g.src = c.D(d, e)),
						j(this.c, 'head', g);
				} else b(ca);
			}),
			(X.prototype.D = function (a, b) {
				return (
					q(this.c) +
					'//' +
					(this.d.api || 'fast.fonts.com/jsapi').replace(/^.*http(s?):(\/\/)?/, '') +
					'/' +
					a +
					'.js' +
					(b ? '?v=' + b : '')
				);
			}),
			(X.prototype.load = function (a) {
				a(this.m);
			}),
			T('monotype', function (a, c) {
				return new X(new v(navigator.userAgent, b).parse(), c, a);
			}),
			(Y.prototype.D = function (a) {
				var b = q(this.c);
				return (this.d.api || b + '//use.typekit.net') + '/' + a + '.js';
			}),
			(Y.prototype.v = function (a, b) {
				var c = this.d.id,
					d = this.d,
					e = this.c.u,
					f = this;
				c
					? (e.__webfonttypekitmodule__ || (e.__webfonttypekitmodule__ = {}),
					  (e.__webfonttypekitmodule__[c] = function (c) {
							c(a, d, function (a, c, d) {
								for (var e = 0; e < c.length; e += 1) {
									var g = d[c[e]];
									if (g) for (var h = 0; h < g.length; h += 1) f.m.push(new B(c[e], g[h]));
									else f.m.push(new B(c[e]));
								}
								b(a);
							});
					  }),
					  (c = l(this.c, this.D(c))),
					  j(this.c, 'head', c))
					: b(ca);
			}),
			(Y.prototype.load = function (a) {
				a(this.m);
			}),
			T('typekit', function (a, b) {
				return new Y(b, a);
			});
		var oa = '//fonts.googleapis.com/css';
		Z.prototype.f = function () {
			if (0 == this.p.length) throw Error('No fonts to load !');
			if (-1 != this.L.indexOf('kit=')) return this.L;
			for (var a = this.p.length, b = [], c = 0; c < a; c++) b.push(this.p[c].replace(/ /g, '+'));
			return (
				(a = this.L + '?family=' + b.join('%7C')),
				0 < this.Q.length && (a += '&subset=' + this.Q.join(',')),
				0 < this.da.length && (a += '&text=' + encodeURIComponent(this.da)),
				a
			);
		};
		var pa = {
				latin: 'BESbswy',
				cyrillic: '&#1081;&#1103;&#1046;',
				greek: '&#945;&#946;&#931;',
				khmer: '&#x1780;&#x1781;&#x1782;',
				Hanuman: '&#x1780;&#x1781;&#x1782;',
			},
			qa = {
				thin: '1',
				extralight: '2',
				'extra-light': '2',
				ultralight: '2',
				'ultra-light': '2',
				light: '3',
				regular: '4',
				book: '4',
				medium: '5',
				'semi-bold': '6',
				semibold: '6',
				'demi-bold': '6',
				demibold: '6',
				bold: '7',
				'extra-bold': '8',
				extrabold: '8',
				'ultra-bold': '8',
				ultrabold: '8',
				black: '9',
				heavy: '9',
				l: '3',
				r: '4',
				b: '7',
			},
			ra = { i: 'i', italic: 'i', n: 'n', normal: 'n' },
			sa = RegExp(
				'^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$',
			);
		$.prototype.parse = function () {
			for (var a = this.p.length, b = 0; b < a; b++) {
				var c = this.p[b].split(':'),
					d = c[0].replace(/\+/g, ' '),
					e = ['n4'];
				if (2 <= c.length) {
					var f,
						g = c[1];
					if (((f = []), g))
						for (var g = g.split(','), h = g.length, i = 0; i < h; i++) {
							var j;
							if (((j = g[i]), j.match(/^[\w]+$/))) {
								j = sa.exec(j.toLowerCase());
								var k = ba;
								if (j == da) k = '';
								else {
									if (((k = ba), (k = j[1]) == da || '' == k)) k = '4';
									else
										var l = qa[k],
											k = l || (isNaN(k) ? '4' : k.substr(0, 1));
									k = [j[2] == da || '' == j[2] ? 'n' : ra[j[2]], k].join('');
								}
								j = k;
							} else j = '';
							j && f.push(j);
						}
					0 < f.length && (e = f),
						3 == c.length &&
							((c = c[2]),
							(f = []),
							(c = c ? c.split(',') : f),
							0 < c.length && (c = pa[c[0]]) && (this.I[d] = c));
				}
				for (this.I[d] || ((c = pa[d]) && (this.I[d] = c)), c = 0; c < e.length; c += 1)
					this.aa.push(new B(d, e[c]));
			}
		};
		var ta = { Arimo: ca, Cousine: ca, Tinos: ca };
		(_.prototype.v = function (a, b) {
			b(a.k.w);
		}),
			(_.prototype.load = function (a) {
				var b = this.c;
				if ('MSIE' == this.a.getName() && this.d.blocking != ca) {
					var c = h(this.X, this, a),
						d = function () {
							b.z.body ? c() : setTimeout(d, 0);
						};
					d();
				} else this.X(a);
			}),
			(_.prototype.X = function (a) {
				for (
					var b = this.c, c = new Z(this.d.api, q(b), this.d.text), d = this.d.families, e = d.length, f = 0;
					f < e;
					f++
				) {
					var g = d[f].split(':');
					3 == g.length && c.Q.push(g.pop());
					var h = '';
					2 == g.length && '' != g[1] && (h = ':'), c.p.push(g.join(h));
				}
				(d = new $(d)), d.parse(), j(b, 'head', k(b, c.f())), a(d.aa, d.I, ta);
			}),
			T('google', function (a, c) {
				return new _(new v(navigator.userAgent, b).parse(), c, a);
			}),
			(aa.prototype.D = function (a) {
				return (
					q(this.c) +
					(this.d.api || '//f.fontdeck.com/s/css/js/') +
					(this.c.u.location.hostname || this.c.G.location.hostname) +
					'/' +
					a +
					'.js'
				);
			}),
			(aa.prototype.v = function (a, b) {
				var c = this.d.id,
					d = this.c.u,
					e = this;
				c
					? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}),
					  (d.__webfontfontdeckmodule__[c] = function (a, c) {
							for (var d = 0, f = c.fonts.length; d < f; ++d) {
								var g = c.fonts[d];
								e.m.push(new B(g.name, D('font-weight:' + g.weight + ';font-style:' + g.style)));
							}
							b(a);
					  }),
					  (c = l(this.c, this.D(c))),
					  j(this.c, 'head', c))
					: b(ca);
			}),
			(aa.prototype.load = function (a) {
				a(this.m);
			}),
			T('fontdeck', function (a, b) {
				return new aa(b, a);
			}),
			a.WebFontConfig && ma.load(a.WebFontConfig);
	})(this, document),
	(function (a, b) {
		a(function () {
			'use strict';
			function a(a, b) {
				return null != a && null != b && a.toLowerCase() === b.toLowerCase();
			}
			function c(a, b) {
				var c,
					d,
					e = a.length;
				if (!e || !b) return !1;
				for (c = b.toLowerCase(), d = 0; d < e; ++d) if (c === a[d].toLowerCase()) return !0;
				return !1;
			}
			function d(a) {
				for (var b in a) i.call(a, b) && (a[b] = new RegExp(a[b], 'i'));
			}
			function e(a) {
				return (a || '').substr(0, 500);
			}
			function f(a, b) {
				(this.ua = e(a)), (this._cache = {}), (this.maxPhoneWidth = b || 600);
			}
			var g = {};
			(g.mobileDetectRules = {
				phones: {
					iPhone: '\\biPhone\\b|\\biPod\\b',
					BlackBerry: 'BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+',
					HTC: 'HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel',
					Nexus: 'Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6',
					Dell: 'Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b',
					Motorola:
						'Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052',
					Samsung:
						'\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F',
					LG: '\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710',
					Sony: 'SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533',
					Asus: 'Asus.*Galaxy|PadFone.*Mobile',
					NokiaLumia: 'Lumia [0-9]{3,4}',
					Micromax:
						'Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b',
					Palm: 'PalmSource|Palm',
					Vertu: 'Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature',
					Pantech:
						'PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790',
					Fly: 'IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250',
					Wiko: 'KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM',
					iMobile: 'i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)',
					SimValley:
						'\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b',
					Wolfgang: 'AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q',
					Alcatel: 'Alcatel',
					Nintendo: 'Nintendo (3DS|Switch)',
					Amoi: 'Amoi',
					INQ: 'INQ',
					OnePlus: 'ONEPLUS',
					GenericPhone:
						'Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser',
				},
				tablets: {
					iPad: 'iPad|iPad.*Mobile',
					NexusTablet: 'Android.*Nexus[\\s]+(7|9|10)',
					GoogleTablet: 'Android.*Pixel C',
					SamsungTablet:
						'SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V',
					Kindle:
						'Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)',
					SurfaceTablet: 'Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)',
					HPTablet: 'HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10',
					AsusTablet:
						'^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b',
					BlackBerryTablet: 'PlayBook|RIM Tablet',
					HTCtablet: 'HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410',
					MotorolaTablet:
						'xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617',
					NookTablet:
						'Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2',
					AcerTablet:
						'Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30',
					ToshibaTablet:
						'Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO',
					LGTablet: '\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b',
					FujitsuTablet: 'Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b',
					PrestigioTablet:
						'PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002',
					LenovoTablet:
						'Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X',
					DellTablet: 'Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7',
					YarvikTablet:
						'Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b',
					MedionTablet: 'Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB',
					ArnovaTablet:
						'97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2',
					IntensoTablet: 'INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004',
					IRUTablet: 'M702pro',
					MegafonTablet: 'MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b',
					EbodaTablet: 'E-Boda (Supreme|Impresspeed|Izzycomm|Essential)',
					AllViewTablet: 'Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)',
					ArchosTablet:
						'\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b',
					AinolTablet: 'NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark',
					NokiaLumiaTablet: 'Lumia 2520',
					SonyTablet:
						'Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712',
					PhilipsTablet: '\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b',
					CubeTablet: 'Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT',
					CobyTablet:
						'MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010',
					MIDTablet:
						'M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10',
					MSITablet:
						'MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b',
					SMiTTablet: 'Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)',
					RockChipTablet: 'Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A',
					FlyTablet: 'IQ310|Fly Vision',
					bqTablet:
						'Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus',
					HuaweiTablet:
						'MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19',
					NecTablet: '\\bN-06D|\\bN-08D',
					PantechTablet: 'Pantech.*P4100',
					BronchoTablet: 'Broncho.*(N701|N708|N802|a710)',
					VersusTablet: 'TOUCHPAD.*[78910]|\\bTOUCHTAB\\b',
					ZyncTablet: 'z1000|Z99 2G|z930|z990|z909|Z919|z900',
					PositivoTablet: 'TB07STA|TB10STA|TB07FTA|TB10FTA',
					NabiTablet: 'Android.*\\bNabi',
					KoboTablet: 'Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build',
					DanewTablet: 'DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b',
					TexetTablet:
						'NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE',
					PlaystationTablet: 'Playstation.*(Portable|Vita)',
					TrekstorTablet:
						'ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab',
					PyleAudioTablet:
						'\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b',
					AdvanTablet:
						'Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ',
					DanyTechTablet:
						'Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1',
					GalapadTablet: 'Android.*\\bG1\\b(?!\\))',
					MicromaxTablet: 'Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b',
					KarbonnTablet: 'Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b',
					AllFineTablet: 'Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide',
					PROSCANTablet:
						'\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b',
					YONESTablet:
						'BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026',
					ChangJiaTablet:
						'TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503',
					GUTablet: 'TX-A1301|TX-M9002|Q702|kf026',
					PointOfViewTablet:
						'TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10',
					OvermaxTablet:
						'OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027',
					HCLTablet:
						'HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync',
					DPSTablet: 'DPS Dream 9|DPS Dual 7',
					VistureTablet: 'V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10',
					CrestaTablet:
						'CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989',
					MediatekTablet: '\\bMT8125|MT8389|MT8135|MT8377\\b',
					ConcordeTablet: 'Concorde([ ]+)?Tab|ConCorde ReadMan',
					GoCleverTablet:
						'GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042',
					ModecomTablet:
						'FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003',
					VoninoTablet:
						'\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b',
					ECSTablet: 'V07OT2|TM105A|S10OT1|TR10CS1',
					StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
					VodafoneTablet: 'SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400',
					EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
					RossMoorTablet: 'RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711',
					iMobileTablet: 'i-mobile i-note',
					TolinoTablet: 'tolino tab [0-9.]+|tolino shine',
					AudioSonicTablet: '\\bC-22Q|T7-QC|T-17B|T-17P\\b',
					AMPETablet: 'Android.* A78 ',
					SkkTablet: 'Android.* (SKYPAD|PHOENIX|CYCLOPS)',
					TecnoTablet: 'TECNO P9|TECNO DP8D',
					JXDTablet:
						'Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b',
					iJoyTablet:
						'Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)',
					FX2Tablet: 'FX2 PAD7|FX2 PAD10',
					XoroTablet:
						'KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151',
					ViewsonicTablet:
						'ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a',
					VerizonTablet: 'QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1',
					OdysTablet:
						'LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10',
					CaptivaTablet: 'CAPTIVA PAD',
					IconbitTablet:
						'NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S',
					TeclastTablet:
						'T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi',
					OndaTablet:
						'\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b',
					JaytechTablet: 'TPC-PA762',
					BlaupunktTablet: 'Endeavour 800NG|Endeavour 1010',
					DigmaTablet:
						'\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b',
					EvolioTablet: 'ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b',
					LavaTablet: 'QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b',
					AocTablet: 'MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712',
					MpmanTablet:
						'MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010',
					CelkonTablet: 'CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b',
					WolderTablet:
						'miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b',
					MediacomTablet: 'M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA',
					MiTablet: '\\bMI PAD\\b|\\bHM NOTE 1W\\b',
					NibiruTablet: 'Nibiru M1|Nibiru Jupiter One',
					NexoTablet:
						'NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI',
					LeaderTablet:
						'TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100',
					UbislateTablet: 'UbiSlate[\\s]?7C',
					PocketBookTablet: 'Pocketbook',
					KocasoTablet: '\\b(TB-1207)\\b',
					HisenseTablet: '\\b(F5281|E2371)\\b',
					Hudl: 'Hudl HT7S3|Hudl 2',
					TelstraTablet: 'T-Hub2',
					GenericTablet:
						'Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107',
				},
				oss: {
					AndroidOS: 'Android',
					BlackBerryOS: 'blackberry|\\bBB10\\b|rim tablet os',
					PalmOS: 'PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino',
					SymbianOS: 'Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b',
					WindowsMobileOS:
						'Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;',
					WindowsPhoneOS:
						'Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;',
					iOS: '\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia',
					iPadOS: 'CPU OS 13',
					MeeGoOS: 'MeeGo',
					MaemoOS: 'Maemo',
					JavaOS: 'J2ME/|\\bMIDP\\b|\\bCLDC\\b',
					webOS: 'webOS|hpwOS',
					badaOS: '\\bBada\\b',
					BREWOS: 'BREW',
				},
				uas: {
					Chrome: '\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?',
					Dolfin: '\\bDolfin\\b',
					Opera: 'Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+',
					Skyfire: 'Skyfire',
					Edge: 'Mobile Safari/[.0-9]* Edge',
					IE: 'IEMobile|MSIEMobile',
					Firefox: 'fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS',
					Bolt: 'bolt',
					TeaShark: 'teashark',
					Blazer: 'Blazer',
					Safari: 'Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari',
					WeChat: '\\bMicroMessenger\\b',
					UCBrowser: 'UC.*Browser|UCWEB',
					baiduboxapp: 'baiduboxapp',
					baidubrowser: 'baidubrowser',
					DiigoBrowser: 'DiigoBrowser',
					Mercury: '\\bMercury\\b',
					ObigoBrowser: 'Obigo',
					NetFront: 'NF-Browser',
					GenericBrowser:
						'NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger',
					PaleMoon: 'Android.*PaleMoon|Mobile.*PaleMoon',
				},
				props: {
					Mobile: 'Mobile/[VER]',
					Build: 'Build/[VER]',
					Version: 'Version/[VER]',
					VendorID: 'VendorID/[VER]',
					iPad: 'iPad.*CPU[a-z ]+[VER]',
					iPhone: 'iPhone.*CPU[a-z ]+[VER]',
					iPod: 'iPod.*CPU[a-z ]+[VER]',
					Kindle: 'Kindle/[VER]',
					Chrome: ['Chrome/[VER]', 'CriOS/[VER]', 'CrMo/[VER]'],
					Coast: ['Coast/[VER]'],
					Dolfin: 'Dolfin/[VER]',
					Firefox: ['Firefox/[VER]', 'FxiOS/[VER]'],
					Fennec: 'Fennec/[VER]',
					Edge: 'Edge/[VER]',
					IE: ['IEMobile/[VER];', 'IEMobile [VER]', 'MSIE [VER];', 'Trident/[0-9.]+;.*rv:[VER]'],
					NetFront: 'NetFront/[VER]',
					NokiaBrowser: 'NokiaBrowser/[VER]',
					Opera: [' OPR/[VER]', 'Opera Mini/[VER]', 'Version/[VER]'],
					'Opera Mini': 'Opera Mini/[VER]',
					'Opera Mobi': 'Version/[VER]',
					UCBrowser: ['UCWEB[VER]', 'UC.*Browser/[VER]'],
					MQQBrowser: 'MQQBrowser/[VER]',
					MicroMessenger: 'MicroMessenger/[VER]',
					baiduboxapp: 'baiduboxapp/[VER]',
					baidubrowser: 'baidubrowser/[VER]',
					SamsungBrowser: 'SamsungBrowser/[VER]',
					Iron: 'Iron/[VER]',
					Safari: ['Version/[VER]', 'Safari/[VER]'],
					Skyfire: 'Skyfire/[VER]',
					Tizen: 'Tizen/[VER]',
					Webkit: 'webkit[ /][VER]',
					PaleMoon: 'PaleMoon/[VER]',
					Gecko: 'Gecko/[VER]',
					Trident: 'Trident/[VER]',
					Presto: 'Presto/[VER]',
					Goanna: 'Goanna/[VER]',
					iOS: ' \\bi?OS\\b [VER][ ;]{1}',
					Android: 'Android [VER]',
					BlackBerry: ['BlackBerry[\\w]+/[VER]', 'BlackBerry.*Version/[VER]', 'Version/[VER]'],
					BREW: 'BREW [VER]',
					Java: 'Java/[VER]',
					'Windows Phone OS': ['Windows Phone OS [VER]', 'Windows Phone [VER]'],
					'Windows Phone': 'Windows Phone [VER]',
					'Windows CE': 'Windows CE/[VER]',
					'Windows NT': 'Windows NT [VER]',
					Symbian: ['SymbianOS/[VER]', 'Symbian/[VER]'],
					webOS: ['webOS/[VER]', 'hpwOS/[VER];'],
				},
				utils: {
					Bot: 'Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp',
					MobileBot: 'Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2',
					DesktopMode: 'WPDesktop',
					TV: 'SonyDTV|HbbTV',
					WebKit: '(webkit)[ /]([\\w.]+)',
					Console: '\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b',
					Watch: 'SM-V700',
				},
			}),
				(g.detectMobileBrowsers = {
					fullPattern:
						/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
					shortPattern:
						/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
					tabletPattern: /android|ipad|playbook|silk/i,
				});
			var h,
				i = Object.prototype.hasOwnProperty;
			return (
				(g.FALLBACK_PHONE = 'UnknownPhone'),
				(g.FALLBACK_TABLET = 'UnknownTablet'),
				(g.FALLBACK_MOBILE = 'UnknownMobile'),
				(h =
					'isArray' in Array
						? Array.isArray
						: function (a) {
								return '[object Array]' === Object.prototype.toString.call(a);
						  }),
				(function () {
					var a,
						b,
						c,
						e,
						f,
						j,
						k = g.mobileDetectRules;
					for (a in k.props)
						if (i.call(k.props, a)) {
							for (b = k.props[a], h(b) || (b = [b]), f = b.length, e = 0; e < f; ++e)
								(c = b[e]),
									(j = c.indexOf('[VER]')),
									j >= 0 && (c = c.substring(0, j) + '([\\w._\\+]+)' + c.substring(j + 5)),
									(b[e] = new RegExp(c, 'i'));
							k.props[a] = b;
						}
					d(k.oss),
						d(k.phones),
						d(k.tablets),
						d(k.uas),
						d(k.utils),
						(k.oss0 = { WindowsPhoneOS: k.oss.WindowsPhoneOS, WindowsMobileOS: k.oss.WindowsMobileOS });
				})(),
				(g.findMatch = function (a, b) {
					for (var c in a) if (i.call(a, c) && a[c].test(b)) return c;
					return null;
				}),
				(g.findMatches = function (a, b) {
					var c = [];
					for (var d in a) i.call(a, d) && a[d].test(b) && c.push(d);
					return c;
				}),
				(g.getVersionStr = function (a, b) {
					var c,
						d,
						e,
						f,
						h = g.mobileDetectRules.props;
					if (i.call(h, a))
						for (c = h[a], e = c.length, d = 0; d < e; ++d) if (null !== (f = c[d].exec(b))) return f[1];
					return null;
				}),
				(g.getVersion = function (a, b) {
					var c = g.getVersionStr(a, b);
					return c ? g.prepareVersionNo(c) : NaN;
				}),
				(g.prepareVersionNo = function (a) {
					var b;
					return (
						(b = a.split(/[a-z._ \/\-]/i)),
						1 === b.length && (a = b[0]),
						b.length > 1 && ((a = b[0] + '.'), b.shift(), (a += b.join(''))),
						Number(a)
					);
				}),
				(g.isMobileFallback = function (a) {
					return (
						g.detectMobileBrowsers.fullPattern.test(a) || g.detectMobileBrowsers.shortPattern.test(a.substr(0, 4))
					);
				}),
				(g.isTabletFallback = function (a) {
					return g.detectMobileBrowsers.tabletPattern.test(a);
				}),
				(g.prepareDetectionCache = function (a, c, d) {
					if (a.mobile === b) {
						var e, h, i;
						return (h = g.findMatch(g.mobileDetectRules.tablets, c))
							? ((a.mobile = a.tablet = h), void (a.phone = null))
							: (e = g.findMatch(g.mobileDetectRules.phones, c))
							? ((a.mobile = a.phone = e), void (a.tablet = null))
							: void (g.isMobileFallback(c)
									? ((i = f.isPhoneSized(d)),
									  i === b
											? ((a.mobile = g.FALLBACK_MOBILE), (a.tablet = a.phone = null))
											: i
											? ((a.mobile = a.phone = g.FALLBACK_PHONE), (a.tablet = null))
											: ((a.mobile = a.tablet = g.FALLBACK_TABLET), (a.phone = null)))
									: g.isTabletFallback(c)
									? ((a.mobile = a.tablet = g.FALLBACK_TABLET), (a.phone = null))
									: (a.mobile = a.tablet = a.phone = null));
					}
				}),
				(g.mobileGrade = function (a) {
					var b = null !== a.mobile();
					return (a.os('iOS') && a.version('iPad') >= 4.3) ||
						(a.os('iOS') && a.version('iPhone') >= 3.1) ||
						(a.os('iOS') && a.version('iPod') >= 3.1) ||
						(a.version('Android') > 2.1 && a.is('Webkit')) ||
						a.version('Windows Phone OS') >= 7 ||
						(a.is('BlackBerry') && a.version('BlackBerry') >= 6) ||
						a.match('Playbook.*Tablet') ||
						(a.version('webOS') >= 1.4 && a.match('Palm|Pre|Pixi')) ||
						a.match('hp.*TouchPad') ||
						(a.is('Firefox') && a.version('Firefox') >= 12) ||
						(a.is('Chrome') && a.is('AndroidOS') && a.version('Android') >= 4) ||
						(a.is('Skyfire') &&
							a.version('Skyfire') >= 4.1 &&
							a.is('AndroidOS') &&
							a.version('Android') >= 2.3) ||
						(a.is('Opera') && a.version('Opera Mobi') > 11 && a.is('AndroidOS')) ||
						a.is('MeeGoOS') ||
						a.is('Tizen') ||
						(a.is('Dolfin') && a.version('Bada') >= 2) ||
						((a.is('UC Browser') || a.is('Dolfin')) && a.version('Android') >= 2.3) ||
						a.match('Kindle Fire') ||
						(a.is('Kindle') && a.version('Kindle') >= 3) ||
						(a.is('AndroidOS') && a.is('NookTablet')) ||
						(a.version('Chrome') >= 11 && !b) ||
						(a.version('Safari') >= 5 && !b) ||
						(a.version('Firefox') >= 4 && !b) ||
						(a.version('MSIE') >= 7 && !b) ||
						(a.version('Opera') >= 10 && !b)
						? 'A'
						: (a.os('iOS') && a.version('iPad') < 4.3) ||
						  (a.os('iOS') && a.version('iPhone') < 3.1) ||
						  (a.os('iOS') && a.version('iPod') < 3.1) ||
						  (a.is('Blackberry') && a.version('BlackBerry') >= 5 && a.version('BlackBerry') < 6) ||
						  (a.version('Opera Mini') >= 5 &&
								a.version('Opera Mini') <= 6.5 &&
								(a.version('Android') >= 2.3 || a.is('iOS'))) ||
						  a.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||
						  (a.version('Opera Mobi') >= 11 && a.is('SymbianOS'))
						? 'B'
						: (a.version('BlackBerry') < 5 ||
								a.match('MSIEMobile|Windows CE.*Mobile') ||
								a.version('Windows Mobile'),
						  'C');
				}),
				(g.detectOS = function (a) {
					return g.findMatch(g.mobileDetectRules.oss0, a) || g.findMatch(g.mobileDetectRules.oss, a);
				}),
				(g.getDeviceSmallerSide = function () {
					return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
				}),
				(f.prototype = {
					constructor: f,
					mobile: function () {
						return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
					},
					phone: function () {
						return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
					},
					tablet: function () {
						return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
					},
					userAgent: function () {
						return (
							this._cache.userAgent === b &&
								(this._cache.userAgent = g.findMatch(g.mobileDetectRules.uas, this.ua)),
							this._cache.userAgent
						);
					},
					userAgents: function () {
						return (
							this._cache.userAgents === b &&
								(this._cache.userAgents = g.findMatches(g.mobileDetectRules.uas, this.ua)),
							this._cache.userAgents
						);
					},
					os: function () {
						return this._cache.os === b && (this._cache.os = g.detectOS(this.ua)), this._cache.os;
					},
					version: function (a) {
						return g.getVersion(a, this.ua);
					},
					versionStr: function (a) {
						return g.getVersionStr(a, this.ua);
					},
					is: function (b) {
						return (
							c(this.userAgents(), b) ||
							a(b, this.os()) ||
							a(b, this.phone()) ||
							a(b, this.tablet()) ||
							c(g.findMatches(g.mobileDetectRules.utils, this.ua), b)
						);
					},
					match: function (a) {
						return a instanceof RegExp || (a = new RegExp(a, 'i')), a.test(this.ua);
					},
					isPhoneSized: function (a) {
						return f.isPhoneSized(a || this.maxPhoneWidth);
					},
					mobileGrade: function () {
						return this._cache.grade === b && (this._cache.grade = g.mobileGrade(this)), this._cache.grade;
					},
				}),
				'undefined' != typeof window && window.screen
					? (f.isPhoneSized = function (a) {
							return a < 0 ? b : g.getDeviceSmallerSide() <= a;
					  })
					: (f.isPhoneSized = function () {}),
				(f._impl = g),
				(f.version = '1.4.4 2019-09-21'),
				f
			);
		});
	})(
		(function (a) {
			if ('undefined' != typeof module && module.exports)
				return function (a) {
					module.exports = a();
				};
			if ('function' == typeof define && define.amd) return define;
			if ('undefined' != typeof window)
				return function (a) {
					window.MobileDetect = a();
				};
			throw new Error('unknown environment');
		})(),
	);
