import { MdHistory, MdInstallMobile, MdOutlineAccountBalanceWallet, MdOutlineSendToMobile } from 'react-icons/md'
import MenuItem from './/MenuItem'
import { IoWalletOutline } from 'react-icons/io5'

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={MdOutlineSendToMobile} label='Send Money' address='send-money' />
      <MenuItem icon={IoWalletOutline} label='Cash-Out' address='cash-out' />
      <MenuItem icon={MdInstallMobile} label='Cash-in' address='cash-in' />
      <MenuItem icon={MdOutlineAccountBalanceWallet} label='Balance Inquiry' address='balance-inquiry' />
      <MenuItem icon={MdHistory} label='Transactions History' address='transactions-history' />
    </>
  )
}

export default UserMenu