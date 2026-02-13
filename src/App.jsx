import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider, useTheme } from './ThemeContext';
import Discography from './Discography';
import withVIPAccess from './withVIP';

const BackstageFootage = () => {
  return (
    <div style={{ background: 'rgba(0,0,0,0.1)', padding: '10px' }}>
      <h3>🎥 Conteúdo Exclusivo: Bastidores da Tour!</h3>
      <p>Hayley Williams ensaiando 'Misery Business'...</p>
    </div>
  );
};

const VipContent = withVIPAccess(BackstageFootage);

const MainContent = () => {
  const { era, toggleTheme } = useTheme();
  const [currentUserIsVip, setCurrentUserIsVip] = useState(false);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Paramore Fan Club</h1>
      <p>Era Atual: <strong>{era === 'riot' ? '🤘 Riot! (Emo)' : '🌈 After Laughter (Pop)'}</strong></p>
      
      <button onClick={toggleTheme} style={{ padding: '10px', cursor: 'pointer' }}>
        Mudar Era Musical
      </button>

      <section style={{ background: 'rgba(0,0,0,0.05)', padding: '15px', borderRadius: '8px' }}>
        <h3>Status do Usuário</h3>
        <p>Você atualmente é: <strong>{currentUserIsVip ? '🌟 Membro VIP' : '👤 Fã Comum'}</strong></p>
        
        <button 
          onClick={() => setCurrentUserIsVip(!currentUserIsVip)}
          style={{ 
            padding: '10px 20px', 
            cursor: 'pointer', 
            background: currentUserIsVip ? '#ff4d4d' : '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        >
          {currentUserIsVip ? 'Cancelar Assinatura VIP' : 'Assinar VIP Agora!'}
        </button>
      </section>

      <Discography />

      <hr style={{ margin: '20px 0' }} />

      <VipContent isVip={currentUserIsVip} />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  )
}

export default App
