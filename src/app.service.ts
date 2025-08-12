import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <h1>Welcome to the NestJS Application!</h1>
    <p>This application is designed to demonstrate the capabilities of NestJS.</p>
    <h2>Features:</h2>
    <ul>
      <li>Modular architecture</li>
      <li>Dependency injection</li>
      <li>Built-in support for TypeScript</li>
      <li>Extensible with various modules</li>
      <li>Robust routing and middleware support</li>
      <li>Easy integration with databases</li>
      <li>Comprehensive testing capabilities</li>
    </ul>
    <h2>Getting Started:</h2>
    <h3>Este backend fue desarrollado a lo largo de los ultimos 2 meses previos a la finalizacion del semestre escolar</h3>
    <p>This is a simple application built with NestJS.</p>
    `;
  }
}
