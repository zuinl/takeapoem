import { useState } from "react"
import poems from "../utils/poems"

function useMoods () {
    const [currentPoem, setCurrentPoem] = useState("")

    return {
        currentPoem
    }
}

export default useMoods