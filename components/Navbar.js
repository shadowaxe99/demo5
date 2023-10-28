```javascript
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarContainer>
      <Link href="/" passHref>
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/overview" passHref>
        <NavLink>Overview</NavLink>
      </Link>
      <Link href="/products" passHref>
        <NavLink>Products</NavLink>
      </Link>
      <Link href="/services" passHref>
        <NavLink>Services</NavLink>
      </Link>
      <Link href="/values" passHref>
        <NavLink>Values</NavLink>
      </Link>
      <Link href="/communication" passHref>
        <NavLink>Communication</NavLink>
      </Link>
      <Link href="/contact" passHref>
        <NavLink>Contact</NavLink>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
```