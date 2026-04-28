const InfoCircleSolid = ({ size = 16, color = 'currentColor', className, 'aria-label': ariaLabel }) => (
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
    <path fillRule="evenodd" clipRule="evenodd" d="M8 7C8.27613 7.00002 8.5 7.22387 8.5 7.5V11H9C9.27614 11 9.5 11.2239 9.5 11.5C9.5 11.7761 9.27614 12 9 12H7C6.72386 12 6.5 11.7761 6.5 11.5C6.5 11.2239 6.72386 11 7 11H7.5V8C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7H8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM7.75 6C8.16421 6 8.5 5.66421 8.5 5.25C8.5 4.83579 8.16421 4.5 7.75 4.5C7.33579 4.5 7 4.83579 7 5.25C7 5.66421 7.33579 6 7.75 6Z" fill={color} />
  </svg>
);

export default InfoCircleSolid;
