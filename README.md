# testRows
test Rows

In folder public - front-end for task

In folder tests - tests

## Counting Topologies Formula

For the problem of counting topologies, we can use the following formula:

\[ T(n) = \sum_{k=0}^{n} \binom{n}{k} \cdot k! \cdot S(n, k) \]

where \( S(n, k) \) is the Stirling number of the second kind.

### Explanation:

- \( \binom{n}{k} \) is the binomial coefficient, representing the number of ways to choose \( k \) elements from a set of \( n \).
- \( k! \) is the factorial of \( k \), representing the number of permutations of \( k \) elements.
- \( S(n, k) \) is the Stirling number of the second kind, representing the number of ways to partition a set of \( n \) elements into \( k \) non-empty subsets.
