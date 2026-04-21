export interface NavLink {
  label: string;
  href: string;
}

export interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Department {
  name: string;
  description: string;
  icon: string;
}

export interface Facility {
  name: string;
  description: string;
  image: string;
}

export interface Sport {
  name: string;
  description: string;
  image: string;
}

export interface Achievement {
  title: string;
  year: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  caption: string;
  category: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: string;
}
