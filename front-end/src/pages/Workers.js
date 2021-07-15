import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import moment from "moment";
import { MobileLinks } from "../components";

const Workers = () => {
  const { funcionarios, showExtra, fetchData, hideExtra } = useGlobalContext();

  useEffect(() => {
    showExtra();
    fetchData();
  }, []);

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
          {funcionarios.map((item, index) => {
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
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
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
    padding: 10px;
    border: 1px solid;
    background: var(--clr-grey-2);
    border-collapse: collapse;
    cursor: pointer;
  }

  td:hover {
    background: var(--clr-white);
  }

  @media (min-width: 992px) {
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 90%;
    width: 65%;
    margin-left: 15px;

    .mobile-links {
      display: none;
    }
  }
  }
`;

export default Workers;
