// Imports the useRef and useEffect hooks from React
import {useRef, useEffect} from "react"

// Defines the scrollAnimation custom hook
const scrollAnimation = () => {
    // useRef hook to reference the DOM element that will be observed for scroll animations
    const ref = useRef(null);
  
    // useEffect hook to set up and clean up the IntersectionObserver for scroll animations
    useEffect(() => {
      // Defines the callback function for the IntersectionObserver
      // It receives an array of entries, each representing an observed element
      const observerCallback = (entries:any) => {
        // Iterates over each entry to check its visibility within the viewport
        entries.forEach((entry:any) => {
          // If the element is visible, adds a class 'in-view' for animations
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // If the element is not visible, removes the 'in-view' class
            entry.target.classList.remove('in-view');
          }
        });
      };
  
      // Sets up the IntersectionObserver if the referenced element exists
      if (ref.current) {
        const observer = new IntersectionObserver(observerCallback);
        observer.observe(ref.current);
  
        // Cleanup function to disconnect the observer when the component unmounts or changes
        return () => observer.disconnect();
      }
    }, [ref]); // Dependencies array including ref to re-run the effect if ref changes
  
    // Returns the ref to be attached to the DOM element that requires scroll animations
    return ref;
};

// Exports the scrollAnimation hook for use in other components
export default scrollAnimation;