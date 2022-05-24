// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filterCourses = (range) => {
    return courses.filter((c) => {
        let minCond, maxCond;
        if (range[0] !== null) {
            // if we have min range
            if (c.prices[0] !== null) {
                // if courses min is not null then it should be equal or greater than range min
                minCond = c.prices[0] >= range[0];
            } else if (c.prices[1] !== null) {
                // if courses max is not null then it should be equal or greater than range min
                minCond = c.prices[1] >= range[0];
            }
        }
        if (range[1] !== null) {
            // if we have max range
            if (c.prices[1] !== null) {
                // if courses max is not null then it should be equal or less than range max
                maxCond = c.prices[1] <= range[1];
            } else if (c.prices[0] !== null) {
                // if courses min is not null then it should be equal or less than range max
                maxCond = c.prices[0] <= range[1];
            }
        }
        return (
            (minCond !== undefined ? minCond : true) &&
            (maxCond !== undefined ? maxCond : true)
        );
    });
};

console.log("1: ", filterCourses(requiredRange1));
console.log("2: ", filterCourses(requiredRange2));
console.log("3: ", filterCourses(requiredRange3));
