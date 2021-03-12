import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const [time, setTime] = useState(1*6);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    // Transformar minutes e secunds em String
    // padStart -> Se não tiver 2 caracter adicione um 0
    // split -> reparti em duas strings por exemplo: '2' '5'
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    // Quando clicar no button o setActive vai ser true
    function startCountDown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(1*6);
    }

    // Quero executar isso toda vez que o active e time mudar
    // Se countDown active tiver ativo e time for menor que 0
    // Quero que o time reduza -1s a cada segundo contado pelo setTimeout
    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])

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
                        onClick={startCountDown}
                        >
                        Iniciar um ciclo
                    </button>
                )}
                </>
            )}

            
           
        </div>
    );
}