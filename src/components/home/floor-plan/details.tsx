import React, { useEffect, useState } from "react";

// components
import DetailBox from "./detail-box";

// utils
import { getDetails } from "../../../utils/floor-plan-details";

const Details: React.FC = () => {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [displayText, setDisplayText] = useState<string>("");

    // Floor plan hover event listener
    useEffect(() => {
        const handleFloorPlanHover = (event: CustomEvent) => {
            const { detail } = event;
            if (detail.type === 'enter') {
                setIsHovering(true);
                setHoverText(detail.text);
            } else if (detail.type === 'leave') {
                setIsHovering(false);
                setHoverText(null);
            }
        };
        window.addEventListener('floorPlanHover', handleFloorPlanHover as EventListener);
        return () => {
            window.removeEventListener('floorPlanHover', handleFloorPlanHover as EventListener);
        };
    }, []);

    useEffect(() => {
        if (isHovering && hoverText) {
            setDisplayText(hoverText);
        } else if (!isHovering) {
            const timer = setTimeout(() => {
                setDisplayText("");
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isHovering, hoverText]);

    return (
        <>
            <DetailBox data={{
                left: 10,
                top: 40,
                lableText: "+ [ Title ] ",
                value: displayText && getDetails(displayText)[0].title,
                isHovering: isHovering,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            <DetailBox data={{
                right: 10,
                top: 40,
                lableText: "+ [ Room Measurements ] ",
                value: displayText && getDetails(displayText)[0].roomMeasurements,
                isHovering: isHovering,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            <DetailBox data={{
                bottom: 50,
                left: 10,
                lableText: "+ [ Curation ] ",
                value: displayText && getDetails(displayText)[0].curation,
                isHovering: isHovering,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            <DetailBox data={{
                bottom: 50,
                right: 10,
                lableText: "+ [ Chambers ] ",
                value: displayText && getDetails(displayText)[0].chambers,
                isHovering: isHovering,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />
        </>
    )
}

export default Details