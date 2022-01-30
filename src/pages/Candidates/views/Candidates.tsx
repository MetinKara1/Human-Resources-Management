import React, { useCallback, FormEvent, useState, useEffect } from "react";

import { useDispatch, useSelector } from "../../../config/store";
import { navigate } from "../../Services/action";
// import { login, changeEmail, changePassword } from "../logic/action";
import { setLayoutOptions } from "../../../layout/Layout";
import { getCandidates } from "../logic/action";
import Table from "../../../components/Table";
import { STATES_ABBR } from "../../../config/constant";

const Candidates = () => {
  const dispatch = useDispatch();

  const [showLoader, setLoader] = useState(false);

  const [genreFilter, setGenreFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("all");

  const candidates = useSelector((state) => state.candidates.candidates);
  console.log("candidates: ", candidates);
  //   const onEmailChange = useCallback((e: FormEvent<HTMLInputElement>) => {
  //     dispatch(changeEmail(e.currentTarget.value));
  //   }, []);

  //   const onPasswordChange = useCallback((e: FormEvent<HTMLInputElement>) => {
  //     dispatch(changePassword(e.currentTarget.value));
  //   }, []);

  //   const onLoginClick = useCallback(() => {
  //     setLoader(true);
  //     dispatch(login());
  //   }, []);

  useEffect(() => {
    console.log("çalıoştıı");
    dispatch(getCandidates());
  }, []);

  const onNavigateRegister = useCallback(() => {
    dispatch(navigate("Register"));
  }, []);

  const tableHeaders = ["name", "username", "email", "detay"];
  // const renderRow = (data: any) => {
  //   // console.log("data: ", data);
  //   return (
  //     <>
  //       {data &&
  //         data.length &&
  //         data.map((item: any) => {
  //           return (
  //             <tr key={item.id}>
  //               <td>{item.name}</td>
  //               <td>{item.username}</td>
  //               <td>{item.phone}</td>
  //               <button
  //                 type="button"
  //                 onClick={() => navigate("CandidateDetail", ...[`${item.id}`])}
  //               >
  //                 Detay
  //               </button>
  //             </tr>
  //           );
  //         })}
  //     </>
  //   );
  //   // return <div>test</div>
  // };
  // const renderTable = (data: any) => {
  //   return (
  //     <table style={{ border: "1px solid black" }}>
  //       <thead>
  //         <tr style={{ border: "1px solid black" }}>
  //           {tableHeaders.map((item) => (
  //             <th
  //               style={{
  //                 border: "1px solid black",
  //               }}
  //             >
  //               {item} <span>Filtre</span>
  //             </th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody>{renderRow(data)}</tbody>
  //     </table>
  //   );
  // };

  const generateRow = (row: any) => {
    console.log(
      "fielddddd: ",
      headerOptions.map((field: any) => row[field.id])
    );
    return (
      <tr key={row.id}>
        {headerOptions.map((field: any) => (
          <>
            <td>{row[field.id]}</td>
          </>
        ))}
        <td>
          <button onClick={() => navigate("CandidateDetail", ...[`${row.id}`])}>
            detay
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

      {/* <div>{renderTable(candidates)}</div> */}

      <Table
        renderRow={(row: any) => generateRow(row)}
        entries={candidates}
        header={header}
        placeholder="Search by name, username, email, phone"
        textfilterOptions={["name", "username", "email"]}
        pageLimit={10}
      />

      {showLoader && (
        <div className="row">
          <div className="col-md-12">
            <div className="loader"></div>
          </div>
        </div>
      )}
    </form>
  );
};

setLayoutOptions(Candidates, {
  layout: "MainLayout",
});
export default Candidates;
