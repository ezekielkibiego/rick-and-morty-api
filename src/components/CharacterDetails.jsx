import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">{character.name} Details</h1>
      <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg flex">
        <img className="w-3/4" src={character.image} alt={character.name} />
        <div className="p-4 w-1/2">
          <h2 className="text-2xl font-semibold mb-2">{character.name}</h2>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetails;
