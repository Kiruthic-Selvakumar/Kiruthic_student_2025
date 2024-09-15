var compsci_quote_list = [
    { quote: "'Be the change that you wish to see in the world.' — Mahatma Gandhi" },
    { quote: "'To be, or not to be, that is the question.' — William Shakespeare" },
    { quote: "'In the end, we will remember not the words of our enemies, but the silence of our friends.' — Martin Luther King Jr." },
    { quote: "'The only thing we have to fear is fear itself.' — Franklin D. Roosevelt" },
    { quote: "'I think, therefore I am.' — René Descartes" },
    { quote: "'The journey of a thousand miles begins with one step.' — Lao Tzu" },
    { quote: "'Happiness is not something ready-made. It comes from your own actions.' — Dalai Lama" },
    { quote: "'To love and be loved is to feel the sun from both sides.' — David Viscott" },
    { quote: "'Don't expect to score if you never shoot.' — Arya" },
    { quote: "'Life is what happens when you're busy making other plans.' — John Lennon" },
    { quote: "'Do what you can, with what you have, where you are.' — Theodore Roosevelt"


 }
];

function displayRandomquote() {
    var randomIndex = Math.floor(Math.random() * compsci_quote_list.length);
    var selectedquote = compsci_quote_list[randomIndex];
    document.getElementById('quoteDisplay').textContent = selectedquote.quote;
}