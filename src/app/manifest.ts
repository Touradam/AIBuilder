import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI Course - Build Tools That Optimize Your Life',
    short_name: 'AI Course',
    description: 'A 2-weekend intensive AI education program designed for anyone — no technical background required.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

