// Assign the data from `data.js` to a descriptive variable
// Stores the variable from the data file (called data.js)
var tableData = data;


// Select the button 
var button = d3.select("#filter-btn");


// The click handler for the form
button.on("click", function () {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValueDate = inputElement.property("value");
    console.log(inputValueDate);

    // Use the form input to filter the data by blood type
    // This is the filter function
    function dateFilter(tableData) {
        return tableData.datetime == inputValueDate
    }
    var sightingsFilteredList = tableData.filter(dateFilter)
    //------------------------------------------------------------------------------------------------------
    // OR, you can use the arrow function to filter

    // var sightingsFilteredList = tableData.filter(sighting => sighting.datetime === inputValueDate)
    //------------------------------------------------------------------------------------------------------

    console.log(sightingsFilteredList)


    // BONUS: Calculate summary statistics for the age field of the filtered data
    // First, create an array with just the age values
    // var ages = patientFilteredList.map(bloodType => bloodType.age);

    // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    // var mean = math.mean(ages);
    // var median = math.median(ages);
    // var mode = math.mode(ages);
    // var variance = math.var(ages);
    // var standardDeviation = math.std(ages);

    // Then select the table
    var summaryTable = d3.select("table>tbody")

    // Clear the data from the table within the HTML file
    summaryTable.html("");


    tableData.forEach(sightingsFilteredList => {
        // console.log(sightingsFilteredList)

        // Finally, add the summary stats to the table
        // Append an emtpy row to the table
        // var row = summaryTable.append("tr");

        // Object.values(sightingsFilteredList).forEach(([key, value]) => {
        //     var cell = row.append("td");
        //     cell.text(value);

        // });

        var row = summaryTable.append("tr");

        // Append stats to the table
        summaryTable.append("td").text(sightingsFilteredList.datetime);
        summaryTable.append("td").text(sightingsFilteredList.city);
        summaryTable.append("td").text(sightingsFilteredList.state);
        summaryTable.append("td").text(sightingsFilteredList.country);
        summaryTable.append("td").text(sightingsFilteredList.shape);
        summaryTable.append("td").text(sightingsFilteredList.durationMinutes);
        summaryTable.append("td").text(sightingsFilteredList.comments);


    });
});