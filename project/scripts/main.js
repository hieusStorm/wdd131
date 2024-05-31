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
        name: `Volt`,
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
//determine what to do based on the page you are on
if (document.title == `Warframe Builds - Home`) {
    BuildLinks();
} else if (document.title == `Warframe Builds - Builds`) {
    BuildsDisplay();
} else if (document.title == `Warframe Builds - About`) {
    ExampleBuild();
} else if (document.title == `Warframe Builds - Added Build`) {
    addBuild();
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

function BuildsDisplay() {
    const main = document.querySelector(`main`);
    warframeBuilds.forEach(build => {
        const contentSection = document.createElement(`section`);
        const name = document.createElement(`h3`);
        const buildImage = document.createElement(`picture`);
        const warframeMods = document.createElement(`div`);
        const warframeArcanes = document.createElement(`p`);
        const primaryWeapon = document.createElement(`h4`);
        const primaryMods = document.createElement(`div`);
        const primaryArcane = document.createElement(`p`);
        const secondaryWeapon = document.createElement(`h4`);
        const secondaryMods = document.createElement(`div`);
        const secondaryArcane = document.createElement(`p`);
        const meleeWeapon = document.createElement(`h4`);
        const meleeMods = document.createElement(`div`);
        const meleeArcane = document.createElement(`p`);
        const use = document.createElement(`p`);

        name.textContent = build.name;
        contentSection.appendChild(name);
        //build image info
        const largeImg = document.createElement(`source`);
        const smallImg = document.createElement(`img`);
        largeImg.setAttribute(`srcset`, `images/${build.name}-large.webp`);
        largeImg.setAttribute(`media`, `(min-width: 1000px)`);
        smallImg.src = `images/${build.name}-small.webp`;
        smallImg.setAttribute(`alt`, `Image of ${build.name}`);
        smallImg.setAttribute(`loading`, `lazy`);
        buildImage.appendChild(largeImg);
        buildImage.appendChild(smallImg);
        contentSection.appendChild(buildImage);

        use.textContent = build.use;
        contentSection.appendChild(use);

        warframeMods.classList.add(`mod`);
        modDiv(warframeMods, build.warframeMods);
        contentSection.appendChild(warframeMods);

        warframeArcanes.textContent = `Arcanes:`;
        build.warframeArcanes.forEach(arcane => {
            warframeArcanes.textContent = `${warframeArcanes.textContent} ${arcane}`;
        });
        contentSection.appendChild(warframeArcanes);

        primaryWeapon.textContent = build.primaryWeapon;
        contentSection.appendChild(primaryWeapon);

        primaryMods.classList.add(`mod`);
        modDiv(primaryMods, build.primaryMods);
        contentSection.appendChild(primaryMods);

        primaryArcane.textContent = build.primaryArcane;
        contentSection.appendChild(primaryArcane);

        secondaryWeapon.textContent = build.secondaryWeapon;
        contentSection.appendChild(secondaryWeapon);

        secondaryMods.classList.add(`mod`);
        modDiv(secondaryMods, build.secondaryMods);
        contentSection.appendChild(secondaryMods);

        secondaryArcane.textContent = build.secondaryArcane;
        contentSection.appendChild(secondaryArcane);

        meleeWeapon.textContent = build.meleeWeapon;
        contentSection.appendChild(meleeWeapon);

        meleeMods.classList.add(`mod`);
        modDiv(meleeMods, build.meleeMods);
        contentSection.appendChild(meleeMods);

        meleeArcane.textContent = build.meleeArcane;
        contentSection.appendChild(meleeArcane);


        main.appendChild(contentSection);
    });
}

function ExampleBuild() {
    let build = warframeBuilds[0];
    const section = document.getElementById("example");
    const name = document.createElement(`h3`);
    const buildImage = document.createElement(`picture`);
    const warframeMods = document.createElement(`div`);
    const warframeArcanes = document.createElement(`p`);
    const primaryWeapon = document.createElement(`h4`);
    const primaryMods = document.createElement(`div`);
    const primaryArcane = document.createElement(`p`);
    const secondaryWeapon = document.createElement(`h4`);
    const secondaryMods = document.createElement(`div`);
    const secondaryArcane = document.createElement(`p`);
    const meleeWeapon = document.createElement(`h4`);
    const meleeMods = document.createElement(`div`);
    const meleeArcane = document.createElement(`p`);
    const use = document.createElement(`p`);

    name.textContent = build.name;
    section.appendChild(name);
    //build image info
    const largeImg = document.createElement(`source`);
    const smallImg = document.createElement(`img`);
    largeImg.setAttribute(`srcset`, `images/${build.name}-large.webp`);
    largeImg.setAttribute(`media`, `(min-width: 1000px)`);
    smallImg.src = `images/${build.name}-small.webp`;
    smallImg.setAttribute(`alt`, `Image of ${build.name}`);
    buildImage.appendChild(largeImg);
    buildImage.appendChild(smallImg);
    section.appendChild(buildImage);

    use.textContent = build.use;
    section.appendChild(use);

    warframeMods.classList.add(`mod`);
    modDiv(warframeMods, build.warframeMods);
    section.appendChild(warframeMods);

    warframeArcanes.textContent = `Arcanes:`;
    build.warframeArcanes.forEach(arcane => {
        warframeArcanes.textContent = `${warframeArcanes.textContent} ${arcane}`;
    });
    section.appendChild(warframeArcanes);

    primaryWeapon.textContent = build.primaryWeapon;
    section.appendChild(primaryWeapon);

    primaryMods.classList.add(`mod`);
    modDiv(primaryMods, build.primaryMods);
    section.appendChild(primaryMods);

    primaryArcane.textContent = build.primaryArcane;
    section.appendChild(primaryArcane);

    secondaryWeapon.textContent = build.secondaryWeapon;
    section.appendChild(secondaryWeapon);

    secondaryMods.classList.add(`mod`);
    modDiv(secondaryMods, build.secondaryMods);
    section.appendChild(secondaryMods);

    secondaryArcane.textContent = build.secondaryArcane;
    section.appendChild(secondaryArcane);

    meleeWeapon.textContent = build.meleeWeapon;
    section.appendChild(meleeWeapon);

    meleeMods.classList.add(`mod`);
    modDiv(meleeMods, build.meleeMods);
    section.appendChild(meleeMods);

    meleeArcane.textContent = build.meleeArcane;
    section.appendChild(meleeArcane);
}

function modDiv(div, mods) {
    mods.forEach(mod => {
        const modPargraph = document.createElement(`p`);
        modPargraph.textContent = mod;
        div.appendChild(modPargraph);
    });
}

function addBuild() {
    let buildsAdded = Number(localStorage.getItem("buildsAdded"));
    buildsAdded++;
    localStorage.setItem("buildsAdded", buildsAdded);
    document.getElementById("buildsAdded").textContent = buildsAdded;
    setTimeout(window.location.replace("index.html"), 10000);
}
