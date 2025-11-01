export interface Order {
  id: string;
  user: {
    name: string;
    avatar: string; // Path to avatar image
  };
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

export const ordersData: Order[] = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "/NataliCraig.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "/KateMorrison.png",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: "/DrewCano.png",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "/OrlandoDiggs.png",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: "/AndiLane.png",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: {
      name: "Koray Okumus",
      avatar: "/KorayOkumus.png",
    },
    project: "Online Store",
    address: "Sunset Boulevard LA",
    date: "Feb 3, 2023",
    status: "Complete",
  },
  {
    id: "#CM9807",
    user: {
      name: "Natali Craig",
      avatar: "/NataliCraig.png",
    },
    project: "Portfolio Website",
    address: "Main Street Boston",
    date: "Feb 4, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9808",
    user: {
      name: "Drew Cano",
      avatar: "/DrewCano.png",
    },
    project: "E-commerce Platform",
    address: "Park Avenue NYC",
    date: "Feb 5, 2023",
    status: "Pending",
  },
  {
    id: "#CM9809",
    user: {
      name: "Kate Morrison",
      avatar: "/KateMorrison.png",
    },
    project: "Mobile App Design",
    address: "Ocean Drive Miami",
    date: "Feb 6, 2023",
    status: "Approved",
  },
  {
    id: "#CM9810",
    user: {
      name: "Orlando Diggs",
      avatar: "/OrlandoDiggs.png",
    },
    project: "Dashboard Redesign",
    address: "Harbor Street Seattle",
    date: "Feb 7, 2023",
    status: "Complete",
  },
  {
    id: "#CM9811",
    user: {
      name: "Andi Lane",
      avatar: "/AndiLane.png",
    },
    project: "Blog Platform",
    address: "River Road Portland",
    date: "Feb 8, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9812",
    user: {
      name: "Koray Okumus",
      avatar: "/KorayOkumus.png",
    },
    project: "Social Network",
    address: "Beach Road San Diego",
    date: "Feb 9, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9813",
    user: {
      name: "Natali Craig",
      avatar: "/NataliCraig.png",
    },
    project: "Analytics Dashboard",
    address: "Mountain View CA",
    date: "Feb 10, 2023",
    status: "Complete",
  },
  {
    id: "#CM9814",
    user: {
      name: "Drew Cano",
      avatar: "/DrewCano.png",
    },
    project: "Marketing Website",
    address: "Valley Street Phoenix",
    date: "Feb 11, 2023",
    status: "Pending",
  },
  {
    id: "#CM9815",
    user: {
      name: "Kate Morrison",
      avatar: "/KateMorrison.png",
    },
    project: "SaaS Platform",
    address: "Tech Park Austin",
    date: "Feb 12, 2023",
    status: "Approved",
  },
  {
    id: "#CM9816",
    user: {
      name: "Orlando Diggs",
      avatar: "/OrlandoDiggs.png",
    },
    project: "Booking System",
    address: "Downtown Denver",
    date: "Feb 13, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9817",
    user: {
      name: "Andi Lane",
      avatar: "/AndiLane.png",
    },
    project: "Learning Platform",
    address: "Campus Drive Chicago",
    date: "Feb 14, 2023",
    status: "Complete",
  },
  {
    id: "#CM9818",
    user: {
      name: "Koray Okumus",
      avatar: "/KorayOkumus.png",
    },
    project: "Finance App",
    address: "Wall Street NYC",
    date: "Feb 15, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9819",
    user: {
      name: "Natali Craig",
      avatar: "/NataliCraig.png",
    },
    project: "Health Tracker",
    address: "Medical Center Houston",
    date: "Feb 16, 2023",
    status: "Pending",
  },
  {
    id: "#CM9820",
    user: {
      name: "Drew Cano",
      avatar: "/DrewCano.png",
    },
    project: "Travel Booking",
    address: "Airport Road Dallas",
    date: "Feb 17, 2023",
    status: "Approved",
  },
];

