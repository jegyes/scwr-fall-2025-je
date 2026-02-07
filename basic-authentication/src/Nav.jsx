/* src/Nav.js */
// import React from "react"
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { HomeOutlined, ProfileOutlined, FileProtectOutlined } from 
            '@ant-design/icons'

const Nav = (props) => {
    const {current}  = props
    const navLinks = [
        {
            key: "public",
            label: (
              <>
                {/* <Link to="/"> */}
                    <HomeOutlined/>
                    Home
                {/* </Link> */}
              </>

            )
        },
        {
            key: "profile",
            label: (
                <>
                {/* <Link to="/profile"> */}
                    <ProfileOutlined/>
                    Profile
                {/* </Link> */}
                </>
            )
        },
        {
            key: "protected",
            label: (
                <>
                {/* <Link to="/protected"> */}
                    <FileProtectOutlined/>
                    Protected
                {/* </Link> */}
                </>
            )
        }        
    ]
    return (
        <div>
            <Menu items={navLinks} selectedKeys={[current]} mode="horizontal"/>
        </div>
    )
}

export default Nav