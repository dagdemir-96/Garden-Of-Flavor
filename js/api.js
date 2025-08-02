//APİ a istek atacak fonksiyon
const getMenu= async()=>{
try {
     //api a istek at
   const response= await fetch("../db.json");
   //api den gelen veriyi json veri tipinden js nesnesine çevir
   const data= await response.json();
  

   //gelen veri içerisindeki menüyü return et
   return data.menu;
} catch (error) {
    //kullanıcıya verecek bildirim
    console.log(`Api Hatası: ${error}`);
    //hata varsa 
    return[];
}

   
}
export default getMenu;