'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { ModalProps } from '@/types/components';

export default function Modal({
  isOpen,
  onClose,
  title,
  children
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black/70 backdrop-blur-sm' />

      {/* Modal */}
      <div className='relative bg-background border border-border-primary rounded-xl shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto'>
        {/* Header */}
        <div className='flex items-center justify-between p-4 bg-kento-dark-blue rounded-t-xl border-b border-border-primary'>
          <h2 className='text-lg font-bold text-white'>{title}</h2>
          <button
            onClick={onClose}
            aria-label='Close dialog'
            className='text-text-muted hover:text-white transition-colors p-1'
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
}
