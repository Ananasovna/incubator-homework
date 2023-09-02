import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#0C2',
                width: '150px',

                '& .MuiSlider-rail': {
                    background: '#8B8B8B',
                },

                '& .MuiSlider-thumb': {
                    width: '18px',
                    height: '18px',
                    border: '6px solid white',
                    outline: '1px solid #0C2',
                },

                '& .MuiSlider-thumb:before': {
                    boxShadow: 'none',
                }
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
