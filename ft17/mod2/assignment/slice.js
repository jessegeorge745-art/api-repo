const movies = [
    `friday `,
    `next friday`,
    `babydriver`,
    `fight club`,
    `war machine`,
    `breaking bad`,
] ;
console.log(movies.slice(2, 3));
console.log(movies.slice(2, 4));
console.log(movies.slice(2, 6));
console.log(movies.slice(2, 5));
console.log(movies.slice(3, 6));
movies[2] = `bob the builder`;
console.log(movies.length);