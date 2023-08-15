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
    "#000080", // Dark Blue
    "#006400", // Dark Green
    "#8B0000", // Dark Red
    "#800080", // Dark Purple
    "#008080", // Dark Teal
    "#333333", // Charcoal
    "#191970", // Midnight Blue
    "#800000", // Maroon
    "#556B2F", // Dark Olive Green
    "#2F4F4F"  // Dark Slate Gray
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  $(".changing-bg-color").css("background-color", randomColor);
  $(".changing-color").css("color", randomColor);


  $("#new-quote").click(function() {
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


    // $(".changing-bg-color").css("background-color", randomColor);
    // $(".changing-color").css("color", randomColor);

    
  });
  