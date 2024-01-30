import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Subscription() {
  return (
    <main>
      <div className="container subscription-msg">
        <div>
          <h1>Faça sua inscrição!</h1>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="mt30 mb30">
            <Card title="Página inicial" />
          </div>
          <div className="dflex">
            <Link to="/promotion">
              <Button text="Ver promoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
