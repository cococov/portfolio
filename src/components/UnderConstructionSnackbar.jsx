import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

/*
  Under construction snackbar - DELETE this on production
*/
const UnderConstructionSnackbar = () => {
  const [open, setOpen] = useState(true);

  const handleCloseUnderConstructionSnackbar = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      autoHideDuration={8000}
      key="underConstructionSnackbar"
      open={open}
      onClose={handleCloseUnderConstructionSnackbar}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity="info">
        <AlertTitle>Información</AlertTitle>
        Esta página aún está en construcción, por lo que puede haber secciones
        sin contenido o con contenido a la mitad.
      </Alert>
    </Snackbar>
  );
};

export default UnderConstructionSnackbar;
