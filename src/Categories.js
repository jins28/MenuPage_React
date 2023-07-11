import React from 'react'
export default function Categories({filterItems}){
   return(
    <div className='btn-container'>
        <button className='filter-btn' onClick={()=>filterItems('all')}>All</button>
        <button className='filter-btn' onClick={()=>filterItems('breakfast')}>Breakfast</button>
        <button className='filter-btn'onClick={()=>filterItems('lunch')}>Lunch</button>
        <button className='filter-btn'onClick={()=>filterItems('shakest')}>Shakes</button>
    </div>
   )
}