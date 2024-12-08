const myArr = [4,9,6,7,5,1,2]
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman", "spiderman"]

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const another_array = [1,2,4,6,8,9,[8,9],7]

const real_another_array = another_array.flat();

console.log(real_another_array);