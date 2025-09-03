export const getDetails = (value: string) => {
    let details: any[] = [];

    switch (value) {
        case "Room-01":
            details = [];
            details.push({
                title: "Tangible Realities",
                roomMeasurements: "22m x 22m",
                curation: "Step into the realm of the senses - where sight, sound, touch, and motion reveal the laws of the observable world.",
                chambers: [
                    "room 01 - States of Matter",
                    "room 02 - Earthscapes",
                    "room 03 - Bending of Light",
                ]
            });
            break;

        case "Tunnel":
            details = [];
            details.push({
                title: "The Liminal Passage",
                roomMeasurements: "22m x 22m",
                curation: "Step through the Threshold, a liminal space that marks the divide between the seen and the unseen, the tangible and the theoretical.",
                chambers: [
                    "room 01 - States of Matter",
                    "room 02 - Earthscapes",
                    "room 03 - Bending of Light",
                ]
            });
            break;

        case "Room-02":
            details = [];
            details.push({
                title: "Beyond Perception",
                roomMeasurements: "22m x 22m",
                curation: "Welcome to the realm of the imaginary, where the senses alone cannot reveal the mysteries of the universe.",
                chambers: [
                    "room 01 - States of Matter",
                    "room 02 - Earthscapes",
                    "room 03 - Bending of Light",
                ]
            });
            break;

        default:
            break;
    }
    return details;
}