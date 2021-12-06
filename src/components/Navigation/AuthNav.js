import s from "./Navigation.module.css";
import { Link } from "react-router-dom";

export default function AuthNav() {
  return (
   <nav >
       <div className={s.nav}>
      <Link to="/login"
            className={s.text}>
            Log in
            </Link>
      <Link to="/register"
            className={s.text}>
            Sign up
      </Link>
      </div>
    </nav>
  );
}
