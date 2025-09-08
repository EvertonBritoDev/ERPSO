import { MenuPage, ResumePage } from '@/components'
import Grid from '@mui/material/Grid'
function Resume() {
  return (
    <div>
      <MenuPage />
      <ResumePage></ResumePage>
      <div className="fade-in">
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: 'grid', height: '100vh', padding: '100px' }}
        >
          <div>
            Atuamos há mais de 15 anos no segmento óptico, acumulando também
            sólida experiência na área de tecnologia aplicada a desenvolvimento
            e análise de dados. A trajetória profissional iniciou-se com suporte
            técnico e implantação de sistemas ERP para o setor óptico, durante
            um período de 3 anos, proporcionando uma visão abrangente das
            necessidades operacionais desse mercado. Posteriormente, houve uma
            migração direta para o varejo óptico, adquirindo conhecimento
            prático de todo o ciclo de negócios, desde a administração até o
            processo de vendas. Além disso, participei de projetos externos de
            prospecção e parcerias comerciais, com foco na expansão da base de
            clientes e aumento do fluxo de vendas. Atualmente, exerço a função
            de Analista de Dados em uma operadora multinacional de cartões, onde
            iniciei como Desenvolvedor Web atuando em processos de negociação
            B2B. Em seguida, direcionei minha carreira para análise de dados,
            desempenhando atividades de extração, tratamento e interpretação de
            informações estratégicas, com foco em regras de negócio para as
            regiões Europa (EU), Estados Unidos (EUA) e América Latina e Caribe
            (LAC).
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default Resume
