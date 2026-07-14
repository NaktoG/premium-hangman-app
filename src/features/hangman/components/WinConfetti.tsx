import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

type WinConfettiProps = {
  trigger: boolean;
};

const CYAN = ['#67e8f9', '#22d3ee', '#06b6d4'];

export function WinConfetti({ trigger }: WinConfettiProps) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (!trigger || hasFired.current) return;
    hasFired.current = true;

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.65 },
      colors: CYAN,
      disableForReducedMotion: true,
    });
  }, [trigger]);

  useEffect(() => {
    if (!trigger) {
      hasFired.current = false;
    }
  }, [trigger]);

  return null;
}
