import React from 'react'

import {Stack} from '@mui/material'
import { categories } from '../utils/constance'

const Sidebar = () => {
  return (
    <Stack
        direction='row'
        sx={{
            overflow:'auto',
            height:{sx:'auto', md:'95%'},
            flexDirection:{md:'column'}
        }}
    >
        {categories.map((categorie)=>(
            <button
                className='category-btn'
            >
                <span>{categorie.icon}</span>
                <span>{categorie.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar