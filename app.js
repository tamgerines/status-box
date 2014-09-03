var main = function() {
	$('.button').click(function() {
		var post = $('.status-box').val();
		$('<li>').text(post).prependTo('.posts');
		$('.status-box').val('');
	});
};

$(document).ready(main);