const glob = require("glob"),
    path = require("path");

module.exports = function (source) {
  const data = typeof source === 'string'? JSON.parse(source) : source;
  data.slides = fixGlob(data.slides);
  return `${ JSON.stringify(data) }`;
};


/**
 * Support for glob patterns on config.json slides
 */

function fixGlob(_slides, inside = false) {
  const baseContentSlides = 'content/slides/';
  if (Array.isArray(_slides)) {
    const y = _slides.reduce((acc, _cur) => {
      const ret = fixGlob(_cur, true);
      if (inside && Array.isArray(ret)) {
        acc.push(...ret);
      } else {
        acc.push(ret);
      }
      return acc;
    }, []);
    return y;
  } else if (typeof _slides === 'string') {
    const items = glob.sync(path.join(baseContentSlides, _slides)).map(slidePath => slidePath.substr(baseContentSlides.length));
    return (items.length && items.length === 1)? items[0]:items;
  } else {
    return _slides;
  }
};
