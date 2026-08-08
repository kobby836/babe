/* =====================================================
   BIRTHDAY WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   SCREEN HELPER
===================================================== */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.style.display = "none";

    });


    const screen =
        document.getElementById(screenId);


    if (screen) {

        screen.style.display = "flex";

        window.scrollTo(0, 0);

    }

}


/* =====================================================
   OPENING
===================================================== */

document
    .getElementById("startButton")
    .addEventListener("click", function() {

        showScreen("envelopeScreen");

    });


/* =====================================================
   ENVELOPE
===================================================== */

document
    .getElementById("envelopeButton")
    .addEventListener("click", function() {

        const envelope =
            document.getElementById("envelope");

        envelope.classList.add("opened");


        setTimeout(function() {

            showScreen("letterScreen");

        }, 1200);

    });


/* =====================================================
   LETTER
===================================================== */

document
    .getElementById("letterButton")
    .addEventListener("click", function() {

        showScreen("memoryIntro");

    });


/* =====================================================
   MEMORY INTRO
===================================================== */

document
    .getElementById("memoryStartButton")
    .addEventListener("click", function() {

        showScreen("photoScreen");

    });


/* =====================================================
   MEMORIES
===================================================== */

let currentMemory = 0;


const memories = [

    {
        image: "images/us1.jpg",

        title: "Look at us oo 😂❤️",

        caption:
            "Chale, look at this picture 😂 How did we even get here?"
    },


    {
        image: "images/us2.jpg",

        title: "Ei Esther 😂",

        caption:
            "You remember this day? Because I definitely do. ❤️"
    },


    {
        image: "images/us3.jpg",

        title: "This one is special ❤️",

        caption:
            "Some moments are small, but somehow they stay in your heart."
    },


    {
        image: "images/us4.jpg",

        title: "And here we are 😂❤️",

        caption:
            "Honestly, I wouldn't trade these memories for anything."
    }

];


document
    .getElementById("nextMemoryButton")
    .addEventListener("click", function() {

        currentMemory++;


        /* After memory 4 */

        if (
            currentMemory >= memories.length
        ) {

            showScreen("videoScreen");

            return;

        }


        const image =
            document.getElementById(
                "memoryImage"
            );


        const title =
            document.getElementById(
                "memoryTitle"
            );


        const caption =
            document.getElementById(
                "memoryCaption"
            );


        const number =
            document.getElementById(
                "memoryNumber"
            );


        image.style.opacity = "0";

        title.style.opacity = "0";

        caption.style.opacity = "0";


        setTimeout(function() {

            image.src =
                memories[currentMemory].image;

            title.textContent =
                memories[currentMemory].title;

            caption.textContent =
                memories[currentMemory].caption;

            number.textContent =
                "Memory " +
                (currentMemory + 1) +
                " of " +
                memories.length;


            image.style.opacity = "1";

            title.style.opacity = "1";

            caption.style.opacity = "1";

        }, 500);

    });


/* =====================================================
   WHY YOU → FINAL INTRO
===================================================== */

document
    .getElementById("lastThingButton")
    .addEventListener("click", function() {

        showScreen("finalScreen");

    });


/* =====================================================
   FINAL INTRO → WHEEL
===================================================== */

document
    .getElementById("startWheelButton")
    .addEventListener("click", function() {

        showScreen("wheelScreen");

    });


/* =====================================================
   WHEEL
===================================================== */

let spinCount = 0;

let wheelRotation = 0;


const prizes = [

    "🍫 Toffee!",

    "🎂 Birthday Cake!",

    "🍬 Sweets!",

    "🧃 A Cold Drink!",

    "🍕 Food Date!",

    "💐 Flowers!",

    "🎁 Mystery Gift!",

    "👑 Queen for the Day!",

    "❤️ Extra Love!",

    "💋 A Big Kiss!"

];


/*
   CHANGE THIS NUMBER IF YOU WANT
   A DIFFERENT SECOND-SPIN RESULT.

   0 = Toffee
   1 = Cake
   2 = Sweets
   3 = Drink
   4 = Food Date
   5 = Flowers
   6 = Mystery Gift
   7 = Queen
   8 = Extra Love
   9 = Kiss
*/

const chosenPrize = 4;


document
    .getElementById("spinButton")
    .addEventListener("click", function() {

        const button =
            document.getElementById(
                "spinButton"
            );


        const wheel =
            document.getElementById(
                "wheel"
            );


        const result =
            document.getElementById(
                "wheelResult"
            );


        button.disabled = true;


        spinCount++;


        /* =========================================
           FIRST SPIN — RANDOM
        ========================================= */

        if (spinCount === 1) {

            const randomPrize =
                Math.floor(
                    Math.random() *
                    prizes.length
                );


            const segment =
                randomPrize * 36;


            const extraSpins =
                5 * 360;


            wheelRotation +=
                extraSpins +
                (360 - segment);


            wheel.style.transform =
                "rotate(" +
                wheelRotation +
                "deg)";


            setTimeout(function() {

                result.textContent =
                    "You got: " +
                    prizes[randomPrize];


                button.textContent =
                    "SPIN AGAIN 🎡";


                button.disabled = false;

            }, 5200);


            return;

        }


        /* =========================================
           SECOND SPIN — CHOSEN RESULT
        ========================================= */

        const segment =
            chosenPrize * 36;


        const extraSpins =
            5 * 360;


        wheelRotation +=
            extraSpins +
            (360 - segment);


        wheel.style.transform =
            "rotate(" +
            wheelRotation +
            "deg)";


        setTimeout(function() {

            showScreen(
                "congratulationsScreen"
            );


            launchConfetti();


        }, 5200);

    });


/* =====================================================
   CONGRATULATIONS → FINAL MESSAGE
===================================================== */

document
    .getElementById("finalMessageButton")
    .addEventListener("click", function() {

        showScreen(
            "finalMessageScreen"
        );

    });


/* =====================================================
   CONFETTI
===================================================== */

function launchConfetti() {

    const pieces = 80;


    for (
        let i = 0;
        i < pieces;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "✨";


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-30px";


        confetti.style.fontSize =
            (12 + Math.random() * 20) +
            "px";


        confetti.style.zIndex =
            "9999";


        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(
            confetti
        );


        const duration =
            2500 +
            Math.random() * 2500;


        const horizontal =
            (Math.random() - 0.5) *
            300;


        confetti.animate(

            [
                {
                    transform:
                        "translate(0, 0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        "translate(" +
                        horizontal +
                        "px, 110vh) rotate(720deg)",

                    opacity: 0
                }
            ],

            {
                duration:
                    duration,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }

        );


        setTimeout(function() {

            confetti.remove();

        }, duration);

    }

}
document
    .getElementById("videoContinueButton")
    .addEventListener("click", function() {

        const video =
            document.getElementById("birthdayVideo");

        video.pause();

        showScreen("loveScreen");

    });