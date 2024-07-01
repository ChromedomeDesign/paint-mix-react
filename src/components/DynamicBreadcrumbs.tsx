import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

interface Breadcrumb {
  text: string;
  href?: string;
}

interface DynamicBreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const DynamicBreadcrumbs: React.FC<DynamicBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => {
          if (index === breadcrumbs.length - 1) {
            return (
              <Typography color="text.primary" key={breadcrumb.text}>
                {breadcrumb.text}
              </Typography>
            );
          } else {
            return (
              <Link
                underline="hover"
                color="inherit"
                href={breadcrumb.href}
                key={breadcrumb.text}
              >
                {breadcrumb.text}
              </Link>
            );
          }
        })}
      </Breadcrumbs>
    </div>
  );
};

export default DynamicBreadcrumbs;
