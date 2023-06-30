
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
   
  const allCheckboxes = document.querySelectorAll('input[type=checkbox]');
  const allProduct = Array.from(document.querySelectorAll('.product-detail'));
  const checked = {};

  getChecked('high');
  getChecked('mid');
  getChecked('low');

  Array.prototype.forEach.call(allCheckboxes, function (el) {
    el.addEventListener('change', toggleCheckbox);
  });

  function toggleCheckbox(e) {
    getChecked(e.target.name);
    setVisibility();
  }

  function getChecked(name) {
    checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function
      (el) {
        return el.value;
      } );
  }
  
  function setVisibility() {
    allProduct.map(function (el) {
      const high = checked.high.length ? _.intersection(Array.from(el.classList),
      checked.high).length : true;
      const mid = checked.mid.length ? _.intersection(Array.from(el.classList),
      checked.mid).length : true;
      const low = checked.low.length ? _.intersection(Array.from(el.classList),
      checked.low).length : true;
      
      if (high && mid && low) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none'
      }
    });
  }
  
