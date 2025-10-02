type CxArg = string | boolean | undefined | { [key: string]: boolean };

export const cx = (...classes: CxArg[]) => {
  return classes
    .map((c) => {
      if (typeof c === 'object' && c !== null) {
        return Object.keys(c)
          .filter((key) => c[key])
          .join(' ');
      }
      return c;
    })
    .filter(Boolean)
    .join(' ');
};