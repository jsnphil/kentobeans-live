import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navigation />
      <main className='flex-1'>{children}</main>
      <footer className='bg-kento-dark-blue text-white py-8 mt-auto'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <p className='text-sm text-gray-300'>
              © 2026 Kentobeans Live. Built for the community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
