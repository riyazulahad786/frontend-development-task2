import React from "react";

const ActionStatus = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <button style={{  backgroundColor:" rgb(117, 201, 250)"}}
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Update
        </button>
        <button style={{  backgroundColor:"  rgb(199, 53, 53)"}}
        type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ActionStatus;
