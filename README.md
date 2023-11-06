# Software Requirements Specification (SRS) Document

## Project Name: Grocery Shopping Platform

## Table of Contents

- [Introduction](#1-introduction)
  - [1.1 Purpose](#11-purpose)
  - [1.2 Scope](#12-scope)

- [Overall Description](#2-overall-description)
  - [2.1 Product Perspective](#21-product-perspective)
  - [2.2 User Classes and Characteristics](#22-user-classes-and-characteristics)

- [Specific Requirements](#3-specific-requirements)
  - [3.1 User Registration and Authentication](#31-user-registration-and-authentication)
    - [3.1.1 User Registration](#311-user-registration)
    - [3.1.2 User Login](#312-user-login)
    - [3.1.3 Admin Access](#313-admin-access)
  - [3.2 Product Management](#32-product-management)
    - [3.2.1 Product Creation](#321-product-creation)
    - [3.2.2 Product Updating](#322-product-updating)
    - [3.2.3 Product Deletion](#323-product-deletion)
  - [3.3 Shopping Cart](#33-shopping-cart)
    - [3.3.1 Cart Management](#331-cart-management)
    - [3.3.2 Cart Totals](#332-cart-totals)
  - [3.4 Top Product Carousel](#34-top-product-carousel)
    - [3.4.1 Carousel Display](#341-carousel-display)
  - [3.5 Checkout Process](#35-checkout-process)
    - [3.5.1 Shipping Information](#351-shipping-information)
    - [3.5.2 Payment Method](#352-payment-method)
    - [3.5.3 Order Confirmation](#353-order-confirmation)

- [External Interfaces](#4-external-interfaces)
  - [4.1 User Interfaces](#41-user-interfaces)
  - [4.2 APIs](#42-apis)

- [System Features](#5-system-features)
  - [5.1 Detailed System Features](#51-detailed-system-features)

- [Non-Functional Requirements](#6-non-functional-requirements)
  - [6.1 Performance](#61-performance)
  - [6.2 Security](#62-security)
  - [6.3 Usability](#63-usability)
  - [6.4 Reliability](#64-reliability)
  - [6.5 Compatibility](#65-compatibility)
    - [6.5.1 Cross-Browser Compatibility](#651-cross-browser-compatibility)
    - [6.5.2 Mobile Compatibility](#652-mobile-compatibility)


## 1. Introduction

### 1.1 Purpose

The purpose of this document is to provide a comprehensive understanding of the Grocery Shopping Platform, its functionality, and its requirements.

### 1.2 Scope

The Grocery Shopping Platform is an online grocery shopping application designed for both users and administrators. It offers features for user registration, product management, shopping cart management, product showcasing, and a checkout process.

## 2. Overall Description

### 2.1 Product Perspective

The platform is a standalone web application accessible through web browsers. It uses React.js for the frontend, Express.js for the backend, and MongoDB for data storage. User authentication is implemented using JSON Web Tokens (JWT).

### 2.2 User Classes and Characteristics

- **User**: General shoppers who browse and purchase groceries.
- **Admin**: Administrators who manage product listings.

## 3. Specific Requirements

### 3.1 User Registration and Authentication

#### 3.1.1 User Registration

   - Users can create accounts with the following information:
     - Full name
     - Email address (used as a unique identifier)
     - Password
     - Profile picture (optional)
   - Registration includes validation checks for unique email addresses, password strength, and other relevant data.

#### 3.1.2 User Login
   - Registered users can log in using their email and password.
   - Passwords are securely hashed and stored.
   - Authentication is implemented using JWT.

#### 3.1.3 Admin Access
   - Administrators have separate access, achieved through a designated role or privilege.
   - Admins can log in and access additional features for product management.

### 3.2 Product Management

#### 3.2.1 Product Creation
   - Admins can add new products to the platform.
   - Each product has the following attributes:
     - Name
     - Description
     - Category or type
     - Price
     - Image(s)

#### 3.2.2 Product Updating
   - Admins can modify existing product details, including name, description, price, and images.
   - Changes are reflected on the product listing page.

#### 3.2.3 Product Deletion
   - Admins can remove products from the platform.
   - Deletion is a reversible action with a confirmation prompt.

### 3.3 Shopping Cart

#### 3.3.1 Cart Management
   - Users can add products to their shopping cart.
   - Users can view the contents of their cart, including product names, quantities, and total prices.
   - Users can remove items from their cart.

#### 3.3.2 Cart Totals
   - The shopping cart calculates and displays the total price of items in the cart.
   - Totals are updated in real-time as items are added or removed.

### 3.4 Top Product Carousel

#### 3.4.1 Carousel Display
   - The platform's home page showcases a carousel of top-selling or featured products.
   - The carousel automatically slides through items and allows manual navigation.

### 3.5 Checkout Process

#### 3.5.1 Shipping Information
   - Users provide their shipping details, including name, address, and contact information.
   - Users can specify shipping methods, such as standard, express, or store pickup.

#### 3.5.2 Payment Method
   - Users can select their preferred payment method, including credit/debit card or other supported methods.
   - Payment information is securely processed, following industry standards and possibly using a third-party payment gateway.

#### 3.5.3 Order Confirmation
   - Upon completing the checkout process, users receive an order confirmation, including order details.
   - Optional: Implement email notifications to send order confirmations and updates.

## 4. External Interfaces

### 4.1 User Interfaces
- The web application has a user-friendly interface designed with Material-UI.

### 4.2 APIs
- The application exposes RESTful APIs for user authentication and product management.

## 5. System Features

### 5.1 Detailed System Features

The following section provides detailed descriptions of the system features of the Grocery Shopping Platform:

- **User Registration and Authentication**
  - User Registration
    - Users can create accounts with their full name, email address, password, and optional profile picture.
    - Registration includes validation checks for unique email addresses, password strength, and other relevant data.
  - User Login
    - Registered users can log in using their email and password.
    - Passwords are securely hashed and stored.
    - Authentication is implemented using JSON Web Tokens (JWT).
  - Admin Access
    - Administrators have separate access, achieved through a designated role or privilege.
    - Admins can log in and access additional features for product management.

- **Product Management**
  - Product Creation
    - Admins can add new products to the platform, including name, description, category, price, and images.
  - Product Updating
    - Admins can modify existing product details, including name, description, price, and images.
    - Changes are reflected on the product listing page.
  - Product Deletion
    - Admins can remove products from the platform, with a reversible action and confirmation prompt.

- **Shopping Cart**
  - Cart Management
    - Users can add products to their shopping cart.
    - Users can view the contents of their cart, including product names, quantities, and total prices.
    - Users can remove items from their cart.
  - Cart Totals
    - The shopping cart calculates and displays the total price of items in real-time.
    - Totals are updated as items are added or removed.

- **Top Product Carousel**
  - Carousel Display
    - The platform's home page showcases a carousel of top-selling or featured products.
    - The carousel automatically slides through items and allows manual navigation.

- **Checkout Process**
  - Shipping Information
    - Users provide their shipping details, including name, address, and contact information.
    - Users can specify shipping methods, such as standard, express, or store pickup.
  - Payment Method
    - Users can select their preferred payment method, including credit/debit card or other supported methods.
    - Payment information is securely processed, following industry standards and possibly using a third-party payment gateway.
  - Order Confirmation
    - Upon completing the checkout process, users receive an order confirmation, including order details.
    - Optional: Implement email notifications to send order confirmations and updates.

## 6. Non-Functional Requirements

### 6.1 Performance

#### 6.1.1 Responsiveness
   - The platform should load quickly and provide a responsive user experience.
   - The website should be accessible within a reasonable time frame, typically within 3 seconds.

#### 6.1.2 Scalability
   - The system should be designed to accommodate increased traffic and growth.
   - It should be capable of handling a higher number of concurrent users without significant performance degradation.

#### 6.1.3 Caching
   - Implement caching mechanisms to store frequently accessed data and reduce server load.
   - Cache product information and user sessions to enhance response times.

### 6.2 Security

#### 6.2.1 User Data Security
   - Safeguard user data, including personal information and purchase history.
   - Implement encryption for data in transit and at rest.

#### 6.2.2 Authentication and Authorization
   - Ensure secure user authentication and authorization.
   - Admin privileges must be validated and granted securely.

#### 6.2.3 Payment Security
   - If handling payments, comply with industry security standards, such as PCI DSS.
   - Use a secure third-party payment gateway for payment processing.

### 6.3 Usability

#### 6.3.1 User-Friendly Design
   - The user interface should be intuitive and user-friendly.
   - Implement a responsive design that works well on various devices and screen sizes.

#### 6.3.2 Accessibility
   - Ensure that the platform complies with accessibility standards (e.g., WCAG) for users with disabilities.
   - Provide alternative text for images and ensure keyboard navigation.

### 6.4 Reliability

#### 6.4.1 Availability
   - The platform should be available and operational at least 99% of the time (excluding scheduled maintenance).

#### 6.4.2 Backup and Recovery
   - Regularly back up the database to prevent data loss.
   - Implement a disaster recovery plan in case of server failure or data corruption.

### 6.5 Compatibility

#### 6.5.1 Cross-Browser Compatibility
   - The platform must work on popular web browsers, including Chrome, Firefox, Safari, and Edge.
   - Testing is required on various OS platforms to ensure proper functionality and appearance.
   - Responsive design principles should be implemented for seamless performance on both desktop and mobile devices.

#### 6.5.2 Mobile Compatibility
   - The platform must be fully functional on smartphones and tablets.
   - Testing on Android and iOS devices is essential to ensure usability, performance, and user experience.
   - User interfaces should be optimized for mobile use, including touch-friendly controls and mobile-specific elements.

