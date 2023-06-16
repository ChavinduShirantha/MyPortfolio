$("#addToCart").click(function () {
    let code = $("#itemCodes").val();
    let productName = $("#item_Name").val();
    let price = $("#unitPrice").val();
    let qty = $("#orderedQty").val();
    let tot = $("#total").val();

    let OrderOb = {
        oCode: code,
        oName: productName,
        oPrice: price,
        oQty: qty,
        oTot: tot
    }

    orderDB.push(OrderOb);

    $("#tblPlaceOrder").empty();

    for (let i = 0; i < orderDB.length; i++) {
        let orderCode = orderDB[i].oCode;
        let orderProductName = orderDB[i].oName;
        let orderUnitPrice = orderDB[i].oPrice;
        let orderQty = orderDB[i].oQty;
        let orderTot = orderDB[i].oTot;

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
});

function loadCustomers() {
    $("#customer_Ids").empty();

    $("#customer_Ids").append(`<option>-Select Customer-</option>`);
    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].cusId;
        $("#customer_Ids").append(`<option>${id}</option>`);
    }
}


function loadItems() {
    $("#itemCodes").empty();

    $("#itemCodes").append(`<option>-Select Item-</option>`);
    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].iCode;
        $("#itemCodes").append(`<option>${code}</option>`);
    }
}

$("#customer_Ids").click(function () {
    let val = $("#customer_Ids").val();

    for (let i = 0; i < customerDB.length; i++) {
        if (val == customerDB[i].cusId) {
            $("#customer_Name").val(customerDB[i].cusName)
            $("#customer_Address").val(customerDB[i].cusAddress)
            $("#customer_Salary").val(customerDB[i].cusSalary)
        }
    }

});
$("#itemCodes").click(function () {
    let val = $("#itemCodes").val();

    for (let i = 0; i < itemDB.length; i++) {
        if (val == itemDB[i].iCode) {
            $("#item_Name").val(itemDB[i].iName)
            $("#unitPrice").val(itemDB[i].iPrice)
            $("#qtyOnHand").val(itemDB[i].iQty)
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
