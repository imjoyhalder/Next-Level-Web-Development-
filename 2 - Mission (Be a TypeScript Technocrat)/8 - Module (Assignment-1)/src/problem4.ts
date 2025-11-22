type bookTyp = {
    title: string;
    rating: number
}

const filterByRating = (books: bookTyp[]):  bookTyp[] => {
    const filteredBooks =books.filter((book)=> book.rating>=4)
    return filteredBooks
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
