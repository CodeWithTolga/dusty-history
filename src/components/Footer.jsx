import { Link } from "react-router-dom";

const Footer = () => {  
   return(
    <>
        <footer className="w-full grid grid-cols-1 place-items-center gap-[10px] bg-[#7d4b35] p-1">

            {/* bölüm 1 */}
            <div className="w-[90%] grid grid-cols-[3fr_1fr] place-content-center">
                {/* linklerin olduğu bölüm soldab sağa doğru */}
                <ul className="flex flex-wrap items-start justify-center gap-[10px]">
                    <li className="grid grid-cols-1 place-items-center gap-1">
                        <Link to="/" className="text-[#f1f3f3] footer-hover-button-effect">SSS</Link>
                    </li>
                    <li className="grid grid-cols-1 place-items-center">
                        <Link to="/" className="text-[#f1f3f3] footer-hover-button-effect">Biz Kimiz?</Link>
                    </li>
                    <li className="grid grid-cols-1 place-items-center">
                        <Link to="/" className="text-[#f1f3f3] footer-hover-button-effect">Yaptığımız Araştırmalar</Link>
                    </li>
                    <li className="grid grid-cols-1 place-items-center">
                        <Link to="/" className="text-[#f1f3f3] footer-hover-button-effect">Kaynaklarımız</Link>
                    </li>
                </ul>

                {/* sosyal medya linkleri sağdan, yukardan aşağı doğru */}
                <ul className="flex flex-col items-center gap-[8px]">
                    <li>
                        <Link to="/" className="social-media-button-effect p-1 bg-[#743d23] text-[#f1f3f3]">
                        <img src="..\img\instagram.png" alt="social media" className="size-[20px] object-contain rounded-[20px]"/>
                        instagram
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="social-media-button-effect p-1 px-2 bg-[#743d23] text-[#f1f3f3]">
                        <img src="..\img\youtube.png" alt="social media" className="size-[20px] object-contain rounded-[20px]"/>
                        youtube
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="social-media-button-effect p-1 bg-[#743d23] text-[#f1f3f3]">
                        <img src="..\img\facebook.png" alt="social media" className="size-[20px] object-contain rounded-[20px]"/>
                        facebook
                        </Link>
                    </li>
                </ul>
            </div>

            {/* bölüm 2 */}
            <div className="w-full p-1 z-[1] relative flex items-center justify-center before:w-full before:h-[2px] before:bg-[#ffa94c] before:rounded-md before:-z-[1]">
                <div className="absolute px-[8px] py-[2px] rounded-md bg-[#2b2b3b] text-[14px] text-[#f1f4f4]">NorthyShavion tarafından tüm hakları saklıdır</div>
            </div>

        </footer>
    </>
   )
}

export default Footer;