import { fetchAnimalBreeds, fetchAnimals } from "@/utils";

export const allTypes = ["Dog", "Cat"];

export const allBreeds = [
	"Affenpinscher",
	"Afghan Hound",
	"Airedale Terrier",
	"Akbash",
	"Akita",
	"Alaskan Malamute",
	"American Bulldog",
	"American Bully",
	"American Eskimo Dog",
	"American Foxhound",
	"American Hairless Terrier",
	"American Staffordshire Terrier",
	"American Water Spaniel",
	"Anatolian Shepherd",
	"Appenzell Mountain Dog",
	"Aussiedoodle",
	"Australian Cattle Dog / Blue Heeler",
	"Australian Kelpie",
	"Australian Shepherd",
	"Australian Terrier",
	"Basenji",
	"Basset Hound",
	"Beagle",
	"Bearded Collie",
	"Beauceron",
	"Bedlington Terrier",
	"Belgian Shepherd / Laekenois",
	"Belgian Shepherd / Malinois",
	"Belgian Shepherd / Sheepdog",
	"Belgian Shepherd / Tervuren",
	"Bernedoodle",
	"Bernese Mountain Dog",
	"Bichon Frise",
	"Black and Tan Coonhound",
	"Black Labrador Retriever",
	"Black Mouth Cur",
	"Black Russian Terrier",
	"Bloodhound",
	"Blue Lacy",
	"Bluetick Coonhound",
	"Boerboel",
	"Bolognese",
	"Border Collie",
	"Border Terrier",
	"Borzoi",
	"Boston Terrier",
	"Bouvier des Flandres",
	"Boxer",
	"Boykin Spaniel",
	"Briard",
	"Brittany Spaniel",
	"Brussels Griffon",
	"Bull Terrier",
	"Bullmastiff",
	"Cairn Terrier",
	"Canaan Dog",
	"Cane Corso",
	"Cardigan Welsh Corgi",
	"Carolina Dog",
	"Catahoula Leopard Dog",
	"Cattle Dog",
	"Caucasian Sheepdog / Caucasian Ovtcharka",
	"Cavachon",
	"Cavalier King Charles Spaniel",
	"Cavapoo",
	"Chesapeake Bay Retriever",
	"Chihuahua",
	"Chinese Crested Dog",
	"Chinese Foo Dog",
	"Chinook",
	"Chiweenie",
	"Chocolate Labrador Retriever",
	"Chow Chow",
	"Cirneco dell'Etna",
	"Clumber Spaniel",
	"Cockapoo",
	"Cocker Spaniel",
	"Collie",
	"Coonhound",
	"Corgi",
	"Coton de Tulear",
	"Curly-Coated Retriever",
	"Dachshund",
	"Dalmatian",
	"Dandie Dinmont Terrier",
	"Doberman Pinscher",
	"Dogo Argentino",
	"Dogue de Bordeaux",
	"Dutch Shepherd",
	"English Bulldog",
	"English Cocker Spaniel",
	"English Coonhound",
	"English Foxhound",
	"English Pointer",
	"English Setter",
	"English Shepherd",
	"English Springer Spaniel",
	"English Toy Spaniel",
	"Entlebucher",
	"Eskimo Dog",
	"Feist",
	"Field Spaniel",
	"Fila Brasileiro",
	"Finnish Lapphund",
	"Finnish Spitz",
	"Flat-Coated Retriever",
	"Fox Terrier",
	"Foxhound",
	"French Bulldog",
	"Galgo Spanish Greyhound",
	"German Pinscher",
	"German Shepherd Dog",
	"German Shorthaired Pointer",
	"German Spitz",
	"German Wirehaired Pointer",
	"Giant Schnauzer",
	"Glen of Imaal Terrier",
	"Golden Retriever",
	"Goldendoodle",
	"Gordon Setter",
	"Great Dane",
	"Great Pyrenees",
	"Greater Swiss Mountain Dog",
	"Greyhound",
	"Hamiltonstovare",
	"Harrier",
	"Havanese",
	"Hound",
	"Hovawart",
	"Husky",
	"Ibizan Hound",
	"Icelandic Sheepdog",
	"Illyrian Sheepdog",
	"Irish Setter",
	"Irish Terrier",
	"Irish Water Spaniel",
	"Irish Wolfhound",
	"Italian Greyhound",
	"Jack Russell Terrier",
	"Japanese Chin",
	"Jindo",
	"Kai Dog",
	"Karelian Bear Dog",
	"Keeshond",
	"Kerry Blue Terrier",
	"Kishu",
	"Klee Kai",
	"Komondor",
	"Kuvasz",
	"Kyi Leo",
	"Labradoodle",
	"Labrador Retriever",
	"Lakeland Terrier",
	"Lancashire Heeler",
	"Leonberger",
	"Lhasa Apso",
	"Lowchen",
	"Lurcher",
	"Maltese",
	"Maltipoo",
	"Manchester Terrier",
	"Maremma Sheepdog",
	"Mastiff",
	"McNab",
	"Miniature Bull Terrier",
	"Miniature Dachshund",
	"Miniature Pinscher",
	"Miniature Poodle",
	"Miniature Schnauzer",
	"Mixed Breed",
	"Morkie",
	"Mountain Cur",
	"Mountain Dog",
	"Munsterlander",
	"Neapolitan Mastiff",
	"New Guinea Singing Dog",
	"Newfoundland Dog",
	"Norfolk Terrier",
	"Norwegian Buhund",
	"Norwegian Elkhound",
	"Norwegian Lundehund",
	"Norwich Terrier",
	"Nova Scotia Duck Tolling Retriever",
	"Old English Sheepdog",
	"Otterhound",
	"Papillon",
	"Parson Russell Terrier",
	"Patterdale Terrier / Fell Terrier",
	"Pekingese",
	"Pembroke Welsh Corgi",
	"Peruvian Inca Orchid",
	"Petit Basset Griffon Vendeen",
	"Pharaoh Hound",
	"Pit Bull Terrier",
	"Plott Hound",
	"Pointer",
	"Polish Lowland Sheepdog",
	"Pomeranian",
	"Pomsky",
	"Poodle",
	"Portuguese Podengo",
	"Portuguese Water Dog",
	"Presa Canario",
	"Pug",
	"Puggle",
	"Puli",
	"Pumi",
	"Pyrenean Shepherd",
	"Rat Terrier",
	"Redbone Coonhound",
	"Retriever",
	"Rhodesian Ridgeback",
	"Rottweiler",
	"Rough Collie",
	"Saint Bernard",
	"Saluki",
	"Samoyed",
	"Sarplaninac",
	"Schipperke",
	"Schnauzer",
	"Schnoodle",
	"Scottish Deerhound",
	"Scottish Terrier",
	"Sealyham Terrier",
	"Setter",
	"Shar-Pei",
	"Sheep Dog",
	"Sheepadoodle",
	"Shepherd",
	"Shetland Sheepdog / Sheltie",
	"Shiba Inu",
	"Shih poo",
	"Shih Tzu",
	"Shollie",
	"Siberian Husky",
	"Silky Terrier",
	"Skye Terrier",
	"Sloughi",
	"Smooth Collie",
	"Smooth Fox Terrier",
	"South Russian Ovtcharka",
	"Spaniel",
	"Spanish Water Dog",
	"Spinone Italiano",
	"Spitz",
	"Staffordshire Bull Terrier",
	"Standard Poodle",
	"Standard Schnauzer",
	"Sussex Spaniel",
	"Swedish Vallhund",
	"Tennessee Treeing Brindle",
	"Terrier",
	"Thai Ridgeback",
	"Tibetan Mastiff",
	"Tibetan Spaniel",
	"Tibetan Terrier",
	"Tosa Inu",
	"Toy Fox Terrier",
	"Toy Manchester Terrier",
	"Treeing Walker Coonhound",
	"Vizsla",
	"Weimaraner",
	"Welsh Springer Spaniel",
	"Welsh Terrier",
	"West Highland White Terrier / Westie",
	"Wheaten Terrier",
	"Whippet",
	"White German Shepherd",
	"Wire Fox Terrier",
	"Wirehaired Dachshund",
	"Wirehaired Pointing Griffon",
	"Wirehaired Terrier",
	"Xoloitzcuintli / Mexican Hairless",
	"Yellow Labrador Retriever",
	"Yorkshire Terrier",
	"Abyssinian",
	"American Bobtail",
	"American Curl",
	"American Shorthair",
	"American Wirehair",
	"Applehead Siamese",
	"Balinese",
	"Bengal",
	"Birman",
	"Bombay",
	"British Shorthair",
	"Burmese",
	"Burmilla",
	"Calico",
	"Canadian Hairless",
	"Chartreux",
	"Chausie",
	"Chinchilla",
	"Cornish Rex",
	"Cymric",
	"Devon Rex",
	"Dilute Calico",
	"Dilute Tortoiseshell",
	"Domestic Long Hair",
	"Domestic Medium Hair",
	"Domestic Short Hair",
	"Egyptian Mau",
	"Exotic Shorthair",
	"Extra-Toes Cat / Hemingway Polydactyl",
	"Havana",
	"Himalayan",
	"Japanese Bobtail",
	"Javanese",
	"Korat",
	"LaPerm",
	"Maine Coon",
	"Manx",
	"Munchkin",
	"Nebelung",
	"Norwegian Forest Cat",
	"Ocicat",
	"Oriental Long Hair",
	"Oriental Short Hair",
	"Oriental Tabby",
	"Persian",
	"Pixiebob",
	"Ragamuffin",
	"Ragdoll",
	"Russian Blue",
	"Scottish Fold",
	"Selkirk Rex",
	"Siamese",
	"Siberian",
	"Silver",
	"Singapura",
	"Snowshoe",
	"Somali",
	"Sphynx / Hairless Cat",
	"Tabby",
	"Tiger",
	"Tonkinese",
	"Torbie",
	"Tortoiseshell",
	"Toyger",
	"Turkish Angora",
	"Turkish Van",
	"Tuxedo",
	"York Chocolate",
];

export const allAnimals = [
	{
		id: 66258675,
		organization_id: "GA336",
		url: "https://www.petfinder.com/dog/weevil-66258675/ga/lawrenceville/society-of-humane-friends-of-ga-inc-ga336/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Terrier",
			secondary: "Hound",
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "Red / Chestnut / Orange",
			secondary: null,
			tertiary: null,
		},
		age: "Baby",
		gender: "Male",
		size: "Medium",
		coat: "Short",
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: true,
			cats: true,
		},
		tags: ["Friendly", "Affectionate", "Playful", "Funny"],
		name: "Weevil",
		description:
			"Mama Ladybug and her little Bug Babies are ready for adoption applications! Katydid, Junebug, Weevil, Skeeter, Flea, Firefly, Cricket, Butterfly...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/1/?bust=1692286746&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/1/?bust=1692286746&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/1/?bust=1692286746&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/1/?bust=1692286746",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/2/?bust=1692286747&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/2/?bust=1692286747&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/2/?bust=1692286747&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/2/?bust=1692286747",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/3/?bust=1692286748&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/3/?bust=1692286748&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/3/?bust=1692286748&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/3/?bust=1692286748",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/1/?bust=1692286746&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/1/?bust=1692286746&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/1/?bust=1692286746&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258675/1/?bust=1692286746",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:39:11+0000",
		published_at: "2023-08-17T15:39:10+0000",
		distance: null,
		contact: {
			email: "sohfga@gmail.com",
			phone: null,
			address: {
				address1: null,
				address2: null,
				city: "Lawrenceville",
				state: "GA",
				postcode: "30046",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258675",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/ga336",
			},
		},
	},
	{
		id: 66258673,
		organization_id: "PA406",
		url: "https://www.petfinder.com/dog/bailey-66258673/pa/stroudsburg/camp-papillon-animal-shelter-pa406/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Australian Shepherd",
			secondary: null,
			mixed: false,
			unknown: false,
		},
		colors: {
			primary: null,
			secondary: null,
			tertiary: null,
		},
		age: "Young",
		gender: "Female",
		size: "Medium",
		coat: null,
		attributes: {
			spayed_neutered: false,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: false,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [],
		name: "Bailey",
		description:
			"You can fill out an adoption application online on our official website.\n\nIf you would like to take me home...",
		organization_animal_id: "19583588-D230108",
		photos: [],
		primary_photo_cropped: null,
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:38:57+0000",
		published_at: "2023-08-17T15:38:56+0000",
		distance: null,
		contact: {
			email: "adopt@camppapillon.org",
			phone: "570-420-0450",
			address: {
				address1: "128 Brainerd Lane",
				address2: null,
				city: "Stroudsburg",
				state: "PA",
				postcode: "18360",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258673",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/pa406",
			},
		},
	},
	{
		id: 66258671,
		organization_id: "ME77",
		url: "https://www.petfinder.com/dog/oreo-66258671/me/sebago/paws-and-claws-new-england-me77/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Beagle",
			secondary: "Australian Cattle Dog / Blue Heeler",
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "Black",
			secondary: "White / Cream",
			tertiary: null,
		},
		age: "Baby",
		gender: "Male",
		size: "Medium",
		coat: "Medium",
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: true,
			dogs: true,
			cats: true,
		},
		tags: [
			"Friendly",
			"Affectionate",
			"Gentle",
			"Playful",
			"Smart",
			"Curious",
			"Loves Kisses",
		],
		name: "Oreo",
		description:
			"Looking for a puppy that is sweet as a can be? Look no further! You won&#039;t find &quot;America&#039;s Favorite Cookie&quot;...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/2/?bust=1692286734&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/2/?bust=1692286734&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/2/?bust=1692286734&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/2/?bust=1692286734",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/1/?bust=1692286733&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/1/?bust=1692286733&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/1/?bust=1692286733&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/1/?bust=1692286733",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/2/?bust=1692286734&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/2/?bust=1692286734&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/2/?bust=1692286734&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258671/2/?bust=1692286734",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:38:56+0000",
		published_at: "2023-08-17T15:38:55+0000",
		distance: null,
		contact: {
			email: "amie.pacne@gmail.com",
			phone: null,
			address: {
				address1: null,
				address2: null,
				city: "Sebago",
				state: "ME",
				postcode: "04029",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258671",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/me77",
			},
		},
	},
	{
		id: 66258664,
		organization_id: "OH1137",
		url: "https://www.petfinder.com/dog/celeste-66258664/oh/st-clairsville/the-road-home-animal-project-oh1137/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Labrador Retriever",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "Yellow / Tan / Blond / Fawn",
			secondary: "White / Cream",
			tertiary: null,
		},
		age: "Young",
		gender: "Female",
		size: "Large",
		coat: "Short",
		attributes: {
			spayed_neutered: true,
			house_trained: true,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: true,
			dogs: true,
			cats: false,
		},
		tags: [],
		name: "Celeste",
		description:
			"Celeste is a 2  year old that weighs 55 lbs who is  working on housetraining and  crate training.  She seems...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/1/?bust=1692286630&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/1/?bust=1692286630&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/1/?bust=1692286630&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/1/?bust=1692286630",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/2/?bust=1692286631&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/2/?bust=1692286631&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/2/?bust=1692286631&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/2/?bust=1692286631",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/3/?bust=1692286631&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/3/?bust=1692286631&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/3/?bust=1692286631&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/3/?bust=1692286631",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/4/?bust=1692286632&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/4/?bust=1692286632&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/4/?bust=1692286632&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/4/?bust=1692286632",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/5/?bust=1692286632&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/5/?bust=1692286632&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/5/?bust=1692286632&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/5/?bust=1692286632",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/6/?bust=1692286633&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/6/?bust=1692286633&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/6/?bust=1692286633&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/6/?bust=1692286633",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/1/?bust=1692286630&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/1/?bust=1692286630&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/1/?bust=1692286630&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258664/1/?bust=1692286630",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:37:15+0000",
		published_at: "2023-08-17T15:37:14+0000",
		distance: null,
		contact: {
			email: "trhapinc@aol.com",
			phone: null,
			address: {
				address1: null,
				address2: null,
				city: "St. Clairsville",
				state: "OH",
				postcode: "43950",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258664",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/oh1137",
			},
		},
	},
	{
		id: 66258662,
		organization_id: "MO380",
		url: "https://www.petfinder.com/dog/kaya-66258662/mo/ofallon/soar-stray-and-orphaned-animal-rescue-mo380/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Yellow Labrador Retriever",
			secondary: "Golden Retriever",
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "Golden",
			secondary: null,
			tertiary: null,
		},
		age: "Young",
		gender: "Female",
		size: "Medium",
		coat: "Medium",
		attributes: {
			spayed_neutered: true,
			house_trained: true,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: true,
			dogs: true,
			cats: true,
		},
		tags: ["Friendly", "Affectionate", "Playful", "Gentle", "Smart"],
		name: "Kaya ",
		description:
			"Retriever lovers here is the dog you have been waiting for! Kaya is a 10 month old, 40 pound Labrador/golden...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/1/?bust=1692286600&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/1/?bust=1692286600&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/1/?bust=1692286600&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/1/?bust=1692286600",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/2/?bust=1692286601&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/2/?bust=1692286601&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/2/?bust=1692286601&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/2/?bust=1692286601",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/3/?bust=1692286602&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/3/?bust=1692286602&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/3/?bust=1692286602&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/3/?bust=1692286602",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/4/?bust=1692286603&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/4/?bust=1692286603&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/4/?bust=1692286603&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/4/?bust=1692286603",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/5/?bust=1692286603&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/5/?bust=1692286603&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/5/?bust=1692286603&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/5/?bust=1692286603",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/6/?bust=1692286604&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/6/?bust=1692286604&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/6/?bust=1692286604&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/6/?bust=1692286604",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/1/?bust=1692286600&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/1/?bust=1692286600&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/1/?bust=1692286600&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258662/1/?bust=1692286600",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:36:47+0000",
		published_at: "2023-08-17T15:36:46+0000",
		distance: null,
		contact: {
			email: "StrayandOrphanedAnimalrescue@gmail.com",
			phone: "(951) 205-0626",
			address: {
				address1: null,
				address2: null,
				city: "O'Fallon",
				state: "MO",
				postcode: "63366",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258662",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/mo380",
			},
		},
	},
	{
		id: 66258659,
		organization_id: "TN707",
		url: "https://www.petfinder.com/dog/stormy-66258659/tn/chattanooga/troopers-treasures-tn707/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Labrador Retriever",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "Black",
			secondary: null,
			tertiary: null,
		},
		age: "Senior",
		gender: "Male",
		size: "Medium",
		coat: "Short",
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [],
		name: "stormy",
		description:
			"This is Stormy, a 10 year old Lab who was left on a chain his whole life. He is so...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258659/1/?bust=1692286570&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258659/1/?bust=1692286570&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258659/1/?bust=1692286570&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258659/1/?bust=1692286570",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258659/1/?bust=1692286570&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258659/1/?bust=1692286570&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258659/1/?bust=1692286570&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258659/1/?bust=1692286570",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:36:13+0000",
		published_at: "2023-08-17T15:36:12+0000",
		distance: null,
		contact: {
			email: "ruth@trooperstreasures.com",
			phone: "(423) 212-3116",
			address: {
				address1: null,
				address2: null,
				city: "Chattanooga",
				state: "TN",
				postcode: "37421",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258659",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/tn707",
			},
		},
	},
	{
		id: 66258658,
		organization_id: "GA336",
		url: "https://www.petfinder.com/dog/junebug-66258658/ga/lawrenceville/society-of-humane-friends-of-ga-inc-ga336/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Wirehaired Terrier",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "Yellow / Tan / Blond / Fawn",
			secondary: "White / Cream",
			tertiary: null,
		},
		age: "Baby",
		gender: "Female",
		size: "Small",
		coat: "Wire",
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: true,
			cats: true,
		},
		tags: ["Friendly", "Affectionate", "Playful", "Funny"],
		name: "Junebug",
		description:
			"Mama Ladybug and her little Bug Babies are ready for adoption applications! Katydid, Junebug, Weevil, Skeeter, Flea, Firefly, Cricket, Butterfly...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/1/?bust=1692286567&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/1/?bust=1692286567&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/1/?bust=1692286567&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/1/?bust=1692286567",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/2/?bust=1692286568&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/2/?bust=1692286568&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/2/?bust=1692286568&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/2/?bust=1692286568",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/3/?bust=1692286569&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/3/?bust=1692286569&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/3/?bust=1692286569&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/3/?bust=1692286569",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/4/?bust=1692286570&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/4/?bust=1692286570&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/4/?bust=1692286570&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/4/?bust=1692286570",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/1/?bust=1692286567&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/1/?bust=1692286567&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/1/?bust=1692286567&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258658/1/?bust=1692286567",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:36:12+0000",
		published_at: "2023-08-17T15:36:11+0000",
		distance: null,
		contact: {
			email: "sohfga@gmail.com",
			phone: null,
			address: {
				address1: null,
				address2: null,
				city: "Lawrenceville",
				state: "GA",
				postcode: "30046",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258658",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/ga336",
			},
		},
	},
	{
		id: 66258657,
		organization_id: "MD11",
		url: "https://www.petfinder.com/dog/jake-66258657/md/ridgely/caroline-county-humane-society-inc-md11/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Terrier",
			secondary: null,
			mixed: false,
			unknown: false,
		},
		colors: {
			primary: "White / Cream",
			secondary: "Black",
			tertiary: null,
		},
		age: "Senior",
		gender: "Male",
		size: "Medium",
		coat: "Short",
		attributes: {
			spayed_neutered: true,
			house_trained: true,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: true,
			dogs: true,
			cats: false,
		},
		tags: ["Friendly", "Playful", "Gentle", "Affectionate"],
		name: "Jake",
		description:
			"Jake is ready to go HOME!! Jake is a volunteer/staff favorite!! Our guy is 8 years old, potty/crate trained, and...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258657/1/?bust=1692286568&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258657/1/?bust=1692286568&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258657/1/?bust=1692286568&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258657/1/?bust=1692286568",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258657/1/?bust=1692286568&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258657/1/?bust=1692286568&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258657/1/?bust=1692286568&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258657/1/?bust=1692286568",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:36:10+0000",
		published_at: "2023-08-17T15:36:09+0000",
		distance: null,
		contact: {
			email: "info@carolinehumane.org",
			phone: "(410) 820-1600",
			address: {
				address1: "407 West Bell Street",
				address2: null,
				city: "Ridgely",
				state: "MD",
				postcode: "21660",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258657",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/md11",
			},
		},
	},
	{
		id: 66258649,
		organization_id: "HI06",
		url: "https://www.petfinder.com/dog/dallas-66258649/hi/kailua-kona/hawaii-island-humane-society-hi06/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Mixed Breed",
			secondary: null,
			mixed: false,
			unknown: false,
		},
		colors: {
			primary: "White / Cream",
			secondary: "Yellow / Tan / Blond / Fawn",
			tertiary: null,
		},
		age: "Young",
		gender: "Male",
		size: "Medium",
		coat: null,
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [
			"Eligible for Foster to Adopt",
			"I am located at THE ANIMAL COMMUNITY CENTER IN KONA",
		],
		name: "Dallas",
		description:
			"To adopt me:\nStart by clicking the &amp;#34;Apply to Adopt button&amp;#34; on my profile! Once you have filled out the...",
		organization_animal_id: "HIHS-A-9627",
		photos: [],
		primary_photo_cropped: null,
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:35:21+0000",
		published_at: "2023-08-17T15:35:20+0000",
		distance: null,
		contact: {
			email: "adopt@hihs.org",
			phone: "(808) 329-8002",
			address: {
				address1: "78-6767 Mamalahoa Hwy",
				address2: null,
				city: "Kailua Kona",
				state: "HI",
				postcode: "96740",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258649",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/hi06",
			},
		},
	},
	{
		id: 66258646,
		organization_id: "MO67",
		url: "https://www.petfinder.com/dog/sullivan-66258646/mo/raytown/midwest-animal-resq-mo67/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Australian Shepherd",
			secondary: null,
			mixed: false,
			unknown: false,
		},
		colors: {
			primary: "Gray / Blue / Silver",
			secondary: "White / Cream",
			tertiary: null,
		},
		age: "Baby",
		gender: "Male",
		size: "Large",
		coat: null,
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [],
		name: "Sullivan",
		description: null,
		organization_animal_id: "MARQ-A-6684",
		photos: [],
		primary_photo_cropped: null,
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:35:12+0000",
		published_at: "2023-08-17T15:35:11+0000",
		distance: null,
		contact: {
			email: "info@marqKC.org",
			phone: "(816) 919-1364",
			address: {
				address1: "10312 East 63rd Street",
				address2: null,
				city: "Raytown",
				state: "MO",
				postcode: "64133",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258646",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/mo67",
			},
		},
	},
	{
		id: 66258647,
		organization_id: "MO67",
		url: "https://www.petfinder.com/dog/samuel-66258647/mo/raytown/midwest-animal-resq-mo67/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Australian Shepherd",
			secondary: null,
			mixed: false,
			unknown: false,
		},
		colors: {
			primary: "Gray / Blue / Silver",
			secondary: "White / Cream",
			tertiary: null,
		},
		age: "Baby",
		gender: "Male",
		size: "Large",
		coat: null,
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [],
		name: "Samuel",
		description: null,
		organization_animal_id: "MARQ-A-6685",
		photos: [],
		primary_photo_cropped: null,
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:35:12+0000",
		published_at: "2023-08-17T15:35:11+0000",
		distance: null,
		contact: {
			email: "info@marqKC.org",
			phone: "(816) 919-1364",
			address: {
				address1: "10312 East 63rd Street",
				address2: null,
				city: "Raytown",
				state: "MO",
				postcode: "64133",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258647",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/mo67",
			},
		},
	},
	{
		id: 66258642,
		organization_id: "TX2269",
		url: "https://www.petfinder.com/dog/posie-waller-baby-66258642/tx/austin/three-little-pitties-rescue-tx2269/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Terrier",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "White / Cream",
			secondary: "Black",
			tertiary: null,
		},
		age: "Baby",
		gender: "Female",
		size: "Medium",
		coat: "Short",
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: true,
			dogs: true,
			cats: true,
		},
		tags: [
			"Friendly",
			"Curious",
			"Loves kisses",
			"Independent",
			"Affectionate",
			"Loyal",
			"Funny",
			"Gentle",
			"Playful",
			"Smart",
		],
		name: "Posie Waller Baby",
		description:
			"Introducing Posie!\n\nMeet our adorable 3-month-old puppy that will warm your heart and fill your home with joy! This precious...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/1/?bust=1692286497&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/1/?bust=1692286497&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/1/?bust=1692286497&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/1/?bust=1692286497",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/2/?bust=1692286498&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/2/?bust=1692286498&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/2/?bust=1692286498&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/2/?bust=1692286498",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/3/?bust=1692286499&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/3/?bust=1692286499&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/3/?bust=1692286499&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/3/?bust=1692286499",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/4/?bust=1692286500&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/4/?bust=1692286500&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/4/?bust=1692286500&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/4/?bust=1692286500",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/5/?bust=1692286501&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/5/?bust=1692286501&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/5/?bust=1692286501&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/5/?bust=1692286501",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/1/?bust=1692286497&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/1/?bust=1692286497&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/1/?bust=1692286497&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258642/1/?bust=1692286497",
		},
		videos: [
			{
				embed:
					'<iframe title="Video" src="https://www.youtube.com/embed/YmgJb4SAi7s?enablejsapi=1" frameborder="0" allowfullscreen></iframe>',
			},
		],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:35:05+0000",
		published_at: "2023-08-17T15:35:04+0000",
		distance: null,
		contact: {
			email: "tim@threelittlepittiesrescue.org",
			phone: null,
			address: {
				address1: null,
				address2: null,
				city: "Austin",
				state: "TX",
				postcode: "78705",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258642",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/tx2269",
			},
		},
	},
	{
		id: 66258638,
		organization_id: "TX2269",
		url: "https://www.petfinder.com/dog/posie-waller-baby-66258638/tx/friendswood/three-little-pitties-rescue-tx2269/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Terrier",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "White / Cream",
			secondary: "Black",
			tertiary: null,
		},
		age: "Baby",
		gender: "Female",
		size: "Medium",
		coat: "Short",
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: true,
			dogs: true,
			cats: true,
		},
		tags: [
			"Friendly",
			"Curious",
			"Loves kisses",
			"Independent",
			"Affectionate",
			"Loyal",
			"Funny",
			"Gentle",
			"Playful",
			"Smart",
		],
		name: "Posie Waller Baby",
		description:
			"Introducing Posie!\n\nMeet our adorable 3-month-old puppy that will warm your heart and fill your home with joy! This precious...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/1/?bust=1692286446&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/1/?bust=1692286446&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/1/?bust=1692286446&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/1/?bust=1692286446",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/2/?bust=1692286447&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/2/?bust=1692286447&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/2/?bust=1692286447&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/2/?bust=1692286447",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/3/?bust=1692286448&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/3/?bust=1692286448&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/3/?bust=1692286448&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/3/?bust=1692286448",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/4/?bust=1692286448&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/4/?bust=1692286448&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/4/?bust=1692286448&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/4/?bust=1692286448",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/5/?bust=1692286449&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/5/?bust=1692286449&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/5/?bust=1692286449&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/5/?bust=1692286449",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/1/?bust=1692286446&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/1/?bust=1692286446&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/1/?bust=1692286446&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258638/1/?bust=1692286446",
		},
		videos: [
			{
				embed:
					'<iframe title="Video" src="https://www.youtube.com/embed/YmgJb4SAi7s?enablejsapi=1" frameborder="0" allowfullscreen></iframe>',
			},
		],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:34:11+0000",
		published_at: "2023-08-17T15:34:10+0000",
		distance: null,
		contact: {
			email: "tim@threelittlepittiesrescue.org",
			phone: null,
			address: {
				address1: null,
				address2: null,
				city: "Friendswood",
				state: "TX",
				postcode: "77546",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258638",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/tx2269",
			},
		},
	},
	{
		id: 66258637,
		organization_id: "KY61",
		url: "https://www.petfinder.com/dog/grasshopper-66258637/ky/lexington/lexington-humane-society-ky61/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "German Shepherd Dog",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: null,
			secondary: null,
			tertiary: null,
		},
		age: "Baby",
		gender: "Male",
		size: "Medium",
		coat: null,
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [],
		name: "Grasshopper",
		description:
			"Primary Color: Black Secondary Color: Brown Age: 0yrs 0mths 10wks Animal has been Neutered",
		organization_animal_id: "259405",
		photos: [],
		primary_photo_cropped: null,
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:33:28+0000",
		published_at: "2023-08-17T15:33:27+0000",
		distance: null,
		contact: {
			email: "lhsinfo@lexingtonhumanesociety.org",
			phone: "859.233.0044 x223",
			address: {
				address1: "1600 Old Frankfort Pike",
				address2: null,
				city: "Lexington",
				state: "KY",
				postcode: "40504",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258637",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/ky61",
			},
		},
	},
	{
		id: 66258632,
		organization_id: "KS47",
		url: "https://www.petfinder.com/dog/sharp-honda-sherry-66258632/ks/topeka/helping-hands-humane-society-ks47/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Pit Bull Terrier",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: null,
			secondary: null,
			tertiary: null,
		},
		age: "Young",
		gender: "Female",
		size: "Medium",
		coat: null,
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [],
		name: "Sharp Honda Sherry",
		description:
			"Primary Color: Blue W/ White Weight: 51lbs Age: 1yrs 0mths 2wks Animal has been Spayed",
		organization_animal_id: "125381",
		photos: [],
		primary_photo_cropped: null,
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:33:25+0000",
		published_at: "2023-08-17T15:33:24+0000",
		distance: null,
		contact: {
			email: "adopt@hhhstopeka.org",
			phone: "785-233-7325",
			address: {
				address1: "5720 SW 21st St.",
				address2: null,
				city: "Topeka",
				state: "KS",
				postcode: "66604",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258632",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/ks47",
			},
		},
	},
	{
		id: 66258633,
		organization_id: "KS47",
		url: "https://www.petfinder.com/dog/mocha-frappe-66258633/ks/topeka/helping-hands-humane-society-ks47/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Saint Bernard",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: null,
			secondary: null,
			tertiary: null,
		},
		age: "Adult",
		gender: "Female",
		size: "Medium",
		coat: null,
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [],
		name: "Mocha Frappe",
		description:
			"Primary Color: Tri Color Weight: 75lbs Age: 6yrs 0mths 1wks Animal has been Spayed",
		organization_animal_id: "125578",
		photos: [],
		primary_photo_cropped: null,
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:33:25+0000",
		published_at: "2023-08-17T15:33:24+0000",
		distance: null,
		contact: {
			email: "adopt@hhhstopeka.org",
			phone: "785-233-7325",
			address: {
				address1: "5720 SW 21st St.",
				address2: null,
				city: "Topeka",
				state: "KS",
				postcode: "66604",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258633",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/ks47",
			},
		},
	},
	{
		id: 66258631,
		organization_id: "FL1468",
		url: "https://www.petfinder.com/dog/ethan-home-cafe-66258631/fl/tarpon-springs/gold-coast-greyhound-adoptions-gulf-coast-chapter-fl1468/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Greyhound",
			secondary: null,
			mixed: false,
			unknown: false,
		},
		colors: {
			primary: "Black",
			secondary: null,
			tertiary: null,
		},
		age: "Adult",
		gender: "Male",
		size: "Large",
		coat: "Short",
		attributes: {
			spayed_neutered: true,
			house_trained: true,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [],
		name: "Ethan (Home Cafe)",
		description:
			"This is a sneak preview of Ethan (Home Cafe professionally)!\nEthan just retired and is settling into his new life!...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/2/?bust=1692286393&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/2/?bust=1692286393&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/2/?bust=1692286393&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/2/?bust=1692286393",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/1/?bust=1692286392&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/1/?bust=1692286392&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/1/?bust=1692286392&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/1/?bust=1692286392",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/2/?bust=1692286393&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/2/?bust=1692286393&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/2/?bust=1692286393&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258631/2/?bust=1692286393",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:33:15+0000",
		published_at: "2023-08-17T15:33:14+0000",
		distance: null,
		contact: {
			email: "gcgagulfcoast@gmail.com",
			phone: "(727) 786-3278",
			address: {
				address1: null,
				address2: null,
				city: "Tarpon Springs",
				state: "FL",
				postcode: "34689",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258631",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/fl1468",
			},
		},
	},
	{
		id: 66258630,
		organization_id: "GA641",
		url: "https://www.petfinder.com/dog/bella-66258630/ga/gainesville/hall-county-animal-shelter-ga641/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Pit Bull Terrier",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "Brown / Chocolate",
			secondary: null,
			tertiary: null,
		},
		age: "Adult",
		gender: "Female",
		size: "Medium",
		coat: "Short",
		attributes: {
			spayed_neutered: false,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: null,
			cats: null,
		},
		tags: [],
		name: "Bella",
		description: null,
		organization_animal_id: "52458928",
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258630/1/?bust=1692286381&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258630/1/?bust=1692286381&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258630/1/?bust=1692286381&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258630/1/?bust=1692286381",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258630/1/?bust=1692286381&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258630/1/?bust=1692286381&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258630/1/?bust=1692286381&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258630/1/?bust=1692286381",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:33:03+0000",
		published_at: "2023-08-17T15:33:02+0000",
		distance: null,
		contact: {
			email: null,
			phone: "(678) 450-1587",
			address: {
				address1: "1688 Barber Road",
				address2: null,
				city: "Gainesville",
				state: "GA",
				postcode: "30507",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258630",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/ga641",
			},
		},
	},
	{
		id: 66258629,
		organization_id: "GA336",
		url: "https://www.petfinder.com/dog/katydid-66258629/ga/lawrenceville/society-of-humane-friends-of-ga-inc-ga336/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Wirehaired Terrier",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "Yellow / Tan / Blond / Fawn",
			secondary: "White / Cream",
			tertiary: null,
		},
		age: "Baby",
		gender: "Female",
		size: "Small",
		coat: "Wire",
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: null,
			dogs: true,
			cats: true,
		},
		tags: ["Friendly", "Affectionate", "Playful", "Funny"],
		name: "Katydid",
		description:
			"Mama Ladybug and her little Bug Babies are ready for adoption applications! Katydid, Junebug, Weevil, Skeeter, Flea, Firefly, Cricket, Butterfly...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/1/?bust=1692286369&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/1/?bust=1692286369&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/1/?bust=1692286369&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/1/?bust=1692286369",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/2/?bust=1692286370&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/2/?bust=1692286370&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/2/?bust=1692286370&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/2/?bust=1692286370",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/3/?bust=1692286371&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/3/?bust=1692286371&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/3/?bust=1692286371&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/3/?bust=1692286371",
			},
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/4/?bust=1692286372&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/4/?bust=1692286372&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/4/?bust=1692286372&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/4/?bust=1692286372",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/1/?bust=1692286369&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/1/?bust=1692286369&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/1/?bust=1692286369&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258629/1/?bust=1692286369",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:32:55+0000",
		published_at: "2023-08-17T15:32:54+0000",
		distance: null,
		contact: {
			email: "sohfga@gmail.com",
			phone: null,
			address: {
				address1: null,
				address2: null,
				city: "Lawrenceville",
				state: "GA",
				postcode: "30046",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258629",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/ga336",
			},
		},
	},
	{
		id: 66258627,
		organization_id: "PA741",
		url: "https://www.petfinder.com/dog/buck-66258627/pa/philadelphia/saved-me-pa741/?referrer_id=36fea8ff-7057-4782-95b4-b27405307548&utm_source=api&utm_medium=partnership&utm_content=36fea8ff-7057-4782-95b4-b27405307548",
		type: "Dog",
		species: "Dog",
		breeds: {
			primary: "Black Labrador Retriever",
			secondary: null,
			mixed: true,
			unknown: false,
		},
		colors: {
			primary: "Black",
			secondary: null,
			tertiary: null,
		},
		age: "Young",
		gender: "Male",
		size: "Large",
		coat: null,
		attributes: {
			spayed_neutered: true,
			house_trained: false,
			declawed: null,
			special_needs: false,
			shots_current: true,
		},
		environment: {
			children: true,
			dogs: true,
			cats: null,
		},
		tags: [
			"Friendly",
			"Loves kisses",
			"Funny",
			"Loyal",
			"Affectionate",
			"Playful",
			"Athletic",
		],
		name: "Buck",
		description:
			"Buck is a 5-6 month old Black Lab mix available for adoption at Doggie Style Pets Northern Liberties. He&#039;s lovable,...",
		organization_animal_id: null,
		photos: [
			{
				small:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258627/1/?bust=1692286354&width=100",
				medium:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258627/1/?bust=1692286354&width=300",
				large:
					"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258627/1/?bust=1692286354&width=600",
				full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258627/1/?bust=1692286354",
			},
		],
		primary_photo_cropped: {
			small:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258627/1/?bust=1692286354&width=300",
			medium:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258627/1/?bust=1692286354&width=450",
			large:
				"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258627/1/?bust=1692286354&width=600",
			full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66258627/1/?bust=1692286354",
		},
		videos: [],
		status: "adoptable",
		status_changed_at: "2023-08-17T15:32:37+0000",
		published_at: "2023-08-17T15:32:36+0000",
		distance: null,
		contact: {
			email: "info@savedme.org",
			phone: "(215) 240-1240",
			address: {
				address1: "861 N 3rd St",
				address2: null,
				city: "Philadelphia",
				state: "PA",
				postcode: "19123",
				country: "US",
			},
		},
		_links: {
			self: {
				href: "/v2/animals/66258627",
			},
			type: {
				href: "/v2/types/dog",
			},
			organization: {
				href: "/v2/organizations/pa741",
			},
		},
	},
];

export const allSizes = ["Large", "Medium", "Small", "Extra Large"];
export const allGenders = ["Male", "Female"];
export const allAges = ["Young", "Adult", "Senior", "Baby"];
export const allStatus = ["adoptable", "adopted", "found"];
