import { NavLink, Slide, TimelineEvent, Department, Facility, Sport, Achievement, GalleryImage, ContactInfo } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Facilities", href: "#facilities" },
  { label: "Sports", href: "#sports" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const heroSlides: Slide[] = [
  {
    image: "/images/campus-22.jpg",
    title: "Cadet College Pishin",
    subtitle: "Shaping Future Leaders Since 2011",
  },
  {
    image: "/images/parade-ground.jpg",
    title: "Excellence in Education",
    subtitle: "Academic Rigor & Character Building",
  },
  {
    image: "/images/sports-complex.jpg",
    title: "Sports & Co-Curricular",
    subtitle: "Developing Well-Rounded Individuals",
  },
];

export const timelineEvents: TimelineEvent[] = [
  { year: "2011", title: "Establishment", description: "Cadet College Pishin was established in 2011 to provide quality education to the youth of Balochistan." },
  { year: "2012", title: "First Batch", description: "The first batch of cadets was inducted, marking the beginning of a new era in education." },
  { year: "2014", title: "First Passing Out", description: "The first batch of cadets passed out, setting a high standard for future generations." },
  { year: "2016", title: "Expansion", description: "The college expanded its facilities, adding new academic blocks and hostels." },
  { year: "2018", title: "Sports Complex", description: "A state-of-the-art sports complex was inaugurated to promote physical fitness." },
  { year: "2020", title: "Digital Learning", description: "Introduction of digital learning platforms and smart classrooms." },
  { year: "2023", title: "10th Anniversary", description: "Celebrated 10 years of excellence with a grand ceremony and alumni reunion." },
];

export const departments: Department[] = [
  { name: "Science", description: "Physics, Chemistry, Biology with modern labs", icon: "FlaskConical" },
  { name: "Mathematics", description: "Advanced mathematics and computational thinking", icon: "Calculator" },
  { name: "Computer Science", description: "Programming, AI, and digital literacy", icon: "Monitor" },
  { name: "English", description: "Literature, grammar, and communication skills", icon: "BookOpen" },
  { name: "Urdu", description: "Urdu literature, poetry, and composition", icon: "PenTool" },
  { name: "Islamiat", description: "Islamic studies and moral education", icon: "Moon" },
  { name: "Pakistan Studies", description: "History, geography, and civics", icon: "Map" },
  { name: "Physical Training", description: "Drill, sports, and physical fitness", icon: "Dumbbell" },
];

export const facilities: Facility[] = [
  { name: "Academic Block", description: "Spacious classrooms with modern teaching aids", image: "/images/academic-block.jpg" },
  { name: "Science Laboratories", description: "Well-equipped physics, chemistry, and biology labs", image: "/images/science-lab.jpg" },
  { name: "Computer Lab", description: "High-speed internet and latest software", image: "/images/computer-lab.jpg" },
  { name: "Library", description: "Thousands of books, journals, and digital resources", image: "/images/library.jpg" },
  { name: "Hostels", description: "Comfortable boarding with 24/7 security", image: "/images/hostel.jpg" },
  { name: "Mess Hall", description: "Nutritious meals prepared under strict hygiene", image: "/images/mess.jpg" },
  { name: "Medical Dispensary", description: "Qualified medical staff and ambulance service", image: "/images/dispensary.jpg" },
  { name: "Sports Complex", description: "Indoor and outdoor sports facilities", image: "/images/sports-complex.jpg" },
];

export const sports: Sport[] = [
  { name: "Football", description: "Professional coaching and regular tournaments", image: "/images/football.jpg" },
  { name: "Cricket", description: "Net practice and inter-college matches", image: "/images/cricket.jpg" },
  { name: "Hockey", description: "Field hockey with expert trainers", image: "/images/hockey.jpg" },
  { name: "Athletics", description: "Track and field events training", image: "/images/athletics.jpg" },
  { name: "Basketball", description: "Indoor and outdoor courts", image: "/images/basketball.jpg" },
  { name: "Swimming", description: "Olympic-size swimming pool", image: "/images/swimming.jpg" },
  { name: "Tennis", description: "Professional tennis courts", image: "/images/tennis.jpg" },
  { name: "Gymnastics", description: "Indoor gymnasium with equipment", image: "/images/gymnastics.jpg" },
];

export const achievements: Achievement[] = [
  { title: "Best Cadet College Award", year: "2023", description: "Recognized as the best cadet college in Balochistan province." },
  { title: "100% Matric Results", year: "2022", description: "All cadets secured A+ grades in matriculation examinations." },
  { title: "Inter-College Sports Champions", year: "2023", description: "Won the overall championship in inter-cadet college sports." },
  { title: "Debate Competition Winners", year: "2022", description: "First place in national level debate competition." },
  { title: "Science Fair Gold Medal", year: "2021", description: "Gold medal at the National Science Fair." },
  { title: "Best Discipline Award", year: "2023", description: "Awarded for maintaining the highest standards of discipline." },
];

export const galleryImages: GalleryImage[] = [
  { src: "/images/campus-22.jpg", caption: "Main Campus Building", category: "Campus" },
  { src: "/images/parade-ground.jpg", caption: "Parade Ground", category: "Campus" },
  { src: "/images/cadets-group.webp", caption: "Cadets Group Photo", category: "Cadets" },
  { src: "/images/academic-block.jpg", caption: "Academic Block", category: "Campus" },
  { src: "/images/science-lab.jpg", caption: "Science Laboratory", category: "Facilities" },
  { src: "/images/computer-lab.jpg", caption: "Computer Lab", category: "Facilities" },
  { src: "/images/library.jpg", caption: "College Library", category: "Facilities" },
  { src: "/images/hostel.jpg", caption: "Cadet Hostel", category: "Facilities" },
  { src: "/images/mess.jpg", caption: "Dining Hall", category: "Facilities" },
  { src: "/images/sports-complex.jpg", caption: "Sports Complex", category: "Sports" },
  { src: "/images/football.jpg", caption: "Football Match", category: "Sports" },
  { src: "/images/cricket.jpg", caption: "Cricket Practice", category: "Sports" },
  { src: "/images/athletics.jpg", caption: "Athletics Event", category: "Sports" },
  { src: "/images/award-ceremony.jpg", caption: "Award Ceremony", category: "Events" },
  { src: "/images/parents-day.jpg", caption: "Parents Day", category: "Events" },
  { src: "/images/commandant-address.jpg", caption: "Commandant Address", category: "Events" },
];

export const contactInfo: ContactInfo[] = [
  { label: "Address", value: "Cadet College Pishin, Main Campus Road, Pishin, Balochistan, Pakistan", icon: "MapPin" },
  { label: "Phone", value: "+92-826-410123", icon: "Phone" },
  { label: "Email", value: "info@ccpn.edu.pk", icon: "Mail" },
  { label: "Website", value: "www.ccpn.edu.pk", icon: "Globe" },
];
