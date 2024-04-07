const form = document.getElementById("form-data");

function addError(node, txt) {
    const span = document.createElement("span");
    const text = document.createTextNode(txt);

    span.appendChild(text);
    span.classList.add("error-text");
    node.appendChild(span);

    const title = node.querySelector("h3");
    title.classList.add("error");
}

function removeErrors() {
    document
        .querySelectorAll(".error")
        .forEach((el) => el.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach((el) => el.remove());
}

function displayResult(dt) {
    const dtDiff = new Date(Date.now() - dt);

    document.querySelectorAll("div[id^=results-]").forEach((el) => {
        const numEl = el.querySelector("h2 span");

        switch (el.id) {
            case "results-years":
                numEl.textContent = dtDiff.getFullYear() - 1970;
                break;
            case "results-months":
                numEl.textContent = dtDiff.getMonth();
                break;
            case "results-days":
                numEl.textContent = dtDiff.getDate();
                break;
        }
    });
}

function onSubmit(e) {
    e.preventDefault();
    const dayElem = document.getElementById("days");
    const monthElem = document.getElementById("months");
    const yearElem = document.getElementById("years");
    const formData = new FormData(form);
    const day = formData.get("day");
    const month = formData.get("month");
    const year = formData.get("year");

    removeErrors();

    if (day === "") {
        addError(dayElem, "This field is required");
        return;
    } else if (isNaN(day) || day < 1 || day > 31) {
        addError(dayElem, "Must be valid day");
        return;
    }
    if (month === "" || isNaN(month)) {
        addError(monthElem, "This field is required");
        return;
    } else if (isNaN(month) || month < 1 || month > 12) {
        addError(monthElem, "Must be valid month");
        return;
    }
    if (year === "" || isNaN(year)) {
        addError(yearElem, "This field is required");
        return;
    }

    const dt = new Date(year, month - 1, day);

    if (dt > Date.now()) {
        addError(yearElem, "Must be in the past");
        return;
    }

    displayResult(dt);
}

form.addEventListener("submit", onSubmit);
