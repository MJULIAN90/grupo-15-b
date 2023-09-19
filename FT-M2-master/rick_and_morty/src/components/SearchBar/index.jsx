import React, { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (e) => setId(e.target.value);

   const handleClick = () => {
      onSearch(id)
      setId('')
   }

   return (
      <div 
         style={{
            height: 80,
            // height: '60px',
            // height: '6rem',
            // height: '20vh',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            width: '100%',
         }}>
         <input 
            type='search'
            value={id}
            onChange={handleChange}
            // onChange={(e) => setId(e.target.value)}
            style={{
               height: 40,
               width: 250,
               borderRadius: 10,
               marginRight: 20,
            }}
         />
         <button 
            // onClick={()=> onSearch(id)}
            onClick={handleClick}
            style={{
               height: 40,
               width: 100,
               borderRadius: 10,
               marginRight: 30,
            }}
         >
            Agregar
         </button>
      </div>
   );
}
