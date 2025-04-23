'use client';
import MenuItem from '@/interfaces/MenuInterface';
import * as React from 'react';
import { useState, useMemo } from 'react';

import Map, {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl/mapbox';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';






const TOKEN = 'pk.eyJ1Ijoia2hhbGlkdjIwIiwiYSI6ImNtOXF5dnVndDFsOXQycXNhdDJ4dXQydHYifQ.vS-mMX7ZdUgN2w4Qx9SrWA'; 

interface MenuCardProps { items: MenuItem[]; }
export default function MapGl({ items }: MenuCardProps) {
    const [popupInfo, setPopupInfo] = useState<MenuItem>();

    const pins = useMemo(
        () =>
            items.map((item, index) => (
                <Marker
                    key={`marker-${index}`}
                    longitude={item.lng}
                    latitude={item.lat}
                    anchor="bottom"
                    onClick={e => {

                        e.originalEvent.stopPropagation();
                        setPopupInfo(item);
                    }}
                >
                    <Image src={popupInfo?.id === item.id ? "/location.png" : "/location2.svg"} alt={''} width={30} height={30} />
                </Marker>
            )),
        [items, popupInfo?.id]
    );
    //   24.787386191511075, 46.713734243895736
    return (
        <>
            <Map
                initialViewState={{
                    latitude: 24.787386191511075,
                    longitude: 46.713734243895736,
                    zoom: 10.2,
                    bearing: 0,
                    pitch: 0
                }}
                style={{ height: "80vh", width: "100%" }}
                mapStyle='mapbox://styles/mapbox/standard'
                mapboxAccessToken={TOKEN}
            >
                <GeolocateControl position="top-left" />
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />

                {pins}

                {popupInfo && (
                    <Popup
                    
                    latitude={Number(popupInfo.lat)}
                    longitude={Number(popupInfo.lng)}
                        onClose={() => setPopupInfo(undefined)}
                        closeButton={false}
                        
                        offset={29}

                        // className='mapboxgl-popup-content custom-popup '

                    >
                        <Box display={"flex"} sx={{ borderRadius: 5,width:300,gap:2 ,alignItems:"center" }}>
                            <Box>
                                <Image src={"/Maskgroup.png"} alt="" height={100} width={100} style={{cursor:"pointer"}} />

                            </Box>
                            <Box>
                                <Typography color='black' fontSize={18} fontWeight={"bold"}>{popupInfo.name}</Typography>
                                <Box display={"flex"} justifyContent={"space-between"} gap={2} mt={5} alignItems={"center"}>
                                    <Typography fontSize={13} color='#1D1C1D' textAlign={"center"}  >Menu List</Typography>
                                    <Button
                                        variant="contained"
                                        focusRipple={false}
                                        sx={{
                                            minWidth: 35,
                                            height: 35,
                                            padding: 0,
                                            backgroundColor: 'secondary',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { border: '5px solid' },
                                            },
                                            
                                            fontSize: 24,
                                            '&:hover': { backgroundColor: '#f5c9e0', color: "black" },
                                        }}
                                    >{">"}</Button>
                                </Box>
                            </Box>

                        </Box>

                    </Popup>
                )}
            </Map>

        </>
    );
}

