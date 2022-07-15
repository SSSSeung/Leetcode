/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let ans = 0;
    
    const calcSize = function(input) {
        const stack = [];
        stack.push(input);
        grid[input.i][input.j] = 0;
        
        let size = 0;
        while(stack.length > 0) {
            const cur = stack.pop();
            const i = cur.i;
            const j = cur.j;
            
            if (i > input.i && grid[i-1][j] == 1) { 
                grid[i-1][j] = 0;
                stack.push({i:i-1, j:j});
            }
            if (j > 0 && grid[i][j-1] == 1) {
                grid[i][j-1] = 0;
                stack.push({i:i, j:j-1});
            }
            if (j+1 < n && grid[i][j+1] == 1) {
                grid[i][j+1] = 0;
                stack.push({i:i, j:j+1});
            }
            if (i+1 < m && grid[i+1][j] == 1) {
                grid[i+1][j] = 0;
                stack.push({i:i+1, j:j});
            }
            
            
            ++size;
        }
        
        return size;
    }
    
    for (let i=0; i<m; ++i) {
        for(let j=0; j<n; ++j) {
            if (grid[i][j] == 1) {
                const size = calcSize({i:i, j:j});
                if (ans < size)
                    ans = size;
            }
                
        }
    }
    
    return ans;
};

const test = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
const ans = maxAreaOfIsland(test);
console.log(ans);