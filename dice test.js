const rolld6 = rolld6("./dicetest.js");

test('check if dice is function provides result from 1-6 correctly', () => {
    var result = rolld6.rolld6(6);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
})