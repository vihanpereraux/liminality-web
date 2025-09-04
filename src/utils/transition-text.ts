export const getTransitionScreenText = (targetScreen: string) => {
    let returnValue: any;

    switch (targetScreen) {
        case "screenOne":
            returnValue = {
                chamberSection: "Tangible Realities",
                chamberTitle: "states of  matter",
                textLines: [
                    "Step into the realm of the senses",
                    "where sight, sound, touch, and motion reveal",
                    "the laws of the observable world."
                ],
                nextRoute: "/chamber-one"
            }
            break;

        case "screenTwo":
            returnValue = {
                chamberSection: "Tangible Realities",
                chamberTitle: "states of matter",
                textLines: [
                    "Step into the realm of the senses",
                    "where sight, sound, touch, and motion reveal",
                    "the laws of the observable world."
                ],
                nextRoute: "/chamber-two"
            }
            break;

        case "screenFour":
            returnValue = {
                chamberSection: "Tangible Realities",
                chamberTitle: "states of matter",
                textLines: [
                    "Step into the realm of the senses",
                    "where sight, sound, touch, and motion reveal",
                    "the laws of the observable world."
                ],
                nextRoute: "/tunnel"
            }
            break;

        default:
            break;
    }

    return returnValue
}
