import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CITY_STATUS } from '../../../core/data/mock-news';

@Component({
    selector: 'app-status-bar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './status-bar.component.html',
    styleUrl: './status-bar.component.scss'
})
export class StatusBarComponent {
    status = CITY_STATUS;

    get alertText(): string {
        return this.status.alert ? 'Тривога!' : 'Відбій';
    }

    get alertClass(): string {
        return this.status.alert ? 'danger' : 'success';
    }
}
