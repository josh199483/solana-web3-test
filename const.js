const { Keypair, Connection, PublicKey } = require("@solana/web3.js");
const bip39 = require('bip39')

const phrase = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about'

const seedBuffer = bip39.mnemonicToSeedSync(phrase)

// fromSeed method only accept 32 bytes seed
const SOLANA_WALLET = Keypair.fromSeed(seedBuffer.slice(0, 32));

const ALICE = Keypair.fromSecretKey(
  Uint8Array.from([
    16, 169, 21, 27, 237, 134, 45, 100, 113, 192, 66, 107, 174, 36, 175, 110, 195, 29, 133, 60, 134, 224, 92, 212, 74,
    138, 10, 139, 228, 27, 48, 106, 25, 74, 1, 158, 20, 222, 117, 41, 169, 27, 181, 228, 44, 110, 140, 200, 168, 187,
    24, 5, 88, 67, 100, 134, 162, 184, 245, 220, 111, 72, 139, 31,
  ])
);

// const API_ENDPOINT = "http://api.devnet.solana.com";
const API_ENDPOINT = "http://localhost:8899";

const CONNECTION = new Connection(API_ENDPOINT);

const TEST_MINT = new PublicKey("E4ZN2KmnVmpwLwjJNAwRjuQLeE5iFHLcAJ8LGB7FMaGQ");

const ALICE_TOKEN_ADDRESS_1 = new PublicKey("3ug8rjJdifEcTExVXFkaGuSjR3VZoDWi49ghA8gYpZiF")

const ALICE_TOKEN_ADDRESS_2 = new PublicKey("8Rs6tAqLUDzVc3GweP71sefv68ejsW8dG9ZssWpqfhBP")

module.exports = {
  SOLANA_WALLET,
  ALICE,
  API_ENDPOINT,
  CONNECTION,
  TEST_MINT,
  ALICE_TOKEN_ADDRESS_1,
  ALICE_TOKEN_ADDRESS_2
}