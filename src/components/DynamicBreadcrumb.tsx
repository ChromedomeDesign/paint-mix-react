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
import { MDBNavbarItem, MDBNavbarNav } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

interface Breadcrumb {
  text: string;
  href: string;
}

interface DynamicBreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbsProps> = ({ breadcrumbs }) => {
  const breadcrumbStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const separatorStyles: React.CSSProperties = {
    margin: '0 5px',
    color: '#6c757d',
  };

  const linkStyles: React.CSSProperties = {
    textDecoration: 'none',
    color: '#007bff',
  };

  const activeLinkStyles: React.CSSProperties = {
    color: '#000',
    pointerEvents: 'none' as 'none',
  };

  return (
    <MDBNavbarNav style={breadcrumbStyles}>
      {breadcrumbs.map((breadcrumb, index) => (
        <MDBNavbarItem key={index} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          {index > 0 && <span style={separatorStyles}> / </span>}
          <Link style={index === breadcrumbs.length - 1 ? activeLinkStyles : linkStyles} to={breadcrumb.href}>
            {breadcrumb.text}
          </Link>
        </MDBNavbarItem>
      ))}
    </MDBNavbarNav>
  );
};

export default DynamicBreadcrumb;
