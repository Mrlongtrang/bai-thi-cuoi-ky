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

  const product =[
    {Name:"San Pham 1", Price:"145,000",},
    {Name:"san Pham 2", price:"99,000"},
    {Name:"san Pham 3", price:"50,000"},
    {Name:"san Pham 4", price:"120,000"},
    {Name:"san Pham 5", price:"125,000"},
    {Name:"san Pham 6", price:"69,000"},
    {Name:"san Pham 7", price:"150,000"},
    {Name:"san Pham 8", price:"67,000"},
    {Name:"san Pham 9", price:"55,000"},
    {Name:"san Pham 10", price:"78,000"},
    {Name:"san Pham 11", price:"100,000"},
    {Name:"san Pham 12", price:"88,888"},
  ]
  
  let min_price = 49000;
  let max_price = 190000;
  $(document).ready(function() {
    showAllItems ();
  });

  $('min-price').on("change mousemove", function() {
    min_price = parseInt($('#min-price').val());
    $('#min-price-txt').text('$' + min_price);
    showItemsFiltered();
  })
