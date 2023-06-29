import styles from './cardElement.module.scss'
import { useState } from 'react';
import { ModalCard } from './ModalCard/ModalCard';

export const CardElement = ({title, subtitle, paragraf, about}) => {

const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
    return(
        <div className={styles.cardElementDiv}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{paragraf}</p>
            <button onClick={openModal}>Pokaż modal</button>

            {modalVisible && (
            <ModalCard onClose={closeModal} 
            about={about.head}{about.lorem}/>)}
      
        </div>
    )
}