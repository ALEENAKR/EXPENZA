// Airtable API credentials (replace with your actual values)
const airtableApiKey = "patSUDUqhNYOHeovU.7b18a682847576acc12ebe71396d92c71f3b0555269ddba7f9a210683a8768b4"; // Your Airtable API key
const airtableBaseId = "app4rSrDeKWjqSnKn"; // Your Airtable Base ID
const airtableTableName = "Users"; // Your table name

document.getElementById("login-link").addEventListener("click", async function (e) {
    e.preventDefault(); // Prevent default behavior

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        showError("Please fill out both fields.");
        return;
    }

    try {
        // Airtable API URL with filter to match the Username
        const url = https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}?filterByFormula=Username="${username}";

        // Fetch data from Airtable
        const response = await fetch(url, {
            headers: {
                Authorization: Bearer ${airtableApiKey},
            },
        });

        if (!response.ok) {
            throw new Error("Failed to connect to the database.");
        }

        const data = await response.json();
        const userRecords = data.records;

        if (userRecords.length === 0) {
            showError("Invalid username or password.");
            return;
        }

        // Validate the password
        const user = userRecords[0].fields; // Get the first matching record
        if (user.password === password) {
            // Redirect to home.html if credentials are correct
            window.location.href = "home.html";
        } else {
            showError("Invalid username or password.");
        }
    } catch (error) {
        console.error("Error:", error);
        showError("An unexpected error occurred. Please try again.");
    }
});

// Show error message
function showError(message) {
    const errorElement = document.getElementById("login-error");
    errorElement.textContent = message;
}


// Show error message
function showError(message) {
    const errorElement = document.getElementById("login-error");
    errorElement.textContent = message;
}