import { program } from "./input.js";

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

// console.log(runIntCode(program));

const findNounAndVerb = (target) => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const newProgramm = [...program];
      newProgramm[1] = noun;
      newProgramm[2] = verb;

      const result = runIntCode(newProgramm);
      if (result[0] === target) {
        return result;
      }
    }
  }
};

console.log(findNounAndVerb(19690720));
