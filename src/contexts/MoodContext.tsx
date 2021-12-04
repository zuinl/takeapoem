import { createContext, useState } from 'react';

export const MoodContext = createContext({
    currentMood: "" as String,
    setCurrentMood: (mood: String) => {  }
});

interface MoodContextProviderProps {
    children: any
}

export const MoodContextProvider = (props: MoodContextProviderProps) => {
    const [currentMood, setCurrentMood] = useState<String>("")

    return (
        <MoodContext.Provider value={{
            currentMood,
            setCurrentMood
        }}>
            {props.children}
        </MoodContext.Provider>
    )
}