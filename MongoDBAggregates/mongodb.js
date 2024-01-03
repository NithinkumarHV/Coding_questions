/*
How many users are active ?
    OUTPUT:
    activeUsers: 516
*/

db.users.aggregate([
  {
    $match: {
      isActive: true,
    },
  },
  {
    $count: "activeUsers",
  },
]);

/* What is the average age of all users
    OUTPUT:
    _id: null
    averageAge: 29.25

*/

[
  {
    $group: {
      _id: null,
      averageAge: {
        $avg: "$age",
      },
    },
  },
];

/* 
    _id: "female",
    averageAge: 29.818

    _id: "male",
    averageAge: 29.851
*/
[
  {
    $group: {
      _id: "$gender",
      averageAge: {
        $avg: "$age",
      },
    },
  },
];

/* 
    List the top 2 most common favourite fruits among the users
    OUTPUT:

    _id: banana,
    count: 300

    _id: apple,
    count: 200
*/
[
  {
    $group: {
      _id: "$favouriteFruit",
      count: {
        $sum: 1, // add count one to the sum
      },
    },
  },
  {
    $sort: {
      count: -1, // descending order
    },
  },
  {
    $limit: 2, // Limits the result to 2
  },
];

/* Find the total number of males and females
    OUTPUT:

    _id: female
    count: 100

    _id: male
    count: 100
    
*/
[
  {
    $group: {
      _id: "$gender",
      count: {
        // count is the output document field name
        $sum: 1, // $sum => accumulator
      },
    },
  },
];

/*
    Which country has the highest number of registered users ?
    OUTPUT:

    _id: USA
    userCount: 200

*/
[
  {
    $group: {
      _id: "$company.location.country",
      userCount: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      userCount: -1,
    },
  },
  {
    $limit: 1,
  },
];

/* List all the unique eye colors
    OUTPUT:

    _id: "blue"

    _id: "brown"

    _id: "black"

*/
[
  {
    $group: {
      _id: "$eyecolor",
    },
  },
];

/* What is the average number of tags per user
    OUTPUT:
    
    _id: null
    average: 3.8

    unwind: creates more documents for each element of array

*/
[
  {
    $unwind: "$tags", // tags is an array
  },
  {
    $group: {
      _id: "$_id",
      numberOfTags: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      average: {
        $avg: "$numberOfTags",
      },
    },
  },
];

// OR

[
  {
    $addFields: {
      numberOfTags: {
        $size: { $ifNull: ["$tags", []] },
      },
    },
  },
  {
    $group: {
      _id: null,
      average: {
        $avg: "$numberOfTags",
      },
    },
  },
];

/* How many users have enim as one of their tags
  OUTPUT:

  {
    "usersWithEnimTag": 62
  }
*/

[
  {
    $match: {
      tags: "enim",
    },
  },
  {
    $count: "usersWithEnimTag",
  },
];

/* What are the names and age of users who have 'velit' as tag and inactive

  OUTPUT:

  name: "Aurelia Gonzales"
  age: 10

*/

[
  {
    $match: {
      tags: "velit",
      isActive: false,
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
    },
  },
];

/* Regex */
[
  {
    $match: {
      "company.phone": /^\+1 \(940\)/,
    },
  },
  {
    $count: "users",
  },
];

/* Recently registerd */
[
  {
    $sort: {
      registered: -1,
    },
  },
  {
    $limit: 4,
  },
  {
    $project: {
      name: 1,
      registered: 1,
      favoriteFruit: 1,
    },
  },
];

/* Categorise users by their favorite fruit 
  $push
*/
[
  {
    $group: {
      _id: "$favoriteFruit",
      usersCount: {
        $sum: 1,
      },
      users: {
        $push: "$name",
      },
    },
  },
];

/* How many users have 'ad' as their second tag in their list of tags
  OUTPUT:
  users: 13
*/
[
  {
    $match: {
      "tags.2": "ad",
    },
  },
  {
    $count: "users",
  },
];

/* Find users who have both enim and id as their tag */
[
  {
    $match: {
      tags: {
        $all: ["enim", "id"],
      },
    },
  },
  {
    $project: {
      name: 1,
      tags: 1,
    },
  },
  {
    $count: "users",
  },
];

/* List all the companies located at usa with their user counts */
[
  {
    $match: {
      "company.location.country": "USA",
    },
  },
  {
    $group: {
      _id: "$company.title",
      userCount: {
        $sum: 1,
      },
    },
  },
];

/* lookup 
  {
    "genre": "Dystopian",
    "author_details": {
      "_id": 101,
      "name": "George Orwell",
      "birth_year": 1903
    },
    "_id": 2,
    "title": "Nineteen Eighty-Four",
    "author_id": 101
  }

  {
    "title": "The Great Gatsby",
    "author_id": 100,
    "genre": "Classic",
    "author_details": {
      "_id": 100,
      "name": "F. Scott Fitzgerald",
      "birth_year": 1896
    },
    "_id": 1
  }
*/

db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "author_details",
    },
  },
  {
    $addFields: {
      author_details: {
        $arrayElemAt: ["$author_details", 0],
      },
    },
  },
]);
