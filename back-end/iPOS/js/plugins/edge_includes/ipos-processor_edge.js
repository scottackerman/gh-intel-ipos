
(function ($, Edge, compId) { var _ = null, y = true, n = false, e39 = '${_Blue_Part_1}', e52 = '${_Blue_Part_2}', x2 = '4.0.1.365', x11 = 'rgba(169,211,80,1)', x7 = 'rgba(237,55,40,1.00)', x1 = '4.0.1', e48 = '${_Green_Part_3}', b = 'block', cl = 'clip', x36 = 'rgba(21,131,220,0.00)', a = 'Base State', e51 = '${_Red_Part_1}', x5 = 'rgba(253,201,34,1.00)', x25 = 'rgba(10,96,155,1)', dt = 'Default Timeline', i = 'none', x34 = 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', e40 = '${_gear-small-03}', e41 = '${_Blue_Part_5}', lf = 'left', e47 = '${_Green_Part_2}', bg = 'background-color', e59 = '${_Shadow}', e60 = '${_Intel_text}', fs = 'font-size', tp = 'top', e69 = '${_screen-4}', ta = 'text-align', ov = 'overflow', xc = 'rgba(0,0,0,1)', e67 = '${_Green_Part_1}', x26 = 'stage', e68 = '${_Intel_102}', zy = 'scaleY', rz = 'rotateZ', c = 'color', x17 = '45', e66 = '${_screen-2}', e65 = '${_screen-6}', zx = 'scaleX', po = 'center', e64 = '${_Tablet_Frame}', e50 = '${_screen-5}', e63 = '${_touch-5}', x28 = 'rgba(240,245,244,1.00)', e61 = '${_touch-4}', e62 = '${_touch-6}', x31 = 'rgba(242,245,245,1.00)', e56 = '${_touch-3}', e58 = '${_Blue_Part_4}', x = 'text', e57 = '${_Tablet_Back}', g = 'image', m = 'rect', x9 = 'rgba(169,211,80,1.00)', e54 = '${_Tablet_lightblue}', e37 = '${_Stage}', e49 = '${_touch-1}', x29 = 'rgba(245,249,248,1.00)', e46 = '${_Tablet_Blue}', e45 = '${_gear-large-03}', e44 = '${_screen-3}', e42 = '${_Blue_part_3}', p = 'px', o = 'opacity', x30 = 'rgba(251,255,254,1.00)', e43 = '${_Red_Part_2}', x8 = 'rgba(166,209,202,1.00)', d = 'display', x38 = 'hidden', t = 'transform', x18 = 'Arial, Helvetica, sans-serif', e53 = '${_touch-2}', l = 'normal', e55 = '${_Green_Part_4}', r = 'deg', x35 = 'rgba(255,255,255,1.00)', x10 = 'rgba(39,126,237,1.00)', w = 'width', x3 = 'rgba(0,0,0,0)', ql = 'linear', x32 = 'rgba(10,96,155,1.00)', x33 = 'rgba(69,193,242,1.00)', x27 = 'rgba(248,252,251,1.00)', h = 'height', s = 'style'; var im = 'images/animations/processor-images/'; var g12 = 'Part%201.svg', g6 = 'Intel_102.png', g21 = 'memory_4-032.svg', g20 = 'memory_62.svg', g19 = 'memory_72.svg', g4 = 'part%202.svg', g23 = 'memory_1-032.svg', g24 = 'touch-045.svg', g13 = 'gear-large-03.svg', g22 = 'memory_3-032.svg', g14 = 'gear-small-03.svg'; var s15 = "Intel Core i3 Processor", s16 = "ipos-processor-intel"; var fonts = {}; var P = Edge.P, T = Edge.T, A = Edge.A; var opts = { 'gAudioPreloadPreference': 'auto', 'gVideoPreloadPreference': 'auto' }; var resources = []; var symbols = { "stage": { v: x1, mv: x1, b: x2, bS: a, stf: w, cg: i, iS: a, gpu: n, rI: n, cn: { dom: [{ id: 'Tablet_Back', v: b, t: g, r: ['11px', '-6px', '1050px', '740px', 'auto', 'auto'], f: [x3, im + g4, '0px', '0px'], tf: [[], [], [], ['1.75', '1.75']] }, { id: 'Tablet_lightblue', v: b, t: m, r: ['445px', '279px', '160px', '183px', 'auto', 'auto'], f: [x5], s: [0, xc, i] }, { id: 'Intel_102', v: b, t: g, r: ['11px', '-54px', '1050px', '740px', 'auto', 'auto'], f: [x3, im + g6, '0px', '0px'], tf: [[], [], [], ['0.4', '0.4']] }, { id: 'Red_Part_2', v: b, t: m, r: ['506px', '313px', '92px', '8px', 'auto', 'auto'], f: [x7], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Red_Part_1', v: b, t: m, r: ['454px', '400px', '75px', '21px', 'auto', 'auto'], f: [x7], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Blue_Part_5', v: b, t: m, r: ['506px', '287px', '23px', '21px', 'auto', 'auto'], f: [x8], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Blue_Part_4', v: b, t: m, r: ['540px', '287px', '23px', '21px', 'auto', 'auto'], f: [x8], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Blue_part_3', v: b, t: m, r: ['540px', '400px', '23px', '21px', 'auto', 'auto'], f: [x8], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Blue_Part_2', v: b, t: m, r: ['575px', '287px', '23px', '21px', 'auto', 'auto'], f: [x8], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Blue_Part_1', v: b, t: m, r: ['575px', '400px', '23px', '21px', 'auto', 'auto'], f: [x8], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Green_Part_3', v: b, t: m, r: ['453px', '426px', '145px', '28px', 'auto', 'auto'], f: [x9], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Green_Part_2', v: b, t: m, r: ['532px', '249px', '92px', '14px', 'auto', 'auto'], f: [x10], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Green_Part_1', v: b, t: m, r: ['453px', '287px', '47px', '107px', 'auto', 'auto'], f: [x5], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Green_Part_4', v: b, t: m, r: ['551px', '347px', '47px', '47px', 'auto', 'auto'], f: [x11], s: [0, "rgb(0, 0, 0)", i] }, { id: 'Tablet_Blue', v: i, t: m, r: ['399px', '531px', '264px', '14px', 'auto', 'auto'], f: [x5], s: [0, xc, i] }, { id: 'Tablet_Frame', t: g, r: ['-706px', '-5px', '1050px', '740px', 'auto', 'auto'], f: [x3, im + g12, '0px', '0px'], tf: [[], [], [], ['1.75', '1.75']] }, { id: 'gear-large-03', v: i, t: g, r: ['457px', '316px', '127px', '103px', 'auto', 'auto'], f: [x3, im + g13, '0px', '0px'], tf: [[], [], [], ['1.5', '1.5']] }, { id: 'gear-small-03', v: i, t: g, r: ['521px', '246px', '127px', '103px', 'auto', 'auto'], f: [x3, im + g14, '0px', '0px'], tf: [[], [], [], ['1.5', '1.5']] }, { id: 'Intel_text', t: x, r: ['996px', '467px', '668px', '115px', 'auto', 'auto'], text: s15, align: "center", userClass: s16, n: [x18, x17, "rgba(255,255,255,1.00)", l, i, ""] }, { id: 'screen-6', t: g, r: ['1245px', '297px', '127px', '103px', 'auto', 'auto'], f: [x3, im + g19, '0px', '0px'], tf: [[], [], [], ['3.4', '3.4']] }, { id: 'screen-5', t: g, r: ['1245px', '297px', '127px', '103px', 'auto', 'auto'], f: [x3, im + g20, '0px', '0px'], tf: [[], [], [], ['3.4', '3.4']] }, { id: 'screen-4', t: g, r: ['1245px', '297px', '127px', '103px', 'auto', 'auto'], f: [x3, im + g21, '0px', '0px'], tf: [[], [], [], ['3.4', '3.4']] }, { id: 'screen-3', t: g, r: ['1245px', '297px', '127px', '103px', 'auto', 'auto'], f: [x3, im + g22, '0px', '0px'], tf: [[], [], [], ['3.4', '3.4']] }, { id: 'screen-2', t: g, r: ['1245px', '297px', '127px', '103px', 'auto', 'auto'], f: [x3, im + g23, '0px', '0px'], tf: [[], [], [], ['3.4', '3.4']] }, { id: 'touch-1', v: i, t: g, r: ['443px', '397px', '216px', '232px', 'auto', 'auto'], f: [x3, im + g24, '0px', '0px'] }, { id: 'touch-2', v: i, t: g, r: ['443px', '397px', '216px', '232px', 'auto', 'auto'], f: [x3, im + g24, '0px', '0px'] }, { id: 'touch-3', v: i, t: g, r: ['443px', '397px', '216px', '232px', 'auto', 'auto'], f: [x3, im + g24, '0px', '0px'] }, { id: 'touch-4', v: i, t: g, r: ['443px', '397px', '216px', '232px', 'auto', 'auto'], f: [x3, im + g24, '0px', '0px'] }, { id: 'touch-5', v: i, t: g, r: ['443px', '397px', '216px', '232px', 'auto', 'auto'], f: [x3, im + g24, '0px', '0px'] }, { id: 'touch-6', v: i, t: g, r: ['443px', '397px', '216px', '232px', 'auto', 'auto'], f: [x3, im + g24, '0px', '0px'] }, { id: 'Shadow', v: i, t: 'ellipse', r: ['396px', '586px', '280px', '14px', 'auto', 'auto'], br: ["50%", "50%", "50%", "50%"], o: 0.25, f: [x25], s: [0, "rgb(0, 0, 0)", i] }], sI: [] }, s: {}, tl: { "Default Timeline": { fS: a, tS: "", d: 10135, a: n, tt: [] } } } }; var S1 = symbols[x26]; var tl0 = S1.tl[dt].tt, st1 = S1.s[a] = {}, A1 = A(_, tl0, st1); A1.A(e37).P(bg, x36, c).P(ov, x38).P(h, 750).P(w, 1050); A1.A(e39).P(tp, 423).P(zy, 1.75, t, _, "").P(bg, x27, c).P(h, 21, _, _, p).P(zx, 1.75, t, _, "").P(w, 23, _, _, p).P(d, b).T(3.523, i).P(lf, -197).T(2.285, 419, 0.285, ql); A1.A(e40).P(tp, 246).P(zy, 1.5, t, _, "").P(zx, 1.5, t).P(d, i).T(0, i).T(3.5, b).P(lf, 521, _, _, p).T(5.353, -304, 0.25, ql).P(rz, 0, t, _, r).T(3.839, 100, 1); A1.A(e41).P(tp, 423).P(zy, 1.75, t, _, "").P(bg, x31, c).P(h, 21, _, _, p).P(zx, 1.75, t, _, "").P(w, 23, _, _, p).P(lf, 1313).T(2, 628, 0.285, ql).P(d, b).T(3.523, i); A1.A(e42).P(tp, 423).P(zy, 1.75, t, _, "").P(bg, x29, c).P(h, 21, _, _, p).P(zx, 1.75, t, _, "").P(w, 23, _, _, p).P(lf, -134).T(2.215, 471, 0.285, ql).P(d, b).T(3.523, i); A1.A(e43).P(tp, 222).P(zy, 1.75, t, _, "").P(zx, 1.75, t).P(bg, x5, c).P(d, b).T(3.523, i).P(lf, -143, _, _, p).T(2.285, 533, 0.285, ql); A1.A(e44).P(zx, 3.4, t, _, "").P(zy, 3.4, t).P(tp, 297, _, _, p).P(lf, 1245).T(6.254, 492, 0.246, ql).T(7.262, -358, 0.238); A1.A(e45).P(tp, 316).P(zy, 1.5, t, _, "").P(zx, 1.5, t).P(d, i).T(0, i).T(3.5, b).P(lf, 457, _, _, p).T(5.353, -368, 0.25, ql).P(rz, 0, t, _, r).T(3.839, -45, 1); A1.A(e46).P(bg, x32, c).P(w, 264).P(tp, 531).T(3, 178, 0.5, ql).T(4.339, 161, 0.474).P(rz, 0, t, _, r).T(4.339, 90, 0.474).P(h, 14, _, _, p).T(3, 367, 0.5).P(lf, 399).T(5.353, -426, 0.25).P(d, i).T(0, i).T(3, b); A1.A(e47).P(tp, 249).P(zy, 1.75, t, _, "").P(bg, x10, c).P(h, 14, _, _, p).P(zx, 1.75, t, _, "").P(w, 92, _, _, p).P(lf, 1137).T(2.285, 532, 0.285, ql).P(d, b).T(3.523, i); A1.A(e48).P(bg, x5, c).P(zy, 1.75, t, _, "").P(zx, 1.74036, t).P(cl, [0, 142.619140625, 28, 0], _, x34).P(tp, 474, _, _, p).P(d, b).T(3.523, i).P(lf, -316).T(2.147, 464, 0.285, ql); A1.A(e49).P(tp, 397).P(lf, 443).T(5.022, 527, 0.228, ql).T(5.25, -859, 0.25).P(d, i).T(0, i).T(5.022, b); A1.A(e50).P(zx, 3.4, t, _, "").P(zy, 3.4, t).P(tp, 297, _, _, p).P(lf, 1245).T(8.158, 468, 0.226, ql).T(9.019, -369, 0.231); A1.A(e51).P(tp, 372).P(zy, 1.75, t, _, "").P(bg, x10, c).P(h, 21, _, _, p).P(zx, 1.75, t, _, "").P(w, 91, _, _, p).P(lf, 1160).T(2.147, 535, 0.285, ql).P(d, b).T(3.523, i); A1.A(e52).P(tp, 423).P(zy, 1.75, t, _, "").P(bg, x28, c).P(h, 21, _, _, p).P(zx, 1.75, t, _, "").P(w, 23, _, _, p).P(lf, 1243).T(2.215, 576, 0.285, ql).P(d, b).T(3.523, i); A1.A(e53).P(tp, 397).P(d, i).T(0, i).T(5.875, b).P(lf, 443).T(5.875, 527, 0.228, ql).T(6.103, -859, 0.25); A1.A(e54).P(tp, 273).P(zy, 1.75, t, _, "").P(bg, x33, c).P(h, 183, _, _, p).P(zx, 1.75, t, _, "").P(w, 160, _, _, p).P(d, b).T(3.523, i).P(lf, 1243).T(2, 456, 0.285, ql); A1.A(e55).P(tp, 292).P(zy, 1.75, t, _, "").P(bg, x5, c).P(zx, 1.75, t).P(h, 47, _, _, p).P(w, 47).P(d, b).T(3.523, i).P(lf, 1107).T(2, 596, 0.285, ql); A1.A(e56).P(tp, 397).P(d, i).T(1, i).T(6.875, b).P(lf, 443).T(6.875, 527, 0.228, ql).T(7.103, -859, 0.25); A1.A(e57).P(zy, 1.75, t, _, "").P(rz, 0, t, _, r).P(zx, 1.75, t, _, "").P(tp, -5, _, _, p).T(2.021, -6, 0.549, ql).P(lf, -889).T(2, 11, 0.285).P(d, b).T(3.523, i); A1.A(e58).P(tp, 423).P(zy, 1.75, t, _, "").P(bg, x30, c).P(h, 21, _, _, p).P(zx, 1.75, t, _, "").P(w, 23, _, _, p).P(d, b).T(3.523, i).P(lf, 1172).T(2.285, 524, 0.285, ql); A1.A(e59).P(tp, 586).P(o, 0.25, _, _, "").P(d, i).T(0, i).T(2.75, b).T(9.858, i).P(lf, 396, _, _, p).T(4.339, 355, 0.5, ql).P(w, 280).T(4.339, 372, 0.5); A1.A(e60).P(tp, 467).P(ta, po).P(c, x35, c).P(fs, 45).P(lf, 996).T(0.282, 192, 0.218, ql).T(1.775, 962, 0.225); A1.A(e61).P(tp, 397).P(lf, 443).T(7.772, 527, 0.228, ql).T(8, -859, 0.25).P(d, i).T(1.897, i).T(7.772, b); A1.A(e62).P(tp, 397).P(d, i).T(3.647, i).T(9.522, b).P(lf, 443).T(9.522, 527, 0.228, ql).T(9.75, -859, 0.25); A1.A(e63).P(tp, 397).P(lf, 443).T(8.625, 527, 0.228, ql).T(8.853, -859, 0.25).P(d, i).T(2.75, i).T(8.625, b); A1.A(e64).P(zy, 1.75, t, _, "").P(zx, 1.75, t).P(tp, -5, _, _, p).T(4.339, -22, 0.474, ql).P(lf, -706).T(2.57, 10, 0.18).T(5.353, -815, 0.25).P(rz, 0, t, _, r).T(4.339, 90, 0.474); A1.A(e65).P(zx, 3.4, t, _, "").P(zy, 3.4, t).P(tp, 297, _, _, p).P(lf, 1245).T(9.019, 472, 0.231, ql).T(9.858, -369, 0.277); A1.A(e66).P(zx, 3.4, t, _, "").P(zy, 3.4, t).P(tp, 297, _, _, p).P(lf, 1245).T(5.357, 472, 0.246, ql).T(6.268, -354, 0.232); A1.A(e67).P(bg, x10, c).P(zy, 1.75, t, _, "").P(tp, 255, _, _, p).P(zx, 1.75, t, _, "").P(w, 47, _, _, p).P(d, b).T(3.523, i).P(lf, -258).T(2.067, 428, 0.285, ql); A1.A(e68).P(tp, -29).T(2.021, -52, 0.549, ql).P(zy, 1, t, _, "").T(2.021, 0.4, 0.549).P(d, b).T(3.523, i).P(lf, -619, _, _, p).T(0, 0, 0.25).T(2.021, 10, 0.549).P(zx, 1, t, _, "").T(2.021, 0.4, 0.549); A1.A(e69).P(zx, 3.4, t, _, "").P(zy, 3.4, t).P(tp, 297, _, _, p).P(lf, 1245).T(7.262, 472, 0.238, ql).T(8.158, -358, 0.226); Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts); $(window).ready(function () { Edge.launchComposition(compId); }); })(jQuery, AdobeEdge, "ipos-processor");