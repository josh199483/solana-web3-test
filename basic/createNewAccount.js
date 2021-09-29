const { Keypair } = require("@solana/web3.js");

(async function() {
  let keypair = Keypair.generate()
  console.log({keypair, publicKey: keypair.publicKey.toBase58()})
}())