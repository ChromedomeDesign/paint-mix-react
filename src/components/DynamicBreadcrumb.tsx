// import React from 'react';
// import { Link } from 'react-router-dom';

// interface Breadcrumb {
//   text: string;
//   href: string;
// }

// interface DynamicBreadcrumbsProps {
//   breadcrumbs: Breadcrumb[];
// }

// const DynamicBreadcrumb: React.FC<DynamicBreadcrumbsProps> = ({ breadcrumbs }) => {
//   return (
//     <nav>
//       {breadcrumbs.map((breadcrumb, index) => (
//         <span key={index}>
//           {index > 0 && " / "}
//           <Link to={breadcrumb.href}>{breadcrumb.text}</Link>
//         </span>
//       ))}
//     </nav>
//   );
// };

// export default DynamicBreadcrumb;


import React from 'react';
// import { MDBNav, MDBNavItem, MDBNavLink } from 'mdb-react-ui-kit';
import {
  MDBNavbarLink,
  MDBNavbarItem,
  MDBNavbarNav
} from 'mdb-react-ui-kit';
interface Breadcrumb {
  text: string;
  href: string;
}

interface DynamicBreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <MDBNavbarNav className="nav-tabs">
      {breadcrumbs.map((breadcrumb, index) => (
        <MDBNavbarItem key={index}>
          <MDBNavbarLink active={index === 0} href={breadcrumb.href}>
            {breadcrumb.text}
          </MDBNavbarLink>
        </MDBNavbarItem>
      ))}
    </MDBNavbarNav>
  );
};

export default DynamicBreadcrumb;

