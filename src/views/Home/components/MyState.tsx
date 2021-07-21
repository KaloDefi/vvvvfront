import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@becoswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import MyPrice from './MyPrice'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/cake-bg.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const MyState = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('KOLO Price')}
        </Heading>
        <CardImage src="/images/pools/kolo-kolo.png" alt="KOLO logo" width={64} height={64} />
        <Block>
          <Label>{t('1 KOLO')}:</Label>
          <MyPrice />
        </Block>
        <Block>
          <Label>{t('Yield Farms Start blocks:')}:</Label>
          <Heading size="xl" mb="20px">
          {t('#9655555')}
        </Heading>
          <Label>{t('Date: Sun Aug 01 2021 09:30:00 GMT+0700')}</Label>
        </Block>
        <Actions>
            <Button onClick="location.href='https://bscscan.com/block/countdown/9655555'"
              width="100%">
              COUNTDOWN LINK
          </Button>
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default MyState
