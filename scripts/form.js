const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const error = document.getElementById("formError");

    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value.trim();
    const comment = document.getElementById("comment").value.trim();

    error.textContent = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        error.textContent = "Enter a valid email.";
        error.style.display = 'block'
        return;
    }

    if (topic.length < 3) {
        error.textContent =
        "Topic must be at least 3 characters.";
        error.style.display = 'block'
        return;
    }

    if (comment.length < 3) {
        error.textContent = "Comment must be at least 3 characters.";
        error.style.display = 'block'
        return;
    }

    alert("Form submitted!");
});