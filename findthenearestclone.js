function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    const starts = [];
    for (let i = 0; i < graphNodes; i++) {
        if (ids[i] === val) {
            starts.push(i + 1);
        }
    }
    if (starts.length < 2) {
        return -1;
    }
    const g = Array.from({ length: graphNodes + 1 }, () => []);
    for (let i = 0; i < graphFrom.length; i++) {
        const a = graphFrom[i];
        const b = graphTo[i];
        g[a].push(b);
        g[b].push(a);
    }
    const dist = Array(graphNodes + 1).fill(-1);
    const parent = Array(graphNodes + 1).fill(-1);
    const q = [];
    for (const s of starts) {
        q.push(s);
        dist[s] = 0;
        parent[s] = s;
    }
    while (q.length > 0) {
        const u = q.shift();
        for (const v of g[u]) {
            if (dist[v] === -1) {
                dist[v] = dist[u] + 1;
                parent[v] = parent[u];
                q.push(v);
            }
            else if (parent[v] !== parent[u]) {
                return dist[u] + dist[v] + 1;
            }
        }
    }
    return -1;
}
