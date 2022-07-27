import React from 'react'
import styles from './style.module.css'
import { FaSearch } from "react-icons/fa";
function Search() {
    return (
        <div className="d-flex d-flex p-3">
            <div className="input-group justify-content-center">
                <div className="form-outline">
                    <input className={`form-control ${styles.input}`} id="exampleDataList" placeholder="Type to search..." />
                </div>
                <button type="button" className={`btn btn-primary ${styles.searchBtn}`}>
                    <FaSearch />
                </button>
            </div>
        </div>
    )
}

export default Search