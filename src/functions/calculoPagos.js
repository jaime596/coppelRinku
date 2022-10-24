import {
  BONO_CARGADOR_HORA,
  BONO_CHOFER_HORA,
  ISR,
  ISR_ADICIONAL,
  PAGA_ENTREGA_CLIENTE,
  SUELDO_BASE,
  SUELDO_TOPE,
  VALES_DESPENSA,
} from "../data/vales";

export const calculo = (rol, entregas, horas) => {
  const sueldo = sueldoBase(horas);
  const bonoRol = bono(rol, horas);
  const bonoPorEntregas = bonoEntregas(entregas);
  const sueldoBruto = sueldo + bonoRol + bonoPorEntregas;
  const isrRetenido = retencionISR(sueldoBruto);
  const valesDespensa = vales(sueldoBruto);

  return {
    sueldo,
    bonoRol,
    bonoPorEntregas,
    sueldoBruto,
    sueldoNeto: sueldoBruto - isrRetenido,
    isrRetenido,
    valesDespensa,
  };
};

const sueldoBase = (horas) => {
  return SUELDO_BASE * horas;
};

const bono = (rol, horas) => {
  switch (rol) {
    case 1:
      return (
        BONO_CHOFER_HORA * horas
      );
    case 2:
      return (
        BONO_CARGADOR_HORA * horas
      );
    case 3:
      return 0;
    default:
      return 0;
  }
};

const bonoEntregas = (entregas) => {
  return entregas * PAGA_ENTREGA_CLIENTE;
};

const retencionISR = (sueldoBruto) => {
  if (sueldoBruto > SUELDO_TOPE) {
    return sueldoBruto * ((ISR + ISR_ADICIONAL) / 100);
  } else {
    return sueldoBruto * (ISR / 100);
  }
};

const vales = (sueldoBruto) => {
  return sueldoBruto * (VALES_DESPENSA / 100);
};
