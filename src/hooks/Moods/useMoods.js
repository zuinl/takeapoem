import { useEffect, useState } from "react"

const moods = [
    "Happy 🙂",
    "Sad 😔",
    "Sleepy 😴",
    "Grateful 😇",
    "Loving 🥰",
    "Upset 😐",
    "Depressed ☹️",
    "Inspired 🤩",
    "Creative 🧐",
    "Motivated 😁",
    "Frustrated 😪",
    "Angry 😡"
]

function useMoods () {
    const [sortedMoods, setSortedMoods] = useState([])

    const sortMoods = () => {
        let sortedMoods = moods
        let currentIndex = sortedMoods.length - 1, randomIndex;

        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [sortedMoods[currentIndex], sortedMoods[randomIndex]] = [
            sortedMoods[randomIndex], sortedMoods[currentIndex]];
        }

        setSortedMoods(sortedMoods)
    }

    useEffect(() => {
        sortMoods()
    }, [])

    return {
        moods: sortedMoods
    }
}

export default useMoods