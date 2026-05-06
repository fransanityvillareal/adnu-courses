import { adnuColleges, type AdnuCollege, type AdnuProgram } from "./data";

export type AdnuProgramWithCollege = AdnuProgram & {
  collegeId: string;
  collegeName: string;
};

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
      program.name.toLowerCase().includes(normalizedQuery) ||
      program.collegeName.toLowerCase().includes(normalizedQuery) ||
      program.status.toLowerCase().includes(normalizedQuery)
    );
  });
}