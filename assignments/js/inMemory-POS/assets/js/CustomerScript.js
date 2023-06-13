
var customerDB=[];
$("#saveCustomer").click(function () {
    let id = $("#customer-id").val();
    let name = $("#customer-name").val();
    let address = $("#customer-address").val();
    let salary = $("#customer-salary").val();

    let customerOb={
        cusId:id,
        cusName:name,
        cusAddress:address,
        cusSalary:salary
    }

    customerDB.push(customerOb);
});

$("#getAllCustomers").click(function () {
    $("#tblCustomer").empty();

    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].cusId;
        let name = customerDB[i].cusName;
        let address = customerDB[i].cusAddress;
        let salary = customerDB[i].cusSalary;

        let row=`<tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${address}</td>
                        <td>${salary}</td>
                        </tr>`;

        $("#tblCustomer").append(row);
    }
});