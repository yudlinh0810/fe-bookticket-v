import React from 'react';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import '../styles/layouts/MainLayout.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='layout-wrapper'>
      <MainHeader />
      <main className='content'>{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
