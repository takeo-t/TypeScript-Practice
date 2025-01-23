/**
 * 入力された文字列の各単語の最初の文字を大文字に変換する関数を実装してください。
 * @param {string} str - 入力文字列
 * @return {string} - 各単語の最初の文字が大文字に変換された文字列
 */
export function capitalizeWords(str: string) {
  // 実装を記述
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// テスト用のコード
const testString = "hello world ohayou sekai";
console.log(capitalizeWords(testString));
