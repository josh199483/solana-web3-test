const { CONNECTION, SOLANA_WALLET } = require("../const");

// 查詢帳戶資訊和餘額

async function main() {
  const account = await CONNECTION.getAccountInfo(SOLANA_WALLET.publicKey);
  console.log(account);
  const balance = await CONNECTION.getBalance(SOLANA_WALLET.publicKey);
  console.log(balance);
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);