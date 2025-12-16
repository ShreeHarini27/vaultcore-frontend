# VaultCore – Module 1 (Frontend)

## Overview
This repository contains the **Frontend implementation of Module 1 (Login & Authentication UI)** for the VaultCore project, a next-generation fintech security platform.

The frontend is built using **React** and focuses on providing a secure, clean, and modern login experience similar to real-world fintech applications.

---

## What I Worked On
I was responsible for the **Frontend part of Module 1**.

Specifically, I implemented:

- A responsive **Login UI** using React
- Controlled form inputs for **username and password**
- Client-side validation and error handling
- Integration with backend login API using **Axios**
- Handling of **JWT token** received from backend
- Secure storage of the token in `localStorage`
- Loading and error state management for better user experience
- Modern fintech-style UI using **Tailwind CSS**

---

## Tech Stack Used
- **React (Create React App)**
- **Axios** for API communication
- **Tailwind CSS** for styling
- JavaScript (ES6+)

---

<img width="744" height="248" alt="image" src="https://github.com/user-attachments/assets/61c23dee-061b-4e96-bca6-dc74f9ac3c0d" />

---

## How It Works
1. User enters username and password
2. On submit, frontend sends a POST request to the backend `/login` endpoint
3. Backend returns a JWT token on successful authentication
4. Frontend stores the token securely in `localStorage`
5. Error messages are shown if authentication fails

---

## Backend Dependency
This frontend is designed to work with a **Spring Boot backend** that provides:
- `/login` API endpoint
- JWT token generation
- Authentication validation

Once the backend is running, the frontend can be connected without any code changes.

---

## Status
✅ Module 1 Frontend completed  
🔗 Ready to integrate with backend authentication service

---

## Author
**Shree Harini**  
Module 1 – Frontend Developer

## Project Structure
