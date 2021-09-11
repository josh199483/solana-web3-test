const { CONNECTION, SOLANA_WALLET } = require("../const");

// 拿一些Solana的測試幣

async function main() {
  // 拿測試幣
  let txhash = await CONNECTION.requestAirdrop(SOLANA_WALLET.publicKey, 1e9);

  // 可以在 https://explorer.solana.com 查詢這筆交易，記得要選擇到你測試的網路
  console.log(`txhash: ${txhash}`);
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);