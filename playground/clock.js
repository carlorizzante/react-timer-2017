const formatSeconds = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return `${minutes}:${seconds}`;
}

console.log(formatSeconds(61)); // 01:01
console.log(formatSeconds(125)); // 02:05
console.log(formatSeconds(54)); // 00:54
console.log(formatSeconds(607)); // 10:07
console.log(formatSeconds(815)); // 13:35
