createAdmin();
var clickLogin = document.getElementById("button_login");
var userModal = document.getElementById("user_modal");
var loginModal = document.getElementById("login_modal");
var loginWrapper = document.getElementById("login_wrapper");
var clickSignUp = document.getElementById("sign_up_button");
var signUpModal = document.getElementById("sign_up_modal");
var signUpWrapper = document.getElementById("sign_up_wrapper");
var clickProduct = document.querySelector(".product");
var clickCloseProductInfo = document.querySelector(".close_detail");

//phước
// function showMenu(){
//   var menuList = ['G-SHOCK','ROLEX','VACHERON','OMEGA'];
//   var ul = document.querySelector('.bot_header_menu');//gán ul bằng phần tử đầu tiên có class bot_header_menu
//   var li='<li><a href="index.html">TRANG CHỦ</a></li>';
//   for(var i=0;i<menuList.length;i++){
//     li += '<li><a onclick="showProductsByBrand(\'' + menuList[i] + '\')">' + menuList[i] + '</a></li>';
//     ul.innerHTML= li;
//   }
// }
function myFunctionUser(){
  let x = document.querySelector('#header .bot_header .bot_header_menu2');
      if(x.style.display == 'none') {
            x.style.display = 'block';
      } else {
            x.style.display = 'none';
      }
}
function TimeNow() {
  let time_now = document.getElementById('time-now');
  let date = new Date();
  let date_hour = date.getHours();
  if(date_hour < 10) {
        date_hour = date_hour.toString();
        date_hour = 0 + date_hour
  } else {
        date_hour = date_hour.toString();
  }
  let date_minute = date.getMinutes();
  if(date_minute < 10) {
        date_minute = date_minute.toString();
        date_minute = 0 + date_minute
  } else {
        date_minute = date_minute.toString();
  }
  let date_second = date.getSeconds();
  if(date_second < 10) {
        date_second = date_second.toString();
        date_second = 0 + date_second
  } else {
        date_second = date_second.toString();
  }
  let timeNowTemp = `${date_hour}:${date_minute}:${date_second}`;
  time_now.innerHTML = timeNowTemp;
}
function showTimeNow() {
  setInterval(TimeNow,1000);
}
function showTimeNowCart() {
  setInterval(TimeNow,1000);
}

function showform() {
  userModal.style.display = "block";
}
function showlogin() {
  signUpModal.style.display = "none";
  signUpWrapper.style.display = "none";
  loginModal.style.display = "block";
  loginWrapper.style.display = "block";
}
function showsignup() {
  loginModal.style.display = "none";
  loginWrapper.style.display = "none";
  signUpModal.style.display = "block";
  signUpWrapper.style.display = "block";
}
function closeUser() {
  userModal.style.display = "none";
}
function closesignup() {
  signUpModal.style.display = "none";
  signUpWrapper.style.display = "none";
}
function closelogin() {
  loginModal.style.display = "none";
  loginWrapper.style.display = "none";
}
//phuoc
function createProduct() {
  if (localStorage.getItem("product") == null) {
    var productArray = [
      {productID: 100,img: "IMG/100.jpg",name: "Nam GA-700-1ADR",price: 2114000,brand: "G-SHOCK",type:0},
      {productID: 101,img: "IMG/101.jpg",name: "Nam GA-800-1ADR",price: 990000,brand: "G-SHOCK",type:0},
      {productID: 102,img: "IMG/103.jpg",name: "Nam GA-2100GB-1ADR ",price: 3533000,brand: "G-SHOCK",type:0},
      {productID: 103,img: "IMG/104.jpg",name: "Nam GA-2100SB-1ADR ",price: 3316000,brand: "G-SHOCK",type:0},
      {productID: 104,img: "IMG/105.jpg",name: "Forgotten Future Nam DW-5600FF-8DR",price: 2764000,brand: "G-SHOCK",type:0},
      {productID: 105,img: "IMG/106.jpg",name: "Forgotten Future Nam GA-700FF-8ADR  ",price: 3178000,brand: "G-SHOCK",type:0},
      {productID: 106,img: "IMG/107.jpg",name: "Forgotten Future  Nam GA-2200FF-8ADR",price: 4224000,brand: "G-SHOCK",type:0},
      {productID: 108,img: "IMG/108.jpg",name: "Nữ GMA-S2100BA-4ADR",price: 2902000,brand: "G-SHOCK",type:0},
      {productID: 109,img: "IMG/109.jpg",name: "Nam GA-2100-1A1DR",price: 2902000,brand: "G-SHOCK",type:0},
      {productID: 110,img: "IMG/110.jpg",name: "Nam GW-A1100R-4ADR ",price: 16680000,brand: "G-SHOCK",type:0},
      {productID: 111,img: "IMG/111.webp",name: "Cosmograph Daytona",price: 1937733000,brand: "ROLEX",type:1},
      {productID: 112,img: "IMG/112.webp",name: "Lady-Datejust",price: 407394000,brand: "ROLEX",type:1},
      {productID: 113,img: "IMG/113.webp",name: "RETROGRADE DAY-DATE",price: 1280000000, brand: "VACHERON",type:2 },
      {productID: 114,img: "IMG/114.webp",name: "DUAL TIME", price: 1260000000,brand: "VACHERON",type:2},
      {productID: 115,img: "IMG/115.webp",name: "TRIPLE CALENDRIER 1942",price: 625000000, brand: "VACHERON",type:2},
      {productID: 116,img: "IMG/116.webp",name: "QUARTZ",price: 850000000,brand: "VACHERON",type:2 },
      {productID: 117,img: "IMG/117.webp", name: "GMT-Master II",price: 410005500,brand: "ROLEX",type:1},
      {productID: 118,img: "IMG/118.webp",name: "Sky-Dweller",price: 1062880500,brand: "ROLEX",type:1},
      {productID: 119,img: "IMG/119.webp",name: "Day-Date 40",price: 1577346000,brand: "ROLEX",type:1},
      {productID: 120,img: "IMG/120.webp",name: "Datejust 36",price: 221977500,brand: "ROLEX",type:1},
      {productID: 121,img: "IMG/121.webp",name: "Air-King",price: 185416500,brand: "ROLEX",type:1},
      {productID: 122,img: "IMG/122.webp",name: " Deapsea",price: 360387000,brand: "ROLEX",type:1},
      {productID: 123,img: "IMG/123.webp",name: "OVERSEAS CHRONOGRAPH",price: 925000000,brand: "VACHERON",type:2},
      {productID: 124,img: "IMG/124.webp",name: "Day-Date 36",price: 1462400000,brand: "ROLEX",type:1},
      {productID: 125,img: "IMG/125.webp",name: "Oyster Perpetual 31",price: 141021000,brand: "ROLEX",type:1},
      {productID: 126,img: "IMG/126.webp",name: "Datejust 31",price: 396498000,brand: "ROLEX",type:1},
      {productID: 127,img: "IMG/127.webp",name: "RETROGRADE DAY-DATE",price: 1600000000,brand: "VACHERON",type:2},
      {productID: 128,img: "IMG/128.jpg",name: "Nam GM-5600-1DR",price: 4352000,brand: "G-SHOCK",},
      {productID: 129,img: "IMG/129.jpg",name: "GNam GM-2100-1ADR ",price: 5803000,brand: "G-SHOCK",},
      {productID: 130,img: "IMG/130.webp",name: "Explorer 36",price: 292488000,brand: "ROLEX",type:1},
      {productID: 131,img: "IMG/131.webp",name: "AMERICAN 1921",price: 865000000,brand: "VACHERON",type:2},
      {productID: 132,img: "IMG/132.webp",name: "OVERSEAS SELF-WINDING",price: 1570000000,brand: "VACHERON",type:2},
      {productID: 133,img: "IMG/133.webp",name: "SELF-WINDING",price: 329000000,brand: "VACHERON",type:2},
      {productID: 134,img: "IMG/134.webp",name: "OVERSEAS SELF-WINDING",price: 1140000000,brand: "VACHERON",type:2},
      {productID: 135,img: "IMG/135.webp",name: "MOON PHASE",price: 2120000000,brand: "VACHERON",type:2},
      {productID: 136,img: "IMG/136.webp",name: "DUAL TIME",price: 800000000,brand: "VACHERON",type:2},
      {productID: 137,img: "IMG/137.webp",name: "CO‑AXIAL MASTER CHRONOMETER",price: 147200000,brand: "OMEGA",type:3},
      {productID: 138,img: "IMG/138.webp",name: "AQUA TERRA 150M",price: 368000000,brand: "OMEGA",type:3},
      {productID: 139,img: "IMG/139.webp",name: "BULLHEAD ",price: 2256000000,brand: "OMEGA",type:3},
      {productID: 140,img: "IMG/140.webp",name: "CO‑AXIAL MASTER CHRONOMETER",price: 190350000,brand: "OMEGA",type:3},
      {productID: 141,img: "IMG/141.webp",name: "DARK SIDE OF THE MOON",price: 251450000,brand: "OMEGA",type:3},
      {productID: 142,img: "IMG/142.webp",name: "DARK SIDE OF THE MOON",price: 175075000,brand: "OMEGA",type:3},
      {productID: 143,img: "IMG/143.webp",name: "PLANET OCEAN 600M",price: 166850000,brand: "OMEGA",type:3},
      {productID: 144,img: "IMG/144.webp",name: "PLOPROF 1200M",price: 296100000,brand: "OMEGA",type:3},
      {productID: 145,img: "IMG/145.webp",name: "PRESTIGE",price: 116325000,brand: "OMEGA",type:3},
      {productID: 146,img: "IMG/146.webp",name: "RACING ",price: 150400000,brand: "OMEGA",type:3},
      {productID: 147,img: "IMG/147.webp",name: "THE SUN",price: 4551950000,brand: "OMEGA",type:3},
      {productID: 148,img: "IMG/148.webp",name: "THE EARTH",price: 1204934,brand: "G-SHOCK",type:0},
      {productID: 149,img: "IMG/149.webp",name: "RACING1998",price: 5000000,brand: "G-SHOCK",type:0},
      {productID: 150,img: "IMG/150.webp",name: "PICK SUN",price:9000000 ,brand: "G-SHOCK",type:0},
    ];
    localStorage.setItem("product", JSON.stringify(productArray));
  }
}
//vi
function scrollToTop() {
  window.scroll({
    top: 230,
    left: 0,
    behavior: "smooth", // Điều này làm cho cuộn mượt hơn
  });
}
//phuoc
function divideProductPage(keyName) {
  let pageOfProduct = [];
  //lấy dữ liệu từ localStorage rồi chuyển đổi chuỗi JSON thành chuỗi javascript bằng JSON.parse
  let productArray = JSON.parse(localStorage.getItem(keyName));
  let pageOfProductTemp = [];
  let dem = 0;
  for (let i = 0; i < productArray.length; i++) {
    pageOfProductTemp.push(productArray[i]);
    dem++;
    if (dem == 12) {
      pageOfProduct.push(pageOfProductTemp);
      pageOfProductTemp = [];
      dem = 0;
    }
  }
  pageOfProduct.push(pageOfProductTemp); //? thêm só còn dư khi tạo trang (VD: 26sp : 12 = 2 dư 2)
  return pageOfProduct;
}
//phuoc
var content = document.getElementById("content");
var PageProduct = document.getElementById("page_product");
//in danh sách trang
function showListPageProductStranger() {
  let numberOfPageProduct = divideProductPage("product").length; //? = 4
  let PageProductTemp = "";
  for (let i = 0; i < numberOfPageProduct; i++) {
    PageProductTemp +=
      '<button class="page_number" onclick="showProductStranger(' + i +')">' +(i + 1) +"</button>";
  }
  PageProduct.innerHTML = PageProductTemp;
}
//phuoc
//show sản phẩm trong từng trang
function showProductStranger(i) {
  let pageOfProduct = divideProductPage("product");
  let contentTemp = "";
  for (let j = 0; j < pageOfProduct[i].length; j++) {
    contentTemp +=
      '<div class="product" onclick="productDetail(' +
      pageOfProduct[i][j].productID 
      + ')" ><img src="' +pageOfProduct[i][j].img 
      + '" class="product_img"><p class="product_name">' +
      pageOfProduct[i][j].name +
      '</p><p class="product_price">' +
      currency(pageOfProduct[i][j].price) +
      '</p></div>';
  }
  content.innerHTML = contentTemp;
}
//phuoc
// show sản phẩm trong trang index.html
function showProduct(){
    let productArray = JSON.parse(localStorage.getItem('product'));
    var s='';
    var sotrang=0,dem=0;
    for(var i=0; i<productArray.length;i++) {
      s+='<div class="product" onclick="productDetail(' +
          productArray[i].productID +
          ')" ><img src="' +
          productArray[i].img +
          '" alt="" class="product_img"><p class="product_name">' +
          productArray[i].name +
          '</p><p class="product_price">' +
          currency(productArray[i].price) +
          '</p></div>';
          dem++;
      if(dem==12)
        break;
    }
    sotrang=divideProductPage("product").length;
    var lienket='';
    for(var i = 1;i<=sotrang;i++){
      var vitri=i-1;
      lienket+='<button class="page_number" onclick="showProductStranger(' 
      + vitri + ')">' + i +
      '</button>';
    }
    document.getElementById('page_product').innerHTML=lienket;
    document.getElementById('content').innerHTML=s;
}
function showProductsByBrand(brand) {
  var productArray = JSON.parse(localStorage.getItem('product'));
  let filteredProducts = productArray.filter(function (content) {
    return content.brand === brand;
  });
  // Hiển thị sản phẩm theo brand
  let contentTemp = '';
  var count=0;
  for (var i = 0; i < filteredProducts.length; i++) {
    contentTemp += '<div class="product" onclick="productDetail(' + filteredProducts[i].productID + ')"><img src="' + filteredProducts[i].img + '" alt="" class="product_img"><p class="product_name">' + filteredProducts[i].name + '</p><p class="product_price">' + currency(filteredProducts[i].price) + '</p></div>';
    count++;
    if(count==8)
    break;
  }

  document.getElementById('content').innerHTML = contentTemp;
  var sotrang = Math.ceil(filteredProducts.length / 8);
  // console.log(sotrang)
  var lienket = '';
  for (var i = 1; i <= sotrang; i++) {
    var vitri = i - 1;
    // var a = 'index.html?"' + brand + '&' + vitri + '"';
  lienket += '<button class="page_number" onclick="showProductStrangerBrand(' + vitri + ' ,\'' + brand + '\')">' + i +'</button>';

  }
  document.getElementById('page_product').innerHTML = lienket;
}
function showProductStrangerBrand(i,brand) {
  var productArray = JSON.parse(localStorage.getItem('product'));
  let filteredProducts = productArray.filter(function (content) {
    return content.brand === brand;
  });
  var pageOfProduct = divideProductPageBrand(filteredProducts);
  let contentTemp = "";
  for (let j = 0; j < pageOfProduct[i].length; j++) {
    contentTemp +=
      '<div class="product" onclick="productDetail(' +
      pageOfProduct[i][j].productID 
      + ')" ><img src="' +pageOfProduct[i][j].img 
      + '" class="product_img"><p class="product_name">' +
      pageOfProduct[i][j].name +
      '</p><p class="product_price">' +
      currency(pageOfProduct[i][j].price) +
      '</p></div>';
  }
  content.innerHTML = contentTemp;
}
function divideProductPageBrand(filteredProducts) {
  var pageOfProduct = [];
  //lấy dữ liệu từ localStorage rồi chuyển đổi chuỗi JSON thành chuỗi javascript bằng JSON.parse
  let pageOfProductTemp = [];
  let dem = 0;
  for (let i = 0; i < filteredProducts.length; i++) {
    pageOfProductTemp.push(filteredProducts[i]);
    dem++;
    if (dem == 8) {
      pageOfProduct.push(pageOfProductTemp);
      pageOfProductTemp = [];
      dem = 0;
    }
  }
  pageOfProduct.push(pageOfProductTemp); //? thêm só còn dư khi tạo trang (VD: 26sp : 8 = 2 dư 2)
  return pageOfProduct;
}
//phuoc
function productDetail(productID) {
  var productDetail = document.getElementById("product_detail");
  var productInfo = document.getElementById("infomation");
  productDetail.style.display = "block";
  productInfo.style.display = "block";

  let productArray = JSON.parse(localStorage.getItem("product"));
  let selectedProduct = productArray.find(product => product.productID === productID);


  if (selectedProduct) {
    productDetail.innerHTML =
      `<div id="infomation">
        <button class="close_detail" onclick="closeProductDetail()" type="button">&times;</button>
        <div class="left_info">
              <img class="img_in_info" src="${selectedProduct.img}" alt="">
        </div>
        <div class="right_info">
            <h2 class="product_name">${selectedProduct.name}</h2>
            <h4 class="product_price">Giá : ${currency(selectedProduct.price)}</h4>
            <h4>Số lượng : </h4>
            <button class="quantity_decrease" onclick="quantitydown()">-</button>
            <input id="quantity" type="text" value="1">
            <button class="quantity_crease" onclick="quantityup()">+</button>
            <button id="add_cart" onclick="cartAdd(${selectedProduct.productID})">Thêm vào giỏ hàng</button>
        </div>
      </div>`;
  } else {
    console.log("Lỗi Product ID :", productID);
  }
}
function closeProductDetail() {
  document.getElementById("product_detail").style.display = "none";
  document.getElementById("infomation").style.display = "none";
}


// Vũ
function quantityup() {
  var quantityInput = document.getElementById('quantity');
  var currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
}

function quantitydown() {
  var quantityInput = document.getElementById('quantity');
  var currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
  }
}
function currency(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " VND";
}

// function showMenuMobile(){
// 	var btn = document.getElementById('btnmenu');
// 	if(btn.className==""){
// 		document.getElementById('btnmenu').classList.add('show');
// 		document.getElementById('btnmenu').innerHTML = '&times;';
// 		document.querySelector('.bot_header_menu').classList.add('active');
// 	}else {
// 		document.getElementById('btnmenu').classList.remove('show');
// 		document.getElementById('btnmenu').innerHTML = '&#9776;' ;
// 		document.querySelector('.bot_header_menu').classList.remove('active') ;
// 	}
// }

function showbill(){
	if (localStorage.getItem('bill')===null){
		document.getElementById('bill').style.display = 'none';
	}
	else{
		var user = JSON.parse(localStorage.getItem('userlogin'))
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var s='<h2>Đơn hàng đã đặt</h2>';
		for (var i = 0; i < billArray.length; i++) {
			if(user.username==billArray[i].customer.username){
				document.getElementById('bill').style.display = 'block';
				s+='<div class="billcontent">'+
					'<div>'+billArray[i].info+'</div>'+
					'<div>'+currency(billArray[i].totalprice)+'</div>'+
					'<div>'+billArray[i].date+'</div>'+
					'<div>'+billArray[i].status+'</div>'+
				'</div>';
			}
		}
		document.getElementById('bill').innerHTML = s;
	}
}

/* USER */
/* validation */
var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var specialCharsForEmail = "<>!#$%^&*()_+[]{}?:;|'\"\\,/~`-=";
var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
function checkForSpecialChar(string){
  for(i = 0; i < specialChars.length;i++){
        if(string.indexOf(specialChars[i]) > -1){
              return true;
        }
  }
  return false;
}
function checkForSpecialCharForEmail(string){
  for(i = 0; i < specialCharsForEmail.length;i++){
        if(string.indexOf(specialCharsForEmail[i]) > -1){
              return true;
        }
  }
  return false;
}
function checkPhoneNumber(string){
  if(vnf_regex.test(string) == false){
    return true;
  } else return false;
}
function createAdmin() {
  if(localStorage.getItem('user') == null) {
        var userlist = [];
        var admin = {
              username: 'admin',
              password: 'admin',
              fullname: 'Admin Nhóm 13',
              phone:'0333444555',
              address:"sgu quận 5",
              email:'admin@gmail.com',
              value:100,
        }
        userlist.push(admin);
        localStorage.setItem('user',JSON.stringify(userlist));
  } else {
        var userlist = JSON.parse(localStorage.getItem('user'));
        let flag = false;
        for (let i = 0; i < userlist.length; i++) {
              if(userlist[i].username == 'admin') {
                    flag = true;
              }
        }
        if(flag == false) {
              var admin = {
                    username: 'admin',
                    password: 'admin',
                    fullname: 'Admin Nhóm 13',
                    phone:'0333444555',
                    address:"sgu quận 5",
                    email:'dvmv2017@gmail.com',
                    value:100,
              }
              userlist.push(admin);
              localStorage.setItem('user',JSON.stringify(userlist));
        }
  }
}
  

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sign_up_wrapper').addEventListener('submit', signup);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('login_wrapper').addEventListener('submit', login);
});
 
function signup(e) {
  e.preventDefault();
  var flag = true;
  var fullname = document.getElementById('name-sign-up');
  var fullname_error = document.getElementById('name-sign-up-error');
  var username = document.getElementById('username-sign-up');
  var username_error = document.getElementById('username-sign-up-error');
  var phone = document.getElementById('phonenumber-sign-up');
  var phone_error = document.getElementById('phonenumber-sign-up-error');
  var address = document.getElementById('address-sign-up');
  var address_error = document.getElementById('address-sign-up-error');
  var email = document.getElementById('email-sigup');
  var email_error = document.getElementById('email-sign-up-error');
  var password = document.getElementById('password-sign-up');
  var password_error = document.getElementById('password-sign-up-error');
  var repassword = document.getElementById('confirm_password-sign-up');
  var repassword_error = document.getElementById('password2-sign-up-error');
  if (fullname.value == '' || fullname.value.length < 7 || checkForSpecialChar(fullname.value) == true) {
        fullname_error.style.display = 'block';   
        flag = false;
  } else {
        fullname_error.style.display = 'none';
  }
  if (username.value == '' || username.value.length < 5 || checkForSpecialChar(username.value) == true) {
        username_error.style.display = 'block';   
        flag = false;
  } else {
        username_error.style.display = 'none';
  }
  if (phone.value == '' || checkPhoneNumber(phone.value) == true) {
    phone_error.style.display = 'block';   
    flag = false;
} else {
    phone_error.style.display = 'none';
}
  if (address.value == '' || address.value.length < 5) {
    address_error.style.display = 'block';   
    flag = false;
} else {
    address_error.style.display = 'none';
}
  if (email.value == '' || email.value.length < 10 || checkForSpecialCharForEmail(email.value) == true) {
        email_error.style.display = 'block';    
        flag = false;
  } else {
        email_error.style.display = 'none';   
  }
  if (password.value == '' || password.value.length < 6) {
        password_error.style.display = 'block';    
        flag = false;
  } else {
        password_error.style.display = 'none';   
  }
  if(repassword.value != password.value || repassword.value == '') {
        repassword_error.style.display = 'block'; 
        flag = false;
  } else {
        repassword_error.style.display = 'none';  
  }
  if(flag==false){
		return false;
	}
  var d = new Date();
	var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
	var user = {
    fullname: fullname.value, 
    username: username.value,
    password: password.value, 
    phone:phone.value,
    address:address.value,
    email: email.value,
    datesignup: datesignup};
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(user.username==userArray[i].username){
			username_error.style.display = 'block';
			username_error.innerHTML = 'Tên đăng nhập đã có người sử dụng';
			username.focus();
			return false;
		}
	}
	userArray.push(user);
	localStorage.setItem('user',JSON.stringify(userArray));
	customAlert('Bạn đã đăng ký thành công!','success');
	showlogin();
}

function login(e) {
  e.preventDefault();
  var username = document.getElementById('usernameLogin').value;
  var username_error = document.getElementById('username-login-error');
  var password = document.getElementById('passwordLogin').value;
  var password_error = document.getElementById('password-login-error');
  var flag = true;
  if (username == '' || username.length < 4 || checkForSpecialChar(username) == true) {
    username_error.style.display = 'block';
    flag = false;

  } else {
        username_error.style.display = 'none';
  }
  if (password == '' || password.length < 4) {
    password_error.style.display = 'block';
    flag = false;
  } else {
        password_error.style.display = 'none';
  }
  if(flag==false){
		return false;
	}
  var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(username==userArray[i].username){
			if(password==userArray[i].password){
				closeUser();
				localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
				window.location.reload(true);
				return true;
			}
		}
	}
	password_error.style.display = 'block';
	password_error.innerHTML = 'Sai thông tin đăng nhập';
	return false;
}
/* Đăng xuất */
function logout(url){
	localStorage.removeItem('userlogin');
	localStorage.removeItem('cart');
	location.href=url;
}
function checklogin(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username=='admin'){
      //onClick="location.href=\'cart.html\'"
      //onClick="location.href=\'cart.html\'"
			s = '<li class="menuAdmin"><button onClick="window.location.href=\'AdminPage/index.html\'"><i class="fa-solid fa-sliders"></i></button></li>'+ //Admin
				'<li class="accAdmin"><button>'+user.fullname+'</button></li>'+'<li><button id="btnlogout" onClick="logout(\'index.html\')"><i class="fa-solid fa-right-from-bracket"></i></button></li>'+
				'<li><button onClick="goToCartPage()"><i class="fa-solid fa-cart-shopping"></i></button></li>'+
				'<li><button onClick="showSearch()"><i class="fas fa-search"></i></button></li>';
		}else{
			s = '<li class="accUser"><button>'+user.fullname+'</button></li>'+'<li><button id="btnlogout" onClick="logout(\'index.html\')"><i class="fa-solid fa-right-from-bracket"></i></button></li>'+
				'<li><button onClick="goToCartPage()"><i class="fa-solid fa-cart-shopping"></i></button></li>'+
				'<li><button onClick="showSearch()"><i class="fas fa-search"></i></button></li>';
		}
		document.querySelector('#header .top_header ul.right').innerHTML = s;
	}
}

function customAlert(message,type) {
	if (type=='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type=='warning') {
		document.getElementById("customalert").style.backgroundColor = '#102242';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 2000);
}

//VuChau
//Thêm sản phẩm vào giỏ hàng
function cartAdd(productID) {
  // kiểm tra người dùng đăng nhập hay chưa
  if (!localStorage.getItem('userlogin')) {
    alert('Vui lòng đăng nhập hoặc đăng ký để thêm sản phẩm vào giỏ hàng.');
    return;
  }

  let productArray = JSON.parse(localStorage.getItem('product')) || [];
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // chọn sản phẩm trong productArray
  let selectedProduct = productArray.find(product => product.productID === productID);
  
  if (selectedProduct) {
    //Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    let existingProduct = cart.find(item => item.productID === selectedProduct.productID);
    if (existingProduct) {
    // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
      existingProduct.quantity += parseInt(document.getElementById('quantity').value);
    } else {
    // Nếu sản phẩm không có trong giỏ hàng thì thêm sản phẩm
      selectedProduct.quantity = parseInt(document.getElementById('quantity').value);
      cart.push(selectedProduct);
    }

    // Cập nhật giỏ hàng
    localStorage.setItem('cart', JSON.stringify(cart));
    // óng 
    closeProductDetail();
  }
}

//Hàm này hiển thị thông tin giỏ hàng.
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItems = document.getElementById('cart-items');
  let totalItems = document.getElementById('total-items');
  let totalPrice = document.getElementById('total-price');
  // Xóa tất cả các phần tử con trong bảng hiển thị giỏ hàng
  while (cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild);
  }
  let itemCount = 0;
  let total = 0;

  // Duyệt qua danh sách sản phẩm trong giỏ hàng và hiển thị trên giao diện
  for (let i = 0; i < cart.length; i++) {
      let product = cart[i];
      let row = document.createElement('tr');

      // Tạo các ô cho từng thông tin sản phẩm
      let imgCell = document.createElement('td');
      imgCell.innerHTML = `<img src="${product.img}" alt="${product.name}" width="100">`;

      let nameCell = document.createElement('td');
      nameCell.textContent = product.name;

      let priceCell = document.createElement('td');
      priceCell.textContent = formatCurrency(product.price);

      let quantityCell = document.createElement('td');
      // Tạo nút tăng và nút giảm số lượng
      let decreaseButton = document.createElement('button');
      decreaseButton.textContent = '-';
      decreaseButton.onclick = () => {
          return decreaseQuantity(i);
      };

      let quantitySpan = document.createElement('span');
      quantitySpan.textContent = product.quantity;

      let increaseButton = document.createElement('button');
      increaseButton.textContent = '+';
      increaseButton.onclick = () => {
          return increaseQuantity(i);
      };
      // cài đặt css cho nút tăng giảm số lượng trong bảng
      decreaseButton.style.backgroundColor = '#143163';
      decreaseButton.style.color = '#fff'; 
      decreaseButton.style.border = 'none'; 
      decreaseButton.style.margin  = '5px'; 
      decreaseButton.style.cursor = 'pointer';
      decreaseButton.style.width = '20px';

      quantityCell.appendChild(decreaseButton);
      quantityCell.appendChild(quantitySpan);
      quantityCell.appendChild(increaseButton);
      increaseButton.style.backgroundColor = '#143163';
      increaseButton.style.color = '#fff';
      increaseButton.style.border = 'none';
      increaseButton.style.margin = '5px';
      increaseButton.style.cursor = 'pointer';
      increaseButton.style.width = '20px';

      let removeCell = document.createElement('td');
      let removeButton = document.createElement('button');
      removeButton.textContent = 'Xóa';
      removeButton.onclick = () => removeFromCart(i);
      removeCell.appendChild(removeButton);

      itemCount += product.quantity;
      total += product.price * product.quantity;

      // Thêm các ô vào hàng
      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(quantityCell);
      row.appendChild(removeCell);

      // Thêm hàng vào bảng
      cartItems.appendChild(row);
  }
  totalItems.textContent = itemCount;
  totalPrice.textContent = formatCurrency(total);
}

document.addEventListener('DOMContentLoaded', function () {
  displayCart();
});

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  // Lấy danh sách sản phẩm trong giỏ hàng từ localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (index >= 0 && index < cart.length) {
     // Xóa sản phẩm khỏi giỏ hàng tại vị trí index
      cart.splice(index, 1);
      // Cập nhật lại giỏ hàng
      localStorage.setItem('cart', JSON.stringify(cart));
      // cập nhập lại giao diện hiển thị của giỏ hàng
      displayCart();
  }
}
// Hàm tăng số lượng sản phẩm
function increaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity++;
  // Cập nhật lại giỏ hàng
  localStorage.setItem('cart', JSON.stringify(cart));
  // cập nhập lại giao diện
  displayCart();
}

// Hàm giảm số lượng sản phẩm
function decreaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Giảm số lượng của sản phẩm tại chỉ mục index
  if (cart[index].quantity > 1) {
      cart[index].quantity--;
  }
  // Cập nhật lại giỏ hàng
  localStorage.setItem('cart', JSON.stringify(cart));
  // Gọi lại hàm hiển thị giỏ hàng
  displayCart();
}

function clearCartList() {
  let cartItems = document.getElementById('cart-items');
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  // Cập nhật tổng số sản phẩm và tổng giá trị trong giỏ hàng
  let itemCount = 0;
  let total = 0;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    itemCount += product.quantity;
    total += product.price * product.quantity;
  }
  // Hiển thị giỏ hàng sau khi đã cập nhật
  displayCart();
  // Hiển thị tổng số sản phẩm và tổng giá trị mới
  document.getElementById('total-items').textContent = itemCount;
  document.getElementById('total-price').textContent = formatCurrency(total);
  return { itemCount, total };
}

// Hiển thị thông tin đơn hàng từ localStorage trên trang web
function showOrderInfo() {
  let orderInfo = document.getElementById('order-info');
  let cartInfo = document.getElementById('cart-div');
  orderInfo.style.display = 'block';
  cartInfo.style.display = 'none'
}
function displayOrderInfo() {
// khi người dùng đặt hàng, mã sử dụng tên người dùng để tạo một khóa duy nhất
  showOrderInfo();
  let userlogin = JSON.parse(localStorage.getItem('userlogin'));
  let bill = JSON.parse(localStorage.getItem('bill'));
  let orderedTable = document.getElementById('order-items');
  let orderedContent = '<tr style="background-color:#143163;color:white;"><th>Ảnh</th><th>Tên sản phẩm</th><th>Số lượng</th><th>Giá</th><th>Ngày đặt</th><th>Tình trạng</th></tr>'
  let sum,total;
  for(let i = 0; i < bill.length; i++) {
    if(userlogin.username == bill[i].customer.username) {
      sum = 0;
      orderedContent +='<tr><th colspan="6">Đơn hàng '+(i+1)+'</th></tr>'
      for(let j = 0; j < bill[i].ordered.length; j++) {
        orderedContent += '<tr><td><img src="'+bill[i].ordered[j].img+'"></td><td>'+bill[i].ordered[j].name+'</td><td>'+bill[i].ordered[j].quantity+'</td><td>'+currency(bill[i].ordered[j].price)+'</td><td>'+bill[i].time+'</td>'
        if(bill[i].status == "Chưa xử lý") {
          orderedContent +='<td style="color:red;">'+bill[i].status+'</td></tr>'
        } else {
          orderedContent +='<td style="color:blue;">'+bill[i].status+'</td></tr>'
        }
        sum += bill[i].ordered[j].price * bill[i].ordered[j].quantity;
      }
      orderedContent +='<tr><th colspan="6">Số lượng : '+bill[i].ordered.length+'</th></tr><tr><th colspan="6">Tổng đơn hàng : '+currency(sum)+'</th></tr>'
      total += sum;
    }
  }
  orderedTable.innerHTML = orderedContent;
}

// chuyển trang
function goToHomePage() {
  window.location.href = 'index.html';
}

function goToCartPage() {
  if (!localStorage.getItem('userlogin')) {
    alert('Bạn chưa đăng nhập hoặc đăng ký. Vui lòng đăng nhập hoặc đăng ký để truy cập giỏ hàng.');
  } else {
      window.location.href ='cart.html';
  }
}

// Hàm lấy đường dẫn ảnh của sản phẩm dựa trên ID
function getProductImage(productID) {
  // Kiểm tra nếu có file ảnh trong định dạng webp
  const webpPath = `IMG/${productID}.webp`;
  const jpgPath = `IMG/${productID}.jpg`;
  // Kiểm tra nếu file webp tồn tại
  if (checkImageExists(webpPath)) {
    return webpPath;
  } else {
    // Trả về đường dẫn đến file jpg nếu không có file webp
    return jpgPath;
  }
}

// Hàm kiểm tra sự tồn tại của file ảnh
function checkImageExists(imagePath) {
  const http = new XMLHttpRequest();
  http.open('HEAD', imagePath, false);
  http.send();
  // Kiểm tra status của request, nếu là 200 thì file tồn tại
  return http.status !== 404;
}

// Hàm này nhận một số và trả về chuỗi biểu diễn số đó theo định dạng tiền tệ.
function formatCurrency(number) {
  return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function getCurrentDate() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return currentDate.toLocaleDateString('vi-VN', options);
}


//search
var modal_product_detail = document.getElementById('user-page-modal-product-detail');
var modal_search = document.getElementById('modal-search');
var modal_user_search = document.getElementById('user-page-modal-search');

function showSearch() {
  modal_search.style.display = 'block';
  let heightPage = document.body.offsetHeight;
  modal_search.style.height = heightPage+'px';
}
function showSearchUser() {
  modal_user_search.style.display = 'block';
  let heightPage = document.body.offsetHeight;
  modal_user_search.style.height = heightPage+'px';
}

function closeSearch() {
  modal_search.style.display = 'none';
}
function closeSearchUser() {
  modal_user_search.style.display = 'none';
}
function searchUser() {
  let searchProductArray;
  let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
  let searchProductPriceTo = document.getElementById('user-page-search-price-to');
  let search = document.getElementById('user-page-search-info').value.toLowerCase();
  let search_product = document.getElementById('user-page-search-product-wrapper');
  let searchProductTemp = '';
  searchProductArray = searchProductPriceUser();

  if (search == '') {
    if (searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
      search_product.innerHTML = '';
    } else {
      for (let i = 0; i < searchProductArray.length; i++) {
        searchProductTemp += '<div class="search-product" onclick="handleProductClick('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>';
      }
      search_product.innerHTML = searchProductTemp;
    }
  } else {
    for (let i = 0; i < searchProductArray.length; i++) {
      if (searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
        searchProductTemp += '<div class="search-product" onclick="handleProductClick('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>';
      }
    }
    search_product.innerHTML = searchProductTemp;
  }
}

function handleProductClick(productID) {
  if (!localStorage.getItem('userlogin')) {

    customAlert('Bạn phải đăng nhập để mua hàng', 'warning');
  } else {
    productDetail(productID);
  }
}

function searchStranger() {
  let searchProductArray;
  let searchProductPriceFrom = document.getElementById('search-price-from');
  let searchProductPriceTo = document.getElementById('search-price-to');
  let search = document.getElementById('search-info').value.toLowerCase();
  let search_product = document.getElementById('search-product-wrapper');
  let searchProductTemp = '';
  searchProductArray = searchProductPrice();

  if (search == '') {
    if (searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
      search_product.innerHTML = '';
    } else {
      for (let i = 0; i < searchProductArray.length; i++) {
        searchProductTemp += '<div class="search-product" onclick="handleProductClick('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>';
      }
      search_product.innerHTML = searchProductTemp;
    }
  } else {
    for (let i = 0; i < searchProductArray.length; i++) {
      if (searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
        searchProductTemp += '<div class="search-product" onclick="handleProductClick('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>';
      }
    }
    search_product.innerHTML = searchProductTemp;
  }
}
function searchProductPrice() {

  let searchProductPriceFrom = document.getElementById('search-price-from');
  let searchProductPriceTo = document.getElementById('search-price-to');

  let productArray = JSON.parse(localStorage.getItem('product'));
  
  if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
        return productArray;
  }
  else {
        let productArray = JSON.parse(localStorage.getItem('product'));
        let searchProductPriceArray = [];
        for(let i = 0; i < productArray.length; i++) {
              if(productArray[i].price >= searchProductPriceFrom.value && productArray[i].price <= searchProductPriceTo.value) {
                    searchProductPriceArray.push(productArray[i]);
              }
        }
        return searchProductPriceArray;
  }
}
function searchProductPriceUser() {

  let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
  let searchProductPriceTo = document.getElementById('user-page-search-price-to');

  let productArray = JSON.parse(localStorage.getItem('product'));
  
  if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
        return productArray;
  }
  else {
        let productArray = JSON.parse(localStorage.getItem('product'));
        let searchProductPriceArray = [];
        for(let i = 0; i < productArray.length; i++) {
              if(productArray[i].price >= searchProductPriceFrom.value && productArray[i].price <= searchProductPriceTo.value) {
                    searchProductPriceArray.push(productArray[i]);
              }
        }
        return searchProductPriceArray;
  }
}
function showCreateOrder() {
  let createOrderModal = document.getElementById("create-order-modal");
  createOrderModal.style.display = 'block';
}
function closeCreateOrder() {
  let createOrderModal = document.getElementById("create-order-modal");
  createOrderModal.style.display = 'none';
}
function createOrder() {
  let cartArray = JSON.parse(localStorage.getItem('cart'));
  if(cartArray == null) {
    return;
  }
  showCreateOrder();
  let totalOrder = 0;
  let createOrder = document.getElementById("create-order");
  let createOrderTemp = '<h1 id="title-create-order">Tạo đơn hàng</h1><span onclick="closeCreateOrder()" id="closeCreateOrder">x</span>';
  let userlogin = JSON.parse(localStorage.getItem('userlogin'));
  createOrderTemp += '<h3>Tên khách hàng : <input value="'+userlogin.fullname+'" id="order-buy-name"></h3><h3>Email : <input value="'+userlogin.email+'" id="order-buy-email"></h3><h3>Số điện thoại : <input value="'+userlogin.phone+'" id="order-buy-phone"></h3><h3>Địa chỉ : <input value="'+userlogin.address+'" id="order-buy-address"></h3><h3>Phương thức thanh toán : <select id="order-buy-pay"><option value="luachon">--- Lua Chon ---</option><option value="Tiền Mặt">Tiền mặt</option><option value="Thanh toán Online">Thanh toán Online</option></select></h3><p style="display:none;color:red;" id="order-buy-pay-error">Vui lòng chọn phương thức thanh toán</p><table><tr style="background-color:#143163;color:white;"><th>Ảnh</th><th colspan="2">Tên sản phẩm</th><th>Số lượng</th><th colspan="2">Giá</th></tr>'
  for(let i = 0; i < cartArray.length; i++) {
    createOrderTemp += '<tr><td><img src="'+cartArray[i].img+'" style="width:80px;"></td><td colspan="2">'+cartArray[i].name+'</td><td>'+cartArray[i].quantity+'</td><td colspan="2">'+currency(cartArray[i].price)+'</td></tr>'
    totalOrder += cartArray[i].price;
  }
  createOrderTemp += '</table><h3>Tổng đơn hàng : '+currency(totalOrder)+'</h3><button id="buy" onclick="buy()">Đặt Hàng</button>'
  createOrder.innerHTML = createOrderTemp;
}
function buy() {
  let date = new Date();
  let date_year = date.getFullYear();
  let date_month = date.getMonth() + 1;
  let date_day = date.getDate();
  let date_hour = date.getHours();
  let date_minute = date.getMinutes();
  let date_second = date.getSeconds();
  let clock = `${date_hour} : ${date_minute} : ${date_second} <br>`
  let timeBuy = ` ${date_month}-${date_day}-${date_year}`;

  let orderFullname = document.getElementById('order-buy-name').value
  let orderEmail = document.getElementById('order-buy-email').value
  let orderPhone = document.getElementById('order-buy-phone').value
  let orderAddress = document.getElementById('order-buy-address').value
  let pay = document.getElementById('order-buy-pay').value;
  let pay_error = document.getElementById('order-buy-pay-error');
  
  if(pay == 'luachon') {
    pay_error.style.display = 'block';
    return;
  } else {
    pay_error.style.display = 'none';
  }

  var ans = confirm('Bạn có muốn thanh toán ?')
  if(ans == true) {

        if(localStorage.getItem('bill') == null) {
              let cartArray = JSON.parse(localStorage.getItem('cart'));
              let userlogin = JSON.parse(localStorage.getItem('userlogin'));
              let billList = [];
              let ordered = [];
              //? Gán những thông tin bị thay đổi vào customer
              userlogin.fullname = orderFullname;
              userlogin.phone = orderPhone;
              userlogin.email = orderEmail;
              userlogin.address = orderAddress;

              billIndex = {
                    customer : userlogin,
                    info:'',//! phải có khởi tạo để sử dụng += ở dưới
              }
              let i = 0;
              var tong = 0;
              billIndex.id =  billList.length;
              billIndex.clock = clock;
              billIndex.time = timeBuy;
              billIndex.pay = pay;
              billIndex.status = "Chưa xử lý";
              while(i < cartArray.length) {
                billIndex.info += cartArray[i].quantity+' x '+cartArray[i].name+'<br>';
                tong += (cartArray[i].quantity * cartArray[i].price);
                ordered.push(cartArray[i]);
                i++;
              }
              billIndex.totalprice = tong;
              billIndex.ordered = ordered;
              localStorage.removeItem('cart');
              displayCart();
             /*  showQuantityOfCart('user-cart-page-cart-quantity') */
              billList.push(billIndex);
              localStorage.setItem('bill',JSON.stringify(billList));
              customAlert('Bạn đã đặt hàng thành công','success');
        } else {
              let userlogin = JSON.parse(localStorage.getItem('userlogin'));
              let cartArray = JSON.parse(localStorage.getItem('cart'));
              let billList = JSON.parse(localStorage.getItem('bill'));
              let ordered = [];
              //? Gán những thông tin bị thay đổi vào customer
              userlogin.fullname = orderFullname;
              userlogin.phone = orderPhone;
              userlogin.email = orderEmail;
              userlogin.address = orderAddress;
              let billIndex = {
                    customer: userlogin,
                    info:'', //! phải có khởi tạo để sử dụng += ở dưới
              }
              let i = 0;
              var tong = 0;
              billIndex.clock = clock;
              billIndex.time = timeBuy;
              billIndex.pay = pay;
              billIndex.id =  billList.length;
              billIndex.status = "Chưa xử lý";
              while(i < cartArray.length) {
                    billIndex.info += ''+cartArray[i].quantity+' x '+cartArray[i].name+'<br>';
                    tong += (cartArray[i].quantity * cartArray[i].price);
                    /* console.log(tong); */
                    ordered.push(cartArray[i]);
                    i++;
            }
            billIndex.ordered = ordered;
            billIndex.totalprice = tong;
            localStorage.removeItem('cart');
            displayCart();
              /* showQuantityOfCart('user-cart-page-cart-quantity') */
              billList.push(billIndex);
              localStorage.setItem('bill',JSON.stringify(billList));
              customAlert('Bạn đã đặt hàng thành công','success');
       }
  }
  closeCreateOrder()
}
/*!  */
function createSlideShowArray() {
  if(localStorage.getItem('slideshow') == null) {
        let slideShowArray = [
              {slideShowID : 0, img : "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/type/full-metal/full-metal/_jcr_content/root/responsivegrid/container_copy/teaser.casiocoreimg.jpeg/1696484105376/pc-w1920h816-notext.jpeg"},
              {slideShowID : 1, img : "https://www.casio.com/content/casio/locales/vn/vi/products/_jcr_content/root/responsivegrid/container_1450128435/carousel_copy_copy/item_1666757450765.casiocoreimg.jpeg/1678149735817/banner-gbd-h2000-pc.jpeg"},
              {slideShowID : 2, img : "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/_jcr_content/root/responsivegrid/container/image_134798053.casiocoreimg.jpeg/1701659554898/kv-1920x816.jpeg"},
              {slideShowID : 3, img : "https://www.casio.com/content/casio/locales/vn/vi/products/_jcr_content/root/responsivegrid/container_1450128435/carousel_copy_copy/item_1661475191255_c.casiocoreimg.gif/1680758447683/pc-gshock-40th-banner-1920-816-01.gif"},
              {slideShowID : 4, img : "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/_jcr_content/root/responsivegrid/container/image_1170766954_cop.casiocoreimg.jpeg/1701659554962/pc-w1920h816-logo.jpeg"},
        ];
        localStorage.setItem('slideshow',JSON.stringify(slideShowArray));
  } 
}
var index = 0;
var countDown;
function moveSlideShow(slideShowImg_id) {
  let slideShow = document.getElementById(slideShowImg_id);
  let slideShowArray = JSON.parse(localStorage.getItem('slideshow'));
  
  let numSlides = slideShowArray.length;
  if(index >= numSlides) {
        index = 0;
  } else if(index < 0) {
        index = numSlides - 1;
  }
  slideShow.innerHTML = '<img src="'+slideShowArray[index].img+'" alt="">';
  countDown = setTimeout(function() {
        moveSlideShowAfter(slideShowImg_id);
  },2000)
}
function moveSlideShowBefore(slideShowImg_id) {
  clearTimeout(countDown);
  index--;
  moveSlideShow(slideShowImg_id);
}
function moveSlideShowAfter(slideShowImg_id) {
  clearTimeout(countDown);
  index++;
  moveSlideShow(slideShowImg_id);
}