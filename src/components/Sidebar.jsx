import React from 'react'

import {Stack} from '@mui/material'
import { categories } from '../utils/constance'

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
    
  return (
    <Stack
        direction='row'
        sx={{
            overflow:'auto',
            height:{sx:'auto', md:'95%'},
            flexDirection:{md:'column'},
            position:{xs:'sticky'}
        }}
    >
        {categories.map((categorie)=>(
            <button
                className='category-btn'
                onClick={()=>{setSelectedCategory(categorie.name)}}
                style={{
                    background:categorie.name===selectedCategory && 'rgba(186, 41, 208)',
                    color:'#fff',
                    marginRight:'15px'
                }}
                key={categorie.name}
            >
                <span style={{color: categorie.name===selectedCategory?'#FFF':'rgba(186, 41, 208)'}}>{categorie.icon}</span>
                <span style={{opacity: categorie.name===selectedCategory?'1': '0.6', marginLeft:'15px'}}>{categorie.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar