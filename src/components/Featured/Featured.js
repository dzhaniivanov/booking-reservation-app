import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/674375.webp?k=1e119b344cfb80595c538029ec77302bdafdb755d90de3cc899e56233eba289e&o="
          alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Budapest</h1>
          <h2>442 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/619896.webp?k=9364e91ae738a47a4a37b0a7fb26d01e5e95db810f7167e9e5ecf58e5ca74e9b&o="
          alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Buchurest</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/656081.webp?k=31f1f24789ea74eca368f90ecad47868bd09514d66c72fd96798c5ab0cf7625b&o="
          alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sofia</h1>
          <h2>32 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
