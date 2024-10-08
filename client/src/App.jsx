import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { SideMenu } from './widgets/side-menu';

export const App = () => {
  return (
    <main className={`text-foreground bg-background p-4 flex h-dvh`}>
      <SideMenu />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </main>
  );
};
