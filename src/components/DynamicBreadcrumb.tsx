import React from 'react';
import { Link } from 'react-router-dom';

interface Breadcrumb {
  text: string;
  href: string;
}

interface DynamicBreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          {index > 0 && " / "}
          <Link to={breadcrumb.href}>{breadcrumb.text}</Link>
        </span>
      ))}
    </nav>
  );
};

export default DynamicBreadcrumb;
