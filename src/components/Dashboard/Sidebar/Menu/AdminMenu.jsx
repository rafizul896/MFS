import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='User Management' address='user-management' />
      <MenuItem icon={FaUserCog} label='System Monitoring' address='system-monitoring' />
    </>
  )
}

export default AdminMenu;