import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { HomePage } from "./components/mains/homePage/homePage"
import { CardElement } from "./components/mains/homePage/CardElement/CardElement"

import elhome from './components/mains/homePage/elhome.json'
import cardAboutAgency from './components/mains/homePage/cardAboutAgency.json'





export const AppTe = () => {
    return (
        <div>
            <Header />
            <HomePage>
                <CardElement 
                title={elhome.title}
                subtitle={elhome.subtitle}
                paragraf={elhome.paragraf} 
                />
                <CardElement 
                title={cardAboutAgency.title}
                subtitle={cardAboutAgency.subtitle}
                paragraf={cardAboutAgency.paragraf}
                modalTitle={cardAboutAgency.modal.modalTitle}
                modalDescription={cardAboutAgency.modal.modalDescription}  
                />
            </HomePage>
            <p>kobenhawffeedxcvhbjkl</p>
            <Footer />
        </div>
    )
}