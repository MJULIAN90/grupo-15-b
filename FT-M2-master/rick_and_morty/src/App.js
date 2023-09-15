import './App.css';

//  Cuando en nuestra carpeta tenemos un archivo llamado index.js, no hace falta especificar el nombre del archivo, ya que por defecto, si no se especifica, se importa el index.js
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar 
            onSearch={(characterID) => window.alert(characterID)} 
         />
         <Cards characters={characters} />
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
