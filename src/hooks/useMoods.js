import { useEffect, useState } from "react"

const moods = [
    "Happy đ",
    "Sad đ",
    "Sleepy đ´",
    "Grateful đ",
    "Loving đĨ°",
    "Upset đ",
    "Depressed âšī¸",
    "Inspired đ¤Š",
    "Creative đ§",
    "Motivated đ",
    "Frustrated đĒ",
    "Angry đĄ"
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