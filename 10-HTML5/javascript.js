function resetPage() {
	location.reload();
}
var j = 0;
var budget = [];

// Create a 2D context object to work with on the canvas
var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

// Randomly generate a color
function getRandomColor() {
  // Hexadecimal possibilities
  var possible = '0123456789ABCDEF';
  // All colors being with this
  var color = '#';
  // Loop 6 times
  for (var i = 0; i < 6; i++) {
    // Add random possibility to color variable
    color += possible[Math.floor(Math.random() * 16)];
  }

  // Return the result
  return color;
}

// Category Object Constructor
function Category(cat) {
  this.cat = cat;
}

// Category print() method
Category.prototype.print = function() {
  return '<p>Budget Item:' + this.cat +  '</p>';
}

// BudgetItem object constructor inheriting from Category
function BudgetItem(cat, amt, color, data) {
  Category.call(this, cat);

  this.amt = amt;
  this.color = color;
  this.data = data;
}

// Budget item printItem() method()
BudgetItem.prototype.printItem = function() {
  return '<p>Budget Item: ' + this.cat + ' $' + this.amt + '</p>';
}

// Create item and add to budget
function addBudgetItem() {
  // Get values
  var category = document.getElementById("category").value;
  var amount = parseFloat(document.getElementById("amt").value);

  // Check for valid values
  if (category != '' && !Number.isNaN(amount) && amount > 0) {

    // Associative Array (JS does not really support Associative arrays...Treated as an object)
    var data = [];
    data['cat'] = category;
    data['amt'] = amount;


    // Create item object - Standard way
    /*
    var item = {
      cat: category,
      amt: amount,
      // Generate random color
      color: getRandomColor(),
      data: data
    };
    */

    // Instantiate an instance of the item object - Object Inheritance Category->BudgetItem
    var item = new BudgetItem(category,amount,getRandomColor(),data);

    // Add item to budget array
    budget[j] = item;
    // Increment counter
    j++;
  }

  // Clear the input fields
  document.getElementById("category").value = "";
  document.getElementById("amt").value = "";

  // Call the display budget function
  displayBudget();
}

// Display the contents of the budget...create the pie graph on the canvas
function displayBudget() {
  var e = "";
  var i;
  var total = 0;
  var sliceAngle; // Angle of slice
  var x; // X coordinate
  var y; // Y coordinate
  var radius; // Radius
  var startAngle; // Starting angle
  var endAngle; // Ending angle
  var color; // Color
  var label; // Label text

  // Loop through items in budget and add to a string
  for (i = 0; i < budget.length; i++) {
    if (typeof budget[i] != 'undefined') {
      //e += "<p>Budget Item: " + budget[i].data['cat'] + " $" + budget[i].amt + "</p>";
      // Demonstrating an object method
      e += budget[i].printItem();
      // Keep track of the total amount
      total += parseFloat(budget[i].amt);
    }
  }

  // Add reset button
  if (e != '') {
    e += '<span class="fakeLink" onclick="budget = []; ctx.clearRect(0, 0, 400, 400); displayBudget();">Reset</span>';
  }

  // Insert the results to the DOM
  document.getElementById("Result").innerHTML = e;

  // Calculate Pie slice and draw it
  startAngle = 0; // Always start at 0
  for (i in budget) {
    // How big the slice is going to be...piece of the pie
    sliceAngle = 2 * Math.PI * budget[i].amt / total;
    // Find x midpoint of pie
    x = canv.width / 2;
    // Find y midpoint of pie
    y = canv.height / 2;
    // Determine the radius
    radius = Math.min(x, y);
    // Ending angle
    endAngle = startAngle + sliceAngle;
    // Get the color from the item stored in the budget array
    color = budget[i].color;
    // Call the darw slice function
    drawSlice(ctx, x, y, radius, startAngle, endAngle, color);
    // Keep track where we left off at
    startAngle = endAngle;
  }

  // Calculate label for slices and draw it
  startAngle = 0;
  for (i in budget) {
    sliceAngle = 2 * Math.PI * budget[i].amt / total;
    label = budget[i].cat;
    x = canv.width / 2;
    y = canv.height / 2;
    radius = Math.min(x, y);
    // Label x starting position
    var lx = x + (radius / 2) * Math.cos(startAngle + sliceAngle / 2);
    // Label y starting position
    var ly = y + (radius / 2) * Math.sin(startAngle + sliceAngle / 2);
    // Call the draw label function
    drawLabel(ctx, label, lx, ly);
    // Keep track
    startAngle += sliceAngle;
  }

  // Draw a slice of the pie
  function drawSlice(ctx, x, y, radius, startAngle, endAngle, color) {
    // Color to be used for the slice
    ctx.fillStyle = color;
    // Start a new path
    ctx.beginPath();
    // Create the pie shape
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startAngle, endAngle);
    // Close the path
    ctx.closePath();
    // Fill it in
    ctx.fill();
  }

  // Draw a label
  function drawLabel(ctx, label, x, y) {
    // Color for the text
    ctx.fillStyle = "white";
    // Font to be used
    ctx.font = "bold 12px Arial";
    // Write the text at the correct position
    ctx.fillText(label, x, y);
  }
}

