const container = document.getElementById("container");
const post_url = "https://dh0wkzi4.run.nodescript.dev/recipes_finder_2"



const output = document.getElementById("output");



container.addEventListener("submit", async function (event) {
    event.preventDefault();

    console.log("Function started");

    const ingredient_1 = document.getElementById("ingredient_1").value;
    const ingredient_2 = document.getElementById("ingredient_2").value;
    const ingredient_3 = document.getElementById("ingredient_3").value;

    const object = { 
        ingredient_1 : ingredient_1, 
        ingredient_2 : ingredient_2, 
        ingredient_3 : ingredient_3 
                    }

    const response = await fetch(post_url, {
        method : "POST",
        headers : {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body : JSON.stringify(object)
      })

    console.log('status:', response.status);

    const html = await response.text();

    output.style.display = 'block';


    output.innerHTML = html; 

})
