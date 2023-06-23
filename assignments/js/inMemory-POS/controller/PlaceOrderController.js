function generateOrderID() {
    if (orderDB.length > 0) {
        let lastId = orderDB[orderDB.length - 1].oId;
        let digit = lastId.substring(6);
        let number = parseInt(digit) + 1;
        return lastId.replace(digit, number);
    } else {
        return "ORD-001";
    }
}


$("#addToCart").click(function () {
    let code = $("#itemCodes").val();
    let productName = $("#item_Name").val();
    let price = $("#unitPrice").val();
    let qty = $("#orderedQty").val();
    let tot = price * qty;

    let newOrder = Object.assign({}, cartDetails);
    newOrder.code = code;
    newOrder.description = productName;
    newOrder.unitPrice = price;
    newOrder.qty = qty;
    newOrder.total = tot;

    cartDB.push(newOrder);

    getAllOrders();
    calcTotal(tot);
    countingDownQty(qty)
    calcSubTotal();
    updateItem();


});

$("#tblPlaceOrder").empty();

function getAllOrders() {
    $("#tblPlaceOrder").empty();

    for (let i = 0; i < cartDB.length; i++) {
        let orderCode = cartDB[i].code;
        let orderProductName = cartDB[i].description;
        let orderUnitPrice = cartDB[i].unitPrice;
        let orderQty = cartDB[i].qty;
        let orderTot = cartDB[i].total;

        let row = `<tr>
                        <td>${orderCode}</td>
                        <td>${orderProductName}</td>
                        <td>${orderUnitPrice}</td>
                        <td>${orderQty}</td>
                        <td>${orderTot}</td>
                        </tr>`;

        $("#tblPlaceOrder").append(row);
        bindOrderTrEvents();

    }
}


let totalOrder = 0;

function calcTotal(number) {
    totalOrder += number;
    $("#total").val(totalOrder);
}

$("#discount").keyup(function () {
    calcSubTotal();
});

function calcSubTotal() {

    let discount = $("#discount").val();

    let tot = totalOrder;

    if (discount === '0') {
        let val = $("#total").val();
        $("#subtotal").val(val);
    } else {
        let dis = parseInt(discount);
        let value = tot * dis / 100;
        let subTot = tot - value;
        $("#subtotal").val(subTot);
    }
}

$("#cash").keyup(function () {
    calcBalance();
});

function calcBalance() {
    let cash = $("#cash").val();
    let subTot = $("#subtotal").val();

    let val1 = parseInt(cash);
    let val2 = parseInt(subTot);

    let balance = val1 - val2;

    $("#balance").val(balance);
}

function countingDownQty(orderQty) {
    let minQty = parseInt(orderQty);
    let reduceQty = parseInt($("#qtyOnHand").val());
    reduceQty = reduceQty - minQty;
    $("#qtyOnHand").val(reduceQty);
}


function loadCustomers() {
    $("#customer_Ids").empty();

    $("#customer_Ids").append(`<option>-Select Customer-</option>`);
    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        $("#customer_Ids").append(`<option>${id}</option>`);
    }
}


function loadItems() {
    $("#itemCodes").empty();

    $("#itemCodes").append(`<option>-Select Item-</option>`);
    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        $("#itemCodes").append(`<option>${code}</option>`);
    }
}

$("#customer_Ids").click(function () {
    let val = $("#customer_Ids").val();

    for (let i = 0; i < customerDB.length; i++) {
        if (val == customerDB[i].id) {
            $("#customer_Name").val(customerDB[i].name)
            $("#customer_Address").val(customerDB[i].address)
            $("#customer_Salary").val(customerDB[i].salary)
        }
    }

});
$("#itemCodes").click(function () {
    let val = $("#itemCodes").val();

    for (let i = 0; i < itemDB.length; i++) {
        if (val == itemDB[i].code) {
            $("#item_Name").val(itemDB[i].description)
            $("#unitPrice").val(itemDB[i].unitPrice)
            $("#qtyOnHand").val(itemDB[i].qtyOnHand)
        }
    }
});

function bindOrderTrEvents() {
    $("#tblPlaceOrder>tr").click(function (eData) {
        $("#itemCodes").val($(this).children().eq(0).text());
        $("#item_Name").val($(this).children().eq(1).text());
        $("#unitPrice").val($(this).children().eq(2).text());
        $("#qtyOnHand").val($(this).children().eq(3).text());
        $("#total").val($(this).children().eq(4).text());
    });
}

$("#placeOrder").click(function () {
    placeOrder();
    pushOrderDetails();
    loadAllOrders();
    loadAllOrderDetails();
    clearAllOrderTextFieldsDetails();
    cartDB = [];
    $("#tblPlaceOrder").empty();
    $("#orderId").val(generateOrderID());

    alert("Order Placed Successfully !");
});

function loadAllOrders() {
    $("#tblOrders").empty();
    for (let i = 0; i < orderDB.length; i++) {
        let orderCode = orderDB[i].oId;
        let cusId = orderDB[i].cId;
        let oDate = orderDB[i].oDate;
        let subTot = orderDB[i].subTotal;
        let discount = orderDB[i].discount;

        let row = `<tr>
                        <td>${orderCode}</td>
                        <td>${cusId}</td>
                        <td>${oDate}</td>
                        <td>${subTot}</td>
                        <td>${discount}</td>
                        </tr>`;

        $("#tblOrders").append(row);

    }
}

function updateItem() {
    let code = $("#itemCodes").val();


    let item = searchItem(code);

    let itemName = $("#item_Name").val();
    let itemPrice = $("#unitPrice").val();
    let itemQty = $("#qtyOnHand").val();

    item.iName = itemName;
    item.iPrice = itemPrice;
    item.iQty = itemQty;

    item.description = itemName;
    item.qtyOnHand = itemQty;
    item.unitPrice = itemPrice;

    getAllItems();

}


function loadAllOrderDetails() {
    $("#tblOrderDetails").empty();

    for (let i = 0; i < orderDetailsDB.length; i++) {
        let orderCode = orderDetailsDB[i].orderId;
        let cusId = orderDetailsDB[i].cusId;
        let iCode = orderDetailsDB[i].itemId;
        let qty = orderDetailsDB[i].qty;
        let Tot = orderDetailsDB[i].total;

        let row = `<tr>
                        <td>${orderCode}</td>
                        <td>${cusId}</td>
                        <td>${iCode}</td>
                        <td>${qty}</td>
                        <td>${Tot}</td>
                        </tr>`;

        $("#tblOrderDetails").append(row);

    }
}

function pushOrderDetails() {
    for (let i = 0; i < $("#tblPlaceOrder tr").length; i++) {
        let orderId = $("#orderId").val();
        let cusId = $("#customer_Ids").val();
        let itemId = $("#tblPlaceOrder tr").children(':nth-child(1)')[i].innerText;
        let qty = $("#tblPlaceOrder tr").children(':nth-child(4)')[i].innerText;
        let total = $("#tblPlaceOrder tr").children(':nth-child(5)')[i].innerText;

        let newOrderDetails = Object.assign({}, orderDetails);
        newOrderDetails.orderId = orderId;
        newOrderDetails.cusId = cusId;
        newOrderDetails.itemId = itemId;
        newOrderDetails.qty = qty;
        newOrderDetails.total = total;

        orderDetailsDB.push(newOrderDetails);

    }
}

function placeOrder() {
    let oId = $("#orderId").val();
    let cusId = $("#customer_Ids").val();
    let oDate = $("#orderDate").val();
    let subTot = $("#subtotal").val();
    let discount = $("#discount").val();

    for (let i = 0; i < $("#tblPlaceOrder tr").length; i++) {
        let newOrders = Object.assign({}, order);
        newOrders.oId = oId;
        newOrders.cId = cusId;
        newOrders.oDate = oDate;
        newOrders.subTotal = subTot;
        newOrders.discount = discount;

        orderDB.push(newOrders);
    }

}


function clearAllOrderTextFieldsDetails() {
    $('#orderDate,#customer_Ids,#customer_Name,#customer_Address,#customer_Salary,#itemCodes,#item_Name,#unitPrice,#qtyOnHand,#orderedQty,#total,#subtotal,#discount,#cash,#balance').val("");
    $("#btnAddCart").attr('disabled', true);
    $("#btnPlaceOrder").attr('disabled', true);
}