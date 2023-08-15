const quotes = [
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
    { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
    { text: "Life is short, and it's up to you to make it sweet.", author: "Sarah Louise Delany" },
    { text: "The good life is one inspired by love and guided by knowledge.", author: "Bertrand Russell" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
    { text: "Life is really about a spiritual unfolding that is personal and enchanting – an unfolding that no science or philosophy or religion has yet fully clarified.", author: "James Redfield" },
    { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
    { text: "Life is a mirror and will reflect back to the thinker what he thinks into it.", author: "Ernest Holmes" }
  ];
  
  const colors = [
    "#A52A2A",
    "#4682B4",
    "#3CB371",
    "#008B8B",
    "#FF6347",
    "#6A5ACD",
    "#191970", 
    "#556B2F", 
    "#2F4F4F",
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'  
  ];




function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    $("#text").animate(
        { opacity: 0 },
        500,
        function() {
            $(this).animate({ opacity: 1 }, 500);
            $(this).text(quote.text);
        }
    );

    $("#author").animate(
        { opacity: 0 },
        500,
        function() {
            $(this).animate({ opacity: 1 }, 500);
            $(this).text(quote.author);
        }
    );



    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    $(".changing-bg-color").animate(
        {
            backgroundColor: randomColor
        },
        1000
    );

    $(".changing-color").animate(
        {
            color: randomColor
        },
        1000
    );

    const tweetURL = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote.text + '" ' + quote.author);
    const tumblrURL = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' + encodeURIComponent(quote.author) + '&content=' + encodeURIComponent(quote.text);
    const facebookURL = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&quote=' + encodeURIComponent('"' + quote.text + '" ' + quote.author);

    $('#tweet-quote').attr('href', tweetURL);
    $('#tumblr-quote').attr('href', tumblrURL);
    $('#fb-quote').attr('href', facebookURL);

    
  }


  $(window).on('load', function() {
    changeQuote();
  });

$(document).ready(function() {
    $("#new-quote").click(changeQuote);
});

  