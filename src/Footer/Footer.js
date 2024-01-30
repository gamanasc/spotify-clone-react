import React from "react";
import './Footer.css';


const Footer = () => {
    return(
        <footer>
            <div className="footer__left">
                <span className="uppercase">Testar o premium de graça</span>
                <span >Inscreva-se para curtir música infinita ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito</span>
            </div>
            <div className="footer__right">
                <button className="btn-footer">
                    Inscreva-se grátis
                </button>
            </div>
        </footer>
    )
}

export default Footer;