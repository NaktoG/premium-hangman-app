import { useEffect, useRef, type PropsWithChildren } from 'react';

type DialogProps = PropsWithChildren<{
  isOpen: boolean;
  titleId: string;
  onClose: () => void;
}>;

export function Dialog({ children, isOpen, titleId, onClose }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md" role="presentation">
      <div
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-modal="true"
        className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-slate-900 p-6 text-white shadow-premium sm:p-8"
        role="dialog"
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
}
