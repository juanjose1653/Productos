let url = 'https://pokeapi.co/api/v2/pokemon/571'

fetch(url)
.then(response => response.json())
.then(data => {
    
    let element = document.getElementById('elem')
    element.innerHTML = `
        <p>${data.name}</p>
        <p>${data.order}</p>
        <img src='${data.sprites.front_default}'/>
        `;
    console.log(data) 

})
.catch(err=>console.log(err))

// document.querySelector('#botonJson').addEventListener('click', traerDatos);31031
//         function traerDatos(){
//             let colombia = new XMLHttpRequest();

//             colombia.open('GET','pokemon.json',true);
//             colombia.send();
//             colombia.onreadystatechange = function(){
//                 if(this.readyState == 4 && this.status == 200){
                    
//                     let datos = JSON.parse(this.responseText)
//                     let res = document.querySelector('#res')
//                     res.innerHTML = '';

//                     for(let item of datos){
//                         res.innerHTML += `
//                         <tr>
//                         <th id="borde">${item.id}</th>
//                         <th id="borde">${item.departamento}</th>
//                         <th id="borde">${item.ciudades}</th>
                    
     
//                         `
//                     }
//                 }
//             }    
//         }