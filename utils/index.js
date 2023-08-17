const axios = require("axios");
export async function fetchAccesToken() {
	//stefanosossi
	//const clientId = "LhHyk5rFGb1M3rWaI2TAHd96GvmYFW67NRLjAOzQGwnQPyfH2r";
	//const clientSecret = "WEgJPQhMtoZm3j5hvPEdEf3DWJ6hhGcpKSK6urPF";

	//tenos
	const clientId = "u9Q5tyxUPeWWUgIZig11WtZYFHb6VcLsGu9RzPg07DItiAZmSn";
	const clientSecret = "tNhn3OJAOn3uF86yNA9XCMEcdG6flyqEQuLrlsTc";

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
	console.log("accessToken", accessToken);
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

	const dogBreeds = responseDogs.data.breeds.map((dog) => dog.name);
	const catBreeds = responseCats.data.breeds.map((cat) => cat.name);

	return new Set([...dogBreeds, ...catBreeds]);
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

export const getUniqueElements = async (property) => {
	const allAnimals = await fetchAnimals({
		breed: "",
		type: "",
		size: "",
		gender: "",
		age: "",
		status: "",
	});
	const allUniqueElements = allAnimals.map((animal) => animal[property]);
	return new Set([...allUniqueElements]);
};

export const updateSearchParams = (title, value) => {
	const searchParams = new URLSearchParams(window.location.search);

	searchParams.set(`${title}`, value);

	const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

	return newPathname;
};
