const btn = document.getElementById('view')
btn.onclick = function () {
    alert('Where Imagination Meets Creativity')
}

const btnShop = document.getElementById('btn-btn')
btnShop.onclick = function () {
    alert("It's Sales Time")
}

const shop = document.getElementById('shop-now')
shop.onclick = function () {
    alert("Limited-time blowout sale")
}

// const log = document.getElementById('Log')
// Log.onclick = function () {
//     alert("")
// }

const Log = document.getElementById('Log');
    Log.onclick = function() {
        const name = prompt('Enter your full name.');
        document.getElementById('name').innerText = name;
    }