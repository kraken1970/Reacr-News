import { INCREMENT } from "../constans";

export default (count = 0, action) => {
  //Обязательно задать 1-е деф. эначении = 0
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return count + 1;
  }
  return count;
};
