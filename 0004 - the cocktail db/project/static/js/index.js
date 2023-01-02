const DATA = {};

$.getJSON("/0004 - the cocktail db/project/cocktail_data.json", (json) => {
      for (let j in json) {
            DATA[j] = json[j];
      }
  });
  
  