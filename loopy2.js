function loopyLighthouse([anum1, anum2], [bnum1, bnum2], [name1, name2]) {
  for (let i = loopyLighthouse[anum1]; i <= loopyLighthouse[anum2]; i++) {
    if (i % loopyLighthouse[bnum1] === 0 && i % loopyLighthouse[bnum2] === 0) {
      return (loopyLighthouse[name1] + loopyLighthouse[name2]);
    } else if (i % loopyLighthouse[bnum1] === 0) {
      return loopyLighthouse[name1];
    } else if (i % loopyLighthouse[bnum2] === 0) {
      return loopyLighthouse[name2];
    }
  }
}







loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);