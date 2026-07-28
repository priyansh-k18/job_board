import Link from 'next/link';
import { mockJobs } from '@/data/jobs';

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Find Your Next <span className="nav-brand">Dream Job</span></h1>
        <p>
          Discover top remote and onsite opportunities in AI, Software Engineering, and more.
          Join the most innovative companies building the future.
        </p>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>Latest Opportunities</h2>
          <span style={{ color: 'var(--text-muted)' }}>{mockJobs.length} jobs available</span>
        </div>
        
        <div className="job-grid">
          {mockJobs.map(job => (
            <Link href={`/jobs/${job.id}`} key={job.id} className="job-card">
              <div className="job-header">
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <div className="company-name">{job.company} &bull; {job.location}</div>
                </div>
              </div>
              <div className="job-tags">
                {job.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="job-footer">
                <span className="job-salary">{job.salary}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{job.postedAt}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
