# React Components/Timeline (v1.2.0)
Here is a presentation of the navbar.

### Usage

```tsx
import {Timeline} from "@/components/Timeline/Timeline"; // using Next.js alias path

export default function MyPage() {
    return (
      <Timeline>
          <li style={{"--accent-color": "#41516C" } as React.CSSProperties}>
              <div>2002</div>
              <div>Title 1</div>
              <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est
                  numquam harum, accusamus suscipit consequatur laboriosam!
              </div>
          </li>
          <li style={{ "--accent-color": "#FBCA3E" } as React.CSSProperties}>
              <div>2007</div>
              <div>Title 2</div>
              <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero
                  nihil veniam.
              </div>
          </li>
          <li style={{"--accent-color": "#E24A68"} as React.CSSProperties}>
              <div>2012</div>
              <div>Title 3</div>
              <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta
                  placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi
                  quo, et dolorum saepe nulla hic.
              </div>
          </li>
          <li style={{ "--accent-color": "#1B5F8C"} as React.CSSProperties}>
              <div>2017</div>
              <div>Title 4</div>
              <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
          </li>
          <li style={{ "--accent-color": "#4CADAD"} as React.CSSProperties}>
              <div>2022</div>
              <div>Title 5</div>
              <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
          </li>
      </Timeline>
    )
}
```

### Edit style
To edit the style you just have to go in your components folder and edit the file `Navbar/Navbar.css`.