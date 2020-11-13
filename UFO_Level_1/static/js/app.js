// Assign the data from `data.js` to a descriptive variable
// Stores the variable from the data file (called data.js)
var tableData = data;

// // Select the text box
// var button = d3.select("#button");

// Complete the click handler for the form
// button.on("click", function () {

// Select the input element and get the raw HTML node
// var inputElement = d3.select("#patient-form-input");

// Get the value property of the input element
// var inputValue = inputElement.property("value");
// console.log(inputValue);

// Use the form input to filter the data by blood type
// This is the filter function
// function bloodTypeFilter(people) {
//     return people.bloodType.toLowerCase() == inputValue.toLowerCase()
// }

// var patientFilteredList = people.filter(bloodTypeFilter)

// console.log(patientFilteredList)


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


tableData.forEach(sighting => {
    console.log(sighting)

    // Finally, add the summary stats to the table
    // Append an emtpy row to the table
    var row = summaryTable.append("tr");

    Object.values(sighting).forEach(value => {


        // Append stats to the table
        summaryTable.append("td").text(sighting.datetime);
        summaryTable.append("td").text(sighting.city);
        summaryTable.append("td").text(sighting.state);
        summaryTable.append("td").text(sighting.country);
        summaryTable.append("td").text(sighting.shape);
        summaryTable.append("td").text(sighting.durationMinutes);
        summaryTable.append("td").text(sighting.comments);

    })

});