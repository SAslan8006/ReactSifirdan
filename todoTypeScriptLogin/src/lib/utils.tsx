//ilk Kelimeyi Büyük Harf Yapar
export function cappitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
