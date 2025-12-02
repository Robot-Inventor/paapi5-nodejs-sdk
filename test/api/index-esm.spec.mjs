import assert from 'node:assert/strict';
import { describe, it } from 'mocha';

describe('ESM entrypoint', () => {
  it('exposes the default API surface', async () => {
    const { default: ProductAdvertisingAPIv1 } = await import('../../index.js');

    assert.ok(ProductAdvertisingAPIv1, 'default export is present');
    assert.ok(ProductAdvertisingAPIv1.ApiClient, 'ApiClient is available');
    assert.ok(ProductAdvertisingAPIv1.DefaultApi, 'DefaultApi is available');
  });
});
