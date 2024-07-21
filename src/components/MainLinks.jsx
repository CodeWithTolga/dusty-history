import { Link } from "react-router-dom";
import { useEffect } from "react";

const MainLinks = () => {

  //== bunun amacı büyük harfleri bozmadan devam ettirmektir
  function toTurkishUpperCase(text) {
    const turkishMap = {
      'i': 'İ',
      'ı': 'I',
      'ö': 'Ö',
      'ü': 'Ü',
      'ş': 'Ş',
      'ç': 'Ç'
    };
  
    return text.split(' ').map(word => {
      const firstChar = word[0].toLowerCase();
      const restOfWord = word.slice(1);
      return turkishMap[firstChar] ? turkishMap[firstChar] + restOfWord : firstChar.toUpperCase() + restOfWord;
    }).join(' ');
  }

  let ottomanUrls = [
    {path: "/ottoman/classic-period", name: "Klasik Dönem"},
    {path: "/ottoman/culture", name: "kültürler"},
    {path: "/ottoman/decline-period", name: "Dağılma Dönemi"},
    {path: "/ottoman/end", name: "Osmanlının sonu"},
    {path: "/ottoman/figures", name: "Figürler"},
    {path: "/ottoman/foundation", name: "Kuruluş Dönemi"},
    {path: "/ottoman/legacy", name: "Miras"},
    {path: "/ottoman/rise", name: "yükselme Dönemi"},
    {path: "/ottoman/sources", name: "Kaynaklar"},
    {path: "/ottoman/Stagnation-period", name: "duraklama Dönemi"},
  ];

  let ottomanChild = ottomanUrls.map((link, id) => {
    return(
      <>
        <li key={id} className="w-full p-1 group/item">
           <Link to={link.path} className="box-hover-effect">
             {toTurkishUpperCase(link.name)}
           </Link>
        </li>
      </>
    )
  });

  let RepublicUrls = [
    {path: "/republic/ataturk-life", name: "Atatürkün Hayatı"},
    {path: "/republic/foreign-policy", name: "dış politikalar"},
    {path: "/republic/important-figures", name: "önemli figürler"},
    {path: "/republic/legacy-and-death", name: "mirası ve vefatı"},
    {path: "/republic/modern-turkey", name: "modern türkiye"},
    {path: "/republic/reforms", name: "reformlar"},
    {path: "/republic/republic-proclamation", name: "cumhuriyetin ilanı"},
    {path: "/republic/republic-sources", name: "ilham kaynaklar"},
  ];

  let republicChild = RepublicUrls.map((link, id) => {
    return(
      <>
        <li key={id} className="w-full p-1 group/item">
           <Link to={link.path} className="box-hover-effect">
             {toTurkishUpperCase(link.name)}
           </Link>
        </li>
      </>
    )
  });
  return(
    <>
      <ul className="flex items-center justify-center p-1 gap-[30px]">
        <li className="flex items-center justify-center">
          <Link to="/" className="relative box-underline-hover-effect text-[15px] text-[#f1f3f3]">Anasayfa</Link>
        </li>
        <li className="group relative flex items-center justify-center cursor-pointer">
           <span className="text-[15px] text-[#f1f3f3]">Osmanlı İmparatorluğu</span>
           <div className="absolute left-0 top-[20px] opacity-0 pointer-events-none duration-500 group-hover:opacity-[1] group-hover:pointer-events-auto">
              <ul className="relative w-[186px] mt-[10px] grid grid-cols-1 place-items-start gap-[2px] bg-[#7d4b35] rounded-md">
                {ottomanChild}
              </ul>
           </div>
        </li>

        <li className="group relative flex items-center justify-center cursor-pointer">
           <span className="text-[15px] text-[#f1f3f3]">Atatürk Devri</span>
           <div className="absolute left-0 top-[20px] opacity-0 pointer-events-none duration-500 group-hover:opacity-[1] group-hover:pointer-events-auto">
              <ul className="relative w-[156px] mt-[10px] grid grid-cols-1 place-items-start gap-[2px] bg-[#7d4b35]">
                {republicChild}
              </ul>
           </div>
        </li>
      </ul>
    </>
  )
}

export default MainLinks; 