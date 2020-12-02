// NOTE:
// This is just a dummy fetch api to test the middlewares of redux
// You can either remove it or use it as your reference in creating your own api middleware
import { DummyList } from "DummyType";

export function fetchDummyData(): Promise<DummyList> {
  return new Promise((resolve, reject) => {
    fetch("https://api.github.com/emojis").then(
      async (res) => {
        const data: { [key: string]: string } = await res.json();
        const dummyList: DummyList = [];
        for (const [key, value] of Object.entries(data)) {
          dummyList.push({ key: key.replaceAll("_", " ").toUpperCase(), value });
        }
        resolve(dummyList);
      },
      (res) => {
        reject({ message: "Error fetching api" });
      }
    );
  });
}
