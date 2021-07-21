import React from 'react'
import { Text } from '@becoswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const MyPrice = () => {
  const { t } = useTranslation()
  const cakePriceBusd = usePriceCakeBusd()
  const busdBalance = new BigNumber(cakePriceBusd).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {t('$')} <CardValue value={busdBalance} decimals={4} fontSize="24px" lineHeight="36px" />
      </Text>
    )
  }

  return (
    <>
      <CardValue value={busdBalance} decimals={4} fontSize="24px" lineHeight="36px" />
      
    </>
  )
}

export default MyPrice
