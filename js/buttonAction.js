$(function(){
	
	var colorList = [
		'255,0,0',
		'0,255,0',
		'0,0,255',
		'255,255,0',
		'255,0,255',
		'0,255,255',
	];
	
	var colorButton = {
		1 : null,
		2 : null,
		3 : null,
	}
		
	$.fn.extend({
		changeColor : function (number) {
			$('body').css('backgroundColor','rgba('+colorButton[number]+',0.4)');
			var i = Math.random() * colorList.length | 0;
			colorList.push(colorButton[number]);
			colorButton[number] = colorList[i];
			colorList.splice(i, 1);
			$(this).css('backgroundColor','rgba('+colorButton[number]+',0.8)');
		},
		startColor : function (number) {
			var i = Math.random() * colorList.length | 0;
			colorButton[number] = colorList[i];
			colorList.splice(i, 1);
			$(this).css('backgroundColor','rgba('+colorButton[number]+',0.8)');
		}
	});

	$('#rippleria1').startColor(1);
	$('#rippleria2').startColor(2);
	$('#rippleria3').startColor(3);
	
	$('#rippleria1,#rippleria2,#rippleria3').rippleria({
		duration: 750,
		easing: 'ease-in'
	});

	$('#rippleria1').click(function(e) {
		e.preventDefault();
		$(this).changeColor(1);
	});
	$('#rippleria2').click(function(e) {
		e.preventDefault();
		$(this).changeColor(2);
	});
	$('#rippleria3').click(function(e) {
		e.preventDefault();
		$(this).changeColor(3);
	});
	
});
