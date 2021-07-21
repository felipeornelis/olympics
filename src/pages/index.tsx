import Image from 'next/image'

import * as S from '~styles/home'
import Country from '~components/Country'
import OlympicsTokyo from '~images/tokyo.svg'
import MedalTable from '../database.json'

export default function Hello() {
  const medalsPanel = MedalTable.data.medalTable

  return (
    <S.Container>
      <S.Hero>
        <div className="hero-message">
          <h1>Follow the olympics medal panel</h1>
          <span>The medal panel below is updated daily </span>
        </div>
        <div className="hero-olympics-image">
          <Image src={OlympicsTokyo} width={350} height={350} />
        </div>
      </S.Hero>

      <main role="main">
        <S.Title>
          <h2>Medals Panel</h2>
          <span>220 countries</span>
        </S.Title>

        <S.Table>
          {medalsPanel.map((country) => (
            <Country
              name={country.country.name}
              golden={country.gold}
              silver={country.silver}
              bronze={country.bronze}
              rank={country.ranking}
              code={country.country.code}
              fallback={country.country.flag.svg.url}
            />
          ))}
        </S.Table>
      </main>
    </S.Container>
  )
}
