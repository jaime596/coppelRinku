export const calculoMensual = (movimientos) => {
  const enero = filtrarMes(1, movimientos);
  const febrero = filtrarMes(2, movimientos);
  const marzo = filtrarMes(3, movimientos);
  const abril = filtrarMes(4, movimientos);
  const mayo = filtrarMes(5, movimientos);
  const junio = filtrarMes(6, movimientos);
  const julio = filtrarMes(7, movimientos);
  const agosto = filtrarMes(8, movimientos);
  const septiembre = filtrarMes(9, movimientos);
  const octubre = filtrarMes(10, movimientos);
  const noviembre = filtrarMes(11, movimientos);
  const diciembre = filtrarMes(12, movimientos);

  return [
    enero,
    febrero,
    marzo,
    abril,
    mayo,
    junio,
    julio,
    agosto,
    septiembre,
    octubre,
    noviembre,
    diciembre,
  ];
};

const filtrarMes = (mes, movimientos) => {
  const movimientoMes = movimientos.filter(
    (movimiento) => movimiento.mes === mes
  );
  return {
    calculoMes: mes,
    pagoTotalEntregas: pagoTotalEntregas(movimientoMes),
    pagoTotalBonos: pagoTotalBonos(movimientoMes),
    retencionesTotal: pagoTotalIrsRetenido(movimientoMes),
    valesDespensaTotal: pagoTotalVales(movimientoMes),
    pagoTotalSueldo: pagoTotalSueldo(movimientoMes),
    pagoTotalSueldoBruto: pagoTotalSueldoBruto(movimientoMes),
    pagoTotalSueldoNeto: pagoTotalSueldoNeto(movimientoMes),
    horasTotalTrabajados: horasTotalesTrabajados(movimientoMes),
  };
};

const pagoTotalEntregas = (movimientos) => {
  try {
    let suma = 0;
    movimientos.forEach((movimiento) => {
      suma += movimiento.calculoSueldo.bonoPorEntregas;
    });
    return suma;
  } catch (error) {
    return 0;
  }
};

const pagoTotalBonos = (movimientos) => {
  try {
    let suma = 0;
    movimientos.forEach((movimiento) => {
      suma += movimiento.calculoSueldo.bonoRol;
    });
    return suma;
  } catch (error) {
    return 0;
  }
};

const pagoTotalIrsRetenido = (movimientos) => {
  try {
    let suma = 0;
    movimientos.forEach((movimiento) => {
      suma += movimiento.calculoSueldo.isrRetenido;
    });
    return suma;
  } catch (error) {
    return 0;
  }
};

const pagoTotalVales = (movimientos) => {
  try {
    let suma = 0;
    movimientos.forEach((movimiento) => {
      suma += movimiento.calculoSueldo.valesDespensa;
    });
    return suma;
  } catch (error) {
    return 0;
  }
};

const pagoTotalSueldo = (movimientos) => {
  try {
    let suma = 0;
    movimientos.forEach((movimiento) => {
      suma += movimiento.calculoSueldo.sueldo;
    });
    return suma;
  } catch (error) {
    return 0;
  }
};

const pagoTotalSueldoBruto = (movimientos) => {
  try {
    let suma = 0;
    movimientos.forEach((movimiento) => {
      suma += movimiento.calculoSueldo.sueldoBruto;
    });
    return suma;
  } catch (error) {
    return 0;
  }
};

const pagoTotalSueldoNeto = (movimientos) => {
  try {
    let suma = 0;
    movimientos.forEach((movimiento) => {
      suma += movimiento.calculoSueldo.sueldoNeto;
    });
    return suma;
  } catch (error) {
    return 0;
  }
};

const horasTotalesTrabajados = (movimientos) => {
  try {
    let suma = 0;
    movimientos.forEach((movimiento) => {
      suma += movimiento.horasTrabajadas;
    });
    return suma;
  } catch (error) {
    return 0;
  }
};
