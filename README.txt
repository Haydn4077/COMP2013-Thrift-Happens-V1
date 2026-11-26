Thrift Happens — Project 2
1. Configure MongoDB Connection
Create a .env file inside backend/ and add your MongoDB connection string:

MONGO_URI = mongodb+srv://USERNAME:PASSWORD@cluster0.zf8uixx.mongodb.net/ThriftHappens


2. Seed the Original Product Catalogue
The original 50 listings come from data.json in frontend and load automatically when the backend connects to MongoDB.


3. Install Dependencies
Open two terminals (or run one after the other) and install packages in both folders.

Type in console: cd backend
Type in console: npm install

Type in console: cd frontend
Type in console: npm install


4. Start Both Frontend and Backend
Run the backend server.

Type in console: cd backend
Type in console: npm run dev

In a second terminal, run the frontend server.

Type in console: cd frontend
Type in console: npm run dev