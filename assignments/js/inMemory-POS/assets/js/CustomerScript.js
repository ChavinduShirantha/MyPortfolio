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
    deleteCustomer(cus_id);
    getAllCustomers();
})

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].cusId == id) {
            customerDB.splice(i, 1);
        }
    }
}
