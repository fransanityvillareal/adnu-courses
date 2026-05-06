import { adnuColleges, type AdnuCollege, type AdnuProgram } from "./data";

export type AdnuProgramWithCollege = AdnuProgram & {
  collegeId: string;
  collegeName: string;
};

const PROGRAM_ACRONYM_STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "for",
  "in",
  "of",
  "on",
  "the",
  "to",
  "track",
  "with",
  "major",
  "specialization",
  "specialized",
]);

const PROGRAM_ACRONYM_WORD_OVERRIDES: Record<string, string> = {
  education: "ED",
};

export function buildProgramAcronym(programName: string): string {
  const tokens = programName.match(/[A-Za-z0-9]+/g) ?? [];

  return tokens.reduce((acronym, token) => {
    const lowerToken = token.toLowerCase();

    if (PROGRAM_ACRONYM_STOP_WORDS.has(lowerToken)) {
      return acronym;
    }

    const override = PROGRAM_ACRONYM_WORD_OVERRIDES[lowerToken];

    if (override) {
      return `${acronym}${override}`;
    }

    if (/^[A-Z0-9]+$/.test(token) && token.length <= 4) {
      return `${acronym}${token}`;
    }

    return `${acronym}${token[0].toUpperCase()}`;
  }, "");
}

export function getAdnuColleges(): AdnuCollege[] {
  return adnuColleges;
}

export function getAllAdnuPrograms(): AdnuProgramWithCollege[] {
  return adnuColleges.flatMap((college) =>
    college.programs.map((program) => ({
      ...program,
      collegeId: college.id,
      collegeName: college.name,
    })),
  );
}

export function getProgramsByCollege(collegeId: string): AdnuProgram[] {
  return adnuColleges.find((college) => college.id === collegeId)?.programs ?? [];
}

export function findProgramById(programId: string): AdnuProgramWithCollege | null {
  return getAllAdnuPrograms().find((program) => program.id === programId) ?? null;
}

export function searchAdnuPrograms(query: string): AdnuProgramWithCollege[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return getAllAdnuPrograms();
  }

  return getAllAdnuPrograms().filter((program) => {
    return (
      program.id.toLowerCase().includes(normalizedQuery) ||
      program.name.toLowerCase().includes(normalizedQuery) ||
      program.shortName.toLowerCase().includes(normalizedQuery) ||
      program.collegeName.toLowerCase().includes(normalizedQuery) ||
      program.status.toLowerCase().includes(normalizedQuery)
    );
  });
}