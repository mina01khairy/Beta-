"use client"
import { createContext, useContext, useState } from 'react';

export const Productscon = createContext();

const productss = [
    {
        id: 1,
        status: "In Stock",
        statusBg: "bg-white",
        statusColor: "text-[#0058be]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAziqqdOIf-CgpmDlwz5JULkzz8RHhUDUURKiRuMcI5g43MvsFPxaH9LBlQgulB7JA1H38QIKD4tR-hDx8A-IMh_kOKOU4yoLq6QJ4orPKqqeTozgfoiNXPIHTaUh3kyAzqkkZ7fxk64HB-zaUka4FAdB5nnwbuuo33k01ZGhnVJNlbVdIxIxPXeloCx5Hhx9zp5Ej6nEHGzSndwWnDyaf0hE1T74jEEzrE4hT_-0QRQdjpR4d2ycONLakeTT1evcnfDDT3OVtB8Ncq",
        category: "Laptops",
        sku: "TB-LAP-229",
        name: "Titan Pro X15",
        tags: ["M3 PRO CHIP", "32GB RAM", "1TB SSD"],
        price: "40,000 EGP",
    },
    {
        id: 2,
        status: "New Arrival",
        statusBg: "bg-white",
        statusColor: "text-[#0058be]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuk_tTX-EPPRUk9rg_WtWzk7LSUj5grSKnSlvox0W9hK99-8xbANG-hr0ViJaM190Mq1OFB1DrlqiSnpe87zjmEcONyBqEMv9hGdEvpJpG5wwkDuvO3c7BozWEyk9irxThhrSnD8AQSKW-JAcwq8hlJsncLmNfBLBqkHTpOy1545szyELVFCEX63p0CdfZqYhNcgeUah2bdRutaxhIHCO8bXhIufU2rIUqCwgz8G1n2uDpYQxCmrVG-mhfu7P2l_a7scgDQy8ytptk",
        category: "Smartphones",
        sku: "TB-PHN-881",
        name: "Aura Phone 6G",
        tags: ["5G ENABLED", "OLED 120HZ", "256GB"],
        price: "17,000 EGP",
    },
    {
        id: 3,
        status: "Low Stock",
        statusBg: "bg-[#fcdbdb]",
        statusColor: "text-[#f81b1b]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTt7eZIkRwdjpzkUkvVGJOvpMMLYD4sG4aujg1HrawTFWd_CrE6cWtT39HzvRclIVvVCiSfMCkao5uevQ3EuOc2PHVl_U0CapaIIoCWjPgbNH5ewzXZGgv1c0CKRaOZakEcVHyMO94FSFJ9gfq_KzfRHj_flTPoibORjfratqNV4WvOMgo-ygkHJJs_rb5RUeePMPrsalxTSilM0kYBiFAzdzq1ZSCk_ALsje9GEft373QkW8T4XBhVFkLYLJlDqcN9KxrZxxLVpdr",
        category: "Components",
        sku: "TB-GPU-409",
        name: "Nexus RTX 4090 Bulk",
        tags: ["24GB VRAM", "DLSS 3.5", "FACTORY OC"],
        price: "20,000 EGP",
    },
    {
        id: 4,
        status: "Available",
        statusBg: "bg-white",
        statusColor: "text-[#0058be]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBudvzbzHWByJdpYAPpXKrHCcHhwUXJGNpJvNTA1aF-gsBKwcupFThztjEU-W8mZVyfj-YQJ04npUIb9fm-CXxriCa2jtma4IlrLzdle2wjJZaxrIHBR1IxLDDIMcse_gg3g4gRubNTdR-haJgTSonwHSfUKwV-acoO2lTI2Fp6DHNMLCYmvLWuKz1n6-4LhOilYrHZaRfQ7bBR9kgxhsHBAaTMoFPh-83asx4zxu9kRCTkUR55UmylR_LKerTeZi9be873sEXL52gG",
        category: "Accessories",
        sku: "TB-ACC-114",
        name: "Sonic Wave ANC",
        tags: ["HYBRID ANC", "60H BATTERY", "BT 5.3"],
        price: "2,500 EGP",
    },
    {
        id: 5,
        status: "Pre-Order",
        statusBg: "bg-white",
        statusColor: "text-[#0058be]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs2MRgV-SYm6KdzfDTgfmOZgEe-pC1Ch8vjm4R3iNoRSLDShmqGnDUxTq0VqvDO-WnNwHWP8P64TZ1Rs4BB10UlmRRj-mIoSkXPLMy9J-kraTHkk2v782R5_RitfkbbUKalprQlt1wuO7tgugAYpcFaEQLOdA-Ie9L5y7cpSi5lOnTsdD0GqyDji_1kUMbbVUnLOmzkV2yLCfGBV1JwLCLA9AsthmXd0CXL9t-bVbL2L0BeHGiw3NvVyC4pcOWQFb2EGpa7JBvIU6f",
        category: "Monitors",
        sku: "TB-MON-902",
        name: 'Vision Ultra 32"',
        tags: ["4K MINI-LED", "144HZ", "HDR1000"],
        price: "7,000 EGP",
    },
    {
        id: 6,
        status: "In Stock",
        statusBg: "bg-white",
        statusColor: "text-[#0058be]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1T5f2UFKXuYUmfAhhU9jif84Fpks10T4rCASdjX9WMqpBhsTLN7hNrJsNWDiAAdwG9SNkYd7ppbJ9a56PTo5Lgz4DEBBZVmqgTlapICzAeMJifGlngjm-i8jeKlJrBItbWvK8UFhb48_yr7cuBHGFOXUZd7wl7QHs75UKKMHx7I1vBByz-xDfw4LjOW_arqHckROuvN7-5vD00T4DqyOjEvy-biBdRgAt7bTKQ2CIn8H9gw2OMI5WYDLcPn8JwhLXHIzOBkc6k70f",
        category: "Components",
        sku: "TB-SRV-004",
        name: "CoreBlade S4 Enterprise",
        tags: ["DUAL XEON", "128GB ECC", "RAID 10"],
        price: "11,000 EGP",
    },
];

export default function ProductsconProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }

    function decreaseFromCart(product) {
    setCart((prev) => {
        const exists = prev.find((item) => item.id === product.id);
        if (exists && exists.quantity > 1) {
            return prev.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        }
        return prev.filter((item) => item.id !== product.id);
    });
}

    function removeFromCart(id) {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    
    function getQuantity(id) {
        const item = cart.find((item) => item.id === id);
        return item ? item.quantity : 0;
    }
    
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    function clearCart() {
        setCart([]);
    }
    return (
        <Productscon.Provider value={{ products: productss, cart, addToCart,decreaseFromCart, removeFromCart, clearCart, totalItems, getQuantity }}>
            {children}
        </Productscon.Provider>
    );
}

export const useProducts = () => useContext(Productscon);