const apiKey = '1b9b79c163aa438dadadf2a2725a44cc';

/* Load Recipe Page */
const url = window.location;
const urlObject = new URL(url);
const paramId = urlObject.searchParams.get('paramId')
console.log(paramId)
fetch(`https://api.spoonacular.com/recipes/${paramId}/information?apiKey=${apiKey}`)
.then((result) => {
  result.json()
  .then((recette) => {
    document.querySelector('.left-image img').src = recette.image;
    document.querySelector('.right-div h2').innerHTML = recette.title;

    // infos
    document.querySelectorAll('.text-content h5')[0].innerHTML = `Preparation time : ${recette.preparationMinutes} min`;
    document.querySelectorAll('.text-content h5')[1].innerHTML = `Cooking time : ${recette.cookingMinutes} min`;
    document.querySelectorAll('.text-content h5')[2].innerHTML = `${recette.servings} servings`;

    // ingredients
   document.querySelectorAll('.text-content h4')[0].innerHTML = "Ingredients";
    for (var i = 0; i < recette.extendedIngredients.length; i++) {
      let ingredient = recette.extendedIngredients[i].name;
      let ingredientsLI =  document.createElement('li');
      ingredientsLI.innerHTML = ingredient;
      document.querySelectorAll('.text-content ul')[0].append(ingredientsLI);
    }

    // instructions
   document.querySelectorAll('.text-content h4')[1].innerHTML = "Instructions";

   let instructions = recette.analyzedInstructions[0];
    for (var i = 0; i < instructions.steps.length; i++) {
      let step = instructions.steps[i].step;
      let stepsLI = document.createElement('li');
      stepsLI.innerHTML = step;
      document.querySelectorAll('.text-content ul')[1].append(stepsLI);
    }
  })
})
/* END Load Recipe Page */
