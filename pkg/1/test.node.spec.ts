import { it, expect } from 'vitest';

it('should not run in jsdom', () => {
  expect(globalThis.document).not.toBeDefined();
});