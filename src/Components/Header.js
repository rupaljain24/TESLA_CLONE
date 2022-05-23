import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [open, setOpen] = useState(false)
  return (
    <Container>
        <a>
            <Logo src="logo.svg"/>
            </a>
        <MenuList>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
        </MenuList>
        <Sidebar>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <a href="#">Menu</a>
            <MenuIcon onClick={()=>setOpen(true)}/>
        </Sidebar>

        <HamburgerMenu show={open} >
            <CustomClose onClick={()=>setOpen(false)}/>
            {/* <CloseIcon/> */}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Roadster</a></li>
        </HamburgerMenu>
    </Container>
  )
}

export default Header

const Container=styled.div`
position:fixed;
top:0;
right:0;
left:0;
padding:0 2rem;
min-height:1rem;
display:flex;
align-items:center;
justify-content:space-between;
`

const Logo=styled.img`
margin:1rem 0.5rem;
height:1.5rem;
cursor:pointer;
display:flex;
`

const MenuList=styled.div`
display:flex;
text-decoration:none;
a{
padding:0 0.5rem;
list-style-type:none;
align-items:center;
}

@media(max-width:756px){
    display:none;
}
`

const Sidebar=styled(MenuList)`
 display:flex;
 text-decoration:none;
// a{
// padding:0 0.5rem;
// list-style-type:none;
// align-items:center;
}
`

const HamburgerMenu=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:250px;
z-index:100;
list-style:none;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'}

display:flex;
flex-direction:column;
text-align:start;
li{
    margin-top:1rem;
    padding:1rem;
    border-bottom: 1px solid lightgray;
    a{
        font-weight:100px; 
    }
}
`

const CustomClose=styled(CloseIcon)`
cursor:pointer;
position:fixed;
right:0;
top:0;
bottom:0;
// margin:1rem;
`