import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Nav() {

  const [collapsed, setCollapsed] = useState(false)

  const handleToggle = () => setCollapsed(!collapsed)
 
  return (
    <div className="flex h-screen fixed inset-0 z-10">
      {collapsed ? <MenuOutlinedIcon
      className="fixed inset-2 bg-lime-500 scale-150" 
      onMouseEnter={()=> setCollapsed(false)} 
      onClick={()=> setCollapsed(false)}/> : 

        <Sidebar className=" bg-green-700 "
        collapsed={collapsed} 
        onMouseLeave={() => setCollapsed(true)} 
        onMouseEnter={() => setCollapsed(false)}>
            <Menu  menuItemStyles={{
      button: {borderRadius: '1rem',
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}>
                <MenuItem component={<Link to='/#/' />} onClick={() => handleToggle()}>Home</MenuItem>
                <MenuItem component={<Link to='/Characteristics' />} onClick={() => handleToggle()} >Characteristics</MenuItem>
                <MenuItem component={<Link to='/Habitat' />} onClick={()=> handleToggle()}>Habitat</MenuItem>
                <MenuItem component={<Link to='/Adaptations'/>} onClick={()=> handleToggle()}>Adaptations</MenuItem>
            </Menu>
        </Sidebar>
}
    </div>
  )
}

export default Nav
