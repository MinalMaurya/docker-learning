
const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

// MongoDB connection
const mongoURL = "mongodb://admin:password@localhost:27017/?authSource=admin";
const client = new MongoClient(mongoURL);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let usersCollection;

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();

        console.log("Connected to MongoDB successfully!");

        const db = client.db("user-profile");
        usersCollection = db.collection("users");

        // Create a default user if one doesn't exist
        await usersCollection.updateOne(
            { userid: 1 },
            {
                $setOnInsert: {
                    userid: 1,
                    name: "Minal Maurya",
                    email: "minal@example.com",
                    bio: "Learning Docker and Node.js"
                }
            },
            { upsert: true }
        );

        // Start Express server after database connection
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

// Get user profile
app.get("/api/user", async (req, res) => {
    try {
        const user = await usersCollection.findOne(
            { userid: 1 },
            { projection: { _id: 0 } }
        );

        res.json(user);

    } catch (error) {
        console.error("Error fetching profile:", error);

        res.status(500).json({
            message: "Error fetching profile"
        });
    }
});

// Update user profile
app.put("/api/user", async (req, res) => {
    try {
        const { name, email, bio } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required"
            });
        }

        // Check database and incoming data
        console.log("Database:", usersCollection.namespace);
        console.log("Incoming data:", req.body);

        // Update MongoDB document
        const updateResult = await usersCollection.updateOne(
            { userid: 1 },
            {
                $set: {
                    name,
                    email,
                    bio: bio || ""
                }
            }
        );

        console.log("MongoDB update result:", updateResult);

        // Fetch updated profile
        const updatedUser = await usersCollection.findOne(
            { userid: 1 },
            { projection: { _id: 0 } }
        );

        console.log("Updated profile:", updatedUser);

        res.json({
            message: "Profile updated successfully!",
            user: updatedUser
        });

    } catch (error) {
        console.error("Error updating profile:", error);

        res.status(500).json({
            message: "Error updating profile"
        });
    }
});

// Start application
connectDB();
