import { Color } from "../types/Color";

export function shuffle(
  array: {word_id: number; word: string; color: Color; ishidden: boolean }[]
): {word_id: number; word: string; color: Color; ishidden: boolean }[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
