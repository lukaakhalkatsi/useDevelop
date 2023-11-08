import "../styling/table.css";
import { useState } from "react";
import PropTypes from "prop-types";
import ARROWS from "../assets/arrows.png";
import users from "../data.jsx";

const usersPerPage = 5; // Number of users to display per page

const Table = ({ activeFilter, inactiveFilter, maleFilter, femaleFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered user data based on the active, inactive, male, female filters
  const filteredUsers = users.filter((user) => {
    if (!activeFilter && !inactiveFilter) return false;
    if ((activeFilter && inactiveFilter) || (maleFilter && femaleFilter)) {
      return true;
    } else
      return (
        (!activeFilter || user.status === "ACTIVE") &&
        (!inactiveFilter || user.status === "INACTIVE") &&
        (!maleFilter || user.gender === "MALE") &&
        (!femaleFilter || user.gender === "FEMALE")
      );
  });

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  const displayedUsers = filteredUsers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDoublePrevClick = () => {
    if (currentPage > 2) {
      setCurrentPage(currentPage - 2);
    } else if (currentPage > 1) {
      setCurrentPage(1);
    }
  };

  const handleDoubleNextClick = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 2);
    } else if (currentPage < totalPages) {
      setCurrentPage(totalPages);
    }
  };

  return (
    <div className="main-box">
      <div className="table-container">
        <div className="table-scroll">
          <table className="user-table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>
                  სტუდენტის სახელი
                  <br />
                  და გვარი
                </th>
                <th>სტატუსი</th>
                <th>სქესი</th>
                <th>
                  <span>ქულები</span>
                  <img src={ARROWS} alt="arrows" />
                </th>
                <th>პირადი ნომერი</th>
                <th>მეილი</th>
                <th>მობილური ნომერი</th>
                <th>მისამართი</th>
                <th>დაბადების თარიღი</th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.nameAndLastname}</td>
                  <td>{user.status}</td>
                  <td>{user.gender}</td>
                  <td>{user.score}</td>
                  <td>{user.personalNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.address}</td>
                  <td>{user.dateOfBirth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination">
        <button className="double-arrow" onClick={handleDoublePrevClick}>
          &lt;&lt;
        </button>
        <button className="arrow" onClick={handlePrevClick}>
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNumber = i + 1;
          return (
            <button
              key={pageNumber}
              className={currentPage === pageNumber ? "active large" : "large"}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button className="arrow" onClick={handleNextClick}>
          &gt;
        </button>
        <button className="double-arrow" onClick={handleDoubleNextClick}>
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

Table.propTypes = {
  activeFilter: PropTypes.bool.isRequired,
  inactiveFilter: PropTypes.bool.isRequired,
  maleFilter: PropTypes.bool.isRequired,
  femaleFilter: PropTypes.bool.isRequired,
};

export default Table;
