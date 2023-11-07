// https://leetcode.com/problems/eliminate-maximum-number-of-monsters/description/?envType=daily-question&envId=2023-11-07

function eliminateMaximum(dist: number[], speed: number[]): number {
  const map = new Map<number, number>();

  for (let i = 0; i < dist.length; ++i) {
    const key = Math.ceil(dist[i] / speed[i]);
    map.set(key, (map.get(key) ?? 0) + 1);
  }

  const sorted = [...map].sort((a, b) => a[0] - b[0]);

  let ans = 0;
  for (const value of sorted) {
    if (ans + value[1] > value[0]) {
      return value[0];
    }
    ans += value[1];
  }

  return ans;
}
