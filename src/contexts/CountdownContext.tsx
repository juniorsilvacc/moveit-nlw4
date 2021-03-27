import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
  minutes: number,
  seconds: number,
  hasFinished: boolean,
  isActive: boolean,
  startCountdown: () => void,
  resetCountdown:() => void
}

interface CountdownProviderProps{
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps){

  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(1*6);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time/60);
  const seconds = time % 60;

  // Quando clicar no button o setActive vai ser true
  function startCountdown(){
    setIsActive(true);
  }

  function resetCountdown(){
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(1*6);
      setHasFinished(false)
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
          startNewChallenge();
      }
  }, [isActive, time])

  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}