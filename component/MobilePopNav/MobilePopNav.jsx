import React from 'react'
import { useState } from 'react';
import styles from './MobilePopNav.module.css'
function MobilePopNav({ onClick, updatePortal, updateFilter }) {
    return (
        <>
            <div className={styles.popup}>
                <div className={styles.close} onClick={onClick}>
                    X
                </div>
                <div className={styles.vnav}>
                    <div onClick={() => { updatePortal('Products'); updateFilter('men') }}>
                        <p>Men</p>
                    </div>
                    <div onClick={() => { updatePortal('Products'); updateFilter('women') }}>
                        <p >Women</p>
                    </div>
                </div>
            </div>
        </>)
}

export default MobilePopNav
