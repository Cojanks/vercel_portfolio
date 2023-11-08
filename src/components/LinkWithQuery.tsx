import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

export const LinkWithQuery = ({ children, to, ...props }: NavLinkProps) => {
  const { search } = useLocation();

  return (
    <NavLink to={to + search} {...props}>
      {children}
    </NavLink>
  );
};
