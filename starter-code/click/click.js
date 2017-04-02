console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("span"). on("click", function handleclick(event) {
		var itemText = "You clicked:" + $(this).text() + "at Date.now();
		$(ul). append("<li>" + itemText + "</li>")
	})

})
