import { Menu, House, ShoppingBag, Package, User, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

const menu = [
    {
        icon: Menu,
        text:"Collapse"
    },
    {
        icon: House,
        text: "Home",
        route:"/"
    },
    {
        icon: ShoppingBag,
        text: "Cart",
        route: "/cart"
    },
    {
        icon: Package,
        text: "Payment",
        route: "/Payment"
    },
    {
        icon: User,
        text: "Profile",
        route: "/Profile"
    },
    {
        icon: Settings,
        text: "Admin",
        route: "/admin"
    }
];

function Sidebar({ open, setOpen }: SidebarProps) {
    return (
        <div className="sidebar-inner">
            <aside>

                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            to={item.route || "#"}
                            className="sidebar-button"
                            key={item.text}
                            onClick={() => {
                                if (item.text === "Collapse") {
                                    setOpen(!open);
                                }
                            }}
                        >
                            <Icon size={25} />

                            {open && (
                                <span style={{fontSize: 18}}>{item.text}</span>
                            )}
                        </NavLink>
                    );
                })}

            </aside>
        </div>
    );
}

export default Sidebar;