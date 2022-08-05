const customFrame = (props) => (
  <div className="bg-white overflow-hidden drop-shadow-md rounded-lg">
    <div className="py-1 text-center bg-blue-dark text-white text-lg font-medium">
      {props.title}
    </div>
    {props.children}
  </div>
);

export default customFrame;
