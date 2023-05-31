document.getElementById('HomeSection').classList.add('active');
document.getElementById('CustomerSection').classList.remove('active');
document.getElementById('ItemSection').classList.remove('active');
document.getElementById('PlaceOrderSection').classList.remove('active');

document.getElementById("homeBtn").addEventListener("click", function () {
    document.getElementById('HomeSection').classList.add('active');
    document.getElementById('CustomerSection').classList.remove('active');
    document.getElementById('ItemSection').classList.remove('active');
    document.getElementById('PlaceOrderSection').classList.remove('active');
});
document.getElementById("itemsBtn").addEventListener("click", function () {
    document.getElementById('ItemSection').classList.add('active');
    document.getElementById('HomeSection').classList.remove('active');
    document.getElementById('CustomerSection').classList.remove('active');
    document.getElementById('PlaceOrderSection').classList.remove('active');
});

document.getElementById("placeOrderBtn").addEventListener("click", function () {
    document.getElementById('PlaceOrderSection').classList.add('active');
    document.getElementById('HomeSection').classList.remove('active');
    document.getElementById('CustomerSection').classList.remove('active');
    document.getElementById('ItemSection').classList.remove('active');
});

document.getElementById("customersBtn").addEventListener("click", function () {
    document.getElementById('CustomerSection').classList.add('active');
    document.getElementById('HomeSection').classList.remove('active');
    document.getElementById('PlaceOrderSection').classList.remove('active');
    document.getElementById('ItemSection').classList.remove('active');
});
