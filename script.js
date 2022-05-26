$(document).ready(function(){
	$('input[type = "checkbox"]').click(function(){
		if($(this).prop("checked") == true){
			$('.container').css('background', 'linear-gradient(#203a93, #458df4)');
			$('.mountain').css('background', 'linear-gradient(#533409, #251705)');
			$('.m1').css('background', 'linear-gradient(-90deg, #251705, #533409)');
			$('.m2').css('background', 'linear-gradient(#442b0a, #714405)');
			$('.land').css('background', '#299c38');
			$('.land2').css('background', '#049306');
			$('.pond').css('background', '#36bed9');
			$('.pond').css('border-color', '#0cafcf');
			$('.tant').css('border-bottom-color', '#ec6c87');
			$('.boat').css('border-top-color', '#814405');
			$('.sun').css('opacity', '0');
			$('.moon').css('opacity', '1');
			$('.star').css('opacity', '0.6');
		}
		else{
			$('.container').css('background', 'linear-gradient(#0bf, #ccc)');
			$('.mountain').css('background', 'linear-gradient(-120deg, #a77830, #573602)');
			$('.m1').css('background', 'linear-gradient(-120deg, #573602, #976f30)');
			$('.m2').css('background', 'linear-gradient(-120deg, #674612, #a77f40)');
			$('.land').css('background', '#12ac43');
			$('.land2').css('background', '#09c25c');
			$('.pond').css('background', '#4fd9f4');
			$('.pond').css('border-color', '#80ceff');
			$('.tant').css('border-bottom-color', '#ea496c');
			$('.boat').css('border-top-color', '#af7000');
			$('.sun').css('opacity', '1');
			$('.moon').css('opacity', '0');
			$('.star').css('opacity', '0');
		}
	});
});