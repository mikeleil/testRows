const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

function binomialCoefficient(n, k) {
    if (k === 0 || k === n) {
        return 1;
    } else {
        return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
    }
}

function stirlingNumberSecond(n, k) {
    if (n === 0 && k === 0) {
        return 1;
    } else if (n === 0 || k === 0 || k > n) {
        return 0;
    } else {
        return k * stirlingNumberSecond(n - 1, k) + stirlingNumberSecond(n - 1, k - 1);
    }
}

function numberOfTopologies(n) {
    let result = 0;
    for (let k = 0; k <= n; k++) {
        result += binomialCoefficient(n, k) * factorial(k) * stirlingNumberSecond(n, k);
    }
    return result;
}

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function countTopologies(n) {
    let topologies = [];

    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            topologies[i] = 1;
        } else {
            topologies[i] = numberOfTopologies(i);
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