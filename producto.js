const input = document.querySelector("#inputProducto");
const button = document.querySelector("#buton");
const pokemoncontainer = document.querySelector(".produc");

button.addEventListener('click', (e) =>{
    e.preventDefault();
    traerProducto(input.value);
})

function traerProducto(producto) {
    fetch(`https://api.escuelajs.co/api/v1/products/${producto}`)
        .then((res) => res.json())
        .then((data) => {
            mostarProducto(data);
        });
}

function MProducto(producto) {
    const img = document.getElementById('imag');
    img.src = producto.images;

    const h3 = document.getElementById('h3');
    h3.textContent = producto.title;

    const h2 = document.getElementById('h2');
    h2.textContent = producto.id;

    const h1 = document.getElementById('h1');
    h1.textContent = producto.price;

    const Des = document.getElementById('Des');
    Des.textContent = producto.description;

    const catego = document.getElementById('cat');
    catego.textContent = producto.category;

}

function agregarp(producto){
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}



