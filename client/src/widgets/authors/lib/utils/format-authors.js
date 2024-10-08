import { formatIsoDate } from "@/shared/lib/utils/format-iso-date";

export const formatAuthors = (authors) => {
  return authors.map((author) => ({
    ...author,
    date_of_birth: formatIsoDate(author.date_of_birth),
    date_of_death: formatIsoDate(author.date_of_death),
  }));
};
