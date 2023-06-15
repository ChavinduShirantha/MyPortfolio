var itemDB = [];

$("#saveItem").click(function () {
    let code = $("#item-ID").val();
    let productName = $("#item-Name").val();
    let price = $("#item-Price").val();
    let qty = $("#item-Quantity").val();

    let ItemOb = {
        iCode: code,
        iName: productName,
        iPrice: price,
        iQty: qty
    }

    itemDB.push(ItemOb);
    getAllItems();
});

$("#getAllItems").click(function () {
    getAllItems();
});

function getAllItems() {
    $("#tblItem").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].iCode;
        let productName = itemDB[i].iName;
        let unitPrice = itemDB[i].iPrice;
        let qty = itemDB[i].iQty;

        let row = `<tr>
                        <td>${code}</td>
                        <td>${productName}</td>
                        <td>${unitPrice}</td>
                        <td>${qty}</td>
                        </tr>`;

        $("#tblItem").append(row);
        bindItemTrEvents();

    }
}

function bindItemTrEvents() {
    $("#tblItem>tr").click(function (eData) {
        $("#itemID").val($(this).children().eq(0).text());
        $("#itemName").val($(this).children().eq(1).text());
        $("#itemPrice").val($(this).children().eq(2).text());
        $("#itemQuantity").val($(this).children().eq(3).text());
    });
}

$('#deleteItem').click(function () {
    let item_code = $('#txtItemCode').val();
    deleteItem(item_code);
    getAllItems();
});

function deleteItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].iCode == id) {
            itemDB.splice(i, 1);
        }
    }
}