
$(function() {
	let important = false;
	let number = 0;
	
	$('#button1').click(function(){
		let butt = $('#button1');
		//$('#button1').html(butt.html()); 
		if (important) {
			butt.val('A little less!');
		} else {
			butt.val('A little more!');
		}
		important = !important;
		number++;
	})
	
	$('#button1').click(function(){
		$('#areaCount').text('Number '+ number + '\n').appenTo('#areaCount');
	})
	
	$('#button2').click(function(){
		if ((number + 1) < 6 && number > 0) {
		$('#diceImg').prop('src', './pic/' + number + '.png');
		} else {
		$('#diceImg').prop('src', './pic/flower.jpg');
		}
	})
})


