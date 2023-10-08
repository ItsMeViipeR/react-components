# React Components/Container (v1.3.0)
Here is a presentation of the Container.

### Usage

```tsx
import { Container } from "@/components/Container/Container"; // using Next.js alias path

export default function MyPage() {
    return (
      <Container>
          <Button buttonStyle={"modern"} type={"button"}>Click me</Button>
      </Container>
    )
}
```

### Edit style
To edit the style you just have to go in your components folder and edit the file `Container/Container.css`.