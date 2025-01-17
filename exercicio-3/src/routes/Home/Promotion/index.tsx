import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

export default function Promotion() {

    return (
        <main>
      <section>
        <div className="container">
          <div className="mt30 mb30">
            <Card title="Página de promoção" />
          </div>
          <div className="dflex">
            <Link to="/subscription">
              <Button text="Quero participar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    );
}
