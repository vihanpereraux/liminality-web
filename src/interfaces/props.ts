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

export interface PageContentProps {
    heading: string,
    content: string
}

export interface SnapPreviewProps {
    image: string,
    left?: string,
    right?: string,
    top?: string,
    caption?: string
    setCaptionText?: (value: string) => void
}

export interface imageListProps {
    firstRow: SnapPreviewProps[],
    secondRow: SnapPreviewProps[],
}

export interface SnapGalleryProps {
    items: imageListProps []
}