export default function Home() {
  return (
    <div className='relative overflow-hidden'>
      {/* Hero Section */}
      <div className='bg-gradient-to-br from-kento-dark-blue via-kento-purple to-kento-light-blue'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Welcome to{' '}
              <span className='text-kento-orange'>Kentobeans Live</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto'>
              Your hub for live music streaming with Kentobeans7. Track song
              requests, explore SOTN history, and join the community.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/songlist'
                className='bg-kento-orange hover:bg-kento-green text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg'
              >
                View Current Songlist
              </a>
              <a
                href='/commands'
                className='border-2 border-white text-white hover:bg-white hover:text-kento-dark-blue font-bold py-3 px-8 rounded-lg transition-all duration-200 text-lg'
              >
                Bot Commands
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-kento-dark-blue mb-4'>
              Stream Features
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Everything you need to enhance your Kentobeans7 streaming
              experience
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-gray-50 rounded-lg p-6 text-center'>
              <div className='w-12 h-12 bg-kento-light-blue rounded-lg flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-kento-dark-blue mb-2'>
                Live Songlist
              </h3>
              <p className='text-gray-600'>
                Real-time song request queue with live updates
              </p>
            </div>

            <div className='bg-gray-50 rounded-lg p-6 text-center'>
              <div className='w-12 h-12 bg-kento-purple rounded-lg flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                  <path
                    fillRule='evenodd'
                    d='M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM8 5H6v6h2V5z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-kento-dark-blue mb-2'>
                Song of the Night
              </h3>
              <p className='text-gray-600'>
                Track SOTN winners, standings, and history
              </p>
            </div>

            <div className='bg-gray-50 rounded-lg p-6 text-center'>
              <div className='w-12 h-12 bg-kento-green rounded-lg flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-kento-dark-blue mb-2'>
                Bot Commands
              </h3>
              <p className='text-gray-600'>
                Complete Kentobot command reference
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stream Schedule Preview */}
      <div className='py-16 bg-kento-dark-blue text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            <span className='text-kento-orange'>Live Now:</span> Check Twitch
            for Stream Status
          </h2>
          <p className='text-lg text-gray-300 mb-8'>
            Follow @kentobeans7 on Twitch for live music streaming sessions
          </p>
          <a
            href='https://twitch.tv/kentobeans7'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg inline-flex items-center'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z' />
            </svg>
            Watch on Twitch
          </a>
        </div>
      </div>
    </div>
  );
}
