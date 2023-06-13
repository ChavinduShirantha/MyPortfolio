var orderDB=[];

$("#addToCart").click(function () {
    let code = $("#itemCode").val();
    let productName = $("#item_Name").val();
    let price = $("#unitPrice").val();
    let qty = $("#orderedQty").val();
    let tot = $("#total").val();

    let OrderOb={
        oCode:code,
        oName:productName,
        oPrice:price,
        oQty:qty,
        oTot:tot
    }

    orderDB.push(OrderOb);

    $("#tblPlaceOrder").empty();

    for (let i = 0; i < orderDB.length; i++) {
        let orderCode = orderDB[i].oCode;
        let orderProductName = orderDB[i].oName;
        let orderUnitPrice = orderDB[i].oPrice;
        let orderQty = orderDB[i].oQty;
        let orderTot = orderDB[i].oTot;

        let row=`<tr>
                        <td>${orderCode}</td>
                        <td>${orderProductName}</td>
                        <td>${orderUnitPrice}</td>
                        <td>${orderQty}</td>
                        <td>${orderTot}</td>
                        </tr>`;

        $("#tblPlaceOrder").append(row);
    }
});

function loadCustomers() {
    $("#customer_Ids").empty();

    $("#customer_Ids").append(`<option>-Select Customer-</option>`);
    for (let i = 0; i < customerDB.length; i++) {
        let id=customerDB[i].cusId;
        $("#customer_Ids").append(`<option>${id}</option>`);
    }
}


function loadItems() {
    $("#itemCodes").empty();

    $("#itemCodes").append(`<option>-Select Customer-</option>`);
    for (let i = 0; i < itemDB.length; i++) {
        let code=itemDB[i].iCode;
        $("#itemCodes").append(`<option>${code}</option>`);
    }
}
$("#customer_Ids").click(function () {

});
$("#itemCodes").click(function () {

});
