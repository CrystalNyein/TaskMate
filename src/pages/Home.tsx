const Home = () => {
  return (
    <div>
      Home Page <p>{localStorage.getItem('IsLogin')}</p>
    </div>
  );
};

export default Home;
