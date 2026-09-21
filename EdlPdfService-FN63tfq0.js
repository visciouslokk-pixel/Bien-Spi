const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./html2pdf-DoLdf0ZB.js","./rolldown-runtime-8BhlS34s.js","./defineProperty-BCpNGRf-.js","./metropoleBranding-Zs5rtHMB.js"])))=>i.map(i=>d[i]);
import{i as e}from"./rolldown-runtime-8BhlS34s.js";import{t}from"./bien-spi-DAIIImRv.js";import{d as n,f as r,m as i,p as a,s as o,t as s}from"./localModel-BBNVBIl5.js";import{c,d as l,f as u,o as d,r as f,s as p,t as m,u as h}from"./schemas-Y-u1dmI8.js";var g=e=>e.edlLayout===`single-v1`,_=e=>[`sortant`,`sortie`].includes(e.typeEDL)?`sortant`:`entrant`,v=e=>g(e)?_(e)===`entrant`?`Entrant`:`Sortant`:`Historique / comparatif`;function y(e){return/Sortant|Sortie|IdxS$/.test(e)?`sortant`:/Entrant|Entree|IdxE$/.test(e)?`entrant`:null}function b(e,t,r=`Agent SPI`){if(![`entrant`,`sortant`].includes(t))throw Error(`Mode EDL invalide`);return{...structuredClone(s(e,r)),edlLayout:`single-v1`,typeEDL:n(e)?t===`entrant`?`entree`:`sortie`:t,dateEDL:new Date().toISOString().slice(0,10)}}var x=`lotBatiment.ug.commune.adresseRue.immeuble.allee.etage.porte.copro.habitatType.nbPieces.nbChambres.surface.usageLocal.referencesCadastrales.parcelle.garageNum.caveNum.grenierNum.parkingNum.surfaceTerrain.identifiantBien.adresseBien.cpBien.villeBien.pepiniereId.localNumero.localSurface.localBoxNumero.locataireNom.locatairePrenom.locataireSociete.locataireSiren.locataireFonction.locataireTelephone.locataireEmail.locataireAdresse.locataireVille.locataireCp.locataireTel.locatairePort.locRaisonSociale.locNom.locPrenom.locFonction.locAdresse.locVille.locCp.locTel.locPort.locEntreprise.locSiren.locRepresentant.eauChaudeNum.eauFroideNum.electNum.gazNum.compteurChauffageNum.compteurEauNum.compteurElecNum`.split(`.`);function S(e,t){if(!g(e)||_(e)!==`entrant`)throw Error(`Une entrée dédiée est requise`);let n=b(e.typeBien,`sortant`);for(let t of x)e[t]!==void 0&&(n[t]=structuredClone(e[t]));return n.sourceEntryId=t,n.pieces=(e.pieces||[]).map(e=>e.pieceType===`jardin`?a(e.nom):i(e.nom)),n.cles=(e.cles||[]).map(e=>({libelle:e.libelle,nombre:``,etat:``})),n}function C(e,t){let n=new DOMParser().parseFromString(e,`text/html`);n.querySelectorAll(`[data-edl-mode]`).forEach(e=>{e.dataset.edlMode===t?e.matches(`td, th`)&&e.style.removeProperty(`width`):e.remove()}),n.querySelectorAll(`[data-edl-phase-label]`).forEach(e=>e.remove()),n.querySelectorAll(`table`).forEach(e=>{let t=!!e.querySelector(`.piece-group`);e.querySelectorAll(`[colspan]`).forEach(n=>{t&&n.colSpan===7?n.colSpan=6:!t&&n.colSpan===3&&e.querySelector(`[data-edl-mode]`)&&(n.colSpan=2)})});let r=n.querySelector(`h1`);return r&&!/ENTRANT|SORTANT|ENTRÉE|SORTIE/.test(r.textContent)&&(r.textContent+=t===`entrant`?` — ENTRANT`:` — SORTANT`),`<!DOCTYPE html>
`+n.documentElement.outerHTML}function w(e,t,n){let r=Math.floor(t.width*n);if(r&&Math.ceil(t.height/r)===e.getNumberOfPages())try{let n=t.getContext(`2d`);if(!n)return;for(;e.getNumberOfPages()>1;){let i=e.getNumberOfPages(),a=(i-1)*r,o=n.getImageData(0,a,t.width,Math.min(r,t.height-a)).data;for(let e=0;e<o.length;e+=4)if(o[e+3]!==0&&(o[e]!==255||o[e+1]!==255||o[e+2]!==255))return;e.deletePage(i)}}catch{}}var T=e=>o.find(t=>t.id===e)||null,E=(e,t=`…………………`)=>e&&String(e).trim()?String(e).trim():t,D=e=>e?new Date(e).toLocaleDateString(`fr-FR`):`__ /__ /______`,O=e=>e?`☑`:`☐`,k=e=>e?`<img src="${e}" style="max-width:100%;max-height:50px;width:auto;height:auto;display:block;margin-top:3px" />`:`<div class="sig-box"></div>`,A=e=>[`TB`,`B`,`P`,`M`].includes(e)?`note-${e}`:``,j=(e={})=>{let t=e.mursZones&&typeof e.mursZones==`object`?e.mursZones:{},n=Object.entries({nord:`Nord`,sud:`Sud`,est:`Est`,ouest:`Ouest`}).filter(([e])=>t[e]).map(([e,n])=>`${n}: ${t[e]}`);return n.length?n.join(`
`):e.murs||`—`},M=(e,t=``)=>{let n={gaz:`Gaz`,fioul:`Fioul`,electrique:`Électrique`,autre:`Autre`},r=Array.isArray(e)?e:e?[e]:[];return r.length?r.map(e=>e===`autre`&&t?`Autre (${t})`:n[e]||e).join(`, `):`—`},N=(e=[])=>!Array.isArray(e)||!e.length?``:e.map(e=>`
    <div style="display:inline-block;width:31%;vertical-align:top;margin:0 1% 6px 0;border:1px solid #ddd;border-radius:4px;overflow:hidden">
      <img src="${e.src}" style="max-width:100%;max-height:85px;width:auto;height:auto;display:block;margin:0 auto" />
      ${e.legende?`<div style="font-size:7pt;text-align:center;padding:3px;border-top:1px solid #eee">${e.legende}</div>`:``}
    </div>`).join(``),P={pointsLumineux:`Pts lumineux`,radiateurs:`Radiateurs`,placards:`Placards`,occultants:`Occultants`,prisesElec:`Prises élec.`,interrupteurs:`Interrupteurs`},F=e=>{if(!e||typeof e!=`object`)return e?String(e):`—`;let t=Object.entries(e).filter(([e,t])=>![`etat`,`observations`].includes(e)&&t&&t.checked).map(([e,t])=>{let n=P[e]||e,r=t.nombre!==``&&t.nombre!=null?` ×${t.nombre}`:``,i=[`TB`,`B`,`P`,`M`].includes(t.etat)?` — ${t.etat}`:` — état non renseigné`,a=``;return e===`occultants`&&(a=[t.type?`(${t.type})`:``,!t.etat&&t.bonEtat===!1?`(ancien constat : mauvais état)`:``].filter(Boolean).join(` `),a&&(a=` `+a)),`${n}${r}${i}${a}`});return e.etat&&t.push(`Ancienne appréciation globale : ${e.etat}`),e.observations&&t.push(`Obs.: ${e.observations}`),t.length?t.join(`
`):`—`},ee={bois:`Bois`,pvc:`PVC`,metal:`Métal`,aluminium:`Aluminium`,fer_forge:`Fer forgé`},I={bois:`Bois`,composite:`Composite`,beton:`Béton`,carrelage:`Carrelage`,dallage:`Dallage`,gravier:`Gravier`,gazon:`Gazon synthétique`},L={bois:`Bois`,metal:`Métal`,pvc:`PVC`,resine:`Résine`,maconnerie:`Maçonnerie`},R=e=>{if(!e||typeof e!=`object`)return`—`;let t=[],{cloture:n,portail:r,terrasse:i,piscine:a,abriJardin:o,notes:s}=e;if(n?.presente){let e=`Clôture`;n.rigide&&(e+=` — rigide`),n.etat&&(e+=` — ${n.etat}`),t.push(e)}if(r?.present){let e=`Portail`;r.materiau&&(e+=` — ${ee[r.materiau]||r.materiau}`),r.etat&&(e+=` — ${r.etat}`),t.push(e)}if(i?.presente){let e=`Terrasse`;i.type&&(e+=` — ${I[i.type]||i.type}`),i.etat&&(e+=` — ${i.etat}`),t.push(e)}if(a?.presente){let e=`Piscine`;a.cloturee&&(e+=` — clôturée`),a.vide&&(e+=` — vidée`),t.push(e)}if(o?.present){let e=`Abri de jardin`;o.type&&(e+=` — ${L[o.type]||o.type}`),o.etat&&(e+=` — ${o.etat}`),o.vide&&(e+=` — vide`),t.push(e)}return s&&t.push(`Obs. : ${s}`),t.length?t.join(`
`):`Aucun élément renseigné`},z=e=>!Array.isArray(e)||e.length===0?``:`
<h2>Photos</h2>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px">
  ${e.map(e=>`
    <div style="width:calc(33.33% - 6px);display:inline-block;vertical-align:top;
                border:1px solid #ccc;border-radius:4px;overflow:hidden;
                page-break-inside:avoid;margin-bottom:8px">
      <img src="${e.src}" style="max-width:100%;max-height:110px;width:auto;height:auto;display:block;margin:0 auto" />
      ${e.legende?`<div style="font-size:7.5pt;padding:3px 5px;color:#555;text-align:center;
                                  border-top:1px solid #e5e7eb">${e.legende}</div>`:``}
    </div>`).join(``)}
</div>`,B=`
  @page { margin: 15mm; }
  * { box-sizing: border-box; color: #000 !important; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 9pt; color: #000; margin: 0; background: #fff !important; }
  h1 { font-size: 12pt; text-align: center; margin: 0 0 8px; border-bottom: 2px solid #000; padding-bottom: 4px; color: #000 !important; }
  h2 { font-size: 10pt; background: #1e3a5f !important; color: white !important; padding: 4px 8px; margin: 10px 0 5px; page-break-after: avoid; }
  h3 { font-size: 9pt; background: #e8edf5 !important; padding: 3px 6px; margin: 8px 0 4px; border-left: 3px solid #2563eb; color: #000 !important; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 6px; }
  .constat-table { table-layout: fixed; }
  td, th { border: 1px solid #ccc; padding: 3px 5px; vertical-align: top; font-size: 8.5pt; color: #000 !important; background: #fff !important; word-wrap: break-word; overflow-wrap: break-word; }
  th { background: #e8edf5 !important; font-weight: bold; }
  tr { page-break-inside: avoid; }
  .row { display: flex; gap: 16px; margin-bottom: 6px; }
  .field { flex: 1; }
  .field-label { font-size: 7.5pt; font-weight: bold; color: #555 !important; text-transform: uppercase; }
  .field-val { border-bottom: 1px solid #888; min-height: 16px; padding: 1px 2px; font-size: 9pt; color: #000 !important; }
  .sig-box { border: 1px solid #999; height: 40px; margin-top: 3px; background: #fff !important; }
  .note-TB { color: #16a34a !important; font-weight: bold; }
  .note-B  { color: #2563eb !important; font-weight: bold; }
  .note-P  { color: #d97706 !important; font-weight: bold; }
  .note-M  { color: #dc2626 !important; font-weight: bold; }
  .recomm  { font-size: 8pt; font-style: italic; border: 1px solid #aaa; padding: 6px; margin: 8px 0; page-break-inside: avoid; background: #fff !important; }
  .footer-sig { display: flex; gap: 10px; margin-top: 6px; }
  .footer-sig-item { flex: 1; }
  .section-signatures { page-break-inside: avoid; margin-top: 10px; }
  .piece-group { page-break-inside: avoid; }
  .section-block { page-break-inside: avoid; }
`;function V(e){let t=r(e.typeBien),n=Array.isArray(e.pieces)?e.pieces:[],i=t=>t.map(([t,n])=>`<td>${O(e[t])} ${n}</td>`).join(``),a=e=>`<td style="text-align:center;white-space:pre-line" class="${A(e)}">${e||`—`}</td>`,o=(t,n)=>`
    <tr>
      <td>${n}</td>
      <td>${E(e[t+`Num`],`—`)}</td>
      <td data-edl-mode="entrant">${E(e[t+`IdxE`],`—`)}</td>
      <td data-edl-mode="sortant">${E(e[t+`IdxS`],`—`)}</td>
      <td style="text-align:center">${e[t+`Abo`]===`resilie`?`Résilié`:`En service`}</td>
    </tr>`,s=n.map(e=>{let t=e.pieceType===`jardin`,n=e.entrant||{},r=e.sortant||{};if(t)return`
        <tbody class="piece-group">
        <tr>
          <td colspan="7" style="font-weight:bold;background:#dcfce7 !important;padding:4px 6px;color:#166534">
            🌿 ${E(e.nom,`Jardin`)}
          </td>
        </tr>
        <tr data-edl-mode="entrant">
          <td data-edl-phase-label style="white-space:nowrap">Entrant</td>
          <td colspan="6" style="font-size:8pt;white-space:pre-line">${R(n)}</td>
        </tr>
        <tr data-edl-mode="sortant">
          <td data-edl-phase-label style="white-space:nowrap">Sortant</td>
          <td colspan="6" style="font-size:8pt;white-space:pre-line">${R(r)}</td>
        </tr>
        </tbody>`;let i=[[`Entrant`,n.photos],[`Sortant`,r.photos]].filter(([,e])=>Array.isArray(e)&&e.length).map(([e,t])=>`
        <tr data-edl-mode="${e===`Entrant`?`entrant`:`sortant`}">
          <td data-edl-phase-label>${e}</td>
          <td colspan="6">${N(t)}</td>
        </tr>`).join(``);return`
      <tbody class="piece-group">
      <tr style="background:#f9fafb">
        <td colspan="7" style="font-weight:bold;background:#dbeafe !important;padding:4px 6px">${E(e.nom,`Pièce`)}</td>
      </tr>
      <tr data-edl-mode="entrant">
        <td data-edl-phase-label>Entrant</td>
        ${a(n.plafond)}${a(j(n))}${a(n.sols)}${a(n.menuiseries)}
        <td style="font-size:7.5pt;white-space:pre-line">${F(n.equipements)}</td>
        <td style="font-size:7.5pt;white-space:pre-line">${E(n.notes,`—`)}</td>
      </tr>
      <tr data-edl-mode="sortant">
        <td data-edl-phase-label>Sortant</td>
        ${a(r.plafond)}${a(j(r))}${a(r.sols)}${a(r.menuiseries)}
        <td style="font-size:7.5pt;white-space:pre-line">${F(r.equipements)}</td>
        <td style="font-size:7.5pt;white-space:pre-line">${E(r.notes,`—`)}</td>
      </tr>
      ${i}
      </tbody>`}).join(``);return`<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><style>${B}</style></head>
<body>

<h1>MÉTROPOLE DE LYON — ÉTAT DES LIEUX — ${t.toUpperCase()}</h1>

<!-- Identification du bien -->
<div class="section-block">
<h2>Identification du bien</h2>
<div class="row">
  <div class="field"><div class="field-label">Lot bâtiment</div><div class="field-val">${E(e.lotBatiment)}</div></div>
  <div class="field"><div class="field-label">UG</div><div class="field-val">${E(e.ug)}</div></div>
  <div class="field"><div class="field-label">Commune</div><div class="field-val">${E(e.commune)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Adresse</div><div class="field-val">${E(e.adresseRue)}</div></div>
  <div class="field"><div class="field-label">Immeuble</div><div class="field-val">${E(e.immeuble)}</div></div>
  <div class="field"><div class="field-label">Allée</div><div class="field-val">${E(e.allee)}</div></div>
  <div class="field"><div class="field-label">Étage</div><div class="field-val">${E(e.etage)}</div></div>
  <div class="field"><div class="field-label">Porte</div><div class="field-val">${E(e.porte)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Locataire</div><div class="field-val">${E(e.locataireNom)} ${E(e.locatairePrenom,``)}</div></div>
  <div class="field"><div class="field-label">Société / Association</div><div class="field-val">${E(e.locataireSociete,`—`)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Téléphone</div><div class="field-val">${E(e.locataireTelephone,`—`)}</div></div>
  <div class="field"><div class="field-label">Adresse mail</div><div class="field-val">${E(e.locataireEmail,`—`)}</div></div>
</div>
${e.typeEDL===`sortant`&&e.nouvelleAdressePostale?`
<div class="row">
  <div class="field"><div class="field-label">Nouvelle adresse postale</div><div class="field-val">${E(e.nouvelleAdressePostale,`—`)}</div></div>
</div>`:``}
<div class="row">
  <div class="field"><div class="field-label">Attestation assurance</div><div class="field-val">${e.assurance===`oui`?`☑ Oui  ☐ Non`:`☐ Oui  ☑ Non`}</div></div>
  <div class="field"><div class="field-label">Copro / Syndic</div><div class="field-val">${E(e.copro,`—`)}</div></div>
  <div class="field"><div class="field-label">Date EDL</div><div class="field-val">${D(e.dateEDL)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Nb pièces</div><div class="field-val">${E(e.nbPieces)} pièce(s) dont ${E(e.nbChambres,`?`)} chambre(s) — ${E(e.surface,`?`)} m²</div></div>
</div>
</div>

<!-- Équipements -->
<div class="section-block">
<h2>Équipements collectifs &amp; Chauffage</h2>
<table>
  <tr>
    ${i([[`ascenseur`,`Ascenseur`],[`eauFroideCollective`,`Eau froide collective`],[`eauChaudeCollective`,`Eau chaude collective`]])}
  </tr>
  <tr>
    ${i([[`interphone`,`Interphone`],[`antenneTv`,`Antenne TV`],[`digicode`,`Digicode`]])}
  </tr>
</table>
<table>
  <tr>
    <th>Mode chauffage</th><th>Énergie</th><th>Justificatif entretien</th><th>Purgé</th><th>Testé</th>
  </tr>
  <tr>
    <td>${e.chauffageMode===`individuel`?`☑ Individuel  ☐ Collectif`:`☐ Individuel  ☑ Collectif`}</td>
    <td>${M(e.chauffageEnergie,e.chauffageEnergieAutre)}</td>
    <td style="text-align:center">${e.chauffageJustificatif?`☑ Oui`:`☐ Non`}</td>
    <td style="text-align:center">${e.chauffagePurge===`oui`?`☑ Oui`:`☐ Non`}</td>
    <td style="text-align:center">${e.chauffageTeste===`oui`?`☑ Oui`:`☐ Non`}</td>
  </tr>
</table>
</div>

<!-- Annexes -->
<div class="section-block">
<h2>Annexes</h2>
<table>
  <tr><th>Annexe</th><th>N°</th><th>État</th><th>Visite</th></tr>
  <tr><td>Garage</td><td>${E(e.garageNum,`—`)}</td><td>${e.garageEtat===`vide`?`Vide`:`Non débarrassé`}</td>
      <td rowspan="3">${O(e.visiteEau)} Avec eau &nbsp; ${O(e.visiteElec)} Avec électricité &nbsp; ${O(e.visiteGaz)} Avec gaz</td></tr>
  <tr><td>Cave</td><td>${E(e.caveNum,`—`)}</td><td>${e.caveEtat===`vide`?`Vide`:`Non débarrassé`}</td></tr>
  <tr><td>Grenier</td><td>${E(e.grenierNum,`—`)}</td><td>${e.grenierEtat===`vide`?`Vide`:`Non débarrassé`}</td></tr>
</table>
<div><strong>Remise des clés :</strong> ${O(e.remiseCles)} Oui &nbsp; ${O(!e.remiseCles)} Non &nbsp; <strong>Nombre :</strong> ${E(e.nombreClesRemises,`—`)}</div>
</div>

<!-- Compteurs -->
<div class="section-block">
<h2>Relevés compteurs</h2>
<div class="row" style="margin-bottom:6px">
  <div data-edl-mode="entrant" class="field"><div class="field-label">Date entrée</div><div class="field-val">${D(e.dateEntree)}</div></div>
  <div data-edl-mode="sortant" class="field"><div class="field-label">Date sortie</div><div class="field-val">${D(e.dateSortie)}</div></div>
</div>
<table>
  <tr><th>Fluide</th><th>N° compteur</th><th data-edl-mode="entrant">Index entrée</th><th data-edl-mode="sortant">Index sortie</th><th>Abonnement</th></tr>
  ${o(`eauChaude`,`Eau chaude`)}
  ${o(`eauFroide`,`Eau froide`)}
  ${o(`elect`,`Électricité`)}
  ${o(`gaz`,`Gaz`)}
</table>
</div>

<!-- Recommandations -->
<div class="recomm">
  <strong>Recommandations importantes :</strong> Les lieux doivent être restitués vides de tout mobilier et objets personnels,
  nettoyés y compris les annexes (balcon, garage, cave, etc.), les vitres propres ; les menues réparations exécutées :
  remplacement des appareillages détériorés, les joints usés refaits, moquettes shampouinées, cuvette WC détartrée, etc.
  Les trous de chevilles doivent être rebouchés. Prévoyez de justifier le certificat récent de l'entretien chaudière ou
  chauffe-eau. N'oubliez pas de procéder à la résiliation des contrats de fourniture d'énergie.
</div>

<!-- Pièces -->
<div class="section-block">
<h2>Description pièce par pièce — TB : Très bon · B : Bon · P : Passable · M : Mauvais</h2>
<table>
  <tr style="background:#1e3a5f;color:white">
    <th data-edl-phase-label>Pièce / EDL</th><th>Plafond</th><th>Murs</th><th>Sols</th><th>Menuiseries</th>
    <th>Équipements</th><th>Observations</th>
  </tr>
  ${s}
</table>
</div>

${z(e.photos)}

<!-- Signatures -->
<div class="section-signatures">
<h2>Signatures</h2>
<div style="display:flex;gap:20px">
  <div data-edl-mode="entrant" style="flex:1">
    <div style="font-weight:bold;margin-bottom:4px">EDL Entrant — ${D(e.dateSignatureEntrant)}</div>
    <div class="footer-sig">
      <div class="footer-sig-item">
        <div class="field-label">Pour le propriétaire</div>
        <div class="field-val" style="margin-bottom:3px">${E(e.sigProprietaireEntrant,``)}</div>
        ${k(e.sigImgProprietaireEntrant)}
      </div>
      <div class="footer-sig-item">
        <div class="field-label">Pour le locataire</div>
        <div class="field-val" style="margin-bottom:3px">${E(e.sigLocataireEntrant,``)}</div>
        ${k(e.sigImgLocataireEntrant)}
      </div>
    </div>
  </div>
  <div data-edl-mode="sortant" style="flex:1">
    <div style="font-weight:bold;margin-bottom:4px">EDL Sortant — ${D(e.dateSignatureSortant)}</div>
    <div class="footer-sig">
      <div class="footer-sig-item">
        <div class="field-label">Pour le propriétaire</div>
        <div class="field-val" style="margin-bottom:3px">${E(e.sigProprietaireSortant,``)}</div>
        ${k(e.sigImgProprietaireSortant)}
      </div>
      <div class="footer-sig-item">
        <div class="field-label">Pour le locataire</div>
        <div class="field-val" style="margin-bottom:3px">${E(e.sigLocataireSortant,``)}</div>
        ${k(e.sigImgLocataireSortant)}
      </div>
    </div>
  </div>
</div>

<p style="font-size:8pt;margin-top:10px;font-style:italic">
  Le présent état des lieux, établi contradictoirement et accepté par les parties fait partie intégrante du contrat de location auquel il est joint.
</p>
</div>

</body></html>`}function H(e){let t=(e,t,n)=>`
    <tr>
      <td style="font-weight:bold;background:#f1f5f9;width:18%">${n}</td>
      <td data-edl-mode="entrant" style="white-space:pre-line;width:41%">${E(e,`—`)}</td>
      <td data-edl-mode="sortant" style="white-space:pre-line;width:41%">${E(t,`—`)}</td>
    </tr>`;return`<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><style>${B}</style></head>
<body>

<h1>MÉTROPOLE DE LYON — ÉTAT DES LIEUX — TERRAIN / PARCELLE</h1>

<!-- Locataire -->
<div class="section-block">
<h2>Informations locataire</h2>
<div class="row">
  <div class="field"><div class="field-label">Raison sociale</div><div class="field-val">${E(e.locRaisonSociale)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Nom</div><div class="field-val">${E(e.locNom)}</div></div>
  <div class="field"><div class="field-label">Prénom</div><div class="field-val">${E(e.locPrenom)}</div></div>
  <div class="field"><div class="field-label">Fonction</div><div class="field-val">${E(e.locFonction,`—`)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Adresse</div><div class="field-val">${E(e.locAdresse)}</div></div>
  <div class="field"><div class="field-label">Code Postal</div><div class="field-val">${E(e.locCp)}</div></div>
  <div class="field"><div class="field-label">Ville</div><div class="field-val">${E(e.locVille)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Téléphone</div><div class="field-val">${E(e.locTel,`—`)}</div></div>
  <div class="field"><div class="field-label">Portable</div><div class="field-val">${E(e.locPort,`—`)}</div></div>
</div>
</div>

<!-- Descriptif du bien -->
<div class="section-block">
<h2>Descriptif du bien</h2>
<div class="row">
  <div class="field"><div class="field-label">Parcelle(s) n°</div><div class="field-val">${E(e.parcelle)}</div></div>
  <div class="field"><div class="field-label">Garage n°</div><div class="field-val">${E(e.garageNum,`—`)}</div></div>
  <div class="field"><div class="field-label">Surface</div><div class="field-val">${E(e.surfaceTerrain,`—`)} m²</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Identifiant du bien</div><div class="field-val">${E(e.identifiantBien)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Adresse</div><div class="field-val">${E(e.adresseBien)}</div></div>
  <div class="field"><div class="field-label">Code Postal</div><div class="field-val">${E(e.cpBien)}</div></div>
  <div class="field"><div class="field-label">Ville</div><div class="field-val">${E(e.villeBien)}</div></div>
</div>
</div>

<!-- Descriptif des lieux Entrée / Sortie -->
<div class="section-block">
<h2>Descriptif des lieux</h2>
<table>
  <tr>
    <th style="width:18%"></th>
    <th data-edl-mode="entrant" style="width:41%;background:#d1fae5;color:#065f46">↩ ENTRÉE — ${D(e.dateEntree)}</th>
    <th data-edl-mode="sortant" style="width:41%;background:#fee2e2;color:#991b1b">↪ SORTIE — ${D(e.dateSortie)}</th>
  </tr>
  <tr><td colspan="3" style="background:#e8edf5;font-weight:bold;font-size:8.5pt;padding:3px 5px">FLUIDES</td></tr>
  ${t(e.gazEntreeDesc,e.gazSortieDesc,`Gaz`)}
  ${t(e.elecEntreeDesc,e.elecSortieDesc,`Électricité`)}
  ${t(e.eauEntreeDesc,e.eauSortieDesc,`Eau`)}
  ${t(e.autreEntreeDesc,e.autreSortieDesc,`Autre`)}
  <tr><td colspan="3" style="background:#e8edf5;font-weight:bold;font-size:8.5pt;padding:3px 5px">AUTRES ÉLÉMENTS</td></tr>
  ${t(e.clotureEntreeDesc,e.clotureSortieDesc,`Clôture`)}
  ${t(e.portailEntreeDesc,e.portailSortieDesc,`Portail`)}
  <tr>
    <td style="font-weight:bold;background:#f1f5f9">Clés</td>
    <td data-edl-mode="entrant">Nombre : ${E(e.cleNbEntree,`—`)}</td>
    <td data-edl-mode="sortant">Nombre : ${E(e.cleNbSortie,`—`)}</td>
  </tr>
  ${t(e.batiEntreeDesc,e.batiSortieDesc,`Bâti`)}
  ${t(e.encombrEntreeDesc,e.encombrSortieDesc,`Encombrant`)}
  <tr>
    <td style="font-weight:bold;background:#f1f5f9">Observations</td>
    <td data-edl-mode="entrant" style="white-space:pre-line">${E(e.observationsEntree,`—`)}</td>
    <td data-edl-mode="sortant" style="white-space:pre-line">${E(e.observationsSortie,`—`)}</td>
  </tr>
</table>
</div>

${z(e.photos)}

<!-- Signatures -->
<div class="section-signatures">
<h2>Noms et signatures</h2>
<div style="display:flex;gap:20px;margin-top:6px">
  <div data-edl-mode="entrant" style="flex:1">
    <div style="font-weight:bold;text-align:center;margin-bottom:6px;color:#065f46">↩ Entrée</div>
    <div class="footer-sig">
      <div class="footer-sig-item">
        <div class="field-label">Propriétaire / Grand-Lyon</div>
        <div class="field-val">${E(e.sigEntreeProprietaire,``)}</div>
        ${k(e.sigImgEntreeProprietaire)}
      </div>
      <div class="footer-sig-item">
        <div class="field-label">Locataire</div>
        <div class="field-val">${E(e.sigEntreeLocataire,``)}</div>
        ${k(e.sigImgEntreeLocataire)}
      </div>
    </div>
  </div>
  <div data-edl-mode="sortant" style="flex:1">
    <div style="font-weight:bold;text-align:center;margin-bottom:6px;color:#991b1b">↪ Sortie</div>
    <div class="footer-sig">
      <div class="footer-sig-item">
        <div class="field-label">Propriétaire / Grand-Lyon</div>
        <div class="field-val">${E(e.sigSortieProprietaire,``)}</div>
        ${k(e.sigImgSortieProprietaire)}
      </div>
      <div class="footer-sig-item">
        <div class="field-label">Locataire</div>
        <div class="field-val">${E(e.sigSortieLocataire,``)}</div>
        ${k(e.sigImgSortieLocataire)}
      </div>
    </div>
  </div>
</div>
</div>

</body></html>`}function U(e){let t={commercial:`Commercial`,stockage:`Stockage`,icpe:`ICPE`,artisanal:`Atelier / Artisanal`,bureau:`Bureau`,mixte:`Mixte`,autre:`Autre`}[e.usageLocal]||e.usageLocal||`—`,n=e.typeEDL===`sortant`?`SORTANT`:`ENTRANT`,r=e=>`<td style="text-align:center;white-space:pre-line" class="${A(e)}">${e||`—`}</td>`,i=(t,n)=>`
    <tr>
      <td>${n}</td>
      <td>${E(e[t+`Num`],`—`)}</td>
      <td data-edl-mode="entrant">${E(e[t+`IdxE`],`—`)}</td>
      <td data-edl-mode="sortant">${E(e[t+`IdxS`],`—`)}</td>
      <td style="text-align:center">${e[t+`Abo`]===`resilie`?`Résilié`:`En service`}</td>
    </tr>`,a=(Array.isArray(e.pieces)?e.pieces:[]).map(e=>{let t=e.entrant||{},n=e.sortant||{},i=[[`Entrant`,t.photos],[`Sortant`,n.photos]].filter(([,e])=>Array.isArray(e)&&e.length).map(([e,t])=>`
        <tr data-edl-mode="${e===`Entrant`?`entrant`:`sortant`}">
          <td data-edl-phase-label>${e}</td>
          <td colspan="6">${N(t)}</td>
        </tr>`).join(``);return`
      <tbody class="piece-group">
      <tr>
        <td colspan="7" style="font-weight:bold;background:#fef3c7 !important;padding:4px 6px;color:#92400e">${E(e.nom,`Zone`)}</td>
      </tr>
      <tr data-edl-mode="entrant">
        <td data-edl-phase-label>Entrant</td>
        ${r(t.plafond)}${r(j(t))}${r(t.sols)}${r(t.menuiseries)}
        <td style="font-size:7.5pt;white-space:pre-line">${F(t.equipements)}</td>
        <td style="font-size:7.5pt;white-space:pre-line">${E(t.notes,`—`)}</td>
      </tr>
      <tr data-edl-mode="sortant">
        <td data-edl-phase-label>Sortant</td>
        ${r(n.plafond)}${r(j(n))}${r(n.sols)}${r(n.menuiseries)}
        <td style="font-size:7.5pt;white-space:pre-line">${F(n.equipements)}</td>
        <td style="font-size:7.5pt;white-space:pre-line">${E(n.notes,`—`)}</td>
      </tr>
      ${i}
      </tbody>`}).join(``);return`<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><style>${B}</style></head>
<body>

<h1>MÉTROPOLE DE LYON — ÉTAT DES LIEUX — LOCAL (${n})</h1>

<!-- Descriptif du local -->
<div class="section-block">
<h2>Descriptif du local</h2>
<div class="row">
  <div class="field"><div class="field-label">Nature / Usage</div><div class="field-val">${t}</div></div>
  <div class="field"><div class="field-label">Surface</div><div class="field-val">${E(e.surface,`—`)} m²</div></div>
  <div class="field"><div class="field-label">Date EDL</div><div class="field-val">${D(e.dateEDL)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Références cadastrales</div><div class="field-val">${E(e.referencesCadastrales)}</div></div>
  <div class="field"><div class="field-label">Attestation assurance</div><div class="field-val">${e.assurance===`oui`?`☑ Oui  ☐ Non`:`☐ Oui  ☑ Non`}</div></div>
</div>
</div>

<!-- Adresse -->
<div class="section-block">
<h2>Adresse du local</h2>
<div class="row">
  <div class="field"><div class="field-label">Lot bâtiment</div><div class="field-val">${E(e.lotBatiment)}</div></div>
  <div class="field"><div class="field-label">UG</div><div class="field-val">${E(e.ug)}</div></div>
  <div class="field"><div class="field-label">Commune</div><div class="field-val">${E(e.commune)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Adresse</div><div class="field-val">${E(e.adresseRue)}</div></div>
  <div class="field"><div class="field-label">Bâtiment</div><div class="field-val">${E(e.immeuble)}</div></div>
  <div class="field"><div class="field-label">Allée / Zone</div><div class="field-val">${E(e.allee)}</div></div>
  <div class="field"><div class="field-label">Étage / Niveau</div><div class="field-val">${E(e.etage)}</div></div>
  <div class="field"><div class="field-label">Porte / Cellule</div><div class="field-val">${E(e.porte)}</div></div>
</div>
</div>

<!-- Locataire / Occupant -->
<div class="section-block">
<h2>Locataire / Occupant</h2>
<div class="row">
  <div class="field"><div class="field-label">Raison sociale / Société</div><div class="field-val">${E(e.locataireSociete)}</div></div>
  <div class="field"><div class="field-label">SIREN</div><div class="field-val">${E(e.locataireSiren,`—`)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Nom</div><div class="field-val">${E(e.locataireNom)}</div></div>
  <div class="field"><div class="field-label">Prénom</div><div class="field-val">${E(e.locatairePrenom,``)}</div></div>
  <div class="field"><div class="field-label">Fonction</div><div class="field-val">${E(e.locataireFonction,`—`)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Adresse</div><div class="field-val">${E(e.locataireAdresse)}</div></div>
  <div class="field"><div class="field-label">CP</div><div class="field-val">${E(e.locataireCp)}</div></div>
  <div class="field"><div class="field-label">Ville</div><div class="field-val">${E(e.locataireVille)}</div></div>
</div>
<div class="row">
  <div class="field"><div class="field-label">Téléphone</div><div class="field-val">${E(e.locataireTel,`—`)}</div></div>
  <div class="field"><div class="field-label">Portable</div><div class="field-val">${E(e.locatairePort,`—`)}</div></div>
</div>
</div>

<!-- Équipements & accès -->
<div class="section-block">
<h2>Équipements &amp; accès</h2>
<table>
  <tr>
    <td>${O(e.digicode)} Digicode</td>
    <td>${O(e.interphone)} Interphone / Visiophone</td>
    <td>${O(e.alarme)} Alarme / Télésurveillance</td>
  </tr>
  <tr>
    <td>${O(e.triPhase)} Triphasé / Prise de force</td>
    <td>${O(e.ventilationForcee)} Ventilation forcée (VMC)</td>
    <td>${O(e.remiseCles)} Remise des clés</td>
  </tr>
</table>
<table>
  <tr><th>Mode chauffage</th><th>Énergie</th></tr>
  <tr>
    <td>${e.chauffageMode===`individuel`?`☑ Individuel  ☐ Collectif  ☐ Aucun`:e.chauffageMode===`collectif`?`☐ Individuel  ☑ Collectif  ☐ Aucun`:`☐ Individuel  ☐ Collectif  ☑ Aucun`}</td>
    <td>${M(e.chauffageEnergie,e.chauffageEnergieAutre)}</td>
  </tr>
</table>
</div>

<!-- Annexes -->
<div class="section-block">
<h2>Annexes</h2>
<table>
  <tr><th>Annexe</th><th>N°</th><th>État</th></tr>
  <tr><td>Parking</td><td>${E(e.parkingNum,`—`)}</td><td>${e.parkingEtat===`vide`?`Vide`:`Non débarrassé`}</td></tr>
  <tr><td>Cave / Débarras</td><td>${E(e.caveNum,`—`)}</td><td>${e.caveEtat===`vide`?`Vide`:`Non débarrassé`}</td></tr>
</table>
</div>

<!-- Compteurs -->
<div class="section-block">
<h2>Relevés compteurs</h2>
<div class="row" style="margin-bottom:6px">
  <div data-edl-mode="entrant" class="field"><div class="field-label">Date entrée</div><div class="field-val">${D(e.dateEntree)}</div></div>
  <div data-edl-mode="sortant" class="field"><div class="field-label">Date sortie</div><div class="field-val">${D(e.dateSortie)}</div></div>
</div>
<table>
  <tr><th>Fluide</th><th>N° compteur</th><th data-edl-mode="entrant">Index entrée</th><th data-edl-mode="sortant">Index sortie</th><th>Abonnement</th></tr>
  ${i(`eauFroide`,`Eau`)}
  ${i(`elect`,`Électricité`)}
  ${i(`gaz`,`Gaz`)}
</table>
</div>

<!-- Zones / Espaces -->
<div class="section-block">
<h2>Description zone par zone — TB : Très bon · B : Bon · P : Passable · M : Mauvais</h2>
<table>
  <tr style="background:#1e3a5f;color:white">
    <th data-edl-phase-label>Zone / EDL</th><th>Plafond</th><th>Murs</th><th>Sols</th><th>Menuiseries</th>
    <th>Équipements</th><th>Observations</th>
  </tr>
  ${a}
</table>
</div>

<!-- Observations -->
<div class="section-block">
<h2>Observations particulières</h2>
<table>
  <tr>
    <th data-edl-mode="entrant" style="width:50%;background:#d1fae5;color:#065f46">↩ Entrée</th>
    <th data-edl-mode="sortant" style="width:50%;background:#fee2e2;color:#991b1b">↪ Sortie</th>
  </tr>
  <tr>
    <td data-edl-mode="entrant" style="white-space:pre-line;vertical-align:top;min-height:40px">${E(e.observationsEntree,`—`)}</td>
    <td data-edl-mode="sortant" style="white-space:pre-line;vertical-align:top;min-height:40px">${E(e.observationsSortie,`—`)}</td>
  </tr>
</table>
</div>

${z(e.photos)}

<!-- Signatures -->
<div class="section-signatures">
<h2>Signatures</h2>
<div style="display:flex;gap:20px">
  <div data-edl-mode="entrant" style="flex:1">
    <div style="font-weight:bold;margin-bottom:4px">EDL Entrant — ${D(e.dateSignatureEntrant)}</div>
    <div class="footer-sig">
      <div class="footer-sig-item">
        <div class="field-label">Pour le propriétaire / Métropole</div>
        <div class="field-val" style="margin-bottom:3px">${E(e.sigProprietaireEntrant,``)}</div>
        ${k(e.sigImgProprietaireEntrant)}
      </div>
      <div class="footer-sig-item">
        <div class="field-label">Pour l'occupant / Locataire</div>
        <div class="field-val" style="margin-bottom:3px">${E(e.sigLocataireEntrant,``)}</div>
        ${k(e.sigImgLocataireEntrant)}
      </div>
    </div>
  </div>
  <div data-edl-mode="sortant" style="flex:1">
    <div style="font-weight:bold;margin-bottom:4px">EDL Sortant — ${D(e.dateSignatureSortant)}</div>
    <div class="footer-sig">
      <div class="footer-sig-item">
        <div class="field-label">Pour le propriétaire / Métropole</div>
        <div class="field-val" style="margin-bottom:3px">${E(e.sigProprietaireSortant,``)}</div>
        ${k(e.sigImgProprietaireSortant)}
      </div>
      <div class="footer-sig-item">
        <div class="field-label">Pour l'occupant / Locataire</div>
        <div class="field-val" style="margin-bottom:3px">${E(e.sigLocataireSortant,``)}</div>
        ${k(e.sigImgLocataireSortant)}
      </div>
    </div>
  </div>
</div>

<p style="font-size:8pt;margin-top:10px;font-style:italic">
  Le présent état des lieux, établi contradictoirement et accepté par les parties fait partie intégrante du contrat de location auquel il est joint.
</p>
</div>

</body></html>`}var W={tresbon:`Très bon`,bon:`Bon`,usure:`Usure normale`,refaire:`À refaire`,casse:`Cassé(e)`,remplacer:`À remplacer`,reparer:`À réparer`};function G(e,t={}){let n=W[t.etat]||`—`;return`
    <tr>
      <td style="font-weight:600">${e}</td>
      <td style="color:${[`tresbon`,`bon`].includes(t.etat)?`#166534`:t.etat?`#b91c1c`:`#64748b`};font-weight:700;text-align:center">${n}</td>
      <td style="font-size:8pt;color:#555;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word">${t.note||``}</td>
    </tr>`}function K(e=[]){return e.length?`
    <table>
      <thead><tr><th>Désignation</th><th style="width:80px;text-align:center">Nombre</th><th style="width:100px">État</th></tr></thead>
      <tbody>
        ${e.map(e=>`<tr>
          <td>${e.libelle}</td>
          <td style="text-align:center">${e.nombre||`—`}</td>
          <td>${e.etat||`—`}</td>
        </tr>`).join(``)}
      </tbody>
    </table>`:``}function q(e){let t=e.typeEDL===`entree`?`ENTRÉE`:`SORTIE`,n=e.typeEDL===`sortie`,r=T(e.pepiniereId),i=[[`portEntree`,`Porte d'entrée`],[`videophone`,`Vidéophone`],[`sol`,`Sol`],[`murs`,`Murs`],[`plafond`,`Plafond`],[`plinthes`,`Plinthes`],[`fenetre`,`Fenêtre`],[`store`,`Store`],[`tabletteFenetre`,`Tablettes de fenêtres`],[`interrupteurs`,`Interrupteurs`],[`prisesCourant`,`Prises de courant`],[`radiateur`,`Radiateur`],[`boiteAuxLettres`,`Boîtes à lettres`]],a=e.constatations||{};return`<!DOCTYPE html><html><head><meta charset="UTF-8">
  <style>${B}
    .constat-table td:first-child { width: 25%; }
    .constat-table td:nth-child(2) { width: 15%; }
    .constat-table td:nth-child(3) { width: 60%; }
  </style></head><body>
  <h1>État des lieux ${t} — Bureau ${r?r.label:`Pôle LYVE`}</h1>
  <div style="text-align:center;font-size:10pt;margin-bottom:10px;font-style:italic">
    ${r?`${r.label} — ${r.adresse}`:`Pépinière`}
  </div>

  <div class="section-block">
  <h2>Parties</h2>
  <div class="row">
    <div class="field">
      <div class="field-label">La Métropole de Lyon</div>
      <div style="font-size:9pt;margin-bottom:4px">SIREN 200 046 977 — 20 rue du Lac, 69003 Lyon</div>
      <div class="field-label">Représentée par</div>
      <div class="field-val">${E(e.metropoleRepresentant)}</div>
    </div>
    <div class="field">
      <div class="field-label">L'entreprise</div>
      <div class="field-val" style="font-weight:700">${E(e.locEntreprise)}</div>
      <div class="field-label" style="margin-top:4px">SIREN</div>
      <div class="field-val">${E(e.locSiren)}</div>
      <div class="field-label" style="margin-top:4px">Représentée par</div>
      <div class="field-val">${E(e.locRepresentant)}</div>
      <div class="field-label" style="margin-top:4px">Adresse</div>
      <div class="field-val">${E(e.locAdresse)}${e.locCp?`, `+e.locCp:``}${e.locVille?` `+e.locVille:``}</div>
    </div>
  </div>
  </div>

  <div class="section-block">
  <h2>Descriptif du local</h2>
  <div class="row">
    <div class="field">
      <div class="field-label">Local bureau n°</div>
      <div class="field-val">${E(e.localNumero)}</div>
    </div>
    <div class="field">
      <div class="field-label">Surface</div>
      <div class="field-val">${E(e.localSurface)} m²</div>
    </div>
    <div class="field">
      <div class="field-label">Date de l'EDL</div>
      <div class="field-val">${D(e.dateEDL)}</div>
    </div>
  </div>
  ${n&&e.nouvelleAdresse?`
  <div style="margin-bottom:8px">
    <div class="field-label">Nouvelle adresse</div>
    <div class="field-val">${e.nouvelleAdresse}</div>
  </div>`:``}
  </div>

  <div class="section-block">
  <h2>Constatations — Local bureau n°${E(e.localNumero,`…`)}</h2>
  <table class="constat-table">
    <thead><tr><th>Élément</th><th style="text-align:center">État</th><th>Observations</th></tr></thead>
    <tbody>
      ${i.map(([e,t])=>G(t,a[e])).join(``)}
    </tbody>
  </table>

  ${e.autresEquipements?`
  <h3>Autres équipements / modifications</h3>
  <div style="padding:6px;border:1px solid #ccc;border-radius:4px;font-size:9pt;white-space:pre-line">${e.autresEquipements}</div>`:``}
  </div>

  <div class="section-block">
  <h2>Clés / Badges / Accès</h2>
  ${K(e.cles)}
  </div>

  ${z(e.photos)}

  <div class="section-signatures">
    <h2>Signatures</h2>
    <div style="font-size:9pt;margin-bottom:8px">
      Dépôt de garantie, caution : paiement à réception du titre de la trésorerie principale.<br>
      Le présent état des lieux a été dressé en deux exemplaires faisant foi.
      Les signataires déclarent avoir participé en personne à son établissement et l'approuvent sans réserve.
    </div>
    <div style="font-size:9pt;margin-bottom:10px">${E(e.lieuSignature,`Lyon`)} le ${D(e.dateSignature)}</div>
    <div class="footer-sig">
      <div class="footer-sig-item">
        <div class="field-label">L'occupant — ${E(e.locEntreprise,`Entreprise`)}</div>
        <div class="field-val">${E(e.sigLocataire)}</div>
        ${k(e.sigImgLocataire)}
      </div>
      <div class="footer-sig-item">
        <div class="field-label">La Métropole de Lyon — Représentée par</div>
        <div class="field-val">${E(e.sigMetropole)}</div>
        ${k(e.sigImgMetropole)}
      </div>
    </div>
  </div>
</body></html>`}function J(e){let t=e.typeEDL===`entree`?`ENTRÉE`:`SORTIE`,n=e.typeEDL===`sortie`,r=T(e.pepiniereId),i=[[`sol`,`Sol`],[`murs`,`Murs`],[`plafond`,`Plafond`],[`fenetre`,`Fenêtre`],[`portEntree`,`Porte d'entrée`],[`porteSectionnelle`,`Porte sectionnelle`],[`portail`,`Portail`],[`interrupteurs`,`Interrupteurs`],[`prisesCourant`,`Prises de courant`],[`aerotherme`,`Aérotherme`],[`vidoirs`,`Vidoirs`],[`sousCompteurs`,`Sous-compteurs`]],a=[[`sol`,`Sol`],[`murs`,`Murs`],[`plafond`,`Plafond`],[`plinthes`,`Plinthes`],[`vitres`,`Vitres`],[`interrupteurs`,`Interrupteurs`],[`prisesCourant`,`Prises de courant`],[`portEntree`,`Porte d'entrée`]],o=e.constatationsAtelier||{},s=e.constatationsBureau||{};return`<!DOCTYPE html><html><head><meta charset="UTF-8">
  <style>${B}
    .constat-table td:first-child { width: 25%; }
    .constat-table td:nth-child(2) { width: 15%; }
    .constat-table td:nth-child(3) { width: 60%; }
  </style></head><body>
  <h1>État des lieux ${t} — Atelier ${r?r.label:`Pôle LYVE`}</h1>
  <div style="text-align:center;font-size:10pt;margin-bottom:10px;font-style:italic">
    ${r?`${r.label} — ${r.adresse}`:`Pépinière`}
  </div>

  <div class="section-block">
  <h2>Parties</h2>
  <div class="row">
    <div class="field">
      <div class="field-label">La Métropole de Lyon</div>
      <div style="font-size:9pt;margin-bottom:4px">SIREN 200 046 977 — 20 rue du Lac, 69003 Lyon</div>
      <div class="field-label">Représentée par</div>
      <div class="field-val">${E(e.metropoleRepresentant)}</div>
    </div>
    <div class="field">
      <div class="field-label">L'entreprise</div>
      <div class="field-val" style="font-weight:700">${E(e.locEntreprise)}</div>
      <div class="field-label" style="margin-top:4px">SIREN</div>
      <div class="field-val">${E(e.locSiren)}</div>
      <div class="field-label" style="margin-top:4px">Représentée par</div>
      <div class="field-val">${E(e.locRepresentant)}</div>
      <div class="field-label" style="margin-top:4px">Adresse</div>
      <div class="field-val">${E(e.locAdresse)}${e.locCp?`, `+e.locCp:``}${e.locVille?` `+e.locVille:``}</div>
    </div>
  </div>
  </div>

  <div class="section-block">
  <h2>Descriptif du local</h2>
  <div class="row">
    <div class="field">
      <div class="field-label">Atelier n°</div>
      <div class="field-val">${E(e.localNumero)}</div>
    </div>
    <div class="field">
      <div class="field-label">Surface</div>
      <div class="field-val">${E(e.localSurface)} m²</div>
    </div>
    <div class="field">
      <div class="field-label">Date de l'EDL</div>
      <div class="field-val">${D(e.dateEDL)}</div>
    </div>
  </div>
  ${n&&e.nouvelleAdresse?`
  <div style="margin-bottom:8px">
    <div class="field-label">Nouvelle adresse</div>
    <div class="field-val">${e.nouvelleAdresse}</div>
  </div>`:``}
  </div>

  <div class="section-block">
  <h2>Constatations — Atelier n°${E(e.localNumero,`…`)}</h2>
  <table class="constat-table">
    <thead><tr><th>Élément</th><th style="text-align:center">État</th><th>Observations</th></tr></thead>
    <tbody>${i.map(([e,t])=>G(t,o[e])).join(``)}</tbody>
  </table>
  ${e.autresEquipementsAtelier?`
  <h3>Autres équipements / modifications (atelier)</h3>
  <div style="padding:6px;border:1px solid #ccc;border-radius:4px;font-size:9pt;white-space:pre-line">${e.autresEquipementsAtelier}</div>`:``}
  </div>

  <div class="section-block">
  <h2>Bureau de l'atelier n°${E(e.localNumero,`…`)}</h2>
  <table class="constat-table">
    <thead><tr><th>Élément</th><th style="text-align:center">État</th><th>Observations</th></tr></thead>
    <tbody>${a.map(([e,t])=>G(t,s[e])).join(``)}</tbody>
  </table>
  ${e.autresEquipementsBureau?`
  <h3>Autres équipements / modifications (bureau)</h3>
  <div style="padding:6px;border:1px solid #ccc;border-radius:4px;font-size:9pt;white-space:pre-line">${e.autresEquipementsBureau}</div>`:``}
  </div>

  <div class="section-block">
  <h2>Clés / Badges / Accès</h2>
  ${K(e.cles)}
  </div>

  <div class="section-block">
  <h2>Relevé des compteurs</h2>
  <div class="field-label" style="margin-bottom:4px">Date de lecture : ${D(e.dateLectureCompteurs)}</div>
  <table>
    <thead><tr><th>Compteur</th><th>N°</th><th>Index</th></tr></thead>
    <tbody>
      <tr><td>Chauffage (kWh)</td><td>${E(e.compteurChauffageNum,`—`)}</td><td>${E(e.compteurChauffageVal,`—`)}</td></tr>
      <tr><td>Eau (m³)</td><td>${E(e.compteurEauNum,`—`)}</td><td>${E(e.compteurEauVal,`—`)}</td></tr>
      <tr><td>Électricité (kWh)</td><td>${E(e.compteurElecNum,`—`)}</td><td>${E(e.compteurElecVal,`—`)}</td></tr>
    </tbody>
  </table>
  </div>

  <div class="section-block">
  <h2>Local box n°${E(e.localBoxNumero,`…`)}</h2>
  <table>
    <thead><tr><th>Élément</th><th style="text-align:center;width:20%">État</th><th>Observations</th></tr></thead>
    <tbody>${G(`État du local box`,e.localBoxEtat)}</tbody>
  </table>
  </div>

  ${z(e.photos)}

  <div class="section-signatures">
    <h2>Signatures</h2>
    <div style="font-size:9pt;margin-bottom:8px">
      Dépôt de garantie, caution : paiement à réception du titre de la trésorerie principale.<br>
      Le présent état des lieux a été dressé en deux exemplaires faisant foi.
      Les signataires déclarent avoir participé en personne à son établissement et l'approuvent sans réserve.
    </div>
    <div style="font-size:9pt;margin-bottom:10px">${E(e.lieuSignature,`Lyon`)} le ${D(e.dateSignature)}</div>
    <div class="footer-sig">
      <div class="footer-sig-item">
        <div class="field-label">L'occupant — ${E(e.locEntreprise,`Entreprise`)}</div>
        <div class="field-val">${E(e.sigLocataire)}</div>
        ${k(e.sigImgLocataire)}
      </div>
      <div class="footer-sig-item">
        <div class="field-label">La Métropole de Lyon — Représentée par</div>
        <div class="field-val">${E(e.sigMetropole)}</div>
        ${k(e.sigImgMetropole)}
      </div>
    </div>
  </div>
</body></html>`}async function Y(e){let t=JSON.stringify(e,(e,t)=>typeof t==`string`&&(t.startsWith(`data:image`)||t.startsWith(`data:application`))?`[IMAGE]`:t),n=new TextEncoder().encode(t),r=await crypto.subtle.digest(`SHA-256`,n);return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function X(e){if(!e)return`—`;try{return new Date(e).toLocaleString(`fr-FR`,{dateStyle:`short`,timeStyle:`medium`})}catch{return e}}function Z(e,t){let n=[{img:`sigImgLocataire`,meta:`sigMetaLocataire`,label:`Occupant / Locataire`},{img:`sigImgMetropole`,meta:`sigMetaMetropole`,label:`Métropole de Lyon`},{img:`sigImgProprietaireEntrant`,meta:`sigMetaProprietaireEntrant`,label:`Propriétaire (entrée)`},{img:`sigImgLocataireEntrant`,meta:`sigMetaLocataireEntrant`,label:`Locataire (entrée)`},{img:`sigImgProprietaireSortant`,meta:`sigMetaProprietaireSortant`,label:`Propriétaire (sortie)`},{img:`sigImgLocataireSortant`,meta:`sigMetaLocataireSortant`,label:`Locataire (sortie)`},{img:`sigImgEntreeProprietaire`,meta:`sigMetaEntreeProprietaire`,label:`Grand-Lyon / Propriétaire (entrée)`},{img:`sigImgEntreeLocataire`,meta:`sigMetaEntreeLocataire`,label:`Locataire (entrée)`},{img:`sigImgSortieProprietaire`,meta:`sigMetaSortieProprietaire`,label:`Grand-Lyon / Propriétaire (sortie)`},{img:`sigImgSortieLocataire`,meta:`sigMetaSortieLocataire`,label:`Locataire (sortie)`}].filter(t=>e[t.img]&&(!g(e)||!y(t.img)||y(t.img)===_(e)));return n.length===0?``:`
<div style="page-break-inside:avoid;margin-top:16px;border:2px solid #1e3a5f;border-radius:4px;padding:10px;background:#f0f4ff">
  <div style="font-size:11pt;font-weight:700;color:#1e3a5f;border-bottom:1px solid #1e3a5f;padding-bottom:4px;margin-bottom:8px">
    &#128737; Certificat de Signature Électronique Avancée (SEA)
  </div>
  <div style="font-size:8pt;color:#555;margin-bottom:8px">
    Ce certificat atteste de l'identité des signataires au moment de la signature électronique,
    conformément au règlement eIDAS (UE n°910/2014). Chaque signature est horodatée et liée
    au compte authentifié de son auteur.
  </div>
  <table style="width:100%;border-collapse:collapse;font-size:8pt;margin-bottom:8px">
    <thead>
      <tr style="background:#1e3a5f;color:#fff">
        <th style="padding:4px 6px;text-align:left">Partie</th>
        <th style="padding:4px 6px;text-align:left">Identifiant</th>
        <th style="padding:4px 6px;text-align:center">Date &amp; heure</th>
        <th style="padding:4px 6px;text-align:center">Statut</th>
      </tr>
    </thead>
    <tbody>${n.map(t=>{let n=e[t.meta],r=n?.timestamp?X(n.timestamp):`<em style="color:#e67e22">Signature antérieure au système de certification</em>`,i=``;if(n){let e=n.nom?`<strong>${n.nom}</strong>`:``;if(n.externe)i=e?`${e} <span style="color:#888;font-size:7pt">(signataire externe)</span>`:`<em style="color:#888">Nom non renseigné au moment de la signature</em>`;else{let t=n.email?n.email:`<em style="color:#888">Non renseigné</em>`,r=n.uid?`<span style="color:#888;font-size:7pt"> — ID: ${n.uid}</span>`:``;i=`${e?e+` — `:``}${t}${r}`}}else i=`<em style="color:#888">Non renseigné</em>`;return`
      <tr>
        <td style="font-weight:700;width:30%">${t.label}</td>
        <td>${i}</td>
        <td style="text-align:center">${r}</td>
        <td style="text-align:center;font-size:8pt;color:${n?`#16a34a`:`#e67e22`};font-weight:700">${n?`✓ Certifiée`:`⚠ Non certifiée`}</td>
      </tr>`}).join(``)}</tbody>
  </table>
  <div style="font-size:7.5pt;color:#555;border-top:1px solid #b0c0e0;padding-top:6px;margin-top:4px">
    <strong>Empreinte du document (SHA-256) :</strong>
    <span style="font-family:monospace;font-size:6.5pt;color:#1e3a5f;word-break:break-all">${t}</span>
    <br/>
    <strong>Date d'export PDF :</strong> ${X(new Date().toISOString())} &nbsp;|&nbsp;
    <strong>Système :</strong> ERP Immobilier — Métropole de Lyon
  </div>
</div>`}function Q(e){let t=e.typeBien===`terrain`?H(e):e.typeBien===`pepiniere_bureau`?q(e):e.typeBien===`pepiniere_atelier`?J(e):e.typeBien===`entrepot`?U(e):V(e);return g(e)?C(t,_(e)):t}async function te(n){let i=(await t(async()=>{let{default:t}=await import(`./html2pdf-DoLdf0ZB.js`).then(t=>e(t.t(),1));return{default:t}},__vite__mapDeps([0,1,2]),import.meta.url)).default,a=Q(n),o=Z(n,await Y(n)),s=a.match(/<style[^>]*>([\s\S]*?)<\/style>/i),c=a.match(/<body[^>]*>([\s\S]*)<\/body>/i),d=s?s[1]:``,f=(c?c[1]:a)+o,p=document.createElement(`div`);p.style.cssText=[`font-family:Arial,Helvetica,sans-serif`,`font-size:9pt`,`color:#000`,`background:#fff`,`padding:10px`,`--text:#000`,`--text-sub:#555`,`--text-muted:#888`,`--bg:#fff`,`--bg-card:#fff`,`--bg-panel:#f9fafb`,`--border:#ccc`,`--border-strong:#aaa`].join(`;`),p.innerHTML=`<style>`+u(d)+`</style>`+f,document.body.appendChild(p);let m=n.typeBien===`pepiniere_bureau`||n.typeBien===`pepiniere_atelier`?n.locEntreprise||n.locRepresentant||`pepiniere`:n.typeBien===`terrain`?n.locNom||n.locRaisonSociale||`terrain`:n.typeBien===`entrepot`?n.locataireSociete||n.locataireNom||`local`:n.locataireNom||`locataire`,h=`EDL_${r(n.typeBien).replace(/[^a-zA-Z0-9]/g,`_`)}_${g(n)?_(n)+`_`:``}${m}_${n.dateEDL||n.dateEntree||`date`}.pdf`;try{await l(p,`ÉTAT DES LIEUX`);let e=i().set({margin:(await t(async()=>{let{PDF_DOCUMENT_MARGINS:e}=await import(`./metropoleBranding-Zs5rtHMB.js`).then(e=>e.r);return{PDF_DOCUMENT_MARGINS:e}},__vite__mapDeps([3,1]),import.meta.url)).PDF_DOCUMENT_MARGINS,filename:h,html2canvas:{scale:2,useCORS:!0,backgroundColor:`#ffffff`},pagebreak:{mode:[`css`]},jsPDF:{unit:`mm`,format:`a4`,orientation:`portrait`,encryption:{userPassword:``,ownerPassword:`GL-EDL-Metro2026!`,userPermissions:[`print`]}}}).from(p).toPdf(),r=await e.get(`pdf`);g(n)&&w(r,await e.get(`canvas`),(await e.get(`pageSize`)).inner.ratio);let{applyMetropoleBranding:a}=await t(async()=>{let{applyMetropoleBranding:e}=await import(`./metropoleBranding-Zs5rtHMB.js`).then(e=>e.r);return{applyMetropoleBranding:e}},__vite__mapDeps([3,1]),import.meta.url);a(r);let o=r.output(`blob`),{deliverGeneratedPdf:s}=await t(async()=>{let{deliverGeneratedPdf:e}=await import(`./documentDelivery-x0acBfIA.js`);return{deliverGeneratedPdf:e}},[],import.meta.url);return s(h,o)}finally{document.body.removeChild(p)}}var ne=m([`appartement`,`maison`,`terrain`,`entrepot`,`pepiniere_atelier`,`pepiniere_bureau`]),$=d({typeBien:ne,typeEDL:c().optional().default(``),dateEDL:c().optional().default(``),pieces:f(p(c(),h())).default([]),cles:f(p(c(),h())).default([]),photos:f(h()).default([]),signatures:f(h()).optional().default([]),partageAvec:f(h()).optional().default([])}).catchall(h());function re(e,t=`appartement`){let n=e&&typeof e==`object`?e:{};return $.parse({...n,typeBien:n.typeBien??t})}async function ie(e){return te($.parse(e))}export{g as a,_ as c,y as i,re as n,S as o,b as r,v as s,ie as t};