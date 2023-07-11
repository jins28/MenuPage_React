import React,{useState} from 'react'
import items from'./data'
import Menu from './Menu'
import Categories from './Categories'




function App() {
  const[menuItems,setMenuItems] = useState(items)
  
  const filterItems = (category) =>{
    if(category==='all'){
      setMenuItems(items);
      return;
    }
  const newItems = items.filter((item)=>item.category === category)
   setMenuItems(newItems)
}
  return (
    <main>
      <section className ="menu section">
      <div className = "title">
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems}/>
      <Menu items={menuItems}/>
   
      </section>
    </main>
    
   
  );
}

export default App;
