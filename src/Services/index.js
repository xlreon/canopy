const getChartData = fetch("https://canopy-frontend-task.now.sh/api/networth")
  .then((response) => response.json())
  .catch((error) => error);

const getTableData = fetch("https://canopy-frontend-task.now.sh/api/holdings")
  .then((response) => response.json())
  .catch((error) => error);

export { getChartData, getTableData };
