var captcha;
function generate() {

    // Clear old input
    document.getElementById("submit").value = "";

    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    var uniquechar = "";

    const randomchar =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const username = params.user;
const url = "https://scaredaccomplishedapplications.nityabhanu.repl.co";
function sendTime() {
    console.log(timeset);
    const user = {
        name: username,
        PicturePerception: timeset,
    };
    axios
        .post(url + "/player/update", user)
        .then((response) => {
            console.log(response.data);
            window.open(
                "https://nitya-bhanu.github.io/elitmusFrontEnd/clue5.html?user=" +
                username,
                "_self"
            );
        })
        .catch((error) => console.error(error));
}
function printmsg() {
    const usr_input = document
        .getElementById("submit").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        sendTime();
        generate();
    }
    else {
        var s = document.getElementById("key")
            .innerHTML = "not Matched";
        generate();
    }
}
