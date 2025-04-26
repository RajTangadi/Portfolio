import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects ",
  description: "Explore Raj Tangadi's portfolio of web development projects including a Text-to-Image Generator, Real Estate App, Movie App, and Crypto Price Tracking App"
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 