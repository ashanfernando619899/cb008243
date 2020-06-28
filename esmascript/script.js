var grandTotal = 0;
function display() {

	var total       = 0;
	
	var e   = document.getElementById("menu");
	var bev = e.options[e.selectedIndex].text;
    
    var opt         = document.getElementById("size");
    total           = Number(opt.options[opt.selectedIndex].value);
	var selSizeText = opt.options[opt.selectedIndex].text;
	
	var opt               = document.getElementById("MilkChoice");
    var selMilkChoiceText = opt.options[opt.selectedIndex].text;
		
	var noofshots = document.getElementById("shots").value;
	var shotsVal  = noofshots * 25;
	total = total + shotsVal;
	
    var sugarVal = document.getElementById("sugar");
	var creamVal = document.getElementById("cream");
	
	var table = document.getElementById("tbOrder");
	var row   = table.insertRow(table.rows.length);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	
	cell1.innerHTML = table.rows.length - 2;
	cell2.innerHTML = bev +" ( "+ selSizeText + " )";
	cell3.innerHTML = selMilkChoiceText;
	
	if (sugarVal.checked == true)
	{
		cell4.innerHTML = "Yes";
		total = total + 50;
	}
	else
	{
		cell4.innerHTML = "No";
	}
	
	if (creamVal.checked == true)
	{
		cell5.innerHTML = "Yes";
		total = total + 50;
	}
	else
	{
		cell5.innerHTML = "No";
	}
	
	cell6.innerHTML = noofshots;
	cell7.innerHTML = total + " LKR";
	grandTotal = grandTotal + total;
	
	var gTotal = document.getElementById("lblgrandTotal");
	gTotal.value = grandTotal;
	
	document.getElementById("show").style.display="block";

}
function confmsg()
{
	grandTotal = 0;
	var table = document.getElementById("tbOrder");
	for(var i = table.rows.length - 1; i > 1; i--)
	{
		table.deleteRow(i);
	}
	document.getElementById("show").style.display="none";
	alert("Thank you!! please come again.")
}

