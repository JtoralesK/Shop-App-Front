## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Pages you can use :
"/login"
"/dashboard"
"/dashboard/users"
"/dashboard/users/userId"
"/dashboard/products"
"/dashboard/profile"

Project Structure and responsabilities

Components, Principal components which are used in the differents pages of the web site.
Ui, Principal components Ui which are used in the differents components.
Dashboard, this is the principal page which have a layout what involved all the page. Here happened all logical app.
Login, where everybody log in.
Utilities, where we save all name and title of the web site. We mook data as if we'd fetch data in the data base making arrays and json data.

In this project we are going to use
Principios Solid :

Single Responsibility Principle.
Each component have to have just one responsibility.
Examples : If in your code you have an useEffect , it means you can create a custom hook
