import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ultratek Arabia',
    short_name: 'Ultratek',
    description: 'Leading cold storage and warehouse construction in Saudi Arabia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050816',
    theme_color: '#22D3EE',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      // Add a 192x192 and 512x512 PNG to your /public folder if you have them
      // { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  }
}