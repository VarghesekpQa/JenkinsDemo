import { assertEquals } from '../deps.ts'

Deno.test({
  name: '[DEMO-TEST] example url test',
  fn(): void {
    const url = new URL('./foo.js', 'https://deno.land/')
    assertEquals(url.href, 'https://deno.land/foo.js')
  },
})
