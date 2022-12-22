export const formatError = (text) => {
  return `
    <b style="color: red">
      ${text}
    </b>
  `;
};

export const formatTime = (time) => {
  const seconds = time % 60;
  const minutes = ((time - seconds) % 3600) / 60;
  const hours = (time - minutes * 60 - seconds) / 3600;

  return {
    hours,
    minutes,
    seconds,
  };
};
