var hobby = [
    "It is my first favourite hobby. The favourtie base where I like to code during 2020 April is BRACKETS.",
    "In BRACKETS the main tags to start with are the html tags. We put every code inside html tags. Then tags we create the head tags.",
    "In the head tags, we create title tags. We write our website name in it. To link JS and CSS to HTML we use link rel and href and to link JS to HTML we use src.",
    "Then we create body tags. We create all contents in body tags.",
    "HTML is used to create contents while CSS is used to edit HTML contents. JS is used for creating events and for triggering something.",
    "My favourite hobby is to CODE. Coding makes me better in all my activities. It is among one of my favourite hobbies. I like to try new things is coding."
];

var images = [
    "https://tse2.mm.bing.net/th?id=OIP.9GQz2qseNa_tZfGiHBEn4gHaFP&pid=Api&P=0&w=255&h=181",
    "https://tse2.mm.bing.net/th?id=OIP.2OnBWLRjlE-0h2diV090wQHaEK&pid=Api&P=0&w=299&h=169",
    "http://hdqwalls.com/wallpapers/code-sign.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.H95MjPG0dUxP4XnI3boGUwHaFj&pid=Api&P=0&w=214&h=161",
    "https://www.unilad.co.uk/wp-content/uploads/2017/10/matrix-code.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.MKCzub-SawxExuNNIx_68QHaDH&pid=Api&P=0&w=396&h=167"
];

var i = 0;

function next() {
    document.getElementById("one").innerHTML = hobby[i];

    document.getElementById("code").src = images[i];
    i++;
    if (i > 5)
        i = 0;
}
