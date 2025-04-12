"use client";
import { Turnstile } from '@marsidev/react-turnstile';

interface TurnstileCaptchaProps {
  onVerify: (token: string) => void;
}

export default function TurnstileCaptcha({ onVerify }: TurnstileCaptchaProps) {
  return (
    <div className="my-4">
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
        onSuccess={onVerify}
        theme="auto"
        className="w-full"
      />
    </div>
  );
}
