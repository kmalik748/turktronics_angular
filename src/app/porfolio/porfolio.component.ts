import { Component, OnInit } from '@angular/core';
import {ProjectModal} from './project.modal';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  public projects: ProjectModal[] = [];

  constructor() {
    this.projects = [];
  }

  ngOnInit(): void {
    let proj: ProjectModal = new ProjectModal(
      'Smart Energy Monitoring And Distribution System',
      'assets/images/projects/zenit/1.jpg',
      'This project was designed for a IoT based Company. In which server was receiving data from different devices through REST APIs, and visualizing the data in form of charts and different status.\n' +
      'There are two dashboards in this project. One for administrator, and other one is for Client. Client can manage and monitor his IoT devices. Admin have all rights to the client accout.',
      [
        'assets/images/projects/zenit/1.jpg',
        'assets/images/projects/zenit/2.jpg',
        'assets/images/projects/zenit/3.jpg',
        'assets/images/projects/zenit/4.jpg'
      ]
    );
    this.projects.push(proj);
    proj = new ProjectModal(
      'Smart Power Meter',
      'assets/images/projects/powerdiverter/1.jpg',
      'This product is designed to create a Smart Industrial Power Monitor System. In this product, we offered complete solution to manage and control the power flow mechanism in the industrial unit. The current, volts and power parameters are sensed and recorded efficiently. Dashboards are designed to visualize and analyze data accordingly. Security features such as warning alerts and relay cut off mechanism are introduced for greater safety and protection of maintenance staff. Any alarm and harmful activity will be immediately notify to maintenance staff via email service.',
      [
        'assets/images/projects/powerdiverter/1.jpg',
        'assets/images/projects/powerdiverter/2.jpg',
        'assets/images/projects/powerdiverter/3.jpg',
        'assets/images/projects/powerdiverter/4.jpg',
        'assets/images/projects/powerdiverter/5.jpg'
      ]
    );
    this.projects.push(proj);
    proj = new ProjectModal(
      'Smart Access Control System',
      'assets/images/projects/smartgate/1.jpg',
      'Smart Access Control System offer complete solution for building management. It offer verity of options such as smart access control from any part of the world. Notification and data recording of all incoming and outgoing human traffic in the buildings and offices. It create smart schedules and allow users to get access to resources during defined timings only. It handles guest users efficiently.',
      [
        'assets/images/projects/smartgate/1.jpg',
        'assets/images/projects/smartgate/2.jpg',
        'assets/images/projects/smartgate/3.jpg',
        'assets/images/projects/smartgate/4.jpg',
        'assets/images/projects/smartgate/5.jpg',
        'assets/images/projects/smartgate/6.jpg'
      ]
    );
    this.projects.push(proj);
  }
}
