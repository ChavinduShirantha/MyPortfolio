const form = document.getElementById('CustomerSaveForm');
const table = document.getElementById('tblCustomer');
const tbody = table.querySelector('tbody');
document.getElementById("saveCustomer").addEventListener("click", function () {

    // Get user input values
    const id = document.getElementById('customer-id').value;
    const name = document.getElementById('customer-name').value;
    const address = document.getElementById('customer-address').value;
    const salary = document.getElementById('customer-salary').value;

    // Create table row
    const row = document.createElement('tr');
    const idCell = document.createElement('th');
    const nameCell = document.createElement('td');
    const addressCell = document.createElement('td');
    const salaryCell = document.createElement('td');

    idCell.textContent = id;
    nameCell.textContent = name;
    addressCell.textContent = address;
    salaryCell.textContent = salary;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(addressCell);
    row.appendChild(salaryCell);

    tbody.appendChild(row);

    document.getElementById('customer-id').value = '';
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-address').value = '';
    document.getElementById('customer-salary').value = '';

    alert('Customer Saved Successfully !.. ');
});


document.getElementById("updateCustomerBtn").addEventListener("click", function () {

    const id1 = document.getElementById('customerId').value;
    const name1 = document.getElementById('customerName').value;
    const address1 = document.getElementById('customerAddress').value;
    const salary1 = document.getElementById('customerSalary').value;

    const row = document.createElement('tr');
    const idCell = document.createElement('th');
    const nameCell = document.createElement('td');
    const addressCell = document.createElement('td');
    const salaryCell = document.createElement('td');

    idCell.textContent = id1;
    nameCell.textContent = name1;
    addressCell.textContent = address1;
    salaryCell.textContent = salary1;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(addressCell);
    row.appendChild(salaryCell);

    tbody.appendChild(row);

        document.getElementById('customerId').value = '';
        document.getElementById('customerName').value = '';
        document.getElementById('customerAddress').value = '';
        document.getElementById('customerSalary').value = '';

    alert('Customer Updated Successfully !.. ');
});
