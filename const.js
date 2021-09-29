const { Keypair, Connection, PublicKey } = require("@solana/web3.js");
const bip39 = require('bip39')

const phrase = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about'

const seedBuffer = bip39.mnemonicToSeedSync(phrase)

// fromSeed method only accept 32 bytes seed
// EHqmfkN89RJ7Y33CXM6uCzhVeuywHoJXZZLszBHHZy7o
const PAYER = Keypair.fromSeed(seedBuffer.slice(0, 32));

const ALICE = Keypair.fromSecretKey(
  Uint8Array.from([
    16, 169, 21, 27, 237, 134, 45, 100, 113, 192, 66, 107, 174, 36, 175, 110, 195, 29, 133, 60, 134, 224, 92, 212, 74,
    138, 10, 139, 228, 27, 48, 106, 25, 74, 1, 158, 20, 222, 117, 41, 169, 27, 181, 228, 44, 110, 140, 200, 168, 187,
    24, 5, 88, 67, 100, 134, 162, 184, 245, 220, 111, 72, 139, 31,
  ])
);

// const API_ENDPOINT = "https://api.mainnet-beta.solana.com"
// const API_ENDPOINT = "https://solana-api.projectserum.com"
const API_ENDPOINT = "http://api.devnet.solana.com";
// const API_ENDPOINT = "http://localhost:8899";

const CONNECTION = new Connection(API_ENDPOINT);

const TEST_MINT_1 = new PublicKey("7cLRPv1ZiuYuLGdBVWoBoTAyzZL5VqxPRJJ93ZeNowHy");

const TEST_MINT_2 = new PublicKey("2MCDXvUqibn4VbkUnsAxYeMR7rZ7gYZDySQgHZ2bGUWj");

const TOKEN_ADDRESS_1 = new PublicKey("EXGuKgmqc3kBmRQWH4LfcLtVaFVU8qVK3QSy6FkFei9X")

const TOKEN_ADDRESS_2 = new PublicKey("9jwUAvdgBGBm3aQ6U2ibiPavEKVh2uD5SPXPQyqcjFst")

module.exports = {
  PAYER,
  ALICE,
  API_ENDPOINT,
  CONNECTION,
  TEST_MINT_1,
  TEST_MINT_2,
  TOKEN_ADDRESS_1,
  TOKEN_ADDRESS_2
}