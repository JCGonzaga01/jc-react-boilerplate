import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Spinner } from "components/_common";
import { bannerDetails } from "constants/info";
import banner from "assets/banner.jpg";
import styles from "./Info.scss";

type DummyType = {
  key: string;
  value: string;
};

type DummyList = Array<DummyType>;

const Info: React.FC = () => {
  const formRef = useRef(null);
  const [emojiList, setEmojiList] = useState<DummyList>([{ key: "", value: "" }]);
  const [filterEmoji, setFilterEmoji] = useState<DummyList>([{ key: "", value: "" }]);

  useEffect(() => {
    fetch("https://api.github.com/emojis").then(async (res) => {
      const data: { [key: string]: string } = await res.json();
      const dummyList: DummyList = [];
      for (const [key, value] of Object.entries(data)) {
        dummyList.push({ key: key.replaceAll("_", " ").toUpperCase(), value });
      }
      setEmojiList(dummyList);
      setFilterEmoji(dummyList);
    });
  }, []);

  const handleOnClickSearch = (e: FormEvent) => {
    e.preventDefault();
    const form: any = formRef.current;
    const fieldValue = form["searchField"].value;
    const newFilterEmoji = [...emojiList].filter((item) =>
      item.key.includes(fieldValue.toUpperCase())
    );
    setFilterEmoji(newFilterEmoji);
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        background: `url(${banner}) center center / cover no-repeat fixed`,
      }}
    >
      <div className={styles.banner}>
        <div className={styles.title}>{bannerDetails.title}</div>
        <div className={styles.description}>{bannerDetails.description}</div>
      </div>
      <div className={styles.tableTitle}>Example of FetchAPI Implementation</div>

      <div className={styles.tableHeader}>
        <div className={styles.search}>
          <form ref={formRef} onSubmit={handleOnClickSearch}>
            <button className={styles.searchBtn} type={"submit"}>
              SEARCH
            </button>
            <input className={styles.searchField} name={"searchField"} type={"text"} />
          </form>
        </div>
        <div className={styles.emojiTableHeader}>
          <div>NAME</div>
          <div>IMAGE</div>
        </div>
      </div>
      {filterEmoji.length <= 1 ? (
        <Spinner />
      ) : (
        <div className={styles.emojiContainer}>
          {filterEmoji.map((item, idx) => (
            <div key={`${idx}-${item.key}`} className={styles.emoji}>
              <div>{item.key}</div>
              <div>
                <img src={item.value} alt={item.key} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Info;
