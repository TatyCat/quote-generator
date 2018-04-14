
var getQuote = function() {

    let request = new XMLHttpRequest();

    request.open('GET', 'https://thesimpsonsquoteapi.glitch.me/quotes', true);
    request.onload = function(){

        let data = JSON.parse(this.response);

        if(request.status >= 200 && request.status < 400){
            data.forEach(simpQuote=>{
                document.getElementById('quoteSpace').innerText = simpQuote.quote;
                document.getElementById('quoteAuthor').innerText = simpQuote.character;
            });
        }else{
            document.getElementById('quoteSpace').innerText = "Gah! the API isn't working!";
            document.getElementById('quoteAuthor').innerText = "Unknown";
        }
    };
    request.send();
};


var changeColor = function() {
    var newColor = '#' + (Math.random().toString(16) + "000000").substring(2,8);
    document.getElementById('quoteSpace').style.color = newColor;
    // document.getElementById('quoteAuthor').style.color = newColor;
};


document.onload = getQuote();
document.getElementById('moreButton').addEventListener("click", getQuote);
document.getElementById('moreButton').addEventListener("click", changeColor);




function tweetIt () {
    var phrase = document.getElementById('quoteSpace').innerText + " -"+ document.getElementById('quoteAuthor').innerText;
    var tweetUrl = 'https://twitter.com/intent/tweet?text=' +
    // var tweetUrl = 'https://twitter.com/share?text=' +
        encodeURIComponent(phrase)
        + '.';

    window.open(tweetUrl);

}

https://twitter.com/intent/tweet?text=Thank%20you.%20Come%20again..&url=http%3A%2F%2Flocalhost%3A63342%2FrandomQuoteGenerator%2Findex.html%3F_ijt%3Dkgtbt13bvab9nk40tk4q1ko4to&original_referer=http%3A%2F%2Flocalhost%3A63342%2FrandomQuoteGenerator%2Findex.html%3F_ijt%3Dkgtbt13bvab9nk40tk4q1ko4to

document.getElementById('tweetQuote').addEventListener("click", tweetIt);



