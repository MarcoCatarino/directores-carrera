// src/components/SideBar.tsx
import { Link, useLocation } from "react-router-dom";

import { HomeIcon } from "../assets/icons/sidebar/HomeIcon";
import { StudentIcon } from "../assets/icons/sidebar/StudentsIcon";
import { TeacherIcon } from "../assets/icons/sidebar/TeachersIcon";
import { GroupIcon } from "../assets/icons/sidebar/GroupsIcon";
import { SubjectIcon } from "../assets/icons/sidebar/SubjectsIcon";

export const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      path: "/",
      label: "Inicio",
      icon: <HomeIcon />,
    },
    {
      path: "/alumnos",
      label: "Alumnos",
      icon: <StudentIcon />,
    },
    {
      path: "/docentes",
      label: "Docentes",
      icon: <TeacherIcon />,
    },
    {
      path: "/grupos",
      label: "Grupos",
      icon: <GroupIcon />,
    },
    {
      path: "/materias",
      label: "Asignaturas",
      icon: <SubjectIcon />,
    },
  ];

  return (
    <nav className="w-60 bg-primary text-white font-semibold">
      <ul className="space-y-4 py-6 px-4">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`flex items-center gap-4 px-6 py-4 hover:bg-secondary hover:text-white rounded-normal ${location.pathname === link.path ? "bg-secondary text-white" : ""}`}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
