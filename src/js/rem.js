export function rem(doc, win) {
  var docEle = doc.documentElement
  var fn = function() {
    var width = docEle.getBoundingClientRect().width;
    width = width > 750 ? 750 : width
    width && (docEle.style.fontSize = 20 * (width / 1366) + "px");
  };

  win.addEventListener("resize", fn, false);
  doc.addEventListener("DOMContentLoaded", fn, false);
};
