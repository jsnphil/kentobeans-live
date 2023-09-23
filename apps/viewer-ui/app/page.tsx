import Image from 'next/image';
import logo from '../public/logo.png';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <main>
        <div className="flex items-center justify-center mt-5 mb-5">
          <Image
            id="kentobeansLogo"
            src={logo}
            alt="Kentobeans Logo"
            width={400}
            height={400}
          />
        </div>
        <div className="pt-2 text-center">
          <div className="pt-2">
            <p>
              Drum grooves and good vibes! Live on Tuesdays and Thursdays from 6
              to 9pm Central.
            </p>
          </div>
          <div className="pt-2">
            <p>Themed streams on Thursdays!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
