/* import */
import getMenu from "./api.js";
import { renderDetailPage ,renderMenuCard, uiElements,} from "./ui.js";

//DOMContentLoader ile sayfa yüklendiğinde hangi sayfada olduğumuzu gödterir

document.addEventListener("DOMContentLoaded", async () => {
    //Hangi sayfada olduğumuza karra ver. Eğer ana sayfada isek anasayfa işlemlerini detay sayfasında isek de detay sayfası işlmelerini yapacapuz
    //hangi sayfada olduğumuzu pahname metodu belirler ve ne içeriyorsa yani includes ona göre bunu belirler


    const menuData = await getMenu();


    if (window.location.pathname.includes("/index.html")) {
        
        //Burada renderMenuCard fonksiyonunu ui.js dosyasına menüyu arayüze render etmek için buradac db.js dan çekilen verileri kullanmak için ekledik
          // Menu elemanlarını dinamik şekilde render et
       setTimeout(() => {
      // Menu elemanlarını dinamik şekilde render et
      renderMenuCard(menuData);
    }, 2000);
    
        

        //Olay izleyicileri tekil elemanlara verildiğinden dizilerde direkt olarak kullanılmaz. Bunun için forEage yada map ile gezerek elemanlara teker teker erişip bu elemanlara teker teker olay izleyicisi eklenmiş olur.
        uiElements.categoryButtons.forEach((button) => {
            button.addEventListener("click", () => {
                //butona dıklanınca id sine eriş ve bunu bir değişkene ata
                const selectedCategory = button.id;
               
                //menu data yani api den gelen veri içerisindeki secektedCategoriye sahip elemanlara eriş

             const filtredMenu = menuData.filter(
          (item) => item.category == selectedCategory
        );

               
               
                

                //filterlenen ürünlere göre menuListi rener et.Eğer seçili kategory all a eşit ise tüm ürünleri render et ama selectedcategory all dışındaki bir değeri haricinde bir değer ise o kategoryi getir
                  if (selectedCategory == "all") {
          // selectedCategory all ise
          renderMenuCard(menuData);
        } else {
          // selectedCategory all haricinde bir değere sahipse
          renderMenuCard(filtredMenu);
        }


            });
        });
    }
    else {
        //url deki ğarametreye eriş
        const params = new URLSearchParams(window.location.search);

        //ürünün id sini değişkene ata
         const itemId = Number(params.get("id"));
         console.log(itemId);
        
       
        //menuData içerisinde itemId ye sahip elemanı bul

         const product = menuData.find((item) => item.id == itemId);
        console.log(product);

         
     

        //bulunan product a göre arayüze render et
renderDetailPage(product);
        

    }
});

