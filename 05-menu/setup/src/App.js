import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const uniqueCategories = [
    "all",
    ...new Set(items.map((item) => item.category)),
];

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(uniqueCategories);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => {
            return item.category === category;
        });
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories filterItems={filterItems} categories={categories} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
