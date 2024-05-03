# Revive: E-Waste Monitoring System
![full-stack-re](https://socialify.git.ci/lathika-sunder/full-stack-re/image?language=1&name=1&owner=1&theme=Light)

---

**Table of Contents**
1. [Abstract](#abstract)
2. [User Personas](#user-personas)
3. [Project Flow](#project-flow)
4. [Tech Stack](#tech-stack)
5. [Installation Guide](#installation-guide)
6. [Contributing](#contributing)
7. [License](#license)

---


### Abstract
Revive revolutionizes e-waste management by providing a comprehensive online platform that integrates various stakeholders in the e-waste ecosystem. The platform facilitates the selling of e-waste by enterprises and individuals to scrap businesses, auctioning of scrap by recycling plants, and real-time bidding auctions. Powered by React Js, Node Js, Express Js, and MongoDB, Revive not only ensures sustainable waste management but also offers lucrative revenue streams.

### Features

* **Intuitive User Experience:**
    * Streamlined account creation process
    * Secure login using multi-factor authentication (MFA) with OTP verification (consider adding email verification as an option)
    * Role-based dashboards tailored to each user's needs
    * User-friendly interface for requesting e-waste pickup, managing auctions, and viewing transaction history

* **Efficient Pickup Management:**
    * Individuals and enterprises can submit e-waste pickup requests, specifying quantity, type of e-waste, and preferred pickup time slots.
    * Scrap businesses receive real-time notifications of nearby e-waste availability, allowing them to optimize pickup routes.
    * A streamlined process for accepting/rejecting pickup requests and managing collection schedules enhances efficiency.

* **Live Bidding Integration (Planned):**
    * Implement a robust auction library (e.g., Bull Auction, Auction.io) for a seamless live-timed bidding system.
    * Enable recycling plants to list and auction processed e-waste materials, attracting potential buyers and maximizing return on investment.

* **E-commerce Integration (Planned):**
    * Partner with or integrate an existing e-commerce platform to establish a dedicated marketplace.
    * Facilitate the sale of recycled goods (e.g., refurbished electronics) and processed metals, promoting resource recovery and circular economy practices.
    * Provide a user-friendly shopping experience for individuals and enterprises seeking eco-conscious alternatives.

* **Transparent Transactions:**
    * Secure online payment system (e.g., Stripe, PayPal) ensures reliable and transparent financial transactions.
    * Detailed account statements and transaction history offer clear visibility into e-waste disposal costs, auction winnings, and incentives earned.

* **Data-Driven Insights (Planned):**
    * Design a comprehensive dashboard for enterprise users, providing valuable data visualizations (e.g., charts, graphs).
    * Analyze total e-waste disposed of, disposal trends, and profit earned to support strategic decision-making regarding e-waste management.

* **Comprehensive Super Admin Control:**
    * Empower the Super Admin with a central dashboard for system oversight.
    * Manage user accounts (create/edit/delete), verify user identities (e.g., company registration checks for enterprises), and monitor transactions.
    * Maintain system integrity by addressing security concerns, ensuring smooth platform operation, and analyzing user activity trends.

### User Roles and Responsibilities

* **Individuals:**
    * Register for an account to dispose of their e-waste responsibly.
    * Create detailed e-waste pickup requests, including pictures (optional) for clearer identification.
    * Receive incentives (e.g., discounts, rewards) for participating in the responsible e-waste disposal process.
    * Track the status of submitted pickup requests, including progress updates and notifications.

* **Enterprises:**
    * Create accounts to efficiently manage bulk e-waste disposal needs.
    * Submit e-waste disposal requests, specifying types, quantities, preferred pickup times, and any compliance requirements.
    * Access real-time market rates for various types of e-waste to make informed decisions about disposal strategies. (Planned: Ability to analyze waste disposal data and generate reports for internal reporting or regulatory compliance)

* **Scrap Businesses:**
    * Register as verified scrap businesses, providing relevant documentation (e.g., licenses, certifications).
    * Receive notifications and accept/reject e-waste pickup requests based on location, type of e-waste, and availability.
    * Manage e-waste collections, ensuring safe and responsible transportation to recycling plants.

* **Recycling Plants:**
    * Create profiles showcasing their recycling capabilities and contact details.
    * List processed e-waste materials (raw, segregated) for auction using the live bidding system (planned).
    * Discover and connect with scrap businesses for efficient e-waste material acquisition.

* **Super Admin:**
    * Oversee the entire Revive platform, manage users, monitor transactions, and ensure system integrity.


### Technology Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB
* Other: OTP verification (Firebase)

### User Personas
- Individuals
![image](https://github.com/lathika-sunder/full-stack-re/assets/95066409/1444c6c6-3089-4529-bfe4-b5e80d076971)

- Enterprises
- ![image](https://github.com/lathika-sunder/full-stack-re/assets/95066409/65f4d035-5350-4450-a32d-3a32a072149a)

-Super Admin
![image](https://github.com/lathika-sunder/full-stack-re/assets/95066409/bec4ef27-ec0f-4eb7-b617-91249fc3440c)

- Scrap Dealers
- Recycle Plants



### Project Flow
The project flow encompasses user journeys for individuals, enterprises, and super admin, detailing actions such as signup/login, e-waste disposal requests, transaction management, and auction hosting.
![image](https://github.com/lathika-sunder/full-stack-re/assets/95066409/c5936d17-7d6c-4b4b-a728-0cdc8d70013e)

### Tech Stack
- Frontend: React Js, Firebase
- Backend: Node Js, Express Js
- Database: MongoDB

### Installation Guide
1. Clone the repository from GitHub.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn.
4. Configure environmental variables.
5. Start the server.
6. Access the application through the provided URL.

### Contributing
We welcome contributions from developers interested in enhancing Revive. Fork the repository, make your changes, and submit a pull request. Please adhere to the project's coding standards and guidelines.

### License
This project is licensed under the [MIT License](LICENSE).

---

Revive offers a holistic solution to e-waste management, leveraging technology to promote sustainability and profitability. Join us in our mission to create a cleaner, greener future!
