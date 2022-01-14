let sfw = 'sfw';

let categories = [ 
    "waifu", "neko", "shinobu",
    "megumin", //"bully", 
    "cuddle",
    "cry", "hug", "awoo", "kiss", "lick",
    "pat", "smug", "bonk", "yeet", "blush",
    "smile", "wave", "highfive", "handhold",
    "nom", "bite", //"glomp", "slap", "kill",
    "kick", "happy", "wink", "poke",
    "dance",//"cringe",
];

function getNewPicture() {
    let selectedCategory = categories[Math.floor(Math.random() * categories.length)];

    fetch(`https://api.waifu.pics/${sfw}/${selectedCategory}`)
    .then(response => response.json())
    .then(parsed => {
        let url = parsed.url;

        let image = document.createElement("img");
        image.setAttribute("src", url);
        image.setAttribute("alt", "RIP");

        document.getElementById("image-container").replaceChildren(image);
    })
    .catch(error => {
        console.log("Error retrieving image.");
        console.log(error);
    });
}
