const EyeOpenSolid = ({ size = 16, color = 'currentColor', className, 'aria-label': ariaLabel }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaLabel ? undefined : true}
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel}
  >
    <path d="M8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M8 3C11.8755 3 14.0081 5.76526 14.6846 6.8252C14.9133 7.18356 14.9999 7.58767 15 7.97168V8.02832C14.9999 8.41233 14.9133 8.81644 14.6846 9.1748C14.0081 10.2347 11.8755 13 8 13C4.12453 13 1.99194 10.2347 1.31543 9.1748C1.08674 8.81644 1.00007 8.41233 1 8.02832V7.97168C1.00007 7.58767 1.08674 7.18356 1.31543 6.8252C1.99194 5.76526 4.12453 3 8 3ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5Z" fill={color} />
  </svg>
);

export default EyeOpenSolid;
