(function () {
  'use strict';

  var script = document.currentScript;
  var base = new URL('./', location.href);
  var entry = new URL(script.getAttribute('data-entry'), base);
  var summary = document.getElementById('summary');
  var result = document.getElementById('result');
  var modules = new Map();
  var message = 'Vérification du démarrage de la version 1.3.0…';
  var details = '';

  function asset(url) {
    if (!url) return '';
    var parsed = new URL(url, base);
    if (parsed.origin !== base.origin || !parsed.pathname.startsWith(base.pathname)) return '';
    return parsed.pathname.slice(base.pathname.length);
  }

  function describe(error) {
    if (!error) return 'Erreur sans détail';
    return String(error.message || error).split(base.href).join('./').slice(0, 340);
  }

  function refresh() {
    summary.textContent = message;
    var lines = ['Bien SPI · 1.3.0'];
    if (details) lines.push(details);
    modules.forEach(function (state, name) {
      lines.push(name + ' · ' + state);
    });
    result.textContent = lines.join('\n');
  }

  function checkResponse(url, previous) {
    var name = asset(url);
    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 8000);
    return fetch(url, { credentials: 'omit', cache: 'no-store', signal: controller.signal })
      .then(function (response) {
        modules.set(name, previous + ' · HTTP ' + response.status + ' · ' +
          (response.headers.get('content-type') || 'type absent'));
      }, function (error) {
        modules.set(name, previous + ' · requête HTTP impossible (' + error.name + ')');
      })
      .finally(function () {
        clearTimeout(timeout);
        refresh();
      });
  }

  if (!window.System) {
    message = 'Le moteur de compatibilité ne s’est pas chargé.';
    var engine = new URL('./assets/polyfills-legacy-CEUrgTFy.js', base);
    checkResponse(engine, 'moteur indisponible');
    refresh();
    return;
  }

  window.addEventListener('error', function (event) {
    var name = asset(event.filename);
    if (name) {
      details = name + ' : ' + describe(event.error || event.message);
      refresh();
    }
  });

  var original = window.System.instantiate;
  window.System.instantiate = function (url, parent, meta) {
    var name = asset(url);
    if (name) modules.set(name, 'en cours');
    refresh();
    return Promise.resolve(original.call(this, url, parent, meta)).then(function (registration) {
      if (name) modules.set(name, registration ? 'chargé' : 'module absent dans la réponse');
      refresh();
      return registration;
    }, function (error) {
      if (name) modules.set(name, 'échec de chargement');
      throw error;
    });
  };

  function onFailure(error) {
    message = 'Le démarrage a échoué.';
    if (!details) details = describe(error);
    refresh();
    modules.forEach(function (state, name) {
      if (state !== 'chargé') checkResponse(new URL(name, base), state);
    });
  }

  refresh();
  if (!window.grist) {
    checkResponse(new URL('./grist-plugin-api.js', base), 'bibliothèque Grist indisponible');
  }
  var watchdog = setTimeout(function () {
    onFailure('Délai de démarrage supérieur à 15 secondes.');
  }, 15000);
  window.System.import(entry.href).then(function () {
    clearTimeout(watchdog);
    message = 'Tous les fichiers du démarrage se chargent dans cet onglet.';
    refresh();
  }, function (error) {
    clearTimeout(watchdog);
    onFailure(error);
  });
})();
