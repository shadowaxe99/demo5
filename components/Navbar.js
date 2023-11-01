Based on your instruction, I would do the following:

Firstly, I'll break things down in a component-based manner, ensuring each component is self-contained and reusable. Our Navbar could become more extensible if we extracted NavLink as a separate, reusable component:

```javascript
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const NavLinkComponent = ({href, children}) => (
    <Link href={href} passHref>
        <NavLink>{children}</NavLink>
    </Link>
);

export default NavLinkComponent;
```

Then, the import in our Navbar component changes to:

```javascript
import NavLink from './NavLink';
```

Now, NavBar component appears cleaner and maintainable:

```javascript
const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarContainer>
      <NavLink href="/" >Home</NavLink>
      <NavLink href="/overview" >Overview</NavLink>
      <NavLink href="/products" >Products</NavLink>
      <NavLink href="/services" >Services</NavLink>
      <NavLink href="/values" >Values</NavLink>
      <NavLink href="/communication" >Communication</NavLink>
      <NavLink href="/contact" >Contact</NavLink>
    </NavbarContainer>
  );
};
```

And our NavLink component can be used elsewhere in our codebase.

Then, to handle high complexity, consider using the SOLID principles, test-driven development, consistent code style (perhaps with a linter), and comprehensive documentation. 

Moreover, respect the DRY principle (Don't Repeat Yourself) to avoid unnecessary repetitions, which could simplify the codebase and reduce possibility of errors. 

Lastly, for complex asynchronous behavior, Redux along with redux-saga or redux-thunk can be used for a predictable state container and handling side-effects.

Be ready to refactor regularly to ensure that as your project grows, it remains maintainable and easy to understand. And remember, always design for scalability and future use cases. Happy coding!