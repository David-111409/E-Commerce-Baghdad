Tech Store - High-Performance E-Commerce Application
A modern, responsive e-commerce platform built with React and Redux Toolkit, specializing in tech gadgets. This project focuses on advanced state management, optimized performance, and a seamless user journey.


Core Features
Product Catalog: Interactive display of tech products with real-time data.

Advanced Filtering & Sorting: Dynamic filtering by category (Laptops, Mobiles) and price sorting (Low to High / High to Low).

Smart Pagination: Custom-built pagination system displaying 4 products per page to enhance readability and load speeds.

Persistent Shopping Cart: Fully functional cart with add/remove/quantity logic, synchronized with LocalStorage.

Dynamic Routing: Individual product pages with deep-linking support via URL parameters.

Responsive Design: Optimized for mobile, tablet, and desktop views.


Tech Stack
Frontend: React.js (Hooks & Functional Components)

State Management: Redux Toolkit (Slices, AsyncThunk)

Navigation: React Router Dom (v6+)

Styling: CSS3 (Flexbox/Grid)

API Handling: Fetch API with Asynchronous logic


🚀 Installation & Setup
To get a local copy up and running, follow these steps:

Clone the repository:

Bash
git clone https://github.com/your-username/tech-store.git
Navigate to the project directory:

Bash
cd tech-store
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm start


src/
├── components/     # Reusable UI elements (Spinner, Rating, etc.)
├── pages/          # Main views (Home, Products, SingleProduct, Cart)
├── redux/          # Global state logic (Slices, Store configuration)
├── assets/         # Static images and global styles
└── App.js

This is the deploy link: 
https://prismatic-crisp-57605a.netlify.app/