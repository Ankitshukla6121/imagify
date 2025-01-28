# Imagify

Imagify is a web application that allows users to convert text descriptions into images using advanced AI technologies. The project integrates both frontend and backend functionality with Razorpay for payment processing and a credit-based system to generate images.

---

## Features
- **Text-to-Image Generation**: Users can input text prompts to generate images using AI.
- **User Authentication**: Secure login and registration using JWT.
- **Credit System**: Users can purchase credits to generate images.
- **Payment Gateway Integration**: Razorpay is integrated for secure payment processing.
- **Responsive Design**: The application is designed to work seamlessly across devices.

---

## Technologies Used
### Frontend:
- **React.js**: For building a dynamic user interface.
- **Tailwind CSS**: For styling.
- **Framer Motion**: For animations.

### Backend:
- **Node.js**: For server-side logic.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: For database storage.
- **Mongoose**: For database modeling.
- **Razorpay**: For payment integration.

---

## Installation

### Prerequisites
- Node.js installed on your system
- MongoDB instance (local or cloud-based)
- Razorpay account credentials

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Ankitshukla6121/imagify.git
   cd imagify
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create a `.env` file in the `server` directory and add the following:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   CURRENCY=INR
   ```

4. Start the backend server:
   ```bash
   cd server
   npm start
   ```

5. Start the frontend:
   ```bash
   cd client
   npm start
   ```

6. Open your browser and visit `http://localhost:3000`.

---

## Folder Structure
```
Imagify/
|-- client/                 # Frontend files
|   |-- public/             # Static assets
|   |-- src/                # React components, contexts, and assets
|-- server/                 # Backend files
|   |-- models/             # Mongoose models (User, Transaction, etc.)
|   |-- routes/             # Express routes (User, Payment, etc.)
|   |-- controllers/        # Business logic (userController.js, etc.)
|-- .env                    # Environment variables
|-- README.md               # Documentation
```

---

## API Endpoints

### User
- **POST /api/user/register**: Register a new user.
- **POST /api/user/login**: Login a user.
- **GET /api/user/credits**: Fetch user credits.

### Payment
- **POST /api/user/pay-razor**: Initiate payment and create Razorpay order.
- **POST /api/user/verify-payment**: Verify Razorpay payment.

### Image Generation
- **POST /api/image/generate-image**: Generate image from text prompt.

---

## Usage
1. Register or log in to the application.
2. Purchase credits via Razorpay.
3. Input a text description to generate an image.
4. Download the generated image or create another.

---

## Future Improvements
- Add more payment gateways.
- Implement real-time notifications for payment and image generation status.
- Introduce advanced image editing features.

---



---

## Acknowledgements
- OpenAI DALL-E for text-to-image API.
- Razorpay for payment integration.
- The developer community for their valuable resources.
## Contact

For any queries or feedback, reach out to:
- **Name**: Ankit Shukla
- **Email**: ankitshukla4510@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/ankit-shukla-979303252/
