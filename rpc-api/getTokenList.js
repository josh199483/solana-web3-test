const { TokenListProvider, TokenInfo } = require('@solana/spl-token-registry');

new TokenListProvider().resolve().then((tokens) => {
  // const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();
  const tokenList = tokens.filterByClusterSlug('devnet').getList();
  // const a = tokenList.filter(tok => tok.symbol === 'TULIP')
  console.log(tokenList);
  // console.log(a)
});