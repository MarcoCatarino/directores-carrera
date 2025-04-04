export const StudentIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`} // Clases personalizables
  >
    <path d="m20,21.5v2.5h-2v-2.5c0-1.378-1.122-2.5-2.5-2.5h-7c-1.378,0-2.5,1.122-2.5,2.5v2.5h-2v-2.5c0-2.481,2.019-4.5,4.5-4.5h7c2.481,0,4.5,2.019,4.5,4.5Zm2-17v7.5h-2v-6.529l-2,1v2.529c0,3.309-2.691,6-6,6s-6-2.691-6-6v-2.529l-3.943-1.971L10.276.392c1.047-.521,2.399-.522,3.446,0l8.278,4.109Zm-15.47,0l4.641,2.32c.48.24,1.177.24,1.658,0l4.641-2.32-4.641-2.32c-.479-.239-1.179-.24-1.659,0l-4.64,2.319Zm9.47,2.971l-2.276,1.138c-.523.262-1.124.393-1.724.393s-1.2-.131-1.724-.393l-2.276-1.138v1.529c0,2.206,1.794,4,4,4s4-1.794,4-4v-1.529Z" />
  </svg>
);
