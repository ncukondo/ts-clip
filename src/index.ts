export const copyToClip = (text: string) => {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  if (ta.parentElement) ta.parentElement.removeChild(ta);
};

export const copyFromClip = (): string => {
  const ta = document.createElement('textarea');
  document.body.appendChild(ta);
  document.execCommand('paste');
  return ta.value;
};
