import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/GATTE.png"
      alt="GATTE Tecnologia Logo"
      width={130}
      height={36}
      className={className}
      priority
    />
  );
}
