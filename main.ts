// 1. create two new variables that makes a for loop
// with a for loop increments up from 1 to 10. The for
// loop must use the two variables.
for (let index = 0; index <= 10; index++) {
    game.splash("counting up:" + index)
}
// 2. create two new variables with a for a loop that
// counts from 11 to 20 The for loop must use the two
// variables.
let a = 11
let b = 21
for (let index2 = a; index2 < b; index2++) {
    game.splash("counting up to 20:" + index2)
}
// 3. create two new variables with a for loop that
// counts down from 5 to 0 The for loop must use the
// two variables.
let max = 5
let min = 0
for (let index3 = max; index3 >= min; index3--) {
    game.splash("counting down to zero:" + index3 )
}
// 4. create two new variables for loop to make a
// countdown from 100 to 0, skiping 10 numbers each
// time The for loop must use the two variables.
let z = 10
let c = 0
for (let index4 = z; index4 > c; index4--){
    game.splash("counting by 10:" + index4 * 10)
}
