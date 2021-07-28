export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('pt-br', {
    dateStyle: 'medium',
  });
};
