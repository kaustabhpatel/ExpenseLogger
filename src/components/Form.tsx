const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Form;
