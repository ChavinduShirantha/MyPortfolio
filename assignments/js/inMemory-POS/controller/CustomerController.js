$("#saveCustomer").attr('disabled', true);

$("#saveCustomer").click(function () {
    let id = $("#customer-id").val();
    if (searchCustomer(id.trim()) == undefined) {
        let name = $("#customer-name").val();
        let address = $("#customer-address").val();
        let salary = $("#customer-salary").val();

        let newCustomer = Object.assign({}, customer);
        newCustomer.id = id;
        newCustomer.name = name;
        newCustomer.address = address;
        newCustomer.salary = salary;

        customerDB.push(newCustomer);

        clearSaveFormFields();
        getAllCustomers();

    } else {
        alert("Customer already exits.!");
        clearSaveFormFields();
    }

});

function clearSaveFormFields() {
    $("#customer-id,#customer-name,#customer-address,#customer-salary").val("");
    $("#customer-id").focus();
}

$("#getAllCustomers").click(function () {
    getAllCustomers();
});

function getAllCustomers() {
    $("#tblCustomer").empty();

    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let salary = customerDB[i].salary;

        let row = `<tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${address}</td>
                        <td>${salary}</td>
                        </tr>`;

        $("#tblCustomer").append(row);
        bindCustomerTrEvents();
    }

}

function bindCustomerTrEvents() {
    $("#tblCustomer>tr").click(function (eData) {
        $("#customerId").val($(this).children().eq(0).text());
        $("#customerName").val($(this).children().eq(1).text());
        $("#customerAddress").val($(this).children().eq(2).text());
        $("#customerSalary").val($(this).children().eq(3).text());
    });
}

$('#newCustomer').click(function (e) {
    $("#customer-id").focus();
});

$('#updateCustomer').click(function (e) {
    $("#customerId").focus();
})

$('#deleteCustomer').click(function () {
    let cus_id = $('#txtCusID').val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(cus_id);
        if (response) {
            alert("Customer Deleted");
            getAllCustomers();
        } else {
            alert("Customer Not Removed..!");
        }
    }
});

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            customerDB.splice(i, 1);
            return true;
        }
        return false;
    }
}

$('#updateCustomerBtn').click(function () {
    let cus_id = $('#customerId').val();
    updateCustomer(cus_id);
});

function clearUpdateFormFields() {
    $("#customerId,#customerName,#customerAddress,#customerSalary").val("");
    $("#customerId").focus();
}

$('#btnSearchCustomer').click(function () {
    let cus_id = $('#txtCusID').val();
    $("#tblCustomer").empty();

    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == cus_id) {
            let row = `<tr>
                        <td>${customerDB[i].id}</td>
                        <td>${customerDB[i].name}</td>
                        <td>${customerDB[i].address}</td>
                        <td>${customerDB[i].salary}</td>
                        </tr>`;

            $("#tblCustomer").append(row);
            bindCustomerTrEvents();

        }
    }

});

function searchCustomer(id) {
    return customerDB.find(function (customer) {
        return customer.id == id;
    });
}

function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);

            let customerName = $("#customerName").val();
            let customerAddress = $("#customerAddress").val();
            let customerSalary = $("#customerSalary").val();

            customer.name = customerName;
            customer.address = customerAddress;
            customer.salary = customerSalary;

            getAllCustomers();

            clearUpdateFormFields();
        }
    }

}



