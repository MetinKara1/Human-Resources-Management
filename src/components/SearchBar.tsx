import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    width:"30%", 
    background:"#F2F1F9", 
    border:"none", 
    padding:"0.5rem"
  },
  searchIcon: {
    height: 30,
    border: "none",
    cursor: "pointer"
  }
};

interface Props {
  setValue: any;
  placeholder: string;
  classes: any;
}

const SearchBar = ( props: Props ) => {
  const { setValue, placeholder, classes } = props;
  const [query, setQuery] = useState('');
  const buttonClass = classNames({
    "btn btn-secondary": true,
    [classes.searchIcon]: true
  })
  return (
    <Fragment>
      <input 
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className={classes.main}
      />
      <button className={buttonClass} type="button" onClick={() => setValue(query)}>
        <i className="fa fa-search"></i>
      </button>
    </Fragment>
  );
}

export default withStyles(styles)(SearchBar);
