const { promisify } = require('util');

const rename = promisify(require('fs').rename);

(async () => {
  await rename('public', 'docs');
})();