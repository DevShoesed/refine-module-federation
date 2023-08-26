const {
    withNativeFederation, shareAll
  } = require("@softarc/native-federation/build");
  
  module.exports = withNativeFederation({
    name: "host",
    shared: shareAll(),
    skip: [
      'react-dom/server',
      'react-dom/server.node'
    ],
  });