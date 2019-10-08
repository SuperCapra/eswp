
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

		$('#areaCount').text('Number '+ number + '\n').appendTo('#areaCount');
	})
})


