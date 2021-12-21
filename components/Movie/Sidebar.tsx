import React from 'react';

const Sidebar = (props: { data: any }) => {
  const { data } = props;
  if (!data) {
    return (
      <div className="sidebar">
        <div>
          <h3>Status</h3>
          <p>--</p>
        </div>
        <div>
          <h3>Original Language</h3>
          <p>--</p>
        </div>
        <div>
          <h3>Budget</h3>
          <p>--</p>
        </div>
        <div>
          <h3>Revenue</h3>
          <p>--</p>
        </div>
        <div>
          <h3>Keywords</h3>
          <p>No keywords have been added.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="sidebar">
      <div>
        <h3>Status</h3>
        <p>{data.status}</p>
      </div>
      <div>
        <h3>Original Language</h3>
        <p>{data.original_language}</p>
      </div>
      <div>
        <h3>Budget</h3>
        <p>{data.budget}</p>
      </div>
      <div>
        <h3>Revenue</h3>
        <p>{data.revenue}</p>
      </div>
      <div>
        <h3>Keywords</h3>
        <p>No keywords have been added.</p>
      </div>
    </div>
  );
};

export default Sidebar;
