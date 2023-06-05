import {ChangeEvent, useState} from "react"
import {useTranslation} from 'react-i18next';
import {Language} from './enums/Language.ts';

const Lang = () => {
    const {i18n} = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);

    const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const language = event.target.value;

        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
            default:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
    }

    return (
                <select value={lang} style={{position: "fixed", top:"5rem",left:"1rem"}} name="language" onChange={changeLanguage}>
                    <option value={Language.FR}>FR</option>
                    <option value={Language.EN}>EN</option>
                </select>
    )
}

export default Lang;