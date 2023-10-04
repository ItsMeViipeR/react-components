# React Components/Button (v1.0.0)
Here is a presentation of the button.

### Usage

```tsx
import { Button } from "@/components/Button/Button"; // using Next.js alias path

export default function MyPage() {
    return (
        <Button type={"button"} buttonStyle={"rounded"}>Click me</Button>
    )
}
```

### Edit style
To edit the style you just have to go in your components folder and edit the file `Button/Button.css`.

### Props
| Name | Type | Default |
| --- | --- | --- |
| type | string | "button" |
| type | string | "submit" |
| type | string | "reset" |
| buttonStyle | string | "rounded" |
| buttonStyle | string | "modern" |

### Demo
[Button](https://button-psi.vercel.app/)