import { stringify } from "gray-matter";

export function titleize(str:string) {
  return str
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[\w]|[ _-]\w/g, (m) => {
      return m.toUpperCase();
    });
}

/**
 * Take an array of strings and do the right thing with commas
 */
export function arrayToReadableList(items: string[]): string {
  // case no items
  if (items.length === 0) throw new Error("string array empty");
  // case 1 item
  if (items.length === 1) return items[0];
  // case 2 items
  if (items.length === 2)
    return `${items[0]} and ${items[1]}`;
  // case 3 or more items
  if (items.length >= 3) {
    return items.map((item, idx) => {
      if (idx === items.length - 1) {
       return `and ${item}`
      } else {
        return `${item},`
      }
    }).join(' ')
  }
}

export function possessiveNoun(word: string): string {
  if(word.length === 0) return word;
  if(word[word.length-1] === 's') return `${word}'`
  else return `${word}'s`
}