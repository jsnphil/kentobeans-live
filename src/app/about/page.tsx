import Image from 'next/image';

export const metadata = {
  title: 'About | Kentobeans7'
};

export default function AboutPage() {
  const equipment = [
    {
      drums: 'Gretsch Renown Maple drum set (10", 12", 14", 22")',
      streaming: 'Focusrite Clarett 8Pre'
    },
    {
      drums:
        'DW Collector\'s Series Black Nickel over Brass 6.5" x 14" snare drum',
      streaming: 'Sony a6000'
    },
    {
      drums: 'Zildjian K Custom Hybrid 14.25" hi-hats',
      streaming: 'Logitech C920'
    },
    {
      drums: 'Zildjian K Custom Hybrid 17" crash cymbal',
      streaming: 'GVM 48" camera slider'
    },
    {
      drums: 'Sabian AA 18" medium crash cymbal',
      streaming: 'Soundcraft Notepad-8FX'
    },
    {
      drums: 'Zildjian K Custom Hybrid 21" ride cymbal',
      streaming: 'Logitech Brio'
    },
    { drums: 'Meinl Classics Custom 12" Dark trash stack', streaming: '' }
  ];

  return (
    <main className='min-h-screen bg-white text-slate-900 py-12 px-4'>
      <div className='max-w-5xl mx-auto text-center'>
        {/* Header Section */}
        <section className='mb-10'>
          <h1 className='text-4xl font-normal mb-4'>Kentobeans7</h1>
          <p className='text-slate-500 text-lg'>
            Kentobeans7 is a music streamer and drummer from Nashville, TN.
          </p>
        </section>

        {/* Equipment Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-normal mb-6'>Equipment</h2>

          <div className='overflow-hidden rounded-lg shadow-sm'>
            {/* Desktop: side-by-side grid */}
            <div className='hidden md:grid md:grid-cols-2'>
              <div className='bg-slate-100 text-slate-900 font-bold py-2 px-4'>Drums</div>
              <div className='bg-slate-100 text-slate-900 font-bold py-2 px-4'>Streaming</div>
              {equipment.map((item, index) => (
                <>
                  <div key={`drums-${index}`} className='py-1 px-4 text-sm md:text-base'>{item.drums}</div>
                  <div key={`streaming-${index}`} className='py-1 px-4 text-sm md:text-base'>{item.streaming}</div>
                </>
              ))}
            </div>

            {/* Mobile: stacked */}
            <div className='md:hidden'>
              <div className='bg-slate-100 text-slate-900 font-bold py-2 px-4'>Drums</div>
              <div className='mb-4'>
                {equipment.map((item, index) => (
                  <div key={index} className='py-1 px-4 text-sm'>{item.drums}</div>
                ))}
              </div>
              <div className='bg-slate-100 text-slate-900 font-bold py-2 px-4'>Streaming</div>
              <div>
                {equipment.filter(item => item.streaming).map((item, index) => (
                  <div key={index} className='py-1 px-4 text-sm'>{item.streaming}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className='border-slate-200 mb-12' />

        {/* Tech Section */}
        <section className='mb-12'>
          <h2 className='text-4xl font-normal mb-4'>
            Kentobot/Kentobeans.live
          </h2>
          <p className='text-lg mb-8'>
            Kentobot and Kentobeans.live is a custom-built, song request Twitch
            chat bot and stream portal
          </p>

          <h3 className='text-3xl font-normal mb-10'>Powered by</h3>

          <div className='logos-grid'>

            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
              <a
                href='https://aws.amazon.com/what-is-cloud-computing'
                target='_blank'
                rel='noreferrer'
                className='hover:opacity-80 transition-opacity'
              >
                <Image
                  src='https://d0.awsstatic.com/logos/powered-by-aws.png'
                  alt='AWS'
                  width={200}
                  height={50}
                  className='h-16 w-auto object-contain'
                />
              </a>
              <a
                href='https://www.digitalocean.com/'
                target='_blank'
                rel='noreferrer'
                className='hover:opacity-80 transition-opacity'
              >
                <Image
                  src='/DigitalOcean_logo.png'
                  alt='Digital Ocean'
                  width={280}
                  height={50}
                  className='h-12 w-auto object-contain'
                />
              </a>
              <a
                href='https://github.com/PhantomBot/PhantomBot'
                target='_blank'
                rel='noreferrer'
                className='hover:opacity-80 transition-opacity'
              >
                <Image
                  src='/phantombot_logo.png'
                  alt='Phantombot'
                  width={200}
                  height={50}
                  className='h-14 w-auto object-contain'
                />
              </a>
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
              <a
                href='https://nextjs.org/'
                target='_blank'
                rel='noreferrer'
                className='hover:opacity-80 transition-opacity'
              >
                <Image
                  src='/nextjs-logotype-light-background.svg'
                  alt='NextJs'
                  width={180}
                  height={50}
                  className='h-10 w-auto object-contain'
                />
              </a>
              <a
                href='https://vercel.com/'
                target='_blank'
                rel='noreferrer'
                className='hover:opacity-80 transition-opacity'
              >
                <Image
                  src='/vercel.svg'
                  alt='Vercel'
                  width={180}
                  height={50}
                  className='h-10 w-auto object-contain'
                />
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <footer className='mt-20 max-w-4xl mx-auto'>
          <p className='text-xs text-slate-500 leading-relaxed'>
            Kentobeans7, Kentobot, and Kentobeans.live is not affiliated with
            any of brands included on this page, and inclusion of a name and/or
            logo is not meant to imply or suggest any endorsement, sponsorship,
            or involvement, direct or indirect.
          </p>
        </footer>
      </div>
    </main>
  );
}
