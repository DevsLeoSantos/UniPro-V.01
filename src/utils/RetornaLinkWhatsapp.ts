import i18next from "i18next";
import { useTranslation } from "react-i18next"
import { languages } from "../enums/languages";


var languageUrls = {
    pt_br : "https://wa.link/wgrzyz",
    en : "https://wa.link/x65pe8",
    es : "https://wa.link/3mlwt7"
}

var languageUrls2 = {
    pt_br : "https://wa.link/w63kpq",
    en : "https://wa.link/9vi8x9",
    es : "https://wa.link/uthci5"
}

export default function RetornarLink(language : string, useLanguageUrls2 = false){
   
    switch(language){
        case languages.pt_br:
            return useLanguageUrls2 ? languageUrls2[language] : languageUrls[language];
            //return languageUrls[languages.pt_br];
        case languages.en:
            return useLanguageUrls2 ? languageUrls2[language] : languageUrls[language];
            //return languageUrls[languages.en];
        case languages.es:
            return useLanguageUrls2 ? languageUrls2[language] : languageUrls[language];
            //return languageUrls[languages.es];

}
}
