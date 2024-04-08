const adviceID = document.getElementById("advice-id");
const adviceQuote = document.getElementById("advice-quote");

async function generateAdvice() {
    const resp = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-cache",
    });
    if (!resp.ok) {
        console.log("Getting advice failed");
        return;
    }
    const advice = await resp.json();

    adviceID.textContent = advice.slip.id;
    adviceQuote.textContent = `"${advice.slip.advice}"`;
}

document
    .getElementById("advice-button")
    .addEventListener("click", generateAdvice);

generateAdvice();
