'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/commands', label: 'Commands' },
    { href: '/songlist', label: 'Songlist' },
    { href: '/song-history', label: 'Song History' },
    { href: '/about', label: 'About' },
    { href: '/shop', label: 'Shop' },
    { href: '/request-rules', label: 'Request Rules' },
    {
      href: '/song-of-the-night',
      label: 'SOTN',
      submenu: [
        { href: '/song-of-the-night/standings', label: 'Standings' },
        { href: '/song-of-the-night/users', label: 'Users' },
        { href: '/song-of-the-night/songs', label: 'Songs' },
        { href: '/sotn-playlists', label: 'Playlists' }
      ]
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='bg-kento-dark-blue border-b-2 border-kento-light-blue shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='text-kento-orange font-bold text-xl hover:text-kento-green transition-colors duration-200'
            >
              Kentobeans Live
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navigationItems.map((item) => (
                <div key={item.href} className='relative group'>
                  {item.submenu ? (
                    <>
                      <button
                        type='button'
                        className='text-white hover:bg-kento-purple hover:text-kento-orange px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center'
                      >
                        {item.label}
                        <svg
                          className='ml-1 h-4 w-4'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                      {/* Dropdown Menu */}
                      <div className='absolute left-0 mt-2 w-48 bg-kento-dark-blue border border-kento-light-blue rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                        <div className='py-1'>
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className='block px-4 py-2 text-sm text-white hover:bg-kento-purple hover:text-kento-orange transition-colors duration-200'
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className='text-white hover:bg-kento-purple hover:text-kento-orange px-3 py-2 rounded-md text-sm font-medium transition-all duration-200'
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* User Auth Section */}
          <div className='hidden md:flex items-center space-x-4'>
            {/* Placeholder for authentication - will be replaced with NextAuth */}
            <button
              type='button'
              className='text-white hover:text-kento-orange transition-colors duration-200'
              aria-label='User account'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              onClick={toggleMenu}
              className='text-white hover:text-kento-orange focus:outline-none focus:text-kento-orange transition-colors duration-200'
              aria-label='Toggle menu'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 bg-kento-dark-blue border-t border-kento-light-blue'>
            {navigationItems.map((item) => (
              <div key={item.href}>
                {item.submenu ? (
                  <>
                    <div className='text-kento-orange px-3 py-2 text-base font-medium'>
                      {item.label}
                    </div>
                    <div className='pl-4 space-y-1'>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className='block text-white hover:bg-kento-purple hover:text-kento-orange px-3 py-2 rounded-md text-sm font-medium transition-all duration-200'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className='block text-white hover:bg-kento-purple hover:text-kento-orange px-3 py-2 rounded-md text-base font-medium transition-all duration-200'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile User Auth */}
            <div className='pt-4 border-t border-kento-light-blue'>
              <button
                type='button'
                className='flex items-center w-full text-left text-white hover:bg-kento-purple hover:text-kento-orange px-3 py-2 rounded-md text-base font-medium transition-all duration-200'
              >
                <svg
                  className='mr-3 h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
