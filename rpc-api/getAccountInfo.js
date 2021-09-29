const { PublicKey } = require("@solana/web3.js");
const { CONNECTION, PAYER } = require("../const");

// 查詢帳戶資訊和餘額

async function main() {
  const account = await CONNECTION.getAccountInfo(PAYER.publicKey);
  console.log(account);
  const wrappedAccount = await CONNECTION.getAccountInfo(new PublicKey('HVdJu8YL2qaQc4uEeYHJC1fn5gSiVhEK3SAvgBgQkTtG'));
  console.log(wrappedAccount);
  const balance = await CONNECTION.getBalance(PAYER.publicKey);
  console.log(balance);
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);