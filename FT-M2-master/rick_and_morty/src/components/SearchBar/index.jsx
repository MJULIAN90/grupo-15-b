export default function SearchBar(props) {
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
         <input type='search' 
            style={{
               height: 40,
               width: 250,
               borderRadius: 10,
               marginRight: 20,
            }}
         />
         <button 
            onClick={props.onSearch}
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
