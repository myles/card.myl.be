$(function(){
	$(".avatar").click(function () {
		var avatars = ['casual.png', 'formal.png', 'hipster.png', 'suite.png'];
		var avatar = $.shuffle(avatars)[1];
		$("#container").css("background-image", "url(img/1/me/" + avatar + ")");
	});
});
