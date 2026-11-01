const form = document.getElementById("profileForm");
const message = document.getElementById("message");

// Fetch existing profile
async function loadProfile() {
    try {
        const response = await fetch("/api/user");
        const user = await response.json();

        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("bio").value = user.bio;

        document.getElementById("displayName").textContent = user.name;

    } catch (error) {
        message.textContent = "Unable to load profile.";
    }
}

// Update profile
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const updatedUser = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        bio: document.getElementById("bio").value
    };

    try {
        const response = await fetch("/api/user", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        message.style.color = "green";
        message.textContent = result.message;

        document.getElementById("displayName").textContent =
            result.user.name;

    } catch (error) {
        message.style.color = "red";
        message.textContent = error.message;
    }
});

loadProfile();