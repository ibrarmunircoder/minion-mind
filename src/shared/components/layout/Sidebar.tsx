import {
  Divider,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import logoSrc from 'assets/logo.svg';
import HomeIcon from 'assets/sidebar/home.svg?react';
import NotificationIcon from 'assets/sidebar/notification.svg?react';
import ListingIcon from 'assets/sidebar/listing.svg?react';
import WorkflowIcon from 'assets/sidebar/workflow.svg?react';
import AnalyticsIcon from 'assets/sidebar/analytics.svg?react';
import AseetsIcon from 'assets/sidebar/assets.svg?react';
import { Link } from 'react-router-dom';
import { StickySidebar } from './StickySidebar';

const navItems = [
  { id: 'home', label: 'Home', link: '/#', icon: <HomeIcon /> },
  {
    id: 'notification',
    label: 'Notifications',
    link: '/#',
    icon: <NotificationIcon />,
  },
  { id: 'listing', label: 'Listing', link: '/#', icon: <ListingIcon /> },
  { id: 'workflows', label: 'Workflows', link: '/#', icon: <WorkflowIcon /> },
  { id: 'analytics', label: 'Analytics', link: '/#', icon: <AnalyticsIcon /> },
  {
    id: 'assets',
    label: 'Assets',
    link: '/assets/list',
    icon: <AseetsIcon />,
  },
];

export const Sidebar = () => {
  return (
    <StickySidebar>
      <Flex justifyContent="center" alignItems="center" p={4} pb={17}>
        <Link to="/">
          <Image src={logoSrc} width={143} height={47} />
        </Link>
      </Flex>
      <List display="flex" flexDirection="column" gap="7px" color="white">
        {navItems.slice(0, 2).map(({ icon, id, label, link }) => (
          <ListItem
            as={Link}
            to={link}
            key={id}
            _hover={{
              bgColor: 'clay.50',
            }}
            p={2}
            pl={6}
            fontSize={14}
            borderRadius={4}
          >
            <ListIcon width={18} height={18}>
              {icon}
            </ListIcon>
            {label}
          </ListItem>
        ))}
      </List>
      <Divider my={3} />

      <List display="flex" flexDirection="column" gap="7px" color="white">
        {navItems.slice(2).map(({ icon, id, label, link }) => (
          <ListItem
            as={Link}
            to={link}
            key={id}
            _hover={{
              bgColor: '#DEE1E64D',
            }}
            p={2}
            pl={6}
            fontSize={14}
            borderRadius={4}
          >
            <ListIcon width={18} height={18}>
              {icon}
            </ListIcon>
            {label}
          </ListItem>
        ))}
      </List>
    </StickySidebar>
  );
};
