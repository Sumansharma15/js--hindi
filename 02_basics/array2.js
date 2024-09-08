const marvel_heroes = [ "thor","spiderman","ben10"]
const dc_heroes = ["shakti","power","ninja"]
marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes[3][1]);
//const allheroes = marvel_heroes.concat(dc_heroes)
//console.log(allheroes);

//const all_newheroes = [...marvel_heroes,...dc_heroes]//spread function
//console.log(all_newheroes);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_another_array = another_array.flat(Infinity)//array spreadout ho jata hai isse
console.log(real_another_array);

console.log(Array.isArray("suman"));
console.log(Array.from("suman"));//array ki form mai bna dega

let score1 = 100
let score2 =200
let score3 = 300
console.log(Array.of(score1, score2,score3));


