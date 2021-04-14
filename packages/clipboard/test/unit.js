import {assert} from 'chai';

import '../src/dbp-clipboard';

suite('dbp-clipboard basics', () => {
  let node;

  setup(async () => {
    node = document.createElement('dbp-clipboard');
    node.setAttribute('url', 'someurl');
    node.setAttribute('realm', 'somerealm');
    node.setAttribute('client-id', 'someId');
    document.body.appendChild(node);
    await node.updateComplete;
  });

  teardown(() => {
    node.remove();
  });

  test('should render', () => {
    assert.isNotNull(node.shadowRoot);
  });
});
