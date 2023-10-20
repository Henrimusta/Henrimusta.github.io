class FormHandler {
    constructor() {
        this.submitButton = document.querySelector(".survey-form input[type='submit']");
        this.form = document.querySelector(".survey-form");
        this.thankYouPopup = document.getElementById("thank-you");
        this.closeThankYouButton = document.getElementById("close-thank-you");
        this.pleaseFillFormPopup = document.getElementById("please-fill-form");
        this.closePleaseFillFormButton = document.getElementById("close-please-fill-form");

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (this.form.checkValidity()) {
                this.showThankYouPopup();
            } else {
                this.showPleaseFillFormPopup();
            }
        });

        this.closeThankYouButton.addEventListener("click", () => {
            this.hideThankYouPopup();
        });

        this.closePleaseFillFormButton.addEventListener("click", () => {
            this.hidePleaseFillFormPopup();
        });
    }

    showThankYouPopup() {
        this.thankYouPopup.style.display = "block";
    }

    hideThankYouPopup() {
        this.thankYouPopup.style.display = "none";
    }

    showPleaseFillFormPopup() {
        alert("fill the form");
        this.pleaseFillFormPopup.style.display = "block";
    }

    hidePleaseFillFormPopup() {
        this.pleaseFillFormPopup.style.display = "none";
    }
}

// Use
document.addEventListener("DOMContentLoaded", () => {
    const formHandler = new FormHandler();
});









