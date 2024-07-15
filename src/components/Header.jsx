import { Link } from "react-router-dom";

const Header = () => {
   const allLinks = [
    {path: "/", name: "anasayfa"},
    {path: "/classic-periot", name: "klasik dönem"},
    {path: "/cultural-social-life", name: "kültürel & sosyal Hayat"},
    {path: "/distribution-periot", name: "dağılma dönemi"},
    {path: "/foundation-periot", name: "kuruluş dönemi"},
    {path: "/important-figures", name: "önemli figürler"},
    {path: "/increase-periot", name: "yükseliş dönemi"},
    {path: "/ottoman-heritace", name: "osmanlı mirası"},
    {path: "/stand-decline-periot", name: "duraklama & gerileme dönemi"}
   ];

   const li = allLinks.map((link, id) => {
      return(
         <>
            <li key={id}>
               <Link to={link.path}> {link.name} </Link>
            </li>
         </>
      )
   });
   return(
    <>
       <div className="w-full p-2 grid grid-cols-2 place-content-between">
           <img src="" alt="logo" />

           <ul className="flex p-1 gap-[10px]">
              {li}
           </ul>
       </div>
    </>
   )
}

export default Header;
