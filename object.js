person={"name":"ajmel","age":35,"place":"kochi"}   //single object
console.log(person)
console.log(person.name)
console.log(person.place)

// multiple objects Save

persons=[{"name":"ajmel","age":35,"place":"kochi"},
    {"name":"anfar","age":34,"place":"malappuram"},
    {"name":"sabith","age":20,"place":"kasaragod"},
]
console.log(persons)
console.log(persons[1].name)       //JSON
console.log(persons[0].age)        //Java Script Object Notation
str=JSON.stringify(persons)
console.log(str)  //converted object to string

console.log(JSON.parse(str))   //return converted to objects from string

