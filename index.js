<<<<<<< HEAD
// Add your code here

function submitData(name, email) {
    
    const formData = {
        name: name,
        email: email,
    };

    const constObj = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },

        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', constObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            document.body.textContent = object.id;
        })
        .catch(function(error) {
            document.body.textContent = error.message;
        })
}
=======
// Add your code here

function submitData(name, email) {

    const formData = {
        name: name,
        email: email,
    };

    const constObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', constObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            document.body.textContent = object.id;
        })
        .catch(function(error) {
            document.body.textContent = error.message;
        })
}
>>>>>>> 3064fc0677a0b6ed2fd9c78adf870784c688270a
