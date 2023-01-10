loadingBars(true);

var cocktail_data;

loadData()

function loadData(search="") {
      let url = search.length < 1 ? "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=": "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+search
      let drinks
      $.getJSON(url, null , (j) =>{
            drinks = j.drinks;
            if (drinks) {
                  showDrinks(drinks);
            } else {
                  noMatches();
            }
      });
}

function showDrinks(drinks) {
      let cocktails = $("#cocktails");
      // clear current content
      $(cocktails).empty();
      loadingBars(true);

      for (let k of Object.keys(drinks)) {
            let drink = drinks[k]
            // get data
            let id = drink["idDrink"];
            let img_src = drink["strDrinkThumb"];
            let name = drink["strDrink"];
            let info = drink["strAlcoholic"];
            let glass = drink["strGlass"];
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
            // create and fill the DOMs
            // cocktail card
            let cocktail = $("<div>");
            $(cocktail).addClass("cocktail");
            // cocktail picture
            let picture = $("<picture>");
            let img = $("<img>");
            $(img).attr("src", img_src);
            $(img).attr("alt", name);
            // content part
            let content = $("<div>");
            $(content).addClass("content");
            let h2 = $("<h2>");
            $(h2).text(name);
            let h3 = $("<h3>");
            $(h3).text(glass[0].toUpperCase() + glass.slice(1));
            let p = $("<p>");
            $(p).text(info);
            let a = $("<a>");
            $(a).addClass("btn");
            $(a).text("DETAILS");
            $(a).attr("href", "details.html?"+id);
            // adding elements to the DOM
            $(content).append(h2);
            $(content).append(h3);
            $(content).append(p);
            $(content).append(a);
            $(picture).append(img);
            $(cocktail).append(picture);
            $(cocktail).append(content);
            $(cocktails).append(cocktail);
      }
      loadingBars(false);
}

$("#search").keyup((event) => {
      loadData(search=event.target.value);
});

function loadingBars(show=true) {
      $("#noData").hide();
      if (show) {
            $("#loadingBars").show()
            $("h1").hide();
            $("#cocktails").hide();
      } else {
            $("#loadingBars").hide()
            $("h1").show();
            $("#cocktails").show();
      }
}

function noMatches() {
      $("#cocktails").hide();
      $("#noData").show();
      $("h1").hide();
}