# 🛍️ JSON Server Products App

A full-stack mock e-commerce product API application featuring a frontend built with **React + Vite** and a backend powered by **json-server**. This project enables `GET` and `POST` requests, allowing seamless frontend-backend integration for prototyping, learning, and testing.

---

## 🌐 Live Links

- 🚀 **Frontend:** [GitHub Pages](https://geekykiran.github.io/gadgets-products-cart/)
- ⚙️ **Backend API:** [Render.com](https://json-server-products-tuej.onrender.com/products)

> 🔗 You can use the API endpoint directly in your frontend or tools like Postman to test the routes.

---

## 📂 Project Structure

```plaintext
json-server-products/
├── db.json           # Mock database file for json-server
├── server.js         # Entry point for custom json-server setup
├── package.json      # Dependencies and scripts
├── frontend/
│   ├── index.html    # HTML entry
│   ├── src/
│   │   ├── App.jsx           # Main React component
│   │   ├── components/       # Reusable components
│   │   └── assets/           # Images and styling
│   └── vite.config.js        # Vite configuration
```

---

## 🚀 Features

- ✅ RESTful fake API with `json-server`
- ✅ Full CRUD functionality (`GET`, `POST`)
- ✅ Responsive UI built with React and Vite
- ✅ Axios for seamless API requests
- ✅ Backend hosted on **Render**
- ✅ Frontend deployed on **GitHub Pages**
- ✅ Clean code and modular structure
- ✅ Ideal for rapid prototyping and frontend/backend practice

---

## 🔧 API Endpoints

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | `/products`        | Fetch all products   |
| GET    | `/products/:id`    | Fetch single product |
| POST   | `/products`        | Add a new product    |
| PUT    | `/products/:id`    | Update a product     |
| DELETE | `/products/:id`    | Delete a product     |

---

## 🛠 Tech Stack

**Frontend:**
- React
- Vite
- GitHub Pages (for deployment)
- Axios
- TailwindCSS (for styling)

**Backend:**
- JSON Server
- Node.js
- Render.com (for deployment)

---

## 📦 Installation (Local Development)

### 1. Clone the repo

```bash
git clone https://github.com/Geekykiran/gadgets-products-cart.git
cd gadgets-products-cart
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Start JSON Server locally

```bash
npm start
```
The backend will run on [http://localhost:8080](http://localhost:8080).

Or use the hosted backend: [https://json-server-products-tuej.onrender.com/products](https://json-server-products-tuej.onrender.com/products)

### 4. Start the frontend (inside `/frontend`)

```bash
cd frontend
npm install
npm run dev
```
The frontend will run on [http://localhost:5173](http://localhost:5173).

---

## 🙌 Author

**Saikiran N G**  
[LinkedIn](https://www.linkedin.com/in/saikiranng/)

---

## 📜 License

This project is licensed under the MIT License.

---

## 💬 Feedback

Feel free to open issues or submit pull requests if you find bugs or have suggestions!