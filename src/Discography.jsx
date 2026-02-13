import { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';

const Discography = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Estado para guardar os IDs dos favoritos (Ex: [2, 5])
  const [favorites, setFavorites] = useState([]);
  
  // 2. Estado para controlar o filtro visual
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    // Simulando a API (mesma de antes)
    setTimeout(() => {
      setAlbums([
        { id: 1, name: 'All We Know Is Falling', year: 2005 },
        { id: 2, name: 'Riot!', year: 2007 },
        { id: 3, name: 'Brand New Eyes', year: 2009 },
        { id: 4, name: 'Paramore', year: 2013 },
        { id: 5, name: 'After Laughter', year: 2017 },
        { id: 6, name: 'This Is Why', year: 2023 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // 3. Função para Adicionar/Remover Favoritos (Imutabilidade)
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      // Se já existe, removemos filtrando todos que NÃO são esse ID
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      // Se não existe, copiamos o array antigo e adicionamos o novo ID
      setFavorites([...favorites, id]);
    }
  };

  // 4. ESTADO DERIVADO (A lógica de filtragem acontece aqui, antes do return)
  const displayedAlbums = showOnlyFavorites
    ? albums.filter(album => favorites.includes(album.id))
    : albums;

  if (loading) return <p>Carregando discografia...</p>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>📀 Discografia Oficial</h2>
        
        {/* Botão de Filtro */}
        <button 
          onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
          style={{
            padding: '8px 16px',
            background: showOnlyFavorites ? '#ffd700' : '#ddd',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: showOnlyFavorites ? '#000' : '#555'
          }}
        >
          {showOnlyFavorites ? 'Ver Todos' : `Ver Favoritos (${favorites.length})`}
        </button>
      </div>

      {displayedAlbums.length === 0 && showOnlyFavorites ? (
        <p style={{ textAlign: 'center', color: '#999' }}>
          Você ainda não tem álbuns favoritos da Paramore! 😢
          <br/>Clique na estrelinha para adicionar.
        </p>
      ) : (
        <div>
          {displayedAlbums.map(album => (
            <AlbumCard 
              key={album.id}
              album={album}
              isFavorite={favorites.includes(album.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Discography;