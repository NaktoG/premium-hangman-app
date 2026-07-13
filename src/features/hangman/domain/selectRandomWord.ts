export function selectRandomWord(words: readonly string[], random = Math.random): string {
  if (words.length === 0) {
    throw new Error('Word list cannot be empty.');
  }

  const index = Math.floor(random() * words.length);
  const selectedWord = words[index] ?? words[0];

  if (!selectedWord) {
    throw new Error('Word list cannot be empty.');
  }

  return selectedWord;
}
