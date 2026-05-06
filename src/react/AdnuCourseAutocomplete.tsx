"use client";

import type { Key } from "@heroui/react";

import {
  Autocomplete,
  EmptyState,
  Header,
  Label,
  ListBox,
  SearchField,
  useFilter,
} from "@heroui/react";
import { useMemo, useState } from "react";

import { adnuColleges } from "../data";
import { findProgramById } from "../helpers";
import type { AdnuProgramWithCollege } from "../helpers";

export type AdnuCourseAutocompleteProps = {
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

export function AdnuCourseAutocomplete({
  label = "Program",
  placeholder = "Select a program",
  searchPlaceholder = "Search programs...",
  className = "w-[320px]",
  value,
  defaultValue = null,
  includeOnHold = true,
  onChange,
  onProgramChange,
}: AdnuCourseAutocompleteProps) {
  const [internalSelectedKey, setInternalSelectedKey] = useState<Key | null>(defaultValue);
  const selectedKey = value ?? internalSelectedKey;

  const { contains } = useFilter({ sensitivity: "base" });

  const colleges = useMemo(() => {
    return adnuColleges
      .map((college) => ({
        ...college,
        programs: includeOnHold
          ? college.programs
          : college.programs.filter((program) => program.status === "active"),
      }))
      .filter((college) => college.programs.length > 0);
  }, [includeOnHold]);

  const handleChange = (key: Key | null) => {
    if (value === undefined) {
      setInternalSelectedKey(key);
    }

    onChange?.(key);

    const selectedProgram = key ? findProgramById(String(key)) : null;
    onProgramChange?.(selectedProgram);
  };

  return (
    <Autocomplete
      className={className}
      placeholder={placeholder}
      selectionMode="single"
      value={selectedKey}
      onChange={handleChange}
    >
      <Label>{label}</Label>

      <Autocomplete.Trigger>
        <Autocomplete.Value />
        <Autocomplete.ClearButton />
        <Autocomplete.Indicator />
      </Autocomplete.Trigger>

      <Autocomplete.Popover>
        <Autocomplete.Filter filter={contains}>
          <SearchField autoFocus name="search" variant="secondary">
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder={searchPlaceholder} />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>

          <ListBox renderEmptyState={() => <EmptyState>No programs found</EmptyState>}>
            {colleges.map((college) => (
              <ListBox.Section key={college.id}>
                <Header>{college.name}</Header>

                {college.programs.map((program) => (
                  <ListBox.Item
                    key={program.id}
                    id={program.id}
                    textValue={`${program.name} ${college.name} ${program.status}`}
                  >
                    <div className="flex w-full items-center justify-between gap-3">
                      <Label>{program.name}</Label>

                      {program.status === "on-hold" ? (
                        <span className="rounded-full bg-warning-100 px-2 py-0.5 text-xs text-warning-700">
                          On Hold
                        </span>
                      ) : null}
                    </div>

                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox.Section>
            ))}
          </ListBox>
        </Autocomplete.Filter>
      </Autocomplete.Popover>
    </Autocomplete>
  );
}