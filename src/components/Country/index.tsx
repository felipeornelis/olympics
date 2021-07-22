import Flag from 'react-world-flags'
import Image from 'next/image'

import type { CountryProps } from './types'
import * as S from './styles'

export default function Country({
  name,
  golden,
  silver,
  bronze,
  rank,
  code,
  fallback,
}: CountryProps) {
  return (
    <S.Container>
      <header>
        {/* <Flag code={code} fallback={<Image src={fallback} /> */}
        <Flag
          code={code}
          fallback={
            <Image
              alt={`${name} national flag`}
              src={fallback as any}
              width={70}
              height={50}
            />
          }
        />
        <span>
          #{rank} - {name}
        </span>
      </header>
      <div>
        <div>
          <span>🥇</span>
          <span>{golden}</span>
        </div>
        <div>
          <span>🥈</span>
          <span>{silver}</span>
        </div>
        <div>
          <span>🥉</span>
          <span>{bronze}</span>
        </div>
        <div>
          <span>{golden + silver + bronze}</span>
        </div>
      </div>
    </S.Container>
  )
}
