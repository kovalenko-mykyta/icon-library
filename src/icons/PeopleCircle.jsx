const PeopleCircle = ({ size = 16, color = 'currentColor', className, 'aria-label': ariaLabel }) => (
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
    <path d="M14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 9.754 2.75319 11.3316 3.95312 12.4287C5.00168 11.5791 6.49798 11 8 11C9.50174 11 10.9974 11.5794 12.0459 12.4287C13.2461 11.3316 14 9.75426 14 8ZM8 12C6.81939 12 5.63541 12.4313 4.77441 13.0586C5.70606 13.6539 6.8124 14 8 14C9.18731 14 10.2931 13.6536 11.2246 13.0586C10.3637 12.4316 9.18032 12 8 12ZM10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7Z" fill={color} />
  </svg>
);

export default PeopleCircle;
