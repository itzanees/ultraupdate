import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' }, // Allow OpenAI
      { userAgent: 'ClaudeBot', allow: '/' }, // Allow Anthropic
      { userAgent: 'PerplexityBot', allow: '/' }, // Allow Perplexity
    ],
    sitemap: 'https://ultratekcs.com/sitemap.xml',
  }
}