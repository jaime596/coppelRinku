import React, { Component } from "react";
import { message } from "antd";
import axios from "axios";

import { Empleados, MovimientosMensuales } from "../routes";
import Movimientos from "../components/Movimientos";
import NuevoMovimiento from "../components/nuevoMovimiento";

export default class MovimientosContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movimientos: [],
      empleados: [],
      loadTable: false,
      abrirModal: false,
    };
  }

  componentDidMount() {
    this.setState({ loadTable: true });
    this.getEmpleados();
    this.getMovimientos();
  }

  getEmpleados = () => {
    axios
      .get(Empleados)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          this.setState({ empleados: data });
        } else {
          message.error("Error al cargar los empleados");
        }
      })
      .catch((error) => {
        message.error("Ocurrió un error!");
      });
  };

  getMovimientos = () => {
    axios
      .get(MovimientosMensuales)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          this.setState({ movimientos: data });
        } else {
          message.error("Error al cargar los empleados");
        }
      })
      .catch((error) => {
        message.error("Ocurrió un error!");
      })
      .finally(() => {
        this.setState({
          loadTable: false,
        });
      });
  };

  onclickAgregar = () => {
    this.setState({
      abrirModal: !this.state.abrirModal,
    });
  };

  
  render() {
    return (
      <Movimientos
        loadTable={this.loadTable}
        movimientos={this.state.movimientos}
        onclickAgregar={this.onclickAgregar}
        abrirModal={this.state.abrirModal}
        nuevoMovimiento={<NuevoMovimiento />}
      />
    );
  }
}
