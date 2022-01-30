import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "../../../config/store";
import { navigate } from "../../Services/action";
import { getCandidates } from "../logic/action";
import Table from "../../../components/Table";
import { STATES_ABBR } from "../../../config/constant";

const Candidates = () => {
  const dispatch = useDispatch();

  const [genreFilter, setGenreFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("all");

  const candidates = useSelector((state) => state.candidates.candidates);

  useEffect(() => {
    dispatch(getCandidates());
  }, []);


  const generateRow = (row: any) => {
    return (
      <tr key={row.id}>
        {headerOptions.map((field: any) => (
          <>
            <td>{row[field.id]}</td>
          </>
        ))}
        <td>
          <button onClick={() => navigate("CandidateDetail", ...[`${row.id}`])}>
            Detay
          </button>
        </td>
      </tr>
    );
  };

  const headerOptions = [
    {
      id: "name",
    },
    {
      id: "username",
    },
    {
      id: "email",
      filterOptions: () =>
        renderDropdown(
          stateFilter,
          (e: any) => setStateFilter(e.target.value),
          renderStateOptions()
        ),
    },
    {
      id: "phone",
    },
    {
      id: "detay",
      filterOptions: () =>
        renderDropdown(
          genreFilter,
          (e: any) => setGenreFilter(e.target.value),
          renderGenreOptions()
        ),
      onClick: (item: any) => navigate("CandidateDetail", ...[`${item.id}`]),
    },
  ];

  const renderDropdown = (currentVal: any, changeFunc: any, options: any) => {
    return (
      <select value={currentVal} onChange={changeFunc}>
        {options.map((option: any) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    );
  };

  const renderStateOptions = () => ["all", ...STATES_ABBR];

  const renderGenreOptions = () => {
    return candidates.reduce(
      (acc: any, val: any) => {
        const genres = val.genre.split(",");
        return Array.from(new Set([...acc, ...genres]));
      },
      ["all"]
    );
  };

  const header = (
    <tr>
      {headerOptions.map((header) => (
        <th>
          {header.id}
          {/* {header.filterOptions && <div>{header.filterOptions()}</div>} */}
        </th>
      ))}
    </tr>
  );

  return (
    <form className="" style={{ margin: 100 }}>
      <h2>Candidates</h2>

      <Table
        renderRow={(row: any) => generateRow(row)}
        entries={candidates}
        header={header}
        placeholder="Search by name, username, email, phone"
        textfilterOptions={["name", "username", "email"]}
        pageLimit={10}
      />
    </form>
  );
};

export default Candidates;
