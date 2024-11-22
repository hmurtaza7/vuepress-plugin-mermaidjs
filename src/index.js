import path from 'path';
import { fileURLToPath } from 'url';
import { prepareClientConfigFile } from './prepareClientConfigFile.js';

const mermaidPlugin = async (options, ctx) => {
  const { default: mermaidjsPlugin } = await import('./markdownItPlugin.js');

  return {
    name: 'vuepress-plugin-mermaidjs',
    define: {
      MERMAID_OPTIONS: options
    },
    extendsMarkdown (md) {
      md.use(mermaidjsPlugin);
    },

    clientConfigFile: (app) => prepareClientConfigFile(app, options),
  }
}

export default mermaidPlugin;