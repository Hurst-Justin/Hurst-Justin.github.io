window.onload = resetForm()

function getTotal() {
    document.getElementById("rush").checked = false;
    var theQuantity1 = Number(document.getElementById('quantity1').value);
    var theQuantity2 = Number(document.getElementById('quantity2').value);
    if (/^\s*\d{1,4}(?!\S)/.test(theQuantity1)) 
    {
        var total = theQuantity1 * 100 + theQuantity2 * 200;
        if (isNaN(total))
            {
                total = theQuantity1 * 100
                document.getElementById('total').innerHTML = total.toFixed(2);
                document.getElementById('total2').value = total.toFixed(2);
            }
        else
            {
                document.getElementById('total').innerHTML = total.toFixed(2);
                document.getElementById('total2').value = total.toFixed(2);
                document.getElementById('quantity1').style.border = 'thin solid lightgrey';
            }

    }
    else
    {
        document.getElementById('quantity1').value = '';
        document.getElementById('quantity1').placeholder = 'Invalid';
        document.getElementById('quantity1').style.border = 'thin solid red';
    }
    if (/^\s*\d{1,4}(?!\S)/.test(theQuantity2)) 
    {
        var total = theQuantity1 * 100 + theQuantity2 * 200;
        if (isNaN(total))
            {
                total = theQuantity2 * 200;
                document.getElementById('total').innerHTML = total.toFixed(2);
                document.getElementById('total2').value = total.toFixed(2);
            }
        else
        {
            document.getElementById('total').innerHTML = total.toFixed(2); 
            document.getElementById('total2').value = total.toFixed(2);   
            document.getElementById('quantity2').style.border = 'thin solid lightgrey';
        }
        
    }
    else
    {
        document.getElementById('quantity2').value = '';
        document.getElementById('quantity2').placeholder = 'Invalid';
        document.getElementById('quantity2').style.border = 'thin solid red';
    }

   }
function double(){
    var checkBox = document.getElementById("rush");
    var total = document.getElementById("total").innerHTML
    
    if (checkBox.checked == true)
    {
        total *= 2;
        document.getElementById('total').innerHTML = total.toFixed(2);
        document.getElementById('total2').value = total.toFixed(2);
    }
    else
    {
        total /= 2;
        document.getElementById('total').innerHTML = total.toFixed(2);    
        document.getElementById('total2').value = total.toFixed(2);
    }
}

function validateCC(theCC) {
    if (/^\s*\d{16}(?!\S)|^(\s+)?\d{4}(\s)\d{4}(\s)\d{4}(\s)\d{4}(?!\S)/.test(theCC))
    {
        document.getElementById('CC').style.border = 'thin solid lightgrey';
    } 
    else
    {
        document.getElementById('CC').value = '';
        document.getElementById('CC').placeholder = 'Invalid Card Number';
        document.getElementById('CC').style.border = 'thin solid red';
    }
}
function validateFirstName(firstName) {
    if (/\w/.test(firstName))
    {
        document.getElementById('firstName').style.border = 'thin solid lightgrey';
    } 
    else
    {
        document.getElementById('firstName').value = '';
        document.getElementById('firstName').placeholder = 'Invalid First Name';
        document.getElementById('firstName').style.border = 'thin solid red';
    }
}
function validateLastName(lastName) {
    if (/\w/.test(lastName))
    {
        document.getElementById('lastName').style.border = 'thin solid lightgrey';
    } 
    else
    {
        document.getElementById('lastName').value = '';
        document.getElementById('lastName').placeholder = 'Invalid Last Name';
        document.getElementById('lastName').style.border = 'thin solid red';
    }
}
function validateEmail(lastName) {
    if (/\S+@\S+\.\S+/.test(lastName))
    {
        document.getElementById('email').style.border = 'thin solid lightgrey';
    } 
    else
    {
        document.getElementById('email').value = '';
        document.getElementById('email').placeholder = 'Invalid Email';
        document.getElementById('email').style.border = 'thin solid red';
    }
}
function validatePhone(thePhone) {
    if (/^\s*((\d{10})|(\d{3}-\d{3}-\d{4})|(\(\d{3}\)\d{3}-\d{4})|(\(\d{3}\)\s\d{3}-\d{4}))(?!\S)/.test(thePhone))
    {
        document.getElementById('phone').style.border = 'thin solid lightgrey';
    } 
    else
    {
        document.getElementById('phone').value = '';
        document.getElementById('phone').placeholder = 'Invalid Phone Number';
        document.getElementById('phone').style.border = 'thin solid red';
    }
}
function validateStreet(theStreet) {
    if (/\d/.test(theStreet))
    {
        document.getElementById('streetName1').style.border = 'thin solid lightgrey';
    } 
    else
    {
        document.getElementById('streetName1').value = '';
        document.getElementById('streetName1').placeholder = 'Invalid Street Address';
        document.getElementById('streetName1').style.border = 'thin solid red';
    }
}
function validateCity(theCity) {
    if (/\w/.test(theCity))
    {
        document.getElementById('city').style.border = 'thin solid lightgrey';
    } 
    else
    {
        document.getElementById('city').value = '';
        document.getElementById('city').placeholder = 'Invalid City Name';
        document.getElementById('city').style.border = 'thin solid red';
    }
}

function validateZip(theZip) {
    if (/^\s*((\d{5})|(\d{5}-\d{4}))(?!\S)/.test(theZip))
    {
        document.getElementById('zip').style.border = 'thin solid lightgrey';
    } 
    else
    {
        document.getElementById('zip').value = '';
        document.getElementById('zip').placeholder = 'Invalid Zip Code';
        document.getElementById('zip').style.border = 'thin solid red';
    }
}


function cardFormat() {
    document.getElementById('CC').placeholder = '0000 0000 0000 0000';
}
function quantFormat1() {
    document.getElementById('quantity1').placeholder = '0-9999';
}
function quantFormat2() {
    document.getElementById('quantity2').placeholder = '0-9999';
}
function zipFormat() {
    document.getElementById('zip').placeholder = '00000';
}
function phoneFormat() {
    document.getElementById('phone').placeholder = '000-000-0000';
}

function resetPage() {
	location.reload();
}

function submitForm() { 
    // Display submit successful to the user in a popup window/alert.
        alert("Submit Successful");
}
