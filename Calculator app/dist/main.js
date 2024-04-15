class App {
    constructor() {
        this.screen = "399981";
        this.operator = null;
        this.result = 0;

        this.loadEvents();
        this.setTheme(this.getTheme() || "theme-1");

        this.displayTheme();
        this.displayScreen();
    }

    getTheme() {
        return localStorage.getItem("theme");
    }

    setTheme(theme) {
        const htmlEl = document.querySelector("html");

        localStorage.setItem("theme", theme);

        htmlEl.dataset.theme = theme;
    }

    loadEvents() {
        document
            .getElementById("calc-toggle")
            .addEventListener("click", this.processToggle.bind(this));
        document
            .getElementById("calc-keypad")
            .addEventListener("click", this.processKeys.bind(this));
        window.addEventListener("keyup", this.processKeys.bind(this));
    }

    displayTheme() {
        const theme = this.getTheme();

        document.querySelectorAll(".calc-toggle-state").forEach((el) => {
            if (el.dataset.value !== theme) {
                el.classList.add("bg-opacity-0");
            } else {
                el.classList.remove("bg-opacity-0");
                document.querySelector("html").dataset.theme = theme;
                this.setTheme(theme);
            }
        });
    }

    displayScreen() {
        const screenEl = document.getElementById("calc-screen");

        screenEl.textContent = (+this.screen).toLocaleString("en-US");
    }
    55;
    processToggle(e) {
        if (e.target.dataset.value) {
            let themeNum = e.target.dataset.value.split("-")[1];

            if (this.getTheme().split("-")[1] === themeNum) {
                themeNum = (themeNum % 3) + 1; // 3 themes altogether
            }
            this.setTheme(`theme-${themeNum}`);
            this.displayTheme();
        }
    }

    processKeys(e) {
        const key = e.target.dataset.key || e.key;

        switch (key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.screen += key;
                break;
            case ".":
                this.screen += ".";
                break;
            case "del":
                this.screen = "";
                break;
            case "+":
            case "add":
                this.result = +this.screen;
                this.operator = (x, y) => x + y;
                this.screen = "";
                break;
            case "-":
            case "sub":
                this.result = +this.screen;
                this.operator = (x, y) => x - y;
                this.screen = "";
                break;
            case "*":
            case "multi":
                this.result = +this.screen;
                this.operator = (x, y) => x * y;
                this.screen = "";
                break;
            case "/":
            case "divide":
                this.result = +this.screen;
                this.operator = (x, y) => x / y;
                this.screen = "";
                break;
            case "Escape":
            case "reset":
                this.screen = "";
                this.operator = null;
                break;
            case "Enter":
            case "result":
                this.screen = this.operator
                    ? this.operator(this.result, +this.screen)
                    : this.screen;
                break;
        }

        this.displayScreen();
    }
}

new App();
