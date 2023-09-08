import i18next from "i18next";
import { useTranslation } from "react-i18next"
import { languages } from "../enums/languages";


var languageUrls = {
    pt_br : "https://wa.link/wgrzyz",
    en : "https://wa.link/x65pe8",
    es : "https://wa.link/3mlwt7"
}

export default function RetornarLink(language : string){
   
    switch(language){
        case languages.pt_br:
            return languageUrls[languages.pt_br];
        case languages.en:
            return languageUrls[languages.en];
        case languages.es:
            return languageUrls[languages.es];
    }
}