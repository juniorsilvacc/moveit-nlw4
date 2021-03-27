import { useContext } from 'react';
import {CountdownContext} from "../contexts/CountdownContext";
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){

    const {
        minutes, 
        seconds, 
        hasFinished,
         isActive, 
         startCountdown, 
         resetCountdown
        } = useContext(CountdownContext);

    // Transformar minutes e secunds em String
    // padStart -> Se não tiver 2 caracter adicione um 0
    // split -> reparti em duas strings por exemplo: '2' '5'
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                disabled
                type="button" 
                className={styles.countdownButton}
                onClick={resetCountdown}
                >
                Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                    <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        // Quando clicar no button ativar a função resetCountdown
                        onClick={resetCountdown}
                        >
                        Abandonar ciclo
                    </button>
                ) : (
                    <button 
                        type="button" 
                        className={styles.countdownButton}
                        // Quando clicar no button ativar a função startCountDown
                        onClick={startCountdown}
                        >
                        Iniciar um ciclo
                    </button>
                )}
                </>
            )}

            
           
        </div>
    );
}