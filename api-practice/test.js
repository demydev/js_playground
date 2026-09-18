const book = [
    {title: "Refactoring", author: "Martin Fowler"},
    {title: "123", author: "321"}
];


function getTest(){
    const result = book[1].author;
    console.log(result);
}

getTest();