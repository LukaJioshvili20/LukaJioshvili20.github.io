var bookStorage = [
    {
        'bookTitle':'Python for Dummies',
        'bookAuthor':'John Paul Mueller',
        'bookGenre':'Programming',
        'bookPublisher':'John Wiley & Sons',
        'bookDate':'2018',
        'bookImageSRC':'python.jpg',
    },
    {
        'bookTitle':'Python Crash Course',
        'bookAuthor':'Eric Matthes',
        'bookGenre':'Programming',
        'bookPublisher':'No Starch Press',
        'bookDate':'2019',
        'bookImageSRC':'python-crash.jpg',
    },
    {
        'bookTitle':'189 Programming Questions and Solutions',
        'bookAuthor':'Gayle Laakmann McDowell',
        'bookGenre':'Programming',
        'bookPublisher':'CareerCup',
        'bookDate':'2015',
        'bookImageSRC':'cracking.jpg',
    },
    {
        'bookTitle':'The Complete Mediterranean Cookbook: 500',
        'bookAuthor':'Americas Test Kitchen',
        'bookGenre':'Cooking',
        'bookPublisher':'CareerCup',
        'bookDate':'2016',
        'bookImageSRC':'mediterranean.png',
    },
    {
        'bookTitle':'My Grandmothers Chinese Kitchen',
        'bookAuthor':'Eileen Yin-Fei Lo',
        'bookGenre':'Cooking',
        'bookPublisher':'HP Trade',
        'bookDate':'2006',
        'bookImageSRC':'china.jpg',
    },
    {
        'bookTitle':'The New Persian Kitchen',
        'bookAuthor':'Louisa Shafia',
        'bookGenre':'Cooking',
        'bookPublisher':'Ten Speed Press',
        'bookDate':'2013',
        'bookImageSRC':'persian.jpg',
    },
    {
        'bookTitle':'Metro 2033',
        'bookAuthor':'Dmitry Glukhovsky',
        'bookGenre':'SCI-FI ',
        'bookPublisher':'Victor Gollancz',
        'bookDate':'2011',
        'bookImageSRC':'metro2033.jpg',
    },
    {
        'bookTitle':'Metro 2034',
        'bookAuthor':'Dmitry Glukhovsky',
        'bookGenre':'SCI-FI ',
        'bookPublisher':'Victor Gollancz',
        'bookDate':'2014',
        'bookImageSRC':'metro2034.jpg',
    },
    {
        'bookTitle':'Metro 2035',
        'bookAuthor':'Dmitry Glukhovsky',
        'bookGenre':'SCI-FI ',
        'bookPublisher':'Victor Gollancz',
        'bookDate':'2020',
        'bookImageSRC':'metro2035.jpg',
    },
    /* 
      {
        'bookTitle':'Name',
        'bookAuthor':'name',
        'bookGenre':'name',
        'bookPublisher':'name',
        'bookDate':'name',
        'bookImageSRC':'anme',
    },
    */
]

buildTable(bookStorage)


function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].bookTitle}</td>
                        <td>${data[i].bookAuthor}</td>
                        <td>${data[i].bookGenre}</td>
                        <td>${data[i].bookPublisher}</td>
                        <td>${data[i].bookDate}</td>
                        <td><img src="images/${data[i].bookImageSRC}" alt="Book Image"></td>
                  </tr>`
        table.innerHTML += row
    }
}