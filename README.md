# Chatbot Application

![Desktop View](./Desktop.png)
![Mobile View](./Mobile.png)

This is a simple chatbot application built with a **React frontend** and a **FastAPI backend**. The chatbot provides predefined responses to user inputs and demonstrates a basic full-stack implementation.

---

## Features

### Frontend (React + Tailwind CSS)
- **Chat Window**: Displays the conversation history between the user and the bot.
- **Message Input Field**: Allows users to type messages.
- **Send Button**: Sends the user's message to the backend.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Dark Mode**: Supports light and dark themes for better user experience.
- **Error Handling**: Displays appropriate messages when the backend is down or the bot is busy.

### Backend (FastAPI)
- **Health Check Endpoint**: `GET /api/health` to verify the server is running.
- **Chat Endpoint**: `POST /api/chat` to accept user messages and return predefined responses.
- **Predefined Responses**: The bot responds with predefined messages based on user input.
- **Robot Busy State**: Simulates a busy state for the bot and returns an appropriate message.
- **3-Second Delay**: Adds a delay to simulate processing time.

---

## Setup Instructions

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.9 or higher)
- **npm** or **yarn**
- **pip** (Python package manager)

---

### Backend Setup (FastAPI)

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/devstar829/chatbot-app.git
   cd chatbot-app/backend
   ```

2. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install "fastapi[standard]"
   ```

4. **Run the Backend Server**:
   ```bash
   fastapi dev main.py
   ```

5. **Verify the Backend**:
   - Open your browser and navigate to `http://127.0.0.1:8000/docs` to view the API documentation.

---

### Frontend Setup (React)

1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Frontend Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173`.

---

## Application Workflow

1. **User Interaction**:
   - The user types a message in the input field and clicks the "Send" button.
   - The message is displayed in the chat window.

2. **Backend Communication**:
   - The frontend sends the message to the backend via the `/api/chat` endpoint.
   - The backend processes the message and returns a predefined response.

3. **Bot Response**:
   - The bot's response is displayed in the chat window.
   - If the bot is busy or the backend is down, an appropriate error message is shown.


---

## Project Structure

```
chatbot-app/
├── backend/
│   ├── main.py          # FastAPI backend code
│   └── requirements.txt # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── api/         # API logic for frontend
│   │   ├── components/  # React components
│   │   └── App.jsx      # Main React app
│   └── package.json     # Frontend dependencies
└── README.md            # Project documentation
```

---

## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.

### Backend:
- **FastAPI**: For creating the RESTful API.
- **Uvicorn**: For running the FastAPI server.

