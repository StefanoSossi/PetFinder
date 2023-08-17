const axios = require("axios");
export async function fetchAccesToken() {
	const clientId = "LhHyk5rFGb1M3rWaI2TAHd96GvmYFW67NRLjAOzQGwnQPyfH2r";
	const clientSecret = "WEgJPQhMtoZm3j5hvPEdEf3DWJ6hhGcpKSK6urPF";

	const response = await axios.post(
		"https://api.petfinder.com/v2/oauth2/token",
		`grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		}
	);
	const accessToken = response.data.access_token;
	console.log(response.data);
	return accessToken;
}

export async function fetchAnimalBreeds() {
	const accessToken = await fetchAccesToken();

	const responseDogs = await axios.get(
		`https://api.petfinder.com/v2/types/dog/breeds`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	const responseCats = await axios.get(
		`https://api.petfinder.com/v2/types/cat/breeds`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	const dogBreeds = responseDogs.data.breeds;
	const catBreeds = responseCats.data.breeds;
	return [...dogBreeds, ...catBreeds];
}

export async function fetchAnimals(filters) {
	const accessToken = await fetchAccesToken();
	const { breed, type, size, gender, age, status } = { ...filters };
	const urlParams = `&size=${size}&gender=${gender}&age=${age}&status=${status}`;
	let allAnimals;

	if (type === "") {
		const responseDogs = await axios.get(
			`https://api.petfinder.com/v2/animals/?type=dog${urlParams}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		const responseCats = await axios.get(
			`https://api.petfinder.com/v2/animals/?type=cat${urlParams}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		const dogs = responseDogs.data.animals;
		const cats = responseCats.data.animals;
		allAnimals = [...dogs, ...cats];
	} else {
		const response = await axios.get(
			`https://api.petfinder.com/v2/animals/?type=${type}${urlParams}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		const animals = response.data.animals;
		allAnimals = [...animals];
	}

	if (breed !== "") {
		allAnimals = allAnimals.filter((animal) => {
			const primaryBreed = animal.breeds.primary.toLowerCase();
			return primaryBreed.includes(breed);
		});
	}

	return [...allAnimals];
}
