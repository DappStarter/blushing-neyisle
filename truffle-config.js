require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember smile just entire swallow ski'; 
let testAccounts = [
"0x4b6df9a5a0076e5c257ddc6f79bcb5fbca897be90552e0b6f4f32935a0660851",
"0xc57a32601c5857c4f2bfb99c53cee6b851a5a65afc45f8c0f7e1a7cc9991e3f7",
"0x603148e7c3f2ebbd1cc912f3e68f7c820b078bd5c74c4585fb62df9396f3848e",
"0x3970cb08b379a6f426abf7175764c32ca251eb653c02715b7e91eb4e1bcc3819",
"0x522e1bfea7886c55796e85ae6469b16d3eb4aeae01edc07383834f0f628e5339",
"0x82148694669181613369eb11fb886d81bd5b02756570bd1f86bce9b4a0dfe750",
"0x6a25aa27a0c7be81c76c3f69bd64d21ded257b004abefba6cd5f6d441fdc723c",
"0x566c76ea470f611d67b6840162fbc101546bf9c8256869b3a47b377d4c5cf50b",
"0xb00229866909758e991da320eb247b2b4b9d42451279b0cd11edf2e282879f6e",
"0xeda1b05263cc37d232b60c7812df2e3f624c28d8f70251d745d74906b4f4421b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
