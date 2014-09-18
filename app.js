var main = function() {
	$('.button').click(function() {
		var post = $('.status-box').val();
		$('<li>').text(post).prependTo('.posts');
		$('.status-box').val('');
		$('.counter').text('140');
		$('.button').prop('disabled', true);
		$('.button').addClass('disabled');
	});
	$('.status-box').keyup(function() {
		var postLength = $(this).val().length;
		var charactersLeft = 140 - postLength;
		$('.counter').text(charactersLeft);
		
		if (charactersLeft < 0) {
			$('.button').prop('disabled', true);
			$('.button').addClass('disabled');
		} else if (charactersLeft == 140) {
			$('.button').prop('disabled', true);
			$('.button').addClass('disabled');
		} else {
			$('.button').prop('disabled', false);
			$('.button').removeClass('disabled');
		}
	});
	$('.button').prop('disabled', true);
	$('.button').addClass('disabled');
};

$(document).ready(main);