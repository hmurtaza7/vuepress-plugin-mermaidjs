import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = (options, ctx) => {
  return {
    name: 'vuepress-plugin-mermaidjs',
    define: {
      MERMAID_OPTIONS: options
    },
    extendsMarkdown (md) {
      md.use(require('./markdownItPlugin'))
    },
    clientAppEnhanceFiles: path.resolve(__dirname, 'clientAppEnhance.js')
  }
}

export default app;
