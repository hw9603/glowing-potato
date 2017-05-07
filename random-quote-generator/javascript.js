var quotes = [
	'I love you the more in that I believe you had liked me for my own sake and for nothing else. --John Keats',
	'But man is not made for defeat. A man can be destroyed but not defeated. --Ernest Hemingway',
	'When you reach the end of your rope, tie a knot in it and hang on. --Franklin D. Roosevelt',
	'There is nothing permanent except change. --Heraclitus',
	'You cannot shake hands with a clenched fist. --Indira Gandhi',
	'Let us sacrifice our today so that our children can have a better tomorrow. --A. P. J. Abdul Kalam',
	'It is better to be feared than loved, if you cannot be both. --Niccolo Machiavelli',
	'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward. --Amelia Earhart',
	'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself. --Henry James',
	'Learning never exhausts the mind. --Leonardo da Vinci',
	'There is no charm equal to tenderness of heart. --Jane Austen',
	'All that we see or seem is but a dream within a dream. --Edgar Allan Poe',
	'Lord, make me an instrument of thy peace. Where there is hatred, let me sow love. --Francis of Assisi',
	'The only journey is the one within. --Rainer Maria Rilke',
	'Good judgment comes from experience, and a lot of that comes from bad judgment. --Will Rogers',
	'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night. --William Blake',
	'Life without love is like a tree without blossoms or fruit. --Khalil Gibran',
	'No act of kindness, no matter how small, is ever wasted. --Aesop',
	'Love cures people - both the ones who give it and the ones who receive it. --Karl A. Menninger',
	'Work like you don\'t need the money. Love like you\'ve never been hurt. Dance like nobody\'s watching. --Satchel Paige'
];

var colors = [
	'#d67c7c',
	'#7cd6a2',
	'#7c8bd6',
	'#d67cc3',
	'#d6857c',
	'#d6a37c',
	'#8f7cd6',
	'#d67c95',
	'#d67c7c',
	'#d6ca7c',
	'#7cc7d6',
	'#7cafd6',
	'#92d67c'
];
var currentQuote = '';
var currentAuthor = '';

function quote() {
	var idx = Math.floor(Math.random() * quotes.length);
	var split = quotes[idx].indexOf('--');
	var quo = quotes[idx].substr(0, split);
	var author = quotes[idx].substr(split+2);

	currentQuote = quo;
	currentAuthor = author;
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

	$(".quote-text").animate({
		opacity: 0
	}, 500,
	function(){
		$(this).animate({
			opacity: 1
		}, 500);
		$("#quote").text(quo);
	});
	
	$(".quote-author").animate({
		opacity: 0
	}, 500,
	function(){
		$(this).animate({
			opacity: 1
		}, 500);
		$("#author").text("- " + author);
	});

	var c_idx = Math.floor(Math.random() * colors.length);
	$("html body").animate({
		backgroundColor: colors[c_idx],
		color: colors[c_idx]
	}, 1000);
	$(".button").animate({
		backgroundColor: colors[c_idx]
	}, 1000);
}




