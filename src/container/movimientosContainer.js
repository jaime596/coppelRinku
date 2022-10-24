import React, { Component } from "react";
import { message } from "antd";
import axios from "axios";

import { Empleados, MovimientosMensuales } from "../routes";
import Movimientos from "../components/Movimientos";
import NuevoMovimientoContainer from "./nuevoMovimientoContainer";
import EditarMovimientoContainer from "./editarMovimientoContainer";
import EliminarMovimientoContainer from "./eliminarMovimientoContainer";

export default class MovimientosContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movimientos: [],
      empleados: [],
      loadTable: false,
      abrirModal: false,
      abrirModalModificar: false,
      modificarMovimiento: {},
      abrirModalEliminar: false,
      eliminarMovimiento: {},
    };
  }

  componentDidMount() {
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
        console.error(error);
        message.error("Ocurrió un error!");
      });
  };

  getMovimientos = () => {
    this.setState({ loadTable: true });

    axios
      .get(MovimientosMensuales)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          this.setState({ movimientos: data });
        } else {
          message.error("Error al cargar los movimientos");
        }
      })
      .catch((error) => {
        console.error(error);
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

  onclickModificar = () => {
    this.setState({
      abrirModalModificar: !this.state.abrirModalModificar,
    });
  };

  onclickEliminar = () => {
    this.setState({
      abrirModalEliminar: !this.state.abrirModalEliminar,
    });
  };

  selectModificar = (valor) => {
    this.setState({
      modificarMovimiento: valor,
    });
  };

  selectEliminar = (valor) => {
    this.setState({
      eliminarMovimiento: valor,
    });
  };
  render() {
    return (
      <Movimientos
        loadTable={this.loadTable}
        movimientos={this.state.movimientos}
        onclickAgregar={this.onclickAgregar}
        abrirModal={this.state.abrirModal}
        nuevoMovimiento={
          <NuevoMovimientoContainer
            onclickAgregar={this.onclickAgregar}
            empleados={this.state.empleados}
            movimientos={this.state.movimientos}
            regargarTabla={this.getMovimientos}
          />
        }
        onclickModificar={this.onclickModificar}
        abrirModalModificar={this.state.abrirModalModificar}
        modificarMovimiento={
          <EditarMovimientoContainer
            onclickModificar={this.onclickModificar}
            empleados={this.state.empleados}
            movimientos={this.state.movimientos}
            regargarTabla={this.getMovimientos}
            modificarMovimiento={this.state.modificarMovimiento}
          />
        }
        selectModificar={this.selectModificar}
        onclickEliminar={this.onclickEliminar}
        abrirModalEliminar={this.state.abrirModalEliminar}
        eliminarMovimiento={
          <EliminarMovimientoContainer
            onclickEliminar={this.onclickEliminar}
            empleados={this.state.empleados}
            movimientos={this.state.movimientos}
            regargarTabla={this.getMovimientos}
            eliminarMovimiento={this.state.eliminarMovimiento}
          />
        }
        selectEliminar={this.selectEliminar}
      />
    );
  }
}
