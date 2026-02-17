import Image from 'next/image';

export function Logo({ className, width, height }: { className?: string, width?: number, height?: number }) {
  return (
    <Image
      src="/GATTE.png"
      alt="GATTE Tecnologia Logo"
      width={width || 130}
      height={height || 36}
      className={className}
      priority
    />
  );
}
