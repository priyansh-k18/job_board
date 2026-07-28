export default function PostJobPage() {
  return (
    <main className="container">
      <div className="form-container">
        <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Post a New Job</h1>
        <form>
          <div className="form-group">
            <label htmlFor="title">Job Title</label>
            <input type="text" id="title" className="form-control" placeholder="e.g. Senior AI Engineer" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input type="text" id="company" className="form-control" placeholder="e.g. NeuroTech Inc." required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" className="form-control" placeholder="e.g. Remote, or New York, NY" required />
          </div>
          <div className="form-group">
            <label htmlFor="type">Job Type</label>
            <select id="type" className="form-control" required>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Job Description</label>
            <textarea id="description" className="form-control" rows={5} placeholder="Describe the role and requirements..." required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
            Publish Job Listing
          </button>
        </form>
      </div>
    </main>
  );
}
