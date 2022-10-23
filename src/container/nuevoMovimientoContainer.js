import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";
import NuevoMovimiento from "../components/nuevoMovimiento";
import { AUXILIAR, CARGADOR, CHOFER } from "../data/vales";
import { calculo } from "../functions/calculoPagos";
import { MovimientosMensuales } from "../routes";

export default class NuevoMovimientoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loadGuardar: false,
      empleados: this.props.empleados ?? [],
      movimientos: this.props.movimientos ?? [],
      empleadoSeleccionado: {},
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

  nuevoRegistro = (valores) => {
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
      message.error("ya existe");
    } else {
      const calculoSueldo = calculo(
        this.selecionarRolID(valores.rol),
        valores.cantidadEntregas
      );

      const data = {
        noEmpleado: valores.noEmpleado,
        empleado: valores.nombreEmpleado,
        rol: this.selecionarRolID(valores.rol),
        mes: valores.mes,
        cantidadEntregas: valores.cantidadEntregas,
        calculoSueldo,
      };

      axios
        .post(MovimientosMensuales, data)
        .then((respuesta) => {
          if (respuesta.status === 201) {
            message.success("Movimiento agregado!");
          }
          console.log(respuesta);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.props.regargarTabla();
          this.props.onclickAgregar();
        });
    }
  };

  empleadoSeleccionado = (elemento) => {
    console.log(
      this.state.empleados.find((empleado) => empleado.id === elemento)
    );
    this.setState({
      empleadoSeleccionado: this.state.empleados.find(
        (empleado) => empleado.id === elemento
      ),
    });
  };

  render() {
    return (
      <NuevoMovimiento
        nuevoRegistro={this.nuevoRegistro}
        empleados={this.state.empleados}
        empleadoSeleccionado={this.empleadoSeleccionado}
      />
    );
  }
}
