loadingBars(true);

var cocktail_data;

let id = window.location.search.slice(1);

loadData(id)

function loadData(id) {
      let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+id
      let drinks
      $.getJSON(url, null , (j) =>{
            drinks = j.drinks;
            if (drinks) {
                showDrink(drinks[0]);
            } else {
                  noMatches();
            }
      });
}
function showDrink(drink) {
    $("h1").text(drink["strDrink"]);
    $("#img").attr("src", drink["strDrinkThumb"]);
    $("#name").text(drink["strDrink"]);
    $("#category").text(drink["strCategory"]);
    $("#info").text(drink["strAlcoholic"]);
    $("#glass").text(drink["strGlass"]);
    $("#instructions").text(drink["strInstructions"]);
    let ingredients = []
    for (let i=1 ; i<=15 ; i++) {
          let ing = drink["strIngredient"+i];
          if (ing != null) {
                ingredients.push(ing);
          } else {
                break;
          }
          if (i == 1) {
                console.log(drink);
          }
    }
    $("#ingredients").text(ingredients.join("\t"));
    loadingBars(false);
}
function loadingBars(show=true) {
    $("#noData").hide();
    if (show) {
          $("#loadingBars").show()
          $("h1").hide();
          $("#cocktails").hide();
          $("#container").hide();
    } else {
          $("#loadingBars").hide()
          $("h1").show();
          $("#cocktails").show();
          $("#container").show();
    }
}