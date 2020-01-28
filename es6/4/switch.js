// switch (totalBet) {
//   case 7:
//     totalBet = funds;
//     break;
//   case 13:
//     funds = funds - 1;
//   case 11:
//     totalBet = 0;
//     break;
//   case 21:
//     totalBet = 21;
//     break;
//   default:
//     console.log("No superstiton here!");
//     break;
// }

// function adjustBet(totalBet, funds) {
//   switch (totalBet) {
//     case 7:
//       return funds;
//     case 13:
//       return 0;
//     default:
//       return totalBet;
//   }
// }

switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 11:
    totalBet = 0;
    break;
  case 13:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
}
