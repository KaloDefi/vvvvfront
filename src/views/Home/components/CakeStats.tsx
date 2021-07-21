import React from 'react'
import { PUSX_PER_BLOCK, TRANSFER_TAX } from 'config'

import { Card, CardBody, Heading, Text } from '@becoswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
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
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('KOLO Stats')}
        </Heading>
        
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
          <CardValue fontSize="14px" decimals={0} value={0.1%} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Yield Farms Start Block#8945555  ')}</Text>
          <Text fontSize="14px">{t('Jul 07 2021 - 10:00 AM UTC')}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{t('Token Contract')}</Text>
          <Text fontSize="16px">{t('0x5f2f05e03fd34792473fdfd83863339c3a1ebfb5')}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{t('100% KOLO-BNB LPs Locked')}</Text>
         <a href="https://deeplock.io/lock/0x7abf1463b27cda4174573acd3ec6c8db5f385a7d">PROOF CLICK HERE</a>
        </Row>
       
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
