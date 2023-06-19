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

function clearUpdateItemFormFields() {
    $("#itemID,#itemName,#itemPrice,#itemQuantity").val("");
    $("#itemID").focus();
}

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
        $("#saveItem").attr('disabled', true);
    } else {
        $("#saveItem").attr('disabled', false);
    }
}


updateItemValidations.push({
    itemReg: regItemCode,
    itemField: $('#itemID'),
    itemError: 'Item ID Pattern is Wrong : I00-001'
});
updateItemValidations.push({
    itemReg: regItemName,
    itemField: $('#itemName'),
    itemError: 'Item Name Pattern is Wrong : A-z 5-20'
});
updateItemValidations.push({
    itemReg: regItemPrice,
    itemField: $('#itemPrice'),
    itemError: 'Item Price Pattern is Wrong : 100 or 100.00,/'
});
updateItemValidations.push({
    itemReg: regItemQtyOnHand,
    itemField: $('#itemQuantity'),
    itemError: 'Item Quantity Pattern is Wrong : 100'
});

$("#itemID,#itemName,#itemPrice,#itemQuantity").keydown(function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#itemID,#itemName,#itemPrice,#itemQuantity").keyup(function (e) {
    checkUpdateItemValidity();
});
$("#itemID").keydown(function (e) {
    if (e.key == "Enter" && itemCheck(regItemCode, $("#itemID"))) {
        focusItemText($("#itemName"));
    }
});

$("#itemName").keydown(function (e) {
    if (e.key == "Enter" && itemCheck(regItemName, $("#itemName"))) {
        focusItemText($("#itemPrice"));
    }
});

$("#itemPrice").keydown(function (e) {
    if (e.key == "Enter" && itemCheck(regItemPrice, $("#itemPrice"))) {
        focusItemText($("#itemQuantity"));
    }
});

$("#itemQuantity").keydown(function (e) {
    if (e.key == "Enter" && itemCheck(regItemQtyOnHand, $("#itemQuantity"))) {
        $("#btnUpdateItem").focus();
    }
});

function checkUpdateItemValidity() {
    let itemErrorCount = 0;
    for (let itemValidation of updateItemValidations) {
        if (itemCheck(itemValidation.itemReg, itemValidation.itemField)) {
            textItemSuccess(itemValidation.itemField, "");
        } else {
            itemErrorCount = itemErrorCount + 1;
            setItemTextError(itemValidation.itemField, itemValidation.itemError);
        }
    }
    setUpdateItemButtonState(itemErrorCount);
}

function setUpdateItemButtonState(value) {
    if (value > 0) {
        $("#btnUpdateItem").attr('disabled', true);
    } else {
        $("#btnUpdateItem").attr('disabled', false);
    }
}

