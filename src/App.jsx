import { LanguageProvider } from './context/LanguageContext.jsx';
import AppRouter from './routes/AppRouter.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
      <LanguageProvider>
        <AppRouter />
        <Toaster />
      </LanguageProvider>
  );
}

export default App;
