import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `pintura`,
          `corporal`,
          `amazonia`,
          `trama`,
          `fabiano`,
          `fabiano`
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Utilização da pigmentação tradicional de jenipapo, usado a milênios
            por Etnias indígenas Amazônicas; apropriando-me do grafismo já
            existente e sua linguagem e representação aplico tal concepção a
            pessoas que desejem experimentar a pintura sobre a pele, vale
            mencionar que este produto não apresenta quaisquer restrições de seu
            uso na pele humana.
          </p>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Pesquisa em pintural Corporal</figcaption>
          </figure>
          <h3 id="dynamic-styles">Pesquisa em pintural Corporal</h3>
          <p>
            Na cultura ancestral a pintura tinha a função de identificação, na
            cultura contemporânea a pintura corporal passou a exercer uma função
            estética conotando uma identidade pessoal e intransferível, este
            projeto propõe o dialogo do espectador urbano com esta arte de
            contexto tribal, sem o compromisso da permanência da pintura sobre o
            corpo.
          </p>
          <p>
            Dentro da minha pesquisa referente a Pintura corporal e suas
            composições na arte ancestral, o grafismos indígena é visto como uma
            segunda pele ao qual, veste o corpo. O Projeto de pintura corporal
            traz a proposta de levar a pintura corporal para espaços públicos,
            espaços de circulação de pessoas, com a finalidade de inserir e
            difundir esta arte em meio ao publico da cidade. Na cultura
            ancestral a pintura tinha a função de identificação, na cultura
            contemporânea a pintura corporal passou a exercer uma função
            estética conotando uma identidade pessoal e intransferível, este
            projeto propõe o dialogo do espectador urbano com esta arte de
            contexto tribal, sem o compromisso da permanência da pintura sobre o
            corpo.
          </p>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
