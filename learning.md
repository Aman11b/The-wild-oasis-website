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

## How RSC Works behind the scene

{react server}

- compoent tree
  - all server component render on server which create react element which have output of server component,how the dom for each compoent will look like, no longer has code to render each component hence the SC has disappered this is why we cant use state as they will disappear, this is so cox they need ot be sent to client and hence need to be serilizable whihc function are not
- this component thee has hole where the client component will be rendered
  - serialized props passed from SC CC
  - URL to script with component code(powered by framework bundler) this is why it is difficult to implement RSC without Framework

> Virtual DOM of SC + tree of CC (RSC PAYLOAD)

{react client}

- RSC playload is sent to client
- CC are rendered here
- complete "Virtual DOM"

### why RSC playload? why not render SCs as HTML

- describe UI as date,not finished HTML
- when s SC is re-rendered: react is able to merge("reconcile) the current tree on the client with a new tree comming form the server
- as a result UI state can be preserved when a SCs re-renders insted on completely re-generating the page as HTML

## Truth is UI=f(1.-> data)(2.-> state)

## THE RELATIONSHIP BETWEEN RSC SSR

> not the same seperate technologies

- RSC does not replace SSR
- they usually work together
- both client and server compoent is insitailly rendered on the ser when SSR is used
- react server anf react client are two different environment,two part of RSC protocol
- in the RSC model "server" just means " the developers computer"
- RSC does not require a running web server compoent could run only once at built time(static site generation)
- SSR happens only on initial render on re-render client components only render on the actual client

> both client and server components are executed on the server,on the initial server-side render.But from there on, as the app is interactive in the browser,server components only run on the actual web server and client components only run on the actual client,so the actual web browser.

## Image

- First of all,it will automatically serve correctly sized images in modern formats.For example, WebP.And it will also only do this on demand,so only when it's actually necessary.
- Second, the Image component prevents layout shifts because it forces us to specify the exact height and width.
- finally, it also automatically lazy loads images onlywhen they actually enter the viewport,

## what is suspense?

- Built in react component that we can use to catch/isolate compoent(or entire subtree) that are not ready to be rendered("suspencing)
- what cases a compoent to be suspending
  - Fetching data(with support lib)
  - loading code (with react lazy loading)
- native wat to support asynchronous operations in a declarative way(no more isLoading states and render login)
- while rendering suspending component is found -> go to closest suspence parent ("boundry) af discard alredy rendered children
- display fallback compoent /JSX(spinner)
- after async work is done-> render subtree under suspense boundry

## A look behind the scenes of suspence

- in fiber tree dusinr suspence the another build in component gets add in called activity and spinner is also add as fallback as children with hidden as suspence comment the children will be hidden and spinner gets activated and when its done it toggles back
- state is preserved in subsquenet suspending
- fallback will not be shpwn again if ther suspence trigger is wrapped in a transition,in next.js thats the case with page navigation we can reset the suspense boundry with unique key prop
- how does suspense acutally knows that a component is suspending?-> trigger suspense by throwing promise
