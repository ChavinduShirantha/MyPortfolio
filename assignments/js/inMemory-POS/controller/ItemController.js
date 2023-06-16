$("#saveItem").click(function () {
    let code = $("#item-ID").val();
    if (searchItem(code.trim()) == undefined) {
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
        if (itemDB[i].iCode == code) {
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

let regItemCode = /^(I00-)[0-9]{3,4}$/;
let regItemName = /^[A-z ]{3,20}$/;
let regItemPrice = /^[0-9]{1,10}$/;
let regItemQtyOnHand = /^[0-9]{1,3}$/;

let itemValidations = [];
let updateItemValidations = [];

itemValidations.push({
    itemReg: regItemCode,
    itemField: $('#item-ID'),
    itemError: 'Item ID Pattern is Wrong : I00-001'
});
itemValidations.push({
    itemReg: regItemName,
    itemField: $('#item-Name'),
    itemError: 'Item Name Pattern is Wrong : A-z 5-20'
});
itemValidations.push({
    itemReg: regItemPrice,
    itemField: $('#item-Price'),
    itemError: 'Item Price Pattern is Wrong : 100 or 100.00,/'
});
itemValidations.push({
    itemReg: regItemQtyOnHand,
    itemField: $('#item-Quantity'),
    itemError: 'Item Quantity Pattern is Wrong : 100'
});

$("#item-ID,#item-Name,#item-Price,#item-Quantity").keydown(function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#item-ID,#item-Name,#item-Price,#item-Quantity").keyup(function (event) {
    checkItemValidity();
});

$("#item-ID").keydown(function (e) {
    if (e.key == "Enter" && itemCheck(regItemCode, $("#item-ID"))) {
        $("#item-Name").focus();
    } else {
        focusItemText($("#item-ID"));
    }
});

$("#item-Name").keydown(function (e) {
    if (e.key == "Enter" && itemCheck(regItemName, $("#item-Name"))) {
        focusItemText($("#item-Price"));
    }
});

$("#item-Price").keydown(function (e) {
    if (e.key == "Enter" && itemCheck(regItemPrice, $("#item-Price"))) {
        focusItemText($("#item-Quantity"));
    }
});

$("#item-Quantity").keydown(function (e) {
    if (e.key == "Enter" && itemCheck(regItemQtyOnHand, $("#item-Quantity"))) {
        $("#saveItem").focus();
    }
});

function checkItemValidity() {
    let itemErrorCount = 0;
    for (let itemValidation of itemValidations) {
        if (itemCheck(itemValidation.itemReg, itemValidation.itemField)) {
            textItemSuccess(itemValidation.itemField, "");
        } else {
            itemErrorCount = itemErrorCount + 1;
            setItemTextError(itemValidation.itemField, itemValidation.itemError);
        }
    }
    setItemButtonState(itemErrorCount);
}

function itemCheck(regex, txtField) {
    let itemInputValue = txtField.val();
    return regex.test(itemInputValue) ? true : false;
}

function setItemTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultItemText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('small').text(error);
    }
}

function textItemSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultItemText(txtField, "");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('small').text(error);
    }
}

function defaultItemText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('small').text(error);
}

function focusItemText(txtField) {
    txtField.focus();
}

function setItemButtonState(value) {
    if (value > 0) {
        $("#newItem").attr('disabled', true);
    } else {
        $("#newItem").attr('disabled', false);
    }
}

$('#btnSearchItem').click(function () {
    let code = $('#txtItemCode').val();
    $("#tblItem").empty();

    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].iCode == code) {
            let row = `<tr>
                        <td>${itemDB[i].iCode}</td>
                        <td>${itemDB[i].iName}</td>
                        <td>${itemDB[i].iPrice}</td>
                        <td>${itemDB[i].iQty}</td>
                        </tr>`;

            $("#tblItem").append(row);
            bindItemTrEvents();

        }
    }

});

function searchItem(code) {
    return itemDB.find(function (item) {
        return item.iCode == code;
    });
}
