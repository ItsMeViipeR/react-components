# Svelte Components/Form.svelte (v1.1)
### Here is a presentation of the form.

```tsx
import { Button } from "@/components/Button/Button"; // using Next.js alias path

export default function MyPage() {
    return (
      <Form action={"#"} method={"post"} color={"light"}>
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" required /><br /><br />

          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required /><br /><br />

          <label htmlFor="phone">Numéro de téléphone</label>
          <input type="tel" name="phone" id="phone" required /><br /><br />

          <label htmlFor="message">Message :</label><br />
          <textarea id="message" name="message" rows={4} cols={50} required /><br /><br />

          <Button type="submit" buttonStyle="modern">Submit</Button>
      </Form>
    );
}
```

# Dark mode
### Form now can use default dark mode by using the color argument (color="light"|"dark")

```html
<!-- Light theme -->
<Form action={"#"} method={"post"} color={"light"}>
    <label htmlFor="nom">Nom :</label>
    <input type="text" id="nom" name="nom" required /><br /><br />

    <label htmlFor="email">Email :</label>
    <input type="email" id="email" name="email" required /><br /><br />

    <label htmlFor="phone">Numéro de téléphone</label>
    <input type="tel" name="phone" id="phone" required /><br /><br />

    <label htmlFor="message">Message :</label><br />
    <textarea id="message" name="message" rows={4} cols={50} required /><br /><br />

    <Button type="submit" buttonStyle="modern">Submit</Button>
</Form>

<!-- Dark theme -->
<Form action={"#"} method={"post"} color={"dark"}>
    <label htmlFor="nom">Nom :</label>
    <input type="text" id="nom" name="nom" required /><br /><br />

    <label htmlFor="email">Email :</label>
    <input type="email" id="email" name="email" required /><br /><br />

    <label htmlFor="phone">Numéro de téléphone</label>
    <input type="tel" name="phone" id="phone" required /><br /><br />

    <label htmlFor="message">Message :</label><br />
    <textarea id="message" name="message" rows={4} cols={50} required /><br /><br />

    <Button type="submit" buttonStyle="modern">Submit</Button>
</Form>
```

### Edit style
To edit the style you just have to go in your components folder and edit the file `Form/Form.css`.

### Props
| Name  | Type | Values            |
|-------| --- |-------------------|
| color | string | "light" \| "dark" |