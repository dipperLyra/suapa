

function listUsers() {
     fetch("http://localhost:3000/users")
            .then(users => console.log(users))
            .catch(error => console.error(error))
}