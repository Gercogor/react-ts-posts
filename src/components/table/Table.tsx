import React, { useState } from 'react'
import TableDataRow from './tableDataRow/TableDataRow';
import styles from './Table.module.css'
import { AppDispatch, ITable } from '../../typesAndInterfaces';
import { useDispatch } from 'react-redux';
import { setSort } from '../../store/postsReducer';

const Table: React.FC<ITable> = ({ data }) => {
    const dispatch: AppDispatch = useDispatch();

    const [[sortBy, direction], setSortBy] = useState(['id', false])

    const sorting: (elem: string, direction?: boolean) => void = (elem) => {
        if (elem === sortBy) {
            setSortBy([elem, !direction])
            dispatch(setSort(elem, !direction))
        } else {
            setSortBy([elem, false]);
            dispatch(setSort(elem, false))
        }

    }

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead className={styles.tableHeader}>
                    <tr className={styles.tableRow}>

                        <th
                            className={styles.firstCellWidth}
                            onClick={() => sorting('id')}
                        >
                            ID
                            <i className={sortBy === 'id' ? styles.arrowDown : styles.arrowUp}></i>
                        </th>

                        <th
                            className={styles.secondCellWidth}
                            onClick={() => sorting('title')}
                        >
                            Заголовок
                            <i className={sortBy === 'title' ? styles.arrowDown : styles.arrowUp}></i>
                        </th>

                        <th
                            className={styles.thirdCellWidth}
                            onClick={() => sorting('body')}
                        >
                            Описание
                            <i className={sortBy === 'body' ? styles.arrowDown : styles.arrowUp}></i>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((elem) =>
                            <TableDataRow key={elem.id} postId={elem.id} title={elem.title} body={elem.body} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;