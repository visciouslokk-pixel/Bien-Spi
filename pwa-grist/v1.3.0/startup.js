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

  var timer = setTimeout(function () {
    tell('Le chargement des fichiers Bien SPI prend trop de temps. [BS-03]');
  }, 15000);
  window.System.import(entry).then(function () {
    clearTimeout(timer);
  }, function (error) {
    clearTimeout(timer);
    console.error('Chargement de Bien SPI', error);
    tell('Un fichier Bien SPI n’a pas pu être chargé ou exécuté. [BS-03]');
  });
})();
