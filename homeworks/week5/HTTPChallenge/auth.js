const { Base64 } = require('js-base64').Base64;

function makeBasicAuth(user, password) {
  const tok = `${user}:${password}`;
  const hash = Base64.encode(tok);
  return `Basic ${hash}`;
}
const auth = makeBasicAuth('admin', 'admin123');

export { auth, makeBasicAuth };
