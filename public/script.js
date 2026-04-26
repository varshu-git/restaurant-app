const menuItems = [
    { name: "Idli", price: 40, img: "images/idli.jpg" },
    { name: "Plain Dosa", price: 50, img: "images/dosa.jpg" },
    { name: "Masala Dosa", price: 80, img: "images/masala-dosa.jpg" },
    { name: "Onion Dosa", price: 60, img: "images/onion-dosa.jpg" },
    { name: "Chicken Biryani", price: 150, img: "images/chicken-biryani.jpg" },
    { name: "Paneer Biryani", price: 130, img: "images/paneer-biryani.jpg" },
    { name: "Veg Biryani", price: 120, img: "images/veg-biryani.jpg" },
    { name: "Paneer Tikka", price: 160, img: "images/paneer-tikka.jpg" },
    { name: "Chicken Tandoori", price: 200, img: "images/tandoori-chicken.jpg" },
    { name: "Chicken 65", price: 180, img: "images/chicken-65.jpg" },
    { name: "Grill Chicken", price: 220, img: "images/grill-chicken.jpg" },
    { name: "Soup", price: 70, img: "images/soup.jpg" }
];

let cart = [];

const menuDiv = document.getElementById("menu");

if(menuDiv){
    menuItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <img src="${item.img}">
            <h3>${item.name}</h3>
            <p class="price">₹${item.price}</p>
            <button onclick="addItem('${item.name}')">Add</button>
        `;

        menuDiv.appendChild(div);
    });
}

function addItem(item){
    cart.push(item.toLowerCase());
    alert(item + " added to cart!");
}

function generateBill(){
    fetch("http://localhost:3000/generate-bill", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ items: cart })
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("bill", JSON.stringify(data));
        window.location.href = "bill.html";
    });
}
