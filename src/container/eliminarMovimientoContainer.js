import React, { Component } from "react";
import { message } from "antd";
import axios from "axios";
import { AUXILIAR, CARGADOR, CHOFER } from "../data/vales";
import { calculo } from "../functions/calculoPagos";
import { MovimientosMensuales } from "../routes";
import EliminarMovimiento from "../components/eliminarMovimiento";

export default class EliminarMovimientoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loadGuardar: false,
      empleados: this.props.empleados ?? [],
      movimientos: this.props.movimientos ?? [],
      empleadoSeleccionado: {},
      eliminarEmpleado: this.props.eliminarMovimiento,
    };
  }

  selecionarRolID = (Rol) => {
    switch (Rol) {
      case CHOFER:
        return 1;
      case CARGADOR:
        return 2;
      case AUXILIAR:
        return 3;
      default:
        return 3;
    }
  };

  eliminarRegistro = (valores) => {
    const calculoSueldo = calculo(
      this.selecionarRolID(valores.rol),
      valores.cantidadEntregas,
      valores.horasTrabajadas
    );

    const data = {
      noEmpleado: valores.noEmpleado,
      empleado: valores.nombreEmpleado,
      rol: this.selecionarRolID(valores.rol),
      mes: valores.mes,
      cantidadEntregas: valores.cantidadEntregas,
      horasTrabajadas: valores.horasTrabajadas,
      calculoSueldo,
    };

    axios
      .delete(MovimientosMensuales + "/" + this.state.eliminarEmpleado.id, data)
      .then((respuesta) => {
        if (respuesta.status === 200) {
          message.success("Movimiento eliminado!");
        }
        console.log(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.props.regargarTabla();
        this.props.onclickEliminar();
      });
  };

  empleadoSeleccionado = (elemento) => {
    this.setState({
      empleadoSeleccionado: this.state.empleados.find(
        (empleado) => empleado.id === elemento
      ),
    });
  };

  render() {
    return (
      <EliminarMovimiento
        eliminarRegistro={this.eliminarRegistro}
        empleados={this.state.empleados}
        empleadoSeleccionado={this.empleadoSeleccionado}
        eliminarEmpleado={this.state.eliminarEmpleado}
      />
    );
  }
}
