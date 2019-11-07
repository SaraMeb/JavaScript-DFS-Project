const apiKey = '1b9b79c163aa438dadadf2a2725a44cc';

/* Get Recipe by query */
const url = window.location;
const urlObject = new URL(url);
const value = urlObject.searchParams.get('type');
// localStorage.setItem('lastResearch', value);
// console.log(localStorage.getItem('lastResearch'));
// console.log(value);

  // fetch(`https://api.spoonacular.com/recipes/autocomplete?number=10&query=${value}&apiKey=${apiKey}`)
  fetch(`https://api.spoonacular.com/recipes/search?type=${value}&apiKey=${apiKey}`)

  .then((response) => {
    response.json()
    .then((data) => {
      // debugger;
      for (var i = 0; i < data.results.length; i++) {
        let id = data.results[i].id
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

// /* END Get Recipe by query */
//
/* Get Recipe by  Type Cuisine */
// ingredients
// ingredientsBut
// document.querySelector('.ingredientsBut').addEventListener('click', () => {
//   if (document.querySelector('div')) {
//     document.querySelector('main').innerHTML = "";
//   }
//   // let value = document.querySelector('.ingredients').value;
//   fetch(`https://api.spoonacular.com/recipes/search?type=dessert&apiKey=${apiKey}`)
//   .then((response) => {
//     response.json()
//     .then((data) => {
//       debugger;
//       // 603172
//       // fetch(`https://api.spoonacular.com/recipes/603172/information?apiKey=${apiKey}`)
//       // .then((result) => {
//       //     result.json()
//       //     .then((data) => {
//       //       debugger;
//       //     })
//       //   })
//       // for (var i = 0; i < data.length; i++) {
//       // let id = data[i].id
//       // fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
//       // .then((result) => {
//       //     result.json()
//       //     .then((recette) => {
//       //       console.log(recette.image);
//       //       console.log(recette.title);
//       //       let img = document.createElement('IMG');
//       //       img.src = recette.image;
//       //       // debugger;
//       //       // recette.instructions // recette // recette.image
//       //       let div = document.createElement('div');
//       //       let title = document.createElement('h1');
//       //       title.innerHTML = recette.title;
//       //       div.append(title);
//       //       let a = document.createElement('a');
//       //       a.href = `recette.html?paramId=${recette.id}`;
//       //       a.appendChild(img);
//       //       div.append(a);
//       //
//       //       document.querySelector('main').appendChild(div);
//       //     })
//       //   })
//       // }
//     })
//   })
// })
/* END Get Recipe by  Type Cuisine */
