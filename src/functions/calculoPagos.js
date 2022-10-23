import {
  BONO_CARGADOR_HORA,
  BONO_CHOFER_HORA,
  DIAS_TRABAJADOS,
  ISR,
  ISR_ADICIONAL,
  JORNADA,
  PAGA_ENTREGA_CLIENTE,
  SEMANAS_TRABAJADAS,
  SUELDO_BASE,
  SUELDO_TOPE,
  VALES_DESPENSA,
} from "../data/vales";

export const calculo = (rol, entregas) => {
  
  const sueldo = sueldoBase();
  const bonoRol = bono(rol);
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

const sueldoBase = () => {
  return SUELDO_BASE * JORNADA * (DIAS_TRABAJADOS * SEMANAS_TRABAJADAS);
};

const bono = (rol) => {
  switch (rol) {
    case 1:
      return (
        BONO_CHOFER_HORA * JORNADA * (DIAS_TRABAJADOS * SEMANAS_TRABAJADAS)
      );
    case 2:
      return (
        BONO_CARGADOR_HORA * JORNADA * (DIAS_TRABAJADOS * SEMANAS_TRABAJADAS)
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
