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

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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

        title:
            "Look at us oo 😂❤️",

        caption:
            "Chale, look at this picture 😂 How did we even get here?"
    },

    {
        image: "images/us2.jpg",

        title:
            "Ei Esther 😂",

        caption:
            "You remember this day? Because I definitely do. ❤️"
    },

    {
        image: "images/us3.jpg",

        title:
            "This one is special ❤️",

        caption:
            "Some moments are small, but somehow they stay in your heart."
    },

    {
        image: "images/us4.jpg",

        title:
            "And here we are 😂❤️",

        caption:
            "Honestly, I wouldn't trade these memories for anything."
    }

];


document
    .getElementById("nextMemoryButton")
    .addEventListener("click", function() {

        currentMemory++;

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
   VIDEO → WHY YOU
===================================================== */

document
    .getElementById("videoContinueButton")
    .addEventListener("click", function() {

        const video =
            document.getElementById(
                "birthdayVideo"
            );

        video.pause();

        showScreen("loveScreen");

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

let firstPrize = "";
let secondPrize = "";


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
    SECOND SPIN WILL ALWAYS BE:
    🍕 Food Date!

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


const spinButton =
    document.getElementById("spinButton");

const wheel =
    document.getElementById("wheel");

const wheelResult =
    document.getElementById("wheelResult");


spinButton.addEventListener(
    "click",
    function() {

        spinButton.disabled = true;

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

            firstPrize =
                prizes[randomPrize];


            const segmentSize =
                360 / prizes.length;


            /*
                Put the random section under
                the pointer.
            */

            const targetAngle =
                -(
                    randomPrize *
                    segmentSize +
                    segmentSize / 2
                );


            const currentAngle =
                wheelRotation % 360;


            let adjustment =
                targetAngle -
                currentAngle;


            wheelRotation +=
                5 * 360 +
                adjustment;


            wheel.style.transform =
                "rotate(" +
                wheelRotation +
                "deg)";


            setTimeout(function() {

                wheelResult.innerHTML =
                    "You got:<br><br>" +
                    "🎁 " +
                    firstPrize;


                spinButton.textContent =
                    "SPIN AGAIN 🎡";


                spinButton.disabled =
                    false;

            }, 5200);


            return;
        }


        /* =========================================
           SECOND SPIN — FOOD DATE
        ========================================= */

        secondPrize =
            prizes[chosenPrize];


        const segmentSize =
            360 / prizes.length;


        /*
            Food Date = item 4.

            We target the CENTER of that section.
        */

        const targetAngle =
            -(
                chosenPrize *
                segmentSize +
                segmentSize / 2
            );


        const currentAngle =
            wheelRotation % 360;


        let adjustment =
            targetAngle -
            currentAngle;


        wheelRotation +=
            5 * 360 +
            adjustment;


        wheel.style.transform =
            "rotate(" +
            wheelRotation +
            "deg)";


        /* =========================================
           SHOW SECOND RESULT
        ========================================= */

        setTimeout(function() {

            wheelResult.innerHTML =
                "You got:<br><br>" +
                "🎁 " +
                secondPrize;


            spinButton.textContent =
                "CONGRATULATIONS 🎉";


            /*
                Give her time to see the
                second result.
            */

            setTimeout(function() {

                const winningText =
                    document.querySelector(
                        ".winning-text"
                    );


                if (winningText) {

                    winningText.innerHTML =
                        "You won:<br><br>" +
                        "🍕 Food Date!";

                }


                showScreen(
                    "congratulationsScreen"
                );


                launchConfetti();


            }, 2500);


        }, 5200);

    }
);

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
document.getElementById("exitButton").addEventListener("click", function() {

    localStorage.setItem("birthdayViewed", "true");

    document.body.innerHTML = `
        <div style="
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            background:#08060d;
            color:white;
            padding:30px;
            box-sizing:border-box;
            font-family:Arial,sans-serif;
        ">
            <div>
                <div style="font-size:60px;">❤️</div>

                <h1>Thank you for opening it, Esther ❤️</h1>

                <p>
                    I hope you enjoyed your little surprise. 😂🎂
                </p>
            </div>
        </div>
    `;

});
    
// VIEW ONCE
if (localStorage.getItem("birthdayViewed") === "true") {
    document.body.innerHTML = `
        <div style="
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            padding:30px;
            box-sizing:border-box;
            background:#08060d;
            color:white;
            font-family:Arial,sans-serif;
        ">
            <div>
                <div style="font-size:60px;">❤️</div>

                <h1>
                    This surprise has already been opened.
                </h1>

                <p style="font-size:18px;">
                    You already saw your birthday surprise, Esther 😂❤️
                </p>
            </div>
        </div>
    `;
}