import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | features-counter', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    this.set('datum', {
      id: '3.6',
      content: [
        {
          __recordData: {
            id: '3.6',
            __data: {
              id: '3.6',
              changes: [
                {
                  feature: true,
                  link: "https://blog.emberjs.com/2016/11/30/ember-2-10-released.html",
                  title: "Sorting of package.json"
                },
                {
                  feature: true,
                  link: "https://blog.emberjs.com/2016/11/30/ember-2-10-released.html",
                  title: "Sorting of package.json"
                },
                {
                  feature: true,
                  link: "https://blog.emberjs.com/2016/11/30/ember-2-10-released.html",
                  title: "Sorting of package.json"
                },
              ],
            },
          },
          id: '3.6',
        },
      ],
    });
    this.set('toVersion', '3.7');
    this.set('fromVersion', '3.5');

    await render(
      hbs`{{features-counter this.datum this.toVersion this.fromVersion}}`
    );

    assert.equal(this.element.textContent.trim(), '3');
  });
});
