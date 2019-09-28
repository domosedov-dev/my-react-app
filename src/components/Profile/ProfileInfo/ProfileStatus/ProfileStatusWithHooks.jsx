import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = props => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = e => {
    setStatus(e.currentTarget.value );
  };

  return (
    <>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status ? props.status : "Статуса нет"}
          </span>
        </div>
      ) : (
        <div>
          <input
              onChange={onStatusChange}
              onBlur={deactivateEditMode}
              value={status}
              autoFocus={true} />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
