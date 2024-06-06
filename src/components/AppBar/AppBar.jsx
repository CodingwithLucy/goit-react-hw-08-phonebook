import { Navigation } from '../Navigation/Navigation.jsx';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { AuthNav } from '../AuthNav/AuthNav.jsx';
import { useAuth } from '../../hooks/useAuth.js';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
