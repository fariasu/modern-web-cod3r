const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break         // causa desvio de fluxo para fora do laço corrente, nesse caso o for
    }
    
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue      // para a repetição atual e vai para a próxima
    }
    
    console.log(`${y} = ${nums[y]}`)
}

