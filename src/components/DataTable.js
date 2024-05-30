import React from "react";
import styled from "styled-components";
import '../styles/TableStyle.css';

const DataTable = () => {
    const data1 = ["CNN", "Deepstream"];
    const data2 = [1, 2, 3, 4];
    const data3 = [5, 6, 7, 8];

  return (
      <table className="styled-table">
        <thead>
          <tr>
            <th></th>
            <th>속도</th>
            <th>메모리</th>
            <th>FLOPs</th>
            <th>파라미터수</th>
          </tr>
        </thead>
        <tbody>
        {data1.map((label, index) => (
          <tr key={index}>
            <td>{label}</td>
            {index === 0 ? (
              <>
                <td>{data2[0]}</td>
                <td>{data2[1]}</td>
                <td>{data2[2]}</td>
                <td>{data2[3]}</td>
              </>
            ) : (
              <>
                <td>{data3[0]}</td>
                <td>{data3[1]}</td>
                <td>{data3[2]}</td>
                <td>{data3[3]}</td>
              </>
            )}
          </tr>
        ))}
        </tbody>
      </table>
  );
};

export default DataTable;