# React Components/ProgressBar (v1.5.0)
Here is a presentation of the ProgressBar.

### Usage

```tsx
import {ProgressBar} from "@/components/ProgressBar/ProgressBar"; // using Next.js alias path
import {Button} from "@/components/Button/Button";
import {Container} from "./Container";
import {useState} from "react";

export default function MyPage() {
    const [value, setValue] = useState(0);

    const animateProgress = () => {
        let currentValue = 0;

        const interval = setInterval(() => {
            currentValue += 1;
            setValue(currentValue);

            if (currentValue >= 100) {
                clearInterval(interval);
            }
        }, 50);
    };

    return (
      <Container>
          <h1>Table</h1><br/><br/>
          <ProgressBar value={value} max={100}/><br/>
          <Button type={"button"} buttonStyle={"rounded"} onClick={animateProgress}>Start</Button>
      </Container>
    )
}
```

### Edit style
To edit the style you just have to go in your components folder and edit the file `ProgressBar/ProgressBar.css`.