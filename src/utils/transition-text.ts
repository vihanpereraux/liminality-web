export const getTransitionScreenText = () => {
    const screenOne = {
        chamberSection: "Tangible Realities",
        chamberTitle: "states of  matter",
        textLines: [
            "Step into the realm of the senses",
            "where sight, sound, touch, and motion reveal",
            "the laws of the observable world."
        ],
        nextRoute: "/chamber-one" 
    }

    const screenTwo = {
        chamberSection: "Tangible Realities",
        chamberTitle: "states of matter",
        textLines: [
            "Step into the realm of the senses",
            "where sight, sound, touch, and motion reveal",
            "the laws of the observable world."
        ],
        nextRoute: "/chamber-two"
    }

    return { screenOne, screenTwo }
}
