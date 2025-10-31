import path from 'node:path';

export default {
  js2svg: {
    pretty: true,
    indent: 2
  },
  plugins: [
    'preset-default',
    {
      name: 'prefixIds',
      params: {
        delim: '-',
        prefix: (_node, info) => {
          if (info.path) {
            const base = path.basename(info.path, path.extname(info.path));
            const normalized = base.replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase();
            if (normalized.length > 0) {
              return normalized;
            }
          }
          return 'svg';
        },
        prefixClassNames: true
      }
    }
  ]
};
