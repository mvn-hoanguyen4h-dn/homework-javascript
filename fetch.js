var link = "https://reqres.in/api/users?page=1"

var $userList = document.querySelector(".user-list")
var $userData = document.querySelector(".user-data")

// Fetch
fetch(link)
  .then(response => response.json())
  .then(answer => {
    var userData = answer.data
    var html = ""
    userData.map(user => {
      html += `<li class="user-item">
      <img src=${user.avatar} alt="" class="user-img">
      <h3 class="user-name">${user.first_name} ${user.last_name}</h3>
      <p class="user-mail">${user.email}</p>
    </li>`

    })
    $userList.innerHTML = html
  })

// AJAX
function renderUserList() {
  $.ajax({
    url: "https://reqres.in/api/users?page=2",
    type: "GET",
    success: function (dataList) {
      var userList = dataList.data
      var content = ""

      userList.map(userItem => {
        content += `<li class="user-item">
      <img src=${userItem.avatar} alt="" class="user-img">
      <h3 class="user-name">${userItem.first_name} ${userItem.last_name}</h3>
      <p class="user-mail">${userItem.email}</p>
    </li>`
      })
      $userData.innerHTML = content
    }
  })
}
renderUserList()