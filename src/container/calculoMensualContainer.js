import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";
import CalculoMensual from "../components/calculoMensual";
import { calculoMensual } from "../functions/calculoMensual";
import { MovimientosMensuales } from "../routes";

export default class CalculoMensualContainer extends Component {
  constructor() {
    super();
    this.state = {
      movimientos: [],
      loadTable: false,
      calculosMensual: [],
    };
  }

  componentDidMount() {
    this.getMovimientos();
  }

  getMovimientos = () => {
    this.setState({ loadTable: true });

    axios
      .get(MovimientosMensuales)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          console.log(data); 
          this.setState({
            movimientos: data,
            calculosMensual: calculoMensual(data),
          });
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

  render() {
    return (
      <CalculoMensual
        loadTable={this.state.loadTable}
        calculosMes={this.state.calculosMensual}
      />
    );
  }
}
