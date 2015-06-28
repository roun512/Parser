var content = $("body");
var stylesBody = {
    color: '#F8F8F2'
}

var equal = [/(=)/gi, "<span class=\'cOne\'>=</span>"];
var functionW = [/function/gi, "<span class=\'cSeven\'>function</span>"];
var numbers = [/([0-9])/g, "<span class=\'cSix\'>$1</span>"];
var newW = [/(new)\s/gi, "<span class=\'cOne\'>new</span> "];
var varW = [/(var)\s/gi, "<span class=\'cSeven\'>var</span> "];
var commentsOne = [/(\/\/.*)/g, "<span class=\'cEight\'>$1</span>"];
var stringsO = [/(\".*?\")/gi, "<span class=\'cThree\'>$1</span>"];
var stringsT = [/(\'.*?\')/gi, "<span class=\'cThree\'>$1</span>"];
var plus = [/(\+)/gi, "<span class=\'cOne\'>+</span>"];

content.css(stylesBody);

content.html(content.html().replace(equal[0], equal[1])
	.replace(numbers[0], numbers[1])
	.replace(functionW[0], functionW[1])
	.replace(newW[0], newW[1])
	.replace(varW[0], varW[1])
	.replace(stringsO[0], stringsO[1])
	// .replace(stringsT[0], stringsT[1])
	.replace(plus[0], plus[1])
	.replace(commentsOne[0], commentsOne[1])
	);

$("span.cOne").css({color: '#F92672'});
$("span.cTwo").css({color: '#F8F8F2'});
$("span.cThree").css({color: '#E6DB74'});
$("span.cFour").css({color: '#FD971F'});
$("span.cFive").css({color: '#A6E22E'});
$("span.cSix").css({color: '#AE7AD7'});
$("span.cSeven").css({color: '#66D9EF'});
$("span.cEight").css({color: '#8F908A'});


// #F92672 == = $ * this --> cOne if else while for new
// #F8F8F2 == fonts { } , . ( ) : ; [ ] --> cTwo
// #E6DB74 == strings " " ' ' --> cThree
// #FD971F == args --> cFour
// #A6E22E == funtions name --> cFive
// #AE7AD7 == numbers name --> cSix
// #66D9EF == function var classes class --> cSeven
// #8F908A == comments -> cEight