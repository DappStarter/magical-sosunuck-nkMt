require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth soap unveil install inhale flee street'; 
let testAccounts = [
"0x534441f0692e7c50a823057b8cb87648e8ae4ccb2d01cf82132503024008e79e",
"0xa534743d69a6f6e077d429061552e752f606687a01117880c7bd17a15061eb7a",
"0x9c82fbf3e1a8eddeeddba87ccedab7f2c37b3d475f80ea7448a26b7042a9d186",
"0xc8a22f3769a7425bf652703d8bd30685810caeb6bc1f6484d45b88627b0f4e6b",
"0x7c86ede7abfa1f8bdb033d4643dc2e74cb7d0d7e7bc500c35acfeb52f2dd474d",
"0x3618e59fa791446ab4058c63bb42ab3e9012dba96b91e11069393f310590ef81",
"0xd85545de67c12ba928ebc0a93943bce46ce6e6fc8225a7cd21eedecac403b6a2",
"0x00a8e968feffbccd510a78d6459c518b0b6b114745d729ee85aee36a03166eae",
"0xfc3016413cfc160921c4c28d248f337ba323b53ae6c8e88043676b2a0ad63b8c",
"0x2d48c636402ae0c494e659e5b6147cf0b7809fd8b99c9dce18eeeb8636c37544"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

