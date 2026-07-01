const express = require("express");

const app = express();

app.use(express.json());

// ===============================

app.get("/login", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Medical Shop | Login</title>

        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family:Arial, sans-serif;
            }

            body{
                background:#f4f7fc;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            }

            .login-box{
                width:100%;
                max-width:400px;
                background:white;
                padding:30px;
                border-radius:12px;
                box-shadow:0 5px 20px rgba(0,0,0,0.1);
            }

            h2{
                text-align:center;
                margin-bottom:20px;
                color:#0f766e;
            }

            input{
                width:100%;
                padding:12px;
                margin-bottom:15px;
                border:1px solid #ddd;
                border-radius:8px;
                font-size:16px;
                outline:none;
            }

            .btn{
                width:100%;
                padding:12px;
                background:#0f766e;
                color:white;
                border:none;
                border-radius:8px;
                font-size:18px;
                cursor:pointer;
            }

            .btn:hover{
                background:#1e293b;
            }

            .text{
                text-align:center;
                margin-top:15px;
                font-size:14px;
                color:#555;
            }

        </style>
    </head>

    <body>

        <div class="login-box">
            <h2>🔐 Login</h2>

            <form action="/login" method="POST">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>

                <button class="btn" type="submit">Login</button>
            </form>

            <div class="text">
                Don't have an account? Contact Admin
            </div>
        </div>

    </body>
    </html>
    `);
});
// ===============================
// CONTACT PAGE
// ===============================
app.get("/contact", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Medical Shop | Contact</title>

        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family:Arial, sans-serif;
            }

            body{
                background:#f4f7fc;
            }

            header{
                background:#0f766e;
                color:white;
                padding:20px;
                text-align:center;
                font-size:28px;
                font-weight:bold;
            }

            .container{
                width:90%;
                max-width:1000px;
                margin:60px auto;
                display:flex;
                flex-wrap:wrap;
                gap:40px;
                align-items:center;
                justify-content:space-between;
            }

            .left, .right{
                flex:1;
                min-width:300px;
            }

            .left h1{
                font-size:40px;
                color:#1e293b;
                margin-bottom:15px;
            }

            .left p{
                font-size:18px;
                color:#555;
                line-height:1.6;
                margin-bottom:20px;
            }

            .info{
                background:white;
                padding:20px;
                border-radius:12px;
                box-shadow:0 5px 15px rgba(0,0,0,0.1);
                margin-bottom:15px;
                transition:0.3s;
            }

            .info:hover{
                background:#0f766e;
                color:white;
                transform:translateY(-5px);
            }

            .right{
                background:white;
                padding:25px;
                border-radius:12px;
                box-shadow:0 5px 20px rgba(0,0,0,0.1);
            }

            .right h2{
                margin-bottom:20px;
                color:#1e293b;
                text-align:center;
            }

            input, textarea{
                width:100%;
                padding:12px;
                margin-bottom:15px;
                border:1px solid #ddd;
                border-radius:8px;
                outline:none;
                font-size:16px;
            }

            textarea{
                height:120px;
                resize:none;
            }

            .btn{
                width:100%;
                padding:12px;
                background:#0f766e;
                color:white;
                border:none;
                border-radius:8px;
                font-size:18px;
                cursor:pointer;
            }

            .btn:hover{
                background:#1e293b;
            }

            footer{
                text-align:center;
                padding:20px;
                background:#0f172a;
                color:white;
                margin-top:50px;
            }

            @media(max-width:768px){
                .container{
                    flex-direction:column;
                }
            }
        </style>

    </head>

    <body>

        <header>🏥 Medical Shop</header>

        <div class="container">

            <div class="left">
                <h1>Contact Us 📞</h1>
                <p>
                    If you have any questions about medicines,
                    orders or delivery — feel free to contact us anytime.
                </p>

                <div class="info">📍 Address: Talagaon Vikramjot Basti</div>
                <div class="info">📞 Phone: +91 8081597811</div>
                <div class="info">📧 Email: abhishekshukla2122@gmail.com</div>
                <div class="info">🕒 Working Hours: 24/7 Support</div>
            </div>

            <div class="right">
                <h2>Send Message</h2>

                <form>
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <input type="text" placeholder="Subject">
                    <textarea placeholder="Your Message"></textarea>
                    <button class="btn" type="submit">Send Message</button>
                </form>
            </div>

        </div>

        <footer>
            © 2026 Medical Shop | Developed by Abhishek Shukla
        </footer>

    </body>
    </html>
    `);
});
// ===============================
// MEDICINES PAGE
// ===============================
app.get("/medicines", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Medical Shop | Medicines</title>

        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family:Arial, sans-serif;
            }

            body{
                background:#f4f7fc;
            }

            header{
                background:#0f766e;
                color:white;
                padding:20px;
                text-align:center;
                font-size:28px;
                font-weight:bold;
            }

            .container{
                width:90%;
                max-width:1200px;
                margin:50px auto;
            }

            h2{
                text-align:center;
                margin-bottom:30px;
                color:#1e293b;
            }

            .grid{
                display:grid;
                grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
                gap:20px;
            }

            .card{
                background:white;
                padding:20px;
                border-radius:12px;
                box-shadow:0 5px 15px rgba(0,0,0,0.1);
                transition:0.3s;
            }

            .card:hover{
                transform:translateY(-8px);
                background:#0f766e;
                color:white;
            }

            .card h3{
                margin-bottom:10px;
            }

            .price{
                font-weight:bold;
                margin-top:10px;
            }

            .btn{
                display:inline-block;
                margin-top:10px;
                padding:8px 15px;
                background:#1e293b;
                color:white;
                text-decoration:none;
                border-radius:20px;
                font-size:14px;
            }

            .btn:hover{
                background:#000;
            }

            footer{
                text-align:center;
                padding:20px;
                background:#0f172a;
                color:white;
                margin-top:40px;
            }
        </style>

    </head>

    <body>

        <header>💊 Medical Shop</header>

        <div class="container">

            <h2>Our Available Medicines</h2>

            <div class="grid">

                <div class="card">
                    <h3>Paracetamol</h3>
                    <p>Fever & Pain Relief Medicine</p>
                    <div class="price">₹20</div>
                    <a class="btn" href="#">Buy Now</a>
                </div>

                <div class="card">
                    <h3>Amoxicillin</h3>
                    <p>Antibiotic Medicine</p>
                    <div class="price">₹80</div>
                    <a class="btn" href="#">Buy Now</a>
                </div>

                <div class="card">
                    <h3>Ibuprofen</h3>
                    <p>Pain & Inflammation Relief</p>
                    <div class="price">₹35</div>
                    <a class="btn" href="#">Buy Now</a>
                </div>

                <div class="card">
                    <h3>Cough Syrup</h3>
                    <p>Cold & Cough Relief</p>
                    <div class="price">₹60</div>
                    <a class="btn" href="#">Buy Now</a>
                </div>

                <div class="card">
                    <h3>Vitamin C Tablets</h3>
                    <p>Immunity Booster</p>
                    <div class="price">₹50</div>
                    <a class="btn" href="#">Buy Now</a>
                </div>

                <div class="card">
                    <h3>Antacid</h3>
                    <p>Acidity Relief Medicine</p>
                    <div class="price">₹25</div>
                    <a class="btn" href="#">Buy Now</a>
                </div>

            </div>

        </div>

        <footer>
            © 2026 Medical Shop | All Rights Reserved
        </footer>

    </body>
    </html>
    `);
});
// 📦 Products Data
const products = [
  { name: "Paracetamol", price: 20, category: "Medicine" },
  { name: "Cough Syrup", price: 80, category: "Medicine" },
  { name: "Vitamin C", price: 50, category: "Medicine" },
  { name: "Rice 5kg", price: 300, category: "Grocery" },
  { name: "Milk", price: 30, category: "Dairy" },
];

// 🏪 ONLY SHOP ROUTE
app.get("/shop", (req, res) => {

  const cards = products.map(p => `
    <div class="card">
      <h3>${p.name}</h3>
      <p>${p.category}</p>
      <div class="price">₹${p.price}</div>
      <button>Buy Now</button>
    </div>
  `).join("");

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Shop</title>

      <style>
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial;
        }

        body{
          background:#f1f5f9;
        }

        header{
          background:#0f766e;
          color:white;
          padding:20px;
          text-align:center;
          font-size:28px;
          font-weight:bold;
        }

        .container{
          width:90%;
          margin:40px auto;
        }

        h2{
          text-align:center;
          margin-bottom:20px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));
          gap:20px;
        }

        .card{
          background:white;
          padding:20px;
          border-radius:12px;
          box-shadow:0 5px 15px rgba(0,0,0,0.1);
          transition:0.3s;
          text-align:center;
        }

        .card:hover{
          transform:translateY(-8px);
          background:#0f766e;
          color:white;
        }

        .price{
          font-weight:bold;
          margin:10px 0;
        }

        button{
          padding:8px 14px;
          border:none;
          border-radius:20px;
          background:#1e293b;
          color:white;
          cursor:pointer;
        }

        button:hover{
          background:black;
        }

        footer{
          text-align:center;
          padding:15px;
          background:#0f172a;
          color:white;
          margin-top:40px;
        }

      </style>

    </head>

    <body>

      <header>🏪 My Shop</header>

      <div class="container">
        <h2>Products</h2>

        <div class="grid">
          ${cards}
        </div>
      </div>

      <footer>© 2026 Shop</footer>

    </body>
    </html>
  `);
});
// ===============================
app.get("/", (req, res) => {
    res.send(`
        <h1>🏥 Medical Shop Backend</h1>
        <h2>Server is Running Successfully ✅</h2>

        <p><a href="/about">About Page</a></p>
    `);
});

// ===============================
// ABOUT PAGE
// ===============================
app.get("/about", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Medical Shop | About</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{
background:#f4f7fc;
}

header{
background:#0f766e;
color:white;
padding:20px;
text-align:center;
font-size:30px;
font-weight:bold;
box-shadow:0 5px 15px rgba(0,0,0,.2);
}

.container{
width:90%;
max-width:1200px;
margin:60px auto;
display:flex;
align-items:center;
justify-content:space-between;
gap:50px;
flex-wrap:wrap;
}

.left{
flex:1;
}

.left img{
width:100%;
border-radius:15px;
box-shadow:0 10px 25px rgba(0,0,0,.2);
}

.right{
flex:1;
}

.right h4{
color:#0f766e;
font-size:18px;
margin-bottom:10px;
}

.right h1{
font-size:45px;
margin-bottom:20px;
color:#1e293b;
}

.right p{
font-size:18px;
line-height:30px;
color:#555;
margin-bottom:30px;
}

.cards{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:20px;
}

.card{
background:white;
padding:25px;
border-radius:12px;
text-align:center;
box-shadow:0 5px 20px rgba(0,0,0,.1);
transition:.3s;
}

.card:hover{
background:#0f766e;
color:white;
transform:translateY(-8px);
}

.card h3{
margin-bottom:10px;
}

.btn{
display:inline-block;
margin-top:35px;
padding:15px 35px;
background:#0f766e;
color:white;
text-decoration:none;
border-radius:30px;
font-size:18px;
}

.btn:hover{
background:#1e293b;
}

footer{
margin-top:60px;
padding:20px;
background:#0f172a;
color:white;
text-align:center;
}

@media(max-width:768px){

.container{
flex-direction:column;
}

.cards{
grid-template-columns:1fr;
}

.right h1{
font-size:34px;
}

}

</style>

</head>

<body>

<header>
🏥 Medical Shop
</header>

<section class="container">

<div class="left">

<img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900" alt="Medical Shop">

</div>

<div class="right">

<h4>ABOUT US</h4>

<h1>Your Trusted Medical Store</h1>

<p>

Welcome to Medical Shop.

We provide genuine medicines, healthcare products,
prescription medicines, wellness products and fast home delivery.

Our mission is to provide affordable healthcare
with trusted medicines and excellent customer support.

</p>

<div class="cards">

<div class="card">
<h3>💊 Genuine Medicines</h3>
<p>100% Original Products</p>
</div>

<div class="card">
<h3>🚚 Fast Delivery</h3>
<p>Same Day Delivery</p>
</div>

<div class="card">
<h3>👨‍⚕️ Expert Pharmacist</h3>
<p>Professional Advice</p>
</div>

<div class="card">
<h3>🕒 24/7 Support</h3>
<p>Always Ready to Help</p>
</div>

</div>

<a href="/" class="btn">Back Home</a>

</div>

</section>

<footer>

© 2026 Medical Shop | Developed by Abhishek Shukla

</footer>

</body>

</html>
`);
});

// ===============================
// 404 PAGE
// ===============================
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Page Not Found</h1>
        <a href="/">Go Home</a>
    `);
});

// ===============================
// SERVER
// ===============================
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running on http://localhost:${PORT}`);
});