import { useState, useContext, createContext } from "react";
import esData from '../languages/Es.json'
import enData from '../languages/En.json'

const IdiomContext = createContext()

export const IdiomProvider = ({ children }) =>{
    const [currentIdiom, setCurrentIdiom] = useState('es');

    const toggleIdiom = ()=>{
        setCurrentIdiom(currentIdiom === 'es'? 'en': 'es');
    };

    const dataIdiom = {
        es: esData,
        en: enData,
    };

    return (
        <IdiomContext.Provider value={{ currentIdiom, toggleIdiom, dataIdiom }}>
            {children}
        </IdiomContext.Provider>
    );

}

export const useIdiom = ()=>{
    return useContext(IdiomContext)
}