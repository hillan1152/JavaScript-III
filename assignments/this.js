/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window binding: 'this' is defaulted to the window object, which is not ideal for anyone coding. 
* 2. Implicit binding: most common use, this applies to objects within methods and when the function is invoked, the left of the dot is what the keyword refers to.
* 3. Explicit binding: uses call(), apply(), and  bind features to to tell javascript to use a certain value. 
* 4. New binding: uses the 'new' keyword to create new objects.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const workout = "Squat";
function lift() {
    console.log(this.workout);
};
lift();
// Principle 2

// code example for Implicit Binding
const myTeam = {
    name: 'New York Giants',
    sport: 'Football',
    favPlayer: 'Saquon',
    preach: function() {
        return `My favorite team is the ${this.name} they are a ${this.sport} team and my favorite player is ${this.favPlayer}!`
    }
}
console.log(myTeam.preach());



// Principle 3

// code example for New Binding
function team(arr) {
    this.thing = arr;
}
let activity = new team("We are running sprints");
console.log(activity.thing);

// Principle 4

// code example for Explicit Binding
function whatSport() {
    console.log(this.sport);
}
whatSport.call(myTeam);

squad = whatSport.bind(myTeam);
squad();