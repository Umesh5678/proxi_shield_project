import React, {  useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import "./Style.css";






export default function Technicaldatasheets() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const [onGo , setOnGo] = useState(false);

  const options = [
    {
      name: "PROXI FLEX SUPER STRONG",
      file: "../tds/Proxi (FS-03)Flex Super Strong.pdf",
    },
    {
      name: "PROXI PLUG FAST",
      file: "../tds/proxi ( PF01) Plug Fast.pdf",
    },
    {
      name: "PROXI PREBOND",
      file: "../tds/Proxi ( PRE02 )Prebond.pdf",
    },
  ];

  const search = (event) => {
    const filteredOptions = options.filter((option) =>
      option.name.toLowerCase().includes(event.query.toLowerCase())
    );

    setItems(filteredOptions.map((option) => option.name));
  };

  const searchProducts = (value, event) => {
    options.map((item) => {
      if (item.name === value) {
        let array = [];
        array.push(item.name);
        array.push(item.file);
        setSearchProduct(array);
        return null;
      }
      return null;
    });
    event.preventDefault();
    setOnGo(true)
  };

  
  const downLoadFile = (array, event) => {
    const link = document.createElement('a');
    link.href = array[1];
    link.download = array[0];
    link.click();

   
    
  };

 
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-5 bg-light">
              <ul>
                <li className=" d-inline-block ml-3">Home</li>
                <li className=" d-inline-block ml-3">
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li className=" d-inline-block ml-3">Technical Datasheets</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-5">
        <h1 className="c3">Technical Data Sheets</h1>
        
          <div className="row mb-5">
            <div className="c4 col-md-4">
              <h3 className="c5">Search TDS</h3>
              <form className="mt-2">
                <div className="form-group">
                  <label>Search by keyword or product name:</label>
                  <br />

                  <AutoComplete
                    value={value}
                    suggestions={items}
                    completeMethod={search}
                    onChange={(e) => setValue(e.value)}
                    className="c7"
                    placeholder="Search.."
                  />

                  <button
                    className="btn btn-outline-primary mb-1"
                    type="submit"
                    onClick={(event) => searchProducts(value, event)}
                  >
                    Go!
                  </button>
                </div>

              </form>
            </div>
            <div className="col-md-8 c4">
            <h3 className="c5">Results</h3>
              {onGo === "" ? (
                <p>no data found</p>
              ) : (
                <div>
                  <span>{searchProduct[0]} </span>

                    <button className="btn btn-outline-primary download-btn"onClick={(event) => downLoadFile(searchProduct, event)}>Download</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="c9 col-md-4">
              <h3 className="c5">Filter</h3>
              <h6 className="mt-3">Documents Displayed</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  TDS
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck2"
                />
                <label className="form-check-label" for="defaultCheck2">
                  MSDS
                </label>
              </div>
            </div>
            <div className="c0 col-md-8">
              <h3 className="c5">Results</h3>
              {onGo == "" ? (
                <p>no data found</p>
              ) : (
                <div>
                  <span>{searchProduct[0]} </span>

                    <button className="btn btn-outline-primary download-btn"onClick={(event) => downLoadFile(searchProduct, event)}>Download</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
