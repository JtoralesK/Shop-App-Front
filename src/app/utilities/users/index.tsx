export interface AllUserResponse {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  content: User[];
}

export type User = {
  id: number;
  name: string;
  email: string;
  bio: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  postalCode: string;
  city: string;
  active: boolean;
  gender: Gender;
  role: Role;
  createdAt: string;
  profileImgUrl: string;
};

export type FalseUser = {
  name: string;
  email: string;
  bio: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  postalCode: string;
  cityState: string;
  userId: number;
  active: boolean;
  genre: string;
  createdAt: string;
  profileImg: string;
};
export type Gender = {
  id: number;
  genderType: string;
};
export type Role = {
  id: number;
  roleType: string;
};
export const usersArray: FalseUser[] = [
  {
    name: "John",
    email: "john@example.com",
    bio: "Lorem ipsum dolor sit amet.",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    country: "USA",
    postalCode: "12345",
    cityState: "New York",
    userId: 1,
    active: true,
    genre: "Male",
    createdAt: "2023-12-01",
    profileImg: "/johnProfile.webp",
  },
  {
    name: "Alice",
    email: "alice@example.com",
    bio: "Sed ut perspiciatis unde omnis iste natus error.",
    lastName: "Smith",
    phoneNumber: "987-654-3210",
    country: "Canada",
    postalCode: "A1B2C3",
    cityState: "Toronto",
    userId: 2,
    active: true,
    genre: "Female",
    createdAt: "2023-11-15",
    profileImg: "/aliceProfile.jpeg",
  },
  {
    name: "Emma",
    email: "emma@example.com",
    bio: "Voluptatem accusantium doloremque laudantium.",
    lastName: "Johnson",
    phoneNumber: "555-123-4567",
    country: "UK",
    postalCode: "WC1X 0AA",
    cityState: "London",
    userId: 3,
    active: true,
    genre: "Female",
    createdAt: "2023-10-20",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Michael",
    email: "michael@example.com",
    bio: "Excepteur sint occaecat cupidatat non proident.",
    lastName: "Williams",
    phoneNumber: "333-987-6543",
    country: "Australia",
    postalCode: "3000",
    cityState: "Melbourne",
    userId: 4,
    active: true,
    genre: "Male",
    createdAt: "2023-09-05",
    profileImg: "/michaelProfile.webp",
  },
  {
    name: "Sophia",
    email: "sophia@example.com",
    bio: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    lastName: "Brown",
    phoneNumber: "555-987-6543",
    country: "France",
    postalCode: "75001",
    cityState: "Paris",
    userId: 5,
    active: true,
    genre: "Female",
    createdAt: "2023-10-10",
    profileImg: "/sofiaPicture.jpg",
  },
  {
    name: "Daniel",
    email: "daniel@example.com",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    lastName: "Johnson",
    phoneNumber: "111-222-3333",
    country: "Germany",
    postalCode: "10115",
    cityState: "Berlin",
    userId: 6,
    active: true,
    genre: "Male",
    createdAt: "2023-09-25",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Ethan",
    email: "ethan@example.com",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    lastName: "Anderson",
    phoneNumber: "555-123-4567",
    country: "Spain",
    postalCode: "28001",
    cityState: "Madrid",
    userId: 7,
    active: true,
    genre: "Male",
    createdAt: "2023-10-20",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Olivia",
    email: "olivia@example.com",
    bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    lastName: "Garcia",
    phoneNumber: "333-987-6543",
    country: "Italy",
    postalCode: "00184",
    cityState: "Rome",
    userId: 8,
    active: true,
    genre: "Female",
    createdAt: "2023-09-05",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Sophia",
    email: "sophia@example.com",
    bio: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
    lastName: "Martinez",
    phoneNumber: "555-123-4567",
    country: "Spain",
    postalCode: "28001",
    cityState: "Madrid",
    userId: 9,
    active: true,
    genre: "Female",
    createdAt: "2023-08-15",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Liam",
    email: "liam@example.com",
    bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.",
    lastName: "Johnson",
    phoneNumber: "444-567-8901",
    country: "United States",
    postalCode: "10001",
    cityState: "New York",
    userId: 10,
    active: true,
    genre: "Male",
    createdAt: "2023-07-20",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Ava",
    email: "ava@example.com",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    lastName: "Brown",
    phoneNumber: "777-333-2222",
    country: "United Kingdom",
    postalCode: "WC2N",
    cityState: "London",
    userId: 11,
    active: true,
    genre: "Female",
    createdAt: "2023-06-10",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Noah",
    email: "noah@example.com",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    lastName: "Smith",
    phoneNumber: "888-999-0000",
    country: "Canada",
    postalCode: "M5H",
    cityState: "Toronto",
    userId: 12,
    active: true,
    genre: "Male",
    createdAt: "2023-05-01",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Noah",
    email: "noah@example.com",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    lastName: "Smith",
    phoneNumber: "888-999-0000",
    country: "Canada",
    postalCode: "M5H",
    cityState: "Toronto",
    userId: 13,
    active: true,
    genre: "Male",
    createdAt: "2023-05-01",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Noah",
    email: "noah@example.com",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    lastName: "Smith",
    phoneNumber: "888-999-0000",
    country: "Canada",
    postalCode: "M5H",
    cityState: "Toronto",
    userId: 14,
    active: true,
    genre: "Male",
    createdAt: "2023-05-01",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Noah",
    email: "noah@example.com",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    lastName: "Smith",
    phoneNumber: "888-999-0000",
    country: "Canada",
    postalCode: "M5H",
    cityState: "Toronto",
    userId: 15,
    active: true,
    genre: "Male",
    createdAt: "2023-05-01",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Noah",
    email: "noah@example.com",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    lastName: "Smith",
    phoneNumber: "888-999-0000",
    country: "Canada",
    postalCode: "M5H",
    cityState: "Toronto",
    userId: 16,
    active: true,
    genre: "Male",
    createdAt: "2023-05-01",
    profileImg: "/emaProfile.webp",
  },
  {
    name: "Noah",
    email: "noah@example.com",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    lastName: "Smith",
    phoneNumber: "888-999-0000",
    country: "Canada",
    postalCode: "M5H",
    cityState: "Toronto",
    userId: 17,
    active: true,
    genre: "Male",
    createdAt: "2023-05-01",
    profileImg: "/emaProfile.webp",
  },
];
