// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => console.log(response))
// .catch(error => console.error(error));

//converting to json
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => response.json())
// .then(data => console.log(data.weight))
// .catch(error => console.error(error));


// if it got error



// fetch("https://pokeapi.co/api/v2/pokemon/harsha") // id is differnt
// .then(response => {

//     if(!response.ok){
//         throw new Error("could not fetch resouces");

//     }
//     return response.json();
// })
// .then(data => console.log(data.weight))
// .catch(error => console.error(error));



//Asyn and Await

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLocaleLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite; // Set the sprite as the image source
        imgElement.style.display = "block"; // Make the image visible
    } catch (error) {
        console.error(error);
    }
}
