function trouble(x, t) {
  let result = [];

  for (let i = 0; i < x.length; i++) {
    let current = x[i];

    if (result.length > 0 && result[result.length - 1] + current === t) {
      // Remove current (skip pushing it)
      continue;
    }

    result.push(current);
  }

  return result;
}
