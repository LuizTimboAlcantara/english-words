import { format } from "date-fns";

export const formatDateDefault = (date: Date) => {
  const formatDate = new Date(date);

  return format(formatDate, "dd/MM/yyyy");
};
