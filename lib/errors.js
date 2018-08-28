'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on luxcore-p2p Module {0}'
};

module.exports = require('luxcore-lib').errors.extend(spec);
