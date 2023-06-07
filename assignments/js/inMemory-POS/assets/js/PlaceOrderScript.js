$("#addToCart").click(function () {
    let code = $("#itemCode").val();
    let productName = $("#item_Name").val();
    let price = $("#unitPrice").val();
    let qty = $("#orderedQty").val();
    let tot = $("#total").val();

    let tbody = "<tr>" + "<td>" + code + "</td>" + "<td>" + productName + "</td>" + "<td>" + price + "</td>" + "<td>" + qty + "</td>" +  "<td>" + tot + "</td>" +"</tr>";

    $("#tblPlaceOrder").append(tbody);

});
/*document.getElementById("addToCart").addEventListener("click", function () {

    //get typed values of input fields
    let code = document.getElementById("itemCode").value;
    let productName = document.getElementById("item_Name").value;
    let price = document.getElementById("unitPrice").value;
    let qty = document.getElementById("orderedQty").value;
    let tot = document.getElementById("total").value;

    //let's print it
    console.log(code,productName,price,qty,tot);

    //catch the table body
    let tBody=document.getElementById("tblPlaceOrder");

    //ok then, let's create the above row
    let tr= document.createElement("tr");

    //let's create another four columns
    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");
    let col5= document.createElement("td");

    //set input fields values to the above created columns
    col1.textContent=code;
    col2.textContent=productName;
    col3.textContent=price;
    col4.textContent=qty;
    col5.textContent=tot;

    //set 4 columns to the previously created row
    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);
    tr.appendChild(col5);

    //set the row to the table body
    tBody.appendChild(tr);
});*/
