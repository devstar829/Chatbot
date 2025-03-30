from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncio
import time

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

# Predefined responses
responses = {
    "hello": "Hi there! How can I assist you?",
    "hi": "Hi how is it going today?",
    "yo": "whats up?",
    "how are you": "I am good, happy day! how about you?",
    "bye": "Goodbye!",
    "default": "I'm sorry, I didn't understand that. Can you repeat?",
    "what is your name": "You can just call me collective[i]"
}

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

# Track server start time and robot busy state
start_time = time.time()
robot_busy = False 

@app.get("/api/health")
async def health_check():

    uptime = time.time() - start_time
    return {
        "status": "ok",
        "uptime": f"{uptime:.2f} seconds",
        "version": "1.0.0",
        "description": "FastAPI Chatbot Backend",
    }

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    global robot_busy

    if robot_busy:
        return {"response": "Robot is busy now, try later, sorry"}

    robot_busy = True

    try:
        user_message = request.message.lower()
        response = responses.get(user_message, responses["default"])

        # Simulate a processing in a model
        await asyncio.sleep(3)
        return {"response": response}
    finally:
        # Set the robot back to not busy
        robot_busy = False