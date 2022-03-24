var $tbody = document.querySelector("#tbody")

function displayCartList() {
  var cartItems = JSON.parse(localStorage.getItem("cartList"))
  console.log(cartItems)

  var html = ''
  for (var j = 0; j < cartItems.length; j++) {
    html += '<tr><td>' + cartItems[j].id + '</td><td class="item-data"><img src=' + cartItems[j].image + ' alt=' + cartItems[j].name + ' class="item-img"/><div class="item-content"><h5 class="item-name">' + cartItems[j].name + '</h5><p class="item-price">' + cartItems[j].price + '</p></div></td><td class="item-quantity">' + cartItems[j].quantity + '</td><td class="item-cash"><i class="fa-solid fa-trash" onClick="removeItem(this)"></i></td></tr>'
  }
  $tbody.innerHTML = html
}

function removeItem($this) {
  var ElParent = $this.closest("tr")
  $tbody.removeChild(ElParent)
}

displayCartList()