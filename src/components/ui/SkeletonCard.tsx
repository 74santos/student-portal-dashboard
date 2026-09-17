
type Props = {
  lines?: number;
};




export default function SkeletonCard({
  lines = 2,
}: Props ) {

  return (

    <div className="skeleton-card">

      <div className="skeleton skeleton-title" />

      {Array.from({
        length: lines,
      }).map((_, index) => (

        <div
          key={index}
          className="skeleton skeleton-line"
        />

      ))}

    </div>

  );

}