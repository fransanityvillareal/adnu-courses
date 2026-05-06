# adnu-courses

Ateneo de Naga University colleges and courses data with an optional HeroUI Autocomplete component.

## Install

```bash
npm install adnu-courses
```

## Usage

### Data utilities

```ts
import { colleges, coursesByCollege } from "adnu-courses";

console.log(colleges);
console.log(coursesByCollege["College of Computer Studies"]);
```

### React Autocomplete (HeroUI)

```tsx
import { AdnuCourseAutocomplete } from "adnu-courses/react";

export function CoursePicker() {
  return (
    <AdnuCourseAutocomplete
      label="Course"
      placeholder="Pick a course"
      onSelectionChange={(key) => {
        console.log("Selected:", key);
      }}
    />
  );
}
```

## Tutorial

1. Install the package.
2. Use the data exports (`colleges`, `coursesByCollege`) for lookups.
3. If you use HeroUI, render `AdnuCourseAutocomplete` for quick selection.

## License

MIT. See [LICENSE](LICENSE).

## Author

John Francis C. Villareal (jfcreovillareal@gmail.com) - https://github.com/fransanityvillareal
