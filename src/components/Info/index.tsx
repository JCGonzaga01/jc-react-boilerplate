// NOTE:
// This is just a sample components with redux implemetation
// You can either remove this or use this as your basis for your component redux implementation
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// REDUX
import { fetchDummyAsync } from "store/actions/dummy";
import { dummy } from "store/selectors/dummy";
//
import { Spinner } from "components/_common";
import banner from "assets/banner.jpg";
import styles from "./Info.scss";

const Info: React.FC = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { payload, isFetching } = useSelector(dummy);
  const [filterEmoji, setFilterEmoji] = useState(payload);

  useEffect(() => {
    if (!payload.length) dispatch(fetchDummyAsync.request());
    setFilterEmoji(payload);
  }, [payload]);

  const handleOnClickSearch = (e: FormEvent) => {
    e.preventDefault();
    const form: any = formRef.current;
    const fieldValue = form["searchField"].value;
    const newFilterEmoji = [...payload].filter((item) =>
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
      <div className={styles.container}>
        <div className={styles.tableTitle}>Example of Redux Implementation</div>

        <div className={styles.tableHeader}>
          <div className={styles.search}>
            <form ref={formRef} onSubmit={handleOnClickSearch}>
              <button className={styles.searchBtn} type={"submit"}>
                SEARCH
              </button>
              <input
                className={styles.searchField}
                name={"searchField"}
                type={"text"}
              />
            </form>
          </div>
          <div className={styles.emojiTableHeader}>
            <div>NAME</div>
            <div>IMAGE</div>
          </div>
        </div>
        {isFetching ? (
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
    </div>
  );
};

export default Info;
