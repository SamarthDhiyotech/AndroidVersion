import { Component, OnInit } from '@angular/core';
import { TrainingModel } from 'src/app/models/TrainingModel';
import { TrainingContentModel } from 'src/app/models/TrainingContentModel';
import { NavController } from '@ionic/angular';
import { TrainingService } from 'src/app/services/training/training.service';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.page.html',
  styleUrls: ['./view-playlist.page.scss'],
})
export class ViewPlaylistPage implements OnInit {

  constructor(private nav : NavController, public ts : TrainingService, private ar: ActivatedRoute, public util: UtilService) { }

  public model : TrainingModel;

  public currentlyPlaying : TrainingContentModel;

  // old code ::
  // ngOnInit() {
  //   this.ar.params.subscribe(params => {
  //     const trainingId = params['trainingId'];
  //     console.log('Training ID from params:', trainingId);
  
  //     const trainings = this.ts.trainings.getValue();
  //     console.log('Available Trainings:', trainings);
  
  //     this.model = trainings.filter(t => t.trainingId === trainingId)[0];
  //     console.log('Filtered Model:', this.model);
  //   });
  // }
  ngOnInit() {
    this.ar.params.subscribe(params => {
      const trainingId = params['trainingId']; // Keep as a string
      console.log('Training ID from params:', trainingId);
  
      const trainings = this.ts.trainings.getValue();
      console.log('Available Trainings:', trainings);
  
      this.model = trainings.find(t => t.trainingId.toString() === trainingId);
  
      if (this.model) {
        console.log('Filtered Model:', this.model);
      } else {
        console.warn('No matching training found for ID:', trainingId);
      }
    });
  }
  
  
  
  

  playme(tc : TrainingContentModel){
    this.currentlyPlaying = tc;
  }
}