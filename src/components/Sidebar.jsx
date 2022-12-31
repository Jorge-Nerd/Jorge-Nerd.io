import React from 'react'

import {Stack} from '@mui/material'
import { categories } from '../utils/constance'

const Sidebar = () => {
    const selectedCategory='New'
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
                style={{
                    background:categorie.name===selectedCategory && '#FC1503',
                    color:'#fff',
                    marginRight:'15px'
                }}
                key={categorie.name}
            >
                <span style={{color: categorie.name===selectedCategory?'#FFF':'red'}}>{categorie.icon}</span>
                <span style={{opacity: categorie.name===selectedCategory?'1': '0.5'}}>{categorie.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar