fetch('https://api.github.com/orgs/Partivo/repos').then(response => response.json()).then(data => writeData(data));
function writeData(data) {
	let partivoHtml = [];
	partivoHtml += '<div class="row match-height">';
	data.map((element) => {
		partivoHtml += '<div class="col-md-6 col-lg-4"><div class="card">';
			partivoHtml += '<img class="card-img-top" src="https://opengraph.githubassets.com/' + randomString(64) + '/' + element.full_name + '" alt="' + element.name + '" />';
			partivoHtml += '<div class="card-body">';
				partivoHtml += '<h4 class="card-title">' + element.name + '</h4>';
				partivoHtml += '<p class="card-text">' + element.description + '</p>';
				partivoHtml += '<a href="' + element.html_url + '" class="btn btn-outline-primary">Go To Project</a>';
			partivoHtml += '</div>';
		partivoHtml += '</div></div>';
	});
	partivoHtml += '</div>';
	document.getElementById("card-open-source").innerHTML = partivoHtml;
	
	setTimeout(function() {
		document.getElementById("root").style.display = "block"
		document.getElementById("loading").style.display = "none";
	}, 3000);
}

function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}
