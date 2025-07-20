// ------------------------   المتغيرات s   ------------------------
let inputproduct = document.getElementById("inputproduct");
let addbtn = document.getElementById("addbtn");
let count = document.getElementById("count");
let content = document.getElementById("content");
let inputsearch = document.getElementById("search");
let notfound = document.getElementById("notfound");
// ------------------------   المتغيرات e   ------------------------
let edit = null;
let editvalue = null;
// -**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**
// ------------------------   المنتجات  s  ------------------------
let allproducts = [
  {
    id: 1,
    img: "صوره لفستان كروشيه-1.jpg",
    name: "Twin dress",
    price: 10000,
    desc: "Twin girls dress.",
  },
  {
    id: 2,
    img: "صوره لدميه كروشيه-1.jpg",
    name: "Rabbit doll",
    price: 110000,
    desc: "Doll riding a bike.",
  },
  {
    id: 3,
    img: "صوره لفستان كروشيه-3.jpg",
    name: "Yellow dress",
    price: 30000,
    desc: "Yellow baby dress.",
  },
  {
    id: 4,
    img: "صوره لفستان كروشيه-5.jpg",
    name: "Red dress",
    price: 110000,
    desc: "Flower baby dress.",
  },
  {
    id: 5,
    img: "صوره لفستان كروشيه-4.jpg",
    name: "Tiered dress",
    price: 110000,
    desc: "Yellow and indigo baby dress.",
  },
  {
    id: 6,
    img: "صوره لحزام كروشيه-1.jpg",
    name: "belt",
    price: 60000,
    desc: "Gorgeous crochet belt.",
  },
  {
    id: 7,
    img: "صوره لمفرش سرير كروشيه-1.jpg",
    name: "Bee mattress",
    price: 70000,
    desc: "Bedspread decorated with flowers.",
  },
  {
    id: 8,
    img: "صوره لغلاف كتاب كروشيه-1.jpg",
    name: "Book cover",
    price: 80000,
    desc: "The cover of the book is decorated with flowers.",
  },
  {
    id: 9,
    img: "صوره لستار كروشيه-1.jpg",
    name: "Flower curtain",
    price: 90000,
    desc: "Gorgeous flower curtain.",
  },
  {
    id: 10,
    img: "صوره لمفرش طاوله كروشيه-1.jpg",
    name: "Table cloth",
    price: 100000,
    desc: "Round tablecloth.",
  },
  {
    id: 11,
    img: "صوره ل اكسسوار كروشيه-1.jpg",
    name: "Accessory",
    price: 110000,
    desc: "Great accessory.",
  },
  {
    id: 12,
    img: "صوره لطقم زينه كروشيه-3.jpg",
    name: "accessories",
    price: 110000,
    desc: "Mobile phone holder accessories.",
  },
  {
    id: 13,
    img: "صوره لحقيبه كروشيه-2.jpg",
    name: "Pound bag",
    price: 110000,
    desc: "Excellent backpack.",
  },
  {
    id: 14,
    img: "صوره لدميه كروشيه-2.jpg",
    name: "dummy",
    price: 110000,
    desc: "Girl doll.",
  },
  {
    id: 15,
    img: "صوره لطقم زينه كروشيه-2.jpg",
    name: "Zeina",
    price: 110000,
    desc: "Home helper.",
  },
  {
    id: 16,
    img: "صوره لطقم زينه كروشيه-1.jpg",
    name: "Shampoo ornament",
    price: 110000,
    desc: "Zeina.",
  },
];
// ------------------------   المنتجات  e  ------------------------
// -**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**
// ------------------------   العداد الي بيعد s   ------------------------
count.innerHTML = `${allproducts.length}`;
// ------------------------   العداد الي بيعد e   ------------------------
// -**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**
// ------------------------   (عرض المنتجات) الرسم s   ------------------------
function drow() {
  content.innerHTML = ""; // يمسح الأول علشان يرجع يرسم تاني بعد الحذف أو التعديل
  allproducts.forEach((ele) => {
    content.innerHTML += `<div class="card parent-product" style="width:400px; background-color: #fff0fa;"><img class="card-img-top" onclick="editimg(${ele.id})" src="images/${ele.img}" alt="Card image"><div class="card-body"><span class="product-name">Product name : </span><span id="spanname" class="card-title card-title-name" style="color: #8e3b8f;">${ele.name}</span><br/><button id="buttonedit" onclick="editname(${ele.id})" class="btn btn-primary"><i class="fa-solid fa-pen" style="color: #3498db;"></i> Rename</button><br/><span class="product-price">Product price : </span><span id="spanprice" class="card-title card-title-price" style="color: #c94f97;">${ele.price}</span><br/><button id="buttonedit" onclick="editprice(${ele.id})" class="btn btn-primary"><i class="fa-solid fa-dollar-sign" style="color: #27ae60;"></i> Change</button><br/><span class="product-desc">Product Description : </span><span id="spandescription" class="card-title card-title-desc" style="color: #6e2b5e;">${ele.desc}</span><br/><button id="buttonedit" onclick="editdec(${ele.id})" class="btn btn-primary"><i class="fa-solid fa-align-left" style="color: #f39c12;"></i> Update</button><br/><button id="buttondelete" class="btn btn-primary" onclick="deletebtn(${ele.id})"><i class="fa-solid fa-trash-can fa-shake" style="color: #e74c3c;"></i> delete</button></div></div>`;
  });
}
drow(allproducts);
// ------------------------   (عرض المنتجات) الرسم e   ------------------------
// -**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**
// ------------------------   زر الفتح بتاع disabled  s  ------------------------

inputproduct.addEventListener("input", () => {
  if (inputproduct.value != "") {
    addbtn.removeAttribute("disabled");
  } else {
    addbtn.setAttribute("disabled", true);
  }
});
// ------------------------   زر الفتح بتاع disabled  e  ------------------------
// -**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**
// ------------------------   زر التعديل  s   ------------------------
// ------------------------   (name)زر التعديل  s   ------------------------
function editname(id) {
  let findproduct = allproducts.find((f) => f.id === id);
  if (findproduct) {
    inputproduct.value = findproduct.name;
    addbtn.removeAttribute("disabled");
    addbtn.innerText = "Update";
    edit = id;
    editvalue = "name";
  }
}
// ------------------------   (name)زر التعديل  e   ------------------------
// ------------------------   (price)زر التعديل  s   ------------------------
function editprice(id) {
  let findproduct = allproducts.find((f) => f.id === id);
  if (findproduct) {
    inputproduct.value = findproduct.price;
    addbtn.removeAttribute("disabled");
    addbtn.innerText = "Update";
    edit = id;
    editvalue = "price";
  }
}
// ------------------------   (price)زر التعديل  e   ------------------------
// ------------------------   (desc)زر التعديل  s   ------------------------
function editdec(id) {
  let findproduct = allproducts.find((f) => f.id === id);
  if (findproduct) {
    inputproduct.value = findproduct.desc;
    addbtn.removeAttribute("disabled");
    addbtn.innerText = "Update";
    edit = id;
    editvalue = "desc";
  }
}
// ------------------------   (desc)زر التعديل  e   ------------------------
// ------------------------   (img)زر التعديل  s   ------------------------
function editimg(id) {
  let findproduct = allproducts.find((f) => f.id === id);
  if (findproduct) {
    let productimg = prompt("Enter the URL of the image");
    if (productimg) {
      findproduct.img = productimg;
      drow();
    }
  }
}
// ------------------------   (img)زر التعديل  e   ------------------------
// ------------------------   زر التعديل  e   ------------------------
// -**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**
// ------------------------   زر الاضافه   s  ------------------------
addbtn.addEventListener("click", () => {
  let db = allproducts.some(
    (d) =>
      d.name.toLocaleLowerCase().trim() ===
      inputproduct.value.toLocaleLowerCase().trim()
  );
  if (db) {
    Swal.fire({
      title: "The product already exists.",
      icon: "error",
      draggable: true,
    });
    return;
  }
  if (edit) {
    let findproduct = allproducts.find((f) => f.id === edit);
    if (findproduct) {
      if (editvalue === "name") {
        findproduct.name = inputproduct.value;
      } else if (editvalue === "price") {
        findproduct.price = inputproduct.value;
      } else if (editvalue === "desc") {
        findproduct.desc = inputproduct.value;
      }
      drow();
    }
    edit = null;
    editvalue = null;
    addbtn.innerText = "Add";
  } else {
    let lastid = allproducts.length
      ? allproducts[allproducts.length - 1].id
      : 0;
    allproducts.push({
      id: ++lastid,
      name: inputproduct.value,
      price: prompt("Enter the price"),
      desc: prompt("Enter description"),
      img: prompt("Enter the URL of the image"),
    });
    let newproducts = allproducts[allproducts.length - 1];
    content.innerHTML += `<div class="card parent-product" style="width:400px; background-color: #fff0fa;"><img class="card-img-top" onclick="editimg(${newproducts.id})" src="images/${newproducts.img}" alt="Card image"><div class="card-body"><span class="product-name">Product name : </span><span id="spanname" class="card-title card-title-name" style="color: #8e3b8f;">${newproducts.name}</span><br/><button id="buttonedit" onclick="editname(${newproducts.id})" class="btn btn-primary"><i class="fa-solid fa-pen" style="color: #3498db;"></i> Rename</button><br/><span class="product-price">Product price : </span><span id="spanprice" class="card-title card-title-price" style="color: #c94f97;">${newproducts.price}</span><br/><button id="buttonedit" onclick="editprice(${newproducts.id})" class="btn btn-primary"><i class="fa-solid fa-dollar-sign" style="color: #27ae60;"></i> Change</button><br/><span class="product-desc">Product Description : </span><span id="spandescription" class="card-title card-title-desc" style="color: #6e2b5e;">${newproducts.desc}</span><br/><button id="buttonedit" onclick="editdec(${newproducts.id})" class="btn btn-primary"><i class="fa-solid fa-align-left" style="color: #f39c12;"></i> Update</button><br/><button id="buttondelete" class="btn btn-primary" onclick="deletebtn(${newproducts.id})"><i class="fa-solid fa-trash-can fa-shake" style="color: #e74c3c;"></i> delete</button></div></div>`;
  }
  count.innerHTML = `${allproducts.length}`;
  inputproduct.value = "";
  addbtn.setAttribute("disabled", true);
});
// ------------------------   زر الاضافه   e  ------------------------
// -**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**
// ------------------------   زر الحذف   s  ------------------------
function deletebtn(id) {
  let index = allproducts
    .map((del) => {
      return del.id;
    })
    .indexOf(id);
  if (index != -1) {
    allproducts.splice(index, 1);
  }
  drow();
  Swal.fire({
    title: "The product has been deleted.",
    icon: "success",
    draggable: true,
  });
  count.innerHTML = `${allproducts.length}`;
}
// ------------------------   زر الحذف   e  ------------------------
// -**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**
// ------------------------   input البحث   s   ------------------------
inputsearch.addEventListener("input", () => {
  let inputvalue = inputsearch.value.toLocaleLowerCase();
  let productfiltr = allproducts.filter((item) => {
    return item.name.toLocaleLowerCase().includes(inputvalue);
  });
  content.innerHTML = "";
  productfiltr.forEach((newproducts2) => {
    content.innerHTML += `<div class="card parent-product" style="width:400px; background-color: #fff0fa;"><img class="card-img-top" onclick="editimg(${newproducts2.id})" src="images/${newproducts2.img}" alt="Card image"><div class="card-body"><span class="product-name">Product name : </span><span id="spanname" class="card-title card-title-name" style="color: #8e3b8f;">${newproducts2.name}</span><br/><button id="buttonedit" onclick="editname(${newproducts2.id})" class="btn btn-primary"><i class="fa-solid fa-pen" style="color: #3498db;"></i> Rename</button><br/><span class="product-price">Product price : </span><span id="spanprice" class="card-title card-title-price" style="color: #c94f97;">${newproducts2.price}</span><br/><button id="buttonedit" onclick="editprice(${newproducts2.id})" class="btn btn-primary"><i class="fa-solid fa-dollar-sign" style="color: #27ae60;"></i> Change</button><br/><span class="product-desc">Product Description : </span><span id="spandescription" class="card-title card-title-desc" style="color: #6e2b5e;">${newproducts2.desc}</span><br/><button id="buttonedit" onclick="editdec(${newproducts2.id})" class="btn btn-primary"><i class="fa-solid fa-align-left" style="color: #f39c12;"></i> Update</button><br/><button id="buttondelete" class="btn btn-primary" onclick="deletebtn(${newproducts2.id})"><i class="fa-solid fa-trash-can fa-shake" style="color: #e74c3c;"></i> delete</button></div></div>`;
  });
  if (productfiltr.length == 0) {
    notfound.style.display = "block";
  } else {
    notfound.style.display = "none";
  }
});
// ------------------------   input البحث   e   ------------------------
// // -**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**-**
