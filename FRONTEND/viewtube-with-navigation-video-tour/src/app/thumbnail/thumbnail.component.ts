import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { VideoService } from '../services/video.service';
import * as moment from 'moment';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  // /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 },
  //         { title: 'Card 5', cols: 1, rows: 1 },
  //         { title: 'Card 6', cols: 1, rows: 1 },
  //         { title: 'Card 7', cols: 1, rows: 1 },
  //         { title: 'Card 8', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 },
  //       { title: 'Card 5', cols: 1, rows: 1 },
  //       { title: 'Card 6', cols: 1, rows: 1 },
  //       { title: 'Card 7', cols: 1, rows: 1 },
  //       { title: 'Card 8', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  //constructor(private breakpointObserver: BreakpointObserver) {}

  video$: Observable<Array<any>> | undefined;
  breakpointObserver: any;
  constructor(private videoService: VideoService) {
    this.video$ = this.videoService.video$.pipe(map(this.addRelativeTime));
  }

  addRelativeTime(videos: any) {
    return videos.map((video: any) => {
      video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
      video.contentDetails.length = moment.duration(video.contentDetails.duration,"minutes").format();
      return video;
    });
  }
}
