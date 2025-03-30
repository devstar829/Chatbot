const BASE_URL = "http://127.0.0.1:8000/api";

// Health check function
export const checkHealth = async () => {
  const healthCheck = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Health check timeout")), 5000);
    fetch(`${BASE_URL}/health`)
      .then((response) => {
        clearTimeout(timeout);
        if (!response.ok) {
          reject(new Error("Health check failed"));
        } else {
          resolve(response.json());
        }
      })
      .catch((error) => reject(error));
  });

  return healthCheck;
};

// Chat API function
export const sendChatMessage = async (message) => {
  const response = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error(`Backend returned an error: ${response.status}`);
  }

  return response.json();
};