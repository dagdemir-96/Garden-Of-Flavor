//Arayüzden eleman çekme işlemleri bir obje çerisinde yapılacak

const uiElements={
    menuList: document.querySelector("#menu-list"),
    categoryButtons:document.querySelectorAll(".category-button"),
    detailContainer: document.querySelector("#detail-container"),

};

//menü elemanını render edecek fonksiyon
//Bu fonksiyonu önce export edip yani dosya dışarısına çıkarmaya izin verip ve vu değişkene bağlı verileri kullanmak için main.js dosyasıan hem import edeceğiz hemde fonksiyonu hazıp en son db.json dan çektiğimz verilerin son halini atadığımız değikeni de bu fonksiuona parametre olarak vereceğiz

const renderMenuCard=(data)=>{
    
   //dışarıdan alınan data nın içerisindeki her bir eleman dön ve bir html oluştur.
   uiElements.menuList.innerHTML=data.map((item)=>
    `<a href="/detail.html?id=${item.id}"
   class="col-md-6 col-lg-4 mb-4 text-decoration-none">
        <div class="card menu-card">
            <!-- Top -->
            <div class="position-relative">
                 <img
                  src="${item.img}"
                  class="card-img-top"
                  alt="menu-image"
                />
                <span class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 text-capitalize menu-card-badge">${item.category}</span>
                <span class="badge bg-white text-success fw-bold position-absolute top-0 end-0 m-3 px-3 py-2  border border-success menu-card-price ">$1${item.price.toFixed(2)}</span>
            </div>
            <!-- body -->
             <div class="card-body">
                <h5 class="card-title fw-bold text-success mb-2">${item.title}</h5>
             </div>
        </div>
    </a>`).join("");
  //renerMenuCard fonkisyonu bir dizi olduğundan ve bu dizi arayüze atıldığında elamnalrı , ile getirir bunu kaldırmak için ise join kullanılır ve ne ile bölmek istersek ona göre "" içerisinde istediğimizi yazabiliriz
};

//detail container ın içeriğini dinamik şeilde renderlayacak fonksiyon

const renderDetailPage=(product)=>{
 console.log(product);
//uiElements içerisindeki detailContainerin ın html içeriğini belirle
  uiElements.detailContainer.innerHTML= `<section class="container my-5 shadow" style="max-width: 1100px;">
        <div class="d-flex align-items-center justify-content-between mt-5 gap-2 py-3 px-2">
            <a href="/index.html" class="text-success fs-4"><i class="bi bi-house-fill"></i></a>
            <div class="detail-breadcrumb ms-2">
                <span class="text-muted">detail /</span>
                <span class="text-muted"> ${product.category} /</span>
                <span>${product.title}</span>

            </div>

        </div>

     

        <div class="row">
            <div class="col-12 col-md-5 mb-4">
                <img src="${product.img}" alt="detail.image"
                    class="img-fluid rounded-4 w-100 shadow detail-img">
            </div>


            <div class="col-12 col-md-7 mb-4">
                <h2 class="fw-bold text-success mb-3">${product.title}</h2>
                <div class="mb-3">
                    <span class="badge bg-warning text-dark fs-6 px-3 py-2 text-capitalize me-2">${product.category}</span>
                    <span class="badge bg-light text-success fs-6 px-3 py-2 text-capitalize">Price:$${product.price.toFixed(2)}</span>
                </div>
                p class="lead text-muted mb-4">
              ${product.desc}
            </p>
                <button class="btn btn-success shadow px-4 py-2 fw-semibold">Order Now</button>
            </div>
        </div>
    </section>`;



};



export {uiElements, renderMenuCard,renderDetailPage};
