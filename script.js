function makingCharacters (wife, husband){
    husband.spouce = wife;
    wife.spouce = husband;

    return{
        person1: wife,
        person2: husband 
    };
};

let kennedysFamily = makingCharacters (
    {name: "Jacqueline Bouvier", age: 22 },
    {name: "John F. Kennedy", age: 34}
    )

console.log(kennedysFamily.person1.name + " and " + kennedysFamily.person2.name + " met them around 1951." );
console.log( kennedysFamily.person1.name + " was " + kennedysFamily.person1.age + " years old " + " and " + 
kennedysFamily.person2.name + " was " + kennedysFamily.person2.age + " years old.");
console.log ("They decide to get married in 1953");
console.log(kennedysFamily.person1.name + " would be the first Bridesmaid.")

kennedysFamily.person1.name = "Jacqueline Kennedy";
console.log("When they get married, Jacqueline Bouvier changed her name to: " + kennedysFamily.person1.name);

console.log ("Dallas, November 22 1963");
console.log(kennedysFamily.person1.name + " and " + kennedysFamily.person2.name + " were having a trip in Daley streets when suddenly" )
console.log("BAM!!");

delete kennedysFamily.person2

console.log("The president of U.S.A was killed and he became: " + kennedysFamily.person2);
console.log(person2)
