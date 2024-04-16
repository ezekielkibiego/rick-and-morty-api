import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteCharacter = id => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setCharacters(characters.filter(character => character.id !== id));
    });
  };

  return (
    <div className="container mx-auto p-8 mb-4 mt-4">
      <h1 className='mb-4 font-xl text-center '>List of Characters</h1>
      <div className="w-full flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-4 border rounded-md border-red-500"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredCharacters.map(character => (
          <div key={character.id} className="border p-4">
            <Link to={`/character/${character.id}`}>
              <img src={character.image} alt={character.name} className="w-full h-auto mb-2" />
              <p className="text-center">{character.name}</p>
            </Link>
            <button onClick={() => deleteCharacter(character.id)} className="block w-full mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
