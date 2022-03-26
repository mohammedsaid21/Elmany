import "./styleGallery.css";

function Tabs({ filterCategory, tabsData }) {
  const activeLi = (e) => {
    const array = document.querySelectorAll(".items button");
    for (let i = 0; i < array.length; i++) {
      array[i].classList.remove("activeLi");
    }
    e.target.classList.add("activeLi");
  };

  return (
    <div className="text-center my-4 items">
      {tabsData.map((category, index) => {
        return (
          <button
            className= {`rounded-3xl mr-3 mx-2 bg-gray-500 li my-8 ${index === 0 ? 'activeLi' :''}`}
            onClick={(e) => {
              filterCategory(category);
              activeLi(e);
            }}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
export default Tabs;
