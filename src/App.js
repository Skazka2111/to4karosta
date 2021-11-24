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
                            
                            <a href={`https://salebot.site/r/2f6e18a8fbfe97787cfe8b30c748a836_1&utm_medium=${utm_medium}`} target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={telegram} alt="Telegram" />
                            </a>
                            <a href={`https://salebot.site/r/2f6e18a8fbfe97787cfe8b30c748a836_2&utm_medium=${utm_medium}`} target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={viber} alt="Viber" />
                            </a>
                            <a href={`https://salebot.site/r/2f6e18a8fbfe97787cfe8b30c748a836_6&utm_medium=${utm_medium}`} target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={whatsapp} alt="WhatsApp" />
                            </a>
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default App;
