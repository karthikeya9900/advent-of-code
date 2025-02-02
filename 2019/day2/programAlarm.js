const runIntCode = (code) => {
  let index = 0;

  while (index < code.length) {
    if (code[index] === 99) {
      return code;
    }
    if (code[index] === 1) {
      code[code[index + 3]] = code[code[index + 1]] + code[code[index + 2]];
    } else if (code[index] === 2) {
      code[code[index + 3]] = code[code[index + 1]] * code[code[index + 2]];
    }

    index += 4;
  }

  return code;
};

console.log(runIntCode(program));

const nounAndVerb = () => {
  let noun = 0;

  while (noun < 100) {
    if (100 * noun === 196907) {
      return [noun, verb];
    }
    noun++;
  }
};

console.log(nounAndVerb());
