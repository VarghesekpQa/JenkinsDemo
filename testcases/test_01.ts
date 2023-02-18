import { assertEquals } from '../deps.ts'

Deno.test({
  name: '[DEMO-TEST] example test',
  fn(): void {
    assertEquals('world', 'world')
  },
})
