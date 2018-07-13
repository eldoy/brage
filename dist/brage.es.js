// Parse arguments
var parse = function parse(a) {
  var o = { children: [] };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var x = _step.value;

      switch (x.constructor) {
        case String:
          o.str = x;break;
        case Object:
          o.atts = x;break;
        default:
          o.children.push(x);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return o;
};

// Create tags, apply attributes and children
var t = function t(tag) {
  for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    a[_key - 1] = arguments[_key];
  }

  var _parse = parse(a),
      _parse$str = _parse.str,
      str = _parse$str === undefined ? '' : _parse$str,
      _parse$atts = _parse.atts,
      atts = _parse$atts === undefined ? {} : _parse$atts,
      children = _parse.children;

  var el = void 0;
  if (tag === 'fragment') {
    el = document.createDocumentFragment();
  } else {
    el = document.createElement(tag);
    el.textContent = str;

    for (var x in atts) {
      if (atts[x]) {
        el.setAttribute(x, atts[x]);
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var c = _step2.value;

      if (c) {
        el.appendChild(c);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return el;
};

// Mount elements into and clear out parent
var mount = function mount(children) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

  if (children.constructor !== Array) {
    children = [children];
  }

  parent.innerHTML = '';
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var c = _step3.value;

      parent.appendChild(c);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
};

// Fragment, element without tags
var fragment = function fragment() {
  for (var _len2 = arguments.length, a = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    a[_key2] = arguments[_key2];
  }

  return t.apply(undefined, ['fragment'].concat(a));
};

// Tags, all HTML5 tags are available
var a = function a() {
  for (var _len3 = arguments.length, _a = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    _a[_key3] = arguments[_key3];
  }

  return t.apply(undefined, ['a'].concat(_a));
};
var abbr = function abbr() {
  for (var _len4 = arguments.length, a = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    a[_key4] = arguments[_key4];
  }

  return t.apply(undefined, ['abbr'].concat(a));
};
var address = function address() {
  for (var _len5 = arguments.length, a = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    a[_key5] = arguments[_key5];
  }

  return t.apply(undefined, ['address'].concat(a));
};
var area = function area() {
  for (var _len6 = arguments.length, a = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    a[_key6] = arguments[_key6];
  }

  return t.apply(undefined, ['area'].concat(a));
};
var article = function article() {
  for (var _len7 = arguments.length, a = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    a[_key7] = arguments[_key7];
  }

  return t.apply(undefined, ['article'].concat(a));
};
var aside = function aside() {
  for (var _len8 = arguments.length, a = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    a[_key8] = arguments[_key8];
  }

  return t.apply(undefined, ['aside'].concat(a));
};
var audio = function audio() {
  for (var _len9 = arguments.length, a = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    a[_key9] = arguments[_key9];
  }

  return t.apply(undefined, ['audio'].concat(a));
};
var b = function b() {
  for (var _len10 = arguments.length, a = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    a[_key10] = arguments[_key10];
  }

  return t.apply(undefined, ['b'].concat(a));
};
var base = function base() {
  for (var _len11 = arguments.length, a = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    a[_key11] = arguments[_key11];
  }

  return t.apply(undefined, ['base'].concat(a));
};
var bdi = function bdi() {
  for (var _len12 = arguments.length, a = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    a[_key12] = arguments[_key12];
  }

  return t.apply(undefined, ['bdi'].concat(a));
};
var bdo = function bdo() {
  for (var _len13 = arguments.length, a = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    a[_key13] = arguments[_key13];
  }

  return t.apply(undefined, ['bdo'].concat(a));
};
var blockquote = function blockquote() {
  for (var _len14 = arguments.length, a = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    a[_key14] = arguments[_key14];
  }

  return t.apply(undefined, ['blockquote'].concat(a));
};
var body = function body() {
  for (var _len15 = arguments.length, a = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    a[_key15] = arguments[_key15];
  }

  return t.apply(undefined, ['body'].concat(a));
};
var br = function br() {
  for (var _len16 = arguments.length, a = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    a[_key16] = arguments[_key16];
  }

  return t.apply(undefined, ['br'].concat(a));
};
var button = function button() {
  for (var _len17 = arguments.length, a = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    a[_key17] = arguments[_key17];
  }

  return t.apply(undefined, ['button'].concat(a));
};
var canvas = function canvas() {
  for (var _len18 = arguments.length, a = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    a[_key18] = arguments[_key18];
  }

  return t.apply(undefined, ['canvas'].concat(a));
};
var caption = function caption() {
  for (var _len19 = arguments.length, a = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    a[_key19] = arguments[_key19];
  }

  return t.apply(undefined, ['caption'].concat(a));
};
var cite = function cite() {
  for (var _len20 = arguments.length, a = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    a[_key20] = arguments[_key20];
  }

  return t.apply(undefined, ['cite'].concat(a));
};
var code = function code() {
  for (var _len21 = arguments.length, a = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    a[_key21] = arguments[_key21];
  }

  return t.apply(undefined, ['code'].concat(a));
};
var col = function col() {
  for (var _len22 = arguments.length, a = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    a[_key22] = arguments[_key22];
  }

  return t.apply(undefined, ['col'].concat(a));
};
var colgroup = function colgroup() {
  for (var _len23 = arguments.length, a = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    a[_key23] = arguments[_key23];
  }

  return t.apply(undefined, ['colgroup'].concat(a));
};
var command = function command() {
  for (var _len24 = arguments.length, a = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    a[_key24] = arguments[_key24];
  }

  return t.apply(undefined, ['command'].concat(a));
};
var datalist = function datalist() {
  for (var _len25 = arguments.length, a = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    a[_key25] = arguments[_key25];
  }

  return t.apply(undefined, ['datalist'].concat(a));
};
var dd = function dd() {
  for (var _len26 = arguments.length, a = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    a[_key26] = arguments[_key26];
  }

  return t.apply(undefined, ['dd'].concat(a));
};
var del = function del() {
  for (var _len27 = arguments.length, a = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    a[_key27] = arguments[_key27];
  }

  return t.apply(undefined, ['del'].concat(a));
};
var details = function details() {
  for (var _len28 = arguments.length, a = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    a[_key28] = arguments[_key28];
  }

  return t.apply(undefined, ['details'].concat(a));
};
var dfn = function dfn() {
  for (var _len29 = arguments.length, a = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    a[_key29] = arguments[_key29];
  }

  return t.apply(undefined, ['dfn'].concat(a));
};
var div = function div() {
  for (var _len30 = arguments.length, a = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    a[_key30] = arguments[_key30];
  }

  return t.apply(undefined, ['div'].concat(a));
};
var dl = function dl() {
  for (var _len31 = arguments.length, a = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    a[_key31] = arguments[_key31];
  }

  return t.apply(undefined, ['dl'].concat(a));
};
var dt = function dt() {
  for (var _len32 = arguments.length, a = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
    a[_key32] = arguments[_key32];
  }

  return t.apply(undefined, ['dt'].concat(a));
};
var em = function em() {
  for (var _len33 = arguments.length, a = Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
    a[_key33] = arguments[_key33];
  }

  return t.apply(undefined, ['em'].concat(a));
};
var embed = function embed() {
  for (var _len34 = arguments.length, a = Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
    a[_key34] = arguments[_key34];
  }

  return t.apply(undefined, ['embed'].concat(a));
};
var fieldset = function fieldset() {
  for (var _len35 = arguments.length, a = Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
    a[_key35] = arguments[_key35];
  }

  return t.apply(undefined, ['fieldset'].concat(a));
};
var figcaption = function figcaption() {
  for (var _len36 = arguments.length, a = Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
    a[_key36] = arguments[_key36];
  }

  return t.apply(undefined, ['figcaption'].concat(a));
};
var figure = function figure() {
  for (var _len37 = arguments.length, a = Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
    a[_key37] = arguments[_key37];
  }

  return t.apply(undefined, ['figure'].concat(a));
};
var footer = function footer() {
  for (var _len38 = arguments.length, a = Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
    a[_key38] = arguments[_key38];
  }

  return t.apply(undefined, ['footer'].concat(a));
};
var form = function form() {
  for (var _len39 = arguments.length, a = Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
    a[_key39] = arguments[_key39];
  }

  return t.apply(undefined, ['form'].concat(a));
};
var h1 = function h1() {
  for (var _len40 = arguments.length, a = Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
    a[_key40] = arguments[_key40];
  }

  return t.apply(undefined, ['h1'].concat(a));
};
var h2 = function h2() {
  for (var _len41 = arguments.length, a = Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
    a[_key41] = arguments[_key41];
  }

  return t.apply(undefined, ['h2'].concat(a));
};
var h3 = function h3() {
  for (var _len42 = arguments.length, a = Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
    a[_key42] = arguments[_key42];
  }

  return t.apply(undefined, ['h3'].concat(a));
};
var h4 = function h4() {
  for (var _len43 = arguments.length, a = Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
    a[_key43] = arguments[_key43];
  }

  return t.apply(undefined, ['h4'].concat(a));
};
var h5 = function h5() {
  for (var _len44 = arguments.length, a = Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
    a[_key44] = arguments[_key44];
  }

  return t.apply(undefined, ['h5'].concat(a));
};
var h6 = function h6() {
  for (var _len45 = arguments.length, a = Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
    a[_key45] = arguments[_key45];
  }

  return t.apply(undefined, ['h6'].concat(a));
};
var head = function head() {
  for (var _len46 = arguments.length, a = Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
    a[_key46] = arguments[_key46];
  }

  return t.apply(undefined, ['head'].concat(a));
};
var header = function header() {
  for (var _len47 = arguments.length, a = Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
    a[_key47] = arguments[_key47];
  }

  return t.apply(undefined, ['header'].concat(a));
};
var hgroup = function hgroup() {
  for (var _len48 = arguments.length, a = Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
    a[_key48] = arguments[_key48];
  }

  return t.apply(undefined, ['hgroup'].concat(a));
};
var hr = function hr() {
  for (var _len49 = arguments.length, a = Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
    a[_key49] = arguments[_key49];
  }

  return t.apply(undefined, ['hr'].concat(a));
};
var html = function html() {
  for (var _len50 = arguments.length, a = Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
    a[_key50] = arguments[_key50];
  }

  return t.apply(undefined, ['html'].concat(a));
};
var i = function i() {
  for (var _len51 = arguments.length, a = Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
    a[_key51] = arguments[_key51];
  }

  return t.apply(undefined, ['i'].concat(a));
};
var iframe = function iframe() {
  for (var _len52 = arguments.length, a = Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
    a[_key52] = arguments[_key52];
  }

  return t.apply(undefined, ['iframe'].concat(a));
};
var img = function img() {
  for (var _len53 = arguments.length, a = Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
    a[_key53] = arguments[_key53];
  }

  return t.apply(undefined, ['img'].concat(a));
};
var input = function input() {
  for (var _len54 = arguments.length, a = Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
    a[_key54] = arguments[_key54];
  }

  return t.apply(undefined, ['input'].concat(a));
};
var ins = function ins() {
  for (var _len55 = arguments.length, a = Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
    a[_key55] = arguments[_key55];
  }

  return t.apply(undefined, ['ins'].concat(a));
};
var kbd = function kbd() {
  for (var _len56 = arguments.length, a = Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
    a[_key56] = arguments[_key56];
  }

  return t.apply(undefined, ['kbd'].concat(a));
};
var keygen = function keygen() {
  for (var _len57 = arguments.length, a = Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
    a[_key57] = arguments[_key57];
  }

  return t.apply(undefined, ['keygen'].concat(a));
};
var label = function label() {
  for (var _len58 = arguments.length, a = Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
    a[_key58] = arguments[_key58];
  }

  return t.apply(undefined, ['label'].concat(a));
};
var legend = function legend() {
  for (var _len59 = arguments.length, a = Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
    a[_key59] = arguments[_key59];
  }

  return t.apply(undefined, ['legend'].concat(a));
};
var li = function li() {
  for (var _len60 = arguments.length, a = Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {
    a[_key60] = arguments[_key60];
  }

  return t.apply(undefined, ['li'].concat(a));
};
var link = function link() {
  for (var _len61 = arguments.length, a = Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {
    a[_key61] = arguments[_key61];
  }

  return t.apply(undefined, ['link'].concat(a));
};
var main = function main() {
  for (var _len62 = arguments.length, a = Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {
    a[_key62] = arguments[_key62];
  }

  return t.apply(undefined, ['main'].concat(a));
};
var map = function map() {
  for (var _len63 = arguments.length, a = Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {
    a[_key63] = arguments[_key63];
  }

  return t.apply(undefined, ['map'].concat(a));
};
var mark = function mark() {
  for (var _len64 = arguments.length, a = Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {
    a[_key64] = arguments[_key64];
  }

  return t.apply(undefined, ['mark'].concat(a));
};
var menu = function menu() {
  for (var _len65 = arguments.length, a = Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {
    a[_key65] = arguments[_key65];
  }

  return t.apply(undefined, ['menu'].concat(a));
};
var meta = function meta() {
  for (var _len66 = arguments.length, a = Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {
    a[_key66] = arguments[_key66];
  }

  return t.apply(undefined, ['meta'].concat(a));
};
var meter = function meter() {
  for (var _len67 = arguments.length, a = Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {
    a[_key67] = arguments[_key67];
  }

  return t.apply(undefined, ['meter'].concat(a));
};
var nav = function nav() {
  for (var _len68 = arguments.length, a = Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {
    a[_key68] = arguments[_key68];
  }

  return t.apply(undefined, ['nav'].concat(a));
};
var noscript = function noscript() {
  for (var _len69 = arguments.length, a = Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {
    a[_key69] = arguments[_key69];
  }

  return t.apply(undefined, ['noscript'].concat(a));
};
var object = function object() {
  for (var _len70 = arguments.length, a = Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {
    a[_key70] = arguments[_key70];
  }

  return t.apply(undefined, ['object'].concat(a));
};
var ol = function ol() {
  for (var _len71 = arguments.length, a = Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {
    a[_key71] = arguments[_key71];
  }

  return t.apply(undefined, ['ol'].concat(a));
};
var optgroup = function optgroup() {
  for (var _len72 = arguments.length, a = Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {
    a[_key72] = arguments[_key72];
  }

  return t.apply(undefined, ['optgroup'].concat(a));
};
var option = function option() {
  for (var _len73 = arguments.length, a = Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {
    a[_key73] = arguments[_key73];
  }

  return t.apply(undefined, ['option'].concat(a));
};
var output = function output() {
  for (var _len74 = arguments.length, a = Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {
    a[_key74] = arguments[_key74];
  }

  return t.apply(undefined, ['output'].concat(a));
};
var p = function p() {
  for (var _len75 = arguments.length, a = Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {
    a[_key75] = arguments[_key75];
  }

  return t.apply(undefined, ['p'].concat(a));
};
var param = function param() {
  for (var _len76 = arguments.length, a = Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {
    a[_key76] = arguments[_key76];
  }

  return t.apply(undefined, ['param'].concat(a));
};
var pre = function pre() {
  for (var _len77 = arguments.length, a = Array(_len77), _key77 = 0; _key77 < _len77; _key77++) {
    a[_key77] = arguments[_key77];
  }

  return t.apply(undefined, ['pre'].concat(a));
};
var progress = function progress() {
  for (var _len78 = arguments.length, a = Array(_len78), _key78 = 0; _key78 < _len78; _key78++) {
    a[_key78] = arguments[_key78];
  }

  return t.apply(undefined, ['progress'].concat(a));
};
var q = function q() {
  for (var _len79 = arguments.length, a = Array(_len79), _key79 = 0; _key79 < _len79; _key79++) {
    a[_key79] = arguments[_key79];
  }

  return t.apply(undefined, ['q'].concat(a));
};
var rp = function rp() {
  for (var _len80 = arguments.length, a = Array(_len80), _key80 = 0; _key80 < _len80; _key80++) {
    a[_key80] = arguments[_key80];
  }

  return t.apply(undefined, ['rp'].concat(a));
};
var rt = function rt() {
  for (var _len81 = arguments.length, a = Array(_len81), _key81 = 0; _key81 < _len81; _key81++) {
    a[_key81] = arguments[_key81];
  }

  return t.apply(undefined, ['rt'].concat(a));
};
var ruby = function ruby() {
  for (var _len82 = arguments.length, a = Array(_len82), _key82 = 0; _key82 < _len82; _key82++) {
    a[_key82] = arguments[_key82];
  }

  return t.apply(undefined, ['ruby'].concat(a));
};
var s = function s() {
  for (var _len83 = arguments.length, a = Array(_len83), _key83 = 0; _key83 < _len83; _key83++) {
    a[_key83] = arguments[_key83];
  }

  return t.apply(undefined, ['s'].concat(a));
};
var samp = function samp() {
  for (var _len84 = arguments.length, a = Array(_len84), _key84 = 0; _key84 < _len84; _key84++) {
    a[_key84] = arguments[_key84];
  }

  return t.apply(undefined, ['samp'].concat(a));
};
var script = function script() {
  for (var _len85 = arguments.length, a = Array(_len85), _key85 = 0; _key85 < _len85; _key85++) {
    a[_key85] = arguments[_key85];
  }

  return t.apply(undefined, ['script'].concat(a));
};
var section = function section() {
  for (var _len86 = arguments.length, a = Array(_len86), _key86 = 0; _key86 < _len86; _key86++) {
    a[_key86] = arguments[_key86];
  }

  return t.apply(undefined, ['section'].concat(a));
};
var select = function select() {
  for (var _len87 = arguments.length, a = Array(_len87), _key87 = 0; _key87 < _len87; _key87++) {
    a[_key87] = arguments[_key87];
  }

  return t.apply(undefined, ['select'].concat(a));
};
var small = function small() {
  for (var _len88 = arguments.length, a = Array(_len88), _key88 = 0; _key88 < _len88; _key88++) {
    a[_key88] = arguments[_key88];
  }

  return t.apply(undefined, ['small'].concat(a));
};
var source = function source() {
  for (var _len89 = arguments.length, a = Array(_len89), _key89 = 0; _key89 < _len89; _key89++) {
    a[_key89] = arguments[_key89];
  }

  return t.apply(undefined, ['source'].concat(a));
};
var span = function span() {
  for (var _len90 = arguments.length, a = Array(_len90), _key90 = 0; _key90 < _len90; _key90++) {
    a[_key90] = arguments[_key90];
  }

  return t.apply(undefined, ['span'].concat(a));
};
var strong = function strong() {
  for (var _len91 = arguments.length, a = Array(_len91), _key91 = 0; _key91 < _len91; _key91++) {
    a[_key91] = arguments[_key91];
  }

  return t.apply(undefined, ['strong'].concat(a));
};
var style = function style() {
  for (var _len92 = arguments.length, a = Array(_len92), _key92 = 0; _key92 < _len92; _key92++) {
    a[_key92] = arguments[_key92];
  }

  return t.apply(undefined, ['style'].concat(a));
};
var sub = function sub() {
  for (var _len93 = arguments.length, a = Array(_len93), _key93 = 0; _key93 < _len93; _key93++) {
    a[_key93] = arguments[_key93];
  }

  return t.apply(undefined, ['sub'].concat(a));
};
var summary = function summary() {
  for (var _len94 = arguments.length, a = Array(_len94), _key94 = 0; _key94 < _len94; _key94++) {
    a[_key94] = arguments[_key94];
  }

  return t.apply(undefined, ['summary'].concat(a));
};
var sup = function sup() {
  for (var _len95 = arguments.length, a = Array(_len95), _key95 = 0; _key95 < _len95; _key95++) {
    a[_key95] = arguments[_key95];
  }

  return t.apply(undefined, ['sup'].concat(a));
};
var table = function table() {
  for (var _len96 = arguments.length, a = Array(_len96), _key96 = 0; _key96 < _len96; _key96++) {
    a[_key96] = arguments[_key96];
  }

  return t.apply(undefined, ['table'].concat(a));
};
var tbody = function tbody() {
  for (var _len97 = arguments.length, a = Array(_len97), _key97 = 0; _key97 < _len97; _key97++) {
    a[_key97] = arguments[_key97];
  }

  return t.apply(undefined, ['tbody'].concat(a));
};
var td = function td() {
  for (var _len98 = arguments.length, a = Array(_len98), _key98 = 0; _key98 < _len98; _key98++) {
    a[_key98] = arguments[_key98];
  }

  return t.apply(undefined, ['td'].concat(a));
};
var textarea = function textarea() {
  for (var _len99 = arguments.length, a = Array(_len99), _key99 = 0; _key99 < _len99; _key99++) {
    a[_key99] = arguments[_key99];
  }

  return t.apply(undefined, ['textarea'].concat(a));
};
var tfoot = function tfoot() {
  for (var _len100 = arguments.length, a = Array(_len100), _key100 = 0; _key100 < _len100; _key100++) {
    a[_key100] = arguments[_key100];
  }

  return t.apply(undefined, ['tfoot'].concat(a));
};
var th = function th() {
  for (var _len101 = arguments.length, a = Array(_len101), _key101 = 0; _key101 < _len101; _key101++) {
    a[_key101] = arguments[_key101];
  }

  return t.apply(undefined, ['th'].concat(a));
};
var thead = function thead() {
  for (var _len102 = arguments.length, a = Array(_len102), _key102 = 0; _key102 < _len102; _key102++) {
    a[_key102] = arguments[_key102];
  }

  return t.apply(undefined, ['thead'].concat(a));
};
var time = function time() {
  for (var _len103 = arguments.length, a = Array(_len103), _key103 = 0; _key103 < _len103; _key103++) {
    a[_key103] = arguments[_key103];
  }

  return t.apply(undefined, ['time'].concat(a));
};
var title = function title() {
  for (var _len104 = arguments.length, a = Array(_len104), _key104 = 0; _key104 < _len104; _key104++) {
    a[_key104] = arguments[_key104];
  }

  return t.apply(undefined, ['title'].concat(a));
};
var tr = function tr() {
  for (var _len105 = arguments.length, a = Array(_len105), _key105 = 0; _key105 < _len105; _key105++) {
    a[_key105] = arguments[_key105];
  }

  return t.apply(undefined, ['tr'].concat(a));
};
var track = function track() {
  for (var _len106 = arguments.length, a = Array(_len106), _key106 = 0; _key106 < _len106; _key106++) {
    a[_key106] = arguments[_key106];
  }

  return t.apply(undefined, ['track'].concat(a));
};
var underline = function underline() {
  for (var _len107 = arguments.length, a = Array(_len107), _key107 = 0; _key107 < _len107; _key107++) {
    a[_key107] = arguments[_key107];
  }

  return t.apply(undefined, ['underline'].concat(a));
};
var ul = function ul() {
  for (var _len108 = arguments.length, a = Array(_len108), _key108 = 0; _key108 < _len108; _key108++) {
    a[_key108] = arguments[_key108];
  }

  return t.apply(undefined, ['ul'].concat(a));
};
var _var = function _var() {
  for (var _len109 = arguments.length, a = Array(_len109), _key109 = 0; _key109 < _len109; _key109++) {
    a[_key109] = arguments[_key109];
  }

  return t.apply(undefined, ['var'].concat(a));
};
var video = function video() {
  for (var _len110 = arguments.length, a = Array(_len110), _key110 = 0; _key110 < _len110; _key110++) {
    a[_key110] = arguments[_key110];
  }

  return t.apply(undefined, ['video'].concat(a));
};
var wbr = function wbr() {
  for (var _len111 = arguments.length, a = Array(_len111), _key111 = 0; _key111 < _len111; _key111++) {
    a[_key111] = arguments[_key111];
  }

  return t.apply(undefined, ['wbr'].concat(a));
};

var _slicedToArray = function () { function sliceIterator(arr, i$$1) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i$$1 && _arr.length === i$$1) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i$$1) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i$$1); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BrageRouter = function BrageRouter(routes) {
  var _this = this;

  _classCallCheck(this, BrageRouter);

  this.transformRoutes = function () {
    var sub$$1 = /\/:([^\/]+)/gi;

    var _loop = function _loop(route) {
      var params = [];
      var regexp = route.path.replace(sub$$1, function (match, str) {
        params.push(str);
        return '/([^/]+)';
      });
      route.regexp = new RegExp('^' + regexp + '$', 'ig');
      route.params = params;
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _this.routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var route = _step.value;

        _loop(route);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  this.registerLinks = function (links) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var link$$1 = _step2.value;

        link$$1.onclick = _this.navigate;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  this.navigate = function (event) {
    event.preventDefault();
    var link$$1 = event.currentTarget;
    history.pushState({}, '', link$$1.href);
    _this.load(link$$1.pathname, link$$1);
  };

  this.dispatch = function (event) {
    event.preventDefault();
    _this.load(location.pathname);
  };

  this.match = function (path) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = _this.routes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var route = _step3.value;
        var regexp = route.regexp,
            view = route.view,
            _params = route.params;


        if (regexp.test(path)) {
          var props = {};
          regexp.lastIndex = 0;

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = _params[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var p$$1 = _step4.value;

              var m = regexp.exec(path);
              props[p$$1] = m[1];
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          regexp.lastIndex = 0;

          return [view, props];
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return [];
  };

  this.activate = function (link$$1) {
    if (!link$$1) {
      return;
    }
    var links = document.body.querySelectorAll('.router-link');

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = links[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var a$$1 = _step5.value;

        a$$1.classList.remove('active');
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    link$$1.classList.add('active');
  };

  this.load = function (path, link$$1) {
    if (!link$$1) {
      link$$1 = document.body.querySelector('a.router-link[href^="' + path + '"]');
    }

    if (!_this.main) {
      _this.main = document.body.querySelector('main');
    }

    var _match = _this.match(path),
        _match2 = _slicedToArray(_match, 2),
        view = _match2[0],
        props = _match2[1];

    if (view) {
      mount(view.render(props), _this.main);
      _this.activate(link$$1);
    }
  };

  this.routes = routes;

  // Transform routes
  this.transformRoutes();

  // Dispatch on history popstate
  window.onpopstate = this.dispatch;
}

// Transform routes to regexp matchers


// Register links for navigation


// Happens when you click a registered link


// Happens on popstate


// Match a route and return a view


// Activate the current link


// Load the view into main
;

export { BrageRouter, t, mount, fragment, a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, command, datalist, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, keygen, label, legend, li, link, main, map, mark, menu, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, param, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, time, title, tr, track, underline, ul, _var, video, wbr };
