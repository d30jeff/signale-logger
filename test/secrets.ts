import { Signale, SignaleConstructorOptions } from '..';

// In reality secrets could be securely fetched/decrypted through a dedicated API
const [USERNAME, TOKEN, SECRET] = ['klaussinani', 'token', '$secret', ''];

const opts: SignaleConstructorOptions = {
  secrets: [USERNAME, TOKEN]
}

const logger1 = new Signale(opts);

logger1.log('$ exporting USERNAME=%s', USERNAME);
logger1.log('$ exporting TOKEN=%s', TOKEN);
logger1.log('$ exporting SECRET=%s', TOKEN);

// `logger2` inherits all secrets from its parent `logger1`
const logger2 = logger1.scope('parent');

logger2.log('$ exporting USERNAME=%s', USERNAME);
logger2.log('$ exporting TOKEN=%s', TOKEN);
logger2.log('$ exporting SECRET=%s', TOKEN);
