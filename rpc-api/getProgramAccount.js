const { PublicKey } = require("@solana/web3.js");
const { CONNECTION, PAYER } = require("../const");

// 常見programID
// export const WRAPPED_SOL_MINT = new PublicKey(
//   'So11111111111111111111111111111111111111112',
// );

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

// export const METAPLEX_ID =
//   'p1exdMJcjVao65QdewkaZRUnU6VPSXhus9n2GzWfh98'

// export const SYSTEM = new PublicKey('11111111111111111111111111111111');

const FARM_ID = new PublicKey('FARM1U7g8p6XG18m3P25Rnb1RPVQZt2sC4ax35CyJzyc')

// 查詢某個program下的所有account

async function main() {
  const accounts = await CONNECTION.getProgramAccounts(FARM_ID);
  console.log(accounts);
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);