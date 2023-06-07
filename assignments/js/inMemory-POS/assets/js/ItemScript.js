$("#saveItem").click(function () {
    let code = $("#item-ID").val();
    let productName = $("#item-Name").val();
    let price = $("#item-Price").val();
    let qty = $("#item-Quantity").val();

    let tbody = "<tr>" + "<td>" + code + "</td>" + "<td>" + productName + "</td>" + "<td>" + price + "</td>" + "<td>" + qty + "</td>" + "</tr>";

    $("#tblItem").append(tbody);

});
/*document.getElementById("saveItem").addEventListener("click", function () {

    //get typed values of input fields
    let code = document.getElementById("item-ID").value;
    let productName = document.getElementById("item-Name").value;
    let price = document.getElementById("item-Price").value;
    let qty = document.getElementById("item-Quantity").value;

    //let's print it
    console.log(code,productName,price,qty);

    //catch the table body
    let tBody=document.getElementById("tblItem");

    //ok then, let's create the above row
    let tr= document.createElement("tr");

    //let's create another four columns
    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");

    //set input fields values to the above created columns
    col1.textContent=code;
    col2.textContent=productName;
    col3.textContent=price;
    col4.textContent=qty;

    //set 4 columns to the previously created row
    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);

    //set the row to the table body
    tBody.appendChild(tr);
});*/
