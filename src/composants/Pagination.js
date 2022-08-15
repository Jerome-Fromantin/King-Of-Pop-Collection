import React from "react"
import classNames from "classnames"
import { usePagination } from "./usePagination"
import '../styles/pagination.css'
import prevArrow from '../assets/images/PrevArrow.png'
import nextArrow from '../assets/images/NextArrow.png'

const Pagination = props => {
    const {
        totalCount,
        currentPage,
        pageSize,
        onPageChange,
        className
    } = props

    const paginationRange = usePagination({
        totalCount,
        currentPage,
        pageSize
    })

    // S'il y a moins de 2 pages dans le paginationRange, le composant n'est pas affiché, juste une phrase.
    if (currentPage === 0 || paginationRange.length < 2) {
        return (<p className="onePage">Une seule page !</p>)
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }

    const onNext = () => {
        onPageChange(currentPage + 1)
    }

    let lastPage = paginationRange[paginationRange.length - 1]
    return (
        <ul className={classNames("pagination-container", {[className]: className})}>
            {/* Flèche gauche */}
            <li className={classNames("pagination-item", {disabled: currentPage === 1})}
            onClick={onPrevious} key="prevPage">
                <img src={prevArrow} alt="Icône flèche pour page précédente" className="arrow"/>
            </li>
            {paginationRange.map(pageNumber => {
                // Numéros de pages
                return (
                    <li className={classNames("pagination-item", {selected: pageNumber === currentPage})}
                    onClick={() => onPageChange(pageNumber)} key={pageNumber}>
                        {pageNumber}
                    </li>
                )
            })}
            {/* Flèche droite */}
            <li className={classNames("pagination-item", {disabled: currentPage === lastPage})}
            onClick={onNext} key="nextPage">
                <img src={nextArrow} alt="Icône flèche pour page suivante" className="arrow"/>
            </li>
        </ul>
    )
}

export default Pagination