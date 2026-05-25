import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'your-github-username';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgPage = repo === `${owner}.github.io`;

export default defineConfig({
  site: isGitHubActions ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: isGitHubActions && repo && !isUserOrOrgPage ? `/${repo}` : '/',
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
