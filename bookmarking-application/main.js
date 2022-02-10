'use strict';

document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;

    if(!validateForm(siteName, siteUrl)){
        return false;
    }
    const bookmark ={
        name: siteName,
        url: siteUrl,
    }

    //local storage 
    if(localStorage.getItem('bookmarks') === null){
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        //fetching bookmark
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //adding bookmark
        bookmarks.push(bookmark);
        //local storage ( reset back )
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    //clear from after use
    document.getElementById('myForm').reset();
    
    fetchingBookmarks();
    // console.log(bookmark);
    e.preventDefault();
}

function fetchingBookmarks(){
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // console.log(bookmarks);

    const results = document.getElementById('bookmarksResults');
    results.innerHTML = '';
  for(let i = 0; i < bookmarks.length; i++){
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;

    results.innerHTML += '<div class="well">'+
                        '<h3>'+name+
                        '<a class="btn btn-default" target="_blank" href="'+addhttp(url)+'">Visit Website</a> ' +
                        '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                        '</h3>'+
                        '</div>';
  }
}


//form validation regex url
function validateForm(siteName, siteUrl){
    if(!siteName || !siteUrl){
      alert('Please fill in the form');
      return false;
    }
  
    let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);
  
    if(!siteUrl.match(regex)){
      alert('Please use a valid URL');
      return false;
    }
  
    return true;
  }  
  function addhttp(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
}
  
function deleteBookmark(url){
    // console.log(url)
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(let i=0;i< bookmarks.length;i++){
        if(bookmarks[i].url === url){
            bookmarks.splice(i, 1);
        }
        //reseting local storage and fetching again
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        fetchingBookmarks();
    }
}