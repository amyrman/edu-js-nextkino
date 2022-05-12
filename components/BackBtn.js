import { useRouter } from "next/router";
import styles from "./BackBtn.module.css";

const BackBtn = () => {
  const router = useRouter();
  return (
    <>
      <button className={styles.container} onClick={() => router.back()}>
        <small> &#10094;back</small>
      </button>
    </>
  );
};

export default BackBtn;
