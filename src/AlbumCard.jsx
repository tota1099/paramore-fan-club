import React from 'react';

const AlbumCard = ({ album, isFavorite, onToggleFavorite }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: isFavorite ? 'rgba(255, 215, 0, 0.1)' : 'transparent', // Fundo dourado se favorito
      transition: 'background 0.3s'
    }}>
      <div>
        <h3 style={{ margin: '0 0 5px 0' }}>{album.name}</h3>
        <span style={{ color: '#666', fontSize: '0.9em' }}>Lançado em: {album.year}</span>
      </div>

      <button
        onClick={() => onToggleFavorite(album.id)}
        style={{
          background: 'none',
          border: '2px solid',
          borderColor: isFavorite ? '#ffd700' : '#ccc',
          cursor: 'pointer',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title={isFavorite ? "Remover dos favoritos" : "Marcar como favorito"}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export default AlbumCard;