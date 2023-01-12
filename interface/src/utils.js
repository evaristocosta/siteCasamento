// https://sambitsahoo.com/blog/react-conditional-classnames.html
export function classNames(classes) {
  const toBeClasses = Object.keys(classes).map((key) =>
    classes[key] === true ? key : ''
  );
  return toBeClasses.join(' ');
}
