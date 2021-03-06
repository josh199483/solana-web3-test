const { CONNECTION, TOKEN_ADDRESS_1 } = require("../const");

// 查詢代幣餘額

async function main() {
  let response = await CONNECTION.getTokenAccountBalance(TOKEN_ADDRESS_1);
  console.log(response);
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);