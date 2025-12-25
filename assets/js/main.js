/* ================================================================
   1. BIG ASCII LOGO (MJ JOY)
   ================================================================ */
const logo = `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  :%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@joy@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%..:#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+:.=@@@@@@@@. .*@@@..:+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#=. ...-#@@@@@@@: .=@@@@*:..  .=#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@%+-. ..-=#@@@@@@@@@@-..-@@@@@@@@@*=:....-*@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@-  ..=%@@@@@@@@@@@@=. :@@@@@@@@@@@@@%-.   +@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@#+:. ..-+#@@@@@@@*. .@@@@@@@@@@#+-. ..-+#@@@@@@@@@@@@@@@@@joy@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-. ..:*@@@#: .%@@@@@@@=:. ..-*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-.=@@%:..*@@@@@@@@..=#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-..+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@joy@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@#+@@@@@@@@@@@@@@@@@@@@@@@#==#@@@@@@@@@@@@@@@@@@@@@@@@@@+#@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@#***@@@@@@@@@@@@@@@@@@@@@@#:  .#@@@@@@@@@@@@@@@@@@@@@@@@@*+#%@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@*:+@+@@@@@@@@@@@@@@@@@@@@@@@-  :@@@@@@@@@@@@@@@@@@@@@@@@@@#%*=#@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@*. .-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+..:#@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@#.    -@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-.  .:@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@%.     .:%@@@@@@@@@@@@@@@@@@@@@+:-#@@@@@@@@@@@@@@@@@@@@@@@@@-      .@@@@@@@@@@@@@@
@@@@@@@@@@@@@%.       ..#@@@@@@@@@@@@@@@@@@@#:. .*@@@@@@@@@@@@@@@@@@@@@@#:.       .@@@@@@@@@@@@@
@@@@@@@@@@@@+.          .+@@@@@@@@@@@@@@@@@@@%:..%@@@@@@@@@@@@@@@@@@@@@*.          .#@@@@@@@@@@@
@@@@@@@@@@@=.             .@@@@@@@@@@@@@@@@@@+..#@@@@@@@@@@@@@@@@@@@@%:             .*@@@@@@@@@@
@@@@@@@@@@=.                -%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=                .+@@@@@j@@@
@@@@@@@@@*.                  .=@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+..                 .#@@@@0@@@
@@@@@@@@@%-                    .+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+:.                   +@@@@@y@@@
@@@@@@@@@@+.                     .=%@@@@@@@@@@@@@@@@@@@@@@@@@%+:.                    .*@@@@@@@@@
@@@@@@@@@@%-                       .=#@@@@@@@@@@@@@@@@@@@@@#=:                       =@@@@@@@@@@
@@@@@@@@@@@=.                       ..=*%@@@@@@@@@@@@@@@@*=:.                       .+@@@@@@@@@@
@@@@@@@@@@@%:                      ....:++*@@@@@@@@@@@*++:.                         -@@@@@@@@@@@
@@@@@@@@@@@@:.                     .....:++++*%@@@%+++++-                          .-@@@@@@@@@@@
@@@@@@@@@@@@+.                     ....=*@@#+++++===+#@@*=.                        .#@@@@@@@@@@@
@@@@@@@@@@@@@..                 .....=%@@@@@@@@@@@@@@@@@@@%=..                     :@@@@@@@@@@@@
@@@@@@@@@@@@@@.                ....:#@@@@@@@@@@@@@@@@@@@@@@@#-.                   .#@@@@@@@@@@@@
@@@@@@@@@@@@@@@-               .:*@#@@@@@@@@@@@@@%%##@@@@@@@@+@*:.             ...@@@@@@@@@@@@@@
@@@@@@@@@@@@@@##..          ...-#%+*@@@@*+=:..........+@@@@@@++%%-.            ..%@@@@@@@@@@@@@@
@@@@@@@@@@@@@@%%*..         ..=%@###@#-...  ....   ....:%@@@#:++#%-.           .+@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@*@=.         .+:...:....... .....:-==:....*@@-..=+#%-.          -%*@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@+##:.        -%:........:====+++++++++-....=%:...-+%%:       . .*##@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@#+%+..      .%%*##+++++*%@@@@@@@@@@%*+++.....%+...-+%%.       .=%*%@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@%-+@:.     .#@+=...:::+@@@@@@@@@@@@@%*+++:....-%...=+@*.     .:@+=@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@%-.#@.    .=@*=.      :#@@@@%=.:*@@@@@*+++=.....#...++@+.  . .#*.+@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@*:.%*.  .:%%+:       .*@@@.........-%@#++++:...:*=..+#%-... -#.:#@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@#-..@:  .+@+:        .:#:..............-##**+:...+=..*%*....@-.-%@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@%-..-%..-%*-        .-=:-+++++=:.............=##+-*=..*%-..@*..=@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@*...*#.*%=        .==-*##*****+++=-:....... .....:+*-:#+.*%...*@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@#:  .#*#+.        +=+#+:....:=++*###*+--:....   ....===#+%.. :%@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@%:. .-@#:        .@*#:..............:==-:::..    ...:*:*@- ..=@@@@@@@@@@@@@@@@@
@@@@@joy@@@@@@@@@@=.  .==.        .@%*===**+:............          ...-+==.  .+@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@*.   ...        .@*.......-=##=........           ..-*.... :%@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@:              .%:=..  ......:-#*:....            .-*...  -@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@:.             *++++:.   ........:*#....           :*-.. .=@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@#.            .@:+*#++=...............:..          .+=.. .%@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@.            .@++++%*+++-...............          .=+.. :@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@+            .%++++++@*+++++=-::...               .=+...*@@@@@@@@@joy@@@@@@@
@@@@@@@@@@@@@@@@@@@@@             :%++++*@@@%***+=-....                -#-..@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@:            .%*+++@@@@@#++:.....                 .*=.%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@#             :%*+#@@@@@@%++....                  .+*=@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@%.            .-#*%@@@@@@@@%+:...                  :#%@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@*            ...*@@@@@@@@@#**=...                 .*@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@#.           ...*@@@@@@@@@@+++++-:...              =@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@+            .=@@@@@@@@@@@+++++-.                 .%@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@*.          ..+@@@@@@@@@@@++++++..                .#@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@-.         .-@@@@@@@@@@@@#++++++.                 =@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@+.         .+@@@@@@@@@@@@@++++++.                 .@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@%-.       .:@@@@@@@@@@@@@@++++++-                  %@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@joy@@@@@@@@@@@@@+.      ..+@@@@@@@@@@@@@@#+++++=                  =@@@@@@@@@@joy@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@-      ..@@@@@@@@@@@@@@@%+++++=                  .@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@*.     .*@@@@@@@@@@@@@@@%+++++-                   %@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@%=     .@@@@@@@@@@@@@@@@@*++++-                   +@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@+:....#@@@@@@@@@@@@@@@@@#++++=..                 :@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@*+....%@@@@@@@@@@@@@@@@@@*+++=...                .@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@+=..+@@@@@@@@@@@@@@@@@@@@*+++-..                .+@@@@@@@@@@@@@@@@@@`;

/* ================================================================
   2. PROFILE DATA (will be loaded from JSON)
   ================================================================ */
let PROFILE = null;
let profileReady = false;

/* ================================================================
   3. GLOBAL STATE + DOM ELEMENT REFS
   ================================================================ */
let output, input, sendBtn, sound, promptEl;
let settingsBtn, settingsPanel, fontRange, fontValue, colorSelect, settingsClose;

let history = [];
let historyIndex = -1;

const logoRows = logo.split('\n');
let rowIndex = 0;

let currentFontSize = 9;          // px
let currentColor = "#00ff9c";     // neon green

/* ================================================================
   4. LOAD PROFILE JSON (match your JSON structure)
   ================================================================ */
async function loadProfile() {
    try {
        const res = await fetch('assets/data/profile.json');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        PROFILE = await res.json();
    } catch (e) {
        console.error("Failed to load profile.json", e);
        // fallback data, 
        PROFILE = {
            name: "Unknown",
            nickname: "Unknown",
            current_position: "",
            "SSC-HSC": "",
            university: "",
            program: "",
            semester: "",
            location: "",
            interests: [],
            skills: {
                languages: [],
                web: [],
                tools: [],
                csFundamentals: []
            },
            projects: [],
            socials: {
                github: "",
                linkedin: "",
                facebook: "",
                instagram: ""
            },
            email: "",
            phone: "",
            resume: "",
            website: ""
        };
    } finally {
        profileReady = true;
    }
}

/* ================================================================
   5. SETTINGS APPLY (FONT SIZE + COLOR)
   ================================================================ */
function applyFontSize() {
    if (!output) return;
    output.style.fontSize = currentFontSize + "px";
}

function applyColor() {
    if (!output) return;
    output.style.color = currentColor;
    if (input) input.style.color = currentColor;
    if (promptEl) promptEl.style.color = currentColor;
    document.body.style.color = currentColor;
    if (sendBtn) {
        sendBtn.style.color = currentColor;
        sendBtn.style.borderColor = currentColor;
    }
}

/* ================================================================
   6. LINK ENHANCER: text line => clickable link + arrow button
   ================================================================ */
function enhanceLineWithLinks(row, text) {
    const urlRegex = /(https?:\/\/\S+)/g;
    const matches = [...text.matchAll(urlRegex)];
    if (matches.length === 0) return;

    row.textContent = "";
    let lastIndex = 0;

    matches.forEach(match => {
        const url = match[1];
        const start = match.index;

        if (start > lastIndex) {
            row.append(document.createTextNode(text.slice(lastIndex, start)));
        }

        const link = document.createElement('a');
        link.href = url;
        link.textContent = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "inline-link";

        const btn = document.createElement('button');
        btn.textContent = "⤴";
        btn.className = "link-open-btn";
        btn.addEventListener('click', e => {
            e.stopPropagation();
            window.open(url, "_blank", "noopener");
        });

        row.append(link, btn);

        lastIndex = start + url.length;
    });

    if (lastIndex < text.length) {
        row.append(document.createTextNode(text.slice(lastIndex)));
    }
}

/* ================================================================
   7. autoScroll + PRINT UTILITIES
   ================================================================ */
function autoScroll() {
    if (!output) return;
    output.scrollTop = output.scrollHeight;
}

function print(text) {
    const line = document.createElement('div');
    line.className = 'row';
    line.textContent = text;
    enhanceLineWithLinks(line, text);
    output.appendChild(line);
    autoScroll();
}

function printLines(lines) {
    lines.forEach(line => print(line));
}

/* ================================================================
   8. SPARK EFFECTS
   ================================================================ */
function createSparks(row, count = 20) {
    for (let i = 0; i < count; i++) {
        const s = document.createElement('div');
        s.className = 'spark';
        s.style.left = (Math.random() * 80) + 'px';
        s.style.top = (Math.random() * 5) + 'px';
        s.style.setProperty('--dx', (Math.random() * 120) + 'px');
        s.style.setProperty('--dy', ((Math.random() - .5) * 60) + 'px');
        row.appendChild(s);
        s.addEventListener('animationend', () => s.remove());
    }
}

/* small spark for character typing */
function createCharSpark(row) {
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = (10 + Math.random() * 60) + 'px';
    s.style.top = (Math.random() * 14) + 'px';
    s.style.setProperty('--dx', (Math.random() * 30) + 'px');
    s.style.setProperty('--dy', ((Math.random() - .5) * 20) + 'px');
    row.appendChild(s);
    s.addEventListener('animationend', () => s.remove());
}

/* ================================================================
   9. ASCII LOGO PRINTING (mj joy command)
   ================================================================ */
function printLogo() {
    if (rowIndex < logoRows.length) {
        const row = document.createElement('div');
        row.className = 'row logo-row';
        row.textContent = logoRows[rowIndex];
        output.appendChild(row);
        autoScroll();
        createSparks(row, 20);
        try {
            sound.currentTime = 0;
            sound.play();
        } catch (e) { }
        rowIndex++;
        setTimeout(printLogo, 120);
    } else {
        sound.pause();
        sound.currentTime = 0;
        rowIndex = 0;
    }
}

/* ================================================================
   10. TYPEWRITER + SPARKS FOR OTHER COMMANDS
   ================================================================ */
function typeLinesWithEffects(lines) {
    let lineIdx = 0;

    function typeNextLine() {
        if (lineIdx >= lines.length) {
            sound.pause();
            sound.currentTime = 0;
            return;
        }

        const text = lines[lineIdx];
        const row = document.createElement('div');
        row.className = 'row';
        output.appendChild(row);

        if (text.length === 0) {
            autoScroll();
            lineIdx++;
            setTimeout(typeNextLine, 80);
            return;
        }

        let charIdx = 0;

        function typeChar() {
            if (charIdx < text.length) {
                row.textContent += text[charIdx];
                autoScroll();

                if (text[charIdx] !== ' ' && Math.random() < 0.15) {
                    createCharSpark(row);
                }

                if (charIdx % 8 === 0) {
                    try {
                        sound.currentTime = 0;
                        sound.play();
                    } catch (e) { }
                }

                charIdx++;
                setTimeout(typeChar, 20);
            } else {
                createSparks(row, 8);
                enhanceLineWithLinks(row, text);
                lineIdx++;
                setTimeout(typeNextLine, 120);
            }
        }

        typeChar();
    }

    typeNextLine();
}

/* 3 sec loading + sound + then type with effects */
function runInfoSequence(lines, delayMs = 3000, label = 'Loading...') {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.textContent = label;
    output.appendChild(loading);
    autoScroll();

    try {
        sound.currentTime = 0;
        sound.play();
    } catch (e) { }

    setTimeout(() => {
        loading.remove();
        typeLinesWithEffects(lines);
    }, delayMs);
}

/* ================================================================
   11. LINES GENERATORS (match your JSON)
   ================================================================ */
function getAboutLines() {
    const position = PROFILE.current_position || "";
    const program = PROFILE.program || "";
    return [
        "",
        "=== ABOUT ME =================================================",
        `Name      : ${PROFILE.name} (${PROFILE.nickname})`,
        position ? `Position  : ${position}` : "",
        program ? `Program   : ${program}` : "",
        `University: ${PROFILE.university}`,
        `Semester  : ${PROFILE.semester}`,
        `Location  : ${PROFILE.location}`,
        "",
        "Interests :",
        ...(PROFILE.interests || []).map(item => "  - " + item),
        "=============================================================",
        "                                                             ",
        "============================================================="
    ].filter(Boolean);
}

function getEducationLines() {
    const sscHsc = PROFILE["SSC-HSC"];
    const program = PROFILE.program || "BSc in CSE";
    const lines = [
        "",
        "=== EDUCATION ================================================",
        `Program   : ${program}`,
        `University: ${PROFILE.university}`,
        `Current Semester : ${PROFILE.semester}`,
        "Status           : Active student",
    ];

    if (sscHsc) {
        lines.push(`SSC / HSC Institute : ${sscHsc}`);
    }

    lines.push(
        "",
        "Focus Areas      :",
        "  - Data Structures & Algorithms",
        "  - Database Systems",
        "  - Operating Systems",
        "  - Software Engineering",
        "=============================================================",
        "                                                             ",
        "============================================================="
    );

    return lines;
}

function getSkillsLines() {
    const languages = PROFILE.skills && PROFILE.skills.languages ? PROFILE.skills.languages : [];
    const web = PROFILE.skills && PROFILE.skills.web ? PROFILE.skills.web : [];
    const tools = PROFILE.skills && PROFILE.skills.tools ? PROFILE.skills.tools : [];
    const csFundamentals = PROFILE.skills && PROFILE.skills.csFundamentals ? PROFILE.skills.csFundamentals : [];

    return [
        "",
        "=== SKILLS (TECH STACK) =====================================",
        "Programming Languages:",
        "  - " + languages.join(", "),
        "",
        "Web Technologies:",
        "  - " + web.join(", "),
        "",
        "Tools / Platforms:",
        "  - " + tools.join(", "),
        "",
        "CS Fundamentals:",
        "  - " + csFundamentals.join(", "),
        "=============================================================",
        "                                                             ",
        "============================================================="
    ];
}

function getProjectsLines() {
    const lines = [
        "",
        "=== PROJECTS ================================================"
    ];
    const projects = PROFILE.projects || [];

    if (projects.length === 0) {
        lines.push("No projects available.", "=============================================================");
        return lines;
    }

    projects.forEach((p, idx) => {
        lines.push(
            `${idx + 1}. ${p.name}`,
            `   Description: ${p.desc}`,
            `   Tech Stack : ${p.tech}`,
            `   GitHub     : ${p.link}`,
            ""
        );
    });
    lines.push("=============================================================");
    return lines;
}

function getSocialLines() {
    return [
        "",
        "=== SOCIAL / LINKS ==========================================",
        `Website : ${PROFILE.website}`,
        `GitHub  : ${PROFILE.socials.github}`,
        `LinkedIn: ${PROFILE.socials.linkedin}`,
        `Facebook: ${PROFILE.socials.facebook}`,
        `Instagram: ${PROFILE.socials.instagram}`,
        "=============================================================",
        "                                                             ",
        "============================================================="
    ];
}

function getGithubLines() {
    return [
        "",
        "=== GITHUB ===================================================",
        `GitHub Profile: ${PROFILE.socials.github}`,
        "=============================================================",
        "                                                             ",
        "============================================================="
    ];
}

function getContactLines() {
    return [
        "",
        "=== CONTACT INFO =============================================",
        `Email: ${PROFILE.email}`,
        `Phone: ${PROFILE.phone}`,
        `LinkedIn: ${PROFILE.socials.linkedin}`,
        "=============================================================",
        "                                                             ",
        "============================================================="
    ];
}

function getResumeLines() {
    return [
        "",
        "=== RESUME / CV ==============================================",
        `PDF / Online Resume: ${PROFILE.resume}`,
        "Tip: Open this link in a new tab.",
        "=============================================================",
        "                                                             ",
        "============================================================="
    ];
}

function getProfileLines() {
    return [
        ...getAboutLines(),
        ...getEducationLines(),
        ...getSkillsLines(),
        ...getProjectsLines(),
        ...getSocialLines(),
        ...getContactLines()
    ];
}

/* ================================================================
   12. HELP + CLEAR
   ================================================================ */
function showHelp() {
    printLines([
        "",
        "=== HELP: AVAILABLE COMMANDS ================================",
        "mj joy      : Show animated MJ JOY ASCII logo with sparks",
        "about       : Basic info (name, position, university)",
        "education   : Current degree / semester info",
        "skills      : Tech stack & skills",
        "projects    : List of projects",
        "social      : All important social / portfolio links",
        "github      : GitHub profile link",
        "contact     : Email / phone / LinkedIn",
        "resume      : Resume / CV link",
        "profile     : Show almost everything (summary)",
        "clear       : Clear the terminal screen",
        "help        : Show this help message",
        "=============================================================",
        "                                                             ",
        "============================================================="
    ]);
}

function clearScreen() {
    output.innerHTML = "";
    print("MJ JOY TERMINAL v1.0");
    print("Type a command below…");
    print("------------------------------------");
}

/* ================================================================
   13. MAIN COMMAND HANDLER
   ================================================================ */
function handleCommand(cmd) {
    print("> " + cmd);

    const needsProfile = [
        "about", "education", "edu", "skills", "projects", "project",
        "social", "links", "github", "contact", "resume", "cv", "profile", "all"
    ];

    if (needsProfile.includes(cmd) && !profileReady) {
        print("Profile data is loading. Please try again in a moment.");
        return;
    }

    switch (cmd) {
        case "mj joy":
            startSequence();
            break;

        case "about":
            runInfoSequence(getAboutLines(), 3000, "Loading about...");
            break;

        case "education":
        case "edu":
            runInfoSequence(getEducationLines(), 3000, "Loading education...");
            break;

        case "skills":
            runInfoSequence(getSkillsLines(), 3000, "Loading skills...");
            break;

        case "projects":
        case "project":
            runInfoSequence(getProjectsLines(), 3000, "Loading projects...");
            break;

        case "social":
        case "links":
            runInfoSequence(getSocialLines(), 3000, "Loading social links...");
            break;

        case "github":
            runInfoSequence(getGithubLines(), 3000, "Loading GitHub...");
            break;

        case "contact":
            runInfoSequence(getContactLines(), 3000, "Loading contact...");
            break;

        case "resume":
        case "cv":
            runInfoSequence(getResumeLines(), 3000, "Loading resume...");
            break;

        case "profile":
        case "all":
            runInfoSequence(getProfileLines(), 3000, "Loading profile...");
            break;

        case "help":
            showHelp();
            break;

        case "clear":
            clearScreen();
            break;

        default:
            print("Command not found. Type 'help' to see all available commands.");
    }
}

/* ================================================================
   14. 'mj joy' SEQUENCE (5s loading + logo)
   ================================================================ */
function startSequence() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.textContent = 'Loading...';
    output.appendChild(loading);
    autoScroll();

    try {
        sound.currentTime = 0;
        sound.play();
    } catch (e) { }

    setTimeout(() => {
        loading.remove();
        printLogo();
    }, 5000);
}

/* ================================================================
   15. INIT + EVENT BINDING
   ================================================================ */
function setupSettingsPanel() {
    fontRange.addEventListener('input', () => {
        currentFontSize = parseInt(fontRange.value, 10);
        fontValue.textContent = currentFontSize + "px";
        applyFontSize();
    });

    colorSelect.addEventListener('change', () => {
        currentColor = colorSelect.value;
        applyColor();
    });

    settingsBtn.addEventListener('click', e => {
        e.stopPropagation();
        settingsPanel.classList.toggle('visible');
    });

    settingsPanel.addEventListener('click', e => {
        e.stopPropagation();
    });

    settingsClose.addEventListener('click', () => {
        settingsPanel.classList.remove('visible');
    });

    document.addEventListener('click', () => {
        settingsPanel.classList.remove('visible');
    });
}

function setupInputHandlers() {
    function run() {
        const cmd = input.value.trim().toLowerCase();
        if (!cmd) return;
        history.push(cmd);
        historyIndex = history.length;
        handleCommand(cmd);
        input.value = "";
    }

    sendBtn.onclick = run;

    input.addEventListener('keydown', e => {
        if (e.key === "Enter") {
            run();
        }
        if (e.key === "ArrowUp") {
            if (history.length) {
                historyIndex = Math.max(0, historyIndex - 1);
                input.value = history[historyIndex];
            }
        }
        if (e.key === "ArrowDown") {
            if (history.length) {
                historyIndex = Math.min(history.length, historyIndex + 1);
                input.value = history[historyIndex] || "";
            }
        }
    });
}

function initTerminal() {
    output = document.getElementById('output');
    input = document.getElementById('command-input');
    sendBtn = document.getElementById('send-btn');
    sound = document.getElementById('spark-sound');
    promptEl = document.getElementById('prompt');

    settingsBtn = document.getElementById('settings-btn');
    settingsPanel = document.getElementById('settings-panel');
    fontRange = document.getElementById('font-size-range');
    fontValue = document.getElementById('font-size-value');
    colorSelect = document.getElementById('color-select');
    settingsClose = document.getElementById('settings-close');

    applyFontSize();
    applyColor();
    setupSettingsPanel();
    setupInputHandlers();

    input.focus();
}

/* ================================================================
   16. DOM READY
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initTerminal();
    loadProfile(); // async
});