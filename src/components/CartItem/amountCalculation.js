export const totalPrice = (data) => {
	let resultTotal = data?.inCart.reduce(
		(accu, curr) => accu + Number(curr.actualCost) * curr.count,
		0
	);
	return resultTotal;
};

export const discountPrice = (data) => {
	let resultTotal = data?.inCart.reduce(
		(accu, curr) =>
			accu + (Number(curr.actualCost) - Number(curr.discountCost)) * curr.count,
		0
	);
	return resultTotal;
};
