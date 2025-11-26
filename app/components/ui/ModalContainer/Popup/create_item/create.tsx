"use client";
import styles from "./create.module.scss"
import {useState} from "react";
import {Category, crateProps} from "./types";

function CreateItem() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState<Category | "">("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const newItem: crateProps = {
            name,
            description,
            category,
            image: ""
        };

        try {
            console.log("Submitting:", newItem);
            setName("");
            setDescription("");
            setCategory(Category.DevelopmentBoard);
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <div>
                    <h2>Loan Request</h2>
                    <p>or data, and a data table for managing project sections.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Item name"
                            required
                            disabled={submitting}
                        />
                    </div>

                    <div>
                        <label htmlFor="Description">Description</label>
                        <input
                            id="Description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Item name"
                            required
                            disabled={submitting}
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value as Category)}
                            disabled={submitting}
                            required
                        >
                            <option value="" disabled>
                                Select Category
                            </option>
                            {Object.values(Category).map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat.replace("_", " ")}
                                </option>
                            ))}
                        </select>
                    </div>


                    <button
                        type="submit"
                        disabled={submitting}
                    >
                        {submitting ? 'Loading...' : 'Create'}
                    </button>
                </form>
            </div>
            <div>

            </div>
        </div>
    );
}

export default CreateItem;
