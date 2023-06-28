function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
   
  let min_price = 49000;
  let max_price = 190000;
  $(document).ready(function() {
    showAllItems ();
  });

  $('#min-price').on("change mousemove", function() {
    min_price = parseInt($('#min-price').val());
    $('#min-price-txt').text(min_price + "VNĐ");
    showItemsFiltered();
  });

  $("#max-price").on("change mousemove", function() {
    max_price = parseInt($('#max-price').val());
    $('#max-price-txt').text(max_price + "VNĐ");
    showItemsFiltered();
  });

  let category_items = [
    {thumbnail: "https://media.discordapp.net/attachments/998765310687588423/1121306713384042597/image.png"}
  ]

  const productPrice = document.getElementsByClassName("product-price");
  const priceElements = box-product-price.getElementsByClassName("product-price");
  const price = [];

  for (let i =0;i<priceElements.length;i++) {
    const price = parseFloat(priceElements[i].textContent);
    price.push(price);
  }
  const filterPrice = price
  

  function showAllItems() {
    $("#display-items-div").empty();
    for (let i = 49000; i <category_items.length; i++) {
      let items_content = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-card" data-availiable-sizes="' +category_items[i] ['sizes'] + '"><b>' + category_items[i] ['title'] + '</b><br><img src"' + category_items[i] ['thumbnail'] + '" height="64" width="64" alt="san pham salad"><p>$' + category_items[i]['price'] + '</p></div>';
    }
  }

  function showItemsFiltered() {
    $("#display-items-div").empty();
    for (let i = 0; i < category_items.length; i++) {
      if (category_items[i]['price'] <= max_price && category_items[i]['Price']>= min_price) {
        let item_content = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-card" data-availiable-sizes="' +category_items[i] ['sizes'] + '"><b>' + category_items[i]['title'] + '</b><br><img src"' +category_items[i] ['thumbnail'] + '" height="64" width="64" alt="san pham salad"><p>$' +category_items[i][price] + '</p></div>';
        $("#display-items-div").append(item_content);
      }
    }
  }
