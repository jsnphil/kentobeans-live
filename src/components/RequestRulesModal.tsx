import Modal from './Modal';
import { acceptSongRules } from '@/app/set-rules-cookie-action';

export default function RequestRulesModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  async function handleOk() {
    await acceptSongRules();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Song Request Rules'>
      <div className='space-y-4 text-text-inverse'>
        <div>
          <h3 className='font-semibold text-kento-dark-blue mb-2'>
            General Rules
          </h3>
          <ul className='space-y-1 text-sm'>
            <li>
              Songs can be requested using the{' '}
              <span className='font-mono'>!sr</span> command in chat
            </li>
            <li>Only one song per user is allowed in the queue at a time</li>
            <li>You must be present in the chat for your song to be played</li>
            <li>Maximum song length is 6 minutes</li>
            <li>
              Song lyrics must be in English only, with limited exceptions for
              songs like anime theme and/or well-known video game music
            </li>
            <li>
              Please avoid requests that involve a lot of double bass/kick
              drum and/or metal songs.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-kento-dark-blue mb-2'>Bumps</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              You can bump a request to the top of the queue for free for 300
              beans or 6000 channel points. You can also bump with at least a
              $3.00 tip, by subscribing, or by gifting a sub.
            </li>
            <li>
              Bump are limited to 1 free and 1 one paid per person per stream.
              Bean bumps are limited to once per week per user.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-kento-dark-blue mb-2'>
            Queue Management
          </h3>
          <ul className='space-y-1 text-sm'>
            <li>Bumped songs play in order they were bumped</li>
            <li>
              Songs are selected from the queue at random based on shuffle
              entries
            </li>
          </ul>
        </div>

        <div className='pt-2 border-t border-border-primary'>
          <p className='text-xs text-text-secondary'>
            Rules subject to change. Moderators reserve the right to skip any
            song.
          </p>
        </div>

        <div className='flex justify-end pt-2'>
          <button
            type='button'
            onClick={handleOk}
            className='bg-kento-green hover:bg-kento-green/90 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors'
          >
            Accept
          </button>
        </div>
      </div>
    </Modal>
  );
}
