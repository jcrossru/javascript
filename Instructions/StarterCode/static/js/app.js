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

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputDate.property("value");

    var filteredData = tableData.filter(tableData1 => tableData1.datetime === inputValue);
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