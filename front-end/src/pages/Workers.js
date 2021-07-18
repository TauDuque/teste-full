import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import moment from "moment";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { MobileLinks, Loading, paginate } from "../components";

const Workers = () => {
  const { funcionarios, showExtra, fetchData, hideExtra } = useGlobalContext();
  const [page, setPage] = useState(0);

  useEffect(() => {
    showExtra();
    fetchData();
  }, []);

  const data = funcionarios[page];

  function goFoward() {
    if (page > funcionarios.length - 2) {
      setPage(0);
    } else setPage(page + 1);
  }

  function goBack() {
    if (page <= 0) {
      setPage(funcionarios.length - 1);
    } else setPage(page - 1);
  }
  console.log(page);
  console.log(funcionarios.length);
  return (
    <Wrapper>
      <div className="mobile-links">
        <MobileLinks />
      </div>
      <table>
        <thead>
          <tr className="table-headers">
            <th>Nome</th>
            <th>E-mail</th>
            <th>Nascimento</th>
            <th>Admissão</th>
            <th>Setor</th>
            <th>Cargo</th>
            <th>Nível</th>
            <th>Data Insert</th>
            <th>Data Update</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item, index) => {
              const {
                id,
                nome,
                email,
                data_nascimento,
                data_admissao,
                setor,
                cargo,
                nivel,
                audit_data_insert,
                audit_data_update,
              } = item;
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/workers/${id}`}>{nome}</Link>
                  </td>
                  <td>
                    <Link to={`/workers/${id}`}>{email}</Link>
                  </td>
                  <td>
                    <Link to={`/workers/${id}`}>{data_nascimento}</Link>
                  </td>
                  <td>
                    <Link to={`/workers/${id}`}>{data_admissao}</Link>
                  </td>
                  <td>
                    <Link to={`/workers/${id}`}>{setor}</Link>
                  </td>
                  <td>
                    <Link to={`/workers/${id}`}>{cargo}</Link>
                  </td>
                  <td>
                    <Link to={`/workers/${id}`}>{nivel}</Link>
                  </td>
                  <td>
                    <Link to={`/workers/${id}`}>{audit_data_insert}</Link>
                  </td>
                  <td>
                    <Link to={`/workers/${id}`}>
                      {audit_data_update &&
                        moment(audit_data_update).format("MM/DD/YYYY HH:mm")}
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
      <div className="page-btn-container">
        <button className="page-btn" type="button" onClick={() => goBack()}>
          <BiLeftArrowAlt />
        </button>
        <button className="page-btn" type="button" onClick={() => goFoward()}>
          <BiRightArrowAlt />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  display: flex;
    flex-direction: column;
  border-radius: 2px;
  table {
    width: 100%;
  }
  a {
    color: var(--classic-black);
  }
  .mobile-links {
    display: block;
    margin-bottom: 15px;
  }
  .mobile-links ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .mobile-links ul li {
    padding: 10px;
  }
  table {
    min-height: 895px;
    margin-bottom: 10px;
  }

  .table-headers th {
    font-size: 14px;
    text-align: center;
    padding: 8px;
    border: 1px solid;
    background: var(--clr-blue);
    border-collapse: collapse;
  }

  table td {
    font-size: 10px;
    text-align: center;
    padding: 7px;
    border: 1px solid;
    background: var(--clr-grey-2);
    border-collapse: collapse;
    cursor: pointer;
    max-height: 15px;
  }

  table tr {
    max-height: 15px;
  }

  td:hover {
    background: var(--clr-white);
  }

  .page-btn-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  .page-btn {
    display: flex;
    padding: 5px;
    width: 70px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 90%;
    width: 65%;
    margin-left: 15px;
    table {
      min-height: 495px;
      
    }
    .mobile-links {
      display: none;
    }
  }
  }
`;

export default Workers;
