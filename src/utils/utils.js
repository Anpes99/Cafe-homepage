export const getTranslateY = (element) => {
  console.log(element.style.transform);
  const transformStyle = element.style.transform;
  const translateY = transformStyle.replace(/[^\d.]/g, "");
  console.log(translateY);
  return +translateY;
};

export function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}
export function isElementPartlyInViewport(element) {
  var rect = element.getBoundingClientRect();

  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
