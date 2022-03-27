var products = [
  {
    id: "1",
    name: "Beat Headphones",
    price: "999",
    quantity: 1,
    image: "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Wireless-Bluetooth-Headphones-2.jpg",
  },
  {
    id: "2",
    name: "I Phone 8",
    price: "899",
    quantity: 1,
    image: "https://phuckhangmobile.com/file/iphone-8-do-900-19474f.jpg",
  },
  {
    id: "3",
    name: "I Phone X",
    price: "1000",
    quantity: 1,
    image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
  },
  {
    id: "4",
    name: "I Phone 11",
    price: "1100",
    quantity: 1,
    image: "https://cdn.hoanghamobile.com/i/preview/Uploads/2021/02/03/iphone-11-64gb.png",
  },
  {
    id: "5",
    name: "Asus Vivobook",
    price: "890",
    quantity: 1,
    image: "https://cdn.tgdd.vn/Products/Images/44/260297/asus-vivobook-a515ea-oled-i5-1135g7-8gb-600x600.jpg",
  },
  {
    id: "6",
    name: "Zenbook",
    price: "1050",
    quantity: 1,
    image: "https://cdn.nguyenkimmall.com/images/detailed/769/10050736-laptop-asus-zenbook-ux325ea-kg538w-i5-1135g7-1.jpg",
  },
  {
    id: "7",
    name: "Macbook Pro",
    price: "2360",
    quantity: 1,
    image: "https://cdn.tgdd.vn/Products/Images/44/239560/macbook-pro-m1-2020-silver-600x600.jpg",
  },
  {
    id: "8",
    name: "HP Laptop",
    price: "950",
    quantity: 1,
    image: "https://phucanhcdn.com/media/product/44143_pavilion_15_eg_gold_ha4s1.jpg",
  },
  {
    id: "9",
    name: "Sam Sung Note 10 Plus",
    price: "760",
    quantity: 1,
    image: "https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-note-10-plus-cty-didongviet.jpg",
  },

]
// render products
function renderProducts() {
  var $productList = document.querySelector(".product-list")

  var content = ''

  for (var i = 0; i < products.length; i++) {
    content += '<li class="product-item"><img src=' + products[i].image + ' alt =' + products[i].name + ' class="product-img" ><h3 class="product-name">' + products[i].name + '</h3><p class="product-price">$' + products[i].price + '</p><button class="product-btn" >add to cart</button></li >'
  }

  $productList.innerHTML = content
}

renderProducts()

var $$cartBtns = document.querySelectorAll(".product-btn")

var $tbody = document.querySelector("tbody")


for (var i = 0; i < $$cartBtns.length; i++) {
  $$cartBtns[i].addEventListener("click", function () {
    cartCounts()
  })

  $$cartBtns[i].addEventListener("click", function (e) {
    var parentEl = e.target.parentElement

    parentEl.setAttribute("id", random())
    console.log(parentEl.children[0].src)

    var product = {
      id: random(),
      image: parentEl.children[0].src,
      name: parentEl.children[1].innerText,
      price: parentEl.children[2].innerText,
      quantity: 1,
    }
    console.log(product.id)

    addToCart(product)
  })
}

function random() {
  var result = Math.floor(Math.random() * 10000)
  return result
}


var products = []

function addToCart(item) {
  let cartItems = JSON.parse(localStorage.getItem("cartList"))

  if (cartItems === null) {
    products.push(item)
    localStorage.setItem("cartList", JSON.stringify(products))
  } else {
    cartItems.forEach(function (value) {
      if (item.name == value.name) {
        item.quantity = value.quantity += 1
      } else {
        products.push(value)
        value.quantity = 1
      }
    })
    products.push(item)
    localStorage.setItem("cartList", JSON.stringify(products))
  }
}

var $tbody = document.querySelector("#tbody")

var cartItems = JSON.parse(localStorage.getItem("cartList"))
// cart count

var $cartCount = document.querySelector(".cart-count")

function onLoadCartNumber() {
  var productNumbers = localStorage.getItem("cartQuantities")

  if (productNumbers) {
    $cartCount.innerText = productNumbers
  }
}

function cartCounts() {
  var productNumbers = localStorage.getItem("cartQuantities")
  productNumbers = parseInt(productNumbers)

  if (productNumbers) {
    localStorage.setItem("cartQuantities", productNumbers + 1)
    $cartCount.innerText = productNumbers + 1
  } else {
    localStorage.setItem("cartQuantities", 1)
    $cartCount.innerText = 1
  }
}

onLoadCartNumber()
