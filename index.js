const users = [
    {
        id: 1,
        username: "generic_user",
        email: "user@example.com",
        age: 25,
        hobbies: [
            {
                name: "Reading",
                level: "Intermediate",
                favoriteGenres: [
                    {
                        genreName: "Mystery",
                        subgenres: ["Detective", "Thriller"]
                    },
                    {
                        genreName: "Science Fiction",
                        subgenres: ["Cyberpunk", "Space Opera"]
                    }
                ],
                currentBook: {
                    title: "Neuromancer",
                    author: "William Gibson",
                    publicationYear: 1984,
                    genres: ["Science Fiction", "Cyberpunk"]
                }
            },
            {
                name: "Gardening",
                level: "Beginner",
                favoritePlants: ["Roses", "Tomatoes"],
                gardenTools: ["Shovel", "Pruning Shears"]
            },
            {
                name: "Cooking",
                level: "Advanced",
                favoriteCuisines: ["Italian", "Thai"],
                signatureDishes: [
                    { name: "Homemade Pizza", rating: 5 },
                    { name: "Green Curry", rating: 4.8 }
                ]
            }
        ]
    },
    {
        id: 2,
        username: "another_user",
        email: "another_user@example.com",
        age: 30,
        hobbies: [
            {
                name: "Painting",
                level: "Intermediate",
                favoriteMediums: ["Acrylic", "Watercolor"],
                favoriteSubjects: ["Landscapes", "Portraits"],
                currentProject: {
                    title: "Sunset over the Mountains",
                    estimatedCompletion: "2023-09-15"
                }
            },
            {
                name: "Cycling",
                level: "Advanced",
                favoriteTerrain: ["Mountain Trails", "City Roads"],
                bikesOwned: [
                    {
                        brand: "Trek",
                        model: "Fuel EX 9.8",
                        type: "Mountain Bike"
                    },
                    {
                        brand: "Specialized",
                        model: "Tarmac SL6",
                        type: "Road Bike"
                    }
                ]
            },
            {
                name: "Photography",
                level: "Beginner",
                favoriteGenres: ["Landscape", "Portrait"],
                favoriteLocations: ["Beaches", "Urban Rooftops"],
                cameraGear: [
                    { brand: "Canon", model: "EOS 5D Mark IV", type: "DSLR" },
                    { brand: "Sony", model: "Alpha A7 III", type: "Mirrorless" }
                ]
            }
        ]
    },
    {
        id: 3,
        username: "creative_soul",
        email: "creative_soul@example.com",
        age: 28,
        hobbies: [
            {
                name: "Writing",
                level: "Advanced",
                favoriteGenres: ["Fantasy", "Science Fiction"],
                currentProject: {
                    title: "The Chronicles of Eldoria",
                    wordCount: 75000
                }
            },
            {
                name: "Sculpting",
                level: "Beginner",
                favoriteMaterials: ["Clay", "Stone"],
                favoriteSubjects: ["Animals", "Mythical Creatures"],
                currentProject: {
                    title: "Guardian Gargoyle",
                    estimatedCompletion: "2023-10-30"
                }
            },
            {
                name: "Playing Guitar",
                level: "Intermediate",
                favoriteGenres: ["Rock", "Blues"],
                favoriteSongs: [
                    { title: "Stairway to Heaven", artist: "Led Zeppelin" },
                    { title: "Hotel California", artist: "Eagles" }
                ]
            }
        ]
    }
]

console.log(users)

// Nested data practice prompts:
// 1. Access the email of the second user:
const userEmail = users[1].email
console.log(userEmail)

// 2.Access the title of the first hobby of the third user:
const firstHobbyTitle = users[2].hobbies[0].name
console.log(firstHobbyTitle)

// 3.Access the brand of the second bike owned by the second user:
const secondBikeBrand = users[1].hobbies[1].bikesOwned[1].brand
console.log(secondBikeBrand)

// 4. Access the second favorite cuisine of the third hobby of the first user:
const secondFavoriteCuisine = users[0].hobbies[2].favoriteCuisines[0]
console.log(secondFavoriteCuisine)

// 5. Access the title of the current project being written by the third user:
const currentProjectTitle = users[2].hobbies[0].currentProject.title
console.log(currentProjectTitle)

// 6. Access the estimated completion date of the current project of the second hobby of the third user:
const currentProjectCompletion =
    users[2].hobbies[1].currentProject.estimatedCompletion
console.log(currentProjectCompletion)

// 7. Access the artist of the second favorite song of the third hobby of the third user:
const secondFavoriteSongArtist = users[2].hobbies[2].favoriteSongs[1].artist
console.log(secondFavoriteSongArtist)

// 8. Access the first favorite medium of the first hobby of the second user:
const firstFavoriteMedium = users[1].hobbies[0].favoriteMediums[0]
console.log(firstFavoriteMedium)

// 9. Access the level of the first hobby of the second user:
const firstHobbyLevel = users[1].hobbies[0].level
console.log(firstHobbyLevel)

// 10. Access the word count of the current project of the first hobby of the third user:
const currentProjectWordCount = users[2].hobbies[0].currentProject.wordCount
console.log(currentProjectWordCount)
