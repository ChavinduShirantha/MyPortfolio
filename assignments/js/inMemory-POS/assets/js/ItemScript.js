var itemDB=[];

$("#saveItem").click(function () {
    let code = $("#item-ID").val();
    let productName = $("#item-Name").val();
    let price = $("#item-Price").val();
    let qty = $("#item-Quantity").val();

    let ItemOb={
        iCode:code,
        iName:productName,
        iPrice:price,
        iQty:qty
    }

    itemDB.push(ItemOb);

});

$("#getAllItems").click(function () {
    $("#tblItem").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].iCode;
        let productName = itemDB[i].iName;
        let unitPrice = itemDB[i].iPrice;
        let qty = itemDB[i].iQty;

        let row=`<tr>
                        <td>${code}</td>
                        <td>${productName}</td>
                        <td>${unitPrice}</td>
                        <td>${qty}</td>
                        </tr>`;

        $("#tblItem").append(row);
    }
});