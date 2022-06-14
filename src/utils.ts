export const getEmojiUnicode = (emoji: string) => {
  return parseInt(String(emoji.codePointAt(0))).toString(16)
}