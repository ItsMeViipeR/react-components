# React Components (v1.1.0)

This is a collection of React components to make the development of your website easier.

## Installation

Each component can be used specifically or all at once. To add a component to your project, you just have to download the component from the [src/compoents](https://github.com/ItsMeViipeR/react-components/tree/master/src/components) folder and add it to yours.

## Usage

```tsx
import { Button } from "@/components/Button/Button"; // using Next.js alias path

export default function MyPage() {
    return (
        <Button type={"button"} buttonStyle={"rounded"}>Click me</Button>
    )
}
```

Each component have all of React event props (onClick, onMouseOver, etc...).

## Edit style

To edit the style you just have to go in your components folder and edit the file `Component/Component.css` (replace Component by the component name) in your components' folder.