import { it, expect } from 'vitest';

it('should run in jsdom', () => {
  expect(globalThis.document).toBeDefined();
});