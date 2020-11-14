// Assign the data from `data.js` to a descriptive variable
// The variable stores the data from within the data file (called data.js)
var tableData = data;


// Select the button element
var button = d3.select("#filter-btn");

// Select the table body element
var tbody = d3.select("tbody");

// The click handler for the form
button.on("click", function () {

    // Clear the table
    tbody.html('');

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValueDate = inputElement.property("value");
    console.log(inputValueDate);

    // Use the form input to filter the data by the date in the text box
    // This is the filter function
    function dateFilter(tableData) {
        return tableData.datetime == inputValueDate
    };
    var sightingsFilteredList = tableData.filter(dateFilter);
    //------------------------------------------------------------------------------------------------------
    // OR, you can use the arrow function to filter

    // var sightingsFilteredList = tableData.filter(sighting => sighting.datetime === inputValueDate)
    //------------------------------------------------------------------------------------------------------

    console.log(sightingsFilteredList);

    // Create the rows and append the filtered data to the HTML table
    sightingsFilteredList.forEach(sighting => {
        console.log(sighting)

        // Create a new row in the table
        var row = tbody.append("tr");

        // Append the filtered data to the table in the HTML
        Object.values(sighting).forEach(value => {

            row.append("td").text(value);

            // var row = tbody.append("tr");

            // // Append stats to the table
            // row.append("td").text(sighting.datetime);
            // row.append("td").text(sighting.city);
            // row.append("td").text(sighting.state);
            // row.append("td").text(sighting.country);
            // row.append("td").text(sighting.shape);
            // row.append("td").text(sighting.durationMinutes);
            // row.append("td").text(sighting.comments);

            // console.log(sightingsFilteredList[0])

        });
    });
});