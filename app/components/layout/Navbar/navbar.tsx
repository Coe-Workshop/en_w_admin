"use client";

import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import useDisclosure from "@/app/hook/useDisclosure";
import ModalContainer from "../../ModalContainer/modalContainer";
import NavSlide from "./Navslide";

function Blog({ Cover, Title, Url }: BlogProps) {
  return (
    <div className={styles.button_list}>
      <Image
        className={styles.blog_image}
        src={Cover}
        width={22}
        height={22}
        alt={Title}
      ></Image>
      <Link href={Url}>{Title}</Link>
    </div>
  );
}

function Navbar() {
  const { opened, handle } = useDisclosure();
  const menuMapProps: MenuMapProps[] = [
    { title: "Quick Create", path: "/create" },
    { title: "Transaction", path: "/transaction" },
    { title: "Tools", path: "/tools" },
  ];
  const BlogList: BlogProps[] = [
    {
      Cover: "/Navbar/transaction.svg",
      Title: "Transaction",
      Url: "/transaction",
    },
    {
      Cover: "/Navbar/tools.svg",
      Title: "Tools",
      Url: "/tools",
    },
    {
      Cover: "/Navbar/account.svg",
      Title: "Account ManageMent",
      Url: "/account",
    },
  ];

  const Admin: AdminProps = {
    ProFile: "/Navbar/admin.svg",
    Title: "Admin",
    Name: "username",
    Email: "Email@example.com",
    Icon: "/Navbar/meatBalls.svg",
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_inner}>
        <div>
          <div className={styles.logo}>
            <p className={styles.logo_mark}>EN</p>
            <p className={styles.logo_dot}>.W</p>
            <p className={styles.logo_status}>Admin</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.button}>
            <Image
              className={styles.action_plus}
              width={22}
              height={22}
              alt="plus_icon"
              src={"/Navbar/plus.svg"}
            ></Image>
            <p className={styles.text}>Quick Create</p>
          </div>
          <Image
            onClick={() => handle.open()}
            className={styles.action_hamberger}
            width={120}
            height={120}
            alt="hamberger_icon"
            src={"/Navbar/hamberger.svg"}
          ></Image>
          {BlogList.map((item, index) => (
            <Blog
              key={index}
              Cover={item.Cover}
              Title={item.Title}
              Url={item.Url}
            ></Blog>
          ))}
        </div>
      </div>
      <div className={styles.tab_admin}>
        <div className={styles.admin}>
          <Image
            className={styles.blog_icon}
            src={Admin.ProFile}
            width={40}
            height={40}
            alt={Admin.Title}
          ></Image>
          <div>
            <p className={styles.name}>{Admin.Name}</p>
            <p className={styles.email}>{Admin.Email}</p>
          </div>
        </div>
        <Image
          className={styles.blog_icon}
          src={Admin.Icon}
          width={20}
          height={20}
          alt={Admin.Title}
        ></Image>
      </div>
      <ModalContainer opened={opened} onClose={handle.close}>
        <NavSlide
          menuMapPropsList={menuMapProps}
          onClose={handle.close}
        ></NavSlide>
      </ModalContainer>
    </div>
  );
}

export default Navbar;
