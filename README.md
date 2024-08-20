# Meetmax - Social Media Demo

Meetmax is a responsive social media demo website built with React and Vite. This project showcases key features of a social media platform, including authentication, post creation, and user interactions. Below are the main components of the project:

## Features

### 1. Authentication

The authentication system is implemented using Firebase Authentication, with the following key features:

- **Sign Up:** Allows users to create an account.
- **Sign In:** Enables users to log in to the platform.
- **Forgot Password:** Provides users with a password recovery option.

### 2. Feed (Home)

The feed is the main section of the website. It is secured with a private route, ensuring that only authenticated users can access it. The feed includes the following features:

- **Create a Post:** Demonstrates how users can create a post. This is a frontend-only demo, without a backend.
- **Like & Comment:** Users can interact with posts by liking and commenting.
- **Story Section:** Users can view stories with swipe gestures, implemented using the Swiper library.

## Challenges Faced

- **Data Fetching:** Initially, I used `loader()` for data fetching, but it caused issues when deploying the project. I resolved this by switching to `useEffect()` for data fetching.

## Technologies Used

- **HTML & CSS:** For structuring and styling the website.
- **Tailwind CSS:** For additional styling and responsiveness.
- **React JS:** The core framework for building the frontend.
- **Firebase Authentication:** For managing user authentication.
