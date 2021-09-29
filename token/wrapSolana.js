const { Keypair, Transaction, SystemProgram, PublicKey } = require("@solana/web3.js");
const SPLToken = require("@solana/spl-token");
const { CONNECTION, PAYER } = require("../const");
const { WRAPPED_SOL_MINT } = require("../programIds")


const BN = require('bn.js')

const wrapSolana = async () => {
  // let ata = await SPLToken.Token.getAssociatedTokenAddress(
  //   SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID, // associated token program id
  //   SPLToken.TOKEN_PROGRAM_ID, // token program id
  //   WRAPPED_SOL_MINT, // wrapped sol mint
  //   PAYER.publicKey // token account auth (擁有token account權限的人)
  // );
  // console.log({ ata })

  console.log({ PAYER: PAYER.publicKey.toBase58() })

  const balanceNeeded = await SPLToken.Token.getMinBalanceRentForExemptAccount(
    CONNECTION,
  );
  console.log({ balanceNeeded })
  const wrappedAmount = 1e8

  // const transaction = new Transaction();
  // // transaction.add(
  // //   SystemProgram.createAccount({
  // //     fromPubkey: PAYER.publicKey,
  // //     newAccountPubkey: ata.publicKey,
  // //     lamports: balanceNeeded,
  // //     space: SPLToken.AccountLayout.span,
  // //     programId: SPLToken.TOKEN_PROGRAM_ID,
  // //   }),
  // // );
  // // console.log('createAccount')

  // // Send lamports to it (these will be wrapped into native tokens by the token program)
  // transaction.add(
  //   SystemProgram.transfer({
  //     fromPubkey: PAYER.publicKey,
  //     toPubkey: ata.publicKey,
  //     lamports: 5e8,
  //   }),
  // );
  // console.log('transfer')

  // // Assign the new account to the native token mint.
  // // the account will be initialized with a balance equal to the native token balance.
  // // (i.e. amount)
  // transaction.add(
  //   SPLToken.Token.createAssociatedTokenAccountInstruction(
  //     SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID, // 通常是固定值, associated token program id
  //     SPLToken.TOKEN_PROGRAM_ID, // 通常是固定值, token program id
  //     WRAPPED_SOL_MINT, // mint (需要跟剛剛算ata時的mint是同一個)
  //     ata, // 剛剛算出來的 ata
  //     PAYER.publicKey, // token account owner (要跟剛剛算ata時的token account auth是同一個)
  //     PAYER.publicKey // payer, 建立帳戶付錢的人，等同於 SystemProgram.createAccount 的 from
  //   )
  // );
  // console.log('createAssociatedTokenAccountInstruction')

  // Create a new account
  // const newAccount = Keypair.generate();
  // console.log({ newAccount, newAccountPub: newAccount.publicKey.toBase58() })
  const transaction = new Transaction();
  // transaction.add(
  //   SystemProgram.createAccount({
  //     fromPubkey: PAYER.publicKey,
  //     newAccountPubkey: newAccount.publicKey,
  //     lamports: balanceNeeded,
  //     space: SPLToken.AccountLayout.span,
  //     programId: SPLToken.TOKEN_PROGRAM_ID,
  //   }),
  // );

  // // Send lamports to it (these will be wrapped into native tokens by the token program)
  transaction.add(
    SystemProgram.transfer({
      fromPubkey: PAYER.publicKey.toBase58(),
      toPubkey: 'HVdJu8YL2qaQc4uEeYHJC1fn5gSiVhEK3SAvgBgQkTtG',
      lamports: wrappedAmount,
    }),
  );

  // // Assign the new account to the native token mint.
  // // the account will be initialized with a balance equal to the native token balance.
  // // (i.e. amount)
  // transaction.add(
  //   SPLToken.Token.createInitAccountInstruction(
  //     SPLToken.TOKEN_PROGRAM_ID,
  //     WRAPPED_SOL_MINT,
  //     newAccount.publicKey,
  //     PAYER.publicKey,
  //   ),
  // );
  transaction.feePayer = PAYER.publicKey

  // Send the three instructions
  const txHash = await CONNECTION.sendTransaction(transaction, [PAYER], {skipPreflight: false})
  console.log({ txHash })

  const payerAccount = await CONNECTION.getAccountInfo(PAYER.publicKey);
  console.log({ payerAccount })
  // const wrappedAccount = await CONNECTION.getAccountInfo(newAccount.publicKey);
  // console.log({ wrappedAccount })
}

wrapSolana().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);

module.exports = wrapSolana
