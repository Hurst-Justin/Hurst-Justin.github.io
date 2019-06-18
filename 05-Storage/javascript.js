function resetPage() {
	location.reload();
}

function resetLocalStorage() {
	window.localStorage.clear();
	location.reload();
}

function localStorageCount() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		} else {
			localStorage.clickcount = 1;
		}

		document.getElementById("localResult").innerHTML = "Local Storage Count: " + localStorage.clickcount + " click(s)";
	} else {
		document.getElementById("localResult").innerHTML = "Error: Your browser does not support local storage.";
	}
}

function createLocalStorage() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var birthday = document.getElementById("birthday").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var person = {firstName: firstName, lastName: lastName, birthday: birthday, email: email, phone: phone};
	localStorage.setItem('user', JSON.stringify(person));
    document.getElementById("Submission").innerHTML = "<b>Submission successful!</b>";    
    getLocalStorage();    
}

function getLocalStorage() {
	var user = JSON.parse(localStorage.getItem('user'));
	document.getElementById("userOutputLocal").innerHTML = "<b>Local Storage Information:</b>" + "<br><br><b>First Name:</b>  " + user.firstName + "<br><b>Last Name:</b>  " + user.lastName 
		+ "<br><b>Birthday:</b>  " + user.birthday + "<br><b>Email:</b>  " + user.email + "<br><b>Phone:</b>  " + user.phone;
}