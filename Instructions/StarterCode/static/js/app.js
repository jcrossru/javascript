// from data.js
var tableData = data;

// Getting a reference to the button on the page with the id property set to `click-me`
var filterBtn = d3.select("#filter-btn");


// Get a reference to the table body
var tbody = d3.select("tbody");

data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Button handler
filterBtn.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    filteredData = tableData;

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");

    if (inputDateValue) { 
       var filteredData = tableData.filter(tableData1 => tableData1.datetime === inputDateValue);
    }
    if (inputCityValue) { 
        var filteredData = tableData.filter(tableData1 => tableData1.city === inputCityValue);
    }
    if (inputStateValue) { 
        var filteredData = tableData.filter(tableData1 => tableData1.state === inputStateValue);
    }
    if (inputCountryValue) { 
        var filteredData = tableData.filter(tableData1 => tableData1.country === inputCountryValue);
    }
    if (inputShapeValue) { 
        var filteredData = tableData.filter(tableData1 => tableData1.shape === inputShapeValue);
    }
    
    console.log(filteredData);
    document.getElementById("ufo-tbody").innerHTML="";
    filteredData.forEach((filteredData1) => {
        var row = tbody.append("tr");
        Object.entries(filteredData1).forEach(([key, value]) => {
          var newCell = row.append("td");
          newCell.text(value);
        });
      });

});