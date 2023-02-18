import { assertEquals } from '../deps.ts'

Deno.test({
  name: '[DEMO-TEST] example async test',
  async fn() {
    const decoder = new TextDecoder('utf-8')
    const data = await Deno.readFile('./hello_world.txt')
    assertEquals(decoder.decode(data), 'hi welcome to Jenkins...')
  },
})
