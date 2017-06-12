$('form').submit(function(event) {
	event.preventDefault();
	var url = $(this).attr("action");
	var formData = $(this).serialize();
	$.ajax(url, {
		data: formData,
		type: "POST",
		success: function(response) {
			$('form').html("<p>Thanks for your response!</p>");
		}
	});