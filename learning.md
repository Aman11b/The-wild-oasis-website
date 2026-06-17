# Next js

- Each page is a react component whihc we export from page.js file
- whatever is rendered is returned by RootLaoyout
- layouts are server components

## What is React Server Components?

- why react server components?
- in react UI=f(state) 100% client side

  > but it requires lots of js,client server waterfall(multiple compoent needs to fetch data one after another)

- in PHP alternative is 100% server-side
- UI=f(data)

  > easy and fast to fetch data,close to data source,0kb of js needed to sent

- we want UI=f(data,state)
  - we want best of both that is REACT SERVER COMPONENT

## What is RSC(name of whole paradigm)?

- a new full satck architecture forr eact apps
- we are eriting frontend and backend code side by side
- RSC is NOT active by default in new React apps(vite apps) it needs to be plemented by framwork like next.js(app router)(coz there is no server)
- intrduced the server as an integral part of react component tree: server component ,it does it by Server component
- server component(name of component type)
  - which only rendered on server never on client
  - they basically do UI=f(data)
  - we can build back end by react
  - dont nmake into bundle
  - default in apps that use the RSC architecture
- client Component (UI=f(state))
  - regular component

### server client boundry

- split point between server and client code
- useclient is used to create this boundry
  - created client subtree which executed in browser

## SERVER COMPONENT VS CLIENT COMPONENT

### server componet

- default
- no state/hooks
- lifting state up -> NA
- Props -> Yes (must be serializable when passed ot client component.No function or classes)
- data fetching : preferred.used asynch,await in component
- can import -> Client amd server components
  > import another module using import syntax
- can render -> Client and server component
  > means on calls another one
- when re-render? ->one state changes

### client component

- use client
- have state/hooks
- lifting state up possible
- Props
- data fetching with 3rd party lib like RQ
- can import -> other client components(cant go back in the client server boundry)
- can render -> can render if client and server component passed as props
- when re-render? -> on URL chnages(navigation)

> render to readable stream is used to strem loading compoent
