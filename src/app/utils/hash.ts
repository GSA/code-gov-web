// from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
export function hashString(inputString) {
  let hash = 0, i, chr;
  if (inputString.length === 0) return hash;
  for (i = 0; i < inputString.length; i++) {
    chr   = inputString.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
