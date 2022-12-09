// Här ska HTML-koden till rutan skrivas in 

const BookDetail = (book) => {
    let html = `
    <div id="bookDetail" class="book__details fixed p-4 shadow-md text-black border-purple  rounded-xl bg-white/40 fixed">
        <img src="${book.coverImage}" class="img" alt="Ingen bild">
        
        <div class="book_detail">
            <ul class="list">
                <li><b>Titel:</b> ${book.title}</li>
                <li><b>Författare:</b> ${book.author}</li>
                <li><b>Sidor:</b> ${book.pages}</li>
                <li><b>Publicerings år:</b> ${book.releaseDate}</li>
            </ul>
        </div> 
    </div>
    `;

    return html;
};
