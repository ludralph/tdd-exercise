const exports = module.exports = {};
exports.getPrime= (number)=>{
    let primes = [];
    let primesArr = [];
    for(let i = 2; i < number+1; i++) {
        primes[i] = true;
    }
    let value = Math.sqrt(number);
    for(let i = 2; i < value; i++) {
        if(primes[i] === true) {
            for(let j = i * i; j <= number; j += i) {
                primes[j] = false;
            }
        }
    }
    for(let i = 2; i <= number; i++) {
        if(primes[i] === true) {
            primesArr.push(i);

        }
    }

    return primesArr;
}