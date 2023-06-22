$("#saveItem").attr('disabled', true);
$("#saveItem").click(function () {
    let code = $("#item-ID").val();
    if (searchItem(code.trim()) == undefined) {
        let productName = $("#item-Name").val();
        let price = $("#item-Price").val();
        let qty = $("#item-Quantity").val();

        let newItem = Object.assign({}, item);
        newItem.code = code;
        newItem.description = productName;
        newItem.unitPrice = price;
        newItem.qtyOnHand = qty;

        itemDB.push(newItem);

        clearSaveItemFormFields();
        getAllItems();

    } else {
        alert("Item already exits.!");
        clearSaveItemFormFields();
    }

});
$("#getAllItems").click(function () {
    getAllItems();
});

function getAllItems() {
    $("#tblItem").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let productName = itemDB[i].description;
        let unitPrice = itemDB[i].unitPrice;
        let qty = itemDB[i].qtyOnHand;

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
    let code = $('#txtItemCode').val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteItem(code);
        if (response) {
            alert("Item Deleted");
            getAllItems();
        } else {
            alert("Item Not Removed..!");
        }
    }
});

function deleteItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            itemDB.splice(i, 1);
            return true;
        }
        return false;
    }
}

function clearSaveItemFormFields() {
    $("#item-ID,#item-Name,#item-Price,#item-Quantity").val("");
    $("#item-ID").focus();
}

$('#btnSearchItem').click(function () {
    let code = $('#txtItemCode').val();
    $("#tblItem").empty();

    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            let row = `<tr>
                        <td>${itemDB[i].code}</td>
                        <td>${itemDB[i].description}</td>
                        <td>${itemDB[i].unitPrice}</td>
                        <td>${itemDB[i].qtyOnHand}</td>
                        </tr>`;

            $("#tblItem").append(row);
            bindItemTrEvents();

        }
    }

});

function searchItem(code) {
    return itemDB.find(function (item) {
        return item.code == code;
    });
}

$('#btnUpdateItem').click(function () {
    let code = $('#itemID').val();
    updateItem(code);
});

function updateItem(code) {
    if (searchItem(code) == undefined) {
        alert("No such Item..please check the Code");
    } else {
        let consent = confirm("Do you really want to update this item.?");
        if (consent) {
            let item = searchItem(code);

            let itemName = $("#itemName").val();
            let itemPrice = $("#itemPrice").val();
            let itemQty = $("#itemQuantity").val();

            item.iName = itemName;
            item.iPrice = itemPrice;
            item.iQty = itemQty;

            item.description = itemName;
            item.qtyOnHand = itemQty;
            item.unitPrice = itemPrice;

            clearUpdateItemFormFields()
            getAllItems();
        }
    }

}