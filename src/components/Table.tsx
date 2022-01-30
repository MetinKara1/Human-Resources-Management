import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import TablePagination from './TablePagination';

import '../styles/style.less';

const styles: any = {
  table: {
    fontFamily: 'arial, sans-serif',
    borderCollapse: 'collapse',
    width: '100%'
  }
};

interface Props {
  renderRow: any;
  entries: any;
  header: any;
  classes: any;
  placeholder: string;
  textfilterOptions: any;
  pageLimit: number;
}

const Table = (props: Props) => {
  const { renderRow, entries, header, classes, placeholder = '', textfilterOptions = [], pageLimit = 10 } = props;
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);

  const doesIncludeEntry = (entry: any) => {
    return filter.length > 0 ? textfilterOptions.filter((option: any) => entry[option].toLowerCase().includes(filter.toLowerCase())).length > 0 : true;
  };

  const getPaginatedEntries = (entries: any) => {
    const offset = page * pageLimit;
    return entries.slice(offset, offset + pageLimit);
  }

  const getFilteredEntries = () => {
    const data = entries.filter((entry: any) => doesIncludeEntry(entry));
    return data;
  }

  const renderEntries = () => {
    return getPaginatedEntries(getFilteredEntries());
  }
  return (
    <div>
      <SearchBar 
        setValue={setFilter}
        placeholder={placeholder}
      />
      {/* className={classes.table} */}
      <table className='.main'>
        {header}
        {renderEntries().map((entry: any) => {
          return renderRow(entry)})}
      </table>
      {/* <TablePagination 
        pageLimit={pageLimit}
        pages={getFilteredEntries().length}
        currentPage={page}
        setPage={setPage}
      /> */}
    </div>
  )
}

export default withStyles(styles)(Table);