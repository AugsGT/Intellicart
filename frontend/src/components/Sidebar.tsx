import { House, ShoppingBag, Package, User } from "lucide-react";

type SidebarProps = {
    open: boolean;
};

const menu = [
    {
        icon: House,
        text: "Products"
    },
    {
        icon: ShoppingBag,
        text: "Cart"
    },
    {
        icon: Package,
        text: "Payment"
    },
    {
        icon: User,
        text: "Profile"
    }
];

function Sidebar({ open }: SidebarProps) {
    return (
        <div className="sidebar-inner">
            <aside>

                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            className="sidebar-button"
                            key={item.text}
                        >
                            <Icon size={20} />

                            {open && (
                                <span>{item.text}</span>
                            )}
                        </button>
                    );
                })}

            </aside>
        </div>
    );
}

export default Sidebar;