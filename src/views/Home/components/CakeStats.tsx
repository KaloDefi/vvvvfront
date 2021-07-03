import React from 'react'
import { PUSX_PER_BLOCK, TRANSFER_TAX } from 'config'

import { Card, CardBody, Heading, Text } from '@becoswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import { cakeBusdPrice } from 'state/hooks/usePriceCakeBusd'
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

const cakePriceBusd = usePriceCakeBusd()
const vixaprice = new BigNumber(cakePriceBusd).toNumber()



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
          {t('ViXA Details')}
        </Heading>
        <Row>
           <Text fontSize="18px">{t('ViXA Price')}</Text>
          <CardValue fontSize="18px" decimals={0} value={vixaprice} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total ViXA Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total ViXA Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New ViXA/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={pusxPerBlock} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New PUSX/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={pusxPerBlock} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New PUSX/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={pusxPerBlock} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New PUSX/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={pusxPerBlock} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New PUSX/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={pusxPerBlock} />
        </Row>
       
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
