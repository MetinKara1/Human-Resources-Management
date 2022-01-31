import React, { useEffect } from "react";

import { useDispatch, useSelector } from "../../../config/store";
import { navigate } from "../../Services/action";
import { getCandidates } from "../logic/action";
import Table from "../../../components/Table";

const Candidates = () => {
  const dispatch = useDispatch();

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
      displayValue: 'Ad Soyad'
    },
    {
      id: "username",
      displayValue: 'Kullanıcı Adı'
    },
    {
      id: "email",
      displayValue: 'Mail',
    },
    {
      id: "phone",
      displayValue: 'Telefon'
    },
    {
      id: "detay",
      displayValue: 'Detay',
      onClick: (item: any) => navigate("CandidateDetail", ...[`${item.id}`]),
    },
  ];

  const header = (
    <tr>
      {headerOptions.map((header) => (
        <th>
          {header.displayValue}
        </th>
      ))}
    </tr>
  );

  return (
    <div className="" style={{ margin: 100 }}>
      <h2>Candidates</h2>

      <Table
        renderRow={(row: any) => generateRow(row)}
        entries={candidates}
        header={header}
        placeholder="Search by name, username, email, phone"
        textfilterOptions={["name", "username", "email"]}
        pageLimit={10}
      />
    </div>
  );
};

export default Candidates;
