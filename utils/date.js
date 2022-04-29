exports.convertTimeToMinutes = (time) => {
  const [hour, minute] = time.split(':').map((item) => Number.parseInt(item));
  return minute + (60 * hour);
};
