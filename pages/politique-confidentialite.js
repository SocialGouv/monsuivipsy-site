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
          Politique de confidentialité du site vitrine Jardin mental
        </h3>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <Title title="Qui est responsable de Jardin mental ?" />
            <Content>
              <p>
                Le site vitrine « Jardin mental » est à l’initiative de la Direction générale de la santé au sein de la Fabrique numérique des ministères sociaux.
                L’objectif du site vitrine est de présenter l’application mobile qui existe sur les magasins d’applications et de permettre aux professionnels 
                d’être mis au courant des évolutions et actualités de l’application mobile.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Pourquoi traitons-nous des données à caractère personnel ?" />
            <Content>
              <p className="mb-0.5">
                Le site vitrine Jardin mental traite des données à caractère personnel pour les
                raisons suivantes :
              </p>
              <ul className="list-disc list-inside">
                <li>
                Permettre aux professionnels d’être mis au courant des évolutions et actualités de l’application mobile Jardin Mental. 
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Quelles sont les données à caractère personnel que nous traitons ?" />
            <Content>
              <p className="mb-0.5">
                Le site vitrine Jardin mental traite les données suivantes :
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Données relatives aux professionnels</strong> : adresse
                  courriel. La communication de cette donnée est une simple
                  possibilité proposée aux professionnels sur le site vitrine. 
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Qu’est-ce qui nous autorise à traiter des données à caractère personnel ?" />
            <Content>
              <p className="mb-0.5">
                Le site vitrine Jardin mental traite des données à caractère personnel en se basant sur :
              </p>
              <ul className="list-disc list-inside">
                <li>
                  L’exécution d’une mission d’intérêt public ou relevant de
                  l’exercice de l’autorité publique dont est investi le
                  responsable de traitement au sens de l’article 6-1 e) du RGPD.
                </li>
              </ul>
              <p className="mb-0.5">
                    Cette mission d'intérêt public se traduit en pratique par :
              </p>
              <ul className="list-disc list-inside">
                <li>L’article D. 1421-1 du code de la santé publique ;</li>
                <li>L’arrêté du 6 avril 2016 portant organisation de la direction générale de la santé, notamment ses articles 5 et 6.</li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Pendant combien de temps conservons-nous ces données ?" />
            <Content>
              <table className="mx-auto border border-collapse table-auto border-denim-900">
                <thead>
                  <tr>
                    <th className="p-3 border border-denim-900">
                      Catégories de données
                    </th>
                    <th className="p-3 border border-denim-900">
                      Durée de conservation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-denim-900">
                      Données relatives aux professionnels
                    </td>
                    <td className="p-3 border border-denim-900">
                      Jusqu’à la demande de désinscription à la lettre d'information
                    </td>
                  </tr>
                </tbody>
              </table>
            </Content>
          </div>

          <div>
            <Title title="Quels sont vos droits ?" />
            <Content>
              <p>Vous disposez :</p>
              <ul className="list-disc list-inside mb-2">
                <li>D’un droit d’information et droit d’accès ;</li>
                <li>D’un droit de rectification ;</li>
                <li>D’un droit d’opposition ;</li>
                <li>D’un droit à la limitation du traitement.</li>
              </ul>
              <p className="mb-2">
                Pour les exercer, contactez-nous par voie électronique :{" "}
                <a
                  className="text-denim-700"
                  href="mailto:jardinmental@fabrique.social.gouv.fr"
                >
                  jardinmental@fabrique.social.gouv.fr
                </a>
              </p>
              <p>Par voie postale :</p>
              <ul className="list-inside italic mb-2">
                <li>Ministère du Travail, de la Santé et des Solidarités </li>
                <li>Direction générale de la santé</li>
                <li>14 avenue Duquesne </li>
                <li>75007 Paris</li>
                <li>France</li>     
              </ul>
              <p className="mb-2">
                Puisque ce sont des droits personnels, nous ne traiterons votre
                demande que si nous sommes en mesure de vous identifier. Dans le
                cas où nous ne parvenons pas à vous identifier, nous pouvons
                être amenés à vous demander une preuve de votre identité.
              </p>
              <p className="mb-2">
                Pour vous aider dans votre démarche, vous trouverez un modèle de
                courrier élaboré par la CNIL ici :{" "}
                <a
                  className="text-denim-700"
                  href="https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces"
                >
                  https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces
                </a>
              </p>
              <p>
                Nous nous engageons à vous répondre dans un délai raisonnable
                qui ne saurait dépasser 1 mois à compter de la réception de
                votre demande.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Qui va avoir accès à ces données ?" />
            <Content>
              <p className=" mb-1">
                Les accès aux données sont strictement encadrés et juridiquement
                justifiés. Les personnes suivantes vont avoir accès aux données
                :
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Les membres de l’équipe Jardin Mental au sein de la Fabrique
                  numérique des ministères sociaux.
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Quelles mesures de sécurité mettons-nous en place ?" />
            <Content>
              <p className=" mb-1">
                Nous mettons en place plusieurs mesures pour sécuriser les
                données :
              </p>
              <ul className="list-disc list-inside">
                <li>Stockage des données en base de données ;</li>
                <li>Cloisonnement des données ;</li>
                <li>Mesures de traçabilité ;</li>
                <li>Surveillance ;</li>
                <li>
                  Protection contre les virus, malwares et logiciels espions ;
                </li>
                <li>Protection des réseaux ;</li>
                <li>Sauvegarde ;</li>
                <li>
                  Mesures restrictives limitant l’accès physique aux données à
                  caractère personnel.
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Qui nous aide à traiter les données à caractère personnel ?" />
            <Content>
              <table className="mx-auto border border-collapse table-auto border-denim-900">
                <thead>
                  <tr>
                    <th className="p-3 border border-denim-900">
                      Sous-traitant
                    </th>
                    <th className="p-3 border border-denim-900">
                      Pays destinataire
                    </th>
                    <th className="p-3 border border-denim-900">
                      Traitement réalisé
                    </th>
                    <th className="p-3 border border-denim-900">Garanties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-denim-900">OVH</td>
                    <td className="p-3 border border-denim-900">France</td>
                    <td className="p-3 border border-denim-900">Hébergement des données</td>
                    <td className="p-3 border border-denim-900">
                      <a
                        className="text-denim-700"
                        href="https://us.ovhcloud.com/legal/data-processing-agreement/"
                      >
                        OVH Data Processing Agreement
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Content>
          </div>

          <div>
            <Title title="Témoins de connexion et traceurs" />
            <Content>
              <p className=" mb-2">
                Un témoin de connexion ou traceur est un fichier déposé sur votre ordinateur lorsque vous accédez au site vitrine pour collecter certaines de vos informations.
                Sur le site vitrine Jardin Mental, des témoins de connexion ou traceurs de mesure d’audience sont déposés mais ne nécessitent pas le recueil de votre consentement
                conformément aux recommandations de la CNIL. Nous utilisons la solution « Matomo » configurée en mode exempté. 
              </p>
              <p className=" mb-2">
                Pour aller plus loin, vous pouvez consulter les fiches proposées
                par la Commission Nationale de l'Informatique et des Libertés
                (CNIL) :
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <a
                    className="text-denim-700"
                    href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/que-dit-la-loi"
                  >
                    Cookies & traceurs : que dit la loi ?
                  </a>
                </li>
                <li>
                  <a
                    className="text-denim-700"
                    href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/comment-se-proteger/maitriser-votre-navigateur"
                  >
                    Cookies : les outils pour les maîtriser
                  </a>
                </li>
              </ul>
              <br />
              <label htmlFor="check">
                <input type="checkbox" id="check" checked />
                <span className="font-bold text-denim-700">
                  Vous êtes suivi.e de manière anonyme. Décochez cette case pour
                  ne plus être suivi.e.
                </span>
              </label>
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
