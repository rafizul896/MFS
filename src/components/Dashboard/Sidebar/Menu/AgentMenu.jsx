import { MdHistory, MdOutlineAccountBalanceWallet } from 'react-icons/md'
import MenuItem from './MenuItem'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
const AgentMenu = () => {
  return (
    <>
      <MenuItem icon={FaMoneyBillTransfer} label='Transaction Manage' address='transaction-management' />
      <MenuItem icon={MdOutlineAccountBalanceWallet} label='Balance Inquiry' address='balance-inquiry' />
      <MenuItem icon={MdHistory} label='Transactions History' address='transactions-history' />
    </>
  )
}

export default AgentMenu