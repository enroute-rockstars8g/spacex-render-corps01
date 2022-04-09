export const getRockets = async () => {
  try {
    const response = await fetch("https://api.spacexdata.com/v3/rockets");

    if (response.status !== 200) return;

    const rockets = await response.json();

    return rockets;
  } catch (e) {
    console.error(e);
  }
};
