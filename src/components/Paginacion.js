import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginacion ({paginaInicial,cantidad, onChange}) {
  const [pagina, setPagina] = React.useState(paginaInicial ?? 1);

  const handleChange = (event,numeroPagina) => {
    setPagina(numeroPagina);
    onChange(numeroPagina)
  };

  return (
    <Stack spacing={2}>
      <Pagination  count={cantidad} page={pagina} onChange={handleChange} />
    </Stack>
  );
}