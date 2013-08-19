$(document).ready(function() {
	$("#name").keyup(function() {
		if (/^[a-zA-Z ]+$/.test($(this).val()) && $(this).val().trim() !== "") {
			$(this).css("border-color", "#37ff00");
		} else {
			$(this).css("border-color", "red");
		}
	});
	$("#email").keyup(function() {
		if (/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test($(this).val()) && $(this).val().trim() !== "") {
			$(this).css("border-color", "#37ff00");
		} else {
			$(this).css("border-color", "red");
		}
	});
	$("#contact").keyup(function() {
		if (/^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\/\s.]|\d)+$/.test($(this).val()) && $(this).val().trim() !== "") {
			$(this).css("border-color", "#37ff00");
		} else {
			$(this).css("border-color", "red");
		}
	});
})
