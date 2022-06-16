import { SOURCE_URL, type EmojiCombo } from "./constants"
import { getEmojiUnicode } from "./utils"
import * as EMOJI_DATA from './emojiData.json'

const googleRequestUrlEmojiPart = (emoji: string): string => {
  return emoji
    .split("-")
    .map((part: string) => `u${part.toLowerCase()}`)
    .join("-");
}

const googleRequestUrlEmojiFilename = (combo: EmojiCombo): string => {
  return `${googleRequestUrlEmojiPart(
    combo.leftEmoji
  )}_${googleRequestUrlEmojiPart(combo.rightEmoji)}.png`;
}


const googleRequestUrl = (combo: EmojiCombo): string =>  {
  return `${SOURCE_URL}/${combo.date}/${googleRequestUrlEmojiPart(
    combo.leftEmoji
  )}/${googleRequestUrlEmojiFilename(combo)}`;
}

export const concatEmoji = (i: string, j: string): URL | null => {
  const [x, y] = [getEmojiUnicode(i), getEmojiUnicode(j)]
  const list = (EMOJI_DATA as Record<string, EmojiCombo[]>)[x]
  const combo = list.find(e => e.leftEmoji === y || e.rightEmoji === y) ?? null
  if (!combo) return null
  const uri = googleRequestUrl(combo)

  return new URL(uri)
}