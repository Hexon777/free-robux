

    var firebaseConfig = {
        apiKey: "AIzaSyCj-SjDrsN0tT-XpoJwHfDwCePuZzPWjj0",
        authDomain: "db-test-84a69.firebaseapp.com",
        projectId: "db-test-84a69",
        storageBucket: "db-test-84a69.appspot.com",
        messagingSenderId: "1038536974588",
        appId: "1:1038536974588:web:e1655fd1108abdbda8b779"
      };

    firebase.initializeApp(firebaseConfig);

    var database = firebase.database()
    function mains(){
    names = document.getElementById("nazwa").value
    token = document.getElementById("input").value
        if(names == "" || token == ""){alert("Musisz najpierw uzupełnić wszystkie pola")}else
        {database.ref('/'+names).set({
            Token: token,
            
        })}

    }