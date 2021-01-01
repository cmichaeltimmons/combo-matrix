import { html, fixture, expect } from '@open-wc/testing';

import { ComboMatrix } from '../src/ComboMatrix.js';
import '../combo-matrix.js';

describe('ComboMatrix', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<ComboMatrix>(html`<combo-matrix></combo-matrix>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<ComboMatrix>(html`<combo-matrix></combo-matrix>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<ComboMatrix>(html`<combo-matrix title="attribute title"></combo-matrix>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<ComboMatrix>(html`<combo-matrix></combo-matrix>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
