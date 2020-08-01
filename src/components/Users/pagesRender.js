import React, {useState} from "react";
import s from "./users.module.css";

const PagesRender = (props) => {
    const {currentPage, pageSize, totalUsersCount, onPageChanged} = props;
    const [pages]=useState([])
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            {
                 pages.map(p => {
                    return <span className={currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })
            }
        </div>
}

        export default PagesRender