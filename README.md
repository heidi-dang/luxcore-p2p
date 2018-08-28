<img src="http://bitcore.io/css/images/bitcore-p2p.svg" alt="luxcore payment protocol" height="35" width="102">

Luxcore P2P
=======

[![NPM Package](https://img.shields.io/npm/v/luxcore-p2p.svg?style=flat-square)](https://www.npmjs.org/package/luxcore-p2p)
[![Build Status](https://img.shields.io/travis/heidi-dang/luxcore-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/heidi-dang/luxcore-p2p)
[![Coverage Status](https://img.shields.io/coveralls/heidi-dang/luxcore-p2p.svg?style=flat-square)](https://coveralls.io/r/heidi-dang/luxcore-p2p?branch=master)

`luxcore-p2p` adds [Lux protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Luxcore.

See [the main luxcore repo](https://github.com/heidi-dang/luxcore) for more information.

## Getting Started

```sh
npm install luxcore-p2p
```
In order to connect to the Lux network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('luxcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [luxcore guide](http://luxcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/heidi-dang/luxcore/blob/master/CONTRIBUTING.md) on the main luxcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/heidi-dang/luxcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Luxcore Core Developers
