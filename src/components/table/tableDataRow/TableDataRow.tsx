import React from 'react';
import { TableDataRowProps } from '../../../typesAndInterfaces';
import styles from './TableDataRow.module.css'

const TableDataRow: React.FC<TableDataRowProps> = ({ postId, title, body }) => {
  return (
        <tr className={styles.tableRow}>
          <td className={styles.tableCell}>{postId}</td>
          <td className={`${styles.tableCell} ${styles.textInCell}`}>{title}</td>
          <td className={`${styles.tableCell} ${styles.textInCell}`}>{body}</td>
        </tr>
      )
}

export default TableDataRow;