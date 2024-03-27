export async function fetchStations() {
    try {
      const response = await fetch("https://musicapi.x007.workers.dev/search?q=Pathaan&searchEngine=gaama");
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.log("Error fetching stations:", error);
      return [];
    }
  }