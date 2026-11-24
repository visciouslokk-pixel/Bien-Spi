(function () {
  var entry = document.currentScript.getAttribute('data-src');
  var tell = function (message) {
    var status = document.getElementById('bien-spi-startup-status');
    if (status) status.textContent = message;
  };

  if (!window.System || !entry) {
    tell('Le moteur de compatibilité de Bien SPI est indisponible. [BS-02]');
    return;
  }

  var base = new URL('./', location.href);
  var failedAsset;
  function rememberFailedAsset(event) {
    var source = event.filename || (event.target && event.target.src);
    if (source && source.indexOf(base.href + 'assets/') === 0) failedAsset = source;
  }
  window.addEventListener('error', rememberFailedAsset, true);

  function showDetails(error) {
    var status = document.getElementById('bien-spi-startup-status');
    if (!status) return;
    var raw = String(error && error.message || error || 'Erreur sans détail');
    var urls = raw.match(/https?:\/\/[^\s"'()<>]+?\.js/g) || [];
    var asset = failedAsset || urls.find(function (url) {
      return url.indexOf(base.href + 'assets/') === 0;
    });
    var detail = document.createElement('pre');
    detail.style.cssText = 'white-space:pre-wrap;overflow-wrap:anywhere';
    detail.setAttribute('aria-live', 'polite');
    var summary = (error && error.name ? error.name + ' · ' : '') +
      raw.replace(/https?:\/\/[^\s"'()<>]+/g, function (url) {
        return url.indexOf(base.href) === 0 ? './' + url.slice(base.href.length).split(/[?#]/)[0] : '[URL]';
      }).slice(0, 320);
    detail.textContent = summary;
    status.after(detail);
    if (!asset) return;

    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 8000);
    var name = new URL(asset).pathname.slice(base.pathname.length);
    fetch(asset, { credentials: 'omit', cache: 'no-store', signal: controller.signal })
      .then(function (response) {
        detail.textContent = summary + '\n' + name + ' · HTTP ' + response.status +
          ' · ' + (response.headers.get('content-type') || 'type absent');
      }, function (failure) {
        detail.textContent = summary + '\n' + name + ' · requête HTTP impossible (' + failure.name + ')';
      })
      .finally(function () { clearTimeout(timer); });
  }

  var timer = setTimeout(function () {
    tell('Le chargement des fichiers Bien SPI prend trop de temps. [BS-03]');
  }, 15000);
  window.System.import(entry).then(function () {
    clearTimeout(timer);
    window.removeEventListener('error', rememberFailedAsset, true);
  }, function (error) {
    clearTimeout(timer);
    window.removeEventListener('error', rememberFailedAsset, true);
    console.error('Chargement de Bien SPI', error);
    tell('Un fichier Bien SPI n’a pas pu être chargé ou exécuté. [BS-03]');
    showDetails(error);
  });
})();
