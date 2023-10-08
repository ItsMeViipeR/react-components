# React Components/Table (v1.5.2)
Here is a presentation of the table.

### Usage

```tsx
import {Table} from "@/components/Table/Table"; // using Next.js alias path
import {Container} from "@/components/Container/Container";

export default function MyPage() {
    return (
      <Container>
          <h1>Table</h1><br/><br/>

          <Table>
              <thead>
              <tr>
                  <th>Skills</th>
                  <th>Percentage</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>HTML</td>
                  <td>90%</td>
              </tr>
              <tr>
                  <td>CSS</td>
                  <td>80%</td>
              </tr>
              <tr>
                  <td>JavaScript</td>
                  <td>70%</td>
              </tr>
              </tbody>
          </Table>
      </Container>
    )
}
```

### Edit style
To edit the style you just have to go in your components folder and edit the file `Table/ProgrTableessBar.css`.