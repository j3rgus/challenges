const timeframeLinksEl = document.getElementById("timeframes-links");

// Highlight active link
function highlightActiveLink(timeframe) {
    const links = timeframeLinksEl.querySelectorAll("a");
    links.forEach((link) => {
        if (link.getAttribute("href") === `#${timeframe}`) {
            link.classList.add("text-white");
        } else {
            link.classList.remove("text-white");
        }
    });
}

async function loadCards(timeframe) {
    const cardsEl = document.getElementById("cards");
    const resp = await fetch("./data.json");
    const data = await resp.json();

    cardsEl.querySelectorAll(".card").forEach((card) => card.remove());

    for (const cardData of data) {
        const title = cardData.title.toLowerCase().replaceAll(" ", "-");
        const card = document.createElement("div");
        const { current, previous } = cardData.timeframes[timeframe];

        card.className = `card flex flex-row bg-${title} bg-${title}-icon bg-no-repeat bg-right-top text-lg rounded-2xl`;
        card.innerHTML = `
        <div
          class="flex flex-col self-end justify-center h-3/4 w-full p-8 rounded-xl bg-dark-blue md:h-5/6 md:gap-y-10 hover:cursor-pointer hover:bg-blue"
        >
          <div class="flex flex-row items-center justify-between">
            <h2 class="capitalize">${title}</h2>
            <a href="#${title}" class="text-pale-blue text-2xl">
              <i class="fa-solid fa-ellipsis"></i>
            </a>
          </div>
          <div class="flex flex-row justify-between gap-8 md:flex-col">
            <span class="text-white text-[32px] font-light md:text-[64px]"
              >${current}hrs</span
            >
            <p class="text-pale-blue text-base">Last Week - ${previous}hrs</p>
          </div>
        </div>
        `;
        cardsEl.appendChild(card);
    }
}

async function changePage(e) {
    switch (e.target.getAttribute("href")) {
        case "#daily":
            await loadCards("daily");
            highlightActiveLink("daily");
            break;
        case "#weekly":
            await loadCards("weekly");
            highlightActiveLink("weekly");
            break;
        case "#monthly":
            await loadCards("monthly");
            highlightActiveLink("monthly");
            break;
    }
}

// document.addEventListener("DOMContentLoaded", init);
timeframeLinksEl.addEventListener("click", changePage);
timeframeLinksEl.querySelector('a[href="#weekly"]').click();
