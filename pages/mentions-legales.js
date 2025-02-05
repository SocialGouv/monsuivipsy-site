import Footer from "components/footer";
import Navigation from "components/navigation";

export default () => {
  return (
    <div
      className="bg-right-top bg-no-repeat"
      style={{ backgroundImage: `url("images/other/hero-bg.svg")` }}
    >
      <Navigation />

      <div className="container py-14">
        <h3 className="mb-6 text-2xl font-bold text-center lg:text-4xl text-denim-800 lg:mb-10">
          Mentions légales du site vitrine Jardin Mental
        </h3>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <Title title="Éditeur du site" />
            <Content>
              <p>Le site vitrine Jardin Mental est édité par la Direction Générale de la Santé (DGS) au sein de la Fabrique numérique des ministères sociaux située :</p>
              <br />
              <ul>
                <li>14 avenue Duquesne</li>
                <li>75350 Paris SP 07</li>
                <li>France</li>
                <li>Téléphone : 01 40 56 60 00</li>
              </ul>
              <br />
              <strong>Directeur de la publication</strong>
              <p>Monsieur Grégory EMERY, directeur général de la santé</p>
            </Content>
          </div>

          <div>
            <Title title="Hébergement du site vitrine" />
            <Content>
              <p>
                Ce site est hébergé par :
              </p>
              <br />
              <ul>
                <li>OVH SAS</li>
                <li>2 rue Kellermann - 59100 Roubaix</li>
                <li>France</li>
                <li>Téléphone : 1007</li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Accessibilité" />
            <Content>
              <p>
                La conformité aux normes d’accessibilité numérique est un
                objectif ultérieur mais nous tâchons de rendre ce site
                accessible à toutes et à tous.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Signaler un dysfonctionnement" />
            <Content>
              <p>
                Si vous rencontrez un défaut d’accessibilité vous empêchant
                d’accéder à un contenu ou une fonctionnalité du site, merci de
                nous en faire part : jardinmental@fabrique.social.gouv.fr. Si vous n’obtenez pas de réponse rapide de
                notre part, vous êtes en droit de faire parvenir vos doléances
                ou une demande de saisine au Défenseur des droits.
              </p>
            </Content>
          </div>

          <div>
            <Title title="En savoir plus" />
            <Content>
              <p>
                Pour en savoir plus sur la politique d’accessibilité numérique
                de l’État :
                https://accessibilite.numerique.gouv.fr/ 
              </p>
            </Content>
          </div>

          <div>
            <Title title="Sécurité" />
            <Content>
              <p>
                Le site est protégé par un certificat électronique, matérialisé
                pour la grande majorité des navigateurs par un cadenas. Cette
                protection participe à la confidentialité des échanges. En aucun
                cas les services associés au site vitrine ne seront à l’origine d’envoi
                de courriels pour demander la saisie d’informations
                personnelles.
              </p>
            </Content>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Title = ({ title }) => (
  <h5 className="mb-2 text-xl font-semibold md:text-2xl lg:text-3xl text-denim-700">
    {title}
  </h5>
);

const Content = ({ children }) => (
  <div className="text-sm text-black">{children}</div>
);
