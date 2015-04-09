$(function() {

  // Our functions and JavaScript will go here.
  var menu_categories =
   ["Bagels, Muffins, Pasteries",
  "Coop Meals", "Drinks", "From the Fryer",
  "Mexican", "Rice Bowls", "Salads","Sandwiches"];

  var menu_links = ["bagels-muffins-pasteries.html", 
  			"#","#","#","#","#","#","#"];

  var buildMenu = function(){
  	for(var i=0; i < menu_categories.length; i++){
  		var li = $('<li>').addClass("table-view-cell");
  		var a = $('<a>').addClass("navigate-right");
  		a.attr("href",menu_links[i]);
  		a.append(menu_categories[i]);
  		li.append(a);
  		$('#menu_categories').append(li);
  	}
  };

  if($('#menu_categories')){
  	buildMenu();
  }

  $('.order').click(function(){
  	
  	//Get the name of our item
  	var item = $('.content').attr('data-item');

  	console.log(item);

  	//get base price
  	var base_price = $('.content').attr('data-plain');

  	console.log(base_price);

  	//get all checkboxes
  	var list = $('.table-view-cell input:checkbox');

  	//list of options
  	var options = [];

  	var price = parseFloat(base_price);

  	console.log(price);

  	for(var i=0; i < list.length; i++){

  		//if input is checked add it's name to the list
  		if( $(list[i]).prop('checked') ){
  			options.push( $(list[i]).val() );

  			price = price + parseFloat( $(list[i]).attr('data-extra') );
  		}
  	}

  	//round the price
  	price = price.toFixed(2);

  	console.log(price);
	console.log(options);

  	//send this information in an email
  	//sendMail(item, price, options);


  });

});