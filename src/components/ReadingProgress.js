import React from 'react';

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = React.useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight + element.offsetTop - window.innerHeight;

    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      // eslint-disable-next-line consistent-return
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      // eslint-disable-next-line consistent-return
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return (
    <div
      style={{
        position: 'sticky',
        height: '3px',
        top: '0',
        backgroundColor: '#9ad6bd',
        width: `${readingProgress}%`,
        zIndex: 1,
        borderRadius: '2px',
      }}
    />
  );
};

export default ReadingProgress;
