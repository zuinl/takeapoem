import { useState } from "react"

const poems = [
    
]

function useMoods () {
    const [currentPoem, setCurrentPoem] = useState("")

    return {
        currentPoem
    }
}

export default useMoods