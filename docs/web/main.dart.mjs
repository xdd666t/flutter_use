let buildArgsList;

// `modulePromise` is a promise to the `WebAssembly.module` object to be
//   instantiated.
// `importObjectPromise` is a promise to an object that contains any additional
//   imports needed by the module that aren't provided by the standard runtime.
//   The fields on this object will be merged into the importObject with which
//   the module will be instantiated.
// This function returns a promise to the instantiated module.
export const instantiate = async (modulePromise, importObjectPromise) => {
    let dartInstance;

    function stringFromDartString(string) {
        const totalLength = dartInstance.exports.$stringLength(string);
        let result = '';
        let index = 0;
        while (index < totalLength) {
          let chunkLength = Math.min(totalLength - index, 0xFFFF);
          const array = new Array(chunkLength);
          for (let i = 0; i < chunkLength; i++) {
              array[i] = dartInstance.exports.$stringRead(string, index++);
          }
          result += String.fromCharCode(...array);
        }
        return result;
    }

    function stringToDartString(string) {
        const length = string.length;
        let range = 0;
        for (let i = 0; i < length; i++) {
            range |= string.codePointAt(i);
        }
        if (range < 256) {
            const dartString = dartInstance.exports.$stringAllocate1(length);
            for (let i = 0; i < length; i++) {
                dartInstance.exports.$stringWrite1(dartString, i, string.codePointAt(i));
            }
            return dartString;
        } else {
            const dartString = dartInstance.exports.$stringAllocate2(length);
            for (let i = 0; i < length; i++) {
                dartInstance.exports.$stringWrite2(dartString, i, string.charCodeAt(i));
            }
            return dartString;
        }
    }

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + js;
    }

    // Converts a Dart List to a JS array. Any Dart objects will be converted, but
    // this will be cheap for JSValues.
    function arrayFromDartList(constructor, list) {
        const length = dartInstance.exports.$listLength(list);
        const array = new constructor(length);
        for (let i = 0; i < length; i++) {
            array[i] = dartInstance.exports.$listRead(list, i);
        }
        return array;
    }

    buildArgsList = function(list) {
        const dartList = dartInstance.exports.$makeStringList();
        for (let i = 0; i < list.length; i++) {
            dartInstance.exports.$listAdd(dartList, stringToDartString(list[i]));
        }
        return dartList;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
        wrapped.dartFunction = dartFunction;
        wrapped[jsWrappedDartFunctionSymbol] = true;
        return wrapped;
    }

    // Imports
    const dart2wasm = {

_1: (x0,x1,x2) => x0.set(x1,x2),
_2: (x0,x1,x2) => x0.set(x1,x2),
_6: f => finalizeWrapper(f,x0 => dartInstance.exports._6(f,x0)),
_7: x0 => new window.FinalizationRegistry(x0),
_8: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
_9: (x0,x1) => x0.unregister(x1),
_10: (x0,x1,x2) => x0.slice(x1,x2),
_11: (x0,x1) => x0.decode(x1),
_12: (x0,x1) => x0.segment(x1),
_13: () => new TextDecoder(),
_14: x0 => x0.buffer,
_15: x0 => x0.wasmMemory,
_16: () => globalThis.window._flutter_skwasmInstance,
_17: x0 => x0.rasterStartMilliseconds,
_18: x0 => x0.rasterEndMilliseconds,
_19: x0 => x0.imageBitmaps,
_164: x0 => x0.focus(),
_165: x0 => x0.select(),
_166: (x0,x1) => x0.append(x1),
_167: x0 => x0.remove(),
_170: x0 => x0.unlock(),
_175: x0 => x0.getReader(),
_185: x0 => new MutationObserver(x0),
_204: (x0,x1,x2) => x0.addEventListener(x1,x2),
_205: (x0,x1,x2) => x0.removeEventListener(x1,x2),
_208: x0 => new ResizeObserver(x0),
_211: (x0,x1) => new Intl.Segmenter(x0,x1),
_212: x0 => x0.next(),
_213: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
_290: x0 => x0.close(),
_291: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
_292: x0 => new window.ImageDecoder(x0),
_293: x0 => x0.close(),
_294: x0 => ({frameIndex: x0}),
_295: (x0,x1) => x0.decode(x1),
_298: f => finalizeWrapper(f,x0 => dartInstance.exports._298(f,x0)),
_299: f => finalizeWrapper(f,x0 => dartInstance.exports._299(f,x0)),
_300: (x0,x1) => ({addView: x0,removeView: x1}),
_301: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._301(f,arguments.length,x0) }),
_302: f => finalizeWrapper(f,() => dartInstance.exports._302(f)),
_303: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
_304: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._304(f,arguments.length,x0) }),
_305: x0 => ({runApp: x0}),
_306: x0 => new Uint8Array(x0),
_308: x0 => x0.preventDefault(),
_309: x0 => x0.stopPropagation(),
_310: (x0,x1) => x0.addListener(x1),
_311: (x0,x1) => x0.removeListener(x1),
_312: (x0,x1) => x0.prepend(x1),
_313: x0 => x0.remove(),
_314: x0 => x0.disconnect(),
_315: (x0,x1) => x0.addListener(x1),
_316: (x0,x1) => x0.removeListener(x1),
_319: (x0,x1) => x0.append(x1),
_320: x0 => x0.remove(),
_321: x0 => x0.stopPropagation(),
_325: x0 => x0.preventDefault(),
_326: (x0,x1) => x0.append(x1),
_327: x0 => x0.remove(),
_332: (x0,x1) => x0.appendChild(x1),
_333: (x0,x1,x2) => x0.insertBefore(x1,x2),
_334: (x0,x1) => x0.removeChild(x1),
_335: (x0,x1) => x0.appendChild(x1),
_336: (x0,x1) => x0.transferFromImageBitmap(x1),
_337: (x0,x1) => x0.append(x1),
_338: (x0,x1) => x0.append(x1),
_339: (x0,x1) => x0.append(x1),
_340: x0 => x0.remove(),
_341: x0 => x0.focus(),
_342: x0 => x0.focus(),
_343: x0 => x0.remove(),
_344: x0 => x0.focus(),
_345: x0 => x0.remove(),
_346: (x0,x1) => x0.appendChild(x1),
_347: (x0,x1) => x0.append(x1),
_348: x0 => x0.focus(),
_349: (x0,x1) => x0.append(x1),
_350: x0 => x0.remove(),
_351: (x0,x1) => x0.append(x1),
_352: (x0,x1) => x0.append(x1),
_353: (x0,x1,x2) => x0.insertBefore(x1,x2),
_354: (x0,x1) => x0.append(x1),
_355: (x0,x1,x2) => x0.insertBefore(x1,x2),
_356: x0 => x0.remove(),
_357: x0 => x0.remove(),
_358: x0 => x0.remove(),
_359: (x0,x1) => x0.append(x1),
_360: x0 => x0.remove(),
_361: x0 => x0.remove(),
_362: x0 => x0.getBoundingClientRect(),
_363: x0 => x0.remove(),
_364: x0 => x0.blur(),
_366: x0 => x0.focus(),
_367: x0 => x0.focus(),
_368: x0 => x0.remove(),
_369: x0 => x0.focus(),
_370: x0 => x0.focus(),
_371: x0 => x0.blur(),
_372: x0 => x0.remove(),
_385: (x0,x1) => x0.append(x1),
_386: x0 => x0.remove(),
_387: (x0,x1) => x0.append(x1),
_388: (x0,x1,x2) => x0.insertBefore(x1,x2),
_389: (x0,x1) => x0.append(x1),
_390: x0 => x0.focus(),
_391: x0 => x0.focus(),
_392: x0 => x0.focus(),
_393: x0 => x0.focus(),
_394: x0 => x0.focus(),
_395: (x0,x1) => x0.append(x1),
_396: x0 => x0.focus(),
_397: x0 => x0.blur(),
_398: x0 => x0.remove(),
_400: x0 => x0.preventDefault(),
_401: x0 => x0.focus(),
_402: x0 => x0.preventDefault(),
_403: x0 => x0.preventDefault(),
_404: x0 => x0.preventDefault(),
_405: x0 => x0.focus(),
_406: x0 => x0.focus(),
_407: (x0,x1) => x0.append(x1),
_408: x0 => x0.focus(),
_409: x0 => x0.focus(),
_410: x0 => x0.focus(),
_411: x0 => x0.focus(),
_412: (x0,x1) => x0.observe(x1),
_413: x0 => x0.disconnect(),
_414: (x0,x1) => x0.appendChild(x1),
_415: (x0,x1) => x0.appendChild(x1),
_416: (x0,x1) => x0.appendChild(x1),
_417: (x0,x1) => x0.append(x1),
_418: (x0,x1) => x0.append(x1),
_419: x0 => x0.remove(),
_420: (x0,x1) => x0.append(x1),
_421: (x0,x1) => x0.append(x1),
_422: (x0,x1) => x0.appendChild(x1),
_423: (x0,x1) => x0.append(x1),
_424: x0 => x0.remove(),
_425: (x0,x1) => x0.append(x1),
_429: (x0,x1) => x0.appendChild(x1),
_430: x0 => x0.remove(),
_981: () => globalThis.window.flutterConfiguration,
_982: x0 => x0.assetBase,
_986: x0 => x0.debugShowSemanticsNodes,
_987: x0 => x0.hostElement,
_988: x0 => x0.multiViewEnabled,
_989: x0 => x0.nonce,
_991: x0 => x0.fontFallbackBaseUrl,
_992: x0 => x0.useColorEmoji,
_996: x0 => x0.console,
_997: x0 => x0.devicePixelRatio,
_998: x0 => x0.document,
_999: x0 => x0.history,
_1000: x0 => x0.innerHeight,
_1001: x0 => x0.innerWidth,
_1002: x0 => x0.location,
_1003: x0 => x0.navigator,
_1004: x0 => x0.visualViewport,
_1005: x0 => x0.performance,
_1006: (x0,x1) => x0.fetch(x1),
_1009: (x0,x1) => x0.dispatchEvent(x1),
_1010: (x0,x1) => x0.matchMedia(x1),
_1011: (x0,x1) => x0.getComputedStyle(x1),
_1013: x0 => x0.screen,
_1014: (x0,x1) => x0.requestAnimationFrame(x1),
_1015: f => finalizeWrapper(f,x0 => dartInstance.exports._1015(f,x0)),
_1020: (x0,x1) => x0.warn(x1),
_1022: (x0,x1) => x0.debug(x1),
_1023: () => globalThis.window,
_1024: () => globalThis.Intl,
_1025: () => globalThis.Symbol,
_1028: x0 => x0.clipboard,
_1029: x0 => x0.maxTouchPoints,
_1030: x0 => x0.vendor,
_1031: x0 => x0.language,
_1032: x0 => x0.platform,
_1033: x0 => x0.userAgent,
_1034: x0 => x0.languages,
_1035: x0 => x0.documentElement,
_1036: (x0,x1) => x0.querySelector(x1),
_1039: (x0,x1) => x0.createElement(x1),
_1041: (x0,x1) => x0.execCommand(x1),
_1044: (x0,x1) => x0.createTextNode(x1),
_1045: (x0,x1) => x0.createEvent(x1),
_1050: x0 => x0.head,
_1051: x0 => x0.body,
_1052: (x0,x1) => x0.title = x1,
_1055: x0 => x0.activeElement,
_1057: x0 => x0.visibilityState,
_1058: () => globalThis.document,
_1059: (x0,x1,x2) => x0.addEventListener(x1,x2),
_1060: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
_1062: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
_1063: (x0,x1,x2) => x0.removeEventListener(x1,x2),
_1066: f => finalizeWrapper(f,x0 => dartInstance.exports._1066(f,x0)),
_1067: x0 => x0.target,
_1069: x0 => x0.timeStamp,
_1070: x0 => x0.type,
_1071: x0 => x0.preventDefault(),
_1075: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
_1080: x0 => x0.firstChild,
_1086: x0 => x0.parentElement,
_1088: x0 => x0.parentNode,
_1091: (x0,x1) => x0.removeChild(x1),
_1092: (x0,x1) => x0.removeChild(x1),
_1094: (x0,x1) => x0.textContent = x1,
_1097: (x0,x1) => x0.contains(x1),
_1102: x0 => x0.firstElementChild,
_1104: x0 => x0.nextElementSibling,
_1105: x0 => x0.clientHeight,
_1106: x0 => x0.clientWidth,
_1107: x0 => x0.id,
_1108: (x0,x1) => x0.id = x1,
_1111: (x0,x1) => x0.spellcheck = x1,
_1112: x0 => x0.tagName,
_1113: x0 => x0.style,
_1114: (x0,x1) => x0.append(x1),
_1116: x0 => x0.getBoundingClientRect(),
_1119: (x0,x1) => x0.closest(x1),
_1122: (x0,x1) => x0.querySelectorAll(x1),
_1123: x0 => x0.remove(),
_1124: (x0,x1,x2) => x0.setAttribute(x1,x2),
_1125: (x0,x1) => x0.removeAttribute(x1),
_1126: (x0,x1) => x0.tabIndex = x1,
_1129: x0 => x0.scrollTop,
_1130: (x0,x1) => x0.scrollTop = x1,
_1131: x0 => x0.scrollLeft,
_1132: (x0,x1) => x0.scrollLeft = x1,
_1133: x0 => x0.classList,
_1134: (x0,x1) => x0.className = x1,
_1140: (x0,x1) => x0.getElementsByClassName(x1),
_1141: x0 => x0.click(),
_1143: (x0,x1) => x0.hasAttribute(x1),
_1145: (x0,x1) => x0.attachShadow(x1),
_1148: (x0,x1) => x0.getPropertyValue(x1),
_1150: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
_1152: (x0,x1) => x0.removeProperty(x1),
_1154: x0 => x0.offsetLeft,
_1155: x0 => x0.offsetTop,
_1156: x0 => x0.offsetParent,
_1158: (x0,x1) => x0.name = x1,
_1159: x0 => x0.content,
_1160: (x0,x1) => x0.content = x1,
_1173: (x0,x1) => x0.nonce = x1,
_1178: x0 => x0.now(),
_1180: (x0,x1) => x0.width = x1,
_1182: (x0,x1) => x0.height = x1,
_1185: (x0,x1) => x0.getContext(x1),
_1260: x0 => x0.status,
_1261: x0 => x0.headers,
_1262: x0 => x0.body,
_1263: x0 => x0.arrayBuffer(),
_1266: (x0,x1) => x0.get(x1),
_1268: x0 => x0.read(),
_1269: x0 => x0.value,
_1270: x0 => x0.done,
_1272: x0 => x0.name,
_1273: x0 => x0.x,
_1274: x0 => x0.y,
_1277: x0 => x0.top,
_1278: x0 => x0.right,
_1279: x0 => x0.bottom,
_1280: x0 => x0.left,
_1291: x0 => x0.height,
_1292: x0 => x0.width,
_1293: (x0,x1) => x0.value = x1,
_1296: (x0,x1) => x0.placeholder = x1,
_1297: (x0,x1) => x0.name = x1,
_1298: x0 => x0.selectionDirection,
_1299: x0 => x0.selectionStart,
_1300: x0 => x0.selectionEnd,
_1303: x0 => x0.value,
_1304: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
_1308: x0 => x0.readText(),
_1310: (x0,x1) => x0.writeText(x1),
_1311: x0 => x0.altKey,
_1312: x0 => x0.code,
_1313: x0 => x0.ctrlKey,
_1314: x0 => x0.key,
_1315: x0 => x0.keyCode,
_1316: x0 => x0.location,
_1317: x0 => x0.metaKey,
_1318: x0 => x0.repeat,
_1319: x0 => x0.shiftKey,
_1320: x0 => x0.isComposing,
_1321: (x0,x1) => x0.getModifierState(x1),
_1322: x0 => x0.state,
_1325: (x0,x1) => x0.go(x1),
_1326: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
_1327: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
_1328: x0 => x0.pathname,
_1329: x0 => x0.search,
_1330: x0 => x0.hash,
_1333: x0 => x0.state,
_1338: f => finalizeWrapper(f,(x0,x1) => dartInstance.exports._1338(f,x0,x1)),
_1340: (x0,x1,x2) => x0.observe(x1,x2),
_1343: x0 => x0.attributeName,
_1344: x0 => x0.type,
_1345: x0 => x0.matches,
_1348: x0 => x0.matches,
_1349: x0 => x0.relatedTarget,
_1350: x0 => x0.clientX,
_1351: x0 => x0.clientY,
_1352: x0 => x0.offsetX,
_1353: x0 => x0.offsetY,
_1356: x0 => x0.button,
_1357: x0 => x0.buttons,
_1358: x0 => x0.ctrlKey,
_1359: (x0,x1) => x0.getModifierState(x1),
_1360: x0 => x0.pointerId,
_1361: x0 => x0.pointerType,
_1362: x0 => x0.pressure,
_1363: x0 => x0.tiltX,
_1364: x0 => x0.tiltY,
_1365: x0 => x0.getCoalescedEvents(),
_1366: x0 => x0.deltaX,
_1367: x0 => x0.deltaY,
_1368: x0 => x0.wheelDeltaX,
_1369: x0 => x0.wheelDeltaY,
_1370: x0 => x0.deltaMode,
_1375: x0 => x0.changedTouches,
_1377: x0 => x0.clientX,
_1378: x0 => x0.clientY,
_1379: x0 => x0.data,
_1380: (x0,x1) => x0.type = x1,
_1381: (x0,x1) => x0.max = x1,
_1382: (x0,x1) => x0.min = x1,
_1383: (x0,x1) => x0.value = x1,
_1384: x0 => x0.value,
_1385: x0 => x0.disabled,
_1386: (x0,x1) => x0.disabled = x1,
_1387: (x0,x1) => x0.placeholder = x1,
_1388: (x0,x1) => x0.name = x1,
_1389: (x0,x1) => x0.autocomplete = x1,
_1390: x0 => x0.selectionDirection,
_1391: x0 => x0.selectionStart,
_1392: x0 => x0.selectionEnd,
_1395: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
_1402: (x0,x1) => x0.add(x1),
_1405: (x0,x1) => x0.noValidate = x1,
_1406: (x0,x1) => x0.method = x1,
_1407: (x0,x1) => x0.action = x1,
_1435: x0 => x0.orientation,
_1436: x0 => x0.width,
_1437: x0 => x0.height,
_1438: (x0,x1) => x0.lock(x1),
_1455: f => finalizeWrapper(f,(x0,x1) => dartInstance.exports._1455(f,x0,x1)),
_1465: x0 => x0.length,
_1467: (x0,x1) => x0.item(x1),
_1468: x0 => x0.length,
_1469: (x0,x1) => x0.item(x1),
_1470: x0 => x0.iterator,
_1471: x0 => x0.Segmenter,
_1472: x0 => x0.v8BreakIterator,
_1475: x0 => x0.done,
_1476: x0 => x0.value,
_1477: x0 => x0.index,
_1481: (x0,x1) => x0.adoptText(x1),
_1482: x0 => x0.first(),
_1484: x0 => x0.next(),
_1485: x0 => x0.current(),
_1497: x0 => x0.hostElement,
_1498: x0 => x0.viewConstraints,
_1500: x0 => x0.maxHeight,
_1501: x0 => x0.maxWidth,
_1502: x0 => x0.minHeight,
_1503: x0 => x0.minWidth,
_1504: x0 => x0.loader,
_1505: () => globalThis._flutter,
_1506: (x0,x1) => x0.didCreateEngineInitializer(x1),
_1507: (x0,x1,x2) => x0.call(x1,x2),
_1508: () => globalThis.Promise,
_1509: f => finalizeWrapper(f,(x0,x1) => dartInstance.exports._1509(f,x0,x1)),
_1514: x0 => x0.length,
_1517: x0 => x0.tracks,
_1521: x0 => x0.image,
_1526: x0 => x0.codedWidth,
_1527: x0 => x0.codedHeight,
_1530: x0 => x0.duration,
_1534: x0 => x0.ready,
_1535: x0 => x0.selectedTrack,
_1536: x0 => x0.repetitionCount,
_1537: x0 => x0.frameCount,
_1582: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
_1583: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
_1584: f => finalizeWrapper(f,x0 => dartInstance.exports._1584(f,x0)),
_1585: (x0,x1,x2) => x0.addEventListener(x1,x2),
_1586: f => finalizeWrapper(f,x0 => dartInstance.exports._1586(f,x0)),
_1587: x0 => x0.send(),
_1588: () => new XMLHttpRequest(),
_1589: x0 => x0.createRange(),
_1590: (x0,x1) => x0.selectNode(x1),
_1591: x0 => x0.getSelection(),
_1592: x0 => x0.removeAllRanges(),
_1593: (x0,x1) => x0.addRange(x1),
_1594: (x0,x1) => x0.createElement(x1),
_1595: (x0,x1) => x0.add(x1),
_1596: (x0,x1) => x0.append(x1),
_1597: (x0,x1,x2) => x0.insertRule(x1,x2),
_1598: f => finalizeWrapper(f,x0 => dartInstance.exports._1598(f,x0)),
_1602: (x0,x1) => x0.matchMedia(x1),
_1613: x0 => new Array(x0),
_1616: (o, c) => o instanceof c,
_1647: (decoder, codeUnits) => decoder.decode(codeUnits),
_1648: () => new TextDecoder("utf-8", {fatal: true}),
_1649: () => new TextDecoder("utf-8", {fatal: false}),
_1650: v => stringToDartString(v.toString()),
_1651: (d, digits) => stringToDartString(d.toFixed(digits)),
_1655: o => new WeakRef(o),
_1656: r => r.deref(),
_1661: Date.now,
_1663: s => new Date(s * 1000).getTimezoneOffset() * 60 ,
_1664: s => {
      const jsSource = stringFromDartString(s);
      if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(jsSource)) {
        return NaN;
      }
      return parseFloat(jsSource);
    },
_1665: () => {
          let stackString = new Error().stack.toString();
          let frames = stackString.split('\n');
          let drop = 2;
          if (frames[0] === 'Error') {
              drop += 1;
          }
          return frames.slice(drop).join('\n');
        },
_1666: () => typeof dartUseDateNowForTicks !== "undefined",
_1667: () => 1000 * performance.now(),
_1668: () => Date.now(),
_1669: () => {
      // On browsers return `globalThis.location.href`
      if (globalThis.location != null) {
        return stringToDartString(globalThis.location.href);
      }
      return null;
    },
_1671: () => new WeakMap(),
_1672: (map, o) => map.get(o),
_1673: (map, o, v) => map.set(o, v),
_1674: s => stringToDartString(JSON.stringify(stringFromDartString(s))),
_1675: s => printToConsole(stringFromDartString(s)),
_1677: () => globalThis.performance,
_1678: () => globalThis.JSON,
_1679: x0 => x0.measure,
_1680: x0 => x0.mark,
_1681: (x0,x1,x2,x3) => x0.measure(x1,x2,x3),
_1682: (x0,x1,x2) => x0.mark(x1,x2),
_1683: (x0,x1) => x0.parse(x1),
_1684: (o, t) => o instanceof t,
_1686: f => finalizeWrapper(f,x0 => dartInstance.exports._1686(f,x0)),
_1687: f => finalizeWrapper(f,x0 => dartInstance.exports._1687(f,x0)),
_1688: o => Object.keys(o),
_1689: (ms, c) =>
              setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
_1690: (handle) => clearTimeout(handle),
_1691: (ms, c) =>
          setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
_1692: (handle) => clearInterval(handle),
_1693: (c) =>
              queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
_1694: () => Date.now(),
_1726: (a, i) => a.push(i),
_1730: a => a.pop(),
_1731: (a, i) => a.splice(i, 1),
_1733: (a, s) => a.join(s),
_1734: (a, s, e) => a.slice(s, e),
_1737: a => a.length,
_1739: (a, i) => a[i],
_1740: (a, i, v) => a[i] = v,
_1742: a => a.join(''),
_1743: (o, a, b) => o.replace(a, b),
_1745: (s, t) => s.split(t),
_1746: s => s.toLowerCase(),
_1747: s => s.toUpperCase(),
_1748: s => s.trim(),
_1749: s => s.trimLeft(),
_1750: s => s.trimRight(),
_1752: (s, p, i) => s.indexOf(p, i),
_1753: (s, p, i) => s.lastIndexOf(p, i),
_1754: (o, offsetInBytes, lengthInBytes) => {
      var dst = new ArrayBuffer(lengthInBytes);
      new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
      return new DataView(dst);
    },
_1755: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
_1756: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
_1757: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
_1758: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
_1759: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
_1760: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
_1761: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
_1763: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
_1764: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
_1765: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
_1766: Object.is,
_1767: (t, s) => t.set(s),
_1769: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
_1771: o => o.buffer,
_1772: o => o.byteOffset,
_1773: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
_1774: (b, o) => new DataView(b, o),
_1775: (b, o, l) => new DataView(b, o, l),
_1776: Function.prototype.call.bind(DataView.prototype.getUint8),
_1777: Function.prototype.call.bind(DataView.prototype.setUint8),
_1778: Function.prototype.call.bind(DataView.prototype.getInt8),
_1779: Function.prototype.call.bind(DataView.prototype.setInt8),
_1780: Function.prototype.call.bind(DataView.prototype.getUint16),
_1781: Function.prototype.call.bind(DataView.prototype.setUint16),
_1782: Function.prototype.call.bind(DataView.prototype.getInt16),
_1783: Function.prototype.call.bind(DataView.prototype.setInt16),
_1784: Function.prototype.call.bind(DataView.prototype.getUint32),
_1785: Function.prototype.call.bind(DataView.prototype.setUint32),
_1786: Function.prototype.call.bind(DataView.prototype.getInt32),
_1787: Function.prototype.call.bind(DataView.prototype.setInt32),
_1790: Function.prototype.call.bind(DataView.prototype.getBigInt64),
_1791: Function.prototype.call.bind(DataView.prototype.setBigInt64),
_1792: Function.prototype.call.bind(DataView.prototype.getFloat32),
_1793: Function.prototype.call.bind(DataView.prototype.setFloat32),
_1794: Function.prototype.call.bind(DataView.prototype.getFloat64),
_1795: Function.prototype.call.bind(DataView.prototype.setFloat64),
_1801: s => stringToDartString(stringFromDartString(s).toUpperCase()),
_1802: s => stringToDartString(stringFromDartString(s).toLowerCase()),
_1804: (s, m) => {
          try {
            return new RegExp(s, m);
          } catch (e) {
            return String(e);
          }
        },
_1805: (x0,x1) => x0.exec(x1),
_1806: (x0,x1) => x0.test(x1),
_1807: (x0,x1) => x0.exec(x1),
_1808: (x0,x1) => x0.exec(x1),
_1809: x0 => x0.pop(),
_1813: (x0,x1,x2) => x0[x1] = x2,
_1815: o => o === undefined,
_1816: o => typeof o === 'boolean',
_1817: o => typeof o === 'number',
_1819: o => typeof o === 'string',
_1822: o => o instanceof Int8Array,
_1823: o => o instanceof Uint8Array,
_1824: o => o instanceof Uint8ClampedArray,
_1825: o => o instanceof Int16Array,
_1826: o => o instanceof Uint16Array,
_1827: o => o instanceof Int32Array,
_1828: o => o instanceof Uint32Array,
_1829: o => o instanceof Float32Array,
_1830: o => o instanceof Float64Array,
_1831: o => o instanceof ArrayBuffer,
_1832: o => o instanceof DataView,
_1833: o => o instanceof Array,
_1834: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
_1836: o => {
            const proto = Object.getPrototypeOf(o);
            return proto === Object.prototype || proto === null;
          },
_1837: o => o instanceof RegExp,
_1838: (l, r) => l === r,
_1839: o => o,
_1840: o => o,
_1841: o => o,
_1842: b => !!b,
_1843: o => o.length,
_1846: (o, i) => o[i],
_1847: f => f.dartFunction,
_1848: l => arrayFromDartList(Int8Array, l),
_1849: l => arrayFromDartList(Uint8Array, l),
_1850: l => arrayFromDartList(Uint8ClampedArray, l),
_1851: l => arrayFromDartList(Int16Array, l),
_1852: l => arrayFromDartList(Uint16Array, l),
_1853: l => arrayFromDartList(Int32Array, l),
_1854: l => arrayFromDartList(Uint32Array, l),
_1855: l => arrayFromDartList(Float32Array, l),
_1856: l => arrayFromDartList(Float64Array, l),
_1857: (data, length) => {
          const view = new DataView(new ArrayBuffer(length));
          for (let i = 0; i < length; i++) {
              view.setUint8(i, dartInstance.exports.$byteDataGetUint8(data, i));
          }
          return view;
        },
_1858: l => arrayFromDartList(Array, l),
_1859: stringFromDartString,
_1860: stringToDartString,
_1861: () => ({}),
_1862: () => [],
_1863: l => new Array(l),
_1864: () => globalThis,
_1865: (constructor, args) => {
      const factoryFunction = constructor.bind.apply(
          constructor, [null, ...args]);
      return new factoryFunction();
    },
_1866: (o, p) => p in o,
_1867: (o, p) => o[p],
_1868: (o, p, v) => o[p] = v,
_1869: (o, m, a) => o[m].apply(o, a),
_1871: o => String(o),
_1872: (p, s, f) => p.then(s, f),
_1873: s => {
      let jsString = stringFromDartString(s);
      if (/[[\]{}()*+?.\\^$|]/.test(jsString)) {
          jsString = jsString.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
      }
      return stringToDartString(jsString);
    },
_1876: x0 => x0.index,
_1877: x0 => x0.groups,
_1878: x0 => x0.length,
_1880: (x0,x1) => x0[x1],
_1884: x0 => x0.flags,
_1885: x0 => x0.multiline,
_1886: x0 => x0.ignoreCase,
_1887: x0 => x0.unicode,
_1888: x0 => x0.dotAll,
_1889: (x0,x1) => x0.lastIndex = x1,
_1891: (o, p) => o[p],
_1894: () => globalThis.document,
_1895: () => globalThis.window,
_1900: (x0,x1) => x0.height = x1,
_1902: (x0,x1) => x0.width = x1,
_1906: x0 => x0.head,
_1908: x0 => x0.classList,
_1913: (x0,x1) => x0.innerText = x1,
_1914: x0 => x0.style,
_1915: x0 => x0.sheet,
_1916: x0 => x0.matches,
_1917: x0 => x0.offsetX,
_1918: x0 => x0.offsetY,
_1919: x0 => x0.button,
_1920: x0 => x0.platform,
_1925: x0 => x0.navigator,
_1932: x0 => x0.status,
_1933: (x0,x1) => x0.responseType = x1,
_1935: x0 => x0.response,
_3734: () => globalThis.window,
_3815: x0 => x0.navigator,
_4287: x0 => x0.maxTouchPoints,
_4293: x0 => x0.platform,
_14579: () => globalThis.window.flutterCanvasKit
    };

    const baseImports = {
        dart2wasm: dart2wasm,


        Math: Math,
        Date: Date,
        Object: Object,
        Array: Array,
        Reflect: Reflect,
    };

    const jsStringPolyfill = {
        "charCodeAt": (s, i) => s.charCodeAt(i),
        "compare": (s1, s2) => {
            if (s1 < s2) return -1;
            if (s1 > s2) return 1;
            return 0;
        },
        "concat": (s1, s2) => s1 + s2,
        "equals": (s1, s2) => s1 === s2,
        "fromCharCode": (i) => String.fromCharCode(i),
        "length": (s) => s.length,
        "substring": (s, a, b) => s.substring(a, b),
    };

    dartInstance = await WebAssembly.instantiate(await modulePromise, {
        ...baseImports,
        ...(await importObjectPromise),
        "wasm:js-string": jsStringPolyfill,
    });

    return dartInstance;
}

// Call the main function for the instantiated module
// `moduleInstance` is the instantiated dart2wasm module
// `args` are any arguments that should be passed into the main function.
export const invoke = (moduleInstance, ...args) => {
    const dartMain = moduleInstance.exports.$getMain();
    const dartArgs = buildArgsList(args);
    moduleInstance.exports.$invokeMain(dartMain, dartArgs);
}

