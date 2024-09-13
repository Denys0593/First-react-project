import "./app-info.css";

const AppInfo = ({ bg }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в Компании-Х</h1>
      <h2>Общее число сотрудников: {bg.length}</h2>
      <h2>Премию получат: {bg.filter((item) => item.increase).length}</h2>
      <h2>
        Количество сотрудников на повышение:{" "}
        {bg.filter((item) => item.rise).length}
      </h2>
    </div>
  );
};

export default AppInfo;
