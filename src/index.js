import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = async (options, ctx) => {
  const { default: mermaidjsPlugin } = await import('./markdownItPlugin');

  return {
    name: 'vuepress-plugin-mermaidjs',
    define: {
      MERMAID_OPTIONS: options
    },
    extendsMarkdown (md) {
      md.use(mermaidjsPlugin);
    },
    clientAppEnhanceFiles: path.resolve(__dirname, 'clientAppEnhance.js')
  }
}

export default app;
