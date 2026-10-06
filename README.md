# 🍵 Sip Atelier

> A premium modern tea e-commerce experience designed for discovering,
> exploring, and purchasing a curated collection of teas.

## 🌐 Live Demo

[Visit Sip Atelier](https://peppy-vacherin-e9c793.netlify.app)

---

## 📖 Overview

**Sip Atelier** is a modern and fully responsive tea e-commerce website
built to provide a smooth and premium online tea-shopping experience.

Users can explore different tea collections, search and filter products,
view detailed product information, manage their shopping cart and
wishlist, complete the checkout process, and track their orders.

The project focuses on creating a clean, elegant, and user-friendly
e-commerce interface while maintaining responsive behavior across
mobile, tablet, and desktop devices.

---

## ✨ Key Features

### 🛍️ Product Discovery

- Browse tea products by category
- Black Tea
- Green Tea
- Milk Tea
- Herbal Tea
- Premium Tea
- Product search
- Product filtering
- Product sorting
- Sort by price
- Sort by rating
- Sort by newest

### 🍃 Product Details

- Detailed product information
- Product image gallery
- Multiple weight options
- 100g, 250g, 500g, and 1kg options
- Quantity selection
- Add to cart
- Add/remove from wishlist

### 🛒 Shopping Cart

- Add products to cart
- Remove products from cart
- Increase/decrease product quantity
- Live price calculation
- Coupon code support
- Automatic total calculation

### ❤️ Wishlist

- Add products to wishlist
- Remove products from wishlist
- Wishlist state persistence
- Wishlist data stored using browser localStorage

### 💳 Checkout

- Dedicated checkout page
- Customer information form
- Form validation
- Bangladeshi phone number validation
- Division and district selection
- Order confirmation

### 📦 Order Management

- Order confirmation
- Order tracking interface
- Order status information

### 🔐 Authentication UI

- Login page
- Registration page
- User-friendly authentication interface

### 📱 Responsive Design

The website is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop computers
- Large screens

---

## 🛠️ Tech Stack

### Frontend

- **React 19**
- **React Router v7**
- **Tailwind CSS 3**
- **Lucide React**
- **Vite**

### State Management

- **React Context API**
- **localStorage**

Context API is used for managing application-wide state such as:

- Shopping cart
- Wishlist
- Product-related state

Browser `localStorage` is used to persist cart and wishlist data.

---

## 📦 Main Dependencies

The project uses the following main packages:

| Package | Purpose |
|---|---|
| React | Building the user interface |
| React DOM | Rendering React components |
| React Router | Client-side routing |
| Lucide React | UI icons |
| Tailwind CSS | Styling and responsive design |
| Vite | Development and production build tool |

For the complete dependency list and exact versions,
see [`package.json`](./package.json).

---

## 📸 Screenshots

### Homepage

![Sip Atelier Homepage](./screenshots/homepage.png)

> Add more screenshots here if available.

---

## 📂 Project Structure

```text
sip-atelier/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── screenshots/
│   └── homepage.png
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
