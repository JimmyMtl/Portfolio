import {ChangeEvent, useState} from "react"
import {useTranslation} from 'react-i18next';
import {Language} from './enums/Language.ts';
import style from "./Lang.module.scss"

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
        <select value={lang} className={style.container} name="language" onChange={changeLanguage}>
            <option value={Language.FR}>Fr</option>
            <option value={Language.EN}>En</option>
        </select>
    )
}

export default Lang;