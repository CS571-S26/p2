export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-3">
      <h1 className="h2 mb-1">{title}</h1>
      {subtitle && <p className="text-body-secondary mb-0">{subtitle}</p>}
    </div>
  )
}
