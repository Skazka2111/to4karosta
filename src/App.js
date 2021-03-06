import { useState, Fragment } from "react";
import landing from "./assets/img/landing2.jpg";
import copy from "./assets/img/copy.png";

// Импорты всех картинок
import telegram from "./assets/img/telegram.png";
import viber from "./assets/img/viber.png";
import whatsapp from "./assets/img/whatsapp.png";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [copied, setCopied] = useState(false);

    const utm_medium =
        new URLSearchParams(window.location.search).get("utm_medium") ?? 32099646;

    return (
        <div className="application">
            <div className="mainBlock">
                {currentPage === 0 && (
                    <Fragment>
                        <img src={landing} alt="landing" className="landingPicture" />
                        <div className="blockTexts">
                            <h2 className="title">Реклама в ТикТок для вашего бизнеса</h2>
                            <p>
                                Выберите удобный мессенджер и получите предварительный расчет стоимости по вашему бизнесу
                            </p>
                            
                            <a href={`https://salebot.site/r/2ed615c2cdf19ac0f62f4aff394087b6_1`} target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={telegram} alt="Telegram" />
                            </a>
                            <a href={`https://salebot.site/r/2ed615c2cdf19ac0f62f4aff394087b6_2`} target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={viber} alt="Viber" />
                            </a>
                         
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default App;
