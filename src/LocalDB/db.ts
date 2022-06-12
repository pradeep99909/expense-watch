export default class DB{
    
    connect(){
        let openRequest = indexedDB.open("store", 2);

        openRequest.onsuccess = function() {
        let db = openRequest.result;

        db.onversionchange = function() {
            db.close();
            alert("Database is outdated, please reload the page.")
        };

        let transaction = db.transaction("books", "readwrite"); // (1)

        // get an object store to operate on it
        let books = transaction.objectStore("books"); // (2)

        let book = {
        id: 'js',
        price: 10,
        created: new Date()
        };

        let request = books.add(book); // (3)

        request.onsuccess = function() { // (4)
        console.log("Book added to the store", request.result);
        };

        request.onerror = function() {
        console.log("Error", request.error);
        };
        
        };

    }
    create(){

    }
    find(){

    }
    update(){

    }
    delete(){

    }
    createBulk(){

    }
}