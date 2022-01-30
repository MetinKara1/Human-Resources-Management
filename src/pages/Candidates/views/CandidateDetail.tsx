import React, { useEffect } from "react";
import { setLayoutOptions } from "../../../layout/Layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../../config/store";
import { getCandidateDetails } from "../logic/action";

const CandidateDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("sonunda çalıştıııı", id);

  const candidateDetails = useSelector(
    (state) => state.candidates.candidateDetails
  );

  useEffect(() => {
    dispatch(getCandidateDetails(id || ""));
  }, [id]);

  const tableHeads = ["Ad", "Soyad", "Telefon", "Web Sitesi"];
  const renderRow = (data: any) => {
    // console.log("data: ", data);
    return (
      <>
        <tr key={data.id}>
          <td>{data.name}</td>
          <td>{data.username}</td>
          <td>{data.phone}</td>
          <td>{data.website}</td>
        </tr>
      </>
    );
    // return <div>test</div>
  };

  const renderTable = (data: any) => {
    return (
      <table style={{border: '1px solid black'}}>
        <thead>
          <tr>
            {tableHeads.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderRow(data)}</tbody>
      </table>
    );
  };

  return (
    <form className="" style={{ margin: 100 }}>
      <h2>Candidate Details</h2>

      <div>{renderTable(candidateDetails)}</div>
    </form>
  );
};

export default CandidateDetail;
