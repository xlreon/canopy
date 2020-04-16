const getChartData = fetch("https://canopy-frontend-task.now.sh/api/networth")
  .then((response) => response.json())
  .catch((error) => error);

export { getChartData };
