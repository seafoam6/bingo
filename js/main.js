
var squareContent = [
	"Jim Pool censors an anti-racism post",
	"Taxes!",
	"Rats!",
	"Those jerks at city hall",
	"Racism",
	"Water Bill",
	"Electric Bill",
	"Something they should have Googled",
	"Being mean about neighbor",
	"Dog without a leash",
	"Post office complaints",
	"Dream Cruise",
	"Complete Nonsense",
	"Good Chinese Restaurant?",
	"good Thai restaurant?",
	"Good Sushi?",
	"Pizza",
	"Call the DPW",
	"There's too many restaurants in Ferndale",
	"blatant attention seeking",
	"need roofer",
	"need plumber",
	"buy/sell car",
	"food truck",
	"bring child into bar",
	"post from non-ferndale resident",
	"Actually useful post (The Unicorn)",
	"Free stuff",
	"Person banned without warning",
	"a knee-jerk reaction",
	"The Train",
	"Dog Poop"
];

console.log("there are "+squareContent.length+" choices");
  
//+ Jonas Raoni Soares Silva
        //@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o) { 
	//v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var squares = $('.square');

squareContent = shuffle(squareContent);

squares.each(function(){
    $(this).html(squareContent.pop());
});


// $(".square").click(function() {

// 	if ($(this).css("background-color") == "rgb(248, 248, 255)") {
// 		$(this).css({ 
// 			"background": "red",
// 			"color": "white" });
// 	} else {
// 		$(this).css({ 
// 			"background": "#F8F8FF",
// 			"color": "black" });		
// 	}
// });

squares.on("click", function(){
	$(this).toggleClass('square__active');
});

