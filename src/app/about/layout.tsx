import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Raj Tangadi and Discover his educational background and professional experience."
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 