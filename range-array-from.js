let range = Array.from(new Array(r - l + 1)).map((_, i) => l + i)


    // Write your code here
  let a = tickets[p];
  let smallers = tickets.filter(x => x < a);
  let s_sum = smallers.reduce((acc, x) => acc + x, 0);
  let l_biggers = tickets.filter((x, i) => x >= a && i < p);
  // let l_biggers_sum = l_biggers.reduce((acc, x) => acc + x, 0);
  let r_biggers = tickets.filter((x, i) => x >= a && i < p);
  // let r_biggers_sum = r_biggers.reduce((acc, x) => acc + x, 0);

  let alex_time = (s_sum + (a * l_biggers.length) + (a * r_biggers.length) + a);
  return alex_time;
