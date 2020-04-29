//  $('button').on('click',function(){
//   console.log(($(this).text()));
//   			keyData[$(this).text()].sound.play()
// 			var width = view.size.width;
// 			var height = view.size.height;
// 			var maxPoint = new Point(width,height);
// 			var randomPoint = Point.random();
// 			var point = maxPoint * randomPoint;
// 			var circle = new Path.Circle(point,500);
// 			circle.fillColor = myColor();
// 			circleArray.push(circle);
// })

var letters = []
$('button').on('click',function(){
 if ($(this).text()=== 'Space') {
	$('.disp-head').append(' ');
	letters.push(' ');

}
else if($(this).text()=== 'Delete'){
	
	deleteFunc();

}
else{

	$('.disp-head').append($(this).text());
	letters.push($(this).text())

}



})

function deleteFunc(){
	$('.disp-head').text('')
}

// function deleteFunc2(){
// 	console.log(letters[letters.length-1]);
// 	console.log($('.disp-head').text());
	
// 	console.log(($('.disp-head').text()).replace(letters[letters.length-1],'Z'))
// 	var l = ($('.disp-head').text()).replace(letters[letters.length-1],'Z');
// 	console.log('i =' + l)
// 	// There is a problem that need to fixed


// }

// function replaceString(){
// 	var myStr = 'Hello,Channel To my website'
// 	console.log(myStr)
// 	console.log(myStr.replace('Channel','welcome'))
// 	// console.log(myStr.replace('H',''))
// 	console.log(myStr.remove('H'))


// }