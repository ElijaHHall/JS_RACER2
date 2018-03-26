$(document).ready(function() {
	var end_of_track = 15;
	var players = [

	{
		id: 1,
		position: 0,
		keycode: 39,
		css_locator: "#player"
	},
	{
		id: 2,
		position: 0,
		keycode: 81,
		css_locator: "#player"

		}

	];
}

function rightArrowPressed() {
	debugger;
	players.forEach(function(player) {
		if (keyCode == player.keycode && players[0].position < end_of_track && players[1].position <end_of_track) {
			move_player(player.css_locator);
			player.position++;
			winner(playe.position, player.id);
		}
	});
}




function moveSelection(evt) {
	switch (evt.keyCode) {
		case 39:
		rightArrowPressed();
		break;
	}
};

function docReady()
{
	window.addEventListener("keydown", moveSelection);
}