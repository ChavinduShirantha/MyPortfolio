$('#HomeSection').attr('style', 'display : block !important');
$('#CustomerSection').attr('style', 'display : none !important');
$('#ItemSection').attr('style', 'display : none !important');
$('#PlaceOrderSection').attr('style', 'display : none !important');
$('#orderDetailsSection').attr('style', 'display : none !important');

$('#homeBtn').click(function () {
    $('#HomeSection').attr('style', 'display : block !important');
    $('#CustomerSection').attr('style', 'display : none !important');
    $('#ItemSection').attr('style', 'display : none !important');
    $('#PlaceOrderSection').attr('style', 'display : none !important');
    $('#orderDetailsSection').attr('style', 'display : none !important');
});

$('#customersBtn').click(function () {
    $('#HomeSection').attr('style', 'display : none !important');
    $('#CustomerSection').attr('style', 'display : block !important');
    $('#ItemSection').attr('style', 'display : none !important');
    $('#PlaceOrderSection').attr('style', 'display : none !important');
    $('#orderDetailsSection').attr('style', 'display : none !important');
});

$('#itemsBtn').click(function () {
    $('#HomeSection').attr('style', 'display : none !important');
    $('#CustomerSection').attr('style', 'display : none !important');
    $('#ItemSection').attr('style', 'display : block !important');
    $('#PlaceOrderSection').attr('style', 'display : none !important');
    $('#orderDetailsSection').attr('style', 'display : none !important');
});

$('#placeOrderBtn').click(function () {
    $('#HomeSection').attr('style', 'display : none !important');
    $('#CustomerSection').attr('style', 'display : none !important');
    $('#ItemSection').attr('style', 'display : none  !important');
    $('#PlaceOrderSection').attr('style', 'display : block !important');
    $('#orderDetailsSection').attr('style', 'display : none !important');
    loadCustomers();
    loadItems();
    $("#orderId").val(generateOrderID());

});

$('#OrderBtn').click(function () {
    $('#HomeSection').attr('style', 'display : none !important');
    $('#CustomerSection').attr('style', 'display : none !important');
    $('#ItemSection').attr('style', 'display : none !important');
    $('#PlaceOrderSection').attr('style', 'display : none !important');
    $('#orderDetailsSection').attr('style', 'display : block !important');
});