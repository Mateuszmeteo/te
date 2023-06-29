
import styles from './modalCard.module.scss'

export const ModalCard = ({ onClose, about}) => {
    return (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>{about}</p>
            <button onClick={onClose}>Zamknij</button>
          </div>
        </div>
      );
}
