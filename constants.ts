export const questions = [
  {
    questions: "1. How is gUSD 1:1 hard pegged to 1 USD?",
    answer:
      "When gUSD price above 1 USD: If the gUSD price exceeds 1 USD, users can mint new gUSD by depositing Evmos as collateral and then sell the newly minted gUSD on DEX. As more gUSD is sold, the market supply increases, pushing the price back down to 1 USD. Users can then buy back gUSD at a lower price or use it to repay their loans, realizing a profit from the price difference. When gUSD price below 1 USD: If the gUSD price falls below 1 USD, users can purchase gUSD at a discounted rate on the market and then redeem it within the Gliese Protocol for $1 worth of stEvmos. As users buy up the undervalued gUSD, demand increases, driving the price back up to 1 USD. Users can either hold the redeemed stEvmos or sell it, profiting from the price difference.",
  },
  {
    questions: "2. How can I mint (borrow) with Gliese?",
    answer:
      "To mint (borrow) gUSD, you must deposit a certain amount of collateral (Evmos or stEvmos) through Gliese. Then you can mint gUSD against your collateral up to a collateral ratio of -%.",
  },
  {
    questions: "3. Where does the interest on gUSD come from?",
    answer:
      "The interest on gUSD comes from the Gliese Protocol's interaction with stEvmos and Liquidity Staking Derivatives (LSD). When users deposit Evmos as collateral, it is converted to stEvmos through the Gliese Protocol. The stEvmos earns yield from staking on the Evmos network, and this yield is further boosted by interacting with LSD.The earned yield is then converted back into gUSD on a regular basis through decentralized exchanges (DEXs). As a result, gUSD holders receive a stable interest, with the base APY being around -%. This interest is generated from the yield earned on the stEvmos and LSD mechanisms within the Gliese Protocol.",
  },
  {
    questions: "4. Does Gliese charge any fees?",
    answer:
      "There are no minting fees or borrowing interest on Gliese Protocol.",
  },
  {
    questions: "5. How can I earn money using Gliese?",
    answer:
      "There are four different ways to generate revenue using Gliese: \n Deposit Evmos and mint gUSD to earn yield in gUSD and rewards in GLSE.\nProvide gUSD/Evmos LP to earn GLSE.\nHold GLSE to share Gliese Protocol revenue.\nBecome a Liquidator or Liquidation Keeper to earn Evmos.",
  },
  {
    questions:
      "76. It seems the gUSD yield is lower than stEvmos. Why would I put my Evmos on to Gliese, instead of other LSD protocols?",
    answer:
      "While it's true that gUSD yield might be lower than stEvmos or other LSD protocols, there are several reasons why someone might choose to deposit their Evmos into Gliese Finance:\n1. Interest-bearing stablecoin: By depositing Evmos into Gliese, users can mint gUSD, an interest-bearing stablecoin, which allows them to earn a stable income on their holdings. This can be particularly attractive for those who want to reduce exposure to the volatile nature of the cryptocurrency market while still earning a passive income.\n2. Leveraged long on Evmos: Gliese Finance allows users to deposit Evmos as collateral and mint gUSD without any borrowing fees or interest. Users can use the minted gUSD to purchase more Evmos, effectively going leveraged long on Evmos with zero cost. This strategy can be beneficial in a bullish market, as it allows users to potentially increase their returns while maintaining exposure to Evmos.\n3. Decentralization and stability: Gliese Finance accepts only Evmos and stEvmos as collateral, making it more decentralized and stable compared to other stablecoin platforms that accept multiple types of collateral. This can be an important factor for users who prioritize decentralization and the long-term stability of the platform.\n4. Token incentives: Gliese Finance offers additional incentives in the form of GLSE tokens for users who deposit Evmos and mint gUSD. These tokens can be earned as rewards, giving users an extra layer of income generation beyond the stable interest offered by gUSD. GLSE tokens also grant holders governance rights, allowing them to participate in the decision-making process within the Gliese DAO. This can be appealing for users who want to actively engage in the platform's development and growth while also benefiting from the token's potential appreciation. Ultimately, the choice to deposit Evmos into Gliese Finance or other LSD protocols depends on an individual's investment goals, risk tolerance, and preference for stability versus potential yield.",
  },
];

export const daoFeatures = [
  {
    icon: "/icon-gliese-1.png",
    text: "Hold gUSD and receive yield",
  },
  {
    icon: "/icon-gliese-2.png",
    text: "Mint gUSD and earn GLSE token",
  },
  {
    icon: "/icon-gliese-3.png",
    text: "Stake GLSE and share protocol revenue",
  },
  {
    icon: "/icon-gliese-4.png",
    text: "Hold gUSD and receive yield",
  },
];
