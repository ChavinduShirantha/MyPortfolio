let regCusID = /^(C00-)[0-9]{3,4}$/;
let regCusName = /^[A-z ]{3,20}$/;
let regCusAddress = /^[A-z0-9/ ]{6,30}$/;
let regCusSalary = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidations = [];
let updateCustomerValidations = [];

customerValidations.push({
    reg: regCusID,
    field: $('#customer-id'),
    error: 'Customer ID Pattern is Wrong : C00-001'
});
customerValidations.push({
    reg: regCusName,
    field: $('#customer-name'),
    error: 'Customer Name Pattern is Wrong : A-z 5-20'
});
customerValidations.push({
    reg: regCusAddress,
    field: $('#customer-address'),
    error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});
customerValidations.push({
    reg: regCusSalary,
    field: $('#customer-salary'),
    error: 'Customer Salary Pattern is Wrong : 100 or 100.00'
});

function focusText(txtField) {
    txtField.focus();
}

function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

$("#customer-id,#customer-name,#customer-address,#customer-salary").keydown(function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#customer-id,#customer-name,#customer-address,#customer-salary").keyup(function (e) {
    checkValidity();
});

$('#customer-id').keydown(function (e) {
    if (e.key == "Enter" && check(regCusID, $("#customer-id"))) {
        $("#customer-name").focus();
    }
})
$('#customer-name').keydown(function (e) {
    if (e.key == "Enter" && check(regCusName, $("#customer-name"))) {
        focusText($("#customer-address"));
    }
})
$('#customer-address').keydown(function (e) {
    if (e.key == "Enter" && check(regCusAddress, $("#customer-address"))) {
        focusText($("#customer-salary"));
    }
})
$('#customer-salary').keydown(function (e) {
    if (e.key == "Enter" && check(regCusSalary, $("#customer-salary"))) {
        $("#saveCustomer").focus();
    }
})

function checkValidity() {
    let errorCount = 0;
    for (let validation of customerValidations) {
        if (check(validation.reg, validation.field)) {
            textSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setTextError(validation.field, validation.error);
        }
    }
    setButtonState(errorCount);
}

function setButtonState(value) {
    if (value > 0) {
        $("#saveCustomer").attr('disabled', true);
    } else {
        $("#saveCustomer").attr('disabled', false);
    }
}

function setTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('small').text(error);
    }
}

function textSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('small').text(error);
    }
}

function defaultText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('small').text(error);
}


updateCustomerValidations.push({
    reg: regCusID,
    field: $('#customerId'),
    error: 'Customer ID Pattern is Wrong : C00-001'
});
updateCustomerValidations.push({
    reg: regCusName,
    field: $('#customerName'),
    error: 'Customer Name Pattern is Wrong : A-z 5-20'
});
updateCustomerValidations.push({
    reg: regCusAddress,
    field: $('#customerAddress'),
    error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});
updateCustomerValidations.push({
    reg: regCusSalary,
    field: $('#customerSalary'),
    error: 'Customer Salary Pattern is Wrong : 100 or 100.00'
});

$("#customerId,#customerName,#customerAddress,#customerSalary").keydown(function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#customerId,#customerName,#customerAddress,#customerSalary").keyup(function (e) {
    checkUpdateCustomerValidity();
});

function checkUpdateCustomerValidity() {
    let errorCount = 0;
    for (let validation of updateCustomerValidations) {
        if (check(validation.reg, validation.field)) {
            textSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setTextError(validation.field, validation.error);
        }
    }
    setUpdateCustomerButtonState(errorCount);
}

function setUpdateCustomerButtonState(value) {
    if (value > 0) {
        $("#updateCustomerBtn").attr('disabled', true);
    } else {
        $("#updateCustomerBtn").attr('disabled', false);
    }
}

$("#customerId").keydown(function (e) {
    if (e.key == "Enter" && check(regCusID, $("#customerId"))) {
        focusText($("#customerName"));
    }
});

$("#customerName").keydown(function (e) {
    if (e.key == "Enter" && check(regCusName, $("#customerName"))) {
        focusText($("#customerAddress"));
    }
});

$("#customerAddress").keydown(function (e) {
    if (e.key == "Enter" && check(regCusAddress, $("#customerAddress"))) {
        focusText($("#customerSalary"));
    }
});

$("#customerSalary").keydown(function (e) {
    if (e.key == "Enter" && check(regCusSalary, $("#customerSalary"))) {
        $("#updateCustomerBtn").focus();
    }
});