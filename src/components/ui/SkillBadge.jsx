import { Cpu } from 'lucide-react';
import { FaJava } from 'react-icons/fa';
import {
  SiAndroidstudio,
  SiExpress,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';

const skillIcons = {
  'Speech AI': SiOpenai,
  'Prompt Engineering': SiOpenai,
  'Claude AI': Cpu,
  ChatGPT: SiOpenai,
  'React.js': SiReact,
  JavaScript: SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  Redux: SiRedux,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Python: SiPython,
  MongoDB: SiMongodb,
  'Google Cloud Platform': SiGooglecloud,
  'Cloud Functions': SiGooglecloud,
  'Compute Engine': SiGooglecloud,
  Java: FaJava,
  'Android Studio': SiAndroidstudio,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  Git: SiGit,
};

export function SkillBadge({ children }) {
  const Icon = skillIcons[children] || Cpu;

  return (
    <span className="skill-badge">
      <Icon className="skill-icon" aria-hidden="true" />
      {children}
    </span>
  );
}
