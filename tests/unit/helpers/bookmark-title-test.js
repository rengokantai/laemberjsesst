import { bookmarkTitle } from 'laemberjsesst/helpers/bookmark-title';
import { module, test } from 'qunit';

module('Unit | Helper | bookmark title');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = bookmarkTitle(['a','b']);
  assert.equal(result,'a b');
});
