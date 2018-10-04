(function() {
  // select a list of matching elements, context is optional
  function $(selector, context) {
    return (context || document).querySelectorAll(selector);
  }

  function onLoad(ev) {
    //
    // Format and translate date strings client side
    //
    if (location.pathname.match('^/sr/')) {
      moment.locale('sr-cyrl');
    } else {
      moment.locale('en');
    }
    $('.article-meta-published-at').forEach(function(el, idx) {
      el.innerHTML = moment(el.innerHTML).format('ll');
    });
  };

  document.addEventListener("DOMContentLoaded", onLoad);
  M.AutoInit(); // materialize
})();
