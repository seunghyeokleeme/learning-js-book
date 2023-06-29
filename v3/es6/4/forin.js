const player = { name: "Thomos", rank: "Midshipman", age: 25 };
for (let prop in player) {
  if (!player.hasOwnProperty(prop)) continue;
  console.log(prop + ": " + player[prop]);
}
