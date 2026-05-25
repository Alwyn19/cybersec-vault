export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

export function difficultyLabel(value: string) {
  const map: Record<string, string> = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    note: 'Note'
  };
  return map[value] ?? value;
}
