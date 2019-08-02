/*Assignment 1 in {"HTML_CSS_JAVASCRIPT"} BY ["PARTH PATEL"] */
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);/*The addEventListener() is an inbuilt function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets fired. Any number of event handlers can be added to a single element without overwriting existing event handlers.*/
var row = 1;

function displayDetails()
{

	var fname = document.getElementById("fname").value;	/*Store User-Input in variable Using ID*/
	var mname = document.getElementById("mname").value;	
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var psw = document.getElementById("psw").value;
	var gender = document.getElementById("gender").value;
	var hby = document.getElementById("hby").value;
	var hobbies = document.getElementById("hobbies").value;

	if (!fname || !mname || !lname || !email || !psw || !gender || !hby || !hobbies) 
	{
		alert("Please Fill All The Details");	/*Pop-Up box to fill details, when any input field is not filled by User*/
		return;
	}
	
	var display = document.getElementById("display");	/*Dispaly User-Input Using ID*/
	var newRow = display.insertRow(row);
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	var cell6 = newRow.insertCell(5);
	var cell7 = newRow.insertCell(6);
	var cell8 = newRow.insertCell(7);

	cell1.innerHTML = fname;
	cell2.innerHTML = mname;
	cell3.innerHTML = lname;
	cell4.innerHTML = email;
	cell5.innerHTML = psw;
	cell6.innerHTML = gender;
	cell7.innerHTML = hby;
	cell8.innerHTML = hobbies;

	row++;	/*New Row Added To Table*/

} 