(function() {
	var cx = '010164871193788492004:faaidoe955s';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
})();
  
$('#form').submit(function(e){
	e.preventDefault();
	
	var textoBusca = $('#busca').val();
	$('#gsc-i-id1').val(textoBusca);
	$('td.gsc-search-button').find('button').trigger('click');


  	var main = document.getElementById('artigos');
  	main.classList.add('hide');
});

// $(document).ready(function(){
// 	var urlSearch = String(window.location);
// 	urlSearch = urlSearch.split('?');
// 	urlSearch = urlSearch[1].split('=');
// 	$('#busca').val(urlSearch[1]);
// });