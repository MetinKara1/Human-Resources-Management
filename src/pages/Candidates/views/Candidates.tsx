import React, { useCallback, FormEvent, useState, useEffect } from "react";

import { useDispatch, useSelector } from "../../../config/store";
import { navigate } from "../../Services/action";
// import { login, changeEmail, changePassword } from "../logic/action";
import { setLayoutOptions } from "../../../layout/Layout";
import { getCandidates } from "../logic/action";

const Candidates = () => {
  const dispatch = useDispatch();

  const [showLoader, setLoader] = useState(false);

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

  const tableHeads = ["Ad", "Soyad", "Telefon", "Detay"];
  const renderRow = (data: any) => {
    // console.log("data: ", data);
    return (
      <>
        {data &&
          data.length &&
          data.map((item: any) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <button
                  type="button"
                  onClick={() => navigate("CandidateDetail", ...[`${item.id}`])}
                >
                  Detay
                </button>
              </tr>
            );
          })}
      </>
    );
    // return <div>test</div>
  };

  const renderTable = (data: any) => {
    return (
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr style={{ border: "1px solid black" }}>
            {tableHeads.map((item) => (
              <th
                style={{
                  border: "1px solid black",
                }}
              >
                {item} <span>Filtre</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderRow(data)}</tbody>
      </table>
    );
  };

  return (
    <form className="" style={{ margin: 100 }}>
      <h2>Candidates</h2>

      <div>{renderTable(candidates)}</div>

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
