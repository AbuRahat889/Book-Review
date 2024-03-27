
const getStoreBookList = ()=>{
    const storedBookList = localStorage.getItem('bookList');
    if(storedBookList){
        return JSON.parse(storedBookList);
    }else{
        return [];
    }
}

const saveBooksList = id =>{
    const storedBookLists = getStoreBookList();
    const isExits = storedBookLists.find(bookId => bookId === id);
    if(!isExits){
        storedBookLists.push(id);
        localStorage.setItem('bookList',JSON.stringify(storedBookLists));

    }
}

export  {saveBooksList, getStoreBookList};