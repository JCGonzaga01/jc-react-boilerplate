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
