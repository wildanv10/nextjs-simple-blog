import Link from "next/link";
import style from "./404.module.css";
import utilStyles from "./../styles/utils.module.css";

export default function Custom404() {
  return (
    <div className={style.container}>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a className={utilStyles.colorInherit}>Back to Home</a>
      </Link>
    </div>
  );
}
