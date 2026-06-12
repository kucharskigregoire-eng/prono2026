// ====================================================================
// common.js — données + logique partagées (prono / admin / classement)
// Coupe du Monde 2026 — calendrier & arbre officiels
// ====================================================================
"use strict";

const CODES = {
  "Mexique":"mx","Afrique du Sud":"za","Corée du Sud":"kr","Tchéquie":"cz",
  "Canada":"ca","Bosnie-H.":"ba","Qatar":"qa","Suisse":"ch",
  "Brésil":"br","Maroc":"ma","Écosse":"gb-sct","Haïti":"ht",
  "États-Unis":"us","Paraguay":"py","Australie":"au","Turquie":"tr",
  "Allemagne":"de","Équateur":"ec","Côte d'Ivoire":"ci","Curaçao":"cw",
  "Pays-Bas":"nl","Japon":"jp","Suède":"se","Tunisie":"tn",
  "Belgique":"be","Égypte":"eg","Iran":"ir","Nouvelle-Zélande":"nz",
  "Espagne":"es","Uruguay":"uy","Cap-Vert":"cv","Arabie saoudite":"sa",
  "France":"fr","Sénégal":"sn","Norvège":"no","Irak":"iq",
  "Argentine":"ar","Algérie":"dz","Autriche":"at","Jordanie":"jo",
  "Portugal":"pt","Colombie":"co","Ouzbékistan":"uz","RD Congo":"cd",
  "Angleterre":"gb-eng","Croatie":"hr","Panama":"pa","Ghana":"gh"
};

function flagHTML(name, size) {
  const sz = size || "fi-sm";
  const code = CODES[name];
  if (!code) return `<span class="placeholder-dot ${sz}"></span>`;
  return `<span class="fi fi-${code} ${sz}"></span>`;
}

// ============ GROUPS ============
const GROUPS = [
  { letter: "A", teams: ["Mexique", "Afrique du Sud", "Corée du Sud", "Tchéquie"] },
  { letter: "B", teams: ["Canada", "Bosnie-H.", "Qatar", "Suisse"] },
  { letter: "C", teams: ["Brésil", "Maroc", "Écosse", "Haïti"] },
  { letter: "D", teams: ["États-Unis", "Paraguay", "Australie", "Turquie"] },
  { letter: "E", teams: ["Allemagne", "Équateur", "Côte d'Ivoire", "Curaçao"] },
  { letter: "F", teams: ["Pays-Bas", "Japon", "Suède", "Tunisie"] },
  { letter: "G", teams: ["Belgique", "Égypte", "Iran", "Nouvelle-Zélande"] },
  { letter: "H", teams: ["Espagne", "Uruguay", "Cap-Vert", "Arabie saoudite"] },
  { letter: "I", teams: ["France", "Sénégal", "Norvège", "Irak"] },
  { letter: "J", teams: ["Argentine", "Algérie", "Autriche", "Jordanie"] },
  { letter: "K", teams: ["Portugal", "Colombie", "Ouzbékistan", "RD Congo"] },
  { letter: "L", teams: ["Angleterre", "Croatie", "Panama", "Ghana"] }
];

// ============ SCHEDULE (date, home, away, venue) — calendrier officiel FIFA 2026 ============
const SCHEDULE_RAW = [
  ["A","2026-06-11","Mexique","Afrique du Sud","Mexico"],
  ["A","2026-06-11","Corée du Sud","Tchéquie","Guadalajara"],
  ["B","2026-06-12","Canada","Bosnie-H.","Toronto"],
  ["D","2026-06-12","États-Unis","Paraguay","Los Angeles"],
  ["B","2026-06-13","Qatar","Suisse","San Francisco"],
  ["C","2026-06-13","Brésil","Maroc","New York"],
  ["C","2026-06-13","Haïti","Écosse","Boston"],
  ["D","2026-06-13","Australie","Turquie","Vancouver"],
  ["E","2026-06-14","Allemagne","Curaçao","Houston"],
  ["F","2026-06-14","Pays-Bas","Japon","Dallas"],
  ["E","2026-06-14","Côte d'Ivoire","Équateur","Philadelphie"],
  ["F","2026-06-14","Suède","Tunisie","Monterrey"],
  ["H","2026-06-15","Espagne","Cap-Vert","Atlanta"],
  ["G","2026-06-15","Belgique","Égypte","Seattle"],
  ["H","2026-06-15","Arabie saoudite","Uruguay","Miami"],
  ["G","2026-06-15","Iran","Nouvelle-Zélande","Los Angeles"],
  ["I","2026-06-16","France","Sénégal","New York"],
  ["I","2026-06-16","Irak","Norvège","Boston"],
  ["J","2026-06-16","Argentine","Algérie","Kansas City"],
  ["J","2026-06-16","Autriche","Jordanie","San Francisco"],
  ["K","2026-06-17","Portugal","RD Congo","Houston"],
  ["L","2026-06-17","Angleterre","Croatie","Dallas"],
  ["L","2026-06-17","Ghana","Panama","Toronto"],
  ["K","2026-06-17","Ouzbékistan","Colombie","Mexico"],
  ["A","2026-06-18","Tchéquie","Afrique du Sud","Atlanta"],
  ["B","2026-06-18","Suisse","Bosnie-H.","Los Angeles"],
  ["B","2026-06-18","Canada","Qatar","Vancouver"],
  ["A","2026-06-18","Mexique","Corée du Sud","Guadalajara"],
  ["D","2026-06-19","États-Unis","Australie","Seattle"],
  ["C","2026-06-19","Écosse","Maroc","Boston"],
  ["C","2026-06-19","Brésil","Haïti","Philadelphie"],
  ["D","2026-06-19","Turquie","Paraguay","San Francisco"],
  ["F","2026-06-20","Pays-Bas","Suède","Houston"],
  ["E","2026-06-20","Allemagne","Côte d'Ivoire","Toronto"],
  ["E","2026-06-20","Équateur","Curaçao","Kansas City"],
  ["F","2026-06-20","Tunisie","Japon","Monterrey"],
  ["H","2026-06-21","Espagne","Arabie saoudite","Atlanta"],
  ["G","2026-06-21","Belgique","Iran","Los Angeles"],
  ["H","2026-06-21","Uruguay","Cap-Vert","Miami"],
  ["G","2026-06-21","Nouvelle-Zélande","Égypte","Vancouver"],
  ["J","2026-06-22","Argentine","Autriche","Dallas"],
  ["I","2026-06-22","France","Irak","Philadelphie"],
  ["I","2026-06-22","Norvège","Sénégal","New York"],
  ["J","2026-06-22","Jordanie","Algérie","San Francisco"],
  ["K","2026-06-23","Portugal","Ouzbékistan","Houston"],
  ["L","2026-06-23","Angleterre","Ghana","Boston"],
  ["L","2026-06-23","Panama","Croatie","Toronto"],
  ["K","2026-06-23","Colombie","RD Congo","Guadalajara"],
  ["B","2026-06-24","Suisse","Canada","Vancouver"],
  ["B","2026-06-24","Bosnie-H.","Qatar","Seattle"],
  ["C","2026-06-24","Écosse","Brésil","Miami"],
  ["C","2026-06-24","Maroc","Haïti","Atlanta"],
  ["A","2026-06-24","Tchéquie","Mexique","Mexico"],
  ["A","2026-06-24","Afrique du Sud","Corée du Sud","Monterrey"],
  ["E","2026-06-25","Équateur","Allemagne","New York"],
  ["E","2026-06-25","Curaçao","Côte d'Ivoire","Philadelphie"],
  ["F","2026-06-25","Tunisie","Pays-Bas","Kansas City"],
  ["F","2026-06-25","Japon","Suède","Dallas"],
  ["D","2026-06-25","Turquie","États-Unis","Los Angeles"],
  ["D","2026-06-25","Paraguay","Australie","San Francisco"],
  ["I","2026-06-26","Norvège","France","Boston"],
  ["I","2026-06-26","Sénégal","Irak","Toronto"],
  ["H","2026-06-26","Uruguay","Espagne","Guadalajara"],
  ["H","2026-06-26","Cap-Vert","Arabie saoudite","Houston"],
  ["G","2026-06-26","Nouvelle-Zélande","Belgique","Vancouver"],
  ["G","2026-06-26","Égypte","Iran","Seattle"],
  ["L","2026-06-27","Panama","Angleterre","New York"],
  ["L","2026-06-27","Croatie","Ghana","Philadelphie"],
  ["K","2026-06-27","Colombie","Portugal","Miami"],
  ["K","2026-06-27","RD Congo","Ouzbékistan","Atlanta"],
  ["J","2026-06-27","Jordanie","Argentine","Dallas"],
  ["J","2026-06-27","Algérie","Autriche","Kansas City"]
];

// Ordre des affiches de l'ANCIEN calendrier (home, away) par slot 0..5 — sert UNIQUEMENT
// à migrer les pronostics déjà saisis vers le nouveau calendrier sans rien perdre.
const LEGACY_PAIRS_BY_GROUP = {
  A: [["Mexique","Tchéquie"],["Corée du Sud","Afrique du Sud"],["Mexique","Corée du Sud"],["Afrique du Sud","Tchéquie"],["Tchéquie","Corée du Sud"],["Afrique du Sud","Mexique"]],
  B: [["Canada","Qatar"],["Bosnie-H.","Suisse"],["Canada","Bosnie-H."],["Suisse","Qatar"],["Qatar","Bosnie-H."],["Suisse","Canada"]],
  C: [["Brésil","Haïti"],["Maroc","Écosse"],["Brésil","Écosse"],["Maroc","Haïti"],["Haïti","Écosse"],["Maroc","Brésil"]],
  D: [["États-Unis","Paraguay"],["Australie","Turquie"],["États-Unis","Australie"],["Paraguay","Turquie"],["Turquie","États-Unis"],["Australie","Paraguay"]],
  E: [["Allemagne","Curaçao"],["Côte d'Ivoire","Équateur"],["Allemagne","Équateur"],["Curaçao","Côte d'Ivoire"],["Équateur","Curaçao"],["Côte d'Ivoire","Allemagne"]],
  F: [["Pays-Bas","Tunisie"],["Japon","Suède"],["Pays-Bas","Suède"],["Tunisie","Japon"],["Suède","Tunisie"],["Japon","Pays-Bas"]],
  G: [["Belgique","Nouvelle-Zélande"],["Égypte","Iran"],["Belgique","Iran"],["Nouvelle-Zélande","Égypte"],["Iran","Nouvelle-Zélande"],["Égypte","Belgique"]],
  H: [["Espagne","Arabie saoudite"],["Cap-Vert","Uruguay"],["Espagne","Uruguay"],["Arabie saoudite","Cap-Vert"],["Uruguay","Arabie saoudite"],["Cap-Vert","Espagne"]],
  I: [["France","Sénégal"],["Norvège","Irak"],["France","Irak"],["Sénégal","Norvège"],["Irak","Sénégal"],["Norvège","France"]],
  J: [["Argentine","Algérie"],["Autriche","Jordanie"],["Argentine","Autriche"],["Jordanie","Algérie"],["Algérie","Autriche"],["Jordanie","Argentine"]],
  K: [["Portugal","Ouzbékistan"],["Colombie","RD Congo"],["Portugal","RD Congo"],["Ouzbékistan","Colombie"],["RD Congo","Ouzbékistan"],["Colombie","Portugal"]],
  L: [["Angleterre","Panama"],["Croatie","Ghana"],["Angleterre","Ghana"],["Panama","Croatie"],["Ghana","Panama"],["Croatie","Angleterre"]]
};

// Build SCHEDULE (objects) and PAIRS_BY_GROUP (team-index pairings per match)
const SCHEDULE = [];
const PAIRS_BY_GROUP = {};
const META_BY_GROUP = {};
SCHEDULE_RAW.forEach(([grp, date, home, away, venue]) => {
  const group = GROUPS.find(g => g.letter === grp);
  const hIdx = group.teams.indexOf(home);
  const aIdx = group.teams.indexOf(away);
  if (!PAIRS_BY_GROUP[grp]) { PAIRS_BY_GROUP[grp] = []; META_BY_GROUP[grp] = []; }
  const matchIdx = PAIRS_BY_GROUP[grp].length;
  PAIRS_BY_GROUP[grp].push([hIdx, aIdx]);
  META_BY_GROUP[grp].push({ date, venue });
  SCHEDULE.push({ group: grp, date, home, away, venue, hIdx, aIdx, matchIdx });
});

// ============ BRACKET DEFINITIONS ============
// Ordre conforme à l'arbre officiel FIFA 2026 : chaque paire consécutive (0-1, 2-3, …)
// alimente un 8e de finale (M89→M96). Empêche un 1er et un 2e du même groupe de se
// rencontrer avant la finale.
const R32_DEFS = [
  { label: "M74", h: { type: "1", g: "E" }, a: { type: "3", slot: 0 } }, // 1E - 3 A/B/C/D/F
  { label: "M77", h: { type: "1", g: "I" }, a: { type: "3", slot: 1 } }, // 1I - 3 C/D/F/G/H
  { label: "M73", h: { type: "2", g: "A" }, a: { type: "2", g: "B" } }, // 2A - 2B
  { label: "M75", h: { type: "1", g: "F" }, a: { type: "2", g: "C" } }, // 1F - 2C
  { label: "M83", h: { type: "2", g: "K" }, a: { type: "2", g: "L" } }, // 2K - 2L
  { label: "M84", h: { type: "1", g: "H" }, a: { type: "2", g: "J" } }, // 1H - 2J
  { label: "M81", h: { type: "1", g: "D" }, a: { type: "3", slot: 2 } }, // 1D - 3 B/E/F/I/J
  { label: "M82", h: { type: "1", g: "G" }, a: { type: "3", slot: 3 } }, // 1G - 3 A/E/H/I/J
  { label: "M76", h: { type: "1", g: "C" }, a: { type: "2", g: "F" } }, // 1C - 2F
  { label: "M78", h: { type: "2", g: "E" }, a: { type: "2", g: "I" } }, // 2E - 2I
  { label: "M79", h: { type: "1", g: "A" }, a: { type: "3", slot: 4 } }, // 1A - 3 C/E/F/H/I
  { label: "M80", h: { type: "1", g: "L" }, a: { type: "3", slot: 5 } }, // 1L - 3 E/H/I/J/K
  { label: "M86", h: { type: "1", g: "J" }, a: { type: "2", g: "H" } }, // 1J - 2H
  { label: "M88", h: { type: "2", g: "D" }, a: { type: "2", g: "G" } }, // 2D - 2G
  { label: "M85", h: { type: "1", g: "B" }, a: { type: "3", slot: 6 } }, // 1B - 3 E/F/G/I/J
  { label: "M87", h: { type: "1", g: "K" }, a: { type: "3", slot: 7 } }  // 1K - 3 D/E/I/J/L
];

// L'ordre du tableau correspond à l'index `slot` référencé ci-dessus.
const THIRD_SLOTS = [
  { allowedGroups: ["A","B","C","D","F"], label: "3e A/B/C/D/F" }, // slot 0  (M74)
  { allowedGroups: ["C","D","F","G","H"], label: "3e C/D/F/G/H" }, // slot 1  (M77)
  { allowedGroups: ["B","E","F","I","J"], label: "3e B/E/F/I/J" }, // slot 2  (M81)
  { allowedGroups: ["A","E","H","I","J"], label: "3e A/E/H/I/J" }, // slot 3  (M82)
  { allowedGroups: ["C","E","F","H","I"], label: "3e C/E/F/H/I" }, // slot 4  (M79)
  { allowedGroups: ["E","H","I","J","K"], label: "3e E/H/I/J/K" }, // slot 5  (M80)
  { allowedGroups: ["E","F","G","I","J"], label: "3e E/F/G/I/J" }, // slot 6  (M85)
  { allowedGroups: ["D","E","I","J","L"], label: "3e D/E/I/J/L" }  // slot 7  (M87)
];

// Ancien ordre des 16es (versions précédentes) — sert à remapper les choix déjà faits.
const LEGACY_R32_LABELS = ["M75","M76","M79","M80","M74","M73","M78","M77","M85","M87","M86","M88","M83","M84","M81","M82"];

function emptyPlayer() {
  return {
    name: "",
    topScorer: "",
    groupScores: Object.fromEntries(
      GROUPS.map(g => [g.letter, Array(6).fill(null).map(() => ({ h: null, a: null }))])
    ),
    knockout: {
      r32: Array(16).fill(null),
      r16: Array(8).fill(null),
      qf: Array(4).fill(null),
      sf: Array(2).fill(null),
      final: null,
      third: null
    }
  };
}

function computeGroupStandings(group, scores) {
  const teams = group.teams.map(name => ({
    name, pts: 0, gf: 0, ga: 0, gd: 0, played: 0, w: 0, d: 0, l: 0
  }));
  const pairs = PAIRS_BY_GROUP[group.letter];
  pairs.forEach((pair, mIdx) => {
    const s = scores[mIdx];
    if (s.h === null || s.a === null || s.h === "" || s.a === "") return;
    const hScore = parseInt(s.h), aScore = parseInt(s.a);
    if (isNaN(hScore) || isNaN(aScore)) return;
    const hIdx = pair[0], aIdx = pair[1];
    teams[hIdx].played++; teams[aIdx].played++;
    teams[hIdx].gf += hScore; teams[hIdx].ga += aScore;
    teams[aIdx].gf += aScore; teams[aIdx].ga += hScore;
    if (hScore > aScore) { teams[hIdx].pts += 3; teams[hIdx].w++; teams[aIdx].l++; }
    else if (hScore < aScore) { teams[aIdx].pts += 3; teams[aIdx].w++; teams[hIdx].l++; }
    else { teams[hIdx].pts += 1; teams[aIdx].pts += 1; teams[hIdx].d++; teams[aIdx].d++; }
  });
  teams.forEach(t => t.gd = t.gf - t.ga);
  teams.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.name.localeCompare(b.name);
  });
  return teams;
}

function groupComplete(scores) {
  return scores.every(s =>
    s.h !== null && s.a !== null && s.h !== "" && s.a !== "" &&
    !isNaN(parseInt(s.h)) && !isNaN(parseInt(s.a))
  );
}


function computeBracket(pl) {
  const standings = {};
  GROUPS.forEach(g => {
    standings[g.letter] = computeGroupStandings(g, pl.groupScores[g.letter]);
  });

  const allGroupsComplete = GROUPS.every(g => groupComplete(pl.groupScores[g.letter]));

  const thirds = GROUPS.map(g => ({
    group: g.letter,
    team: standings[g.letter][2]
  })).filter(t => t.team.played > 0);

  thirds.sort((a, b) => {
    if (b.team.pts !== a.team.pts) return b.team.pts - a.team.pts;
    if (b.team.gd !== a.team.gd) return b.team.gd - a.team.gd;
    if (b.team.gf !== a.team.gf) return b.team.gf - a.team.gf;
    return a.team.name.localeCompare(b.team.name);
  });

  const qualifying3rds = allGroupsComplete ? thirds.slice(0, 8) : [];
  const qualifying3rdGroups = new Set(qualifying3rds.map(t => t.group));

  function assignSlots(slots, candidates) {
    const result = {};
    const usedGroups = new Set();
    function tryAssign(slotIdx) {
      if (slotIdx >= slots.length) return true;
      const slot = slots[slotIdx];
      for (const t of candidates) {
        if (slot.allowedGroups.includes(t.group) && !usedGroups.has(t.group)) {
          result[slotIdx] = t;
          usedGroups.add(t.group);
          if (tryAssign(slotIdx + 1)) return true;
          usedGroups.delete(t.group);
          delete result[slotIdx];
        }
      }
      return false;
    }
    if (tryAssign(0)) return result;
    const partial = {};
    const used = new Set();
    slots.forEach((slot, idx) => {
      const t = candidates.find(c => slot.allowedGroups.includes(c.group) && !used.has(c.group));
      if (t) { partial[idx] = t; used.add(t.group); }
    });
    return partial;
  }

  const slotAssignments = qualifying3rds.length === 8
    ? assignSlots(THIRD_SLOTS, qualifying3rds)
    : {};

  function resolve(def) {
    if (def.type === "1" || def.type === "2") {
      const t = standings[def.g][def.type === "1" ? 0 : 1];
      if (t.played === 0) return { name: null, label: def.type + def.g };
      return { name: t.name, label: def.type + def.g };
    }
    if (def.type === "3") {
      const slotInfo = THIRD_SLOTS[def.slot];
      const assigned = slotAssignments[def.slot];
      if (!assigned) return { name: null, label: slotInfo.label };
      return { name: assigned.team.name, label: "3" + assigned.group };
    }
  }

  const r32 = R32_DEFS.map(def => ({
    label: def.label,
    home: resolve(def.h),
    away: resolve(def.a)
  }));

  function getWinnerTeam(matchObj, pickIdx) {
    if (pickIdx === null || pickIdx === undefined) return { name: null, label: "Vainqueur" };
    return pickIdx === 0 ? matchObj.home : matchObj.away;
  }

  const r16 = [];
  for (let i = 0; i < 8; i++) {
    const m1 = r32[i * 2], m2 = r32[i * 2 + 1];
    const home = getWinnerTeam(m1, pl.knockout.r32[i * 2]);
    const away = getWinnerTeam(m2, pl.knockout.r32[i * 2 + 1]);
    if (!home.name) home.label = "V " + m1.label;
    if (!away.name) away.label = "V " + m2.label;
    r16.push({ home, away });
  }

  const qf = [];
  for (let i = 0; i < 4; i++) {
    const m1 = r16[i * 2], m2 = r16[i * 2 + 1];
    const home = getWinnerTeam(m1, pl.knockout.r16[i * 2]);
    const away = getWinnerTeam(m2, pl.knockout.r16[i * 2 + 1]);
    if (!home.name) home.label = "V 8e #" + (i * 2 + 1);
    if (!away.name) away.label = "V 8e #" + (i * 2 + 2);
    qf.push({ home, away });
  }

  const sf = [];
  for (let i = 0; i < 2; i++) {
    const m1 = qf[i * 2], m2 = qf[i * 2 + 1];
    const home = getWinnerTeam(m1, pl.knockout.qf[i * 2]);
    const away = getWinnerTeam(m2, pl.knockout.qf[i * 2 + 1]);
    if (!home.name) home.label = "V Q" + (i * 2 + 1);
    if (!away.name) away.label = "V Q" + (i * 2 + 2);
    sf.push({ home, away });
  }

  const finalHome = getWinnerTeam(sf[0], pl.knockout.sf[0]);
  const finalAway = getWinnerTeam(sf[1], pl.knockout.sf[1]);
  if (!finalHome.name) finalHome.label = "V Demi 1";
  if (!finalAway.name) finalAway.label = "V Demi 2";
  const finalMatch = { home: finalHome, away: finalAway };

  function getLoserTeam(matchObj, pickIdx) {
    if (pickIdx === null || pickIdx === undefined) return { name: null, label: "Perdant" };
    return pickIdx === 0 ? matchObj.away : matchObj.home;
  }
  const thirdHome = getLoserTeam(sf[0], pl.knockout.sf[0]);
  const thirdAway = getLoserTeam(sf[1], pl.knockout.sf[1]);
  if (!thirdHome.name) thirdHome.label = "P Demi 1";
  if (!thirdAway.name) thirdAway.label = "P Demi 2";
  const thirdMatch = { home: thirdHome, away: thirdAway };

  let champion = null, runnerUp = null;
  if (pl.knockout.final !== null && finalMatch.home.name && finalMatch.away.name) {
    champion = pl.knockout.final === 0 ? finalMatch.home.name : finalMatch.away.name;
    runnerUp = pl.knockout.final === 0 ? finalMatch.away.name : finalMatch.home.name;
  }
  let thirdPlace = null;
  if (pl.knockout.third !== null && thirdMatch.home.name && thirdMatch.away.name) {
    thirdPlace = pl.knockout.third === 0 ? thirdMatch.home.name : thirdMatch.away.name;
  }

  return {
    standings, qualifying3rdGroups, allGroupsComplete,
    r32, r16, qf, sf,
    final: finalMatch, third: thirdMatch,
    champion, runnerUp, thirdPlace
  };
}

function formatDateFr(isoDate) {
  const d = new Date(isoDate + "T12:00:00");
  const days = ["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];
  const months = ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

// ============ SCORING ============
// Barème par match de poule :
//   5 pts = score exact
//   3 pts = bon vainqueur ET bon écart (inclut un nul différent du nul pronostiqué)
//   2 pts = bon vainqueur seulement
//   0 pt  = mauvaise issue / pas de prono
// Renvoie null si le match n'a pas encore de résultat réel.
function scoreMatch(pred, actual) {
  if (!actual || actual.h === null || actual.h === undefined || actual.a === null || actual.a === undefined) return null;
  if (!pred || pred.h === null || pred.h === undefined || pred.a === null || pred.a === undefined) return 0;
  const po = Math.sign(pred.h - pred.a), ao = Math.sign(actual.h - actual.a);
  if (po !== ao) return 0;
  if (pred.h === actual.h && pred.a === actual.a) return 5;
  if ((pred.h - pred.a) === (actual.h - actual.a)) return 3;
  return 2;
}

function normalizeName(s) {
  return String(s || "").trim().toLowerCase().replace(/\s+/g, " ")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Calcule le total d'un joueur face aux résultats réels.
// actual = { groupScores: {A:[{h,a}|null...]}, topScorer: "..." }
function computePlayerScore(prediction, actual) {
  let total = 0, exact = 0, ecart = 0, vainqueur = 0, rates = 0, joues = 0;
  GROUPS.forEach(g => {
    const realArr = (actual && actual.groupScores && actual.groupScores[g.letter]) || [];
    const predArr = (prediction && prediction.groupScores && prediction.groupScores[g.letter]) || [];
    realArr.forEach((real, i) => {
      if (!real || real.h === null || real.h === undefined || real.a === null || real.a === undefined) return;
      const pred = predArr[i];
      if (!pred || pred.h === null || pred.h === undefined || pred.a === null || pred.a === undefined) return;
      const pts = scoreMatch(pred, real);
      joues++; total += pts;
      if (pts === 5) exact++; else if (pts === 3) ecart++; else if (pts === 2) vainqueur++; else rates++;
    });
  });
  let topScorerPts = 0;
  const at = normalizeName(actual && actual.topScorer);
  if (at && normalizeName(prediction && prediction.topScorer) === at) topScorerPts = 10;
  total += topScorerPts;
  return { total, exact, ecart, vainqueur, rates, joues, topScorerPts };
}

// Expose pour Node (tests) sans gêner le navigateur.
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CODES, flagHTML, GROUPS, SCHEDULE, PAIRS_BY_GROUP, META_BY_GROUP,
    R32_DEFS, THIRD_SLOTS, emptyPlayer, computeGroupStandings, groupComplete,
    computeBracket, formatDateFr, escapeHtml, scoreMatch, normalizeName, computePlayerScore
  };
}
