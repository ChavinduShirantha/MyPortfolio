
var customerDB=[];
$("#saveCustomer").click(function () {
    let id = $("#customer-id").val();
    let name = $("#customer-name").val();
    let address = $("#customer-address").val();
    let salary = $("#customer-salary").val();

    // let customer=[id,name,address,salary];

    let customerOb={
        cusId:id,
        cusName:name,
        cusAddress:address,
        cusSalary:salary
    }

    customerDB.push(customerOb);

    //let tbody = "<tr>" + "<td>" + id + "</td>" + "<td>" + name + "</td>" + "<td>" + address + "</td>" + "<td>" + salary + "</td>" + "</tr>";

    /*let tbody=`<tr>
                        <td>${customer[0]}</td>
                        <td>${customer[1]}</td>
                        <td>${customer[2]}</td>
                        <td>${customer[3]}</td>
                        </tr>`;

    $("#tblCustomer").append(tbody);*/

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

/*document.getElementById("saveCustomer").addEventListener("click", function () {

    //get typed values of input fields
    let id = document.getElementById("customer-id").value;
    let name = document.getElementById("customer-name").value;
    let address = document.getElementById("customer-address").value;
    let salary = document.getElementById("customer-salary").value;

    //let's print it
    console.log(id,name,address,salary);

    //catch the table body
    let tBody=document.getElementById("tblCustomer");

    //ok then, let's create the above row
    let tr= document.createElement("tr");

    //let's create another four columns
    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");

    //set input fields values to the above created columns
    col1.textContent=id;
    col2.textContent=name;
    col3.textContent=address;
    col4.textContent=salary;

    //set 4 columns to the previously created row
    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);

    //set the row to the table body
    tBody.appendChild(tr);
});*/
