import { createContext, useState, ReactNode } from 'react';

interface ChallengesContextDate{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextDate)

export function ChallengesProvider({children} : ChallengesProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function startNewChallenge(){
        console.log('New Challenge')
    }

    function levelUp(){
      setLevel(level + 1)
    }
  

    return  (
        <ChallengesContext.Provider value={{
            level, 
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startNewChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    )
} 
