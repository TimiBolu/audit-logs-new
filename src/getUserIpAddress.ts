import axios from "axios";

// Function to get the user's IP address from ipify API
export async function getUserIpAddress(): Promise<string | null> {
    try {
        const response = await axios.get("https://api.ipify.org?format=json");
        return response.data.ip;
    } catch (error) {
        console.error("error getting user IP address:", error);
        return null;
    }
};
