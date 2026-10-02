
const links=[
    {id:1, url:'/', text:'home'},
    {id:2, url:'about', text:'about'},
    {id:3, url:'products', text:'pro'},
    {id:4, url:'cart', text:'cart'},
    {id:5, url:'checkout', text:'checkout'},
    {id:6, url:'orders', text:'orders'},
]

const NavLinks = () => {
    return (
        <>
            {links.map((link)=>{
                const{id, url, text }=link;
                return <li
                    key={id}
                    >
                <NavLinks classname='capitalize' to={url}>
                    {text}
                </NavLinks>
                </li>
            })}
        </>
    );
};

export default NavLinks;