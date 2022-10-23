export const confTableCalculoMensual = [
  {
    key: "calculoMes",
    dataIndex: "calculoMes",
    title: "Mes",
    render: (text) => cambiaraMes(text),
  },
  {
    key: "pagoTotalBonos",
    dataIndex: "pagoTotalBonos",
    title: "Pago Total de Bonos",
  },
  {
    key: "pagoTotalEntregas",
    dataIndex: "pagoTotalEntregas",
    title: "Pago Total de Entregas",
  },
  {
    key: "pagoTotalSueldo",
    dataIndex: "pagoTotalSueldo",
    title: "Pago Total de Sueldo Base",
  },
  {
    key: "pagoTotalSueldoBruto",
    dataIndex: "pagoTotalSueldoBruto",
    title: "Pago Total de Sueldo Bruto",
  },
  {
    key: "pagoTotalSueldoNeto",
    dataIndex: "pagoTotalSueldoNeto",
    title: "Pago Total de Sueldo Neto",
  },
  {
    key: "retencionesTotal",
    dataIndex: "retencionesTotal",
    title: "Total de Retenciones",
  },
  {
    key: "valesDespensaTotal",
    dataIndex: "valesDespensaTotal",
    title: "Total de Vales deDespensa",
  },
];

const cambiaraMes = (mes) => {
  switch (mes) {
    case 1:
      return <span>Enero</span>;
    case 2:
      return <span>Febrero</span>;
    case 3:
      return <span>Marzo</span>;
    case 4:
      return <span>Abril</span>;
    case 5:
      return <span>Mayo</span>;
    case 6:
      return <span>Junio</span>;
    case 7:
      return <span>Julio</span>;
    case 8:
      return <span>Agosto</span>;
    case 9:
      return <span>Septiembre</span>;
    case 10:
      return <span>Octubre</span>;
    case 11:
      return <span>Noviembre</span>;
    case 12:
      return <span>Diciembre</span>;

    default:
      return <span>N/A</span>;
  }
};
