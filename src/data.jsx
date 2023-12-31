const users = [
  {
    nameAndLastname: "User ",
    status: "INACTIVE",
    gender: "FEMALE",
    score: 80,
    personalNumber: 12346778901,
    email: "user1@example.com",
    phoneNumber: 123456789,
    address: "New York",
    dateOfBirth: "02/03/1995",
  },
  {
    nameAndLastname: "User 2",
    status: "ACTIVE",
    gender: "FEMALE",
    score: 80,
    personalNumber: 12345678901,
    email: "user2@example.com",
    phoneNumber: 123456789,
    address: "New York",
    dateOfBirth: "02/03/1995",
  },
  {
    nameAndLastname: "User 3",
    status: "ACTIVE",
    gender: "MALE",
    score: 95,
    personalNumber: 9876543210,
    email: "user3@example.com",
    phoneNumber: 987654321,
    address: "Los Angeles",
    dateOfBirth: "11/07/1988",
  },

  {
    nameAndLastname: "User 4",
    status: "INACTIVE",
    gender: "FEMALE",
    score: 70,
    personalNumber: 45678901234,
    email: "user4@example.com",
    phoneNumber: 456789012,
    address: "London",
    dateOfBirth: "04/12/1990",
  },
  {
    nameAndLastname: "User 5",
    status: "INACTIVE",
    gender: "MALE",
    score: 85,
    personalNumber: 9876543211,
    email: "user5@example.com",
    phoneNumber: 987654322,
    address: "Paris",
    dateOfBirth: "09/06/1985",
  },
  {
    nameAndLastname: "User 6",
    status: "INACTIVE",
    gender: "FEMALE",
    score: 75,
    personalNumber: 12345678902,
    email: "user6@example.com",
    phoneNumber: 123456790,
    address: "Berlin",
    dateOfBirth: "06/04/1992",
  },
  {
    nameAndLastname: "User 7",
    status: "ACTIVE",
    gender: "MALE",
    score: 88,
    personalNumber: 9876543212,
    email: "user7@example.com",
    phoneNumber: 987654323,
    address: "Tokyo",
    dateOfBirth: "03/08/1987",
  },
  {
    nameAndLastname: "User 8",
    status: "INACTIVE",
    gender: "FEMALE",
    score: 79,
    personalNumber: 12345678903,
    email: "user8@example.com",
    phoneNumber: 123456791,
    address: "Sydney",
    dateOfBirth: "01/05/1983",
  },
  {
    nameAndLastname: "User 9",
    status: "ACTIVE",
    gender: "MALE",
    score: 92,
    personalNumber: 9876543213,
    email: "user9@example.com",
    phoneNumber: 987654324,
    address: "Toronto",
    dateOfBirth: "07/02/1980",
  },
  {
    nameAndLastname: "User 10",
    status: "ACTIVE",
    gender: "FEMALE",
    score: 67,
    personalNumber: 12345678904,
    email: "user10@example.com",
    phoneNumber: 123456792,
    address: "San Francisco",
    dateOfBirth: "05/11/1991",
  },
  {
    nameAndLastname: "User 11",
    status: "ACTIVE",
    gender: "MALE",
    score: 84,
    personalNumber: 9876543214,
    email: "user11@example.com",
    phoneNumber: 987654325,
    address: "Madrid",
    dateOfBirth: "12/10/1986",
  },
  {
    nameAndLastname: "User 12",
    status: "INACTIVE",
    gender: "FEMALE",
    score: 73,
    personalNumber: 12345678905,
    email: "user12@example.com",
    phoneNumber: 123456793,
    address: "Rome",
    dateOfBirth: "08/03/1982",
  },
  {
    nameAndLastname: "User 13",
    status: "INACTIVE",
    gender: "MALE",
    score: 91,
    personalNumber: 9876543215,
    email: "user13@example.com",
    phoneNumber: 987654326,
    address: "Moscow",
    dateOfBirth: "10/09/1989",
  },
  {
    nameAndLastname: "User 14",
    status: "ACTIVE",
    gender: "FEMALE",
    score: 78,
    personalNumber: 12345678906,
    email: "user14@example.com",
    phoneNumber: 123456794,
    address: "Beijing",
    dateOfBirth: "02/06/1994",
  },
  {
    nameAndLastname: "User 15",
    status: "INACTIVE",
    gender: "MALE",
    score: 89,
    personalNumber: 9876543216,
    email: "user15@example.com",
    phoneNumber: 987654327,
    address: "Dubai",
    dateOfBirth: "09/07/1993",
  },
  {
    nameAndLastname: "User 16",
    status: "ACTIVE",
    gender: "FEMALE",
    score: 72,
    personalNumber: 12345678907,
    email: "user16@example.com",
    phoneNumber: 123456795,
    address: "Istanbul",
    dateOfBirth: "04/04/1998",
  },
  {
    nameAndLastname: "User 17",
    status: "ACTIVE",
    gender: "MALE",
    score: 93,
    personalNumber: 9876543217,
    email: "user17@example.com",
    phoneNumber: 987654328,
    address: "Shanghai",
    dateOfBirth: "05/12/1996",
  },
  {
    nameAndLastname: "User 18",
    status: "INACTIVE",
    gender: "FEMALE",
    score: 71,
    personalNumber: 12345678908,
    email: "user18@example.com",
    phoneNumber: 123456796,
    address: "Singapore",
    dateOfBirth: "03/08/1984",
  },
  {
    nameAndLastname: "User 19",
    status: "INACTIVE",
    gender: "MALE",
    score: 86,
    personalNumber: 9876543218,
    email: "user19@example.com",
    phoneNumber: 123456796,
    address: "Singapore",
    dateOfBirth: "03/11/1964",
  },
  {
    nameAndLastname: "User 20",
    status: "ACTIVE",
    gender: "MALE",
    score: 97,
    personalNumber: 98765432185,
    email: "user20@example.com",
    phoneNumber: 123456796,
    address: "Georgia",
    dateOfBirth: "03/11/1964",
  },
  {
    nameAndLastname: "User 21",
    status: "ACTIVE",
    gender: "MALE",
    score: 55,
    personalNumber: 98765432185,
    email: "user21@example.com",
    phoneNumber: 123456796,
    address: "Rome",
    dateOfBirth: "03/11/1964",
  },
  {
    nameAndLastname: "User 22",
    status: "INACTIVE",
    gender: "FEMALE",
    score: 56,
    personalNumber: 98765432185,
    email: "user22@example.com",
    phoneNumber: 123456796,
    address: "Dubai",
    dateOfBirth: "03/11/1964",
  },
  {
    nameAndLastname: "User 23",
    status: "INACTIVE",
    gender: "MALE",
    score: 89,
    personalNumber: 98765432185,
    email: "user23@example.com",
    phoneNumber: 123456796,
    address: "Istanbul",
    dateOfBirth: "03/11/1964",
  },
  {
    nameAndLastname: "User 24",
    status: "INACTIVE",
    gender: "FEMALE",
    score: 81,
    personalNumber: 98765432185,
    email: "user24@example.com",
    phoneNumber: 123456796,
    address: "Moscow",
    dateOfBirth: "03/11/1964",
  },
  {
    nameAndLastname: "User 25",
    status: "INACTIVE",
    gender: "MALE",
    score: 67,
    personalNumber: 98765432185,
    email: "user25@example.com",
    phoneNumber: 123456796,
    address: "Beijing",
    dateOfBirth: "03/11/1964",
  },
];

export default users;
