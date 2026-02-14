

function loadwomen(event) {
    event.preventDefault();

    const womenPhotos = [
        { url: "work/32ecedf2-a285-4112-a8aa-25b0434cb64b.png", name: "Robe de Soirée", price: "140 DT" },
        { url: "work/341822b0-0d39-482a-b741-d73271e07adb.jpg", name: "Tailleur Chic", price: "95 DT" },
        { url: "work/a82ac9da-24f6-4f27-abec-d09bf71cda0d.jpg", name: "Ensemble Été", price: "110 DT" },
         { url: "work/ac109938-1e4c-4c49-9af7-7993b3608913.jpg", name: "Ensemble Été", price: "110 DT" },
          { url: "work/c3248aea-226d-4d5b-9200-c58151941021.png", name: "Ensemble Été", price: "110 DT" },
           { url: "work/5f8d1bc2-b18d-4efc-95a0-dc9929edd97a.jpg", name: "Ensemble Été", price: "110 DT" },
            
    ];

    const myWhatsApp = "21622635118"; // <-- Hott ra9mek houni

    let newHTML = `
        <div class="women-page">
            <button class="back-btn" onclick="location.reload()">⬅ Back to Home</button>
            <h1 class="page-title">Women's Collection</h1>
            <div class="women-grid">
    `;

    womenPhotos.forEach((item, index) => {
        newHTML += `
            <div class="product-card">
                <div class="image-frame">
                     <img src="${item.url}" class="women-img" onclick="openZoom(this.src)" style="cursor:default;">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <div class="order-section">
                        <input type="tel" id="phone-${index}" placeholder="Votre Numéro" class="phone-input">
                        <button onclick="sendOrder('${item.name}', '${item.price}', ${index})" class="request-btn">Acheter</button>
                    </div>
                </div>
            </div>
        `;
    });

    newHTML += `</div></div>`;
    document.body.innerHTML = newHTML;
}

// Fonction bch tebaath el message
window.sendOrder = function(itemName, itemPrice, index) {
    const userPhone = document.getElementById(`phone-${index}`).value;
    const myWhatsApp = "21622635118"; // <-- Hott ra9mek houni zeda

    if (userPhone.trim() === "" || userPhone.length < 8) {
        alert("Amel mzeya hott noumrou mriguel!");
        return;
    }

    const message = encodeURIComponent(`Nouvelle Commande !\nProduit: ${itemName}\nPrix: ${itemPrice}\nNuméro du client: ${userPhone}`);
    const waLink = `https://wa.me/22635118?text=${message}`;
    
    window.open(waLink, '_blank');
};

function loadman(event) {
    event.preventDefault();

    const productImages = [
        { url: "man/dce60952-b6ba-4207-be42-28f130322194.jpg", name: "Costume Slim Fit", price: "240 DT" },
        { url: "man/357ad172-b365-4799-aba5-6de02ab15146.jpg", name: "Chemise Oxford", price: "85 DT" },
       
       
    ];

    const myWhatsApp = "21622635118"; 

    let newHTML = `
        <div class="product-page">
            <button class="back-btn" onclick="location.reload()">⬅ Back to Home</button>
            <h1 class="page-title">man Collection</h1>
            <div class="product-grid">
    `;

    productImages.forEach((item, index) => {
        newHTML += `
            <div class="product-card">
                <div class="image-frame">
                      <img src="${item.url}" class="women-img" onclick="openZoom(this.src)" style="cursor:default;">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <div class="order-section">
                        <input type="tel" id="phone-${index}" placeholder="Votre Numéro" class="phone-input">
                        <button onclick="sendOrder('${item.name}', '${item.price}', ${index})" class="request-btn">Acheter</button>
                    </div>
                </div>
            </div>
        `;
    });

    newHTML += `</div></div>`;
    document.body.innerHTML = newHTML;
}

// Fonction bch tebaath el message
window.sendOrder = function(itemName, itemPrice, index) {
    const userPhone = document.getElementById(`phone-${index}`).value;
    const myWhatsApp = "21622635118"; 

    if (userPhone.trim() === "" || userPhone.length < 8) {
        alert("Amel mzeya hott noumrou mriguel!");
        return;
    }

    const message = encodeURIComponent(`Nouvelle Commande !\nProduit: ${itemName}\nPrix: ${itemPrice}\nNuméro du client: ${userPhone}`);
    
    // Taslih el-link: lazem /216 bch yemchi mriguel
    const waLink = `https://wa.me/22635118?text=${message}`;
    
    window.open(waLink, '_blank');
};


function loadkids(event) {
    event.preventDefault();

    const kidsPhotos = [
        { url: "kids/fcea119b-3aa2-4a24-971e-e4408087ea99.jpg", name: "Ensemble Bébé", price: "65 DT" },
      
    ];

    const myWhatsApp = "21622635118"; 

    let newHTML = `
        <div class="kids-page">
            <button class="back-btn" onclick="location.reload()">⬅ Back to Home</button>
            <h1 class="page-title">Kids' Collection</h1>
            <div class="kids-grid">
    `;

    kidsPhotos.forEach((item, index) => {
        newHTML += `
            <div class="product-card">
                <div class="image-frame">
                     <img src="${item.url}" class="kids-img" onclick="openZoom(this.src)" style="cursor:default;">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <div class="order-section">
                        <input type="tel" id="phone-kids-${index}" placeholder="Votre Numéro" class="phone-input">
                        <button onclick="sendOrderKids('${item.name}', '${item.price}', ${index})" class="request-btn">Acheter</button>
                    </div>
                </div>
            </div>
        `;
    });

    newHTML += `</div></div>`;
    document.body.innerHTML = newHTML;

    // Background image pour Kids Collection
    document.body.style.backgroundImage = "url('kids/kids-bg.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}




// 1. Function bech n-khlqu el overlay ken mouch mawjoud
function createOverlayIfNeeded() {
    if (!document.getElementById('img-zoom-overlay')) {
        const overlayHTML = `
            <div id="img-zoom-overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:10000; justify-content:center; align-items:center; cursor:default;">
                <span id="close-zoom" onclick="closeZoom()" style="position:absolute; top:20px; right:35px; color:white; font-size:60px; font-weight:bold; cursor:pointer; user-select:none;">&times;</span>
                <img id="img-zoomed" src="" style="max-width:90%; max-height:90%; cursor:default; border: 2px solid white;">
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', overlayHTML);
    }
}

// 2. Function elli t-holl el zoom
window.openZoom = function(src) {
    createOverlayIfNeeded(); // N-thabtou el overlay hna
    const overlay = document.getElementById('img-zoom-overlay');
    const zoomedImg = document.getElementById('img-zoomed');
    
    zoomedImg.src = src;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

// 3. Function elli t-sakker el zoom
window.closeZoom = function() {
    const overlay = document.getElementById('img-zoom-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};









let angle = 0;
const image = document.querySelector(".welcome-image img");

setInterval(() => {
  angle += 2; // السرعة
  image.style.transform = `rotateY(${angle}deg)`;
}, 30);
