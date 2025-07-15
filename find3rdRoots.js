//first checking if the number is nature number and then find if it has 3rd roots




function perfectRoots(n) {
  if (n >= 0) {
    let second = Math.sqrt(n);
    if (Number.isInteger(second)) {
      let fourth = Math.sqrt(second);
      if (Number.isInteger(fourth)) {
        let eighth = Math.sqrt(fourth);
        if (Number.isInteger(eighth)) return true;
      }
    }
  }
  return false;
}

