// Rolling a D6
function rolld6() {
        return Math.floor(Math.random() * 6) + 1;
}

result1 = rolld6(6);
console.log(`Rolling a 6-sided die: ${result1}`);


module.exports = {rolld6}