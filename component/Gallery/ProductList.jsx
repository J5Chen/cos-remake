import React, { useState, useEffect } from 'react';
import galleryList from './Gallery';
import styles from './ProductList.module.css';

function ProductList({ addCart, filter, category }) {
    const [newFilter, setNewFilter] = useState(filter);
    const [newCategory, setNewCategory] = useState(category);

    useEffect(() => {
        setNewFilter(filter);
    }, [filter]);

    useEffect(() => {
        setNewCategory(category);
    }, [category]);

    return (
        <div className={styles.grid}>
            {galleryList.map((item, index) => {
                if (filter === '') {
                    console.log(newCategory)
                    if (item.category === newCategory || item.category === '') {
                        return (
                            <div className={styles.gridItem} key={index}>
                                <img className={styles.image} src={item.img} alt={`Image ${index}`} />
                                <button className={styles.button} onClick={() => addCart(item.name)}> Add </button>
                            </div>
                        );
                    } else {
                        return null;
                    }
                } else {
                    if (item.gender === newFilter || item.gender === '') {
                        return (
                            <div className={styles.gridItem} key={index}>
                                <img className={styles.image} src={item.img} alt={`Image ${index}`} />
                                <button className={styles.button} onClick={() => addCart(item.name)}> Add </button>
                            </div>
                        );
                    } else {
                        return null;
                    }
                }
            })}
        </div>
    );
}

export default ProductList;
