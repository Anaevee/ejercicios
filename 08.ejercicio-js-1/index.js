
'use strict'

const API_URL = 'https://randomuser.me/api/';

let datosGuardados = [];


function setRandomUser(user){
    const dataUser={

        username:user.login.username,
        name:user.name.title,
        surname:user.name.first+" "+ user.name.last,
        email: user.email,
        gender: user.gender,
        country: user.location.country,
        picture: user.picture.thumbnail,

    };
    datosGuardados.push(dataUser);
}

function initUsers(){
    console.log("empezando")
    for (let index = 0; index < 40; index++) {
        fetch(API_URL).then(response=>response.json())
        .then((response)=>{
            setRandomUser (response.results[0]);
        })
    }
    console.log("terminado")
}
function getUsers(total){
    for (let index = 0; index < total ; index ++) {
        const element = datosGuardados[index];
        console.log (element)
    }
        

}