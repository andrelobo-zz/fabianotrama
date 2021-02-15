import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";
import Bio from '../components/bio';

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
          C U R R Í C U L O A R T Í S T I C O

Artista Visual nascido em Aracati/Ceará. Formado em Licenciatura em Artes Visuais
pela Universidade Federal do Amazonas - UFAM, 2011. Produziu inúmeros trabalhos
de confecção de cartazes 2008 Aracati/CE a intervenções urbanas nos muros da cidade
2009-2010, Manaus/AM; produziu a série “Sarcófagos” 2009-2010 Manaus/AM.
Produziu o trabalho “Ateliê sem Paredes” contemplado no Edital Mostra Manaus de
Artes Visuais 2015. Foi convidado especial ao FIBOPA 1o Festival Internacional de
Body Painting em Argentina 2015 por ser investigador de pintura corporal e grafismos
indígenas utilizando pigmentos naturais à base da fruta de jenipapo. Criou as
Performances “Terra e espírito” no Dia da Terra - ICBEU 2010 Manaus/AM;
Performance Instala/Ação/Humana no Instituto de Ciências Humanas e Letras da
Universidade Federal do Amazonas UFAM 2010 Manaus/AM;; Performance “Jogos de
Sombras” no “Vazio Festival de Performances” 2011 Manaus/AM; Performance
“Sombras e traços” com Otoni Mesquita selecionado no III Mova-se Festival de Dança
2012 Manaus/AM. Fez Produção cenográfica do Espetáculo “Homem Pigmento
Floresta” no Teatro Amazonas, 2008; Performou na Exposição “Orgânica” de Odacy
Oliveira na Galeria de Arte da Escola Superior de Artes e Turismo da Universidade do
Estado do Amazonas – ESAT/UEA 2010 Manaus/AM; Participou no projeto “Fita-
Corpo” de Francisco Rider, Premio Klauss Vianna de Dança 2013 como assessor
plástico visual e Performer, 2014 Manaus/AM. Produziu videoartes “Corpo tempo
espaço”2008, “Homem Verde” 2009 exibido no 1o Festival de Internacional de Body
Painting da Argentina – FIBOPA 2015 La Plata/Argentina, “Tempestade” 2010,
“Processo Criativo” 2011 e “Enquanto Nós Vivos” 2013 selecionado para Mostra de
Curta-Metragem do 10o Amazonas Film Festival 2013 Manaus/AM; foi intérprete
criador do vídeo do espetáculo de dança “Sonoro” de Odacy de Oliveira e Valdemir de
Oliveira Prêmio Funarte Klauss Vianna de Dança 2010.


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
          P R O D U Ç Â O P L Á S T I C A
Xilogravura e gravura em metal, 2008.
Cartazes Desenho/Corte/Colagem, 2008.

Monotipia do Corpo, 2009.
Série “Sarcófagos” e outras interferências urbanas 2009-2010
Série “Sarcófagos” Escultura a partir de materiais residuais.
“Ateliê sem paredes” pintura/performance/projeção, 2014-2015


“Ateliê sem Paredes” contemplado no Edital Mostra Manaus de Artes Visuais 2015
P R O DU Ç Ã O A U D I O V I SU A L
Videoarte “Enquanto nós, vivos” no 10o Amazonas Film Festival 2013.


Videoarte “Homem Verde” selecionado para o 1o Festival Internacional de Body
Painting da Argentina 2015

          </p>
          <p>
            P I N T U R A C O R P O R A L
         
Convite especial ao 1o Festival de Body Painting da Argentina 2015


P E R F O R M A N C E S
Performance “Terra e espírito” Dia da Terra - ICBEU 2010 Manaus/AM

Performance Instala/Ação/Humana , 2010.
Performance “Jogos de Sombras” no “Vazio Festival de Performances” 2011

Performance “Sombras e traços” com Otoni Mesquita selecionado no III Mova-se
Festival de Dança 2012 Manaus/AM
O U T R A S P E R F O R M A N C E S
Intervenções Performáticas na UFAM – Manaus, 2009.


P A R T I C I P A Ç Ô E S
Produção cenográfica “Homem Pigmento Floresta” Teatro Amazonas, 2008.

Performou na Exposição “Orgânica” de Odacy
Oliveira, na Galeria de Arte da Escola Superior
deArtes e Turismo da Universidade do Estado do
Amazonas – ESAT/UEA 2010 Manaus/AM

Intérprete criador do vídeo do Espetáculo de Dança “Sonoro” de Odacy de Oliveira e
Valdemir de Oliveira- Prêmio Funarte Klauss Vianna de Dança 2010.

Assessor plástico visual no projeto “Fita-Corpo” de Francisco Rider, Premio Klauss
Vianna de Dança 2013 Manaus/AM 2014.
          </p>
        </div>
      </article>
      <Bio />.
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
