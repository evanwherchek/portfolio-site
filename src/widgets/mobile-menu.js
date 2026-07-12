import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import Image from 'next/image';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'inspirations', label: 'Inspirations' },
  { id: 'projects', label: 'Projects' },
  { id: 'qualifications', label: 'Qualifications' },
  { id: 'contact', label: 'Contact' },
];

function MobileMenu({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (sectionId) => {
    closeMenu();
    scrollToSection(sectionId);
  };

  return (
    <Menu
      isOpen={isOpen}
      onStateChange={handleStateChange}
      width={'280px'}
      height={'100vh'}
      burgerButtonClassName="fixed top-4 left-4 z-50 lg:hidden"
      menuClassName="bg-navy"
      morphShapeClassName="fill-navy"
      itemListClassName="text-white"
      styles={{
        bmBurgerBars: {
          backgroundColor: 'white',
        },
        bmMenu: {
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          overflow: 'hidden',
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100vh',
          top: 0,
          left: 0,
        },
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: '20px',
        }}
      >
        <Image src="/images/logo-2.png" width={300} height={300} alt="logo" />
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className="text-lg text-white bg-none border-none cursor-pointer"
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </Menu>
  );
}

export default MobileMenu;
