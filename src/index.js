import path from 'path';

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
