# adnu-courses

Structured Ateneo de Naga University (ADNU) college and program data, plus a ready-to-use HeroUI React autocomplete for picking programs grouped by college.

## Features

- Structured ADNU college and program data
- TypeScript types for colleges, programs, and status
- Data-only exports for apps that only need the course list
- Helper functions for getting, finding, and searching programs
- React autocomplete dropdown built with HeroUI
- College-grouped dropdown sections
- Support for active and on-hold programs
- Configurable label, placeholder, search placeholder, className, selected value, and callbacks

## Installation

```bash
npm install adnu-courses @heroui/react
```

## Quick Start

### Use the data exports

```ts
import { adnuColleges, getAllAdnuPrograms } from "adnu-courses";

console.log(adnuColleges.length);
console.log(getAllAdnuPrograms().slice(0, 3));
```

### Use the React autocomplete

```tsx
import { AdnuCourseAutocomplete } from "adnu-courses/react";

export function CoursePicker() {
  return (
    <AdnuCourseAutocomplete
      label="Program"
      placeholder="Select a program"
      searchPlaceholder="Search programs..."
      onChange={(key) => {
        console.log("Selected program id:", key);
      }}
      onProgramChange={(program) => {
        console.log("Selected program:", program);
      }}
    />
  );
}
```

## Package Exports

### Data

- `adnuColleges`: Full list of colleges with their programs.

```ts
import { adnuColleges } from "adnu-courses";
```

### Helpers

```ts
import {
  getAdnuColleges,
  getAllAdnuPrograms,
  getProgramsByCollege,
  findProgramById,
  searchAdnuPrograms,
} from "adnu-courses";
```

- `getAdnuColleges()` - returns the list of colleges.
- `getAllAdnuPrograms()` - returns all programs with their college info.
- `getProgramsByCollege(collegeId)` - returns programs under a college.
- `findProgramById(programId)` - returns a program with college info or `null`.
- `searchAdnuPrograms(query)` - simple search by program name, college, or status.

### Types

```ts
import type {
  AdnuCollege,
  AdnuProgram,
  AdnuCourseStatus,
  AdnuProgramWithCollege,
} from "adnu-courses";
```

- `AdnuCourseStatus` is one of: `"active"` or `"on-hold"`.

## React Component

```ts
import { AdnuCourseAutocomplete } from "adnu-courses/react";
import type { AdnuCourseAutocompleteProps } from "adnu-courses/react";
```

### Props

```ts
type AdnuCourseAutocompleteProps = {
  label?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
  value?: Key | null;
  defaultValue?: Key | null;
  includeOnHold?: boolean;
  onChange?: (key: Key | null) => void;
  onProgramChange?: (program: AdnuProgramWithCollege | null) => void;
};
```

### Defaults

- `label`: "Program"
- `placeholder`: "Select a program"
- `searchPlaceholder`: "Search programs..."
- `className`: "w-[320px]"
- `defaultValue`: `null`
- `includeOnHold`: `true`

### Controlled vs Uncontrolled

Uncontrolled (internal state):

```tsx
<AdnuCourseAutocomplete defaultValue={"bs-computer-science"} />
```

Controlled (you manage state):

```tsx
import { useState } from "react";

const [value, setValue] = useState<string | null>(null);

<AdnuCourseAutocomplete
  value={value}
  onChange={(key) => setValue(key ? String(key) : null)}
/>;
```

## Data Shape

```ts
type AdnuProgram = {
  id: string;
  name: string;
  status: "active" | "on-hold";
};

type AdnuCollege = {
  id: string;
  name: string;
  programs: AdnuProgram[];
};
```

## FAQ

**Does this include on-hold programs?**

Yes. The data includes active and on-hold programs. Use `includeOnHold={false}` in the autocomplete to hide on-hold programs.

**Can I use this without React?**

Yes. The data and helper functions work in any JavaScript or TypeScript environment.

## License

MIT. See [LICENSE](LICENSE).

## Author

John Francis C. Villareal (jfcreovillareal@gmail.com) - https://github.com/fransanityvillareal
