import React from 'react'
import { PUSX_PER_BLOCK, TRANSFER_TAX } from 'config'
import { Card, CardBody, Heading, Text } from '@becoswap-libs/uikit'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/hooks'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'



const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`



const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const pusxPerBlock = PUSX_PER_BLOCK.toNumber()
  
  const cakePriceBusd = usePriceCakeBusd()
  const busdBalance = new BigNumber(cakePriceBusd).toNumber()
  
  
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('KOLO Stats')}
        </Heading>
        
         <Row>
          <Text fontSize="14px">{t('KOLO Price $')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={busdBalance} />}
        </Row>
        
        <Row>
          <Text fontSize="14px">{t('Total KOLO Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total KOLO Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New KOLO/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={pusxPerBlock} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Transfer TAX')}</Text>
          <CardValue fontSize="14px" decimals={0} value={0.1} />
        </Row>
        
       
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
