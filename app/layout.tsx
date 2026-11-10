import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Cisco Lab — Neltech",
 description: "Ton espace privé pour terminer le TP Cisco Packet Tracer : topologie interactive, VLAN, DHCP et OSPF.",
 icons: { icon: "/favicon.svg" }, robots: { index: false, follow: false }
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr"><body>{children}</body></html>}
