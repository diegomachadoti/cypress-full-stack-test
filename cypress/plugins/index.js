// Configurações de exportação dos Reports mochawesome e cypress-multi-reporters

const { initPlugin } = require('mochawesome/src/init');

module.exports = (on, config) => {
  initPlugin(on, config);
};


const { initPlugin } = require('cypress-multi-reporters/lib/init');

module.exports = (on, config) => {
  initPlugin(on, config);
};
