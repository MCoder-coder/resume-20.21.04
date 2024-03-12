export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "MR",
	description: "",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "CV",
      href: "/cv",
    },
    
    {
      label: "Contacto",
	  href: "mailto:jesusseep@gmail.com",
    },
    {
      label: "About",
      href: "/about",
    },
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "CV",
      href: "/cv",
    },
    {
      label: "Proyectos",
      href: "/proyectos",
    },
    {
      label: "Contacto",
      href: "mailto:jesusseep@gmail.com",
    }
	],
	links: {
    github: "https://github.com/MCoder-coder",
    linkedin: "https://www.linkedin.com/in/manuel-jesus-reeb/"
  }
  
};
