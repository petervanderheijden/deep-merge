const deepMerge = (...objects) => {
    const merged = {};
    const merge = (obj) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && !(obj[key] instanceof Array)) {
                    merged[key] = merge(merged[key], obj[key]);
                } else {
                    merged[key] = obj[key];
                }
            }
        }
    };
    objects.forEach((object) => merge(object));
    return merged;
};

module.exports = deepMerge;
