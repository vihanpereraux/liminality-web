export interface TopbarProps {
    positionalString: string
}

export interface textListProps {
    title: string,
    content: string
}

export interface JourneyTextProps {
    imageIndex: string,
    content: string
}

export interface SectionBreakerProps {
    heading: string,
    number: string
}

export interface ChamberSectionBreakerProps {
    headingLeft: string,
    headingRight: string
}

export interface TransitionProps {
    showOverlay: boolean,
    setEntryAccepted: (value: boolean) => void
    nextRoute: string
}

export interface PageHeadingProps {
    type: "multi" | "single",
    content: string[]
}