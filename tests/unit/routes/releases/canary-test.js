import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | releases/canary', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:releases/canary');

    assert.ok(route);
  });
});
