import React from "react";

// MUI
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

// props
import type { PageHeadingProps } from "../../interfaces/props";

const PageHeading: React.FC<PageHeadingProps> = ({ type, content }) => {
    return (
        <>
            {type == "multi" ? (
                <>
                    <Grid container spacing={0}>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                                height: 'fit-content'
                            }}>
                            <Typography sx={{
                                color: '#B3B3B3',
                                fontFamily: 'Geist-Regular',
                                textTransform: 'uppercase',
                                fontSize: 75,
                                p: 0,
                                width: 'fit-content',
                            }}>{content[0]}</Typography>

                            <Typography sx={{
                                color: '#B3B3B3',
                                fontFamily: 'GeistMono-Light',
                                textTransform: 'uppercase',
                                fontSize: 8,
                                p: 0,
                                width: 'fit-content',
                                position: 'absolute',
                                left: '65%',
                                top: 25,
                                transform: 'translateX(-50%)'
                            }}>[ tangible ]</Typography>

                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                                height: 'fit-content'
                            }}>
                            <Typography sx={{
                                color: '#B3B3B3',
                                fontFamily: 'Geist-Regular',
                                textTransform: 'uppercase',
                                fontSize: 75,
                            }}>{content[1]}</Typography>

                            <Typography sx={{
                                color: '#B3B3B3',
                                fontFamily: 'GeistMono-Light',
                                textTransform: 'uppercase',
                                fontSize: 8,
                                p: 0,
                                width: 'fit-content',
                                position: 'absolute',
                                left: '50%',
                                top: 25,
                                transform: 'translateX(-50%)'
                            }}>[ realities ]</Typography>

                            <img style={{ 
                                position: 'absolute',
                                right: 0,
                                bottom: 30,
                                width: '3%'
                             }} src="/icons/down-arrow.svg" alt="down-arrow" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} sx={{ mt: -3 }}>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'right',
                                position: 'relative',
                                height: 'fit-content'
                            }}>

                            <Typography sx={{
                                color: '#B3B3B3',
                                fontFamily: 'GeistMono-Light',
                                textTransform: 'uppercase',
                                fontSize: 8,
                                p: 0,
                                width: 'fit-content',
                                position: 'absolute',
                                left: '8%',
                                bottom: 28,
                            }}>[ → ]</Typography>

                            <Typography sx={{
                                color: '#B3B3B3',
                                fontFamily: 'GeistMono-Light',
                                textTransform: 'uppercase',
                                fontSize: 8,
                                p: 0,
                                width: 'fit-content',
                                position: 'absolute',
                                left: '55%',
                                bottom: 28,
                            }}>[ → ]</Typography>

                            <Typography sx={{
                                color: '#B3B3B3',
                                fontFamily: 'Geist-Regular',
                                textTransform: 'uppercase',
                                fontSize: '5rem',
                                p: 0,
                            }}>{content[2]}</Typography>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid container spacing={0} sx={{ mt: 0 }}>
                        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'right'
                            }}>
                            <Typography sx={{
                                color: '#B3B3B3',
                                fontFamily: 'Geist-Regular',
                                textTransform: 'uppercase',
                                fontSize: '5rem',
                                p: 0,
                            }}>{content[0]}</Typography>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )
}

export default PageHeading