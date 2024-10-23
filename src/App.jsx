// App.jsx
import { useState, useEffect } from 'react';
import appFirebase from './credenciales'; // Ajusta la ruta si es necesario
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login'; // Asegúrate de que la ruta sea correcta
import Home from './components/Home'; // Asegúrate de que la ruta sea correcta
import './App.css';

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    // Limpieza de la suscripción
    return () => unsubscribe();
  }, [auth]); // Agrega `auth` como dependencia

  return (
    <div>
      {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
    </div>
  );
}

export default App;
