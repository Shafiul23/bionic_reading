function bionic() {
    let text = ""
    let str = document.getElementById("myText").value
    wordArray = str.split(" ")
    wordArray.forEach(bold)

    document.getElementById("demo").innerHTML = text;

    function bold(word) {

        if (word.length == 3) {
            len = 1
        } else {
            len = Math.ceil(word.length / 2)
        }

        // len = Math.ceil(word.length / 2)

        for (i = 0; i < len; i++) {
            text += word[i].bold()
        }

        for (j = len; j < word.length; j++) {
            text += word[j]
        }
        text += " "
    }
}