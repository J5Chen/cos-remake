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
                    <div>
                        <p onClick={() => { updatePortal('Products'); updateFilter('men') }}>Men</p>
                    </div>
                    <div>
                        <p onClick={() => { updatePortal('Products'); updateFilter('women') }}>Women</p>
                    </div>
                </div>
            </div>
        </>)
}

export default MobilePopNav
