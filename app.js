const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

function countSubsets(n) {
    let subsets = [];

    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            subsets[i] = 1;
        } else {
            subsets[i] = subsets[i - 1] * 2;
        }
    }

    return subsets;
}

function countTopologies(n) {
    let topologies = [];
    let subsets = countSubsets(n);

    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            topologies[i] = 1;
        } else {
            topologies[i] = subsets[i] + topologies[i - 1];
        }
    }

    return topologies;
}

app.get('/api/topologies', (req, res) => {
    const n = req.query.n || 4;
    const topologies = countTopologies(n);
    res.json({ results: topologies });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

module.exports = app;