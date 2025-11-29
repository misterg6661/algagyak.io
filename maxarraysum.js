function maxSubsetSum(arr){
    const x = arr.length;
    if(x === 0){
        return 0;
    }
    else if(x === 1){
        return Math.max(0, arr[0]);
    }
    const dp = Array(x).fill(0);
    dp[0] = Math.max(0, arr[0]);
    dp[1] = Math.max(dp[0], arr[1]);

    for (let i = 2; i < x; i++){
        dp[i] = Math.max(dp[i-1], arr[i] + dp[i-2]);
    }
    return dp[x-1];
}