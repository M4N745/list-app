import { Link } from 'react-router-dom';
import { Header as StyledHeader } from '@/components/layout/Header/Header.style'

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">List</Link>
      |
      <Link to="/jokes">Best Jokes</Link>
    </StyledHeader>
  );
}
