
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
    var phrase = "#TatyQuoteGenerator "+ "'" + document.getElementById('quoteSpace').innerText +"'"+ " -"+ document.getElementById('quoteAuthor').innerText;
    var tweetUrl = 'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent(phrase)
        + '.';

    window.open(tweetUrl);

}

document.getElementById('tweetQuote').addEventListener("click", tweetIt);



