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
  };
};

const pagoTotalEntregas = (movimientos) => {
  if (movimientos.length > 1) {
    return movimientos.reduce(
      (previousValue, currentValue) =>
        previousValue.calculoSueldo.bonoPorEntregas +
        currentValue.calculoSueldo.bonoPorEntregas
    );
  } else if (movimientos.length === 1) {
    return movimientos[0].calculoSueldo.bonoPorEntregas;
  } else {
    return 0;
  }
};

const pagoTotalBonos = (movimientos) => {
  if (movimientos.length > 1) {
    return movimientos.reduce(
      (previousValue, currentValue) =>
        previousValue.calculoSueldo.bonoRol + currentValue.calculoSueldo.bonoRol
    );
  } else if (movimientos.length === 1) {
    return movimientos[0].calculoSueldo.bonoRol;
  } else {
    return 0;
  }
};

const pagoTotalIrsRetenido = (movimientos) => {
  if (movimientos.length > 1) {
    return movimientos.reduce(
      (previousValue, currentValue) =>
        previousValue.calculoSueldo.isrRetenido +
        currentValue.calculoSueldo.isrRetenido
    );
  } else if (movimientos.length === 1) {
    return movimientos[0].calculoSueldo.isrRetenido;
  } else {
    return 0;
  }
};

const pagoTotalVales = (movimientos) => {
  if (movimientos.length > 1) {
    return movimientos.reduce(
      (previousValue, currentValue) =>
        previousValue.calculoSueldo.valesDespensa +
        currentValue.calculoSueldo.valesDespensa
    );
  } else if (movimientos.length === 1) {
    return movimientos[0].calculoSueldo.valesDespensa;
  } else {
    return 0;
  }
};

const pagoTotalSueldo = (movimientos) => {
  if (movimientos.length > 1) {
    return movimientos.reduce(
      (previousValue, currentValue) =>
        previousValue.calculoSueldo.sueldo + currentValue.calculoSueldo.sueldo
    );
  } else if (movimientos.length === 1) {
    return movimientos[0].calculoSueldo.sueldo;
  } else {
    return 0;
  }
};

const pagoTotalSueldoBruto = (movimientos) => {
  if (movimientos.length > 1) {
    return movimientos.reduce(
      (previousValue, currentValue) =>
        previousValue.calculoSueldo.sueldoBruto +
        currentValue.calculoSueldo.sueldoBruto
    );
  } else if (movimientos.length === 1) {
    return movimientos[0].calculoSueldo.sueldoBruto;
  } else {
    return 0;
  }
};

const pagoTotalSueldoNeto = (movimientos) => {
  if (movimientos.length > 1) {
    return movimientos.reduce(
      (previousValue, currentValue) =>
        previousValue.calculoSueldo.sueldoNeto +
        currentValue.calculoSueldo.sueldoNeto
    );
  } else if (movimientos.length === 1) {
    return movimientos[0].calculoSueldo.sueldoNeto;
  } else {
    return 0;
  }
};
