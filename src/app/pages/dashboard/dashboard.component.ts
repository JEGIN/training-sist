import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userData: any[];

  constructor(private _router: Router) {
    this.userData = []
  }

  ngOnInit() {
    this.getUserData()
  }

  getUserData() {
    this.userData = JSON.parse(localStorage.getItem('userInfo') || '[]')


    this.userData = Object.keys(this.userData).map(key => this.userData[key as keyof typeof this.userData])

    console.log(this.userData)
  }

  title = 'SATHYABAMA';
  desc = "Welcome to Sathyabama Pride";

  countriesList = ["India", "USA", "Japan", "Australia"]

  countriesWithPopulation = [
    {
      "id": 1,
      "name": "India",
      "population": "1.4 billion",
      "gdp": "1.5 Billion Dollar"
    },
    {
      "id": 2,
      "name": "USA",
      "population": "1.8 billion",
      "gdp": "6.5 Billion Dollar"
    },
    {
      "id": 3,
      "name": "Australia",
      "population": "4.4 billion",
      "gdp": "5.5 Billion Dollar"
    },
    {
      "id": 4,
      "name": "UK",
      "population": "5.4 billion",
      "gdp": "9.1 Billion Dollar"
    },
  ]
}
