export default function formatDate(date) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return [date.getDate(), months[date.getMonth()], date.getFullYear()].join(
    " "
  );
}
