var customerDB = [];
$("#saveCustomer").click(function () {
    let id = $("#customer-id").val();
    let name = $("#customer-name").val();
    let address = $("#customer-address").val();
    let salary = $("#customer-salary").val();

    let customerOb = {
        cusId: id,
        cusName: name,
        cusAddress: address,
        cusSalary: salary
    }

    customerDB.push(customerOb);

    getAllCustomers();

});

$("#getAllCustomers").click(function () {
    getAllCustomers();
});

function getAllCustomers() {
    $("#tblCustomer").empty();

    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].cusId;
        let name = customerDB[i].cusName;
        let address = customerDB[i].cusAddress;
        let salary = customerDB[i].cusSalary;

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


$('#deleteCustomer').click(function () {
    let cus_id = $('#txtCusID').val();

    let consent= confirm("Do you want to delete.?");
    if (consent) {
        let response= deleteCustomer(cus_id);
        if (response){
            alert("Customer Deleted");
            getAllCustomers();
        }else{
            alert("Customer Not Removed..!");
        }
    }
});

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].cusId == id) {
            customerDB.splice(i, 1);
            return true;
        }
        return false;
    }
}

$('#updateCustomerBtn').click(function () {
    let cus_id = $('#customerId').val();
    let cus_name = $('#customerName').val();
    let cus_address = $('#customerAddress').val();
    let cus_salary = $('#customerSalary').val();

    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].cusId == cus_id) {
            customerDB[i].cusName = cus_name;
            customerDB[i].cusAddress = cus_address;
            customerDB[i].cusSalary = cus_salary;
        }
    }
    getAllCustomers();
    bindCustomerTrEvents();

});

$('#btnSearchCustomer').click(function () {
    let cus_id = $('#txtCusID').val();
    $("#tblCustomer").empty();

    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].cusId == cus_id) {
            let row = `<tr>
                        <td>${customerDB[i].cusId}</td>
                        <td>${customerDB[i].cusName}</td>
                        <td>${customerDB[i].cusAddress}</td>
                        <td>${customerDB[i].cusSalary}</td>
                        </tr>`;

            $("#tblCustomer").append(row);
            bindCustomerTrEvents();

        }
    }

})
