import { AppBar, Toolbar, Typography, styled} from '@mui/material';

const Header =styled(AppBar)`
background: #111111;
`
const Tabs=styled(Typography)`
font-size:20px;
margin-right:20px;
`
const NavBar=()=>{
    return(

        <>
        <Header position='static'>
            <Toolbar>
                <Tabs>Hello Deveopers</Tabs>
                <Tabs>All Users</Tabs>
                <Tabs>Add User</Tabs>
            </Toolbar>
        </Header>
        </>
    )
}

export default NavBar;