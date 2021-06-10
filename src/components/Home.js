import { useHistory } from "react-router";
import { Footer } from "../common/Footer";
const history = useHistory;

export function Home() {
  return (
    <div>
      <h1 className="text-center text-primary">Welcome to Lad page</h1>
    </div>
  );
}
