const profile = () => {
  return (
    <main className="me-main p-4 vh-100 bg-color font-primary">
      <section id="profile">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3>Basic Information</h3>
              <p className="profile-description">
                Tell us the what name should be displayed on your profile and
                what email should be used to send you notifications
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p className="profile-label mb-3">Profile Picture</p>
              <div className="picture-div d-flex align-items-center mb-3">
                <img
                  src="https://picsum.photos/id/237/120/144"
                  alt="profile-picture"
                  id="profile-pic"
                  className="img-profile me-3"
                />
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" />
                </form>
              </div>
              <form
                action="/action_page.php"
                className="d-flex flex-column pe-5"
              >
                <label for="fname" className="mb-3">
                  First name*:
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="text-input mb-3"
                />
                <label for="lname" className="mb-3">
                  Last name*:
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="text-input mb-3"
                />
                <input
                  type="update"
                  value="Update Info"
                  className="btn btn-primary"
                ></input>
              </form>
            </div>
            <div className="col-12">
              <hr className="divider-hr" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-md-6">
              <h3>Change Password</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default profile;
