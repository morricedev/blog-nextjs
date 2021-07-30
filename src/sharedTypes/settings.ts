import { MenuPropsLinks } from '../components/Menu';
import { Image } from './image';

export type SettingsStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: Image;
  menuLink: MenuPropsLinks[];
  footer: string;
};
