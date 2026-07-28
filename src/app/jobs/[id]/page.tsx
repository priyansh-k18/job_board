import { mockJobs } from '@/data/jobs';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return mockJobs.map((job) => ({
    id: job.id,
  }));
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = mockJobs.find(j => j.id === id);

  if (!job) {
    notFound();
  }

  return (
    <main className="container">
      <div className="job-detail-header">
        <h1 className="job-detail-title">{job.title}</h1>
        <div className="job-detail-meta">
          <span>🏢 {job.company}</span>
          <span>📍 {job.location}</span>
          <span>💼 {job.type}</span>
          <span>💰 {job.salary}</span>
        </div>
        <div className="job-tags" style={{ justifyContent: 'center', marginTop: '2rem' }}>
          {job.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="job-description">
        <h3>About the Role</h3>
        <p>{job.description}</p>
        
        <h3>Requirements</h3>
        <ul>
          <li>Experience in the relevant tech stack.</li>
          <li>Strong problem-solving skills and ability to work independently.</li>
          <li>Excellent communication skills.</li>
        </ul>
      </div>

      <div className="apply-section">
        <h2 style={{ marginBottom: '1rem' }}>Ready to apply?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Join {job.company} and make an impact.</p>
        <button className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
          Apply Now
        </button>
      </div>
    </main>
  );
}
