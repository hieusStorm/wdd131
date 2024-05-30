// add footer info
const currrentDate = new Date();
const yearTag = document.querySelector(`#currentyear`);
const lastModifiedTag = document.querySelector(`#lastModified`);
const lastModified = document.lastModified;

yearTag.innerHTML = currrentDate.getFullYear();
lastModifiedTag.innerHTML = `Last Modification: ${lastModified}`;

//add nav toggle
const navButton = document.getElementById(`menu`);
const nav = document.querySelector(`nav`);
navButton.addEventListener(`click`, () => {
    if (navButton.textContent == `≡`) {
        navButton.textContent = `X`;
    } else {
        navButton.textContent = `≡`;
    }
    navButton.classList.toggle(`open`);
    nav.classList.toggle(`open`);
});

//warframe build info
warframeBuilds = [
    {
        name: `Dante`,
        primaryWeapon: ``,
        secondaryWeapon: `Grimore`,
        meleeWeapon: `War`,
        warframeMods: [`Power Drift`, `Growing Power`, `Blind Rage`, `Umbral Intensify`, `Equilibrium`, `Streamline`, `Transient Fortitude`, `Amar's Hatred`, `Energy Nexus`, `Flow`],
        warframeArcanes: [`Molt Augmented`, `Molt Vigor`],
        primaryMods: [],
        primaryArcane: ``,
        secondaryMods: [`Accelerated Isotope`, `Hornet Strike`, `Ice Storm`, `Xata Invocation`, `Jahu Canticle`, `Galvanized Diffusion`, `Pistol Pestilence`, `Jolt`, `Auger Pact`],
        secondaryArcane: `Cascadia Flare`,
        meleeMods: [`Cleaving Whirlwind`, `Pressure Point`, `Virulent Scourge`, `Melee Prowess`, `Drifting Contact`, `North Wind`, `Rending Strike`, `Fever Strike`, `Carnis Mandible`],
        meleeArcane: `Melee Animosity`,
        use: `Start each level by using your second ability two times in a row folowed by your 4th ability twice. Use your second ability to build overgaurd afterwards. Use your thrid ability two times in a row followed by your fourth ability to destroy all that get in your path. Use your first ability to summon the weapon you'll be using the most`
    },
    {
        name: `Protea`,
        primaryWeapon: ``,
        secondaryWeapon: `Laetum`,
        meleeWeapon: `War`,
        warframeMods: [`Corrosive Projection`, `Power Drift`, `Continuity`, `Augur Accord`, `Umbral Intesify`, `Equilibrium`, `Vigor`, `Strech`, `Energy Nexus`, `Amar's Hatred`],
        warframeArcanes: [`Molt Augmented`, `Molt Efficiency`],
        primaryMods: [],
        primaryArcane: ``,
        secondaryMods: [`Hornet Strike`, `Accelerated Isotope`, `Jolt`, `Pistol Pestilence`, `Galvanized Diffusion`, `Galvanized Shot`, `Razor Shot`],
        secondaryArcane: `Cascadia Flare`,
        meleeMods: [`Cleaving Whirlwind`, `Pressure Point`, `Virulent Scourge`, `Melee Prowess`, `Drifting Contact`, `North Wind`, `Rending Strike`, `Fever Strike`, `Carnis Mandible`],
        meleeArcane: `Melee Animosity`,
        use: `Primarily use your second ability for damage. Use your fourth and third abilities to be able to really use your second ability a ton use your secondary weapon to help your second ability deal damge`
    },
    {
        name: `Dagath`,
        primaryWeapon: `Cedo`,
        secondaryWeapon: `Laetum`,
        meleeWeapon: `Innodem`,
        warframeMods: [`Dreamers Bond`, `Power Drift`, `Intesify`, `Amar's Hatred`, `Vitality`, `Transiet Fortiture`, `Flow`, `Augur Accord`, `Stretch`, `Energy Nexus`],
        warframeArcanes: [`Moly Augmented`, `Molt Efficiency`],
        primaryMods: [`Blunder Buss`, `Ravage`, `Primed Point Blank`, `Primed Chilling Grasp`, `Toxic Barrage`, `Vigilante Armaments`, `Galvanized Savy`, `Galvanized Hell`],
        primaryArcane: `Shotgun Vendetta`,
        secondaryMods: [`Hornet Strike`, `Accelerated Isotope`, `Jolt`, `Pistol Pestilence`, `Galvanized Diffusion`, `Galvanized Shot`, `Razor Shot`],
        secondaryArcane: `Cascadia Flare`,
        meleeMods: [`Homing Fang`, `Gladiator Might`, `Quickening`, `Pressure Point`, `Relentless Combination`, `Carnis Mandible`, `Covert Lethality`, `Drifting Contact`, `Rending Strike`],
        meleeArcane: `Melee Animosity`,
        use: `Start the level with the third ability. Then use the second and first ability to destroy many oppents and use your weapons however you want`
    },
    {
        name: `Jolt`,
        primaryWeapon: `Cedo`,
        secondaryWeapon: `Laetum`,
        meleeWeapon: `Innodem`,
        warframeMods: [`Growing Power`, `Power Drift`, `Flow`, `Intesify`, `Continuity`, `Amar's Hatred`, `Transient Fortitude`, `Augur`, `Shocking Speed`, `Equilibrium`],
        warframeArcanes: [`Molt Augmented`, `Molt Effiency`],
        primaryMods: [`Blunder Buss`, `Ravage`, `Primed Point Blank`, `Primed Chilling Grasp`, `Toxic Barrage`, `Vigilante Armaments`, `Galvanized Savy`, `Galvanized Hell`],
        primaryArcane: `Shotgun Vendetta`,
        secondaryMods: [`Hornet Strike`, `Accelerated Isotope`, `Jolt`, `Pistol Pestilence`, `Galvanized Diffusion`, `Galvanized Shot`, `Razor Shot`],
        secondaryArcane: `Cascadia Flare`,
        meleeMods: [`Homing Fang`, `Gladiator Might`, `Quickening`, `Pressure Point`, `Relentless Combination`, `Carnis Mandible`, `Covert Lethality`, `Drifting Contact`, `Rending Strike`],
        meleeArcane: `Melee Animosity`,
        use: `Spam your second ability and use your third ability from time to time. Follow this up with just using your preferred ability.`
    },
];

if (document.title == `Warframe Builds - Home`) {
    BuildLinks();
} else if (document.title == `Warframe Builds - Builds`) {
    BuildsDisplay();
}

//functions
function BuildLinks() {
    const contentArea = document.getElementById(`buildLinks`);
    warframeBuilds.forEach(build => {
        let paragraph = document.createElement(`p`);
        let link = document.createElement(`a`);
        link.href = `builds.html#${build.name}`;
        link.textContent = `${build.name}`;
        paragraph.appendChild(link);
        contentArea.appendChild(paragraph);
    });
}

function BuildsDisplay() { }