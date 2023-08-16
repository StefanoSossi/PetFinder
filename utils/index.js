const axios = require("axios");
//eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJMaEh5azVyRkdiMU0zcldhSTJUQUhkOTZHdm1ZRlc2N05STGpBT3pRR3duUVB5ZkgyciIsImp0aSI6IjFkNGE0ZDM2NDQyODA2ZGEyNmI5MmJhYzY0NjVlYWY5MjNhNTk1ODE5NDlmNWUzZmYwMGU2YzNkYjMzYTIwZmE5M2FjYjIwMTUzZjQzNzY2IiwiaWF0IjoxNjkyMjEzODA3LCJuYmYiOjE2OTIyMTM4MDcsImV4cCI6MTY5MjIxNzQwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.HxuRGG2hnKnh-lwbYiLueHTWHXhRyloQg_JJ9l0vgpZjXgmOJU54VWAm-m63_eEgMBqYYRPOX071ycOAPbTM56cNXLsoG27VGiQMpFYC_QLCq7qs2a-eN1-vDReshYvy9giI4M-veh--VDc91MycSznR9MIqLBHo0XjQetrlNCX8Jyu3ystO66TrjTBAB3Tznu7C9o0elfaHAH8whJiQExzqj6Xs9hkZC4UelHjIQbxVkSm-xMX_A4Jbi0OjDDygNIpoNBsn6vdV_4_NdhL9TR41LhthabwYdxll7YxTYWp-7pwhMox1NuvII9y5uAtX15G_rFws-mBsHV4qKNIneA
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

/* {
  "token_type": "Bearer",
  "expires_in": 3600,
  "access_token": "..."
} */

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
/* {
    "breeds": [
        {
            "name": "Affenpinscher",
            "_links": {
                "type": {
                    "href": "/v2/types/dog"
                }
            }
        }
    ]
}

foto, tipo de animal, raza,
color, edad, genero, tamanho, nombre, descripcion y estado adopciona

 */

export async function fetchAnimals() {
	const accessToken = await fetchAccesToken();

	const responseDogs = await axios.get(
		`https://api.petfinder.com/v2/animals/?type=dog`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	const responseCats = await axios.get(
		`https://api.petfinder.com/v2/animals/?type=cat`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);
	const dogs = responseDogs.data.animals;
	const cats = responseCats.data.animals;
	return [...dogs, ...cats];
}
