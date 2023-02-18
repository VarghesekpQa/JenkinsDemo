import { assertEquals } from '../deps.ts'

Deno.test({
  name: '[DEMO-TEST] example async test',
  async fn() {
    const x = 1 + 2
    assertEquals(x, 3)
  },
})
