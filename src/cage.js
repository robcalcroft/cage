$(document).ready(function() {
	var cages = ['http://content8.flixster.com/rtactor/40/33/40334_pro.jpg', 
				'http://1.bp.blogspot.com/-i-hy5MgbcUE/UPqyLg1hj4I/AAAAAAAAC6o/nOgoeq26cZU/s1600/JohnMcCoolNick.jpg', 
				'http://x1.fjcdn.com/comments/He+even+played+Shrek+_fc22357cbb759306e701361812c37cd5.jpg',
				'http://nguyensindy.files.wordpress.com/2013/10/nic-cage-lkasndlansd.png',
				'http://vergag.com/wp-content/uploads/2012/09/nicholas-cage-es-ET.jpg',
				'http://a.fod4.com/images/user_photos/1338886/6037668fff7f5b7b398257f7bd41a16f_width_600x.jpg'];
	setInterval(function() {$('body').css('backgroundImage', 'url('+randCage()+')')}, 200);
	getCages(); cageText();
	$(document).on('contextmenu', function(e) { e.preventDefault(); $('body').css('backgroundColor', 'red'); alert('cheese') })
	function randCage(){return cages[Math.floor((Math.random() * cages.length))]}
	function getCages() { $('img').each(function(_, value) {value.src = randCage()}) }
	function cageText() {$('div, article, section, p, span').each(function(_,a) { a.innerHTML = a.innerHTML.replace(/the|lol|haha|had|hello|hi|are/gi, 'Nick Cage\'s') } )}
	setInterval(getCages, 1000);
	setInterval(cageText, 10000);
})