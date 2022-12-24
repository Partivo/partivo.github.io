fetch('https://api.github.com/orgs/Partivo/repos').then(response => response.json()).then(data => writeData(data));
function writeData(data) {
	data = data.filter(element => element.name != ".github").reverse();
	
	let partivoHtml = [];
	partivoHtml += '<div class="row match-height">';
	dataReverse.map((element) => {
		partivoHtml += '<div class="col-md-6 col-lg-4"><div class="card">';
			partivoHtml += '<img class="card-img-top" src="https://opengraph.githubassets.com/' + getRandomStrings(64) + '/' + element.full_name + '" alt="' + element.name + '" />';
			partivoHtml += '<div class="card-body">';
				partivoHtml += '<h4 class="card-title">' + element.name + '</h4>';
				partivoHtml += '<p class="card-text">' + element.description + '</p>';
				partivoHtml += '<a href="' + element.html_url + '" target="_blank" class="btn btn-outline-primary">Go To Project</a>';
			partivoHtml += '</div>';
		partivoHtml += '</div></div>';
	});
	partivoHtml += '</div>';
	document.getElementById("card-open-source").innerHTML = partivoHtml;

	setTimeout(function() {
		document.getElementById("root").style.display = "block";
		document.getElementsByClassName("fallback-spinner")[0].remove();
	}, 3000);
}

function getRandomStrings(length) {
  const value = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randoms = [];
  for(let i=0; i < length; i++) {
     randoms.push(value[Math.floor(Math.random()*value.length)]);
  }
  return randoms.join('');
}
