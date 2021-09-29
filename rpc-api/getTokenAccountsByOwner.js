const { CONNECTION, ALICE, TEST_MINT_1, PAYER, TOKEN_PROGRAM_ID } = require("../const")

// 查詢owner擁有多少個token account
// 只會回傳mint publiKey, owner, token amount等資訊
// 想知道mint publicKey 對應哪個token還要再透過token list比對資訊
async function main() {
  let response = await CONNECTION.getTokenAccountsByOwner(PAYER.publicKey, {
    programId: TOKEN_PROGRAM_ID,
  });
  console.log({ response })
  response.value.forEach((e) => {
    console.log(`pubkey: ${e.pubkey}`);
  });
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);