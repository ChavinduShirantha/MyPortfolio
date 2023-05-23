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
