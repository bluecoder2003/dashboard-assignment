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
  {
    id: "#CM9821",
    user: {
      name: "Natali Craig",
      avatar: "/NataliCraig.png",
    },
    project: "Music Streaming App",
    address: "Broadway New York",
    date: "Feb 18, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9822",
    user: {
      name: "Kate Morrison",
      avatar: "/KateMorrison.png",
    },
    project: "Fitness Tracker",
    address: "Beach Avenue Miami",
    date: "Feb 19, 2023",
    status: "Complete",
  },
  {
    id: "#CM9823",
    user: {
      name: "Orlando Diggs",
      avatar: "/OrlandoDiggs.png",
    },
    project: "Recipe App",
    address: "Food Street Chicago",
    date: "Feb 20, 2023",
    status: "Pending",
  },
  {
    id: "#CM9824",
    user: {
      name: "Andi Lane",
      avatar: "/AndiLane.png",
    },
    project: "Photo Gallery",
    address: "Art District LA",
    date: "Feb 21, 2023",
    status: "Approved",
  },
  {
    id: "#CM9825",
    user: {
      name: "Koray Okumus",
      avatar: "/KorayOkumus.png",
    },
    project: "Weather Dashboard",
    address: "Climate Center Boston",
    date: "Feb 22, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9826",
    user: {
      name: "Drew Cano",
      avatar: "/DrewCano.png",
    },
    project: "Task Manager",
    address: "Productivity Lane",
    date: "Feb 23, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9827",
    user: {
      name: "Natali Craig",
      avatar: "/NataliCraig.png",
    },
    project: "Video Platform",
    address: "Media Street Seattle",
    date: "Feb 24, 2023",
    status: "Complete",
  },
  {
    id: "#CM9828",
    user: {
      name: "Kate Morrison",
      avatar: "/KateMorrison.png",
    },
    project: "News Portal",
    address: "Press Avenue DC",
    date: "Feb 25, 2023",
    status: "Pending",
  },
  {
    id: "#CM9829",
    user: {
      name: "Orlando Diggs",
      avatar: "/OrlandoDiggs.png",
    },
    project: "Gaming Platform",
    address: "Gamer Street Austin",
    date: "Feb 26, 2023",
    status: "Approved",
  },
  {
    id: "#CM9830",
    user: {
      name: "Andi Lane",
      avatar: "/AndiLane.png",
    },
    project: "Real Estate Site",
    address: "Property Lane Miami",
    date: "Feb 27, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9831",
    user: {
      name: "Koray Okumus",
      avatar: "/KorayOkumus.png",
    },
    project: "Food Delivery App",
    address: "Restaurant Row NYC",
    date: "Feb 28, 2023",
    status: "Complete",
  },
  {
    id: "#CM9832",
    user: {
      name: "Drew Cano",
      avatar: "/DrewCano.png",
    },
    project: "Banking App",
    address: "Finance District SF",
    date: "Mar 1, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9833",
    user: {
      name: "Natali Craig",
      avatar: "/NataliCraig.png",
    },
    project: "Medical Portal",
    address: "Health Center Houston",
    date: "Mar 2, 2023",
    status: "Pending",
  },
  {
    id: "#CM9834",
    user: {
      name: "Kate Morrison",
      avatar: "/KateMorrison.png",
    },
    project: "Education Platform",
    address: "Campus Drive Boston",
    date: "Mar 3, 2023",
    status: "Approved",
  },
  {
    id: "#CM9835",
    user: {
      name: "Orlando Diggs",
      avatar: "/OrlandoDiggs.png",
    },
    project: "Fashion Store",
    address: "Style Avenue NYC",
    date: "Mar 4, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9836",
    user: {
      name: "Andi Lane",
      avatar: "/AndiLane.png",
    },
    project: "Car Rental App",
    address: "Auto Street LA",
    date: "Mar 5, 2023",
    status: "Complete",
  },
  {
    id: "#CM9837",
    user: {
      name: "Koray Okumus",
      avatar: "/KorayOkumus.png",
    },
    project: "Pet Care Platform",
    address: "Animal Lane Seattle",
    date: "Mar 6, 2023",
    status: "Pending",
  },
  {
    id: "#CM9838",
    user: {
      name: "Drew Cano",
      avatar: "/DrewCano.png",
    },
    project: "Event Management",
    address: "Convention Center",
    date: "Mar 7, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9839",
    user: {
      name: "Natali Craig",
      avatar: "/NataliCraig.png",
    },
    project: "Art Marketplace",
    address: "Gallery District",
    date: "Mar 8, 2023",
    status: "Approved",
  },
  {
    id: "#CM9840",
    user: {
      name: "Kate Morrison",
      avatar: "/KateMorrison.png",
    },
    project: "Hotel Booking",
    address: "Tourism Avenue",
    date: "Mar 9, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9841",
    user: {
      name: "Orlando Diggs",
      avatar: "/OrlandoDiggs.png",
    },
    project: "Grocery Delivery",
    address: "Market Street",
    date: "Mar 10, 2023",
    status: "Complete",
  },
  {
    id: "#CM9842",
    user: {
      name: "Andi Lane",
      avatar: "/AndiLane.png",
    },
    project: "Podcast Platform",
    address: "Media Hub Portland",
    date: "Mar 11, 2023",
    status: "Pending",
  },
  {
    id: "#CM9843",
    user: {
      name: "Koray Okumus",
      avatar: "/KorayOkumus.png",
    },
    project: "Freelance Marketplace",
    address: "Gig Economy Lane",
    date: "Mar 12, 2023",
    status: "Approved",
  },
  {
    id: "#CM9844",
    user: {
      name: "Drew Cano",
      avatar: "/DrewCano.png",
    },
    project: "Language Learning",
    address: "Education Center",
    date: "Mar 13, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9845",
    user: {
      name: "Natali Craig",
      avatar: "/NataliCraig.png",
    },
    project: "Stock Trading App",
    address: "Wall Street NYC",
    date: "Mar 14, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9846",
    user: {
      name: "Kate Morrison",
      avatar: "/KateMorrison.png",
    },
    project: "Interior Design App",
    address: "Design District",
    date: "Mar 15, 2023",
    status: "Complete",
  },
  {
    id: "#CM9847",
    user: {
      name: "Orlando Diggs",
      avatar: "/OrlandoDiggs.png",
    },
    project: "Sports Betting",
    address: "Stadium Avenue",
    date: "Mar 16, 2023",
    status: "Pending",
  },
  {
    id: "#CM9848",
    user: {
      name: "Andi Lane",
      avatar: "/AndiLane.png",
    },
    project: "Crypto Exchange",
    address: "Blockchain Street",
    date: "Mar 17, 2023",
    status: "Approved",
  },
  {
    id: "#CM9849",
    user: {
      name: "Koray Okumus",
      avatar: "/KorayOkumus.png",
    },
    project: "Dating App",
    address: "Romance Lane",
    date: "Mar 18, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9850",
    user: {
      name: "Drew Cano",
      avatar: "/DrewCano.png",
    },
    project: "Meditation App",
    address: "Wellness Center",
    date: "Mar 19, 2023",
    status: "Complete",
  },
];

