import {Component, OnInit} from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  decks = [
    {
      name: "With Friends Like These...",
      image: "https://drive.google.com/uc?export=view&id=16Hlu4NOaDM7LB293rZ_uG_i_HvNcAu4c"
    },
    {
      name: "Dinobots",
      image: "https://drive.google.com/uc?export=view&id=1L9orFFcv4AX5v9TUnQgGQS68KcqgtClC"
    },
    {
      name: "Mandatory Fun",
      image: "https://cards.scryfall.io/png/front/9/1/91c54ac0-0edc-406f-8a22-f2996f604f36.png?1592710296"
    },
    {
      name: "Claim Your Prize",
      image: "https://cards.scryfall.io/png/front/4/7/4707be12-b255-47ea-a938-f4b03a1e9247.png?1673918317"
    },
    {
      name: "Temptations",
      image: "https://cards.scryfall.io/png/front/1/3/13253f8d-1897-41e8-a904-9e57ac7eff0a.png?1686970071"
    },
    {
      name: "X's and Oh No's",
      image: "https://drive.google.com/uc?export=view&id=1-e6zCVrTMNmlz3jHhVCXbrh72-pEBUhc"
    },
    {
      name: "Victorious In Warriors",
      image: "https://cards.scryfall.io/png/front/2/c/2cb1d1da-6077-46b5-8c63-39882b8016f2.png?1567181270"
    },
  ]

  windowWidth: number = window.innerWidth;
  windowHeight: number = window.innerHeight;

  winlossChartData: ChartConfiguration<'bar'>['data'] | undefined;
  winlossChartLegend =  false;
  winlossChartPlugins = [];
  winlossChartOptions: ChartConfiguration<'bar'>['options'];

  ngOnInit(): void {
    this.winlossChartData = {
      labels: ['This Deck', 'Sigiltenebrae', 'Average'],
      datasets: [
        {
          data: [
            1.3, 0.4, 0.70
          ],
          backgroundColor: [ //300
            '#64b5f6bb',
            '#e57373bb',
            '#81c784bb'
          ],
          borderColor: [ //400
            '#42a5f5bb',
            '#ef5350bb',
            '#66bb6abb'
          ],
          hoverBackgroundColor: [ //500
            '#2196f3bb',
            '#f44336bb',
            '#4caf50bb'
          ],
          hoverBorderColor: [ //600
            '#1e88e5bb',
            '#e53935bb',
            '#43a047bb'
          ],
          borderWidth: 1,
        }
      ]
    };
    this.winlossChartOptions = {
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: 'Win/Loss Ratio',
          color: 'rgb(198, 198, 198)'
        },
        legend: {
          labels: {
            color: 'rgb(198, 198, 198)'
          }
        }
      },
      scales: {
        y: {
          ticks: {
            color: 'rgb(198, 198, 198)'
          }
        },
        x: {
          ticks: {
            color: 'rgb(198, 198, 198)'
          }
        }
      }
    };
  }

}
