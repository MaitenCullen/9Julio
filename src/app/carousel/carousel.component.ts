import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'carousel-pause',
	standalone: true,
	imports: [NgbCarouselModule, NgFor, FormsModule],
	templateUrl: './carousel.component.html',
})
export class NgbdCarouselPause {
	images = [
    {
      id:0,
      img:'./assets/img/banner0.png',
	  link: 'nosotros'
    },
    {
      id:1,
      img:"./assets/img/banner01.png",
	  link: 'medicinaLaboral'
    },
    {
      id:2,
      img:"./assets/img/banner02.png",
	  link: 'serviciosMedicos'
    },
    {
      id:3,
      img:"assets/img/banner03.png",
	  link: 'serviciosMedicos'
    }
  ]
	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}