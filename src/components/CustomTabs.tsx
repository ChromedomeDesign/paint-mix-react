import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';
import Box from '@mui/material/Box';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const AntTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    marginRight: theme.spacing(1),
    '&.Mui-selected': {
      color: '#FFFFFF',
      backgroundColor: '#39C0ED',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

interface CustomTabsProps {
  tabOption: { value: string;label:string,customWidth:string }[];
  onSlects:(tabValue: string) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabOption, onSlects}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const stat= tabOption[newValue]?.value;
    onSlects(stat);
  };

  const getTabBackgroundColor = (index: number) => {
    const status = tabOption[index]?.value;
    console.log("nn",status);
    
    switch (status) {
      case 'New':
        return '#39C0ED';
      case 'InProgress':
        return '#B23CFD';
      case 'Completed':
        return 'green';
      default:
        return '#39C0ED'; 
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          {tabOption.map((item, index) => (
            <AntTab
              key={index}
              label={item.label}
              style={{ 
                backgroundColor: index === value ? getTabBackgroundColor(index) : '',
                width:item?.customWidth || '136px',
                borderTopRightRadius:'3px',
                borderTopLeftRadius:'3px',
                height:'40px',
                fontSize:'16px',
              fontWeight: 600,
                  lineHeight: "19.2px",
                  fontFamily:'Open Sans, sans-serif',}}
            />
          ))}
        </AntTabs>
      </Box>
    </Box>
  );
};

export default CustomTabs;
