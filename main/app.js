//ANANI MARIUS G1096

const distance = (a, b) => {
	if ((typeof a === 'string' || a instanceof String) && (typeof b === 'string' || b instanceof String)) {
		const aMax = a.length + 1;
		const bMax = b.length + 1;
		const levDistance = Array(aMax);

		for (let i = 0; i < aMax; ++i) {
			levDistance[i] = Array(bMax);
		}

		for (let i = 0; i < aMax; ++i) {
			levDistance[i][0] = i;
		}
		for (let j = 0; j < bMax; ++j) {
			levDistance[0][j] = j;
		}

		for (let i = 1; i < aMax; ++i) {
			for (let j = 1; j < bMax; ++j) {

				var substitutionCost;
				if(a[i-1]===b[j-1]){
					substitutionCost=0;
				}
				else{
					substitutionCost=1;
				}
				levDistance[i][j] = Math.min(
					levDistance[i - 1][j] + 1,
					levDistance[i][j - 1] + 1,
					levDistance[i - 1][j - 1] + substitutionCost
				);
			}
		}

		return levDistance[a.length][b.length];
	}
	else
		throw {message : 'InvalidType'}
};


module.exports.distance = distance