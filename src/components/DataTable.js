import React from "react";
import styled from "styled-components";
import '../styles/TableStyle.css';

const DataTable = () => {
    const data1 = ["속도", "메모리", "FLOPs", "파라미터수"];
    const data2 = [1, 2, 3, 4];
    const data3 = [5, 6, 7, 8];

  return (
      <table className="styled-table">
        <thead>
          <tr>
            <th></th>
            <th>CNN</th>
            <th>Deepstream</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((label, index) => (
            <tr key={index}>
              <td>{label}</td>
              <td>{data2[index]}</td>
              <td>{data3[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default DataTable;