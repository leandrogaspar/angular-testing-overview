import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MoralTestComponent } from './moral-test.component';
import { MoralStatusService, Status } from './moral-status.service';

class MoralStatusServiceStub {
    private status = Status.GOOD;

    setMoralStatus(status: Status): void {
        this.status = status;
    }

    getMoralStatus(): Status {
        return this.status;
    }
}

describe('MoralTestComponent', () => {

    let comp: MoralTestComponent;
    let fixture: ComponentFixture<MoralTestComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // We need async because the MoralTestComponent uses an external template
    // and the Angular template compiler is async
    beforeEach(async(() => {
        // TestBed -> creates an Angular testing module
        // https://angular.io/api/core/testing/TestBed
        TestBed.configureTestingModule({
            declarations: [MoralTestComponent], // declare the test component
            // providers: [MoralStatusService], //-> use the real service
            providers: [{ provide: MoralStatusService, useValue: new MoralStatusServiceStub() }]
        })
            // Compile the template and css
            .compileComponents();
    }));

    // Here we can do our synchronous stuff safely
    // The test runner wait for the async beforeEach
    beforeEach(() => {
        // Creates the component and closes the TestBed, no further TestBed config can be made
        // createComponent returns a ComponentFixture https://angular.io/api/core/testing/ComponentFixture
        // The fixture is the component under test with additional properties and methods
        fixture = TestBed.createComponent(MoralTestComponent);

        // Here we get the MoralTestComponent instance
        comp = fixture.componentInstance;
    });

    it('should display the user name on title', () => {
        // Using the css selector get the DebugElement
        // The query function return the first match
        // https://angular.io/api/core/DebugElement
        de = fixture.debugElement.query(By.css('#title'));

        // Get the DOM element from the DebugElement nativeElement
        el = de.nativeElement;

        // Force our change detection
        // You can also set Automatic change detection using the ComponentFixtureAutoDetect
        // provider in the TestBed.
        fixture.detectChanges();
        expect(el.innerText).toBe('Hello ' + comp.userName + '!');
    });

    it('should display username is a good human being! by default', () => {
        de = fixture.debugElement.query(By.css('#humanStatus'));
        el = de.nativeElement;

        fixture.detectChanges();
        expect(el.textContent).toBe(comp.userName + ' is a good human being!');
    });

    it('should call onMouseClick when button is clicked', () => {
        de = fixture.debugElement.query(By.css('#btn'));
        el = de.nativeElement;
        // The jasmine framework will double this function and track calls to it
        spyOn(comp, 'onMouseClick');
        el.dispatchEvent(new Event('click'));

        fixture.detectChanges();
        // toHaveBeenCalled matcher will return true if the spy was called
        // you can also take a loot at toHaveBeenCalledWith
        expect(comp.onMouseClick).toHaveBeenCalled();
    });

    it('should display username is the worse human being that ever lived! when the button is clicked', () => {
        de = fixture.debugElement.query(By.css('#btn'));
        el = de.nativeElement;
        el.dispatchEvent(new Event('click'));

        de = fixture.debugElement.query(By.css('#humanStatus'));
        el = de.nativeElement;
        fixture.detectChanges();
        expect(el.textContent).toBe(comp.userName + ' is the worse human being that ever lived!');
    });

});
