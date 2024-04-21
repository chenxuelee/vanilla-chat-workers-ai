// Import Libraries used later.


import { Hono } from 'hono'




const app = new Hono()

// The first stage is to make the steklons.
// Use JSX 



app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
