const entryLevelCls = {
    2023: {
        shift_diff: { day: 0, evening: 5.31, night: 7.96 },
        years_of_exp: { 0: 53.0515 },
    },
    2024: {
        shift_diff: { day: 0, evening: 5.57, night: 8.36 },
        years_of_exp: { 0: 55.7041 },
    },
    2025: {
        shift_diff: { day: 0, evening: 5.85, night: 8.77 },
        years_of_exp: { 0: 58.4893 },
    },
    2026: {
        shift_diff: { day: 0, evening: 6.14, night: 9.21 },
        years_of_exp: { 0: 61.4138 },
    },
};

const cls = {
    2023: {
        shift_diff: {
            day: 0,
            evening: 6.02,
            night: 9.02,
        },
        years_of_exp: {
            0: 60.1657,
            1: 62.5169,
            2: 64.9606,
            3: 67.4987,
        },
    },
    2024: {
        shift_diff: {
            day: 0,
            evening: 6.32,
            night: 9.48,
        },
        years_of_exp: {
            0: 63.174,
            1: 65.6427,
            2: 68.2086,
            3: 70.8736,
        },
    },
    2025: {
        shift_diff: {
            day: 0,
            evening: 6.63,
            night: 9.95,
        },
        years_of_exp: {
            0: 66.3327,
            1: 68.9248,
            2: 71.619,
            3: 74.4173,
        },
    },
    2026: {
        shift_diff: {
            day: 0,
            evening: 6.96,
            night: 10.45,
        },
        years_of_exp: {
            0: 69.6493,
            1: 72.371,
            2: 75.2,
            3: 78.1382,
        },
    },
};

const clsExtern = {
    2023: {
        shift_diff: {
            day: 0,
            evening: 6.02,
            night: 9.02,
        },
        years_of_exp: {
            0: 19.1542,
        },
    },
    2024: {
        shift_diff: {
            day: 0,
            evening: 6.32,
            night: 9.48,
        },
        years_of_exp: {
            0: 20.1119,
        },
    },
    2025: {
        shift_diff: {
            day: 0,
            evening: 6.63,
            night: 9.95,
        },
        years_of_exp: {
            0: 21.1175,
        },
    },
    2026: {
        shift_diff: {
            day: 0,
            evening: 6.96,
            night: 10.45,
        },
        years_of_exp: {
            0: 22.1734,
        },
    },
};

const clsSr = {
    2023: {
        shift_diff: {
            day: 0,
            evening: 6.25,
            night: 9.38,
        },
        years_of_exp: {
            0: 62.5169,
            1: 64.9606,
            2: 67.4987,
            3: 70.1362,
            4: 72.8766,
            7: 75.0669,
            10: 77.3233,
            15: 79.6464,
        },
    },
    2024: {
        shift_diff: {
            day: 0,
            evening: 6.56,
            night: 9.85,
        },
        years_of_exp: {
            0: 65.6427,
            1: 68.2086,
            2: 70.8736,
            3: 73.643,
            4: 76.5204,
            7: 78.8202,
            10: 81.1895,
            15: 83.6287,
        },
    },
    2025: {
        shift_diff: {
            day: 0,
            evening: 6.89,
            night: 10.34,
        },
        years_of_exp: {
            0: 68.9248,
            1: 71.619,
            2: 74.4173,
            3: 77.3252,
            4: 80.3464,
            7: 82.7612,
            10: 85.249,
            15: 87.8101,
        },
    },
    2026: {
        shift_diff: {
            day: 0,
            evening: 7.24,
            night: 10.86,
        },
        years_of_exp: {
            0: 72.371,
            1: 75.2,
            2: 78.1382,
            3: 81.1915,
            4: 84.3637,
            7: 86.8993,
            10: 89.5115,
            15: 92.2006,
        },
    },
};

const clsSr2 = {
    2023: {
        shift_diff: {
            day: 0,
            evening: 6.25,
            night: 9.38,
        },
        years_of_exp: {
            7: 78.8204,
            10: 81.1893,
            15: 83.6287,
        },
    },
    2024: {
        shift_diff: {
            day: 0,
            evening: 6.56,
            night: 9.85,
        },
        years_of_exp: {
            7: 82.7614,
            10: 85.2488,
            15: 87.8101,
        },
    },
    2025: {
        shift_diff: {
            day: 0,
            evening: 6.89,
            night: 10.34,
        },
        years_of_exp: {
            7: 86.8995,
            10: 89.5112,
            15: 92.2006,
        },
    },
    2026: {
        shift_diff: {
            day: 0,
            evening: 7.24,
            night: 10.86,
        },
        years_of_exp: {
            7: 91.2445,
            10: 93.9868,
            15: 96.8106,
        },
    },
};

const clsSupervisor = {
    2023: {
        shift_diff: {
            day: 0,
            evening: 7.03,
            night: 10.55,
        },
        years_of_exp: {
            0: 70.3481,
            1: 73.0965,
            2: 75.9525,
            3: 78.9192,
            4: 82.0024,
            7: 84.4665,
            10: 87.0044,
            15: 89.6181,
        },
    },
    2024: {
        shift_diff: {
            day: 0,
            evening: 7.39,
            night: 11.08,
        },
        years_of_exp: {
            0: 73.8655,
            1: 76.7513,
            2: 79.7501,
            3: 82.8652,
            4: 86.1025,
            7: 88.6898,
            10: 91.3546,
            15: 94.099,
        },
    },
    2025: {
        shift_diff: {
            day: 0,
            evening: 7.76,
            night: 11.63,
        },
        years_of_exp: {
            0: 77.5588,
            1: 80.5889,
            2: 83.7376,
            3: 87.0085,
            4: 90.4076,
            7: 93.1243,
            10: 95.9223,
            15: 98.804,
        },
    },
    2026: {
        shift_diff: {
            day: 0,
            evening: 8.14,
            night: 12.22,
        },
        years_of_exp: {
            0: 81.4367,
            1: 84.6183,
            2: 87.9245,
            3: 91.3589,
            4: 94.928,
            7: 97.7805,
            10: 100.7184,
            15: 103.7442,
        },
    },
};

const medicalLabTechnician = {
    2023: {
        shift_diff: {
            day: 0,
            evening: 4.76,
            night: 7.15,
        },
        years_of_exp: {
            0: 47.642,
            1: 48.7188,
            2: 50.178,
            3: 51.6892,
            4: 53.2352,
            7: 54.8323,
            10: 56.4773,
            15: 58.1716,
        },
    },
    2024: {
        shift_diff: {
            day: 0,
            evening: 5,
            night: 7.5,
        },
        years_of_exp: {
            0: 50.0241,
            1: 51.1547,
            2: 52.6869,
            3: 54.2737,
            4: 55.897,
            7: 57.5739,
            10: 59.3012,
            15: 61.0802,
        },
    },
    2025: {
        shift_diff: {
            day: 0,
            evening: 5.25,
            night: 7.88,
        },
        years_of_exp: {
            0: 52.5253,
            1: 53.7124,
            2: 55.3212,
            3: 56.9874,
            4: 58.6919,
            7: 60.4526,
            10: 62.2663,
            15: 64.1342,
        },
    },
    2026: {
        shift_diff: {
            day: 0,
            evening: 5.52,
            night: 8.27,
        },
        years_of_exp: {
            0: 55.1516,
            1: 56.398,
            2: 58.0873,
            3: 59.8368,
            4: 61.6265,
            7: 63.4752,
            10: 65.3796,
            15: 67.3409,
        },
    },
};

function getSalary() {
    const jobTitle = document.getElementById("job-title").value.toLowerCase();
    const year = parseInt(document.getElementById("year").value);
    const shift = document.getElementById("shift").value.toLowerCase();
    const yearsOfExperience = parseInt(
        document.getElementById("years-of-experience").value
    );
    const hours = parseInt(document.getElementById("hours").value);

    let data;

    switch (jobTitle) {
        case "entry level cls":
            data = entryLevelCls;
            break;
        case "cls":
            data = cls;
            break;
        case "cls extern":
            data = clsExtern;
            break;
        case "senior cls":
            data = clsSr;
            break;
        case "senior cls 2":
            data = clsSr2;
            break;
        case "cls supervisor":
            data = clsSupervisor;
            break;
        case "medical lab technician":
            data = medicalLabTechnician;
            break;
        default:
            alert("Invalid job title.");
            return;
    }

    if (!data[year]) {
        alert("Invalid year.");
        return;
    }

    if (!data[year].shift_diff[shift] && (data[year].shift_diff[shift] != 0)) {
        alert("Invalid shift.");
        return;
    }

    const availableYears = Object.keys(data[year].years_of_exp)
        .map(Number)
        .sort((a, b) => a - b);
    let closestYear = 0;
    for (const availableYear of availableYears) {
        if (yearsOfExperience >= availableYear) {
            closestYear = availableYear;
        } else {
            break;
        }
    }

    const baseHourlySalary = data[year].years_of_exp[closestYear];
    const shiftDiff = data[year].shift_diff[shift];
    const shiftDiffHourlyRate = baseHourlySalary + shiftDiff;
    const annualSalary = (shiftDiffHourlyRate) * hours * 52;

    document.getElementById("output").innerHTML = `
        <p>The base hourly rate for ${jobTitle.toUpperCase()} in ${year} with ${yearsOfExperience} years of experience is: $${baseHourlySalary} -> <strong>$${baseHourlySalary.toFixed(2)}</strong></p>
        <p>The shift difference for ${jobTitle.toUpperCase()} in ${year} with ${yearsOfExperience} years of experience on the ${shift.toUpperCase()} shift is: $${shiftDiff} -> <strong>$${shiftDiff.toFixed(2)}</strong></p>
        <p>The total hourly rate for ${jobTitle.toUpperCase()} in ${year} with ${yearsOfExperience} years of experience on the ${shift.toUpperCase()} shift is: $${shiftDiffHourlyRate} -> <strong>$${shiftDiffHourlyRate.toFixed(2)}</strong></p>
        <p>The estimated annual salary for ${jobTitle.toUpperCase()} in ${year} with ${yearsOfExperience} years of experience working ${hours} HOURS on the ${shift.toUpperCase()} shift is: <strong>$${annualSalary.toFixed(2)}</strong></p>
    `;
}
