# Neltech — Cisco Lab

Compagnon privé pour reprendre le TP Packet Tracer de Nel. Interface française, topologie SVG interactive, filtres VLAN, plan VLSM, pools DHCP, diagnostic guidé, analyse locale de sorties et bibliothèque CLI / manipulations graphiques.

## Source du TP

État initial tiré de `reprise_tp_cisco_packet_tracer.md` (5 novembre 2026). Aucun fichier `.pkt` n’est connecté. Les configurations rapportées sont distinctes des tests confirmés. Le ping MS1 → serveur .194 et le DHCP INFO sont initialement en échec ; le voisinage OSPF FULL et le ping du transit sont confirmés.

## Fonctionnement

- Le labo ne lance aucune commande IOS et ne contrôle pas Packet Tracer.
- Les ports inconnus sont laissés vides. Les commandes utilisant un port ne sont copiables qu’après saisie d’un port valide.
- Les cases, notes, observations et ports sont conservés dans `localStorage`, clé `neltech-cisco-lab-v1`.
- L’export/import JSON permet de transférer la progression. Pas de synchronisation entre appareils.
- Le diagnostic met à jour les cases correspondantes seulement après validation manuelle.
- L’analyse des sorties est une aide heuristique locale ; elle ne déduit pas une cause certaine d’un simple échec de ping.

## Développement

Vinext / React / TypeScript. `npm run dev`, `npx tsc --noEmit`, `npm run build`.
Publication privée via Sites et `.openai/hosting.json` ; conserver le project_id existant.

## Références techniques

- Cisco, [Troubleshoot DHCP in Enterprise Networks](https://www.cisco.com/c/en/us/support/docs/ip/dynamic-address-allocation-resolution/27470-100.html).
- Cisco, [Configuring the Cisco IOS DHCP Relay Agent](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_dhcp/configuration/12-4/dhcp-12-4-book/config-dhcp-relay-agent.html).
