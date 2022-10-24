import React, { Component } from "react";
import { message } from "antd";
import axios from "axios";
import { AUXILIAR, CARGADOR, CHOFER } from "../data/vales";
import { calculo } from "../functions/calculoPagos";
import { MovimientosMensuales } from "../routes";
import EditarMovimiento from "../components/editarMovimiento";

export default class EditarMovimientoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loadGuardar: false,
      empleados: this.props.empleados ?? [],
      movimientos: this.props.movimientos ?? [],
      empleadoSeleccionado: {},
      modificarEmpleado: this.props.modificarMovimiento,
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

  modificarRegistro = (valores) => {
    if (
      this.state.movimientos.find((movimiento) => {
        if (
          movimiento.noEmpleado === valores.noEmpleado &&
          movimiento.mes === valores.mes
        ) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      message.error("ya existe el registro del mes para este empleado");
    } else {
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
        .put(MovimientosMensuales + "/" + this.state.modificarEmpleado.id, data)
        .then((respuesta) => {
          if (respuesta.status === 200) {
            message.success("Movimiento modificado!");
          }
          console.log(respuesta);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.props.regargarTabla();
          this.props.onclickModificar();
        });
    }
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
      <EditarMovimiento
        modificarRegistro={this.modificarRegistro}
        empleados={this.state.empleados}
        empleadoSeleccionado={this.empleadoSeleccionado}
        modificarEmpleado={this.state.modificarEmpleado}
      />
    );
  }
}
