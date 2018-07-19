export default store => next => action => {
  const { callAPI } = action;
  if (!callAPI) return next(action);

  setTimeout(() => {
    fetch(callAPI)
      .then(res => res.json())
      .then(response => next({ ...action, response }))
      .catch(e => console.log(e)); //Исправил Славка
  }, 1000);
};
