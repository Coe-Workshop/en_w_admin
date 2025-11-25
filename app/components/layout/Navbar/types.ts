interface BlogProps {
    Cover: string;
    Title: string;
    Url: string;
}

interface AdminProps {
    ProFile: string;
    Title: string;
    Name: string;
    Email: string;
    Icon:string;
}
interface MenuMapProps {
    title: string;
    path: string;
}

interface navSlideProps {
    menuMapPropsList: MenuMapProps[];
    onClose: () => void;
}