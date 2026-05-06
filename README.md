# adnu-courses

`adnu-courses` is a TypeScript npm package for Ateneo de Naga University (ADNU) college and program data.

It includes data utilities, helper functions, TypeScript types, and an optional HeroUI React autocomplete component for selecting programs grouped by college.

## Features

- Structured ADNU college and program data
- TypeScript support
- Data-only exports
- Helper functions for getting, finding, and searching programs
- HeroUI React autocomplete component
- Active and on-hold program support
- Configurable labels, placeholders, class names, values, and callbacks

## Installation

For data-only usage:

```bash
npm install adnu-courses

## Installation

For data-only usage:

```bash
npm install adnu-courses
```

For the React autocomplete component:

```bash
npm install adnu-courses @heroui/react
```

`@heroui/react` is required only when using:

```tsx
import { AdnuCourseAutocomplete } from "adnu-courses/react";
```

## Quick Start

### Data usage

```ts
import { adnuColleges, getAllAdnuPrograms } from "adnu-courses";

console.log(adnuColleges);
console.log(getAllAdnuPrograms());
```

### React autocomplete usage

```tsx
"use client";

import { AdnuCourseAutocomplete } from "adnu-courses/react";

export function CoursePicker() {
  return (
    <AdnuCourseAutocomplete
      label="Program"
      placeholder="Select a program"
      searchPlaceholder="Search ADNU programs..."
      onChange={(key) => {
        console.log("Selected program id:", key);
      }}
      onProgramChange={(program) => {
        console.log("Selected program object:", program);
      }}
    />
  );
}
```

## Package Exports

### Data and helpers

```ts
import {
  adnuColleges,
  getAdnuColleges,
  getAllAdnuPrograms,
  getProgramsByCollege,
  findProgramById,
  searchAdnuPrograms,
} from "adnu-courses";
```

| Export | Description |
|---|---|
| `adnuColleges` | Full list of ADNU colleges with their programs |
| `getAdnuColleges()` | Returns all colleges |
| `getAllAdnuPrograms()` | Returns all programs with college information |
| `getProgramsByCollege(collegeId)` | Returns programs under a specific college |
| `findProgramById(programId)` | Finds a program by ID |
| `searchAdnuPrograms(query)` | Searches programs by name, college, or status |

### React component

```tsx
import { AdnuCourseAutocomplete } from "adnu-courses/react";
```

## Data Examples

### Get all colleges

```ts
import { adnuColleges } from "adnu-courses";

console.log(adnuColleges);
```

### Get all programs

```ts
import { getAllAdnuPrograms } from "adnu-courses";

const programs = getAllAdnuPrograms();

console.log(programs);
```

### Get programs by college

```ts
import { getProgramsByCollege } from "adnu-courses";

const programs = getProgramsByCollege("college-of-computer-studies");

console.log(programs);
```

### Find a program by ID

```ts
import { findProgramById } from "adnu-courses";

const program = findProgramById("bs-information-technology");

console.log(program);
```

Example result:

```ts
{
  id: "bs-information-technology",
  name: "BS Information Technology",
  status: "active",
  collegeId: "college-of-computer-studies",
  collegeName: "College of Computer Studies"
}
```

### Search programs

```ts
import { searchAdnuPrograms } from "adnu-courses";

const results = searchAdnuPrograms("computer");

console.log(results);
```

## React Autocomplete Examples

### Basic autocomplete

```tsx
"use client";

import { AdnuCourseAutocomplete } from "adnu-courses/react";

export function CoursePicker() {
  return (
    <AdnuCourseAutocomplete
      label="Course"
      placeholder="Select your course"
      searchPlaceholder="Search programs..."
      className="w-full max-w-md"
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

### Store the selected program

```tsx
"use client";

import { useState } from "react";
import type { AdnuProgramWithCollege } from "adnu-courses";
import { AdnuCourseAutocomplete } from "adnu-courses/react";

export function CoursePicker() {
  const [selectedProgram, setSelectedProgram] =
    useState<AdnuProgramWithCollege | null>(null);

  return (
    <div className="space-y-3">
      <AdnuCourseAutocomplete
        label="Program"
        placeholder="Select a program"
        searchPlaceholder="Search ADNU programs..."
        className="w-full max-w-md"
        onProgramChange={setSelectedProgram}
      />

      {selectedProgram ? (
        <div className="rounded-xl border border-default-200 p-3 text-sm">
          <p className="font-medium">{selectedProgram.name}</p>
          <p className="text-default-500">{selectedProgram.collegeName}</p>
          <p className="text-default-400">ID: {selectedProgram.id}</p>
        </div>
      ) : null}
    </div>
  );
}
```

### Use only active programs

By default, the autocomplete includes active and on-hold programs.

```tsx
<AdnuCourseAutocomplete includeOnHold={false} />
```

### Controlled usage

```tsx
"use client";

import { useState } from "react";
import type { Key } from "@heroui/react";
import { AdnuCourseAutocomplete } from "adnu-courses/react";

export function ControlledCoursePicker() {
  const [courseId, setCourseId] = useState<Key | null>(null);

  return (
    <AdnuCourseAutocomplete
      value={courseId}
      onChange={setCourseId}
      className="w-full max-w-md"
    />
  );
}
```

### Form submission example

Usually, you should save the program ID in your database.

```tsx
"use client";

import { useState } from "react";
import { AdnuCourseAutocomplete } from "adnu-courses/react";

export function StudentForm() {
  const [courseId, setCourseId] = useState("");

  function handleSubmit() {
    const payload = {
      courseId,
    };

    console.log("Submit:", payload);
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <AdnuCourseAutocomplete
        label="Course"
        placeholder="Select your course"
        className="w-full max-w-md"
        onChange={(key) => {
          setCourseId(key == null ? "" : String(key));
        }}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
```

## Component Props

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

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `"Program"` | Label displayed above the autocomplete |
| `placeholder` | `string` | `"Select a program"` | Placeholder for the selected value field |
| `searchPlaceholder` | `string` | `"Search programs..."` | Placeholder for the search field |
| `className` | `string` | `"w-[320px]"` | Custom class name for the autocomplete |
| `value` | `Key \| null` | `undefined` | Controlled selected value |
| `defaultValue` | `Key \| null` | `null` | Default selected value for uncontrolled usage |
| `includeOnHold` | `boolean` | `true` | Whether to include on-hold programs |
| `onChange` | `(key: Key \| null) => void` | `undefined` | Called when the selected program ID changes |
| `onProgramChange` | `(program: AdnuProgramWithCollege \| null) => void` | `undefined` | Called with the full selected program object |

## TypeScript Types

```ts
type AdnuCourseStatus = "active" | "on-hold";

type AdnuProgram = {
  id: string;
  name: string;
  status: AdnuCourseStatus;
};

type AdnuCollege = {
  id: string;
  name: string;
  programs: AdnuProgram[];
};

type AdnuProgramWithCollege = AdnuProgram & {
  collegeId: string;
  collegeName: string;
};
```

Import the types:

```ts
import type {
  AdnuCollege,
  AdnuProgram,
  AdnuCourseStatus,
  AdnuProgramWithCollege,
} from "adnu-courses";
```

## Example Selected Program Output

`onProgramChange` returns an object like this:

```json
{
  "id": "bs-ba-business-economics",
  "name": "BS BA Business Economics",
  "status": "on-hold",
  "collegeId": "college-of-business-and-accountancy",
  "collegeName": "College of Business and Accountancy"
}
```

## Next.js Notes

If you are using Next.js App Router, use the autocomplete inside a client component:

```tsx
"use client";

import { AdnuCourseAutocomplete } from "adnu-courses/react";
```

The autocomplete uses React state and HeroUI components, so it should not be rendered directly inside a server component.

## Existing Project Notes

You do not need to replace an existing local course dropdown immediately.

A safe migration approach is:

- Keep Registration using the local implementation.
- Test `adnu-courses` in one page first, such as Billing and Collections.
- After testing, migrate other forms if needed.

## Troubleshooting

### Cannot find module `@heroui/react`

Install HeroUI:

```bash
npm install @heroui/react
```

### Autocomplete is not styled correctly

Make sure your project is configured for HeroUI and Tailwind CSS.

This package provides the component, but your app is responsible for loading the proper HeroUI styles.

### `HeroUIProvider` is not exported

Some HeroUI versions do not export `HeroUIProvider`.

You do not need to wrap this package with `HeroUIProvider` unless your HeroUI setup specifically requires it.

### Import path is not working

Use this for data and helpers:

```ts
import { adnuColleges } from "adnu-courses";
```

Use this for the React autocomplete:

```tsx
import { AdnuCourseAutocomplete } from "adnu-courses/react";
```

### On-hold programs are showing

By default, on-hold programs are included.

Hide them with:

```tsx
<AdnuCourseAutocomplete includeOnHold={false} />
```

## Development

```bash
git clone https://github.com/fransanityvillareal/adnu-courses.git
cd adnu-courses
npm install
npm run build
```

Create a local package tarball for testing:

```bash
npm pack
```

Install the local tarball in another project:

```bash
npm install ../adnu-courses/adnu-courses-1.0.0.tgz
```

## Updating the Package

Patch update:

```bash
npm version patch
npm publish --access public
```

Minor update:

```bash
npm version minor
npm publish --access public
```

Major update:

```bash
npm version major
npm publish --access public
```

## License

MIT. See [LICENSE](LICENSE).

## Author

John Francis C. Villareal  
GitHub: https://github.com/fransanityvillareal