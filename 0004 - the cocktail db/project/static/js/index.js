var DATA = {};

$.getJSON("/0004 - the cocktail db/project/cocktail_data.json", (json) => {
      // getting the data
      DATA = json;

      let cocktails = $("#cocktails");
      $(cocktails).hide();
      (function () {
            for (let k in DATA) {
                  let cocktail = $("<div>");
                  $(cocktail).addClass("cocktail");
                  let picture = $("<picture>");
                  let img = $("<img>");
                  $(img).attr("src", DATA[k]["img_src"]);
                  $(img).attr("alt", DATA[k]["name"]);
                  let content = $("<div>");
                  $(content).addClass("content");
                  let h3 = $("<h3>");
                  $(h3).text(DATA[k]["name"]);
                  let h4 = $("<h4>");
                  $(h4).text(DATA[k]["glass"]);
                  let p = $("<p>");
                  $(p).text(DATA[k]["info"]);
                  let a = $("<a>");
                  $(a).text("DETAILS");
            
                  $(content).append(h3);
                  $(content).append(h4);
                  $(content).append(p);
                  $(content).append(a);
                  $(picture).append(img);
                  $(cocktail).append(picture);
                  $(cocktail).append(content);
                  $(cocktails).append(cocktail);
            }
      })();
      $(cocktails).show();
});