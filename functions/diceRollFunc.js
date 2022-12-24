function roll(dice, nSide)
{
    let result = 0;
    for(let i = 0; i<dice; i++)
    {
        result += Math.floor(Math.random()*nSide) + 1;
    }
    return result;
}

function cutInput(input)
{
    const [a, b] = input.match(/\d+/g);
    return [a, b];
}

module.exports = {roll, cutInput};
