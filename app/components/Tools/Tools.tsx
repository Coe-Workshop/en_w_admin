"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Tools.module.scss";
import { Pagination } from "@mantine/core";
import "./pagination.css";
import CategoryFilter from "@/app/components/filters/CategoryFilter/CategoryFilter";
import SearchBar from "@/app/components/filters/SerchBar/SerchBar";

function ToolsAction({
                            Url,
                            Title,
                            Description,
                            Available,
                            Quatity,
                        }: ToolsMatches) {
    return (
        <div className={styles.column_layout}>
            <div className={styles.box_products}>
                <Image
                    src={Url}
                    alt={Title}
                    width={80}
                    height={80}
                    className={styles.img}
                />
                <div className={styles.tab}>
                    <div className={styles.details}>
                        <h2>{Title}</h2>
                        <p>{Description}</p>
                    </div>
                    <Image
                        src={"/Tools/operator.svg"}
                        alt={"tool"}
                        width={30}
                        height={30}
                        className={styles.operator}
                    />
                </div>
            </div>
            <div className={styles.stoke}>
                <h3>{Available}</h3>
                <h4>/ {Quatity}</h4>
            </div>
        </div>
    );
}

function Tools() {
    const [tools, setTools] = useState<ToolsMatches[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchItem, setSearchItem] = useState<string>("");
    const itemPerPage = 15;
    const filterTools = tools.filter((tool) => {
        const matchCategory = selectedCategory
            ? tool.category === selectedCategory
            : true;

        const matchSearch = searchItem
            ? tool.title.toLowerCase().includes(searchItem.toLowerCase())
            : true;

        return matchCategory && matchSearch;
    });
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = filterTools.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filterTools.length / itemPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleCategoryChange = (category: string | null) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleSearch = (term: string) => {
        setSearchItem(term);
        setCurrentPage(1);
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setTools(data));
    }, []);
    return (
        <div>
            <div className={styles.title_banner}>
                <div className={styles.title_layout}>
                    <h1>Tools List</h1>
                </div>
                <div className={styles.filters}>
                    <SearchBar
                        onSearch={handleSearch}
                        placeholder="Search by name ..."
                    />
                    <CategoryFilter onCategoryChange={handleCategoryChange} />
                </div>
            </div>
            <div className={styles.box}>
                {currentItems.map((item, id) => (
                    <ToolsAction
                        key={id}
                        Url={item.image}
                        Title={item.category}
                        Description={item.title}
                        Available={item.rating?.count - 1 || 0} //ค่อยแก้ตอนดึงข้อมูล
                        Quatity={item.rating?.count || 0}
                    ></ToolsAction>
                ))}
            </div>
            {totalPages > 1 && (
                <div className="pagination-wrapper">
                    <Pagination
                        total={totalPages}
                        value={currentPage}
                        onChange={handlePageChange}
                        withControls={false}
                        siblings={1}
                        boundaries={1}
                    />
                </div>
            )}
        </div>
    );
}
export default Tools;