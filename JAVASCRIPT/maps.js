// Tipo Map é uma lista de chave e valor

function getAdmins(map) {
    let admin = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admin.push(key);
        }
    }
    return admin;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Joao', 'Admin');
usuarios.set('Marcela', 'User');
usuarios.set('Luiza', 'Admin');

console.log(getAdmins(usuarios));