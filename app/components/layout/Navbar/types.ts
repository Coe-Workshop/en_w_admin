interface BlogProps {
  cover: string;
  title: string;
  url: string;
}

interface AdminProps {
  profile: string;
  title: string;
  name: string;
  email: string;
  icon: string;
}
interface MenuMapProps {
  title: string;
  path: string;
}

interface navSlideProps {
  menuMapPropsList: MenuMapProps[];
  onClose: () => void;
}
