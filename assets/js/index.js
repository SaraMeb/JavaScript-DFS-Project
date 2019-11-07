const apiKey = '1b9b79c163aa438dadadf2a2725a44cc';

/* Random Recipe */


/* END RANDOM */
if (localStorage.getItem('lastResearch')) {
  let value = localStorage.getItem('lastResearch');
  fetch(`https://api.spoonacular.com/recipes/autocomplete?number=3&query=${value}&apiKey=${apiKey}`)
  .then((response) => {
    response.json()
    .then((data) => {
      // debugger;
      for (var i = 0; i < data.length; i++) {
        let id = data[i].id
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
        .then((result) => {
            result.json()
            .then((recette) => {
              let div = document.createElement('div');
              div.classList.add('col-md-4');
              divItem = document.createElement('div');
              divItem.classList.add('food-item');
              let title = document.createElement('h2');
              let img = document.createElement('IMG');
              img.src = recette.image;
              title.innerHTML = recette.title;
              let a = document.createElement('a');
              a.href = `recipe.html?paramId=${recette.id}`;
              a.appendChild(img);
              divItem.append(title);
              divItem.append(a);
              div.append(divItem);
              document.querySelector('.random-recipes').appendChild(div);
            })
          })
      }
    })
  })

} else {
  fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=${apiKey}`)
  .then((response) => {
    response.json()
    .then((data) => {
      for (var i = 0; i < data.recipes.length; i++) {
        let recipe = data.recipes[i]
        // document.querySelector('.food-item h2').innerHTML = recipe.title;
        // document.querySelector('.food-item img').src= recipe.image;
        let div = document.createElement('div');
        div.classList.add('col-md-4');
        divItem = document.createElement('div');
        divItem.classList.add('food-item');
        let title = document.createElement('h2');
        let img = document.createElement('IMG');
        img.src = recipe.image;
        title.innerHTML = recipe.title;
        let a = document.createElement('a');
        a.href = `recipe.html?paramId=${recipe.id}`;
        a.appendChild(img);
        divItem.append(title);
        divItem.append(a);
        div.append(divItem);
        document.querySelector('.random-recipes').appendChild(div);

      }
    })
  })
}
