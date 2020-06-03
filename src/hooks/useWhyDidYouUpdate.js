import { useEffect, useRef } from 'react';

/**
 * Render optimization hook for developer test
 * @param {String} name - Identifier to show in console
 * @param {Object} props - the prop or props for testing
 * use: useWhyDidYouUpdate('name to show in console', {...props})
 */
const useWhyDidYouUpdate = (name, props) => {
  const previousProps = useRef();

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj = {};

      allKeys.forEach(key => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });

      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }

    previousProps.current = props;
  });
}

export default useWhyDidYouUpdate;