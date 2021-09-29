const { PublicKey } = require("@solana/web3.js");

// 常見programID
const WRAPPED_SOL_MINT = new PublicKey(
  'So11111111111111111111111111111111111111112',
);

const TOKEN_PROGRAM_ID = new PublicKey(
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
);

// export const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
//   'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
// );

// export const BPF_UPGRADE_LOADER_ID = new PublicKey(
//   'BPFLoaderUpgradeab1e11111111111111111111111',
// );

// export const MEMO_ID = new PublicKey(
//   'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
// );

const METADATA_PROGRAM_ID =
  new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s')

// export const VAULT_ID =
//   'vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn'

// export const AUCTION_ID =
//   'auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8'

const METAPLEX_ID = new PublicKey('p1exdMJcjVao65QdewkaZRUnU6VPSXhus9n2GzWfh98')

// export const SYSTEM = new PublicKey('11111111111111111111111111111111');

// Serum DEX program id on mainnet-beta.
// export const DEX_PID = new PublicKey(
//   '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
// );

// Serum Swap new version program id
// export const SWAP_PROGRAM_ID = new PublicKey(
//   'SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8',
// );

// Swap program id on mainnet-beta.
// export const SWAP_PID = new PublicKey(
//   '22Y43yTVxuUkoRKdm9thyRhQ3SdgQS7c7kB6UNCiaczD',
// );

// USDC mint on mainnet-beta.
// export const USDC_PUBKEY = new PublicKey(
//   'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
// );

// USDT mint on mainnet-beta.
// export const USDT_PUBKEY = new PublicKey(
//   'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
// );

const POOL_PROGRAM_ID = new PublicKey(
  'ERvQUuLLY89DcwiUYemUgogdt2TFh7CG7cNW1fEFzeMJ',
);

// Raydium swap program
// const raydium_swap_program = '675kP....t1Mp8'

module.exports = {
  TOKEN_PROGRAM_ID,
  METADATA_PROGRAM_ID,
  METAPLEX_ID,
  WRAPPED_SOL_MINT
}