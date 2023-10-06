# React Components/Navbar (v1.1.0)
Here is a presentation of the navbar.

### Usage

```tsx
import {Navbar} from "@/components/Navbar/Navbar"; // using Next.js alias path

export default function MyPage() {
    return (
      <Navbar name={"My App"}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/contact">Contact</a></li>
      </Navbar>
    )
}
```

### Edit style
To edit the style you just have to go in your components folder and edit the file `Navbar/Navbar.css`.