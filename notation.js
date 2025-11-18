function mean(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}


module.exports = { mean };
