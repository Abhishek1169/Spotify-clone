const cards = document.querySelectorAll(".song-card");
const audioPlayer = document.getElementById("audioPlayer");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const songPath = card.dataset.song;

        audioPlayer.src = songPath;
        audioPlayer.play();

        document.querySelector(".player").scrollIntoView({
            behavior: "smooth"
        });

    });

});