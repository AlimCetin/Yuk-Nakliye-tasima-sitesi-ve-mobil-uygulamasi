import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


function SideBar() {
    return (
        <Sidebar>
            <Menu
                menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                    },
                }}
            >
                <MenuItem component={<Link to="/customer" />}> Rota Belirle</MenuItem>
                <MenuItem component={<Link to="/customer" />}> ilanlar</MenuItem>
            </Menu>
        </Sidebar>

    )
} //End function

export default SideBar;
