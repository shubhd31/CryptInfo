interface Provider {
  index: string;
  title: string;
  symbol: string;
  description: string;
  image_url: string;
  country: string[];
  category: string[];
  pubDate: string;
  link: string
}
type AppProps = {
  newsList: Array<Provider>;
};

const NewsPage = ({ newsList }: AppProps) => {
  return (
    <>
      <div className="d-flex p-2 m-1 flex-wrap justify-content-center" style={{ height: "8rem" }}>
        {newsList.map((item, index) => {
          return (
            <div className="card m-3 align-items-center" style={{ width: "18rem" }} key={index}>
              <img className="card-img-top img-thumbnail" style={{ width: "100%", height: "30%" }} src={item.image_url ? item.image_url : "https://mma.prnewswire.com/media/1672914/crypto_com_Logo.jpg?p=original"} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text" style={{ height: "6rem", overflowY: "clip" }}>{item.description}</p>
              </div>
              <a href={item.link} className="btn btn-outline-primary m-3">Read Full Article</a>
            </div>
          );
        })}
      </div>
    </>)
};

export default NewsPage;
