// https://leetcode.com/problems/find-the-winner-of-an-array-game/?envType=daily-question&envId=2023-11-05

function getWinner(arr: number[], k: number): number {
  let winCount = 0;
  let winnerIdx = 0;
  let compareIdx = 1;

  while (compareIdx < arr.length) {
    const winner = arr[winnerIdx];
    const compare = arr[compareIdx];

    if (winCount === k) return winner;

    if (winner > compare) {
      ++winCount;
    } else {
      winnerIdx = compareIdx;
      winCount = 1;
    }
    ++compareIdx;
  }

  return arr[winnerIdx];
}
