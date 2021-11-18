import ReactShimmer from 'react-shimmer-effect'; //eslint-disabled-line

interface ShimmerProps {
  width?: number;
  height?: number;
  borderRadius?: number | string;
}

export function Shimmer({ width, height, borderRadius }: ShimmerProps) {
  return (
    <ReactShimmer>
      <div style={{ width, height, borderRadius }} />
    </ReactShimmer>
  )
}