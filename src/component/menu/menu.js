import {menu_consts} from "./menu_consts.js"
import "./menu.css"

export const MenuComponent = () => {

    return(
        <>
            <div className="main_menu">
                <ul className="menu">
                    {menu_consts.map(item =>(
                        <li className="menu_list" key={item.id}><a className="menu_link" href="#">{item.menu_title}</a></li>
                    ))}
                </ul>
            </div>
        </>
    )
}